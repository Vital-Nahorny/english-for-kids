import create from './create';
import Card from './Card';
import cards from './cards';
import {
  audioPlay, audioPlayCorrect, audioPlayError, audioPlayFail, audioPlayWin,
} from './player';

const menuBurger = document.querySelector('.burger__list');
const mainPage = document.querySelector('.main-page');
const categoryPage = document.querySelector('.category-page');
const switcher = document.querySelector('#myswitcher');
const scoreDiv = document.querySelector('.score');
const btnsContainer = document.querySelector('.btns-container');

export default class App {
  constructor() {
    this.isPlay = false;
    this.gameIsOn = false;
    this.categoryCards = [];
    this.playWords = [];
    this.currentCategory = null;
    this.menuItems = null;
    this.score = {
      correct: 0,
      error: 0,
    };
    this.statisticArr = null;
    this.currSortColl = null;
    this.isSortUp = true;
    this.columnNames = ['Categories', 'Words', 'Translation', 'Trained', 'Correct', 'Incorrect', '%'];
  }

  init() {
    this.menuItems = document.querySelectorAll('.burger__item');
    menuBurger.addEventListener('click', this.openMenuItem);
    mainPage.addEventListener('click', this.openMenuCard);
    categoryPage.addEventListener('click', this.rotateCard);
    categoryPage.addEventListener('click', this.cardEventHandler);
    btnsContainer.addEventListener('click', this.btnEventHandler);
    switcher.addEventListener('change', () => {
      this.gameMode();
    });
    return this;
  }

  generateMainPage = () => {
    this.clearPage();
    if (this.gameIsOn) this.endGame();
    cards[0].forEach((item, i) => {
      const mainCard = create('div', 'main-card',
        create('div', null, item), mainPage, ['id', `${i}`]);
      mainCard.style.backgroundImage = `url(img/${i}.jpg)`;
    });
    this.menuItemStatus();
  }

  generateCategoryPage(index) {
    this.clearPage();
    if (this.gameIsOn) this.endGame();
    const cardsList = cards[index + 1].sort(() => Math.random() - 0.5);
    cardsList.forEach((cardObj) => {
      const card = new Card(cardObj);
      this.categoryCards.push(card);
      this.playWords.push(card.word);
      if (this.isPlay) {
        card.div.classList.toggle('card-cover');
      }
      categoryPage.append(card.container);
    });
    if (this.isPlay) {
      create('button', 'btn-start', null, btnsContainer, ['type', 'button']);
    }
    this.menuItemStatus();
  }

  generateStatisticPage() {
    this.clearPage();
    const statBtns = create('div', 'stat-buttons', null, mainPage);
    const btnReset = create('button', 'btn-reset', 'Reset', statBtns, ['type', 'button']);
    const btnRepeatWords = create('button', 'btn-repeat-words', 'Repeat difficult words', statBtns, ['type', 'button']);
    btnRepeatWords.addEventListener('click', () => this.generateRepeatPage());
    btnReset.addEventListener('click', () => {
      if (localStorage.statistic) localStorage.removeItem('statistic');
      this.loadStatistic();
      this.generateStatisticPage();
    });

    const tableWrapper = create('div', 'table-wrapper', null, mainPage);
    const table = create('table', 'table-stat', null, tableWrapper, ['id', 'table']);
    const tableHead = create('thead', null, null, table);
    const thRow = create('tr', null, null, tableHead);
    this.columnNames.forEach((key) => {
      create('th', null, key, thRow);
    });
    const tableBody = create('tbody', null, null, table);
    this.statisticArr.forEach((obj) => {
      const arr = Object.values(obj);
      arr.splice(3, 2);
      const tbodyRow = create('tr', null, null, tableBody);
      arr.forEach((key) => {
        create('td', null, String(key), tbodyRow);
      });
    });
    tableHead.addEventListener('click', (e) => this.sortRows(e));
    this.menuItemStatus();
  }

  generateRepeatPage() {
    let arrayForRepeat = this.statisticArr.filter((obj) => (obj.percent > 0 && obj.percent < 100));
    arrayForRepeat.sort((objA, objB) => objA.percent - objB.percent);
    arrayForRepeat = arrayForRepeat.slice(0, 8);
    this.clearPage();
    if (arrayForRepeat.length === 0) {
      create('div', 'message', 'No cards for repeat.', categoryPage);
      setTimeout(this.generateMainPage, 2000);
    } else {
      arrayForRepeat.forEach((cardObj) => {
        const card = new Card(cardObj);
        this.categoryCards.push(card);
        this.playWords.push(card.word);
        if (this.isPlay) {
          card.div.classList.toggle('card-cover');
        }
        categoryPage.append(card.container);
      });
    } if (this.isPlay) {
      create('button', 'btn-start', null, btnsContainer, ['type', 'button']);
    }
  }

  sortRows(e) {
    if (e.stopPropagation) e.stopPropagation();
    const currThCell = e.target.closest('th');
    const thCells = document.querySelectorAll('th');
    const tdIndex = currThCell.cellIndex;
    const table = document.querySelector('#table');
    const sortedRows = Array.from(table.rows).slice(1);
    if (this.currSortColl === tdIndex) this.isSortUp = !this.isSortUp;
    thCells.forEach((cell) => {
      cell.classList.remove('sort-up', 'sort-down');
    });

    function sortUp() {
      if (tdIndex >= 3) {
        sortedRows.sort((rowA, rowB) => (
          rowB.cells[tdIndex].innerHTML - rowA.cells[tdIndex].innerHTML
        ));
      } else {
        sortedRows.sort((rowA, rowB) => (
          rowA.cells[tdIndex].innerHTML > rowB.cells[tdIndex].innerHTML ? 1 : -1
        ));
      }
      currThCell.classList.add('sort-down');
    }

    function sortDown() {
      if (tdIndex >= 3) {
        sortedRows.sort((rowA, rowB) => (
          rowA.cells[tdIndex].innerHTML - rowB.cells[tdIndex].innerHTML
        ));
      } else {
        sortedRows.sort((rowA, rowB) => (
          rowA.cells[tdIndex].innerHTML < rowB.cells[tdIndex].innerHTML ? 1 : -1
        ));
      }
      currThCell.classList.add('sort-up');
    }

    if (this.isSortUp) {
      sortUp();
    } else {
      sortDown();
    }

    this.currSortColl = tdIndex;
    table.tBodies[0].append(...sortedRows);
  }

  openMenuCard = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const cardMain = e.target.closest('.main-card');
    if (!cardMain) return;
    this.currentCategory = cardMain.firstElementChild.textContent;
    const index = +cardMain.id;
    this.clearPage();
    this.generateCategoryPage(index);
  }

  openMenuItem = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const burgerItem = e.target.closest('.burger__item');
    if (!burgerItem) return;
    this.currentCategory = burgerItem.textContent;
    if (burgerItem.textContent === 'Main menu') {
      this.generateMainPage();
    } else if (burgerItem.textContent === 'Statistics') {
      this.generateStatisticPage();
    } else {
      const index = cards[0].indexOf(burgerItem.textContent);
      this.generateCategoryPage(index);
    }
  }

  rotateCard = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const buttonCard = e.target.closest('.btn-rotate');
    if (!buttonCard) return;
    const card = e.target.closest('.card');
    const word = buttonCard.previousSibling.textContent;
    const cardStat = this.statisticArr.find((elem) => elem.word === word);
    cardStat.trained += 1;
    card.classList.add('rotated');
    card.addEventListener('mouseleave', () => {
      card.classList.remove('rotated');
    });
  }

  cardEventHandler = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.target.classList.value !== 'front') return;
    const frontCard = e.target;
    const word = frontCard.firstElementChild.textContent;
    if (!this.isPlay) {
      audioPlay(word);
      const cardStat = this.statisticArr.find((elem) => elem.word === word);
      cardStat.trained += 1;
    } else {
      const currentCard = frontCard.closest('.card');
      const cardStat = this.statisticArr.find((elem) => elem.word === this.playWords[0]);
      if (!currentCard.classList.contains('card-checked') && this.gameIsOn) {
        if (word === this.playWords[0]) {
          this.score.correct += 1;
          cardStat.correct += 1;
          const totalAnswers = (cardStat.correct + cardStat.incorrect);
          cardStat.percent = Math.floor((cardStat.correct * 100) / totalAnswers);
          scoreDiv.prepend(create('div', 'star-correct'));
          currentCard.classList.toggle('card-checked');
          this.playWords.shift(this.playWords[0]);
          audioPlayCorrect();
          if (this.playWords.length === 0) {
            setTimeout(this.generateMainPage, 3000);
            if (this.score.error === 0) {
              this.endGame();
              audioPlayWin();
              create('div', 'win', null, categoryPage);
            } else {
              const errors = this.score.error;
              this.endGame();
              audioPlayFail();
              create('div', 'failure', `You made ${errors} errors.`, categoryPage);
            }
          } else {
            setTimeout(audioPlay, 500, this.playWords[0]);
          }
        } else {
          this.score.error += 1;
          cardStat.incorrect += 1;
          const totalAnswers = (cardStat.correct + cardStat.incorrect);
          cardStat.percent = Math.floor((cardStat.correct * 100) / totalAnswers);
          scoreDiv.prepend(create('div', 'star-wrong'));
          audioPlayError();
        }
      }
    }
    localStorage.statistic = JSON.stringify(this.statisticArr);
  }

  gameMode() {
    this.isPlay = !this.isPlay;
    if (this.categoryCards.length > 0) {
      this.categoryCards.forEach((card) => {
        card.div.classList.toggle('card-cover');
      });
      if (this.isPlay) {
        create('button', 'btn-start', null, btnsContainer, ['type', 'button']);
      } else {
        btnsContainer.innerHTML = '';
        scoreDiv.innerHTML = '';
      } if (this.gameIsOn) {
        this.endGame();
        this.generateMainPage();
      }
    }
  }

  gameStart() {
    if (this.categoryCards.length === 0) return;
    this.gameIsOn = !this.gameIsOn;
    btnsContainer.innerHTML = '';
    create('button', 'btn-repeat', null, btnsContainer, ['type', 'button']);
    this.playWords.sort(() => Math.random() - 0.5);
    audioPlay(this.playWords[0]);
  }

  endGame = () => {
    this.gameIsOn = !this.gameIsOn;
    this.score.correct = 0;
    this.score.error = 0;
    this.playWords = [];
    this.categoryCards = [];
    scoreDiv.innerHTML = '';
    categoryPage.innerHTML = '';
    btnsContainer.innerHTML = '';
  }

  loadStatistic() {
    if (localStorage.statistic) {
      this.statisticArr = JSON.parse(localStorage.statistic);
    } else {
      this.statisticArr = [].concat(...cards.slice(1));
      this.statisticArr.forEach((dataCard) => {
        const obj = dataCard;
        obj.trained = 0;
        obj.correct = 0;
        obj.incorrect = 0;
        obj.percent = 0;
      });
    }
  }

  btnEventHandler = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.target.classList.value === 'btn-start') {
      this.gameStart();
    } if (e.target.classList.value === 'btn-repeat') {
      audioPlay(this.playWords[0]);
    }
  }

  clearPage() {
    this.categoryCards = [];
    this.playWords = [];
    mainPage.innerHTML = '';
    categoryPage.innerHTML = '';
    btnsContainer.innerHTML = '';
  }

  menuItemStatus() {
    this.menuItems.forEach((item) => {
      if (item.textContent === this.currentCategory) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}
