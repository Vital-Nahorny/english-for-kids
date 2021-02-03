import create from './create';

export default class Card {
  constructor({
    word,
    translation,
    image,
    audioSrc,
  }) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
    this.frontHeader = create('div', 'card-header', `${this.word}`);
    this.backHeader = create('div', 'card-header', `${this.translation}`);
    this.btnRotate = create('div', 'btn-rotate');
    this.btnRotate.style.backgroundImage = 'url(img/rotate.svg)';
    this.front = create('div', 'front', [this.frontHeader, this.btnRotate]);
    this.front.style.backgroundImage = `url(${image})`;
    this.back = create('div', 'back', this.backHeader);
    this.back.style.backgroundImage = `url(${image})`;
    this.div = create('div', 'card', [this.front, this.back]);
    this.container = create('div', 'card-container', this.div);
  }
}
