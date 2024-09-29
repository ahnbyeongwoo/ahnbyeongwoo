function isEvenOrOdd(number){//Constant Time Complexity 상수 시간 복잡도는 빅 오 표기법에서 O(1)로 표시
    
    // const result=number % 2;
    // if(result === 0){
    //     return 'Even';
    // }
    // else{
    //     return 'Odd';
    // }
    return number % 2 ? 'Odd' : 'Even';
    
}
console.log(isEvenOrOdd(10));//Even 짝
console.log(isEvenOrOdd(11));//Odd 홀




