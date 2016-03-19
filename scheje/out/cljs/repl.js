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
var seq__22111_22125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22112_22126 = null;
var count__22113_22127 = (0);
var i__22114_22128 = (0);
while(true){
if((i__22114_22128 < count__22113_22127)){
var f_22129 = cljs.core._nth.call(null,chunk__22112_22126,i__22114_22128);
cljs.core.println.call(null,"  ",f_22129);

var G__22130 = seq__22111_22125;
var G__22131 = chunk__22112_22126;
var G__22132 = count__22113_22127;
var G__22133 = (i__22114_22128 + (1));
seq__22111_22125 = G__22130;
chunk__22112_22126 = G__22131;
count__22113_22127 = G__22132;
i__22114_22128 = G__22133;
continue;
} else {
var temp__4657__auto___22134 = cljs.core.seq.call(null,seq__22111_22125);
if(temp__4657__auto___22134){
var seq__22111_22135__$1 = temp__4657__auto___22134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22111_22135__$1)){
var c__13990__auto___22136 = cljs.core.chunk_first.call(null,seq__22111_22135__$1);
var G__22137 = cljs.core.chunk_rest.call(null,seq__22111_22135__$1);
var G__22138 = c__13990__auto___22136;
var G__22139 = cljs.core.count.call(null,c__13990__auto___22136);
var G__22140 = (0);
seq__22111_22125 = G__22137;
chunk__22112_22126 = G__22138;
count__22113_22127 = G__22139;
i__22114_22128 = G__22140;
continue;
} else {
var f_22141 = cljs.core.first.call(null,seq__22111_22135__$1);
cljs.core.println.call(null,"  ",f_22141);

var G__22142 = cljs.core.next.call(null,seq__22111_22135__$1);
var G__22143 = null;
var G__22144 = (0);
var G__22145 = (0);
seq__22111_22125 = G__22142;
chunk__22112_22126 = G__22143;
count__22113_22127 = G__22144;
i__22114_22128 = G__22145;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22146 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13187__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22146);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22146)))?cljs.core.second.call(null,arglists_22146):arglists_22146));
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
var seq__22115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22116 = null;
var count__22117 = (0);
var i__22118 = (0);
while(true){
if((i__22118 < count__22117)){
var vec__22119 = cljs.core._nth.call(null,chunk__22116,i__22118);
var name = cljs.core.nth.call(null,vec__22119,(0),null);
var map__22120 = cljs.core.nth.call(null,vec__22119,(1),null);
var map__22120__$1 = ((((!((map__22120 == null)))?((((map__22120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22120):map__22120);
var doc = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22147 = seq__22115;
var G__22148 = chunk__22116;
var G__22149 = count__22117;
var G__22150 = (i__22118 + (1));
seq__22115 = G__22147;
chunk__22116 = G__22148;
count__22117 = G__22149;
i__22118 = G__22150;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22115);
if(temp__4657__auto__){
var seq__22115__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22115__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__22115__$1);
var G__22151 = cljs.core.chunk_rest.call(null,seq__22115__$1);
var G__22152 = c__13990__auto__;
var G__22153 = cljs.core.count.call(null,c__13990__auto__);
var G__22154 = (0);
seq__22115 = G__22151;
chunk__22116 = G__22152;
count__22117 = G__22153;
i__22118 = G__22154;
continue;
} else {
var vec__22122 = cljs.core.first.call(null,seq__22115__$1);
var name = cljs.core.nth.call(null,vec__22122,(0),null);
var map__22123 = cljs.core.nth.call(null,vec__22122,(1),null);
var map__22123__$1 = ((((!((map__22123 == null)))?((((map__22123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22123):map__22123);
var doc = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22155 = cljs.core.next.call(null,seq__22115__$1);
var G__22156 = null;
var G__22157 = (0);
var G__22158 = (0);
seq__22115 = G__22155;
chunk__22116 = G__22156;
count__22117 = G__22157;
i__22118 = G__22158;
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

//# sourceMappingURL=repl.js.map?rel=1464515101402