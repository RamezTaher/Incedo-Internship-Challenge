# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Getting the port variable from env file

ENV PORT=5000

# Expose the port your app is running on
EXPOSE 5000

# Define the command to run your app
CMD ["npm", "run", "prod"]
