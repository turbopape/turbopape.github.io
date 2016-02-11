(defproject scheje-website "0.1.0"
  :description "Web Repl to Demo Scheje"
  :url "https://turbopape.github.io/scheje"
  :license {:name "MIT"
            :url "http://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [scheje "0.2.11"]
                 [org.clojure/tools.reader "1.0.0-alpha1"]
                  [prismatic/dommy "1.1.0"]]
  :plugins [[lein-figwheel "0.5.0-6"]]
  :clean-targets  ^{:protect false} [:target-path "out"]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :optimizations :none
                        :figwheel true
                        :compiler {:main "scheje-website.core"
                                   :output-to "out/scheje_repl.js"
                                   :output-dir "out"
                                   :source-map-timestamp true}}]})
