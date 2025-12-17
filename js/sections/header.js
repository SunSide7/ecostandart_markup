const headerBtn = document.querySelector('.menu-header-button');
const header = document.querySelector('.header');

const headerSearch = document.querySelector('.search');
const headerSearchClose = document.querySelector('.search-close');
const headerPhone = document.querySelector('.phone-header');

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('active');
    header.classList.toggle('active');
});

headerSearch.addEventListener('click', () => {
    headerSearch.classList.add('active');
    headerPhone.classList.add('active');
});

headerSearchClose.addEventListener('click', () => {
    headerSearch.classList.remove('active');
    headerPhone.classList.remove('active');
});