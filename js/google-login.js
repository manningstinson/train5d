function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  // You can decode the JWT to access user information
}

window.onload = function () {
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
