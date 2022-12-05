const form = document.getElementById("login")
const username= document.getElementById("username")
const password = document.getElementById("password")
const togglePassword = document.querySelector('#togglePassword');

const showError = (input,message) => {
    const registerForm = input.parentElement;
    registerForm.className = 'index-box error'; 
    const small = registerForm.querySelector('small');
    small.innerText = message;
 
 }


form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(username.value === "")
    {
        showError(username, 'Username is empty');
    }   
    

    if(password.value === "")
    {
        showError(password, 'Password is empty');
    }
    else{
        if(username.value === 'aricalot@gmail.com' || password.value === "Test@123"){
            location.replace("welcome.html")
        }
        else{
            alert("Invalid Credentials")
        }
    
    }
    
})

togglePassword.addEventListener('click', (e) => {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    // classList.toggle('fa-eye-slash');
});