const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('item-list');
const firstLine = document.getElementById('first-line');
const secondLine = document.getElementById('second-line');


const firstPagItem = document.getElementById('first-pag-item');
const itemWidth = 300
const padding = 20

let coounter = 1

function stopEvent() {

}

prev.addEventListener('click', () => {
    coounter -= 1
    if (coounter <= 1) {
        coounter = 1
        prev.setAttribute('disabled', '')
        next.removeAttribute('disabled')
        firstLine.style.backgroundColor = 'pink';
        secondLine.style.backgroundColor = 'gray'
        firstPagItem.textContent = '1'
    }
    list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click', () => {
    coounter += 1
    if (coounter >= 2) {
        coounter = 2
        prev.removeAttribute('disabled')
        next.setAttribute('disabled', '')
        firstLine.style.backgroundColor = 'gray';
        secondLine.style.backgroundColor = 'pink'
        firstPagItem.textContent = '2'


    }
    list.scrollLeft += itemWidth + padding
})
