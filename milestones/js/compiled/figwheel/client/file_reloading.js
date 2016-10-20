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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__59682_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__59682_SHARP_));
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
var seq__59687 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__59688 = null;
var count__59689 = (0);
var i__59690 = (0);
while(true){
if((i__59690 < count__59689)){
var n = cljs.core._nth.call(null,chunk__59688,i__59690);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__59691 = seq__59687;
var G__59692 = chunk__59688;
var G__59693 = count__59689;
var G__59694 = (i__59690 + (1));
seq__59687 = G__59691;
chunk__59688 = G__59692;
count__59689 = G__59693;
i__59690 = G__59694;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59687);
if(temp__4657__auto__){
var seq__59687__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59687__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__59687__$1);
var G__59695 = cljs.core.chunk_rest.call(null,seq__59687__$1);
var G__59696 = c__45081__auto__;
var G__59697 = cljs.core.count.call(null,c__45081__auto__);
var G__59698 = (0);
seq__59687 = G__59695;
chunk__59688 = G__59696;
count__59689 = G__59697;
i__59690 = G__59698;
continue;
} else {
var n = cljs.core.first.call(null,seq__59687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__59699 = cljs.core.next.call(null,seq__59687__$1);
var G__59700 = null;
var G__59701 = (0);
var G__59702 = (0);
seq__59687 = G__59699;
chunk__59688 = G__59700;
count__59689 = G__59701;
i__59690 = G__59702;
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

var seq__59753_59764 = cljs.core.seq.call(null,deps);
var chunk__59754_59765 = null;
var count__59755_59766 = (0);
var i__59756_59767 = (0);
while(true){
if((i__59756_59767 < count__59755_59766)){
var dep_59768 = cljs.core._nth.call(null,chunk__59754_59765,i__59756_59767);
topo_sort_helper_STAR_.call(null,dep_59768,(depth + (1)),state);

var G__59769 = seq__59753_59764;
var G__59770 = chunk__59754_59765;
var G__59771 = count__59755_59766;
var G__59772 = (i__59756_59767 + (1));
seq__59753_59764 = G__59769;
chunk__59754_59765 = G__59770;
count__59755_59766 = G__59771;
i__59756_59767 = G__59772;
continue;
} else {
var temp__4657__auto___59773 = cljs.core.seq.call(null,seq__59753_59764);
if(temp__4657__auto___59773){
var seq__59753_59774__$1 = temp__4657__auto___59773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59753_59774__$1)){
var c__45081__auto___59775 = cljs.core.chunk_first.call(null,seq__59753_59774__$1);
var G__59776 = cljs.core.chunk_rest.call(null,seq__59753_59774__$1);
var G__59777 = c__45081__auto___59775;
var G__59778 = cljs.core.count.call(null,c__45081__auto___59775);
var G__59779 = (0);
seq__59753_59764 = G__59776;
chunk__59754_59765 = G__59777;
count__59755_59766 = G__59778;
i__59756_59767 = G__59779;
continue;
} else {
var dep_59780 = cljs.core.first.call(null,seq__59753_59774__$1);
topo_sort_helper_STAR_.call(null,dep_59780,(depth + (1)),state);

var G__59781 = cljs.core.next.call(null,seq__59753_59774__$1);
var G__59782 = null;
var G__59783 = (0);
var G__59784 = (0);
seq__59753_59764 = G__59781;
chunk__59754_59765 = G__59782;
count__59755_59766 = G__59783;
i__59756_59767 = G__59784;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__59757){
var vec__59761 = p__59757;
var seq__59762 = cljs.core.seq.call(null,vec__59761);
var first__59763 = cljs.core.first.call(null,seq__59762);
var seq__59762__$1 = cljs.core.next.call(null,seq__59762);
var x = first__59763;
var xs = seq__59762__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__59761,seq__59762,first__59763,seq__59762__$1,x,xs,get_deps__$1){
return (function (p1__59703_SHARP_){
return clojure.set.difference.call(null,p1__59703_SHARP_,x);
});})(vec__59761,seq__59762,first__59763,seq__59762__$1,x,xs,get_deps__$1))
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
var seq__59797 = cljs.core.seq.call(null,provides);
var chunk__59798 = null;
var count__59799 = (0);
var i__59800 = (0);
while(true){
if((i__59800 < count__59799)){
var prov = cljs.core._nth.call(null,chunk__59798,i__59800);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59801_59809 = cljs.core.seq.call(null,requires);
var chunk__59802_59810 = null;
var count__59803_59811 = (0);
var i__59804_59812 = (0);
while(true){
if((i__59804_59812 < count__59803_59811)){
var req_59813 = cljs.core._nth.call(null,chunk__59802_59810,i__59804_59812);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59813,prov);

var G__59814 = seq__59801_59809;
var G__59815 = chunk__59802_59810;
var G__59816 = count__59803_59811;
var G__59817 = (i__59804_59812 + (1));
seq__59801_59809 = G__59814;
chunk__59802_59810 = G__59815;
count__59803_59811 = G__59816;
i__59804_59812 = G__59817;
continue;
} else {
var temp__4657__auto___59818 = cljs.core.seq.call(null,seq__59801_59809);
if(temp__4657__auto___59818){
var seq__59801_59819__$1 = temp__4657__auto___59818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59801_59819__$1)){
var c__45081__auto___59820 = cljs.core.chunk_first.call(null,seq__59801_59819__$1);
var G__59821 = cljs.core.chunk_rest.call(null,seq__59801_59819__$1);
var G__59822 = c__45081__auto___59820;
var G__59823 = cljs.core.count.call(null,c__45081__auto___59820);
var G__59824 = (0);
seq__59801_59809 = G__59821;
chunk__59802_59810 = G__59822;
count__59803_59811 = G__59823;
i__59804_59812 = G__59824;
continue;
} else {
var req_59825 = cljs.core.first.call(null,seq__59801_59819__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59825,prov);

var G__59826 = cljs.core.next.call(null,seq__59801_59819__$1);
var G__59827 = null;
var G__59828 = (0);
var G__59829 = (0);
seq__59801_59809 = G__59826;
chunk__59802_59810 = G__59827;
count__59803_59811 = G__59828;
i__59804_59812 = G__59829;
continue;
}
} else {
}
}
break;
}

var G__59830 = seq__59797;
var G__59831 = chunk__59798;
var G__59832 = count__59799;
var G__59833 = (i__59800 + (1));
seq__59797 = G__59830;
chunk__59798 = G__59831;
count__59799 = G__59832;
i__59800 = G__59833;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59797);
if(temp__4657__auto__){
var seq__59797__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59797__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__59797__$1);
var G__59834 = cljs.core.chunk_rest.call(null,seq__59797__$1);
var G__59835 = c__45081__auto__;
var G__59836 = cljs.core.count.call(null,c__45081__auto__);
var G__59837 = (0);
seq__59797 = G__59834;
chunk__59798 = G__59835;
count__59799 = G__59836;
i__59800 = G__59837;
continue;
} else {
var prov = cljs.core.first.call(null,seq__59797__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59805_59838 = cljs.core.seq.call(null,requires);
var chunk__59806_59839 = null;
var count__59807_59840 = (0);
var i__59808_59841 = (0);
while(true){
if((i__59808_59841 < count__59807_59840)){
var req_59842 = cljs.core._nth.call(null,chunk__59806_59839,i__59808_59841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59842,prov);

var G__59843 = seq__59805_59838;
var G__59844 = chunk__59806_59839;
var G__59845 = count__59807_59840;
var G__59846 = (i__59808_59841 + (1));
seq__59805_59838 = G__59843;
chunk__59806_59839 = G__59844;
count__59807_59840 = G__59845;
i__59808_59841 = G__59846;
continue;
} else {
var temp__4657__auto___59847__$1 = cljs.core.seq.call(null,seq__59805_59838);
if(temp__4657__auto___59847__$1){
var seq__59805_59848__$1 = temp__4657__auto___59847__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59805_59848__$1)){
var c__45081__auto___59849 = cljs.core.chunk_first.call(null,seq__59805_59848__$1);
var G__59850 = cljs.core.chunk_rest.call(null,seq__59805_59848__$1);
var G__59851 = c__45081__auto___59849;
var G__59852 = cljs.core.count.call(null,c__45081__auto___59849);
var G__59853 = (0);
seq__59805_59838 = G__59850;
chunk__59806_59839 = G__59851;
count__59807_59840 = G__59852;
i__59808_59841 = G__59853;
continue;
} else {
var req_59854 = cljs.core.first.call(null,seq__59805_59848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59854,prov);

var G__59855 = cljs.core.next.call(null,seq__59805_59848__$1);
var G__59856 = null;
var G__59857 = (0);
var G__59858 = (0);
seq__59805_59838 = G__59855;
chunk__59806_59839 = G__59856;
count__59807_59840 = G__59857;
i__59808_59841 = G__59858;
continue;
}
} else {
}
}
break;
}

var G__59859 = cljs.core.next.call(null,seq__59797__$1);
var G__59860 = null;
var G__59861 = (0);
var G__59862 = (0);
seq__59797 = G__59859;
chunk__59798 = G__59860;
count__59799 = G__59861;
i__59800 = G__59862;
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
var seq__59867_59871 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__59868_59872 = null;
var count__59869_59873 = (0);
var i__59870_59874 = (0);
while(true){
if((i__59870_59874 < count__59869_59873)){
var ns_59875 = cljs.core._nth.call(null,chunk__59868_59872,i__59870_59874);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59875);

var G__59876 = seq__59867_59871;
var G__59877 = chunk__59868_59872;
var G__59878 = count__59869_59873;
var G__59879 = (i__59870_59874 + (1));
seq__59867_59871 = G__59876;
chunk__59868_59872 = G__59877;
count__59869_59873 = G__59878;
i__59870_59874 = G__59879;
continue;
} else {
var temp__4657__auto___59880 = cljs.core.seq.call(null,seq__59867_59871);
if(temp__4657__auto___59880){
var seq__59867_59881__$1 = temp__4657__auto___59880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59867_59881__$1)){
var c__45081__auto___59882 = cljs.core.chunk_first.call(null,seq__59867_59881__$1);
var G__59883 = cljs.core.chunk_rest.call(null,seq__59867_59881__$1);
var G__59884 = c__45081__auto___59882;
var G__59885 = cljs.core.count.call(null,c__45081__auto___59882);
var G__59886 = (0);
seq__59867_59871 = G__59883;
chunk__59868_59872 = G__59884;
count__59869_59873 = G__59885;
i__59870_59874 = G__59886;
continue;
} else {
var ns_59887 = cljs.core.first.call(null,seq__59867_59881__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59887);

var G__59888 = cljs.core.next.call(null,seq__59867_59881__$1);
var G__59889 = null;
var G__59890 = (0);
var G__59891 = (0);
seq__59867_59871 = G__59888;
chunk__59868_59872 = G__59889;
count__59869_59873 = G__59890;
i__59870_59874 = G__59891;
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
var G__59892__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__59892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59893__i = 0, G__59893__a = new Array(arguments.length -  0);
while (G__59893__i < G__59893__a.length) {G__59893__a[G__59893__i] = arguments[G__59893__i + 0]; ++G__59893__i;}
  args = new cljs.core.IndexedSeq(G__59893__a,0);
} 
return G__59892__delegate.call(this,args);};
G__59892.cljs$lang$maxFixedArity = 0;
G__59892.cljs$lang$applyTo = (function (arglist__59894){
var args = cljs.core.seq(arglist__59894);
return G__59892__delegate(args);
});
G__59892.cljs$core$IFn$_invoke$arity$variadic = G__59892__delegate;
return G__59892;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__59896 = cljs.core._EQ_;
var expr__59897 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__59896.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__59897))){
var path_parts = ((function (pred__59896,expr__59897){
return (function (p1__59895_SHARP_){
return clojure.string.split.call(null,p1__59895_SHARP_,/[\/\\]/);
});})(pred__59896,expr__59897))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__59896,expr__59897){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e59899){if((e59899 instanceof Error)){
var e = e59899;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59899;

}
}})());
});
;})(path_parts,sep,root,pred__59896,expr__59897))
} else {
if(cljs.core.truth_(pred__59896.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__59897))){
return ((function (pred__59896,expr__59897){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__59896,expr__59897){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__59896,expr__59897))
);

return deferred.addErrback(((function (deferred,pred__59896,expr__59897){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__59896,expr__59897))
);
});
;})(pred__59896,expr__59897))
} else {
return ((function (pred__59896,expr__59897){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__59896,expr__59897))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__59900,callback){
var map__59903 = p__59900;
var map__59903__$1 = ((((!((map__59903 == null)))?((((map__59903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59903):map__59903);
var file_msg = map__59903__$1;
var request_url = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__59903,map__59903__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__59903,map__59903__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__){
return (function (state_59927){
var state_val_59928 = (state_59927[(1)]);
if((state_val_59928 === (7))){
var inst_59923 = (state_59927[(2)]);
var state_59927__$1 = state_59927;
var statearr_59929_59949 = state_59927__$1;
(statearr_59929_59949[(2)] = inst_59923);

(statearr_59929_59949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (1))){
var state_59927__$1 = state_59927;
var statearr_59930_59950 = state_59927__$1;
(statearr_59930_59950[(2)] = null);

(statearr_59930_59950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (4))){
var inst_59907 = (state_59927[(7)]);
var inst_59907__$1 = (state_59927[(2)]);
var state_59927__$1 = (function (){var statearr_59931 = state_59927;
(statearr_59931[(7)] = inst_59907__$1);

return statearr_59931;
})();
if(cljs.core.truth_(inst_59907__$1)){
var statearr_59932_59951 = state_59927__$1;
(statearr_59932_59951[(1)] = (5));

} else {
var statearr_59933_59952 = state_59927__$1;
(statearr_59933_59952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (6))){
var state_59927__$1 = state_59927;
var statearr_59934_59953 = state_59927__$1;
(statearr_59934_59953[(2)] = null);

(statearr_59934_59953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (3))){
var inst_59925 = (state_59927[(2)]);
var state_59927__$1 = state_59927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59927__$1,inst_59925);
} else {
if((state_val_59928 === (2))){
var state_59927__$1 = state_59927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59927__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_59928 === (11))){
var inst_59919 = (state_59927[(2)]);
var state_59927__$1 = (function (){var statearr_59935 = state_59927;
(statearr_59935[(8)] = inst_59919);

return statearr_59935;
})();
var statearr_59936_59954 = state_59927__$1;
(statearr_59936_59954[(2)] = null);

(statearr_59936_59954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (9))){
var inst_59911 = (state_59927[(9)]);
var inst_59913 = (state_59927[(10)]);
var inst_59915 = inst_59913.call(null,inst_59911);
var state_59927__$1 = state_59927;
var statearr_59937_59955 = state_59927__$1;
(statearr_59937_59955[(2)] = inst_59915);

(statearr_59937_59955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (5))){
var inst_59907 = (state_59927[(7)]);
var inst_59909 = figwheel.client.file_reloading.blocking_load.call(null,inst_59907);
var state_59927__$1 = state_59927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59927__$1,(8),inst_59909);
} else {
if((state_val_59928 === (10))){
var inst_59911 = (state_59927[(9)]);
var inst_59917 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_59911);
var state_59927__$1 = state_59927;
var statearr_59938_59956 = state_59927__$1;
(statearr_59938_59956[(2)] = inst_59917);

(statearr_59938_59956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (8))){
var inst_59907 = (state_59927[(7)]);
var inst_59913 = (state_59927[(10)]);
var inst_59911 = (state_59927[(2)]);
var inst_59912 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_59913__$1 = cljs.core.get.call(null,inst_59912,inst_59907);
var state_59927__$1 = (function (){var statearr_59939 = state_59927;
(statearr_59939[(9)] = inst_59911);

(statearr_59939[(10)] = inst_59913__$1);

return statearr_59939;
})();
if(cljs.core.truth_(inst_59913__$1)){
var statearr_59940_59957 = state_59927__$1;
(statearr_59940_59957[(1)] = (9));

} else {
var statearr_59941_59958 = state_59927__$1;
(statearr_59941_59958[(1)] = (10));

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
});})(c__47652__auto__))
;
return ((function (switch__47587__auto__,c__47652__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47588__auto__ = null;
var figwheel$client$file_reloading$state_machine__47588__auto____0 = (function (){
var statearr_59945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59945[(0)] = figwheel$client$file_reloading$state_machine__47588__auto__);

(statearr_59945[(1)] = (1));

return statearr_59945;
});
var figwheel$client$file_reloading$state_machine__47588__auto____1 = (function (state_59927){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59946){if((e59946 instanceof Object)){
var ex__47591__auto__ = e59946;
var statearr_59947_59959 = state_59927;
(statearr_59947_59959[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59960 = state_59927;
state_59927 = G__59960;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47588__auto__ = function(state_59927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47588__auto____1.call(this,state_59927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47588__auto____0;
figwheel$client$file_reloading$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47588__auto____1;
return figwheel$client$file_reloading$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__))
})();
var state__47654__auto__ = (function (){var statearr_59948 = f__47653__auto__.call(null);
(statearr_59948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_59948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__))
);

return c__47652__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__59961,callback){
var map__59964 = p__59961;
var map__59964__$1 = ((((!((map__59964 == null)))?((((map__59964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59964):map__59964);
var file_msg = map__59964__$1;
var namespace = cljs.core.get.call(null,map__59964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__59964,map__59964__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__59964,map__59964__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__59966){
var map__59969 = p__59966;
var map__59969__$1 = ((((!((map__59969 == null)))?((((map__59969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59969):map__59969);
var file_msg = map__59969__$1;
var namespace = cljs.core.get.call(null,map__59969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__59971,callback){
var map__59974 = p__59971;
var map__59974__$1 = ((((!((map__59974 == null)))?((((map__59974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59974):map__59974);
var file_msg = map__59974__$1;
var request_url = cljs.core.get.call(null,map__59974__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__59974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__47652__auto___60078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___60078,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___60078,out){
return (function (state_60060){
var state_val_60061 = (state_60060[(1)]);
if((state_val_60061 === (1))){
var inst_60034 = cljs.core.seq.call(null,files);
var inst_60035 = cljs.core.first.call(null,inst_60034);
var inst_60036 = cljs.core.next.call(null,inst_60034);
var inst_60037 = files;
var state_60060__$1 = (function (){var statearr_60062 = state_60060;
(statearr_60062[(7)] = inst_60035);

(statearr_60062[(8)] = inst_60036);

(statearr_60062[(9)] = inst_60037);

return statearr_60062;
})();
var statearr_60063_60079 = state_60060__$1;
(statearr_60063_60079[(2)] = null);

(statearr_60063_60079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60061 === (2))){
var inst_60043 = (state_60060[(10)]);
var inst_60037 = (state_60060[(9)]);
var inst_60042 = cljs.core.seq.call(null,inst_60037);
var inst_60043__$1 = cljs.core.first.call(null,inst_60042);
var inst_60044 = cljs.core.next.call(null,inst_60042);
var inst_60045 = (inst_60043__$1 == null);
var inst_60046 = cljs.core.not.call(null,inst_60045);
var state_60060__$1 = (function (){var statearr_60064 = state_60060;
(statearr_60064[(11)] = inst_60044);

(statearr_60064[(10)] = inst_60043__$1);

return statearr_60064;
})();
if(inst_60046){
var statearr_60065_60080 = state_60060__$1;
(statearr_60065_60080[(1)] = (4));

} else {
var statearr_60066_60081 = state_60060__$1;
(statearr_60066_60081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60061 === (3))){
var inst_60058 = (state_60060[(2)]);
var state_60060__$1 = state_60060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60060__$1,inst_60058);
} else {
if((state_val_60061 === (4))){
var inst_60043 = (state_60060[(10)]);
var inst_60048 = figwheel.client.file_reloading.reload_js_file.call(null,inst_60043);
var state_60060__$1 = state_60060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60060__$1,(7),inst_60048);
} else {
if((state_val_60061 === (5))){
var inst_60054 = cljs.core.async.close_BANG_.call(null,out);
var state_60060__$1 = state_60060;
var statearr_60067_60082 = state_60060__$1;
(statearr_60067_60082[(2)] = inst_60054);

(statearr_60067_60082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60061 === (6))){
var inst_60056 = (state_60060[(2)]);
var state_60060__$1 = state_60060;
var statearr_60068_60083 = state_60060__$1;
(statearr_60068_60083[(2)] = inst_60056);

(statearr_60068_60083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60061 === (7))){
var inst_60044 = (state_60060[(11)]);
var inst_60050 = (state_60060[(2)]);
var inst_60051 = cljs.core.async.put_BANG_.call(null,out,inst_60050);
var inst_60037 = inst_60044;
var state_60060__$1 = (function (){var statearr_60069 = state_60060;
(statearr_60069[(12)] = inst_60051);

(statearr_60069[(9)] = inst_60037);

return statearr_60069;
})();
var statearr_60070_60084 = state_60060__$1;
(statearr_60070_60084[(2)] = null);

(statearr_60070_60084[(1)] = (2));


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
});})(c__47652__auto___60078,out))
;
return ((function (switch__47587__auto__,c__47652__auto___60078,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____0 = (function (){
var statearr_60074 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60074[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__);

(statearr_60074[(1)] = (1));

return statearr_60074;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____1 = (function (state_60060){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_60060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e60075){if((e60075 instanceof Object)){
var ex__47591__auto__ = e60075;
var statearr_60076_60085 = state_60060;
(statearr_60076_60085[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60086 = state_60060;
state_60060 = G__60086;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__ = function(state_60060){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____1.call(this,state_60060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___60078,out))
})();
var state__47654__auto__ = (function (){var statearr_60077 = f__47653__auto__.call(null);
(statearr_60077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___60078);

return statearr_60077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___60078,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__60087,opts){
var map__60091 = p__60087;
var map__60091__$1 = ((((!((map__60091 == null)))?((((map__60091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60091):map__60091);
var eval_body = cljs.core.get.call(null,map__60091__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__60091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e60093){var e = e60093;
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
return (function (p1__60094_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60094_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__60103){
var vec__60104 = p__60103;
var k = cljs.core.nth.call(null,vec__60104,(0),null);
var v = cljs.core.nth.call(null,vec__60104,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__60107){
var vec__60108 = p__60107;
var k = cljs.core.nth.call(null,vec__60108,(0),null);
var v = cljs.core.nth.call(null,vec__60108,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__60114,p__60115){
var map__60363 = p__60114;
var map__60363__$1 = ((((!((map__60363 == null)))?((((map__60363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60363):map__60363);
var opts = map__60363__$1;
var before_jsload = cljs.core.get.call(null,map__60363__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__60363__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__60363__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__60364 = p__60115;
var map__60364__$1 = ((((!((map__60364 == null)))?((((map__60364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60364):map__60364);
var msg = map__60364__$1;
var files = cljs.core.get.call(null,map__60364__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__60364__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__60364__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_60518){
var state_val_60519 = (state_60518[(1)]);
if((state_val_60519 === (7))){
var inst_60379 = (state_60518[(7)]);
var inst_60378 = (state_60518[(8)]);
var inst_60381 = (state_60518[(9)]);
var inst_60380 = (state_60518[(10)]);
var inst_60386 = cljs.core._nth.call(null,inst_60379,inst_60381);
var inst_60387 = figwheel.client.file_reloading.eval_body.call(null,inst_60386,opts);
var inst_60388 = (inst_60381 + (1));
var tmp60520 = inst_60379;
var tmp60521 = inst_60378;
var tmp60522 = inst_60380;
var inst_60378__$1 = tmp60521;
var inst_60379__$1 = tmp60520;
var inst_60380__$1 = tmp60522;
var inst_60381__$1 = inst_60388;
var state_60518__$1 = (function (){var statearr_60523 = state_60518;
(statearr_60523[(7)] = inst_60379__$1);

(statearr_60523[(8)] = inst_60378__$1);

(statearr_60523[(11)] = inst_60387);

(statearr_60523[(9)] = inst_60381__$1);

(statearr_60523[(10)] = inst_60380__$1);

return statearr_60523;
})();
var statearr_60524_60610 = state_60518__$1;
(statearr_60524_60610[(2)] = null);

(statearr_60524_60610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (20))){
var inst_60421 = (state_60518[(12)]);
var inst_60429 = figwheel.client.file_reloading.sort_files.call(null,inst_60421);
var state_60518__$1 = state_60518;
var statearr_60525_60611 = state_60518__$1;
(statearr_60525_60611[(2)] = inst_60429);

(statearr_60525_60611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (27))){
var state_60518__$1 = state_60518;
var statearr_60526_60612 = state_60518__$1;
(statearr_60526_60612[(2)] = null);

(statearr_60526_60612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (1))){
var inst_60370 = (state_60518[(13)]);
var inst_60367 = before_jsload.call(null,files);
var inst_60368 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_60369 = (function (){return ((function (inst_60370,inst_60367,inst_60368,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60111_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60111_SHARP_);
});
;})(inst_60370,inst_60367,inst_60368,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60370__$1 = cljs.core.filter.call(null,inst_60369,files);
var inst_60371 = cljs.core.not_empty.call(null,inst_60370__$1);
var state_60518__$1 = (function (){var statearr_60527 = state_60518;
(statearr_60527[(14)] = inst_60367);

(statearr_60527[(15)] = inst_60368);

(statearr_60527[(13)] = inst_60370__$1);

return statearr_60527;
})();
if(cljs.core.truth_(inst_60371)){
var statearr_60528_60613 = state_60518__$1;
(statearr_60528_60613[(1)] = (2));

} else {
var statearr_60529_60614 = state_60518__$1;
(statearr_60529_60614[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (24))){
var state_60518__$1 = state_60518;
var statearr_60530_60615 = state_60518__$1;
(statearr_60530_60615[(2)] = null);

(statearr_60530_60615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (39))){
var inst_60471 = (state_60518[(16)]);
var state_60518__$1 = state_60518;
var statearr_60531_60616 = state_60518__$1;
(statearr_60531_60616[(2)] = inst_60471);

(statearr_60531_60616[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (46))){
var inst_60513 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60532_60617 = state_60518__$1;
(statearr_60532_60617[(2)] = inst_60513);

(statearr_60532_60617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (4))){
var inst_60415 = (state_60518[(2)]);
var inst_60416 = cljs.core.List.EMPTY;
var inst_60417 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_60416);
var inst_60418 = (function (){return ((function (inst_60415,inst_60416,inst_60417,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60112_SHARP_){
var and__44255__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60112_SHARP_);
if(cljs.core.truth_(and__44255__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60112_SHARP_));
} else {
return and__44255__auto__;
}
});
;})(inst_60415,inst_60416,inst_60417,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60419 = cljs.core.filter.call(null,inst_60418,files);
var inst_60420 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_60421 = cljs.core.concat.call(null,inst_60419,inst_60420);
var state_60518__$1 = (function (){var statearr_60533 = state_60518;
(statearr_60533[(17)] = inst_60417);

(statearr_60533[(18)] = inst_60415);

(statearr_60533[(12)] = inst_60421);

return statearr_60533;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_60534_60618 = state_60518__$1;
(statearr_60534_60618[(1)] = (16));

} else {
var statearr_60535_60619 = state_60518__$1;
(statearr_60535_60619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (15))){
var inst_60405 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60536_60620 = state_60518__$1;
(statearr_60536_60620[(2)] = inst_60405);

(statearr_60536_60620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (21))){
var inst_60431 = (state_60518[(19)]);
var inst_60431__$1 = (state_60518[(2)]);
var inst_60432 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_60431__$1);
var state_60518__$1 = (function (){var statearr_60537 = state_60518;
(statearr_60537[(19)] = inst_60431__$1);

return statearr_60537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60518__$1,(22),inst_60432);
} else {
if((state_val_60519 === (31))){
var inst_60516 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60518__$1,inst_60516);
} else {
if((state_val_60519 === (32))){
var inst_60471 = (state_60518[(16)]);
var inst_60476 = inst_60471.cljs$lang$protocol_mask$partition0$;
var inst_60477 = (inst_60476 & (64));
var inst_60478 = inst_60471.cljs$core$ISeq$;
var inst_60479 = (cljs.core.PROTOCOL_SENTINEL === inst_60478);
var inst_60480 = (inst_60477) || (inst_60479);
var state_60518__$1 = state_60518;
if(cljs.core.truth_(inst_60480)){
var statearr_60538_60621 = state_60518__$1;
(statearr_60538_60621[(1)] = (35));

} else {
var statearr_60539_60622 = state_60518__$1;
(statearr_60539_60622[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (40))){
var inst_60493 = (state_60518[(20)]);
var inst_60492 = (state_60518[(2)]);
var inst_60493__$1 = cljs.core.get.call(null,inst_60492,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_60494 = cljs.core.get.call(null,inst_60492,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_60495 = cljs.core.not_empty.call(null,inst_60493__$1);
var state_60518__$1 = (function (){var statearr_60540 = state_60518;
(statearr_60540[(20)] = inst_60493__$1);

(statearr_60540[(21)] = inst_60494);

return statearr_60540;
})();
if(cljs.core.truth_(inst_60495)){
var statearr_60541_60623 = state_60518__$1;
(statearr_60541_60623[(1)] = (41));

} else {
var statearr_60542_60624 = state_60518__$1;
(statearr_60542_60624[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (33))){
var state_60518__$1 = state_60518;
var statearr_60543_60625 = state_60518__$1;
(statearr_60543_60625[(2)] = false);

(statearr_60543_60625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (13))){
var inst_60391 = (state_60518[(22)]);
var inst_60395 = cljs.core.chunk_first.call(null,inst_60391);
var inst_60396 = cljs.core.chunk_rest.call(null,inst_60391);
var inst_60397 = cljs.core.count.call(null,inst_60395);
var inst_60378 = inst_60396;
var inst_60379 = inst_60395;
var inst_60380 = inst_60397;
var inst_60381 = (0);
var state_60518__$1 = (function (){var statearr_60544 = state_60518;
(statearr_60544[(7)] = inst_60379);

(statearr_60544[(8)] = inst_60378);

(statearr_60544[(9)] = inst_60381);

(statearr_60544[(10)] = inst_60380);

return statearr_60544;
})();
var statearr_60545_60626 = state_60518__$1;
(statearr_60545_60626[(2)] = null);

(statearr_60545_60626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (22))){
var inst_60431 = (state_60518[(19)]);
var inst_60434 = (state_60518[(23)]);
var inst_60439 = (state_60518[(24)]);
var inst_60435 = (state_60518[(25)]);
var inst_60434__$1 = (state_60518[(2)]);
var inst_60435__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60434__$1);
var inst_60436 = (function (){var all_files = inst_60431;
var res_SINGLEQUOTE_ = inst_60434__$1;
var res = inst_60435__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_60431,inst_60434,inst_60439,inst_60435,inst_60434__$1,inst_60435__$1,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60113_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__60113_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_60431,inst_60434,inst_60439,inst_60435,inst_60434__$1,inst_60435__$1,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60437 = cljs.core.filter.call(null,inst_60436,inst_60434__$1);
var inst_60438 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_60439__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60438);
var inst_60440 = cljs.core.not_empty.call(null,inst_60439__$1);
var state_60518__$1 = (function (){var statearr_60546 = state_60518;
(statearr_60546[(23)] = inst_60434__$1);

(statearr_60546[(26)] = inst_60437);

(statearr_60546[(24)] = inst_60439__$1);

(statearr_60546[(25)] = inst_60435__$1);

return statearr_60546;
})();
if(cljs.core.truth_(inst_60440)){
var statearr_60547_60627 = state_60518__$1;
(statearr_60547_60627[(1)] = (23));

} else {
var statearr_60548_60628 = state_60518__$1;
(statearr_60548_60628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (36))){
var state_60518__$1 = state_60518;
var statearr_60549_60629 = state_60518__$1;
(statearr_60549_60629[(2)] = false);

(statearr_60549_60629[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (41))){
var inst_60493 = (state_60518[(20)]);
var inst_60497 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_60498 = cljs.core.map.call(null,inst_60497,inst_60493);
var inst_60499 = cljs.core.pr_str.call(null,inst_60498);
var inst_60500 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_60499)].join('');
var inst_60501 = figwheel.client.utils.log.call(null,inst_60500);
var state_60518__$1 = state_60518;
var statearr_60550_60630 = state_60518__$1;
(statearr_60550_60630[(2)] = inst_60501);

(statearr_60550_60630[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (43))){
var inst_60494 = (state_60518[(21)]);
var inst_60504 = (state_60518[(2)]);
var inst_60505 = cljs.core.not_empty.call(null,inst_60494);
var state_60518__$1 = (function (){var statearr_60551 = state_60518;
(statearr_60551[(27)] = inst_60504);

return statearr_60551;
})();
if(cljs.core.truth_(inst_60505)){
var statearr_60552_60631 = state_60518__$1;
(statearr_60552_60631[(1)] = (44));

} else {
var statearr_60553_60632 = state_60518__$1;
(statearr_60553_60632[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (29))){
var inst_60431 = (state_60518[(19)]);
var inst_60434 = (state_60518[(23)]);
var inst_60437 = (state_60518[(26)]);
var inst_60439 = (state_60518[(24)]);
var inst_60471 = (state_60518[(16)]);
var inst_60435 = (state_60518[(25)]);
var inst_60467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_60470 = (function (){var all_files = inst_60431;
var res_SINGLEQUOTE_ = inst_60434;
var res = inst_60435;
var files_not_loaded = inst_60437;
var dependencies_that_loaded = inst_60439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60471,inst_60435,inst_60467,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60469){
var map__60554 = p__60469;
var map__60554__$1 = ((((!((map__60554 == null)))?((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60554):map__60554);
var namespace = cljs.core.get.call(null,map__60554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60471,inst_60435,inst_60467,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60471__$1 = cljs.core.group_by.call(null,inst_60470,inst_60437);
var inst_60473 = (inst_60471__$1 == null);
var inst_60474 = cljs.core.not.call(null,inst_60473);
var state_60518__$1 = (function (){var statearr_60556 = state_60518;
(statearr_60556[(28)] = inst_60467);

(statearr_60556[(16)] = inst_60471__$1);

return statearr_60556;
})();
if(inst_60474){
var statearr_60557_60633 = state_60518__$1;
(statearr_60557_60633[(1)] = (32));

} else {
var statearr_60558_60634 = state_60518__$1;
(statearr_60558_60634[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (44))){
var inst_60494 = (state_60518[(21)]);
var inst_60507 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60494);
var inst_60508 = cljs.core.pr_str.call(null,inst_60507);
var inst_60509 = [cljs.core.str("not required: "),cljs.core.str(inst_60508)].join('');
var inst_60510 = figwheel.client.utils.log.call(null,inst_60509);
var state_60518__$1 = state_60518;
var statearr_60559_60635 = state_60518__$1;
(statearr_60559_60635[(2)] = inst_60510);

(statearr_60559_60635[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (6))){
var inst_60412 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60560_60636 = state_60518__$1;
(statearr_60560_60636[(2)] = inst_60412);

(statearr_60560_60636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (28))){
var inst_60437 = (state_60518[(26)]);
var inst_60464 = (state_60518[(2)]);
var inst_60465 = cljs.core.not_empty.call(null,inst_60437);
var state_60518__$1 = (function (){var statearr_60561 = state_60518;
(statearr_60561[(29)] = inst_60464);

return statearr_60561;
})();
if(cljs.core.truth_(inst_60465)){
var statearr_60562_60637 = state_60518__$1;
(statearr_60562_60637[(1)] = (29));

} else {
var statearr_60563_60638 = state_60518__$1;
(statearr_60563_60638[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (25))){
var inst_60435 = (state_60518[(25)]);
var inst_60451 = (state_60518[(2)]);
var inst_60452 = cljs.core.not_empty.call(null,inst_60435);
var state_60518__$1 = (function (){var statearr_60564 = state_60518;
(statearr_60564[(30)] = inst_60451);

return statearr_60564;
})();
if(cljs.core.truth_(inst_60452)){
var statearr_60565_60639 = state_60518__$1;
(statearr_60565_60639[(1)] = (26));

} else {
var statearr_60566_60640 = state_60518__$1;
(statearr_60566_60640[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (34))){
var inst_60487 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
if(cljs.core.truth_(inst_60487)){
var statearr_60567_60641 = state_60518__$1;
(statearr_60567_60641[(1)] = (38));

} else {
var statearr_60568_60642 = state_60518__$1;
(statearr_60568_60642[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (17))){
var state_60518__$1 = state_60518;
var statearr_60569_60643 = state_60518__$1;
(statearr_60569_60643[(2)] = recompile_dependents);

(statearr_60569_60643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (3))){
var state_60518__$1 = state_60518;
var statearr_60570_60644 = state_60518__$1;
(statearr_60570_60644[(2)] = null);

(statearr_60570_60644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (12))){
var inst_60408 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60571_60645 = state_60518__$1;
(statearr_60571_60645[(2)] = inst_60408);

(statearr_60571_60645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (2))){
var inst_60370 = (state_60518[(13)]);
var inst_60377 = cljs.core.seq.call(null,inst_60370);
var inst_60378 = inst_60377;
var inst_60379 = null;
var inst_60380 = (0);
var inst_60381 = (0);
var state_60518__$1 = (function (){var statearr_60572 = state_60518;
(statearr_60572[(7)] = inst_60379);

(statearr_60572[(8)] = inst_60378);

(statearr_60572[(9)] = inst_60381);

(statearr_60572[(10)] = inst_60380);

return statearr_60572;
})();
var statearr_60573_60646 = state_60518__$1;
(statearr_60573_60646[(2)] = null);

(statearr_60573_60646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (23))){
var inst_60431 = (state_60518[(19)]);
var inst_60434 = (state_60518[(23)]);
var inst_60437 = (state_60518[(26)]);
var inst_60439 = (state_60518[(24)]);
var inst_60435 = (state_60518[(25)]);
var inst_60442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_60444 = (function (){var all_files = inst_60431;
var res_SINGLEQUOTE_ = inst_60434;
var res = inst_60435;
var files_not_loaded = inst_60437;
var dependencies_that_loaded = inst_60439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60442,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60443){
var map__60574 = p__60443;
var map__60574__$1 = ((((!((map__60574 == null)))?((((map__60574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60574):map__60574);
var request_url = cljs.core.get.call(null,map__60574__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60442,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60445 = cljs.core.reverse.call(null,inst_60439);
var inst_60446 = cljs.core.map.call(null,inst_60444,inst_60445);
var inst_60447 = cljs.core.pr_str.call(null,inst_60446);
var inst_60448 = figwheel.client.utils.log.call(null,inst_60447);
var state_60518__$1 = (function (){var statearr_60576 = state_60518;
(statearr_60576[(31)] = inst_60442);

return statearr_60576;
})();
var statearr_60577_60647 = state_60518__$1;
(statearr_60577_60647[(2)] = inst_60448);

(statearr_60577_60647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (35))){
var state_60518__$1 = state_60518;
var statearr_60578_60648 = state_60518__$1;
(statearr_60578_60648[(2)] = true);

(statearr_60578_60648[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (19))){
var inst_60421 = (state_60518[(12)]);
var inst_60427 = figwheel.client.file_reloading.expand_files.call(null,inst_60421);
var state_60518__$1 = state_60518;
var statearr_60579_60649 = state_60518__$1;
(statearr_60579_60649[(2)] = inst_60427);

(statearr_60579_60649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (11))){
var state_60518__$1 = state_60518;
var statearr_60580_60650 = state_60518__$1;
(statearr_60580_60650[(2)] = null);

(statearr_60580_60650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (9))){
var inst_60410 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60581_60651 = state_60518__$1;
(statearr_60581_60651[(2)] = inst_60410);

(statearr_60581_60651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (5))){
var inst_60381 = (state_60518[(9)]);
var inst_60380 = (state_60518[(10)]);
var inst_60383 = (inst_60381 < inst_60380);
var inst_60384 = inst_60383;
var state_60518__$1 = state_60518;
if(cljs.core.truth_(inst_60384)){
var statearr_60582_60652 = state_60518__$1;
(statearr_60582_60652[(1)] = (7));

} else {
var statearr_60583_60653 = state_60518__$1;
(statearr_60583_60653[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (14))){
var inst_60391 = (state_60518[(22)]);
var inst_60400 = cljs.core.first.call(null,inst_60391);
var inst_60401 = figwheel.client.file_reloading.eval_body.call(null,inst_60400,opts);
var inst_60402 = cljs.core.next.call(null,inst_60391);
var inst_60378 = inst_60402;
var inst_60379 = null;
var inst_60380 = (0);
var inst_60381 = (0);
var state_60518__$1 = (function (){var statearr_60584 = state_60518;
(statearr_60584[(7)] = inst_60379);

(statearr_60584[(8)] = inst_60378);

(statearr_60584[(32)] = inst_60401);

(statearr_60584[(9)] = inst_60381);

(statearr_60584[(10)] = inst_60380);

return statearr_60584;
})();
var statearr_60585_60654 = state_60518__$1;
(statearr_60585_60654[(2)] = null);

(statearr_60585_60654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (45))){
var state_60518__$1 = state_60518;
var statearr_60586_60655 = state_60518__$1;
(statearr_60586_60655[(2)] = null);

(statearr_60586_60655[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (26))){
var inst_60431 = (state_60518[(19)]);
var inst_60434 = (state_60518[(23)]);
var inst_60437 = (state_60518[(26)]);
var inst_60439 = (state_60518[(24)]);
var inst_60435 = (state_60518[(25)]);
var inst_60454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_60456 = (function (){var all_files = inst_60431;
var res_SINGLEQUOTE_ = inst_60434;
var res = inst_60435;
var files_not_loaded = inst_60437;
var dependencies_that_loaded = inst_60439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60454,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60455){
var map__60587 = p__60455;
var map__60587__$1 = ((((!((map__60587 == null)))?((((map__60587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60587):map__60587);
var namespace = cljs.core.get.call(null,map__60587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__60587__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60454,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60457 = cljs.core.map.call(null,inst_60456,inst_60435);
var inst_60458 = cljs.core.pr_str.call(null,inst_60457);
var inst_60459 = figwheel.client.utils.log.call(null,inst_60458);
var inst_60460 = (function (){var all_files = inst_60431;
var res_SINGLEQUOTE_ = inst_60434;
var res = inst_60435;
var files_not_loaded = inst_60437;
var dependencies_that_loaded = inst_60439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60454,inst_60456,inst_60457,inst_60458,inst_60459,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60431,inst_60434,inst_60437,inst_60439,inst_60435,inst_60454,inst_60456,inst_60457,inst_60458,inst_60459,state_val_60519,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60461 = setTimeout(inst_60460,(10));
var state_60518__$1 = (function (){var statearr_60589 = state_60518;
(statearr_60589[(33)] = inst_60459);

(statearr_60589[(34)] = inst_60454);

return statearr_60589;
})();
var statearr_60590_60656 = state_60518__$1;
(statearr_60590_60656[(2)] = inst_60461);

(statearr_60590_60656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (16))){
var state_60518__$1 = state_60518;
var statearr_60591_60657 = state_60518__$1;
(statearr_60591_60657[(2)] = reload_dependents);

(statearr_60591_60657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (38))){
var inst_60471 = (state_60518[(16)]);
var inst_60489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60471);
var state_60518__$1 = state_60518;
var statearr_60592_60658 = state_60518__$1;
(statearr_60592_60658[(2)] = inst_60489);

(statearr_60592_60658[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (30))){
var state_60518__$1 = state_60518;
var statearr_60593_60659 = state_60518__$1;
(statearr_60593_60659[(2)] = null);

(statearr_60593_60659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (10))){
var inst_60391 = (state_60518[(22)]);
var inst_60393 = cljs.core.chunked_seq_QMARK_.call(null,inst_60391);
var state_60518__$1 = state_60518;
if(inst_60393){
var statearr_60594_60660 = state_60518__$1;
(statearr_60594_60660[(1)] = (13));

} else {
var statearr_60595_60661 = state_60518__$1;
(statearr_60595_60661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (18))){
var inst_60425 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
if(cljs.core.truth_(inst_60425)){
var statearr_60596_60662 = state_60518__$1;
(statearr_60596_60662[(1)] = (19));

} else {
var statearr_60597_60663 = state_60518__$1;
(statearr_60597_60663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (42))){
var state_60518__$1 = state_60518;
var statearr_60598_60664 = state_60518__$1;
(statearr_60598_60664[(2)] = null);

(statearr_60598_60664[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (37))){
var inst_60484 = (state_60518[(2)]);
var state_60518__$1 = state_60518;
var statearr_60599_60665 = state_60518__$1;
(statearr_60599_60665[(2)] = inst_60484);

(statearr_60599_60665[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60519 === (8))){
var inst_60391 = (state_60518[(22)]);
var inst_60378 = (state_60518[(8)]);
var inst_60391__$1 = cljs.core.seq.call(null,inst_60378);
var state_60518__$1 = (function (){var statearr_60600 = state_60518;
(statearr_60600[(22)] = inst_60391__$1);

return statearr_60600;
})();
if(inst_60391__$1){
var statearr_60601_60666 = state_60518__$1;
(statearr_60601_60666[(1)] = (10));

} else {
var statearr_60602_60667 = state_60518__$1;
(statearr_60602_60667[(1)] = (11));

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
});})(c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47587__auto__,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____0 = (function (){
var statearr_60606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60606[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__);

(statearr_60606[(1)] = (1));

return statearr_60606;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____1 = (function (state_60518){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_60518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e60607){if((e60607 instanceof Object)){
var ex__47591__auto__ = e60607;
var statearr_60608_60668 = state_60518;
(statearr_60608_60668[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60669 = state_60518;
state_60518 = G__60669;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__ = function(state_60518){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____1.call(this,state_60518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47654__auto__ = (function (){var statearr_60609 = f__47653__auto__.call(null);
(statearr_60609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_60609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__,map__60363,map__60363__$1,opts,before_jsload,on_jsload,reload_dependents,map__60364,map__60364__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47652__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__60672,link){
var map__60675 = p__60672;
var map__60675__$1 = ((((!((map__60675 == null)))?((((map__60675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60675):map__60675);
var file = cljs.core.get.call(null,map__60675__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__60675,map__60675__$1,file){
return (function (p1__60670_SHARP_,p2__60671_SHARP_){
if(cljs.core._EQ_.call(null,p1__60670_SHARP_,p2__60671_SHARP_)){
return p1__60670_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__60675,map__60675__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__60681){
var map__60682 = p__60681;
var map__60682__$1 = ((((!((map__60682 == null)))?((((map__60682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60682):map__60682);
var match_length = cljs.core.get.call(null,map__60682__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__60682__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__60677_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__60677_SHARP_);
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
var args60684 = [];
var len__45375__auto___60687 = arguments.length;
var i__45376__auto___60688 = (0);
while(true){
if((i__45376__auto___60688 < len__45375__auto___60687)){
args60684.push((arguments[i__45376__auto___60688]));

var G__60689 = (i__45376__auto___60688 + (1));
i__45376__auto___60688 = G__60689;
continue;
} else {
}
break;
}

var G__60686 = args60684.length;
switch (G__60686) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60684.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__60691_SHARP_,p2__60692_SHARP_){
return cljs.core.assoc.call(null,p1__60691_SHARP_,cljs.core.get.call(null,p2__60692_SHARP_,key),p2__60692_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__60693){
var map__60696 = p__60693;
var map__60696__$1 = ((((!((map__60696 == null)))?((((map__60696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60696):map__60696);
var f_data = map__60696__$1;
var file = cljs.core.get.call(null,map__60696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__60698,p__60699){
var map__60708 = p__60698;
var map__60708__$1 = ((((!((map__60708 == null)))?((((map__60708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60708):map__60708);
var opts = map__60708__$1;
var on_cssload = cljs.core.get.call(null,map__60708__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__60709 = p__60699;
var map__60709__$1 = ((((!((map__60709 == null)))?((((map__60709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60709):map__60709);
var files_msg = map__60709__$1;
var files = cljs.core.get.call(null,map__60709__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__60712_60716 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__60713_60717 = null;
var count__60714_60718 = (0);
var i__60715_60719 = (0);
while(true){
if((i__60715_60719 < count__60714_60718)){
var f_60720 = cljs.core._nth.call(null,chunk__60713_60717,i__60715_60719);
figwheel.client.file_reloading.reload_css_file.call(null,f_60720);

var G__60721 = seq__60712_60716;
var G__60722 = chunk__60713_60717;
var G__60723 = count__60714_60718;
var G__60724 = (i__60715_60719 + (1));
seq__60712_60716 = G__60721;
chunk__60713_60717 = G__60722;
count__60714_60718 = G__60723;
i__60715_60719 = G__60724;
continue;
} else {
var temp__4657__auto___60725 = cljs.core.seq.call(null,seq__60712_60716);
if(temp__4657__auto___60725){
var seq__60712_60726__$1 = temp__4657__auto___60725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60712_60726__$1)){
var c__45081__auto___60727 = cljs.core.chunk_first.call(null,seq__60712_60726__$1);
var G__60728 = cljs.core.chunk_rest.call(null,seq__60712_60726__$1);
var G__60729 = c__45081__auto___60727;
var G__60730 = cljs.core.count.call(null,c__45081__auto___60727);
var G__60731 = (0);
seq__60712_60716 = G__60728;
chunk__60713_60717 = G__60729;
count__60714_60718 = G__60730;
i__60715_60719 = G__60731;
continue;
} else {
var f_60732 = cljs.core.first.call(null,seq__60712_60726__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_60732);

var G__60733 = cljs.core.next.call(null,seq__60712_60726__$1);
var G__60734 = null;
var G__60735 = (0);
var G__60736 = (0);
seq__60712_60716 = G__60733;
chunk__60713_60717 = G__60734;
count__60714_60718 = G__60735;
i__60715_60719 = G__60736;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__60708,map__60708__$1,opts,on_cssload,map__60709,map__60709__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__60708,map__60708__$1,opts,on_cssload,map__60709,map__60709__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476929166571