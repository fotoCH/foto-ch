FROM ubuntu:16.04

# install or upgrade nodejs and yarn and unzip
RUN apt-get update -qq && apt-get install -y curl wget unzip && \
  curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
  apt-get install -y nodejs && \
  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn && \
  rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# set working directory
RUN mkdir /app
WORKDIR /app

# make sure target for mounting yarn cache exists
RUN mkdir -p /usr/local/share/.cache/yarn
