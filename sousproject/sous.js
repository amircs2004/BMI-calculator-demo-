const heightEL = document.getElementById("height1")
const weight1EL = document.getElementById("weight1")
const buttonEL = document.getElementById("button")
const resultEL = document.getElementById("result")
const conditionEL = document.getElementById("condition")

computeBMI()
function computeBMI(){
  let height = heightEL.value
  let weight = weight1EL.value
  height = height / 100
  let BMI = weight /(height*height)
 resultEL.innerText =Math.round(BMI)
if (BMI < 25) {
     conditionEL.innerText = `good status`
}else {
    conditionEL.innerText = `your over weight`
}
}