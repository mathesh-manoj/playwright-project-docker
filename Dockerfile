FROM mcr.microsoft.com/playwright:v1.64.1-noble

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install xlsx

COPY . .

CMD ["npx", "playwright", "test"]