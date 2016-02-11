// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__13187__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__13187__auto__){
return or__13187__auto__;
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
var or__13187__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20289_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20289_SHARP_));
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
var seq__20294 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20295 = null;
var count__20296 = (0);
var i__20297 = (0);
while(true){
if((i__20297 < count__20296)){
var n = cljs.core._nth.call(null,chunk__20295,i__20297);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20298 = seq__20294;
var G__20299 = chunk__20295;
var G__20300 = count__20296;
var G__20301 = (i__20297 + (1));
seq__20294 = G__20298;
chunk__20295 = G__20299;
count__20296 = G__20300;
i__20297 = G__20301;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20294);
if(temp__4657__auto__){
var seq__20294__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20294__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__20294__$1);
var G__20302 = cljs.core.chunk_rest.call(null,seq__20294__$1);
var G__20303 = c__13990__auto__;
var G__20304 = cljs.core.count.call(null,c__13990__auto__);
var G__20305 = (0);
seq__20294 = G__20302;
chunk__20295 = G__20303;
count__20296 = G__20304;
i__20297 = G__20305;
continue;
} else {
var n = cljs.core.first.call(null,seq__20294__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20306 = cljs.core.next.call(null,seq__20294__$1);
var G__20307 = null;
var G__20308 = (0);
var G__20309 = (0);
seq__20294 = G__20306;
chunk__20295 = G__20307;
count__20296 = G__20308;
i__20297 = G__20309;
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

var seq__20348_20355 = cljs.core.seq.call(null,deps);
var chunk__20349_20356 = null;
var count__20350_20357 = (0);
var i__20351_20358 = (0);
while(true){
if((i__20351_20358 < count__20350_20357)){
var dep_20359 = cljs.core._nth.call(null,chunk__20349_20356,i__20351_20358);
topo_sort_helper_STAR_.call(null,dep_20359,(depth + (1)),state);

var G__20360 = seq__20348_20355;
var G__20361 = chunk__20349_20356;
var G__20362 = count__20350_20357;
var G__20363 = (i__20351_20358 + (1));
seq__20348_20355 = G__20360;
chunk__20349_20356 = G__20361;
count__20350_20357 = G__20362;
i__20351_20358 = G__20363;
continue;
} else {
var temp__4657__auto___20364 = cljs.core.seq.call(null,seq__20348_20355);
if(temp__4657__auto___20364){
var seq__20348_20365__$1 = temp__4657__auto___20364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20348_20365__$1)){
var c__13990__auto___20366 = cljs.core.chunk_first.call(null,seq__20348_20365__$1);
var G__20367 = cljs.core.chunk_rest.call(null,seq__20348_20365__$1);
var G__20368 = c__13990__auto___20366;
var G__20369 = cljs.core.count.call(null,c__13990__auto___20366);
var G__20370 = (0);
seq__20348_20355 = G__20367;
chunk__20349_20356 = G__20368;
count__20350_20357 = G__20369;
i__20351_20358 = G__20370;
continue;
} else {
var dep_20371 = cljs.core.first.call(null,seq__20348_20365__$1);
topo_sort_helper_STAR_.call(null,dep_20371,(depth + (1)),state);

var G__20372 = cljs.core.next.call(null,seq__20348_20365__$1);
var G__20373 = null;
var G__20374 = (0);
var G__20375 = (0);
seq__20348_20355 = G__20372;
chunk__20349_20356 = G__20373;
count__20350_20357 = G__20374;
i__20351_20358 = G__20375;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20352){
var vec__20354 = p__20352;
var x = cljs.core.nth.call(null,vec__20354,(0),null);
var xs = cljs.core.nthnext.call(null,vec__20354,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20354,x,xs,get_deps__$1){
return (function (p1__20310_SHARP_){
return clojure.set.difference.call(null,p1__20310_SHARP_,x);
});})(vec__20354,x,xs,get_deps__$1))
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
var seq__20388 = cljs.core.seq.call(null,provides);
var chunk__20389 = null;
var count__20390 = (0);
var i__20391 = (0);
while(true){
if((i__20391 < count__20390)){
var prov = cljs.core._nth.call(null,chunk__20389,i__20391);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20392_20400 = cljs.core.seq.call(null,requires);
var chunk__20393_20401 = null;
var count__20394_20402 = (0);
var i__20395_20403 = (0);
while(true){
if((i__20395_20403 < count__20394_20402)){
var req_20404 = cljs.core._nth.call(null,chunk__20393_20401,i__20395_20403);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20404,prov);

var G__20405 = seq__20392_20400;
var G__20406 = chunk__20393_20401;
var G__20407 = count__20394_20402;
var G__20408 = (i__20395_20403 + (1));
seq__20392_20400 = G__20405;
chunk__20393_20401 = G__20406;
count__20394_20402 = G__20407;
i__20395_20403 = G__20408;
continue;
} else {
var temp__4657__auto___20409 = cljs.core.seq.call(null,seq__20392_20400);
if(temp__4657__auto___20409){
var seq__20392_20410__$1 = temp__4657__auto___20409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20392_20410__$1)){
var c__13990__auto___20411 = cljs.core.chunk_first.call(null,seq__20392_20410__$1);
var G__20412 = cljs.core.chunk_rest.call(null,seq__20392_20410__$1);
var G__20413 = c__13990__auto___20411;
var G__20414 = cljs.core.count.call(null,c__13990__auto___20411);
var G__20415 = (0);
seq__20392_20400 = G__20412;
chunk__20393_20401 = G__20413;
count__20394_20402 = G__20414;
i__20395_20403 = G__20415;
continue;
} else {
var req_20416 = cljs.core.first.call(null,seq__20392_20410__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20416,prov);

var G__20417 = cljs.core.next.call(null,seq__20392_20410__$1);
var G__20418 = null;
var G__20419 = (0);
var G__20420 = (0);
seq__20392_20400 = G__20417;
chunk__20393_20401 = G__20418;
count__20394_20402 = G__20419;
i__20395_20403 = G__20420;
continue;
}
} else {
}
}
break;
}

var G__20421 = seq__20388;
var G__20422 = chunk__20389;
var G__20423 = count__20390;
var G__20424 = (i__20391 + (1));
seq__20388 = G__20421;
chunk__20389 = G__20422;
count__20390 = G__20423;
i__20391 = G__20424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20388);
if(temp__4657__auto__){
var seq__20388__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20388__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__20388__$1);
var G__20425 = cljs.core.chunk_rest.call(null,seq__20388__$1);
var G__20426 = c__13990__auto__;
var G__20427 = cljs.core.count.call(null,c__13990__auto__);
var G__20428 = (0);
seq__20388 = G__20425;
chunk__20389 = G__20426;
count__20390 = G__20427;
i__20391 = G__20428;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20388__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20396_20429 = cljs.core.seq.call(null,requires);
var chunk__20397_20430 = null;
var count__20398_20431 = (0);
var i__20399_20432 = (0);
while(true){
if((i__20399_20432 < count__20398_20431)){
var req_20433 = cljs.core._nth.call(null,chunk__20397_20430,i__20399_20432);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20433,prov);

var G__20434 = seq__20396_20429;
var G__20435 = chunk__20397_20430;
var G__20436 = count__20398_20431;
var G__20437 = (i__20399_20432 + (1));
seq__20396_20429 = G__20434;
chunk__20397_20430 = G__20435;
count__20398_20431 = G__20436;
i__20399_20432 = G__20437;
continue;
} else {
var temp__4657__auto___20438__$1 = cljs.core.seq.call(null,seq__20396_20429);
if(temp__4657__auto___20438__$1){
var seq__20396_20439__$1 = temp__4657__auto___20438__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20396_20439__$1)){
var c__13990__auto___20440 = cljs.core.chunk_first.call(null,seq__20396_20439__$1);
var G__20441 = cljs.core.chunk_rest.call(null,seq__20396_20439__$1);
var G__20442 = c__13990__auto___20440;
var G__20443 = cljs.core.count.call(null,c__13990__auto___20440);
var G__20444 = (0);
seq__20396_20429 = G__20441;
chunk__20397_20430 = G__20442;
count__20398_20431 = G__20443;
i__20399_20432 = G__20444;
continue;
} else {
var req_20445 = cljs.core.first.call(null,seq__20396_20439__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20445,prov);

var G__20446 = cljs.core.next.call(null,seq__20396_20439__$1);
var G__20447 = null;
var G__20448 = (0);
var G__20449 = (0);
seq__20396_20429 = G__20446;
chunk__20397_20430 = G__20447;
count__20398_20431 = G__20448;
i__20399_20432 = G__20449;
continue;
}
} else {
}
}
break;
}

var G__20450 = cljs.core.next.call(null,seq__20388__$1);
var G__20451 = null;
var G__20452 = (0);
var G__20453 = (0);
seq__20388 = G__20450;
chunk__20389 = G__20451;
count__20390 = G__20452;
i__20391 = G__20453;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__20458_20462 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20459_20463 = null;
var count__20460_20464 = (0);
var i__20461_20465 = (0);
while(true){
if((i__20461_20465 < count__20460_20464)){
var ns_20466 = cljs.core._nth.call(null,chunk__20459_20463,i__20461_20465);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20466);

var G__20467 = seq__20458_20462;
var G__20468 = chunk__20459_20463;
var G__20469 = count__20460_20464;
var G__20470 = (i__20461_20465 + (1));
seq__20458_20462 = G__20467;
chunk__20459_20463 = G__20468;
count__20460_20464 = G__20469;
i__20461_20465 = G__20470;
continue;
} else {
var temp__4657__auto___20471 = cljs.core.seq.call(null,seq__20458_20462);
if(temp__4657__auto___20471){
var seq__20458_20472__$1 = temp__4657__auto___20471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20458_20472__$1)){
var c__13990__auto___20473 = cljs.core.chunk_first.call(null,seq__20458_20472__$1);
var G__20474 = cljs.core.chunk_rest.call(null,seq__20458_20472__$1);
var G__20475 = c__13990__auto___20473;
var G__20476 = cljs.core.count.call(null,c__13990__auto___20473);
var G__20477 = (0);
seq__20458_20462 = G__20474;
chunk__20459_20463 = G__20475;
count__20460_20464 = G__20476;
i__20461_20465 = G__20477;
continue;
} else {
var ns_20478 = cljs.core.first.call(null,seq__20458_20472__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20478);

var G__20479 = cljs.core.next.call(null,seq__20458_20472__$1);
var G__20480 = null;
var G__20481 = (0);
var G__20482 = (0);
seq__20458_20462 = G__20479;
chunk__20459_20463 = G__20480;
count__20460_20464 = G__20481;
i__20461_20465 = G__20482;
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
goog.require_figwheel_backup_ = (function (){var or__13187__auto__ = goog.require__;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
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
var G__20483__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20484__i = 0, G__20484__a = new Array(arguments.length -  0);
while (G__20484__i < G__20484__a.length) {G__20484__a[G__20484__i] = arguments[G__20484__i + 0]; ++G__20484__i;}
  args = new cljs.core.IndexedSeq(G__20484__a,0);
} 
return G__20483__delegate.call(this,args);};
G__20483.cljs$lang$maxFixedArity = 0;
G__20483.cljs$lang$applyTo = (function (arglist__20485){
var args = cljs.core.seq(arglist__20485);
return G__20483__delegate(args);
});
G__20483.cljs$core$IFn$_invoke$arity$variadic = G__20483__delegate;
return G__20483;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20487 = cljs.core._EQ_;
var expr__20488 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20487.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20488))){
var path_parts = ((function (pred__20487,expr__20488){
return (function (p1__20486_SHARP_){
return clojure.string.split.call(null,p1__20486_SHARP_,/[\/\\]/);
});})(pred__20487,expr__20488))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__20487,expr__20488){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20490){if((e20490 instanceof Error)){
var e = e20490;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20490;

}
}})());
});
;})(path_parts,sep,root,pred__20487,expr__20488))
} else {
if(cljs.core.truth_(pred__20487.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20488))){
return ((function (pred__20487,expr__20488){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20487,expr__20488){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20487,expr__20488))
);

return deferred.addErrback(((function (deferred,pred__20487,expr__20488){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20487,expr__20488))
);
});
;})(pred__20487,expr__20488))
} else {
return ((function (pred__20487,expr__20488){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20487,expr__20488))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20491,callback){
var map__20494 = p__20491;
var map__20494__$1 = ((((!((map__20494 == null)))?((((map__20494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20494):map__20494);
var file_msg = map__20494__$1;
var request_url = cljs.core.get.call(null,map__20494__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20494,map__20494__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20494,map__20494__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_20518){
var state_val_20519 = (state_20518[(1)]);
if((state_val_20519 === (7))){
var inst_20514 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
var statearr_20520_20540 = state_20518__$1;
(statearr_20520_20540[(2)] = inst_20514);

(statearr_20520_20540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (1))){
var state_20518__$1 = state_20518;
var statearr_20521_20541 = state_20518__$1;
(statearr_20521_20541[(2)] = null);

(statearr_20521_20541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (4))){
var inst_20498 = (state_20518[(7)]);
var inst_20498__$1 = (state_20518[(2)]);
var state_20518__$1 = (function (){var statearr_20522 = state_20518;
(statearr_20522[(7)] = inst_20498__$1);

return statearr_20522;
})();
if(cljs.core.truth_(inst_20498__$1)){
var statearr_20523_20542 = state_20518__$1;
(statearr_20523_20542[(1)] = (5));

} else {
var statearr_20524_20543 = state_20518__$1;
(statearr_20524_20543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (6))){
var state_20518__$1 = state_20518;
var statearr_20525_20544 = state_20518__$1;
(statearr_20525_20544[(2)] = null);

(statearr_20525_20544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (3))){
var inst_20516 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20518__$1,inst_20516);
} else {
if((state_val_20519 === (2))){
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20518__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20519 === (11))){
var inst_20510 = (state_20518[(2)]);
var state_20518__$1 = (function (){var statearr_20526 = state_20518;
(statearr_20526[(8)] = inst_20510);

return statearr_20526;
})();
var statearr_20527_20545 = state_20518__$1;
(statearr_20527_20545[(2)] = null);

(statearr_20527_20545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (9))){
var inst_20502 = (state_20518[(9)]);
var inst_20504 = (state_20518[(10)]);
var inst_20506 = inst_20504.call(null,inst_20502);
var state_20518__$1 = state_20518;
var statearr_20528_20546 = state_20518__$1;
(statearr_20528_20546[(2)] = inst_20506);

(statearr_20528_20546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (5))){
var inst_20498 = (state_20518[(7)]);
var inst_20500 = figwheel.client.file_reloading.blocking_load.call(null,inst_20498);
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20518__$1,(8),inst_20500);
} else {
if((state_val_20519 === (10))){
var inst_20502 = (state_20518[(9)]);
var inst_20508 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20502);
var state_20518__$1 = state_20518;
var statearr_20529_20547 = state_20518__$1;
(statearr_20529_20547[(2)] = inst_20508);

(statearr_20529_20547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (8))){
var inst_20504 = (state_20518[(10)]);
var inst_20498 = (state_20518[(7)]);
var inst_20502 = (state_20518[(2)]);
var inst_20503 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20504__$1 = cljs.core.get.call(null,inst_20503,inst_20498);
var state_20518__$1 = (function (){var statearr_20530 = state_20518;
(statearr_20530[(9)] = inst_20502);

(statearr_20530[(10)] = inst_20504__$1);

return statearr_20530;
})();
if(cljs.core.truth_(inst_20504__$1)){
var statearr_20531_20548 = state_20518__$1;
(statearr_20531_20548[(1)] = (9));

} else {
var statearr_20532_20549 = state_20518__$1;
(statearr_20532_20549[(1)] = (10));

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
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__17284__auto__ = null;
var figwheel$client$file_reloading$state_machine__17284__auto____0 = (function (){
var statearr_20536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20536[(0)] = figwheel$client$file_reloading$state_machine__17284__auto__);

(statearr_20536[(1)] = (1));

return statearr_20536;
});
var figwheel$client$file_reloading$state_machine__17284__auto____1 = (function (state_20518){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_20518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e20537){if((e20537 instanceof Object)){
var ex__17287__auto__ = e20537;
var statearr_20538_20550 = state_20518;
(statearr_20538_20550[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20551 = state_20518;
state_20518 = G__20551;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__17284__auto__ = function(state_20518){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__17284__auto____1.call(this,state_20518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__17284__auto____0;
figwheel$client$file_reloading$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__17284__auto____1;
return figwheel$client$file_reloading$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_20539 = f__17396__auto__.call(null);
(statearr_20539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_20539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20552,callback){
var map__20555 = p__20552;
var map__20555__$1 = ((((!((map__20555 == null)))?((((map__20555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20555):map__20555);
var file_msg = map__20555__$1;
var namespace = cljs.core.get.call(null,map__20555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20555,map__20555__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20555,map__20555__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20557){
var map__20560 = p__20557;
var map__20560__$1 = ((((!((map__20560 == null)))?((((map__20560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20560):map__20560);
var file_msg = map__20560__$1;
var namespace = cljs.core.get.call(null,map__20560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__13175__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__13175__auto__){
var or__13187__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
var or__13187__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__13187__auto____$1)){
return or__13187__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__13175__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20562,callback){
var map__20565 = p__20562;
var map__20565__$1 = ((((!((map__20565 == null)))?((((map__20565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20565):map__20565);
var file_msg = map__20565__$1;
var request_url = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__17395__auto___20653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___20653,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___20653,out){
return (function (state_20635){
var state_val_20636 = (state_20635[(1)]);
if((state_val_20636 === (1))){
var inst_20613 = cljs.core.nth.call(null,files,(0),null);
var inst_20614 = cljs.core.nthnext.call(null,files,(1));
var inst_20615 = files;
var state_20635__$1 = (function (){var statearr_20637 = state_20635;
(statearr_20637[(7)] = inst_20613);

(statearr_20637[(8)] = inst_20614);

(statearr_20637[(9)] = inst_20615);

return statearr_20637;
})();
var statearr_20638_20654 = state_20635__$1;
(statearr_20638_20654[(2)] = null);

(statearr_20638_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20636 === (2))){
var inst_20615 = (state_20635[(9)]);
var inst_20618 = (state_20635[(10)]);
var inst_20618__$1 = cljs.core.nth.call(null,inst_20615,(0),null);
var inst_20619 = cljs.core.nthnext.call(null,inst_20615,(1));
var inst_20620 = (inst_20618__$1 == null);
var inst_20621 = cljs.core.not.call(null,inst_20620);
var state_20635__$1 = (function (){var statearr_20639 = state_20635;
(statearr_20639[(11)] = inst_20619);

(statearr_20639[(10)] = inst_20618__$1);

return statearr_20639;
})();
if(inst_20621){
var statearr_20640_20655 = state_20635__$1;
(statearr_20640_20655[(1)] = (4));

} else {
var statearr_20641_20656 = state_20635__$1;
(statearr_20641_20656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20636 === (3))){
var inst_20633 = (state_20635[(2)]);
var state_20635__$1 = state_20635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20635__$1,inst_20633);
} else {
if((state_val_20636 === (4))){
var inst_20618 = (state_20635[(10)]);
var inst_20623 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20618);
var state_20635__$1 = state_20635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20635__$1,(7),inst_20623);
} else {
if((state_val_20636 === (5))){
var inst_20629 = cljs.core.async.close_BANG_.call(null,out);
var state_20635__$1 = state_20635;
var statearr_20642_20657 = state_20635__$1;
(statearr_20642_20657[(2)] = inst_20629);

(statearr_20642_20657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20636 === (6))){
var inst_20631 = (state_20635[(2)]);
var state_20635__$1 = state_20635;
var statearr_20643_20658 = state_20635__$1;
(statearr_20643_20658[(2)] = inst_20631);

(statearr_20643_20658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20636 === (7))){
var inst_20619 = (state_20635[(11)]);
var inst_20625 = (state_20635[(2)]);
var inst_20626 = cljs.core.async.put_BANG_.call(null,out,inst_20625);
var inst_20615 = inst_20619;
var state_20635__$1 = (function (){var statearr_20644 = state_20635;
(statearr_20644[(12)] = inst_20626);

(statearr_20644[(9)] = inst_20615);

return statearr_20644;
})();
var statearr_20645_20659 = state_20635__$1;
(statearr_20645_20659[(2)] = null);

(statearr_20645_20659[(1)] = (2));


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
});})(c__17395__auto___20653,out))
;
return ((function (switch__17283__auto__,c__17395__auto___20653,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____0 = (function (){
var statearr_20649 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20649[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__);

(statearr_20649[(1)] = (1));

return statearr_20649;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____1 = (function (state_20635){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_20635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e20650){if((e20650 instanceof Object)){
var ex__17287__auto__ = e20650;
var statearr_20651_20660 = state_20635;
(statearr_20651_20660[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20661 = state_20635;
state_20635 = G__20661;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__ = function(state_20635){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____1.call(this,state_20635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___20653,out))
})();
var state__17397__auto__ = (function (){var statearr_20652 = f__17396__auto__.call(null);
(statearr_20652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___20653);

return statearr_20652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___20653,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20662,opts){
var map__20666 = p__20662;
var map__20666__$1 = ((((!((map__20666 == null)))?((((map__20666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20666):map__20666);
var eval_body__$1 = cljs.core.get.call(null,map__20666__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__13175__auto__ = eval_body__$1;
if(cljs.core.truth_(and__13175__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__13175__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e20668){var e = e20668;
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
return (function (p1__20669_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20669_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__20674){
var vec__20675 = p__20674;
var k = cljs.core.nth.call(null,vec__20675,(0),null);
var v = cljs.core.nth.call(null,vec__20675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20676){
var vec__20677 = p__20676;
var k = cljs.core.nth.call(null,vec__20677,(0),null);
var v = cljs.core.nth.call(null,vec__20677,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20681,p__20682){
var map__20929 = p__20681;
var map__20929__$1 = ((((!((map__20929 == null)))?((((map__20929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20929):map__20929);
var opts = map__20929__$1;
var before_jsload = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__20930 = p__20682;
var map__20930__$1 = ((((!((map__20930 == null)))?((((map__20930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20930):map__20930);
var msg = map__20930__$1;
var files = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21083){
var state_val_21084 = (state_21083[(1)]);
if((state_val_21084 === (7))){
var inst_20945 = (state_21083[(7)]);
var inst_20946 = (state_21083[(8)]);
var inst_20947 = (state_21083[(9)]);
var inst_20944 = (state_21083[(10)]);
var inst_20952 = cljs.core._nth.call(null,inst_20945,inst_20947);
var inst_20953 = figwheel.client.file_reloading.eval_body.call(null,inst_20952,opts);
var inst_20954 = (inst_20947 + (1));
var tmp21085 = inst_20945;
var tmp21086 = inst_20946;
var tmp21087 = inst_20944;
var inst_20944__$1 = tmp21087;
var inst_20945__$1 = tmp21085;
var inst_20946__$1 = tmp21086;
var inst_20947__$1 = inst_20954;
var state_21083__$1 = (function (){var statearr_21088 = state_21083;
(statearr_21088[(7)] = inst_20945__$1);

(statearr_21088[(8)] = inst_20946__$1);

(statearr_21088[(9)] = inst_20947__$1);

(statearr_21088[(10)] = inst_20944__$1);

(statearr_21088[(11)] = inst_20953);

return statearr_21088;
})();
var statearr_21089_21175 = state_21083__$1;
(statearr_21089_21175[(2)] = null);

(statearr_21089_21175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (20))){
var inst_20987 = (state_21083[(12)]);
var inst_20995 = figwheel.client.file_reloading.sort_files.call(null,inst_20987);
var state_21083__$1 = state_21083;
var statearr_21090_21176 = state_21083__$1;
(statearr_21090_21176[(2)] = inst_20995);

(statearr_21090_21176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (27))){
var state_21083__$1 = state_21083;
var statearr_21091_21177 = state_21083__$1;
(statearr_21091_21177[(2)] = null);

(statearr_21091_21177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (1))){
var inst_20936 = (state_21083[(13)]);
var inst_20933 = before_jsload.call(null,files);
var inst_20934 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_20935 = (function (){return ((function (inst_20936,inst_20933,inst_20934,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20678_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20678_SHARP_);
});
;})(inst_20936,inst_20933,inst_20934,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20936__$1 = cljs.core.filter.call(null,inst_20935,files);
var inst_20937 = cljs.core.not_empty.call(null,inst_20936__$1);
var state_21083__$1 = (function (){var statearr_21092 = state_21083;
(statearr_21092[(13)] = inst_20936__$1);

(statearr_21092[(14)] = inst_20933);

(statearr_21092[(15)] = inst_20934);

return statearr_21092;
})();
if(cljs.core.truth_(inst_20937)){
var statearr_21093_21178 = state_21083__$1;
(statearr_21093_21178[(1)] = (2));

} else {
var statearr_21094_21179 = state_21083__$1;
(statearr_21094_21179[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (24))){
var state_21083__$1 = state_21083;
var statearr_21095_21180 = state_21083__$1;
(statearr_21095_21180[(2)] = null);

(statearr_21095_21180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (39))){
var inst_21037 = (state_21083[(16)]);
var state_21083__$1 = state_21083;
var statearr_21096_21181 = state_21083__$1;
(statearr_21096_21181[(2)] = inst_21037);

(statearr_21096_21181[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (46))){
var inst_21078 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21097_21182 = state_21083__$1;
(statearr_21097_21182[(2)] = inst_21078);

(statearr_21097_21182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (4))){
var inst_20981 = (state_21083[(2)]);
var inst_20982 = cljs.core.List.EMPTY;
var inst_20983 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_20982);
var inst_20984 = (function (){return ((function (inst_20981,inst_20982,inst_20983,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20679_SHARP_){
var and__13175__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20679_SHARP_);
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20679_SHARP_));
} else {
return and__13175__auto__;
}
});
;})(inst_20981,inst_20982,inst_20983,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20985 = cljs.core.filter.call(null,inst_20984,files);
var inst_20986 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_20987 = cljs.core.concat.call(null,inst_20985,inst_20986);
var state_21083__$1 = (function (){var statearr_21098 = state_21083;
(statearr_21098[(17)] = inst_20981);

(statearr_21098[(12)] = inst_20987);

(statearr_21098[(18)] = inst_20983);

return statearr_21098;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21099_21183 = state_21083__$1;
(statearr_21099_21183[(1)] = (16));

} else {
var statearr_21100_21184 = state_21083__$1;
(statearr_21100_21184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (15))){
var inst_20971 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21101_21185 = state_21083__$1;
(statearr_21101_21185[(2)] = inst_20971);

(statearr_21101_21185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (21))){
var inst_20997 = (state_21083[(19)]);
var inst_20997__$1 = (state_21083[(2)]);
var inst_20998 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20997__$1);
var state_21083__$1 = (function (){var statearr_21102 = state_21083;
(statearr_21102[(19)] = inst_20997__$1);

return statearr_21102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21083__$1,(22),inst_20998);
} else {
if((state_val_21084 === (31))){
var inst_21081 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21083__$1,inst_21081);
} else {
if((state_val_21084 === (32))){
var inst_21037 = (state_21083[(16)]);
var inst_21042 = inst_21037.cljs$lang$protocol_mask$partition0$;
var inst_21043 = (inst_21042 & (64));
var inst_21044 = inst_21037.cljs$core$ISeq$;
var inst_21045 = (inst_21043) || (inst_21044);
var state_21083__$1 = state_21083;
if(cljs.core.truth_(inst_21045)){
var statearr_21103_21186 = state_21083__$1;
(statearr_21103_21186[(1)] = (35));

} else {
var statearr_21104_21187 = state_21083__$1;
(statearr_21104_21187[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (40))){
var inst_21058 = (state_21083[(20)]);
var inst_21057 = (state_21083[(2)]);
var inst_21058__$1 = cljs.core.get.call(null,inst_21057,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21059 = cljs.core.get.call(null,inst_21057,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21060 = cljs.core.not_empty.call(null,inst_21058__$1);
var state_21083__$1 = (function (){var statearr_21105 = state_21083;
(statearr_21105[(20)] = inst_21058__$1);

(statearr_21105[(21)] = inst_21059);

return statearr_21105;
})();
if(cljs.core.truth_(inst_21060)){
var statearr_21106_21188 = state_21083__$1;
(statearr_21106_21188[(1)] = (41));

} else {
var statearr_21107_21189 = state_21083__$1;
(statearr_21107_21189[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (33))){
var state_21083__$1 = state_21083;
var statearr_21108_21190 = state_21083__$1;
(statearr_21108_21190[(2)] = false);

(statearr_21108_21190[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (13))){
var inst_20957 = (state_21083[(22)]);
var inst_20961 = cljs.core.chunk_first.call(null,inst_20957);
var inst_20962 = cljs.core.chunk_rest.call(null,inst_20957);
var inst_20963 = cljs.core.count.call(null,inst_20961);
var inst_20944 = inst_20962;
var inst_20945 = inst_20961;
var inst_20946 = inst_20963;
var inst_20947 = (0);
var state_21083__$1 = (function (){var statearr_21109 = state_21083;
(statearr_21109[(7)] = inst_20945);

(statearr_21109[(8)] = inst_20946);

(statearr_21109[(9)] = inst_20947);

(statearr_21109[(10)] = inst_20944);

return statearr_21109;
})();
var statearr_21110_21191 = state_21083__$1;
(statearr_21110_21191[(2)] = null);

(statearr_21110_21191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (22))){
var inst_21001 = (state_21083[(23)]);
var inst_21005 = (state_21083[(24)]);
var inst_21000 = (state_21083[(25)]);
var inst_20997 = (state_21083[(19)]);
var inst_21000__$1 = (state_21083[(2)]);
var inst_21001__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21000__$1);
var inst_21002 = (function (){var all_files = inst_20997;
var res_SINGLEQUOTE_ = inst_21000__$1;
var res = inst_21001__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21001,inst_21005,inst_21000,inst_20997,inst_21000__$1,inst_21001__$1,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20680_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20680_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21001,inst_21005,inst_21000,inst_20997,inst_21000__$1,inst_21001__$1,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21003 = cljs.core.filter.call(null,inst_21002,inst_21000__$1);
var inst_21004 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21005__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21004);
var inst_21006 = cljs.core.not_empty.call(null,inst_21005__$1);
var state_21083__$1 = (function (){var statearr_21111 = state_21083;
(statearr_21111[(23)] = inst_21001__$1);

(statearr_21111[(26)] = inst_21003);

(statearr_21111[(24)] = inst_21005__$1);

(statearr_21111[(25)] = inst_21000__$1);

return statearr_21111;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21112_21192 = state_21083__$1;
(statearr_21112_21192[(1)] = (23));

} else {
var statearr_21113_21193 = state_21083__$1;
(statearr_21113_21193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (36))){
var state_21083__$1 = state_21083;
var statearr_21114_21194 = state_21083__$1;
(statearr_21114_21194[(2)] = false);

(statearr_21114_21194[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (41))){
var inst_21058 = (state_21083[(20)]);
var inst_21062 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21063 = cljs.core.map.call(null,inst_21062,inst_21058);
var inst_21064 = cljs.core.pr_str.call(null,inst_21063);
var inst_21065 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21064)].join('');
var inst_21066 = figwheel.client.utils.log.call(null,inst_21065);
var state_21083__$1 = state_21083;
var statearr_21115_21195 = state_21083__$1;
(statearr_21115_21195[(2)] = inst_21066);

(statearr_21115_21195[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (43))){
var inst_21059 = (state_21083[(21)]);
var inst_21069 = (state_21083[(2)]);
var inst_21070 = cljs.core.not_empty.call(null,inst_21059);
var state_21083__$1 = (function (){var statearr_21116 = state_21083;
(statearr_21116[(27)] = inst_21069);

return statearr_21116;
})();
if(cljs.core.truth_(inst_21070)){
var statearr_21117_21196 = state_21083__$1;
(statearr_21117_21196[(1)] = (44));

} else {
var statearr_21118_21197 = state_21083__$1;
(statearr_21118_21197[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (29))){
var inst_21001 = (state_21083[(23)]);
var inst_21003 = (state_21083[(26)]);
var inst_21005 = (state_21083[(24)]);
var inst_21000 = (state_21083[(25)]);
var inst_21037 = (state_21083[(16)]);
var inst_20997 = (state_21083[(19)]);
var inst_21033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21036 = (function (){var all_files = inst_20997;
var res_SINGLEQUOTE_ = inst_21000;
var res = inst_21001;
var files_not_loaded = inst_21003;
var dependencies_that_loaded = inst_21005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_21037,inst_20997,inst_21033,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21035){
var map__21119 = p__21035;
var map__21119__$1 = ((((!((map__21119 == null)))?((((map__21119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21119):map__21119);
var namespace = cljs.core.get.call(null,map__21119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_21037,inst_20997,inst_21033,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21037__$1 = cljs.core.group_by.call(null,inst_21036,inst_21003);
var inst_21039 = (inst_21037__$1 == null);
var inst_21040 = cljs.core.not.call(null,inst_21039);
var state_21083__$1 = (function (){var statearr_21121 = state_21083;
(statearr_21121[(28)] = inst_21033);

(statearr_21121[(16)] = inst_21037__$1);

return statearr_21121;
})();
if(inst_21040){
var statearr_21122_21198 = state_21083__$1;
(statearr_21122_21198[(1)] = (32));

} else {
var statearr_21123_21199 = state_21083__$1;
(statearr_21123_21199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (44))){
var inst_21059 = (state_21083[(21)]);
var inst_21072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21059);
var inst_21073 = cljs.core.pr_str.call(null,inst_21072);
var inst_21074 = [cljs.core.str("not required: "),cljs.core.str(inst_21073)].join('');
var inst_21075 = figwheel.client.utils.log.call(null,inst_21074);
var state_21083__$1 = state_21083;
var statearr_21124_21200 = state_21083__$1;
(statearr_21124_21200[(2)] = inst_21075);

(statearr_21124_21200[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (6))){
var inst_20978 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21125_21201 = state_21083__$1;
(statearr_21125_21201[(2)] = inst_20978);

(statearr_21125_21201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (28))){
var inst_21003 = (state_21083[(26)]);
var inst_21030 = (state_21083[(2)]);
var inst_21031 = cljs.core.not_empty.call(null,inst_21003);
var state_21083__$1 = (function (){var statearr_21126 = state_21083;
(statearr_21126[(29)] = inst_21030);

return statearr_21126;
})();
if(cljs.core.truth_(inst_21031)){
var statearr_21127_21202 = state_21083__$1;
(statearr_21127_21202[(1)] = (29));

} else {
var statearr_21128_21203 = state_21083__$1;
(statearr_21128_21203[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (25))){
var inst_21001 = (state_21083[(23)]);
var inst_21017 = (state_21083[(2)]);
var inst_21018 = cljs.core.not_empty.call(null,inst_21001);
var state_21083__$1 = (function (){var statearr_21129 = state_21083;
(statearr_21129[(30)] = inst_21017);

return statearr_21129;
})();
if(cljs.core.truth_(inst_21018)){
var statearr_21130_21204 = state_21083__$1;
(statearr_21130_21204[(1)] = (26));

} else {
var statearr_21131_21205 = state_21083__$1;
(statearr_21131_21205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (34))){
var inst_21052 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
if(cljs.core.truth_(inst_21052)){
var statearr_21132_21206 = state_21083__$1;
(statearr_21132_21206[(1)] = (38));

} else {
var statearr_21133_21207 = state_21083__$1;
(statearr_21133_21207[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (17))){
var state_21083__$1 = state_21083;
var statearr_21134_21208 = state_21083__$1;
(statearr_21134_21208[(2)] = recompile_dependents);

(statearr_21134_21208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (3))){
var state_21083__$1 = state_21083;
var statearr_21135_21209 = state_21083__$1;
(statearr_21135_21209[(2)] = null);

(statearr_21135_21209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (12))){
var inst_20974 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21136_21210 = state_21083__$1;
(statearr_21136_21210[(2)] = inst_20974);

(statearr_21136_21210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (2))){
var inst_20936 = (state_21083[(13)]);
var inst_20943 = cljs.core.seq.call(null,inst_20936);
var inst_20944 = inst_20943;
var inst_20945 = null;
var inst_20946 = (0);
var inst_20947 = (0);
var state_21083__$1 = (function (){var statearr_21137 = state_21083;
(statearr_21137[(7)] = inst_20945);

(statearr_21137[(8)] = inst_20946);

(statearr_21137[(9)] = inst_20947);

(statearr_21137[(10)] = inst_20944);

return statearr_21137;
})();
var statearr_21138_21211 = state_21083__$1;
(statearr_21138_21211[(2)] = null);

(statearr_21138_21211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (23))){
var inst_21001 = (state_21083[(23)]);
var inst_21003 = (state_21083[(26)]);
var inst_21005 = (state_21083[(24)]);
var inst_21000 = (state_21083[(25)]);
var inst_20997 = (state_21083[(19)]);
var inst_21008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21010 = (function (){var all_files = inst_20997;
var res_SINGLEQUOTE_ = inst_21000;
var res = inst_21001;
var files_not_loaded = inst_21003;
var dependencies_that_loaded = inst_21005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21008,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21009){
var map__21139 = p__21009;
var map__21139__$1 = ((((!((map__21139 == null)))?((((map__21139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21139):map__21139);
var request_url = cljs.core.get.call(null,map__21139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21008,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21011 = cljs.core.reverse.call(null,inst_21005);
var inst_21012 = cljs.core.map.call(null,inst_21010,inst_21011);
var inst_21013 = cljs.core.pr_str.call(null,inst_21012);
var inst_21014 = figwheel.client.utils.log.call(null,inst_21013);
var state_21083__$1 = (function (){var statearr_21141 = state_21083;
(statearr_21141[(31)] = inst_21008);

return statearr_21141;
})();
var statearr_21142_21212 = state_21083__$1;
(statearr_21142_21212[(2)] = inst_21014);

(statearr_21142_21212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (35))){
var state_21083__$1 = state_21083;
var statearr_21143_21213 = state_21083__$1;
(statearr_21143_21213[(2)] = true);

(statearr_21143_21213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (19))){
var inst_20987 = (state_21083[(12)]);
var inst_20993 = figwheel.client.file_reloading.expand_files.call(null,inst_20987);
var state_21083__$1 = state_21083;
var statearr_21144_21214 = state_21083__$1;
(statearr_21144_21214[(2)] = inst_20993);

(statearr_21144_21214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (11))){
var state_21083__$1 = state_21083;
var statearr_21145_21215 = state_21083__$1;
(statearr_21145_21215[(2)] = null);

(statearr_21145_21215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (9))){
var inst_20976 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21146_21216 = state_21083__$1;
(statearr_21146_21216[(2)] = inst_20976);

(statearr_21146_21216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (5))){
var inst_20946 = (state_21083[(8)]);
var inst_20947 = (state_21083[(9)]);
var inst_20949 = (inst_20947 < inst_20946);
var inst_20950 = inst_20949;
var state_21083__$1 = state_21083;
if(cljs.core.truth_(inst_20950)){
var statearr_21147_21217 = state_21083__$1;
(statearr_21147_21217[(1)] = (7));

} else {
var statearr_21148_21218 = state_21083__$1;
(statearr_21148_21218[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (14))){
var inst_20957 = (state_21083[(22)]);
var inst_20966 = cljs.core.first.call(null,inst_20957);
var inst_20967 = figwheel.client.file_reloading.eval_body.call(null,inst_20966,opts);
var inst_20968 = cljs.core.next.call(null,inst_20957);
var inst_20944 = inst_20968;
var inst_20945 = null;
var inst_20946 = (0);
var inst_20947 = (0);
var state_21083__$1 = (function (){var statearr_21149 = state_21083;
(statearr_21149[(7)] = inst_20945);

(statearr_21149[(8)] = inst_20946);

(statearr_21149[(9)] = inst_20947);

(statearr_21149[(10)] = inst_20944);

(statearr_21149[(32)] = inst_20967);

return statearr_21149;
})();
var statearr_21150_21219 = state_21083__$1;
(statearr_21150_21219[(2)] = null);

(statearr_21150_21219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (45))){
var state_21083__$1 = state_21083;
var statearr_21151_21220 = state_21083__$1;
(statearr_21151_21220[(2)] = null);

(statearr_21151_21220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (26))){
var inst_21001 = (state_21083[(23)]);
var inst_21003 = (state_21083[(26)]);
var inst_21005 = (state_21083[(24)]);
var inst_21000 = (state_21083[(25)]);
var inst_20997 = (state_21083[(19)]);
var inst_21020 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21022 = (function (){var all_files = inst_20997;
var res_SINGLEQUOTE_ = inst_21000;
var res = inst_21001;
var files_not_loaded = inst_21003;
var dependencies_that_loaded = inst_21005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21020,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21021){
var map__21152 = p__21021;
var map__21152__$1 = ((((!((map__21152 == null)))?((((map__21152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21152):map__21152);
var namespace = cljs.core.get.call(null,map__21152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21020,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21023 = cljs.core.map.call(null,inst_21022,inst_21001);
var inst_21024 = cljs.core.pr_str.call(null,inst_21023);
var inst_21025 = figwheel.client.utils.log.call(null,inst_21024);
var inst_21026 = (function (){var all_files = inst_20997;
var res_SINGLEQUOTE_ = inst_21000;
var res = inst_21001;
var files_not_loaded = inst_21003;
var dependencies_that_loaded = inst_21005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21020,inst_21022,inst_21023,inst_21024,inst_21025,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21001,inst_21003,inst_21005,inst_21000,inst_20997,inst_21020,inst_21022,inst_21023,inst_21024,inst_21025,state_val_21084,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21027 = setTimeout(inst_21026,(10));
var state_21083__$1 = (function (){var statearr_21154 = state_21083;
(statearr_21154[(33)] = inst_21020);

(statearr_21154[(34)] = inst_21025);

return statearr_21154;
})();
var statearr_21155_21221 = state_21083__$1;
(statearr_21155_21221[(2)] = inst_21027);

(statearr_21155_21221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (16))){
var state_21083__$1 = state_21083;
var statearr_21156_21222 = state_21083__$1;
(statearr_21156_21222[(2)] = reload_dependents);

(statearr_21156_21222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (38))){
var inst_21037 = (state_21083[(16)]);
var inst_21054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21037);
var state_21083__$1 = state_21083;
var statearr_21157_21223 = state_21083__$1;
(statearr_21157_21223[(2)] = inst_21054);

(statearr_21157_21223[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (30))){
var state_21083__$1 = state_21083;
var statearr_21158_21224 = state_21083__$1;
(statearr_21158_21224[(2)] = null);

(statearr_21158_21224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (10))){
var inst_20957 = (state_21083[(22)]);
var inst_20959 = cljs.core.chunked_seq_QMARK_.call(null,inst_20957);
var state_21083__$1 = state_21083;
if(inst_20959){
var statearr_21159_21225 = state_21083__$1;
(statearr_21159_21225[(1)] = (13));

} else {
var statearr_21160_21226 = state_21083__$1;
(statearr_21160_21226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (18))){
var inst_20991 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
if(cljs.core.truth_(inst_20991)){
var statearr_21161_21227 = state_21083__$1;
(statearr_21161_21227[(1)] = (19));

} else {
var statearr_21162_21228 = state_21083__$1;
(statearr_21162_21228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (42))){
var state_21083__$1 = state_21083;
var statearr_21163_21229 = state_21083__$1;
(statearr_21163_21229[(2)] = null);

(statearr_21163_21229[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (37))){
var inst_21049 = (state_21083[(2)]);
var state_21083__$1 = state_21083;
var statearr_21164_21230 = state_21083__$1;
(statearr_21164_21230[(2)] = inst_21049);

(statearr_21164_21230[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21084 === (8))){
var inst_20957 = (state_21083[(22)]);
var inst_20944 = (state_21083[(10)]);
var inst_20957__$1 = cljs.core.seq.call(null,inst_20944);
var state_21083__$1 = (function (){var statearr_21165 = state_21083;
(statearr_21165[(22)] = inst_20957__$1);

return statearr_21165;
})();
if(inst_20957__$1){
var statearr_21166_21231 = state_21083__$1;
(statearr_21166_21231[(1)] = (10));

} else {
var statearr_21167_21232 = state_21083__$1;
(statearr_21167_21232[(1)] = (11));

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
});})(c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__17283__auto__,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____0 = (function (){
var statearr_21171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21171[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__);

(statearr_21171[(1)] = (1));

return statearr_21171;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____1 = (function (state_21083){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_21083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e21172){if((e21172 instanceof Object)){
var ex__17287__auto__ = e21172;
var statearr_21173_21233 = state_21083;
(statearr_21173_21233[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21234 = state_21083;
state_21083 = G__21234;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__ = function(state_21083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____1.call(this,state_21083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17397__auto__ = (function (){var statearr_21174 = f__17396__auto__.call(null);
(statearr_21174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_21174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__,map__20929,map__20929__$1,opts,before_jsload,on_jsload,reload_dependents,map__20930,map__20930__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17395__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21237,link){
var map__21240 = p__21237;
var map__21240__$1 = ((((!((map__21240 == null)))?((((map__21240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21240):map__21240);
var file = cljs.core.get.call(null,map__21240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__21240,map__21240__$1,file){
return (function (p1__21235_SHARP_,p2__21236_SHARP_){
if(cljs.core._EQ_.call(null,p1__21235_SHARP_,p2__21236_SHARP_)){
return p1__21235_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__21240,map__21240__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21246){
var map__21247 = p__21246;
var map__21247__$1 = ((((!((map__21247 == null)))?((((map__21247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21247):map__21247);
var match_length = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21242_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21242_SHARP_);
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
var args21249 = [];
var len__14245__auto___21252 = arguments.length;
var i__14246__auto___21253 = (0);
while(true){
if((i__14246__auto___21253 < len__14245__auto___21252)){
args21249.push((arguments[i__14246__auto___21253]));

var G__21254 = (i__14246__auto___21253 + (1));
i__14246__auto___21253 = G__21254;
continue;
} else {
}
break;
}

var G__21251 = args21249.length;
switch (G__21251) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21249.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21256_SHARP_,p2__21257_SHARP_){
return cljs.core.assoc.call(null,p1__21256_SHARP_,cljs.core.get.call(null,p2__21257_SHARP_,key),p2__21257_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21258){
var map__21261 = p__21258;
var map__21261__$1 = ((((!((map__21261 == null)))?((((map__21261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21261):map__21261);
var f_data = map__21261__$1;
var file = cljs.core.get.call(null,map__21261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21263,files_msg){
var map__21270 = p__21263;
var map__21270__$1 = ((((!((map__21270 == null)))?((((map__21270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21270):map__21270);
var opts = map__21270__$1;
var on_cssload = cljs.core.get.call(null,map__21270__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21272_21276 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21273_21277 = null;
var count__21274_21278 = (0);
var i__21275_21279 = (0);
while(true){
if((i__21275_21279 < count__21274_21278)){
var f_21280 = cljs.core._nth.call(null,chunk__21273_21277,i__21275_21279);
figwheel.client.file_reloading.reload_css_file.call(null,f_21280);

var G__21281 = seq__21272_21276;
var G__21282 = chunk__21273_21277;
var G__21283 = count__21274_21278;
var G__21284 = (i__21275_21279 + (1));
seq__21272_21276 = G__21281;
chunk__21273_21277 = G__21282;
count__21274_21278 = G__21283;
i__21275_21279 = G__21284;
continue;
} else {
var temp__4657__auto___21285 = cljs.core.seq.call(null,seq__21272_21276);
if(temp__4657__auto___21285){
var seq__21272_21286__$1 = temp__4657__auto___21285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21272_21286__$1)){
var c__13990__auto___21287 = cljs.core.chunk_first.call(null,seq__21272_21286__$1);
var G__21288 = cljs.core.chunk_rest.call(null,seq__21272_21286__$1);
var G__21289 = c__13990__auto___21287;
var G__21290 = cljs.core.count.call(null,c__13990__auto___21287);
var G__21291 = (0);
seq__21272_21276 = G__21288;
chunk__21273_21277 = G__21289;
count__21274_21278 = G__21290;
i__21275_21279 = G__21291;
continue;
} else {
var f_21292 = cljs.core.first.call(null,seq__21272_21286__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21292);

var G__21293 = cljs.core.next.call(null,seq__21272_21286__$1);
var G__21294 = null;
var G__21295 = (0);
var G__21296 = (0);
seq__21272_21276 = G__21293;
chunk__21273_21277 = G__21294;
count__21274_21278 = G__21295;
i__21275_21279 = G__21296;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__21270,map__21270__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__21270,map__21270__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1455105330229