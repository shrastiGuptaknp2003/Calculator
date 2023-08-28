let displayValue = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function appendToDisplay(val) {
  displayValue += val;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

updateDisplay();
