const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All functions

// Function to check all the required fields have data

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value === ''){
            showError(input,`${getInputId(input)} is required`)
        } else {
            showSuccess(input);
        }
    })
}
// Function to show error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Function to check length
function checkLength(input, min, max){
    if ( input.value.length<min){
        showError(input,`${getInputId(input)} needs to be at least ${min} characters`);
    } else if(input.value.length>max){
        showError(input,`${getInputId(input)} needs to be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}
//Function to check valid email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Please provide a valid email');
    }
}

// Function to check if password matches to password2

function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,`Password doesn't match`)
    }
}

// Function to show success

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// //Function to get id of input and show proper case.
function getInputId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Created eventlistener for submit button.
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordMatch(password, password2);
}) 
