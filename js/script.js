let resultString = "";


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b == 0) {
        return "undefined"
    }
    return a / b;
}

function mul(a, b) {
    return a * b;
}

function checkLastElem(lastElem) {
    if (lastElem == '/' || lastElem == '.'
        || lastElem == '+' || lastElem == '-'
        || lastElem == '*') {
        return false;
    } else {
        return true;
    }
}

function evalExpression(resultString) {
    let arr = resultString.toString().split(/(\+|-|\/|\*)/g);
    let countFirstOperations = 0;
    let count = 0;
    if (arr.toString().match(/[*/]/g)) {
        countFirstOperations = arr.toString().match(/[*/]/g).length;
    }

    while (countFirstOperations != 0) {
        countFirstOperations--;
        for (let i = 0; i < arr.length; i++) {
            let op = arr[i];
            if (op == '*') {
                let result = mul(parseFloat(arr[i - 1]), parseFloat(arr[i + 1]));
                arr.splice(i - 1, 3, result);
            }
            if (op == '/') {
                let result = div(parseFloat(arr[i - 1]), parseFloat(arr[i + 1]));
                if (result == "undefined") {
                    result = "undefined";
                }
                arr.splice(i - 1, 3, result);
            }
        }
    }

    while (arr.length != 1) {
        count--;
        for (let i = 0; i < arr.length; i++) {
            let op = arr[i];
            if (op == '+') {
                let result = add(parseFloat(arr[i - 1]), parseFloat(arr[i + 1]))
                arr.splice(i - 1, 3, result);
            }
            if (op == '-') {
                let result = sub(parseFloat(arr[i - 1]), parseFloat(arr[i + 1]));
                arr.splice(i - 1, 3, result);
            }
        }
    }

    return arr.toString();
}

// Click button events
bOne.addEventListener('click', function () {
    document.getElementById('outputLine').value += 1;
    resultString += 1;
})

bTwo.addEventListener('click', function () {
    document.getElementById('outputLine').value += 2;
    resultString += 2;
})

bThree.addEventListener('click', function () {
    document.getElementById('outputLine').value += 3;
    resultString += 3;
})

bFour.addEventListener('click', function () {
    document.getElementById('outputLine').value += 4;
    resultString += 4;
})

bFive.addEventListener('click', function () {
    document.getElementById('outputLine').value += 5;
    resultString += 5;
})

bSix.addEventListener('click', function () {
    document.getElementById('outputLine').value += 6;
    resultString += 6;
})

bSeven.addEventListener('click', function () {
    document.getElementById('outputLine').value += 7;
    resultString += 7;
})

bEight.addEventListener('click', function () {
    document.getElementById('outputLine').value += 8;
    resultString += 8;
})

bNine.addEventListener('click', function () {
    document.getElementById('outputLine').value += 9;
    resultString += 9;
})

bZero.addEventListener('click', function () {
    document.getElementById('outputLine').value += 0;
    resultString += 0;
})

bClear.addEventListener('click', function () {
    resultString = "";
    document.getElementById('outputLine').value = "";
    document.getElementById('allInput').innerHTML = "";
})

bBackspace.addEventListener('click', function () {
    resultString = resultString.substring(0, resultString.length - 1);
    document.getElementById('outputLine').value = resultString;
})

bMultiply.addEventListener('click', function () {
    if (resultString[resultString.length - 1] == "*") {
        return;
    } else {
        resultString += "*";
        document.getElementById('outputLine').value += "*";
    }
})

bDivide.addEventListener('click', function () {
    if (resultString[resultString.length - 1] == "/") {
        return;
    } else {
        resultString += "/";
        document.getElementById('outputLine').value += "/";
    }
})

bSubstract.addEventListener('click', function () {
    if (resultString[resultString.length - 1] == "-") {
        return;
    } else {
        resultString += "-";
        document.getElementById('outputLine').value += "-";
    }

})

bAdd.addEventListener('click', function () {
    if (resultString[resultString.length - 1] == "+") {
        return;
    } else {
        resultString += "+";
        document.getElementById('outputLine').value += "+";
    }
})

bPoint.addEventListener('click', function () {
    let arr = resultString.toString().split(/(\+|-|\/|\*)/g);
    let lastElem = arr[arr.length - 1];
    let pointCount = lastElem.split('.').length;
    if (resultString[resultString.length - 1] == "." || resultString == "" || pointCount > 1) {
        return;
    } else {
        resultString += ".";
        document.getElementById('outputLine').value += ".";
    }
})

bResult.addEventListener('click', function () {
    let lastElem = resultString[resultString.length - 1];
    if (!checkLastElem(lastElem)) {
        return;
    }
    document.getElementById('allInput').innerHTML = resultString;
    document.getElementById('outputLine').value = evalExpression(resultString);
})

//keypass

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == '0') {
        document.getElementById('outputLine').value += 0;
        resultString += 0;
    }

    if (keyName == '1') {
        document.getElementById('outputLine').value += 1;
        resultString += 1;
    }

    if (keyName == '2') {
        document.getElementById('outputLine').value += 2;
        resultString += 2;
    }

    if (keyName == '3') {
        document.getElementById('outputLine').value += 3;
        resultString += 3;
    }

    if (keyName == '4') {
        document.getElementById('outputLine').value += 4;
        resultString += 4;
    }

    if (keyName == '5') {
        document.getElementById('outputLine').value += 5;
        resultString += 5;
    }

    if (keyName == '6') {
        document.getElementById('outputLine').value += 6;
        resultString += 6;
    }

    if (keyName == '7') {
        document.getElementById('outputLine').value += 7;
        resultString += 7;
    }

    if (keyName == '8') {
        document.getElementById('outputLine').value += 8;
        resultString += 8;
    }

    if (keyName == '9') {
        document.getElementById('outputLine').value += 9;
        resultString += 9;
    }

    if (keyName == '+') {
        if (resultString[resultString.length - 1] == "+") {
            return;
        } else {
            resultString += "+";
            document.getElementById('outputLine').value += "+";
        }
    }

    if (keyName == '-') {
        if (resultString[resultString.length - 1] == "-") {
            return;
        } else {
            resultString += "-";
            document.getElementById('outputLine').value += "-";
        }
    }

    if (keyName == '*') {
        if (resultString[resultString.length - 1] == "*") {
            return;
        } else {
            resultString += "*";
            document.getElementById('outputLine').value += "*";
        }
    }

    if (keyName == '/') {
        if (resultString[resultString.length - 1] == "/") {
            return;
        } else {
            resultString += "/";
            document.getElementById('outputLine').value += "/";
        }
    }

    if (keyName == '.') {
        let arr = resultString.toString().split(/(\+|-|\/|\*)/g);
        let lastElem = arr[arr.length - 1];
        let pointCount = lastElem.split('.').length;
        if (resultString[resultString.length - 1] == "." || resultString == "" || pointCount > 1) {
            return;
        } else {
            resultString += ".";
            document.getElementById('outputLine').value += ".";
        }
    }

    if (keyName == '=') {
        let lastElem = resultString[resultString.length - 1];
        if (!checkLastElem(lastElem)) {
            return;
        }
        document.getElementById('allInput').innerHTML = resultString;
        document.getElementById('outputLine').value = evalExpression(resultString);
    }

    if (keyName == 'Delete') {
        resultString = resultString.substring(0, resultString.length - 1);
        document.getElementById('outputLine').value = resultString;
    }
});