// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__55950__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__55950__auto__,"add").call(o__55950__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__55950__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__55950__auto__,"delete").call(o__55950__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__55950__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__55950__auto__,"has").call(o__55950__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__58816 = data;
var target__55969__auto__ = G__58816;
if(cljs.core.truth_(target__55969__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__58816)].join('')),cljs.core.str("\n"),cljs.core.str("target__55969__auto__")].join('')));
}

goog.object.set(target__55969__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__58816;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_58825 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_58825);
} else {
var seq__58821_58826 = cljs.core.seq.call(null,json_ml);
var chunk__58822_58827 = null;
var count__58823_58828 = (0);
var i__58824_58829 = (0);
while(true){
if((i__58824_58829 < count__58823_58828)){
var item_58830 = cljs.core._nth.call(null,chunk__58822_58827,i__58824_58829);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_58830,new_depth_budget_58825);

var G__58831 = seq__58821_58826;
var G__58832 = chunk__58822_58827;
var G__58833 = count__58823_58828;
var G__58834 = (i__58824_58829 + (1));
seq__58821_58826 = G__58831;
chunk__58822_58827 = G__58832;
count__58823_58828 = G__58833;
i__58824_58829 = G__58834;
continue;
} else {
var temp__4657__auto___58835 = cljs.core.seq.call(null,seq__58821_58826);
if(temp__4657__auto___58835){
var seq__58821_58836__$1 = temp__4657__auto___58835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58821_58836__$1)){
var c__45081__auto___58837 = cljs.core.chunk_first.call(null,seq__58821_58836__$1);
var G__58838 = cljs.core.chunk_rest.call(null,seq__58821_58836__$1);
var G__58839 = c__45081__auto___58837;
var G__58840 = cljs.core.count.call(null,c__45081__auto___58837);
var G__58841 = (0);
seq__58821_58826 = G__58838;
chunk__58822_58827 = G__58839;
count__58823_58828 = G__58840;
i__58824_58829 = G__58841;
continue;
} else {
var item_58842 = cljs.core.first.call(null,seq__58821_58836__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_58842,new_depth_budget_58825);

var G__58843 = cljs.core.next.call(null,seq__58821_58836__$1);
var G__58844 = null;
var G__58845 = (0);
var G__58846 = (0);
seq__58821_58826 = G__58843;
chunk__58822_58827 = G__58844;
count__58823_58828 = G__58845;
i__58824_58829 = G__58846;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__44267__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1476916486392