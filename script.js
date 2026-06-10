const secoes = document.querySelectorAll("section");
const opcoes = document.querySelectorAll("#menu .opcao");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            opcoes.forEach(opcao => {
                opcao.classList.remove("ativa");
            });

            const link = document.querySelector(
                `#menu a[href="#${entry.target.id}"]`
            );

            if (link) {

                const opcaoAtiva = link.parentElement;

                opcaoAtiva.classList.add("ativa");

                document.getElementById("menu").scrollTo({
                    left: opcaoAtiva.offsetLeft - 140,
                    behavior: "smooth"
                });

            }
        }

    });

}, {
    rootMargin: "-10% 0px -50% 0px",
    threshold: 0.1
});

secoes.forEach(secao => observer.observe(secao));