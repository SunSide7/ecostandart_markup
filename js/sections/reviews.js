document.addEventListener('DOMContentLoaded', function() {
    // Данные отзывов
    const reviewsData = [
        {
            id: 1,
            clientName: "Екатерина",
            reviewText: "Добрый день!<br><br>Мой опыт взаимодействия с Экостандарт очень положительный. Разбила ртутный градусник, позвонила в Экостандарт по тел. на сайте — Профильного специалиста очень быстро нашли, он оперативно приехал ко мне в Подмосковье. Специалист проверил кол-во паров ртути, убрал ртуть, в том числе в стыках ламината, дал рекомендации о действиях, которые помогут уменьшить кол — во паров. Через 10 дней Специалист приехал повторно проверить качество работы.",
            reviewThanks: "Отдельное спасибо за профессионализм и вежливость.",
            reason: "Разбили градусник",
            researchType: "Анализ воздуха на ртуть",
            location: "Квартира, 4 комнаты",
            duration: "24 часа",
            result: "Демеруризация, контрольные измерения",
            clientInitial: "E"
        },
        {
            id: 2,
            clientName: "Александр",
            reviewText: "Обратился в Экостандарт для проведения экологической экспертизы офисного помещения после ремонта.<br><br>Компания проявила высокий профессионализм на всех этапах работы. Специалисты оперативно выехали на объект, провели полный комплекс измерений, включая анализ на формальдегид и другие летучие соединения.",
            reviewThanks: "Рекомендую как надежного партнера!",
            reason: "Экспертиза после ремонта",
            researchType: "Анализ воздуха на ЛОС",
            location: "Офисное помещение, 120 м²",
            duration: "48 часов",
            result: "Протокол измерений, рекомендации",
            clientInitial: "А"
        },
        {
            id: 3,
            clientName: "Марина",
            reviewText: "Заказывали проверку воздуха в детском саду после жалоб родителей на неприятный запах.<br><br>Сотрудники Экостандарта провели работу очень аккуратно и профессионально, не мешая учебному процессу. Были взяты пробы в разных помещениях, проведен расширенный анализ.",
            reviewThanks: "Благодарю за оперативность и качество!",
            reason: "Жалобы на запах в помещении",
            researchType: "Комплексный анализ воздуха",
            location: "Детский сад, 8 помещений",
            duration: "72 часа",
            result: "Заключение о безопасности",
            clientInitial: "M"
        },
        {
            id: 4,
            clientName: "Дмитрий",
            reviewText: "Требовалось провести измерения уровня шума от нового оборудования на производстве.<br><br>Специалисты приехали точно в согласованное время, работали профессионально, использовали современное оборудование. Предоставили подробный отчет с графиками и рекомендациями по снижению шума.",
            reviewThanks: "Отличная работа!",
            reason: "Измерение шума оборудования",
            researchType: "Акустические измерения",
            location: "Производственный цех",
            duration: "6 часов",
            result: "Протокол измерений, рекомендации",
            clientInitial: "Д"
        }
    ];

    // Находим элементы управления
    let prevBtn = document.querySelector('.reviews-prev');
    let nextBtn = document.querySelector('.reviews-next');

    // Если кнопки не найдены по классу, ищем по структуре
    const buttons = document.querySelectorAll('.d-flex.gap-8.overflow-visible button');
    if (buttons.length >= 2) {
        if (!prevBtn) prevBtn = buttons[0];
        if (!nextBtn) nextBtn = buttons[1];

        // Добавляем классы для идентификации
        prevBtn.classList.add('reviews-prev');
        nextBtn.classList.add('reviews-next');
    }

    let currentReview = 0;

    // Функция обновления отзыва
    function updateReview(index) {
        if (index < 0) index = reviewsData.length - 1;
        if (index >= reviewsData.length) index = 0;

        currentReview = index;
        const review = reviewsData[index];

        // Обновляем все поля с соответствующими классами
        updateField('.review-client-initial', review.clientInitial);
        updateField('.review-client-name', review.clientName);
        updateField('.review-text', review.reviewText);
        updateField('.review-thanks', review.reviewThanks);
        updateField('.review-reason', review.reason);
        updateField('.review-research-type', review.researchType);
        updateField('.review-location', review.location);
        updateField('.review-duration', review.duration);
        updateField('.review-result', review.result);
    }

    // Функция обновления конкретного поля
    function updateField(selector, value) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = value;
        }
    }

    // Обработчики кнопок
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateReview(currentReview - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateReview(currentReview + 1);
        });
    }

    // Инициализация
    updateReview(0);
});