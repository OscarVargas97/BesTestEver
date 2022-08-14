# Documentación Node.js
A continuación explicare algunas decisiones de diseño y como mantener el código de manera ordenada, por favor si desea ingresar nuevo código mantener el patron de diseño establecido.

## MVC
Si bien, la solicitud del enunciado se podría realizar sin establecer un patron de arquitectura, siempre es bueno aprovechar para practicar conceptos y agregar nuevos proyectos al portafolio (jiji).

Personalmente me gusta iniciar un proyecto considerando que no se debe "matar a una mosca con una bazuca", pero por otro lado, también creo que las soluciones que debemos crear siempre deben estar orientadas a ser legibles y escalables. Por lo cual, no esta demás implementar un modelo que permita organizar y disminuir la carga cognitiva por scripts, ademas de facilitar a aquellos que desean leer el código.

## Directorios
Para organizar el proyecto se decidió por seguir el modelo Model-View-Controller, por lo cual los directorios se organiza de la siguiente manera:

* src (Carpeta donde se encuentra el código de la aplicación)
    * controllers (Carpeta donde ira la lógica a implementar en nuestras rutas y gestionar las vistas)
        * user.controller.js
        ...
    * models (Carpeta donde se declarara la abstracción de los modelos de la base de datos)
        * user.model.js
        ...
    * routes (Carpeta donde se indicaran las distintas direcciones http y sus llamados a controladores)
        * index.js
        * user.js
        ...
    * Static (Carpeta donde estará el contenido estático, tales como imágenes, javascript y css)
    * views (Carpeta donde estará el código de html de nuestros )
        * home 
        * layout
        * partial
            

## Archivos relevantes y consideraciones
Dentro de la declaración realizada anteriormente, es necesario resaltar algunos archivos, para entender como es que se debe agregar por ejemplo, nuevos modelos, controladores, vistas o rutas.
En los siguientes apartados se abordara los puntos mencionados anteriormente.

### app.js
Este archivo contiene lo necesario para inicializar nuestra aplicación, tales como la implementación de los distintos módulos, llamado del framework back-end a utilizar (Express.js), inclusion del index.js (archivo del que hablaremos mas adelante), declarar el puerto que utilizara la aplicación y finalmente la sesión de nuestra base de datos.

Las ocasiones en las que debemos modificar este archivo son contadas, principalmente si se desea establecer configuraciones generales o bien agregar nuevos módulos al proyecto, pero jamas debemos declarar rutas o archivos en este, ya que esto dificulta el mantenimiento del código y la legibilidad.

### routes/index.js
index.js tiene el deber de recolectar todos los enlaces relacionados a los routers, ademas de agregar estos archivos al router de express y posteriormente exportarlo, para que app.js puede importar la información recopilada.

La idea principal de este, es disminuir la carga de declaraciones en el app.js, ademas de facilitar la implementación de nuevas rutas.

Este archivo se utilizara cada vez que deseamos integrar un nuevo conjunto de rutas a la aplicación, posteriormente al haber establecido el nuevo archivo, por ejemplo:

```
ejemplo.js
```
se debe realizar la inclusion de las nuevas rutas de la siguiente manera:

```javascript
...
router.use('/ejemplo',require('./ejemplo.js'))
...
```
Es importante mencionar que todas las rutas que agregamos, deben encontrarse en la carpeta routes.

Finalmente, index.js se encarga re recibir este archivo ya agregarlo al proyecto, adjuntando asi todos los enrutamientos.

### Agregar controladores
En el caso de querer agregar un nuevo controlador, este debe ir en la carpeta de controladores y debe tener un nombre descriptivo, este debe contener el sufijo .controller por ejemplo:
```
NombreMuyDescriptivoComoNo.controller.js
``` 
### Agregar modelos
En el caso de los modelos se aplica la misma lógica que los controladores, es importante mencionar que un modelo esta relacionado a solo 1 tipo de objeto.
```
NombreMuyDescriptivoComoNo.model.js
``` 
### Organización de las vistas
En el caso de querer crear una nueva vista, para nuestro proyecto debemos agregar el código html, siguiendo un criterio tal que:

Aquellos archivos que correspondan al o bienvenida de nuestro sistema, deben ir en la carpeta home.

Todo contenido Html del Layout en la carpeta Layout.

Todo Contenido parcial en la carpeta parcial.

El resto de contenido......
El resto de contenido......
...
...
Sigo pensando en ello jiji :D

### Contenido estático
Los archivos ccs, html e imágenes deben ir incluidos en su carpeta correspondiente dentro de la carpeta Static.

## Variables de entorno
Las variables de entorno se manejaran desde un archivo .env, con el fin de evitar el exponer contenido sensible en el código fuente de nuestra aplicación. Se implemento el modulo dotenv, el cual se encarga de cargas las variables declaradas en el .env a las variables de entorno de nuestro sistema. 
Es esencial que toda aquella información, tales como token, contraseñas o credenciales, se ingresen como variables de entorno y que posteriormente se consuman en la aplicación utilizando el comando: 
```javascript
process.env.NombreVariableEntorno
```
Esto con el fin no exponer la información sensible de nuestro sistemas.

## Base de datos
El motor de base de datos seleccionado es MongoDB. Esto es debido a la facilidad que entrega para trabajar y crear información, es una buena herramienta para proyectos pequeños y proyectos de alta demanda de query por segundo.

### Modelo Relacional (por los jajas)
![Descripción de la imagen](https://memecreator.org/static/images/memes/5485764.jpg)