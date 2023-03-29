# Animals - Mattia Giacchini

## Project structure

- `frontend/` folder: contains the code for the frontend part of the application
- `backend/` folder: contains the code for the backend part of the application
- `docker-compose.yml` file: provides the configuration for running the application in Docker

## Technology Stack

The technology stack utilized in this project includes the following:

- Frontend: Vue 2 with Jest and Cypress for testing
- Backend: Node.js
- Database: Local JSON file to simulate NoSQL Database
- Deployment: Docker for containerization

## Project run

### Manually

To run the project manually, please follow these steps:

1.  Navigate to the root of the project in a terminal
2.  Navigate to the `backend` folder with the command `cd backend` and run `yarn install` to install the necessary dependencies
3.  Run `node server.js` to run the server on the port 3000.
4.  In a separate terminal window, change the directory to the `frontend` with the command `cd frontend`and run `yarn install`
5.  Run the frontend application with the command `yarn serve`
6.  Now navigate to [http://localhost:8080](http://localhost:8080) and there you are!

### With Docker

To run the project using Docker, please follow these steps:

1.  Navigate to the root of the project in a terminal.
2.  Run the following command to build the frontend image: `docker build -t animals-frontend frontend/`
3.  Run the following command to build the backend image: `docker build -t animals-backend backend/`
4.  Run the following command to start the application: `docker-compose -f docker-compose.yml up`

This will start both the frontend and backend servers in separate Docker containers, using the configuration defined in the `docker-compose.yml` file.

Once the application is up and running, you can access it by opening a web browser and navigating to `http://localhost:8080`.

## Test Run

To run the unit test, use the following command in the `frontend` directory: `yarn test:unit`.

To run the E2E test, use the following command in the `frontend` directory: `yarn test:e2e`.

## Development

During development, I took the liberty of adding a few features to enhance the user experience without deviating from the requirements outlined in the problem description.

As an example, I added the capability to delete animals in addition to editing and adding new ones. To simplify animal research, I included a basic search bar in the animals list. Additionally, to enhance readability, I opted to display only key information in the animals list, with the details available in the animal's specific view.

To streamline the editing and addition of animals, I opted to automatically set the "lastUpdate" field of the animal using the current datetime at the time of the insertion or update.

## Functions

On the home page, I added a central card that allows users to navigate to the animal's list by clicking on it.

Additionally, there are several buttons in the header that permit users to navigate through the application at any time:

- The logo, which redirects to the home
- The Home button, which redirects to the home
- The Animals button, which redirects to the animals list

In the animals list, I displayed only essential details such as the name, type, breed, and gender of the animals. On the right side, I added a sidebar with controls for search and the button to create a new animal.

Clicking on an animal redirects the user to the animal's details page, where they can edit or delete the entry. When deleting an animal, a confirmation modal appears.

Both in the edit and add animals modals (which use the same endpoint), I set all fields as required.

To reduce API calls when creating, deleting, or editing an animal, I returned the result obtained from the previous API call after the interaction.
