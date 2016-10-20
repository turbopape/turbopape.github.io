;;    <GANTT Charts Drawing using Google Chart Library - Part of Automagic Tools / Milestones>
;;    Copyright (C) 2016 , Rafik NACCACHE <rafik@fekr.tech>

(ns milestones-ui.charts)

(.load js/google.charts "current" (clj->js {:packages ["gantt"]}))

;; tasks : a map from milestones

(defn format-data-rows
  [tasks
   schedule-begin  ;; in RFC ISO-8601
   time-units  ;; moment.js time units: years, months, days, hours, minutes, seconds
   ]
  (let [schedule-begin-moment (js/moment schedule-begin)]
    (loop
        [remaining-tasks  tasks
         formatted-rows []]
      (if (seq remaining-tasks)
        (let [[task-id {:keys [task-name
                               achieved
                               begin
                               duration
                               resource-id
                               predecessors] :as task-infos}] (first remaining-tasks)]
          (recur (rest remaining-tasks)
                 (conj formatted-rows [(str task-id)
                                       task-name
                                       resource-id
                                       (-> schedule-begin-moment
                                           (.add time-units begin)
                                          ; .format
                                           )
                                       (-> schedule-begin-moment
                                           (.add time-units (+ begin duration))
                                          ; .format
                                           )
                                       duration ;; TODO : nil ok ?          
                                       (float  (/ achieved duration))
                                       (as-> predecessors p
                                         (interleave p (repeat ","))
                                         (butlast p)
                                         (reduce str "" p))])))
        (clj->js formatted-rows)))))

(defn draw-gantt!
  [tasks
   schedule-start ;; in RFC ISO-8601
   time-units ;; moment.js time units: years, months, days, hours, minutes, seconds
   in-div-id
   options]
  (let [data  (new js/google.visualization.DataTable)
        data-rows (format-data-rows schedule-start time-units tasks)]

    ;; Defining the columns of the GANTTs
    (doto data
      (.addColumn  "string" "Task ID")
      (.addColumn  "string" "Description")
      (.addColumn  "string" "Resource")
      (.addColumn  "date" "Start")
      (.addColumn  "date" "End")
      (.addColumn  "number" "Duration")
      (.addColumn  "number" "Percent Complete")
      (.addColumn  "string" "Dependencies"))

    ;; Adding DataRows
    (.addRows data data-rows)
    ;; Drawing
    (.draw (new js/google.visualization.Gantt
                (.getElementById js/document in-div-id))
           data
           (clj->js options))))









