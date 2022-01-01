FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /portfolio
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "npm", "start" ]