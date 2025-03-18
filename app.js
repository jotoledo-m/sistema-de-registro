// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales
let listaPersonasAgregadas = [];

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia la lista antes de actualizar
    listaPersonasAgregadas.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`; // Agrega los nombres con su posición en la lista
        ul.appendChild(li);
    });
}

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Captura y limpia espacios del input
    if (nombre && !listaPersonasAgregadas.includes(nombre)) { // Validar que no esté vacío ni repetido
        listaPersonasAgregadas.push(nombre); // Agrega el nombre al array
        actualizarLista(); // Actualiza la lista visible
        input.value = ""; // Limpia el input
    } else {
        alert("El nombre está vacío o ya está en la lista."); // Mensaje si está vacío o duplicado
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpia el resultado anterior

    if (listaPersonasAgregadas.length > 1) { // Verifica que haya al menos 2 nombres
        let indiceAleatorio = Math.floor(Math.random() * listaPersonasAgregadas.length);
        let amigoSorteado = listaPersonasAgregadas[indiceAleatorio];
        let li = document.createElement("li");
        li.textContent = `El amigo secreto es: ${amigoSorteado}`; // Muestra el nombre sorteado
        ulResultado.appendChild(li);
    } else if (listaPersonasAgregadas.length === 1) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}
