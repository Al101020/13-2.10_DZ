import './timelineCreatingPosts.css';
// import geolocation from './geolocation';
// import {sayHello} from "./message.js"; // пример из интернета

const divCreatingPosts = document.querySelector('#divCreatingPosts');
const divBodyTimeline = document.querySelector('#bodyTimeline');

function addZero(num) {
  // функция - нули добавляет в дате и время
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}

function timeDate(date) {
  // формируем Время и Дату
  return ` ${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())} ${addZero(date.getHours())}.${addZero(date.getMinutes())}`;
}

// function timeDate(date) { // было
//   // формируем Время и Дату
//   return `${addZero(date.getHours())}.${addZero(date.getMinutes())} ${addZero(date.getDate())}
// .${addZero(
//     date.getMonth() + 1,
//   )}.${addZero(date.getFullYear())}`;
// }

// function createPost() {
//   const divPost = document.createElement('div');
//   divPost.classList.add('divPost');

//   const postDateTime = document.createElement('div');
//   postDateTime.classList.add('postDateTime');
//   divPost.appendChild(postDateTime);

//   const postData = document.createElement('div');
//   postData.classList.add('postData');
//   divPost.appendChild(postData);

//   const geoPosition = document.createElement('div');
//   geoPosition.classList.add('geoPosition');
//   divPost.appendChild(geoPosition);

//   divBodyTimeline.appendChild(divPost);
// };

// Добавляем текст
const intutText = document.createElement('input');
intutText.id = 'intutText';
intutText.type = 'text';
intutText.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const divPost = document.createElement('div');
    divPost.classList.add('divPost');

    const postDateTime = document.createElement('div');
    postDateTime.classList.add('postDateTime');
    const date = new Date();
    postDateTime.textContent = timeDate(date);
    divPost.appendChild(postDateTime);

    const postData = document.createElement('div');
    postData.classList.add('postData');
    postData.textContent = intutText.value;
    divPost.appendChild(postData);

    const geoPosition = document.createElement('div');
    geoPosition.classList.add('geoPosition');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          const { latitude, longitude } = data.coords;
          geoPosition.textContent = `[${latitude}, ${longitude}]`;
        },
        () => {
          console.log('нужно выводить модальное окно');
        },
        { enableHighAccuracy: true },
      );
    }

    divPost.appendChild(geoPosition);

    divBodyTimeline.appendChild(divPost);

    intutText.value = '';
  }
});
divCreatingPosts.appendChild(intutText);

// Добавляем Видео
const btninputVideo = document.createElement('div');
btninputVideo.id = 'btninputVideo';
// btninputVideo.textContent = 'Vid';
btninputVideo.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клик');
});

divCreatingPosts.appendChild(btninputVideo);

// Добавляем Аудио
const btninputAudio = document.createElement('div');
btninputAudio.id = 'btninputAudio';
// btninputAudio.textContent = 'Au';
btninputAudio.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клик');
});

divCreatingPosts.appendChild(btninputAudio);
