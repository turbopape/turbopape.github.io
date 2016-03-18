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
var seq__37115_37129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37116_37130 = null;
var count__37117_37131 = (0);
var i__37118_37132 = (0);
while(true){
if((i__37118_37132 < count__37117_37131)){
var f_37133 = cljs.core._nth.call(null,chunk__37116_37130,i__37118_37132);
cljs.core.println.call(null,"  ",f_37133);

var G__37134 = seq__37115_37129;
var G__37135 = chunk__37116_37130;
var G__37136 = count__37117_37131;
var G__37137 = (i__37118_37132 + (1));
seq__37115_37129 = G__37134;
chunk__37116_37130 = G__37135;
count__37117_37131 = G__37136;
i__37118_37132 = G__37137;
continue;
} else {
var temp__4657__auto___37138 = cljs.core.seq.call(null,seq__37115_37129);
if(temp__4657__auto___37138){
var seq__37115_37139__$1 = temp__4657__auto___37138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37115_37139__$1)){
var c__13990__auto___37140 = cljs.core.chunk_first.call(null,seq__37115_37139__$1);
var G__37141 = cljs.core.chunk_rest.call(null,seq__37115_37139__$1);
var G__37142 = c__13990__auto___37140;
var G__37143 = cljs.core.count.call(null,c__13990__auto___37140);
var G__37144 = (0);
seq__37115_37129 = G__37141;
chunk__37116_37130 = G__37142;
count__37117_37131 = G__37143;
i__37118_37132 = G__37144;
continue;
} else {
var f_37145 = cljs.core.first.call(null,seq__37115_37139__$1);
cljs.core.println.call(null,"  ",f_37145);

var G__37146 = cljs.core.next.call(null,seq__37115_37139__$1);
var G__37147 = null;
var G__37148 = (0);
var G__37149 = (0);
seq__37115_37129 = G__37146;
chunk__37116_37130 = G__37147;
count__37117_37131 = G__37148;
i__37118_37132 = G__37149;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37150 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13187__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37150);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37150)))?cljs.core.second.call(null,arglists_37150):arglists_37150));
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
var seq__37119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37120 = null;
var count__37121 = (0);
var i__37122 = (0);
while(true){
if((i__37122 < count__37121)){
var vec__37123 = cljs.core._nth.call(null,chunk__37120,i__37122);
var name = cljs.core.nth.call(null,vec__37123,(0),null);
var map__37124 = cljs.core.nth.call(null,vec__37123,(1),null);
var map__37124__$1 = ((((!((map__37124 == null)))?((((map__37124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37124):map__37124);
var doc = cljs.core.get.call(null,map__37124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37151 = seq__37119;
var G__37152 = chunk__37120;
var G__37153 = count__37121;
var G__37154 = (i__37122 + (1));
seq__37119 = G__37151;
chunk__37120 = G__37152;
count__37121 = G__37153;
i__37122 = G__37154;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37119);
if(temp__4657__auto__){
var seq__37119__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37119__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__37119__$1);
var G__37155 = cljs.core.chunk_rest.call(null,seq__37119__$1);
var G__37156 = c__13990__auto__;
var G__37157 = cljs.core.count.call(null,c__13990__auto__);
var G__37158 = (0);
seq__37119 = G__37155;
chunk__37120 = G__37156;
count__37121 = G__37157;
i__37122 = G__37158;
continue;
} else {
var vec__37126 = cljs.core.first.call(null,seq__37119__$1);
var name = cljs.core.nth.call(null,vec__37126,(0),null);
var map__37127 = cljs.core.nth.call(null,vec__37126,(1),null);
var map__37127__$1 = ((((!((map__37127 == null)))?((((map__37127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37127):map__37127);
var doc = cljs.core.get.call(null,map__37127__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37127__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37159 = cljs.core.next.call(null,seq__37119__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__37119 = G__37159;
chunk__37120 = G__37160;
count__37121 = G__37161;
i__37122 = G__37162;
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

//# sourceMappingURL=repl.js.map?rel=1458338370141