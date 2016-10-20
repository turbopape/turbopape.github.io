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
var raw_maps = cljs.core.map.call(null,(function (p__55845){
var vec__55846 = p__55845;
var k = cljs.core.nth.call(null,vec__55846,(0),null);
var v = cljs.core.nth.call(null,vec__55846,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(v)], null);
}),tasks);
return cljs.core.mapcat.call(null,((function (raw_maps){
return (function (p__55849){
var vec__55850 = p__55849;
var k = cljs.core.nth.call(null,vec__55850,(0),null);
var v = cljs.core.nth.call(null,vec__55850,(1),null);
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
var seq__55885_55893 = cljs.core.seq.call(null,succs);
var chunk__55886_55894 = null;
var count__55887_55895 = (0);
var i__55888_55896 = (0);
while(true){
if((i__55888_55896 < count__55887_55895)){
var w_55897 = cljs.core._nth.call(null,chunk__55886_55894,i__55888_55896);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_55897))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_55897);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_55897);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_55897], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_55897);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
}
}

var G__55898 = seq__55885_55893;
var G__55899 = chunk__55886_55894;
var G__55900 = count__55887_55895;
var G__55901 = (i__55888_55896 + (1));
seq__55885_55893 = G__55898;
chunk__55886_55894 = G__55899;
count__55887_55895 = G__55900;
i__55888_55896 = G__55901;
continue;
} else {
var temp__4657__auto___55902 = cljs.core.seq.call(null,seq__55885_55893);
if(temp__4657__auto___55902){
var seq__55885_55903__$1 = temp__4657__auto___55902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55885_55903__$1)){
var c__45081__auto___55904 = cljs.core.chunk_first.call(null,seq__55885_55903__$1);
var G__55905 = cljs.core.chunk_rest.call(null,seq__55885_55903__$1);
var G__55906 = c__45081__auto___55904;
var G__55907 = cljs.core.count.call(null,c__45081__auto___55904);
var G__55908 = (0);
seq__55885_55893 = G__55905;
chunk__55886_55894 = G__55906;
count__55887_55895 = G__55907;
i__55888_55896 = G__55908;
continue;
} else {
var w_55909 = cljs.core.first.call(null,seq__55885_55903__$1);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_55909))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_55909);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_55909);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_55909], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44605__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44606__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_55909);
return ((x__44605__auto__ < y__44606__auto__) ? x__44605__auto__ : y__44606__auto__);
})());
} else {
}
}

var G__55910 = cljs.core.next.call(null,seq__55885_55903__$1);
var G__55911 = null;
var G__55912 = (0);
var G__55913 = (0);
seq__55885_55893 = G__55910;
chunk__55886_55894 = G__55911;
count__55887_55895 = G__55912;
i__55888_55896 = G__55913;
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
var G__55914 = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var G__55915 = cljs.core.conj.call(null,r,w);
w = G__55914;
r = G__55915;
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
var seq__55889_55916 = cljs.core.seq.call(null,milestones.graph_utilities.vertices.call(null,edges));
var chunk__55890_55917 = null;
var count__55891_55918 = (0);
var i__55892_55919 = (0);
while(true){
if((i__55892_55919 < count__55891_55918)){
var v_55920 = cljs.core._nth.call(null,chunk__55890_55917,i__55892_55919);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_55920))){
} else {
strong_connect.call(null,v_55920);
}

var G__55921 = seq__55889_55916;
var G__55922 = chunk__55890_55917;
var G__55923 = count__55891_55918;
var G__55924 = (i__55892_55919 + (1));
seq__55889_55916 = G__55921;
chunk__55890_55917 = G__55922;
count__55891_55918 = G__55923;
i__55892_55919 = G__55924;
continue;
} else {
var temp__4657__auto___55925 = cljs.core.seq.call(null,seq__55889_55916);
if(temp__4657__auto___55925){
var seq__55889_55926__$1 = temp__4657__auto___55925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55889_55926__$1)){
var c__45081__auto___55927 = cljs.core.chunk_first.call(null,seq__55889_55926__$1);
var G__55928 = cljs.core.chunk_rest.call(null,seq__55889_55926__$1);
var G__55929 = c__45081__auto___55927;
var G__55930 = cljs.core.count.call(null,c__45081__auto___55927);
var G__55931 = (0);
seq__55889_55916 = G__55928;
chunk__55890_55917 = G__55929;
count__55891_55918 = G__55930;
i__55892_55919 = G__55931;
continue;
} else {
var v_55932 = cljs.core.first.call(null,seq__55889_55926__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_55932))){
} else {
strong_connect.call(null,v_55932);
}

var G__55933 = cljs.core.next.call(null,seq__55889_55926__$1);
var G__55934 = null;
var G__55935 = (0);
var G__55936 = (0);
seq__55889_55916 = G__55933;
chunk__55890_55917 = G__55934;
count__55891_55918 = G__55935;
i__55892_55919 = G__55936;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,output);
});

//# sourceMappingURL=graph_utilities.js.map?rel=1476916479372