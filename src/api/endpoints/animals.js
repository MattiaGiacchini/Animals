const baseUrl = "http://localhost:3000"

export function getAllAnimals() {
    return fetch(`${baseUrl}/api/animals`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  export function getAnimalById(animalId) {
    return fetch(`${baseUrl}/api/animals/${animalId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  export function createAnimal(animalData) {
    return fetch(`${baseUrl}/api/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalData)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  export function updateAnimal(animalId, animalData) {
    return fetch(`${baseUrl}/api/animals/${animalId}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalData)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  export function deleteAnimal(animalId) {
    return fetch(`${baseUrl}/api/animals/${animalId}`, {
      method: "DELETE"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  