/// <reference types="../@types/jquery" /> 


document.getElementById('categories').addEventListener('click' , function(){

    window.location = './categories.html'
})

document.getElementById('area').addEventListener('click' , function(){

    window.location = './area.html'
})

document.getElementById('ingredients').addEventListener('click' , function(){

    window.location = './ingredients.html'
})

document.getElementById('search').addEventListener('click' , function(){

    window.location = './search.html'
})

document.getElementById('contact').addEventListener('click' , function(){

    window.location = './contact.html'
})


$('#close-icon').on('click', function(){
    $('#side-bar').animate( {width:'toggle'} , 500);
    $('#close-icon').toggleClass('fa-solid open-close-icon fa-2x fa-align-justify');
    $('#close-icon').toggleClass('fa-solid open-close-icon fa-2x fa-x');
    
})

let nameInput = document.getElementById('nameInput');
let nameAlert = document.getElementById('nameAlert');

let emailInput = document.getElementById('emailInput');
let emailAlert = document.getElementById('emailAlert');

let phoneInput = document.getElementById('phoneInput');
let phoneAlert = document.getElementById('phoneAlert');

let ageInput = document.getElementById('ageInput');
let ageAlert = document.getElementById('ageAlert');

let passwordInput = document.getElementById('passwordInput');
let passwordAlert = document.getElementById('passwordAlert');

let repasswordInput = document.getElementById('repasswordInput');
let repasswordAlert = document.getElementById('repasswordAlert');

let submitBtn = document.getElementById('submitBtn');


function validationName(){
    let textName = nameInput.value;
    let regexName = /^[a-zA-Z ]+$/;

    if(regexName.test(textName) == false){
        nameAlert.classList.remove('d-none');
        return false;
    }
    else{
        nameAlert.classList.add('d-none');
        return true;
    }
}

function validationEmail(){
    let textEmail = emailInput.value;
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regexEmail.test(textEmail) == false){
        emailAlert.classList.remove('d-none');
        return false;
    }
    else{
        emailAlert.classList.add('d-none');
        return true;
    }
}



function validationPhone(){
    let phoneNumber = phoneInput.value;
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if(phoneRegex.test(phoneNumber) == false){
        phoneAlert.classList.remove('d-none');
        return false;
    }
    else{
        phoneAlert.classList.add('d-none');
        return true;
    }
}


function validationAge(){
    let age = ageInput.value;
    let ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

    if(ageRegex.test(age) == false){
        ageAlert.classList.remove('d-none');
        return false;
    }
    else{
        ageAlert.classList.add('d-none');
        return true;
    }
}


function validationPassword(){
    let password = passwordInput.value;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

    if(passwordRegex.test(password) == false){
        passwordAlert.classList.remove('d-none');
        return false;
    }
    else{
        passwordAlert.classList.add('d-none');
        return true;
    }
}

function validationRepassword(){
    if(repasswordInput.value == passwordInput.value){  
        repasswordAlert.classList.add('d-none');
        submitBtn.removeAttribute('disabled');
        return true;
    }
    else{
        repasswordAlert.classList.remove('d-none');
        return false;
    }
}




