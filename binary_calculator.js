function pressBinary(value) {
  var binaryInput = document.getElementById("binary_input");
  binaryInput.value += value;
}

function pressOperator(operator) {
  var binaryInput = document.getElementById("binary_input");
  binaryInput.value += operator;
}

function clearInput() {
  var binaryInput = document.getElementById("binary_input");
  binaryInput.value = '';
}

function equalBinary() {
  var binaryInput = document.getElementById("binary_input").value;
  var decimalOutput = document.getElementById("decimal_output");

  // Split the binary input into operands and operator
  var operands = binaryInput.split(/[\+\-\*\/]/);
  var operatorIndex = binaryInput.search(/[\+\-\*\/]/);
  var operator = binaryInput.charAt(operatorIndex);

  // Convert binary operands to decimal
  var operand1 = parseInt(operands[0], 2);
  var operand2 = parseInt(operands[1], 2);

  // Perform arithmetic operation
  var result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result in decimal format
  decimalOutput.value = result;
}
