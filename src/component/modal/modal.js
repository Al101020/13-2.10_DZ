import './modal.css';

export default function modal() {
  const body = document.querySelector('body');

  const fullScreen = document.createElement('div');
  fullScreen.setAttribute('id', 'full-screen');
  body.appendChild(fullScreen);

  const divModal = document.createElement('div');
  divModal.setAttribute('id', 'div-modal');
  const modal_ = document.createElement('div');
  modal_.classList.add('modal');

  const text1Modal = document.createElement('p');
  text1Modal.classList.add('p-modal');
  text1Modal.textContent = 'что-то пошло не так';
  modal_.appendChild(text1Modal);

  const text2Modal = document.createElement('p');
  text2Modal.classList.add('p-modal');
  text2Modal.textContent = 'К сожелению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную.';
  modal_.appendChild(text2Modal);

  const text3Modal = document.createElement('p');
  text3Modal.classList.add('p-modal');
  text3Modal.textContent = 'Широта и долгота через запятую (поле не может быть пустым)';
  modal_.appendChild(text3Modal);

  const divInputModal = document.createElement('div');
  divInputModal.setAttribute('id', 'divInputModal');
  const inputModal = document.createElement('input');
  inputModal.setAttribute('id', 'inputModal');
  inputModal.setAttribute('type', 'text');
  divInputModal.appendChild(inputModal);
  modal_.appendChild(divInputModal);

  const buttons = document.createElement('div');
  buttons.setAttribute('id', 'buttonsModal');

  // нужно добавить поле инфо
  const infoModal = document.createElement('div');
  infoModal.setAttribute('id', 'infoModal');
  buttons.appendChild(infoModal);

  const buttonCancel = document.createElement('button');
  buttonCancel.setAttribute('id', 'buttonCancelModal');
  buttonCancel.textContent = 'Отмена';
  buttonCancel.addEventListener('click', () => {
    const modalFullScreen = body.querySelector('#full-screen');
    modalFullScreen.remove();// удаляем модальное после нажатия отмена
    const modalDiv = body.querySelector('#div-modal');
    modalDiv.remove();// удаляем модальное после нажатия отмена
    const bodyTimeline = body.querySelector('#bodyTimeline');
    const text = bodyTimeline.lastChild.children[1].textContent;
    // console.log(text);// теперь нужно найти текстовое поле и вернуть текст поста(value)
    const inputText = body.querySelector('#inputText');
    inputText.value = text; // вернули текст
    bodyTimeline.removeChild(bodyTimeline.lastChild);// удаляем последний пост после нажатия отмена
    // console.log('Click кнопка Отмена');
  });
  buttons.appendChild(buttonCancel);

  const buttonOk = document.createElement('button');
  buttonOk.setAttribute('id', 'buttonOkModal');
  buttonOk.textContent = 'Ок';
  buttonOk.addEventListener('click', () => {
    const valueModalInput = body.querySelector('#inputModal').value;
    if (valueModalInput === '') { // infoModal
      // const infoModal = body.querySelector('#infoModal');
      infoModal.textContent = 'поле пустое';
      return;
    }
    console.log(valueModalInput);

    // console.log('Click кнопка Ок');
  });
  buttons.appendChild(buttonOk);

  modal_.appendChild(buttons);

  divModal.appendChild(modal_);
  body.appendChild(divModal);

  return 'выводим модальное окно';
}
