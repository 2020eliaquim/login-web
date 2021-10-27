const inputPwd = document.querySelector('#ipwd');
const tooltipLabelPassword = document.querySelector('#ipwd-label');
const inputUser = document.querySelector('#ilogin');
const tooltipLabelLogin = document.querySelector('#ilogin-label');
const iconEyeHide = document.querySelector('.bx.bx-hide');
const iconEyeShow = document.querySelector('.bx.bx-hide');

function showToolTip(element) {
    if(element.id == 'ilogin') {
        tooltipLabelLogin.style.opacity = 1;
    } else if (element.id == 'ipwd') {
        tooltipLabelPassword.style.opacity = 1;
    }
}

function hiddenToolTip(element) {
    if(element.id == 'ilogin') {
        tooltipLabelLogin.style.opacity = 0;
    } else if (element.id == 'ipwd') {
        tooltipLabelPassword.style.opacity = 0;
    }
}

function showHideIcon() {
    let pwd = inputPwd.type;
    
    if(pwd == 'password') {
        inputPwd.attributes.type.nodeValue = 'text';
        iconEyeShow.classList.replace('bx-hide', 'bx-show');
        return;
    }
    else if (pwd !== 'password') {
        inputPwd.attributes.type.nodeValue = 'password';
        iconEyeShow.classList.replace('bx-show', 'bx-hide');
        return
    }
        
}