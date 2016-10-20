// Compiled by ClojureScript 1.9.229 {}
goog.provide('milestones.charts');
goog.require('cljs.core');
google.charts.load("current",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gantt"], null)], null)));
milestones.charts.chart_options = ({"height": (275), "labelStyle": new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontName","fontName",-621897451),"Roboto2",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"color","color",1011675173),"#757575"], null), "gantt": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"criticalPathEnabled","criticalPathEnabled",-2100741762),true,new cljs.core.Keyword(null,"criticalPathStyle","criticalPathStyle",1589920645),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#e64a19",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5)], null)], null)});
/**
 * Given a list of tasks with begin fields, i.e tasks that has been
 *   scheduled, format data rows create the js arrows to be fed to google
 *   gantt charts all dates must be in RFC ISO-8601 format. Time units
 *   are strings usable by the moments frameork: years, months, days, hours, minutes, seconds
 */
milestones.charts.format_data_rows = (function milestones$charts$format_data_rows(tasks,schedule_begin,time_units){
var remaining_tasks = tasks;
var formatted_rows = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining_tasks)){
var vec__45303 = cljs.core.first.call(null,remaining_tasks);
var task_id = cljs.core.nth.call(null,vec__45303,(0),null);
var map__45306 = cljs.core.nth.call(null,vec__45303,(1),null);
var map__45306__$1 = ((((!((map__45306 == null)))?((((map__45306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45306):map__45306);
var task_infos = map__45306__$1;
var task_name = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"task-name","task-name",226705458));
var achieved = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"achieved","achieved",-1236312021));
var begin = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var duration = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var resource_id = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var predecessors = cljs.core.get.call(null,map__45306__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var G__45308 = cljs.core.rest.call(null,remaining_tasks);
var G__45309 = cljs.core.conj.call(null,formatted_rows,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(task_id)].join(''),task_name,resource_id,moment(schedule_begin).add((begin - (1)),time_units),moment(schedule_begin).add(((begin + duration) - (1)),time_units),moment.duration(duration,"days").asMilliseconds(),(((100) * (achieved / duration)) | (0)),((cljs.core.empty_QMARK_.call(null,predecessors))?null:(function (){var p = predecessors;
var p__$1 = cljs.core.interleave.call(null,p,cljs.core.repeat.call(null,","));
var p__$2 = cljs.core.butlast.call(null,p__$1);
return cljs.core.reduce.call(null,cljs.core.str,"",p__$2);
})())], null));
remaining_tasks = G__45308;
formatted_rows = G__45309;
continue;
} else {
return cljs.core.clj__GT_js.call(null,formatted_rows);
}
break;
}
});
/**
 * Takes a tasks with begin fields(that have been scheduled), a
 *   schedule-start (A date in RFC ISO-8601 Format), a moments.js
 *   compatible time unit specification (years, months, days, ...) and
 *   draws the GANTT inside the in-div-id div. Is given an options as
 *   specified by the google gantt charts documentation.
 */
milestones.charts.draw_gantt_BANG_ = (function milestones$charts$draw_gantt_BANG_(tasks,schedule_start,time_units,in_div_id,options){
var data = (new google.visualization.DataTable());
var data_rows = milestones.charts.format_data_rows.call(null,tasks,schedule_start,time_units);
var G__45311_45312 = data;
G__45311_45312.addColumn("string","Task ID");

G__45311_45312.addColumn("string","Task Name");

G__45311_45312.addColumn("string","Resource");

G__45311_45312.addColumn("date","Start Date");

G__45311_45312.addColumn("date","End Date");

G__45311_45312.addColumn("number","Duration");

G__45311_45312.addColumn("number","Percent Complete");

G__45311_45312.addColumn("string","Dependencies");


data.addRows(data_rows);

return (new google.visualization.Gantt(document.getElementById(in_div_id))).draw(data,cljs.core.clj__GT_js.call(null,options));
});

//# sourceMappingURL=charts.js.map?rel=1476609807156