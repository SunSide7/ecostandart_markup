document.addEventListener('DOMContentLoaded', function() {
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

    let currentSlide = 0;
    let isAnimating = false;
    let autoSlideInterval;
    const slideDuration = 5000;

    function preloadImages() {
        projectsData.forEach((slide, index) => {
            if (index > 0) {
                new Image().src = slide.image;
            }
        });
    }

    function goToSlide(index) {
        if (isAnimating) return;

        if (index < 0) index = projectsData.length - 1;
        if (index >= projectsData.length) index = 0;

        isAnimating = true;
        currentSlide = index;

        // **ИСПРАВЛЕНИЕ: Сразу обновляем пагинацию**
        updatePagination();

        const data = projectsData[currentSlide];
        const activeBg = document.querySelector('.slider-bg-mini[data-active="true"]');
        const nextBg = document.querySelector('.slider-bg-mini[data-active="false"]');

        const nextImage = new Image();
        nextImage.src = data.image;

        const changeSlide = () => {
            // Плавно скрываем старый фон и текст
            activeBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.opacity = '0';

            title.style.transition = 'opacity 0.4s ease';
            detailTitle.style.transition = 'opacity 0.4s ease';
            detailText.style.transition = 'opacity 0.4s ease';

            title.style.opacity = '0';
            detailTitle.style.opacity = '0';
            detailText.style.opacity = '0';

            // Обновляем текст
            title.textContent = data.title;
            detailTitle.textContent = data.details.title;
            detailText.innerHTML = data.details.text;

            // Меняем фон
            nextBg.src = data.image;
            nextBg.alt = data.title;
            nextBg.style.transition = 'opacity 0s';
            nextBg.style.opacity = '1';

            // Обновляем атрибуты фонов
            activeBg.setAttribute('data-active', 'false');
            nextBg.setAttribute('data-active', 'true');

            // Восстанавливаем transition
            nextBg.style.transition = 'opacity 0.8s ease';
            activeBg.style.transition = 'opacity 0.8s ease';

            // Плавно показываем новый текст
            setTimeout(() => {
                title.style.opacity = '1';
                detailTitle.style.opacity = '1';
                detailText.style.opacity = '1';

                isAnimating = false;
            }, 50);
        };

        if (nextImage.complete) {
            changeSlide();
        } else {
            nextImage.onload = changeSlide;
        }

        startAutoSlide();
    }

    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function showNextSlide() {
        goToSlide(currentSlide + 1);
    }

    function showPrevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(showNextSlide, slideDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function initSlider() {
        preloadImages();

        bgImages[0].style.opacity = '1';
        bgImages[1].style.opacity = '0';
        bgImages[0].style.transition = 'opacity 0.8s ease';
        bgImages[1].style.transition = 'opacity 0.8s ease';

        title.style.transition = 'opacity 0.5s ease';
        detailTitle.style.transition = 'opacity 0.5s ease';
        detailText.style.transition = 'opacity 0.5s ease';

        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        prevBtn.addEventListener('click', showPrevSlide);
        nextBtn.addEventListener('click', showNextSlide);

        const slider = document.querySelector('.slider-project');
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        startAutoSlide();
    }

    initSlider();
});