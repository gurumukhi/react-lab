1: Sample React code
====================
* Uses babel (for transcripting ES6 into ES5) & react (modern JS library for UI development) from CDN
* Direcotory: src/v0.0.1
* Run: index.html

2: Using initial tools
======================
* Uses tools -
** npm (for dependency management, all below mentioned tools are coming from npm now not from CDN)
** browserify (bundling library to use dependencies using node.js style require() method)
** npm scripts (to run complex commands, withouth having to remember them and without making tools installed globally)
* Directory: src/v0.0.2
* Run: `npm run buildv2` and then `open index.html`
* Used dependencies: babel-core babel-preset-react babelify browserify react react-dom
* Using .babelrc will not need specifying preset from command `browserify -t [ babelify --presets [ react ] ]`
