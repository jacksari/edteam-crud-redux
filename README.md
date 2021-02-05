# Aplicación CRUD - Blog usando REDUX

Demo de la aplicación [Aquí](https://edteam-crud-redux.netlify.app/).

## Funcionalidades
1. Se configuró con ESlint con la guía de estilos de AirBnB
2. CRUD de Pots usando la API fake: [jsonplaceholder](https://jsonplaceholder.typicode.com)
3. Funciones de GET, POST, DELETE y UPDATE para los posts
4. Se manejan los posibles errores en blogActions.js, !se explica abajo¡
5. Se almacena en LocalStorage la cantidad de peticiones hechas al servidor.
6. Su usó REDUX y sus Hook´s (useState, useEffect, useDispatch, useSelector)

## ¿Por qué REDUX?
Como se sabe REDUX es un manejador de estados, más que mejorar el rendimiento
de una aplicación se usa para tener un mejor orden en la aplicación, se recomienda
usar mayormente cuando nuestra aplicación empieza a crecer y tener los datos más
relevantes de forma centralizada en nuestro store y evitar las cargas innecesarias
y los spinners.
### ¿Cómo lo usamos en nuestro ejemplo?
Redux funciona con 3 componentes
1. Store: Es el almacén en donde guardamos nuestros estados.
   * En nuestro ejemplo se usó estos estados en nuestro store
     * blogs: [], (Posts de nuestra aplicación)
     * error: null, (Posibles errores en la peticiones)
     * loading: false, (Cargar en las diferentes peticiones)
     * success: null, (Muestra si todo fue satisfactorio)
     * blogEliminar: null, (Selecciona el post a eliminar)
     * blogSelect: null, (Selecciona nuestro post para hacer petición GET)
     * blogUpdate: null, (Selecciona nuestro post para actualizar)
     * redirect: null, (Muestra si es necesario redireccionar al home)
2. Reducers: El estado de nuestra aplicación no puede modificarse directamente 
   con funciones, por lo tanto los reducers son el intermediario entre nuestros
   actions y nuestro store; usando como función a los dispatch, tambíen es el lugar
   indicado en donde se manejan los errores o éxito de las peticiones y mostrarlos
   al usuario.
   * En nuestro ejemplo se usó estos reducers
        * AGREGAR_BLOG
        * AGREGAR_BLOG_EXITO
        * AGREGAR_BLOG_ERROR  
        * RESET  
        * COMENZAR_DESCARGA_BLOGS
        * DESCARGA_BLOGS_ERROR  
        * DESCARGA_BLOGS_EXITO  
        * BLOG_ELIMINADO_ERROR  
        * BLOG_ELIMINADO_EXITO  
        * OBTENER_BLOG_ELIMINAR
        * OBTENEER_BLOG
        * OBTENEER_BLOG_ERROR
        * OBTENEER_BLOG_EXITO
        * UPDATE_BLOG
        * UPDATE_BLOG_ERROR
        * UPDATE_BLOG_EXITO
    
3. Actions: Son las funciones que usan los dispatch para modificar directamente 
   nuestro store, aquí se hacen las peticiones a las API y se usa un dispatch
   diferente ya sea para error o éxito de la petición.
   * En nuestra aplicación se usaron los siguientes actions
        * crearNuevoBlogAction => (Crear blog, petición POST en la API FAKE)
        * obtenerBlogsAction => (Lista posts, petición GET)  
        * borrarBlogAction => (Eliminar un post, petición DELETE)  
        * obtenerBlogAction => (Lista un post por id, petición GET)  
        * updateBlogAction )> (Actualiza un post, petición PUT)  
      
## ¿Era necesario en este proyecto?
Pienso que nó, se pudo usar Context API de react, ya que con las últimas actualizaciones 
se hizo más fácil de usarla, pero ¿qué es Context API?; context es una manejador de estados 
y funciones, se sabe que los componentes de react se comunican por los 'props', pero 
usando context podemos centralizar los estados y las funciones de nuestra aplicación.
### Ejemplo
* Tenemos 4 componentes
* APP => TIENDA => PRODUCTOS => PRODUCTO
* Antes la comunicación era componente a componentes, por lo tanto la infomación viajaba mucho
* Pero con context puedes enviar la información de la siguiente manera
* APP => PRODUCTO
* Efectivamente puedes comunicar el APP con PRODUCTO
* Y también se puede comunicar funciones, puedes tener una función como la
  de logout en el context y puedes enviar la función a cualquier parte de la
  aplicación y cerrar sesión.

## Páginas
1. home
    * Listado de posts con los 100 datos de la API FAKE
    * Blog con opciones de editar o eliminar
    * Mensajes de carga, success y errores
    
2. new-blog 
    * Crear blog con opciones de title y body
    * Mensajes de carga, success y errores
    
3. update-blog
    * Actualizar blog con opciones de title y body
    * Mensajes de carga, success y errores

4. request
    * Conteo de peticiones al servidor ya sean satisfactorias o erroes

## ¿Quieres verlo por ti mismo?

### Clonar repositorio
#### `git clone https://github.com/jacksari/edteam-crud-redux.git`

### Instalar dependecias
#### `npm i`

### Iniciar aplicación
#### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

-----------------------------------------
⌨️ con ❤️ por [JackSari](https://jacksari.com/) 👋
