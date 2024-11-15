# Usa una imagen oficial de Node.js como base
FROM node:18.17.1-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que la app va a correr (puedes cambiarlo según tu configuración)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
