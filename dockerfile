# Usa una imagen base oficial de Node.js 20.11.1
FROM node:20.11.1-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]