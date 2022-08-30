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
function operate(a, op, b) {
  if (op == '+') return add(a, b)
  if (op == '-') return subtract(a, b)
  if (op == '/') return devide(a, b)
  if (op == '*') return multiply(a, b)
}

// populate calculator
const display = document.querySelector('.display')
const btns = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')

let value1
let operator
let flag = false
let value2

function work() {
  btns.forEach((num) => {
    num.addEventListener('click', () => {
      display.textContent = num.value
      if (!flag) {
        value1 = parseInt(num.value)
        flag = true
      }
      if (flag) {
        value2 = parseInt(num.value)
      }
    })
  })
  operators.forEach((op) => {
    op.addEventListener('click', (e) => {
      if (e.target.value === 'add') {
        operator = '+'
        flag = true
      }
      if (e.target.value === 'multiply') {
        operator = '*'
        flag = true
      }
      if (e.target.value === 'devide') {
        operator = '/'
        flag = true
      }
      if (e.target.value === 'subtract') {
        operator = '-'
        flag = true
      }
    })
  })
  equal.addEventListener('click', () => {
    let result = operate(value1, operator, value2)
    display.textContent = result
    value1 = ''
    flag = false
    value2 = ''
  })
  clear.addEventListener('click', () => {
    display.textContent = ''
    value1 = ''
    flag = false
    value2 = ''
  })
}
work()
