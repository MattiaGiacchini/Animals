const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(bodyParser.json());

// Allow CORS, but just for development pourpose
var cors = require("cors");
app.use(cors());

// Route to get all animals
app.get("/api/animals", (req, res) => {
  // Read the contents of the animals.json file
  fs.readFile("./animals.json", "utf8", (err, data) => {
    if (err) {
      // If an error occurred while reading the file, send an error response
      res.status(500).json({ error: "Failed to read animals data" });
    } else {
      // Parse the JSON data and send it as a response
      const animals = JSON.parse(data);
      res.json(animals.animals);
    }
  });
});

// Route to get a specific animal by ID
app.get("/api/animals/:id", (req, res) => {
  // Get the id parameter from the request
  const id = req.params.id;

  // Read the contents of the animals.json file
  fs.readFile("./animals.json", "utf8", (err, data) => {
    if (err) {
      // If an error occurred while reading the file, send an error response
      res.status(500).json({ error: "Failed to read animals data" });
    } else {
      // Parse the JSON data and find the animal object with the matching id
      const animals = JSON.parse(data);
      const animal = animals.animals.find((animal) => animal.id === id);

      // If no matching animal is found, return a 404 error
      if (!animal) {
        res.status(404).json({ message: "Animal not found" });
      } else {
        // Otherwise, return the animal object
        res.json(animal);
      }
    }
  });
});

// Route to add a new animal
app.post("/api/animals", (req, res) => {
  // Read the contents of the animals.json file
  fs.readFile("./animals.json", "utf8", (err, data) => {
    if (err) {
      // If an error occurred while reading the file, send an error response
      res.status(500).json({ error: "Failed to read animals data" });
    } else {
      // Parse the JSON data and add the new animal to the animals array
      const animals = JSON.parse(data);
      const animal = req.body;
      // Generate a new uuid for the animal
      animal.id = uuidv4();
      animals.animals.push(animal);
      // Write the updated animals array back to the animals.json file
      fs.writeFile("./animals.json", JSON.stringify(animals), (err) => {
        if (err) {
          // If an error occurred while writing the file, send an error response
          res.status(500).json({ error: "Failed to write animals data" });
        } else {
          // Return a response with the full animals list and a 201 status code
          res.status(201).json(animals.animals);
        }
      });
    }
  });
});

// Route to update an animal by ID
app.put("/api/animals/:id", (req, res) => {
  // Get the animal ID from the request parameters
  const animalId = req.params.id;
  // Get the updated animal data from the request body
  const updatedAnimal = req.body;

  // Read the contents of the animals.json file
  fs.readFile("./animals.json", "utf8", (err, data) => {
    if (err) {
      // If an error occurred while reading the file, send an error response
      res.status(500).json({ error: "Failed to read animals data" });
    } else {
      // Parse the JSON data and find the index of the animal with the given ID
      const animals = JSON.parse(data);
      const index = animals.animals.findIndex(
        (animal) => animal.id === animalId
      );

      // If the animal was found, update its data and write the updated data back to the file
      if (index !== -1) {
        animals.animals[index] = {
          ...animals.animals[index],
          ...updatedAnimal,
          id: animalId, // Make sure the ID stays the same
        };
        // Write the updated animals array back to the animals.json file
        fs.writeFile("./animals.json", JSON.stringify(animals), (err) => {
          if (err) {
            // If an error occurred while writing the file, send an error response
            res.status(500).json({ error: "Failed to write animals data" });
          } else {
            // Return a response with a 204 status code
            res.json(animals.animals[index]);
          }
        });
      } else {
        // If the animal was not found, return a response with a 404 status code
        res.sendStatus(404);
      }
    }
  });
});

// app.put("/api/animals/:id", (req, res) => {
//   // Get the animal ID from the request parameters
//   const animalId = req.params.id;
//   // Get the updated animal data from the request body
//   const updatedAnimal = req.body;
//   // Find the index of the animal with the given ID
//   const index = animals.findIndex((animal) => animal.id === animalId);
//   // If the animal was found, update its data and return a response with the updated animal object
//   if (index !== -1) {
//     animals[index] = {
//       ...animals[index],
//       ...updatedAnimal,
//       id: animalId, // Make sure the ID stays the same
//     };
//     res.json(animals[index]);
//   } else {
//     // If the animal was not found, return a response with a 404 status code
//     res.sendStatus(404);
//   }
// });

// Route to delete an animal
app.delete("/api/animals/:id", (req, res) => {
  // Read the contents of the animals.json file
  fs.readFile("./animals.json", "utf8", (err, data) => {
    if (err) {
      // If an error occurred while reading the file, send an error response
      res.status(500).json({ error: "Failed to read animals data" });
    } else {
      // Parse the JSON data and find the index of the animal with the matching id
      const animals = JSON.parse(data);
      const id = req.params.id;
      const index = animals.animals.findIndex((animal) => animal.id === id);

      // If the animal was found, remove it from the array and write the updated array back to the file
      if (index !== -1) {
        animals.animals.splice(index, 1);
        fs.writeFile("./animals.json", JSON.stringify(animals), (err) => {
          if (err) {
            // If an error occurred while writing the file, send an error response
            res.status(500).json({ error: "Failed to write animals data" });
          } else {
            // Return a response with a 204 status code
            res.sendStatus(204);
          }
        });
      } else {
        // If the animal was not found, return a response with a 404 status code
        res.sendStatus(404);
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
