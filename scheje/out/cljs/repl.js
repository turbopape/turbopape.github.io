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
var seq__22113_22127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22114_22128 = null;
var count__22115_22129 = (0);
var i__22116_22130 = (0);
while(true){
if((i__22116_22130 < count__22115_22129)){
var f_22131 = cljs.core._nth.call(null,chunk__22114_22128,i__22116_22130);
cljs.core.println.call(null,"  ",f_22131);

var G__22132 = seq__22113_22127;
var G__22133 = chunk__22114_22128;
var G__22134 = count__22115_22129;
var G__22135 = (i__22116_22130 + (1));
seq__22113_22127 = G__22132;
chunk__22114_22128 = G__22133;
count__22115_22129 = G__22134;
i__22116_22130 = G__22135;
continue;
} else {
var temp__4657__auto___22136 = cljs.core.seq.call(null,seq__22113_22127);
if(temp__4657__auto___22136){
var seq__22113_22137__$1 = temp__4657__auto___22136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22113_22137__$1)){
var c__13990__auto___22138 = cljs.core.chunk_first.call(null,seq__22113_22137__$1);
var G__22139 = cljs.core.chunk_rest.call(null,seq__22113_22137__$1);
var G__22140 = c__13990__auto___22138;
var G__22141 = cljs.core.count.call(null,c__13990__auto___22138);
var G__22142 = (0);
seq__22113_22127 = G__22139;
chunk__22114_22128 = G__22140;
count__22115_22129 = G__22141;
i__22116_22130 = G__22142;
continue;
} else {
var f_22143 = cljs.core.first.call(null,seq__22113_22137__$1);
cljs.core.println.call(null,"  ",f_22143);

var G__22144 = cljs.core.next.call(null,seq__22113_22137__$1);
var G__22145 = null;
var G__22146 = (0);
var G__22147 = (0);
seq__22113_22127 = G__22144;
chunk__22114_22128 = G__22145;
count__22115_22129 = G__22146;
i__22116_22130 = G__22147;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22148 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13187__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22148);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22148)))?cljs.core.second.call(null,arglists_22148):arglists_22148));
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
var seq__22117 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22118 = null;
var count__22119 = (0);
var i__22120 = (0);
while(true){
if((i__22120 < count__22119)){
var vec__22121 = cljs.core._nth.call(null,chunk__22118,i__22120);
var name = cljs.core.nth.call(null,vec__22121,(0),null);
var map__22122 = cljs.core.nth.call(null,vec__22121,(1),null);
var map__22122__$1 = ((((!((map__22122 == null)))?((((map__22122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22122):map__22122);
var doc = cljs.core.get.call(null,map__22122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22149 = seq__22117;
var G__22150 = chunk__22118;
var G__22151 = count__22119;
var G__22152 = (i__22120 + (1));
seq__22117 = G__22149;
chunk__22118 = G__22150;
count__22119 = G__22151;
i__22120 = G__22152;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22117);
if(temp__4657__auto__){
var seq__22117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22117__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__22117__$1);
var G__22153 = cljs.core.chunk_rest.call(null,seq__22117__$1);
var G__22154 = c__13990__auto__;
var G__22155 = cljs.core.count.call(null,c__13990__auto__);
var G__22156 = (0);
seq__22117 = G__22153;
chunk__22118 = G__22154;
count__22119 = G__22155;
i__22120 = G__22156;
continue;
} else {
var vec__22124 = cljs.core.first.call(null,seq__22117__$1);
var name = cljs.core.nth.call(null,vec__22124,(0),null);
var map__22125 = cljs.core.nth.call(null,vec__22124,(1),null);
var map__22125__$1 = ((((!((map__22125 == null)))?((((map__22125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22125):map__22125);
var doc = cljs.core.get.call(null,map__22125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22157 = cljs.core.next.call(null,seq__22117__$1);
var G__22158 = null;
var G__22159 = (0);
var G__22160 = (0);
seq__22117 = G__22157;
chunk__22118 = G__22158;
count__22119 = G__22159;
i__22120 = G__22160;
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

//# sourceMappingURL=repl.js.map?rel=1455728543147