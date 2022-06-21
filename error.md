ERROR in   Error: Parse Error: <script src="../dist/main"../dist/majs">
     </script>
    </body>
    </html> 
    ModuleError: Module Error (from ./node_modules/html-loader/dist/cjs.js):
    Parse Error: <script src="../dist/main"../dist/majs">
     </script>
    </body>
    </html> 
        at Object.emitError (/home/marco/Documentos/javaScript/js/webpack/node_modules/webpack/lib/NormalModule.js:608:6)
        at Object.loader (/home/marco/Documentos/javaScript/js/webpack/node_modules/html-loader/dist/index.js:59:10)
    
    - NormalModule.js:608 Object.emitError
      [webpack]/[webpack]/lib/NormalModule.js:608:6
    
    - index.js:59 Object.loader
      [webpack]/[html-loader]/dist/index.js:59:10
    
    - child-compiler.js:169 
      [webpack]/[html-webpack-plugin]/lib/child-compiler.js:169:18
    
    - Compiler.js:551 finalCallback
      [webpack]/[webpack]/lib/Compiler.js:551:5
    
    - Compiler.js:577 
      [webpack]/[webpack]/lib/Compiler.js:577:11
    
    - Compiler.js:1196 
      [webpack]/[webpack]/lib/Compiler.js:1196:17
    
    
    - Hook.js:18 Hook.CALL_ASYNC_DELEGATE [as _callAsync]
      [webpack]/[tapable]/lib/Hook.js:18:14
    
    - Compiler.js:1192 
      [webpack]/[webpack]/lib/Compiler.js:1192:33
    
    - Compilation.js:2787 finalCallback
      [webpack]/[webpack]/lib/Compilation.js:2787:11
    
    - Compilation.js:3092 
      [webpack]/[webpack]/lib/Compilation.js:3092:11
    
    
  </pre>
  
  - NormalModule.js:608 Object.emitError
    [webpack]/[webpack]/lib/NormalModule.js:608:6
  
  - index.js:59 Object.loader
    [webpack]/[html-loader]/dist/index.js:59:10
  
  - - NormalModule.js:608 Object.emitError
  
  - [webpack]/[webpack]/lib/NormalModule.js:608:6
  
  - - index.js:59 Object.loader
  
  - [webpack]/[html-loader]/dist/index.js:59:10
  
  - - child-compiler.js:169
  
  - [webpack]/[html-webpack-plugin]/lib/child-compiler.js:169:18
  
  - - Compiler.js:551 finalCallback
  
  - [webpack]/[webpack]/lib/Compiler.js:551:5
  
  - - Compiler.js:577
  
  - [webpack]/[webpack]/lib/Compiler.js:577:11
  
  - - Compiler.js:1196
  
  - [webpack]/[webpack]/lib/Compiler.js:1196:17
  
  - - Hook.js:18 Hook.CALL_ASYNC_DELEGATE [as _callAsync]
  
  - [webpack]/[tapable]/lib/Hook.js:18:14
  
  - - Compiler.js:1192
  
  - [webpack]/[webpack]/lib/Compiler.js:1192:33
  
  - - Compilation.js:2787 finalCallback
  
  - [webpack]/[webpack]/lib/Compilation.js:2787:11
  
  - - Compilation.js:3092
  
  - [webpack]/[webpack]/lib/Compilation.js:3092:11
  
  - </pre>
  
  - htmlparser.js:255 HTMLParser.parse
    [webpack]/[html-minifier-terser]/src/htmlparser.js:255:15
  
  - task_queues.js:97 processTicksAndRejections
    internal/process/task_queues.js:97:5
  
  - htmlminifier.js:1282 async minify
    [webpack]/[html-minifier-terser]/src/htmlminifier.js:1282:3
  
  - htmlminifier.js:1365 async Object.exports.minify
    [webpack]/[html-minifier-terser]/src/htmlminifier.js:1365:16
  


1 ERROR in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
webpack 5.73.0 compiled with 3 errors in 4496 ms

