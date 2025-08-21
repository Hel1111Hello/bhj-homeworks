document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function checkVisibility() {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("reveal_active");
      } else {
        el.classList.remove("reveal_active");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});