<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el proyecto
2. Ejecutar

```bash
npm install
```

3. Tener Nest CLI instalado

```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```bash
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`

6. Llenar las variables de entorno definidas en `.env`

7. Ejecutar la aplicación en dev

```bash
npm run start:dev
```

8. Reconstruir la BD con SEED

```bash
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- NestJS
- Docker

# Production build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno definidas
3. Crear la nueva imagen (-d para no mostrar el output, en el rebuild)

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4.
