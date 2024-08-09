function init() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id:
        "482824739572-mr45ubm3oghdit3jboigvj87fssco3kh.apps.googleusercontent.com",
    });
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
}
