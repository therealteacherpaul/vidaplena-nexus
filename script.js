const backToTopButton = document.getElementById("backToTop");
const metricNumbers = document.querySelectorAll(".metric-number");
const revealElements = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

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

const animateMetrics = () => {
  metricNumbers.forEach((number) => {
    const target = Number(number.getAttribute("data-target"));
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 25));

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

let metricsAnimated = false;

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      element.classList.add("visible");
    }
  });

  const heroMetrics = document.querySelector(".hero-metrics");
  if (heroMetrics && !metricsAnimated) {
    const top = heroMetrics.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      animateMetrics();
      metricsAnimated = true;
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);