FROM node:21-alpine AS base

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .
RUN npm install
# Copy app source code
COPY . .


####   build    ####
FROM base as build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /app ./
RUN npm run build

####   production    ####
FROM node:21-alpine as production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
RUN npm install next

CMD ["npm", "run", "start"]
