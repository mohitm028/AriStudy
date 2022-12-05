const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const cpw = document.getElementById("confirm-password");


const showError = (input,message) => {
   const registerForm = input.parentElement;
   registerForm.className = 'register-box error'; 
   const small = registerForm.querySelector('small');
   small.innerText = message;

}

const showSuccess = (input) => {
    const registerForm = input.parentElement;
    registerForm.className = 'register-box success'; 
    
}

const validUsername = (input) => {
    const  username_regex = /^[a-zA-Z]+([a-zA-Z0-9]+\s{0,1})+$/g;
    return username_regex.test(input);
}

const validEmail = (input) =>{
    const re = /\S+@\S+\.\S+/;
    return re.test(input);
}

const validPassword = (input) => {
        const reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return reg.test(input);
};



const checkLength = (input, min, max) =>
{
     if(input.value.length< min){
        showError(input,`${input.id} must be atleast ${min} character`);
     }
     else if(input.value.length>max){
        showError(input,`${input.id} cannot be longer than ${max} character`);
     }
     else{
        showSuccess(input);
        return 1;
    }

}

const checkPasswordMatch = (input1, input2) =>{
    if(input1.value !== input2.value){
        showError(input2, "Password doesn't match");
    }
    else{
        showSuccess(input2)
        alert("You have registered your account")
        location.replace("index.html")
    }
    
}
                         


form.addEventListener('submit', (e) => {
    e.preventDefault();

  
  if(username.value === "")
  {
      showError(username, 'Username is required');
  }   
  else if(!validUsername(username.value)){
    showError(username, 'Only aplhanumeric value allowed');
  }
  else{
      showSuccess(username)
      checkLength(username,3,15);
  }

  if(email.value === "")
  {
      showError(email, 'Email is required');
  }
  else if(!validEmail(email.value)){
      showError(email, 'Email is not valid');
  }
  
  else{
      showSuccess(email);
  }
  
  if(pw.value === "")
  {
      showError(pw, 'Password is required');
  }
  else if(!validPassword(pw.value)){
    showError(pw, 'Must contain atleast 1 capital,small and  special character and number');
  }
  else{
      showSuccess(pw);
      checkLength(pw,6,15);
  }
  if(cpw.value === "")
  {
      showError(cpw, 'Need to confirm the passsword');
  }
  else{
      if(username.value!==""&&email.value !== "" && pw.value !=="" && validUsername(username.value) 
      && validEmail(email.value) && validPassword(pw.value) && checkLength(username,3,15) && checkLength(pw,6,15))
      {
        showSuccess(cpw); 
        checkPasswordMatch(pw,cpw);
      }


      
         
   
  }

    
});

