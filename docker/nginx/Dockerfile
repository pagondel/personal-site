FROM node:14-alpine

RUN apk add nginx

ENV REACT_ROOT /var/www/personal-site
RUN mkdir -p $REACT_ROOT

ENV APP_TMP /tmp/react-app
RUN mkdir -p $APP_TMP

WORKDIR $APP_TMP

COPY ./src ./src
COPY ./public ./public
COPY ./package.json .

RUN ls
RUN ls public

RUN npm install
RUN npm run build --verbose

RUN cp -R $APP_TMP/build/* $REACT_ROOT

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR $REACT_ROOT
RUN rm -rf $APP_TMP
RUN mkdir -p /run/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
