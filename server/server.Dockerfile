FROM node:16
WORKDIR /app

# Copy client files
COPY ./client/package.json ./client/package.json
COPY ./client/public ./client/public
COPY ./client/src ./client/src

# Copy server files
COPY ./server/package.json ./server/package.json
COPY ./server/app.cjs ./server/app.cjs
COPY ./server/bin ./server/bin
COPY ./server/db ./server/db
COPY ./server/routes ./server/routes
COPY ./server/util ./server/util

RUN cd client && npm i && npm run build && cd ../server && npm i
EXPOSE 3001
ENTRYPOINT ["node", "./server/bin/www"]
