FROM node:16
WORKDIR /app
COPY . ./
RUN npm i
EXPOSE 3001
CMD ["node", "./bin/www"]
