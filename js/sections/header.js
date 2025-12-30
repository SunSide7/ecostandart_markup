const html = document.querySelector('.html');

const headerBtn = document.querySelector('.menu-header-button');
const header = document.querySelector('.header');
const menuMobile = document.querySelector('.menu-header.mobile');
const searchResultMobile = document.querySelector('.search-result-mobile');
const headerContactButton = document.querySelector('.header-contact-button');

const searchMobileInput = document.querySelector('.search-mobile-input');
const searchMobileClose = document.querySelector('.search-close.mobile');

const headerSearch = document.querySelector('.search');
const headerSearchClose = document.querySelector('.search-close');
const searchResult = document.querySelector('.search-result');
const headerPhone = document.querySelector('.phone-header');

const headerSities = document.querySelector('.header-sities');
const menuMobileCity = document.querySelector('.menu-mobile-city');

const menuHeaderHorizontal = document.querySelector('.menu-header.horizontal');

let isSearchOpened = false;

headerSities.addEventListener('click', () => {
    headerSities.classList.toggle('active');
});

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('active');
    header.classList.toggle('active');
    html.classList.toggle('no-scroll');
});

headerSearch.addEventListener('click', () => {
    headerSearch.classList.add('active');
    searchResult.classList.add('active');
    headerPhone.style.display = "none";
    headerContactButton.style.display = "none";
    header.classList.add("prevent-active");
    isSearchOpened = true;
    menuHeaderHorizontal.style.opacity = '0';
    searchResult.style.opacity = '1';
});

headerSearchClose.addEventListener('click', (event) => {
    event.stopPropagation();
    headerSearch.classList.remove('active');
    searchResult.classList.remove('active');
    headerPhone.style.display = "flex";
    headerContactButton.style.display = "flex";
    header.classList.remove("prevent-active");
    isSearchOpened = false;
    menuHeaderHorizontal.style.opacity = '1';
    searchResult.style.opacity = '0';
});

searchMobileInput.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    menuMobileCity.classList.remove('active');
    searchResultMobile.classList.add('active');
});

searchMobileClose.addEventListener('click', (event) => {
    event.stopPropagation();
    menuMobile.classList.add('active');
    menuMobileCity.classList.add('active');
    searchResultMobile.classList.remove('active');
});

// Или более компактный вариант с медиа-запросом в JS
const mediaQuery = window.matchMedia('(min-width: 1280px)');

let isMouseOverHeader = false;
let scrollTimeout;

header.addEventListener('mouseenter', function() {
    if (mediaQuery.matches) {
        isMouseOverHeader = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (isMouseOverHeader) {
                header.classList.add("active");
            }
        }, 50);
    }
});

header.addEventListener('mouseleave', function() {
    if (mediaQuery.matches) {
        if(!isSearchOpened){
            isMouseOverHeader = false;
            header.classList.remove("active");
        }
        headerSities.classList.remove("active");
    }
});

// Отслеживаем скролл
window.addEventListener('scroll', function() {
    if (mediaQuery.matches) {
        // Немедленно закрываем при начале скролла
        header.classList.remove("active")
        searchResult.style.opacity = '0';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (isMouseOverHeader) {
                header.classList.add("active");
            }
            if(isSearchOpened){
                header.classList.add("active");
            }
            searchResult.style.opacity = '1';
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Данные для меню
    const menuData = {
        'О компании': {
            level2: [
                { text: 'Новости', link: '#' },
                { text: 'Лидеры и команда', link: '#' },
                { text: 'Социальная и благотворительная деятельность', link: '#' },
                { text: 'Рекомендательные письма', link: '#' },
                { text: 'Разрешительная документация', link: '#' },
                { text: 'Карьера', link: '#' }
            ],
            level3: {
                'Новости': [
                    { text: 'Новости компании', link: '#' },
                    { text: 'Пресс-релизы', link: '#' },
                    { text: 'СМИ о нас', link: '#' }
                ],
                'Лидеры и команда': [
                    { text: 'Руководство', link: '#' },
                    { text: 'Эксперты', link: '#' },
                    { text: 'Истории сотрудников', link: '#' }
                ],
                'Социальная и благотворительная деятельность': [
                    { text: 'Проекты', link: '#' },
                    { text: 'Отчеты', link: '#' },
                    { text: 'Партнеры', link: '#' }
                ],
                'Рекомендательные письма': [
                    { text: 'Клиенты', link: '#' },
                    { text: 'Отзывы', link: '#' },
                    { text: 'Проекты', link: '#' }
                ],
                'Разрешительная документация': [
                    { text: 'Лицензии', link: '#' },
                    { text: 'Сертификаты', link: '#' },
                    { text: 'Аккредитации', link: '#' }
                ],
                'Карьера': [
                    { text: 'Вакансии', link: '#' },
                    { text: 'Стажировки', link: '#' },
                    { text: 'Корпоративная культура', link: '#' }
                ]
            }
        },
        'Услуги': {
            level2: [
                { text: 'Экспертиза и мониторинг', link: '#' },
                { text: 'Охрана труда и СОУТ', link: '#' },
                { text: 'Экоконсалтинг', link: '#' },
                { text: 'Экосертификация', link: '#' },
                { text: 'Инженерные Изыскания', link: '#' },
                { text: 'Энергоаудит', link: '#' },
                { text: 'Учебный центр', link: '#' },
                { text: 'Охрана труда и экология', link: '#' }
            ],
            level3: {
                'Экспертиза и мониторинг': [
                    { text: 'Экологическая экспертиза', link: '#' },
                    { text: 'Лабораторные исследования', link: '#' },
                    { text: 'Мониторинг окружающей среды', link: '#' }
                ],
                'Охрана труда и СОУТ': [
                    { text: 'Специальная оценка условий труда', link: '#' },
                    { text: 'Аудит охраны труда', link: '#' },
                    { text: 'Разработка документации', link: '#' }
                ],
                'Экоконсалтинг': [
                    { text: 'Экологическое проектирование', link: '#' },
                    { text: 'Экологический аудит', link: '#' },
                    { text: 'Консультации', link: '#' }
                ],
                'Экосертификация': [
                    { text: 'Экологическая экспертиза', link: '#' },
                    { text: 'Лабораторные исследования', link: '#' },
                    { text: 'Мониторинг окружающей среды', link: '#' }
                ],
                'Инженерные Изыскания': [
                    { text: 'Специальная оценка условий труда', link: '#' },
                    { text: 'Аудит охраны труда', link: '#' },
                    { text: 'Разработка документации', link: '#' }
                ],
                'Энергоаудит': [
                    { text: 'Экологическое проектирование', link: '#' },
                    { text: 'Экологический аудит', link: '#' },
                    { text: 'Консультации', link: '#' }
                ],
                'Учебный центр': [
                    { text: 'Экологическое проектирование', link: '#' },
                    { text: 'Экологический аудит', link: '#' },
                    { text: 'Консультации', link: '#' }
                ],
                'Охрана труда и экология': [
                    { text: 'Экологическое проектирование', link: '#' },
                    { text: 'Экологический аудит', link: '#' },
                    { text: 'Консультации', link: '#' }
                ]
            }
        },
        'Наш опыт': {
            level2: [
                { text: 'Проекты', link: '#' }
            ],
            level3: {
                'Проекты': [
                    { text: 'Крупные проекты', link: '#' },
                    { text: 'Государственные заказы', link: '#' },
                    { text: 'Частные клиенты', link: '#' }
                ]
            }
        },
        'Клиентам': {
            level2: [
                { text: 'Спецпредложения', link: '#' }
            ],
            level3: {
                'Спецпредложения': [
                    { text: 'Акции', link: '#' },
                    { text: 'Скидки', link: '#' },
                    { text: 'Пакетные предложения', link: '#' }
                ]
            }
        },
        'Мероприятия': {
            level2: [
                { text: 'Спецпредложения', link: '#' }
            ],
            level3: {
                'Спецпредложения': [
                    { text: 'Акции', link: '#' },
                    { text: 'Скидки', link: '#' },
                    { text: 'Пакетные предложения', link: '#' }
                ]
            }
        },
        'Медиа': {
            level2: [
                { text: 'Спецпредложения', link: '#' }
            ],
            level3: {
                'Спецпредложения': [
                    { text: 'Акции', link: '#' },
                    { text: 'Скидки', link: '#' },
                    { text: 'Пакетные предложения', link: '#' }
                ]
            }
        },
        'Контакты': {
            level2: [
                { text: 'Спецпредложения', link: '#' }
            ],
            level3: {
                'Спецпредложения': [
                    { text: 'Акции', link: '#' },
                    { text: 'Скидки', link: '#' },
                    { text: 'Пакетные предложения', link: '#' }
                ]
            }
        }
    };

    function createMenu(data) {
        let menuHTML = '';

        for (const [key, value] of Object.entries(data)) {
            const isToggler = true;

            menuHTML += `
        <div class="menu-item">
            <a href="#">${key}</a>`;

            // Добавляем уровень 2
            if (value.level2 && value.level2.length > 0) {
                value.level2.forEach(item => {
                    menuHTML += `
                <div class="menu-item">
                    <a href="${item.link}">${item.text}</a>`;

                    // Добавляем уровень 3, если есть
                    if (value.level3 && value.level3[item.text]) {

                        // Итерируем по элементам третьего уровня
                        value.level3[item.text].forEach(subItem => {
                            menuHTML += `
                        <div class="menu-item">
                            <a href="${subItem.link}">${subItem.text}</a>
                        </div>`;
                        });

                        menuHTML += `</div>`;
                    }
                });
            }

            menuHTML += `</div>`;
        }

        return menuHTML;
    }

    // Функция для инициализации обработчиков кликов
    function initMenuHandlers() {
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            // Ищем ближайшую ссылку внутри menu-item
            const link = item.querySelector('a');
            if (!link) return;

            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Проверяем, есть ли вложенные уровни меню
                const level2 = item.querySelector('.menu-level2');
                const level3 = item.querySelector('.menu-level3');
                const hasChildren = level2 || level3;

                if (hasChildren) {
                    e.stopPropagation();

                    // Переключаем класс active
                    item.classList.toggle('active');

                    // Закрываем другие открытые меню того же уровня
                    const parentItem = item.closest('.menu-item');
                    const siblings = parentItem ?
                        parentItem.querySelectorAll('.menu-item') :
                        document.querySelectorAll('.menu-header > .menu-item');

                    siblings.forEach(sibling => {
                        if (sibling !== item && sibling !== item.closest('.menu-item')) {
                            sibling.classList.remove('active');
                        }
                    });
                } else {
                    // Если нет вложенных уровней, просто переключаем active
                    item.classList.toggle('active');
                }
            });
        });
    }

    const menuContainer = document.getElementById('menu-container');

    if (menuContainer) {
        menuContainer.innerHTML = createMenu(menuData);
        initMenuHandlers();
    }

    // Элементы DOM
    const level1Menu = document.querySelector('.menu-header.horizontal');
    const level2Menu = document.querySelector('.header-menu-slot:first-child .menu-header.vertical.menu-primary');
    const level3Menu = document.querySelector('.header-menu-slot:nth-child(3) .menu-header.vertical.menu-secondary');
    const headerMenu = document.querySelector('.header-menu');
    const visirLeft = document.querySelector(".menu-visir-left");
    const visirRight = document.querySelector(".menu-visir-right");

    // Текущий активный пункт меню
    let activeLevel1Item = null;
    let activeLevel2Item = null;
    let isMenuOpen = false;
    let currentPrimaryIndex = 0; // Для хранения индекса активного пункта второго уровня

    // Инициализация
    function init() {
        if (!level1Menu || !level2Menu || !level3Menu || !headerMenu) return;

        // Находим первый пункт меню первого уровня
        const firstLevel1Item = level1Menu.querySelector('a:first-child');
        if (firstLevel1Item && window.innerWidth >= 1280) {
            // Автоматически активируем первый пункт
            setTimeout(() => {
                activateFirstMenuItem();
            }, 100);
        }

        // Добавляем обработчики кликов для меню первого уровня
        const level1Items = level1Menu.querySelectorAll('a');
        level1Items.forEach(item => {
            // Только клик (без ховера)
            item.addEventListener('click', function(e) {
                e.preventDefault();
                handleLevel1Click(this);
            });
        });

        // Инициализируем визиры
        setupVisirAnimations();
    }

    // Функция для активации первого пункта меню
    function activateFirstMenuItem() {
        const firstLevel1Item = level1Menu.querySelector('a:first-child');
        if (firstLevel1Item) {
            // Активируем первый пункт
            handleLevel1Click(firstLevel1Item);
        }
    }

    // Настройка анимации визиров
    function setupVisirAnimations() {
        if (window.innerWidth < 1280) return;

        updateVisirHandlers();
    }

    // Обновление обработчиков для визиров
    function updateVisirHandlers() {
        if (window.innerWidth < 1280) return;

        const menuLinksPrimary = document.querySelectorAll(".menu-primary .menu-link a");
        const menuLinksSecondary = document.querySelectorAll(".menu-secondary .menu-link a");

        // Удаляем старые обработчики
        menuLinksPrimary.forEach(link => {
            link.removeEventListener('mouseenter', handlePrimaryVisirHover);
            link.removeEventListener('mouseleave', handlePrimaryVisirLeave);
        });

        menuLinksSecondary.forEach(link => {
            link.removeEventListener('mouseenter', handleSecondaryVisirHover);
            link.removeEventListener('mouseleave', handleSecondaryVisirLeave);
        });

        // Добавляем новые обработчики для primary меню
        menuLinksPrimary.forEach((link, index) => {
            link.addEventListener('mouseenter', () => handlePrimaryVisirHover(index));
            link.addEventListener('mouseleave', handlePrimaryVisirLeave);
        });

        // Добавляем новые обработчики для secondary меню
        menuLinksSecondary.forEach((link, index) => {
            link.addEventListener('mouseenter', () => handleSecondaryVisirHover(index));
            link.addEventListener('mouseleave', handleSecondaryVisirLeave);
        });
    }

    // Обработчики для левого визира (primary меню)
    function handlePrimaryVisirHover(index) {
        if (!visirLeft || window.innerWidth < 1280) return;

        // Вычисляем смещение (примерно 40px на каждый пункт меню)
        const offset = index * 39.4;

        // Плавная анимация
        visirLeft.style.transition = 'top 0.3s ease';
        visirLeft.style.top = `${offset}px`;
    }

    function handlePrimaryVisirLeave() {
        if (!visirLeft || window.innerWidth < 1280) return;

        // Возвращаем к активному пункту (а не в начало)
        const offset = currentPrimaryindex * 39.4;
        visirLeft.style.transition = 'top 0.3s ease';
        visirLeft.style.top = `${offset}px`;
    }

    // Обработчики для правого визира (secondary меню)
    function handleSecondaryVisirHover(index) {
        if (!visirRight || window.innerWidth < 1280) return;

        // Вычисляем смещение (примерно 40px на каждый пункт меню)
        const offset = index * 39.4;

        // Плавная анимация
        visirRight.style.transition = 'top 0.3s ease';
        visirRight.style.top = `${offset}px`;
    }

    function handleSecondaryVisirLeave() {
        if (!visirRight || window.innerWidth < 1280) return;

        // Плавно возвращаем в исходное положение
        visirRight.style.transition = 'top 0.3s ease';
        visirRight.style.top = '0px';
    }

    // Обработчик клика на меню первого уровня
    function handleLevel1Click(element) {
        const menuText = element.textContent.trim();

        if (activeLevel1Item === menuText && isMenuOpen) {
            closeMenu();
            return;
        }

        activeLevel1Item = menuText;

        const menuDataItem = menuData[menuText];
        if (!menuDataItem) {
            closeMenu();
            return;
        }

        updateLevel2Menu(menuDataItem.level2);
        // Сбрасываем активный пункт второго уровня при смене первого уровня
        activeLevel2Item = null;
        currentPrimaryIndex = 0;
        clearLevel3Menu();
        showMenu();

        removeActiveClasses(level1Menu);
        element.classList.add('active');

        // Добавляем обработчики для вновь созданных элементов
        addLevel2ClickHandlers();
        updateVisirHandlers();

        // Активируем первый пункт меню второго уровня по умолчанию
        setTimeout(() => {
            const firstLevel2Item = level2Menu.querySelector('.menu-link:first-child');
            if (firstLevel2Item) {
                handleLevel2Click(firstLevel2Item.querySelector('a'), 0);
            }
        }, 100);
    }

    // Добавляем обработчики КЛИКА для элементов второго уровня
    function addLevel2ClickHandlers() {
        if (!level2Menu) return;

        const level2Items = level2Menu.querySelectorAll('.menu-link');
        level2Items.forEach((item, index) => {
            const link = item.querySelector('a');
            if (link) {
                // Удаляем старые обработчики клика
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);

                // Добавляем новый обработчик клика
                newLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    handleLevel2Click(this, index);
                });
            }
        });
    }

    // Обработчик КЛИКА на меню второго уровня
    function handleLevel2Click(element, index) {
        const parent = element.closest('.menu-link');
        const menuText = element.textContent.trim();

        // Сохраняем индекс активного пункта
        currentPrimaryIndex = index;

        // Обновляем визир
        if (visirLeft && window.innerWidth >= 1280) {
            visirLeft.style.transition = 'top 0.3s ease';
            visirLeft.style.top = `${index * 39.4}px`;
        }

        // Если кликнули на уже активный пункт - ничего не делаем
        if (activeLevel2Item === menuText) {
            return;
        }

        // Активируем новый пункт
        activeLevel2Item = menuText;

        const menuDataItem = menuData[activeLevel1Item];
        if (!menuDataItem || !menuDataItem.level3) {
            clearLevel3Menu();
            return;
        }

        const level3Data = menuDataItem.level3[menuText];
        if (!level3Data) {
            clearLevel3Menu();
            return;
        }

        updateLevel3Menu(level3Data);
        removeActiveClasses(level2Menu);
        parent.classList.add('active');

        // Обновляем обработчики визиров
        updateVisirHandlers();
    }

    // Обновление меню второго уровня
    function updateLevel2Menu(items) {
        if (!level2Menu) return;

        level2Menu.innerHTML = '';

        items.forEach((item, index) => {
            const menuLink = document.createElement('div');
            menuLink.className = 'menu-link';
            menuLink.setAttribute('data-index', index);

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.text;

            menuLink.appendChild(link);
            level2Menu.appendChild(menuLink);
        });
    }

    // Обновление меню третьего уровня
    function updateLevel3Menu(items) {
        if (!level3Menu) return;

        level3Menu.innerHTML = '';

        items.forEach(item => {
            const menuLink = document.createElement('div');
            menuLink.className = 'menu-link';

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.text;

            menuLink.appendChild(link);
            level3Menu.appendChild(menuLink);
        });

        // Обновляем обработчики визиров после обновления меню
        updateVisirHandlers();
    }

    // Очистка меню третьего уровня
    function clearLevel3Menu() {
        if (level3Menu) {
            level3Menu.innerHTML = '';
        }
        activeLevel2Item = null;
        removeActiveClasses(level2Menu);

        // Сбрасываем правый визир
        if (visirRight && window.innerWidth >= 1280) {
            visirRight.style.top = '0px';
        }
    }

    // Показать выпадающее меню
    function showMenu() {
        if (headerMenu) {
            isMenuOpen = true;
            headerMenu.style.display = 'flex';
            setTimeout(() => {
                headerMenu.style.opacity = '1';
                headerMenu.style.transform = 'translateY(0)';
            }, 10);
        }
    }

    // Удалить активные классы
    function removeActiveClasses(menuElement) {
        if (menuElement) {
            menuElement.querySelectorAll('.active').forEach(item => {
                item.classList.remove('active');
            });
        }
    }

    // Обработчик ресайза
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1280 && isMenuOpen) {
            closeMenu();
        } else if (window.innerWidth >= 1280) {
            // При переходе на десктоп обновляем обработчики визиров
            updateVisirHandlers();

            // Если меню было закрыто, активируем первый пункт
            if (!isMenuOpen) {
                setTimeout(() => {
                    activateFirstMenuItem();
                }, 300);
            }
        }
    });

    // Инициализация скрипта
    init();

});

const cityData = {
    "Москва": {
        phone: "+7 495 987-65-43",
        phoneLink: "+74959876543",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "Переведеновский пер., 13, стр. 16, оф. 216, Москва, Россия, 105082",
        addressFull: "105082, г. Москва Переведеновский пер., дом. 13, стр. 16, оф. 216",
        email: "manager@ecostandard.ru"
    },
    "Санкт-Петербург": {
        phone: "+7 812 123-45-67",
        phoneLink: "+78121234567",
        workTime: "Пн–Пт с 10:00 до 19:00",
        workTimeFull: "09:00–20:00",
        address: "Невский пр., 100, оф. 50, Санкт-Петербург, Россия, 191025",
        addressFull: "191025, г. Санкт-Петербург, Невский пр., дом 100, оф. 50",
        email: "spb@ecostandard.ru"
    },
    "Хабаровск": {
        phone: "+7 4212 345-67-89",
        phoneLink: "+742123456789",
        workTime: "Пн–Пт с 8:00 до 17:00",
        workTimeFull: "07:00–18:00",
        address: "ул. Карла Маркса, 65, оф. 10, Хабаровск, Россия, 680000",
        addressFull: "680000, г. Хабаровск, ул. Карла Маркса, дом 65, оф. 10",
        email: "khabarovsk@ecostandard.ru"
    },
    "Новосибирск": {
        phone: "+7 383 123-45-67",
        phoneLink: "+73831234567",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Ленина, 12, оф. 5, Новосибирск, Россия, 630000",
        addressFull: "630000, г. Новосибирск, ул. Ленина, дом 12, оф. 5",
        email: "novosibirsk@ecostandard.ru"
    },
    "Краснодар": {
        phone: "+7 861 234-56-78",
        phoneLink: "+78612345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Красная, 100, оф. 15, Краснодар, Россия, 350000",
        addressFull: "350000, г. Краснодар, ул. Красная, дом 100, оф. 15",
        email: "krasnodar@ecostandard.ru"
    },
    "Красноярск": {
        phone: "+7 391 234-56-78",
        phoneLink: "+73912345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Мира, 50, оф. 8, Красноярск, Россия, 660000",
        addressFull: "660000, г. Красноярск, ул. Мира, дом 50, оф. 8",
        email: "krasnoyarsk@ecostandard.ru"
    },
    "Иркутск": {
        phone: "+7 3952 123-45-67",
        phoneLink: "+739521234567",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Ленина, 15, оф. 3, Иркутск, Россия, 664000",
        addressFull: "664000, г. Иркутск, ул. Ленина, дом 15, оф. 3",
        email: "irkutsk@ecostandard.ru"
    },
    "Севастополь": {
        phone: "+7 8692 123-45-67",
        phoneLink: "+786921234567",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Большая Морская, 10, оф. 2, Севастополь, Россия, 299000",
        addressFull: "299000, г. Севастополь, ул. Большая Морская, дом 10, оф. 2",
        email: "sevastopol@ecostandard.ru"
    },
    "Екатеринбург": {
        phone: "+7 343 234-56-78",
        phoneLink: "+73432345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Ленина, 50, оф. 12, Екатеринбург, Россия, 620000",
        addressFull: "620000, г. Екатеринбург, ул. Ленина, дом 50, оф. 12",
        email: "ekaterinburg@ecostandard.ru"
    },
    "Казань": {
        phone: "+7 843 234-56-78",
        phoneLink: "+78432345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Баумана, 20, оф. 7, Казань, Россия, 420000",
        addressFull: "420000, г. Казань, ул. Баумана, дом 20, оф. 7",
        email: "kazan@ecostandard.ru"
    },
    "Ростов-на-Дону": {
        phone: "+7 863 234-56-78",
        phoneLink: "+78632345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Большая Садовая, 100, оф. 25, Ростов-на-Дону, Россия, 344000",
        addressFull: "344000, г. Ростов-на-Дону, ул. Большая Садовая, дом 100, оф. 25",
        email: "rostov@ecostandard.ru"
    },
    "Владивосток": {
        phone: "+7 423 234-56-78",
        phoneLink: "+74232345678",
        workTime: "Пн–Пт с 9:00 до 18:00",
        workTimeFull: "08:00–19:00",
        address: "ул. Светланская, 50, оф. 6, Владивосток, Россия, 690000",
        addressFull: "690000, г. Владивосток, ул. Светланская, дом 50, оф. 6",
        email: "vladivostok@ecostandard.ru"
    }
};

function saveCityToStorage(cityName) {
    localStorage.setItem('selectedCity', cityName);
}

function getCityFromStorage() {
    return localStorage.getItem('selectedCity') || "Москва";
}

function updateHeaderInfo(cityName) {
    const city = cityData[cityName];
    if (!city) return;

    // Обновляем текущий город в выпадающем списке
    const currentCitySpan = document.querySelector('.current-city');
    if (currentCitySpan) {
        currentCitySpan.textContent = cityName;
    }

    // Обновляем телефон
    const phoneElement = document.querySelector('.header-info-phone');
    if (phoneElement) {
        phoneElement.textContent = city.phone;
    }

    // Обновляем время работы (находим второй элемент p)
    const workTimeElement = document.querySelector('.header-info-time');
        workTimeElement.innerHTML = `
        <span class="text-caption-bold color-black">${city.workTime.split(' ')[0]}</span> 
        <span class="text-caption color-black">${city.workTime.split(' ').slice(1).join(' ')}</span>
    `;

    // Обновляем адрес (третий элемент p)
    const addressElement = document.querySelector('.header-info-address');
    if (addressElement) {
        addressElement.textContent = `Адрес: ${city.address}`;
    }
}

function updateFooterInfo(cityName) {
    const city = cityData[cityName];
    if (!city) return;

    // Обновляем телефон
    const phoneLink = document.querySelector('.footer-info-phone');
    if (phoneLink) {
        phoneLink.textContent = city.phone;
        phoneLink.href = `tel:${city.phoneLink}`;
    }

    // Обновляем email
    const emailLink = document.querySelector('.footer-info-mail');
    if (emailLink) {
        emailLink.textContent = city.email;
        emailLink.href = `mailto:${city.email}`;
    }

    // Обновляем адрес
    const addressElement = document.querySelector('.footer-info-address');
    if (addressElement) {
        addressElement.textContent = city.addressFull;
    }

    // Обновляем время работы
    const workTimeElement = document.querySelector('.footer-info-time');
    if (workTimeElement) {
        workTimeElement.textContent = city.workTimeFull;
    }

    // Обновляем активный город в футере
    updateActiveCityInFooter(cityName);
}

function updateActiveCityInFooter(selectedCity) {
    const cityButtons = document.querySelectorAll('.footer-city');
    cityButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.trim() === selectedCity) {
            button.classList.add('active');
        }
    });
}

function changeCity(cityName) {
    if (!cityData[cityName]) return;

    // Сохраняем в localStorage
    saveCityToStorage(cityName);

    // Обновляем информацию в хедере и футере
    updateHeaderInfo(cityName);
    updateFooterInfo(cityName);
}

document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненный город или устанавливаем Москву по умолчанию
    const currentCity = getCityFromStorage();

    // Инициализируем информацию на странице
    changeCity(currentCity);

    // Обработчики для выбора города в хедере (выпадающий список)
    const headerCityItems = document.querySelectorAll('.header-sities .dropdown-item.hoverable');
    headerCityItems.forEach(item => {
        item.addEventListener('click', function() {
            const cityName = this.querySelector('span').textContent.trim();
            changeCity(cityName);
        });
    });

    // Обработчики для выбора города в футере (кнопки)
    const footerCityButtons = document.querySelectorAll('.footer-city');
    footerCityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cityName = this.textContent.trim();
            changeCity(cityName);
        });
    });
});
