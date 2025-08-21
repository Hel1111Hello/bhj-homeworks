document.addEventListener("DOMContentLoaded", () => {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll(".rotator__case");
    let activeIndex = 0;

    function rotate() {

      const current = cases[activeIndex];
      current.classList.remove("rotator__case_active");

      activeIndex = (activeIndex + 1) % cases.length;
      const next = cases[activeIndex];

      next.classList.add("rotator__case_active");
      next.style.color = next.dataset.color || "inherit";

      const speed = next.dataset.speed ? parseInt(next.dataset.speed) : 1000;
      setTimeout(rotate, speed);
    }
 
    const firstActive = cases[activeIndex];
    firstActive.style.color = firstActive.dataset.color || "inherit";
    
    const initialSpeed = firstActive.dataset.speed ? parseInt(firstActive.dataset.speed) : 1000;
    setTimeout(rotate, initialSpeed);
  });
});