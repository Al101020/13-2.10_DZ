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
    infoModal.textContent = 'есть запятая';
    const chars2Coord = valueModalInput.split(','); // массив из 2 чисел до запятой и после
    let latitude = chars2Coord[0].replace(' ', '');
    let longitude = chars2Coord[1];
    // удаляем лишнее
    latitude = latitude.replace(/[ ]/g, '').replace(/\[/g, '').replace(/\]/g, '').replace(/−/g, '-');
    longitude = longitude.replace(/[ ]/g, '').replace(/\[/g, '').replace(/\]/g, '')
      .replace(/−/g, '-'); // console.log(checklatlon(latitude, longitude));
    if (checklatlon(latitude, longitude) === true) {
      return [latitude, longitude];
    }
    infoModal.textContent = 'не правильно введена широта и(или) долгота';
  }
}
