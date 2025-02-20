# Use official Node.js runtime as a base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Production Image
FROM node:20-alpine

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app ./

# Expose port 3000
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "start"]