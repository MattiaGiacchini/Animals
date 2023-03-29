# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the backend port
EXPOSE $PORT

# Start the backend server
CMD ["node", "server.js"]
