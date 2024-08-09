function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  // Here you could decode the JWT token if you need to access user information
  // Example:
  // const userInfo = jwt_decode(response.credential);
  // console.log(userInfo);

  // Store the JWT token in local storage or a cookie if needed
  localStorage.setItem("jwt_token", response.credential);

  // Redirect to the profile page
  window.location.href = "profile.html";
}

window.onload = function () {
  // Check if the user is already logged in by checking the JWT token
  const token = localStorage.getItem("jwt_token");
  if (token) {
    // Optionally, you could verify the token before redirecting
    window.location.href = "profile.html";
    return; // Exit the function to prevent further initialization
  }

  // Initialize Google sign-in if the user is not logged in
  google.accounts.id.initialize({
    client_id:
      "482824739572-mr45ubm3oghdit3jboigvj87fssco3kh.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("g_id_signin"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // display the One Tap prompt
};
