// js/header.js
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <div class="logo">
        <a href="index.html"><img src="path_to_logo.png" alt="Train5D Logo"></a>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">My Profile</a></li>
          <li><a href="workout-planner.html">Workout Planner</a></li>
          <li><a href="login.html" class="button">Login</a></li>
        </ul>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
