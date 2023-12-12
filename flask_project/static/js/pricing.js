const allPricingMainBtns = document.querySelectorAll('.pricing-main-btn');
const femaleHairBtn = allPricingMainBtns[0];
const dying = allPricingMainBtns[1];
const hairTreatment = allPricingMainBtns[2];
const manicure = allPricingMainBtns[3];
const maleHair = allPricingMainBtns[4];

const pricingBody = document.querySelector('.pricing-body');

const allNavFootBtns = document.querySelectorAll('.main-btn, .dropdown a, .not-dropdown a, .icons a, .contacts a, .footer-services a');

for (let navFootBtn of allNavFootBtns) {
    navFootBtn.addEventListener('click', deleteLocalStorage);
}

function pricingBtnClicked(event) {

    let procedureAndPriceDiv = document.querySelector('.pricing-procedures');

    if (event.target === dying) {
        localStorage.setItem('id', '2')
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv);
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Боядисване</p>
        <div class="procedure-and-price-text">
            <p>Hair cut + draw blow</p>
            <p>30lv</p>
        </div>`;
    } else if (event.target === femaleHairBtn) {
        localStorage.setItem('id', '1')
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv);
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Подстригване / Стилиране / Прически</p>
        <div class="procedure-and-price-text">
            <p>Haircut + blow dry</p>
            <p>100lv</p>
        </div>
        <div class="procedure-and-price-text">
            <p>Bangs</p>
            <p>300lv</p>
        </div>
        <div class="procedure-and-price-text">
            <p>Hairstyle</p>
            <p>20lv</p>
        </div>
        <div class="procedure-and-price-text">
            <p>Afro Curls</p>
            <p>500lv</p>
        </div>
        <div class="procedure-and-price-text">
            <p>Styling</p>
            <p>100lv</p>
        </div><div class="procedure-and-price-text">
            <p>Hair extension</p>
            <p>100lv</p>
        </div>
        <div class="procedure-and-price-text">
            <p>Hair extension removal</p>
            <p>100lv</p>
        </div>
`
    } else if (event.target === hairTreatment) {
        localStorage.setItem('id', '3')
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv)
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Третиране на коса</p>
        <div class="procedure-and-price-text">
            <p>care 18 +</p>
            <p>60lv+</p>
        </div>`
    } else if (event.target === manicure) {
        localStorage.setItem('id', '4')
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv)
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Маникюр</p>
        <div class="procedure-and-price-text">
            <p>Manicure gel polish removing</p>
        </div>`
    } else if (event.target === maleHair) {
        localStorage.setItem('id', '5')
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv)
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Haircuts / Styling</p>
        <div class="procedure-and-price-text">
            <p>Haircut</p>
            <p>100lv</p>
        </div>`
    }
    // localStorage.clear()
}

function changeBtnsAttrsWhenNotClicked() {
    allPricingMainBtns.forEach((el) => {
        el.style.background = 'white';
        el.style.color = 'black';
    })
}

function changeBtnAttrWhenClicked(el) {
    el.style.background = 'black';
    el.style.color = 'white';
}

function removeChildren(parent) {
    const childrenLength = parent.children.length
    for (let i=0; i < childrenLength; i++) {
            parent.removeChild(parent.firstElementChild)
    }
}


pricingBody.addEventListener('click', pricingBtnClicked);

function checkStorage() {
    if (localStorage['id'] === '1') {
        console.log();
    } else if (localStorage['id'] === '2') {
        dying.click();
    } else if (localStorage['id'] === '3') {
        hairTreatment.click();
    } else if (localStorage['id'] === '4') {
        manicure.click();
    } else if (localStorage['id'] === '5') {
        maleHair.click();
    }
}

function deleteLocalStorage() {
    localStorage.clear();
}

checkStorage()