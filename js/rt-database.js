window.onload = function(){
    let clientList = document.getElementById("clientList");
    var nameInput = document.getElementById("nameInput");
    var contactInput = document.getElementById("contactInput");
    var addButton = document.getElementById('addButton');

    refreshSnapshot();

    addButton.addEventListener('click', function(){
        if(nameInput.value=="" || contactInput.value==""){
            alert("Digite informações válidas.")
        }else{
            alert("entrando na criaçao...")
            create(nameInput.value, contactInput.value)
        }
    })

    function create(name, contact){
        var data = {
            name: name,
            contact: contact
        };

        return firebase.database().ref().child('clients').push(data)
        .catch(function (err){
            console.log(err);
        });
    }

    function refreshSnapshot(){
        firebase.database().ref('clients').on('value', function(snapshot){
            alert("Tô no snapshop, f.roots.");
            clientList.innerHTML = '';
            snapshot.forEach(function (item){
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(item.val().name+': '+item.val().contact));
                clientList.appendChild(li);
            })
        });
    }
}