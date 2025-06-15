import './timelineCreatingPosts.css';

const divCreatingPosts = document.querySelector('#divCreatingPosts');

const intutText = document.createElement('input');
intutText.id = 'intutText';
// divTextCollapse.id = 'divTextCollapse';
// inputModal.classList.add('input-text-modal');
intutText.type = 'text';

divCreatingPosts.appendChild(intutText);

console.log(divCreatingPosts);
