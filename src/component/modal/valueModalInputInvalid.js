import fixingItCoordinates from './fixingItCoordinates';

let chars;

function commaSearch() {
  if (chars.indexOf(',') !== -1) {
    return true;
  }
  return false;
}

function ifCommaMoreThanTwo() {
  if (chars.indexOf(',') !== -1 && chars.lastIndexOf(',') !== chars.indexOf(',')) {
    return true;
  }
  return false;
}

const regexLat = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
const regexLon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|-?180(?:\. 0{1,18})?)$/;

function checklatlon(lat, lon) {
  const validLat = regexLat.test(lat); // console.log(validLat);
  const validLon = regexLon.test(lon); // console.log(validLon);
  return validLat && validLon;
}

export default function valueModalInputValid() {
  const valueModalInput = document.querySelector('#inputModal').value;
  const infoModal = document.querySelector('#infoModal');
  chars = valueModalInput.split(''); // теперь строка - массив символов

  if (valueModalInput === '') {
    infoModal.textContent = 'введите координаты широты и долготы через запятую';
  } else if (!commaSearch()) { // если в массиве нет запятой
    infoModal.textContent = 'нет запятой';
  } else if (commaSearch()) { // если в массиве есть запятая
    if (ifCommaMoreThanTwo()) {
      infoModal.textContent = 'запятая не одна';
      return;
    }
    infoModal.textContent = 'есть запятая'; // console.log(valueModalInput);
    // // исправляем координаты: удаляем лишнее и т.д.
    const latLon = fixingItCoordinates(valueModalInput);
    // проверяем если это координаты
    console.log(checklatlon(latLon[0], latLon[1]));

    // обязательно вернуть latitude, longitude
    if (checklatlon(latLon[0], latLon[1]) === true) {
      return [latLon[0], latLon[1]];
    }
    infoModal.textContent = 'не правильно введена широта и(или) долгота';
  }
}
