// Bring in dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Create an express app
const app = express();

// Setup logger middleware
app.use(morgan('tiny'));
// Setup cors middleware
app.use(cors());

// When a GET request is received to the path /
app.get('/', (req, res) => {
  // Send a JSON response
  res.json({
    message: 'Hello World! 🌈'
  });
});

/////New GET request
app.get('/animals', (req, res) => {
  res.json([{
    name: 'Tuna',
    color: 'brown',
    image: 'https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/09/image3-7-600x314.jpg'
  }, {
    name: 'Marnie',
    color: 'white',
    image: 'https://www.mypetsies.com/media/catalog/category/thumb/Marnie-1000x1000_1-915.jpg'
  }, {
    name: 'Pearl',
    color: 'white',
    image: 'https://i.pinimg.com/736x/82/ec/da/82ecdacbb745e65267e0da905f819651.jpg'
  }, {
    name: 'Asterix-Astur',
    color: 'brown',
    image: 'https://ewedit.files.wordpress.com/2016/05/the-mountain.jpg?w=612'
  }, {
    name: 'Gizmo',
    color: 'fawn',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/c9/69/d8/c969d815546449011bf25d80d0f242a6.jpg'
  }])
});
//////



// Not Found (404) handler
app.use((req, res, next) => {
  // Set the response status code
  res.status(404);
  const error = new Error('Not Found. 🔍');
  // Forward the error to the error handler
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: error.stack
  });
});

// Set the PORT to listen on
const port = process.env.PORT || 3000;
// Listen on the port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
