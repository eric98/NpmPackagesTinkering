# NPM

Part of node/depends on node. Check version:

```
node -v
```

Updating npm:

```
npm install npm@latest -g
```

## Public repo: www.npmjs.com

https://www.npmjs.com/

## PERMISSIONS: DO NOT USE ROOT OR SUDO

https://docs.npmjs.com/getting-started/fixing-npm-permissions

```
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

## Install

 https://docs.npmjs.com/getting-started/installing-npm-packages-locally
 
Note on:
 https://docs.npmjs.com/files/package-lock.json
 
### Require

NOT SUPPORTED ON BROWSER ENVIRONMENTS

 https://www.w3schools.com/js/js_versions.asp
 
Seguir:

https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/ 

SINGLETON: The module loading mechanism in Node.js is caching the modules on the first require call. It means that every time you use require('awesome-module') you will get the same instance of awesome-module, which ensures that the modules are singleton-like and have the same state across your application.


REQUIRE
- PATH RELATIU a fitxer o carpeta: (/, ../, ./)
- LA RESTA: nom de mòdul

History:
- The JavaScript language didn’t have a native way of organizing code before the ES2015 standard. Node.js filled this gap with the CommonJS module format. In this article we will learn about how the Node.js module system works, how you can organize your modules and what does the new ES standard means for the future of Node.js.

#### IOC INVERSION OF CONTROL CONTAINER

Require wire to modules (hardcoded) but be can use (like in Laravel) IOC:

Section: How to handle your modules?
- https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
- Factory pattern

## Package.json

```
npm init
```

NAME AN VERSION (SEMVER):
```
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```

## Other NPM commands

```
npm ls
npm update
npm outdated
npm uninstall {package}
```

### IMPORT ES6: BABEL   

## HOW TO PUBLISH PACKAGES

 http://acacha.org/mediawiki/Node_Packaged_Modules#Publicar_paquets

LOGIN AN REGISTER npmjs.com:

``` 
npm adduser
npm login
npm config ls
https://npmjs.com/~
```

Publish :

```
npm publish ## .gitignore or .npmignore to ignore files
```

```
https://npmjs.com/package/<package>
```

NEW VERSION:

```
npm version patch|major|minor
git push --tags 
``` 

**Resources**
- https://docs.npmjs.com/
- http://acacha.org/mediawiki/Node_Packaged_Modules

# Packages

https://laracasts.com/series/how-do-i/episodes/2

# REQUIRE/exports

https://docs.npmjs.com/getting-started/creating-node-modules

### HOW IT WORKS

https://docs.npmjs.com/how-npm-works/packages

VOCABULARY:
- **PACKAGE** : A package is a file or directory that is described by a package.json. This can happen in a bunch of different ways! 
- **MODULE**: A module is any file or directory that can be loaded by Node.js' require(). Again, there are several configurations that allow this to happen

PACKAGE:
a) A folder containing a program described by a package.json file.
b) A gzipped tarball containing (a).
c) A url that resolves to (b).
d) A <name>@<version> that is published on the registry with (c).
e) A <name>@<tag> that points to (d).
f) A <name> that has a latest tag satisfying (e).
g) A git url that, when cloned, results in (a).

IMPORTANT: NO NEED OF NPMJS.COM TO USING NPM (Using URL (including local files not only http), tarballs, Github repos...)

MODULE

A module is anything that can be loaded with require() in a Node.js program. The following are all examples of things that can be loaded as modules:

- A folder with a package.json file containing a main field.
- A folder with an index.js file in it.
- A JavaScript file.

## MODULE PATTERNS

SIMPLEST MODULE

https://darrenderidder.github.io/talks/ModulePatterns/#/2

DEFINE A GLOBAL

https://darrenderidder.github.io/talks/ModulePatterns/#/4

EXPORT AN ANONYMOUS FUNCTION

https://darrenderidder.github.io/talks/ModulePatterns/#/6

EXPORT A NAMED FUNCTION

https://darrenderidder.github.io/talks/ModulePatterns/#/7

EXPORT OBJECTS:

https://darrenderidder.github.io/talks/ModulePatterns/#/8
https://darrenderidder.github.io/talks/ModulePatterns/#/9

JAVASCRIPT MODULE PATTERN

```
(function () {
  // ... all vars and functions are in this scope only
  // still maintains access to all globals
}());
```

http://acacha.org/mediawiki/Javascript#Javascript_module_pattern

## module.exports VS exports

 https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac
 
**Resources**
- https://darrenderidder.github.io/talks/ModulePatterns/

## NODE_MODULES FOLDER

- Local install (default): puts stuff in ./node_modules of the current package root.
- Global install (with -g): puts stuff in /usr/local or wherever node is installed.
- Install it locally if you're going to require() it.
- Install it globally if you're going to run it on the command line.
- If you need both, then install it in both places, or use npm link.

MODULE PATHS:
Taken from: https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8

```
~/learn-node $ node
> module.paths
[ '/Users/samer/learn-node/repl/node_modules',
  '/Users/samer/learn-node/node_modules',
  '/Users/samer/node_modules',
  '/Users/node_modules',
  '/node_modules',
  '/Users/samer/.node_modules',
  '/Users/samer/.node_libraries',
  '/usr/local/Cellar/node/7.7.1/lib/node' ]
```

EXTENSIONS QUE NO CAL INDICAR per a fitxers/mòduls:

```
node
> require.extensions
{ '.js': [Function], '.json': [Function], '.node': [Function] }
```

**Resources**
- https://medium.com/maxkimambo/how-does-node-module-loading-actually-work-8aa63849f5ae
- https://docs.npmjs.com/files/folders

### SCOPE

In a browser, when we declare a variable in a script like this:

```
var answer = 42;
```

That answer variable will be globally available in all scripts after the script that defined it. (Window.)

This is not the case in Node. When we define a variable in one module, the other modules in the program will not have access to that variable. 

Magically scoped!

### NOTE ON VERSIONS


https://medium.com/dailyjs/npm-and-the-front-end-950c79fc22ce


## SEMVER

https://docs.npmjs.com/getting-started/semantic-versioning

# USING NODE.JS in BROWSERS - MODULE BUNDLING TRANSPILING

https://www.sitepoint.com/javascript-modules-bundling-transpiling/

## HISTORY

https://www.sitepoint.com/javascript-modules-bundling-transpiling/

### PAST

JQUERY or similar:

```
window.$ = function() { ... };
<script src="jquery.js"></script>
<script>
$(function() { ... });
</script>
```

AVOID POLUTING GLOBAL SPACE:

Avoid collisions with a prefix:

```
var App = {};
App.Models = {};
App.Models.Note = function() {};
```

### FUTURE (export/import)

ES6 MODULES

```
export default function $() { ... }
```

```
import $ from 'jquery';
$(function() { ... });
```

### PRESENT

!!!! It’s really really complicated. First, there’s a variety of module formats out there in use:

- CommonJS
- AMD
- UMD
- ES6 Modules

Tools for (BUNDLING assets) come in a variety of shapes and sizes:

- Browserify
- jspm
- Webpack
- Rollup
- Brunch / Brocolli
- Sprockets
- Build your own with Gulp / Grunt

### WEBPACK / LARAVEL MIX:

 https://laracasts.com/series/webpack-for-everyone

Project structure:

```
mkdir modules-app
cd modules-app
npm init -y
npm install --save-dev webpack
#npm install --save-dev browserify jspm OTHER OPTIONS
mkdir src
touch src/{entry,lib}.js index.html
```

index.html:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Modules!</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

Let’s add a new script to package.json for calling webpack

```
"webpack": "webpack ./src/entry.js bundle.js"
```

```
npm run webpack
```

TEST:

```
 npm install -g live-server and run live-server
```

watch?

**Resources**
- https://www.sitepoint.com/javascript-modules-bundling-transpiling/

### GLOBAL OBJECT NODE (GLOBAL OBJECTS)

```
node
this === global
```

https://nodejs.org/api/globals.html

# Javascript packags Local development

## npm link

Problems: webpack problems with links

## Laravel mix

# BABEL:

https://www.sitepoint.com/javascript-modules-bundling-transpiling/

## WEBPACK I BABEL LOADER:

- https://www.sitepoint.com/javascript-modules-bundling-transpiling/

## Laravel mix:

```
mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/app-landing.js', 'public/js/app-landing.js')
  .sourceMaps()
  .webpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, './relationships/resources/assets/js'),
        path.resolve(__dirname, 'node_modules')
      ]
    }
```

**Resources**
- https://github.com/acacha/relationships-test/blob/master/webpack.mix.js

# Vue

VUE CLI: Scaffolding Projects (like laravel new with Laravel)

Instal·lació

```
npm install -g vue-cli
```

Version:

```
vue --version
2.9.1
```

Update:

```
npm update -g vue-cli
```

**Resources**:
- https://github.com/vuejs/vue-cli
- http://acacha.org/mediawiki/Vue-cli
- https://docs.npmjs.com/getting-started/updating-global-packages