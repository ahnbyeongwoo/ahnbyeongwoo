const defalutResult = 0;
let currentResult = defalutResult;
let logEntries=[];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescritption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescritption);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,//함수에서 받는 매개 변수로 작업
    newResult,){
    const logEntry={
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
      };
      logEntries.push(logEntry);//새로운 배열에 요소 추가
      console.log(logEntries);

 }

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber); //두번째 매개변수는 실행하기 전의 결과
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber); 
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult=currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber); 
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);//클릭 이벤트 발생
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

