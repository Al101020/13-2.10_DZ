export default function  fixingItCoordinates(valueModalInput) {
  // console.log(valueModalInput);
  const chars2Coord = valueModalInput.split(','); // массив из 2 чисел до запятой и после
  let lat = chars2Coord[0];
  let lon = chars2Coord[1];
    // // исправляем координаты: удаляем лишнее и т.д.
  const latitude = lat.replace(' ', '').replace(/[ ]/g, '').replace(/\[/g, '').replace(/\]/g, '').replace(/−/g, '-');
  const longitude = lon.replace(' ', '').replace(/[ ]/g, '').replace(/\[/g, '').replace(/\]/g, '')
  .replace(/−/g, '-'); 
  // console.log([latitude, longitude]);
  return [latitude, longitude];
}

