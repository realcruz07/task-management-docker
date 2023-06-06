# Usa una imagen base con Node.js y npm
FROM node:18.16.0-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

RUN npm cache clean --force

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Construye la aplicación de Angular
RUN npm run build

# Expone el puerto 4200 para que la aplicación esté disponible desde fuera del contenedor
EXPOSE 4200

# Comando que se ejecuta al iniciar el contenedor
CMD [ "npm", "run", "start" ]
