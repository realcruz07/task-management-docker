# Usa una imagen base con Node.js y npm
FROM node:18.16.0-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Expone el puerto 3000 para que la aplicación esté disponible desde fuera del contenedor
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
CMD ["/bin/sh", "-c", "npm run migration:run && npm run start:dev"]
