function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
  document.body.style.overflow = "hidden";  // Disable body scrolling
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto";  // Enable body scrolling again
}

