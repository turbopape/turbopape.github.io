// Compiled by ClojureScript 1.9.293 {}
goog.provide('milestones.core');
goog.require('cljs.core');
goog.require('milestones.dyna_scheduler');
goog.require('milestones.nlp_tools');
goog.require('milestones.browser_charts');
goog.require('dommy.core');
goog.require('goog.dom');
goog.require('goog.events');
milestones.core.schedule_btn = goog.dom.getElement("schedule");
milestones.core.error_zone = document.querySelector("body #portfolio #dzone");
milestones.core.schedule_and_show_BANG_ = (function milestones$core$schedule_and_show_BANG_(schedule_start,default_duration_unit,in_div_id){
var tasks_str = document.getElementById("default-template").value;
var tasks = milestones.nlp_tools.guess_tasks_from_str.call(null,tasks_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"predecessors","predecessors",229913357),new cljs.core.Keyword(null,"priority","priority",1431093715)], null));
var scheduled = milestones.dyna_scheduler.schedule.call(null,tasks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"priority","priority",1431093715)], null));
var temp__4655__auto__ = cljs.core.get.call(null,scheduled,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
console.error(err);

return dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,milestones.core.error_zone,"Couldn't schedule... plz retry !"),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399));
} else {
dommy.core.add_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,milestones.core.error_zone,"Successfully scheduled!"),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399)),new cljs.core.Keyword(null,"alert-success","alert-success",-1764385150));

return milestones.browser_charts.draw_gantt_BANG_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(scheduled),schedule_start,default_duration_unit,in_div_id);
}
});
goog.events.listen(milestones.core.schedule_btn,"click",(function (){
return milestones.core.schedule_and_show_BANG_.call(null,moment().format(),"hours","gantt-chart");
}));

//# sourceMappingURL=core.js.map?rel=1476929161774