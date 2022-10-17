const button = document.querySelector('.submit');
const error = document.querySelector('.error')
const msg = document.querySelector('.msg');

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
return false;
}
}

button.addEventListener('click', () => {
    let email = document.querySelector('.email');
    let result = ValidateEmail(email);
    if (result === false) {
        !error.classList.contains('active') && error.classList.add('active')
        !msg.classList.contains('active') && msg.classList.add('active')
    } else {
        msg.classList.contains('active') && msg.classList.remove('active')
        error.classList.contains('active') && error.classList.remove('active')
    }
})