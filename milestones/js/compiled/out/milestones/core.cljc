(ns milestones.core
  (:require [goog
             [dom :as dom]
             [events :as events]]
            [milestones
             [browser-charts :refer [draw-gantt!]]
             [dyna-scheduler :refer [schedule]]
             [nlp-tools :refer [guess-task]]]))

(def cnt-holder (dom/getElement "schedule"))














