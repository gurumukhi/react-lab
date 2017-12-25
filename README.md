1: Simple React code
====================
* Direcotory: src/v0.0.1
* Run: index.html
* Concepts used: babel (for transcripting ES6 into ES5) & react (modern JS library for UI development) from CDN

2: Initial React code using 
====================
* Direcotory: src/v0.0.2
* Run: index.html
* Concepts used: components, props, state & lifecycle

3: Using initial tools
======================
* Directory: src/v0.0.2
* Run: `npm run buildv2` and then `open index.html`
* Tools used:
 * npm
  *  A package manager, such as Yarn, or npm lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them (dependency management).
  * All below mentioned tools are coming from npm now not from CDN
 * browserify
  * It lets you write modular code and bundle it together into small packages to optimize load time.
  * It is a bundling library to enable using dependencies using node.js style require() method
 * npm scripts
  * To run complex commands, withouth having to remember them and without making tools installed globally
* Dependencies: babel-core babel-preset-react babelify browserify react react-dom
* Tip: Using .babelrc will not need specifying preset from command `browserify -t [ babelify --presets [ react ] ]`
