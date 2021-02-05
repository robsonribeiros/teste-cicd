FROM node:14-alpine

ENV PORT=3333

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]
