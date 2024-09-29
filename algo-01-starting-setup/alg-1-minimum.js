function getMin(numbers){
    if(numbers.length === 0){
        throw new Error('empty');
    }
    if(numbers.length === 1){
        return numbers[0];//첫번째 항목이 최솟값을 갖는 항목
    }
    let currentMinimum = numbers[0];//현재 최솟값

    for(let i=1;i < numbers.length; i++){
        if(numbers[i]<currentMinimum){
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
}


const testNumbers=[3,1,2];

const min=getMin(testNumbers);

console.log(min);
