document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const payload = {
      email: email,
      subject: subject,
      message: message,
    };

    // Mostrar el mensaje de "Loading"
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    document.querySelector(".sent-message").style.display = "none";

    try {
      // Realiza la solicitud POST a la API

      const response = await fetch("https://api-send-message-ogmz.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      document.querySelector(".loading").style.display = "none"; // Ocultar "Loading"

      if (response.ok) {
        document.querySelector(".sent-message").style.display = "block";
      } else {
        const errorData = await response.json();
        document.querySelector(".error-message").innerHTML =
          `Error: ${errorData.detail || "Error desconocido"}`;
        document.querySelector(".error-message").style.display = "block";
      }
    } catch (error) {
      document.querySelector(".loading").style.display = "none"; // Ocultar "Loading"
      document.querySelector(".error-message").innerHTML =
        `Error: Please send a message to a.grubio@hotmail.com [${error.message}]`;
      document.querySelector(".error-message").style.display = "block";
    }
  });
});
