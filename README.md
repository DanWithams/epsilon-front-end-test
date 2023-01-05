# epsilon-front-end-test
Front end test for Epsilon

## Developer Setup
To start development on the project use the following instructions.

Move into the application's directory.
```sh
cd app
```
Install dependencies (Yarn is used in these instructions, NPM equivilents will also work).
```sh
yarn
```
### Compile and Hot-Reload for Development
```sh
yarn dev
```
### Compile and Minify for Production
```sh
npm run build
```

## Setup
You can view and interact with the applicable via a browser by serving the index.php as the root of a webserver. An example follows;

```sh
cd app/dist
php -S localhost:8000
```