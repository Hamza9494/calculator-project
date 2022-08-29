// add
function add(a, b) {
  return a + b
}

// subtract
function subtract(a, b) {
  return a - b
}

// multiply
function multiply(a, b) {
  return a * b
}

// devide
function devide(a, b) {
  return a / b
}

// operate
function operate(op, a, b) {
  if (op == '+') return add(a, b)
  if (op == '-') return subtract(a, b)
  if (op == '/') return devide(a, b)
  if (op == '*') return multiply(a, b)
}
console.log(operate('/', 5, 3))
