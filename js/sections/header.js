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
    event.stopPropagation();
    headerSearch.classList.remove('active');
    headerPhone.classList.remove('active');
});

const menuLinksPrimary = document.querySelectorAll(".menu-primary .menu-link");
const menuLinksSecondary = document.querySelectorAll(".menu-secondary .menu-link");
const visirLeft = document.querySelector(".menu-visir-left");
const visirRight = document.querySelector(".menu-visir-right");

const baseTop = 0; // Исходное положение

// Для левого визира (menu-primary)
menuLinksPrimary.forEach((link, index) => {
    link.addEventListener("mouseenter", function () {
        // Вычисляем смещение от исходного положения с шагом 30px
        const offset = index * 39.4; // от -60px до +90px
        visirLeft.style.top = `${baseTop + offset}px`;
    });

    link.addEventListener("mouseleave", function () {
        visirLeft.style.top = `${baseTop}px`;
    });
});

// Для правого визира (menu-secondary)
menuLinksSecondary.forEach((link, index) => {
    link.addEventListener("mouseenter", function () {
        // Вычисляем смещение от исходного положения с шагом 30px
        const offset = index * 39.4; // от -60px до +90px
        visirRight.style.top = `${baseTop + offset}px`;
    });

    link.addEventListener("mouseleave", function () {
        visirRight.style.top = `${baseTop}px`;
    });
});