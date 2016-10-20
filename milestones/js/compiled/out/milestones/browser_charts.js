// Compiled by ClojureScript 1.9.293 {}
goog.provide('milestones.browser_charts');
goog.require('cljs.core');
google.charts.load("current",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gantt"], null)], null)));
milestones.browser_charts.chart_options = ({"height": (275), "labelStyle": new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontName","fontName",-621897451),"Roboto2",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"color","color",1011675173),"#757575"], null), "gantt": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"criticalPathEnabled","criticalPathEnabled",-2100741762),true,new cljs.core.Keyword(null,"criticalPathStyle","criticalPathStyle",1589920645),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#e64a19",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5)], null)], null)});
/**
 * Given a list of tasks with begin fields, i.e tasks that has been
 *   scheduled, format data rows create the js arrays to be fed to google
 *   gantt charts all dates must be in RFC ISO-8601 format. Time units
 *   are strings usable by the moments frameork: years, months, days, hours, minutes, seconds
 */
milestones.browser_charts.format_data_rows = (function milestones$browser_charts$format_data_rows(tasks,schedule_begin,default_units){
var remaining_tasks = tasks;
var formatted_rows = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining_tasks)){
var vec__55665 = cljs.core.first.call(null,remaining_tasks);
var task_id = cljs.core.nth.call(null,vec__55665,(0),null);
var map__55668 = cljs.core.nth.call(null,vec__55665,(1),null);
var map__55668__$1 = ((((!((map__55668 == null)))?((((map__55668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55668):map__55668);
var task_infos = map__55668__$1;
var task_name = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"task-name","task-name",226705458));
var achieved = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"achieved","achieved",-1236312021));
var begin = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var duration = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var duration_unit = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"duration-unit","duration-unit",338651749));
var resource_id = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var predecessors = cljs.core.get.call(null,map__55668__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var time_units = (cljs.core.truth_(duration_unit)?[cljs.core.str(duration_unit),cljs.core.str("s")].join(''):default_units);
var G__55670 = cljs.core.rest.call(null,remaining_tasks);
var G__55671 = cljs.core.conj.call(null,formatted_rows,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(task_id)].join(''),task_name,resource_id,moment(schedule_begin).add((begin - (1)),time_units),moment(schedule_begin).add(((begin + duration) - (1)),time_units),(cljs.core.truth_(duration)?moment.duration(duration,time_units).asMilliseconds():(0)),(((100) * (achieved / duration)) | (0)),((cljs.core.empty_QMARK_.call(null,predecessors))?null:(function (){var p = predecessors;
var p__$1 = cljs.core.interleave.call(null,p,cljs.core.repeat.call(null,","));
var p__$2 = cljs.core.butlast.call(null,p__$1);
return cljs.core.reduce.call(null,cljs.core.str,"",p__$2);
})())], null));
remaining_tasks = G__55670;
formatted_rows = G__55671;
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
milestones.browser_charts.draw_gantt_options_BANG_ = (function milestones$browser_charts$draw_gantt_options_BANG_(options,tasks,schedule_start,default_duration_unit,in_div_id){
var data = (new google.visualization.DataTable());
var gantt_component = (new google.visualization.Gantt(document.getElementById(in_div_id)));
var data_rows = milestones.browser_charts.format_data_rows.call(null,tasks,schedule_start,default_duration_unit);
var G__55673_55674 = data;
G__55673_55674.addColumn("string","Task ID");

G__55673_55674.addColumn("string","Task Name");

G__55673_55674.addColumn("string","Resource");

G__55673_55674.addColumn("date","Start Date");

G__55673_55674.addColumn("date","End Date");

G__55673_55674.addColumn("number","Duration");

G__55673_55674.addColumn("number","Percent Complete");

G__55673_55674.addColumn("string","Dependencies");


data.addRows(data_rows);

return gantt_component.draw(data,options);
});
milestones.browser_charts.draw_gantt_BANG_ = cljs.core.partial.call(null,milestones.browser_charts.draw_gantt_options_BANG_,milestones.browser_charts.chart_options);

//# sourceMappingURL=browser_charts.js.map?rel=1476929160020