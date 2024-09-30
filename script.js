

// 選取所有的密碼字段和對應的切換按鈕
const passwordFields = document.querySelectorAll('.UserPw');
const togglePasswordIcons = document.querySelectorAll('.toggle-password ion-icon');

// 為每個密碼字段和切換按鈕添加事件
togglePasswordIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const passwordField = passwordFields[index];
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // 切換圖標
        icon.name = icon.name === 'lock-closed' ? 'lock-open-outline' : 'lock-closed';
    });
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

document.addEventListener('click', function(event) {
    const loginPopup = document.querySelector('.wrapper');
    const loginButton = document.querySelector('.btnLogin-popup');
    const closeButton = document.querySelector('.icon-close');

    // 如果點擊發生在彈出視窗內部或是點擊了登入按鈕或關閉按鈕，不執行關閉操作
    if (loginPopup.contains(event.target) || event.target === loginButton || event.target === closeButton) {
        return;
    }

    // 點擊了彈出視窗以外的區域，關閉彈出視窗
    loginPopup.classList.remove('active-popup');
});
