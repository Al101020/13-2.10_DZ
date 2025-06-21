import './timelineCreatingPosts.css';
import modal from '../modal/modal';

const divCreatingPosts = document.querySelector('#divCreatingPosts');
const divBodyTimeline = document.querySelector('#bodyTimeline');

function addZero(num) { // функция - нули добавляет в дате и время
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}

function timeDate(date) { // формируем Время и Дату
  return ` ${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())} ${addZero(date.getHours())}.${addZero(date.getMinutes())}`;
}

// Добавляем текст
const inputText = document.createElement('input');
inputText.id = 'inputText';
inputText.type = 'text';
inputText.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (inputText.value === '') {
      return;
    }

    const divPost = document.createElement('div');
    divPost.classList.add('divPost');

    const postDateTime = document.createElement('div');
    postDateTime.classList.add('postDateTime');
    const date = new Date();
    postDateTime.textContent = timeDate(date);

    const postData = document.createElement('div');
    postData.classList.add('postData');
    postData.textContent = inputText.value;

    const geoPosition = document.createElement('div');
    geoPosition.classList.add('geoPosition');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          const { latitude, longitude } = data.coords;
          geoPosition.textContent = `[${latitude}, ${longitude}]`;
        },
        () => {
          modal(); // открываем модальное окно
        },
        { enableHighAccuracy: true }, // более точное значение данных о местоположении
      );
    }

    divPost.appendChild(postDateTime);

    divPost.appendChild(postData);

    divPost.appendChild(geoPosition);

    // divBodyTimeline.appendChild(divPost); // добавляет пост в конец элемента(divBodyTimeline)
    divBodyTimeline.prepend(divPost); // добавляет пост в начало элемента(divBodyTimeline)

    inputText.value = '';
  }
});

divCreatingPosts.appendChild(inputText);

// Добавляем Аудио
const btninputAudio = document.createElement('div');
btninputAudio.id = 'btninputAudio';
// btninputAudio.textContent = 'Au';
btninputAudio.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клик Mic');
});

divCreatingPosts.appendChild(btninputAudio);

// Добавляем Видео
const btninputVideo = document.createElement('div');
btninputVideo.id = 'btninputVideo';
// btninputVideo.textContent = 'Vid';
btninputVideo.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клик Video');
});

divCreatingPosts.appendChild(btninputVideo);
