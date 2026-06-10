const secoes = document.querySelectorAll('section');
const opcoes = document.querySelectorAll('#menu .opcao');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            opcoes.forEach(opcao => {
                opcao.classList.remove('ativa');
            });

            const link = document.querySelector(
                `#menu a[href="#${entry.target.id}"]`
            );

            if (link) {

                const opcaoAtiva = link.parentElement;

                opcaoAtiva.classList.add('ativa');

                opcaoAtiva.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });

            }
        }

    });

}, {
    rootMargin: "-335px 0px -70% 0px",
    threshold: 0
});

secoes.forEach(secao => {
    observer.observe(secao);
});
