// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]

function agregarAmigo(){
    let nombre=document.querySelector('#amigo').value;
    if(nombre==''){
        alert('Ingresa un nombre por favor!!');
    }else{
        amigos.push(nombre);
        console.log(amigos)
        document.querySelector('#amigo').value='';

    }
}

function listarAmigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML='';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];  
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('No tienes amigos en la lista, agrega al menos uno.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 
    let li = document.createElement('li');
    li.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(li);
}