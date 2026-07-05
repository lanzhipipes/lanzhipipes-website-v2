const menuToggle = document.querySelector(".menu-toggle");
const inquiryForm = document.querySelector("#inquiry-form");
const formMessage = document.querySelector(".form-message");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener("submit", () => {
    formMessage.textContent = "Sending your inquiry. Thank you for contacting Lanzhi Pipeline.";
    formMessage.classList.add("is-visible");
  });
}
