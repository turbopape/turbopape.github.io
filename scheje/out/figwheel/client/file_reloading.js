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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21087_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21087_SHARP_));
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
var seq__21092 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21093 = null;
var count__21094 = (0);
var i__21095 = (0);
while(true){
if((i__21095 < count__21094)){
var n = cljs.core._nth.call(null,chunk__21093,i__21095);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21096 = seq__21092;
var G__21097 = chunk__21093;
var G__21098 = count__21094;
var G__21099 = (i__21095 + (1));
seq__21092 = G__21096;
chunk__21093 = G__21097;
count__21094 = G__21098;
i__21095 = G__21099;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21092);
if(temp__4657__auto__){
var seq__21092__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21092__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__21092__$1);
var G__21100 = cljs.core.chunk_rest.call(null,seq__21092__$1);
var G__21101 = c__13990__auto__;
var G__21102 = cljs.core.count.call(null,c__13990__auto__);
var G__21103 = (0);
seq__21092 = G__21100;
chunk__21093 = G__21101;
count__21094 = G__21102;
i__21095 = G__21103;
continue;
} else {
var n = cljs.core.first.call(null,seq__21092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21104 = cljs.core.next.call(null,seq__21092__$1);
var G__21105 = null;
var G__21106 = (0);
var G__21107 = (0);
seq__21092 = G__21104;
chunk__21093 = G__21105;
count__21094 = G__21106;
i__21095 = G__21107;
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

var seq__21146_21153 = cljs.core.seq.call(null,deps);
var chunk__21147_21154 = null;
var count__21148_21155 = (0);
var i__21149_21156 = (0);
while(true){
if((i__21149_21156 < count__21148_21155)){
var dep_21157 = cljs.core._nth.call(null,chunk__21147_21154,i__21149_21156);
topo_sort_helper_STAR_.call(null,dep_21157,(depth + (1)),state);

var G__21158 = seq__21146_21153;
var G__21159 = chunk__21147_21154;
var G__21160 = count__21148_21155;
var G__21161 = (i__21149_21156 + (1));
seq__21146_21153 = G__21158;
chunk__21147_21154 = G__21159;
count__21148_21155 = G__21160;
i__21149_21156 = G__21161;
continue;
} else {
var temp__4657__auto___21162 = cljs.core.seq.call(null,seq__21146_21153);
if(temp__4657__auto___21162){
var seq__21146_21163__$1 = temp__4657__auto___21162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21146_21163__$1)){
var c__13990__auto___21164 = cljs.core.chunk_first.call(null,seq__21146_21163__$1);
var G__21165 = cljs.core.chunk_rest.call(null,seq__21146_21163__$1);
var G__21166 = c__13990__auto___21164;
var G__21167 = cljs.core.count.call(null,c__13990__auto___21164);
var G__21168 = (0);
seq__21146_21153 = G__21165;
chunk__21147_21154 = G__21166;
count__21148_21155 = G__21167;
i__21149_21156 = G__21168;
continue;
} else {
var dep_21169 = cljs.core.first.call(null,seq__21146_21163__$1);
topo_sort_helper_STAR_.call(null,dep_21169,(depth + (1)),state);

var G__21170 = cljs.core.next.call(null,seq__21146_21163__$1);
var G__21171 = null;
var G__21172 = (0);
var G__21173 = (0);
seq__21146_21153 = G__21170;
chunk__21147_21154 = G__21171;
count__21148_21155 = G__21172;
i__21149_21156 = G__21173;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21150){
var vec__21152 = p__21150;
var x = cljs.core.nth.call(null,vec__21152,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21152,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21152,x,xs,get_deps__$1){
return (function (p1__21108_SHARP_){
return clojure.set.difference.call(null,p1__21108_SHARP_,x);
});})(vec__21152,x,xs,get_deps__$1))
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
var seq__21186 = cljs.core.seq.call(null,provides);
var chunk__21187 = null;
var count__21188 = (0);
var i__21189 = (0);
while(true){
if((i__21189 < count__21188)){
var prov = cljs.core._nth.call(null,chunk__21187,i__21189);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21190_21198 = cljs.core.seq.call(null,requires);
var chunk__21191_21199 = null;
var count__21192_21200 = (0);
var i__21193_21201 = (0);
while(true){
if((i__21193_21201 < count__21192_21200)){
var req_21202 = cljs.core._nth.call(null,chunk__21191_21199,i__21193_21201);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21202,prov);

var G__21203 = seq__21190_21198;
var G__21204 = chunk__21191_21199;
var G__21205 = count__21192_21200;
var G__21206 = (i__21193_21201 + (1));
seq__21190_21198 = G__21203;
chunk__21191_21199 = G__21204;
count__21192_21200 = G__21205;
i__21193_21201 = G__21206;
continue;
} else {
var temp__4657__auto___21207 = cljs.core.seq.call(null,seq__21190_21198);
if(temp__4657__auto___21207){
var seq__21190_21208__$1 = temp__4657__auto___21207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21190_21208__$1)){
var c__13990__auto___21209 = cljs.core.chunk_first.call(null,seq__21190_21208__$1);
var G__21210 = cljs.core.chunk_rest.call(null,seq__21190_21208__$1);
var G__21211 = c__13990__auto___21209;
var G__21212 = cljs.core.count.call(null,c__13990__auto___21209);
var G__21213 = (0);
seq__21190_21198 = G__21210;
chunk__21191_21199 = G__21211;
count__21192_21200 = G__21212;
i__21193_21201 = G__21213;
continue;
} else {
var req_21214 = cljs.core.first.call(null,seq__21190_21208__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21214,prov);

var G__21215 = cljs.core.next.call(null,seq__21190_21208__$1);
var G__21216 = null;
var G__21217 = (0);
var G__21218 = (0);
seq__21190_21198 = G__21215;
chunk__21191_21199 = G__21216;
count__21192_21200 = G__21217;
i__21193_21201 = G__21218;
continue;
}
} else {
}
}
break;
}

var G__21219 = seq__21186;
var G__21220 = chunk__21187;
var G__21221 = count__21188;
var G__21222 = (i__21189 + (1));
seq__21186 = G__21219;
chunk__21187 = G__21220;
count__21188 = G__21221;
i__21189 = G__21222;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21186);
if(temp__4657__auto__){
var seq__21186__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21186__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__21186__$1);
var G__21223 = cljs.core.chunk_rest.call(null,seq__21186__$1);
var G__21224 = c__13990__auto__;
var G__21225 = cljs.core.count.call(null,c__13990__auto__);
var G__21226 = (0);
seq__21186 = G__21223;
chunk__21187 = G__21224;
count__21188 = G__21225;
i__21189 = G__21226;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21186__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21194_21227 = cljs.core.seq.call(null,requires);
var chunk__21195_21228 = null;
var count__21196_21229 = (0);
var i__21197_21230 = (0);
while(true){
if((i__21197_21230 < count__21196_21229)){
var req_21231 = cljs.core._nth.call(null,chunk__21195_21228,i__21197_21230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21231,prov);

var G__21232 = seq__21194_21227;
var G__21233 = chunk__21195_21228;
var G__21234 = count__21196_21229;
var G__21235 = (i__21197_21230 + (1));
seq__21194_21227 = G__21232;
chunk__21195_21228 = G__21233;
count__21196_21229 = G__21234;
i__21197_21230 = G__21235;
continue;
} else {
var temp__4657__auto___21236__$1 = cljs.core.seq.call(null,seq__21194_21227);
if(temp__4657__auto___21236__$1){
var seq__21194_21237__$1 = temp__4657__auto___21236__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21194_21237__$1)){
var c__13990__auto___21238 = cljs.core.chunk_first.call(null,seq__21194_21237__$1);
var G__21239 = cljs.core.chunk_rest.call(null,seq__21194_21237__$1);
var G__21240 = c__13990__auto___21238;
var G__21241 = cljs.core.count.call(null,c__13990__auto___21238);
var G__21242 = (0);
seq__21194_21227 = G__21239;
chunk__21195_21228 = G__21240;
count__21196_21229 = G__21241;
i__21197_21230 = G__21242;
continue;
} else {
var req_21243 = cljs.core.first.call(null,seq__21194_21237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21243,prov);

var G__21244 = cljs.core.next.call(null,seq__21194_21237__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__21194_21227 = G__21244;
chunk__21195_21228 = G__21245;
count__21196_21229 = G__21246;
i__21197_21230 = G__21247;
continue;
}
} else {
}
}
break;
}

var G__21248 = cljs.core.next.call(null,seq__21186__$1);
var G__21249 = null;
var G__21250 = (0);
var G__21251 = (0);
seq__21186 = G__21248;
chunk__21187 = G__21249;
count__21188 = G__21250;
i__21189 = G__21251;
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
var seq__21256_21260 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21257_21261 = null;
var count__21258_21262 = (0);
var i__21259_21263 = (0);
while(true){
if((i__21259_21263 < count__21258_21262)){
var ns_21264 = cljs.core._nth.call(null,chunk__21257_21261,i__21259_21263);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21264);

var G__21265 = seq__21256_21260;
var G__21266 = chunk__21257_21261;
var G__21267 = count__21258_21262;
var G__21268 = (i__21259_21263 + (1));
seq__21256_21260 = G__21265;
chunk__21257_21261 = G__21266;
count__21258_21262 = G__21267;
i__21259_21263 = G__21268;
continue;
} else {
var temp__4657__auto___21269 = cljs.core.seq.call(null,seq__21256_21260);
if(temp__4657__auto___21269){
var seq__21256_21270__$1 = temp__4657__auto___21269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21256_21270__$1)){
var c__13990__auto___21271 = cljs.core.chunk_first.call(null,seq__21256_21270__$1);
var G__21272 = cljs.core.chunk_rest.call(null,seq__21256_21270__$1);
var G__21273 = c__13990__auto___21271;
var G__21274 = cljs.core.count.call(null,c__13990__auto___21271);
var G__21275 = (0);
seq__21256_21260 = G__21272;
chunk__21257_21261 = G__21273;
count__21258_21262 = G__21274;
i__21259_21263 = G__21275;
continue;
} else {
var ns_21276 = cljs.core.first.call(null,seq__21256_21270__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21276);

var G__21277 = cljs.core.next.call(null,seq__21256_21270__$1);
var G__21278 = null;
var G__21279 = (0);
var G__21280 = (0);
seq__21256_21260 = G__21277;
chunk__21257_21261 = G__21278;
count__21258_21262 = G__21279;
i__21259_21263 = G__21280;
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
var G__21281__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21282__i = 0, G__21282__a = new Array(arguments.length -  0);
while (G__21282__i < G__21282__a.length) {G__21282__a[G__21282__i] = arguments[G__21282__i + 0]; ++G__21282__i;}
  args = new cljs.core.IndexedSeq(G__21282__a,0);
} 
return G__21281__delegate.call(this,args);};
G__21281.cljs$lang$maxFixedArity = 0;
G__21281.cljs$lang$applyTo = (function (arglist__21283){
var args = cljs.core.seq(arglist__21283);
return G__21281__delegate(args);
});
G__21281.cljs$core$IFn$_invoke$arity$variadic = G__21281__delegate;
return G__21281;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21285 = cljs.core._EQ_;
var expr__21286 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21285.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21286))){
var path_parts = ((function (pred__21285,expr__21286){
return (function (p1__21284_SHARP_){
return clojure.string.split.call(null,p1__21284_SHARP_,/[\/\\]/);
});})(pred__21285,expr__21286))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__21285,expr__21286){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21288){if((e21288 instanceof Error)){
var e = e21288;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21288;

}
}})());
});
;})(path_parts,sep,root,pred__21285,expr__21286))
} else {
if(cljs.core.truth_(pred__21285.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21286))){
return ((function (pred__21285,expr__21286){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__21285,expr__21286){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21285,expr__21286))
);

return deferred.addErrback(((function (deferred,pred__21285,expr__21286){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21285,expr__21286))
);
});
;})(pred__21285,expr__21286))
} else {
return ((function (pred__21285,expr__21286){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21285,expr__21286))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21289,callback){
var map__21292 = p__21289;
var map__21292__$1 = ((((!((map__21292 == null)))?((((map__21292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21292):map__21292);
var file_msg = map__21292__$1;
var request_url = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21292,map__21292__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21292,map__21292__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_21316){
var state_val_21317 = (state_21316[(1)]);
if((state_val_21317 === (7))){
var inst_21312 = (state_21316[(2)]);
var state_21316__$1 = state_21316;
var statearr_21318_21338 = state_21316__$1;
(statearr_21318_21338[(2)] = inst_21312);

(statearr_21318_21338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (1))){
var state_21316__$1 = state_21316;
var statearr_21319_21339 = state_21316__$1;
(statearr_21319_21339[(2)] = null);

(statearr_21319_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (4))){
var inst_21296 = (state_21316[(7)]);
var inst_21296__$1 = (state_21316[(2)]);
var state_21316__$1 = (function (){var statearr_21320 = state_21316;
(statearr_21320[(7)] = inst_21296__$1);

return statearr_21320;
})();
if(cljs.core.truth_(inst_21296__$1)){
var statearr_21321_21340 = state_21316__$1;
(statearr_21321_21340[(1)] = (5));

} else {
var statearr_21322_21341 = state_21316__$1;
(statearr_21322_21341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (6))){
var state_21316__$1 = state_21316;
var statearr_21323_21342 = state_21316__$1;
(statearr_21323_21342[(2)] = null);

(statearr_21323_21342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (3))){
var inst_21314 = (state_21316[(2)]);
var state_21316__$1 = state_21316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21316__$1,inst_21314);
} else {
if((state_val_21317 === (2))){
var state_21316__$1 = state_21316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21316__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21317 === (11))){
var inst_21308 = (state_21316[(2)]);
var state_21316__$1 = (function (){var statearr_21324 = state_21316;
(statearr_21324[(8)] = inst_21308);

return statearr_21324;
})();
var statearr_21325_21343 = state_21316__$1;
(statearr_21325_21343[(2)] = null);

(statearr_21325_21343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (9))){
var inst_21302 = (state_21316[(9)]);
var inst_21300 = (state_21316[(10)]);
var inst_21304 = inst_21302.call(null,inst_21300);
var state_21316__$1 = state_21316;
var statearr_21326_21344 = state_21316__$1;
(statearr_21326_21344[(2)] = inst_21304);

(statearr_21326_21344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (5))){
var inst_21296 = (state_21316[(7)]);
var inst_21298 = figwheel.client.file_reloading.blocking_load.call(null,inst_21296);
var state_21316__$1 = state_21316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21316__$1,(8),inst_21298);
} else {
if((state_val_21317 === (10))){
var inst_21300 = (state_21316[(10)]);
var inst_21306 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21300);
var state_21316__$1 = state_21316;
var statearr_21327_21345 = state_21316__$1;
(statearr_21327_21345[(2)] = inst_21306);

(statearr_21327_21345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21317 === (8))){
var inst_21302 = (state_21316[(9)]);
var inst_21296 = (state_21316[(7)]);
var inst_21300 = (state_21316[(2)]);
var inst_21301 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21302__$1 = cljs.core.get.call(null,inst_21301,inst_21296);
var state_21316__$1 = (function (){var statearr_21328 = state_21316;
(statearr_21328[(9)] = inst_21302__$1);

(statearr_21328[(10)] = inst_21300);

return statearr_21328;
})();
if(cljs.core.truth_(inst_21302__$1)){
var statearr_21329_21346 = state_21316__$1;
(statearr_21329_21346[(1)] = (9));

} else {
var statearr_21330_21347 = state_21316__$1;
(statearr_21330_21347[(1)] = (10));

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
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18082__auto__ = null;
var figwheel$client$file_reloading$state_machine__18082__auto____0 = (function (){
var statearr_21334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21334[(0)] = figwheel$client$file_reloading$state_machine__18082__auto__);

(statearr_21334[(1)] = (1));

return statearr_21334;
});
var figwheel$client$file_reloading$state_machine__18082__auto____1 = (function (state_21316){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_21316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e21335){if((e21335 instanceof Object)){
var ex__18085__auto__ = e21335;
var statearr_21336_21348 = state_21316;
(statearr_21336_21348[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21349 = state_21316;
state_21316 = G__21349;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18082__auto__ = function(state_21316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18082__auto____1.call(this,state_21316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18082__auto____0;
figwheel$client$file_reloading$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18082__auto____1;
return figwheel$client$file_reloading$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_21337 = f__18194__auto__.call(null);
(statearr_21337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_21337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21350,callback){
var map__21353 = p__21350;
var map__21353__$1 = ((((!((map__21353 == null)))?((((map__21353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21353):map__21353);
var file_msg = map__21353__$1;
var namespace = cljs.core.get.call(null,map__21353__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21353,map__21353__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21353,map__21353__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21355){
var map__21358 = p__21355;
var map__21358__$1 = ((((!((map__21358 == null)))?((((map__21358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21358):map__21358);
var file_msg = map__21358__$1;
var namespace = cljs.core.get.call(null,map__21358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21360,callback){
var map__21363 = p__21360;
var map__21363__$1 = ((((!((map__21363 == null)))?((((map__21363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21363):map__21363);
var file_msg = map__21363__$1;
var request_url = cljs.core.get.call(null,map__21363__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18193__auto___21451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___21451,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___21451,out){
return (function (state_21433){
var state_val_21434 = (state_21433[(1)]);
if((state_val_21434 === (1))){
var inst_21411 = cljs.core.nth.call(null,files,(0),null);
var inst_21412 = cljs.core.nthnext.call(null,files,(1));
var inst_21413 = files;
var state_21433__$1 = (function (){var statearr_21435 = state_21433;
(statearr_21435[(7)] = inst_21411);

(statearr_21435[(8)] = inst_21412);

(statearr_21435[(9)] = inst_21413);

return statearr_21435;
})();
var statearr_21436_21452 = state_21433__$1;
(statearr_21436_21452[(2)] = null);

(statearr_21436_21452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (2))){
var inst_21416 = (state_21433[(10)]);
var inst_21413 = (state_21433[(9)]);
var inst_21416__$1 = cljs.core.nth.call(null,inst_21413,(0),null);
var inst_21417 = cljs.core.nthnext.call(null,inst_21413,(1));
var inst_21418 = (inst_21416__$1 == null);
var inst_21419 = cljs.core.not.call(null,inst_21418);
var state_21433__$1 = (function (){var statearr_21437 = state_21433;
(statearr_21437[(11)] = inst_21417);

(statearr_21437[(10)] = inst_21416__$1);

return statearr_21437;
})();
if(inst_21419){
var statearr_21438_21453 = state_21433__$1;
(statearr_21438_21453[(1)] = (4));

} else {
var statearr_21439_21454 = state_21433__$1;
(statearr_21439_21454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (3))){
var inst_21431 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21433__$1,inst_21431);
} else {
if((state_val_21434 === (4))){
var inst_21416 = (state_21433[(10)]);
var inst_21421 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21416);
var state_21433__$1 = state_21433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21433__$1,(7),inst_21421);
} else {
if((state_val_21434 === (5))){
var inst_21427 = cljs.core.async.close_BANG_.call(null,out);
var state_21433__$1 = state_21433;
var statearr_21440_21455 = state_21433__$1;
(statearr_21440_21455[(2)] = inst_21427);

(statearr_21440_21455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (6))){
var inst_21429 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
var statearr_21441_21456 = state_21433__$1;
(statearr_21441_21456[(2)] = inst_21429);

(statearr_21441_21456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (7))){
var inst_21417 = (state_21433[(11)]);
var inst_21423 = (state_21433[(2)]);
var inst_21424 = cljs.core.async.put_BANG_.call(null,out,inst_21423);
var inst_21413 = inst_21417;
var state_21433__$1 = (function (){var statearr_21442 = state_21433;
(statearr_21442[(12)] = inst_21424);

(statearr_21442[(9)] = inst_21413);

return statearr_21442;
})();
var statearr_21443_21457 = state_21433__$1;
(statearr_21443_21457[(2)] = null);

(statearr_21443_21457[(1)] = (2));


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
});})(c__18193__auto___21451,out))
;
return ((function (switch__18081__auto__,c__18193__auto___21451,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____0 = (function (){
var statearr_21447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21447[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__);

(statearr_21447[(1)] = (1));

return statearr_21447;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____1 = (function (state_21433){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_21433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e21448){if((e21448 instanceof Object)){
var ex__18085__auto__ = e21448;
var statearr_21449_21458 = state_21433;
(statearr_21449_21458[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21459 = state_21433;
state_21433 = G__21459;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__ = function(state_21433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____1.call(this,state_21433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___21451,out))
})();
var state__18195__auto__ = (function (){var statearr_21450 = f__18194__auto__.call(null);
(statearr_21450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___21451);

return statearr_21450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___21451,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21460,opts){
var map__21464 = p__21460;
var map__21464__$1 = ((((!((map__21464 == null)))?((((map__21464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21464):map__21464);
var eval_body__$1 = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21466){var e = e21466;
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
return (function (p1__21467_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21467_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21472){
var vec__21473 = p__21472;
var k = cljs.core.nth.call(null,vec__21473,(0),null);
var v = cljs.core.nth.call(null,vec__21473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21474){
var vec__21475 = p__21474;
var k = cljs.core.nth.call(null,vec__21475,(0),null);
var v = cljs.core.nth.call(null,vec__21475,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21479,p__21480){
var map__21727 = p__21479;
var map__21727__$1 = ((((!((map__21727 == null)))?((((map__21727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21727):map__21727);
var opts = map__21727__$1;
var before_jsload = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21728 = p__21480;
var map__21728__$1 = ((((!((map__21728 == null)))?((((map__21728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21728):map__21728);
var msg = map__21728__$1;
var files = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21881){
var state_val_21882 = (state_21881[(1)]);
if((state_val_21882 === (7))){
var inst_21742 = (state_21881[(7)]);
var inst_21744 = (state_21881[(8)]);
var inst_21745 = (state_21881[(9)]);
var inst_21743 = (state_21881[(10)]);
var inst_21750 = cljs.core._nth.call(null,inst_21743,inst_21745);
var inst_21751 = figwheel.client.file_reloading.eval_body.call(null,inst_21750,opts);
var inst_21752 = (inst_21745 + (1));
var tmp21883 = inst_21742;
var tmp21884 = inst_21744;
var tmp21885 = inst_21743;
var inst_21742__$1 = tmp21883;
var inst_21743__$1 = tmp21885;
var inst_21744__$1 = tmp21884;
var inst_21745__$1 = inst_21752;
var state_21881__$1 = (function (){var statearr_21886 = state_21881;
(statearr_21886[(11)] = inst_21751);

(statearr_21886[(7)] = inst_21742__$1);

(statearr_21886[(8)] = inst_21744__$1);

(statearr_21886[(9)] = inst_21745__$1);

(statearr_21886[(10)] = inst_21743__$1);

return statearr_21886;
})();
var statearr_21887_21973 = state_21881__$1;
(statearr_21887_21973[(2)] = null);

(statearr_21887_21973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (20))){
var inst_21785 = (state_21881[(12)]);
var inst_21793 = figwheel.client.file_reloading.sort_files.call(null,inst_21785);
var state_21881__$1 = state_21881;
var statearr_21888_21974 = state_21881__$1;
(statearr_21888_21974[(2)] = inst_21793);

(statearr_21888_21974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (27))){
var state_21881__$1 = state_21881;
var statearr_21889_21975 = state_21881__$1;
(statearr_21889_21975[(2)] = null);

(statearr_21889_21975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (1))){
var inst_21734 = (state_21881[(13)]);
var inst_21731 = before_jsload.call(null,files);
var inst_21732 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21733 = (function (){return ((function (inst_21734,inst_21731,inst_21732,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21476_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21476_SHARP_);
});
;})(inst_21734,inst_21731,inst_21732,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21734__$1 = cljs.core.filter.call(null,inst_21733,files);
var inst_21735 = cljs.core.not_empty.call(null,inst_21734__$1);
var state_21881__$1 = (function (){var statearr_21890 = state_21881;
(statearr_21890[(14)] = inst_21731);

(statearr_21890[(15)] = inst_21732);

(statearr_21890[(13)] = inst_21734__$1);

return statearr_21890;
})();
if(cljs.core.truth_(inst_21735)){
var statearr_21891_21976 = state_21881__$1;
(statearr_21891_21976[(1)] = (2));

} else {
var statearr_21892_21977 = state_21881__$1;
(statearr_21892_21977[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (24))){
var state_21881__$1 = state_21881;
var statearr_21893_21978 = state_21881__$1;
(statearr_21893_21978[(2)] = null);

(statearr_21893_21978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (39))){
var inst_21835 = (state_21881[(16)]);
var state_21881__$1 = state_21881;
var statearr_21894_21979 = state_21881__$1;
(statearr_21894_21979[(2)] = inst_21835);

(statearr_21894_21979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (46))){
var inst_21876 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21895_21980 = state_21881__$1;
(statearr_21895_21980[(2)] = inst_21876);

(statearr_21895_21980[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (4))){
var inst_21779 = (state_21881[(2)]);
var inst_21780 = cljs.core.List.EMPTY;
var inst_21781 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21780);
var inst_21782 = (function (){return ((function (inst_21779,inst_21780,inst_21781,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21477_SHARP_){
var and__13175__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21477_SHARP_);
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21477_SHARP_));
} else {
return and__13175__auto__;
}
});
;})(inst_21779,inst_21780,inst_21781,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21783 = cljs.core.filter.call(null,inst_21782,files);
var inst_21784 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21785 = cljs.core.concat.call(null,inst_21783,inst_21784);
var state_21881__$1 = (function (){var statearr_21896 = state_21881;
(statearr_21896[(17)] = inst_21781);

(statearr_21896[(18)] = inst_21779);

(statearr_21896[(12)] = inst_21785);

return statearr_21896;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21897_21981 = state_21881__$1;
(statearr_21897_21981[(1)] = (16));

} else {
var statearr_21898_21982 = state_21881__$1;
(statearr_21898_21982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (15))){
var inst_21769 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21899_21983 = state_21881__$1;
(statearr_21899_21983[(2)] = inst_21769);

(statearr_21899_21983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (21))){
var inst_21795 = (state_21881[(19)]);
var inst_21795__$1 = (state_21881[(2)]);
var inst_21796 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21795__$1);
var state_21881__$1 = (function (){var statearr_21900 = state_21881;
(statearr_21900[(19)] = inst_21795__$1);

return statearr_21900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21881__$1,(22),inst_21796);
} else {
if((state_val_21882 === (31))){
var inst_21879 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21881__$1,inst_21879);
} else {
if((state_val_21882 === (32))){
var inst_21835 = (state_21881[(16)]);
var inst_21840 = inst_21835.cljs$lang$protocol_mask$partition0$;
var inst_21841 = (inst_21840 & (64));
var inst_21842 = inst_21835.cljs$core$ISeq$;
var inst_21843 = (inst_21841) || (inst_21842);
var state_21881__$1 = state_21881;
if(cljs.core.truth_(inst_21843)){
var statearr_21901_21984 = state_21881__$1;
(statearr_21901_21984[(1)] = (35));

} else {
var statearr_21902_21985 = state_21881__$1;
(statearr_21902_21985[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (40))){
var inst_21856 = (state_21881[(20)]);
var inst_21855 = (state_21881[(2)]);
var inst_21856__$1 = cljs.core.get.call(null,inst_21855,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21857 = cljs.core.get.call(null,inst_21855,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21858 = cljs.core.not_empty.call(null,inst_21856__$1);
var state_21881__$1 = (function (){var statearr_21903 = state_21881;
(statearr_21903[(20)] = inst_21856__$1);

(statearr_21903[(21)] = inst_21857);

return statearr_21903;
})();
if(cljs.core.truth_(inst_21858)){
var statearr_21904_21986 = state_21881__$1;
(statearr_21904_21986[(1)] = (41));

} else {
var statearr_21905_21987 = state_21881__$1;
(statearr_21905_21987[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (33))){
var state_21881__$1 = state_21881;
var statearr_21906_21988 = state_21881__$1;
(statearr_21906_21988[(2)] = false);

(statearr_21906_21988[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (13))){
var inst_21755 = (state_21881[(22)]);
var inst_21759 = cljs.core.chunk_first.call(null,inst_21755);
var inst_21760 = cljs.core.chunk_rest.call(null,inst_21755);
var inst_21761 = cljs.core.count.call(null,inst_21759);
var inst_21742 = inst_21760;
var inst_21743 = inst_21759;
var inst_21744 = inst_21761;
var inst_21745 = (0);
var state_21881__$1 = (function (){var statearr_21907 = state_21881;
(statearr_21907[(7)] = inst_21742);

(statearr_21907[(8)] = inst_21744);

(statearr_21907[(9)] = inst_21745);

(statearr_21907[(10)] = inst_21743);

return statearr_21907;
})();
var statearr_21908_21989 = state_21881__$1;
(statearr_21908_21989[(2)] = null);

(statearr_21908_21989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (22))){
var inst_21795 = (state_21881[(19)]);
var inst_21798 = (state_21881[(23)]);
var inst_21799 = (state_21881[(24)]);
var inst_21803 = (state_21881[(25)]);
var inst_21798__$1 = (state_21881[(2)]);
var inst_21799__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21798__$1);
var inst_21800 = (function (){var all_files = inst_21795;
var res_SINGLEQUOTE_ = inst_21798__$1;
var res = inst_21799__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21795,inst_21798,inst_21799,inst_21803,inst_21798__$1,inst_21799__$1,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21478_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21478_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21795,inst_21798,inst_21799,inst_21803,inst_21798__$1,inst_21799__$1,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21801 = cljs.core.filter.call(null,inst_21800,inst_21798__$1);
var inst_21802 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21803__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21802);
var inst_21804 = cljs.core.not_empty.call(null,inst_21803__$1);
var state_21881__$1 = (function (){var statearr_21909 = state_21881;
(statearr_21909[(23)] = inst_21798__$1);

(statearr_21909[(24)] = inst_21799__$1);

(statearr_21909[(26)] = inst_21801);

(statearr_21909[(25)] = inst_21803__$1);

return statearr_21909;
})();
if(cljs.core.truth_(inst_21804)){
var statearr_21910_21990 = state_21881__$1;
(statearr_21910_21990[(1)] = (23));

} else {
var statearr_21911_21991 = state_21881__$1;
(statearr_21911_21991[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (36))){
var state_21881__$1 = state_21881;
var statearr_21912_21992 = state_21881__$1;
(statearr_21912_21992[(2)] = false);

(statearr_21912_21992[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (41))){
var inst_21856 = (state_21881[(20)]);
var inst_21860 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21861 = cljs.core.map.call(null,inst_21860,inst_21856);
var inst_21862 = cljs.core.pr_str.call(null,inst_21861);
var inst_21863 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21862)].join('');
var inst_21864 = figwheel.client.utils.log.call(null,inst_21863);
var state_21881__$1 = state_21881;
var statearr_21913_21993 = state_21881__$1;
(statearr_21913_21993[(2)] = inst_21864);

(statearr_21913_21993[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (43))){
var inst_21857 = (state_21881[(21)]);
var inst_21867 = (state_21881[(2)]);
var inst_21868 = cljs.core.not_empty.call(null,inst_21857);
var state_21881__$1 = (function (){var statearr_21914 = state_21881;
(statearr_21914[(27)] = inst_21867);

return statearr_21914;
})();
if(cljs.core.truth_(inst_21868)){
var statearr_21915_21994 = state_21881__$1;
(statearr_21915_21994[(1)] = (44));

} else {
var statearr_21916_21995 = state_21881__$1;
(statearr_21916_21995[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (29))){
var inst_21795 = (state_21881[(19)]);
var inst_21798 = (state_21881[(23)]);
var inst_21835 = (state_21881[(16)]);
var inst_21799 = (state_21881[(24)]);
var inst_21801 = (state_21881[(26)]);
var inst_21803 = (state_21881[(25)]);
var inst_21831 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21834 = (function (){var all_files = inst_21795;
var res_SINGLEQUOTE_ = inst_21798;
var res = inst_21799;
var files_not_loaded = inst_21801;
var dependencies_that_loaded = inst_21803;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21835,inst_21799,inst_21801,inst_21803,inst_21831,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21833){
var map__21917 = p__21833;
var map__21917__$1 = ((((!((map__21917 == null)))?((((map__21917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21917):map__21917);
var namespace = cljs.core.get.call(null,map__21917__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21835,inst_21799,inst_21801,inst_21803,inst_21831,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21835__$1 = cljs.core.group_by.call(null,inst_21834,inst_21801);
var inst_21837 = (inst_21835__$1 == null);
var inst_21838 = cljs.core.not.call(null,inst_21837);
var state_21881__$1 = (function (){var statearr_21919 = state_21881;
(statearr_21919[(16)] = inst_21835__$1);

(statearr_21919[(28)] = inst_21831);

return statearr_21919;
})();
if(inst_21838){
var statearr_21920_21996 = state_21881__$1;
(statearr_21920_21996[(1)] = (32));

} else {
var statearr_21921_21997 = state_21881__$1;
(statearr_21921_21997[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (44))){
var inst_21857 = (state_21881[(21)]);
var inst_21870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21857);
var inst_21871 = cljs.core.pr_str.call(null,inst_21870);
var inst_21872 = [cljs.core.str("not required: "),cljs.core.str(inst_21871)].join('');
var inst_21873 = figwheel.client.utils.log.call(null,inst_21872);
var state_21881__$1 = state_21881;
var statearr_21922_21998 = state_21881__$1;
(statearr_21922_21998[(2)] = inst_21873);

(statearr_21922_21998[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (6))){
var inst_21776 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21923_21999 = state_21881__$1;
(statearr_21923_21999[(2)] = inst_21776);

(statearr_21923_21999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (28))){
var inst_21801 = (state_21881[(26)]);
var inst_21828 = (state_21881[(2)]);
var inst_21829 = cljs.core.not_empty.call(null,inst_21801);
var state_21881__$1 = (function (){var statearr_21924 = state_21881;
(statearr_21924[(29)] = inst_21828);

return statearr_21924;
})();
if(cljs.core.truth_(inst_21829)){
var statearr_21925_22000 = state_21881__$1;
(statearr_21925_22000[(1)] = (29));

} else {
var statearr_21926_22001 = state_21881__$1;
(statearr_21926_22001[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (25))){
var inst_21799 = (state_21881[(24)]);
var inst_21815 = (state_21881[(2)]);
var inst_21816 = cljs.core.not_empty.call(null,inst_21799);
var state_21881__$1 = (function (){var statearr_21927 = state_21881;
(statearr_21927[(30)] = inst_21815);

return statearr_21927;
})();
if(cljs.core.truth_(inst_21816)){
var statearr_21928_22002 = state_21881__$1;
(statearr_21928_22002[(1)] = (26));

} else {
var statearr_21929_22003 = state_21881__$1;
(statearr_21929_22003[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (34))){
var inst_21850 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
if(cljs.core.truth_(inst_21850)){
var statearr_21930_22004 = state_21881__$1;
(statearr_21930_22004[(1)] = (38));

} else {
var statearr_21931_22005 = state_21881__$1;
(statearr_21931_22005[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (17))){
var state_21881__$1 = state_21881;
var statearr_21932_22006 = state_21881__$1;
(statearr_21932_22006[(2)] = recompile_dependents);

(statearr_21932_22006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (3))){
var state_21881__$1 = state_21881;
var statearr_21933_22007 = state_21881__$1;
(statearr_21933_22007[(2)] = null);

(statearr_21933_22007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (12))){
var inst_21772 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21934_22008 = state_21881__$1;
(statearr_21934_22008[(2)] = inst_21772);

(statearr_21934_22008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (2))){
var inst_21734 = (state_21881[(13)]);
var inst_21741 = cljs.core.seq.call(null,inst_21734);
var inst_21742 = inst_21741;
var inst_21743 = null;
var inst_21744 = (0);
var inst_21745 = (0);
var state_21881__$1 = (function (){var statearr_21935 = state_21881;
(statearr_21935[(7)] = inst_21742);

(statearr_21935[(8)] = inst_21744);

(statearr_21935[(9)] = inst_21745);

(statearr_21935[(10)] = inst_21743);

return statearr_21935;
})();
var statearr_21936_22009 = state_21881__$1;
(statearr_21936_22009[(2)] = null);

(statearr_21936_22009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (23))){
var inst_21795 = (state_21881[(19)]);
var inst_21798 = (state_21881[(23)]);
var inst_21799 = (state_21881[(24)]);
var inst_21801 = (state_21881[(26)]);
var inst_21803 = (state_21881[(25)]);
var inst_21806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21808 = (function (){var all_files = inst_21795;
var res_SINGLEQUOTE_ = inst_21798;
var res = inst_21799;
var files_not_loaded = inst_21801;
var dependencies_that_loaded = inst_21803;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21806,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21807){
var map__21937 = p__21807;
var map__21937__$1 = ((((!((map__21937 == null)))?((((map__21937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21937):map__21937);
var request_url = cljs.core.get.call(null,map__21937__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21806,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21809 = cljs.core.reverse.call(null,inst_21803);
var inst_21810 = cljs.core.map.call(null,inst_21808,inst_21809);
var inst_21811 = cljs.core.pr_str.call(null,inst_21810);
var inst_21812 = figwheel.client.utils.log.call(null,inst_21811);
var state_21881__$1 = (function (){var statearr_21939 = state_21881;
(statearr_21939[(31)] = inst_21806);

return statearr_21939;
})();
var statearr_21940_22010 = state_21881__$1;
(statearr_21940_22010[(2)] = inst_21812);

(statearr_21940_22010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (35))){
var state_21881__$1 = state_21881;
var statearr_21941_22011 = state_21881__$1;
(statearr_21941_22011[(2)] = true);

(statearr_21941_22011[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (19))){
var inst_21785 = (state_21881[(12)]);
var inst_21791 = figwheel.client.file_reloading.expand_files.call(null,inst_21785);
var state_21881__$1 = state_21881;
var statearr_21942_22012 = state_21881__$1;
(statearr_21942_22012[(2)] = inst_21791);

(statearr_21942_22012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (11))){
var state_21881__$1 = state_21881;
var statearr_21943_22013 = state_21881__$1;
(statearr_21943_22013[(2)] = null);

(statearr_21943_22013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (9))){
var inst_21774 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21944_22014 = state_21881__$1;
(statearr_21944_22014[(2)] = inst_21774);

(statearr_21944_22014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (5))){
var inst_21744 = (state_21881[(8)]);
var inst_21745 = (state_21881[(9)]);
var inst_21747 = (inst_21745 < inst_21744);
var inst_21748 = inst_21747;
var state_21881__$1 = state_21881;
if(cljs.core.truth_(inst_21748)){
var statearr_21945_22015 = state_21881__$1;
(statearr_21945_22015[(1)] = (7));

} else {
var statearr_21946_22016 = state_21881__$1;
(statearr_21946_22016[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (14))){
var inst_21755 = (state_21881[(22)]);
var inst_21764 = cljs.core.first.call(null,inst_21755);
var inst_21765 = figwheel.client.file_reloading.eval_body.call(null,inst_21764,opts);
var inst_21766 = cljs.core.next.call(null,inst_21755);
var inst_21742 = inst_21766;
var inst_21743 = null;
var inst_21744 = (0);
var inst_21745 = (0);
var state_21881__$1 = (function (){var statearr_21947 = state_21881;
(statearr_21947[(7)] = inst_21742);

(statearr_21947[(8)] = inst_21744);

(statearr_21947[(9)] = inst_21745);

(statearr_21947[(10)] = inst_21743);

(statearr_21947[(32)] = inst_21765);

return statearr_21947;
})();
var statearr_21948_22017 = state_21881__$1;
(statearr_21948_22017[(2)] = null);

(statearr_21948_22017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (45))){
var state_21881__$1 = state_21881;
var statearr_21949_22018 = state_21881__$1;
(statearr_21949_22018[(2)] = null);

(statearr_21949_22018[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (26))){
var inst_21795 = (state_21881[(19)]);
var inst_21798 = (state_21881[(23)]);
var inst_21799 = (state_21881[(24)]);
var inst_21801 = (state_21881[(26)]);
var inst_21803 = (state_21881[(25)]);
var inst_21818 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21820 = (function (){var all_files = inst_21795;
var res_SINGLEQUOTE_ = inst_21798;
var res = inst_21799;
var files_not_loaded = inst_21801;
var dependencies_that_loaded = inst_21803;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21818,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21819){
var map__21950 = p__21819;
var map__21950__$1 = ((((!((map__21950 == null)))?((((map__21950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21950):map__21950);
var namespace = cljs.core.get.call(null,map__21950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21818,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21821 = cljs.core.map.call(null,inst_21820,inst_21799);
var inst_21822 = cljs.core.pr_str.call(null,inst_21821);
var inst_21823 = figwheel.client.utils.log.call(null,inst_21822);
var inst_21824 = (function (){var all_files = inst_21795;
var res_SINGLEQUOTE_ = inst_21798;
var res = inst_21799;
var files_not_loaded = inst_21801;
var dependencies_that_loaded = inst_21803;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21818,inst_21820,inst_21821,inst_21822,inst_21823,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21795,inst_21798,inst_21799,inst_21801,inst_21803,inst_21818,inst_21820,inst_21821,inst_21822,inst_21823,state_val_21882,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21825 = setTimeout(inst_21824,(10));
var state_21881__$1 = (function (){var statearr_21952 = state_21881;
(statearr_21952[(33)] = inst_21818);

(statearr_21952[(34)] = inst_21823);

return statearr_21952;
})();
var statearr_21953_22019 = state_21881__$1;
(statearr_21953_22019[(2)] = inst_21825);

(statearr_21953_22019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (16))){
var state_21881__$1 = state_21881;
var statearr_21954_22020 = state_21881__$1;
(statearr_21954_22020[(2)] = reload_dependents);

(statearr_21954_22020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (38))){
var inst_21835 = (state_21881[(16)]);
var inst_21852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21835);
var state_21881__$1 = state_21881;
var statearr_21955_22021 = state_21881__$1;
(statearr_21955_22021[(2)] = inst_21852);

(statearr_21955_22021[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (30))){
var state_21881__$1 = state_21881;
var statearr_21956_22022 = state_21881__$1;
(statearr_21956_22022[(2)] = null);

(statearr_21956_22022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (10))){
var inst_21755 = (state_21881[(22)]);
var inst_21757 = cljs.core.chunked_seq_QMARK_.call(null,inst_21755);
var state_21881__$1 = state_21881;
if(inst_21757){
var statearr_21957_22023 = state_21881__$1;
(statearr_21957_22023[(1)] = (13));

} else {
var statearr_21958_22024 = state_21881__$1;
(statearr_21958_22024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (18))){
var inst_21789 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
if(cljs.core.truth_(inst_21789)){
var statearr_21959_22025 = state_21881__$1;
(statearr_21959_22025[(1)] = (19));

} else {
var statearr_21960_22026 = state_21881__$1;
(statearr_21960_22026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (42))){
var state_21881__$1 = state_21881;
var statearr_21961_22027 = state_21881__$1;
(statearr_21961_22027[(2)] = null);

(statearr_21961_22027[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (37))){
var inst_21847 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21962_22028 = state_21881__$1;
(statearr_21962_22028[(2)] = inst_21847);

(statearr_21962_22028[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (8))){
var inst_21742 = (state_21881[(7)]);
var inst_21755 = (state_21881[(22)]);
var inst_21755__$1 = cljs.core.seq.call(null,inst_21742);
var state_21881__$1 = (function (){var statearr_21963 = state_21881;
(statearr_21963[(22)] = inst_21755__$1);

return statearr_21963;
})();
if(inst_21755__$1){
var statearr_21964_22029 = state_21881__$1;
(statearr_21964_22029[(1)] = (10));

} else {
var statearr_21965_22030 = state_21881__$1;
(statearr_21965_22030[(1)] = (11));

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
});})(c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18081__auto__,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____0 = (function (){
var statearr_21969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21969[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__);

(statearr_21969[(1)] = (1));

return statearr_21969;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____1 = (function (state_21881){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_21881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e21970){if((e21970 instanceof Object)){
var ex__18085__auto__ = e21970;
var statearr_21971_22031 = state_21881;
(statearr_21971_22031[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22032 = state_21881;
state_21881 = G__22032;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__ = function(state_21881){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____1.call(this,state_21881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18195__auto__ = (function (){var statearr_21972 = f__18194__auto__.call(null);
(statearr_21972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_21972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__,map__21727,map__21727__$1,opts,before_jsload,on_jsload,reload_dependents,map__21728,map__21728__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18193__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22035,link){
var map__22038 = p__22035;
var map__22038__$1 = ((((!((map__22038 == null)))?((((map__22038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22038):map__22038);
var file = cljs.core.get.call(null,map__22038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__22038,map__22038__$1,file){
return (function (p1__22033_SHARP_,p2__22034_SHARP_){
if(cljs.core._EQ_.call(null,p1__22033_SHARP_,p2__22034_SHARP_)){
return p1__22033_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__22038,map__22038__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22044){
var map__22045 = p__22044;
var map__22045__$1 = ((((!((map__22045 == null)))?((((map__22045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22045):map__22045);
var match_length = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22045__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22040_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22040_SHARP_);
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
var args22047 = [];
var len__14245__auto___22050 = arguments.length;
var i__14246__auto___22051 = (0);
while(true){
if((i__14246__auto___22051 < len__14245__auto___22050)){
args22047.push((arguments[i__14246__auto___22051]));

var G__22052 = (i__14246__auto___22051 + (1));
i__14246__auto___22051 = G__22052;
continue;
} else {
}
break;
}

var G__22049 = args22047.length;
switch (G__22049) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22047.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22054_SHARP_,p2__22055_SHARP_){
return cljs.core.assoc.call(null,p1__22054_SHARP_,cljs.core.get.call(null,p2__22055_SHARP_,key),p2__22055_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22056){
var map__22059 = p__22056;
var map__22059__$1 = ((((!((map__22059 == null)))?((((map__22059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22059):map__22059);
var f_data = map__22059__$1;
var file = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22061,files_msg){
var map__22068 = p__22061;
var map__22068__$1 = ((((!((map__22068 == null)))?((((map__22068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22068):map__22068);
var opts = map__22068__$1;
var on_cssload = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22070_22074 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22071_22075 = null;
var count__22072_22076 = (0);
var i__22073_22077 = (0);
while(true){
if((i__22073_22077 < count__22072_22076)){
var f_22078 = cljs.core._nth.call(null,chunk__22071_22075,i__22073_22077);
figwheel.client.file_reloading.reload_css_file.call(null,f_22078);

var G__22079 = seq__22070_22074;
var G__22080 = chunk__22071_22075;
var G__22081 = count__22072_22076;
var G__22082 = (i__22073_22077 + (1));
seq__22070_22074 = G__22079;
chunk__22071_22075 = G__22080;
count__22072_22076 = G__22081;
i__22073_22077 = G__22082;
continue;
} else {
var temp__4657__auto___22083 = cljs.core.seq.call(null,seq__22070_22074);
if(temp__4657__auto___22083){
var seq__22070_22084__$1 = temp__4657__auto___22083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22070_22084__$1)){
var c__13990__auto___22085 = cljs.core.chunk_first.call(null,seq__22070_22084__$1);
var G__22086 = cljs.core.chunk_rest.call(null,seq__22070_22084__$1);
var G__22087 = c__13990__auto___22085;
var G__22088 = cljs.core.count.call(null,c__13990__auto___22085);
var G__22089 = (0);
seq__22070_22074 = G__22086;
chunk__22071_22075 = G__22087;
count__22072_22076 = G__22088;
i__22073_22077 = G__22089;
continue;
} else {
var f_22090 = cljs.core.first.call(null,seq__22070_22084__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22090);

var G__22091 = cljs.core.next.call(null,seq__22070_22084__$1);
var G__22092 = null;
var G__22093 = (0);
var G__22094 = (0);
seq__22070_22074 = G__22091;
chunk__22071_22075 = G__22092;
count__22072_22076 = G__22093;
i__22073_22077 = G__22094;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22068,map__22068__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22068,map__22068__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1464515101321