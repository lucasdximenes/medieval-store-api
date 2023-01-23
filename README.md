# Medieval Store API

---

## Description 📜

This is a medieval store API where you can create and read unique items for sale, create and read orders, register and login users.

Built with:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Joi](https://joi.dev/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Made with ❤️ by [Lucas Ximenes](https://www.linkedin.com/in/lucasdximenes)

---

## Features 📋

- [x] Create and read unique items
- [x] Create and read orders
- [x] Register and login users
- [x] Authentication with JWT

---

## Installation 🛠

<details>
<summary>Installation with Docker 🐳</summary>

1. Clone the repository

```bash
git clone git@github.com:lucasdximenes/medieval-store-api.git
```

2. Enter the project folder

```bash
cd medieval-store-api
```

3. You need to have Docker and Docker Compose installed on your machine. If you don't have it, you can download it [here](https://docs.docker.com/get-docker/) and [here](https://docs.docker.com/compose/install/).

4. Run the following command to start the containers

```bash
docker-compose up -d
```

5. Connect to container

```bash
docker exec -it trybesmith
```

6. Install dependencies and initialize API

> In terminal of container

```bash
npm install && npm start
```

7. The API will be running on port 3000. You can access it by going to [http://localhost:3000](http://localhost:3000)

</details>

<details>
<summary>Installation without Docker 🌊</summary>

1. Clone the repository

```bash
git clone git@github.com:lucasdximenes/medieval-store-api.git
```

2. Enter the project folder

```bash
cd medieval-store-api
```

3. Install the dependencies

```bash
npm install
```

4. You need to have MySQL installed on your machine. If you don't have it, you can download it [here](https://dev.mysql.com/downloads/).

5. Create an `.env` file in the root of the project and add the following environment variables

```.env
MYSQL_USER=YOUR_MYSQL_USER
MYSQL_PASSWORD=YOUR_MYSQL_PASSWORD
MYSQL_HOST=YOUR_MYSQL_HOST
JWT_SECRET=YOUR_JWT_SECRET
```

6. Run the migration script in a database manager like [DBeaver](https://dbeaver.io/)

[migration](./migration.sql)

7. Initialize the API

```bash
npm start
```

8. The API will be running on port 3000. You can access it by going to [http://localhost:3000](http://localhost:3000)

</details>

---

## Documentation 📚

### Login route

#### POST:

- /login: - Login user

  - Request:

    - ```json
      {
        "username": "username",
        "password": "password"
      }
      ```

  - Response:
    - ```json
      {
        "token": "token"
      }
      ```

---

### Order routes

#### GET

- /orders - Get all orders
  - Response:
    - ```json
      [
        {
          "id": 1,
          "userId": 1,
          "productsIds": [1]
        }
      ]
      ```

#### POST

- /orders - Create an order

  - Request:

    - Headers:
      - `Authorization: Token`
    - Body:
      - ```json
        {
          "userId": 1,
          "productsIds": [1]
        }
        ```

  - Response:
    - Body:
      - ```json
        {
          "userId": 1,
          "productsIds": [1]
        }
        ```

---

### Product routes

#### GET

- /products - get all products
  - Response:
    - ```json
      [
        {
          "id": 1,
          "name": "Espada curta",
          "amount": "10 peças de ouro",
          "orderId": 4
        }
      ]
      ```

#### POST

- /products - Create an product

  - Request:

    - Body:
      - ```json
        {
          "name": "product name",
          "amount": "product value"
        }
        ```

  - Response:

    - Body:

      - ```json
        {
          "id": 10,
          "name": "product name",
          "amount": "product value"
        }
        ```

---

### User routes

#### POST

- /users - Register an user

  - Request:

    - Body:
      - ```json
        {
          "username": "username",
          "vocation": "vocation",
          "level": 999,
          "password": "password"
        }
        ```

  - Response:
    - Body:
      - ```json
        {
          "token": "token"
        }
        ```

---
