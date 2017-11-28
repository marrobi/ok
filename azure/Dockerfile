# used ubuntu for msodbcsql compatibility
FROM ubuntu:17.10 


RUN apt-get update &&  apt-get install -y curl apt-transport-https


RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - 
RUN curl  https://packages.microsoft.com/config/debian/8/prod.list  > /etc/apt/sources.list.d/mssql-release.list


 
RUN apt-get update &&  ACCEPT_EULA=Y apt-get install -y patch ca-certificates nginx perl  python3 python3-pip 

# RUN apt-get install -y unixodbc unixodbc-dev msodbcsql;

RUN apt-get install -y python-mysql.connector

RUN mkdir /code/
WORKDIR /code/

ADD requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

ADD . .

RUN useradd -s /bin/false nginx
RUN mv docker/nginx/nginx.conf /etc/nginx/nginx.conf
RUN mv docker/nginx/default.conf /etc/nginx/conf.d/default.conf


ENV PYTHONPATH=$PWD


#RUN rm -rf /var/cache/apk/*

RUN ./manage.py assets build

#RUN ln -s /usr/lib/libcrypto.so.1.0.2 /usr/lib/libcrypto.so.1.0.0  &&   ln -s   /usr/lib//libssl.so.1.0.2 /usr/lib/libssl.so.1.0.0 
RUN apt-get install locales && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen

CMD ./manage.py createdb && nginx && gunicorn \
       --timeout 60 \
        --bind unix:/tmp/server.sock \
        --workers 3 \
        wsgi:app

EXPOSE 5000
