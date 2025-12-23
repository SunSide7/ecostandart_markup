const headerBtn = document.querySelector('.menu-header-button');
const header = document.querySelector('.header');

const headerSearch = document.querySelector('.search');
const headerSearchClose = document.querySelector('.search-close');
const searchResult = document.querySelector('.search-result');
const headerPhone = document.querySelector('.phone-header');

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('active');
    header.classList.toggle('active');
});

headerSearch.addEventListener('click', () => {
    headerSearch.classList.add('active');
    searchResult.classList.add('active');
    headerPhone.style.display = "none";
    header.classList.add("prevent-active");
});

headerSearchClose.addEventListener('click', () => {
    event.stopPropagation();
    headerSearch.classList.remove('active');
    searchResult.classList.remove('active');
    headerPhone.style.display = "flex";
    header.classList.remove("prevent-active");
});

// Или более компактный вариант с медиа-запросом в JS
const mediaQuery = window.matchMedia('(min-width: 1280px)');

header.addEventListener('mouseenter', function() {
    if (mediaQuery.matches) {
        header.classList.add("active");
    }
});

header.addEventListener('mouseleave', function() {
    if (mediaQuery.matches) {
        header.classList.remove("active");
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
                { text: 'Проекты', link: '#' },
                { text: 'Кейсы', link: '#' },
                { text: 'Портфолио', link: '#' }
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
                { text: 'Спецпредложения', link: '#' },
                { text: 'Для бизнеса', link: '#' },
                { text: 'Для госорганизаций', link: '#' }
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
                { text: 'Спецпредложения', link: '#' },
                { text: 'Для бизнеса', link: '#' },
                { text: 'Для госорганизаций', link: '#' }
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
                { text: 'Спецпредложения', link: '#' },
                { text: 'Для бизнеса', link: '#' },
                { text: 'Для госорганизаций', link: '#' }
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
                { text: 'Спецпредложения', link: '#' },
                { text: 'Для бизнеса', link: '#' },
                { text: 'Для госорганизаций', link: '#' }
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
    let menuTimeout = null;
    let isMenuOpen = false;
    let lastPrimaryIndex = -1;
    let lastSecondaryIndex = -1;

    // Функции для получения актуальных элементов меню
    const getMenuLinksPrimary = () => document.querySelectorAll(".menu-primary .menu-link");
    const getMenuLinksSecondary = () => document.querySelectorAll(".menu-secondary .menu-link");

    // Инициализация
    function init() {
        if (!level1Menu || !level2Menu || !level3Menu || !headerMenu) return;

        // Добавляем обработчики для меню первого уровня
        const level1Items = level1Menu.querySelectorAll('a');
        level1Items.forEach(item => {
            // Клик для десктопа и мобильных
            item.addEventListener('click', function(e) {
                e.preventDefault();
                handleLevel1Click(this);
            });

            // Ховер для десктопа
            item.addEventListener('mouseenter', function() {
                if (window.innerWidth >= 1200) {
                    handleLevel1Hover(this);
                }
            });
        });

        // Обработчики для контейнера выпадающего меню
        headerMenu.addEventListener('mouseenter', function() {
            if (menuTimeout) clearTimeout(menuTimeout);
        });

        headerMenu.addEventListener('mouseleave', function(e) {
            if (window.innerWidth >= 1200 && isMenuOpen) {
                // Проверяем, не перешли ли мы на пункты меню первого уровня
                const relatedTarget = e.relatedTarget;
                if (!isRelatedTargetInMenu(relatedTarget)) {
                    startCloseTimer();
                }
            }
        });

        // Обработчики для самого меню первого уровня
        level1Menu.addEventListener('mouseleave', function(e) {
            if (window.innerWidth >= 1200 && isMenuOpen) {
                // Проверяем, не перешли ли мы на выпадающее меню
                const relatedTarget = e.relatedTarget;
                if (!headerMenu.contains(relatedTarget)) {
                    startCloseTimer();
                }
            }
        });

        // Закрытие меню при клике вне
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header') && !e.target.closest('.header-menu') && isMenuOpen) {
                closeMenu();
            }
        });

        // Закрытие меню при нажатии ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        });

        // Инициализируем визиры
        setupVisirAnimations();
    }

    // Настройка анимации визиров
    function setupVisirAnimations() {
        // Наблюдатель за изменениями DOM для обновления обработчиков
        const observer = new MutationObserver(() => {
            updateVisirHandlers();
        });

        // Наблюдаем за контейнерами меню
        if (level2Menu) {
            observer.observe(level2Menu, { childList: true, subtree: true });
        }
        if (level3Menu) {
            observer.observe(level3Menu, { childList: true, subtree: true });
        }
    }

    // Обновление обработчиков для визиров
    function updateVisirHandlers() {
        const menuLinksPrimary = getMenuLinksPrimary();
        const menuLinksSecondary = getMenuLinksSecondary();

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
        if (!visirLeft) return;

        // Вычисляем смещение (примерно 40px на каждый пункт меню)
        const offset = index * 40;
        lastPrimaryIndex = index;

        // Плавная анимация
        visirLeft.style.transition = 'top 0.3s ease';
        visirLeft.style.top = `${offset}px`;
    }

    function handlePrimaryVisirLeave() {
        if (!visirLeft) return;

        // Плавно возвращаем в исходное положение
        visirLeft.style.transition = 'top 0.3s ease';
        visirLeft.style.top = '0px';
        lastPrimaryIndex = -1;
    }

    // Обработчики для правого визира (secondary меню)
    function handleSecondaryVisirHover(index) {
        if (!visirRight) return;

        // Вычисляем смещение (примерно 40px на каждый пункт меню)
        const offset = index * 40;
        lastSecondaryIndex = index;

        // Плавная анимация
        visirRight.style.transition = 'top 0.3s ease';
        visirRight.style.top = `${offset}px`;
    }

    function handleSecondaryVisirLeave() {
        if (!visirRight) return;

        // Плавно возвращаем в исходное положение
        visirRight.style.transition = 'top 0.3s ease';
        visirRight.style.top = '0px';
        lastSecondaryIndex = -1;
    }

    // Проверяем, является ли relatedTarget частью меню
    function isRelatedTargetInMenu(relatedTarget) {
        if (!relatedTarget) return false;

        // Проверяем все элементы меню
        const menuElements = [
            level1Menu,
            headerMenu,
            level2Menu,
            level3Menu
        ];

        return menuElements.some(element => {
            return element && element.contains(relatedTarget);
        });
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
        activeLevel2Item = null;
        clearLevel3Menu();
        showMenu();

        removeActiveClasses(level1Menu);
        element.classList.add('active');

        // Добавляем обработчики для вновь созданных элементов
        addLevel2EventListeners();
        updateVisirHandlers();
    }

    // Обработчик ховера на меню первого уровня
    function handleLevel1Hover(element) {
        const menuText = element.textContent.trim();

        if (activeLevel1Item === menuText && isMenuOpen) {
            return;
        }

        handleLevel1Click(element);
    }

    // Добавляем обработчики для элементов второго уровня
    function addLevel2EventListeners() {
        if (!level2Menu) return;

        const level2Items = level2Menu.querySelectorAll('.menu-link');
        level2Items.forEach(item => {
            // Убираем старые обработчики
            item.removeEventListener('mouseenter', handleLevel2ItemHover);
            item.removeEventListener('mouseleave', handleLevel2ItemLeave);

            // Добавляем новые обработчики
            item.addEventListener('mouseenter', handleLevel2ItemHover);
            item.addEventListener('mouseleave', handleLevel2ItemLeave);

            // Для мобильных устройств
            const link = item.querySelector('a');
            if (link) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth < 1200) {
                        e.preventDefault();
                        handleLevel2Click(this);
                    }
                });
            }
        });
    }

    // Обработчик ховера на элемент второго уровня
    function handleLevel2ItemHover(e) {
        if (window.innerWidth < 1200) return;

        const item = e.currentTarget;
        const link = item.querySelector('a');
        if (!link) return;

        const menuText = link.textContent.trim();

        if (activeLevel2Item === menuText) {
            return;
        }

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
        item.classList.add('active');

        // Очищаем таймер при наведении на элементы меню
        if (menuTimeout) clearTimeout(menuTimeout);
    }

    // Обработчик mouseleave с элемента второго уровня
    function handleLevel2ItemLeave(e) {
        if (window.innerWidth < 1200) return;

        const item = e.currentTarget;
        const relatedTarget = e.relatedTarget;

        // Если мышь перешла на меню третьего уровня или другой элемент второго уровня
        // Не запускаем таймер закрытия
        if (level3Menu && level3Menu.contains(relatedTarget)) {
            return;
        }

        if (level2Menu && level2Menu.contains(relatedTarget)) {
            return;
        }

        // Если мышь покинула область меню второго уровня
        // и не перешла на меню третьего уровня
        startCloseTimer();
    }

    // Обновление меню второго уровня
    function updateLevel2Menu(items) {
        if (!level2Menu) return;

        level2Menu.innerHTML = '';

        items.forEach(item => {
            const menuLink = document.createElement('div');
            menuLink.className = 'menu-link';

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.text;

            menuLink.appendChild(link);
            level2Menu.appendChild(menuLink);
        });
    }

    // Обработчик клика на меню второго уровня (для мобильных)
    function handleLevel2Click(element) {
        const parent = element.closest('.menu-link');
        const menuText = element.textContent.trim();

        if (activeLevel2Item === menuText) {
            clearLevel3Menu();
            activeLevel2Item = null;
            removeActiveClasses(level2Menu);
        } else {
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
        }
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

        // Добавляем обработчики для меню третьего уровня
        level3Menu.addEventListener('mouseenter', function() {
            if (menuTimeout) clearTimeout(menuTimeout);
        });

        level3Menu.addEventListener('mouseleave', function(e) {
            if (window.innerWidth >= 1200 && isMenuOpen) {
                const relatedTarget = e.relatedTarget;
                // Если не перешли на меню второго уровня
                if (!level2Menu.contains(relatedTarget)) {
                    startCloseTimer();
                }
            }
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

        // Сбрасываем визиры
        if (visirRight) {
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

    // Инициализация скрипта
    init();
});