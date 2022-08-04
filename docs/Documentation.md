# Documentación
A continuación explicare algunas decisiones de diseño y como mantener el código de manera ordenada, por favor si desea ingresar nuevo código mantener el patron de diseño establecido.

## MVC

## Directorios
Para organizar el proyecto se decidió por seguir el modelo Model-View-Controller, por lo cual el proyecto se organiza de la siguiente manera:

* src (Carpeta donde se encuentra el código de la aplicación)
    * controller (Carpeta donde ira la lógica a implementar en nuestras rutas y gestionar las vistas)
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
            

## Archivos relevantes
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
    outer.use(require('./ejemplo.js'))
    ...
```
Finalmente, index.js se encarga re recibir este archivo ya agregarlo al proyecto, adjuntando asi todos los enrutamientos.

### Agregar controladores

### Agregar modelos

### Organización de las rutas

### Organización de las vistas

## Variables de entorno

## Base de datos
