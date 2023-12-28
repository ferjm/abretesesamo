if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js');
    });
}

function onclick(event) {
    event.preventDefault();
    event.target.classList.add('pressed');
    console.log(event.target.id);

    // Check for last confirmation time
    const lastConfirmationTime = localStorage.getItem('lastConfirmationTime');
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    const currentTime = new Date().getTime();

    let confirmationCode = null;

    if (!lastConfirmationTime || currentTime - lastConfirmationTime > oneWeek) {
        // Ask for confirmation code
        confirmationCode = prompt('Please enter the confirmation code:');
        if (confirmationCode) {
            localStorage.setItem('lastConfirmationTime', currentTime);
        } else {
            event.target.classList.remove('pressed');
            return;
        }
    }

    let id;
    switch (event.target.id) {
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
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ confirmationCode: confirmationCode }),
    })
        .then(function () {
            event.target.classList.remove('pressed');
        })
        .catch(function () {
            event.target.classList.remove('pressed');
        });
}

['exterior', 'interior', 'both'].forEach((id) => {
    document.getElementById(id).addEventListener('click', this.onclick);
});
