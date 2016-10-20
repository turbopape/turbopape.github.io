// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52834){
var map__52859 = p__52834;
var map__52859__$1 = ((((!((map__52859 == null)))?((((map__52859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52859):map__52859);
var m = map__52859__$1;
var n = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52861_52883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52862_52884 = null;
var count__52863_52885 = (0);
var i__52864_52886 = (0);
while(true){
if((i__52864_52886 < count__52863_52885)){
var f_52887 = cljs.core._nth.call(null,chunk__52862_52884,i__52864_52886);
cljs.core.println.call(null,"  ",f_52887);

var G__52888 = seq__52861_52883;
var G__52889 = chunk__52862_52884;
var G__52890 = count__52863_52885;
var G__52891 = (i__52864_52886 + (1));
seq__52861_52883 = G__52888;
chunk__52862_52884 = G__52889;
count__52863_52885 = G__52890;
i__52864_52886 = G__52891;
continue;
} else {
var temp__4657__auto___52892 = cljs.core.seq.call(null,seq__52861_52883);
if(temp__4657__auto___52892){
var seq__52861_52893__$1 = temp__4657__auto___52892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52861_52893__$1)){
var c__45081__auto___52894 = cljs.core.chunk_first.call(null,seq__52861_52893__$1);
var G__52895 = cljs.core.chunk_rest.call(null,seq__52861_52893__$1);
var G__52896 = c__45081__auto___52894;
var G__52897 = cljs.core.count.call(null,c__45081__auto___52894);
var G__52898 = (0);
seq__52861_52883 = G__52895;
chunk__52862_52884 = G__52896;
count__52863_52885 = G__52897;
i__52864_52886 = G__52898;
continue;
} else {
var f_52899 = cljs.core.first.call(null,seq__52861_52893__$1);
cljs.core.println.call(null,"  ",f_52899);

var G__52900 = cljs.core.next.call(null,seq__52861_52893__$1);
var G__52901 = null;
var G__52902 = (0);
var G__52903 = (0);
seq__52861_52883 = G__52900;
chunk__52862_52884 = G__52901;
count__52863_52885 = G__52902;
i__52864_52886 = G__52903;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52904 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44267__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52904);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52904)))?cljs.core.second.call(null,arglists_52904):arglists_52904));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52865_52905 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52866_52906 = null;
var count__52867_52907 = (0);
var i__52868_52908 = (0);
while(true){
if((i__52868_52908 < count__52867_52907)){
var vec__52869_52909 = cljs.core._nth.call(null,chunk__52866_52906,i__52868_52908);
var name_52910 = cljs.core.nth.call(null,vec__52869_52909,(0),null);
var map__52872_52911 = cljs.core.nth.call(null,vec__52869_52909,(1),null);
var map__52872_52912__$1 = ((((!((map__52872_52911 == null)))?((((map__52872_52911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52872_52911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52872_52911):map__52872_52911);
var doc_52913 = cljs.core.get.call(null,map__52872_52912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52914 = cljs.core.get.call(null,map__52872_52912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52910);

cljs.core.println.call(null," ",arglists_52914);

if(cljs.core.truth_(doc_52913)){
cljs.core.println.call(null," ",doc_52913);
} else {
}

var G__52915 = seq__52865_52905;
var G__52916 = chunk__52866_52906;
var G__52917 = count__52867_52907;
var G__52918 = (i__52868_52908 + (1));
seq__52865_52905 = G__52915;
chunk__52866_52906 = G__52916;
count__52867_52907 = G__52917;
i__52868_52908 = G__52918;
continue;
} else {
var temp__4657__auto___52919 = cljs.core.seq.call(null,seq__52865_52905);
if(temp__4657__auto___52919){
var seq__52865_52920__$1 = temp__4657__auto___52919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52865_52920__$1)){
var c__45081__auto___52921 = cljs.core.chunk_first.call(null,seq__52865_52920__$1);
var G__52922 = cljs.core.chunk_rest.call(null,seq__52865_52920__$1);
var G__52923 = c__45081__auto___52921;
var G__52924 = cljs.core.count.call(null,c__45081__auto___52921);
var G__52925 = (0);
seq__52865_52905 = G__52922;
chunk__52866_52906 = G__52923;
count__52867_52907 = G__52924;
i__52868_52908 = G__52925;
continue;
} else {
var vec__52874_52926 = cljs.core.first.call(null,seq__52865_52920__$1);
var name_52927 = cljs.core.nth.call(null,vec__52874_52926,(0),null);
var map__52877_52928 = cljs.core.nth.call(null,vec__52874_52926,(1),null);
var map__52877_52929__$1 = ((((!((map__52877_52928 == null)))?((((map__52877_52928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52877_52928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52877_52928):map__52877_52928);
var doc_52930 = cljs.core.get.call(null,map__52877_52929__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52931 = cljs.core.get.call(null,map__52877_52929__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52927);

cljs.core.println.call(null," ",arglists_52931);

if(cljs.core.truth_(doc_52930)){
cljs.core.println.call(null," ",doc_52930);
} else {
}

var G__52932 = cljs.core.next.call(null,seq__52865_52920__$1);
var G__52933 = null;
var G__52934 = (0);
var G__52935 = (0);
seq__52865_52905 = G__52932;
chunk__52866_52906 = G__52933;
count__52867_52907 = G__52934;
i__52868_52908 = G__52935;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__52879 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52880 = null;
var count__52881 = (0);
var i__52882 = (0);
while(true){
if((i__52882 < count__52881)){
var role = cljs.core._nth.call(null,chunk__52880,i__52882);
var temp__4657__auto___52936__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52936__$1)){
var spec_52937 = temp__4657__auto___52936__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52937));
} else {
}

var G__52938 = seq__52879;
var G__52939 = chunk__52880;
var G__52940 = count__52881;
var G__52941 = (i__52882 + (1));
seq__52879 = G__52938;
chunk__52880 = G__52939;
count__52881 = G__52940;
i__52882 = G__52941;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__52879);
if(temp__4657__auto____$1){
var seq__52879__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52879__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__52879__$1);
var G__52942 = cljs.core.chunk_rest.call(null,seq__52879__$1);
var G__52943 = c__45081__auto__;
var G__52944 = cljs.core.count.call(null,c__45081__auto__);
var G__52945 = (0);
seq__52879 = G__52942;
chunk__52880 = G__52943;
count__52881 = G__52944;
i__52882 = G__52945;
continue;
} else {
var role = cljs.core.first.call(null,seq__52879__$1);
var temp__4657__auto___52946__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52946__$2)){
var spec_52947 = temp__4657__auto___52946__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52947));
} else {
}

var G__52948 = cljs.core.next.call(null,seq__52879__$1);
var G__52949 = null;
var G__52950 = (0);
var G__52951 = (0);
seq__52879 = G__52948;
chunk__52880 = G__52949;
count__52881 = G__52950;
i__52882 = G__52951;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1476916473396