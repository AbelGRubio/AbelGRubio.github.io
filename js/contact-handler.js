// public/js/contact-handler.js

// Función para enviar email
export async function sendEmail(emailData) {
  try {
    const response = await fetch("https://fastapi-agr.vercel.app/api/py/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Función para manejar el envío con notificaciones
export async function handleSendEmail(emailData) {
  try {
    showNotification("loading", "Sending email...");
    const result = await sendEmail(emailData);
    showNotification("success", "📧 Email successfully sent!");
    return result;
  } catch (error) {
    showNotification("error", "❌ Failed to send email");
    throw error;
  }
}

// Función para manejar el submit del formulario
export async function handleSubmit(event, form) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: "New client",
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    termsAccepted: formData.get("termsAccepted") === "on",
  };

  await handleSendEmail(data);
}

// Notificación visual simple
function showNotification(type, message) {
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg z-100 ${
    type === "success" ? "bg-green-100" :
    type === "error" ? "bg-red-100" :
    "bg-blue-100"
  } text-black`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
