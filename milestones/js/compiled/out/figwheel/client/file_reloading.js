// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44267__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44267__auto__){
return or__44267__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44267__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50449_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50449_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__50454 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50455 = null;
var count__50456 = (0);
var i__50457 = (0);
while(true){
if((i__50457 < count__50456)){
var n = cljs.core._nth.call(null,chunk__50455,i__50457);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50458 = seq__50454;
var G__50459 = chunk__50455;
var G__50460 = count__50456;
var G__50461 = (i__50457 + (1));
seq__50454 = G__50458;
chunk__50455 = G__50459;
count__50456 = G__50460;
i__50457 = G__50461;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50454);
if(temp__4657__auto__){
var seq__50454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50454__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__50454__$1);
var G__50462 = cljs.core.chunk_rest.call(null,seq__50454__$1);
var G__50463 = c__45081__auto__;
var G__50464 = cljs.core.count.call(null,c__45081__auto__);
var G__50465 = (0);
seq__50454 = G__50462;
chunk__50455 = G__50463;
count__50456 = G__50464;
i__50457 = G__50465;
continue;
} else {
var n = cljs.core.first.call(null,seq__50454__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50466 = cljs.core.next.call(null,seq__50454__$1);
var G__50467 = null;
var G__50468 = (0);
var G__50469 = (0);
seq__50454 = G__50466;
chunk__50455 = G__50467;
count__50456 = G__50468;
i__50457 = G__50469;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__50520_50531 = cljs.core.seq.call(null,deps);
var chunk__50521_50532 = null;
var count__50522_50533 = (0);
var i__50523_50534 = (0);
while(true){
if((i__50523_50534 < count__50522_50533)){
var dep_50535 = cljs.core._nth.call(null,chunk__50521_50532,i__50523_50534);
topo_sort_helper_STAR_.call(null,dep_50535,(depth + (1)),state);

var G__50536 = seq__50520_50531;
var G__50537 = chunk__50521_50532;
var G__50538 = count__50522_50533;
var G__50539 = (i__50523_50534 + (1));
seq__50520_50531 = G__50536;
chunk__50521_50532 = G__50537;
count__50522_50533 = G__50538;
i__50523_50534 = G__50539;
continue;
} else {
var temp__4657__auto___50540 = cljs.core.seq.call(null,seq__50520_50531);
if(temp__4657__auto___50540){
var seq__50520_50541__$1 = temp__4657__auto___50540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50520_50541__$1)){
var c__45081__auto___50542 = cljs.core.chunk_first.call(null,seq__50520_50541__$1);
var G__50543 = cljs.core.chunk_rest.call(null,seq__50520_50541__$1);
var G__50544 = c__45081__auto___50542;
var G__50545 = cljs.core.count.call(null,c__45081__auto___50542);
var G__50546 = (0);
seq__50520_50531 = G__50543;
chunk__50521_50532 = G__50544;
count__50522_50533 = G__50545;
i__50523_50534 = G__50546;
continue;
} else {
var dep_50547 = cljs.core.first.call(null,seq__50520_50541__$1);
topo_sort_helper_STAR_.call(null,dep_50547,(depth + (1)),state);

var G__50548 = cljs.core.next.call(null,seq__50520_50541__$1);
var G__50549 = null;
var G__50550 = (0);
var G__50551 = (0);
seq__50520_50531 = G__50548;
chunk__50521_50532 = G__50549;
count__50522_50533 = G__50550;
i__50523_50534 = G__50551;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50524){
var vec__50528 = p__50524;
var seq__50529 = cljs.core.seq.call(null,vec__50528);
var first__50530 = cljs.core.first.call(null,seq__50529);
var seq__50529__$1 = cljs.core.next.call(null,seq__50529);
var x = first__50530;
var xs = seq__50529__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50528,seq__50529,first__50530,seq__50529__$1,x,xs,get_deps__$1){
return (function (p1__50470_SHARP_){
return clojure.set.difference.call(null,p1__50470_SHARP_,x);
});})(vec__50528,seq__50529,first__50530,seq__50529__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__50564 = cljs.core.seq.call(null,provides);
var chunk__50565 = null;
var count__50566 = (0);
var i__50567 = (0);
while(true){
if((i__50567 < count__50566)){
var prov = cljs.core._nth.call(null,chunk__50565,i__50567);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50568_50576 = cljs.core.seq.call(null,requires);
var chunk__50569_50577 = null;
var count__50570_50578 = (0);
var i__50571_50579 = (0);
while(true){
if((i__50571_50579 < count__50570_50578)){
var req_50580 = cljs.core._nth.call(null,chunk__50569_50577,i__50571_50579);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50580,prov);

var G__50581 = seq__50568_50576;
var G__50582 = chunk__50569_50577;
var G__50583 = count__50570_50578;
var G__50584 = (i__50571_50579 + (1));
seq__50568_50576 = G__50581;
chunk__50569_50577 = G__50582;
count__50570_50578 = G__50583;
i__50571_50579 = G__50584;
continue;
} else {
var temp__4657__auto___50585 = cljs.core.seq.call(null,seq__50568_50576);
if(temp__4657__auto___50585){
var seq__50568_50586__$1 = temp__4657__auto___50585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50568_50586__$1)){
var c__45081__auto___50587 = cljs.core.chunk_first.call(null,seq__50568_50586__$1);
var G__50588 = cljs.core.chunk_rest.call(null,seq__50568_50586__$1);
var G__50589 = c__45081__auto___50587;
var G__50590 = cljs.core.count.call(null,c__45081__auto___50587);
var G__50591 = (0);
seq__50568_50576 = G__50588;
chunk__50569_50577 = G__50589;
count__50570_50578 = G__50590;
i__50571_50579 = G__50591;
continue;
} else {
var req_50592 = cljs.core.first.call(null,seq__50568_50586__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50592,prov);

var G__50593 = cljs.core.next.call(null,seq__50568_50586__$1);
var G__50594 = null;
var G__50595 = (0);
var G__50596 = (0);
seq__50568_50576 = G__50593;
chunk__50569_50577 = G__50594;
count__50570_50578 = G__50595;
i__50571_50579 = G__50596;
continue;
}
} else {
}
}
break;
}

var G__50597 = seq__50564;
var G__50598 = chunk__50565;
var G__50599 = count__50566;
var G__50600 = (i__50567 + (1));
seq__50564 = G__50597;
chunk__50565 = G__50598;
count__50566 = G__50599;
i__50567 = G__50600;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50564);
if(temp__4657__auto__){
var seq__50564__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50564__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__50564__$1);
var G__50601 = cljs.core.chunk_rest.call(null,seq__50564__$1);
var G__50602 = c__45081__auto__;
var G__50603 = cljs.core.count.call(null,c__45081__auto__);
var G__50604 = (0);
seq__50564 = G__50601;
chunk__50565 = G__50602;
count__50566 = G__50603;
i__50567 = G__50604;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50564__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50572_50605 = cljs.core.seq.call(null,requires);
var chunk__50573_50606 = null;
var count__50574_50607 = (0);
var i__50575_50608 = (0);
while(true){
if((i__50575_50608 < count__50574_50607)){
var req_50609 = cljs.core._nth.call(null,chunk__50573_50606,i__50575_50608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50609,prov);

var G__50610 = seq__50572_50605;
var G__50611 = chunk__50573_50606;
var G__50612 = count__50574_50607;
var G__50613 = (i__50575_50608 + (1));
seq__50572_50605 = G__50610;
chunk__50573_50606 = G__50611;
count__50574_50607 = G__50612;
i__50575_50608 = G__50613;
continue;
} else {
var temp__4657__auto___50614__$1 = cljs.core.seq.call(null,seq__50572_50605);
if(temp__4657__auto___50614__$1){
var seq__50572_50615__$1 = temp__4657__auto___50614__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50572_50615__$1)){
var c__45081__auto___50616 = cljs.core.chunk_first.call(null,seq__50572_50615__$1);
var G__50617 = cljs.core.chunk_rest.call(null,seq__50572_50615__$1);
var G__50618 = c__45081__auto___50616;
var G__50619 = cljs.core.count.call(null,c__45081__auto___50616);
var G__50620 = (0);
seq__50572_50605 = G__50617;
chunk__50573_50606 = G__50618;
count__50574_50607 = G__50619;
i__50575_50608 = G__50620;
continue;
} else {
var req_50621 = cljs.core.first.call(null,seq__50572_50615__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50621,prov);

var G__50622 = cljs.core.next.call(null,seq__50572_50615__$1);
var G__50623 = null;
var G__50624 = (0);
var G__50625 = (0);
seq__50572_50605 = G__50622;
chunk__50573_50606 = G__50623;
count__50574_50607 = G__50624;
i__50575_50608 = G__50625;
continue;
}
} else {
}
}
break;
}

var G__50626 = cljs.core.next.call(null,seq__50564__$1);
var G__50627 = null;
var G__50628 = (0);
var G__50629 = (0);
seq__50564 = G__50626;
chunk__50565 = G__50627;
count__50566 = G__50628;
i__50567 = G__50629;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50634_50638 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50635_50639 = null;
var count__50636_50640 = (0);
var i__50637_50641 = (0);
while(true){
if((i__50637_50641 < count__50636_50640)){
var ns_50642 = cljs.core._nth.call(null,chunk__50635_50639,i__50637_50641);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50642);

var G__50643 = seq__50634_50638;
var G__50644 = chunk__50635_50639;
var G__50645 = count__50636_50640;
var G__50646 = (i__50637_50641 + (1));
seq__50634_50638 = G__50643;
chunk__50635_50639 = G__50644;
count__50636_50640 = G__50645;
i__50637_50641 = G__50646;
continue;
} else {
var temp__4657__auto___50647 = cljs.core.seq.call(null,seq__50634_50638);
if(temp__4657__auto___50647){
var seq__50634_50648__$1 = temp__4657__auto___50647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50634_50648__$1)){
var c__45081__auto___50649 = cljs.core.chunk_first.call(null,seq__50634_50648__$1);
var G__50650 = cljs.core.chunk_rest.call(null,seq__50634_50648__$1);
var G__50651 = c__45081__auto___50649;
var G__50652 = cljs.core.count.call(null,c__45081__auto___50649);
var G__50653 = (0);
seq__50634_50638 = G__50650;
chunk__50635_50639 = G__50651;
count__50636_50640 = G__50652;
i__50637_50641 = G__50653;
continue;
} else {
var ns_50654 = cljs.core.first.call(null,seq__50634_50648__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50654);

var G__50655 = cljs.core.next.call(null,seq__50634_50648__$1);
var G__50656 = null;
var G__50657 = (0);
var G__50658 = (0);
seq__50634_50638 = G__50655;
chunk__50635_50639 = G__50656;
count__50636_50640 = G__50657;
i__50637_50641 = G__50658;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44267__auto__ = goog.require__;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50659__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50660__i = 0, G__50660__a = new Array(arguments.length -  0);
while (G__50660__i < G__50660__a.length) {G__50660__a[G__50660__i] = arguments[G__50660__i + 0]; ++G__50660__i;}
  args = new cljs.core.IndexedSeq(G__50660__a,0);
} 
return G__50659__delegate.call(this,args);};
G__50659.cljs$lang$maxFixedArity = 0;
G__50659.cljs$lang$applyTo = (function (arglist__50661){
var args = cljs.core.seq(arglist__50661);
return G__50659__delegate(args);
});
G__50659.cljs$core$IFn$_invoke$arity$variadic = G__50659__delegate;
return G__50659;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50663 = cljs.core._EQ_;
var expr__50664 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50663.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50664))){
var path_parts = ((function (pred__50663,expr__50664){
return (function (p1__50662_SHARP_){
return clojure.string.split.call(null,p1__50662_SHARP_,/[\/\\]/);
});})(pred__50663,expr__50664))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50663,expr__50664){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50666){if((e50666 instanceof Error)){
var e = e50666;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50666;

}
}})());
});
;})(path_parts,sep,root,pred__50663,expr__50664))
} else {
if(cljs.core.truth_(pred__50663.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50664))){
return ((function (pred__50663,expr__50664){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__50663,expr__50664){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50663,expr__50664))
);

return deferred.addErrback(((function (deferred,pred__50663,expr__50664){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50663,expr__50664))
);
});
;})(pred__50663,expr__50664))
} else {
return ((function (pred__50663,expr__50664){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50663,expr__50664))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50667,callback){
var map__50670 = p__50667;
var map__50670__$1 = ((((!((map__50670 == null)))?((((map__50670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50670):map__50670);
var file_msg = map__50670__$1;
var request_url = cljs.core.get.call(null,map__50670__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50670,map__50670__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50670,map__50670__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__){
return (function (state_50694){
var state_val_50695 = (state_50694[(1)]);
if((state_val_50695 === (7))){
var inst_50690 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
var statearr_50696_50716 = state_50694__$1;
(statearr_50696_50716[(2)] = inst_50690);

(statearr_50696_50716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (1))){
var state_50694__$1 = state_50694;
var statearr_50697_50717 = state_50694__$1;
(statearr_50697_50717[(2)] = null);

(statearr_50697_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (4))){
var inst_50674 = (state_50694[(7)]);
var inst_50674__$1 = (state_50694[(2)]);
var state_50694__$1 = (function (){var statearr_50698 = state_50694;
(statearr_50698[(7)] = inst_50674__$1);

return statearr_50698;
})();
if(cljs.core.truth_(inst_50674__$1)){
var statearr_50699_50718 = state_50694__$1;
(statearr_50699_50718[(1)] = (5));

} else {
var statearr_50700_50719 = state_50694__$1;
(statearr_50700_50719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (6))){
var state_50694__$1 = state_50694;
var statearr_50701_50720 = state_50694__$1;
(statearr_50701_50720[(2)] = null);

(statearr_50701_50720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (3))){
var inst_50692 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50694__$1,inst_50692);
} else {
if((state_val_50695 === (2))){
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50694__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50695 === (11))){
var inst_50686 = (state_50694[(2)]);
var state_50694__$1 = (function (){var statearr_50702 = state_50694;
(statearr_50702[(8)] = inst_50686);

return statearr_50702;
})();
var statearr_50703_50721 = state_50694__$1;
(statearr_50703_50721[(2)] = null);

(statearr_50703_50721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (9))){
var inst_50678 = (state_50694[(9)]);
var inst_50680 = (state_50694[(10)]);
var inst_50682 = inst_50680.call(null,inst_50678);
var state_50694__$1 = state_50694;
var statearr_50704_50722 = state_50694__$1;
(statearr_50704_50722[(2)] = inst_50682);

(statearr_50704_50722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (5))){
var inst_50674 = (state_50694[(7)]);
var inst_50676 = figwheel.client.file_reloading.blocking_load.call(null,inst_50674);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50694__$1,(8),inst_50676);
} else {
if((state_val_50695 === (10))){
var inst_50678 = (state_50694[(9)]);
var inst_50684 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50678);
var state_50694__$1 = state_50694;
var statearr_50705_50723 = state_50694__$1;
(statearr_50705_50723[(2)] = inst_50684);

(statearr_50705_50723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (8))){
var inst_50674 = (state_50694[(7)]);
var inst_50680 = (state_50694[(10)]);
var inst_50678 = (state_50694[(2)]);
var inst_50679 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50680__$1 = cljs.core.get.call(null,inst_50679,inst_50674);
var state_50694__$1 = (function (){var statearr_50706 = state_50694;
(statearr_50706[(9)] = inst_50678);

(statearr_50706[(10)] = inst_50680__$1);

return statearr_50706;
})();
if(cljs.core.truth_(inst_50680__$1)){
var statearr_50707_50724 = state_50694__$1;
(statearr_50707_50724[(1)] = (9));

} else {
var statearr_50708_50725 = state_50694__$1;
(statearr_50708_50725[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47516__auto__))
;
return ((function (switch__46318__auto__,c__47516__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46319__auto__ = null;
var figwheel$client$file_reloading$state_machine__46319__auto____0 = (function (){
var statearr_50712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50712[(0)] = figwheel$client$file_reloading$state_machine__46319__auto__);

(statearr_50712[(1)] = (1));

return statearr_50712;
});
var figwheel$client$file_reloading$state_machine__46319__auto____1 = (function (state_50694){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_50694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50713){if((e50713 instanceof Object)){
var ex__46322__auto__ = e50713;
var statearr_50714_50726 = state_50694;
(statearr_50714_50726[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50727 = state_50694;
state_50694 = G__50727;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46319__auto__ = function(state_50694){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46319__auto____1.call(this,state_50694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46319__auto____0;
figwheel$client$file_reloading$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46319__auto____1;
return figwheel$client$file_reloading$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__))
})();
var state__47518__auto__ = (function (){var statearr_50715 = f__47517__auto__.call(null);
(statearr_50715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_50715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__))
);

return c__47516__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50728,callback){
var map__50731 = p__50728;
var map__50731__$1 = ((((!((map__50731 == null)))?((((map__50731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50731):map__50731);
var file_msg = map__50731__$1;
var namespace = cljs.core.get.call(null,map__50731__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50731,map__50731__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50731,map__50731__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50733){
var map__50736 = p__50733;
var map__50736__$1 = ((((!((map__50736 == null)))?((((map__50736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50736):map__50736);
var file_msg = map__50736__$1;
var namespace = cljs.core.get.call(null,map__50736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44255__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__44255__auto__){
var or__44267__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
var or__44267__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44267__auto____$1)){
return or__44267__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44255__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50738,callback){
var map__50741 = p__50738;
var map__50741__$1 = ((((!((map__50741 == null)))?((((map__50741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50741):map__50741);
var file_msg = map__50741__$1;
var request_url = cljs.core.get.call(null,map__50741__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47516__auto___50845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___50845,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___50845,out){
return (function (state_50827){
var state_val_50828 = (state_50827[(1)]);
if((state_val_50828 === (1))){
var inst_50801 = cljs.core.seq.call(null,files);
var inst_50802 = cljs.core.first.call(null,inst_50801);
var inst_50803 = cljs.core.next.call(null,inst_50801);
var inst_50804 = files;
var state_50827__$1 = (function (){var statearr_50829 = state_50827;
(statearr_50829[(7)] = inst_50802);

(statearr_50829[(8)] = inst_50804);

(statearr_50829[(9)] = inst_50803);

return statearr_50829;
})();
var statearr_50830_50846 = state_50827__$1;
(statearr_50830_50846[(2)] = null);

(statearr_50830_50846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50828 === (2))){
var inst_50810 = (state_50827[(10)]);
var inst_50804 = (state_50827[(8)]);
var inst_50809 = cljs.core.seq.call(null,inst_50804);
var inst_50810__$1 = cljs.core.first.call(null,inst_50809);
var inst_50811 = cljs.core.next.call(null,inst_50809);
var inst_50812 = (inst_50810__$1 == null);
var inst_50813 = cljs.core.not.call(null,inst_50812);
var state_50827__$1 = (function (){var statearr_50831 = state_50827;
(statearr_50831[(11)] = inst_50811);

(statearr_50831[(10)] = inst_50810__$1);

return statearr_50831;
})();
if(inst_50813){
var statearr_50832_50847 = state_50827__$1;
(statearr_50832_50847[(1)] = (4));

} else {
var statearr_50833_50848 = state_50827__$1;
(statearr_50833_50848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50828 === (3))){
var inst_50825 = (state_50827[(2)]);
var state_50827__$1 = state_50827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50827__$1,inst_50825);
} else {
if((state_val_50828 === (4))){
var inst_50810 = (state_50827[(10)]);
var inst_50815 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50810);
var state_50827__$1 = state_50827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50827__$1,(7),inst_50815);
} else {
if((state_val_50828 === (5))){
var inst_50821 = cljs.core.async.close_BANG_.call(null,out);
var state_50827__$1 = state_50827;
var statearr_50834_50849 = state_50827__$1;
(statearr_50834_50849[(2)] = inst_50821);

(statearr_50834_50849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50828 === (6))){
var inst_50823 = (state_50827[(2)]);
var state_50827__$1 = state_50827;
var statearr_50835_50850 = state_50827__$1;
(statearr_50835_50850[(2)] = inst_50823);

(statearr_50835_50850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50828 === (7))){
var inst_50811 = (state_50827[(11)]);
var inst_50817 = (state_50827[(2)]);
var inst_50818 = cljs.core.async.put_BANG_.call(null,out,inst_50817);
var inst_50804 = inst_50811;
var state_50827__$1 = (function (){var statearr_50836 = state_50827;
(statearr_50836[(12)] = inst_50818);

(statearr_50836[(8)] = inst_50804);

return statearr_50836;
})();
var statearr_50837_50851 = state_50827__$1;
(statearr_50837_50851[(2)] = null);

(statearr_50837_50851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__47516__auto___50845,out))
;
return ((function (switch__46318__auto__,c__47516__auto___50845,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____0 = (function (){
var statearr_50841 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50841[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__);

(statearr_50841[(1)] = (1));

return statearr_50841;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____1 = (function (state_50827){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_50827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50842){if((e50842 instanceof Object)){
var ex__46322__auto__ = e50842;
var statearr_50843_50852 = state_50827;
(statearr_50843_50852[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50853 = state_50827;
state_50827 = G__50853;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__ = function(state_50827){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____1.call(this,state_50827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___50845,out))
})();
var state__47518__auto__ = (function (){var statearr_50844 = f__47517__auto__.call(null);
(statearr_50844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___50845);

return statearr_50844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___50845,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50854,opts){
var map__50858 = p__50854;
var map__50858__$1 = ((((!((map__50858 == null)))?((((map__50858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50858):map__50858);
var eval_body = cljs.core.get.call(null,map__50858__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44255__auto__ = eval_body;
if(cljs.core.truth_(and__44255__auto__)){
return typeof eval_body === 'string';
} else {
return and__44255__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50860){var e = e50860;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50861_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50861_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50870){
var vec__50871 = p__50870;
var k = cljs.core.nth.call(null,vec__50871,(0),null);
var v = cljs.core.nth.call(null,vec__50871,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50874){
var vec__50875 = p__50874;
var k = cljs.core.nth.call(null,vec__50875,(0),null);
var v = cljs.core.nth.call(null,vec__50875,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50881,p__50882){
var map__51130 = p__50881;
var map__51130__$1 = ((((!((map__51130 == null)))?((((map__51130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51130):map__51130);
var opts = map__51130__$1;
var before_jsload = cljs.core.get.call(null,map__51130__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51130__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51130__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51131 = p__50882;
var map__51131__$1 = ((((!((map__51131 == null)))?((((map__51131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51131):map__51131);
var msg = map__51131__$1;
var files = cljs.core.get.call(null,map__51131__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51131__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51131__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51285){
var state_val_51286 = (state_51285[(1)]);
if((state_val_51286 === (7))){
var inst_51148 = (state_51285[(7)]);
var inst_51147 = (state_51285[(8)]);
var inst_51145 = (state_51285[(9)]);
var inst_51146 = (state_51285[(10)]);
var inst_51153 = cljs.core._nth.call(null,inst_51146,inst_51148);
var inst_51154 = figwheel.client.file_reloading.eval_body.call(null,inst_51153,opts);
var inst_51155 = (inst_51148 + (1));
var tmp51287 = inst_51147;
var tmp51288 = inst_51145;
var tmp51289 = inst_51146;
var inst_51145__$1 = tmp51288;
var inst_51146__$1 = tmp51289;
var inst_51147__$1 = tmp51287;
var inst_51148__$1 = inst_51155;
var state_51285__$1 = (function (){var statearr_51290 = state_51285;
(statearr_51290[(7)] = inst_51148__$1);

(statearr_51290[(8)] = inst_51147__$1);

(statearr_51290[(9)] = inst_51145__$1);

(statearr_51290[(10)] = inst_51146__$1);

(statearr_51290[(11)] = inst_51154);

return statearr_51290;
})();
var statearr_51291_51377 = state_51285__$1;
(statearr_51291_51377[(2)] = null);

(statearr_51291_51377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (20))){
var inst_51188 = (state_51285[(12)]);
var inst_51196 = figwheel.client.file_reloading.sort_files.call(null,inst_51188);
var state_51285__$1 = state_51285;
var statearr_51292_51378 = state_51285__$1;
(statearr_51292_51378[(2)] = inst_51196);

(statearr_51292_51378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (27))){
var state_51285__$1 = state_51285;
var statearr_51293_51379 = state_51285__$1;
(statearr_51293_51379[(2)] = null);

(statearr_51293_51379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (1))){
var inst_51137 = (state_51285[(13)]);
var inst_51134 = before_jsload.call(null,files);
var inst_51135 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51136 = (function (){return ((function (inst_51137,inst_51134,inst_51135,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50878_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50878_SHARP_);
});
;})(inst_51137,inst_51134,inst_51135,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51137__$1 = cljs.core.filter.call(null,inst_51136,files);
var inst_51138 = cljs.core.not_empty.call(null,inst_51137__$1);
var state_51285__$1 = (function (){var statearr_51294 = state_51285;
(statearr_51294[(13)] = inst_51137__$1);

(statearr_51294[(14)] = inst_51134);

(statearr_51294[(15)] = inst_51135);

return statearr_51294;
})();
if(cljs.core.truth_(inst_51138)){
var statearr_51295_51380 = state_51285__$1;
(statearr_51295_51380[(1)] = (2));

} else {
var statearr_51296_51381 = state_51285__$1;
(statearr_51296_51381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (24))){
var state_51285__$1 = state_51285;
var statearr_51297_51382 = state_51285__$1;
(statearr_51297_51382[(2)] = null);

(statearr_51297_51382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (39))){
var inst_51238 = (state_51285[(16)]);
var state_51285__$1 = state_51285;
var statearr_51298_51383 = state_51285__$1;
(statearr_51298_51383[(2)] = inst_51238);

(statearr_51298_51383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (46))){
var inst_51280 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51299_51384 = state_51285__$1;
(statearr_51299_51384[(2)] = inst_51280);

(statearr_51299_51384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (4))){
var inst_51182 = (state_51285[(2)]);
var inst_51183 = cljs.core.List.EMPTY;
var inst_51184 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_51183);
var inst_51185 = (function (){return ((function (inst_51182,inst_51183,inst_51184,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50879_SHARP_){
var and__44255__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50879_SHARP_);
if(cljs.core.truth_(and__44255__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50879_SHARP_));
} else {
return and__44255__auto__;
}
});
;})(inst_51182,inst_51183,inst_51184,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51186 = cljs.core.filter.call(null,inst_51185,files);
var inst_51187 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_51188 = cljs.core.concat.call(null,inst_51186,inst_51187);
var state_51285__$1 = (function (){var statearr_51300 = state_51285;
(statearr_51300[(17)] = inst_51184);

(statearr_51300[(12)] = inst_51188);

(statearr_51300[(18)] = inst_51182);

return statearr_51300;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51301_51385 = state_51285__$1;
(statearr_51301_51385[(1)] = (16));

} else {
var statearr_51302_51386 = state_51285__$1;
(statearr_51302_51386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (15))){
var inst_51172 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51303_51387 = state_51285__$1;
(statearr_51303_51387[(2)] = inst_51172);

(statearr_51303_51387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (21))){
var inst_51198 = (state_51285[(19)]);
var inst_51198__$1 = (state_51285[(2)]);
var inst_51199 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_51198__$1);
var state_51285__$1 = (function (){var statearr_51304 = state_51285;
(statearr_51304[(19)] = inst_51198__$1);

return statearr_51304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51285__$1,(22),inst_51199);
} else {
if((state_val_51286 === (31))){
var inst_51283 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51285__$1,inst_51283);
} else {
if((state_val_51286 === (32))){
var inst_51238 = (state_51285[(16)]);
var inst_51243 = inst_51238.cljs$lang$protocol_mask$partition0$;
var inst_51244 = (inst_51243 & (64));
var inst_51245 = inst_51238.cljs$core$ISeq$;
var inst_51246 = (cljs.core.PROTOCOL_SENTINEL === inst_51245);
var inst_51247 = (inst_51244) || (inst_51246);
var state_51285__$1 = state_51285;
if(cljs.core.truth_(inst_51247)){
var statearr_51305_51388 = state_51285__$1;
(statearr_51305_51388[(1)] = (35));

} else {
var statearr_51306_51389 = state_51285__$1;
(statearr_51306_51389[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (40))){
var inst_51260 = (state_51285[(20)]);
var inst_51259 = (state_51285[(2)]);
var inst_51260__$1 = cljs.core.get.call(null,inst_51259,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_51261 = cljs.core.get.call(null,inst_51259,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_51262 = cljs.core.not_empty.call(null,inst_51260__$1);
var state_51285__$1 = (function (){var statearr_51307 = state_51285;
(statearr_51307[(20)] = inst_51260__$1);

(statearr_51307[(21)] = inst_51261);

return statearr_51307;
})();
if(cljs.core.truth_(inst_51262)){
var statearr_51308_51390 = state_51285__$1;
(statearr_51308_51390[(1)] = (41));

} else {
var statearr_51309_51391 = state_51285__$1;
(statearr_51309_51391[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (33))){
var state_51285__$1 = state_51285;
var statearr_51310_51392 = state_51285__$1;
(statearr_51310_51392[(2)] = false);

(statearr_51310_51392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (13))){
var inst_51158 = (state_51285[(22)]);
var inst_51162 = cljs.core.chunk_first.call(null,inst_51158);
var inst_51163 = cljs.core.chunk_rest.call(null,inst_51158);
var inst_51164 = cljs.core.count.call(null,inst_51162);
var inst_51145 = inst_51163;
var inst_51146 = inst_51162;
var inst_51147 = inst_51164;
var inst_51148 = (0);
var state_51285__$1 = (function (){var statearr_51311 = state_51285;
(statearr_51311[(7)] = inst_51148);

(statearr_51311[(8)] = inst_51147);

(statearr_51311[(9)] = inst_51145);

(statearr_51311[(10)] = inst_51146);

return statearr_51311;
})();
var statearr_51312_51393 = state_51285__$1;
(statearr_51312_51393[(2)] = null);

(statearr_51312_51393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (22))){
var inst_51201 = (state_51285[(23)]);
var inst_51202 = (state_51285[(24)]);
var inst_51206 = (state_51285[(25)]);
var inst_51198 = (state_51285[(19)]);
var inst_51201__$1 = (state_51285[(2)]);
var inst_51202__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51201__$1);
var inst_51203 = (function (){var all_files = inst_51198;
var res_SINGLEQUOTE_ = inst_51201__$1;
var res = inst_51202__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_51201,inst_51202,inst_51206,inst_51198,inst_51201__$1,inst_51202__$1,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50880_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50880_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_51201,inst_51202,inst_51206,inst_51198,inst_51201__$1,inst_51202__$1,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51204 = cljs.core.filter.call(null,inst_51203,inst_51201__$1);
var inst_51205 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_51206__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51205);
var inst_51207 = cljs.core.not_empty.call(null,inst_51206__$1);
var state_51285__$1 = (function (){var statearr_51313 = state_51285;
(statearr_51313[(23)] = inst_51201__$1);

(statearr_51313[(26)] = inst_51204);

(statearr_51313[(24)] = inst_51202__$1);

(statearr_51313[(25)] = inst_51206__$1);

return statearr_51313;
})();
if(cljs.core.truth_(inst_51207)){
var statearr_51314_51394 = state_51285__$1;
(statearr_51314_51394[(1)] = (23));

} else {
var statearr_51315_51395 = state_51285__$1;
(statearr_51315_51395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (36))){
var state_51285__$1 = state_51285;
var statearr_51316_51396 = state_51285__$1;
(statearr_51316_51396[(2)] = false);

(statearr_51316_51396[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (41))){
var inst_51260 = (state_51285[(20)]);
var inst_51264 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_51265 = cljs.core.map.call(null,inst_51264,inst_51260);
var inst_51266 = cljs.core.pr_str.call(null,inst_51265);
var inst_51267 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_51266)].join('');
var inst_51268 = figwheel.client.utils.log.call(null,inst_51267);
var state_51285__$1 = state_51285;
var statearr_51317_51397 = state_51285__$1;
(statearr_51317_51397[(2)] = inst_51268);

(statearr_51317_51397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (43))){
var inst_51261 = (state_51285[(21)]);
var inst_51271 = (state_51285[(2)]);
var inst_51272 = cljs.core.not_empty.call(null,inst_51261);
var state_51285__$1 = (function (){var statearr_51318 = state_51285;
(statearr_51318[(27)] = inst_51271);

return statearr_51318;
})();
if(cljs.core.truth_(inst_51272)){
var statearr_51319_51398 = state_51285__$1;
(statearr_51319_51398[(1)] = (44));

} else {
var statearr_51320_51399 = state_51285__$1;
(statearr_51320_51399[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (29))){
var inst_51201 = (state_51285[(23)]);
var inst_51204 = (state_51285[(26)]);
var inst_51238 = (state_51285[(16)]);
var inst_51202 = (state_51285[(24)]);
var inst_51206 = (state_51285[(25)]);
var inst_51198 = (state_51285[(19)]);
var inst_51234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_51237 = (function (){var all_files = inst_51198;
var res_SINGLEQUOTE_ = inst_51201;
var res = inst_51202;
var files_not_loaded = inst_51204;
var dependencies_that_loaded = inst_51206;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51238,inst_51202,inst_51206,inst_51198,inst_51234,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51236){
var map__51321 = p__51236;
var map__51321__$1 = ((((!((map__51321 == null)))?((((map__51321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51321):map__51321);
var namespace = cljs.core.get.call(null,map__51321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51238,inst_51202,inst_51206,inst_51198,inst_51234,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51238__$1 = cljs.core.group_by.call(null,inst_51237,inst_51204);
var inst_51240 = (inst_51238__$1 == null);
var inst_51241 = cljs.core.not.call(null,inst_51240);
var state_51285__$1 = (function (){var statearr_51323 = state_51285;
(statearr_51323[(16)] = inst_51238__$1);

(statearr_51323[(28)] = inst_51234);

return statearr_51323;
})();
if(inst_51241){
var statearr_51324_51400 = state_51285__$1;
(statearr_51324_51400[(1)] = (32));

} else {
var statearr_51325_51401 = state_51285__$1;
(statearr_51325_51401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (44))){
var inst_51261 = (state_51285[(21)]);
var inst_51274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51261);
var inst_51275 = cljs.core.pr_str.call(null,inst_51274);
var inst_51276 = [cljs.core.str("not required: "),cljs.core.str(inst_51275)].join('');
var inst_51277 = figwheel.client.utils.log.call(null,inst_51276);
var state_51285__$1 = state_51285;
var statearr_51326_51402 = state_51285__$1;
(statearr_51326_51402[(2)] = inst_51277);

(statearr_51326_51402[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (6))){
var inst_51179 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51327_51403 = state_51285__$1;
(statearr_51327_51403[(2)] = inst_51179);

(statearr_51327_51403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (28))){
var inst_51204 = (state_51285[(26)]);
var inst_51231 = (state_51285[(2)]);
var inst_51232 = cljs.core.not_empty.call(null,inst_51204);
var state_51285__$1 = (function (){var statearr_51328 = state_51285;
(statearr_51328[(29)] = inst_51231);

return statearr_51328;
})();
if(cljs.core.truth_(inst_51232)){
var statearr_51329_51404 = state_51285__$1;
(statearr_51329_51404[(1)] = (29));

} else {
var statearr_51330_51405 = state_51285__$1;
(statearr_51330_51405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (25))){
var inst_51202 = (state_51285[(24)]);
var inst_51218 = (state_51285[(2)]);
var inst_51219 = cljs.core.not_empty.call(null,inst_51202);
var state_51285__$1 = (function (){var statearr_51331 = state_51285;
(statearr_51331[(30)] = inst_51218);

return statearr_51331;
})();
if(cljs.core.truth_(inst_51219)){
var statearr_51332_51406 = state_51285__$1;
(statearr_51332_51406[(1)] = (26));

} else {
var statearr_51333_51407 = state_51285__$1;
(statearr_51333_51407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (34))){
var inst_51254 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
if(cljs.core.truth_(inst_51254)){
var statearr_51334_51408 = state_51285__$1;
(statearr_51334_51408[(1)] = (38));

} else {
var statearr_51335_51409 = state_51285__$1;
(statearr_51335_51409[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (17))){
var state_51285__$1 = state_51285;
var statearr_51336_51410 = state_51285__$1;
(statearr_51336_51410[(2)] = recompile_dependents);

(statearr_51336_51410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (3))){
var state_51285__$1 = state_51285;
var statearr_51337_51411 = state_51285__$1;
(statearr_51337_51411[(2)] = null);

(statearr_51337_51411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (12))){
var inst_51175 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51338_51412 = state_51285__$1;
(statearr_51338_51412[(2)] = inst_51175);

(statearr_51338_51412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (2))){
var inst_51137 = (state_51285[(13)]);
var inst_51144 = cljs.core.seq.call(null,inst_51137);
var inst_51145 = inst_51144;
var inst_51146 = null;
var inst_51147 = (0);
var inst_51148 = (0);
var state_51285__$1 = (function (){var statearr_51339 = state_51285;
(statearr_51339[(7)] = inst_51148);

(statearr_51339[(8)] = inst_51147);

(statearr_51339[(9)] = inst_51145);

(statearr_51339[(10)] = inst_51146);

return statearr_51339;
})();
var statearr_51340_51413 = state_51285__$1;
(statearr_51340_51413[(2)] = null);

(statearr_51340_51413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (23))){
var inst_51201 = (state_51285[(23)]);
var inst_51204 = (state_51285[(26)]);
var inst_51202 = (state_51285[(24)]);
var inst_51206 = (state_51285[(25)]);
var inst_51198 = (state_51285[(19)]);
var inst_51209 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_51211 = (function (){var all_files = inst_51198;
var res_SINGLEQUOTE_ = inst_51201;
var res = inst_51202;
var files_not_loaded = inst_51204;
var dependencies_that_loaded = inst_51206;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51209,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51210){
var map__51341 = p__51210;
var map__51341__$1 = ((((!((map__51341 == null)))?((((map__51341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51341):map__51341);
var request_url = cljs.core.get.call(null,map__51341__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51209,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51212 = cljs.core.reverse.call(null,inst_51206);
var inst_51213 = cljs.core.map.call(null,inst_51211,inst_51212);
var inst_51214 = cljs.core.pr_str.call(null,inst_51213);
var inst_51215 = figwheel.client.utils.log.call(null,inst_51214);
var state_51285__$1 = (function (){var statearr_51343 = state_51285;
(statearr_51343[(31)] = inst_51209);

return statearr_51343;
})();
var statearr_51344_51414 = state_51285__$1;
(statearr_51344_51414[(2)] = inst_51215);

(statearr_51344_51414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (35))){
var state_51285__$1 = state_51285;
var statearr_51345_51415 = state_51285__$1;
(statearr_51345_51415[(2)] = true);

(statearr_51345_51415[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (19))){
var inst_51188 = (state_51285[(12)]);
var inst_51194 = figwheel.client.file_reloading.expand_files.call(null,inst_51188);
var state_51285__$1 = state_51285;
var statearr_51346_51416 = state_51285__$1;
(statearr_51346_51416[(2)] = inst_51194);

(statearr_51346_51416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (11))){
var state_51285__$1 = state_51285;
var statearr_51347_51417 = state_51285__$1;
(statearr_51347_51417[(2)] = null);

(statearr_51347_51417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (9))){
var inst_51177 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51348_51418 = state_51285__$1;
(statearr_51348_51418[(2)] = inst_51177);

(statearr_51348_51418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (5))){
var inst_51148 = (state_51285[(7)]);
var inst_51147 = (state_51285[(8)]);
var inst_51150 = (inst_51148 < inst_51147);
var inst_51151 = inst_51150;
var state_51285__$1 = state_51285;
if(cljs.core.truth_(inst_51151)){
var statearr_51349_51419 = state_51285__$1;
(statearr_51349_51419[(1)] = (7));

} else {
var statearr_51350_51420 = state_51285__$1;
(statearr_51350_51420[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (14))){
var inst_51158 = (state_51285[(22)]);
var inst_51167 = cljs.core.first.call(null,inst_51158);
var inst_51168 = figwheel.client.file_reloading.eval_body.call(null,inst_51167,opts);
var inst_51169 = cljs.core.next.call(null,inst_51158);
var inst_51145 = inst_51169;
var inst_51146 = null;
var inst_51147 = (0);
var inst_51148 = (0);
var state_51285__$1 = (function (){var statearr_51351 = state_51285;
(statearr_51351[(7)] = inst_51148);

(statearr_51351[(8)] = inst_51147);

(statearr_51351[(9)] = inst_51145);

(statearr_51351[(10)] = inst_51146);

(statearr_51351[(32)] = inst_51168);

return statearr_51351;
})();
var statearr_51352_51421 = state_51285__$1;
(statearr_51352_51421[(2)] = null);

(statearr_51352_51421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (45))){
var state_51285__$1 = state_51285;
var statearr_51353_51422 = state_51285__$1;
(statearr_51353_51422[(2)] = null);

(statearr_51353_51422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (26))){
var inst_51201 = (state_51285[(23)]);
var inst_51204 = (state_51285[(26)]);
var inst_51202 = (state_51285[(24)]);
var inst_51206 = (state_51285[(25)]);
var inst_51198 = (state_51285[(19)]);
var inst_51221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_51223 = (function (){var all_files = inst_51198;
var res_SINGLEQUOTE_ = inst_51201;
var res = inst_51202;
var files_not_loaded = inst_51204;
var dependencies_that_loaded = inst_51206;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51221,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51222){
var map__51354 = p__51222;
var map__51354__$1 = ((((!((map__51354 == null)))?((((map__51354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51354):map__51354);
var namespace = cljs.core.get.call(null,map__51354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51221,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51224 = cljs.core.map.call(null,inst_51223,inst_51202);
var inst_51225 = cljs.core.pr_str.call(null,inst_51224);
var inst_51226 = figwheel.client.utils.log.call(null,inst_51225);
var inst_51227 = (function (){var all_files = inst_51198;
var res_SINGLEQUOTE_ = inst_51201;
var res = inst_51202;
var files_not_loaded = inst_51204;
var dependencies_that_loaded = inst_51206;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51221,inst_51223,inst_51224,inst_51225,inst_51226,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51201,inst_51204,inst_51202,inst_51206,inst_51198,inst_51221,inst_51223,inst_51224,inst_51225,inst_51226,state_val_51286,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51228 = setTimeout(inst_51227,(10));
var state_51285__$1 = (function (){var statearr_51356 = state_51285;
(statearr_51356[(33)] = inst_51226);

(statearr_51356[(34)] = inst_51221);

return statearr_51356;
})();
var statearr_51357_51423 = state_51285__$1;
(statearr_51357_51423[(2)] = inst_51228);

(statearr_51357_51423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (16))){
var state_51285__$1 = state_51285;
var statearr_51358_51424 = state_51285__$1;
(statearr_51358_51424[(2)] = reload_dependents);

(statearr_51358_51424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (38))){
var inst_51238 = (state_51285[(16)]);
var inst_51256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51238);
var state_51285__$1 = state_51285;
var statearr_51359_51425 = state_51285__$1;
(statearr_51359_51425[(2)] = inst_51256);

(statearr_51359_51425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (30))){
var state_51285__$1 = state_51285;
var statearr_51360_51426 = state_51285__$1;
(statearr_51360_51426[(2)] = null);

(statearr_51360_51426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (10))){
var inst_51158 = (state_51285[(22)]);
var inst_51160 = cljs.core.chunked_seq_QMARK_.call(null,inst_51158);
var state_51285__$1 = state_51285;
if(inst_51160){
var statearr_51361_51427 = state_51285__$1;
(statearr_51361_51427[(1)] = (13));

} else {
var statearr_51362_51428 = state_51285__$1;
(statearr_51362_51428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (18))){
var inst_51192 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
if(cljs.core.truth_(inst_51192)){
var statearr_51363_51429 = state_51285__$1;
(statearr_51363_51429[(1)] = (19));

} else {
var statearr_51364_51430 = state_51285__$1;
(statearr_51364_51430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (42))){
var state_51285__$1 = state_51285;
var statearr_51365_51431 = state_51285__$1;
(statearr_51365_51431[(2)] = null);

(statearr_51365_51431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (37))){
var inst_51251 = (state_51285[(2)]);
var state_51285__$1 = state_51285;
var statearr_51366_51432 = state_51285__$1;
(statearr_51366_51432[(2)] = inst_51251);

(statearr_51366_51432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51286 === (8))){
var inst_51145 = (state_51285[(9)]);
var inst_51158 = (state_51285[(22)]);
var inst_51158__$1 = cljs.core.seq.call(null,inst_51145);
var state_51285__$1 = (function (){var statearr_51367 = state_51285;
(statearr_51367[(22)] = inst_51158__$1);

return statearr_51367;
})();
if(inst_51158__$1){
var statearr_51368_51433 = state_51285__$1;
(statearr_51368_51433[(1)] = (10));

} else {
var statearr_51369_51434 = state_51285__$1;
(statearr_51369_51434[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46318__auto__,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____0 = (function (){
var statearr_51373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51373[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__);

(statearr_51373[(1)] = (1));

return statearr_51373;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____1 = (function (state_51285){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_51285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e51374){if((e51374 instanceof Object)){
var ex__46322__auto__ = e51374;
var statearr_51375_51435 = state_51285;
(statearr_51375_51435[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51436 = state_51285;
state_51285 = G__51436;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__ = function(state_51285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____1.call(this,state_51285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47518__auto__ = (function (){var statearr_51376 = f__47517__auto__.call(null);
(statearr_51376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_51376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__,map__51130,map__51130__$1,opts,before_jsload,on_jsload,reload_dependents,map__51131,map__51131__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47516__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51439,link){
var map__51442 = p__51439;
var map__51442__$1 = ((((!((map__51442 == null)))?((((map__51442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51442):map__51442);
var file = cljs.core.get.call(null,map__51442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__51442,map__51442__$1,file){
return (function (p1__51437_SHARP_,p2__51438_SHARP_){
if(cljs.core._EQ_.call(null,p1__51437_SHARP_,p2__51438_SHARP_)){
return p1__51437_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__51442,map__51442__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51448){
var map__51449 = p__51448;
var map__51449__$1 = ((((!((map__51449 == null)))?((((map__51449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51449):map__51449);
var match_length = cljs.core.get.call(null,map__51449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51444_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51444_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args51451 = [];
var len__45375__auto___51454 = arguments.length;
var i__45376__auto___51455 = (0);
while(true){
if((i__45376__auto___51455 < len__45375__auto___51454)){
args51451.push((arguments[i__45376__auto___51455]));

var G__51456 = (i__45376__auto___51455 + (1));
i__45376__auto___51455 = G__51456;
continue;
} else {
}
break;
}

var G__51453 = args51451.length;
switch (G__51453) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51451.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51458_SHARP_,p2__51459_SHARP_){
return cljs.core.assoc.call(null,p1__51458_SHARP_,cljs.core.get.call(null,p2__51459_SHARP_,key),p2__51459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__51460){
var map__51463 = p__51460;
var map__51463__$1 = ((((!((map__51463 == null)))?((((map__51463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51463):map__51463);
var f_data = map__51463__$1;
var file = cljs.core.get.call(null,map__51463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51465,p__51466){
var map__51475 = p__51465;
var map__51475__$1 = ((((!((map__51475 == null)))?((((map__51475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51475):map__51475);
var opts = map__51475__$1;
var on_cssload = cljs.core.get.call(null,map__51475__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51476 = p__51466;
var map__51476__$1 = ((((!((map__51476 == null)))?((((map__51476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51476):map__51476);
var files_msg = map__51476__$1;
var files = cljs.core.get.call(null,map__51476__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__51479_51483 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__51480_51484 = null;
var count__51481_51485 = (0);
var i__51482_51486 = (0);
while(true){
if((i__51482_51486 < count__51481_51485)){
var f_51487 = cljs.core._nth.call(null,chunk__51480_51484,i__51482_51486);
figwheel.client.file_reloading.reload_css_file.call(null,f_51487);

var G__51488 = seq__51479_51483;
var G__51489 = chunk__51480_51484;
var G__51490 = count__51481_51485;
var G__51491 = (i__51482_51486 + (1));
seq__51479_51483 = G__51488;
chunk__51480_51484 = G__51489;
count__51481_51485 = G__51490;
i__51482_51486 = G__51491;
continue;
} else {
var temp__4657__auto___51492 = cljs.core.seq.call(null,seq__51479_51483);
if(temp__4657__auto___51492){
var seq__51479_51493__$1 = temp__4657__auto___51492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51479_51493__$1)){
var c__45081__auto___51494 = cljs.core.chunk_first.call(null,seq__51479_51493__$1);
var G__51495 = cljs.core.chunk_rest.call(null,seq__51479_51493__$1);
var G__51496 = c__45081__auto___51494;
var G__51497 = cljs.core.count.call(null,c__45081__auto___51494);
var G__51498 = (0);
seq__51479_51483 = G__51495;
chunk__51480_51484 = G__51496;
count__51481_51485 = G__51497;
i__51482_51486 = G__51498;
continue;
} else {
var f_51499 = cljs.core.first.call(null,seq__51479_51493__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_51499);

var G__51500 = cljs.core.next.call(null,seq__51479_51493__$1);
var G__51501 = null;
var G__51502 = (0);
var G__51503 = (0);
seq__51479_51483 = G__51500;
chunk__51480_51484 = G__51501;
count__51481_51485 = G__51502;
i__51482_51486 = G__51503;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__51475,map__51475__$1,opts,on_cssload,map__51476,map__51476__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__51475,map__51475__$1,opts,on_cssload,map__51476,map__51476__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476916469692