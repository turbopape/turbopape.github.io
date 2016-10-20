// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61771){
var map__61796 = p__61771;
var map__61796__$1 = ((((!((map__61796 == null)))?((((map__61796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61796):map__61796);
var m = map__61796__$1;
var n = cljs.core.get.call(null,map__61796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__61798_61820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61799_61821 = null;
var count__61800_61822 = (0);
var i__61801_61823 = (0);
while(true){
if((i__61801_61823 < count__61800_61822)){
var f_61824 = cljs.core._nth.call(null,chunk__61799_61821,i__61801_61823);
cljs.core.println.call(null,"  ",f_61824);

var G__61825 = seq__61798_61820;
var G__61826 = chunk__61799_61821;
var G__61827 = count__61800_61822;
var G__61828 = (i__61801_61823 + (1));
seq__61798_61820 = G__61825;
chunk__61799_61821 = G__61826;
count__61800_61822 = G__61827;
i__61801_61823 = G__61828;
continue;
} else {
var temp__4657__auto___61829 = cljs.core.seq.call(null,seq__61798_61820);
if(temp__4657__auto___61829){
var seq__61798_61830__$1 = temp__4657__auto___61829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61798_61830__$1)){
var c__45081__auto___61831 = cljs.core.chunk_first.call(null,seq__61798_61830__$1);
var G__61832 = cljs.core.chunk_rest.call(null,seq__61798_61830__$1);
var G__61833 = c__45081__auto___61831;
var G__61834 = cljs.core.count.call(null,c__45081__auto___61831);
var G__61835 = (0);
seq__61798_61820 = G__61832;
chunk__61799_61821 = G__61833;
count__61800_61822 = G__61834;
i__61801_61823 = G__61835;
continue;
} else {
var f_61836 = cljs.core.first.call(null,seq__61798_61830__$1);
cljs.core.println.call(null,"  ",f_61836);

var G__61837 = cljs.core.next.call(null,seq__61798_61830__$1);
var G__61838 = null;
var G__61839 = (0);
var G__61840 = (0);
seq__61798_61820 = G__61837;
chunk__61799_61821 = G__61838;
count__61800_61822 = G__61839;
i__61801_61823 = G__61840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44267__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61841)))?cljs.core.second.call(null,arglists_61841):arglists_61841));
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
var seq__61802_61842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61803_61843 = null;
var count__61804_61844 = (0);
var i__61805_61845 = (0);
while(true){
if((i__61805_61845 < count__61804_61844)){
var vec__61806_61846 = cljs.core._nth.call(null,chunk__61803_61843,i__61805_61845);
var name_61847 = cljs.core.nth.call(null,vec__61806_61846,(0),null);
var map__61809_61848 = cljs.core.nth.call(null,vec__61806_61846,(1),null);
var map__61809_61849__$1 = ((((!((map__61809_61848 == null)))?((((map__61809_61848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61809_61848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61809_61848):map__61809_61848);
var doc_61850 = cljs.core.get.call(null,map__61809_61849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61851 = cljs.core.get.call(null,map__61809_61849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61847);

cljs.core.println.call(null," ",arglists_61851);

if(cljs.core.truth_(doc_61850)){
cljs.core.println.call(null," ",doc_61850);
} else {
}

var G__61852 = seq__61802_61842;
var G__61853 = chunk__61803_61843;
var G__61854 = count__61804_61844;
var G__61855 = (i__61805_61845 + (1));
seq__61802_61842 = G__61852;
chunk__61803_61843 = G__61853;
count__61804_61844 = G__61854;
i__61805_61845 = G__61855;
continue;
} else {
var temp__4657__auto___61856 = cljs.core.seq.call(null,seq__61802_61842);
if(temp__4657__auto___61856){
var seq__61802_61857__$1 = temp__4657__auto___61856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61802_61857__$1)){
var c__45081__auto___61858 = cljs.core.chunk_first.call(null,seq__61802_61857__$1);
var G__61859 = cljs.core.chunk_rest.call(null,seq__61802_61857__$1);
var G__61860 = c__45081__auto___61858;
var G__61861 = cljs.core.count.call(null,c__45081__auto___61858);
var G__61862 = (0);
seq__61802_61842 = G__61859;
chunk__61803_61843 = G__61860;
count__61804_61844 = G__61861;
i__61805_61845 = G__61862;
continue;
} else {
var vec__61811_61863 = cljs.core.first.call(null,seq__61802_61857__$1);
var name_61864 = cljs.core.nth.call(null,vec__61811_61863,(0),null);
var map__61814_61865 = cljs.core.nth.call(null,vec__61811_61863,(1),null);
var map__61814_61866__$1 = ((((!((map__61814_61865 == null)))?((((map__61814_61865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61814_61865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61814_61865):map__61814_61865);
var doc_61867 = cljs.core.get.call(null,map__61814_61866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61868 = cljs.core.get.call(null,map__61814_61866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61864);

cljs.core.println.call(null," ",arglists_61868);

if(cljs.core.truth_(doc_61867)){
cljs.core.println.call(null," ",doc_61867);
} else {
}

var G__61869 = cljs.core.next.call(null,seq__61802_61857__$1);
var G__61870 = null;
var G__61871 = (0);
var G__61872 = (0);
seq__61802_61842 = G__61869;
chunk__61803_61843 = G__61870;
count__61804_61844 = G__61871;
i__61805_61845 = G__61872;
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

var seq__61816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61817 = null;
var count__61818 = (0);
var i__61819 = (0);
while(true){
if((i__61819 < count__61818)){
var role = cljs.core._nth.call(null,chunk__61817,i__61819);
var temp__4657__auto___61873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61873__$1)){
var spec_61874 = temp__4657__auto___61873__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61874));
} else {
}

var G__61875 = seq__61816;
var G__61876 = chunk__61817;
var G__61877 = count__61818;
var G__61878 = (i__61819 + (1));
seq__61816 = G__61875;
chunk__61817 = G__61876;
count__61818 = G__61877;
i__61819 = G__61878;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__61816);
if(temp__4657__auto____$1){
var seq__61816__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61816__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__61816__$1);
var G__61879 = cljs.core.chunk_rest.call(null,seq__61816__$1);
var G__61880 = c__45081__auto__;
var G__61881 = cljs.core.count.call(null,c__45081__auto__);
var G__61882 = (0);
seq__61816 = G__61879;
chunk__61817 = G__61880;
count__61818 = G__61881;
i__61819 = G__61882;
continue;
} else {
var role = cljs.core.first.call(null,seq__61816__$1);
var temp__4657__auto___61883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61883__$2)){
var spec_61884 = temp__4657__auto___61883__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61884));
} else {
}

var G__61885 = cljs.core.next.call(null,seq__61816__$1);
var G__61886 = null;
var G__61887 = (0);
var G__61888 = (0);
seq__61816 = G__61885;
chunk__61817 = G__61886;
count__61818 = G__61887;
i__61819 = G__61888;
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

//# sourceMappingURL=repl.js.map?rel=1476929169706