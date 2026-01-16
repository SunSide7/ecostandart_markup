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

document.addEventListener('DOMContentLoaded', function() {
    function syncHeights() {
        // Находим все контейнеры с аккордеонами
        document.querySelectorAll('.accordeon-container').forEach(container => {
            const columns = container.querySelectorAll('.d-flex.flex-column');
            if (columns.length < 2) return;

            // Собираем аккордеоны по колонкам
            const columnAccs = Array.from(columns).map(col =>
                Array.from(col.querySelectorAll('.accordeon'))
            );

            // Для каждой строки (горизонтальной позиции)
            const maxRows = Math.max(...columnAccs.map(col => col.length));

            for (let i = 0; i < maxRows; i++) {
                const rowAccs = columnAccs.map(col => col[i]).filter(Boolean);

                // Пропускаем если есть активный или меньше 2 аккордеонов
                if (rowAccs.some(acc => acc.classList.contains('active')) || rowAccs.length < 2) {
                    rowAccs.forEach(acc => acc.style.minHeight = '');
                    continue;
                }

                // Находим максимальную высоту
                let maxH = 0;
                rowAccs.forEach(acc => {
                    const temp = acc.style.minHeight;
                    acc.style.minHeight = '';
                    maxH = Math.max(maxH, acc.scrollHeight);
                    acc.style.minHeight = temp;
                });

                // Устанавливаем одинаковую высоту
                if (maxH > 0) {
                    rowAccs.forEach(acc => {
                        acc.style.minHeight = `${maxH}px`;
                    });
                }
            }
        });
    }

    syncHeights();
    setTimeout(syncHeights, 100);
    setTimeout(syncHeights, 500);

    window.addEventListener('resize', syncHeights);
});

document.addEventListener('DOMContentLoaded', function() {
    const humanAccordeons = document.querySelectorAll('.human-accordeons .accordeon');

    humanAccordeons.forEach((humanAccordeon, index) => {
        const title = humanAccordeon.querySelector('.human-accordeon-title');
        const humanElement = document.querySelector(`.human-element-${index + 1}`);

        humanAccordeon.addEventListener('click', function() {
            if (humanElement) {
                humanElement.classList.toggle('active', humanAccordeon.classList.contains('active'));
            }

            if (title) {
                title.classList.toggle('active', humanAccordeon.classList.contains('active'));
            }
        });
    });
});