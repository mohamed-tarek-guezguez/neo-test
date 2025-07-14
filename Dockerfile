# -----------------------------
# Builder Stage
# -----------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the application (e.g., React, Vue, etc.)
RUN npm run build


# -----------------------------
# Production Stage
# -----------------------------
FROM nginx:1.27.1-alpine

# Copy built app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default Nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
