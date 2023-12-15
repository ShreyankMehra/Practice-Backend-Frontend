
const express = require('express');
const app = express();

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route handler for handling form submission
app.post('/submit-form', (req, res) => {
  // req.body contains the parsed URL-encoded data from the form submission
  const formData = req.body;

  // Process the form data
  console.log(formData);

  // Send a response
  res.send('Form data received successfully!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


