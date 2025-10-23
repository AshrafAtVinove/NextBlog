# Use Node.js 20 LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and lock first (caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose internal container port
EXPOSE 3000

# Use NestJS watch mode
CMD ["npm", "run", "start:dev"]
