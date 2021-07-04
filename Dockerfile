FROM node:12.18.2-alpine3.12

WORKDIR /home/node/app
RUN apk update && apk add git
RUN yarn global add gatsby-cli gatsby-plugin-sharp
EXPOSE 8000
