function validateFname(){
    let fname = document.getElementById('fname').value;
    if(fname.trim().length == 0){
        fout.innerText = "Please Enter FirstName";
        fdiv.classList.add('has-error')
    }else{
        fout.innerText = ""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText="Please Enter Email Id"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

function validatePassword(){
    let pwd = document.getElementById('pwd').value;
    if(pwd.trim().length < 15 ){
        if(pwd.trim().length < 8){
            document.getElementById('pout').innerText="Min Length of password is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "red";
        }else if(pwd.trim().length < 11){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.backgroundColor = "orange";
        }
    }else{
        document.getElementById('ppout').style.backgroundColor = "green";
    }
}

const showPassword = () => {
    let pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

const validateCPassword=()=>{
    let pwd = document.getElementById('pwd').value;
    let cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does Not Match" 
    }else{
        document.getElementById('cpout').innerText=""
    }
}

function getCity(){
    let city = document.getElementById('country').value;
    document.getElementsByTagName('span')[1].innerText=`You have selected ${city}`
}