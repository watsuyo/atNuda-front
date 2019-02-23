

yarn init
docker-compose build --force-rm
docker-compose run frontend yarn create nuxt-app .
#docker-compose run frontend vue init webpack .
#sed -i .bak 's/localhost/0.0.0.0/' app/config/index.js  
#sed -i .bak 's/8080/9000/' app/config/index.jsi
docker-compose up -d
