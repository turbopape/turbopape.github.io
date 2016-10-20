// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60740 = arguments.length;
var i__45376__auto___60741 = (0);
while(true){
if((i__45376__auto___60741 < len__45375__auto___60740)){
args__45382__auto__.push((arguments[i__45376__auto___60741]));

var G__60742 = (i__45376__auto___60741 + (1));
i__45376__auto___60741 = G__60742;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq60739){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60739));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60744 = arguments.length;
var i__45376__auto___60745 = (0);
while(true){
if((i__45376__auto___60745 < len__45375__auto___60744)){
args__45382__auto__.push((arguments[i__45376__auto___60745]));

var G__60746 = (i__45376__auto___60745 + (1));
i__45376__auto___60745 = G__60746;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq60743){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60743));
});

var g_QMARK__60747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_60748 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__60747){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__60747))
,null));
var mkg_60749 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__60747,g_60748){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__60747,g_60748))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__60747,g_60748,mkg_60749){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__60747).call(null,x);
});})(g_QMARK__60747,g_60748,mkg_60749))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__60747,g_60748,mkg_60749){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_60749).call(null,gfn);
});})(g_QMARK__60747,g_60748,mkg_60749))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__60747,g_60748,mkg_60749){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_60748).call(null,generator);
});})(g_QMARK__60747,g_60748,mkg_60749))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50933__auto___60768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50933__auto___60768){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60769 = arguments.length;
var i__45376__auto___60770 = (0);
while(true){
if((i__45376__auto___60770 < len__45375__auto___60769)){
args__45382__auto__.push((arguments[i__45376__auto___60770]));

var G__60771 = (i__45376__auto___60770 + (1));
i__45376__auto___60770 = G__60771;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60768))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60768),args);
});})(g__50933__auto___60768))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50933__auto___60768){
return (function (seq60750){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60750));
});})(g__50933__auto___60768))
;


var g__50933__auto___60772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50933__auto___60772){
return (function cljs$spec$impl$gen$list(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60773 = arguments.length;
var i__45376__auto___60774 = (0);
while(true){
if((i__45376__auto___60774 < len__45375__auto___60773)){
args__45382__auto__.push((arguments[i__45376__auto___60774]));

var G__60775 = (i__45376__auto___60774 + (1));
i__45376__auto___60774 = G__60775;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60772))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60772),args);
});})(g__50933__auto___60772))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50933__auto___60772){
return (function (seq60751){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60751));
});})(g__50933__auto___60772))
;


var g__50933__auto___60776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50933__auto___60776){
return (function cljs$spec$impl$gen$map(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60777 = arguments.length;
var i__45376__auto___60778 = (0);
while(true){
if((i__45376__auto___60778 < len__45375__auto___60777)){
args__45382__auto__.push((arguments[i__45376__auto___60778]));

var G__60779 = (i__45376__auto___60778 + (1));
i__45376__auto___60778 = G__60779;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60776))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60776),args);
});})(g__50933__auto___60776))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50933__auto___60776){
return (function (seq60752){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60752));
});})(g__50933__auto___60776))
;


var g__50933__auto___60780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50933__auto___60780){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60781 = arguments.length;
var i__45376__auto___60782 = (0);
while(true){
if((i__45376__auto___60782 < len__45375__auto___60781)){
args__45382__auto__.push((arguments[i__45376__auto___60782]));

var G__60783 = (i__45376__auto___60782 + (1));
i__45376__auto___60782 = G__60783;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60780))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60780),args);
});})(g__50933__auto___60780))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50933__auto___60780){
return (function (seq60753){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60753));
});})(g__50933__auto___60780))
;


var g__50933__auto___60784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50933__auto___60784){
return (function cljs$spec$impl$gen$set(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60785 = arguments.length;
var i__45376__auto___60786 = (0);
while(true){
if((i__45376__auto___60786 < len__45375__auto___60785)){
args__45382__auto__.push((arguments[i__45376__auto___60786]));

var G__60787 = (i__45376__auto___60786 + (1));
i__45376__auto___60786 = G__60787;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60784))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60784),args);
});})(g__50933__auto___60784))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50933__auto___60784){
return (function (seq60754){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60754));
});})(g__50933__auto___60784))
;


var g__50933__auto___60788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50933__auto___60788){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60789 = arguments.length;
var i__45376__auto___60790 = (0);
while(true){
if((i__45376__auto___60790 < len__45375__auto___60789)){
args__45382__auto__.push((arguments[i__45376__auto___60790]));

var G__60791 = (i__45376__auto___60790 + (1));
i__45376__auto___60790 = G__60791;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60788))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60788),args);
});})(g__50933__auto___60788))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50933__auto___60788){
return (function (seq60755){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60755));
});})(g__50933__auto___60788))
;


var g__50933__auto___60792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50933__auto___60792){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60793 = arguments.length;
var i__45376__auto___60794 = (0);
while(true){
if((i__45376__auto___60794 < len__45375__auto___60793)){
args__45382__auto__.push((arguments[i__45376__auto___60794]));

var G__60795 = (i__45376__auto___60794 + (1));
i__45376__auto___60794 = G__60795;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60792))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60792),args);
});})(g__50933__auto___60792))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50933__auto___60792){
return (function (seq60756){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60756));
});})(g__50933__auto___60792))
;


var g__50933__auto___60796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50933__auto___60796){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60797 = arguments.length;
var i__45376__auto___60798 = (0);
while(true){
if((i__45376__auto___60798 < len__45375__auto___60797)){
args__45382__auto__.push((arguments[i__45376__auto___60798]));

var G__60799 = (i__45376__auto___60798 + (1));
i__45376__auto___60798 = G__60799;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60796))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60796),args);
});})(g__50933__auto___60796))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50933__auto___60796){
return (function (seq60757){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60757));
});})(g__50933__auto___60796))
;


var g__50933__auto___60800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50933__auto___60800){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60801 = arguments.length;
var i__45376__auto___60802 = (0);
while(true){
if((i__45376__auto___60802 < len__45375__auto___60801)){
args__45382__auto__.push((arguments[i__45376__auto___60802]));

var G__60803 = (i__45376__auto___60802 + (1));
i__45376__auto___60802 = G__60803;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60800))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60800),args);
});})(g__50933__auto___60800))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50933__auto___60800){
return (function (seq60758){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60758));
});})(g__50933__auto___60800))
;


var g__50933__auto___60804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50933__auto___60804){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60805 = arguments.length;
var i__45376__auto___60806 = (0);
while(true){
if((i__45376__auto___60806 < len__45375__auto___60805)){
args__45382__auto__.push((arguments[i__45376__auto___60806]));

var G__60807 = (i__45376__auto___60806 + (1));
i__45376__auto___60806 = G__60807;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60804))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60804){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60804),args);
});})(g__50933__auto___60804))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50933__auto___60804){
return (function (seq60759){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60759));
});})(g__50933__auto___60804))
;


var g__50933__auto___60808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50933__auto___60808){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60809 = arguments.length;
var i__45376__auto___60810 = (0);
while(true){
if((i__45376__auto___60810 < len__45375__auto___60809)){
args__45382__auto__.push((arguments[i__45376__auto___60810]));

var G__60811 = (i__45376__auto___60810 + (1));
i__45376__auto___60810 = G__60811;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60808))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60808),args);
});})(g__50933__auto___60808))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50933__auto___60808){
return (function (seq60760){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60760));
});})(g__50933__auto___60808))
;


var g__50933__auto___60812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50933__auto___60812){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60813 = arguments.length;
var i__45376__auto___60814 = (0);
while(true){
if((i__45376__auto___60814 < len__45375__auto___60813)){
args__45382__auto__.push((arguments[i__45376__auto___60814]));

var G__60815 = (i__45376__auto___60814 + (1));
i__45376__auto___60814 = G__60815;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60812))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60812),args);
});})(g__50933__auto___60812))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50933__auto___60812){
return (function (seq60761){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60761));
});})(g__50933__auto___60812))
;


var g__50933__auto___60816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50933__auto___60816){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60817 = arguments.length;
var i__45376__auto___60818 = (0);
while(true){
if((i__45376__auto___60818 < len__45375__auto___60817)){
args__45382__auto__.push((arguments[i__45376__auto___60818]));

var G__60819 = (i__45376__auto___60818 + (1));
i__45376__auto___60818 = G__60819;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60816))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60816),args);
});})(g__50933__auto___60816))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50933__auto___60816){
return (function (seq60762){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60762));
});})(g__50933__auto___60816))
;


var g__50933__auto___60820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50933__auto___60820){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60821 = arguments.length;
var i__45376__auto___60822 = (0);
while(true){
if((i__45376__auto___60822 < len__45375__auto___60821)){
args__45382__auto__.push((arguments[i__45376__auto___60822]));

var G__60823 = (i__45376__auto___60822 + (1));
i__45376__auto___60822 = G__60823;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60820))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60820),args);
});})(g__50933__auto___60820))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50933__auto___60820){
return (function (seq60763){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60763));
});})(g__50933__auto___60820))
;


var g__50933__auto___60824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50933__auto___60824){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60825 = arguments.length;
var i__45376__auto___60826 = (0);
while(true){
if((i__45376__auto___60826 < len__45375__auto___60825)){
args__45382__auto__.push((arguments[i__45376__auto___60826]));

var G__60827 = (i__45376__auto___60826 + (1));
i__45376__auto___60826 = G__60827;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60824))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60824),args);
});})(g__50933__auto___60824))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50933__auto___60824){
return (function (seq60764){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60764));
});})(g__50933__auto___60824))
;


var g__50933__auto___60828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50933__auto___60828){
return (function cljs$spec$impl$gen$return(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60829 = arguments.length;
var i__45376__auto___60830 = (0);
while(true){
if((i__45376__auto___60830 < len__45375__auto___60829)){
args__45382__auto__.push((arguments[i__45376__auto___60830]));

var G__60831 = (i__45376__auto___60830 + (1));
i__45376__auto___60830 = G__60831;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60828))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60828),args);
});})(g__50933__auto___60828))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50933__auto___60828){
return (function (seq60765){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60765));
});})(g__50933__auto___60828))
;


var g__50933__auto___60832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50933__auto___60832){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60833 = arguments.length;
var i__45376__auto___60834 = (0);
while(true){
if((i__45376__auto___60834 < len__45375__auto___60833)){
args__45382__auto__.push((arguments[i__45376__auto___60834]));

var G__60835 = (i__45376__auto___60834 + (1));
i__45376__auto___60834 = G__60835;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60832))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60832){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60832),args);
});})(g__50933__auto___60832))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50933__auto___60832){
return (function (seq60766){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60766));
});})(g__50933__auto___60832))
;


var g__50933__auto___60836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50933__auto___60836){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60837 = arguments.length;
var i__45376__auto___60838 = (0);
while(true){
if((i__45376__auto___60838 < len__45375__auto___60837)){
args__45382__auto__.push((arguments[i__45376__auto___60838]));

var G__60839 = (i__45376__auto___60838 + (1));
i__45376__auto___60838 = G__60839;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50933__auto___60836))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50933__auto___60836){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50933__auto___60836),args);
});})(g__50933__auto___60836))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50933__auto___60836){
return (function (seq60767){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60767));
});})(g__50933__auto___60836))
;

var g__50946__auto___60861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50946__auto___60861){
return (function cljs$spec$impl$gen$any(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60862 = arguments.length;
var i__45376__auto___60863 = (0);
while(true){
if((i__45376__auto___60863 < len__45375__auto___60862)){
args__45382__auto__.push((arguments[i__45376__auto___60863]));

var G__60864 = (i__45376__auto___60863 + (1));
i__45376__auto___60863 = G__60864;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60861))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60861){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60861);
});})(g__50946__auto___60861))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50946__auto___60861){
return (function (seq60840){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60840));
});})(g__50946__auto___60861))
;


var g__50946__auto___60865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50946__auto___60865){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60866 = arguments.length;
var i__45376__auto___60867 = (0);
while(true){
if((i__45376__auto___60867 < len__45375__auto___60866)){
args__45382__auto__.push((arguments[i__45376__auto___60867]));

var G__60868 = (i__45376__auto___60867 + (1));
i__45376__auto___60867 = G__60868;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60865))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60865){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60865);
});})(g__50946__auto___60865))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50946__auto___60865){
return (function (seq60841){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60841));
});})(g__50946__auto___60865))
;


var g__50946__auto___60869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50946__auto___60869){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60870 = arguments.length;
var i__45376__auto___60871 = (0);
while(true){
if((i__45376__auto___60871 < len__45375__auto___60870)){
args__45382__auto__.push((arguments[i__45376__auto___60871]));

var G__60872 = (i__45376__auto___60871 + (1));
i__45376__auto___60871 = G__60872;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60869))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60869){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60869);
});})(g__50946__auto___60869))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50946__auto___60869){
return (function (seq60842){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60842));
});})(g__50946__auto___60869))
;


var g__50946__auto___60873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50946__auto___60873){
return (function cljs$spec$impl$gen$char(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60874 = arguments.length;
var i__45376__auto___60875 = (0);
while(true){
if((i__45376__auto___60875 < len__45375__auto___60874)){
args__45382__auto__.push((arguments[i__45376__auto___60875]));

var G__60876 = (i__45376__auto___60875 + (1));
i__45376__auto___60875 = G__60876;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60873))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60873){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60873);
});})(g__50946__auto___60873))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50946__auto___60873){
return (function (seq60843){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60843));
});})(g__50946__auto___60873))
;


var g__50946__auto___60877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50946__auto___60877){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60878 = arguments.length;
var i__45376__auto___60879 = (0);
while(true){
if((i__45376__auto___60879 < len__45375__auto___60878)){
args__45382__auto__.push((arguments[i__45376__auto___60879]));

var G__60880 = (i__45376__auto___60879 + (1));
i__45376__auto___60879 = G__60880;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60877))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60877){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60877);
});})(g__50946__auto___60877))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50946__auto___60877){
return (function (seq60844){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60844));
});})(g__50946__auto___60877))
;


var g__50946__auto___60881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50946__auto___60881){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60882 = arguments.length;
var i__45376__auto___60883 = (0);
while(true){
if((i__45376__auto___60883 < len__45375__auto___60882)){
args__45382__auto__.push((arguments[i__45376__auto___60883]));

var G__60884 = (i__45376__auto___60883 + (1));
i__45376__auto___60883 = G__60884;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60881))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60881){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60881);
});})(g__50946__auto___60881))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50946__auto___60881){
return (function (seq60845){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60845));
});})(g__50946__auto___60881))
;


var g__50946__auto___60885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50946__auto___60885){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60886 = arguments.length;
var i__45376__auto___60887 = (0);
while(true){
if((i__45376__auto___60887 < len__45375__auto___60886)){
args__45382__auto__.push((arguments[i__45376__auto___60887]));

var G__60888 = (i__45376__auto___60887 + (1));
i__45376__auto___60887 = G__60888;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60885))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60885){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60885);
});})(g__50946__auto___60885))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50946__auto___60885){
return (function (seq60846){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60846));
});})(g__50946__auto___60885))
;


var g__50946__auto___60889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50946__auto___60889){
return (function cljs$spec$impl$gen$double(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60890 = arguments.length;
var i__45376__auto___60891 = (0);
while(true){
if((i__45376__auto___60891 < len__45375__auto___60890)){
args__45382__auto__.push((arguments[i__45376__auto___60891]));

var G__60892 = (i__45376__auto___60891 + (1));
i__45376__auto___60891 = G__60892;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60889))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60889){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60889);
});})(g__50946__auto___60889))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50946__auto___60889){
return (function (seq60847){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60847));
});})(g__50946__auto___60889))
;


var g__50946__auto___60893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50946__auto___60893){
return (function cljs$spec$impl$gen$int(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60894 = arguments.length;
var i__45376__auto___60895 = (0);
while(true){
if((i__45376__auto___60895 < len__45375__auto___60894)){
args__45382__auto__.push((arguments[i__45376__auto___60895]));

var G__60896 = (i__45376__auto___60895 + (1));
i__45376__auto___60895 = G__60896;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60893))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60893){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60893);
});})(g__50946__auto___60893))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50946__auto___60893){
return (function (seq60848){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60848));
});})(g__50946__auto___60893))
;


var g__50946__auto___60897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50946__auto___60897){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60898 = arguments.length;
var i__45376__auto___60899 = (0);
while(true){
if((i__45376__auto___60899 < len__45375__auto___60898)){
args__45382__auto__.push((arguments[i__45376__auto___60899]));

var G__60900 = (i__45376__auto___60899 + (1));
i__45376__auto___60899 = G__60900;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60897))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60897){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60897);
});})(g__50946__auto___60897))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50946__auto___60897){
return (function (seq60849){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60849));
});})(g__50946__auto___60897))
;


var g__50946__auto___60901 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50946__auto___60901){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60902 = arguments.length;
var i__45376__auto___60903 = (0);
while(true){
if((i__45376__auto___60903 < len__45375__auto___60902)){
args__45382__auto__.push((arguments[i__45376__auto___60903]));

var G__60904 = (i__45376__auto___60903 + (1));
i__45376__auto___60903 = G__60904;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60901))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60901){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60901);
});})(g__50946__auto___60901))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50946__auto___60901){
return (function (seq60850){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60850));
});})(g__50946__auto___60901))
;


var g__50946__auto___60905 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50946__auto___60905){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60906 = arguments.length;
var i__45376__auto___60907 = (0);
while(true){
if((i__45376__auto___60907 < len__45375__auto___60906)){
args__45382__auto__.push((arguments[i__45376__auto___60907]));

var G__60908 = (i__45376__auto___60907 + (1));
i__45376__auto___60907 = G__60908;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60905))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60905){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60905);
});})(g__50946__auto___60905))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50946__auto___60905){
return (function (seq60851){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60851));
});})(g__50946__auto___60905))
;


var g__50946__auto___60909 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50946__auto___60909){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60910 = arguments.length;
var i__45376__auto___60911 = (0);
while(true){
if((i__45376__auto___60911 < len__45375__auto___60910)){
args__45382__auto__.push((arguments[i__45376__auto___60911]));

var G__60912 = (i__45376__auto___60911 + (1));
i__45376__auto___60911 = G__60912;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60909))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60909){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60909);
});})(g__50946__auto___60909))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50946__auto___60909){
return (function (seq60852){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60852));
});})(g__50946__auto___60909))
;


var g__50946__auto___60913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50946__auto___60913){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60914 = arguments.length;
var i__45376__auto___60915 = (0);
while(true){
if((i__45376__auto___60915 < len__45375__auto___60914)){
args__45382__auto__.push((arguments[i__45376__auto___60915]));

var G__60916 = (i__45376__auto___60915 + (1));
i__45376__auto___60915 = G__60916;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60913))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60913){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60913);
});})(g__50946__auto___60913))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50946__auto___60913){
return (function (seq60853){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60853));
});})(g__50946__auto___60913))
;


var g__50946__auto___60917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50946__auto___60917){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60918 = arguments.length;
var i__45376__auto___60919 = (0);
while(true){
if((i__45376__auto___60919 < len__45375__auto___60918)){
args__45382__auto__.push((arguments[i__45376__auto___60919]));

var G__60920 = (i__45376__auto___60919 + (1));
i__45376__auto___60919 = G__60920;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60917))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60917){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60917);
});})(g__50946__auto___60917))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50946__auto___60917){
return (function (seq60854){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60854));
});})(g__50946__auto___60917))
;


var g__50946__auto___60921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50946__auto___60921){
return (function cljs$spec$impl$gen$string(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60922 = arguments.length;
var i__45376__auto___60923 = (0);
while(true){
if((i__45376__auto___60923 < len__45375__auto___60922)){
args__45382__auto__.push((arguments[i__45376__auto___60923]));

var G__60924 = (i__45376__auto___60923 + (1));
i__45376__auto___60923 = G__60924;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60921))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60921){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60921);
});})(g__50946__auto___60921))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50946__auto___60921){
return (function (seq60855){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60855));
});})(g__50946__auto___60921))
;


var g__50946__auto___60925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50946__auto___60925){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60926 = arguments.length;
var i__45376__auto___60927 = (0);
while(true){
if((i__45376__auto___60927 < len__45375__auto___60926)){
args__45382__auto__.push((arguments[i__45376__auto___60927]));

var G__60928 = (i__45376__auto___60927 + (1));
i__45376__auto___60927 = G__60928;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60925))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60925){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60925);
});})(g__50946__auto___60925))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50946__auto___60925){
return (function (seq60856){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60856));
});})(g__50946__auto___60925))
;


var g__50946__auto___60929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50946__auto___60929){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60930 = arguments.length;
var i__45376__auto___60931 = (0);
while(true){
if((i__45376__auto___60931 < len__45375__auto___60930)){
args__45382__auto__.push((arguments[i__45376__auto___60931]));

var G__60932 = (i__45376__auto___60931 + (1));
i__45376__auto___60931 = G__60932;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60929))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60929){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60929);
});})(g__50946__auto___60929))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50946__auto___60929){
return (function (seq60857){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60857));
});})(g__50946__auto___60929))
;


var g__50946__auto___60933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50946__auto___60933){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60934 = arguments.length;
var i__45376__auto___60935 = (0);
while(true){
if((i__45376__auto___60935 < len__45375__auto___60934)){
args__45382__auto__.push((arguments[i__45376__auto___60935]));

var G__60936 = (i__45376__auto___60935 + (1));
i__45376__auto___60935 = G__60936;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60933))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60933){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60933);
});})(g__50946__auto___60933))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50946__auto___60933){
return (function (seq60858){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60858));
});})(g__50946__auto___60933))
;


var g__50946__auto___60937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50946__auto___60937){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60938 = arguments.length;
var i__45376__auto___60939 = (0);
while(true){
if((i__45376__auto___60939 < len__45375__auto___60938)){
args__45382__auto__.push((arguments[i__45376__auto___60939]));

var G__60940 = (i__45376__auto___60939 + (1));
i__45376__auto___60939 = G__60940;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60937))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60937){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60937);
});})(g__50946__auto___60937))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50946__auto___60937){
return (function (seq60859){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60859));
});})(g__50946__auto___60937))
;


var g__50946__auto___60941 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50946__auto___60941){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60942 = arguments.length;
var i__45376__auto___60943 = (0);
while(true){
if((i__45376__auto___60943 < len__45375__auto___60942)){
args__45382__auto__.push((arguments[i__45376__auto___60943]));

var G__60944 = (i__45376__auto___60943 + (1));
i__45376__auto___60943 = G__60944;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});})(g__50946__auto___60941))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50946__auto___60941){
return (function (args){
return cljs.core.deref.call(null,g__50946__auto___60941);
});})(g__50946__auto___60941))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50946__auto___60941){
return (function (seq60860){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60860));
});})(g__50946__auto___60941))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45382__auto__ = [];
var len__45375__auto___60947 = arguments.length;
var i__45376__auto___60948 = (0);
while(true){
if((i__45376__auto___60948 < len__45375__auto___60947)){
args__45382__auto__.push((arguments[i__45376__auto___60948]));

var G__60949 = (i__45376__auto___60948 + (1));
i__45376__auto___60948 = G__60949;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__60945_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__60945_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq60946){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60946));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__60950_SHARP_){
return (new Date(p1__60950_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1476929167329