import i18Obj from './translate.js';
const btns = document.body.querySelectorAll('.portfolio-btn');
const images = document.body.querySelectorAll('.portfolio-image');
const btnsParent = document.body.querySelector('.portfolio-btns');
const lngsParent = document.body.querySelector('.lang');
const themeBtn = document.body.querySelector('.theme-button');
const burgerBtn = document.body.querySelector('.burger');
const nav = document.body.querySelector('.nav');

function openMenu() {
    nav.classList.add('nav-menu_active');
}

burgerBtn.addEventListener('click', openMenu);


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         images.forEach((image, index) => {
//             image.src= `assets/img/winter/${index+1}.jpg`
//         })
//     })
// }
// )

function changeImage (event){
    if (event.target.classList.contains ('portfolio-btn')){
        images.forEach((image, index) => {
            image.src= `assets/img/${event.target.dataset.season}/${index+1}.jpg`
    })
}
}

function changeActiveForBtns() {
    btns.forEach (btn => {
        btn.addEventListener('click', () => {
            btns.forEach (button=>{
                button.classList.remove('active');
            })
            btn.classList.add('active');
        })
    })
}

changeActiveForBtns();

btnsParent.addEventListener('click', changeImage)

function getTranslate(lang) {
    const dataAtributes = document.querySelectorAll('[data-i18n]');
    let keys = i18Obj [lang]
    
    dataAtributes.forEach (data =>{
        let key = data.dataset.i18n;
        
        for(let i in keys) {
            if(i==key){
                data.textContent=keys[key];
            }
        }
    })   
}

function getLanguage(event) {
    if(event.target.classList.contains('lang-item')) {
        getTranslate(event.target.textContent)
    }
}

lngsParent.addEventListener('click', getLanguage)

function getTheme() {
    const sections = document.body.querySelectorAll( '.skills, .portfolio,.video,.price');
    const sectionTitle = document.body.querySelectorAll('.section-title');
    const sectionHeader = document.body.querySelectorAll('.section-header');


    sections.forEach(section => section.classList.toggle('light-theme'));
    sectionTitle.forEach(title => title.classList.toggle('light-theme'));
    sectionHeader.forEach(header => header.classList.toggle('light-theme'));
}

themeBtn.addEventListener('click', getTheme)

