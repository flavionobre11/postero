window.onload = function(){
    var clientList = document.getElementById("clientList");
    var nameInput = document.getElementById("nameInput");
    var contactInput = document.getElementById("contactInput");
    var addButton = document.getElementById('addButton');

    addButton.addEventListener('click', function(){
        create(nameInput.value, contactInput.value);
    })

    function create(name, contact){
        var data = {
            name: name,
            contact: contact
        };

        return firebase.database().ref().child('clients').push(data)
        .catch(function(err){
            console.log(err);
        });
    }
}

firebase.database().ref('clients').on('value', function(snapshot){
    clientList.innerHTML = '';
    snapshot.forEach(function (item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name+': '+item.val().contact));
        clientList.appendChild(li);
    })
});