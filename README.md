# People API

Simple REST API with list of people.

## Usage 

This API can show you simple website with list of people and return json objects with singular person or whole array with people.

- Getting informations (GET) - read from CRUD acronym

/api/users - will return object with array of people:

[
{
"id": 1,
"name": "Jan",
"lastName": "Kowalski"
},
{
"id": 2,
"name": "Anna",
"lastName": "Nowak"
}...

/api/user/2 - will return object with singular person by given id

{
"id": 2,
"name": "Anna",
"lastName": "Nowak"
}

- Adding records (POST) - create from CRUD acronym

POST method: /api/user/ - needs in "body" object with the same structure:
{
"name": "Anna",
"lastName": "Nowak"
}

- Editing records (PUT) - update from CRUD acronym

PUT method: /api/user/5 - needs in "body" object with one or both keys: name or lastName

- Deletin records (DELETE) - delete from CRUD acronym

DELETE method: /api/user/5 - will delete user with given id

## Getting started


### Prerequisites

What things you need to install the software and how to install them

- [Node.js](https://nodejs.org/en/)
- [This repository](https://github.com/Ebi2626/peopleApi/)

### Installing

A step by step series of examples that tell you how to get a development env running

- Install node.js
- Clone this repository
- Go to the folder of this app
- Run in terminal: npm install && node index
- Open your browser at: localhost:8080
- Enjoy simple Api

## Development

- You can edit documents structure in the views folder. There are written in express-handlebars view engine.
- You can edit styles in src/style. There was SASS(SCSS) used to style this app and you can use command: npm run sass to watch changes in style folder and transpiling them into css files in public/css with the same names
- You can edit api behaviour in the api/api.js and users/users.js
- You can look into fake-db in users/usersDb.json
- You can add new pages in index.js and create new views in views with handlebars extension

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript engine for backend
- [Express](https://expressjs.com/) - The web framework for Node.js
- [SASS](https://sass-lang.com/) - CSS Preprocessor with SCSS extension
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - view engine

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Author

**Edwin Harmata**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
