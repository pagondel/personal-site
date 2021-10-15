FROM node:14.18.0-alpine

ENV REACT_ROOT /var/www/personal-site
RUN mkdir -p $REACT_ROOT

WORKDIR $REACT_ROOT

COPY ./react-app/ .

RUN npm install

CMD npm start
