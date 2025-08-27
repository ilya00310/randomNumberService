FROM node

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["make", "start_randomNumberService"]