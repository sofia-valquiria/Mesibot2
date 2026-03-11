FROM node:lts-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application files
COPY . .

# Run the bot
CMD ["npm", "start"]