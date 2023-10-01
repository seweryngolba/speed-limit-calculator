const container = document.querySelector(".container");
const speedInput = document.querySelector("#speedInput");
const speedLimit = document.querySelectorAll(".speed-sign");
const calculateBtn = document.querySelector("#calculate");
const total = document.querySelector(".total");
const money = document.querySelector(".money p");
const points = document.querySelector(".points p");
const secondPenalty = document.querySelector("#secondTime");

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

    if (10 >= difference > 0) {
      money.textContent = `50 PLN`;
      points.textContent = `1 PKT`;
    } else if (difference > 10 && difference <= 15) {
      money.textContent = `100 PLN`;
      points.textContent = `2 PKT`;
    } else if (difference > 15 && difference <= 20) {
      money.textContent = `200 PLN`;
      points.textContent = `3 PKT`;
    } else if (difference > 20 && difference <= 25) {
      money.textContent = `300 PLN`;
      points.textContent = `5 PKT`;
    } else if (difference > 25 && difference <= 30) {
      money.textContent = `400 PLN`;
      points.textContent = `7 PKT`;
    } else if (difference > 30 && difference <= 40) {
      money.textContent = `800 PLN`;
      points.textContent = `9 PKT`;
      if (secondPenalty.checked) {
        money.textContent = `1600 PLN`;
      }
    } else if (difference > 40 && difference <= 50) {
      money.textContent = `1000 PLN`;
      points.textContent = `11 PKT`;
      if (secondPenalty.checked) {
        money.textContent = `2000 PLN`;
      }
    } else if (difference > 50 && difference <= 60) {
      money.textContent = `1500 PLN`;
      points.textContent = `13 PKT`;
      if (secondPenalty.checked) {
        money.textContent = `3000 PLN`;
      }
    } else if (difference > 60 && difference <= 70) {
      money.textContent = `2000 PLN`;
      points.textContent = `14 PKT`;
      if (secondPenalty.checked) {
        money.textContent = `4000 PLN`;
      }
    } else if (difference > 70) {
      money.textContent = `2500 PLN`;
      points.textContent = `15 PKT`;
      if (secondPenalty.checked) {
        money.textContent = `5000 PLN`;
      }
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
