const checkAll = function(){
    const allChk = document.querySelector('.allChk');
    if(allChk.checked){
        document.querySelector('.requiredChk').checked = true;
        document.querySelector('.adChk').checked = true;
    }else{
        document.querySelector('.requiredChk').checked = false;
        document.querySelector('.adChk').checked = false;
    }
}