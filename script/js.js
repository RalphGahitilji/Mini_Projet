const form = document.getElementById('form');
const username = document.getElementById('username');
const prenom = document.getElementById('prenom');
const birth = document.getElementById('birth');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const isbirth = (birthlVal) = {
    var atSymbol = birthVal.index0f('@');
    if (atSymbol < 1) return false;
    var dot = birthVal.lastIndex0f('.');
    if (dot <=  atSymbol + 2) return false;
    if ( dot === birthVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.ariaValueMax.trim();
    const prenomVal = prenom.ariaValueMax.trim();
    const birthVal = birth.ariaValueMax.trim();

    //username
    if (usernameVal === ""){
        setErrorMsg(username, 'Name connot be blank')
    }
    else if (usernameVal.length <=2){
        setErrorMsg(username, min 3 char);
    }
    else{
        setSuccessMsg(username);
    }
    //prenom 
    if (prenomVal === ""){
        setErrorMsg(prenom, 'Prenom connot be blank')
    }
    else if (prenomVal.length <=2){
        setErrorMsg(prenom, min 3 char);
    }
            setSuccessMsg(prenom);
    //birth
    if (birthVal === ""){
        setErrorMsg(birth, 'Birth connot be blank')
    }
    else if (!isbirth(birthVal)){
        setErrorMsg(birth, birth is not valid);
    }
            setSuccessMsg(birth);
}  

function setErrorMsg(input, errormsgs){
    const formControl = input.parent.Element;
    const small = formControl.querySelector('small');
    formControl.className = "form-controle error";
    small.innerText = errormsgs;
}