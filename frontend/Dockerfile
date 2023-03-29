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

# Build the frontend
RUN yarn build

# Expose the frontend port (e.g. 8080)
EXPOSE 8080 3000

# Start the backend server
RUN ["node", "server.js"]

# Start the frontend server
CMD ["yarn", "serve"]
