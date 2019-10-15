FROM python:3.6

# Install curl, node, & yarn
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install 8.2.0 \
    && nvm alias default 8.2.0 \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v8.2.0/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v8.2.0/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

WORKDIR /app/backend

# Install Python dependencies
COPY ./backend/requirements.txt /app/backend/
RUN pip3 install --upgrade pip -r requirements.txt

# Install JS dependencies
WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/package-lock.json /app/frontend/
RUN npm install


EXPOSE $PORT

CMD python3 backend/manage.py runserver 0.0.0.0:$PORT
