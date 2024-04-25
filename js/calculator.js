const materialsList = document.getElementById('materials');
const calculators = document.querySelectorAll('.calc');

materialsList.addEventListener('change', showCalculator)
function showCalculator() {
    // calculators.forEach(cal => cal.classList.add('hidden'))
    const material = materialsList.value;
    const selectedCalculator = document.querySelector(`.${material}-calculator`);
    selectedCalculator.classList.remove('hidden');
}


// satin-calculator
const sliderSatin = document.getElementById("satin-quantity");
const outputSatin = document.getElementById("satinQuantityValue");
outputSatin.innerHTML = sliderSatin.value;

sliderSatin.oninput = function() {
    outputSatin.innerHTML = this.value;
}
// neylon-calculator
const sliderNeylon = document.getElementById("neylon-quantity");
const outputNeylon = document.getElementById("neylonQuantityValue");
outputNeylon.innerHTML = sliderNeylon.value;

sliderNeylon.oninput = function() {
    outputNeylon.innerHTML = this.value;
}
// silicon-calculator
const sliderSilicon = document.getElementById("silicon-quantity");
const outputSilicon = document.getElementById("siliconQuantityValue");
outputSilicon.innerHTML = sliderSilicon.value;

sliderSilicon.oninput = function() {
    outputSilicon.innerHTML = this.value;
}