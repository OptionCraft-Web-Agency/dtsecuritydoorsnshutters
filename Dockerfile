#declare base image
FROM node:18.11.0-alpine

#create and change to the app directory
WORKDIR /usr/app

#copy app dependency manifest to container image
COPY . .

RUN npm ci --only=production

RUN npm run build

CMD [ "npm","start" ]