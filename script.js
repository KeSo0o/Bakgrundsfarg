window.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById("red");
    const greenInput = document.getElementById("green");
    const blueInput = document.getElementById("blue");
    const changeColorBtn = document.getElementById("change-color-btn");
    const resultElement = document.getElementById("result");
  
    changeColorBtn.addEventListener("click", function() {
      const red = validateColorValue(redInput.value);
      const green = validateColorValue(greenInput.value);
      const blue = validateColorValue(blueInput.value);
  
      const isValidColor = red !== null && green !== null && blue !== null;
      if (isValidColor) {
        const color = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = color;
        resultElement.textContent = `Bakgrundsfärg: ${color}`;
      } else {
        resultElement.textContent = "Ogiltiga färgvärden!";
      }
    });
  
    function validateColorValue(value) {
      if (!isNaN(value)) {
        value = Math.max(0, Math.min(255, value));
        return value;
      }
      return null;
    }
  });