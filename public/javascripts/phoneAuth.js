const activeAuth = function(){
    const inputPhone = document.querySelector('.phone').value;
    const authBtn = document.querySelector('.authBtn');
    if(inputPhone === ""){
        authBtn.disabled = true;
        authBtn.style.color = "#bbc0cd";
        authBtn.style.borderColor = "#ccc";
    }else{
        authBtn.disabled = false;
        authBtn.style.color = "#1a7cff";
        authBtn.style.borderColor = "#1a7cff";
    }
}

const auth = function(event){
    event.preventDefault();
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".okBtn").onclick = function (event) {
        event.preventDefault();
        document.querySelector(".modal").style.display = "none";
        const inputAuth = document.querySelector('.inputAuth');
        inputAuth.innerHTML = `<div style="display: flex">
        <input class="phone number" type='text' name="number" placeholder="인증번호 6자리 입력" onKeyup="this.value=this.value.replace(/[^0-9]/g,'')"/>
        <span class="timer"></span>
        <button class="authBtn confirmAuth" onclick="confirmPhone(event)" style="color:#1a7cff; border-color:#1a7cff;" >확인</button></div>
        <span class="authMsg">인증번호를 입력해 주세요.</span>`;
        time();
    }
}

const time = function(){
    let time = 120;
    let min = "";
    let sec = "";

    setInterval(() => {
        min = parseInt(time/60);
        sec = time%60 < 10 ? '0'+time%60 : time%60;

        document.querySelector('.timer').innerHTML = min + ":" + sec;
        time--;

        if(time<0){
            document.querySelector('.inputAuth').innerHTML = "<span class='authMsg'>입력시간을 초과하였습니다.</span>"
        }
    }, 1000);
}

// 인증하기
const confirmPhone = function(event){
    event.preventDefault();
    const inputAuth = document.querySelector('.inputAuth');
    const number = document.querySelector('.number').value;
    const authBtn = document.querySelector('.authBtn'); 
    //인증성공
    if(number !== ""){
        clearInterval();
        inputAuth.innerHTML = "";
        authBtn.innerHTML = "인증완료"
        authBtn.disabled = true;
    }else{
        // 인증실패
        alert('인증에 실패하였습니다.')
    }
}