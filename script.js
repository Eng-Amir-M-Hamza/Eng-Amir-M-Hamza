function reveal() {
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = cards[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      cards[i].style.opacity = 1;
      cards[i].style.transform = "translateY(0)";
      cards[i].style.transition = "0.8s ease";
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
