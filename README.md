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
    Trabajamos sobre el mismo index.html ya que nuestra idea es utilizar un componente (modal) que nos permite desplegar una pequeña ventana 
    tocar el boton de agregar, asi todo puede suceder en la misma pestaña, interactuando con el usuario sin cambiar de pagina.
    Realizamos el scrip.js de la parte de agregar contactos, creo variables y llamo a los datos y botones mediante los IDs, utilizo addEventListener para abrir y cerrar el modal. Tambien agregue confirmacion para agregar el contacto y validacion para los campos, finalice cargandolo a la lista vacia creada por Andréss y cerrando el modal.
    Dejo acontinuacion informacion de lo que usé, para que a mis compañeros se les facilite el analisis del codigo:
    
### Modal: concepto y funcionamiento
Un **modal** es un componente de interfaz de usuario utilizado para mostrar contenido o solicitar información al usuario sin abandonar la página actual. Se presenta como una ventana superpuesta que aparece por encima del contenido principal, enfocando la atención en una tarea específica.

### ¿Para qué se utiliza?
Los modales se emplean comúnmente para:
* Formularios de ingreso de datos
* Confirmaciones de acciones (ej: eliminar, guardar)
* Mensajes importantes o alertas
* Inicio de sesión o registro
Su principal objetivo es **interrumpir momentáneamente el flujo normal de la interfaz** para que el usuario realice una acción puntual.

## Tecnologías involucradas
La implementación de un modal combina tres tecnologías principales:

### 1. HTML (estructura)
Define los elementos que componen el modal:
* Contenedor principal (overlay)
* Contenedor interno (contenido visible)
* Formularios, textos y botones

### 2. CSS (presentación)
Se encarga del aspecto visual y posicionamiento:
* `position: fixed` para superponer el modal sobre toda la pantalla
* `display: none` para ocultarlo inicialmente
* Fondos semitransparentes para generar efecto de enfoque
* Centrados y estilos del contenido

### 3. JavaScript (comportamiento)
Controla la interacción del usuario:
* Mostrar el modal (cambiando propiedades como `display`)
* Ocultarlo cuando se completa o cancela la acción
* Validar datos ingresados
* Ejecutar acciones según la interacción del usuario

## Funcionamiento general
1. El modal se encuentra oculto por defecto.
2. Una acción del usuario (por ejemplo, hacer clic en un botón) activa su visualización.
3. El usuario interactúa con el contenido del modal.
4. Se procesan los datos o se ejecuta una acción.
5. El modal se cierra y el usuario vuelve al flujo principal de la página.

## Características principales
* No requiere recargar la página
* Permite interacción directa sin cambiar de vista
* Mejora la experiencia de usuario al mantener el contexto
* Centraliza acciones importantes en un espacio controlado

## Consideraciones de uso
* Debe utilizarse para acciones específicas y no abusar de su implementación
* Es importante que tenga una forma clara de cerrarse
* Debe ser accesible (por ejemplo, mediante teclado o lectores de pantalla)
* Su diseño debe ser claro y no invasivo

## Conclusión
El modal es un componente fundamental en el desarrollo web moderno, ya que permite gestionar interacciones de manera eficiente sin interrumpir completamente la navegación del usuario. Su correcta implementación combina estructura, estilo y lógica para ofrecer una experiencia fluida y organizada.

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

> ### Herramienta de búsqueda

> ### Eliminación de contactos

## Funciones

...
