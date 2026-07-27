/*==================================================
            MI VISA GDL
            SCRIPT V4
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
                NAVBAR SCROLL
    ==========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /*==========================================
            MENU HAMBURGUESA
    ==========================================*/

    const menuButton = document.querySelector(".menu-toggle");

    const menu = document.querySelector(".menu");

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }


    /*==========================================
            CERRAR MENU AL HACER CLICK
    ==========================================*/

    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {

                menu.classList.remove("active");

            }

        });

    });


    /*==========================================
            SCROLL SUAVE
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

});