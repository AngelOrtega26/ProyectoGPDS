# ***BACKEND***

### API de NodeJS con arquitectura en capas

#### *DEPENDENCIAS:*
- express
```
npm install express
```
- postgres
```
npm install pg
```
- dotenv (para hacer uso de variables de entorno y no exponer el URI directamente el el API)
```
npm install dotenv
```
- nodemon
```
npm install --save-dev nodemon
```
- cors (para permitir las solicitudes desde el Frontend)
```
npm install cors
```
---
# ***FRONTEND***

### Proyecto de AngularJS que realizará las peticiones al API

### *DEPENDENCIAS*

<!-- - PrimeNG (Versión especifica para la versión de Angular usada para el proyecto)
```
npm install primeng@16.9.0
```
- PrimeICONS
```
npm install primeicons
``` -->

- Bootstrap
```
ng add @ng-bootstrap/ng-bootstrap
```
- Dependencias de angular
```
npm i
```
- PRIMENG
```
npm install primeng@16.9.0
```

- PRIMEFLEX
```
npm install primeflex
```

- PRIMEICONS
```
npm install primeicons
```
### Asi deberían quedar los styles en el angular.json:
```
"styles": [
    "src/styles.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeflex/primeflex.css",
    "node_modules/primeicons/primeicons.css"
]
```