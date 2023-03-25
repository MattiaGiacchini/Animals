const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 3000;

// Allow CORS, but just for development pourpose
var cors = require('cors')
app.use(cors())

// Route to get all animals
app.get('/api/animals', (req, res) => {
  // Send the array of animals as a JSON response
  res.json(animals); 
});


// Route to get a specific animal by ID
app.get('/api/animals/:id', (req, res) => {
  // Get the id parameter from the request
  const id = req.params.id;
  // Find the animal object with the matching id
  const animal = animals.find(animal => animal.id === id);
  // If no matching animal is found, return a 404 error
  if (!animal) {
    res.status(404).json({ message: 'Animal not found' });
  } else {
    // Otherwise, return the animal object
    res.json(animal);
  }
});

// Route to add a new animal
app.post('/api/animals', (req, res) => {
  // Get the new animal data from the request body
  const animal = req.body;
  // Generate a new uuid for the animal
  animal.id = uuidv4();
  // Add the new animal
  animals.push(animal);
  // Return a response with the new animal object and a 201 status code
  res.status(201).json(animal);
});


// Route to update an existing animal
app.put('/api/animals/:id', (req, res) => {
  // Get the id parameter from the request URL
  const id = req.params.id;
  // Find the index of the animal with the matching id
  const index = animals.findIndex(animal => animal.id === id);
  // If the animal is not found, return a 404 error
  if (index === -1) {
    res.status(404).json({ message: 'Animal not found' });
  } else {
    // Update the animal with the new data from the request body
    animals[index] = req.body;
    // Set the animal's id to the original id parameter
    animals[index].id = id;
    // Return the updated animal object
    res.json(animals[index]);
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
