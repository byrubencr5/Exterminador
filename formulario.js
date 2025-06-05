document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        console.log("¡Mensaje enviado con éxito!");
        window.location.href = "agradecimiento.html";
        form.reset();
      })
      .catch(() => {
        alert("Ocurrió un error. Intenta más tarde.");
      });
  });
});
