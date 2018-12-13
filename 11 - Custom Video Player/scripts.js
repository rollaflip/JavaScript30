/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const muteButton = player.querySelector('.mute__button')

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  // console.log('Update button!')
  toggle.textContent = icon
}
//skip
function skip(){
  video.currentTime += parseFloat(this.dataset.skip)
}
//sliders
let lastVol = video.volume


function handleRangeUpdate(){
  console.log(this)
  video[this.name] =  this.value
  if(this.name === 'volume') lastVol = video.volume
}
//mute
function muteVolume(){
  if(video.volume > 0) video.volume = 0
  else video.volume =lastVol


  console.log(video.volume)
  // video.
}
/*  hook up event listeners*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

muteButton.addEventListener('click', muteVolume)
