# NubCeo Backend Challenge

This project is a backend challenge for ApplicaCorp, focusing on the development of a RESTful API that manages posts, users and comments. The API is built using NestJS, a progressive Node.js framework.

## Requirements

- Node.js

## Installation & Execution

There are currently two ways to install and run the application, running it locally or with docker.

### Docker

1. Clone the repository:

   ```bash
     git clone https://github.com/AlejandroGCorzo/applicacorp-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
     cd applicacorp-challenge
   ```

3. Configure the environment variables:

   - Create an .env file in the root of the project.
   - Add the following environment variables:

   ```bash
     POSTS_URL = https://jsonplaceholder.typicode.com/posts
     USERS_URL = https://jsonplaceholder.typicode.com/users
     COMMENTS_URL = https://jsonplaceholder.typicode.com/posts
   ```

4. **Build the Docker containers**:

   In your terminal, run the following command to build the Docker containers:

   ```
   docker-compose build
   ```

5. **Run the Docker containers**:

   After building the containers, start them with:

   ```
   docker-compose up --build
   ```

6. **Access the application**:

   - Once the containers are running, you can access the application at `http://localhost:3000`.

7. **Stop the containers**:

   - To stop the containers, press `Ctrl + C` in the terminal where the containers are running, or run:

   ```
   docker-compose down
   ```

### Locally

1. Clone the repository:

   ```bash
     git clone https://github.com/AlejandroGCorzo/applicacorp-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
     cd applicacorp-challenge
   ```

3. Install the dependencies:
   ```bash
     npm install
   ```
4. Configure the environment variables:

   - Create an .env file in the root of the project.
   - Add the following environment variables:

   ```bash
     POSTS_URL = https://jsonplaceholder.typicode.com/posts
     USERS_URL = https://jsonplaceholder.typicode.com/users
     COMMENTS_URL = https://jsonplaceholder.typicode.com/posts
   ```

5. Start the application:

   ```bash
    npm run start
   ```

   - The application will run at http://localhost:3000.

## Endpoints

The API provides the following endpoints:

- GET /posts

```bash
Query Params:
  ?start=number
  &size=number
```

## Author

Alejandro Gabriel Corzo

- Email adress: alejandro.g.corzo@gmail.com
- Linkedin: https://www.linkedin.com/in/alejandro-gabriel-corzo/
