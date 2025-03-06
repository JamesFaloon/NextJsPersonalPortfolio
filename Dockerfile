FROM node:20-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer
RUN npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
RUN npm run build
EXPOSE 3000
CMD npm run start