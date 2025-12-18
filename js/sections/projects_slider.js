document.addEventListener('DOMContentLoaded', function() {
    // Данные слайдов
    const projectsData = [
        {
            image: "img/sections/projects_slider/project_gazprom.jpg",
            tag: "Охрана труда",
            logo: "img/sections/projects_slider/logo_gazprom.svg",
            title: "Стратегическое партнёрство с крупнейшей энергетической компанией",
            details: [
                { title: "Охрана труда", text: "/ СОУТ <br>/ Производственный контроль" },
                { title: "Экологическое проектирование", text: "/ СЗЗ" },
                { title: "Изыскательные работы", text: "/ Инженерно-экологические изыскания" },
                { title: "Экологический контроль", text: "/ Мониторинг" }
            ],
        },
        {
            image: "img/sections/projects_slider/project_rzhd.jpg",
            tag: "Экология",
            logo: "img/sections/projects_slider/logo_rzhd.svg",
            title: "Комплексные экологические решения для нефтегазовой отрасли",
            details: [
                { title: "Экологический аудит", text: "/ Оценка воздействия <br>/ Нормативная документация" },
                { title: "Лабораторные исследования", text: "/ Анализ проб" },
                { title: "Проектирование", text: "/ ОВОС <br>/ СЗЗ" },
                { title: "Мониторинг", text: "/ Экологический контроль" }
            ],
        },
        {
            image: "img/sections/projects_slider/project_rosneft.png",
            tag: "Изыскания",
            logo: "img/sections/projects_slider/logo_rosneft.svg",
            title: "Инженерные изыскания для объектов нефтедобычи",
            details: [
                { title: "Геологические изыскания", text: "/ Бурение скважин <br>/ Отбор проб" },
                { title: "Экологические изыскания", text: "/ Оценка территории" },
                { title: "Геодезические работы", text: "/ Топосъемка" },
                { title: "Лабораторные испытания", text: "/ Анализ грунтов" }
            ],
        },
    ];

    // Элементы DOM
    const slider = document.querySelector('.slider-project');
    const bgImages = document.querySelectorAll('.slider-bg');
    const tag = document.querySelector('.slider-tag');
    const logo = document.querySelector('.slider-logo');
    const title = document.querySelector('.slider-title');
    const detailTitles = document.querySelectorAll('.slider-detail-title');
    const detailTexts = document.querySelectorAll('.slider-detail-text');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    // Состояние слайдера
    let currentSlide = 0;
    let isAnimating = false;
    let autoSlideInterval;
    const slideDuration = 5000;

    // **ИСПРАВЛЕНИЕ 1: Предзагрузка изображений**
    function preloadImages() {
        projectsData.forEach((slide, index) => {
            if (index > 0) { // Первое изображение уже загружено
                const img = new Image();
                img.src = slide.image;
            }
        });
    }

    // Инициализация пагинации
    function initPagination() {
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
    }

    // Инициализация кнопок
    function initButtons() {
        prevBtn.addEventListener('click', showPrevSlide);
        nextBtn.addEventListener('click', showNextSlide);
    }

    // Автопрокрутка
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(showNextSlide, slideDuration);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Показать слайд по индексу
    function goToSlide(index) {
        if (isAnimating) return;

        // Зацикливание
        if (index < 0) index = projectsData.length - 1;
        if (index >= projectsData.length) index = 0;

        isAnimating = true;

        // Обновляем текущий слайд
        const prevSlide = currentSlide;
        currentSlide = index;

        // **ИСПРАВЛЕНИЕ 2: Используем два фона правильно**
        const activeBg = document.querySelector('.slider-bg[data-active="true"]');
        const nextBg = document.querySelector('.slider-bg[data-active="false"]');

        // **ИСПРАВЛЕНИЕ 3: Ждем загрузки изображения перед анимацией**
        const nextImage = new Image();
        nextImage.src = projectsData[currentSlide].image;

        nextImage.onload = function() {
            // Меняем src у неактивного фона
            nextBg.src = projectsData[currentSlide].image;
            nextBg.alt = projectsData[currentSlide].tag;

            // **ИСПРАВЛЕНИЕ 4: Правильная последовательность анимации**
            // 1. Сначала плавно скрываем активный фон
            activeBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.opacity = '0';

            // 2. Затем показываем следующий фон
            nextBg.style.transition = 'opacity 0s'; // Без анимации для первого появления
            nextBg.style.opacity = '1';

            // Меняем активные фоны
            activeBg.setAttribute('data-active', 'false');
            nextBg.setAttribute('data-active', 'true');

            // **ИСПРАВЛЕНИЕ 5: Восстанавливаем transition для следующей анимации**
            nextBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.transition = 'opacity 0.8s ease';

            // Обновляем контент
            updateContent();

            // Обновить пагинацию
            updatePagination();

            isAnimating = false;
        };

        // **ИСПРАВЛЕНИЕ 6: На случай если изображение уже в кэше**
        if (nextImage.complete) {
            nextImage.onload();
        }

        // Перезапустить автопрокрутку
        startAutoSlide();
    }

    // Обновить контент слайда
    function updateContent() {
        const data = projectsData[currentSlide];

        // **ИСПРАВЛЕНИЕ 7: Убираем задержку для контента**
        // Обновить содержимое сразу
        tag.textContent = data.tag;
        logo.src = data.logo;
        logo.alt = data.tag;
        title.textContent = data.title;

        // Обновить детали
        data.details.forEach((detail, index) => {
            if (detailTitles[index]) {
                detailTitles[index].textContent = detail.title;
            }
            if (detailTexts[index]) {
                detailTexts[index].innerHTML = detail.text;
            }
        });

        // **ИСПРАВЛЕНИЕ 8: Плавное появление контента после смены фона**
        setTimeout(() => {
            tag.style.transition = 'opacity 0.5s ease';
            logo.style.transition = 'opacity 0.5s ease';
            title.style.transition = 'opacity 0.5s ease';
            detailTitles.forEach(el => el.style.transition = 'opacity 0.5s ease');
            detailTexts.forEach(el => el.style.transition = 'opacity 0.5s ease');

            tag.style.opacity = '1';
            logo.style.opacity = '1';
            title.style.opacity = '1';
            detailTitles.forEach(el => el.style.opacity = '1');
            detailTexts.forEach(el => el.style.opacity = '1');
        }, 400);
    }

    // Обновить пагинацию
    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Показать следующий слайд
    function showNextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Показать предыдущий слайд
    function showPrevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Инициализация слайдера
    function initSlider() {
        // **ИСПРАВЛЕНИЕ 9: Предзагрузка изображений**
        preloadImages();

        // **ИСПРАВЛЕНИЕ 10: Инициализация opacity для фонов**
        bgImages[0].style.opacity = '1';
        bgImages[1].style.opacity = '0';
        bgImages[0].style.transition = 'opacity 0.8s ease';
        bgImages[1].style.transition = 'opacity 0.8s ease';

        // Добавить дополнительные точки пагинации если нужно
        if (paginationDots.length < projectsData.length) {
            const paginationContainer = document.querySelector('.slider-pagination');
            for (let i = paginationDots.length; i < projectsData.length; i++) {
                const dot = document.createElement('span');
                dot.className = 'pagination-dot';
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', () => goToSlide(i));
                paginationContainer.appendChild(dot);
            }
        }

        // Добавить обработчики для паузы при наведении
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        // Инициализация
        initPagination();
        initButtons();
        updateContent();
        updatePagination();
        startAutoSlide();
    }

    // Запустить слайдер
    initSlider();
});