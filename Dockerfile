FROM node:12.13
WORKDIR /usr/src/app/front/
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD [ "npm", "start" ]


