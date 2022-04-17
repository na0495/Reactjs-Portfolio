FROM node:15.12.0 AS development

ENV NODE_ENV development
# Add a work directory
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "preview" ]