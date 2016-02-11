(ns scheje-website.core
  (:require [scheje.interpreter :refer [eval-prog-with-env]]
            [scheje.library :refer [root-env]]
            [scheje.tools :refer [get-sexps rm-comments]]
            [cljs.reader :as cljs-reader]
            [scheje-website.expression :refer [handle]]
            [dommy.core :as dommy :refer-macros [sel sel1]]))

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

(def display-zone (sel1 [:body :#portfolio :#dzone]))

(defn show-eval!
  [ev]
  (if-let [error (:error ev)]
    (-> display-zone 
      (dommy/set-text!  error)
      (dommy/remove-class!  :alert-success)
      (dommy/add-class! :alert-danger))
    (if ev
      (-> display-zone 
          (dommy/set-text!  ev)
          (dommy/remove-class! :alert-danger)
          (dommy/add-class!  :alert-success))
      (-> display-zone
          (dommy/set-text! "")
          (dommy/remove-class! :alert-danger)
          (dommy/remove-class! :alert-success)))))
  
(defn eval-sexps!
  [sexps]
  (let [seq-sexps (apply list sexps)
        forms-eval (eval-prog-with-env @exec-env seq-sexps)
        last-eval (->> forms-eval  :evals (map  #(get % 1)) last)]
    (when (nil? (:error last-eval))
      (swap! exec-env merge (:env forms-eval)))
    (show-eval! last-eval)))

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
                                          (if (not (empty? (get s-exp :forms)))
                                            (eval-sexps! (s-exp :forms))
                                            (eval-sexps! (list  (.getLine editor (get pos :line))))))))))
