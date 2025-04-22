FROM node:lts-alpine3.20 AS build
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm ci
RUN npm install -g @angular/cli
 

COPY . .
 
RUN npm run build --configuration=production
 
FROM nginx:1.26-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/weather-ui/browser /usr/share/nginx/html

EXPOSE 8080
