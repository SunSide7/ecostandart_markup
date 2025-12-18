document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.simple-slider');
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Для мыши
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        slider.classList.add('dragging');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Скорость прокрутки
        slider.scrollLeft = scrollLeft - walk;
    });

    // Для тач-устройств
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDragging = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});