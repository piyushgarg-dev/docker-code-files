# Base Image
FROM node:20.17.0-alpine3.19

WORKDIR /home/app/

COPY package*.json .
RUN npm install

# Copying the source code to docker image
COPY index.js index.js

COPY Dockerfile Dockerfile

ENV PORT=8000
EXPOSE 8000

CMD [ "npm", "start" ]
