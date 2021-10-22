# StockBit

this repo been separated into 4 folder which contain:

1. folder 1-simple-database-querying

this folder contains the solution from problem no 1.
format file: sql

output:

```
1|Ali|Budi
2|Budi|NULL
3|Cecep|Ali

```

2. folder 2-express-js

this folder contains the solution form problem no 2.

this code didn't deploy to any URL (CC Problem).

how to run the code:

1. npm i
2. setup your username and password on config.json
3. sequelize db:create
4. sequelize db:migrate
5. nodemon app.js

how to test the code:

1. npm run test

## RESTful endpoints

### GET /search

> GET all of movies data

_URL_

```
http://localhost:3000/search/
```

_Request Header_

```
not needed
```

_Request Body_

```
{
    title: "Superman"
}
```

_Response (200)_

```
{
    "message": [
        {
            "id": 1,
            "Title": "Naruto: Shippûden",
            "Year": "2007–2017",
            "imdbID": "tt0988824",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg",
            "Keyword": "Naruto",
            "createdAt": "2021-10-21T13:36:58.000Z",
            "updatedAt": "2021-10-21T13:36:58.000Z"
        },
        ....
    ]
}

```

### GET /detail

> GET all of movies data

_URL_

```
http://localhost:3000/detail/
```

_Request Header_

```
not needed
```

_Request Body_

```
{
    imdbID: "tt0988824"
}
```

_Response (200)_

```
{
    "message": {
        "id": 1,
        "Title": "Naruto: Shippûden",
        "Year": "2007–2017",
        "imdbID": "tt0988824",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg",
        "Keyword": "Naruto",
        "createdAt": "2021-10-21T13:36:58.000Z",
        "updatedAt": "2021-10-21T13:36:58.000Z"
    }
}
```

3. folder 3-refractor-code

this folder contains the solution from problem no 3.
format file: js

How to run:

1. node refractor.js
   result:

```
depend on input
```

4.  folder 4-logic-test
    this folder contains the solution from problem no 4.
    format file: js
