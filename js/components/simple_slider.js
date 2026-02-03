document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.simple-slider');

    sliders.forEach(slider => {
        let isDragging = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastX;
        let lastTime;

        // Функция для обработки начала драга
        function startDrag(e) {
            isDragging = true;
            slider.classList.add('dragging');

            // Получаем начальные координаты
            const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
            startX = pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;

            // Сброс скорости
            velocity = 0;
            lastX = pageX;
            lastTime = Date.now();

            // Предотвращаем стандартное поведение
            e.preventDefault();
        }

        // Функция для обработки движения
        function duringDrag(e) {
            if (!isDragging) return;

            const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
            const x = pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // Коэффициент скорости

            // Обновляем скролл
            slider.scrollLeft = scrollLeft - walk;

            // Рассчитываем скорость для инерции
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime;

            if (deltaTime > 0) {
                velocity = (pageX - lastX) / deltaTime;
                lastX = pageX;
                lastTime = currentTime;
            }

            e.preventDefault();
        }

        // Функция для завершения драга
        function endDrag() {
            if (!isDragging) return;

            isDragging = false;
            slider.classList.remove('dragging');

            // Применяем инерцию
            if (Math.abs(velocity) > 0.1) {
                const inertiaScroll = () => {
                    velocity *= 0.95; // Трение
                    slider.scrollLeft -= velocity * 10;

                    if (Math.abs(velocity) > 0.1) {
                        requestAnimationFrame(inertiaScroll);
                    }
                };
                requestAnimationFrame(inertiaScroll);
            }
        }

        // Обработчики мыши
        // slider.addEventListener('mousedown', startDrag);
        // slider.addEventListener('mousemove', duringDrag);
        // slider.addEventListener('mouseup', endDrag);
        // slider.addEventListener('mouseleave', endDrag);

        // Обработчики тач-событий
        slider.addEventListener('touchstart', startDrag);
        slider.addEventListener('touchmove', duringDrag);
        slider.addEventListener('touchend', endDrag);
        slider.addEventListener('touchcancel', endDrag);

        // Обработчик колеса мыши
        slider.addEventListener('wheel', function(e) {
            // Предотвращаем вертикальный скролл
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                slider.scrollLeft += e.deltaY * 0.8; // Коэффициент скорости
            }
        }, { passive: false });

        // Предотвращаем стандартное поведение для изображений
        slider.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', e => e.preventDefault());
        });
    });
});