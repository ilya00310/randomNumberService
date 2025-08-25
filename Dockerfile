FROM node

WORKDIR /randomNumberService

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8081

CMD ["make", "start_randomNumberService"]