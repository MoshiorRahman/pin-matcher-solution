function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit pin and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const numberKey = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(numberKey)) {
        if (numberKey == 'C') {
            calcInput.value = '';
        }

    }
    else {
        const previousCalcNumber = calcInput.value;
        const newCalcNumber = previousCalcNumber + numberKey;
        calcInput.value = newCalcNumber;
    }
});

function verifyPin() {
    // console.log('goning to verify')
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        console.log('upps')
    }
}