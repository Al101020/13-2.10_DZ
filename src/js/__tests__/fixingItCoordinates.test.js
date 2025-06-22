// import valueModalInputInvalid from '../../component/modal/valueModalInputInvalid';
import fixingItCoordinates from '../../component/modal/fixingItCoordinates';

test('test geoposition - 1', () => {
  const geo = ['51.50851', '-0.12572'];
  const geoText = `${geo[0]}, ${geo[1]}`;
  const result = fixingItCoordinates('51.50851, −0.12572');
  const resultText = `${result[0]}, ${result[1]}`;
  expect(resultText).toBe(geoText);
});

test('test geoposition - 2', () => {
  const geo = ['51.50851', '-0.12572'];
  const geoText = `${geo[0]}, ${geo[1]}`;
  const result = fixingItCoordinates('51.50851,−0.12572');
  const resultText = `${result[0]}, ${result[1]}`;
  expect(resultText).toBe(geoText);
});

test('test geoposition - 3', () => {
  const geo = ['51.50851', '-0.12572'];
  const geoText = `${geo[0]}, ${geo[1]}`;
  const result = fixingItCoordinates('[51.50851, −0.12572]');
  const resultText = `${result[0]}, ${result[1]}`;
  expect(resultText).toBe(geoText);
});
