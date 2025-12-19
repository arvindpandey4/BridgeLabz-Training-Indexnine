# BridgeLabz Training - Express.js

This branch contains a basic setup of a generic Node.js application using the Express.js framework.

## Project Structure
The application follows a standard modular structure in the `src` directory:

- **src/server.js**: Entry point that starts the server on port 3000.
- **src/app.js**: Initializes the Express application, configures middleware (JSON parsing), and sets up routes and error handling.
- **src/controllers/controller.js**: Logic for route handlers.
- **src/routes/index.js**: Definition of API routes.
- **src/middlewares/error.middleware.js**: Global error handling middleware.

## API Endpoints

### GET /
Returns a simple greeting message.
- **Response**: `hello from the server`

### POST /data
Receives JSON data and echoes it back.
- **Body**: JSON object
- **Response**: JSON object containing the received data.

## Status
Done
