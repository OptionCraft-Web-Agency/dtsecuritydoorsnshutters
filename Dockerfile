# Use a secure, specific Node version with fewer known CVEs
FROM node:18.18.2-alpine3.18

# Set the working directory
WORKDIR /usr/app

# Copy all files
COPY . .

# Install only production dependencies
RUN npm ci --omit=dev

# Build the Next.js project
RUN npm run build

# Start the app
CMD ["npm", "start"]