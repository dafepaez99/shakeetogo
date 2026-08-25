// 1) Marcar link activo según la página actual
(function markActiveNav() {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav__link").forEach(link => {
    const page = (link.dataset.page || "").toLowerCase();
    if (page === current) link.classList.add("active");
  });
})();

// 2) Menú mobile (hamburguesa)
(function mobileMenu() {
  const btn = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__links");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar menú al hacer click en un link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Cerrar si clic fuera
  document.addEventListener("click", (e) => {
    const clickedInside = menu.contains(e.target) || btn.contains(e.target);
    if (!clickedInside) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();