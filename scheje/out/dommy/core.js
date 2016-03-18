// Compiled by ClojureScript 1.7.170 {}
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
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__13187__auto__ = elem.textContent;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
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
var args31056 = [];
var len__14245__auto___31059 = arguments.length;
var i__14246__auto___31060 = (0);
while(true){
if((i__14246__auto___31060 < len__14245__auto___31059)){
args31056.push((arguments[i__14246__auto___31060]));

var G__31061 = (i__14246__auto___31060 + (1));
i__14246__auto___31060 = G__31061;
continue;
} else {
}
break;
}

var G__31058 = args31056.length;
switch (G__31058) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31056.length)].join('')));

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
var args31063 = [];
var len__14245__auto___31066 = arguments.length;
var i__14246__auto___31067 = (0);
while(true){
if((i__14246__auto___31067 < len__14245__auto___31066)){
args31063.push((arguments[i__14246__auto___31067]));

var G__31068 = (i__14246__auto___31067 + (1));
i__14246__auto___31067 = G__31068;
continue;
} else {
}
break;
}

var G__31065 = args31063.length;
switch (G__31065) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31063.length)].join('')));

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
var args31071 = [];
var len__14245__auto___31074 = arguments.length;
var i__14246__auto___31075 = (0);
while(true){
if((i__14246__auto___31075 < len__14245__auto___31074)){
args31071.push((arguments[i__14246__auto___31075]));

var G__31076 = (i__14246__auto___31075 + (1));
i__14246__auto___31075 = G__31076;
continue;
} else {
}
break;
}

var G__31073 = args31071.length;
switch (G__31073) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31071.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__31070_SHARP_){
return !((p1__31070_SHARP_ === base));
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
var args__14252__auto__ = [];
var len__14245__auto___31086 = arguments.length;
var i__14246__auto___31087 = (0);
while(true){
if((i__14246__auto___31087 < len__14245__auto___31086)){
args__14252__auto__.push((arguments[i__14246__auto___31087]));

var G__31088 = (i__14246__auto___31087 + (1));
i__14246__auto___31087 = G__31088;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__31080_31089 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__31081_31090 = null;
var count__31082_31091 = (0);
var i__31083_31092 = (0);
while(true){
if((i__31083_31092 < count__31082_31091)){
var vec__31084_31093 = cljs.core._nth.call(null,chunk__31081_31090,i__31083_31092);
var k_31094 = cljs.core.nth.call(null,vec__31084_31093,(0),null);
var v_31095 = cljs.core.nth.call(null,vec__31084_31093,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_31094),v_31095);

var G__31096 = seq__31080_31089;
var G__31097 = chunk__31081_31090;
var G__31098 = count__31082_31091;
var G__31099 = (i__31083_31092 + (1));
seq__31080_31089 = G__31096;
chunk__31081_31090 = G__31097;
count__31082_31091 = G__31098;
i__31083_31092 = G__31099;
continue;
} else {
var temp__4657__auto___31100 = cljs.core.seq.call(null,seq__31080_31089);
if(temp__4657__auto___31100){
var seq__31080_31101__$1 = temp__4657__auto___31100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31080_31101__$1)){
var c__13990__auto___31102 = cljs.core.chunk_first.call(null,seq__31080_31101__$1);
var G__31103 = cljs.core.chunk_rest.call(null,seq__31080_31101__$1);
var G__31104 = c__13990__auto___31102;
var G__31105 = cljs.core.count.call(null,c__13990__auto___31102);
var G__31106 = (0);
seq__31080_31089 = G__31103;
chunk__31081_31090 = G__31104;
count__31082_31091 = G__31105;
i__31083_31092 = G__31106;
continue;
} else {
var vec__31085_31107 = cljs.core.first.call(null,seq__31080_31101__$1);
var k_31108 = cljs.core.nth.call(null,vec__31085_31107,(0),null);
var v_31109 = cljs.core.nth.call(null,vec__31085_31107,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_31108),v_31109);

var G__31110 = cljs.core.next.call(null,seq__31080_31101__$1);
var G__31111 = null;
var G__31112 = (0);
var G__31113 = (0);
seq__31080_31089 = G__31110;
chunk__31081_31090 = G__31111;
count__31082_31091 = G__31112;
i__31083_31092 = G__31113;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq31078){
var G__31079 = cljs.core.first.call(null,seq31078);
var seq31078__$1 = cljs.core.next.call(null,seq31078);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31079,seq31078__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___31120 = arguments.length;
var i__14246__auto___31121 = (0);
while(true){
if((i__14246__auto___31121 < len__14245__auto___31120)){
args__14252__auto__.push((arguments[i__14246__auto___31121]));

var G__31122 = (i__14246__auto___31121 + (1));
i__14246__auto___31121 = G__31122;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__31116_31123 = cljs.core.seq.call(null,keywords);
var chunk__31117_31124 = null;
var count__31118_31125 = (0);
var i__31119_31126 = (0);
while(true){
if((i__31119_31126 < count__31118_31125)){
var kw_31127 = cljs.core._nth.call(null,chunk__31117_31124,i__31119_31126);
style.removeProperty(dommy.utils.as_str.call(null,kw_31127));

var G__31128 = seq__31116_31123;
var G__31129 = chunk__31117_31124;
var G__31130 = count__31118_31125;
var G__31131 = (i__31119_31126 + (1));
seq__31116_31123 = G__31128;
chunk__31117_31124 = G__31129;
count__31118_31125 = G__31130;
i__31119_31126 = G__31131;
continue;
} else {
var temp__4657__auto___31132 = cljs.core.seq.call(null,seq__31116_31123);
if(temp__4657__auto___31132){
var seq__31116_31133__$1 = temp__4657__auto___31132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31116_31133__$1)){
var c__13990__auto___31134 = cljs.core.chunk_first.call(null,seq__31116_31133__$1);
var G__31135 = cljs.core.chunk_rest.call(null,seq__31116_31133__$1);
var G__31136 = c__13990__auto___31134;
var G__31137 = cljs.core.count.call(null,c__13990__auto___31134);
var G__31138 = (0);
seq__31116_31123 = G__31135;
chunk__31117_31124 = G__31136;
count__31118_31125 = G__31137;
i__31119_31126 = G__31138;
continue;
} else {
var kw_31139 = cljs.core.first.call(null,seq__31116_31133__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_31139));

var G__31140 = cljs.core.next.call(null,seq__31116_31133__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__31116_31123 = G__31140;
chunk__31117_31124 = G__31141;
count__31118_31125 = G__31142;
i__31119_31126 = G__31143;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq31114){
var G__31115 = cljs.core.first.call(null,seq31114);
var seq31114__$1 = cljs.core.next.call(null,seq31114);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31115,seq31114__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___31152 = arguments.length;
var i__14246__auto___31153 = (0);
while(true){
if((i__14246__auto___31153 < len__14245__auto___31152)){
args__14252__auto__.push((arguments[i__14246__auto___31153]));

var G__31154 = (i__14246__auto___31153 + (1));
i__14246__auto___31153 = G__31154;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__31146_31155 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__31147_31156 = null;
var count__31148_31157 = (0);
var i__31149_31158 = (0);
while(true){
if((i__31149_31158 < count__31148_31157)){
var vec__31150_31159 = cljs.core._nth.call(null,chunk__31147_31156,i__31149_31158);
var k_31160 = cljs.core.nth.call(null,vec__31150_31159,(0),null);
var v_31161 = cljs.core.nth.call(null,vec__31150_31159,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_31160,[cljs.core.str(v_31161),cljs.core.str("px")].join(''));

var G__31162 = seq__31146_31155;
var G__31163 = chunk__31147_31156;
var G__31164 = count__31148_31157;
var G__31165 = (i__31149_31158 + (1));
seq__31146_31155 = G__31162;
chunk__31147_31156 = G__31163;
count__31148_31157 = G__31164;
i__31149_31158 = G__31165;
continue;
} else {
var temp__4657__auto___31166 = cljs.core.seq.call(null,seq__31146_31155);
if(temp__4657__auto___31166){
var seq__31146_31167__$1 = temp__4657__auto___31166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31146_31167__$1)){
var c__13990__auto___31168 = cljs.core.chunk_first.call(null,seq__31146_31167__$1);
var G__31169 = cljs.core.chunk_rest.call(null,seq__31146_31167__$1);
var G__31170 = c__13990__auto___31168;
var G__31171 = cljs.core.count.call(null,c__13990__auto___31168);
var G__31172 = (0);
seq__31146_31155 = G__31169;
chunk__31147_31156 = G__31170;
count__31148_31157 = G__31171;
i__31149_31158 = G__31172;
continue;
} else {
var vec__31151_31173 = cljs.core.first.call(null,seq__31146_31167__$1);
var k_31174 = cljs.core.nth.call(null,vec__31151_31173,(0),null);
var v_31175 = cljs.core.nth.call(null,vec__31151_31173,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_31174,[cljs.core.str(v_31175),cljs.core.str("px")].join(''));

var G__31176 = cljs.core.next.call(null,seq__31146_31167__$1);
var G__31177 = null;
var G__31178 = (0);
var G__31179 = (0);
seq__31146_31155 = G__31176;
chunk__31147_31156 = G__31177;
count__31148_31157 = G__31178;
i__31149_31158 = G__31179;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq31144){
var G__31145 = cljs.core.first.call(null,seq31144);
var seq31144__$1 = cljs.core.next.call(null,seq31144);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31145,seq31144__$1);
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
var args31180 = [];
var len__14245__auto___31195 = arguments.length;
var i__14246__auto___31196 = (0);
while(true){
if((i__14246__auto___31196 < len__14245__auto___31195)){
args31180.push((arguments[i__14246__auto___31196]));

var G__31197 = (i__14246__auto___31196 + (1));
i__14246__auto___31196 = G__31197;
continue;
} else {
}
break;
}

var G__31186 = args31180.length;
switch (G__31186) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31180.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14264__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__31187 = elem;
(G__31187[k__$1] = v);

return G__31187;
} else {
var G__31188 = elem;
G__31188.setAttribute(k__$1,v);

return G__31188;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__31189_31199 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__31190_31200 = null;
var count__31191_31201 = (0);
var i__31192_31202 = (0);
while(true){
if((i__31192_31202 < count__31191_31201)){
var vec__31193_31203 = cljs.core._nth.call(null,chunk__31190_31200,i__31192_31202);
var k_31204__$1 = cljs.core.nth.call(null,vec__31193_31203,(0),null);
var v_31205__$1 = cljs.core.nth.call(null,vec__31193_31203,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_31204__$1,v_31205__$1);

var G__31206 = seq__31189_31199;
var G__31207 = chunk__31190_31200;
var G__31208 = count__31191_31201;
var G__31209 = (i__31192_31202 + (1));
seq__31189_31199 = G__31206;
chunk__31190_31200 = G__31207;
count__31191_31201 = G__31208;
i__31192_31202 = G__31209;
continue;
} else {
var temp__4657__auto___31210 = cljs.core.seq.call(null,seq__31189_31199);
if(temp__4657__auto___31210){
var seq__31189_31211__$1 = temp__4657__auto___31210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31189_31211__$1)){
var c__13990__auto___31212 = cljs.core.chunk_first.call(null,seq__31189_31211__$1);
var G__31213 = cljs.core.chunk_rest.call(null,seq__31189_31211__$1);
var G__31214 = c__13990__auto___31212;
var G__31215 = cljs.core.count.call(null,c__13990__auto___31212);
var G__31216 = (0);
seq__31189_31199 = G__31213;
chunk__31190_31200 = G__31214;
count__31191_31201 = G__31215;
i__31192_31202 = G__31216;
continue;
} else {
var vec__31194_31217 = cljs.core.first.call(null,seq__31189_31211__$1);
var k_31218__$1 = cljs.core.nth.call(null,vec__31194_31217,(0),null);
var v_31219__$1 = cljs.core.nth.call(null,vec__31194_31217,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_31218__$1,v_31219__$1);

var G__31220 = cljs.core.next.call(null,seq__31189_31211__$1);
var G__31221 = null;
var G__31222 = (0);
var G__31223 = (0);
seq__31189_31199 = G__31220;
chunk__31190_31200 = G__31221;
count__31191_31201 = G__31222;
i__31192_31202 = G__31223;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq31181){
var G__31182 = cljs.core.first.call(null,seq31181);
var seq31181__$1 = cljs.core.next.call(null,seq31181);
var G__31183 = cljs.core.first.call(null,seq31181__$1);
var seq31181__$2 = cljs.core.next.call(null,seq31181__$1);
var G__31184 = cljs.core.first.call(null,seq31181__$2);
var seq31181__$3 = cljs.core.next.call(null,seq31181__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31182,G__31183,G__31184,seq31181__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args31224 = [];
var len__14245__auto___31234 = arguments.length;
var i__14246__auto___31235 = (0);
while(true){
if((i__14246__auto___31235 < len__14245__auto___31234)){
args31224.push((arguments[i__14246__auto___31235]));

var G__31236 = (i__14246__auto___31235 + (1));
i__14246__auto___31235 = G__31236;
continue;
} else {
}
break;
}

var G__31229 = args31224.length;
switch (G__31229) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31224.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_31238__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_31238__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_31238__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__31230_31239 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__31231_31240 = null;
var count__31232_31241 = (0);
var i__31233_31242 = (0);
while(true){
if((i__31233_31242 < count__31232_31241)){
var k_31243__$1 = cljs.core._nth.call(null,chunk__31231_31240,i__31233_31242);
dommy.core.remove_attr_BANG_.call(null,elem,k_31243__$1);

var G__31244 = seq__31230_31239;
var G__31245 = chunk__31231_31240;
var G__31246 = count__31232_31241;
var G__31247 = (i__31233_31242 + (1));
seq__31230_31239 = G__31244;
chunk__31231_31240 = G__31245;
count__31232_31241 = G__31246;
i__31233_31242 = G__31247;
continue;
} else {
var temp__4657__auto___31248 = cljs.core.seq.call(null,seq__31230_31239);
if(temp__4657__auto___31248){
var seq__31230_31249__$1 = temp__4657__auto___31248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31230_31249__$1)){
var c__13990__auto___31250 = cljs.core.chunk_first.call(null,seq__31230_31249__$1);
var G__31251 = cljs.core.chunk_rest.call(null,seq__31230_31249__$1);
var G__31252 = c__13990__auto___31250;
var G__31253 = cljs.core.count.call(null,c__13990__auto___31250);
var G__31254 = (0);
seq__31230_31239 = G__31251;
chunk__31231_31240 = G__31252;
count__31232_31241 = G__31253;
i__31233_31242 = G__31254;
continue;
} else {
var k_31255__$1 = cljs.core.first.call(null,seq__31230_31249__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_31255__$1);

var G__31256 = cljs.core.next.call(null,seq__31230_31249__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__31230_31239 = G__31256;
chunk__31231_31240 = G__31257;
count__31232_31241 = G__31258;
i__31233_31242 = G__31259;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq31225){
var G__31226 = cljs.core.first.call(null,seq31225);
var seq31225__$1 = cljs.core.next.call(null,seq31225);
var G__31227 = cljs.core.first.call(null,seq31225__$1);
var seq31225__$2 = cljs.core.next.call(null,seq31225__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31226,G__31227,seq31225__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args31260 = [];
var len__14245__auto___31263 = arguments.length;
var i__14246__auto___31264 = (0);
while(true){
if((i__14246__auto___31264 < len__14245__auto___31263)){
args31260.push((arguments[i__14246__auto___31264]));

var G__31265 = (i__14246__auto___31264 + (1));
i__14246__auto___31264 = G__31265;
continue;
} else {
}
break;
}

var G__31262 = args31260.length;
switch (G__31262) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31260.length)].join('')));

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
var args31267 = [];
var len__14245__auto___31285 = arguments.length;
var i__14246__auto___31286 = (0);
while(true){
if((i__14246__auto___31286 < len__14245__auto___31285)){
args31267.push((arguments[i__14246__auto___31286]));

var G__31287 = (i__14246__auto___31286 + (1));
i__14246__auto___31286 = G__31287;
continue;
} else {
}
break;
}

var G__31272 = args31267.length;
switch (G__31272) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31267.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___31289 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___31289)){
var class_list_31290 = temp__4655__auto___31289;
var seq__31273_31291 = cljs.core.seq.call(null,classes__$1);
var chunk__31274_31292 = null;
var count__31275_31293 = (0);
var i__31276_31294 = (0);
while(true){
if((i__31276_31294 < count__31275_31293)){
var c_31295 = cljs.core._nth.call(null,chunk__31274_31292,i__31276_31294);
class_list_31290.add(c_31295);

var G__31296 = seq__31273_31291;
var G__31297 = chunk__31274_31292;
var G__31298 = count__31275_31293;
var G__31299 = (i__31276_31294 + (1));
seq__31273_31291 = G__31296;
chunk__31274_31292 = G__31297;
count__31275_31293 = G__31298;
i__31276_31294 = G__31299;
continue;
} else {
var temp__4657__auto___31300 = cljs.core.seq.call(null,seq__31273_31291);
if(temp__4657__auto___31300){
var seq__31273_31301__$1 = temp__4657__auto___31300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31273_31301__$1)){
var c__13990__auto___31302 = cljs.core.chunk_first.call(null,seq__31273_31301__$1);
var G__31303 = cljs.core.chunk_rest.call(null,seq__31273_31301__$1);
var G__31304 = c__13990__auto___31302;
var G__31305 = cljs.core.count.call(null,c__13990__auto___31302);
var G__31306 = (0);
seq__31273_31291 = G__31303;
chunk__31274_31292 = G__31304;
count__31275_31293 = G__31305;
i__31276_31294 = G__31306;
continue;
} else {
var c_31307 = cljs.core.first.call(null,seq__31273_31301__$1);
class_list_31290.add(c_31307);

var G__31308 = cljs.core.next.call(null,seq__31273_31301__$1);
var G__31309 = null;
var G__31310 = (0);
var G__31311 = (0);
seq__31273_31291 = G__31308;
chunk__31274_31292 = G__31309;
count__31275_31293 = G__31310;
i__31276_31294 = G__31311;
continue;
}
} else {
}
}
break;
}
} else {
var seq__31277_31312 = cljs.core.seq.call(null,classes__$1);
var chunk__31278_31313 = null;
var count__31279_31314 = (0);
var i__31280_31315 = (0);
while(true){
if((i__31280_31315 < count__31279_31314)){
var c_31316 = cljs.core._nth.call(null,chunk__31278_31313,i__31280_31315);
var class_name_31317 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_31317,c_31316))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_31317 === ""))?c_31316:[cljs.core.str(class_name_31317),cljs.core.str(" "),cljs.core.str(c_31316)].join('')));
}

var G__31318 = seq__31277_31312;
var G__31319 = chunk__31278_31313;
var G__31320 = count__31279_31314;
var G__31321 = (i__31280_31315 + (1));
seq__31277_31312 = G__31318;
chunk__31278_31313 = G__31319;
count__31279_31314 = G__31320;
i__31280_31315 = G__31321;
continue;
} else {
var temp__4657__auto___31322 = cljs.core.seq.call(null,seq__31277_31312);
if(temp__4657__auto___31322){
var seq__31277_31323__$1 = temp__4657__auto___31322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31277_31323__$1)){
var c__13990__auto___31324 = cljs.core.chunk_first.call(null,seq__31277_31323__$1);
var G__31325 = cljs.core.chunk_rest.call(null,seq__31277_31323__$1);
var G__31326 = c__13990__auto___31324;
var G__31327 = cljs.core.count.call(null,c__13990__auto___31324);
var G__31328 = (0);
seq__31277_31312 = G__31325;
chunk__31278_31313 = G__31326;
count__31279_31314 = G__31327;
i__31280_31315 = G__31328;
continue;
} else {
var c_31329 = cljs.core.first.call(null,seq__31277_31323__$1);
var class_name_31330 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_31330,c_31329))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_31330 === ""))?c_31329:[cljs.core.str(class_name_31330),cljs.core.str(" "),cljs.core.str(c_31329)].join('')));
}

var G__31331 = cljs.core.next.call(null,seq__31277_31323__$1);
var G__31332 = null;
var G__31333 = (0);
var G__31334 = (0);
seq__31277_31312 = G__31331;
chunk__31278_31313 = G__31332;
count__31279_31314 = G__31333;
i__31280_31315 = G__31334;
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
var seq__31281_31335 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__31282_31336 = null;
var count__31283_31337 = (0);
var i__31284_31338 = (0);
while(true){
if((i__31284_31338 < count__31283_31337)){
var c_31339 = cljs.core._nth.call(null,chunk__31282_31336,i__31284_31338);
dommy.core.add_class_BANG_.call(null,elem,c_31339);

var G__31340 = seq__31281_31335;
var G__31341 = chunk__31282_31336;
var G__31342 = count__31283_31337;
var G__31343 = (i__31284_31338 + (1));
seq__31281_31335 = G__31340;
chunk__31282_31336 = G__31341;
count__31283_31337 = G__31342;
i__31284_31338 = G__31343;
continue;
} else {
var temp__4657__auto___31344 = cljs.core.seq.call(null,seq__31281_31335);
if(temp__4657__auto___31344){
var seq__31281_31345__$1 = temp__4657__auto___31344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31281_31345__$1)){
var c__13990__auto___31346 = cljs.core.chunk_first.call(null,seq__31281_31345__$1);
var G__31347 = cljs.core.chunk_rest.call(null,seq__31281_31345__$1);
var G__31348 = c__13990__auto___31346;
var G__31349 = cljs.core.count.call(null,c__13990__auto___31346);
var G__31350 = (0);
seq__31281_31335 = G__31347;
chunk__31282_31336 = G__31348;
count__31283_31337 = G__31349;
i__31284_31338 = G__31350;
continue;
} else {
var c_31351 = cljs.core.first.call(null,seq__31281_31345__$1);
dommy.core.add_class_BANG_.call(null,elem,c_31351);

var G__31352 = cljs.core.next.call(null,seq__31281_31345__$1);
var G__31353 = null;
var G__31354 = (0);
var G__31355 = (0);
seq__31281_31335 = G__31352;
chunk__31282_31336 = G__31353;
count__31283_31337 = G__31354;
i__31284_31338 = G__31355;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq31268){
var G__31269 = cljs.core.first.call(null,seq31268);
var seq31268__$1 = cljs.core.next.call(null,seq31268);
var G__31270 = cljs.core.first.call(null,seq31268__$1);
var seq31268__$2 = cljs.core.next.call(null,seq31268__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31269,G__31270,seq31268__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args31356 = [];
var len__14245__auto___31366 = arguments.length;
var i__14246__auto___31367 = (0);
while(true){
if((i__14246__auto___31367 < len__14245__auto___31366)){
args31356.push((arguments[i__14246__auto___31367]));

var G__31368 = (i__14246__auto___31367 + (1));
i__14246__auto___31367 = G__31368;
continue;
} else {
}
break;
}

var G__31361 = args31356.length;
switch (G__31361) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31356.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___31370 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___31370)){
var class_list_31371 = temp__4655__auto___31370;
class_list_31371.remove(c__$1);
} else {
var class_name_31372 = dommy.core.class$.call(null,elem);
var new_class_name_31373 = dommy.utils.remove_class_str.call(null,class_name_31372,c__$1);
if((class_name_31372 === new_class_name_31373)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_31373);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__31362 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__31363 = null;
var count__31364 = (0);
var i__31365 = (0);
while(true){
if((i__31365 < count__31364)){
var c = cljs.core._nth.call(null,chunk__31363,i__31365);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__31374 = seq__31362;
var G__31375 = chunk__31363;
var G__31376 = count__31364;
var G__31377 = (i__31365 + (1));
seq__31362 = G__31374;
chunk__31363 = G__31375;
count__31364 = G__31376;
i__31365 = G__31377;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31362);
if(temp__4657__auto__){
var seq__31362__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31362__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__31362__$1);
var G__31378 = cljs.core.chunk_rest.call(null,seq__31362__$1);
var G__31379 = c__13990__auto__;
var G__31380 = cljs.core.count.call(null,c__13990__auto__);
var G__31381 = (0);
seq__31362 = G__31378;
chunk__31363 = G__31379;
count__31364 = G__31380;
i__31365 = G__31381;
continue;
} else {
var c = cljs.core.first.call(null,seq__31362__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__31382 = cljs.core.next.call(null,seq__31362__$1);
var G__31383 = null;
var G__31384 = (0);
var G__31385 = (0);
seq__31362 = G__31382;
chunk__31363 = G__31383;
count__31364 = G__31384;
i__31365 = G__31385;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq31357){
var G__31358 = cljs.core.first.call(null,seq31357);
var seq31357__$1 = cljs.core.next.call(null,seq31357);
var G__31359 = cljs.core.first.call(null,seq31357__$1);
var seq31357__$2 = cljs.core.next.call(null,seq31357__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31358,G__31359,seq31357__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args31386 = [];
var len__14245__auto___31389 = arguments.length;
var i__14246__auto___31390 = (0);
while(true){
if((i__14246__auto___31390 < len__14245__auto___31389)){
args31386.push((arguments[i__14246__auto___31390]));

var G__31391 = (i__14246__auto___31390 + (1));
i__14246__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var G__31388 = args31386.length;
switch (G__31388) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31386.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___31393 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___31393)){
var class_list_31394 = temp__4655__auto___31393;
class_list_31394.toggle(c__$1);
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
var args31395 = [];
var len__14245__auto___31398 = arguments.length;
var i__14246__auto___31399 = (0);
while(true){
if((i__14246__auto___31399 < len__14245__auto___31398)){
args31395.push((arguments[i__14246__auto___31399]));

var G__31400 = (i__14246__auto___31399 + (1));
i__14246__auto___31399 = G__31400;
continue;
} else {
}
break;
}

var G__31397 = args31395.length;
switch (G__31397) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31395.length)].join('')));

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
var args31402 = [];
var len__14245__auto___31405 = arguments.length;
var i__14246__auto___31406 = (0);
while(true){
if((i__14246__auto___31406 < len__14245__auto___31405)){
args31402.push((arguments[i__14246__auto___31406]));

var G__31407 = (i__14246__auto___31406 + (1));
i__14246__auto___31406 = G__31407;
continue;
} else {
}
break;
}

var G__31404 = args31402.length;
switch (G__31404) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31402.length)].join('')));

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
var args31409 = [];
var len__14245__auto___31420 = arguments.length;
var i__14246__auto___31421 = (0);
while(true){
if((i__14246__auto___31421 < len__14245__auto___31420)){
args31409.push((arguments[i__14246__auto___31421]));

var G__31422 = (i__14246__auto___31421 + (1));
i__14246__auto___31421 = G__31422;
continue;
} else {
}
break;
}

var G__31414 = args31409.length;
switch (G__31414) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31409.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__31415 = parent;
G__31415.appendChild(child);

return G__31415;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__31416_31424 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__31417_31425 = null;
var count__31418_31426 = (0);
var i__31419_31427 = (0);
while(true){
if((i__31419_31427 < count__31418_31426)){
var c_31428 = cljs.core._nth.call(null,chunk__31417_31425,i__31419_31427);
dommy.core.append_BANG_.call(null,parent,c_31428);

var G__31429 = seq__31416_31424;
var G__31430 = chunk__31417_31425;
var G__31431 = count__31418_31426;
var G__31432 = (i__31419_31427 + (1));
seq__31416_31424 = G__31429;
chunk__31417_31425 = G__31430;
count__31418_31426 = G__31431;
i__31419_31427 = G__31432;
continue;
} else {
var temp__4657__auto___31433 = cljs.core.seq.call(null,seq__31416_31424);
if(temp__4657__auto___31433){
var seq__31416_31434__$1 = temp__4657__auto___31433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31416_31434__$1)){
var c__13990__auto___31435 = cljs.core.chunk_first.call(null,seq__31416_31434__$1);
var G__31436 = cljs.core.chunk_rest.call(null,seq__31416_31434__$1);
var G__31437 = c__13990__auto___31435;
var G__31438 = cljs.core.count.call(null,c__13990__auto___31435);
var G__31439 = (0);
seq__31416_31424 = G__31436;
chunk__31417_31425 = G__31437;
count__31418_31426 = G__31438;
i__31419_31427 = G__31439;
continue;
} else {
var c_31440 = cljs.core.first.call(null,seq__31416_31434__$1);
dommy.core.append_BANG_.call(null,parent,c_31440);

var G__31441 = cljs.core.next.call(null,seq__31416_31434__$1);
var G__31442 = null;
var G__31443 = (0);
var G__31444 = (0);
seq__31416_31424 = G__31441;
chunk__31417_31425 = G__31442;
count__31418_31426 = G__31443;
i__31419_31427 = G__31444;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq31410){
var G__31411 = cljs.core.first.call(null,seq31410);
var seq31410__$1 = cljs.core.next.call(null,seq31410);
var G__31412 = cljs.core.first.call(null,seq31410__$1);
var seq31410__$2 = cljs.core.next.call(null,seq31410__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31411,G__31412,seq31410__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args31445 = [];
var len__14245__auto___31456 = arguments.length;
var i__14246__auto___31457 = (0);
while(true){
if((i__14246__auto___31457 < len__14245__auto___31456)){
args31445.push((arguments[i__14246__auto___31457]));

var G__31458 = (i__14246__auto___31457 + (1));
i__14246__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__31450 = args31445.length;
switch (G__31450) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args31445.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__31451 = parent;
G__31451.insertBefore(child,parent.firstChild);

return G__31451;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__31452_31460 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__31453_31461 = null;
var count__31454_31462 = (0);
var i__31455_31463 = (0);
while(true){
if((i__31455_31463 < count__31454_31462)){
var c_31464 = cljs.core._nth.call(null,chunk__31453_31461,i__31455_31463);
dommy.core.prepend_BANG_.call(null,parent,c_31464);

var G__31465 = seq__31452_31460;
var G__31466 = chunk__31453_31461;
var G__31467 = count__31454_31462;
var G__31468 = (i__31455_31463 + (1));
seq__31452_31460 = G__31465;
chunk__31453_31461 = G__31466;
count__31454_31462 = G__31467;
i__31455_31463 = G__31468;
continue;
} else {
var temp__4657__auto___31469 = cljs.core.seq.call(null,seq__31452_31460);
if(temp__4657__auto___31469){
var seq__31452_31470__$1 = temp__4657__auto___31469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31452_31470__$1)){
var c__13990__auto___31471 = cljs.core.chunk_first.call(null,seq__31452_31470__$1);
var G__31472 = cljs.core.chunk_rest.call(null,seq__31452_31470__$1);
var G__31473 = c__13990__auto___31471;
var G__31474 = cljs.core.count.call(null,c__13990__auto___31471);
var G__31475 = (0);
seq__31452_31460 = G__31472;
chunk__31453_31461 = G__31473;
count__31454_31462 = G__31474;
i__31455_31463 = G__31475;
continue;
} else {
var c_31476 = cljs.core.first.call(null,seq__31452_31470__$1);
dommy.core.prepend_BANG_.call(null,parent,c_31476);

var G__31477 = cljs.core.next.call(null,seq__31452_31470__$1);
var G__31478 = null;
var G__31479 = (0);
var G__31480 = (0);
seq__31452_31460 = G__31477;
chunk__31453_31461 = G__31478;
count__31454_31462 = G__31479;
i__31455_31463 = G__31480;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq31446){
var G__31447 = cljs.core.first.call(null,seq31446);
var seq31446__$1 = cljs.core.next.call(null,seq31446);
var G__31448 = cljs.core.first.call(null,seq31446__$1);
var seq31446__$2 = cljs.core.next.call(null,seq31446__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31447,G__31448,seq31446__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___31481 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___31481)){
var next_31482 = temp__4655__auto___31481;
dommy.core.insert_before_BANG_.call(null,elem,next_31482);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
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
var args31483 = [];
var len__14245__auto___31487 = arguments.length;
var i__14246__auto___31488 = (0);
while(true){
if((i__14246__auto___31488 < len__14245__auto___31487)){
args31483.push((arguments[i__14246__auto___31488]));

var G__31489 = (i__14246__auto___31488 + (1));
i__14246__auto___31488 = G__31489;
continue;
} else {
}
break;
}

var G__31485 = args31483.length;
switch (G__31485) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31483.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__31486 = p;
G__31486.removeChild(elem);

return G__31486;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__31491){
var vec__31492 = p__31491;
var special_mouse_event = cljs.core.nth.call(null,vec__31492,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__31492,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__31492,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__31492,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__13187__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__13175__auto__ = related_target;
if(cljs.core.truth_(and__13175__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__13175__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__31492,special_mouse_event,real_mouse_event))
});})(vec__31492,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__13175__auto__ = selected_target;
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__13175__auto__;
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
var or__13187__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___31496 = arguments.length;
var i__14246__auto___31497 = (0);
while(true){
if((i__14246__auto___31497 < len__14245__auto___31496)){
args__14252__auto__.push((arguments[i__14246__auto___31497]));

var G__31498 = (i__14246__auto___31497 + (1));
i__14246__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((2) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14253__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq31493){
var G__31494 = cljs.core.first.call(null,seq31493);
var seq31493__$1 = cljs.core.next.call(null,seq31493);
var G__31495 = cljs.core.first.call(null,seq31493__$1);
var seq31493__$2 = cljs.core.next.call(null,seq31493__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31494,G__31495,seq31493__$2);
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
var args__14252__auto__ = [];
var len__14245__auto___31524 = arguments.length;
var i__14246__auto___31525 = (0);
while(true){
if((i__14246__auto___31525 < len__14245__auto___31524)){
args__14252__auto__.push((arguments[i__14246__auto___31525]));

var G__31526 = (i__14246__auto___31525 + (1));
i__14246__auto___31525 = G__31526;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31501_31527 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31528 = cljs.core.nth.call(null,vec__31501_31527,(0),null);
var selector_31529 = cljs.core.nth.call(null,vec__31501_31527,(1),null);
var seq__31502_31530 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31509_31531 = null;
var count__31510_31532 = (0);
var i__31511_31533 = (0);
while(true){
if((i__31511_31533 < count__31510_31532)){
var vec__31518_31534 = cljs.core._nth.call(null,chunk__31509_31531,i__31511_31533);
var orig_type_31535 = cljs.core.nth.call(null,vec__31518_31534,(0),null);
var f_31536 = cljs.core.nth.call(null,vec__31518_31534,(1),null);
var seq__31512_31537 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31535,cljs.core.PersistentArrayMap.fromArray([orig_type_31535,cljs.core.identity], true, false)));
var chunk__31514_31538 = null;
var count__31515_31539 = (0);
var i__31516_31540 = (0);
while(true){
if((i__31516_31540 < count__31515_31539)){
var vec__31519_31541 = cljs.core._nth.call(null,chunk__31514_31538,i__31516_31540);
var actual_type_31542 = cljs.core.nth.call(null,vec__31519_31541,(0),null);
var factory_31543 = cljs.core.nth.call(null,vec__31519_31541,(1),null);
var canonical_f_31544 = (cljs.core.truth_(selector_31529)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31528,selector_31529):cljs.core.identity).call(null,factory_31543.call(null,f_31536));
dommy.core.update_event_listeners_BANG_.call(null,elem_31528,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31529,actual_type_31542,f_31536], null),canonical_f_31544);

if(cljs.core.truth_(elem_31528.addEventListener)){
elem_31528.addEventListener(cljs.core.name.call(null,actual_type_31542),canonical_f_31544);
} else {
elem_31528.attachEvent(cljs.core.name.call(null,actual_type_31542),canonical_f_31544);
}

var G__31545 = seq__31512_31537;
var G__31546 = chunk__31514_31538;
var G__31547 = count__31515_31539;
var G__31548 = (i__31516_31540 + (1));
seq__31512_31537 = G__31545;
chunk__31514_31538 = G__31546;
count__31515_31539 = G__31547;
i__31516_31540 = G__31548;
continue;
} else {
var temp__4657__auto___31549 = cljs.core.seq.call(null,seq__31512_31537);
if(temp__4657__auto___31549){
var seq__31512_31550__$1 = temp__4657__auto___31549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31512_31550__$1)){
var c__13990__auto___31551 = cljs.core.chunk_first.call(null,seq__31512_31550__$1);
var G__31552 = cljs.core.chunk_rest.call(null,seq__31512_31550__$1);
var G__31553 = c__13990__auto___31551;
var G__31554 = cljs.core.count.call(null,c__13990__auto___31551);
var G__31555 = (0);
seq__31512_31537 = G__31552;
chunk__31514_31538 = G__31553;
count__31515_31539 = G__31554;
i__31516_31540 = G__31555;
continue;
} else {
var vec__31520_31556 = cljs.core.first.call(null,seq__31512_31550__$1);
var actual_type_31557 = cljs.core.nth.call(null,vec__31520_31556,(0),null);
var factory_31558 = cljs.core.nth.call(null,vec__31520_31556,(1),null);
var canonical_f_31559 = (cljs.core.truth_(selector_31529)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31528,selector_31529):cljs.core.identity).call(null,factory_31558.call(null,f_31536));
dommy.core.update_event_listeners_BANG_.call(null,elem_31528,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31529,actual_type_31557,f_31536], null),canonical_f_31559);

if(cljs.core.truth_(elem_31528.addEventListener)){
elem_31528.addEventListener(cljs.core.name.call(null,actual_type_31557),canonical_f_31559);
} else {
elem_31528.attachEvent(cljs.core.name.call(null,actual_type_31557),canonical_f_31559);
}

var G__31560 = cljs.core.next.call(null,seq__31512_31550__$1);
var G__31561 = null;
var G__31562 = (0);
var G__31563 = (0);
seq__31512_31537 = G__31560;
chunk__31514_31538 = G__31561;
count__31515_31539 = G__31562;
i__31516_31540 = G__31563;
continue;
}
} else {
}
}
break;
}

var G__31564 = seq__31502_31530;
var G__31565 = chunk__31509_31531;
var G__31566 = count__31510_31532;
var G__31567 = (i__31511_31533 + (1));
seq__31502_31530 = G__31564;
chunk__31509_31531 = G__31565;
count__31510_31532 = G__31566;
i__31511_31533 = G__31567;
continue;
} else {
var temp__4657__auto___31568 = cljs.core.seq.call(null,seq__31502_31530);
if(temp__4657__auto___31568){
var seq__31502_31569__$1 = temp__4657__auto___31568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31502_31569__$1)){
var c__13990__auto___31570 = cljs.core.chunk_first.call(null,seq__31502_31569__$1);
var G__31571 = cljs.core.chunk_rest.call(null,seq__31502_31569__$1);
var G__31572 = c__13990__auto___31570;
var G__31573 = cljs.core.count.call(null,c__13990__auto___31570);
var G__31574 = (0);
seq__31502_31530 = G__31571;
chunk__31509_31531 = G__31572;
count__31510_31532 = G__31573;
i__31511_31533 = G__31574;
continue;
} else {
var vec__31521_31575 = cljs.core.first.call(null,seq__31502_31569__$1);
var orig_type_31576 = cljs.core.nth.call(null,vec__31521_31575,(0),null);
var f_31577 = cljs.core.nth.call(null,vec__31521_31575,(1),null);
var seq__31503_31578 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31576,cljs.core.PersistentArrayMap.fromArray([orig_type_31576,cljs.core.identity], true, false)));
var chunk__31505_31579 = null;
var count__31506_31580 = (0);
var i__31507_31581 = (0);
while(true){
if((i__31507_31581 < count__31506_31580)){
var vec__31522_31582 = cljs.core._nth.call(null,chunk__31505_31579,i__31507_31581);
var actual_type_31583 = cljs.core.nth.call(null,vec__31522_31582,(0),null);
var factory_31584 = cljs.core.nth.call(null,vec__31522_31582,(1),null);
var canonical_f_31585 = (cljs.core.truth_(selector_31529)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31528,selector_31529):cljs.core.identity).call(null,factory_31584.call(null,f_31577));
dommy.core.update_event_listeners_BANG_.call(null,elem_31528,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31529,actual_type_31583,f_31577], null),canonical_f_31585);

if(cljs.core.truth_(elem_31528.addEventListener)){
elem_31528.addEventListener(cljs.core.name.call(null,actual_type_31583),canonical_f_31585);
} else {
elem_31528.attachEvent(cljs.core.name.call(null,actual_type_31583),canonical_f_31585);
}

var G__31586 = seq__31503_31578;
var G__31587 = chunk__31505_31579;
var G__31588 = count__31506_31580;
var G__31589 = (i__31507_31581 + (1));
seq__31503_31578 = G__31586;
chunk__31505_31579 = G__31587;
count__31506_31580 = G__31588;
i__31507_31581 = G__31589;
continue;
} else {
var temp__4657__auto___31590__$1 = cljs.core.seq.call(null,seq__31503_31578);
if(temp__4657__auto___31590__$1){
var seq__31503_31591__$1 = temp__4657__auto___31590__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31503_31591__$1)){
var c__13990__auto___31592 = cljs.core.chunk_first.call(null,seq__31503_31591__$1);
var G__31593 = cljs.core.chunk_rest.call(null,seq__31503_31591__$1);
var G__31594 = c__13990__auto___31592;
var G__31595 = cljs.core.count.call(null,c__13990__auto___31592);
var G__31596 = (0);
seq__31503_31578 = G__31593;
chunk__31505_31579 = G__31594;
count__31506_31580 = G__31595;
i__31507_31581 = G__31596;
continue;
} else {
var vec__31523_31597 = cljs.core.first.call(null,seq__31503_31591__$1);
var actual_type_31598 = cljs.core.nth.call(null,vec__31523_31597,(0),null);
var factory_31599 = cljs.core.nth.call(null,vec__31523_31597,(1),null);
var canonical_f_31600 = (cljs.core.truth_(selector_31529)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31528,selector_31529):cljs.core.identity).call(null,factory_31599.call(null,f_31577));
dommy.core.update_event_listeners_BANG_.call(null,elem_31528,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31529,actual_type_31598,f_31577], null),canonical_f_31600);

if(cljs.core.truth_(elem_31528.addEventListener)){
elem_31528.addEventListener(cljs.core.name.call(null,actual_type_31598),canonical_f_31600);
} else {
elem_31528.attachEvent(cljs.core.name.call(null,actual_type_31598),canonical_f_31600);
}

var G__31601 = cljs.core.next.call(null,seq__31503_31591__$1);
var G__31602 = null;
var G__31603 = (0);
var G__31604 = (0);
seq__31503_31578 = G__31601;
chunk__31505_31579 = G__31602;
count__31506_31580 = G__31603;
i__31507_31581 = G__31604;
continue;
}
} else {
}
}
break;
}

var G__31605 = cljs.core.next.call(null,seq__31502_31569__$1);
var G__31606 = null;
var G__31607 = (0);
var G__31608 = (0);
seq__31502_31530 = G__31605;
chunk__31509_31531 = G__31606;
count__31510_31532 = G__31607;
i__31511_31533 = G__31608;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq31499){
var G__31500 = cljs.core.first.call(null,seq31499);
var seq31499__$1 = cljs.core.next.call(null,seq31499);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31500,seq31499__$1);
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
var args__14252__auto__ = [];
var len__14245__auto___31634 = arguments.length;
var i__14246__auto___31635 = (0);
while(true){
if((i__14246__auto___31635 < len__14245__auto___31634)){
args__14252__auto__.push((arguments[i__14246__auto___31635]));

var G__31636 = (i__14246__auto___31635 + (1));
i__14246__auto___31635 = G__31636;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31611_31637 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31638 = cljs.core.nth.call(null,vec__31611_31637,(0),null);
var selector_31639 = cljs.core.nth.call(null,vec__31611_31637,(1),null);
var seq__31612_31640 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31619_31641 = null;
var count__31620_31642 = (0);
var i__31621_31643 = (0);
while(true){
if((i__31621_31643 < count__31620_31642)){
var vec__31628_31644 = cljs.core._nth.call(null,chunk__31619_31641,i__31621_31643);
var orig_type_31645 = cljs.core.nth.call(null,vec__31628_31644,(0),null);
var f_31646 = cljs.core.nth.call(null,vec__31628_31644,(1),null);
var seq__31622_31647 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31645,cljs.core.PersistentArrayMap.fromArray([orig_type_31645,cljs.core.identity], true, false)));
var chunk__31624_31648 = null;
var count__31625_31649 = (0);
var i__31626_31650 = (0);
while(true){
if((i__31626_31650 < count__31625_31649)){
var vec__31629_31651 = cljs.core._nth.call(null,chunk__31624_31648,i__31626_31650);
var actual_type_31652 = cljs.core.nth.call(null,vec__31629_31651,(0),null);
var __31653 = cljs.core.nth.call(null,vec__31629_31651,(1),null);
var keys_31654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31639,actual_type_31652,f_31646], null);
var canonical_f_31655 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31638),keys_31654);
dommy.core.update_event_listeners_BANG_.call(null,elem_31638,dommy.utils.dissoc_in,keys_31654);

if(cljs.core.truth_(elem_31638.removeEventListener)){
elem_31638.removeEventListener(cljs.core.name.call(null,actual_type_31652),canonical_f_31655);
} else {
elem_31638.detachEvent(cljs.core.name.call(null,actual_type_31652),canonical_f_31655);
}

var G__31656 = seq__31622_31647;
var G__31657 = chunk__31624_31648;
var G__31658 = count__31625_31649;
var G__31659 = (i__31626_31650 + (1));
seq__31622_31647 = G__31656;
chunk__31624_31648 = G__31657;
count__31625_31649 = G__31658;
i__31626_31650 = G__31659;
continue;
} else {
var temp__4657__auto___31660 = cljs.core.seq.call(null,seq__31622_31647);
if(temp__4657__auto___31660){
var seq__31622_31661__$1 = temp__4657__auto___31660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31622_31661__$1)){
var c__13990__auto___31662 = cljs.core.chunk_first.call(null,seq__31622_31661__$1);
var G__31663 = cljs.core.chunk_rest.call(null,seq__31622_31661__$1);
var G__31664 = c__13990__auto___31662;
var G__31665 = cljs.core.count.call(null,c__13990__auto___31662);
var G__31666 = (0);
seq__31622_31647 = G__31663;
chunk__31624_31648 = G__31664;
count__31625_31649 = G__31665;
i__31626_31650 = G__31666;
continue;
} else {
var vec__31630_31667 = cljs.core.first.call(null,seq__31622_31661__$1);
var actual_type_31668 = cljs.core.nth.call(null,vec__31630_31667,(0),null);
var __31669 = cljs.core.nth.call(null,vec__31630_31667,(1),null);
var keys_31670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31639,actual_type_31668,f_31646], null);
var canonical_f_31671 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31638),keys_31670);
dommy.core.update_event_listeners_BANG_.call(null,elem_31638,dommy.utils.dissoc_in,keys_31670);

if(cljs.core.truth_(elem_31638.removeEventListener)){
elem_31638.removeEventListener(cljs.core.name.call(null,actual_type_31668),canonical_f_31671);
} else {
elem_31638.detachEvent(cljs.core.name.call(null,actual_type_31668),canonical_f_31671);
}

var G__31672 = cljs.core.next.call(null,seq__31622_31661__$1);
var G__31673 = null;
var G__31674 = (0);
var G__31675 = (0);
seq__31622_31647 = G__31672;
chunk__31624_31648 = G__31673;
count__31625_31649 = G__31674;
i__31626_31650 = G__31675;
continue;
}
} else {
}
}
break;
}

var G__31676 = seq__31612_31640;
var G__31677 = chunk__31619_31641;
var G__31678 = count__31620_31642;
var G__31679 = (i__31621_31643 + (1));
seq__31612_31640 = G__31676;
chunk__31619_31641 = G__31677;
count__31620_31642 = G__31678;
i__31621_31643 = G__31679;
continue;
} else {
var temp__4657__auto___31680 = cljs.core.seq.call(null,seq__31612_31640);
if(temp__4657__auto___31680){
var seq__31612_31681__$1 = temp__4657__auto___31680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31612_31681__$1)){
var c__13990__auto___31682 = cljs.core.chunk_first.call(null,seq__31612_31681__$1);
var G__31683 = cljs.core.chunk_rest.call(null,seq__31612_31681__$1);
var G__31684 = c__13990__auto___31682;
var G__31685 = cljs.core.count.call(null,c__13990__auto___31682);
var G__31686 = (0);
seq__31612_31640 = G__31683;
chunk__31619_31641 = G__31684;
count__31620_31642 = G__31685;
i__31621_31643 = G__31686;
continue;
} else {
var vec__31631_31687 = cljs.core.first.call(null,seq__31612_31681__$1);
var orig_type_31688 = cljs.core.nth.call(null,vec__31631_31687,(0),null);
var f_31689 = cljs.core.nth.call(null,vec__31631_31687,(1),null);
var seq__31613_31690 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31688,cljs.core.PersistentArrayMap.fromArray([orig_type_31688,cljs.core.identity], true, false)));
var chunk__31615_31691 = null;
var count__31616_31692 = (0);
var i__31617_31693 = (0);
while(true){
if((i__31617_31693 < count__31616_31692)){
var vec__31632_31694 = cljs.core._nth.call(null,chunk__31615_31691,i__31617_31693);
var actual_type_31695 = cljs.core.nth.call(null,vec__31632_31694,(0),null);
var __31696 = cljs.core.nth.call(null,vec__31632_31694,(1),null);
var keys_31697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31639,actual_type_31695,f_31689], null);
var canonical_f_31698 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31638),keys_31697);
dommy.core.update_event_listeners_BANG_.call(null,elem_31638,dommy.utils.dissoc_in,keys_31697);

if(cljs.core.truth_(elem_31638.removeEventListener)){
elem_31638.removeEventListener(cljs.core.name.call(null,actual_type_31695),canonical_f_31698);
} else {
elem_31638.detachEvent(cljs.core.name.call(null,actual_type_31695),canonical_f_31698);
}

var G__31699 = seq__31613_31690;
var G__31700 = chunk__31615_31691;
var G__31701 = count__31616_31692;
var G__31702 = (i__31617_31693 + (1));
seq__31613_31690 = G__31699;
chunk__31615_31691 = G__31700;
count__31616_31692 = G__31701;
i__31617_31693 = G__31702;
continue;
} else {
var temp__4657__auto___31703__$1 = cljs.core.seq.call(null,seq__31613_31690);
if(temp__4657__auto___31703__$1){
var seq__31613_31704__$1 = temp__4657__auto___31703__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31613_31704__$1)){
var c__13990__auto___31705 = cljs.core.chunk_first.call(null,seq__31613_31704__$1);
var G__31706 = cljs.core.chunk_rest.call(null,seq__31613_31704__$1);
var G__31707 = c__13990__auto___31705;
var G__31708 = cljs.core.count.call(null,c__13990__auto___31705);
var G__31709 = (0);
seq__31613_31690 = G__31706;
chunk__31615_31691 = G__31707;
count__31616_31692 = G__31708;
i__31617_31693 = G__31709;
continue;
} else {
var vec__31633_31710 = cljs.core.first.call(null,seq__31613_31704__$1);
var actual_type_31711 = cljs.core.nth.call(null,vec__31633_31710,(0),null);
var __31712 = cljs.core.nth.call(null,vec__31633_31710,(1),null);
var keys_31713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31639,actual_type_31711,f_31689], null);
var canonical_f_31714 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31638),keys_31713);
dommy.core.update_event_listeners_BANG_.call(null,elem_31638,dommy.utils.dissoc_in,keys_31713);

if(cljs.core.truth_(elem_31638.removeEventListener)){
elem_31638.removeEventListener(cljs.core.name.call(null,actual_type_31711),canonical_f_31714);
} else {
elem_31638.detachEvent(cljs.core.name.call(null,actual_type_31711),canonical_f_31714);
}

var G__31715 = cljs.core.next.call(null,seq__31613_31704__$1);
var G__31716 = null;
var G__31717 = (0);
var G__31718 = (0);
seq__31613_31690 = G__31715;
chunk__31615_31691 = G__31716;
count__31616_31692 = G__31717;
i__31617_31693 = G__31718;
continue;
}
} else {
}
}
break;
}

var G__31719 = cljs.core.next.call(null,seq__31612_31681__$1);
var G__31720 = null;
var G__31721 = (0);
var G__31722 = (0);
seq__31612_31640 = G__31719;
chunk__31619_31641 = G__31720;
count__31620_31642 = G__31721;
i__31621_31643 = G__31722;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq31609){
var G__31610 = cljs.core.first.call(null,seq31609);
var seq31609__$1 = cljs.core.next.call(null,seq31609);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31610,seq31609__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___31732 = arguments.length;
var i__14246__auto___31733 = (0);
while(true){
if((i__14246__auto___31733 < len__14245__auto___31732)){
args__14252__auto__.push((arguments[i__14246__auto___31733]));

var G__31734 = (i__14246__auto___31733 + (1));
i__14246__auto___31733 = G__31734;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31725_31735 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31736 = cljs.core.nth.call(null,vec__31725_31735,(0),null);
var selector_31737 = cljs.core.nth.call(null,vec__31725_31735,(1),null);
var seq__31726_31738 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31727_31739 = null;
var count__31728_31740 = (0);
var i__31729_31741 = (0);
while(true){
if((i__31729_31741 < count__31728_31740)){
var vec__31730_31742 = cljs.core._nth.call(null,chunk__31727_31739,i__31729_31741);
var type_31743 = cljs.core.nth.call(null,vec__31730_31742,(0),null);
var f_31744 = cljs.core.nth.call(null,vec__31730_31742,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31743,((function (seq__31726_31738,chunk__31727_31739,count__31728_31740,i__31729_31741,vec__31730_31742,type_31743,f_31744,vec__31725_31735,elem_31736,selector_31737){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31743,dommy$core$this_fn);

return f_31744.call(null,e);
});})(seq__31726_31738,chunk__31727_31739,count__31728_31740,i__31729_31741,vec__31730_31742,type_31743,f_31744,vec__31725_31735,elem_31736,selector_31737))
);

var G__31745 = seq__31726_31738;
var G__31746 = chunk__31727_31739;
var G__31747 = count__31728_31740;
var G__31748 = (i__31729_31741 + (1));
seq__31726_31738 = G__31745;
chunk__31727_31739 = G__31746;
count__31728_31740 = G__31747;
i__31729_31741 = G__31748;
continue;
} else {
var temp__4657__auto___31749 = cljs.core.seq.call(null,seq__31726_31738);
if(temp__4657__auto___31749){
var seq__31726_31750__$1 = temp__4657__auto___31749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31726_31750__$1)){
var c__13990__auto___31751 = cljs.core.chunk_first.call(null,seq__31726_31750__$1);
var G__31752 = cljs.core.chunk_rest.call(null,seq__31726_31750__$1);
var G__31753 = c__13990__auto___31751;
var G__31754 = cljs.core.count.call(null,c__13990__auto___31751);
var G__31755 = (0);
seq__31726_31738 = G__31752;
chunk__31727_31739 = G__31753;
count__31728_31740 = G__31754;
i__31729_31741 = G__31755;
continue;
} else {
var vec__31731_31756 = cljs.core.first.call(null,seq__31726_31750__$1);
var type_31757 = cljs.core.nth.call(null,vec__31731_31756,(0),null);
var f_31758 = cljs.core.nth.call(null,vec__31731_31756,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31757,((function (seq__31726_31738,chunk__31727_31739,count__31728_31740,i__31729_31741,vec__31731_31756,type_31757,f_31758,seq__31726_31750__$1,temp__4657__auto___31749,vec__31725_31735,elem_31736,selector_31737){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31757,dommy$core$this_fn);

return f_31758.call(null,e);
});})(seq__31726_31738,chunk__31727_31739,count__31728_31740,i__31729_31741,vec__31731_31756,type_31757,f_31758,seq__31726_31750__$1,temp__4657__auto___31749,vec__31725_31735,elem_31736,selector_31737))
);

var G__31759 = cljs.core.next.call(null,seq__31726_31750__$1);
var G__31760 = null;
var G__31761 = (0);
var G__31762 = (0);
seq__31726_31738 = G__31759;
chunk__31727_31739 = G__31760;
count__31728_31740 = G__31761;
i__31729_31741 = G__31762;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq31723){
var G__31724 = cljs.core.first.call(null,seq31723);
var seq31723__$1 = cljs.core.next.call(null,seq31723);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31724,seq31723__$1);
});

//# sourceMappingURL=core.js.map?rel=1458338364985