const express = require('express');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
