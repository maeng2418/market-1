const activeSelectInfo = function(){
    const check = document.querySelector('.activeSelectInfo');
    const findBtn = document.querySelector('.findBtn');
    if(check.checked){
        findBtn.disabled = false;
    }else{
        findBtn.disabled = true;
    }
}

const onEmailHandler = function () {
    const emailSelector = document.querySelector('.emailSelect');
    const emailAddr = document.querySelector('.emailAddr');
    if (emailSelector.value === "직접입력"){
        emailAddr.value = "";
        emailAddr.readOnly = false;
    }else{
        emailAddr.value = emailSelector.value;
        emailAddr.readOnly = true;
    }
}