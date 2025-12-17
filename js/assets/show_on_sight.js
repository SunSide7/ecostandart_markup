document.addEventListener("DOMContentLoaded", function () {
    (function () {
        const elements = [];
        let isInitialized = false;

        function checkVisibility() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const triggerOffset = windowHeight * 0.8;

            elements.forEach(item => {
                if (item.active) return;

                const rect = item.element.getBoundingClientRect();
                const elementTop = rect.top + scrollY;

                if (elementTop < scrollY + triggerOffset) {
                    item.element.classList.add('active');
                    item.active = true;

                    // Кастомное событие
                    const event = new CustomEvent('elementVisible', {
                        detail: {element: item.element}
                    });
                    item.element.dispatchEvent(event);
                }
            });

            // Если все элементы активированы, останавливаем проверку
            if (elements.length > 0 && elements.every(item => item.active)) {
                window.removeEventListener('scroll', checkVisibility);
                window.removeEventListener('resize', checkVisibility);
            }
        }

        function initialize() {
            if (isInitialized) return;

            document.querySelectorAll('.show-on-sight').forEach(el => {
                elements.push({
                    element: el,
                    active: false
                });
            });

            if (elements.length > 0) {
                window.addEventListener('scroll', checkVisibility, {passive: true});
                window.addEventListener('resize', checkVisibility, {passive: true});
                checkVisibility(); // Первоначальная проверка
            }

            isInitialized = true;
        }

        // Инициализация
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
        } else {
            initialize();
        }
    })();
});