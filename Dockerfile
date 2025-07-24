# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port (Vite runs on 5173)
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
