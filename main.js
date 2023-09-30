const container = document.querySelector(".container");
const speedInput = document.querySelector("#speedInput");
const speedLimit = document.querySelectorAll(".speed-sign");
const calculateBtn = document.querySelector("#calculate");
const total = document.querySelector(".total");
const money = document.querySelector(".money p");
const points = document.querySelector(".points p");

let activeSpeedLimit = null;

const handleSpeedSignClick = (speedSign) => {
  speedLimit.forEach((element) => {
    element.classList.remove("active");
  });

  speedSign.classList.add("active");
  activeSpeedLimit = parseInt(speedSign.textContent);
};

speedLimit.forEach((speedSign) => {
  speedSign.addEventListener("click", () => {
    handleSpeedSignClick(speedSign);
  });
});

calculateBtn.addEventListener("click", () => {
  const inputValue = parseInt(speedInput.value);

  if (activeSpeedLimit !== null && !isNaN(inputValue)) {
    const difference = inputValue - activeSpeedLimit;

    if (difference > 0) {
      money.textContent = `200 PLN`;
      points.textContent = `10 PKT`;
    } else {
      money.textContent = `0 PLN`;
      points.textContent = `0 PKT`;
    }
    container.classList.add("active");
  } else {
    alert("Wprowadź liczbę i wybierz limit prędkości");
  }
});

speedInput.addEventListener("input", () => {
  const inputValue = speedInput.value.trim();
  speedInput.value = inputValue.replace(/[^\d-]/g, "");
});

speedInput.addEventListener("keyup", () => {
  container.classList.remove("active");
});
