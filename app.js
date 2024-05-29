const user_login = document.querySelector('.login');
const user_register = document.querySelector('.Register');
const user_forget = document.querySelector('.forget');
const regis_btn = document.querySelector('.registration-btn');
const login_btn = document.querySelector('.login-btn');
const forget_btn = document.querySelector('.forget-btn');

regis_btn.addEventListener('click',()=>{
    user_login.classList.remove('show')
    user_forget.classList.remove('show')
    user_register.classList.add('show')
})
login_btn.addEventListener('click',()=>{
    user_login.classList.add('show')
    user_forget.classList.remove('show')
    user_register.classList.remove('show')
})
forget_btn.addEventListener('click',()=>{
    user_login.classList.remove('show')
    user_forget.classList.add('show')
    user_register.classList.remove('show')
})