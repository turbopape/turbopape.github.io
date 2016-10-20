// Compiled by ClojureScript 1.9.293 {}
goog.provide('milestones.graph_utilities');
goog.require('cljs.core');
/**
 * return true if all predecessors of this task
 *   exist or if this task has no preds
 */
milestones.graph_utilities.predecessors_of_task_exist_QMARK_ = (function milestones$graph_utilities$predecessors_of_task_exist_QMARK_(tasks,the_task){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core.set.call(null,cljs.core.keys.call(null,tasks))),new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(the_task));
});
/**
 * return true if this task has preds
 */
milestones.graph_utilities.task_has_predecessors_QMARK_ = (function milestones$graph_utilities$task_has_predecessors_QMARK_(the_task){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(the_task));
});
/**
 * a utility function, given 1 + [ 2 3] returns [1 2], [1 3]
 */
milestones.graph_utilities.gen_precendence_edge = (function milestones$graph_utilities$gen_precendence_edge(task_id,predecessors){
return cljs.core.mapv.call(null,(function (predecessor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_id,predecessor], null);
}),predecessors);
});
/**
 * Given tasks, computes all the edges present in this graph
 */
milestones.graph_utilities.gen_all_precedence_edges = (function milestones$graph_utilities$gen_all_precedence_edges(tasks){
var raw_maps = cljs.core.map.call(null,(function (p__55685){
var vec__55686 = p__55685;
var k = cljs.core.nth.call(null,vec__55686,(0),null);
var v = cljs.core.nth.call(null,vec__55686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(v)], null);
}),tasks);
return cljs.core.mapcat.call(null,((function (raw_maps){
return (function (p__55689){
var vec__55690 = p__55689;
var k = cljs.core.nth.call(null,vec__55690,(0),null);
var v = cljs.core.nth.call(null,vec__55690,(1),null);
return milestones.graph_utilities.gen_precendence_edge.call(null,k,v);
});})(raw_maps))
,raw_maps);
});
milestones.graph_utilities.vertices = (function milestones$graph_utilities$vertices(edges){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.identity,edges));
});
milestones.graph_utilities.successors = (function milestones$graph_utilities$successors(vertex,edges){
return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,vertex),cljs.core.first),edges));
});
/**
 * Uses [Tarjan]((https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)'s
 *   strongly connectect components algorithm to find if there are any
 *   cycles in a graph
 */
milestones.graph_utilities.graph_cycles = (function milestones$graph_utilities$graph_cycles(edges){
var index = cljs.core.atom.call(null,(0));
var indices = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var lowlinks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var S = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var output = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var strong_connect = ((function (index,indices,lowlinks,S,output){
return (function milestones$graph_utilities$graph_cycles_$_strong_connect(v){
cljs.core.swap_BANG_.call(null,indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.deref.call(null,index));

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.deref.call(null,index));

cljs.core.swap_BANG_.call(null,index,cljs.core.inc);

cljs.core.swap_BANG_.call(null,S,cljs.core.conj,v);

var succs = milestones.graph_utilities.successors.call(null,v,edges);
var seq__55725_55733 = cljs.core.seq.call(null,succs);
var chunk__55726_55734 = null;
var count__55727_55735 = (0);
var i__55728_55736 = (0);
while(true){
if((i__55728_55736 < count__55727_55735)){
var w_55737 = cljs.core._nth.call(null,chunk__55726_55734,i__55728_55736);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_55737))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_55737);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_55737);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_55737], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_55737);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
}
}

var G__55738 = seq__55725_55733;
var G__55739 = chunk__55726_55734;
var G__55740 = count__55727_55735;
var G__55741 = (i__55728_55736 + (1));
seq__55725_55733 = G__55738;
chunk__55726_55734 = G__55739;
count__55727_55735 = G__55740;
i__55728_55736 = G__55741;
continue;
} else {
var temp__4657__auto___55742 = cljs.core.seq.call(null,seq__55725_55733);
if(temp__4657__auto___55742){
var seq__55725_55743__$1 = temp__4657__auto___55742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55725_55743__$1)){
var c__45081__auto___55744 = cljs.core.chunk_first.call(null,seq__55725_55743__$1);
var G__55745 = cljs.core.chunk_rest.call(null,seq__55725_55743__$1);
var G__55746 = c__45081__auto___55744;
var G__55747 = cljs.core.count.call(null,c__45081__auto___55744);
var G__55748 = (0);
seq__55725_55733 = G__55745;
chunk__55726_55734 = G__55746;
count__55727_55735 = G__55747;
i__55728_55736 = G__55748;
continue;
} else {
var w_55749 = cljs.core.first.call(null,seq__55725_55743__$1);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_55749))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_55749);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_55749);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_55749], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_55749);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
}
}

var G__55750 = cljs.core.next.call(null,seq__55725_55743__$1);
var G__55751 = null;
var G__55752 = (0);
var G__55753 = (0);
seq__55725_55733 = G__55750;
chunk__55726_55734 = G__55751;
count__55727_55735 = G__55752;
i__55728_55736 = G__55753;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v),cljs.core.get.call(null,cljs.core.deref.call(null,indices),v))){
var w = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var r = cljs.core.PersistentVector.EMPTY;
while(true){
cljs.core.swap_BANG_.call(null,S,cljs.core.pop);

if(!(cljs.core._EQ_.call(null,v,w))){
var G__55754 = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var G__55755 = cljs.core.conj.call(null,r,w);
w = G__55754;
r = G__55755;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,r)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,output,cljs.core.conj,cljs.core.conj.call(null,r,w));
}
}
break;
}
} else {
return null;
}
});})(index,indices,lowlinks,S,output))
;
var seq__55729_55756 = cljs.core.seq.call(null,milestones.graph_utilities.vertices.call(null,edges));
var chunk__55730_55757 = null;
var count__55731_55758 = (0);
var i__55732_55759 = (0);
while(true){
if((i__55732_55759 < count__55731_55758)){
var v_55760 = cljs.core._nth.call(null,chunk__55730_55757,i__55732_55759);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_55760))){
} else {
strong_connect.call(null,v_55760);
}

var G__55761 = seq__55729_55756;
var G__55762 = chunk__55730_55757;
var G__55763 = count__55731_55758;
var G__55764 = (i__55732_55759 + (1));
seq__55729_55756 = G__55761;
chunk__55730_55757 = G__55762;
count__55731_55758 = G__55763;
i__55732_55759 = G__55764;
continue;
} else {
var temp__4657__auto___55765 = cljs.core.seq.call(null,seq__55729_55756);
if(temp__4657__auto___55765){
var seq__55729_55766__$1 = temp__4657__auto___55765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55729_55766__$1)){
var c__45081__auto___55767 = cljs.core.chunk_first.call(null,seq__55729_55766__$1);
var G__55768 = cljs.core.chunk_rest.call(null,seq__55729_55766__$1);
var G__55769 = c__45081__auto___55767;
var G__55770 = cljs.core.count.call(null,c__45081__auto___55767);
var G__55771 = (0);
seq__55729_55756 = G__55768;
chunk__55730_55757 = G__55769;
count__55731_55758 = G__55770;
i__55732_55759 = G__55771;
continue;
} else {
var v_55772 = cljs.core.first.call(null,seq__55729_55766__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_55772))){
} else {
strong_connect.call(null,v_55772);
}

var G__55773 = cljs.core.next.call(null,seq__55729_55766__$1);
var G__55774 = null;
var G__55775 = (0);
var G__55776 = (0);
seq__55729_55756 = G__55773;
chunk__55730_55757 = G__55774;
count__55731_55758 = G__55775;
i__55732_55759 = G__55776;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,output);
});

//# sourceMappingURL=graph_utilities.js.map?rel=1476929160151