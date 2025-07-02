FROM node:lts-slim  

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json .   
COPY ./package-lock.json .

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

#expose the port the app runs on
# This is the port that the React app will run on in the container
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev-exposed"]