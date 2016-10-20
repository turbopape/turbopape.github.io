// Compiled by ClojureScript 1.9.293 {}
goog.provide('milestones.nlp_tools');
goog.require('cljs.core');
goog.require('milestones.parser_rules');
milestones.nlp_tools.nlp = window.nlp_compromise;
milestones.nlp_tools.lexicon = milestones.nlp_tools.nlp.lexicon();
(milestones.nlp_tools.lexicon["task"] = "Task");
(milestones.nlp_tools.lexicon["tasks"] = "Task");
(milestones.nlp_tools.lexicon["milestone"] = "Milestone");
(milestones.nlp_tools.lexicon["milestones"] = "Milestone");
(milestones.nlp_tools.lexicon["with priority"] = "Priority");
(milestones.nlp_tools.lexicon["in order"] = "InOrder");
(milestones.nlp_tools.lexicon["when"] = "Predecessors");
(milestones.nlp_tools.lexicon["following"] = "Predecessors");
(milestones.nlp_tools.lexicon["after"] = "Predecessors");
milestones.nlp_tools.plural = (function milestones$nlp_tools$plural(txt){
return milestones.nlp_tools.nlp.text(txt);
});
milestones.nlp_tools.pos_tags_lexicon = (function milestones$nlp_tools$pos_tags_lexicon(lexicon,sentence){
var nlp_terms = sentence.terms;
return cljs.core.map.call(null,((function (nlp_terms){
return (function (term){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.js__GT_clj.call(null,term.text),cljs.core.js__GT_clj.call(null,term.pos,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
});})(nlp_terms))
,nlp_terms);
});
milestones.nlp_tools.pos_tags = cljs.core.partial.call(null,milestones.nlp_tools.pos_tags_lexicon,milestones.nlp_tools.lexicon);
milestones.nlp_tools.matches_QMARK_ = (function milestones$nlp_tools$matches_QMARK_(input_item,current_tag_alternatives){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([(function (){var i = input_item;
var i__$1 = cljs.core.get.call(null,i,(1));
return cljs.core.set.call(null,cljs.core.keys.call(null,i__$1));
})()], true),current_tag_alternatives);
});
/**
 * Verifies if an input like: ["task" {:Noun true}] correponds to
 *   one of the keys stored in the head of tag-stack, which would be an
 *   element like #{ :multi #{:Noun Value...}}, or if it is a checkpoint,
 *   to notify the caller to construct a part of the task. the :star in a
 *   head of stack means that this token can be met multiple times,
 *   causing the stack to keep it when ever we find an item corresponding
 *   to it, or consuming it an moving forward if the element correspond
 *   to the next status.
 */
milestones.nlp_tools.accept_tag = (function milestones$nlp_tools$accept_tag(input_item,tag_stack){
var temp__4655__auto__ = cljs.core.first.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var current_tag_alternatives = temp__4655__auto__;
if((current_tag_alternatives instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),current_tag_alternatives,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
} else {
if(cljs.core.truth_(milestones.nlp_tools.matches_QMARK_.call(null,input_item,current_tag_alternatives))){
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),tag_stack], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
}
} else {
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
if(cljs.core.truth_(milestones.nlp_tools.matches_QMARK_.call(null,input_item,cljs.core.second.call(null,tag_stack)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,cljs.core.rest.call(null,tag_stack))], null);
} else {
return false;
}
} else {
return false;

}
}
}
} else {
return false;
}
});
/**
 * Goes FFW in a tag-stack until it finds a step specification. 
 */
milestones.nlp_tools.fast_forward = (function milestones$nlp_tools$fast_forward(tag_stack){
while(true){
if(cljs.core.seq.call(null,tag_stack)){
if((cljs.core.first.call(null,tag_stack) instanceof cljs.core.Keyword)){
return tag_stack;
} else {
var G__55476 = cljs.core.rest.call(null,tag_stack);
tag_stack = G__55476;
continue;
}
} else {
return null;
}
break;
}
});
milestones.nlp_tools.parse_task_w_a_tag_stack = (function milestones$nlp_tools$parse_task_w_a_tag_stack(sentence,init_tag_stack,optional_steps){
var input_items = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_,(function (p1__55477_SHARP_){
return cljs.core.get.call(null,p1__55477_SHARP_,(1));
})),milestones.nlp_tools.pos_tags.call(null,sentence));
var tag_stack = init_tag_stack;
var output_stack = cljs.core.PersistentArrayMap.EMPTY;
var output = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((cljs.core.seq.call(null,input_items)) && (cljs.core.seq.call(null,tag_stack))){
var input_item = cljs.core.first.call(null,input_items);
var map__55480 = milestones.nlp_tools.accept_tag.call(null,input_item,tag_stack);
var map__55480__$1 = ((((!((map__55480 == null)))?((((map__55480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55480):map__55480);
var accept_QMARK_ = map__55480__$1;
var step = cljs.core.get.call(null,map__55480__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var new_stack = cljs.core.get.call(null,map__55480__$1,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953));
if(cljs.core.truth_(step)){
var G__55482 = input_items;
var G__55483 = new_stack;
var G__55484 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null);
var G__55485 = ((cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))))?output:cljs.core.assoc.call(null,output,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))));
input_items = G__55482;
tag_stack = G__55483;
output_stack = G__55484;
output = G__55485;
continue;
} else {
if(cljs.core.truth_((function (){var and__44255__auto__ = cljs.core.not.call(null,accept_QMARK_);
if(and__44255__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124))], true),optional_steps);
} else {
return and__44255__auto__;
}
})())){
var temp__4655__auto__ = milestones.nlp_tools.fast_forward.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var ffw_stack = temp__4655__auto__;
var G__55486 = input_items;
var G__55487 = ffw_stack;
var G__55488 = output_stack;
var G__55489 = output;
input_items = G__55486;
tag_stack = G__55487;
output_stack = G__55488;
output = G__55489;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
}
} else {
if(cljs.core.not.call(null,accept_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"output","output",-1105869043),output,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
} else {
var G__55490 = cljs.core.rest.call(null,input_items);
var G__55491 = new_stack;
var G__55492 = (cljs.core.truth_(milestones.parser_rules.item_significant_value_QMARK_.call(null,input_item,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124))))?cljs.core.merge_with.call(null,cljs.core.conj,output_stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,input_item,(0))], null)):output_stack);
var G__55493 = output;
input_items = G__55490;
tag_stack = G__55491;
output_stack = G__55492;
output = G__55493;
continue;

}
}
}
} else {
if(cljs.core.truth_((function (){var or__44267__auto__ = (cljs.core.empty_QMARK_.call(null,input_items)) && (cljs.core.empty_QMARK_.call(null,tag_stack));
if(or__44267__auto__){
return or__44267__auto__;
} else {
var or__44267__auto____$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.first.call(null,tag_stack)], true),optional_steps);
if(cljs.core.truth_(or__44267__auto____$1)){
return or__44267__auto____$1;
} else {
return cljs.core.contains_QMARK_.call(null,cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"multi","multi",-190293005));
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.call(null,output,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938)))], null);
} else {
if(!(cljs.core.empty_QMARK_.call(null,input_items))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Unable to consume all input.",new cljs.core.Keyword(null,"input","input",556931961),input_items], null);
} else {
if(!(cljs.core.empty_QMARK_.call(null,tag_stack))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Input does not fulfill all of the tag-stack states.",new cljs.core.Keyword(null,"tag-stask","tag-stask",2060095335),tag_stack], null);
} else {
return null;
}
}
}
}
break;
}
});
/**
 * Tries to parse the sentence according to rules (tag stacks). If it finds a
 *   match, will return it. else, it'll return the errors it found
 */
milestones.nlp_tools.parse_tags_rules = (function milestones$nlp_tools$parse_tags_rules(rules,sentence,optional_steps){
var rem_rules = rules;
var errors = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,rem_rules)){
var cur_rule = cljs.core.first.call(null,rem_rules);
var cur_parse_result = milestones.nlp_tools.parse_task_w_a_tag_stack.call(null,sentence,cur_rule,optional_steps);
var temp__4655__auto__ = cljs.core.get.call(null,cur_parse_result,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
var G__55494 = cljs.core.rest.call(null,rem_rules);
var G__55495 = cljs.core.conj.call(null,errors,err);
rem_rules = G__55494;
errors = G__55495;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),null,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.get.call(null,cur_parse_result,new cljs.core.Keyword(null,"result","result",1415092211))], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
}
break;
}
});
milestones.nlp_tools.parse_tags = cljs.core.partial.call(null,milestones.nlp_tools.parse_tags_rules,milestones.parser_rules.rules);
/**
 * Curates generated tasks : 1,2,3... => [1 2 3]
 *   [d] -> d, [5] -> 5
 */
milestones.nlp_tools.curate_task = (function milestones$nlp_tools$curate_task(a_task){
var map__55499 = a_task;
var map__55499__$1 = ((((!((map__55499 == null)))?((((map__55499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55499):map__55499);
var task_id = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var task_name = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"task-name","task-name",226705458));
var resource_id = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var duration = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var predecessors = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var priority = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var milestone_id = cljs.core.get.call(null,map__55499__$1,new cljs.core.Keyword(null,"milestone-id","milestone-id",1545673291));
var regN = RegExp("\\d+","g");
var regPnt = (new RegExp("[.,\\/\\#!$%\\^&\\*;:{}=\\-_`~()]","g"));
var clean_duration = (cljs.core.truth_(duration)?cljs.core.get.call(null,duration,(0)).replace(regPnt,""):null);
var _ = cljs.core.println.call(null,"durtion",duration,", clean duration:",clean_duration);
var actual_task_id = (cljs.core.truth_(task_id)?parseInt(cljs.core.get.call(null,task_id,(0))):parseInt(cljs.core.get.call(null,milestone_id,(0))));
var output = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"task-name","task-name",226705458),cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,task_name,cljs.core.repeat.call(null," "))),new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),cljs.core.get.call(null,resource_id,(0)),new cljs.core.Keyword(null,"priority","priority",1431093715),parseInt(cljs.core.get.call(null,priority,(0))),new cljs.core.Keyword(null,"duration","duration",1444101068),parseInt(milestones.nlp_tools.nlp.value(clean_duration).number),new cljs.core.Keyword(null,"duration-unit","duration-unit",338651749),milestones.nlp_tools.nlp.value(clean_duration).unit,new cljs.core.Keyword(null,"predecessors","predecessors",229913357),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,isNaN),cljs.core.map.call(null,parseInt,cljs.core.mapcat.call(null,((function (map__55499,map__55499__$1,task_id,task_name,resource_id,duration,predecessors,priority,milestone_id,regN,regPnt,clean_duration,_,actual_task_id){
return (function (p1__55496_SHARP_){
return p1__55496_SHARP_.match(regN);
});})(map__55499,map__55499__$1,task_id,task_name,resource_id,duration,predecessors,priority,milestone_id,regN,regPnt,clean_duration,_,actual_task_id))
,predecessors))))], null);
return cljs.core.PersistentArrayMap.fromArray([actual_task_id,(cljs.core.truth_(milestone_id)?cljs.core.assoc.call(null,output,new cljs.core.Keyword(null,"is-milestone","is-milestone",-841886209),true):output)], true, false);
});
milestones.nlp_tools.guess_a_task = (function milestones$nlp_tools$guess_a_task(sentence,optional_steps){
var the_task = milestones.nlp_tools.parse_tags.call(null,sentence,optional_steps);
if(cljs.core.truth_(cljs.core.get.call(null,the_task,new cljs.core.Keyword(null,"errors","errors",-908790718)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"unable-to-parse","unable-to-parse",-856410632)], null);
} else {
return milestones.nlp_tools.curate_task.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(the_task));
}
});
milestones.nlp_tools.guess_tasks_from_str = (function milestones$nlp_tools$guess_tasks_from_str(tasks_str,optional_steps){
var sentences = milestones.nlp_tools.nlp.text(tasks_str).sentences;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (sentences){
return (function (p1__55501_SHARP_){
return milestones.nlp_tools.guess_a_task.call(null,p1__55501_SHARP_,optional_steps);
});})(sentences))
,sentences));
});

//# sourceMappingURL=nlp_tools.js.map?rel=1476925833902