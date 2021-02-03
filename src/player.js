function audioPlay(name) {
  const audio = new Audio();
  audio.src = `./audio/${name}.mp3`;
  audio.play();
}

function audioPlayCorrect() {
  const audio = new Audio();
  audio.src = './audio/correct.mp3';
  audio.play();
}

function audioPlayError() {
  const audio = new Audio();
  audio.src = './audio/error.mp3';
  audio.play();
}

function audioPlayFail() {
  const audio = new Audio();
  audio.src = './audio/failure.mp3';
  audio.play();
}

function audioPlayWin() {
  const audio = new Audio();
  audio.src = './audio/success.mp3';
  audio.play();
}

export {
  audioPlay, audioPlayCorrect, audioPlayError, audioPlayFail, audioPlayWin,
};
