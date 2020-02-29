(ns myapp.core
  (:require [cljs.nodejs :as nodejs]))

;(ns myapp.core)
(nodejs/enable-util-print!)

(defn -main
  [& args]
  (println "Hello world!"))
;
(set! *main-cli-fn* -main)

;(println "Hello world!")
