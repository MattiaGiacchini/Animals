const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Allow CORS, but just for development pourpose
var cors = require('cors')
app.use(cors())

// Example data
let animals = 
  [
    {
        "id": "b82e9d4ef4f4db3fca8e0e82f3d3c7b1",
        "name": "Max",
        "type": "Dog",
        "breed": "Labrador Retriever",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-12-12T14:30:25.678Z",
        "lastUpdate": "2022-12-12T14:30:25.678Z"
    },
    {
        "id": "c0bfe1cfc55ebf3a4e4eabeb74e4ee52",
        "name": "Snickers",
        "type": "Rabbit",
        "breed": "Mini Lop",
        "gender": "Male",
        "vaccinated": false,
        "lastVisit": "2022-11-10T09:15:40.234Z",
        "lastUpdate": "2022-11-10T09:15:40.234Z"
    },
    {
        "id": "63f8d3bc3b236a1e14c1807467e8cfaa",
        "name": "Tiger",
        "type": "Tiger",
        "breed": "Bengal Tiger",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2023-02-15T18:40:15.345Z",
        "lastUpdate": "2023-02-15T18:40:15.345Z"
    },
    {
        "id": "f312e19d1417380b497fa48dc2dd2c6f",
        "name": "Lola",
        "type": "Dog",
        "breed": "Poodle",
        "gender": "Female",
        "vaccinated": false,
        "lastVisit": "2022-10-20T16:05:50.456Z",
        "lastUpdate": "2022-10-20T16:05:50.456Z"
    },
    {
        "id": "641e4b4a3d63d4db0bbbf8f4c659ff2e",
        "name": "Midnight",
        "type": "Cat",
        "breed": "Siamese",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-11-28T08:50:35.567Z",
        "lastUpdate": "2022-11-28T08:50:35.567Z"
    },
    {
        "id": "0a31248c98b0450b56226c860e9d67b2",
        "name": "Snowball",
        "type": "Rabbit",
        "breed": "Angora",
        "gender": "Female",
        "vaccinated": true,
        "lastVisit": "2022-12-05T12:10:20.123Z",
        "lastUpdate": "2022-12-05T12:10:20.123Z"
    }, {
        "id": "1f37c2d9b9d8bca24f40d7c86e5b03e7",
        "name": "Charlie",
        "type": "Dog",
        "breed": "Labrador Retriever",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-11-15T13:50:25.345Z",
        "lastUpdate": "2022-11-15T13:50:25.345Z"
    },
    {
        "id": "fa4c4d9687d40653cdd4761e98a2c913",
        "name": "Cinnamon",
        "type": "Cat",
        "breed": "Siamese",
        "gender": "Female",
        "vaccinated": true,
        "lastVisit": "2022-12-20T16:05:15.678Z",
        "lastUpdate": "2022-12-20T16:05:15.678Z"
    },
    {
        "id": "ca8f7d81a038f1396a15dcdfc1f8cb06",
        "name": "Max",
        "type": "Dog",
        "breed": "German Shepherd",
        "gender": "Male",
        "vaccinated": false,
        "lastVisit": "2023-02-10T10:30:40.456Z",
        "lastUpdate": "2023-02-10T10:30:40.456Z"
    },
    {
        "id": "4f2c61d84e1b11cfb9f2e0e1f912f1f7",
        "name": "Molly",
        "type": "Cat",
        "breed": "British Shorthair",
        "gender": "Female",
        "vaccinated": true,
        "lastVisit": "2022-10-28T18:20:50.901Z",
        "lastUpdate": "2022-10-28T18:20:50.901Z"
    },
    {
        "id": "e8e0c0a15a72f1c0bb28d9ed1c12da6a",
        "name": "Harley",
        "type": "Dog",
        "breed": "Siberian Husky",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2023-01-05T09:15:30.234Z",
        "lastUpdate": "2023-01-05T09:15:30.234Z"
    },
    {
        "id": "2f3541b7f1a128d5a7a0efc13a810dfa",
        "name": "Sophie",
        "type": "Rabbit",
        "breed": "Holland Lop",
        "gender": "Female",
        "vaccinated": false,
        "lastVisit": "2022-09-20T08:45:15.678Z",
        "lastUpdate": "2022-09-20T08:45:15.678Z"
    },
    {
        "id": "63fc63b2fc987223a8fbb6629d88a63f",
        "name": "Max",
        "type": "Dog",
        "breed": "Labrador Retriever",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-09-02T08:30:15.678Z",
        "lastUpdate": "2022-09-02T08:30:15.678Z"
    },
    {
        "id": "a0922c4b4d4e7bb0ee3d19f3c3b2665d",
        "name": "Bella",
        "type": "Cat",
        "breed": "Siamese",
        "gender": "Female",
        "vaccinated": false,
        "lastVisit": "2022-10-20T14:55:45.234Z",
        "lastUpdate": "2022-10-20T14:55:45.234Z"
    },
    {
        "id": "8bc7c0dfbf3a88c3dc79877b80d1f85c",
        "name": "Hops",
        "type": "Rabbit",
        "breed": "Lop",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-11-10T11:40:10.456Z",
        "lastUpdate": "2022-11-10T11:40:10.456Z"
    },
    {
        "id": "e61837e1bda7bcab5f79021b5f5fa6a5",
        "name": "Ziggy",
        "type": "Dog",
        "breed": "French Bulldog",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-12-20T16:25:30.567Z",
        "lastUpdate": "2022-12-20T16:25:30.567Z"
    },
    {
        "id": "e207de73d7e62daa2a95753f1f19f192",
        "name": "Shadow",
        "type": "Cat",
        "breed": "British Shorthair",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2023-01-15T12:10:05.678Z",
        "lastUpdate": "2023-01-15T12:10:05.678Z"
    },
    {
        "id": "0b3eb08d8377cc8ec51b06d7ee77a74d",
        "name": "Oscar",
        "type": "Dog",
        "breed": "Poodle",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-11-28T09:15:20.234Z",
        "lastUpdate": "2022-11-28T09:15:20.234Z"
    },
    {
        "id": "a126432fcadf8a5b6ca7dbd0d30e4632",
        "name": "Buddy",
        "type": "Dog",
        "breed": "Golden Retriever",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2022-12-10T11:20:35.789Z",
        "lastUpdate": "2022-12-10T11:20:35.789Z"
    },
    {
        "id": "e1350f4dfe1aa9b78d34a58de7a8fae4",
        "name": "Oreo",
        "type": "Rabbit",
        "breed": "Dutch",
        "gender": "Female",
        "vaccinated": false,
        "lastVisit": "2022-11-05T09:45:20.345Z",
        "lastUpdate": "2022-11-05T09:45:20.345Z"
    },
    {
        "id": "f973d74183dce07452964a4fa22c4f4b",
        "name": "Simba",
        "type": "Lion",
        "breed": "African Lion",
        "gender": "Male",
        "vaccinated": true,
        "lastVisit": "2023-02-28T15:10:05.123Z",
        "lastUpdate": "2023-02-28T15:10:05.123Z"
    }

];

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
    // Add the new animal to the animals array
    animals.push(animal);
    // Return a response with the new animal object and a 201 status code
    res.status(201).json(animal);
});


app.put('/api/animals/:id', (req, res) => {
    // Get the animal ID from the request parameters
    const animalId = req.params.id;
    // Get the updated animal data from the request body
    const updatedAnimal = req.body;
    // Find the index of the animal with the given ID
    const index = animals.findIndex(animal => animal.id === animalId);
    // If the animal was found, update its data and return a response with the updated animal object
    if (index !== -1) {
      animals[index] = {
        ...animals[index],
        ...updatedAnimal,
        id: animalId // Make sure the ID stays the same
      };
      res.json(animals[index]);
    } else {
      // If the animal was not found, return a response with a 404 status code
      res.sendStatus(404);
    }
  });

// Route to delete an animal
app.delete('/api/animals/:id', (req, res) => {
    // Get the animal ID from the request parameters
    const id = req.params.id;
    // Find the index of the animal with the given ID
    const index = animals.findIndex(animal => animal.id === id);
    // If the animal was found, remove it from the array and return a response with a 204 status code
    if (index !== -1) {
      animals.splice(index, 1);
      res.sendStatus(204);
    } else {
      // If the animal was not found, return a response with a 404 status code
      res.sendStatus(404);
    }
  });
  


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
