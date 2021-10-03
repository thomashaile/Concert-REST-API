# Concert-REST-API
simple rest api with a single endpoint that lists concerts. A concert should have at least an id, an artist, a venue and a date & time.

## **Installation**
### **0 | Requirements**

This project can run on virtually any system where Node.js is supported. This means it runs on Linux, macOS, Windows as well as container solutions such as Docker and Heroku.
#### **Versions**
- MongoDB 
- NodeJS 12.8 

### **1 | Create and/or configure environement variables**
- Create a .env file at the root of the backend folder
- Replace all variables noted with $ below, and save it to the .env file
```
PORT=$port_number
DB_CNN=mongodb://localhost:27017/$db_name
```
### **2 | Installation of packages with npm**

- `npm i`

### **3 | Run the server**
- To run type: `npm run start or node index.js`

## URL and Endpoints [Live](https://atmireconcertapi.herokuapp.com/api/concerts/)

  **API Endpoints** 
- **GET   `/api/concerts`**     => to get all the concerts
- **GET   `/api/concerts/:id`**   => get one concert by id
- **POST  `/api/concerts/new`**   => to add/create new concert
- **PUT   `/api/concerts/:id`**  => to update concert
- **DELETE  `/api/concerts/:id`**   => to delete specfic concert

#### **Add a concert**

**`POST /api/concerts/new`**

##### **Request**

A json object for concert to register with **`title`**, **`artist`**, **`venue`**, **`concert_date`**
```
{
    "title": "2022 Conceert",
    "artist": "Belgie artists",
    "venue": "Leuven",
    "date": "2021-12-30T01:11:22.932+00:00"
}
```
#### **Update an concert**

**`PUT /api/concerts/:id`**

##### **Request**

A json object for the concert to update with any of `title`, `artist`, `venue`, `concert_date`.

```
{
    "title": "october Conceert",
    "artist": "developers",
    "venue": "Leuven",
    "date": "2021-12-30T01:11:22.932+00:00"
}
```
#### **Delete an concert**

**`DELETE /api/concerts/:id`**

##### **Response `200`**

A json object for the deleted concert with confirmation `msg`.

```
{
  "msg": "Concert deleted successfully"
}
```
#### Get one concert by id.
**`GET /api/concerts/:id`**
##### **Response `200`**
A json object with  `id`, `title`, `artist`, `venue`, `concert_date` and `created_at`.

```
{
    "status": "Ok",
    "concert": {
        "id": 2,
        "title": "BelgiumExpo",
        "artist": "All Belgian famious artists",
        "venue": "1200 Brussel",
        "concert_date": "2021-09-30T01:11:22.932+00:00"
    }
}
```

#### Get all concerts

**`GET /api/concerts`**

##### **Response `200`**

A json object with  an array of `concerts`.

```
{
  "concerts": [
    {
        "id": 1,
        "title": "Stronger together",
        "artist": "musse j",
        "venue": "123456 Leuven",
        "concert_date": "2021-09-30T01:11:22.932+00:00"
    },
    {
        "id": 2,
        "title": "BelgiumExpo",
        "artist": "All Belgian famious artists",
        "venue": "1200 Brussel",
        "concert_date": "2021-09-30T01:11:22.932+00:00"
    },
    {
        "id": 3,
        "title": "Willy Concert",
        "artist": "willy sommers",
        "venue": "1234 Lennik",
        "concert_date": "2021-09-30T01:11:22.932+00:00"
    },
    {
        "id": 4,
        "title": "2022 Conceert",
        "artist": "A-Z",
        "venue": "oost Leuven",
        "concert_date": "2021-12-30T01:11:22.932+00:00"
    }
]
}
```
