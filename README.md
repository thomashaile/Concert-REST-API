# Concert-REST-API
simple rest api with a single endpoint that lists concerts. A concert should have at least an id, an artist, a venue and a date & time.

## **Installation**
### **0 | Requirements**

This project can run on virtually any system where Node.js is supported. This means it runs on Linux, macOS, Windows as well as container solutions such as Docker and Heroku.
#### **Versions**
- MongoDB 4.4 
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

### **API endpoints**

---**URL** https://multicube-backend.herokuapp.com/



#### **Add a concert**

**`POST /api/concerts/new`**

##### **Request**

A json object for concert to register with **`title`**, **`artist`**, **`venue`**, **`concert_date`**
```
{
  "title": "concert name/title",
  "artist": "artist name",
  "venue": "adress of the concert",
  "concert_date": "date of concert"
}
```
#### **Update an concert**

**`PUT /api/concerts/:id`**

##### **Request**

A json object for the concert to update with any of `title`, `artist`, `venue`, `concert_date`.

```
{
  "title": "new concert name/title",
  "artist": "new artist name",
  "venue": "new adress of the concert",
  "concert_date": "updated date of concert"
}
```
#### **Delete an concert**

**`DELETE /api/concerts/:id`**

##### **Response `200`**

A json object for the deleted account with confirmation `msg`.

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
  "id": "5f9ed5ce47c42738d03d178d",
 "title": "concert name/title",
  "artist": "Artist name",
  "venue": "adress of the concert",
  "concert_date": "2021-09-30T01:11:22.932+00:00",
  "created_at":"2021-09-30T01:11:22.932+00:00
}
```

#### Get all concerts

**`GET /api/concerts`**

##### **Response `200`**

A json object with  an array of `users`.

```
{
  "concerts": [
    {
      "id": "5f9ed5ce47c42738d03d178d",
      "title": "conceert title",
      "artist": "artist name",
      "venue": "adress of the concert",
      "concert_date": "2021-09-30T01:11:22.932+00:00",
      "created_at":"2021-09-30T01:11:22.932+00:00
    },
    {
      "id": "5f9ed5ce47c42738d03d178d",
      "title": "conceert title",
      "artist": "artist name",
      "venue": "adress of the concert",
      "concert_date": "2021-09-30T01:11:22.932+00:00",
      "created_at":"2021-09-30T01:11:22.932+00:00
    }, {
      "id": "5f9ed5ce47c42738d03d178d",
      "title": "conceert title",
      "artist": "artist name",
      "venue": "adress of the concert",
      "concert_date": "2021-09-30T01:11:22.932+00:00",
      "created_at":"2021-09-30T01:11:22.932+00:00
    },
  ]
}
```
