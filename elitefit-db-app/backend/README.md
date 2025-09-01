# EliteFit Backend Application

## Overview
The EliteFit backend application is designed to manage user logins and workout logs. It provides a RESTful API for user authentication and workout management, utilizing Express.js and a database (MongoDB with Mongoose).

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd elitefit-db-app/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the `backend` directory and add your MongoDB connection string:
  ```
  MONGODB_URI=<your_mongodb_connection_string>
  PORT=5000
  ```

### Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

## API Endpoints

### Authentication
- **POST** `/api/auth/signup`: Create a new user.
- **POST** `/api/auth/login`: Authenticate a user and return a token.

### Workouts
- **GET** `/api/workouts`: Retrieve all workouts for the authenticated user.
- **POST** `/api/workouts`: Add a new workout for the authenticated user.
- **PUT** `/api/workouts/:id`: Update a specific workout.
- **DELETE** `/api/workouts/:id`: Delete a specific workout.

## Folder Structure
- `src/`: Contains the source code for the backend application.
  - `models/`: Contains Mongoose models for User and Workout.
  - `routes/`: Contains route definitions for authentication and workouts.
  - `controllers/`: Contains logic for handling requests and interacting with models.
- `package.json`: Lists dependencies and scripts for the backend application.

## License
This project is licensed under the MIT License.