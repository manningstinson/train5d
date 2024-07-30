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
          <li><a href="training.html">Training</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="schedule.html" class="button">Schedule Consult</a></li>
        </ul>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
