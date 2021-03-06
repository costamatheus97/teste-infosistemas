## Table of contents
* [General info](#general-info)
* [How to run it](#how-to-use-it)
* [Routes](#routes)
* [Technologies](#technologies)

## General info

This is a test project for Infosistemas

## How to run it

After cloning the repository, install the dependencies with:

```
$ yarn
``` 

Then run the docker image with:

```
$ docker-compose up
``` 

After running the docker image, run the migrations:

```
$ yarn typeorm migration:run
``` 

For testing, run:

```
$ yarn test
``` 

## Routes

GET

```
http://localhost:3333/api/cars
```

Expected response:

- 200: Success

```
http://localhost:3333/api-docs
```

POST

```
http://localhost:3333/api/cars
```

Body example:

```
  {
	"plate": "ABC-1234",
	"chassis": 12345678,
	"renavam": 12345678,
	"model": "Roadster",
	"brand": "Tesla",
	"year": 2021
  }
```

Expected responses:

- 201: Created
- 400: Bad Request - Car already exists

PUT

```
http://localhost:3333/api/cars/:id
```

Body example:

```
  {
	"model": "350z",
	"brand": "Nissan",
  }
```

Expected responses:

- 204: No Content
- 400: Bad Request - Car not found


DELETE

```
http://localhost:3333/api/cars/:id
```

Expected responses:

- 204: No Content
- 400: Bad Request - Car not found

## Technologies

* Nodejs
* Typescript
* Express
* Docker
* PostgreSQL
* TypeORM