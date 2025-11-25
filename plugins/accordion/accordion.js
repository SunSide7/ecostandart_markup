const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-item__header");
    const content = item.querySelector(".accordion-item__content");

    header.addEventListener("click", function () {
        item.classList.toggle("accordion__item--active");
        const isActive = item.classList.contains("accordion__item--active");
        const contentInner = content.querySelector(".accordion-item__content-inner");
        header.setAttribute("aria-expanded", isActive);
        content.setAttribute("aria-hidden", !isActive);


        isActive
            ? content.style.maxHeight = contentInner.clientHeight + 'px'
            : content.style.maxHeight = 0;

    });

});

const lastAccordionItem = document.querySelector(".accordion__item:last-of-type");