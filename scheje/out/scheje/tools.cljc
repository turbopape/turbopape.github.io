(ns scheje.tools
  (:require [clojure.walk :as w]
            #?(:cljs [cljs.reader :as cljs-reader])))


(defn get-syntax
  [exp syntaxes]
  (first  (->> syntaxes
               (filter #(= exp (:name %))))))

(defn get-literals
  [syntaxes]
  (->> syntaxes
       (mapcat :literals)))

(defn literal?
  [exp syntaxes]
  (not (nil?  (some #{exp} (get-literals syntaxes)))))

(defn atom?
  [x]
  (not (seq? x)))

(defn pairlis
  [x y z]
  (into z  (map (fn [k v] [k v]) x y )))

(defn is-valid-symbol?
  [s]
  (not (some #{ \( \) \[ \] \{ \} \" \, \' \` \; \# \| \\  }
             (name s))))

(defn get-symbols
  [exp]
  (let [res (atom '())]
    (w/postwalk
     (fn[x]
       (when   (symbol? x)
         (swap! res conj x)))
     exp)
    @res))


(defn is-exp-valid?
 [exp]

 (every? is-valid-symbol? (get-symbols exp)))

(defn rm-comments
  [s]
  #?(:clj (-> s
              (clojure.string/replace  #";.*\n+" "")
              (clojure.string/replace  #";.*$" ""))
     :cljs (-> s
               (.replace  (js/RegExp. ";.*\n+" "g") "")
               (.replace  (js/RegExp. ";.*$" "g" ) ""))))

(defn get-sexps
  [s]
  (loop [remaining (rm-comments s)
         level 0
         result []
         current-sexp ""]
    (if (seq remaining)
      (let [cur-char (first remaining)]
        (if (not (= \newline cur-char))
          (let [cur-level (cond
                            (= cur-char \() (inc level)
                            (= cur-char \)) (dec level)
                            :else level)

                result (if (zero? cur-level)
                         (conj result (str  current-sexp cur-char))
                         result)
                
                new-current-sexp (if (zero? cur-level)
                                   ""
                                   (str current-sexp cur-char))]

            (recur (rest remaining)
                   cur-level
                   result
                   new-current-sexp))
          (recur (rest remaining)
                 level
                 result
                 current-sexp)))
      result)))


(defn load-prog-from-file
  [f]
  (let [file-string #?(:clj (slurp f)
                       :cljs (let [fs (js/require "fs")]
                               (.readFileSync fs f "utf8")))]
    (->>  file-string
          (get-sexps)
          (map #?(:clj clojure.tools.reader/read-string
                  :cljs cljs-reader/read-string)))))
