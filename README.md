## Integrantes:
- Fabricio Maida
- Andrés Aguayo
- Ailén Villalba
- Valentina Vitale
- Alesio Cragno

## Metodologías de trabajo utilizadas
- Git / GitHub

## División de trabajo
`Cabe recalcar que hubo aportes de todos los integrantes en los otros campos.`

> ### Inicialización
> _Creación del repositorio, los directorios, y construcción inicial de index.html_
> - Andrés Aguayo

> ### Gestión de contactos
> _Agregar contactos y sumarlos a la lista + funcionalidades necesarias_
> - Alesio Cragno
> - Valentina Vitale

> ### Herramienta de búsqueda
> _Interacción básica de la herramienta y filtrado de contactos en tiempo real_
> - Andrés Aguayo
> - Fabricio Maida

> ### Eliminación de contactos
> _Interacción de eliminación e implementación real en la lista_
> - Ailén Villalba

> ### Estilo
> _Estilo en css de la pagina_
> - Ailén Villalba

## Resolución de ejercicios

> ### Gestión de contactos
> La idea principal fue que todo se haga dentro de la misma vista, entonces implementamos un botón para desplegar una pequeña sección de inputs de texto en la que el usuario puede ingresar los datos del contacto.  
> La idea fue gestionar los contactos en un arreglo dentro de javascript para poder acceder a ellos en cualquier momento. Decidimos guardarlos como objetos simples con los atributos de cada contacto para facilitar la búsqueda y eliminación de los mismos.  
> Al ingresar un contacto, lo que hacemos es tomar los datos de los inputs del html, validarlos y guardarlos junto con una id propia como un objeto de js dentro de nuestro arreglo de contactos. Finalmente mostramos la lista de contactos, que ahora está actualizada.

> ### Muestra de contactos
> Para la muestra de contactos simplemente creamos una función que recibe una lista de contactos y agrega por cada uno de ellos un elemento html(li) en la lista vacía del index con la información de cada contacto. Además a cada contacto le agregamos un botón propio de eliminar para poder relacionarlo individualmente con el elemento en el que está.

> ### Herramienta de búsqueda
> Nuevamente decidimos desplegar la barra de búsqueda a través de un botón para no salir de la página.  
> En este caso para tener una búsqueda en tiempo real creamos una función que busca directamente en la lista de contactos de javascript por cada input del usuario. Esta función crea un arreglo temporal y busca a quienes coinciden con lo ingresado en el momento por el usuario. Los que coinciden son agregados a la lista y la misma es mostrada en lugar de la lista de contactos.

> ### Eliminación de contactos
> En este caso, al tener el botón de eliminar dentro de cada elemento, la eliminación es sencilla. Solo necesitamos pasar la id del contacto a la función de eliminación y esta se encarga de eliminarlo del arreglo de contactos y reordenar su contenido.  

## Funciones

- validar();

Lo primero que hace esta función es guardar los datos ingresados en variables locales para poder trabajar directamente con los inputs.  
Después se encarga de validar que no haya campos vacíos o que sean correctos.  
Luego pide una confirmación para agregar el contacto, así llama a la función addGuardar().  
Por último muestra los contactos actuales (que ahora están actualizados), limpia los campos y cierra la sección de agregar contacto.  

- addGuardar();  

Esta función primero incrementa las ids generales de los contactos (ya que se está agregando uno nuevo).  
Después genera un JSON con los datos del contacto y su propia id.  
Por último lo pushea a la lista de contactos.

- eliminarContacto();

A esta función se le da la id del contacto a eliminar y tras una confirmación, lo busca en el arreglo de contactos.  
Finalmente con el método splice() lo elimina del arreglo y vuelve a mostrar la lista.

- mostrarElementos();

Esta función primero limpia la lista del index y la deja vacía.  
Después se recorre el arreglo de contactos por cada uno de ellos crea un elemento html con su información. Además le agrega un botón propio de eliminar que llama a la función eliminarContacto().  
Mientras recorre el arreglo y crea estos elementos, los va agregando a la lista del html.

- filtrarElementos();

Primero se fija si hay algo válido en el input del usuario.  
Si hay algo en la barra de búsqueda, crea un arreglo temporal para guardar los datos encontrados.  
Después busca a los contactos del arreglo que contengan en alguna parte la búsqueda hecha por el usuario. Los que coinciden son guardados en la lista temporal.
Una vez recorrida la lista, muestra los elementos de la lista filtrada.