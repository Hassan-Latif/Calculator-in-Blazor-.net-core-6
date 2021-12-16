let validResult = 0
const idOfResultInput = "result"
const errorMessage = "Syntax Error"
const format = /[!@#$%^&()_\\[\]{};':"|,.<>\?]+/

function clearScreen() {
    document.getElementById(idOfResultInput).value = "";
}

function displayOnScreen(val) {
    if (validResult === 1) {
        clearScreen();
        validResult = 0
    }
    document.getElementById(idOfResultInput).value += val
}

function calculate() {
    try {
        let answer = eval(document.getElementById(idOfResultInput).value)
        let currentValue = document.getElementById(idOfResultInput).value

        if (currentValue !== '') {
            if (answer === undefined || format.test(currentValue)) {
                document.getElementById(idOfResultInput).value = errorMessage
                validResult = 1
            }
            else {
                document.getElementById(idOfResultInput).value = answer
                validResult = 1
            }
        }


    }
    catch (err) {
        document.getElementById(idOfResultInput).value = errorMessage;
        validResult = 1
    }
}