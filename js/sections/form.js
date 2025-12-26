document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех форм
    document.querySelectorAll('[class^="form-"]').forEach(formContainer => {
        const form = formContainer.querySelector('form');
        const submitBtn = formContainer.querySelector('button');

        if (!form || !submitBtn) return;

        // Функция проверки формы
        function checkForm() {
            const inputs = form.querySelectorAll('input');
            let isValid = true;

            inputs.forEach(input => {
                const wrapper = input.closest('.input');
                const value = input.value.trim();
                const isRequired = input.getAttribute('placeholder')?.includes('*');

                // Проверка обязательных полей
                if (isRequired && !value) {
                    isValid = false;
                    wrapper.classList.add('error');
                } else {
                    wrapper.classList.remove('error');
                }

                // Простая валидация email
                if (input.getAttribute('placeholder')?.toLowerCase().includes('email') && value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        wrapper.classList.add('error');
                    }
                }

                // Простая валидация телефона
                if (input.getAttribute('placeholder')?.includes('+7') && value) {
                    const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
                    if (!phoneRegex.test(value)) {
                        isValid = false;
                        wrapper.classList.add('error');
                    }
                }
            });

            return isValid;
        }

        // Обработчики событий
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', checkForm);
            input.addEventListener('blur', checkForm);
        });

        // Обработчик отправки
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (checkForm()) {
                formContainer.classList.add('active');
            }
        });

        // Инициализация
        checkForm();
    });
});