# Use an official Node.js image as the base image
FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Use an official Nginx image to serve the application
FROM nginx:1.23.3-alpine as production-stage

# Copy the built Angular app from the previous stage to the Nginx web server's root
COPY --from=build-stage /app/dist/ELECTRICITY-TARIFF-COMPARATOR /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
