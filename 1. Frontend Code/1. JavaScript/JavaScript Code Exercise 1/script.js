const button = document.getElementById("format-btn");
const input = document.getElementById("number-input");
const dispalySpan = document.getElementById("display-span");

button.addEventListener("click", (event) => {
	event.preventDefault();
	const inputValue = input.value;
  dispalySpan.textContent = formatNumber(inputValue);
})

function formatNumber(numberStr) {
  // Step 1: Remove invalid 0 
  const invalidNumberStr = parseFloat(numberStr).toString();
  
  // Step 2: Separate the integer and the decimal parts
  const integerPartStr = invalidNumberStr.split('.')[0];
  const decimalPartStr = invalidNumberStr.split('.')[1] || '';
  
  // Step 3: Reverse the integer part for easier processing
  const reverseIntegerPartStr = integerPartStr.split('').reverse().join('');
  
  // Step 4: Insert the commas into every three digitals
  const reverseWithCommaStr = reverseIntegerPartStr.replace(/(\d{3})(?=\d)/g, '$1,');
  
  // Step 5：Reverse the string back to normal
  const formatIntegerPartStr = reverseWithCommaStr.split('').reverse().join(''); 
  
  // Step 6：Combine the integer and the decimal parts
  if (decimalPartStr) {
    return formatIntegerPartStr + '.' + decimalPartStr;
  } else {
    return formatIntegerPartStr;
  }
}