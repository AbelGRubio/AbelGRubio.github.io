document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll("pre");

    blocks.forEach((pre, index) => {
      // Ocultar contenido
      pre.style.display = "none";

      // Crear contenedor
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Botón para expandir/collapse
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Show code ▼";
      toggleBtn.className = "toggle-btn";
      toggleBtn.onclick = () => {
        const isVisible = pre.style.display === "block";
        pre.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "Show code ▼" : "Hide code ▲";
      };
      wrapper.insertBefore(toggleBtn, pre);

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
      wrapper.insertBefore(copyBtn, pre);
    });
  });