// Compiled by ClojureScript 1.9.229 {}
goog.provide('milestones.nlp');
goog.require('cljs.core');
goog.require('milestones.parser_rules');
milestones.nlp.nlp = window.nlp_compromise;
milestones.nlp.lexicon = milestones.nlp.nlp.lexicon();
(milestones.nlp.lexicon["task"] = "Task");
(milestones.nlp.lexicon["tasks"] = "Task");
(milestones.nlp.lexicon["milestone"] = "Milestone");
(milestones.nlp.lexicon["milestones"] = "Milestone");
(milestones.nlp.lexicon["with priority"] = "Priority");
(milestones.nlp.lexicon["in order"] = "InOrder");
(milestones.nlp.lexicon["when"] = "Predecessors");
(milestones.nlp.lexicon["following"] = "Predecessors");
(milestones.nlp.lexicon["after"] = "Predecessors");
milestones.nlp.plural = (function milestones$nlp$plural(txt){
return milestones.nlp.nlp.text(txt);
});
milestones.nlp.pos_tags_lexicon = (function milestones$nlp$pos_tags_lexicon(lexicon,sentence){
var nlp_sentence = milestones.nlp.nlp.sentence(sentence,({"lexicon": lexicon}));
var nlp_terms = nlp_sentence.terms;
return cljs.core.map.call(null,((function (nlp_sentence,nlp_terms){
return (function (term){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.js__GT_clj.call(null,term.text),cljs.core.js__GT_clj.call(null,term.pos,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
});})(nlp_sentence,nlp_terms))
,nlp_terms);
});
milestones.nlp.pos_tags = cljs.core.partial.call(null,milestones.nlp.pos_tags_lexicon,milestones.nlp.lexicon);
milestones.nlp.matches_QMARK_ = (function milestones$nlp$matches_QMARK_(input_item,current_tag_alternatives){
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
milestones.nlp.accept_tag = (function milestones$nlp$accept_tag(input_item,tag_stack){
var temp__4655__auto__ = cljs.core.first.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var current_tag_alternatives = temp__4655__auto__;
if((current_tag_alternatives instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),current_tag_alternatives,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
} else {
if(cljs.core.truth_(milestones.nlp.matches_QMARK_.call(null,input_item,current_tag_alternatives))){
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),tag_stack], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
}
} else {
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
if(cljs.core.truth_(milestones.nlp.matches_QMARK_.call(null,input_item,cljs.core.second.call(null,tag_stack)))){
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
milestones.nlp.fast_forward = (function milestones$nlp$fast_forward(tag_stack){
while(true){
if(cljs.core.seq.call(null,tag_stack)){
if((cljs.core.first.call(null,tag_stack) instanceof cljs.core.Keyword)){
return tag_stack;
} else {
var G__54010 = cljs.core.rest.call(null,tag_stack);
tag_stack = G__54010;
continue;
}
} else {
return null;
}
break;
}
});
milestones.nlp.parse_task_w_a_tag_stack = (function milestones$nlp$parse_task_w_a_tag_stack(task_str,init_tag_stack,optional_steps){
var input_items = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_,(function (p1__54011_SHARP_){
return cljs.core.get.call(null,p1__54011_SHARP_,(1));
})),milestones.nlp.pos_tags.call(null,task_str));
var tag_stack = init_tag_stack;
var output_stack = cljs.core.PersistentArrayMap.EMPTY;
var output = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((cljs.core.seq.call(null,input_items)) && (cljs.core.seq.call(null,tag_stack))){
var input_item = cljs.core.first.call(null,input_items);
var map__54014 = milestones.nlp.accept_tag.call(null,input_item,tag_stack);
var map__54014__$1 = ((((!((map__54014 == null)))?((((map__54014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54014):map__54014);
var accept_QMARK_ = map__54014__$1;
var step = cljs.core.get.call(null,map__54014__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var new_stack = cljs.core.get.call(null,map__54014__$1,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953));
if(cljs.core.truth_(step)){
var G__54016 = input_items;
var G__54017 = new_stack;
var G__54018 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null);
var G__54019 = ((cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))))?output:cljs.core.assoc.call(null,output,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))));
input_items = G__54016;
tag_stack = G__54017;
output_stack = G__54018;
output = G__54019;
continue;
} else {
if(cljs.core.truth_((function (){var and__44157__auto__ = cljs.core.not.call(null,accept_QMARK_);
if(and__44157__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124))], true),optional_steps);
} else {
return and__44157__auto__;
}
})())){
var temp__4655__auto__ = milestones.nlp.fast_forward.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var ffw_stack = temp__4655__auto__;
var G__54020 = input_items;
var G__54021 = ffw_stack;
var G__54022 = output_stack;
var G__54023 = output;
input_items = G__54020;
tag_stack = G__54021;
output_stack = G__54022;
output = G__54023;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
}
} else {
if(cljs.core.not.call(null,accept_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"output","output",-1105869043),output,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
} else {
var G__54024 = cljs.core.rest.call(null,input_items);
var G__54025 = new_stack;
var G__54026 = (cljs.core.truth_(milestones.parser_rules.item_significant_value_QMARK_.call(null,input_item,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124))))?cljs.core.merge_with.call(null,cljs.core.conj,output_stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,input_item,(0))], null)):output_stack);
var G__54027 = output;
input_items = G__54024;
tag_stack = G__54025;
output_stack = G__54026;
output = G__54027;
continue;

}
}
}
} else {
if(cljs.core.truth_((function (){var or__44169__auto__ = (cljs.core.empty_QMARK_.call(null,input_items)) && (cljs.core.empty_QMARK_.call(null,tag_stack));
if(or__44169__auto__){
return or__44169__auto__;
} else {
var or__44169__auto____$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.first.call(null,tag_stack)], true),optional_steps);
if(cljs.core.truth_(or__44169__auto____$1)){
return or__44169__auto____$1;
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
milestones.nlp.parse_tags_rules = (function milestones$nlp$parse_tags_rules(rules,sentence,optional_steps){
var rem_rules = rules;
var errors = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,rem_rules)){
var cur_rule = cljs.core.first.call(null,rem_rules);
var cur_parse_result = milestones.nlp.parse_task_w_a_tag_stack.call(null,sentence,cur_rule,optional_steps);
var temp__4655__auto__ = cljs.core.get.call(null,cur_parse_result,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
var G__54028 = cljs.core.rest.call(null,rem_rules);
var G__54029 = cljs.core.conj.call(null,errors,err);
rem_rules = G__54028;
errors = G__54029;
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
milestones.nlp.parse_tags = cljs.core.partial.call(null,milestones.nlp.parse_tags_rules,milestones.parser_rules.rules);
/**
 * Curates generated tasks : 1,2,3... => [1 2 3]
 *   [d] -> d, [5] -> 5
 */
milestones.nlp.curate_task = (function milestones$nlp$curate_task(a_task){
var map__54033 = a_task;
var map__54033__$1 = ((((!((map__54033 == null)))?((((map__54033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54033):map__54033);
var task_id = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var task_name = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"task-name","task-name",226705458));
var resource_id = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var duration = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var predecessors = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var priority = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var milestone_id = cljs.core.get.call(null,map__54033__$1,new cljs.core.Keyword(null,"milestone-id","milestone-id",1545673291));
var regN = RegExp("\\d+","g");
var actual_task_id = (cljs.core.truth_(task_id)?parseInt(cljs.core.get.call(null,task_id,(0))):parseInt(cljs.core.get.call(null,milestone_id,(0))));
var output = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"taskname","taskname",442191359),cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,task_name,cljs.core.repeat.call(null," "))),new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),cljs.core.get.call(null,resource_id,(0)),new cljs.core.Keyword(null,"priority","priority",1431093715),parseInt(cljs.core.get.call(null,priority,(0))),new cljs.core.Keyword(null,"duration","duration",1444101068),parseInt(milestones.nlp.nlp.value(cljs.core.get.call(null,duration,(0))).number),new cljs.core.Keyword(null,"duration-unit","duration-unit",338651749),milestones.nlp.nlp.value(cljs.core.get.call(null,duration,(0))).unit,new cljs.core.Keyword(null,"predecessors","predecessors",229913357),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,isNaN),cljs.core.map.call(null,parseInt,cljs.core.mapcat.call(null,((function (map__54033,map__54033__$1,task_id,task_name,resource_id,duration,predecessors,priority,milestone_id,regN,actual_task_id){
return (function (p1__54030_SHARP_){
return p1__54030_SHARP_.match(regN);
});})(map__54033,map__54033__$1,task_id,task_name,resource_id,duration,predecessors,priority,milestone_id,regN,actual_task_id))
,predecessors))))], null);
return cljs.core.PersistentArrayMap.fromArray([actual_task_id,(cljs.core.truth_(milestone_id)?cljs.core.assoc.call(null,output,new cljs.core.Keyword(null,"is-milestone","is-milestone",-841886209),true):output)], true, false);
});
milestones.nlp.guess_tasks = (function milestones$nlp$guess_tasks(a_task_desc,optional_steps){
var the_task = milestones.nlp.parse_tags.call(null,a_task_desc,optional_steps);
if(cljs.core.truth_(cljs.core.get.call(null,the_task,new cljs.core.Keyword(null,"errors","errors",-908790718)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"unable-to-parse","unable-to-parse",-856410632)], null);
} else {
return milestones.nlp.curate_task.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(the_task));
}
});

//# sourceMappingURL=nlp.js.map?rel=1476887393125