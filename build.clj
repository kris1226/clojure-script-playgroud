(require '[cljs.build.api :as b])

(b/build "src" {:main 'myapp.core
                :output-to "main.js"
                :output-dir "out"
                :target :nodejs
                :verbose true})
;
;(require 'cljs.build.api)
;
;(cljs.build.api/build "src" {:output-to "out/main.js"})