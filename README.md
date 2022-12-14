# BesTestEver
Si bien este proyecto es la respuesta a la prueba técnica establecida por Chipax, decidí tomármelo como una oportunidad para aprender nuevas tecnologías, por lo cual si se redirigen a la rama de develop, encontrarán el contenido en el que estoy trabajando para utilizar este repositorio como ambiente de aprendizaje.
En la rama main, encontrarán solo el contenido necesario para responder la prueba solicitada, para lo cual se decidió establecer una solución basada en node.js, este proyecto se encuentra dockerizado, con el objetivo de evitar problemas de contexto o incompatibilidades.


## Comandos de ejecución
Puesta en marcha con dockers:
* En caso de no tener docker compose instalado dejo un enlace de la documentación oficial [aquí](https://docs.docker.com/compose/install/).


```console
git clone https://github.com/OscarVargas97/BesTestEver.git
cd BesTestEver
docker-compose up
```
Puesta en marcha con node:


```console
git clone https://github.com/OscarVargas97/BesTestEver.git
cd BesTestEver
npm install
node src/app.js
```


Ahora hay que dirigirse a:
[http://localhost:3000/api/answers](http://localhost:3000/api/answers)


Para la ejecución de los test una vez ya descargado el proyecto y encontrándose en la carpeta del mismo, se debe ejecutar en consola los siguientes comandos:
```console
npm run test
```

## Enunciado


El resumen del enunciado es el siguiente:


Consumir la mejor api rest de pruebas basada en [Rick and Morty (hazme click, se que quieres)](https://rickandmortyapi.com/) y cumplir con los siguientes desafíos:


Tienes que consultar todos los `character`, `locations` y `episodes` de la api e indicar:
1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)


Para leer el enunciado completo, te invito a dar clic en el siguiente enlace: [Test.md](docs/Test.md)


## Consideraciones


Observe algo extraño respecto al enunciado de la pregunta 2 con el output solicitado de la misma, mientras que el enunciado solicita indicar la cantidad, en el output no se observa ninguna key relacionada con cantidad, por esto, decidí no incluir una key de cantidad. De todas maneras no es complejo obtener la cantidad de localizaciones, solo se debe aplicar un .length al array de resultados.


Debido a que me encuentro aprendiendo sobre pruebas unitarias y de integración, no logre realizar testing sobre todos los métodos. Además, me centré mayormente en la validación de parámetros y excepciones.
## Docs
- Aplicación back-end  [aquí](docs/Server.md)


## Formulario recomendaciones
A continuación, dejaré un formulario de google, este formulario tiene la finalidad de entregarme feedback respecto a la codificación y documentación.


[Enlace del formulario](https://docs.google.com/forms/d/1jLCJIpYxdx_ycywhJH-1OI6lw2TDYeNaOs8ubq_mEbI/viewform?edit_requested=true)


Lo más valioso para mí es mejorar y crecer tanto como programador como profesional, por lo cual estaría sumamente agradecido si lo pueden responder.


## Agradecimientos


De antemano muchas gracias al equipo de Chipax por revisar mi prueba de postulación, no tengo mucha experiencia en la industria del desarrollo, pero si muchas ganas de mejorar y estar en constante aprendizaje. Por lo mismo, me encantaría que sin importar el resultado me puedan dar un feedback solicitado en el apartado anterior.