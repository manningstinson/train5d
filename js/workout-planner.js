document.addEventListener("DOMContentLoaded", (event) => {
  updateForm();
});

function updateForm() {
  const trainingLocation = document.getElementById("trainingLocation").value;
  const difficultyLevel = document.getElementById("difficultyLevel");
  const workoutType = document.getElementById("workoutType");

  // Add conditional logic based on training location
  if (trainingLocation === "pool") {
    // Logic for pool workouts
    console.log("Pool selected");
  } else if (trainingLocation === "gym") {
    // Logic for gym workouts
    console.log("Gym selected");
  } else if (trainingLocation === "dryland") {
    // Logic for dry land workouts
    console.log("Dry Land selected");
  }
}
