// Variable para mantener control de las IDs
var ids = -1;

// Lista para almacenar los contactos
const contactos = [];

var cerrado;
var cerrado_bus;



// --------------------------------- REFERENCIAS ---------------------------------------------------

const buscar = document.querySelector("#buscar");
const busDiv = document.getElementById("busqueda-div")
const abrirBus = document.getElementById("abrir-busqueda")

const abrir = document.getElementById("abrirModal");
const modal = document.getElementById("modal");
const agendar = document.getElementById("agendar");
const cerrar = document.getElementById("cerrar");

const listaContactos = document.getElementById("lista-contactos");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputTelefono = document.getElementById("telefono");



// ------------------------------ FUNCIONES -------------------------------------------------------

// ---------------------------------------------- VALIDAR CONTACTOS
function validar() {

    // Guardado de inputs
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;

    // Validacion de datos
    if(nombre === "" || telefono === ""){
        alert("Los campos nombre y teléfono son obligatorios.");
        return;
    }

    // Confirmar que quiere agregar el contacto
    let confirmar = confirm(`¿Desea agregar el contacto ${nombre} ${apellido} con el teléfono ${telefono}?`);
    if(confirmar){

        addGuardar(nombre, apellido, telefono);
    }

    mostrarElementos(contactos); // Muestro la lista de contactos

    // Limpio los campos del formulario
    inputNombre.value = "";
    inputApellido.value = "";
    inputTelefono.value = "";

    // Cerrar el modal
    modal.style.display="none";
    cerrado = true
}



// ---------------------------------------------- GUARDAR CONTACTOS
function addGuardar(nombre, apellido, telefono) {
    ids ++; // Aumento las ids para que no se repitan
    
    // Genero el contacto basado en los inputs
    const contacto = {
        id: ids,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };

    contactos.push(contacto); // Guardo el contacto
}



// ---------------------------------------------- ELIMINAR CONTACTOS
function eliminarContacto(id) {

    let confirmar = confirm("¿Seguro que querés eliminar este contacto?");
    if(!confirmar) return;

    // Eliminar del array
    let index = -1;

    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        contactos.splice(index, 1);
    }

    // Se actualiza la lista
    mostrarElementos(contactos);
}



// ---------------------------------------------- MOSTRAR CONTACTOS
function mostrarElementos(lista) {

    listaContactos.innerHTML = "";  // Limpio la lista HTML

    for (const cont of lista) {     // Recorrio mi lista de contactos y los agrego a la lista HTML

        const elemento = document.createElement("li");
        elemento.innerHTML = `<p id="${cont.id}" class="contacto">${cont.nombre}, ${cont.apellido} - ${cont.telefono}</p>`;

        //Boton eliminar para cada contacto
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        //Evento eliminar
        btnEliminar.addEventListener("click", () => {
            eliminarContacto(cont.id);
        });

        elemento.appendChild(btnEliminar);  //Inserta el botón dentro de li
        listaContactos.appendChild(elemento);
    }
}



// ---------------------------------------------- FILTRAR BUSQUEDA
// Filtra los elementos que se muestran en base a la busqueda
function filtrarElementos() {

    if(buscar.value){
        let filtrados = [] // Arreglo para guardar temporalmente los contactos filtrados

        let busqueda = buscar.value.toLowerCase();

        for (const cont of contactos) {                                             // Busco los contactos que coincidan en la
            let datos = cont.nombre + "" + cont.apellido + "" + cont.telefono;      // busqueda y los agrego al arreglo temporal
            if(datos.toLowerCase().includes(busqueda)){
                filtrados.push(cont);
            }
        }
        mostrarElementos(filtrados);

    } else {
        mostrarElementos(contactos);
    }
}



// -------------------------- EVENT LISTENERS Y FUNCIONES SIMPLES ---------------------------------

// ---------------------------------------------- AGREGAR CONTACTOS
modal.style.display="none";
cerrado = true

// Si esta cerrada la seccion lo la despliega y viceversa
abrir.addEventListener("click", () => {
    if(cerrado){
        modal.style.display="flex";
        cerrado = false
    } else {
        modal.style.display="none";
        cerrado = true
    }
});

// Cierra la seccion desde un boton de cerrar
cerrar.addEventListener("click", () => {
    modal.style.display="none";
    cerrado = true
});

// LLama a la funcion validar() cuando se presiona el boton de agendar
agendar.addEventListener("click", () => {
    validar();
});

// ---------------------------------------------- BUSQUEDA
busDiv.style.display="none";
cerrado_bus = true

//Si esta cerrada la seccion lo la despliega y viceversa
abrirBus.addEventListener("click", () => {
    if(cerrado_bus){
        busDiv.style.display="flex";
        cerrado_bus = false
    } else {
        busDiv.style.display="none";
        cerrado_bus = true
    }
});

// ---------------------------------------------- FILTRO
// LLama a la funcion de filtrado cada vez que se escribe algo en el buscador
buscar.addEventListener("input", () => {
    filtrarElementos();
});

// Limpia el buscador cuando se presiona Enter
buscar.addEventListener("keypress", (e) =>{
    if(e.key == "Enter"){
        buscar.value = ""
    }
});