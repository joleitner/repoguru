FROM node:21-alpine AS development
ENV NODE_ENV=development

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "run", "dev"]


