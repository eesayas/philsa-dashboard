FROM node:14-alpine
WORKDIR /usr/src/app

COPY /package*.json ./
RUN yarn install --update-checksums --network-timeout 100000
COPY / ./
RUN yarn install 
ENV NODE_ENV production
RUN yarn build

EXPOSE 1337
ENV NODE_ENV production
CMD ["yarn", "start"]
