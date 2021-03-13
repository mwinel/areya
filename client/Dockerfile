# Dockerfile
# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /areya/src
WORKDIR /areya/src

# copy source files
COPY . /areya/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
