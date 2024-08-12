document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("jwt_token");

  if (!token) {
    // Redirect to login page if no token is found
    window.location.href = "/login";
    return;
  }

  // Example: Fetch user info using the token (replace with your actual implementation)
  fetch("/auth/user-info", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById(
          "userName"
        ).textContent = `${data.user.firstName} ${data.user.lastName}`;
        document.getElementById("userEmail").textContent = data.user.email;
      } else {
        console.error("Failed to retrieve user info");
      }
    })
    .catch((err) => {
      console.error("Error fetching user info:", err);
    });
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Clear local storage or cookies
      localStorage.removeItem("jwt_token");

      // Redirect to the login page
      window.location.href = "/login";
    } else {
      console.error("Logout failed");
    }
  } catch (err) {
    console.error("Error during logout:", err);
  }
});
