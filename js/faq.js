const faqPreguntas = document.querySelectorAll(".faq-question");

faqPreguntas.forEach((pregunta) => {

    pregunta.addEventListener("click", () => {

        const actual = pregunta.parentElement;

        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== actual) {

                item.classList.remove("active");

            }

        });

        actual.classList.toggle("active");

    });

});