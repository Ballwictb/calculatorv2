
console.log("Funciono");




function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearNumber() {
    var display = document.getElementById('display');
    var valor = display.value;
    display.value = valor.slice(0, -1);

}