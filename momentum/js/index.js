import playList from "./playList.js";

const audio = new Audio();
let isPlay = false;
let playNum = 0;

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  playListContainer.append(li);
  li.textContent = playList[i].title;
  li.dataset.play = '►';
}

const playItem = document.querySelectorAll('.play-item');

for (let i = 0; i < playItem.length; i++) {
  playItem[i].addEventListener('click', function() {
    playItem[playNum].classList.remove('item-active');
    if (playNum === i) {
      playNum = i;
      if (playItem[playNum].dataset.play === '►') {
        isPlay = false;
        playAudio();
        playItem[playNum].classList.add('item-active');
        playItem[playNum].dataset.play = '❙❙';
      } else {
        isPlay = true;
        playAudio();
        playItem[playNum].classList.add('item-active');
        playItem[playNum].dataset.play = '►';
      }
    } else {
      playItem[playNum].dataset.play = '►';
      playNum = i;
      isPlay = false;
      playAudio();
      playItem[playNum].classList.add('item-active');
      playItem[playNum].dataset.play = '❙❙';
      audio.currentTime = 0;
    }
  })
}

function playAudio() {
  playActive.textContent = playList[playNum].title;
  audio.src = playList[playNum].src;
  audio.currentTime = progressBar.value;
  playItem[playNum].classList.add('item-active');
  playItem[playNum].dataset.play = '►';
  if (!isPlay) {
    isPlay = true;
    audio.play();
    play.classList.add('pause');
    playItem[playNum].dataset.play = '❙❙';
  } else {
    isPlay = false;
    audio.pause();
    play.classList.remove('pause');
    playItem[playNum].dataset.play = '►';
  }
}

play.addEventListener('click', playAudio);

function playNext() {
  playItem[playNum].classList.remove('item-active');
  playItem[playNum].dataset.play = '►';
  if (playNum != playList.length - 1) {
    playNum += 1;
  } else {
    playNum = 0;
  }
  isPlay = false;
  playAudio();
  audio.currentTime = 0;
  playItem[playNum].classList.add('item-active');
  playItem[playNum].dataset.play = '❙❙';
}

function playPrev() {
  playItem[playNum].classList.remove('item-active');
  playItem[playNum].dataset.play = '►';
  if (playNum != 0) {
    playNum -= 1;
  } else {
    playNum = playList.length - 1;
  }
  isPlay = false;
  playAudio();
  audio.currentTime = 0;
  playItem[playNum].classList.add('item-active');
  playItem[playNum].dataset.play = '❙❙';
}

playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);

function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};

durationTime.innerHTML = '0:00';

function updateProgressValue() {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
  currentTimes.innerHTML = (formatTime(Math.floor(audio.currentTime)));
  if (audio.currentTime > 0) {
    durationTime.innerHTML = (formatTime(Math.floor(audio.duration)));
  }
  if (audio.currentTime === audio.duration) {
    playNext();
    audio.currentTime = 0;
  }
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  audio.currentTime = progressBar.value;
};

progressBar.addEventListener('input', changeProgressBar);

const soundVolume = document.querySelector('.sound-volume');
const soundButton = document.querySelector('.sound-button');

soundVolume.addEventListener('input', function() {
  if (soundVolume.value === soundVolume.min) {
    soundButton.classList.add('mute-button');
  } else if (soundVolume.value > soundVolume.min) {
    soundButton.classList.remove('mute-button');
  }
  audio.volume = soundVolume.value;
});

soundButton.addEventListener('click', function() {
  if (!soundButton.classList.contains('mute-button') && soundVolume.value >= 0) {
    soundButton.classList.add('mute-button');
    audio.volume = 0;
  } else {
    soundButton.classList.remove('mute-button');
    audio.volume = soundVolume.value;
  }
});

soundButton.addEventListener('mouseover', function() {
  soundVolume.style.display = 'block';
  soundVolume.style.animation = 'sound-volume-on 2s';
  soundVolume.addEventListener('mouseout', function() {
    soundVolume.style.display = 'none';
});
});



