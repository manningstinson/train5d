function init() {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id:
          "482824739572-mr45ubm3oghdit3jboigvj87fssco3kh.apps.googleusercontent.com",
      })
      .then(
        function () {
          console.log("Google Auth initialized");
        },
        function (error) {
          console.error("Error initializing Google Auth:", error);
        }
      );
  });
}

function signIn() {
  var googleAuth = gapi.auth2.getAuthInstance();
  googleAuth.signIn().then(
    function (googleUser) {
      console.log("User signed in");
      console.log(googleUser.getBasicProfile());
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    },
    function (error) {
      console.error("Error signing in", error);
    }
  );
}
