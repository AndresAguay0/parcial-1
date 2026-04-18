
//AGREGAR CONTACTOS
let abrir = document.getElementById("abrirModal");
let modal = document.getElementById("modal");
let guardar = document.getElementById("guardar");
let cerrar = document.getElementById("cerrar");

let lista = document.getElementById("lista-contactos");
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
        //crear contacto
        let li = document.createElement("li");
        li.textContent = `${nombre} ${apellido} - ${telefono}`;

        //agregar contacto a la lista
        lista.appendChild(li);
    }

    //limpio los campos del formulario
    inputNombre.value = "";
    inputApellido.value = "";
    inputTelefono.value = "";

    //cerrar el modal
    modal.style.display="none";
});
// TERMINA AGREGAR CONTACTOS