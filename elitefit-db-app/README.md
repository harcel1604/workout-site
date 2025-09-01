# EliteFit Database Application

## Overview
EliteFit is a premium workout tracker application that allows users to manage their workout logs and user accounts. This project consists of a backend server built with Node.js and Express, and a frontend application that interacts with the backend to provide a seamless user experience.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
The backend is responsible for handling user authentication and managing workout data. It is built using Node.js and Express, and it connects to a database to store user and workout information.

- **src/server.js**: Entry point of the backend application. Sets up the Express server, connects to the database, and configures middleware and routes.
- **src/models/user.js**: Defines the User model using a database ORM (like Mongoose for MongoDB). Includes schema definitions for user properties such as username, email, and password.
- **src/models/workout.js**: Defines the Workout model. Includes schema definitions for workout properties such as exercise name, sets, reps, duration, and a reference to the user who created the workout.
- **src/routes/auth.js**: Defines the authentication routes for user login and signup. Exports functions that handle requests for user authentication.
- **src/routes/workout.js**: Defines the routes for managing workouts. Exports functions that handle requests for creating, reading, updating, and deleting workouts.
- **src/controllers/authController.js**: Exports functions for handling authentication logic, including signup and login. Interacts with the User model to create new users and validate login credentials.
- **src/controllers/workoutController.js**: Exports functions for handling workout-related logic, including adding new workouts and retrieving existing workouts. Interacts with the Workout model to manage workout data.
- **package.json**: Configuration file for npm. Lists the dependencies required for the backend, such as Express, Mongoose, and any other necessary packages.

### Frontend
The frontend provides the user interface for the application, allowing users to interact with the backend services.

- **index.html**: Main HTML file for the frontend application. Serves as the entry point for the user interface.
- **styles.css**: Contains the styles for the frontend application, defining the layout and appearance of the user interface.
- **app.js**: Contains the JavaScript for the frontend application. Handles user interactions, makes API calls to the backend, and updates the UI based on responses.

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   node src/server.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Open `index.html` in a web browser to access the application.

## API Usage
The backend provides RESTful API endpoints for user authentication and workout management. Refer to the individual route files for detailed information on available endpoints and their usage.

## License
This project is licensed under the MIT License.