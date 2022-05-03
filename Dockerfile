FROM node:12-alpine
WORKDIR /usr/src/app

COPY /package*.json ./
RUN yarn install --update-checksums --network-timeout 100000
COPY / ./
RUN yarn install 
RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]