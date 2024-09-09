document.addEventListener("DOMContentLoaded", function() {
    // Mostrar mensaje de bienvenida
    alert("¡Bienvenido a mi CV digital!");

    // Desplazamiento suave al hacer clic en el botón "Contáctame"
    const contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", function() {
        document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" });
    });

    // Cambiar el color de fondo del encabezado cuando se desplaza
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Mostrar el botón de volver arriba
        const scrollToTopButton = document.getElementById("scrollToTop");
        if (window.scrollY > 200) { // Cambia el valor según la visibilidad deseada
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Ir arriba al hacer clic en el botón
    document.getElementById("scrollToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

      // Inicializar EmailJS con tu Public Key
    emailjs.init("UeslxAHXwiY0oJLrU"); // Reemplaza con tu clave pública

    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Enviar los datos del formulario a EmailJS
        emailjs.sendForm("service_tuu6e1d", "template_d2g9w48", contactForm)
            .then(function(response) {
                console.log("Correo enviado exitosamente", response);
                formResponse.innerHTML = "<p>Gracias por tu mensaje. ¡Te responderé pronto!</p>";
                contactForm.reset(); // Limpiar el formulario
            }, function(error) {
                console.error("Error al enviar el correo", error);
                formResponse.innerHTML = "<p>Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.</p>";
            });
    });


});
