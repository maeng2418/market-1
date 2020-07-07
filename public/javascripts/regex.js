// 4~20자의 영 소문자, 숫자, 특수기호(_), (-)만 사용
const idRegex = /^[a-z0-9_-]{4,20}$/;

//비밀번호는 영문+숫자 조합만 허용하며, 8~20자.
const pwRegex = /^[a-zA-Z0-9]{8,20}$/;

const checkId = function(){
    const id = document.querySelector('.accountId');
    const idMsg = document.querySelector('.idMsg');
    if(idRegex.test(id.value)){
        idMsg.innerHTML = "입력하신 아이디로 사용이 가능합니다."
    } else {
        idMsg.innerHTML = "4~20자의 영 소문자, 숫자, 특수기호(_), (-)만 사용 가능합니다."
    }
}

const checkPw = function(){
    const pw = document.querySelector('.accountPw');
    const pwMsg = document.querySelector('.pwMsg');
    if(pwRegex.test(pw.value)){
        pwMsg.innerHTML = "입력하신 비밀번호로 사용이 가능합니다."
    } else {
        pwMsg.innerHTML = "비밀번호는 영문+숫자 조합만 허용하며, 8~20자만 사용 가능합니다."
    }
}