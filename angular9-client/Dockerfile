# Stage 1
FROM node:14.0.0-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration=cloud

# Stage 2
FROM nginx:1.17.10-alpine

COPY --from=node /usr/src/app/dist/angular9-client /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf