document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("pre");

  blocks.forEach((pre) => {
    if (pre.classList.contains("no-wrapper")) return;
    const lines = pre.innerText.trim().split("\n").length;

    // Ocultar contenido
    pre.style.display = "none";

    // Crear contenedor principal
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Crear contenedor para botones
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "code-button-container";
    if (lines > 5){
      // Botón para expandir/collapse
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Show code ▼";
      toggleBtn.className = "toggle-btn";
      toggleBtn.onclick = () => {
        const isVisible = pre.style.display === "block";
        pre.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "Show code ▼" : "Hide code ▲";
      };
      buttonContainer.appendChild(toggleBtn);
    } else {
      pre.style.display = "block"; // Mostrar directamente si es corto
    }

    // Botón para copiar
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className = "copy-btn";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(pre.innerText).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
      });
    };
    buttonContainer.appendChild(copyBtn);

    // Insertar botones antes del <pre>
    wrapper.insertBefore(buttonContainer, pre);
  });
});
