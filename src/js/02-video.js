import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';
const time = Number(localStorage.getItem(TIME_KEY));

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(time);
