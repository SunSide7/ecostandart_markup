document.addEventListener("DOMContentLoaded", function () {
    let animationDuration = 2000; // значение по умолчанию для десктопа

    // Создаем медиа-запрос для ширины до 959px
    const mobileMediaQuery = window.matchMedia('(max-width: 959px)');

    // Функция для обновления значения
    function updateAnimationDuration() {
        if (mobileMediaQuery.matches) {
            animationDuration = 1200; // для мобильных устройств
        } else {
            animationDuration = 2000; // для десктопа
        }
        console.log('animationDuration updated to:', animationDuration);
    }

    // Инициализируем при загрузке
    updateAnimationDuration();

    // Слушаем изменение размера окна
    mobileMediaQuery.addEventListener('change', updateAnimationDuration);

    function initElementAnimation(element, isDiagram) {
        var startValue, endValue;

        if (isDiagram) {
            var currentFill = getComputedStyle(element).getPropertyValue('--fill').trim();
            startValue = currentFill ? parseFloat(currentFill) : 0;
            endValue = parseFloat(element.dataset.max) || 100;
        } else {
            startValue = parseFloat(element.textContent) || 0;
            endValue = parseFloat(element.dataset.max) || 100;
        }

        var startTime = null;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;

            var progress = Math.min((timestamp - startTime) / animationDuration, 1);
            var currentValue = Math.floor(startValue + (endValue - startValue) * progress);

            if (isDiagram) {
                element.style.setProperty('--fill', currentValue);
            } else {
                element.textContent = currentValue;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        return animate;
    }

    function checkElementVisibility() {
        var scrollY = window.scrollY;
        var windowHeight = window.innerHeight;
        var triggerPoint = windowHeight * 0.8;

        // Проверяем числа
        document.querySelectorAll('.rising-number').forEach(function(number) {
            if (number.dataset.animated) return;

            var rect = number.getBoundingClientRect();
            if (rect.top < triggerPoint) {
                number.dataset.animated = 'true';
                var animation = initElementAnimation(number, false);
                requestAnimationFrame(animation);
            }
        });

        // Проверяем диаграммы
        document.querySelectorAll('.rising-diagram').forEach(function(diagram) {
            if (diagram.dataset.animated) return;

            var rect = diagram.getBoundingClientRect();
            if (rect.top < triggerPoint) {
                diagram.dataset.animated = 'true';
                var animation = initElementAnimation(diagram, true);
                requestAnimationFrame(animation);
            }
        });
    }

    window.addEventListener('scroll', checkElementVisibility);
    checkElementVisibility(); // Проверяем сразу при загрузке
});