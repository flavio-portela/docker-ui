# Define our base image
FROM node:8.10

# Set the working directory
WORKDIR /code

# Install the dependecies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy our code into the image
COPY . .

# Expose the ports
EXPOSE 3000

# Start the app
CMD npm start