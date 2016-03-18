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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36091_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36091_SHARP_));
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
var seq__36096 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36097 = null;
var count__36098 = (0);
var i__36099 = (0);
while(true){
if((i__36099 < count__36098)){
var n = cljs.core._nth.call(null,chunk__36097,i__36099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36100 = seq__36096;
var G__36101 = chunk__36097;
var G__36102 = count__36098;
var G__36103 = (i__36099 + (1));
seq__36096 = G__36100;
chunk__36097 = G__36101;
count__36098 = G__36102;
i__36099 = G__36103;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36096);
if(temp__4657__auto__){
var seq__36096__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36096__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__36096__$1);
var G__36104 = cljs.core.chunk_rest.call(null,seq__36096__$1);
var G__36105 = c__13990__auto__;
var G__36106 = cljs.core.count.call(null,c__13990__auto__);
var G__36107 = (0);
seq__36096 = G__36104;
chunk__36097 = G__36105;
count__36098 = G__36106;
i__36099 = G__36107;
continue;
} else {
var n = cljs.core.first.call(null,seq__36096__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36108 = cljs.core.next.call(null,seq__36096__$1);
var G__36109 = null;
var G__36110 = (0);
var G__36111 = (0);
seq__36096 = G__36108;
chunk__36097 = G__36109;
count__36098 = G__36110;
i__36099 = G__36111;
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

var seq__36150_36157 = cljs.core.seq.call(null,deps);
var chunk__36151_36158 = null;
var count__36152_36159 = (0);
var i__36153_36160 = (0);
while(true){
if((i__36153_36160 < count__36152_36159)){
var dep_36161 = cljs.core._nth.call(null,chunk__36151_36158,i__36153_36160);
topo_sort_helper_STAR_.call(null,dep_36161,(depth + (1)),state);

var G__36162 = seq__36150_36157;
var G__36163 = chunk__36151_36158;
var G__36164 = count__36152_36159;
var G__36165 = (i__36153_36160 + (1));
seq__36150_36157 = G__36162;
chunk__36151_36158 = G__36163;
count__36152_36159 = G__36164;
i__36153_36160 = G__36165;
continue;
} else {
var temp__4657__auto___36166 = cljs.core.seq.call(null,seq__36150_36157);
if(temp__4657__auto___36166){
var seq__36150_36167__$1 = temp__4657__auto___36166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36150_36167__$1)){
var c__13990__auto___36168 = cljs.core.chunk_first.call(null,seq__36150_36167__$1);
var G__36169 = cljs.core.chunk_rest.call(null,seq__36150_36167__$1);
var G__36170 = c__13990__auto___36168;
var G__36171 = cljs.core.count.call(null,c__13990__auto___36168);
var G__36172 = (0);
seq__36150_36157 = G__36169;
chunk__36151_36158 = G__36170;
count__36152_36159 = G__36171;
i__36153_36160 = G__36172;
continue;
} else {
var dep_36173 = cljs.core.first.call(null,seq__36150_36167__$1);
topo_sort_helper_STAR_.call(null,dep_36173,(depth + (1)),state);

var G__36174 = cljs.core.next.call(null,seq__36150_36167__$1);
var G__36175 = null;
var G__36176 = (0);
var G__36177 = (0);
seq__36150_36157 = G__36174;
chunk__36151_36158 = G__36175;
count__36152_36159 = G__36176;
i__36153_36160 = G__36177;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36154){
var vec__36156 = p__36154;
var x = cljs.core.nth.call(null,vec__36156,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36156,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36156,x,xs,get_deps__$1){
return (function (p1__36112_SHARP_){
return clojure.set.difference.call(null,p1__36112_SHARP_,x);
});})(vec__36156,x,xs,get_deps__$1))
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
var seq__36190 = cljs.core.seq.call(null,provides);
var chunk__36191 = null;
var count__36192 = (0);
var i__36193 = (0);
while(true){
if((i__36193 < count__36192)){
var prov = cljs.core._nth.call(null,chunk__36191,i__36193);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36194_36202 = cljs.core.seq.call(null,requires);
var chunk__36195_36203 = null;
var count__36196_36204 = (0);
var i__36197_36205 = (0);
while(true){
if((i__36197_36205 < count__36196_36204)){
var req_36206 = cljs.core._nth.call(null,chunk__36195_36203,i__36197_36205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36206,prov);

var G__36207 = seq__36194_36202;
var G__36208 = chunk__36195_36203;
var G__36209 = count__36196_36204;
var G__36210 = (i__36197_36205 + (1));
seq__36194_36202 = G__36207;
chunk__36195_36203 = G__36208;
count__36196_36204 = G__36209;
i__36197_36205 = G__36210;
continue;
} else {
var temp__4657__auto___36211 = cljs.core.seq.call(null,seq__36194_36202);
if(temp__4657__auto___36211){
var seq__36194_36212__$1 = temp__4657__auto___36211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36194_36212__$1)){
var c__13990__auto___36213 = cljs.core.chunk_first.call(null,seq__36194_36212__$1);
var G__36214 = cljs.core.chunk_rest.call(null,seq__36194_36212__$1);
var G__36215 = c__13990__auto___36213;
var G__36216 = cljs.core.count.call(null,c__13990__auto___36213);
var G__36217 = (0);
seq__36194_36202 = G__36214;
chunk__36195_36203 = G__36215;
count__36196_36204 = G__36216;
i__36197_36205 = G__36217;
continue;
} else {
var req_36218 = cljs.core.first.call(null,seq__36194_36212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36218,prov);

var G__36219 = cljs.core.next.call(null,seq__36194_36212__$1);
var G__36220 = null;
var G__36221 = (0);
var G__36222 = (0);
seq__36194_36202 = G__36219;
chunk__36195_36203 = G__36220;
count__36196_36204 = G__36221;
i__36197_36205 = G__36222;
continue;
}
} else {
}
}
break;
}

var G__36223 = seq__36190;
var G__36224 = chunk__36191;
var G__36225 = count__36192;
var G__36226 = (i__36193 + (1));
seq__36190 = G__36223;
chunk__36191 = G__36224;
count__36192 = G__36225;
i__36193 = G__36226;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36190);
if(temp__4657__auto__){
var seq__36190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36190__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__36190__$1);
var G__36227 = cljs.core.chunk_rest.call(null,seq__36190__$1);
var G__36228 = c__13990__auto__;
var G__36229 = cljs.core.count.call(null,c__13990__auto__);
var G__36230 = (0);
seq__36190 = G__36227;
chunk__36191 = G__36228;
count__36192 = G__36229;
i__36193 = G__36230;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36190__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36198_36231 = cljs.core.seq.call(null,requires);
var chunk__36199_36232 = null;
var count__36200_36233 = (0);
var i__36201_36234 = (0);
while(true){
if((i__36201_36234 < count__36200_36233)){
var req_36235 = cljs.core._nth.call(null,chunk__36199_36232,i__36201_36234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36235,prov);

var G__36236 = seq__36198_36231;
var G__36237 = chunk__36199_36232;
var G__36238 = count__36200_36233;
var G__36239 = (i__36201_36234 + (1));
seq__36198_36231 = G__36236;
chunk__36199_36232 = G__36237;
count__36200_36233 = G__36238;
i__36201_36234 = G__36239;
continue;
} else {
var temp__4657__auto___36240__$1 = cljs.core.seq.call(null,seq__36198_36231);
if(temp__4657__auto___36240__$1){
var seq__36198_36241__$1 = temp__4657__auto___36240__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36198_36241__$1)){
var c__13990__auto___36242 = cljs.core.chunk_first.call(null,seq__36198_36241__$1);
var G__36243 = cljs.core.chunk_rest.call(null,seq__36198_36241__$1);
var G__36244 = c__13990__auto___36242;
var G__36245 = cljs.core.count.call(null,c__13990__auto___36242);
var G__36246 = (0);
seq__36198_36231 = G__36243;
chunk__36199_36232 = G__36244;
count__36200_36233 = G__36245;
i__36201_36234 = G__36246;
continue;
} else {
var req_36247 = cljs.core.first.call(null,seq__36198_36241__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36247,prov);

var G__36248 = cljs.core.next.call(null,seq__36198_36241__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__36198_36231 = G__36248;
chunk__36199_36232 = G__36249;
count__36200_36233 = G__36250;
i__36201_36234 = G__36251;
continue;
}
} else {
}
}
break;
}

var G__36252 = cljs.core.next.call(null,seq__36190__$1);
var G__36253 = null;
var G__36254 = (0);
var G__36255 = (0);
seq__36190 = G__36252;
chunk__36191 = G__36253;
count__36192 = G__36254;
i__36193 = G__36255;
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
var seq__36260_36264 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36261_36265 = null;
var count__36262_36266 = (0);
var i__36263_36267 = (0);
while(true){
if((i__36263_36267 < count__36262_36266)){
var ns_36268 = cljs.core._nth.call(null,chunk__36261_36265,i__36263_36267);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36268);

var G__36269 = seq__36260_36264;
var G__36270 = chunk__36261_36265;
var G__36271 = count__36262_36266;
var G__36272 = (i__36263_36267 + (1));
seq__36260_36264 = G__36269;
chunk__36261_36265 = G__36270;
count__36262_36266 = G__36271;
i__36263_36267 = G__36272;
continue;
} else {
var temp__4657__auto___36273 = cljs.core.seq.call(null,seq__36260_36264);
if(temp__4657__auto___36273){
var seq__36260_36274__$1 = temp__4657__auto___36273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36260_36274__$1)){
var c__13990__auto___36275 = cljs.core.chunk_first.call(null,seq__36260_36274__$1);
var G__36276 = cljs.core.chunk_rest.call(null,seq__36260_36274__$1);
var G__36277 = c__13990__auto___36275;
var G__36278 = cljs.core.count.call(null,c__13990__auto___36275);
var G__36279 = (0);
seq__36260_36264 = G__36276;
chunk__36261_36265 = G__36277;
count__36262_36266 = G__36278;
i__36263_36267 = G__36279;
continue;
} else {
var ns_36280 = cljs.core.first.call(null,seq__36260_36274__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36280);

var G__36281 = cljs.core.next.call(null,seq__36260_36274__$1);
var G__36282 = null;
var G__36283 = (0);
var G__36284 = (0);
seq__36260_36264 = G__36281;
chunk__36261_36265 = G__36282;
count__36262_36266 = G__36283;
i__36263_36267 = G__36284;
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
var G__36285__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36286__i = 0, G__36286__a = new Array(arguments.length -  0);
while (G__36286__i < G__36286__a.length) {G__36286__a[G__36286__i] = arguments[G__36286__i + 0]; ++G__36286__i;}
  args = new cljs.core.IndexedSeq(G__36286__a,0);
} 
return G__36285__delegate.call(this,args);};
G__36285.cljs$lang$maxFixedArity = 0;
G__36285.cljs$lang$applyTo = (function (arglist__36287){
var args = cljs.core.seq(arglist__36287);
return G__36285__delegate(args);
});
G__36285.cljs$core$IFn$_invoke$arity$variadic = G__36285__delegate;
return G__36285;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36289 = cljs.core._EQ_;
var expr__36290 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36289.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36290))){
var path_parts = ((function (pred__36289,expr__36290){
return (function (p1__36288_SHARP_){
return clojure.string.split.call(null,p1__36288_SHARP_,/[\/\\]/);
});})(pred__36289,expr__36290))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36289,expr__36290){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36292){if((e36292 instanceof Error)){
var e = e36292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36292;

}
}})());
});
;})(path_parts,sep,root,pred__36289,expr__36290))
} else {
if(cljs.core.truth_(pred__36289.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36290))){
return ((function (pred__36289,expr__36290){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36289,expr__36290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36289,expr__36290))
);

return deferred.addErrback(((function (deferred,pred__36289,expr__36290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36289,expr__36290))
);
});
;})(pred__36289,expr__36290))
} else {
return ((function (pred__36289,expr__36290){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36289,expr__36290))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36293,callback){
var map__36296 = p__36293;
var map__36296__$1 = ((((!((map__36296 == null)))?((((map__36296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36296):map__36296);
var file_msg = map__36296__$1;
var request_url = cljs.core.get.call(null,map__36296__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36296,map__36296__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36296,map__36296__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_36320){
var state_val_36321 = (state_36320[(1)]);
if((state_val_36321 === (7))){
var inst_36316 = (state_36320[(2)]);
var state_36320__$1 = state_36320;
var statearr_36322_36342 = state_36320__$1;
(statearr_36322_36342[(2)] = inst_36316);

(statearr_36322_36342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (1))){
var state_36320__$1 = state_36320;
var statearr_36323_36343 = state_36320__$1;
(statearr_36323_36343[(2)] = null);

(statearr_36323_36343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (4))){
var inst_36300 = (state_36320[(7)]);
var inst_36300__$1 = (state_36320[(2)]);
var state_36320__$1 = (function (){var statearr_36324 = state_36320;
(statearr_36324[(7)] = inst_36300__$1);

return statearr_36324;
})();
if(cljs.core.truth_(inst_36300__$1)){
var statearr_36325_36344 = state_36320__$1;
(statearr_36325_36344[(1)] = (5));

} else {
var statearr_36326_36345 = state_36320__$1;
(statearr_36326_36345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (6))){
var state_36320__$1 = state_36320;
var statearr_36327_36346 = state_36320__$1;
(statearr_36327_36346[(2)] = null);

(statearr_36327_36346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (3))){
var inst_36318 = (state_36320[(2)]);
var state_36320__$1 = state_36320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36320__$1,inst_36318);
} else {
if((state_val_36321 === (2))){
var state_36320__$1 = state_36320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36320__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36321 === (11))){
var inst_36312 = (state_36320[(2)]);
var state_36320__$1 = (function (){var statearr_36328 = state_36320;
(statearr_36328[(8)] = inst_36312);

return statearr_36328;
})();
var statearr_36329_36347 = state_36320__$1;
(statearr_36329_36347[(2)] = null);

(statearr_36329_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (9))){
var inst_36306 = (state_36320[(9)]);
var inst_36304 = (state_36320[(10)]);
var inst_36308 = inst_36306.call(null,inst_36304);
var state_36320__$1 = state_36320;
var statearr_36330_36348 = state_36320__$1;
(statearr_36330_36348[(2)] = inst_36308);

(statearr_36330_36348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (5))){
var inst_36300 = (state_36320[(7)]);
var inst_36302 = figwheel.client.file_reloading.blocking_load.call(null,inst_36300);
var state_36320__$1 = state_36320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36320__$1,(8),inst_36302);
} else {
if((state_val_36321 === (10))){
var inst_36304 = (state_36320[(10)]);
var inst_36310 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36304);
var state_36320__$1 = state_36320;
var statearr_36331_36349 = state_36320__$1;
(statearr_36331_36349[(2)] = inst_36310);

(statearr_36331_36349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36321 === (8))){
var inst_36306 = (state_36320[(9)]);
var inst_36300 = (state_36320[(7)]);
var inst_36304 = (state_36320[(2)]);
var inst_36305 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36306__$1 = cljs.core.get.call(null,inst_36305,inst_36300);
var state_36320__$1 = (function (){var statearr_36332 = state_36320;
(statearr_36332[(9)] = inst_36306__$1);

(statearr_36332[(10)] = inst_36304);

return statearr_36332;
})();
if(cljs.core.truth_(inst_36306__$1)){
var statearr_36333_36350 = state_36320__$1;
(statearr_36333_36350[(1)] = (9));

} else {
var statearr_36334_36351 = state_36320__$1;
(statearr_36334_36351[(1)] = (10));

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
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__15599__auto__ = null;
var figwheel$client$file_reloading$state_machine__15599__auto____0 = (function (){
var statearr_36338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36338[(0)] = figwheel$client$file_reloading$state_machine__15599__auto__);

(statearr_36338[(1)] = (1));

return statearr_36338;
});
var figwheel$client$file_reloading$state_machine__15599__auto____1 = (function (state_36320){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_36320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e36339){if((e36339 instanceof Object)){
var ex__15602__auto__ = e36339;
var statearr_36340_36352 = state_36320;
(statearr_36340_36352[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36353 = state_36320;
state_36320 = G__36353;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__15599__auto__ = function(state_36320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__15599__auto____1.call(this,state_36320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__15599__auto____0;
figwheel$client$file_reloading$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__15599__auto____1;
return figwheel$client$file_reloading$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_36341 = f__15620__auto__.call(null);
(statearr_36341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_36341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36354,callback){
var map__36357 = p__36354;
var map__36357__$1 = ((((!((map__36357 == null)))?((((map__36357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36357):map__36357);
var file_msg = map__36357__$1;
var namespace = cljs.core.get.call(null,map__36357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36357,map__36357__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36357,map__36357__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36359){
var map__36362 = p__36359;
var map__36362__$1 = ((((!((map__36362 == null)))?((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36362):map__36362);
var file_msg = map__36362__$1;
var namespace = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36364,callback){
var map__36367 = p__36364;
var map__36367__$1 = ((((!((map__36367 == null)))?((((map__36367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36367):map__36367);
var file_msg = map__36367__$1;
var request_url = cljs.core.get.call(null,map__36367__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__15619__auto___36455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___36455,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___36455,out){
return (function (state_36437){
var state_val_36438 = (state_36437[(1)]);
if((state_val_36438 === (1))){
var inst_36415 = cljs.core.nth.call(null,files,(0),null);
var inst_36416 = cljs.core.nthnext.call(null,files,(1));
var inst_36417 = files;
var state_36437__$1 = (function (){var statearr_36439 = state_36437;
(statearr_36439[(7)] = inst_36415);

(statearr_36439[(8)] = inst_36416);

(statearr_36439[(9)] = inst_36417);

return statearr_36439;
})();
var statearr_36440_36456 = state_36437__$1;
(statearr_36440_36456[(2)] = null);

(statearr_36440_36456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (2))){
var inst_36420 = (state_36437[(10)]);
var inst_36417 = (state_36437[(9)]);
var inst_36420__$1 = cljs.core.nth.call(null,inst_36417,(0),null);
var inst_36421 = cljs.core.nthnext.call(null,inst_36417,(1));
var inst_36422 = (inst_36420__$1 == null);
var inst_36423 = cljs.core.not.call(null,inst_36422);
var state_36437__$1 = (function (){var statearr_36441 = state_36437;
(statearr_36441[(10)] = inst_36420__$1);

(statearr_36441[(11)] = inst_36421);

return statearr_36441;
})();
if(inst_36423){
var statearr_36442_36457 = state_36437__$1;
(statearr_36442_36457[(1)] = (4));

} else {
var statearr_36443_36458 = state_36437__$1;
(statearr_36443_36458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (3))){
var inst_36435 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36437__$1,inst_36435);
} else {
if((state_val_36438 === (4))){
var inst_36420 = (state_36437[(10)]);
var inst_36425 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36420);
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36437__$1,(7),inst_36425);
} else {
if((state_val_36438 === (5))){
var inst_36431 = cljs.core.async.close_BANG_.call(null,out);
var state_36437__$1 = state_36437;
var statearr_36444_36459 = state_36437__$1;
(statearr_36444_36459[(2)] = inst_36431);

(statearr_36444_36459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (6))){
var inst_36433 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
var statearr_36445_36460 = state_36437__$1;
(statearr_36445_36460[(2)] = inst_36433);

(statearr_36445_36460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (7))){
var inst_36421 = (state_36437[(11)]);
var inst_36427 = (state_36437[(2)]);
var inst_36428 = cljs.core.async.put_BANG_.call(null,out,inst_36427);
var inst_36417 = inst_36421;
var state_36437__$1 = (function (){var statearr_36446 = state_36437;
(statearr_36446[(12)] = inst_36428);

(statearr_36446[(9)] = inst_36417);

return statearr_36446;
})();
var statearr_36447_36461 = state_36437__$1;
(statearr_36447_36461[(2)] = null);

(statearr_36447_36461[(1)] = (2));


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
});})(c__15619__auto___36455,out))
;
return ((function (switch__15598__auto__,c__15619__auto___36455,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____0 = (function (){
var statearr_36451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36451[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__);

(statearr_36451[(1)] = (1));

return statearr_36451;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____1 = (function (state_36437){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_36437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e36452){if((e36452 instanceof Object)){
var ex__15602__auto__ = e36452;
var statearr_36453_36462 = state_36437;
(statearr_36453_36462[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36463 = state_36437;
state_36437 = G__36463;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__ = function(state_36437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____1.call(this,state_36437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___36455,out))
})();
var state__15621__auto__ = (function (){var statearr_36454 = f__15620__auto__.call(null);
(statearr_36454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___36455);

return statearr_36454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___36455,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36464,opts){
var map__36468 = p__36464;
var map__36468__$1 = ((((!((map__36468 == null)))?((((map__36468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36468):map__36468);
var eval_body__$1 = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36470){var e = e36470;
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
return (function (p1__36471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36471_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36476){
var vec__36477 = p__36476;
var k = cljs.core.nth.call(null,vec__36477,(0),null);
var v = cljs.core.nth.call(null,vec__36477,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36478){
var vec__36479 = p__36478;
var k = cljs.core.nth.call(null,vec__36479,(0),null);
var v = cljs.core.nth.call(null,vec__36479,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36483,p__36484){
var map__36731 = p__36483;
var map__36731__$1 = ((((!((map__36731 == null)))?((((map__36731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36731):map__36731);
var opts = map__36731__$1;
var before_jsload = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36732 = p__36484;
var map__36732__$1 = ((((!((map__36732 == null)))?((((map__36732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36732):map__36732);
var msg = map__36732__$1;
var files = cljs.core.get.call(null,map__36732__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36732__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36732__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36885){
var state_val_36886 = (state_36885[(1)]);
if((state_val_36886 === (7))){
var inst_36747 = (state_36885[(7)]);
var inst_36749 = (state_36885[(8)]);
var inst_36748 = (state_36885[(9)]);
var inst_36746 = (state_36885[(10)]);
var inst_36754 = cljs.core._nth.call(null,inst_36747,inst_36749);
var inst_36755 = figwheel.client.file_reloading.eval_body.call(null,inst_36754,opts);
var inst_36756 = (inst_36749 + (1));
var tmp36887 = inst_36747;
var tmp36888 = inst_36748;
var tmp36889 = inst_36746;
var inst_36746__$1 = tmp36889;
var inst_36747__$1 = tmp36887;
var inst_36748__$1 = tmp36888;
var inst_36749__$1 = inst_36756;
var state_36885__$1 = (function (){var statearr_36890 = state_36885;
(statearr_36890[(7)] = inst_36747__$1);

(statearr_36890[(8)] = inst_36749__$1);

(statearr_36890[(9)] = inst_36748__$1);

(statearr_36890[(11)] = inst_36755);

(statearr_36890[(10)] = inst_36746__$1);

return statearr_36890;
})();
var statearr_36891_36977 = state_36885__$1;
(statearr_36891_36977[(2)] = null);

(statearr_36891_36977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (20))){
var inst_36789 = (state_36885[(12)]);
var inst_36797 = figwheel.client.file_reloading.sort_files.call(null,inst_36789);
var state_36885__$1 = state_36885;
var statearr_36892_36978 = state_36885__$1;
(statearr_36892_36978[(2)] = inst_36797);

(statearr_36892_36978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (27))){
var state_36885__$1 = state_36885;
var statearr_36893_36979 = state_36885__$1;
(statearr_36893_36979[(2)] = null);

(statearr_36893_36979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (1))){
var inst_36738 = (state_36885[(13)]);
var inst_36735 = before_jsload.call(null,files);
var inst_36736 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36737 = (function (){return ((function (inst_36738,inst_36735,inst_36736,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36480_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36480_SHARP_);
});
;})(inst_36738,inst_36735,inst_36736,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36738__$1 = cljs.core.filter.call(null,inst_36737,files);
var inst_36739 = cljs.core.not_empty.call(null,inst_36738__$1);
var state_36885__$1 = (function (){var statearr_36894 = state_36885;
(statearr_36894[(14)] = inst_36736);

(statearr_36894[(13)] = inst_36738__$1);

(statearr_36894[(15)] = inst_36735);

return statearr_36894;
})();
if(cljs.core.truth_(inst_36739)){
var statearr_36895_36980 = state_36885__$1;
(statearr_36895_36980[(1)] = (2));

} else {
var statearr_36896_36981 = state_36885__$1;
(statearr_36896_36981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (24))){
var state_36885__$1 = state_36885;
var statearr_36897_36982 = state_36885__$1;
(statearr_36897_36982[(2)] = null);

(statearr_36897_36982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (39))){
var inst_36839 = (state_36885[(16)]);
var state_36885__$1 = state_36885;
var statearr_36898_36983 = state_36885__$1;
(statearr_36898_36983[(2)] = inst_36839);

(statearr_36898_36983[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (46))){
var inst_36880 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36899_36984 = state_36885__$1;
(statearr_36899_36984[(2)] = inst_36880);

(statearr_36899_36984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (4))){
var inst_36783 = (state_36885[(2)]);
var inst_36784 = cljs.core.List.EMPTY;
var inst_36785 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36784);
var inst_36786 = (function (){return ((function (inst_36783,inst_36784,inst_36785,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36481_SHARP_){
var and__13175__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36481_SHARP_);
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36481_SHARP_));
} else {
return and__13175__auto__;
}
});
;})(inst_36783,inst_36784,inst_36785,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36787 = cljs.core.filter.call(null,inst_36786,files);
var inst_36788 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36789 = cljs.core.concat.call(null,inst_36787,inst_36788);
var state_36885__$1 = (function (){var statearr_36900 = state_36885;
(statearr_36900[(12)] = inst_36789);

(statearr_36900[(17)] = inst_36783);

(statearr_36900[(18)] = inst_36785);

return statearr_36900;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36901_36985 = state_36885__$1;
(statearr_36901_36985[(1)] = (16));

} else {
var statearr_36902_36986 = state_36885__$1;
(statearr_36902_36986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (15))){
var inst_36773 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36903_36987 = state_36885__$1;
(statearr_36903_36987[(2)] = inst_36773);

(statearr_36903_36987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (21))){
var inst_36799 = (state_36885[(19)]);
var inst_36799__$1 = (state_36885[(2)]);
var inst_36800 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36799__$1);
var state_36885__$1 = (function (){var statearr_36904 = state_36885;
(statearr_36904[(19)] = inst_36799__$1);

return statearr_36904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36885__$1,(22),inst_36800);
} else {
if((state_val_36886 === (31))){
var inst_36883 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36885__$1,inst_36883);
} else {
if((state_val_36886 === (32))){
var inst_36839 = (state_36885[(16)]);
var inst_36844 = inst_36839.cljs$lang$protocol_mask$partition0$;
var inst_36845 = (inst_36844 & (64));
var inst_36846 = inst_36839.cljs$core$ISeq$;
var inst_36847 = (inst_36845) || (inst_36846);
var state_36885__$1 = state_36885;
if(cljs.core.truth_(inst_36847)){
var statearr_36905_36988 = state_36885__$1;
(statearr_36905_36988[(1)] = (35));

} else {
var statearr_36906_36989 = state_36885__$1;
(statearr_36906_36989[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (40))){
var inst_36860 = (state_36885[(20)]);
var inst_36859 = (state_36885[(2)]);
var inst_36860__$1 = cljs.core.get.call(null,inst_36859,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36861 = cljs.core.get.call(null,inst_36859,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36862 = cljs.core.not_empty.call(null,inst_36860__$1);
var state_36885__$1 = (function (){var statearr_36907 = state_36885;
(statearr_36907[(21)] = inst_36861);

(statearr_36907[(20)] = inst_36860__$1);

return statearr_36907;
})();
if(cljs.core.truth_(inst_36862)){
var statearr_36908_36990 = state_36885__$1;
(statearr_36908_36990[(1)] = (41));

} else {
var statearr_36909_36991 = state_36885__$1;
(statearr_36909_36991[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (33))){
var state_36885__$1 = state_36885;
var statearr_36910_36992 = state_36885__$1;
(statearr_36910_36992[(2)] = false);

(statearr_36910_36992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (13))){
var inst_36759 = (state_36885[(22)]);
var inst_36763 = cljs.core.chunk_first.call(null,inst_36759);
var inst_36764 = cljs.core.chunk_rest.call(null,inst_36759);
var inst_36765 = cljs.core.count.call(null,inst_36763);
var inst_36746 = inst_36764;
var inst_36747 = inst_36763;
var inst_36748 = inst_36765;
var inst_36749 = (0);
var state_36885__$1 = (function (){var statearr_36911 = state_36885;
(statearr_36911[(7)] = inst_36747);

(statearr_36911[(8)] = inst_36749);

(statearr_36911[(9)] = inst_36748);

(statearr_36911[(10)] = inst_36746);

return statearr_36911;
})();
var statearr_36912_36993 = state_36885__$1;
(statearr_36912_36993[(2)] = null);

(statearr_36912_36993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (22))){
var inst_36802 = (state_36885[(23)]);
var inst_36803 = (state_36885[(24)]);
var inst_36799 = (state_36885[(19)]);
var inst_36807 = (state_36885[(25)]);
var inst_36802__$1 = (state_36885[(2)]);
var inst_36803__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36802__$1);
var inst_36804 = (function (){var all_files = inst_36799;
var res_SINGLEQUOTE_ = inst_36802__$1;
var res = inst_36803__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36802,inst_36803,inst_36799,inst_36807,inst_36802__$1,inst_36803__$1,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36802,inst_36803,inst_36799,inst_36807,inst_36802__$1,inst_36803__$1,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36805 = cljs.core.filter.call(null,inst_36804,inst_36802__$1);
var inst_36806 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36806);
var inst_36808 = cljs.core.not_empty.call(null,inst_36807__$1);
var state_36885__$1 = (function (){var statearr_36913 = state_36885;
(statearr_36913[(23)] = inst_36802__$1);

(statearr_36913[(24)] = inst_36803__$1);

(statearr_36913[(26)] = inst_36805);

(statearr_36913[(25)] = inst_36807__$1);

return statearr_36913;
})();
if(cljs.core.truth_(inst_36808)){
var statearr_36914_36994 = state_36885__$1;
(statearr_36914_36994[(1)] = (23));

} else {
var statearr_36915_36995 = state_36885__$1;
(statearr_36915_36995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (36))){
var state_36885__$1 = state_36885;
var statearr_36916_36996 = state_36885__$1;
(statearr_36916_36996[(2)] = false);

(statearr_36916_36996[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (41))){
var inst_36860 = (state_36885[(20)]);
var inst_36864 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36865 = cljs.core.map.call(null,inst_36864,inst_36860);
var inst_36866 = cljs.core.pr_str.call(null,inst_36865);
var inst_36867 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36866)].join('');
var inst_36868 = figwheel.client.utils.log.call(null,inst_36867);
var state_36885__$1 = state_36885;
var statearr_36917_36997 = state_36885__$1;
(statearr_36917_36997[(2)] = inst_36868);

(statearr_36917_36997[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (43))){
var inst_36861 = (state_36885[(21)]);
var inst_36871 = (state_36885[(2)]);
var inst_36872 = cljs.core.not_empty.call(null,inst_36861);
var state_36885__$1 = (function (){var statearr_36918 = state_36885;
(statearr_36918[(27)] = inst_36871);

return statearr_36918;
})();
if(cljs.core.truth_(inst_36872)){
var statearr_36919_36998 = state_36885__$1;
(statearr_36919_36998[(1)] = (44));

} else {
var statearr_36920_36999 = state_36885__$1;
(statearr_36920_36999[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (29))){
var inst_36802 = (state_36885[(23)]);
var inst_36803 = (state_36885[(24)]);
var inst_36805 = (state_36885[(26)]);
var inst_36799 = (state_36885[(19)]);
var inst_36807 = (state_36885[(25)]);
var inst_36839 = (state_36885[(16)]);
var inst_36835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36838 = (function (){var all_files = inst_36799;
var res_SINGLEQUOTE_ = inst_36802;
var res = inst_36803;
var files_not_loaded = inst_36805;
var dependencies_that_loaded = inst_36807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36839,inst_36835,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36837){
var map__36921 = p__36837;
var map__36921__$1 = ((((!((map__36921 == null)))?((((map__36921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36921):map__36921);
var namespace = cljs.core.get.call(null,map__36921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36839,inst_36835,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36839__$1 = cljs.core.group_by.call(null,inst_36838,inst_36805);
var inst_36841 = (inst_36839__$1 == null);
var inst_36842 = cljs.core.not.call(null,inst_36841);
var state_36885__$1 = (function (){var statearr_36923 = state_36885;
(statearr_36923[(28)] = inst_36835);

(statearr_36923[(16)] = inst_36839__$1);

return statearr_36923;
})();
if(inst_36842){
var statearr_36924_37000 = state_36885__$1;
(statearr_36924_37000[(1)] = (32));

} else {
var statearr_36925_37001 = state_36885__$1;
(statearr_36925_37001[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (44))){
var inst_36861 = (state_36885[(21)]);
var inst_36874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36861);
var inst_36875 = cljs.core.pr_str.call(null,inst_36874);
var inst_36876 = [cljs.core.str("not required: "),cljs.core.str(inst_36875)].join('');
var inst_36877 = figwheel.client.utils.log.call(null,inst_36876);
var state_36885__$1 = state_36885;
var statearr_36926_37002 = state_36885__$1;
(statearr_36926_37002[(2)] = inst_36877);

(statearr_36926_37002[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (6))){
var inst_36780 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36927_37003 = state_36885__$1;
(statearr_36927_37003[(2)] = inst_36780);

(statearr_36927_37003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (28))){
var inst_36805 = (state_36885[(26)]);
var inst_36832 = (state_36885[(2)]);
var inst_36833 = cljs.core.not_empty.call(null,inst_36805);
var state_36885__$1 = (function (){var statearr_36928 = state_36885;
(statearr_36928[(29)] = inst_36832);

return statearr_36928;
})();
if(cljs.core.truth_(inst_36833)){
var statearr_36929_37004 = state_36885__$1;
(statearr_36929_37004[(1)] = (29));

} else {
var statearr_36930_37005 = state_36885__$1;
(statearr_36930_37005[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (25))){
var inst_36803 = (state_36885[(24)]);
var inst_36819 = (state_36885[(2)]);
var inst_36820 = cljs.core.not_empty.call(null,inst_36803);
var state_36885__$1 = (function (){var statearr_36931 = state_36885;
(statearr_36931[(30)] = inst_36819);

return statearr_36931;
})();
if(cljs.core.truth_(inst_36820)){
var statearr_36932_37006 = state_36885__$1;
(statearr_36932_37006[(1)] = (26));

} else {
var statearr_36933_37007 = state_36885__$1;
(statearr_36933_37007[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (34))){
var inst_36854 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
if(cljs.core.truth_(inst_36854)){
var statearr_36934_37008 = state_36885__$1;
(statearr_36934_37008[(1)] = (38));

} else {
var statearr_36935_37009 = state_36885__$1;
(statearr_36935_37009[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (17))){
var state_36885__$1 = state_36885;
var statearr_36936_37010 = state_36885__$1;
(statearr_36936_37010[(2)] = recompile_dependents);

(statearr_36936_37010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (3))){
var state_36885__$1 = state_36885;
var statearr_36937_37011 = state_36885__$1;
(statearr_36937_37011[(2)] = null);

(statearr_36937_37011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (12))){
var inst_36776 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36938_37012 = state_36885__$1;
(statearr_36938_37012[(2)] = inst_36776);

(statearr_36938_37012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (2))){
var inst_36738 = (state_36885[(13)]);
var inst_36745 = cljs.core.seq.call(null,inst_36738);
var inst_36746 = inst_36745;
var inst_36747 = null;
var inst_36748 = (0);
var inst_36749 = (0);
var state_36885__$1 = (function (){var statearr_36939 = state_36885;
(statearr_36939[(7)] = inst_36747);

(statearr_36939[(8)] = inst_36749);

(statearr_36939[(9)] = inst_36748);

(statearr_36939[(10)] = inst_36746);

return statearr_36939;
})();
var statearr_36940_37013 = state_36885__$1;
(statearr_36940_37013[(2)] = null);

(statearr_36940_37013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (23))){
var inst_36802 = (state_36885[(23)]);
var inst_36803 = (state_36885[(24)]);
var inst_36805 = (state_36885[(26)]);
var inst_36799 = (state_36885[(19)]);
var inst_36807 = (state_36885[(25)]);
var inst_36810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36812 = (function (){var all_files = inst_36799;
var res_SINGLEQUOTE_ = inst_36802;
var res = inst_36803;
var files_not_loaded = inst_36805;
var dependencies_that_loaded = inst_36807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36810,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36811){
var map__36941 = p__36811;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36941):map__36941);
var request_url = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36810,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36813 = cljs.core.reverse.call(null,inst_36807);
var inst_36814 = cljs.core.map.call(null,inst_36812,inst_36813);
var inst_36815 = cljs.core.pr_str.call(null,inst_36814);
var inst_36816 = figwheel.client.utils.log.call(null,inst_36815);
var state_36885__$1 = (function (){var statearr_36943 = state_36885;
(statearr_36943[(31)] = inst_36810);

return statearr_36943;
})();
var statearr_36944_37014 = state_36885__$1;
(statearr_36944_37014[(2)] = inst_36816);

(statearr_36944_37014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (35))){
var state_36885__$1 = state_36885;
var statearr_36945_37015 = state_36885__$1;
(statearr_36945_37015[(2)] = true);

(statearr_36945_37015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (19))){
var inst_36789 = (state_36885[(12)]);
var inst_36795 = figwheel.client.file_reloading.expand_files.call(null,inst_36789);
var state_36885__$1 = state_36885;
var statearr_36946_37016 = state_36885__$1;
(statearr_36946_37016[(2)] = inst_36795);

(statearr_36946_37016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (11))){
var state_36885__$1 = state_36885;
var statearr_36947_37017 = state_36885__$1;
(statearr_36947_37017[(2)] = null);

(statearr_36947_37017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (9))){
var inst_36778 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36948_37018 = state_36885__$1;
(statearr_36948_37018[(2)] = inst_36778);

(statearr_36948_37018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (5))){
var inst_36749 = (state_36885[(8)]);
var inst_36748 = (state_36885[(9)]);
var inst_36751 = (inst_36749 < inst_36748);
var inst_36752 = inst_36751;
var state_36885__$1 = state_36885;
if(cljs.core.truth_(inst_36752)){
var statearr_36949_37019 = state_36885__$1;
(statearr_36949_37019[(1)] = (7));

} else {
var statearr_36950_37020 = state_36885__$1;
(statearr_36950_37020[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (14))){
var inst_36759 = (state_36885[(22)]);
var inst_36768 = cljs.core.first.call(null,inst_36759);
var inst_36769 = figwheel.client.file_reloading.eval_body.call(null,inst_36768,opts);
var inst_36770 = cljs.core.next.call(null,inst_36759);
var inst_36746 = inst_36770;
var inst_36747 = null;
var inst_36748 = (0);
var inst_36749 = (0);
var state_36885__$1 = (function (){var statearr_36951 = state_36885;
(statearr_36951[(7)] = inst_36747);

(statearr_36951[(8)] = inst_36749);

(statearr_36951[(9)] = inst_36748);

(statearr_36951[(32)] = inst_36769);

(statearr_36951[(10)] = inst_36746);

return statearr_36951;
})();
var statearr_36952_37021 = state_36885__$1;
(statearr_36952_37021[(2)] = null);

(statearr_36952_37021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (45))){
var state_36885__$1 = state_36885;
var statearr_36953_37022 = state_36885__$1;
(statearr_36953_37022[(2)] = null);

(statearr_36953_37022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (26))){
var inst_36802 = (state_36885[(23)]);
var inst_36803 = (state_36885[(24)]);
var inst_36805 = (state_36885[(26)]);
var inst_36799 = (state_36885[(19)]);
var inst_36807 = (state_36885[(25)]);
var inst_36822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36824 = (function (){var all_files = inst_36799;
var res_SINGLEQUOTE_ = inst_36802;
var res = inst_36803;
var files_not_loaded = inst_36805;
var dependencies_that_loaded = inst_36807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36822,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36823){
var map__36954 = p__36823;
var map__36954__$1 = ((((!((map__36954 == null)))?((((map__36954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36954):map__36954);
var namespace = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36822,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36825 = cljs.core.map.call(null,inst_36824,inst_36803);
var inst_36826 = cljs.core.pr_str.call(null,inst_36825);
var inst_36827 = figwheel.client.utils.log.call(null,inst_36826);
var inst_36828 = (function (){var all_files = inst_36799;
var res_SINGLEQUOTE_ = inst_36802;
var res = inst_36803;
var files_not_loaded = inst_36805;
var dependencies_that_loaded = inst_36807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36822,inst_36824,inst_36825,inst_36826,inst_36827,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36802,inst_36803,inst_36805,inst_36799,inst_36807,inst_36822,inst_36824,inst_36825,inst_36826,inst_36827,state_val_36886,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36829 = setTimeout(inst_36828,(10));
var state_36885__$1 = (function (){var statearr_36956 = state_36885;
(statearr_36956[(33)] = inst_36827);

(statearr_36956[(34)] = inst_36822);

return statearr_36956;
})();
var statearr_36957_37023 = state_36885__$1;
(statearr_36957_37023[(2)] = inst_36829);

(statearr_36957_37023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (16))){
var state_36885__$1 = state_36885;
var statearr_36958_37024 = state_36885__$1;
(statearr_36958_37024[(2)] = reload_dependents);

(statearr_36958_37024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (38))){
var inst_36839 = (state_36885[(16)]);
var inst_36856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36839);
var state_36885__$1 = state_36885;
var statearr_36959_37025 = state_36885__$1;
(statearr_36959_37025[(2)] = inst_36856);

(statearr_36959_37025[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (30))){
var state_36885__$1 = state_36885;
var statearr_36960_37026 = state_36885__$1;
(statearr_36960_37026[(2)] = null);

(statearr_36960_37026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (10))){
var inst_36759 = (state_36885[(22)]);
var inst_36761 = cljs.core.chunked_seq_QMARK_.call(null,inst_36759);
var state_36885__$1 = state_36885;
if(inst_36761){
var statearr_36961_37027 = state_36885__$1;
(statearr_36961_37027[(1)] = (13));

} else {
var statearr_36962_37028 = state_36885__$1;
(statearr_36962_37028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (18))){
var inst_36793 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
if(cljs.core.truth_(inst_36793)){
var statearr_36963_37029 = state_36885__$1;
(statearr_36963_37029[(1)] = (19));

} else {
var statearr_36964_37030 = state_36885__$1;
(statearr_36964_37030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (42))){
var state_36885__$1 = state_36885;
var statearr_36965_37031 = state_36885__$1;
(statearr_36965_37031[(2)] = null);

(statearr_36965_37031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (37))){
var inst_36851 = (state_36885[(2)]);
var state_36885__$1 = state_36885;
var statearr_36966_37032 = state_36885__$1;
(statearr_36966_37032[(2)] = inst_36851);

(statearr_36966_37032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36886 === (8))){
var inst_36759 = (state_36885[(22)]);
var inst_36746 = (state_36885[(10)]);
var inst_36759__$1 = cljs.core.seq.call(null,inst_36746);
var state_36885__$1 = (function (){var statearr_36967 = state_36885;
(statearr_36967[(22)] = inst_36759__$1);

return statearr_36967;
})();
if(inst_36759__$1){
var statearr_36968_37033 = state_36885__$1;
(statearr_36968_37033[(1)] = (10));

} else {
var statearr_36969_37034 = state_36885__$1;
(statearr_36969_37034[(1)] = (11));

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
});})(c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__15598__auto__,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____0 = (function (){
var statearr_36973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36973[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__);

(statearr_36973[(1)] = (1));

return statearr_36973;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____1 = (function (state_36885){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_36885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e36974){if((e36974 instanceof Object)){
var ex__15602__auto__ = e36974;
var statearr_36975_37035 = state_36885;
(statearr_36975_37035[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37036 = state_36885;
state_36885 = G__37036;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__ = function(state_36885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____1.call(this,state_36885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__15621__auto__ = (function (){var statearr_36976 = f__15620__auto__.call(null);
(statearr_36976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__,map__36731,map__36731__$1,opts,before_jsload,on_jsload,reload_dependents,map__36732,map__36732__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__15619__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37039,link){
var map__37042 = p__37039;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var file = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37042,map__37042__$1,file){
return (function (p1__37037_SHARP_,p2__37038_SHARP_){
if(cljs.core._EQ_.call(null,p1__37037_SHARP_,p2__37038_SHARP_)){
return p1__37037_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37042,map__37042__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37048){
var map__37049 = p__37048;
var map__37049__$1 = ((((!((map__37049 == null)))?((((map__37049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37049):map__37049);
var match_length = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37044_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37044_SHARP_);
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
var args37051 = [];
var len__14245__auto___37054 = arguments.length;
var i__14246__auto___37055 = (0);
while(true){
if((i__14246__auto___37055 < len__14245__auto___37054)){
args37051.push((arguments[i__14246__auto___37055]));

var G__37056 = (i__14246__auto___37055 + (1));
i__14246__auto___37055 = G__37056;
continue;
} else {
}
break;
}

var G__37053 = args37051.length;
switch (G__37053) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37051.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37058_SHARP_,p2__37059_SHARP_){
return cljs.core.assoc.call(null,p1__37058_SHARP_,cljs.core.get.call(null,p2__37059_SHARP_,key),p2__37059_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37060){
var map__37063 = p__37060;
var map__37063__$1 = ((((!((map__37063 == null)))?((((map__37063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37063):map__37063);
var f_data = map__37063__$1;
var file = cljs.core.get.call(null,map__37063__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37065,files_msg){
var map__37072 = p__37065;
var map__37072__$1 = ((((!((map__37072 == null)))?((((map__37072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37072):map__37072);
var opts = map__37072__$1;
var on_cssload = cljs.core.get.call(null,map__37072__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37074_37078 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37075_37079 = null;
var count__37076_37080 = (0);
var i__37077_37081 = (0);
while(true){
if((i__37077_37081 < count__37076_37080)){
var f_37082 = cljs.core._nth.call(null,chunk__37075_37079,i__37077_37081);
figwheel.client.file_reloading.reload_css_file.call(null,f_37082);

var G__37083 = seq__37074_37078;
var G__37084 = chunk__37075_37079;
var G__37085 = count__37076_37080;
var G__37086 = (i__37077_37081 + (1));
seq__37074_37078 = G__37083;
chunk__37075_37079 = G__37084;
count__37076_37080 = G__37085;
i__37077_37081 = G__37086;
continue;
} else {
var temp__4657__auto___37087 = cljs.core.seq.call(null,seq__37074_37078);
if(temp__4657__auto___37087){
var seq__37074_37088__$1 = temp__4657__auto___37087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37074_37088__$1)){
var c__13990__auto___37089 = cljs.core.chunk_first.call(null,seq__37074_37088__$1);
var G__37090 = cljs.core.chunk_rest.call(null,seq__37074_37088__$1);
var G__37091 = c__13990__auto___37089;
var G__37092 = cljs.core.count.call(null,c__13990__auto___37089);
var G__37093 = (0);
seq__37074_37078 = G__37090;
chunk__37075_37079 = G__37091;
count__37076_37080 = G__37092;
i__37077_37081 = G__37093;
continue;
} else {
var f_37094 = cljs.core.first.call(null,seq__37074_37088__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37094);

var G__37095 = cljs.core.next.call(null,seq__37074_37088__$1);
var G__37096 = null;
var G__37097 = (0);
var G__37098 = (0);
seq__37074_37078 = G__37095;
chunk__37075_37079 = G__37096;
count__37076_37080 = G__37097;
i__37077_37081 = G__37098;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37072,map__37072__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37072,map__37072__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458338370064