<!-- # npm init -y
- creará el páckage.json -->

# Webpack getting started

## Conceptos a tener en cuenta

- entry: punto de entrada de nuestra aplicacion
- output: punto de salida (donde estará compilado nuestro codigo para su uso final)
- loader: transpliadores de otros lenguajes/formatos a .js
  -- https://github.com/webpack-contrib/awesome-webpack
- plugins: Ejecutan codigo en diferentes puntos de webpack

## Dependencias de interes

### servor

- levanta servidor para archivos estaticos
- servor src index.html 8080 --reload -> servor dist index.html (after exec webpack)

### webbpack / webpack-cli (-D)

```
"build": "webpack --mode production",
"dev": "webpack --mode development",
```

packacge.json

- build: compile minified
- dev: compile expanded

package.json

### react / react-dom

### babel (-D)

- @babel/core
- babel-loader
- @babel/preset-react
- @babel/preset-env

## creamos .config de webpack

- webpack.config.js

```
module.exports = {
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}
```

Cargar este modulo, entre las reglas que vas a usar 'test' especificará que al encontrar un archivo que termina con la extension '.js', exluyendo ('exclude') lo que haya en los node_modules, pero si NO está en los node_modules usa ('use') un loader y las opciones que que vas a usar para este loader va aser el preset de '@babel/preset-react'

## html-webpack-plugin

Nos creará/modificará el output .html con el output .js hasheado, por defecto el template estará vacio deberemos pasarle como parametro en la webpack.config las propiedades

## webpack-dev-server

Opcion recomendada para utilizar el servidor en modo de desarrollo ya que no escribe los ficheros en el disco sino que los deja en memoria

```
"dev": "webpack-dev-server",
```
