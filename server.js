require('dotenv').config(); // обязательно первой строчкой
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const cakeRoutes = require('./routes/cakes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB подключение
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('Mongo error:', err));

// API routes
app.use('/api', cakeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
