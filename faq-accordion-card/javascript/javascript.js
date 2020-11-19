function init() {
// Modules
    accordion()

    function accordion() {
        const accordionButtons = document.querySelectorAll('[data-behaviour="accordion-button"]')

        ;[...accordionButtons].map((accordionButton) => {
            accordionButton.addEventListener('click', function() {
                const name = accordionButton.dataset.target
                const target = document.querySelector('[data-element="' +  name + '"]')

                if (accordionButton.classList.contains('accordion__button--active')) {
                    accordionButton.classList.remove('accordion__button--active')
                    target.classList.remove('accordion__content--active')
                } else {
                    target.classList.add('accordion__content--active')
                    accordionButton.classList.add('accordion__button--active')
                }
            })
        })
    }
}

init()