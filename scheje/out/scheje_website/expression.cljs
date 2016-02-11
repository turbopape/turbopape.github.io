(ns scheje-website.expression

  (:require

            [cljs.test :as test]
            [clojure.string :as string]
            [cljs.tools.reader :as reader]
            [cljs.tools.reader.reader-types :as rt]
            ))




(defn- try-read [rdr feature]
       {:pre [(#{:clj :cljs} feature)]}
       (when rdr
             (reader/read {:read-cond :allow :features #{feature} :eof ::EOF} rdr)))

(defn lined-read
      ([string] (lined-read string :clj))
      ([string feature]
        (let [rdr (rt/indexing-push-back-reader string)]
             (take-while #(not= ::EOF %) (repeatedly #(try-read rdr feature))))))




(defn find-form [forms pos]
  (let [cur-line (inc (:line pos))
        cur-col (:ch pos)]
    (loop [prev nil
           left forms]
      (when-let [f (first left)]
        (let [{:keys [line end-line column end-column]} (meta f)]
          (cond
            (and (symbol? f)
                 (= line cur-line)) f
            (and end-line line
                 (<= line cur-line)
                 (>= end-line cur-line)) f
            :else (recur f (rest left))))))))



(defn is-non-clojure? [s]
      (and (= (get (pr-str s) 0) \#)
           (not (set? s))))

(defn ->ns-sym [nsp]
      (symbol (str nsp)))

(defn trim-last [s n]
      (let [size (count s)]
           (subs s 0 (- size n))))

(defn meta? [thing]
      (if (instance? clojure.lang.IObj thing)
        (meta thing)))

(defn clean-serialize [res & [opts]]
      (binding [*print-length* (or (:print-length opts) *print-length* 1000)]
               (cond
                 (fn? res) 'fn
                 (var? res) (if-not (:allow-var? opts)
                                    res
                                    (str res)
                                    )
                 (nil? res) "nil"
                 (false? res) "false"
                 (and (instance? clojure.lang.Atom res)
                      (:result opts)) (str "atom[" @res "]")
                 (instance? clojure.lang.Atom res) (str "atom")
                 ;(is-non-clojure? res) (str res)
                 (and (string? res) (:verbatim opts)) res
                 :else (pr-str res))))

(defn truncate [v] v)

(defn prep-code [code meta]
      (if (or (not meta)
              (not (:start meta)))
        code
        (str (reduce str "" (repeat (:start meta 0) "\n"))
             code)))

(defn clear-scheme-booleans [code]
      (let [code-false   (clojure.string/replace code #"#f" "false")
            code-true   (clojure.string/replace code-false #"#t" "true")
            ]
           code-true
           ))

(defn handle [msg meta pos]
  (try (let [
            code (prep-code (clear-scheme-booleans msg) nil)
            forms (lined-read code)
             forms (if-not pos forms (let [form (find-form forms pos)] (if (nil? form) [] [form])))
             ]
         {:syntax "ok" :forms forms}
          )

       (catch js/Error e
         {:syntax "ko" :forms e})
       ))





