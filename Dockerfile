FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN apk add --no-cache git
RUN apk add inotify-tools
ENV NODE_OPTIONS="--max_old_space_size=8192"
RUN npm install
COPY . /app
EXPOSE 8000
CMD ["npm", "run", "run:dev"]
