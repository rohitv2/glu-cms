# pull official base image
FROM node:12.16.2-alpine

# set working directory
WORKDIR /glufrontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /glufrontend/node_modules/.bin:$PATH

# get application config file
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN npm rebuild node-sass
EXPOSE 4000

# start app
CMD ["npm", "start"]

