const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');



form.addEventListener('submit',  e => {
    e.preventDefault();
    validateInputs();
});


const setError = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('error');

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setSuccess = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('error');

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {

    const nameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 

if(username === ''){
    setError(username, 'username is required');
}else{
    setSuccess(username);
}




if(email === ''){
    setError(email, 'email is required');
}else if (!isValidEmail(emailValue)){
    setError(email, 'provide a valid email address');
}else{
    setSuccess(email);
}



};



