const result = document.querySelector(".test");
let displayElm = document.querySelector(".display");
let nameInputs = document.querySelectorAll(".input-name"); // Multiple inputs

result.addEventListener("click", () => {
  // Check if any input is empty
  let allFilled = true;
  nameInputs.forEach((input) => {
    if (input.value === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please enter a name");
    displayElm.innerHTML = ""; // Clear the display if any input is empty
    return;
  }

  let lovePercentage = Math.floor(Math.random() * 100);
  displayElm.innerHTML = `Love Percentage: ${lovePercentage}%`;

  // Clear all inputs
  nameInputs.forEach((input) => {
    input.value = "";
  });
});
