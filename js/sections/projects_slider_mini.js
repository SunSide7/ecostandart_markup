document.addEventListener('DOMContentLoaded', function() {
    // Данные слайдов
    const projectsData = [
        {
            image: "img/sections/projects_slider/project_gazprom.jpg",
            title: "Стратегическое партнёрство с крупнейшей энергетической компанией",
            details: {
                title: "Выделенный отдел инспектирования",
                text: "Располагаем ресурсами, чтобы провести физический аудит предприятия в любой точке России, от Калининграда до Камчатки.<br><br>Приедем к вам и проверим реальные условия труда на объектах."
            }
        },
        {
            image: "img/sections/projects_slider/project_rzhd.jpg",
            title: "Комплексные экологические решения для нефтегазовой отрасли",
            details: {
                title: "Экологический аудит",
                text: "Оценка воздействия на окружающую среду и разработка нормативной документации"
            }
        },
        {
            image: "img/sections/projects_slider/project_rosneft.png",
            title: "Инженерные изыскания для объектов нефтедобычи",
            details: {
                title: "Геологические исследования",
                text: "Бурение скважин, отбор проб и анализ грунтов для строительства объектов"
            }
        },
    ];

    const bgImages = document.querySelectorAll('.slider-bg-mini');
    const title = document.querySelector('.slider-title-mini');
    const detailTitle = document.querySelector('.slider-detail-title-mini');
    const detailText = document.querySelector('.slider-detail-text-mini');
    const paginationDots = document.querySelectorAll('.pagination-mini');
    const prevBtn = document.querySelector('.slider-prev-mini');
    const nextBtn = document.querySelector('.slider-next-mini');

// Состояние слайдера
    let currentSlide = 0;
    let isAnimating = false; // Добавляем флаг анимации
    let autoSlideInterval;
    const slideDuration = 5000;

// Предзагрузка изображений
    function preloadImages() {
        projectsData.forEach((slide, index) => {
            if (index > 0) {
                const img = new Image();
                img.src = slide.image;
            }
        });
    }

// Функция переключения слайда
    function goToSlide(index) {
        if (isAnimating) return; // Защита от множественных кликов

        // Зацикливание
        if (index < 0) index = projectsData.length - 1;
        if (index >= projectsData.length) index = 0;

        isAnimating = true; // Начинаем анимацию

        // Обновляем текущий слайд
        currentSlide = index;
        const data = projectsData[currentSlide];

        // Находим активные фоны
        const activeBg = document.querySelector('.slider-bg-mini[data-active="true"]');
        const nextBg = document.querySelector('.slider-bg-mini[data-active="false"]');

        // Загружаем новое изображение
        const nextImage = new Image();
        nextImage.src = data.image;

        // Когда изображение загружено, меняем слайд
        const changeSlide = () => {
            // **ПЛАВНАЯ СМЕНА ФОНА: Сначала скрываем активный фон**
            activeBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.opacity = '0';

            // **ОБНОВЛЯЕМ ТЕКСТ С АНИМАЦИЕЙ ИСЧЕЗНОВЕНИЯ**
            title.style.transition = 'opacity 0.4s ease';
            detailTitle.style.transition = 'opacity 0.4s ease';
            detailText.style.transition = 'opacity 0.4s ease';

            title.style.opacity = '0';
            detailTitle.style.opacity = '0';
            detailText.style.opacity = '0';

            // **ОБНОВЛЯЕМ СОДЕРЖИМОЕ ПОСЛЕ ИСЧЕЗНОВЕНИЯ СТАРОГО КОНТЕНТА**
            title.textContent = data.title;
            detailTitle.textContent = data.details.title;
            detailText.innerHTML = data.details.text;

            // **МЕНЯЕМ ФОН И ПОКАЗЫВАЕМ ЕГО**
            nextBg.src = data.image;
            nextBg.alt = data.title;
            nextBg.style.transition = 'opacity 0s'; // Без анимации для моментального показа
            nextBg.style.opacity = '1';

            // Меняем активные фоны
            activeBg.setAttribute('data-active', 'false');
            nextBg.setAttribute('data-active', 'true');

            // **ВОССТАНАВЛИВАЕМ TRANSITION ДЛЯ СЛЕДУЮЩИХ АНИМАЦИЙ**
            nextBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.transition = 'opacity 0.8s ease';

            title.style.opacity = '1';
            detailTitle.style.opacity = '1';
            detailText.style.opacity = '1';

            // Обновляем пагинацию
            updatePagination();

            isAnimating = false; // Завершаем анимацию
        };

        // Если изображение уже загружено, меняем сразу
        if (nextImage.complete) {
            changeSlide();
        } else {
            nextImage.onload = changeSlide;
        }

        // Перезапускаем автопрокрутку
        startAutoSlide();
    }

// Обновление пагинации
    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

// Следующий слайд
    function showNextSlide() {
        goToSlide(currentSlide + 1);
    }

// Предыдущий слайд
    function showPrevSlide() {
        goToSlide(currentSlide - 1);
    }

// Автопрокрутка
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(showNextSlide, slideDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

// Инициализация
    function initSlider() {
        // Предзагрузка изображений
        preloadImages();

        // Инициализация фонов
        bgImages[0].style.opacity = '1';
        bgImages[1].style.opacity = '0';
        bgImages[0].style.transition = 'opacity 0.8s ease';
        bgImages[1].style.transition = 'opacity 0.8s ease';

        // Инициализация текста с анимацией
        title.style.transition = 'opacity 0.5s ease';
        detailTitle.style.transition = 'opacity 0.5s ease';
        detailText.style.transition = 'opacity 0.5s ease';

        // Обработчики для точек
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Обработчики для кнопок
        prevBtn.addEventListener('click', showPrevSlide);
        nextBtn.addEventListener('click', showNextSlide);

        // Пауза при наведении
        const slider = document.querySelector('.slider-project');
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        // Запускаем автопрокрутку
        startAutoSlide();
    }

    // Запуск слайдера
    initSlider();
});