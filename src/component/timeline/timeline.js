import './timeline.css';

const body = document.querySelector('body');

const divTimeline = document.createElement('div');
divTimeline.setAttribute('id', 'divTimeline');
body.appendChild(divTimeline);

const titleTimeline = document.createElement('div');
titleTimeline.setAttribute('id', 'titleTimeline');
titleTimeline.textContent = 'Лента постов';
divTimeline.appendChild(titleTimeline);

const bodyTimeline = document.createElement('div');
bodyTimeline.setAttribute('id', 'bodyTimeline');
divTimeline.appendChild(bodyTimeline);

const divCreatingPosts = document.createElement('div');
divCreatingPosts.setAttribute('id', 'divCreatingPosts');
divTimeline.appendChild(divCreatingPosts);
