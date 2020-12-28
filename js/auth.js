document.body.style.backgroundColor = '#000'
document.addEventListener("DOMContentLoaded", function(){

    var emailInput = document.querySelector('#emailInput');
    var passwordInput = document.querySelector('#passwordInput');
    var addButton = document.querySelector('#addButton');
    console.log("Load!")
    
    
    addButton.addEventListener('click', function(){
        console.log('entrei no addevent')
        auth(emailInput.value, passwordInput.value);     
    })  
})

function auth(email, password){
    console.log("helou mi fridnend");
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            (user) => {
                alert('Bem-vindo!');
            },
            (err) => {
                alert('Erro!')
            }
        )
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode +'\n'+errorMessage);
        })
}
