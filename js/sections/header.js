const html = document.querySelector('.html');

const headerBtn = document.querySelector('.menu-header-button');
const header = document.querySelector('.header');
const menuMobile = document.querySelector('.menu-header.mobile');
const searchResultMobile = document.querySelector('.search-result-mobile');

const searchMobileInput = document.querySelector('.search-mobile-input');
const searchMobileClose = document.querySelector('.search-close.mobile');

const headerSearch = document.querySelector('.search');
const headerSearchClose = document.querySelector('.search-close');
const searchResult = document.querySelector('.search-result');
const headerPhone = document.querySelector('.phone-header');

const headerSities = document.querySelector('.header-sities');

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
    header.classList.add("prevent-active");
});

headerSearchClose.addEventListener('click', (event) => {
    event.stopPropagation();
    headerSearch.classList.remove('active');
    searchResult.classList.remove('active');
    headerPhone.style.display = "flex";
    header.classList.remove("prevent-active");
});

searchMobileInput.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    searchResultMobile.classList.add('active');
});

searchMobileClose.addEventListener('click', (event) => {
    event.stopPropagation();
    menuMobile.classList.add('active');
    searchResultMobile.classList.remove('active');
});

// Или более компактный вариант с медиа-запросом в JS
const mediaQuery = window.matchMedia('(min-width: 1280px)');

header.addEventListener('mouseenter', function() {
    if (mediaQuery.matches) {
        header.classList.add("active");
        html.classList.toggle('no-scroll');
    }
});

header.addEventListener('mouseleave', function() {
    if (mediaQuery.matches) {
        header.classList.remove("active");
        html.classList.toggle('no-scroll');
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