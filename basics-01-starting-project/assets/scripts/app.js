const defalutResult = 0;
let currentResult = defalutResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescritption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescritption);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber); //두번째 매개변수는 실행하기 전의 결과
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber); //두번째 매개변수는 실행하기 전의 결과
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber); //두번째 매개변수는 실행하기 전의 결과
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber); //두번째 매개변수는 실행하기 전의 결과
}

addBtn.addEventListener('click', add);//스닛펫은 버튼을 클릭하면 실행해
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

