class ConfirmLink extends HTMLAnchorElement{
    connectedCallback(){
        this.addEventListener('click', event =>{
            if(!confirm('Do you really want to leave?')){
                event.preventDefault();//기본 동작을 방지하여 탐색이 취소 
            }//사용자가 예를 클릭할 경우 true 반환
                
        });
    }
}

customElements.define('uc-confirm-link',ConfirmLink,{extends:'a'});


