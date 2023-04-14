FROM node:14.21.3

WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_URL

ARG INTERNAL_API_URL
ENV INTERNAL_API_URL $INTERNAL_API_URL

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]