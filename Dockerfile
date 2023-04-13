FROM node:14.21.3

WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . /app

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]