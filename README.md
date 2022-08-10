# BesTestEver.
Si bien este proyecto es la respuesta a la prueba técnica establecida por Chipax, decidí tomármelo como una oportunidad para aprender nuevas tecnologías.
Este proyecto consta de dos programas, los cuales representan a un back-end y un front-end, si bien tenia nociones básicas de node.js nunca había utilizado React.js para el desarrollo de una aplicación, por lo cual me puse como reto personal el desarrollar toda una solución full-stack dockerizada.
La respuesta al ejercicio esta implementada, pero ademas estoy usando el proyecto para probar e implementar aquellas cosas que voy aprendiendo.

## Comandos de ejecución.
En caso de no tener docker compose instalado dejo un enlace de la documentación oficial [aquí](https://docs.docker.com/compose/install/).

```console
    $ git clone https://github.com/OscarVargas97/BesTestEver.git
		$ cd BesTestEver
		$ docker compose up
		$ https://localhost:3000
```
En caso de querer ver directamente el json con la información solicitada como respuesta, dirigirse a la siguiente url
```console
		$ https://localhost:4000
```

## Enunciado.

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

Para leer el enunciado completo, te invito a dar click en el siguiente enlace: [Test.md](docs/Test.md)

## Docs.
A continuación dejo los enlaces a la documentación de cada programa, en estos detallo las decisiones de diseño junto a la distribución de carpetas establecidas:
- Aplicación back-end  [aquí](docs/Server.md)
- Aplicación Front-end [aquí](docs/Cliente.md)

## Features no considerados en la prueba técnica
	* Sistema de autenticación de usuarios en react basándose en una api

## Mejoras a implementar
* Next.js

## Formulario recomendaciones
A continuación dejare un formulario de google, este formulario tiene la finalidad de entregarme feedback respecto a la codificación y documentación.

[Enlace del formulario](https://docs.google.com/forms/d/1jLCJIpYxdx_ycywhJH-1OI6lw2TDYeNaOs8ubq_mEbI/viewform?edit_requested=true)

Lo mas valioso para mi es mejorar y crecer tanto como programador como profesional, por lo cual estaría sumamente agradecido si lo pueden responder.

## Agradecimientos

De antemano muchas gracias al equipo de Chipax por revisar mi prueba de postulación, no tengo mucha experiencia en la industria del desarrollo, pero si muchas ganas de aprender y estar en constante aprendizaje. Por lo mismo, me encantaría que sin importar el resultado me puedan dar un feedback solicitado en el apartado anterior.
