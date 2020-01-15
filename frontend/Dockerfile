FROM node:10 as builder
WORKDIR /usr/app
RUN npm install -g @vue/cli
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:11-alpine
RUN npm install -g http-server
WORKDIR /usr/app
COPY --from=builder /usr/app/dist .
CMD http-server . -p 8080