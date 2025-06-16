import './timelineCreatingPosts.css';

const divCreatingPosts = document.querySelector('#divCreatingPosts');
// console.log(divCreatingPosts);
const intutText = document.createElement('input');
intutText.id = 'intutText';
intutText.type = 'text';

divCreatingPosts.appendChild(intutText);

const btninputVideo = document.createElement('div');
btninputVideo.id = 'btninputVideo';
// btninputVideo.textContent = 'Vid';

divCreatingPosts.appendChild(btninputVideo);

const btninputAudio = document.createElement('div');
btninputAudio.id = 'btninputAudio';
// btninputAudio.textContent = 'Au';

divCreatingPosts.appendChild(btninputAudio);
