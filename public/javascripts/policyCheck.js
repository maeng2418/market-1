const check = function () {
    const checkAll = document.querySelector('.checkAll');
    const checkRequired = document.querySelector('.checkRequired');
    const checkAd = document.querySelector('.checkAd');

    if (checkAll.checked) {
        checkRequired.checked = true;
        checkAd.checked = true
    } else {
        checkRequired.checked = false;
        checkAd.checked = false;
    }
}

const devideCheck = function () {
    const checkRequired = document.querySelector('.checkRequired');
    const checkAd = document.querySelector('.checkAd');
    const checkAll = document.querySelector('.checkAll');

    if(checkAd.checked && checkRequired.checked){
        checkAll.checked = true;
    }else{
        checkAll.checked = false;
    }
}