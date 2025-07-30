// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('amigo').value.trim();

    // Validar la entrada
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(inputNombre);

    // Limpiar campos y mostrar lista actualizada
    limpiarCampos('lista');
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    // Obtener el elemento de la lista en el HTML
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indice];

    // Mostrar el resultado en el elemento correspondiente
    resultado.innerHTML = `<li>Amigo seleccionado: ${nombreSorteado}</li>`;

    // Limpiar lista y array de amigos
    limpiarCampos('todo');
}

// Función para limpiar campos
function limpiarCampos(tipo) {
    // Obtener elementos del DOM
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Limpiar campos según el tipo especificado
    if (tipo === 'lista') {
        input.value = "";
        mostrarListaAmigos();
    } else if (tipo === 'resultado') {
        resultado.innerHTML = "";
    } else if (tipo === 'todo') {
        lista.innerHTML = "";
        amigos = [];
    }
}