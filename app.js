/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
Realizado por Justin Yak Inicio: 07/08/2025 */
//Variables
let amigos = [];
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
    }
}

