document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <div class="logo">
        <a href="index.html"><img src="assets/logos/train5d-logo.png" alt="Train5D Logo"></a>
      </div>
      <nav>
        <button class="hamburger-menu" aria-label="Toggle navigation">
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">My Profile</a></li>
          <li><a href="workout-planner.html">Workout Planner</a></li>
          <li><a href="login.html" class="button">Login/Signup</a></li>
        </ul>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Toggle hamburger menu
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
