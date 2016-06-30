# Babel with Gulp

Demo app using babel, gulp, browserify and json-server as fake db server. It's just an index.html that loads three posts and three users in aside column.


# Installing

1. Clone the repo
2. `npm install -g gulp` to install Gulp globally.
3. `npm install` to resolve project dependencies.
4. `json-server server/db.json` to run the fake db server, assuming you are in the root directory of the app

# Using

Run `gulp` from the command line or gulp watch and you are good to go!

The project is currently setup to transpile code under the _/src_ folder using the
_/src/app.js_ file as an entry point and _/server/db.json_ as a fake database using json-server to make the work of a REST backend API code.

