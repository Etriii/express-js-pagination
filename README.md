# My Node.js Project with Pagination

This is a Node.js application using Express and Sequelize to connect to a PostgreSQL database. It includes a paginated API endpoint to retrieve data from the database.

## Features

- Express.js for routing and API handling.
- Sequelize ORM for PostgreSQL.
- Pagination support for fetching data in pages.
- Environment variables for database connection.

## Prerequisites

- Node.js >= v14
- PostgreSQL >= v12
- npm (Node Package Manager)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/your-username/my-node-project.git
cd my-node-project
```
### 2. Install Dependencies
Run the following command to install all necessary dependencies listed in package.json:
```bash
npm install
```


### 2. Install Dependencies
Run the following command to install all necessary dependencies listed in package.json:
```bash

```


### 3. Create the .env File
Create a .env file in the root directory of the project and configure your PostgreSQL connection details.
```bash
DB_URL=postgres://username:password@localhost:5432/mydatabase
```
Make sure to replace the placeholder values (username, password, localhost, 5432, and mydatabase) with your actual PostgreSQL credentials.

### 4. Set Up PostgreSQL Database
Ensure you have PostgreSQL running on your machine or use a remote PostgreSQL server. Create a database for your app (if it doesn’t already exist):
```bash

```

### 5. Run the Application
Once the .env file is configured and dependencies are installed, you can start the server by running:
```bash
node app.js
```
Your server will start and be accessible at http://localhost:3000.

### 6. Access the Paginated API
You can access the paginated data by visiting the following endpoint:
```bash
GET http://localhost:3000/api/v1/paginated-data?page=1&perPage=10
```
- page: The page number you want to retrieve (default is 1).
- perPage: The number of items per page (default is 10).

* Example response
```bash
{
  "status": "success",
  "currentPage": 1,
  "perPage": 10,
  "totalEntries": 50,
  "totalPages": 5,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description of item 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "Description of item 2"
    }
    // More items...
  ]
}
```

### 7. Database configuration
Database Configuration
- The app uses Sequelize to interact with the PostgreSQL database. The db.js file contains the database connection logic, and the models are defined in the models/ folder.


### 8. Git Ignore
The .env file is excluded from version control by adding it to .gitignore. Make sure not to commit sensitive information such as database credentials.
Example .gitignore:
```bash
node_modules/
.env
```

