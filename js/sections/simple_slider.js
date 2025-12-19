document.addEventListener('DOMContentLoaded', function() {
    // Находим все слайдеры на странице
    const sliders = document.querySelectorAll('.simple-slider');

    // Инициализируем каждый слайдер
    sliders.forEach(slider => {
        initSlider(slider);
    });

    function initSlider(slider) {
        let isDragging = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastTime = 0;
        let lastScrollLeft = 0;
        let animationId = null;

        // Функция для плавной прокрутки с инерцией
        function smoothScroll(targetScroll, duration = 300) {
            const startScroll = slider.scrollLeft;
            const distance = targetScroll - startScroll;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Кубическая функция для плавности
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                slider.scrollLeft = startScroll + distance * easeProgress;

                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    animationId = null;
                }
            }

            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            animationId = requestAnimationFrame(animate);
        }

        // Функция для инерционной прокрутки
        function inertialScroll() {
            if (Math.abs(velocity) < 0.1) {
                velocity = 0;
                return;
            }

            // Применяем трение
            velocity *= 0.95;

            // Обновляем позицию скролла
            const newScrollLeft = slider.scrollLeft + velocity;

            // Проверяем границы
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (newScrollLeft < 0) {
                slider.scrollLeft = 0;
                velocity = -velocity * 0.5; // Отскок от начала
            } else if (newScrollLeft > maxScroll) {
                slider.scrollLeft = maxScroll;
                velocity = -velocity * 0.5; // Отскок от конца
            } else {
                slider.scrollLeft = newScrollLeft;
            }

            // Продолжаем анимацию
            if (Math.abs(velocity) > 0.1) {
                requestAnimationFrame(inertialScroll);
            } else {
                // Фиксируем позицию
                snapToNearest();
            }
        }

        // Функция для привязки к ближайшей карточке
        function snapToNearest() {
            const card = slider.querySelector('.card-project');
            if (!card) return;

            const cardWidth = card.offsetWidth;
            const gap = 8; // gap-8 = 8px
            const snapPoint = cardWidth + gap;

            const currentScroll = slider.scrollLeft;
            const snapIndex = Math.round(currentScroll / snapPoint);
            const targetScroll = snapIndex * snapPoint;

            smoothScroll(targetScroll);
        }

        // Обновляем скорость
        function updateVelocity() {
            const currentTime = performance.now();
            const deltaTime = currentTime - lastTime;

            if (deltaTime > 0) {
                const currentScroll = slider.scrollLeft;
                velocity = (currentScroll - lastScrollLeft) / deltaTime * 16; // Нормализуем до 60fps
                lastScrollLeft = currentScroll;
                lastTime = currentTime;
            }
        }

        // События для мыши
        slider.addEventListener('mousedown', (e) => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }

            isDragging = true;
            slider.classList.add('dragging');
            startX = e.pageX - slider.getBoundingClientRect().left;
            scrollLeft = slider.scrollLeft;

            // Инициализируем отслеживание скорости
            lastScrollLeft = scrollLeft;
            lastTime = performance.now();
            velocity = 0;

            // Предотвращаем выделение текста
            slider.style.userSelect = 'none';
        });

        slider.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                slider.classList.remove('dragging');
                slider.style.userSelect = '';

                // Запускаем инерцию
                updateVelocity();
                requestAnimationFrame(inertialScroll);
            }
        });

        slider.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                slider.classList.remove('dragging');
                slider.style.userSelect = '';

                // Обновляем скорость перед запуском инерции
                updateVelocity();

                // Запускаем инерционную прокрутку
                requestAnimationFrame(inertialScroll);
            }
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const rect = slider.getBoundingClientRect();
            const x = e.pageX - rect.left;
            const walk = (x - startX) * 2; // Скорость прокрутки

            // Обновляем скролл
            slider.scrollLeft = scrollLeft - walk;

            // Обновляем скорость в реальном времени
            updateVelocity();
        });

        // События для тач-устройств
        slider.addEventListener('touchstart', (e) => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }

            isDragging = true;
            const rect = slider.getBoundingClientRect();
            startX = e.touches[0].pageX - rect.left;
            scrollLeft = slider.scrollLeft;

            // Инициализируем отслеживание скорости
            lastScrollLeft = scrollLeft;
            lastTime = performance.now();
            velocity = 0;
        });

        slider.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;

                // Обновляем скорость перед запуском инерции
                updateVelocity();

                // Запускаем инерционную прокрутку
                requestAnimationFrame(inertialScroll);
            }
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const rect = slider.getBoundingClientRect();
            const x = e.touches[0].pageX - rect.left;
            const walk = (x - startX) * 2;

            // Обновляем скролл
            slider.scrollLeft = scrollLeft - walk;

            // Обновляем скорость в реальном времени
            updateVelocity();
        });

        // Предотвращаем стандартное поведение колеса мыши
        slider.addEventListener('wheel', (e) => {
            e.preventDefault();

            // Используем дельту колеса для горизонтального скролла
            const delta = e.deltaY || e.deltaX;
            const targetScroll = slider.scrollLeft + delta;

            smoothScroll(targetScroll, 150);
        }, { passive: false });

        // Восстанавливаем возможность выделения текста после драга
        slider.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        // Предотвращаем стандартное поведение браузера для изображений
        const images = slider.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', e => e.preventDefault());
        });

        // Обработчик ресайза окна
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Обновляем позицию после ресайза
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
                snapToNearest();
            }, 150);
        });
    }
});