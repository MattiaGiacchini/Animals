export function getAllAnimals() {
    return fetch("/api/animals")
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
  
  export function getAnimalById(id) {
    return fetch(`/api/animals/${id}`)
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
  