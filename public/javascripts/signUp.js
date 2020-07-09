const signUpSubmit = function (e) {
    e.preventDefault();
    const form = document.querySelector('.registerForm');

    if (form.id.value === "") {
        // 유효성 검사
        alert("아이디를 입력해주세요.")

    } else {
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
                    window.location.href = "/"
                } else {
                    if(data.duplicate){
                        alert("중복된 아이디입니다.")
                    }
                }
            });
    }
}
