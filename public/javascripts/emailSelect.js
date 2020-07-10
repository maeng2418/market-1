const onEmailHandler = function () {
    const emailSelector = document.querySelector('.emailSelect');
    const emailAddr = document.querySelector('.emailAddr');
    emailAddr.disabled = false;
    if (emailSelector.value === "직접입력"){
        emailAddr.value = "";
        emailAddr.readOnly = false;
    }else{
        emailAddr.value = emailSelector.value;
        emailAddr.readOnly = true;
    }
}