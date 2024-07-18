# Gunakan Node.js LTS sebagai base image
FROM node:14-alpine

# Set working directory di dalam container
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# Bundle app source
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Expose port 3000
EXPOSE 8000

# Menjalankan aplikasi
CMD ["npm", "start"]
