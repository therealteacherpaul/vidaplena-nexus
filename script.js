const backToTopButton = document.getElementById("backToTop");
const statNumbers = document.querySelectorAll(".stat-number");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const animateNumbers = () => {
  statNumbers.forEach((number) => {
    const target = Number(number.getAttribute("data-target"));
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 30));

    const update = () => {
      current += increment;
      if (current >= target) {
        number.textContent = target;
      } else {
        number.textContent = current;
        requestAnimationFrame(update);
      }
    };

    update();
  });
};

let hasAnimated = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  if (!statsSection || hasAnimated) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 80) {
    animateNumbers();
    hasAnimated = true;
  }
});