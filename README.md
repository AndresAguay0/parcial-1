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
> Al ingresar un contacto, lo que hacemos es tomar los datos de los inputs del html, validarlos y guardarlos como un objeto de js dentro de nuestro arreglo de contactos. Finalmente mostramos la lista de contactos, que ahora está actualizada.

> ### Muestra de contactos
> Para la muestra de contactos simplemente creamos una función que recibe una lista de contactos y agrega por cada uno de ellos un elemento html(li) en la lista vacía del index con la información de cada contacto.

> ### Herramienta de búsqueda
> Nuevamente decidimos desplegar la barra de búsqueda a través de un botón para no salir de la página.  
> En este caso para tener una búsqueda en tiempo real creamos una función que busca directamente en la lista de contactos de javascript por cada input del usuario. Esta función crea un arreglo temporal y busca a quienes coinciden con lo ingresado en el momento por el usuario. Los que coinciden son agregados a la lista y la misma es mostrada en lugar de la lista de contactos.

> ### Eliminación de contactos

## Funciones

...
