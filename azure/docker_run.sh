docker kill ok

docker rm ok

docker build -f ./azure/Dockerfile -t ok .

docker run -d -p 5000:5000 --name ok \
     --env OK_ENV=$OK_ENV \
     --env REDIS_HOST=$REDIS_HOST \
     --env REDIS_PASSWORD=$REDIS_PASSWORD \
     --env DATABASE_URL="$DATABASE_URL" \
          ok