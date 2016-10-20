// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__44267__auto__ = elem.textContent;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args55977 = [];
var len__45375__auto___55980 = arguments.length;
var i__45376__auto___55981 = (0);
while(true){
if((i__45376__auto___55981 < len__45375__auto___55980)){
args55977.push((arguments[i__45376__auto___55981]));

var G__55982 = (i__45376__auto___55981 + (1));
i__45376__auto___55981 = G__55982;
continue;
} else {
}
break;
}

var G__55979 = args55977.length;
switch (G__55979) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55977.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args55984 = [];
var len__45375__auto___55987 = arguments.length;
var i__45376__auto___55988 = (0);
while(true){
if((i__45376__auto___55988 < len__45375__auto___55987)){
args55984.push((arguments[i__45376__auto___55988]));

var G__55989 = (i__45376__auto___55988 + (1));
i__45376__auto___55988 = G__55989;
continue;
} else {
}
break;
}

var G__55986 = args55984.length;
switch (G__55986) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55984.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args55992 = [];
var len__45375__auto___55995 = arguments.length;
var i__45376__auto___55996 = (0);
while(true){
if((i__45376__auto___55996 < len__45375__auto___55995)){
args55992.push((arguments[i__45376__auto___55996]));

var G__55997 = (i__45376__auto___55996 + (1));
i__45376__auto___55996 = G__55997;
continue;
} else {
}
break;
}

var G__55994 = args55992.length;
switch (G__55994) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55992.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__55991_SHARP_){
return !((p1__55991_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56011 = arguments.length;
var i__45376__auto___56012 = (0);
while(true){
if((i__45376__auto___56012 < len__45375__auto___56011)){
args__45382__auto__.push((arguments[i__45376__auto___56012]));

var G__56013 = (i__45376__auto___56012 + (1));
i__45376__auto___56012 = G__56013;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__56001_56014 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__56002_56015 = null;
var count__56003_56016 = (0);
var i__56004_56017 = (0);
while(true){
if((i__56004_56017 < count__56003_56016)){
var vec__56005_56018 = cljs.core._nth.call(null,chunk__56002_56015,i__56004_56017);
var k_56019 = cljs.core.nth.call(null,vec__56005_56018,(0),null);
var v_56020 = cljs.core.nth.call(null,vec__56005_56018,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_56019),v_56020);

var G__56021 = seq__56001_56014;
var G__56022 = chunk__56002_56015;
var G__56023 = count__56003_56016;
var G__56024 = (i__56004_56017 + (1));
seq__56001_56014 = G__56021;
chunk__56002_56015 = G__56022;
count__56003_56016 = G__56023;
i__56004_56017 = G__56024;
continue;
} else {
var temp__4657__auto___56025 = cljs.core.seq.call(null,seq__56001_56014);
if(temp__4657__auto___56025){
var seq__56001_56026__$1 = temp__4657__auto___56025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56001_56026__$1)){
var c__45081__auto___56027 = cljs.core.chunk_first.call(null,seq__56001_56026__$1);
var G__56028 = cljs.core.chunk_rest.call(null,seq__56001_56026__$1);
var G__56029 = c__45081__auto___56027;
var G__56030 = cljs.core.count.call(null,c__45081__auto___56027);
var G__56031 = (0);
seq__56001_56014 = G__56028;
chunk__56002_56015 = G__56029;
count__56003_56016 = G__56030;
i__56004_56017 = G__56031;
continue;
} else {
var vec__56008_56032 = cljs.core.first.call(null,seq__56001_56026__$1);
var k_56033 = cljs.core.nth.call(null,vec__56008_56032,(0),null);
var v_56034 = cljs.core.nth.call(null,vec__56008_56032,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_56033),v_56034);

var G__56035 = cljs.core.next.call(null,seq__56001_56026__$1);
var G__56036 = null;
var G__56037 = (0);
var G__56038 = (0);
seq__56001_56014 = G__56035;
chunk__56002_56015 = G__56036;
count__56003_56016 = G__56037;
i__56004_56017 = G__56038;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq55999){
var G__56000 = cljs.core.first.call(null,seq55999);
var seq55999__$1 = cljs.core.next.call(null,seq55999);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56000,seq55999__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56045 = arguments.length;
var i__45376__auto___56046 = (0);
while(true){
if((i__45376__auto___56046 < len__45375__auto___56045)){
args__45382__auto__.push((arguments[i__45376__auto___56046]));

var G__56047 = (i__45376__auto___56046 + (1));
i__45376__auto___56046 = G__56047;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__56041_56048 = cljs.core.seq.call(null,keywords);
var chunk__56042_56049 = null;
var count__56043_56050 = (0);
var i__56044_56051 = (0);
while(true){
if((i__56044_56051 < count__56043_56050)){
var kw_56052 = cljs.core._nth.call(null,chunk__56042_56049,i__56044_56051);
style.removeProperty(dommy.utils.as_str.call(null,kw_56052));

var G__56053 = seq__56041_56048;
var G__56054 = chunk__56042_56049;
var G__56055 = count__56043_56050;
var G__56056 = (i__56044_56051 + (1));
seq__56041_56048 = G__56053;
chunk__56042_56049 = G__56054;
count__56043_56050 = G__56055;
i__56044_56051 = G__56056;
continue;
} else {
var temp__4657__auto___56057 = cljs.core.seq.call(null,seq__56041_56048);
if(temp__4657__auto___56057){
var seq__56041_56058__$1 = temp__4657__auto___56057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56041_56058__$1)){
var c__45081__auto___56059 = cljs.core.chunk_first.call(null,seq__56041_56058__$1);
var G__56060 = cljs.core.chunk_rest.call(null,seq__56041_56058__$1);
var G__56061 = c__45081__auto___56059;
var G__56062 = cljs.core.count.call(null,c__45081__auto___56059);
var G__56063 = (0);
seq__56041_56048 = G__56060;
chunk__56042_56049 = G__56061;
count__56043_56050 = G__56062;
i__56044_56051 = G__56063;
continue;
} else {
var kw_56064 = cljs.core.first.call(null,seq__56041_56058__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_56064));

var G__56065 = cljs.core.next.call(null,seq__56041_56058__$1);
var G__56066 = null;
var G__56067 = (0);
var G__56068 = (0);
seq__56041_56048 = G__56065;
chunk__56042_56049 = G__56066;
count__56043_56050 = G__56067;
i__56044_56051 = G__56068;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq56039){
var G__56040 = cljs.core.first.call(null,seq56039);
var seq56039__$1 = cljs.core.next.call(null,seq56039);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56040,seq56039__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56081 = arguments.length;
var i__45376__auto___56082 = (0);
while(true){
if((i__45376__auto___56082 < len__45375__auto___56081)){
args__45382__auto__.push((arguments[i__45376__auto___56082]));

var G__56083 = (i__45376__auto___56082 + (1));
i__45376__auto___56082 = G__56083;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__56071_56084 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__56072_56085 = null;
var count__56073_56086 = (0);
var i__56074_56087 = (0);
while(true){
if((i__56074_56087 < count__56073_56086)){
var vec__56075_56088 = cljs.core._nth.call(null,chunk__56072_56085,i__56074_56087);
var k_56089 = cljs.core.nth.call(null,vec__56075_56088,(0),null);
var v_56090 = cljs.core.nth.call(null,vec__56075_56088,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_56089,[cljs.core.str(v_56090),cljs.core.str("px")].join(''));

var G__56091 = seq__56071_56084;
var G__56092 = chunk__56072_56085;
var G__56093 = count__56073_56086;
var G__56094 = (i__56074_56087 + (1));
seq__56071_56084 = G__56091;
chunk__56072_56085 = G__56092;
count__56073_56086 = G__56093;
i__56074_56087 = G__56094;
continue;
} else {
var temp__4657__auto___56095 = cljs.core.seq.call(null,seq__56071_56084);
if(temp__4657__auto___56095){
var seq__56071_56096__$1 = temp__4657__auto___56095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56071_56096__$1)){
var c__45081__auto___56097 = cljs.core.chunk_first.call(null,seq__56071_56096__$1);
var G__56098 = cljs.core.chunk_rest.call(null,seq__56071_56096__$1);
var G__56099 = c__45081__auto___56097;
var G__56100 = cljs.core.count.call(null,c__45081__auto___56097);
var G__56101 = (0);
seq__56071_56084 = G__56098;
chunk__56072_56085 = G__56099;
count__56073_56086 = G__56100;
i__56074_56087 = G__56101;
continue;
} else {
var vec__56078_56102 = cljs.core.first.call(null,seq__56071_56096__$1);
var k_56103 = cljs.core.nth.call(null,vec__56078_56102,(0),null);
var v_56104 = cljs.core.nth.call(null,vec__56078_56102,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_56103,[cljs.core.str(v_56104),cljs.core.str("px")].join(''));

var G__56105 = cljs.core.next.call(null,seq__56071_56096__$1);
var G__56106 = null;
var G__56107 = (0);
var G__56108 = (0);
seq__56071_56084 = G__56105;
chunk__56072_56085 = G__56106;
count__56073_56086 = G__56107;
i__56074_56087 = G__56108;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq56069){
var G__56070 = cljs.core.first.call(null,seq56069);
var seq56069__$1 = cljs.core.next.call(null,seq56069);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56070,seq56069__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args56109 = [];
var len__45375__auto___56128 = arguments.length;
var i__45376__auto___56129 = (0);
while(true){
if((i__45376__auto___56129 < len__45375__auto___56128)){
args56109.push((arguments[i__45376__auto___56129]));

var G__56130 = (i__45376__auto___56129 + (1));
i__45376__auto___56129 = G__56130;
continue;
} else {
}
break;
}

var G__56115 = args56109.length;
switch (G__56115) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56109.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45394__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__56116 = elem;
(G__56116[k__$1] = v);

return G__56116;
} else {
var G__56117 = elem;
G__56117.setAttribute(k__$1,v);

return G__56117;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__56118_56132 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__56119_56133 = null;
var count__56120_56134 = (0);
var i__56121_56135 = (0);
while(true){
if((i__56121_56135 < count__56120_56134)){
var vec__56122_56136 = cljs.core._nth.call(null,chunk__56119_56133,i__56121_56135);
var k_56137__$1 = cljs.core.nth.call(null,vec__56122_56136,(0),null);
var v_56138__$1 = cljs.core.nth.call(null,vec__56122_56136,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_56137__$1,v_56138__$1);

var G__56139 = seq__56118_56132;
var G__56140 = chunk__56119_56133;
var G__56141 = count__56120_56134;
var G__56142 = (i__56121_56135 + (1));
seq__56118_56132 = G__56139;
chunk__56119_56133 = G__56140;
count__56120_56134 = G__56141;
i__56121_56135 = G__56142;
continue;
} else {
var temp__4657__auto___56143 = cljs.core.seq.call(null,seq__56118_56132);
if(temp__4657__auto___56143){
var seq__56118_56144__$1 = temp__4657__auto___56143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56118_56144__$1)){
var c__45081__auto___56145 = cljs.core.chunk_first.call(null,seq__56118_56144__$1);
var G__56146 = cljs.core.chunk_rest.call(null,seq__56118_56144__$1);
var G__56147 = c__45081__auto___56145;
var G__56148 = cljs.core.count.call(null,c__45081__auto___56145);
var G__56149 = (0);
seq__56118_56132 = G__56146;
chunk__56119_56133 = G__56147;
count__56120_56134 = G__56148;
i__56121_56135 = G__56149;
continue;
} else {
var vec__56125_56150 = cljs.core.first.call(null,seq__56118_56144__$1);
var k_56151__$1 = cljs.core.nth.call(null,vec__56125_56150,(0),null);
var v_56152__$1 = cljs.core.nth.call(null,vec__56125_56150,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_56151__$1,v_56152__$1);

var G__56153 = cljs.core.next.call(null,seq__56118_56144__$1);
var G__56154 = null;
var G__56155 = (0);
var G__56156 = (0);
seq__56118_56132 = G__56153;
chunk__56119_56133 = G__56154;
count__56120_56134 = G__56155;
i__56121_56135 = G__56156;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq56110){
var G__56111 = cljs.core.first.call(null,seq56110);
var seq56110__$1 = cljs.core.next.call(null,seq56110);
var G__56112 = cljs.core.first.call(null,seq56110__$1);
var seq56110__$2 = cljs.core.next.call(null,seq56110__$1);
var G__56113 = cljs.core.first.call(null,seq56110__$2);
var seq56110__$3 = cljs.core.next.call(null,seq56110__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56111,G__56112,G__56113,seq56110__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args56157 = [];
var len__45375__auto___56167 = arguments.length;
var i__45376__auto___56168 = (0);
while(true){
if((i__45376__auto___56168 < len__45375__auto___56167)){
args56157.push((arguments[i__45376__auto___56168]));

var G__56169 = (i__45376__auto___56168 + (1));
i__45376__auto___56168 = G__56169;
continue;
} else {
}
break;
}

var G__56162 = args56157.length;
switch (G__56162) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56157.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_56171__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_56171__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_56171__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__56163_56172 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__56164_56173 = null;
var count__56165_56174 = (0);
var i__56166_56175 = (0);
while(true){
if((i__56166_56175 < count__56165_56174)){
var k_56176__$1 = cljs.core._nth.call(null,chunk__56164_56173,i__56166_56175);
dommy.core.remove_attr_BANG_.call(null,elem,k_56176__$1);

var G__56177 = seq__56163_56172;
var G__56178 = chunk__56164_56173;
var G__56179 = count__56165_56174;
var G__56180 = (i__56166_56175 + (1));
seq__56163_56172 = G__56177;
chunk__56164_56173 = G__56178;
count__56165_56174 = G__56179;
i__56166_56175 = G__56180;
continue;
} else {
var temp__4657__auto___56181 = cljs.core.seq.call(null,seq__56163_56172);
if(temp__4657__auto___56181){
var seq__56163_56182__$1 = temp__4657__auto___56181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56163_56182__$1)){
var c__45081__auto___56183 = cljs.core.chunk_first.call(null,seq__56163_56182__$1);
var G__56184 = cljs.core.chunk_rest.call(null,seq__56163_56182__$1);
var G__56185 = c__45081__auto___56183;
var G__56186 = cljs.core.count.call(null,c__45081__auto___56183);
var G__56187 = (0);
seq__56163_56172 = G__56184;
chunk__56164_56173 = G__56185;
count__56165_56174 = G__56186;
i__56166_56175 = G__56187;
continue;
} else {
var k_56188__$1 = cljs.core.first.call(null,seq__56163_56182__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_56188__$1);

var G__56189 = cljs.core.next.call(null,seq__56163_56182__$1);
var G__56190 = null;
var G__56191 = (0);
var G__56192 = (0);
seq__56163_56172 = G__56189;
chunk__56164_56173 = G__56190;
count__56165_56174 = G__56191;
i__56166_56175 = G__56192;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq56158){
var G__56159 = cljs.core.first.call(null,seq56158);
var seq56158__$1 = cljs.core.next.call(null,seq56158);
var G__56160 = cljs.core.first.call(null,seq56158__$1);
var seq56158__$2 = cljs.core.next.call(null,seq56158__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56159,G__56160,seq56158__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args56193 = [];
var len__45375__auto___56196 = arguments.length;
var i__45376__auto___56197 = (0);
while(true){
if((i__45376__auto___56197 < len__45375__auto___56196)){
args56193.push((arguments[i__45376__auto___56197]));

var G__56198 = (i__45376__auto___56197 + (1));
i__45376__auto___56197 = G__56198;
continue;
} else {
}
break;
}

var G__56195 = args56193.length;
switch (G__56195) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56193.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args56200 = [];
var len__45375__auto___56218 = arguments.length;
var i__45376__auto___56219 = (0);
while(true){
if((i__45376__auto___56219 < len__45375__auto___56218)){
args56200.push((arguments[i__45376__auto___56219]));

var G__56220 = (i__45376__auto___56219 + (1));
i__45376__auto___56219 = G__56220;
continue;
} else {
}
break;
}

var G__56205 = args56200.length;
switch (G__56205) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56200.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___56222 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___56222)){
var class_list_56223 = temp__4655__auto___56222;
var seq__56206_56224 = cljs.core.seq.call(null,classes__$1);
var chunk__56207_56225 = null;
var count__56208_56226 = (0);
var i__56209_56227 = (0);
while(true){
if((i__56209_56227 < count__56208_56226)){
var c_56228 = cljs.core._nth.call(null,chunk__56207_56225,i__56209_56227);
class_list_56223.add(c_56228);

var G__56229 = seq__56206_56224;
var G__56230 = chunk__56207_56225;
var G__56231 = count__56208_56226;
var G__56232 = (i__56209_56227 + (1));
seq__56206_56224 = G__56229;
chunk__56207_56225 = G__56230;
count__56208_56226 = G__56231;
i__56209_56227 = G__56232;
continue;
} else {
var temp__4657__auto___56233 = cljs.core.seq.call(null,seq__56206_56224);
if(temp__4657__auto___56233){
var seq__56206_56234__$1 = temp__4657__auto___56233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56206_56234__$1)){
var c__45081__auto___56235 = cljs.core.chunk_first.call(null,seq__56206_56234__$1);
var G__56236 = cljs.core.chunk_rest.call(null,seq__56206_56234__$1);
var G__56237 = c__45081__auto___56235;
var G__56238 = cljs.core.count.call(null,c__45081__auto___56235);
var G__56239 = (0);
seq__56206_56224 = G__56236;
chunk__56207_56225 = G__56237;
count__56208_56226 = G__56238;
i__56209_56227 = G__56239;
continue;
} else {
var c_56240 = cljs.core.first.call(null,seq__56206_56234__$1);
class_list_56223.add(c_56240);

var G__56241 = cljs.core.next.call(null,seq__56206_56234__$1);
var G__56242 = null;
var G__56243 = (0);
var G__56244 = (0);
seq__56206_56224 = G__56241;
chunk__56207_56225 = G__56242;
count__56208_56226 = G__56243;
i__56209_56227 = G__56244;
continue;
}
} else {
}
}
break;
}
} else {
var seq__56210_56245 = cljs.core.seq.call(null,classes__$1);
var chunk__56211_56246 = null;
var count__56212_56247 = (0);
var i__56213_56248 = (0);
while(true){
if((i__56213_56248 < count__56212_56247)){
var c_56249 = cljs.core._nth.call(null,chunk__56211_56246,i__56213_56248);
var class_name_56250 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_56250,c_56249))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_56250 === ""))?c_56249:[cljs.core.str(class_name_56250),cljs.core.str(" "),cljs.core.str(c_56249)].join('')));
}

var G__56251 = seq__56210_56245;
var G__56252 = chunk__56211_56246;
var G__56253 = count__56212_56247;
var G__56254 = (i__56213_56248 + (1));
seq__56210_56245 = G__56251;
chunk__56211_56246 = G__56252;
count__56212_56247 = G__56253;
i__56213_56248 = G__56254;
continue;
} else {
var temp__4657__auto___56255 = cljs.core.seq.call(null,seq__56210_56245);
if(temp__4657__auto___56255){
var seq__56210_56256__$1 = temp__4657__auto___56255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56210_56256__$1)){
var c__45081__auto___56257 = cljs.core.chunk_first.call(null,seq__56210_56256__$1);
var G__56258 = cljs.core.chunk_rest.call(null,seq__56210_56256__$1);
var G__56259 = c__45081__auto___56257;
var G__56260 = cljs.core.count.call(null,c__45081__auto___56257);
var G__56261 = (0);
seq__56210_56245 = G__56258;
chunk__56211_56246 = G__56259;
count__56212_56247 = G__56260;
i__56213_56248 = G__56261;
continue;
} else {
var c_56262 = cljs.core.first.call(null,seq__56210_56256__$1);
var class_name_56263 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_56263,c_56262))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_56263 === ""))?c_56262:[cljs.core.str(class_name_56263),cljs.core.str(" "),cljs.core.str(c_56262)].join('')));
}

var G__56264 = cljs.core.next.call(null,seq__56210_56256__$1);
var G__56265 = null;
var G__56266 = (0);
var G__56267 = (0);
seq__56210_56245 = G__56264;
chunk__56211_56246 = G__56265;
count__56212_56247 = G__56266;
i__56213_56248 = G__56267;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__56214_56268 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__56215_56269 = null;
var count__56216_56270 = (0);
var i__56217_56271 = (0);
while(true){
if((i__56217_56271 < count__56216_56270)){
var c_56272 = cljs.core._nth.call(null,chunk__56215_56269,i__56217_56271);
dommy.core.add_class_BANG_.call(null,elem,c_56272);

var G__56273 = seq__56214_56268;
var G__56274 = chunk__56215_56269;
var G__56275 = count__56216_56270;
var G__56276 = (i__56217_56271 + (1));
seq__56214_56268 = G__56273;
chunk__56215_56269 = G__56274;
count__56216_56270 = G__56275;
i__56217_56271 = G__56276;
continue;
} else {
var temp__4657__auto___56277 = cljs.core.seq.call(null,seq__56214_56268);
if(temp__4657__auto___56277){
var seq__56214_56278__$1 = temp__4657__auto___56277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56214_56278__$1)){
var c__45081__auto___56279 = cljs.core.chunk_first.call(null,seq__56214_56278__$1);
var G__56280 = cljs.core.chunk_rest.call(null,seq__56214_56278__$1);
var G__56281 = c__45081__auto___56279;
var G__56282 = cljs.core.count.call(null,c__45081__auto___56279);
var G__56283 = (0);
seq__56214_56268 = G__56280;
chunk__56215_56269 = G__56281;
count__56216_56270 = G__56282;
i__56217_56271 = G__56283;
continue;
} else {
var c_56284 = cljs.core.first.call(null,seq__56214_56278__$1);
dommy.core.add_class_BANG_.call(null,elem,c_56284);

var G__56285 = cljs.core.next.call(null,seq__56214_56278__$1);
var G__56286 = null;
var G__56287 = (0);
var G__56288 = (0);
seq__56214_56268 = G__56285;
chunk__56215_56269 = G__56286;
count__56216_56270 = G__56287;
i__56217_56271 = G__56288;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq56201){
var G__56202 = cljs.core.first.call(null,seq56201);
var seq56201__$1 = cljs.core.next.call(null,seq56201);
var G__56203 = cljs.core.first.call(null,seq56201__$1);
var seq56201__$2 = cljs.core.next.call(null,seq56201__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56202,G__56203,seq56201__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args56289 = [];
var len__45375__auto___56299 = arguments.length;
var i__45376__auto___56300 = (0);
while(true){
if((i__45376__auto___56300 < len__45375__auto___56299)){
args56289.push((arguments[i__45376__auto___56300]));

var G__56301 = (i__45376__auto___56300 + (1));
i__45376__auto___56300 = G__56301;
continue;
} else {
}
break;
}

var G__56294 = args56289.length;
switch (G__56294) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56289.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___56303 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___56303)){
var class_list_56304 = temp__4655__auto___56303;
class_list_56304.remove(c__$1);
} else {
var class_name_56305 = dommy.core.class$.call(null,elem);
var new_class_name_56306 = dommy.utils.remove_class_str.call(null,class_name_56305,c__$1);
if((class_name_56305 === new_class_name_56306)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_56306);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__56295 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__56296 = null;
var count__56297 = (0);
var i__56298 = (0);
while(true){
if((i__56298 < count__56297)){
var c = cljs.core._nth.call(null,chunk__56296,i__56298);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__56307 = seq__56295;
var G__56308 = chunk__56296;
var G__56309 = count__56297;
var G__56310 = (i__56298 + (1));
seq__56295 = G__56307;
chunk__56296 = G__56308;
count__56297 = G__56309;
i__56298 = G__56310;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56295);
if(temp__4657__auto__){
var seq__56295__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56295__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__56295__$1);
var G__56311 = cljs.core.chunk_rest.call(null,seq__56295__$1);
var G__56312 = c__45081__auto__;
var G__56313 = cljs.core.count.call(null,c__45081__auto__);
var G__56314 = (0);
seq__56295 = G__56311;
chunk__56296 = G__56312;
count__56297 = G__56313;
i__56298 = G__56314;
continue;
} else {
var c = cljs.core.first.call(null,seq__56295__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__56315 = cljs.core.next.call(null,seq__56295__$1);
var G__56316 = null;
var G__56317 = (0);
var G__56318 = (0);
seq__56295 = G__56315;
chunk__56296 = G__56316;
count__56297 = G__56317;
i__56298 = G__56318;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq56290){
var G__56291 = cljs.core.first.call(null,seq56290);
var seq56290__$1 = cljs.core.next.call(null,seq56290);
var G__56292 = cljs.core.first.call(null,seq56290__$1);
var seq56290__$2 = cljs.core.next.call(null,seq56290__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56291,G__56292,seq56290__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args56319 = [];
var len__45375__auto___56322 = arguments.length;
var i__45376__auto___56323 = (0);
while(true){
if((i__45376__auto___56323 < len__45375__auto___56322)){
args56319.push((arguments[i__45376__auto___56323]));

var G__56324 = (i__45376__auto___56323 + (1));
i__45376__auto___56323 = G__56324;
continue;
} else {
}
break;
}

var G__56321 = args56319.length;
switch (G__56321) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56319.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___56326 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___56326)){
var class_list_56327 = temp__4655__auto___56326;
class_list_56327.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args56328 = [];
var len__45375__auto___56331 = arguments.length;
var i__45376__auto___56332 = (0);
while(true){
if((i__45376__auto___56332 < len__45375__auto___56331)){
args56328.push((arguments[i__45376__auto___56332]));

var G__56333 = (i__45376__auto___56332 + (1));
i__45376__auto___56332 = G__56333;
continue;
} else {
}
break;
}

var G__56330 = args56328.length;
switch (G__56330) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56328.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args56335 = [];
var len__45375__auto___56338 = arguments.length;
var i__45376__auto___56339 = (0);
while(true){
if((i__45376__auto___56339 < len__45375__auto___56338)){
args56335.push((arguments[i__45376__auto___56339]));

var G__56340 = (i__45376__auto___56339 + (1));
i__45376__auto___56339 = G__56340;
continue;
} else {
}
break;
}

var G__56337 = args56335.length;
switch (G__56337) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56335.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args56342 = [];
var len__45375__auto___56353 = arguments.length;
var i__45376__auto___56354 = (0);
while(true){
if((i__45376__auto___56354 < len__45375__auto___56353)){
args56342.push((arguments[i__45376__auto___56354]));

var G__56355 = (i__45376__auto___56354 + (1));
i__45376__auto___56354 = G__56355;
continue;
} else {
}
break;
}

var G__56347 = args56342.length;
switch (G__56347) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56342.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__56348 = parent;
G__56348.appendChild(child);

return G__56348;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__56349_56357 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__56350_56358 = null;
var count__56351_56359 = (0);
var i__56352_56360 = (0);
while(true){
if((i__56352_56360 < count__56351_56359)){
var c_56361 = cljs.core._nth.call(null,chunk__56350_56358,i__56352_56360);
dommy.core.append_BANG_.call(null,parent,c_56361);

var G__56362 = seq__56349_56357;
var G__56363 = chunk__56350_56358;
var G__56364 = count__56351_56359;
var G__56365 = (i__56352_56360 + (1));
seq__56349_56357 = G__56362;
chunk__56350_56358 = G__56363;
count__56351_56359 = G__56364;
i__56352_56360 = G__56365;
continue;
} else {
var temp__4657__auto___56366 = cljs.core.seq.call(null,seq__56349_56357);
if(temp__4657__auto___56366){
var seq__56349_56367__$1 = temp__4657__auto___56366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56349_56367__$1)){
var c__45081__auto___56368 = cljs.core.chunk_first.call(null,seq__56349_56367__$1);
var G__56369 = cljs.core.chunk_rest.call(null,seq__56349_56367__$1);
var G__56370 = c__45081__auto___56368;
var G__56371 = cljs.core.count.call(null,c__45081__auto___56368);
var G__56372 = (0);
seq__56349_56357 = G__56369;
chunk__56350_56358 = G__56370;
count__56351_56359 = G__56371;
i__56352_56360 = G__56372;
continue;
} else {
var c_56373 = cljs.core.first.call(null,seq__56349_56367__$1);
dommy.core.append_BANG_.call(null,parent,c_56373);

var G__56374 = cljs.core.next.call(null,seq__56349_56367__$1);
var G__56375 = null;
var G__56376 = (0);
var G__56377 = (0);
seq__56349_56357 = G__56374;
chunk__56350_56358 = G__56375;
count__56351_56359 = G__56376;
i__56352_56360 = G__56377;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq56343){
var G__56344 = cljs.core.first.call(null,seq56343);
var seq56343__$1 = cljs.core.next.call(null,seq56343);
var G__56345 = cljs.core.first.call(null,seq56343__$1);
var seq56343__$2 = cljs.core.next.call(null,seq56343__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56344,G__56345,seq56343__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args56378 = [];
var len__45375__auto___56389 = arguments.length;
var i__45376__auto___56390 = (0);
while(true){
if((i__45376__auto___56390 < len__45375__auto___56389)){
args56378.push((arguments[i__45376__auto___56390]));

var G__56391 = (i__45376__auto___56390 + (1));
i__45376__auto___56390 = G__56391;
continue;
} else {
}
break;
}

var G__56383 = args56378.length;
switch (G__56383) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args56378.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__56384 = parent;
G__56384.insertBefore(child,parent.firstChild);

return G__56384;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__56385_56393 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__56386_56394 = null;
var count__56387_56395 = (0);
var i__56388_56396 = (0);
while(true){
if((i__56388_56396 < count__56387_56395)){
var c_56397 = cljs.core._nth.call(null,chunk__56386_56394,i__56388_56396);
dommy.core.prepend_BANG_.call(null,parent,c_56397);

var G__56398 = seq__56385_56393;
var G__56399 = chunk__56386_56394;
var G__56400 = count__56387_56395;
var G__56401 = (i__56388_56396 + (1));
seq__56385_56393 = G__56398;
chunk__56386_56394 = G__56399;
count__56387_56395 = G__56400;
i__56388_56396 = G__56401;
continue;
} else {
var temp__4657__auto___56402 = cljs.core.seq.call(null,seq__56385_56393);
if(temp__4657__auto___56402){
var seq__56385_56403__$1 = temp__4657__auto___56402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56385_56403__$1)){
var c__45081__auto___56404 = cljs.core.chunk_first.call(null,seq__56385_56403__$1);
var G__56405 = cljs.core.chunk_rest.call(null,seq__56385_56403__$1);
var G__56406 = c__45081__auto___56404;
var G__56407 = cljs.core.count.call(null,c__45081__auto___56404);
var G__56408 = (0);
seq__56385_56393 = G__56405;
chunk__56386_56394 = G__56406;
count__56387_56395 = G__56407;
i__56388_56396 = G__56408;
continue;
} else {
var c_56409 = cljs.core.first.call(null,seq__56385_56403__$1);
dommy.core.prepend_BANG_.call(null,parent,c_56409);

var G__56410 = cljs.core.next.call(null,seq__56385_56403__$1);
var G__56411 = null;
var G__56412 = (0);
var G__56413 = (0);
seq__56385_56393 = G__56410;
chunk__56386_56394 = G__56411;
count__56387_56395 = G__56412;
i__56388_56396 = G__56413;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq56379){
var G__56380 = cljs.core.first.call(null,seq56379);
var seq56379__$1 = cljs.core.next.call(null,seq56379);
var G__56381 = cljs.core.first.call(null,seq56379__$1);
var seq56379__$2 = cljs.core.next.call(null,seq56379__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56380,G__56381,seq56379__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___56414 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___56414)){
var next_56415 = temp__4655__auto___56414;
dommy.core.insert_before_BANG_.call(null,elem,next_56415);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args56416 = [];
var len__45375__auto___56420 = arguments.length;
var i__45376__auto___56421 = (0);
while(true){
if((i__45376__auto___56421 < len__45375__auto___56420)){
args56416.push((arguments[i__45376__auto___56421]));

var G__56422 = (i__45376__auto___56421 + (1));
i__45376__auto___56421 = G__56422;
continue;
} else {
}
break;
}

var G__56418 = args56416.length;
switch (G__56418) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56416.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__56419 = p;
G__56419.removeChild(elem);

return G__56419;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__56424){
var vec__56425 = p__56424;
var special_mouse_event = cljs.core.nth.call(null,vec__56425,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__56425,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__56425,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__56425,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__44267__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__44255__auto__ = related_target;
if(cljs.core.truth_(and__44255__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__44255__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__56425,special_mouse_event,real_mouse_event))
});})(vec__56425,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__44255__auto__ = selected_target;
if(cljs.core.truth_(and__44255__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__44255__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__44267__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56431 = arguments.length;
var i__45376__auto___56432 = (0);
while(true){
if((i__45376__auto___56432 < len__45375__auto___56431)){
args__45382__auto__.push((arguments[i__45376__auto___56432]));

var G__56433 = (i__45376__auto___56432 + (1));
i__45376__auto___56432 = G__56433;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((2) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45383__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq56428){
var G__56429 = cljs.core.first.call(null,seq56428);
var seq56428__$1 = cljs.core.next.call(null,seq56428);
var G__56430 = cljs.core.first.call(null,seq56428__$1);
var seq56428__$2 = cljs.core.next.call(null,seq56428__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56429,G__56430,seq56428__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56473 = arguments.length;
var i__45376__auto___56474 = (0);
while(true){
if((i__45376__auto___56474 < len__45375__auto___56473)){
args__45382__auto__.push((arguments[i__45376__auto___56474]));

var G__56475 = (i__45376__auto___56474 + (1));
i__45376__auto___56474 = G__56475;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__56436_56476 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_56477 = cljs.core.nth.call(null,vec__56436_56476,(0),null);
var selector_56478 = cljs.core.nth.call(null,vec__56436_56476,(1),null);
var seq__56439_56479 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__56446_56480 = null;
var count__56447_56481 = (0);
var i__56448_56482 = (0);
while(true){
if((i__56448_56482 < count__56447_56481)){
var vec__56455_56483 = cljs.core._nth.call(null,chunk__56446_56480,i__56448_56482);
var orig_type_56484 = cljs.core.nth.call(null,vec__56455_56483,(0),null);
var f_56485 = cljs.core.nth.call(null,vec__56455_56483,(1),null);
var seq__56449_56486 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56484,cljs.core.PersistentArrayMap.fromArray([orig_type_56484,cljs.core.identity], true, false)));
var chunk__56451_56487 = null;
var count__56452_56488 = (0);
var i__56453_56489 = (0);
while(true){
if((i__56453_56489 < count__56452_56488)){
var vec__56458_56490 = cljs.core._nth.call(null,chunk__56451_56487,i__56453_56489);
var actual_type_56491 = cljs.core.nth.call(null,vec__56458_56490,(0),null);
var factory_56492 = cljs.core.nth.call(null,vec__56458_56490,(1),null);
var canonical_f_56493 = (cljs.core.truth_(selector_56478)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56477,selector_56478):cljs.core.identity).call(null,factory_56492.call(null,f_56485));
dommy.core.update_event_listeners_BANG_.call(null,elem_56477,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56478,actual_type_56491,f_56485], null),canonical_f_56493);

if(cljs.core.truth_(elem_56477.addEventListener)){
elem_56477.addEventListener(cljs.core.name.call(null,actual_type_56491),canonical_f_56493);
} else {
elem_56477.attachEvent(cljs.core.name.call(null,actual_type_56491),canonical_f_56493);
}

var G__56494 = seq__56449_56486;
var G__56495 = chunk__56451_56487;
var G__56496 = count__56452_56488;
var G__56497 = (i__56453_56489 + (1));
seq__56449_56486 = G__56494;
chunk__56451_56487 = G__56495;
count__56452_56488 = G__56496;
i__56453_56489 = G__56497;
continue;
} else {
var temp__4657__auto___56498 = cljs.core.seq.call(null,seq__56449_56486);
if(temp__4657__auto___56498){
var seq__56449_56499__$1 = temp__4657__auto___56498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56449_56499__$1)){
var c__45081__auto___56500 = cljs.core.chunk_first.call(null,seq__56449_56499__$1);
var G__56501 = cljs.core.chunk_rest.call(null,seq__56449_56499__$1);
var G__56502 = c__45081__auto___56500;
var G__56503 = cljs.core.count.call(null,c__45081__auto___56500);
var G__56504 = (0);
seq__56449_56486 = G__56501;
chunk__56451_56487 = G__56502;
count__56452_56488 = G__56503;
i__56453_56489 = G__56504;
continue;
} else {
var vec__56461_56505 = cljs.core.first.call(null,seq__56449_56499__$1);
var actual_type_56506 = cljs.core.nth.call(null,vec__56461_56505,(0),null);
var factory_56507 = cljs.core.nth.call(null,vec__56461_56505,(1),null);
var canonical_f_56508 = (cljs.core.truth_(selector_56478)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56477,selector_56478):cljs.core.identity).call(null,factory_56507.call(null,f_56485));
dommy.core.update_event_listeners_BANG_.call(null,elem_56477,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56478,actual_type_56506,f_56485], null),canonical_f_56508);

if(cljs.core.truth_(elem_56477.addEventListener)){
elem_56477.addEventListener(cljs.core.name.call(null,actual_type_56506),canonical_f_56508);
} else {
elem_56477.attachEvent(cljs.core.name.call(null,actual_type_56506),canonical_f_56508);
}

var G__56509 = cljs.core.next.call(null,seq__56449_56499__$1);
var G__56510 = null;
var G__56511 = (0);
var G__56512 = (0);
seq__56449_56486 = G__56509;
chunk__56451_56487 = G__56510;
count__56452_56488 = G__56511;
i__56453_56489 = G__56512;
continue;
}
} else {
}
}
break;
}

var G__56513 = seq__56439_56479;
var G__56514 = chunk__56446_56480;
var G__56515 = count__56447_56481;
var G__56516 = (i__56448_56482 + (1));
seq__56439_56479 = G__56513;
chunk__56446_56480 = G__56514;
count__56447_56481 = G__56515;
i__56448_56482 = G__56516;
continue;
} else {
var temp__4657__auto___56517 = cljs.core.seq.call(null,seq__56439_56479);
if(temp__4657__auto___56517){
var seq__56439_56518__$1 = temp__4657__auto___56517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56439_56518__$1)){
var c__45081__auto___56519 = cljs.core.chunk_first.call(null,seq__56439_56518__$1);
var G__56520 = cljs.core.chunk_rest.call(null,seq__56439_56518__$1);
var G__56521 = c__45081__auto___56519;
var G__56522 = cljs.core.count.call(null,c__45081__auto___56519);
var G__56523 = (0);
seq__56439_56479 = G__56520;
chunk__56446_56480 = G__56521;
count__56447_56481 = G__56522;
i__56448_56482 = G__56523;
continue;
} else {
var vec__56464_56524 = cljs.core.first.call(null,seq__56439_56518__$1);
var orig_type_56525 = cljs.core.nth.call(null,vec__56464_56524,(0),null);
var f_56526 = cljs.core.nth.call(null,vec__56464_56524,(1),null);
var seq__56440_56527 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56525,cljs.core.PersistentArrayMap.fromArray([orig_type_56525,cljs.core.identity], true, false)));
var chunk__56442_56528 = null;
var count__56443_56529 = (0);
var i__56444_56530 = (0);
while(true){
if((i__56444_56530 < count__56443_56529)){
var vec__56467_56531 = cljs.core._nth.call(null,chunk__56442_56528,i__56444_56530);
var actual_type_56532 = cljs.core.nth.call(null,vec__56467_56531,(0),null);
var factory_56533 = cljs.core.nth.call(null,vec__56467_56531,(1),null);
var canonical_f_56534 = (cljs.core.truth_(selector_56478)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56477,selector_56478):cljs.core.identity).call(null,factory_56533.call(null,f_56526));
dommy.core.update_event_listeners_BANG_.call(null,elem_56477,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56478,actual_type_56532,f_56526], null),canonical_f_56534);

if(cljs.core.truth_(elem_56477.addEventListener)){
elem_56477.addEventListener(cljs.core.name.call(null,actual_type_56532),canonical_f_56534);
} else {
elem_56477.attachEvent(cljs.core.name.call(null,actual_type_56532),canonical_f_56534);
}

var G__56535 = seq__56440_56527;
var G__56536 = chunk__56442_56528;
var G__56537 = count__56443_56529;
var G__56538 = (i__56444_56530 + (1));
seq__56440_56527 = G__56535;
chunk__56442_56528 = G__56536;
count__56443_56529 = G__56537;
i__56444_56530 = G__56538;
continue;
} else {
var temp__4657__auto___56539__$1 = cljs.core.seq.call(null,seq__56440_56527);
if(temp__4657__auto___56539__$1){
var seq__56440_56540__$1 = temp__4657__auto___56539__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56440_56540__$1)){
var c__45081__auto___56541 = cljs.core.chunk_first.call(null,seq__56440_56540__$1);
var G__56542 = cljs.core.chunk_rest.call(null,seq__56440_56540__$1);
var G__56543 = c__45081__auto___56541;
var G__56544 = cljs.core.count.call(null,c__45081__auto___56541);
var G__56545 = (0);
seq__56440_56527 = G__56542;
chunk__56442_56528 = G__56543;
count__56443_56529 = G__56544;
i__56444_56530 = G__56545;
continue;
} else {
var vec__56470_56546 = cljs.core.first.call(null,seq__56440_56540__$1);
var actual_type_56547 = cljs.core.nth.call(null,vec__56470_56546,(0),null);
var factory_56548 = cljs.core.nth.call(null,vec__56470_56546,(1),null);
var canonical_f_56549 = (cljs.core.truth_(selector_56478)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56477,selector_56478):cljs.core.identity).call(null,factory_56548.call(null,f_56526));
dommy.core.update_event_listeners_BANG_.call(null,elem_56477,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56478,actual_type_56547,f_56526], null),canonical_f_56549);

if(cljs.core.truth_(elem_56477.addEventListener)){
elem_56477.addEventListener(cljs.core.name.call(null,actual_type_56547),canonical_f_56549);
} else {
elem_56477.attachEvent(cljs.core.name.call(null,actual_type_56547),canonical_f_56549);
}

var G__56550 = cljs.core.next.call(null,seq__56440_56540__$1);
var G__56551 = null;
var G__56552 = (0);
var G__56553 = (0);
seq__56440_56527 = G__56550;
chunk__56442_56528 = G__56551;
count__56443_56529 = G__56552;
i__56444_56530 = G__56553;
continue;
}
} else {
}
}
break;
}

var G__56554 = cljs.core.next.call(null,seq__56439_56518__$1);
var G__56555 = null;
var G__56556 = (0);
var G__56557 = (0);
seq__56439_56479 = G__56554;
chunk__56446_56480 = G__56555;
count__56447_56481 = G__56556;
i__56448_56482 = G__56557;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq56434){
var G__56435 = cljs.core.first.call(null,seq56434);
var seq56434__$1 = cljs.core.next.call(null,seq56434);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56435,seq56434__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56597 = arguments.length;
var i__45376__auto___56598 = (0);
while(true){
if((i__45376__auto___56598 < len__45375__auto___56597)){
args__45382__auto__.push((arguments[i__45376__auto___56598]));

var G__56599 = (i__45376__auto___56598 + (1));
i__45376__auto___56598 = G__56599;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__56560_56600 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_56601 = cljs.core.nth.call(null,vec__56560_56600,(0),null);
var selector_56602 = cljs.core.nth.call(null,vec__56560_56600,(1),null);
var seq__56563_56603 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__56570_56604 = null;
var count__56571_56605 = (0);
var i__56572_56606 = (0);
while(true){
if((i__56572_56606 < count__56571_56605)){
var vec__56579_56607 = cljs.core._nth.call(null,chunk__56570_56604,i__56572_56606);
var orig_type_56608 = cljs.core.nth.call(null,vec__56579_56607,(0),null);
var f_56609 = cljs.core.nth.call(null,vec__56579_56607,(1),null);
var seq__56573_56610 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56608,cljs.core.PersistentArrayMap.fromArray([orig_type_56608,cljs.core.identity], true, false)));
var chunk__56575_56611 = null;
var count__56576_56612 = (0);
var i__56577_56613 = (0);
while(true){
if((i__56577_56613 < count__56576_56612)){
var vec__56582_56614 = cljs.core._nth.call(null,chunk__56575_56611,i__56577_56613);
var actual_type_56615 = cljs.core.nth.call(null,vec__56582_56614,(0),null);
var __56616 = cljs.core.nth.call(null,vec__56582_56614,(1),null);
var keys_56617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56602,actual_type_56615,f_56609], null);
var canonical_f_56618 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56601),keys_56617);
dommy.core.update_event_listeners_BANG_.call(null,elem_56601,dommy.utils.dissoc_in,keys_56617);

if(cljs.core.truth_(elem_56601.removeEventListener)){
elem_56601.removeEventListener(cljs.core.name.call(null,actual_type_56615),canonical_f_56618);
} else {
elem_56601.detachEvent(cljs.core.name.call(null,actual_type_56615),canonical_f_56618);
}

var G__56619 = seq__56573_56610;
var G__56620 = chunk__56575_56611;
var G__56621 = count__56576_56612;
var G__56622 = (i__56577_56613 + (1));
seq__56573_56610 = G__56619;
chunk__56575_56611 = G__56620;
count__56576_56612 = G__56621;
i__56577_56613 = G__56622;
continue;
} else {
var temp__4657__auto___56623 = cljs.core.seq.call(null,seq__56573_56610);
if(temp__4657__auto___56623){
var seq__56573_56624__$1 = temp__4657__auto___56623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56573_56624__$1)){
var c__45081__auto___56625 = cljs.core.chunk_first.call(null,seq__56573_56624__$1);
var G__56626 = cljs.core.chunk_rest.call(null,seq__56573_56624__$1);
var G__56627 = c__45081__auto___56625;
var G__56628 = cljs.core.count.call(null,c__45081__auto___56625);
var G__56629 = (0);
seq__56573_56610 = G__56626;
chunk__56575_56611 = G__56627;
count__56576_56612 = G__56628;
i__56577_56613 = G__56629;
continue;
} else {
var vec__56585_56630 = cljs.core.first.call(null,seq__56573_56624__$1);
var actual_type_56631 = cljs.core.nth.call(null,vec__56585_56630,(0),null);
var __56632 = cljs.core.nth.call(null,vec__56585_56630,(1),null);
var keys_56633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56602,actual_type_56631,f_56609], null);
var canonical_f_56634 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56601),keys_56633);
dommy.core.update_event_listeners_BANG_.call(null,elem_56601,dommy.utils.dissoc_in,keys_56633);

if(cljs.core.truth_(elem_56601.removeEventListener)){
elem_56601.removeEventListener(cljs.core.name.call(null,actual_type_56631),canonical_f_56634);
} else {
elem_56601.detachEvent(cljs.core.name.call(null,actual_type_56631),canonical_f_56634);
}

var G__56635 = cljs.core.next.call(null,seq__56573_56624__$1);
var G__56636 = null;
var G__56637 = (0);
var G__56638 = (0);
seq__56573_56610 = G__56635;
chunk__56575_56611 = G__56636;
count__56576_56612 = G__56637;
i__56577_56613 = G__56638;
continue;
}
} else {
}
}
break;
}

var G__56639 = seq__56563_56603;
var G__56640 = chunk__56570_56604;
var G__56641 = count__56571_56605;
var G__56642 = (i__56572_56606 + (1));
seq__56563_56603 = G__56639;
chunk__56570_56604 = G__56640;
count__56571_56605 = G__56641;
i__56572_56606 = G__56642;
continue;
} else {
var temp__4657__auto___56643 = cljs.core.seq.call(null,seq__56563_56603);
if(temp__4657__auto___56643){
var seq__56563_56644__$1 = temp__4657__auto___56643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56563_56644__$1)){
var c__45081__auto___56645 = cljs.core.chunk_first.call(null,seq__56563_56644__$1);
var G__56646 = cljs.core.chunk_rest.call(null,seq__56563_56644__$1);
var G__56647 = c__45081__auto___56645;
var G__56648 = cljs.core.count.call(null,c__45081__auto___56645);
var G__56649 = (0);
seq__56563_56603 = G__56646;
chunk__56570_56604 = G__56647;
count__56571_56605 = G__56648;
i__56572_56606 = G__56649;
continue;
} else {
var vec__56588_56650 = cljs.core.first.call(null,seq__56563_56644__$1);
var orig_type_56651 = cljs.core.nth.call(null,vec__56588_56650,(0),null);
var f_56652 = cljs.core.nth.call(null,vec__56588_56650,(1),null);
var seq__56564_56653 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56651,cljs.core.PersistentArrayMap.fromArray([orig_type_56651,cljs.core.identity], true, false)));
var chunk__56566_56654 = null;
var count__56567_56655 = (0);
var i__56568_56656 = (0);
while(true){
if((i__56568_56656 < count__56567_56655)){
var vec__56591_56657 = cljs.core._nth.call(null,chunk__56566_56654,i__56568_56656);
var actual_type_56658 = cljs.core.nth.call(null,vec__56591_56657,(0),null);
var __56659 = cljs.core.nth.call(null,vec__56591_56657,(1),null);
var keys_56660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56602,actual_type_56658,f_56652], null);
var canonical_f_56661 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56601),keys_56660);
dommy.core.update_event_listeners_BANG_.call(null,elem_56601,dommy.utils.dissoc_in,keys_56660);

if(cljs.core.truth_(elem_56601.removeEventListener)){
elem_56601.removeEventListener(cljs.core.name.call(null,actual_type_56658),canonical_f_56661);
} else {
elem_56601.detachEvent(cljs.core.name.call(null,actual_type_56658),canonical_f_56661);
}

var G__56662 = seq__56564_56653;
var G__56663 = chunk__56566_56654;
var G__56664 = count__56567_56655;
var G__56665 = (i__56568_56656 + (1));
seq__56564_56653 = G__56662;
chunk__56566_56654 = G__56663;
count__56567_56655 = G__56664;
i__56568_56656 = G__56665;
continue;
} else {
var temp__4657__auto___56666__$1 = cljs.core.seq.call(null,seq__56564_56653);
if(temp__4657__auto___56666__$1){
var seq__56564_56667__$1 = temp__4657__auto___56666__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56564_56667__$1)){
var c__45081__auto___56668 = cljs.core.chunk_first.call(null,seq__56564_56667__$1);
var G__56669 = cljs.core.chunk_rest.call(null,seq__56564_56667__$1);
var G__56670 = c__45081__auto___56668;
var G__56671 = cljs.core.count.call(null,c__45081__auto___56668);
var G__56672 = (0);
seq__56564_56653 = G__56669;
chunk__56566_56654 = G__56670;
count__56567_56655 = G__56671;
i__56568_56656 = G__56672;
continue;
} else {
var vec__56594_56673 = cljs.core.first.call(null,seq__56564_56667__$1);
var actual_type_56674 = cljs.core.nth.call(null,vec__56594_56673,(0),null);
var __56675 = cljs.core.nth.call(null,vec__56594_56673,(1),null);
var keys_56676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56602,actual_type_56674,f_56652], null);
var canonical_f_56677 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56601),keys_56676);
dommy.core.update_event_listeners_BANG_.call(null,elem_56601,dommy.utils.dissoc_in,keys_56676);

if(cljs.core.truth_(elem_56601.removeEventListener)){
elem_56601.removeEventListener(cljs.core.name.call(null,actual_type_56674),canonical_f_56677);
} else {
elem_56601.detachEvent(cljs.core.name.call(null,actual_type_56674),canonical_f_56677);
}

var G__56678 = cljs.core.next.call(null,seq__56564_56667__$1);
var G__56679 = null;
var G__56680 = (0);
var G__56681 = (0);
seq__56564_56653 = G__56678;
chunk__56566_56654 = G__56679;
count__56567_56655 = G__56680;
i__56568_56656 = G__56681;
continue;
}
} else {
}
}
break;
}

var G__56682 = cljs.core.next.call(null,seq__56563_56644__$1);
var G__56683 = null;
var G__56684 = (0);
var G__56685 = (0);
seq__56563_56603 = G__56682;
chunk__56570_56604 = G__56683;
count__56571_56605 = G__56684;
i__56572_56606 = G__56685;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq56558){
var G__56559 = cljs.core.first.call(null,seq56558);
var seq56558__$1 = cljs.core.next.call(null,seq56558);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56559,seq56558__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56701 = arguments.length;
var i__45376__auto___56702 = (0);
while(true){
if((i__45376__auto___56702 < len__45375__auto___56701)){
args__45382__auto__.push((arguments[i__45376__auto___56702]));

var G__56703 = (i__45376__auto___56702 + (1));
i__45376__auto___56702 = G__56703;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__56688_56704 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_56705 = cljs.core.nth.call(null,vec__56688_56704,(0),null);
var selector_56706 = cljs.core.nth.call(null,vec__56688_56704,(1),null);
var seq__56691_56707 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__56692_56708 = null;
var count__56693_56709 = (0);
var i__56694_56710 = (0);
while(true){
if((i__56694_56710 < count__56693_56709)){
var vec__56695_56711 = cljs.core._nth.call(null,chunk__56692_56708,i__56694_56710);
var type_56712 = cljs.core.nth.call(null,vec__56695_56711,(0),null);
var f_56713 = cljs.core.nth.call(null,vec__56695_56711,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_56712,((function (seq__56691_56707,chunk__56692_56708,count__56693_56709,i__56694_56710,vec__56695_56711,type_56712,f_56713,vec__56688_56704,elem_56705,selector_56706){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_56712,dommy$core$this_fn);

return f_56713.call(null,e);
});})(seq__56691_56707,chunk__56692_56708,count__56693_56709,i__56694_56710,vec__56695_56711,type_56712,f_56713,vec__56688_56704,elem_56705,selector_56706))
);

var G__56714 = seq__56691_56707;
var G__56715 = chunk__56692_56708;
var G__56716 = count__56693_56709;
var G__56717 = (i__56694_56710 + (1));
seq__56691_56707 = G__56714;
chunk__56692_56708 = G__56715;
count__56693_56709 = G__56716;
i__56694_56710 = G__56717;
continue;
} else {
var temp__4657__auto___56718 = cljs.core.seq.call(null,seq__56691_56707);
if(temp__4657__auto___56718){
var seq__56691_56719__$1 = temp__4657__auto___56718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56691_56719__$1)){
var c__45081__auto___56720 = cljs.core.chunk_first.call(null,seq__56691_56719__$1);
var G__56721 = cljs.core.chunk_rest.call(null,seq__56691_56719__$1);
var G__56722 = c__45081__auto___56720;
var G__56723 = cljs.core.count.call(null,c__45081__auto___56720);
var G__56724 = (0);
seq__56691_56707 = G__56721;
chunk__56692_56708 = G__56722;
count__56693_56709 = G__56723;
i__56694_56710 = G__56724;
continue;
} else {
var vec__56698_56725 = cljs.core.first.call(null,seq__56691_56719__$1);
var type_56726 = cljs.core.nth.call(null,vec__56698_56725,(0),null);
var f_56727 = cljs.core.nth.call(null,vec__56698_56725,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_56726,((function (seq__56691_56707,chunk__56692_56708,count__56693_56709,i__56694_56710,vec__56698_56725,type_56726,f_56727,seq__56691_56719__$1,temp__4657__auto___56718,vec__56688_56704,elem_56705,selector_56706){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_56726,dommy$core$this_fn);

return f_56727.call(null,e);
});})(seq__56691_56707,chunk__56692_56708,count__56693_56709,i__56694_56710,vec__56698_56725,type_56726,f_56727,seq__56691_56719__$1,temp__4657__auto___56718,vec__56688_56704,elem_56705,selector_56706))
);

var G__56728 = cljs.core.next.call(null,seq__56691_56719__$1);
var G__56729 = null;
var G__56730 = (0);
var G__56731 = (0);
seq__56691_56707 = G__56728;
chunk__56692_56708 = G__56729;
count__56693_56709 = G__56730;
i__56694_56710 = G__56731;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq56686){
var G__56687 = cljs.core.first.call(null,seq56686);
var seq56686__$1 = cljs.core.next.call(null,seq56686);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56687,seq56686__$1);
});


//# sourceMappingURL=core.js.map?rel=1476929161671