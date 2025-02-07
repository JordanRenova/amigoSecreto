// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    if (nuevoAmigo === "") {
        alert("Ingrese el nombre de su amigo");
    } else {
        amigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";
        document.getElementById("listaAmigos").innerHTML = amigos.join("<br>");
    }

}

function sortearAmigo() {
    let numeroAmigos = amigos.length;
    let sorteo = Math.floor(Math.random() * numeroAmigos);
    if (numeroAmigos === 0) {
        alert("Ingrese el nombre de sus amigos")
    } else {
        alert("El amigo sorteado fue: " + amigos[sorteo]);
    }

}