// Variable para mantener control de las IDs
var ids = -1;

const contactos = [];   // Lista para almacenar los contactos
const buscar = document.querySelector("#buscar"); // referencia al elemento en el html

//AGREGAR CONTACTOS
let abrir = document.getElementById("abrirModal");
let modal = document.getElementById("modal");
let guardar = document.getElementById("guardar");
let cerrar = document.getElementById("cerrar");

let listaContactos = document.getElementById("lista-contactos");
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputTelefono = document.getElementById("telefono");

//para abrir el modal
abrir.addEventListener("click", function(){
    modal.style.display="flex";
});

//para cerrar el modal
cerrar.addEventListener("click", function(){
    modal.style.display="none";
});

//para guardar el contacto
guardar.addEventListener("click", function(){

    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;

    //validar que los campos no estén vacíos
    //no valido apellido ya que hay gente que pone todo en el campo nombre o agenda sin apellido.
    if(nombre === "" || telefono === ""){
        alert("Los campos nombre y teléfono son obligatorios.");
        return;
    }

    //confirmar que quiere agregar el contacto
    let confirmar = confirm(`¿Desea agregar el contacto ${nombre} ${apellido} con el teléfono ${telefono}?`);
    if(confirmar){
        // //crear contacto
        // let li = document.createElement("li");
        // li.textContent = `${nombre} ${apellido} - ${telefono}`;

        // //agregar contacto a la lista
        // lista.appendChild(li);

        // NUEVA IMPLEMENTACION -------------------------------------------

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

    mostrarElementos(contactos); // Muestro la lista de contactos

    //limpio los campos del formulario
    inputNombre.value = "";
    inputApellido.value = "";
    inputTelefono.value = "";

    //cerrar el modal
    modal.style.display="none";
});
// TERMINA AGREGAR CONTACTOS

// MOSTRAR CONTACTOS
function mostrarElementos(lista) {

    listaContactos.innerHTML = "";  // Limpio la lista HTML

    for (const cont of lista) {     // Recorrio mi lista de contactos y los agrego a la lista HTML

        const elemento = document.createElement("li");
        elemento.innerHTML = `<p id="${cont.id}" class="contacto">${cont.nombre}, ${cont.apellido} - ${cont.telefono}</p>`;
    
        listaContactos.appendChild(elemento);
    }
}

// FILTRAR BUSQUEDA
// LLama a la funcion de filtrado cada vez que se escribe algo en el buscador
buscar.addEventListener("input", () => {
    filtrarElementos();
});

// Filtra los elementos que se muestran en base a la busqueda
function filtrarElementos() {

    if(buscar.value){
        let filtrados = [] // Arreglo para guardar temporalmente los contactos filtrados

        let busqueda = buscar.value.toLowerCase(); 

        for (const cont of contactos) {                 // Busco los contactos que coincidan en la busqueda y los
            let datos = cont.nombre + "" + cont.apellido + "" + cont.telefono;    // agrego al arreglo temporal
            if(datos.toLowerCase().includes(busqueda)){
                filtrados.push(cont);
            }
        }
        mostrarElementos(filtrados);

    } else {
        mostrarElementos(contactos);
    }
}