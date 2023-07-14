const boton = document.querySelector('.form__submit');
const email = document.querySelector('.form__email--email');
const error = document.querySelector('.form__email--error');


boton.addEventListener('click', (event) => {
    event.preventDefault();
    error.innerHTML = '';
    email.style.color = 'gray';
    email.setAttribute("placeholder", "Your email address..");
    if (email.value == '') {
        email.style.borderColor = 'red';
        email.style.backgroundColor = 'transparent';
        error.innerHTML = 'Whoops! It looks like you forgot to add your email';

    } else {
        if (validateEmail(email.value) == false) {
            email.style.borderColor = 'red';
            email.style.backgroundColor = 'transparent';
            email.value = '';
            // el.setAttribute("style", "background-color:darkblue;");
            email.setAttribute("placeholder", "name@host.tld");
            // email.style.cssText = 'placeholder:"name@host.tld";';
            error.innerHTML = 'Please provide a valid email address';

        } else {
            email.style.borderColor = 'green';
        }
    }

});


function validateEmail(email) {
    let expReg = /^[^@\s]+@[^@\s]+\.[^@\s\0-9]+$/;
    return expReg.test(email);
}
