// coding implementation
// end coding implementation
const emailEle = document.getElementById('email');
const rateEle = document.getElementById('rate');
const cmtEle = document.getElementById('com');
const subRegister = document.getElementById('submit');
const inputEles = document.querySelectorAll('input');

subRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) => ele.classList.remove('success', 'error'));
    let isValid = checkValidate();

    if (isValid) {
        alert('gui dang ky thanh cong');
    }
});
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isRate(number) {
    return /([0-5]{1})\b/.test(number);
}

function checkValidate() {
    let emailValue = emailEle.value;
    let rateValue = rateEle.value;
    let cmtValue = cmtEle.value;
    let isCheck = true;

    if (cmtValue === '') {
        alert('Cmt khong duoc de trong');
        isCheck = false;
    }

    if (emailValue === '') {
        alert('Email khong duoc de trong');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        alert('Email khong dung dinh dang');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (rateValue === '') {
        alert('danh gia khong duoc de trong');
        isCheck = false;
    } else if (!isRate(rateValue)) {
        alert('danh gia sai dinh dang');
        isCheck = false;
    } else {
        setSuccess(rateEle);
    }

    return isCheck;
}