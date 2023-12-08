const allPricingMainBtns = document.querySelectorAll('.pricing-main-btn');
const femaleHairBtn = allPricingMainBtns[0];
const dying = allPricingMainBtns[1];
const hairTreatment = allPricingMainBtns[2];
const manicure = allPricingMainBtns[3];
const maleHair = allPricingMainBtns[4];

const pricingBody = document.querySelector('.pricing-body');


function pricingBtnClicked(event) {
    let procedureAndPriceDiv = document.querySelector('.pricing-procedures');
    const fragment = document.createDocumentFragment()

    if (event.target === dying) {
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
        changeBtnsAttrsWhenNotClicked();
        changeBtnAttrWhenClicked(event.target);
        removeChildren(procedureAndPriceDiv)
        procedureAndPriceDiv.innerHTML += `
        <p id="procedure-name">Маникюр</p>
        <div class="procedure-and-price-text">
            <p>Manicure gel polish removing</p>
        </div>`
    } else if (event.target === maleHair) {
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
