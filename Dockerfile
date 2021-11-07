FROM node:12-alpine
RUN apk update && rm -rf /var/cache/apk/

WORKDIR /src/app

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm ci

COPY . ./

EXPOSE 4000

CMD ["ng","serve","--host", "0.0.0.0", "--poll", "500"]
