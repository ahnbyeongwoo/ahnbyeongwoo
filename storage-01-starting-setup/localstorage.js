const storeBtn=document.getElementById('store-btn');
const retrBtn=document.getElementById('retrieve-btn');

const userId='user123';
const user={
    name: 'Max',
    age:30,
    hobbies:['Sports','Cooking']
};

storeBtn.addEventListener('click', () =>{
    sessionStorage.setItem('uid',userId);
    localStorage.setItem('user',JSON.stringify(user));//데이터를 문자열로 전환하여 사용자 데이터에 저장
});

retrBtn.addEventListener('click', () =>{
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser=JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    
    if(extractedId){
        console.log('Got the id -'+extractedId);
    }else{
        console.log('Could not find id');
        
    }

});