// Variable para mantener control de las IDs
var ids = -1;

// Lista para almacenar los contactos
const contactos = [];   



// REFERENCIAS ----------------------------------------------------------------
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



// MODAL ----------------------------------------------------------------------
modal.style.display="none";
var cerrado = true

abrir.addEventListener("click", () => {
    if(cerrado){
        modal.style.display="flex";
        cerrado = false
    } else {
        modal.style.display="none";
        cerrado = true
    }
});

cerrar.addEventListener("click", () => {
    modal.style.display="none";
    cerrado = true
});



// GUARDAR CONTACTOS ----------------------------------------------------------
agendar.addEventListener("click", () => {
    validar();
});

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
}

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



// MOSTRAR CONTACTOS ----------------------------------------------------------
function mostrarElementos(lista) {

    listaContactos.innerHTML = "";  // Limpio la lista HTML

    for (const cont of lista) {     // Recorrio mi lista de contactos y los agrego a la lista HTML

        const elemento = document.createElement("li");
        elemento.innerHTML = `<p id="${cont.id}" class="contacto">${cont.nombre}, ${cont.apellido} - ${cont.telefono}</p>`;
    
        listaContactos.appendChild(elemento);
    }
}



// FILTRAR BUSQUEDA ----------------------------------------------------------------------
// LLama a la funcion de filtrado cada vez que se escribe algo en el buscador
buscar.addEventListener("input", () => {
    filtrarElementos();
});

buscar.addEventListener("keypress", (e) =>{
    if(e.key == "Enter"){
        buscar.value = ""
    }
});

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



// SECCION BUSQUEDA
// Inicia cerrado el div
busDiv.style.display="none";
var cerrado_bus = true

//Si esta cerrado lo abre y viceversa
abrirBus.addEventListener("click", () => {
    if(cerrado_bus){
        busDiv.style.display="flex";
        cerrado_bus = false
    } else {
        busDiv.style.display="none";
        cerrado_bus = true
    }
});