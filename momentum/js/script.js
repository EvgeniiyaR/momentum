const timeTag = document.querySelector('.time');
const dateTag = document.querySelector('.date');
const greetingTag = document.querySelector('.greeting');
const nameTag = document.querySelector('.name');
const bodyTag = document.querySelector('.body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const play = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const progressBar = document.querySelector('.progress-bar');
const currentTimes = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');
const weatherError = document.querySelector('.weather-error');
const bar = document.querySelector('.bar');
const playActive = document.querySelector('.play-active');
const settingMenu = document.querySelector('.setting-menu');
const settingButton = document.querySelector('.setting-button');
const settingLanguage = document.querySelectorAll('.setting-language');
const settingChangeLang = document.querySelector('.setting-change-lang');
const settingLangEn = document.querySelector('.setting-lang-en');
const settingLangRu = document.querySelector('.setting-lang-ru');
const settingApi = document.querySelectorAll('.setting-api');
const settingChangeApi = document.querySelector('.setting-change-api');
const settingApiTag = document.querySelectorAll('.setting-api-tag');
const settingChangeSetCheckbox = document.querySelectorAll('.setting-change-set-checkbox');
const greetingContainer = document.querySelector('.greeting-container');
const containerQuote = document.querySelector('.container-quote');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const todolist = document.querySelector('.todolist');
const none = document.querySelector('.none');
const settingChangeSetTime = document.querySelector('.setting-change-set-time');
const settingChangeSetDate = document.querySelector('.setting-change-set-date');
const settingChangeSetGreeting = document.querySelector('.setting-change-set-greeting');
const settingChangeSetQuote = document.querySelector('.setting-change-set-quote');
const settingChangeSetWeather = document.querySelector('.setting-change-set-weather');
const settingChangeSetAudio = document.querySelector('.setting-change-set-audio');
const settingChangeSetTodolist = document.querySelector('.setting-change-set-todolist');
const settingChangeSet = document.querySelector('.setting-change-set');
const todolistInputText = document.querySelector('.todolist-input-text');
const todolistButton = document.querySelector('.todolist-button');
const todolistTaskList = document.querySelector('.todolist-task-list');
const todolistButtonClear = document.querySelector('.todolist-button-clear');


function showDate(language='en-EN') {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Europe/Minsk'};
  const currentDate = date.toLocaleDateString(language, options);
  dateTag.textContent = currentDate;
}

function showTime(language='en-EN') {
  const date = new Date();
  if (language === 'en-EN') {
    let currentTime = date.toLocaleTimeString('en-US');
    timeTag.textContent = currentTime;
  } else {
    let currentTime = date.toLocaleTimeString();
    timeTag.textContent = currentTime;
  }
  showDate(language);
  showGreeting(language);
  setTimeout(showTime, 1000, language);
}

function showGreeting(language='en-EN') {
  let timeOfDay = getTimeOfDay(language);
  if (language === 'en-EN') {
    greetingTag.textContent = `Good ${timeOfDay}`;
  } else if (language === 'ru-RU') {
    greetingTag.textContent = `${timeOfDay}`;
  }
}

function getTimeOfDay(language='en-EN') {
  const date = new Date();
  const hours = date.getHours();
  const part = Math.floor(hours / 6);
  const partDict = {
    'ru-RU': {
      0: 'Доброй ночи',
      1: 'Доброе утро',
      2: 'Добрый день',
      3: 'Добрый вечер',
    },
    'en-EN': {
      0: 'night',
      1: 'morning',
      2: 'afternoon',
      3: 'evening',
    }}
  return partDict[language][part];
}

function getRandomNum(min=1, max=20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
let randomNum = getRandomNum();

function setBg(bgNum) {
  let timeOfDay = getTimeOfDay();
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/EvgeniiyaR/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.addEventListener('load', function() {
    bodyTag.style.backgroundImage = 'url(' + `https://raw.githubusercontent.com/EvgeniiyaR/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg` + ')';
  });
}

function setLocalStorage() {
  localStorage.setItem('name', nameTag.value);
  localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    nameTag.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

window.addEventListener('load', getLocalStorage);

if (localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en-EN');
}

if (localStorage.getItem('checkedLang') === null) {
  localStorage.setItem('checkedLang', 0);
}

let indexLang = localStorage.getItem('checkedLang');
settingLanguage[indexLang].checked = true;
let language = localStorage.getItem('language');

if (localStorage.getItem('api') === null) {
  localStorage.setItem('api', 'GitHub');
}

if (localStorage.getItem('checkedApi') === null) {
  localStorage.setItem('checkedApi', 0);
}

let indexApi = localStorage.getItem('checkedApi');
settingApi[indexApi].checked = true;
let api = localStorage.getItem('api');

showTime(language);

function getSlideNext() {
  if (randomNum != 20) {
    randomNum += 1;
  } else {
    randomNum = 1;
  }
  if (localStorage.getItem('checkedApi') === '0') {
    setBg(String(randomNum).padStart(2, '0'));
  } else if (localStorage.getItem('checkedApi') === '1') {
    getLinkToImageUnsplash();
  } else if (localStorage.getItem('checkedApi') === '2') {
    getLinkToImageFlickr();
  }
}

function getSlidePrev() {
  if (randomNum != 1) {
    randomNum -= 1;
  } else {
    randomNum = 20;
  }
  if (localStorage.getItem('checkedApi') === '0') {
    setBg(String(randomNum).padStart(2, '0'));
  } else if (localStorage.getItem('checkedApi') === '1') {
    getLinkToImageUnsplash();
  } else if (localStorage.getItem('checkedApi') === '2') {
    getLinkToImageFlickr();
  }
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

const langMap = {
  'en-EN' : {
    'lang' : 'en',
    'errorMessage' : 'Error! city not found for ',
    'wind' : {
      'message' : 'Wind speed: ',
      'unit' : ' m/s',
    },
    'humidityMessage' : 'Humidity: ',
    'changeLang' : 'Language: ' ,
    'changeLangEn' : 'English' ,
    'changeLangRu' : 'Russian' ,
    'settingChangeApi' : 'Source images: ',
    'nameTag' : '[Enter your name]',
    'timeTag' : 'Time',
    'dateTag' : 'Date',
    'greetingContainer' : 'Greeting',
    'containerQuote' : 'Quote',
    'weather' : 'Weather',
    'player' : 'AudioPlayer',
    'todolist' : 'ToDoList',
    'settingChangeSet' : 'ON/OFF: ',
    'todolistInputText' : 'Your task',
    'todolistButtonClear' : 'Clear',
  },
  'ru-RU' : {
    'lang' : 'ru',
    'errorMessage' : 'Ошибка! Город не найден ',
    'wind' : {
      'message' : 'Скорость ветра: ',
      'unit' : ' м/с',
    },
    'humidityMessage' : 'Влажность: ',
    'changeLang' : 'Язык: ' ,
    'changeLangEn' : 'Английский' ,
    'changeLangRu' : 'Русский' ,
    'settingChangeApi' : 'Источник изображений: ',
    'nameTag' : '[Введите Ваше имя]',
    'timeTag' : 'Время',
    'dateTag' : 'Дата',
    'greetingContainer' : 'Приветствие',
    'containerQuote' : 'Цитата',
    'weather' : 'Погода',
    'player' : 'Аудиоплеер',
    'todolist' : 'Список задач',
    'settingChangeSet' : 'ВКЛ/ВЫКЛ: ',
    'todolistInputText' : 'Введите задачу',
    'todolistButtonClear' : 'Очистить',
  }
}

if (localStorage.getItem('city') === null) {
  city.value = 'Minsk';
} else if (localStorage.getItem('city') === 'Minsk' || localStorage.getItem('city') === 'Минск') {
  if (language === 'ru-RU') {
    city.value = 'Минск';
    localStorage.setItem('city', 'Минск');
  } else if (language === 'en-EN') {
    city.value = 'Minsk';
    localStorage.setItem('city', 'Minsk');
  }
} else {
  city.value = localStorage.getItem('city');
}

async function getWeather(language='en-EN') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${langMap[language]["lang"]}&appid=40059db0465bc059c555bbd70f670f15&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data["message"] === 'city not found') {
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherError.textContent = langMap[language]['errorMessage'] + `${city.value}!`;
  } else {
    weatherError.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = langMap[language]['wind']['message'] + Math.round(data.wind.speed) + langMap[language]['wind']['unit'];
    humidity.textContent = langMap[language]['humidityMessage'] + `${data.main.humidity}%`;
  }
}

getWeather(language);

city.addEventListener('change', function() {
  getWeather(language);
});

let numQuotes = 0;

async function getQuotes(language='en-EN') {
  const quotes = 'assets/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  let getRandomNumQuotes = getRandomNum(0, data[language].length - 1);
  if (numQuotes != getRandomNumQuotes) {
    quote.textContent = data[language][getRandomNumQuotes]['text'];
    author.textContent = data[language][getRandomNumQuotes]['author'];
    numQuotes = getRandomNumQuotes;
  } else {
    return getQuotes(language);
  }
}

getQuotes(language);

changeQuote.addEventListener('click', function() {
  getQuotes(language);
});

settingButton.addEventListener('click', function() {
  if (settingMenu.style.display === '') {
    settingMenu.style.display = 'block';
    settingButton.style.animation = 'setting-button 3s';
  } else {
    settingMenu.style.display = '';
    settingButton.style.animation = '';
  }
})

for (let i = 0; i < settingLanguage.length; i++) {
  settingLanguage[i].addEventListener('input', function() {
    if (settingLanguage[i].checked) {
      localStorage.setItem('language', settingLanguage[i].value);
      localStorage.setItem('checkedLang', i);
      location.reload();
    }
  })
}

function settingChangeLanguage(language='en-EN') {
  settingChangeLang.textContent = langMap[language]['changeLang'];
  settingLangEn.textContent = langMap[language]['changeLangEn'];
  settingLangRu.textContent = langMap[language]['changeLangRu'];
  settingChangeApi.textContent = langMap[language]['settingChangeApi'];
  nameTag.placeholder = langMap[language]['nameTag'];
  settingChangeSetTime.textContent = langMap[language]['timeTag'];
  settingChangeSetDate.textContent = langMap[language]['dateTag'];
  settingChangeSetGreeting.textContent = langMap[language]['greetingContainer'];
  settingChangeSetQuote.textContent = langMap[language]['containerQuote'];
  settingChangeSetWeather.textContent = langMap[language]['weather'];
  settingChangeSetAudio.textContent = langMap[language]['player'];
  settingChangeSetTodolist.textContent = langMap[language]['todolist'];
  settingChangeSet.textContent = langMap[language]['settingChangeSet'];
  todolistInputText.placeholder = langMap[language]['todolistInputText'];
  todolistButtonClear.textContent = langMap[language]['todolistButtonClear'];
}

settingChangeLanguage(language);

async function getLinkToImageUnsplash() {
  let timeOfDay = localStorage.getItem('apiTag');
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=SZU06Hc4c-3eHI6fJmosU16tZJhMCnyfL77xnw_ULmE`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data['urls']['regular'];
  img.addEventListener('load', function() {
    bodyTag.style.backgroundImage = 'url(' + data['urls']['regular'] + ')';
  });
}

async function getLinkToImageFlickr() {
  let timeOfDay = localStorage.getItem('apiTag');
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c91b71c03e590de352540b0b95f9a348&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const randomNum = getRandomNum(0, data['photos']['photo'].length - 1);
  const img = new Image();
  img.src = data['photos']['photo'][randomNum]['url_l'];
  img.addEventListener('load', function() {
    bodyTag.style.backgroundImage = 'url(' + data['photos']['photo'][randomNum]['url_l'] + ')';
  });
}

for (let i = 0; i < settingApi.length; i++) {
  settingApi[i].addEventListener('input', function() {
    if (settingApi[i].checked) {
      localStorage.setItem('api', settingApi[i].value);
      localStorage.setItem('checkedApi', i);
      location.reload();
    }
  })
}

if (localStorage.getItem('checkedApi') === '0') {
  setBg(String(randomNum).padStart(2, '0'));
  settingApiTag[0].disabled = true;
  settingApiTag[1].disabled = true;
} else if (localStorage.getItem('checkedApi') === '1') {
  getLinkToImageUnsplash();
  settingApiTag[1].disabled = true;
  settingApiTag[0].value = localStorage.getItem('apiTag');
} else if (localStorage.getItem('checkedApi') === '2') {
  getLinkToImageFlickr();
  settingApiTag[0].disabled = true;
  settingApiTag[1].value = localStorage.getItem('apiTag');
}

if (localStorage.getItem('apiTag') === null) {
  localStorage.setItem('apiTag', getTimeOfDay());
}

for (let i = 0; i < settingApiTag.length; i++) {
  settingApiTag[i].addEventListener('input', function() {
    localStorage.setItem('apiTag', settingApiTag[i].value);
    settingApiTag[i].addEventListener('blur', function(){
      location.reload();
    })
  })
}

for (let i = 0; i < settingChangeSetCheckbox.length; i++) {

  if (localStorage.getItem('checked' + settingChangeSetCheckbox[i].value) === null) {
    localStorage.setItem('checked' + settingChangeSetCheckbox[i].value, 'true');
  }

  if (localStorage.getItem('checked' + settingChangeSetCheckbox[i].value) === 'false') {
    settingChangeSetCheckbox[i].checked = false;
  } else if (localStorage.getItem('checked' + settingChangeSetCheckbox[i].value) === 'true'){
    settingChangeSetCheckbox[i].checked = true;
  }

  if (('display' + settingChangeSetCheckbox[i].value) === 'displayTime') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      timeTag.style.display = 'block';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      timeTag.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayDate') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      dateTag.style.display = 'block';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      dateTag.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayGreeting') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      greetingContainer.style.display = 'flex';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      greetingContainer.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayQuote') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      containerQuote.style.display = 'flex';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      containerQuote.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayWeather') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      weather.style.display = 'block';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      weather.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayAudioPlayer') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      player.style.display = 'block';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      player.style.display = 'none';
    }
  }
  if (('display' + settingChangeSetCheckbox[i].value) === 'displayToDoList') {
    if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'block') {
      todolist.style.display = 'flex';
    } else if (localStorage.getItem('display' + settingChangeSetCheckbox[i].value) === 'none') {
      todolist.style.display = 'none';
    }
  }

  settingChangeSetCheckbox[i].addEventListener('input', function() {
    if (settingChangeSetCheckbox[i].checked === true) {

      localStorage.setItem('checked' + settingChangeSetCheckbox[i].value, 'true');

      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedTime') {
        timeTag.style.animation = 'block 1s';
        timeTag.style.display = 'block';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedDate') {
        dateTag.style.animation = 'block 1s';
        dateTag.style.display = 'block';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedGreeting') {
        greetingContainer.style.animation = 'block 1s';
        greetingContainer.style.display = 'flex';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedQuote') {
        containerQuote.style.animation = 'block 1s';
        containerQuote.style.display = 'flex';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedWeather') {
        weather.style.animation = 'block 1s';
        weather.style.display = 'block';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedAudioPlayer') {
        player.style.animation = 'block 1s';
        player.style.display = 'block';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedToDoList') {
        todolist.style.animation = 'block 1s';
        todolist.style.display = 'flex';
        localStorage.setItem('display' + settingChangeSetCheckbox[i].value, 'block');
      }

    } else if (settingChangeSetCheckbox[i].checked === false) {

      localStorage.setItem('checked' + settingChangeSetCheckbox[i].value, 'false');

      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedTime') {
        timeTag.style.animation = 'none 1s';
        timeTag.style.display = 'none'

        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedDate') {
        dateTag.style.animation = 'none 1s';
        dateTag.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedGreeting') {
        greetingContainer.style.animation = 'none 1s';
        greetingContainer.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedQuote') {
        containerQuote.style.animation = 'none 1s';
        containerQuote.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedWeather') {
        weather.style.animation = 'none 1s';
        weather.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedAudioPlayer') {
        player.style.animation = 'none 1s';
        player.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
      if (('checked' + settingChangeSetCheckbox[i].value) === 'checkedToDoList') {
        todolist.style.animation = 'none 1s';
        todolist.style.display = 'none';
        localStorage.setItem('display'  + settingChangeSetCheckbox[i].value, 'none');
      }
    }
  })
}

let listTask;

if (localStorage.getItem('listTask') === null) {
  localStorage.setItem('listTask', JSON.stringify([]));
  listTask = [];
} else {
  listTask = JSON.parse(localStorage.getItem('listTask'));
}

todolistButton.addEventListener('click', function() {
  let todolistTaskLi = document.createElement('li');
  todolistTaskLi.setAttribute('class', 'todotask-el');

  let todolistTaskName = document.createElement('label');
  todolistTaskName.setAttribute('class', 'todolist-task-name-label');

  let radioLabel = document.createElement('label');
  radioLabel.setAttribute('class', 'radio-label');

  let radioSpan = document.createElement('span');
  radioSpan.setAttribute('class', 'radio-span');

  let todolistTaskCheckbox = document.createElement('input');
  todolistTaskCheckbox.setAttribute('type', 'checkbox');
  todolistTaskCheckbox.setAttribute('class', 'todolist-input-check');
  todolistTaskCheckbox.setAttribute('name', 'todolist');

  if (todolistInputText.value !== '') {
    todolistTaskName.textContent = todolistInputText.value;
    todolistTaskList.append(todolistTaskLi);
    todolistTaskLi.append(todolistTaskName);

    radioLabel.append(todolistTaskCheckbox);
    radioLabel.append(radioSpan);

    todolistTaskLi.append(radioLabel);

    listTask.push([todolistInputText.value, false]);
  }
  localStorage.setItem('listTask', JSON.stringify(listTask));
  todolistInputText.value = '';
})


for (let i = 0; i < listTask.length; i++) {
  let todolistTaskLi = document.createElement('li');
  todolistTaskLi.setAttribute('class', 'todotask-el');

  let todolistTaskName = document.createElement('label');
  todolistTaskName.setAttribute('class', 'todolist-task-name-label');

  let radioLabel = document.createElement('label');
  radioLabel.setAttribute('class', 'radio-label');

  let radioSpan = document.createElement('span');
  radioSpan.setAttribute('class', 'radio-span');

  let todolistTaskCheckbox = document.createElement('input');
  todolistTaskCheckbox.setAttribute('type', 'checkbox');
  todolistTaskCheckbox.setAttribute('class', 'todolist-input-check');
  todolistTaskCheckbox.setAttribute('name', 'todolist');

  todolistTaskName.textContent = listTask[i][0];
  todolistTaskList.append(todolistTaskLi);
  todolistTaskLi.append(todolistTaskName);

  radioLabel.append(todolistTaskCheckbox);
  radioLabel.append(radioSpan);

  todolistTaskLi.append(radioLabel);
}


setInterval( function() {
  let todolistInputCheck = document.querySelectorAll('.todolist-input-check');
  let todolistTaskNameLabel = document.querySelectorAll('.todolist-task-name-label');
  for (let i = 0; i < todolistInputCheck.length; i++) {
    if (listTask.length != 0) {
        console.log(listTask);
      if (listTask[i][1] === false) {
        todolistInputCheck[i].checked = false;
        todolistTaskNameLabel[i].style.textDecoration = 'none';
        todolistTaskNameLabel[i].style.opacity = '1';
      } else if (listTask[i][1] === true){
        todolistInputCheck[i].checked = true;
        todolistTaskNameLabel[i].style.textDecoration = 'line-through';
        todolistTaskNameLabel[i].style.opacity = '.8';
      }
      todolistInputCheck[i].addEventListener('input', function() {
        if (todolistTaskNameLabel[i].textContent === listTask[i][0]) {
          listTask[i][1] = todolistInputCheck[i].checked;
          localStorage.setItem('listTask', JSON.stringify(listTask));
        }
      })} else {
        location.reload();
      }
  }

  if (todolistInputCheck.length > 0) {
    todolistButtonClear.style.display = 'block';
    todolistButtonClear.addEventListener('click', function() {
      localStorage.setItem('listTask', JSON.stringify([]));
      listTask = [];
    })
  } else {
    todolistButtonClear.style.display = 'none';
  }

}, 20);


