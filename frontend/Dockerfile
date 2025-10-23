# Use Node.js 20 LTS
FROM node:20

WORKDIR /app

# Copy package.json and lock first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Next.js dev mode
CMD ["npm", "run", "dev"]
