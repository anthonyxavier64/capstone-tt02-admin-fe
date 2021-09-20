FROM node:12-alpine
RUN apk update && apk add python make g++ && rm -rf /var/cache/apk/

WORKDIR /src/app

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm ci

COPY . ./

EXPOSE 4000

RUN apk del python make g++

CMD ["ng","serve","--host", "0.0.0.0", "--poll", "500"]