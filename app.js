/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
Realizado por Justin Yak Inicio: 07/08/2025 */
//Variables
let amigos = [];
let list = 0;
//MAIN
console.log("Bienvenido :D");
console.log(amigos);

//Funciones
function agregarAmigo(){
    if(document.querySelector('#amigo').value == ''){
        alert('Porfavor inserta un nombre valido');
    }else{
        let amigo = document.getElementById('amigo').value;
        amigos.push(amigo);
        console.log(amigos);
        document.querySelector('#amigo').value = '';
        loadList();
    }
}

function loadList(){
    document.getElementById('listaAmigos').innerHTML = '';
    console.log('Lista Actualizada');
    for (let cant = 0; cant < amigos.length; cant++) {
         console.log(`${amigos[cant]} \n`);
         createList('listaAmigos',amigos[cant])
    }
}

function createList(id,text){
    let Element = document.createElement('li');
    let lista = document.getElementById(id);
    Element.textContent = text;
    lista.appendChild(Element).style.textAlign = 'center';
}