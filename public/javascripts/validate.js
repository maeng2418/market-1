// 4~20자의 영 소문자, 숫자, 특수기호(_), (-)만 사용
const idRegex = /^[a-z0-9_-]{4,20}$/;

//비밀번호는 영문+숫자 조합만 허용하며, 8~20자.
const pwRegex = /^[a-zA-Z0-9]{8,20}$/;

//이름은 특수문자, 숫자 사용불가.
const nameRegex = /^[가-힣a-zA-Z]+$/;

const checkId = function(){
    const id = document.querySelector('.accountId');
    const idMsg = document.querySelector('.idMsg');
    if(!idRegex.test(id.value)){
        idMsg.innerHTML = "4~20자의 영 소문자, 숫자, 특수기호(_), (-)만 사용 가능합니다."
        id.style.border = '1px solid red';
    }else{
        checkDuplicate(id.value);
    }
}

const checkPw = function(){
    const pw = document.querySelector('.accountPw');
    const pwMsg = document.querySelector('.pwMsg');
    if(pwRegex.test(pw.value)){
        pwMsg.innerHTML = "<span class='available'>입력하신 비밀번호로 사용이 가능합니다.<span>"
        pw.style.border = '1px solid #d7dbe6';
    } else {
        pwMsg.innerHTML = "비밀번호는 영문+숫자 조합만 허용하며, 8~20자만 사용 가능합니다."
        pw.style.border = '1px solid red';
    }
}

const confirmPwd = function(){
    const pw = document.querySelector('.accountPw');
    const nextPw = document.querySelector('.confirmPw');
    const confirmPwMsg = document.querySelector('.confirmPwMsg');
    if(pw.value !== nextPw.value){
        confirmPwMsg.innerHTML = "위 비밀번호와 일치하지 않습니다. 다시 입력해 주세요."
        nextPw.style.border = '1px solid red';
    }else{
        confirmPwMsg.innerHTML = "";
        nextPw.style.border = '1px solid #d7dbe6';
    }
}

const checkName = function(){
    const name = document.querySelector('.name');
    const nameMsg = document.querySelector('.nameMsg');
    if(!nameRegex.test(name.value)){
        nameMsg.innerHTML = "이름에 특수문자, 숫자를 사용할 수 없습니다.";
        name.style.border = '1px solid red';
    }else{
        nameMsg.innerHTML = "";
        name.style.border = '1px solid #d7dbe6';
    }

}

// 아이디 중복검사
const checkDuplicate = function(id){

    fetch('/api/users/duplicate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
        })
    }).then(response => response.json())
        .then(data => {
            const idMsg =  document.querySelector('.idMsg');
            if (data.duplicate) {
                idMsg.innerHTML = "중복된 아이디입니다.";
                document.querySelector('.accountId').style.border = '1px solid red';

            } else {
                idMsg.innerHTML = "<span class='available'>입력하신 아이디로 사용이 가능합니다.<span>";
                document.querySelector('.accountId').style.border = '1px solid #d7dbe6';
            }
    });
}