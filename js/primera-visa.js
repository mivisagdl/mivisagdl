(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJKJ7SP2');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5TDJWBX1T4');


/* =========================================================
   MI VISA GDL — FAQ
   Apertura/cierre accesible de preguntas frecuentes
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (button) {
    const answer = button.nextElementSibling;
    if (!answer) return;

    answer.hidden = true;
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function () {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      faqQuestions.forEach(function (otherButton) {
        const otherAnswer = otherButton.nextElementSibling;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherAnswer) otherAnswer.hidden = true;

        const otherIcon = otherButton.querySelector(".faq-icon");
        if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;

        const icon = button.querySelector(".faq-icon");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
