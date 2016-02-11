(ns scheje-website.core
  (:require [scheje.interpreter :refer [eval-prog-with-env!]]
            [scheje.library :refer [root-env]]
            [scheje.tools :refer [get-sexps]]
            [cljs.reader :as cljs-reader]
            [scheje-website.expression :refer [handle]]))

(def exec-env (atom root-env))

(def codemirror-config {"value"           (.-value (.getElementById js/document "default-template")),
                        "mode"            "scheme",
                        "keyMap"          "emacs",
                        "readOnly"        false,
                        "styleActiveLine" true,
                        "lineNumbers"     true})


(defn create-editor [config]
  (js/CodeMirror (.getElementById js/document "scheme-codemirror") (clj->js config)))

(def editor (create-editor codemirror-config))

(defn show-eval!
  [s]
  (js/alert s))
  
(defn eval-sexps!
  [sexps]
  (let [seq-sexps (apply list sexps)
        forms-eval (eval-prog-with-env! @exec-env seq-sexps)
        last-eval (->> forms-eval  :evals (map  #(get % 1)) last)]
    (if (nil? (:error last-eval))
      (do
        (swap! exec-env merge (:env forms-eval))
        (show-eval! last-eval))
      (show-eval! (str  "Error: " (:error last-eval))))))

(.setOption editor "extraKeys"
            (js-obj "Ctrl-J" (fn[cm]
                               (let [sexps (->>  (get-sexps (.getValue editor))
                                                 (map cljs-reader/read-string)
                                                 (filter (comp not nil?)))]
                                     (when (> (count sexps) 0)
                                       (eval-sexps! sexps))))
                    
                    "Ctrl-X Ctrl-E" (fn[cm]
                                      (let [pos  {:line (.-line (.getCursor editor))
                                                  :ch (.-ch (.getCursor editor))}
                                            meta nil
                                            code (.getValue editor)
                                            s-exp (handle code meta pos)]
                                        (when (= (:syntax s-exp) "ok")
                                          (eval-sexps! (s-exp :forms)))))))
