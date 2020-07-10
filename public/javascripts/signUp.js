const signUpSubmit = function (e) {
    e.preventDefault();
    const form = document.querySelector('.registerForm');
    const checkRequired = document.querySelector('.checkRequired');

    if(form.id.value === ""){
        alert("아이디를 작성해주시기 바랍니다.");
        form.id.focus();
    }else if(form.password.value === ""){
        alert("비밀번호를 작성해주시기 바랍니다.");
        form.password.focus();
    }else if(form.confirmPw.value === ""){
        alert("비밀번호 재확인을 작성해주시기 바랍니다.");
        form.confirmPw.focus();
    }else if(form.emailId.value === ""){
        alert("이메일을 작성해주시기 바랍니다.");
        form.emailId.focus();
    }else if(form.emailAddr.value === ""){
        alert("이메일을 작성해주시기 바랍니다.");
        form.emailAddr.focus();
    }else if(form.name.value === ""){
        alert("이름을 작성해주시기 바랍니다.");
        form.name.focus();
    }else if(form.phone.value === ""){
        alert("휴대폰 번호를 작성해주시기 바랍니다.");
        form.phone.focus();
    }else if(checkRequired.checked === false){
        alert("필수 항목에 동의해주시기 바랍니다.");
        checkRequired.focus();
    }else {
        fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: form.id.value,
                password: form.password.value,
                email: `${form.emailId.value}@${form.emailAddr.value}`,
                name: form.name.value,
                phone: form.phone.value,
                postcode: form.postcode.value,
                address: `${form.address.value} ${form.detailAddress.value}`,
            })
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = `/complete?id=${data.id}`
                } else {
                    if(data.duplicate){
                        alert("중복된 아이디입니다.")
                    }
                }
            });
    }
}
