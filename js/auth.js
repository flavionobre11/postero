window.onload = function(){

    var emailInput = document.querySelector('#emailInput');
    var passwordInput = document.querySelector('#passwordInput');
    var addButton = document.querySelector('#addButton');

    addButton.addEventListener('click', function(){
        auth(emailInput.value, passwordInput.value);     
    })  
} 

function auth(email, password){
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Bem-vindo!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode +'\n'+errorMessage);
        })
}
