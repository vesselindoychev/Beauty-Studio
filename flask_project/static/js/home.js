locationBtn = document.querySelector('.location-dropdown');
locationBtnIcon = document.querySelector('.location-dropdown i');
locationBtnAngleIcon = document.querySelector('.location-dropdown #angle');

locationOpt = document.querySelector('.location-options');

let counter = 0

function onClick(event) {
    if (event.target === locationBtn) {
        counter += 1
        if (counter === 1) {
            locationOpt.removeAttribute('hidden')
            locationBtnIcon.style.color = '#c48d4d';
            locationBtnAngleIcon.removeAttribute('class')
            locationBtnAngleIcon.setAttribute('class', 'fa-solid fa-angle-right')
        } else if (counter === 2) {
            locationOpt.setAttribute('hidden', '')
            locationBtnIcon.style.color = 'black';
            locationBtnAngleIcon.removeAttribute('class')
            locationBtnAngleIcon.setAttribute('class', 'fa-solid fa-angle-down')
            counter = 0
        }
    } else {
        locationOpt.setAttribute('hidden', '')
        counter = 0
        locationBtnAngleIcon.removeAttribute('class')
        locationBtnAngleIcon.setAttribute('class', 'fa-solid fa-angle-down')
        locationBtnIcon.style.color = 'black';
    }
}

document.querySelector('.google-map').addEventListener('click', onClick)

