const allCheck = function () {
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