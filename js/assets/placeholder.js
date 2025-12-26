document.addEventListener('DOMContentLoaded', function() {
    function colorizeAsterisksInPlaceholders() {
        // Находим все input элементы с placeholder
        const inputs = document.querySelectorAll('input[placeholder]');

        inputs.forEach(input => {
            const originalPlaceholder = input.getAttribute('placeholder');

            // Проверяем, есть ли звёздочка в placeholder
            if (originalPlaceholder.includes('*')) {
                // Создаем элемент для стилизованного placeholder
                const placeholderSpan = document.createElement('span');
                placeholderSpan.className = 'styled-placeholder';
                placeholderSpan.style.cssText = `
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: #B7BBC3;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: calc(100% - 24px);
                    font-size: 14px;
                    font-weight: 500;
                `;

                // Создаем HTML с красными звёздочками
                let htmlContent = originalPlaceholder;
                htmlContent = htmlContent.replace(/\*/g, '<span style="color: #EA4435;">*</span>');
                placeholderSpan.innerHTML = htmlContent;

                // Позиционируем input относительно
                input.style.position = 'relative';

                // Создаем контейнер для input и placeholder
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';

                // Обертываем input
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);
                wrapper.appendChild(placeholderSpan);

                // Скрываем оригинальный placeholder
                input.setAttribute('placeholder', '');

                // Показываем/скрываем стилизованный placeholder
                function togglePlaceholder() {
                    if (input.value === '') {
                        placeholderSpan.style.display = 'block';
                    } else {
                        placeholderSpan.style.display = 'none';
                    }
                }

                input.addEventListener('input', togglePlaceholder);
                input.addEventListener('focus', togglePlaceholder);
                input.addEventListener('blur', togglePlaceholder);

                // Инициализация
                togglePlaceholder();
            }
        });
    }

    colorizeAsterisksInPlaceholders();
});