# Brotar Contra el Olvido

Trabajo Integrador Final para la materia Teoría de la Práctica Artística - Año 2020

## Montar ambiente de desarrollo utilizando docker
Ejecutar desde el directorio `docker/dev`:

Si es la primera vez:
```sh
$ cp .env.dist .env
$ docker-compose build
$ docker run -it --rm -v"`pwd`/../..":/code brotar/app yarn install
```
suponiendo que no se modificó el nombre del proyecto en el archivo `docker/dev/.env`

Para montar el proyecto:
```sh
$ docker-compose up -d
```

Para desmontar el proyecto:
```sh
$ docker-compose down -v
```

## Montar ambiente de producción

Instalar dependencias:
 - node
 - yarn
 - vue/cli
 - quasar
 

Ejecutar desde la raíz del proyecto:
```sh
$ yarn build
$ node server.js
```
