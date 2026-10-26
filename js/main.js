
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// Client-side contact form:
// For a real submission workflow, connect this form to EmailJS, FormSubmit,
// or your own server endpoint. Never expose a Mailjet API secret in browser JS.
const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formStatus) return;
  formStatus.textContent =
    "Thanks! Your message is ready to be connected to your email service.";
  formStatus.hidden = false;
  form.reset();
});
