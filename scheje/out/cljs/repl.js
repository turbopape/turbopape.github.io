// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
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
var seq__21313_21327 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21314_21328 = null;
var count__21315_21329 = (0);
var i__21316_21330 = (0);
while(true){
if((i__21316_21330 < count__21315_21329)){
var f_21331 = cljs.core._nth.call(null,chunk__21314_21328,i__21316_21330);
cljs.core.println.call(null,"  ",f_21331);

var G__21332 = seq__21313_21327;
var G__21333 = chunk__21314_21328;
var G__21334 = count__21315_21329;
var G__21335 = (i__21316_21330 + (1));
seq__21313_21327 = G__21332;
chunk__21314_21328 = G__21333;
count__21315_21329 = G__21334;
i__21316_21330 = G__21335;
continue;
} else {
var temp__4657__auto___21336 = cljs.core.seq.call(null,seq__21313_21327);
if(temp__4657__auto___21336){
var seq__21313_21337__$1 = temp__4657__auto___21336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21313_21337__$1)){
var c__13990__auto___21338 = cljs.core.chunk_first.call(null,seq__21313_21337__$1);
var G__21339 = cljs.core.chunk_rest.call(null,seq__21313_21337__$1);
var G__21340 = c__13990__auto___21338;
var G__21341 = cljs.core.count.call(null,c__13990__auto___21338);
var G__21342 = (0);
seq__21313_21327 = G__21339;
chunk__21314_21328 = G__21340;
count__21315_21329 = G__21341;
i__21316_21330 = G__21342;
continue;
} else {
var f_21343 = cljs.core.first.call(null,seq__21313_21337__$1);
cljs.core.println.call(null,"  ",f_21343);

var G__21344 = cljs.core.next.call(null,seq__21313_21337__$1);
var G__21345 = null;
var G__21346 = (0);
var G__21347 = (0);
seq__21313_21327 = G__21344;
chunk__21314_21328 = G__21345;
count__21315_21329 = G__21346;
i__21316_21330 = G__21347;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21348 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13187__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21348);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21348)))?cljs.core.second.call(null,arglists_21348):arglists_21348));
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
var seq__21317 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21318 = null;
var count__21319 = (0);
var i__21320 = (0);
while(true){
if((i__21320 < count__21319)){
var vec__21321 = cljs.core._nth.call(null,chunk__21318,i__21320);
var name = cljs.core.nth.call(null,vec__21321,(0),null);
var map__21322 = cljs.core.nth.call(null,vec__21321,(1),null);
var map__21322__$1 = ((((!((map__21322 == null)))?((((map__21322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21322):map__21322);
var doc = cljs.core.get.call(null,map__21322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21322__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21349 = seq__21317;
var G__21350 = chunk__21318;
var G__21351 = count__21319;
var G__21352 = (i__21320 + (1));
seq__21317 = G__21349;
chunk__21318 = G__21350;
count__21319 = G__21351;
i__21320 = G__21352;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21317);
if(temp__4657__auto__){
var seq__21317__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21317__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__21317__$1);
var G__21353 = cljs.core.chunk_rest.call(null,seq__21317__$1);
var G__21354 = c__13990__auto__;
var G__21355 = cljs.core.count.call(null,c__13990__auto__);
var G__21356 = (0);
seq__21317 = G__21353;
chunk__21318 = G__21354;
count__21319 = G__21355;
i__21320 = G__21356;
continue;
} else {
var vec__21324 = cljs.core.first.call(null,seq__21317__$1);
var name = cljs.core.nth.call(null,vec__21324,(0),null);
var map__21325 = cljs.core.nth.call(null,vec__21324,(1),null);
var map__21325__$1 = ((((!((map__21325 == null)))?((((map__21325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21325):map__21325);
var doc = cljs.core.get.call(null,map__21325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21357 = cljs.core.next.call(null,seq__21317__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21317 = G__21357;
chunk__21318 = G__21358;
count__21319 = G__21359;
i__21320 = G__21360;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1455204573501