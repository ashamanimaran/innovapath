CommonJS is a  Module specification.Node.js and RingoJS are server-side JavaScript runtimes, and yes, both of them implement modules based on the CommonJS Module spec.

AMD (Asynchronous Module Definition) is another specification for modules. RequireJS is probably the most popular implementation of AMD. One major difference from CommonJS is that AMD specifies that modules are loaded asynchronously - that means that modules are only loaded as they are needed, as opposed to loading all modules up front. 

AMD is generally more used in client-side (in-browser) JavaScript development due to this, and CommonJS Modules are generally used server-side. However, you can use either module spec in either environment - for example, RequireJS offers directions for running in Node.js and browserify is a CommonJS Module implementation that can run in the browser.

C:\Asha\brackets\javascriptBasics\commonjs>npm install browserify --save

C:\Asha\brackets\javascriptBasics\commonjs>"node_modules\.bin\browserify" script1.js -o bundle.js