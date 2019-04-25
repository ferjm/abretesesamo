if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const open = document.querySelector('button');
open.addEventListener('click', function() {
  open.classList.add('pressed');
  fetch('https://ferjm.ngrok.io/open', {
    method: 'post',
    mode: 'cors'
  }).then(function() {
    open.classList.remove('pressed');
  }).catch(function() {
    open.classList.remove('pressed');
  });
});

