FROM node:18-alpine

RUN apk update && apk upgrade
RUN mkdir front

WORKDIR ./front

EXPOSE 5173

CMD ["npm","run","dev"]