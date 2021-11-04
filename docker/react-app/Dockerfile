FROM node:14-alpine

ENV REACT_ROOT /var/www/personal-site
RUN mkdir -p $REACT_ROOT

WORKDIR $REACT_ROOT

COPY ./src ./src
COPY ./public ./public
COPY ./package.json .

RUN npm install

CMD npm start
