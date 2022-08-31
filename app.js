const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const remove = document.querySelector('.delete')
const nums = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')
const point = document.querySelector('.point')
const equal = document.querySelector('.equal')
equal.addEventListener('click', operate)

let prevNum = ''
let curNum = ''
let operator = ''

//display numbers
nums.forEach((num) => {
  num.addEventListener('click', (e) => {
    handleNumber(e.target.value)
  })
})
// set operator
operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    operator = e.target.value
    prevNum = curNum
    display.textContent = operator
    curNum = ''
    display.textContent = curNum
  })
})
function handleNumber(number) {
  curNum += number
  if (curNum.length > 9) return
  display.textContent = curNum
}

//operate
function operate() {
  prevNum = Number(prevNum)
  curNum = Number(curNum)
  if (operator === '+') {
    prevNum += curNum
  }
  if (operator === '-') {
    prevNum -= curNum
  }
  if (operator === '/') {
    if (curNum <= 0) {
      prevNum = 'ERORR my dude'
      display.textContent = prevNum
    }
    prevNum /= curNum
  }
  if (operator === '*') {
    prevNum *= curNum
  }
  displayResult()
}

function displayResult() {
  display.textContent = prevNum
  prevNum = ''
  curNum = ''
  operator = ''
}
