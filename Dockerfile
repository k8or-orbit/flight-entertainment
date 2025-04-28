# Step 1: Build the React app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy dependencies first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Build the React app
RUN npm run build


# Step 2: Serve the built app using a lightweight web server
FROM nginx:alpine

# Copy built React app from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
