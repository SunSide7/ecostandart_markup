document.addEventListener('DOMContentLoaded', function() {
    const aboutCompanyData = [
        {
            image: "img/sections/projects_slider/project_gazprom.jpg",
            title: "Группа компаний «Экостандарт» успешно работает по всей территории России и СНГ с 1997 года.",
            details: {
                title: "Мы являемся лидером в сфере экологической экспертизы и мониторинга, услуг в сфере охраны труда, инженерных изысканий, экологического проектирования и сертификации.",
                text: "Организация объединяет инженерные, консалтинговые и экспертные компании, являющиеся самостоятельными юридическими лицами."
            }
        },
        {
            image: "img/sections/projects_slider/project_rzhd.jpg",
            title: "ГК «Экостандарт» включает в себя 20 филиалов и представительств по всей России.",
            details: {
                title: "Экологическое проектирование",
                text: "Разработка проектной документации для строительства и реконструкции промышленных объектов"
            }
        },
        {
            image: "img/sections/projects_slider/project_rosneft.png",
            title: "Профессиональная поддержка на всех этапах проекта",
            details: {
                title: "Технический надзор",
                text: "Контроль за соблюдением экологических норм и требований безопасности на объектах"
            }
        },
    ];

    const bgImages = document.querySelectorAll('.slider-bg-about-company');
    const title = document.querySelector('.slider-title-about-company');
    const detailTitle = document.querySelector('.slider-detail-title-about-company');
    const detailText = document.querySelector('.slider-detail-text-about-company');
    const paginationDots = document.querySelectorAll('.pagination-about-company');
    const prevBtn = document.querySelector('.slider-prev-about-company');
    const nextBtn = document.querySelector('.slider-next-about-company');

    let currentSlide = 0;
    let isAnimating = false;
    let autoSlideInterval;
    const slideDuration = 5000;

    function preloadImages() {
        aboutCompanyData.forEach((slide, index) => {
            if (index > 0) {
                new Image().src = slide.image;
            }
        });
    }

    function goToSlide(index) {
        if (isAnimating) return;

        if (index < 0) index = aboutCompanyData.length - 1;
        if (index >= aboutCompanyData.length) index = 0;

        isAnimating = true;
        currentSlide = index;

        updatePagination();

        const data = aboutCompanyData[currentSlide];
        const activeBg = document.querySelector('.slider-bg-about-company[data-active="true"]');
        const nextBg = document.querySelector('.slider-bg-about-company[data-active="false"]');

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

        const slider = document.querySelector('.slider-project-mini');
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
        }

        startAutoSlide();
    }

    initSlider();
});