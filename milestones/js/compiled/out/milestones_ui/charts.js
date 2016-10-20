// Compiled by ClojureScript 1.9.229 {}
goog.provide('milestones_ui.charts');
goog.require('cljs.core');
google.charts.load("current",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gantt"], null)], null)));
milestones_ui.charts.format_data_rows = (function milestones_ui$charts$format_data_rows(tasks,schedule_begin,time_units){
var schedule_begin_moment = moment(schedule_begin);
var remaining_tasks = tasks;
var formatted_rows = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining_tasks)){
var vec__53804 = cljs.core.first.call(null,remaining_tasks);
var task_id = cljs.core.nth.call(null,vec__53804,(0),null);
var map__53807 = cljs.core.nth.call(null,vec__53804,(1),null);
var map__53807__$1 = ((((!((map__53807 == null)))?((((map__53807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53807):map__53807);
var task_infos = map__53807__$1;
var task_name = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"task-name","task-name",226705458));
var achieved = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"achieved","achieved",-1236312021));
var begin = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var duration = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var resource_id = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var predecessors = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var G__53809 = cljs.core.rest.call(null,remaining_tasks);
var G__53810 = cljs.core.conj.call(null,formatted_rows,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(task_id)].join(''),task_name,resource_id,schedule_begin_moment.add(time_units,begin),schedule_begin_moment.add(time_units,(begin + duration)),duration,(achieved / duration),(function (){var p = predecessors;
var p__$1 = cljs.core.interleave.call(null,p,cljs.core.repeat.call(null,","));
var p__$2 = cljs.core.butlast.call(null,p__$1);
return cljs.core.reduce.call(null,cljs.core.str,"",p__$2);
})()], null));
remaining_tasks = G__53809;
formatted_rows = G__53810;
continue;
} else {
return cljs.core.clj__GT_js.call(null,formatted_rows);
}
break;
}
});
milestones_ui.charts.draw_gantt_BANG_ = (function milestones_ui$charts$draw_gantt_BANG_(tasks,schedule_start,time_units,in_div_id,options){
var data = (new google.visualization.DataTable());
var data_rows = milestones_ui.charts.format_data_rows.call(null,schedule_start,time_units,tasks);
var G__53812_53813 = data;
G__53812_53813.addColumn("string","Task ID");

G__53812_53813.addColumn("string","Description");

G__53812_53813.addColumn("string","Resource");

G__53812_53813.addColumn("date","Start");

G__53812_53813.addColumn("date","End");

G__53812_53813.addColumn("number","Duration");

G__53812_53813.addColumn("number","Percent Complete");

G__53812_53813.addColumn("string","Dependencies");


data.addRows(data_rows);

return (new google.visualization.Gantt(document.getElementById(in_div_id))).draw(data,cljs.core.clj__GT_js.call(null,options));
});

//# sourceMappingURL=charts.js.map?rel=1476562402581