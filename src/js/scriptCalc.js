let number = document.querySelectorAll(".number");
let clear = document.getElementById("clearAll");
let calc = document.getElementById("calculate");
let clearN = document.getElementById("clearNumber");


for (let i = 0; i < number.length; i++) {
    number[i]?.addEventListener("click", function addToDisplay() {
        let value = this.value;
        document.getElementById('display').value += value;
    })
}

clear?.addEventListener("click", function clearDisplay() {
    document.getElementById('display').value = '';
})

calc?.addEventListener("click", function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
})

clearN?.addEventListener("click", function clearNumber() {
    let display = document.getElementById('display');
    let valor = display.value;
    display.value = valor.slice(0, -1);
})

