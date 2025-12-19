let accordeonHeights = new Map();

function updateAccordeonHeight(content) {
    const height = content.scrollHeight;
    content.style.setProperty("--max-height", `${height}px`);
    accordeonHeights.set(content, height);
}

function calculateAllAccordeonHeights() {
    document.querySelectorAll(".accordeon-content").forEach(content => {
        updateAccordeonHeight(content);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', calculateAllAccordeonHeights);

// Обновление при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(calculateAllAccordeonHeights, 100);
});

// Функция для обновления конкретного аккордеона
function updateAccordeon(accordeon) {
    const content = accordeon.querySelector('.accordeon-content');
    if (content) {
        updateAccordeonHeight(content);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы аккордеона
    const accordeons = document.querySelectorAll('.accordeon');

    // Добавляем обработчик клика на каждый аккордеон
    accordeons.forEach(accordeon => {
        accordeon.addEventListener('click', function(e) {
            // Проверяем, не кликнули ли мы на элементы с классом .unclickable
            if (e.target.closest('.unclickable')) {
                return;
            }

            // Проверяем, активен ли текущий аккордеон
            const isActive = this.classList.contains('active');

            // Удаляем класс .active у всех аккордеонов
            accordeons.forEach(acc => {
                acc.classList.remove('active');
            });

            // Если текущий аккордеон не был активен - добавляем ему класс .active
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
});