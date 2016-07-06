# Index.html file using ES2015

Demo app using babel, gulp, browserify and json-server as fake db server. It's just an index.html that loads three fake posts and three fake users in aside column, as it was forum posts page.

Here just for testing es2015.


# Installing

1. Clone the repo
2. `npm install -g gulp` to install Gulp globally.
3. `npm install -g json-server` to install json-server globally.
4. Browse project root directory, `npm install` to resolve project dependencies.

# Using it

1. Run the fake db server: Open terminal, browse project folder, run `json-server server/db.json`. Notice that requests are being made to `localhost:3000` (default json-server configuration). You can find that vale in `src/constants.js`
2. Gulp: Run `gulp` from the command line or `gulp watch` and you are good to go!

The project is currently setup to transpile code under the _/src_ folder using the
_/src/app.js_ file as an entry point and _/server/db.json_ as a fake database using json-server to make the work of a REST backend API code.
