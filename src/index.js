import burgerMenuInit from './burger';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  burgerMenuInit();
  const game = new App();
  game.init().generateMainPage();
  game.loadStatistic();
});
