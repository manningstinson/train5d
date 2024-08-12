document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.getElementById("profileImage");

  // Function to load the Google avatar
  function loadGoogleAvatar() {
    const userInfo = getGoogleUserInfo(); // Implement this function based on your Google Sign-In setup
    if (userInfo && userInfo.picture) {
      console.log("Google Avatar URL:", userInfo.picture);
      profileImage.src = userInfo.picture;
    } else {
      loadGravatar(); // Fallback to Gravatar
    }
  }

  // Function to load the Gravatar
  function loadGravatar() {
    const userEmail = "user@example.com"; // Replace with the user's email
    const gravatarUrl = getGravatarUrl(userEmail);
    console.log("Gravatar URL:", gravatarUrl);
    profileImage.src = gravatarUrl;
  }

  // Function to get Gravatar URL based on email
  function getGravatarUrl(email) {
    const md5 = CryptoJS.MD5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${md5}?s=200`;
  }

  // Load Google avatar first, fallback to Gravatar if necessary
  loadGoogleAvatar();

  // Open the modal when the avatar is clicked (if you still want to use the modal)
  profileImage.addEventListener("click", function () {
    const modal = document.getElementById("avatarModal");
    modal.style.display = "block";
  });

  // Close the modal when the "x" is clicked
  const closeModal = document.querySelector(".close");
  closeModal.addEventListener("click", function () {
    const modal = document.getElementById("avatarModal");
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("avatarModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Handle file selection and preview the image (optional if using modal)
  const modalFileUpload = document.getElementById("modalFileUpload");
  modalFileUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Set the profile image source to the selected file
        profileImage.src = e.target.result;

        // If you still want to send the image to the server:
        const formData = new FormData();
        formData.append("avatar", file);

        fetch("/update-avatar", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.success) {
              alert("Avatar updated successfully!");
            } else {
              alert("Failed to update avatar. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error updating avatar:", error);
            alert("An error occurred. Please try again.");
          });

        // Close the modal after updating the avatar
        const modal = document.getElementById("avatarModal");
        modal.style.display = "none";
      };

      reader.readAsDataURL(file);
    }
  });
});

// Example function to get Google user info (customize based on your actual Google Sign-In implementation)
function getGoogleUserInfo() {
  // Example: Retrieve the Google user info (you may already have this after authentication)
  return {
    picture: "https://example.com/path/to/google-avatar.jpg", // Replace with actual Google user picture URL
  };
}
