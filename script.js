function calculateBMI() {
    // Inserindo os valores
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    
    // Cálculo do IMC
    var bmi = weight / (height ** 2);
    var result = document.getElementById("calc-result");
    result.innerHTML = "Seu IMC é: " + bmi.toFixed(2);
}

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const cleanBtn = document.getElementById("clean");
const result =document.getElementById("calc-result");

function cleanInputs() {
    heightInput.value = "";
    weightInput.value = "";
    result.textContent = "";
}
  
cleanBtn.addEventListener("click", cleanInputs);
  
  

