#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/demo-app /usr/share/nginx/html

# build: 
# docker build -t pokemon-app:latest .

# run:
# docker run -d -p 80:80 pokemon-app:latest