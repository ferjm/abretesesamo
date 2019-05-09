if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js');
  });
}

function onclick(event) {
  event.target.classList.add('pressed');
  console.log(event.target.id);
  let id;
  switch(event.target.id) {
    case 'exterior':
      id = 18;
      break;
    case 'interior':
      id = 23;
      break;
    case 'both':
      id = 'all';
      break;
  }
  const url = `https://ferjm.ngrok.io/open/${id}`;
  fetch(url, {
    method: 'post',
    mode: 'cors'
  }).then(function() {
    event.target.classList.remove('pressed');
  }).catch(function() {
    event.target.classList.remove('pressed');
  });
  event.preventDefault();
}

['exterior', 'interior', 'both'].forEach(id => {
  document.getElementById(id).addEventListener('click', this.onclick);
});
