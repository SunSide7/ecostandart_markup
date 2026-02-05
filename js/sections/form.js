document.addEventListener('DOMContentLoaded', function() {
    // Находим все input поля
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const telInputs = document.querySelectorAll('input[type="tel"]');

    // Регулярные выражения для проверки
    const emailPattern = /^[a-zA-Z0-9@._%+-]*$/; // Только латинские буквы, цифры и разрешенные символы для email
    const telPattern = /^[\d+*#\s\-()]*$/; // Только цифры, +, *, #, пробелы, дефисы, скобки

    // Функция валидации email
    function validateEmail(input) {
        const value = input.value;
        const parent = input.closest('.input');
        const errorElement = parent.querySelector('p');

        // Проверяем на недопустимые символы
        if (!emailPattern.test(value)) {
            parent.classList.add('error');
            errorElement.textContent = 'ошибка';
            return false;
        } else {
            parent.classList.remove('error');
            errorElement.textContent = '';
            return true;
        }
    }

    // Функция валидации телефона
    function validateTel(input) {
        const value = input.value;
        const parent = input.closest('.input');
        const errorElement = parent.querySelector('p');

        // Проверяем на недопустимые символы
        if (!telPattern.test(value)) {
            parent.classList.add('error');
            errorElement.textContent = 'ошибка';
            return false;
        } else {
            parent.classList.remove('error');
            errorElement.textContent = '';
            return true;
        }
    }

    // Обработчики для email полей
    emailInputs.forEach(input => {
        // Проверка при вводе
        input.addEventListener('input', function() {
            validateEmail(this);
        });

        // Проверка при потере фокуса
        input.addEventListener('blur', function() {
            validateEmail(this);
        });

        // Предотвращаем ввод недопустимых символов
        input.addEventListener('keypress', function(e) {
            const char = e.key;

            // Разрешаем управляющие клавиши
            if (e.ctrlKey || e.altKey || e.metaKey) return;

            // Разрешаем специальные клавиши
            if ([
                'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight',
                'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End',
                'Enter', 'Escape'
            ].includes(char)) return;

            // Проверяем символ
            if (!emailPattern.test(char)) {
                e.preventDefault();
                // Показываем ошибку сразу
                const parent = this.closest('.input');
                const errorElement = parent.querySelector('p');
                parent.classList.add('error');
                errorElement.textContent = 'ошибка';
            }
        });

        // Обработка вставки текста
        input.addEventListener('paste', function(e) {
            // Даем время на вставку, затем проверяем
            setTimeout(() => {
                validateEmail(this);
            }, 10);
        });
    });

    // Обработчики для телефонных полей
    telInputs.forEach(input => {
        // Проверка при вводе
        input.addEventListener('input', function() {
            validateTel(this);
        });

        // Проверка при потере фокуса
        input.addEventListener('blur', function() {
            validateTel(this);
        });

        // Предотвращаем ввод недопустимых символов
        input.addEventListener('keypress', function(e) {
            const char = e.key;

            // Разрешаем управляющие клавиши
            if (e.ctrlKey || e.altKey || e.metaKey) return;

            // Разрешаем специальные клавиши
            if ([
                'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight',
                'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End',
                'Enter', 'Escape'
            ].includes(char)) return;

            // Проверяем символ
            if (!telPattern.test(char)) {
                e.preventDefault();
                // Показываем ошибку сразу
                const parent = this.closest('.input');
                const errorElement = parent.querySelector('p');
                parent.classList.add('error');
                errorElement.textContent = 'ошибка';
            }
        });

        // Обработка вставки текста
        input.addEventListener('paste', function(e) {
            // Даем время на вставку, затем проверяем
            setTimeout(() => {
                validateTel(this);
            }, 10);
        });
    });
});