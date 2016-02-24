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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21089_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21089_SHARP_));
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
var seq__21094 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21095 = null;
var count__21096 = (0);
var i__21097 = (0);
while(true){
if((i__21097 < count__21096)){
var n = cljs.core._nth.call(null,chunk__21095,i__21097);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21098 = seq__21094;
var G__21099 = chunk__21095;
var G__21100 = count__21096;
var G__21101 = (i__21097 + (1));
seq__21094 = G__21098;
chunk__21095 = G__21099;
count__21096 = G__21100;
i__21097 = G__21101;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21094);
if(temp__4657__auto__){
var seq__21094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21094__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__21094__$1);
var G__21102 = cljs.core.chunk_rest.call(null,seq__21094__$1);
var G__21103 = c__13990__auto__;
var G__21104 = cljs.core.count.call(null,c__13990__auto__);
var G__21105 = (0);
seq__21094 = G__21102;
chunk__21095 = G__21103;
count__21096 = G__21104;
i__21097 = G__21105;
continue;
} else {
var n = cljs.core.first.call(null,seq__21094__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21106 = cljs.core.next.call(null,seq__21094__$1);
var G__21107 = null;
var G__21108 = (0);
var G__21109 = (0);
seq__21094 = G__21106;
chunk__21095 = G__21107;
count__21096 = G__21108;
i__21097 = G__21109;
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

var seq__21148_21155 = cljs.core.seq.call(null,deps);
var chunk__21149_21156 = null;
var count__21150_21157 = (0);
var i__21151_21158 = (0);
while(true){
if((i__21151_21158 < count__21150_21157)){
var dep_21159 = cljs.core._nth.call(null,chunk__21149_21156,i__21151_21158);
topo_sort_helper_STAR_.call(null,dep_21159,(depth + (1)),state);

var G__21160 = seq__21148_21155;
var G__21161 = chunk__21149_21156;
var G__21162 = count__21150_21157;
var G__21163 = (i__21151_21158 + (1));
seq__21148_21155 = G__21160;
chunk__21149_21156 = G__21161;
count__21150_21157 = G__21162;
i__21151_21158 = G__21163;
continue;
} else {
var temp__4657__auto___21164 = cljs.core.seq.call(null,seq__21148_21155);
if(temp__4657__auto___21164){
var seq__21148_21165__$1 = temp__4657__auto___21164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21148_21165__$1)){
var c__13990__auto___21166 = cljs.core.chunk_first.call(null,seq__21148_21165__$1);
var G__21167 = cljs.core.chunk_rest.call(null,seq__21148_21165__$1);
var G__21168 = c__13990__auto___21166;
var G__21169 = cljs.core.count.call(null,c__13990__auto___21166);
var G__21170 = (0);
seq__21148_21155 = G__21167;
chunk__21149_21156 = G__21168;
count__21150_21157 = G__21169;
i__21151_21158 = G__21170;
continue;
} else {
var dep_21171 = cljs.core.first.call(null,seq__21148_21165__$1);
topo_sort_helper_STAR_.call(null,dep_21171,(depth + (1)),state);

var G__21172 = cljs.core.next.call(null,seq__21148_21165__$1);
var G__21173 = null;
var G__21174 = (0);
var G__21175 = (0);
seq__21148_21155 = G__21172;
chunk__21149_21156 = G__21173;
count__21150_21157 = G__21174;
i__21151_21158 = G__21175;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21152){
var vec__21154 = p__21152;
var x = cljs.core.nth.call(null,vec__21154,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21154,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21154,x,xs,get_deps__$1){
return (function (p1__21110_SHARP_){
return clojure.set.difference.call(null,p1__21110_SHARP_,x);
});})(vec__21154,x,xs,get_deps__$1))
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
var seq__21188 = cljs.core.seq.call(null,provides);
var chunk__21189 = null;
var count__21190 = (0);
var i__21191 = (0);
while(true){
if((i__21191 < count__21190)){
var prov = cljs.core._nth.call(null,chunk__21189,i__21191);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21192_21200 = cljs.core.seq.call(null,requires);
var chunk__21193_21201 = null;
var count__21194_21202 = (0);
var i__21195_21203 = (0);
while(true){
if((i__21195_21203 < count__21194_21202)){
var req_21204 = cljs.core._nth.call(null,chunk__21193_21201,i__21195_21203);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21204,prov);

var G__21205 = seq__21192_21200;
var G__21206 = chunk__21193_21201;
var G__21207 = count__21194_21202;
var G__21208 = (i__21195_21203 + (1));
seq__21192_21200 = G__21205;
chunk__21193_21201 = G__21206;
count__21194_21202 = G__21207;
i__21195_21203 = G__21208;
continue;
} else {
var temp__4657__auto___21209 = cljs.core.seq.call(null,seq__21192_21200);
if(temp__4657__auto___21209){
var seq__21192_21210__$1 = temp__4657__auto___21209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21192_21210__$1)){
var c__13990__auto___21211 = cljs.core.chunk_first.call(null,seq__21192_21210__$1);
var G__21212 = cljs.core.chunk_rest.call(null,seq__21192_21210__$1);
var G__21213 = c__13990__auto___21211;
var G__21214 = cljs.core.count.call(null,c__13990__auto___21211);
var G__21215 = (0);
seq__21192_21200 = G__21212;
chunk__21193_21201 = G__21213;
count__21194_21202 = G__21214;
i__21195_21203 = G__21215;
continue;
} else {
var req_21216 = cljs.core.first.call(null,seq__21192_21210__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21216,prov);

var G__21217 = cljs.core.next.call(null,seq__21192_21210__$1);
var G__21218 = null;
var G__21219 = (0);
var G__21220 = (0);
seq__21192_21200 = G__21217;
chunk__21193_21201 = G__21218;
count__21194_21202 = G__21219;
i__21195_21203 = G__21220;
continue;
}
} else {
}
}
break;
}

var G__21221 = seq__21188;
var G__21222 = chunk__21189;
var G__21223 = count__21190;
var G__21224 = (i__21191 + (1));
seq__21188 = G__21221;
chunk__21189 = G__21222;
count__21190 = G__21223;
i__21191 = G__21224;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21188);
if(temp__4657__auto__){
var seq__21188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21188__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__21188__$1);
var G__21225 = cljs.core.chunk_rest.call(null,seq__21188__$1);
var G__21226 = c__13990__auto__;
var G__21227 = cljs.core.count.call(null,c__13990__auto__);
var G__21228 = (0);
seq__21188 = G__21225;
chunk__21189 = G__21226;
count__21190 = G__21227;
i__21191 = G__21228;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21188__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21196_21229 = cljs.core.seq.call(null,requires);
var chunk__21197_21230 = null;
var count__21198_21231 = (0);
var i__21199_21232 = (0);
while(true){
if((i__21199_21232 < count__21198_21231)){
var req_21233 = cljs.core._nth.call(null,chunk__21197_21230,i__21199_21232);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21233,prov);

var G__21234 = seq__21196_21229;
var G__21235 = chunk__21197_21230;
var G__21236 = count__21198_21231;
var G__21237 = (i__21199_21232 + (1));
seq__21196_21229 = G__21234;
chunk__21197_21230 = G__21235;
count__21198_21231 = G__21236;
i__21199_21232 = G__21237;
continue;
} else {
var temp__4657__auto___21238__$1 = cljs.core.seq.call(null,seq__21196_21229);
if(temp__4657__auto___21238__$1){
var seq__21196_21239__$1 = temp__4657__auto___21238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21196_21239__$1)){
var c__13990__auto___21240 = cljs.core.chunk_first.call(null,seq__21196_21239__$1);
var G__21241 = cljs.core.chunk_rest.call(null,seq__21196_21239__$1);
var G__21242 = c__13990__auto___21240;
var G__21243 = cljs.core.count.call(null,c__13990__auto___21240);
var G__21244 = (0);
seq__21196_21229 = G__21241;
chunk__21197_21230 = G__21242;
count__21198_21231 = G__21243;
i__21199_21232 = G__21244;
continue;
} else {
var req_21245 = cljs.core.first.call(null,seq__21196_21239__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21245,prov);

var G__21246 = cljs.core.next.call(null,seq__21196_21239__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__21196_21229 = G__21246;
chunk__21197_21230 = G__21247;
count__21198_21231 = G__21248;
i__21199_21232 = G__21249;
continue;
}
} else {
}
}
break;
}

var G__21250 = cljs.core.next.call(null,seq__21188__$1);
var G__21251 = null;
var G__21252 = (0);
var G__21253 = (0);
seq__21188 = G__21250;
chunk__21189 = G__21251;
count__21190 = G__21252;
i__21191 = G__21253;
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
var seq__21258_21262 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21259_21263 = null;
var count__21260_21264 = (0);
var i__21261_21265 = (0);
while(true){
if((i__21261_21265 < count__21260_21264)){
var ns_21266 = cljs.core._nth.call(null,chunk__21259_21263,i__21261_21265);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21266);

var G__21267 = seq__21258_21262;
var G__21268 = chunk__21259_21263;
var G__21269 = count__21260_21264;
var G__21270 = (i__21261_21265 + (1));
seq__21258_21262 = G__21267;
chunk__21259_21263 = G__21268;
count__21260_21264 = G__21269;
i__21261_21265 = G__21270;
continue;
} else {
var temp__4657__auto___21271 = cljs.core.seq.call(null,seq__21258_21262);
if(temp__4657__auto___21271){
var seq__21258_21272__$1 = temp__4657__auto___21271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21258_21272__$1)){
var c__13990__auto___21273 = cljs.core.chunk_first.call(null,seq__21258_21272__$1);
var G__21274 = cljs.core.chunk_rest.call(null,seq__21258_21272__$1);
var G__21275 = c__13990__auto___21273;
var G__21276 = cljs.core.count.call(null,c__13990__auto___21273);
var G__21277 = (0);
seq__21258_21262 = G__21274;
chunk__21259_21263 = G__21275;
count__21260_21264 = G__21276;
i__21261_21265 = G__21277;
continue;
} else {
var ns_21278 = cljs.core.first.call(null,seq__21258_21272__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21278);

var G__21279 = cljs.core.next.call(null,seq__21258_21272__$1);
var G__21280 = null;
var G__21281 = (0);
var G__21282 = (0);
seq__21258_21262 = G__21279;
chunk__21259_21263 = G__21280;
count__21260_21264 = G__21281;
i__21261_21265 = G__21282;
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
var G__21283__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21284__i = 0, G__21284__a = new Array(arguments.length -  0);
while (G__21284__i < G__21284__a.length) {G__21284__a[G__21284__i] = arguments[G__21284__i + 0]; ++G__21284__i;}
  args = new cljs.core.IndexedSeq(G__21284__a,0);
} 
return G__21283__delegate.call(this,args);};
G__21283.cljs$lang$maxFixedArity = 0;
G__21283.cljs$lang$applyTo = (function (arglist__21285){
var args = cljs.core.seq(arglist__21285);
return G__21283__delegate(args);
});
G__21283.cljs$core$IFn$_invoke$arity$variadic = G__21283__delegate;
return G__21283;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21287 = cljs.core._EQ_;
var expr__21288 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21287.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21288))){
var path_parts = ((function (pred__21287,expr__21288){
return (function (p1__21286_SHARP_){
return clojure.string.split.call(null,p1__21286_SHARP_,/[\/\\]/);
});})(pred__21287,expr__21288))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__21287,expr__21288){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21290){if((e21290 instanceof Error)){
var e = e21290;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21290;

}
}})());
});
;})(path_parts,sep,root,pred__21287,expr__21288))
} else {
if(cljs.core.truth_(pred__21287.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21288))){
return ((function (pred__21287,expr__21288){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__21287,expr__21288){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21287,expr__21288))
);

return deferred.addErrback(((function (deferred,pred__21287,expr__21288){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21287,expr__21288))
);
});
;})(pred__21287,expr__21288))
} else {
return ((function (pred__21287,expr__21288){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21287,expr__21288))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21291,callback){
var map__21294 = p__21291;
var map__21294__$1 = ((((!((map__21294 == null)))?((((map__21294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21294):map__21294);
var file_msg = map__21294__$1;
var request_url = cljs.core.get.call(null,map__21294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21294,map__21294__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21294,map__21294__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__){
return (function (state_21318){
var state_val_21319 = (state_21318[(1)]);
if((state_val_21319 === (7))){
var inst_21314 = (state_21318[(2)]);
var state_21318__$1 = state_21318;
var statearr_21320_21340 = state_21318__$1;
(statearr_21320_21340[(2)] = inst_21314);

(statearr_21320_21340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (1))){
var state_21318__$1 = state_21318;
var statearr_21321_21341 = state_21318__$1;
(statearr_21321_21341[(2)] = null);

(statearr_21321_21341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (4))){
var inst_21298 = (state_21318[(7)]);
var inst_21298__$1 = (state_21318[(2)]);
var state_21318__$1 = (function (){var statearr_21322 = state_21318;
(statearr_21322[(7)] = inst_21298__$1);

return statearr_21322;
})();
if(cljs.core.truth_(inst_21298__$1)){
var statearr_21323_21342 = state_21318__$1;
(statearr_21323_21342[(1)] = (5));

} else {
var statearr_21324_21343 = state_21318__$1;
(statearr_21324_21343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (6))){
var state_21318__$1 = state_21318;
var statearr_21325_21344 = state_21318__$1;
(statearr_21325_21344[(2)] = null);

(statearr_21325_21344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (3))){
var inst_21316 = (state_21318[(2)]);
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21318__$1,inst_21316);
} else {
if((state_val_21319 === (2))){
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21318__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21319 === (11))){
var inst_21310 = (state_21318[(2)]);
var state_21318__$1 = (function (){var statearr_21326 = state_21318;
(statearr_21326[(8)] = inst_21310);

return statearr_21326;
})();
var statearr_21327_21345 = state_21318__$1;
(statearr_21327_21345[(2)] = null);

(statearr_21327_21345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (9))){
var inst_21302 = (state_21318[(9)]);
var inst_21304 = (state_21318[(10)]);
var inst_21306 = inst_21304.call(null,inst_21302);
var state_21318__$1 = state_21318;
var statearr_21328_21346 = state_21318__$1;
(statearr_21328_21346[(2)] = inst_21306);

(statearr_21328_21346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (5))){
var inst_21298 = (state_21318[(7)]);
var inst_21300 = figwheel.client.file_reloading.blocking_load.call(null,inst_21298);
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21318__$1,(8),inst_21300);
} else {
if((state_val_21319 === (10))){
var inst_21302 = (state_21318[(9)]);
var inst_21308 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21302);
var state_21318__$1 = state_21318;
var statearr_21329_21347 = state_21318__$1;
(statearr_21329_21347[(2)] = inst_21308);

(statearr_21329_21347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (8))){
var inst_21304 = (state_21318[(10)]);
var inst_21298 = (state_21318[(7)]);
var inst_21302 = (state_21318[(2)]);
var inst_21303 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21304__$1 = cljs.core.get.call(null,inst_21303,inst_21298);
var state_21318__$1 = (function (){var statearr_21330 = state_21318;
(statearr_21330[(9)] = inst_21302);

(statearr_21330[(10)] = inst_21304__$1);

return statearr_21330;
})();
if(cljs.core.truth_(inst_21304__$1)){
var statearr_21331_21348 = state_21318__$1;
(statearr_21331_21348[(1)] = (9));

} else {
var statearr_21332_21349 = state_21318__$1;
(statearr_21332_21349[(1)] = (10));

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
});})(c__18195__auto__))
;
return ((function (switch__18083__auto__,c__18195__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18084__auto__ = null;
var figwheel$client$file_reloading$state_machine__18084__auto____0 = (function (){
var statearr_21336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21336[(0)] = figwheel$client$file_reloading$state_machine__18084__auto__);

(statearr_21336[(1)] = (1));

return statearr_21336;
});
var figwheel$client$file_reloading$state_machine__18084__auto____1 = (function (state_21318){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_21318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e21337){if((e21337 instanceof Object)){
var ex__18087__auto__ = e21337;
var statearr_21338_21350 = state_21318;
(statearr_21338_21350[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21351 = state_21318;
state_21318 = G__21351;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18084__auto__ = function(state_21318){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18084__auto____1.call(this,state_21318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18084__auto____0;
figwheel$client$file_reloading$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18084__auto____1;
return figwheel$client$file_reloading$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__))
})();
var state__18197__auto__ = (function (){var statearr_21339 = f__18196__auto__.call(null);
(statearr_21339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_21339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__))
);

return c__18195__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21352,callback){
var map__21355 = p__21352;
var map__21355__$1 = ((((!((map__21355 == null)))?((((map__21355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21355):map__21355);
var file_msg = map__21355__$1;
var namespace = cljs.core.get.call(null,map__21355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21355,map__21355__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21355,map__21355__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21357){
var map__21360 = p__21357;
var map__21360__$1 = ((((!((map__21360 == null)))?((((map__21360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21360):map__21360);
var file_msg = map__21360__$1;
var namespace = cljs.core.get.call(null,map__21360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21362,callback){
var map__21365 = p__21362;
var map__21365__$1 = ((((!((map__21365 == null)))?((((map__21365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21365):map__21365);
var file_msg = map__21365__$1;
var request_url = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18195__auto___21453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___21453,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___21453,out){
return (function (state_21435){
var state_val_21436 = (state_21435[(1)]);
if((state_val_21436 === (1))){
var inst_21413 = cljs.core.nth.call(null,files,(0),null);
var inst_21414 = cljs.core.nthnext.call(null,files,(1));
var inst_21415 = files;
var state_21435__$1 = (function (){var statearr_21437 = state_21435;
(statearr_21437[(7)] = inst_21415);

(statearr_21437[(8)] = inst_21414);

(statearr_21437[(9)] = inst_21413);

return statearr_21437;
})();
var statearr_21438_21454 = state_21435__$1;
(statearr_21438_21454[(2)] = null);

(statearr_21438_21454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (2))){
var inst_21418 = (state_21435[(10)]);
var inst_21415 = (state_21435[(7)]);
var inst_21418__$1 = cljs.core.nth.call(null,inst_21415,(0),null);
var inst_21419 = cljs.core.nthnext.call(null,inst_21415,(1));
var inst_21420 = (inst_21418__$1 == null);
var inst_21421 = cljs.core.not.call(null,inst_21420);
var state_21435__$1 = (function (){var statearr_21439 = state_21435;
(statearr_21439[(10)] = inst_21418__$1);

(statearr_21439[(11)] = inst_21419);

return statearr_21439;
})();
if(inst_21421){
var statearr_21440_21455 = state_21435__$1;
(statearr_21440_21455[(1)] = (4));

} else {
var statearr_21441_21456 = state_21435__$1;
(statearr_21441_21456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (3))){
var inst_21433 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21435__$1,inst_21433);
} else {
if((state_val_21436 === (4))){
var inst_21418 = (state_21435[(10)]);
var inst_21423 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21418);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21435__$1,(7),inst_21423);
} else {
if((state_val_21436 === (5))){
var inst_21429 = cljs.core.async.close_BANG_.call(null,out);
var state_21435__$1 = state_21435;
var statearr_21442_21457 = state_21435__$1;
(statearr_21442_21457[(2)] = inst_21429);

(statearr_21442_21457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (6))){
var inst_21431 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21443_21458 = state_21435__$1;
(statearr_21443_21458[(2)] = inst_21431);

(statearr_21443_21458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (7))){
var inst_21419 = (state_21435[(11)]);
var inst_21425 = (state_21435[(2)]);
var inst_21426 = cljs.core.async.put_BANG_.call(null,out,inst_21425);
var inst_21415 = inst_21419;
var state_21435__$1 = (function (){var statearr_21444 = state_21435;
(statearr_21444[(12)] = inst_21426);

(statearr_21444[(7)] = inst_21415);

return statearr_21444;
})();
var statearr_21445_21459 = state_21435__$1;
(statearr_21445_21459[(2)] = null);

(statearr_21445_21459[(1)] = (2));


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
});})(c__18195__auto___21453,out))
;
return ((function (switch__18083__auto__,c__18195__auto___21453,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____0 = (function (){
var statearr_21449 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21449[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__);

(statearr_21449[(1)] = (1));

return statearr_21449;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____1 = (function (state_21435){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_21435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e21450){if((e21450 instanceof Object)){
var ex__18087__auto__ = e21450;
var statearr_21451_21460 = state_21435;
(statearr_21451_21460[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21461 = state_21435;
state_21435 = G__21461;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__ = function(state_21435){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____1.call(this,state_21435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___21453,out))
})();
var state__18197__auto__ = (function (){var statearr_21452 = f__18196__auto__.call(null);
(statearr_21452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___21453);

return statearr_21452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___21453,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21462,opts){
var map__21466 = p__21462;
var map__21466__$1 = ((((!((map__21466 == null)))?((((map__21466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21466):map__21466);
var eval_body__$1 = cljs.core.get.call(null,map__21466__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21468){var e = e21468;
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
return (function (p1__21469_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21469_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21474){
var vec__21475 = p__21474;
var k = cljs.core.nth.call(null,vec__21475,(0),null);
var v = cljs.core.nth.call(null,vec__21475,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21476){
var vec__21477 = p__21476;
var k = cljs.core.nth.call(null,vec__21477,(0),null);
var v = cljs.core.nth.call(null,vec__21477,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21481,p__21482){
var map__21729 = p__21481;
var map__21729__$1 = ((((!((map__21729 == null)))?((((map__21729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
var opts = map__21729__$1;
var before_jsload = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21730 = p__21482;
var map__21730__$1 = ((((!((map__21730 == null)))?((((map__21730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730):map__21730);
var msg = map__21730__$1;
var files = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21883){
var state_val_21884 = (state_21883[(1)]);
if((state_val_21884 === (7))){
var inst_21746 = (state_21883[(7)]);
var inst_21747 = (state_21883[(8)]);
var inst_21744 = (state_21883[(9)]);
var inst_21745 = (state_21883[(10)]);
var inst_21752 = cljs.core._nth.call(null,inst_21745,inst_21747);
var inst_21753 = figwheel.client.file_reloading.eval_body.call(null,inst_21752,opts);
var inst_21754 = (inst_21747 + (1));
var tmp21885 = inst_21746;
var tmp21886 = inst_21744;
var tmp21887 = inst_21745;
var inst_21744__$1 = tmp21886;
var inst_21745__$1 = tmp21887;
var inst_21746__$1 = tmp21885;
var inst_21747__$1 = inst_21754;
var state_21883__$1 = (function (){var statearr_21888 = state_21883;
(statearr_21888[(7)] = inst_21746__$1);

(statearr_21888[(11)] = inst_21753);

(statearr_21888[(8)] = inst_21747__$1);

(statearr_21888[(9)] = inst_21744__$1);

(statearr_21888[(10)] = inst_21745__$1);

return statearr_21888;
})();
var statearr_21889_21975 = state_21883__$1;
(statearr_21889_21975[(2)] = null);

(statearr_21889_21975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (20))){
var inst_21787 = (state_21883[(12)]);
var inst_21795 = figwheel.client.file_reloading.sort_files.call(null,inst_21787);
var state_21883__$1 = state_21883;
var statearr_21890_21976 = state_21883__$1;
(statearr_21890_21976[(2)] = inst_21795);

(statearr_21890_21976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (27))){
var state_21883__$1 = state_21883;
var statearr_21891_21977 = state_21883__$1;
(statearr_21891_21977[(2)] = null);

(statearr_21891_21977[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (1))){
var inst_21736 = (state_21883[(13)]);
var inst_21733 = before_jsload.call(null,files);
var inst_21734 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21735 = (function (){return ((function (inst_21736,inst_21733,inst_21734,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21478_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21478_SHARP_);
});
;})(inst_21736,inst_21733,inst_21734,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21736__$1 = cljs.core.filter.call(null,inst_21735,files);
var inst_21737 = cljs.core.not_empty.call(null,inst_21736__$1);
var state_21883__$1 = (function (){var statearr_21892 = state_21883;
(statearr_21892[(13)] = inst_21736__$1);

(statearr_21892[(14)] = inst_21733);

(statearr_21892[(15)] = inst_21734);

return statearr_21892;
})();
if(cljs.core.truth_(inst_21737)){
var statearr_21893_21978 = state_21883__$1;
(statearr_21893_21978[(1)] = (2));

} else {
var statearr_21894_21979 = state_21883__$1;
(statearr_21894_21979[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (24))){
var state_21883__$1 = state_21883;
var statearr_21895_21980 = state_21883__$1;
(statearr_21895_21980[(2)] = null);

(statearr_21895_21980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (39))){
var inst_21837 = (state_21883[(16)]);
var state_21883__$1 = state_21883;
var statearr_21896_21981 = state_21883__$1;
(statearr_21896_21981[(2)] = inst_21837);

(statearr_21896_21981[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (46))){
var inst_21878 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21897_21982 = state_21883__$1;
(statearr_21897_21982[(2)] = inst_21878);

(statearr_21897_21982[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (4))){
var inst_21781 = (state_21883[(2)]);
var inst_21782 = cljs.core.List.EMPTY;
var inst_21783 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21782);
var inst_21784 = (function (){return ((function (inst_21781,inst_21782,inst_21783,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21479_SHARP_){
var and__13175__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21479_SHARP_);
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21479_SHARP_));
} else {
return and__13175__auto__;
}
});
;})(inst_21781,inst_21782,inst_21783,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21785 = cljs.core.filter.call(null,inst_21784,files);
var inst_21786 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21787 = cljs.core.concat.call(null,inst_21785,inst_21786);
var state_21883__$1 = (function (){var statearr_21898 = state_21883;
(statearr_21898[(12)] = inst_21787);

(statearr_21898[(17)] = inst_21781);

(statearr_21898[(18)] = inst_21783);

return statearr_21898;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21899_21983 = state_21883__$1;
(statearr_21899_21983[(1)] = (16));

} else {
var statearr_21900_21984 = state_21883__$1;
(statearr_21900_21984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (15))){
var inst_21771 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21901_21985 = state_21883__$1;
(statearr_21901_21985[(2)] = inst_21771);

(statearr_21901_21985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (21))){
var inst_21797 = (state_21883[(19)]);
var inst_21797__$1 = (state_21883[(2)]);
var inst_21798 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21797__$1);
var state_21883__$1 = (function (){var statearr_21902 = state_21883;
(statearr_21902[(19)] = inst_21797__$1);

return statearr_21902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21883__$1,(22),inst_21798);
} else {
if((state_val_21884 === (31))){
var inst_21881 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21883__$1,inst_21881);
} else {
if((state_val_21884 === (32))){
var inst_21837 = (state_21883[(16)]);
var inst_21842 = inst_21837.cljs$lang$protocol_mask$partition0$;
var inst_21843 = (inst_21842 & (64));
var inst_21844 = inst_21837.cljs$core$ISeq$;
var inst_21845 = (inst_21843) || (inst_21844);
var state_21883__$1 = state_21883;
if(cljs.core.truth_(inst_21845)){
var statearr_21903_21986 = state_21883__$1;
(statearr_21903_21986[(1)] = (35));

} else {
var statearr_21904_21987 = state_21883__$1;
(statearr_21904_21987[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (40))){
var inst_21858 = (state_21883[(20)]);
var inst_21857 = (state_21883[(2)]);
var inst_21858__$1 = cljs.core.get.call(null,inst_21857,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21859 = cljs.core.get.call(null,inst_21857,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21860 = cljs.core.not_empty.call(null,inst_21858__$1);
var state_21883__$1 = (function (){var statearr_21905 = state_21883;
(statearr_21905[(21)] = inst_21859);

(statearr_21905[(20)] = inst_21858__$1);

return statearr_21905;
})();
if(cljs.core.truth_(inst_21860)){
var statearr_21906_21988 = state_21883__$1;
(statearr_21906_21988[(1)] = (41));

} else {
var statearr_21907_21989 = state_21883__$1;
(statearr_21907_21989[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (33))){
var state_21883__$1 = state_21883;
var statearr_21908_21990 = state_21883__$1;
(statearr_21908_21990[(2)] = false);

(statearr_21908_21990[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (13))){
var inst_21757 = (state_21883[(22)]);
var inst_21761 = cljs.core.chunk_first.call(null,inst_21757);
var inst_21762 = cljs.core.chunk_rest.call(null,inst_21757);
var inst_21763 = cljs.core.count.call(null,inst_21761);
var inst_21744 = inst_21762;
var inst_21745 = inst_21761;
var inst_21746 = inst_21763;
var inst_21747 = (0);
var state_21883__$1 = (function (){var statearr_21909 = state_21883;
(statearr_21909[(7)] = inst_21746);

(statearr_21909[(8)] = inst_21747);

(statearr_21909[(9)] = inst_21744);

(statearr_21909[(10)] = inst_21745);

return statearr_21909;
})();
var statearr_21910_21991 = state_21883__$1;
(statearr_21910_21991[(2)] = null);

(statearr_21910_21991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (22))){
var inst_21800 = (state_21883[(23)]);
var inst_21797 = (state_21883[(19)]);
var inst_21801 = (state_21883[(24)]);
var inst_21805 = (state_21883[(25)]);
var inst_21800__$1 = (state_21883[(2)]);
var inst_21801__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21800__$1);
var inst_21802 = (function (){var all_files = inst_21797;
var res_SINGLEQUOTE_ = inst_21800__$1;
var res = inst_21801__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21800,inst_21797,inst_21801,inst_21805,inst_21800__$1,inst_21801__$1,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21480_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21480_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21800,inst_21797,inst_21801,inst_21805,inst_21800__$1,inst_21801__$1,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21803 = cljs.core.filter.call(null,inst_21802,inst_21800__$1);
var inst_21804 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21805__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21804);
var inst_21806 = cljs.core.not_empty.call(null,inst_21805__$1);
var state_21883__$1 = (function (){var statearr_21911 = state_21883;
(statearr_21911[(23)] = inst_21800__$1);

(statearr_21911[(24)] = inst_21801__$1);

(statearr_21911[(25)] = inst_21805__$1);

(statearr_21911[(26)] = inst_21803);

return statearr_21911;
})();
if(cljs.core.truth_(inst_21806)){
var statearr_21912_21992 = state_21883__$1;
(statearr_21912_21992[(1)] = (23));

} else {
var statearr_21913_21993 = state_21883__$1;
(statearr_21913_21993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (36))){
var state_21883__$1 = state_21883;
var statearr_21914_21994 = state_21883__$1;
(statearr_21914_21994[(2)] = false);

(statearr_21914_21994[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (41))){
var inst_21858 = (state_21883[(20)]);
var inst_21862 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21863 = cljs.core.map.call(null,inst_21862,inst_21858);
var inst_21864 = cljs.core.pr_str.call(null,inst_21863);
var inst_21865 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21864)].join('');
var inst_21866 = figwheel.client.utils.log.call(null,inst_21865);
var state_21883__$1 = state_21883;
var statearr_21915_21995 = state_21883__$1;
(statearr_21915_21995[(2)] = inst_21866);

(statearr_21915_21995[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (43))){
var inst_21859 = (state_21883[(21)]);
var inst_21869 = (state_21883[(2)]);
var inst_21870 = cljs.core.not_empty.call(null,inst_21859);
var state_21883__$1 = (function (){var statearr_21916 = state_21883;
(statearr_21916[(27)] = inst_21869);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21870)){
var statearr_21917_21996 = state_21883__$1;
(statearr_21917_21996[(1)] = (44));

} else {
var statearr_21918_21997 = state_21883__$1;
(statearr_21918_21997[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (29))){
var inst_21800 = (state_21883[(23)]);
var inst_21837 = (state_21883[(16)]);
var inst_21797 = (state_21883[(19)]);
var inst_21801 = (state_21883[(24)]);
var inst_21805 = (state_21883[(25)]);
var inst_21803 = (state_21883[(26)]);
var inst_21833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21836 = (function (){var all_files = inst_21797;
var res_SINGLEQUOTE_ = inst_21800;
var res = inst_21801;
var files_not_loaded = inst_21803;
var dependencies_that_loaded = inst_21805;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21837,inst_21797,inst_21801,inst_21805,inst_21803,inst_21833,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21835){
var map__21919 = p__21835;
var map__21919__$1 = ((((!((map__21919 == null)))?((((map__21919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21919):map__21919);
var namespace = cljs.core.get.call(null,map__21919__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21837,inst_21797,inst_21801,inst_21805,inst_21803,inst_21833,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21837__$1 = cljs.core.group_by.call(null,inst_21836,inst_21803);
var inst_21839 = (inst_21837__$1 == null);
var inst_21840 = cljs.core.not.call(null,inst_21839);
var state_21883__$1 = (function (){var statearr_21921 = state_21883;
(statearr_21921[(16)] = inst_21837__$1);

(statearr_21921[(28)] = inst_21833);

return statearr_21921;
})();
if(inst_21840){
var statearr_21922_21998 = state_21883__$1;
(statearr_21922_21998[(1)] = (32));

} else {
var statearr_21923_21999 = state_21883__$1;
(statearr_21923_21999[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (44))){
var inst_21859 = (state_21883[(21)]);
var inst_21872 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21859);
var inst_21873 = cljs.core.pr_str.call(null,inst_21872);
var inst_21874 = [cljs.core.str("not required: "),cljs.core.str(inst_21873)].join('');
var inst_21875 = figwheel.client.utils.log.call(null,inst_21874);
var state_21883__$1 = state_21883;
var statearr_21924_22000 = state_21883__$1;
(statearr_21924_22000[(2)] = inst_21875);

(statearr_21924_22000[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (6))){
var inst_21778 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21925_22001 = state_21883__$1;
(statearr_21925_22001[(2)] = inst_21778);

(statearr_21925_22001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (28))){
var inst_21803 = (state_21883[(26)]);
var inst_21830 = (state_21883[(2)]);
var inst_21831 = cljs.core.not_empty.call(null,inst_21803);
var state_21883__$1 = (function (){var statearr_21926 = state_21883;
(statearr_21926[(29)] = inst_21830);

return statearr_21926;
})();
if(cljs.core.truth_(inst_21831)){
var statearr_21927_22002 = state_21883__$1;
(statearr_21927_22002[(1)] = (29));

} else {
var statearr_21928_22003 = state_21883__$1;
(statearr_21928_22003[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (25))){
var inst_21801 = (state_21883[(24)]);
var inst_21817 = (state_21883[(2)]);
var inst_21818 = cljs.core.not_empty.call(null,inst_21801);
var state_21883__$1 = (function (){var statearr_21929 = state_21883;
(statearr_21929[(30)] = inst_21817);

return statearr_21929;
})();
if(cljs.core.truth_(inst_21818)){
var statearr_21930_22004 = state_21883__$1;
(statearr_21930_22004[(1)] = (26));

} else {
var statearr_21931_22005 = state_21883__$1;
(statearr_21931_22005[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (34))){
var inst_21852 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
if(cljs.core.truth_(inst_21852)){
var statearr_21932_22006 = state_21883__$1;
(statearr_21932_22006[(1)] = (38));

} else {
var statearr_21933_22007 = state_21883__$1;
(statearr_21933_22007[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (17))){
var state_21883__$1 = state_21883;
var statearr_21934_22008 = state_21883__$1;
(statearr_21934_22008[(2)] = recompile_dependents);

(statearr_21934_22008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (3))){
var state_21883__$1 = state_21883;
var statearr_21935_22009 = state_21883__$1;
(statearr_21935_22009[(2)] = null);

(statearr_21935_22009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (12))){
var inst_21774 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21936_22010 = state_21883__$1;
(statearr_21936_22010[(2)] = inst_21774);

(statearr_21936_22010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (2))){
var inst_21736 = (state_21883[(13)]);
var inst_21743 = cljs.core.seq.call(null,inst_21736);
var inst_21744 = inst_21743;
var inst_21745 = null;
var inst_21746 = (0);
var inst_21747 = (0);
var state_21883__$1 = (function (){var statearr_21937 = state_21883;
(statearr_21937[(7)] = inst_21746);

(statearr_21937[(8)] = inst_21747);

(statearr_21937[(9)] = inst_21744);

(statearr_21937[(10)] = inst_21745);

return statearr_21937;
})();
var statearr_21938_22011 = state_21883__$1;
(statearr_21938_22011[(2)] = null);

(statearr_21938_22011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (23))){
var inst_21800 = (state_21883[(23)]);
var inst_21797 = (state_21883[(19)]);
var inst_21801 = (state_21883[(24)]);
var inst_21805 = (state_21883[(25)]);
var inst_21803 = (state_21883[(26)]);
var inst_21808 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21810 = (function (){var all_files = inst_21797;
var res_SINGLEQUOTE_ = inst_21800;
var res = inst_21801;
var files_not_loaded = inst_21803;
var dependencies_that_loaded = inst_21805;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21808,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21809){
var map__21939 = p__21809;
var map__21939__$1 = ((((!((map__21939 == null)))?((((map__21939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21939):map__21939);
var request_url = cljs.core.get.call(null,map__21939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21808,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21811 = cljs.core.reverse.call(null,inst_21805);
var inst_21812 = cljs.core.map.call(null,inst_21810,inst_21811);
var inst_21813 = cljs.core.pr_str.call(null,inst_21812);
var inst_21814 = figwheel.client.utils.log.call(null,inst_21813);
var state_21883__$1 = (function (){var statearr_21941 = state_21883;
(statearr_21941[(31)] = inst_21808);

return statearr_21941;
})();
var statearr_21942_22012 = state_21883__$1;
(statearr_21942_22012[(2)] = inst_21814);

(statearr_21942_22012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (35))){
var state_21883__$1 = state_21883;
var statearr_21943_22013 = state_21883__$1;
(statearr_21943_22013[(2)] = true);

(statearr_21943_22013[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (19))){
var inst_21787 = (state_21883[(12)]);
var inst_21793 = figwheel.client.file_reloading.expand_files.call(null,inst_21787);
var state_21883__$1 = state_21883;
var statearr_21944_22014 = state_21883__$1;
(statearr_21944_22014[(2)] = inst_21793);

(statearr_21944_22014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (11))){
var state_21883__$1 = state_21883;
var statearr_21945_22015 = state_21883__$1;
(statearr_21945_22015[(2)] = null);

(statearr_21945_22015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (9))){
var inst_21776 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21946_22016 = state_21883__$1;
(statearr_21946_22016[(2)] = inst_21776);

(statearr_21946_22016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (5))){
var inst_21746 = (state_21883[(7)]);
var inst_21747 = (state_21883[(8)]);
var inst_21749 = (inst_21747 < inst_21746);
var inst_21750 = inst_21749;
var state_21883__$1 = state_21883;
if(cljs.core.truth_(inst_21750)){
var statearr_21947_22017 = state_21883__$1;
(statearr_21947_22017[(1)] = (7));

} else {
var statearr_21948_22018 = state_21883__$1;
(statearr_21948_22018[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (14))){
var inst_21757 = (state_21883[(22)]);
var inst_21766 = cljs.core.first.call(null,inst_21757);
var inst_21767 = figwheel.client.file_reloading.eval_body.call(null,inst_21766,opts);
var inst_21768 = cljs.core.next.call(null,inst_21757);
var inst_21744 = inst_21768;
var inst_21745 = null;
var inst_21746 = (0);
var inst_21747 = (0);
var state_21883__$1 = (function (){var statearr_21949 = state_21883;
(statearr_21949[(32)] = inst_21767);

(statearr_21949[(7)] = inst_21746);

(statearr_21949[(8)] = inst_21747);

(statearr_21949[(9)] = inst_21744);

(statearr_21949[(10)] = inst_21745);

return statearr_21949;
})();
var statearr_21950_22019 = state_21883__$1;
(statearr_21950_22019[(2)] = null);

(statearr_21950_22019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (45))){
var state_21883__$1 = state_21883;
var statearr_21951_22020 = state_21883__$1;
(statearr_21951_22020[(2)] = null);

(statearr_21951_22020[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (26))){
var inst_21800 = (state_21883[(23)]);
var inst_21797 = (state_21883[(19)]);
var inst_21801 = (state_21883[(24)]);
var inst_21805 = (state_21883[(25)]);
var inst_21803 = (state_21883[(26)]);
var inst_21820 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21822 = (function (){var all_files = inst_21797;
var res_SINGLEQUOTE_ = inst_21800;
var res = inst_21801;
var files_not_loaded = inst_21803;
var dependencies_that_loaded = inst_21805;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21820,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21821){
var map__21952 = p__21821;
var map__21952__$1 = ((((!((map__21952 == null)))?((((map__21952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21952):map__21952);
var namespace = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21820,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21823 = cljs.core.map.call(null,inst_21822,inst_21801);
var inst_21824 = cljs.core.pr_str.call(null,inst_21823);
var inst_21825 = figwheel.client.utils.log.call(null,inst_21824);
var inst_21826 = (function (){var all_files = inst_21797;
var res_SINGLEQUOTE_ = inst_21800;
var res = inst_21801;
var files_not_loaded = inst_21803;
var dependencies_that_loaded = inst_21805;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21820,inst_21822,inst_21823,inst_21824,inst_21825,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21800,inst_21797,inst_21801,inst_21805,inst_21803,inst_21820,inst_21822,inst_21823,inst_21824,inst_21825,state_val_21884,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21827 = setTimeout(inst_21826,(10));
var state_21883__$1 = (function (){var statearr_21954 = state_21883;
(statearr_21954[(33)] = inst_21820);

(statearr_21954[(34)] = inst_21825);

return statearr_21954;
})();
var statearr_21955_22021 = state_21883__$1;
(statearr_21955_22021[(2)] = inst_21827);

(statearr_21955_22021[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (16))){
var state_21883__$1 = state_21883;
var statearr_21956_22022 = state_21883__$1;
(statearr_21956_22022[(2)] = reload_dependents);

(statearr_21956_22022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (38))){
var inst_21837 = (state_21883[(16)]);
var inst_21854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21837);
var state_21883__$1 = state_21883;
var statearr_21957_22023 = state_21883__$1;
(statearr_21957_22023[(2)] = inst_21854);

(statearr_21957_22023[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (30))){
var state_21883__$1 = state_21883;
var statearr_21958_22024 = state_21883__$1;
(statearr_21958_22024[(2)] = null);

(statearr_21958_22024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (10))){
var inst_21757 = (state_21883[(22)]);
var inst_21759 = cljs.core.chunked_seq_QMARK_.call(null,inst_21757);
var state_21883__$1 = state_21883;
if(inst_21759){
var statearr_21959_22025 = state_21883__$1;
(statearr_21959_22025[(1)] = (13));

} else {
var statearr_21960_22026 = state_21883__$1;
(statearr_21960_22026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (18))){
var inst_21791 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
if(cljs.core.truth_(inst_21791)){
var statearr_21961_22027 = state_21883__$1;
(statearr_21961_22027[(1)] = (19));

} else {
var statearr_21962_22028 = state_21883__$1;
(statearr_21962_22028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (42))){
var state_21883__$1 = state_21883;
var statearr_21963_22029 = state_21883__$1;
(statearr_21963_22029[(2)] = null);

(statearr_21963_22029[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (37))){
var inst_21849 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21964_22030 = state_21883__$1;
(statearr_21964_22030[(2)] = inst_21849);

(statearr_21964_22030[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (8))){
var inst_21757 = (state_21883[(22)]);
var inst_21744 = (state_21883[(9)]);
var inst_21757__$1 = cljs.core.seq.call(null,inst_21744);
var state_21883__$1 = (function (){var statearr_21965 = state_21883;
(statearr_21965[(22)] = inst_21757__$1);

return statearr_21965;
})();
if(inst_21757__$1){
var statearr_21966_22031 = state_21883__$1;
(statearr_21966_22031[(1)] = (10));

} else {
var statearr_21967_22032 = state_21883__$1;
(statearr_21967_22032[(1)] = (11));

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
});})(c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18083__auto__,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____0 = (function (){
var statearr_21971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21971[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__);

(statearr_21971[(1)] = (1));

return statearr_21971;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____1 = (function (state_21883){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_21883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e21972){if((e21972 instanceof Object)){
var ex__18087__auto__ = e21972;
var statearr_21973_22033 = state_21883;
(statearr_21973_22033[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22034 = state_21883;
state_21883 = G__22034;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__ = function(state_21883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____1.call(this,state_21883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18197__auto__ = (function (){var statearr_21974 = f__18196__auto__.call(null);
(statearr_21974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_21974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__,map__21729,map__21729__$1,opts,before_jsload,on_jsload,reload_dependents,map__21730,map__21730__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18195__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22037,link){
var map__22040 = p__22037;
var map__22040__$1 = ((((!((map__22040 == null)))?((((map__22040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22040):map__22040);
var file = cljs.core.get.call(null,map__22040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__22040,map__22040__$1,file){
return (function (p1__22035_SHARP_,p2__22036_SHARP_){
if(cljs.core._EQ_.call(null,p1__22035_SHARP_,p2__22036_SHARP_)){
return p1__22035_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__22040,map__22040__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22046){
var map__22047 = p__22046;
var map__22047__$1 = ((((!((map__22047 == null)))?((((map__22047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22047):map__22047);
var match_length = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22042_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22042_SHARP_);
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
var args22049 = [];
var len__14245__auto___22052 = arguments.length;
var i__14246__auto___22053 = (0);
while(true){
if((i__14246__auto___22053 < len__14245__auto___22052)){
args22049.push((arguments[i__14246__auto___22053]));

var G__22054 = (i__14246__auto___22053 + (1));
i__14246__auto___22053 = G__22054;
continue;
} else {
}
break;
}

var G__22051 = args22049.length;
switch (G__22051) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22049.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22056_SHARP_,p2__22057_SHARP_){
return cljs.core.assoc.call(null,p1__22056_SHARP_,cljs.core.get.call(null,p2__22057_SHARP_,key),p2__22057_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22058){
var map__22061 = p__22058;
var map__22061__$1 = ((((!((map__22061 == null)))?((((map__22061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22061):map__22061);
var f_data = map__22061__$1;
var file = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22063,files_msg){
var map__22070 = p__22063;
var map__22070__$1 = ((((!((map__22070 == null)))?((((map__22070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22070):map__22070);
var opts = map__22070__$1;
var on_cssload = cljs.core.get.call(null,map__22070__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22072_22076 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22073_22077 = null;
var count__22074_22078 = (0);
var i__22075_22079 = (0);
while(true){
if((i__22075_22079 < count__22074_22078)){
var f_22080 = cljs.core._nth.call(null,chunk__22073_22077,i__22075_22079);
figwheel.client.file_reloading.reload_css_file.call(null,f_22080);

var G__22081 = seq__22072_22076;
var G__22082 = chunk__22073_22077;
var G__22083 = count__22074_22078;
var G__22084 = (i__22075_22079 + (1));
seq__22072_22076 = G__22081;
chunk__22073_22077 = G__22082;
count__22074_22078 = G__22083;
i__22075_22079 = G__22084;
continue;
} else {
var temp__4657__auto___22085 = cljs.core.seq.call(null,seq__22072_22076);
if(temp__4657__auto___22085){
var seq__22072_22086__$1 = temp__4657__auto___22085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22072_22086__$1)){
var c__13990__auto___22087 = cljs.core.chunk_first.call(null,seq__22072_22086__$1);
var G__22088 = cljs.core.chunk_rest.call(null,seq__22072_22086__$1);
var G__22089 = c__13990__auto___22087;
var G__22090 = cljs.core.count.call(null,c__13990__auto___22087);
var G__22091 = (0);
seq__22072_22076 = G__22088;
chunk__22073_22077 = G__22089;
count__22074_22078 = G__22090;
i__22075_22079 = G__22091;
continue;
} else {
var f_22092 = cljs.core.first.call(null,seq__22072_22086__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22092);

var G__22093 = cljs.core.next.call(null,seq__22072_22086__$1);
var G__22094 = null;
var G__22095 = (0);
var G__22096 = (0);
seq__22072_22076 = G__22093;
chunk__22073_22077 = G__22094;
count__22074_22078 = G__22095;
i__22075_22079 = G__22096;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22070,map__22070__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22070,map__22070__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456341636564