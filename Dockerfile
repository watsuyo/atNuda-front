FROM node:10-slim

# docker build process is treated as locale with in the POSIX.
# It must be defined explicitly in Dockerfile
# https://github.com/docker/docker/issues/2424#issuecomment-27269233
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# apt-get upgrade
RUN set -x \
        && apt-get update -q \
        && apt-get install -qy --no-install-recommends \
             # base toolbelt
             build-essential ca-certificates locales git autotools-dev automake ssh \
             # optional toolbelt
             vim less \
        && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
        && locale-gen && update-locale LANG=en_US.UTF-8

# node setup
ENV NPM_CONFIG_LOGLEVEL info

# Install react and react-dom
ENV VUE_CLI_VERSION 3.1.1
ENV VUE_CLI_INIT_VERSION 3.1.1

RUN set -x \
            && npm install -g yarn \
            && yarn global add @vue/cli@${VUE_CLI_VERSION} \
            && yarn global add @vue/cli-init@${VUE_CLI_INIT_VERSION}

WORKDIR /usr/src/app

# Install npm_modules
COPY package.json /usr/src/app

RUN set -x \
            && yarn install

ENV HOST 0.0.0.0
EXPOSE 8080
