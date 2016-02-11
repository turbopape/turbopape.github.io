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
var args14388 = [];
var len__14245__auto___14391 = arguments.length;
var i__14246__auto___14392 = (0);
while(true){
if((i__14246__auto___14392 < len__14245__auto___14391)){
args14388.push((arguments[i__14246__auto___14392]));

var G__14393 = (i__14246__auto___14392 + (1));
i__14246__auto___14392 = G__14393;
continue;
} else {
}
break;
}

var G__14390 = args14388.length;
switch (G__14390) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14388.length)].join('')));

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
var args14395 = [];
var len__14245__auto___14398 = arguments.length;
var i__14246__auto___14399 = (0);
while(true){
if((i__14246__auto___14399 < len__14245__auto___14398)){
args14395.push((arguments[i__14246__auto___14399]));

var G__14400 = (i__14246__auto___14399 + (1));
i__14246__auto___14399 = G__14400;
continue;
} else {
}
break;
}

var G__14397 = args14395.length;
switch (G__14397) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14395.length)].join('')));

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
var args14403 = [];
var len__14245__auto___14406 = arguments.length;
var i__14246__auto___14407 = (0);
while(true){
if((i__14246__auto___14407 < len__14245__auto___14406)){
args14403.push((arguments[i__14246__auto___14407]));

var G__14408 = (i__14246__auto___14407 + (1));
i__14246__auto___14407 = G__14408;
continue;
} else {
}
break;
}

var G__14405 = args14403.length;
switch (G__14405) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14403.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__14402_SHARP_){
return !((p1__14402_SHARP_ === base));
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
var len__14245__auto___14418 = arguments.length;
var i__14246__auto___14419 = (0);
while(true){
if((i__14246__auto___14419 < len__14245__auto___14418)){
args__14252__auto__.push((arguments[i__14246__auto___14419]));

var G__14420 = (i__14246__auto___14419 + (1));
i__14246__auto___14419 = G__14420;
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
var seq__14412_14421 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14413_14422 = null;
var count__14414_14423 = (0);
var i__14415_14424 = (0);
while(true){
if((i__14415_14424 < count__14414_14423)){
var vec__14416_14425 = cljs.core._nth.call(null,chunk__14413_14422,i__14415_14424);
var k_14426 = cljs.core.nth.call(null,vec__14416_14425,(0),null);
var v_14427 = cljs.core.nth.call(null,vec__14416_14425,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14426),v_14427);

var G__14428 = seq__14412_14421;
var G__14429 = chunk__14413_14422;
var G__14430 = count__14414_14423;
var G__14431 = (i__14415_14424 + (1));
seq__14412_14421 = G__14428;
chunk__14413_14422 = G__14429;
count__14414_14423 = G__14430;
i__14415_14424 = G__14431;
continue;
} else {
var temp__4657__auto___14432 = cljs.core.seq.call(null,seq__14412_14421);
if(temp__4657__auto___14432){
var seq__14412_14433__$1 = temp__4657__auto___14432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14412_14433__$1)){
var c__13990__auto___14434 = cljs.core.chunk_first.call(null,seq__14412_14433__$1);
var G__14435 = cljs.core.chunk_rest.call(null,seq__14412_14433__$1);
var G__14436 = c__13990__auto___14434;
var G__14437 = cljs.core.count.call(null,c__13990__auto___14434);
var G__14438 = (0);
seq__14412_14421 = G__14435;
chunk__14413_14422 = G__14436;
count__14414_14423 = G__14437;
i__14415_14424 = G__14438;
continue;
} else {
var vec__14417_14439 = cljs.core.first.call(null,seq__14412_14433__$1);
var k_14440 = cljs.core.nth.call(null,vec__14417_14439,(0),null);
var v_14441 = cljs.core.nth.call(null,vec__14417_14439,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14440),v_14441);

var G__14442 = cljs.core.next.call(null,seq__14412_14433__$1);
var G__14443 = null;
var G__14444 = (0);
var G__14445 = (0);
seq__14412_14421 = G__14442;
chunk__14413_14422 = G__14443;
count__14414_14423 = G__14444;
i__14415_14424 = G__14445;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14410){
var G__14411 = cljs.core.first.call(null,seq14410);
var seq14410__$1 = cljs.core.next.call(null,seq14410);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14411,seq14410__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14452 = arguments.length;
var i__14246__auto___14453 = (0);
while(true){
if((i__14246__auto___14453 < len__14245__auto___14452)){
args__14252__auto__.push((arguments[i__14246__auto___14453]));

var G__14454 = (i__14246__auto___14453 + (1));
i__14246__auto___14453 = G__14454;
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
var seq__14448_14455 = cljs.core.seq.call(null,keywords);
var chunk__14449_14456 = null;
var count__14450_14457 = (0);
var i__14451_14458 = (0);
while(true){
if((i__14451_14458 < count__14450_14457)){
var kw_14459 = cljs.core._nth.call(null,chunk__14449_14456,i__14451_14458);
style.removeProperty(dommy.utils.as_str.call(null,kw_14459));

var G__14460 = seq__14448_14455;
var G__14461 = chunk__14449_14456;
var G__14462 = count__14450_14457;
var G__14463 = (i__14451_14458 + (1));
seq__14448_14455 = G__14460;
chunk__14449_14456 = G__14461;
count__14450_14457 = G__14462;
i__14451_14458 = G__14463;
continue;
} else {
var temp__4657__auto___14464 = cljs.core.seq.call(null,seq__14448_14455);
if(temp__4657__auto___14464){
var seq__14448_14465__$1 = temp__4657__auto___14464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14448_14465__$1)){
var c__13990__auto___14466 = cljs.core.chunk_first.call(null,seq__14448_14465__$1);
var G__14467 = cljs.core.chunk_rest.call(null,seq__14448_14465__$1);
var G__14468 = c__13990__auto___14466;
var G__14469 = cljs.core.count.call(null,c__13990__auto___14466);
var G__14470 = (0);
seq__14448_14455 = G__14467;
chunk__14449_14456 = G__14468;
count__14450_14457 = G__14469;
i__14451_14458 = G__14470;
continue;
} else {
var kw_14471 = cljs.core.first.call(null,seq__14448_14465__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_14471));

var G__14472 = cljs.core.next.call(null,seq__14448_14465__$1);
var G__14473 = null;
var G__14474 = (0);
var G__14475 = (0);
seq__14448_14455 = G__14472;
chunk__14449_14456 = G__14473;
count__14450_14457 = G__14474;
i__14451_14458 = G__14475;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14446){
var G__14447 = cljs.core.first.call(null,seq14446);
var seq14446__$1 = cljs.core.next.call(null,seq14446);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14447,seq14446__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14484 = arguments.length;
var i__14246__auto___14485 = (0);
while(true){
if((i__14246__auto___14485 < len__14245__auto___14484)){
args__14252__auto__.push((arguments[i__14246__auto___14485]));

var G__14486 = (i__14246__auto___14485 + (1));
i__14246__auto___14485 = G__14486;
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

var seq__14478_14487 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14479_14488 = null;
var count__14480_14489 = (0);
var i__14481_14490 = (0);
while(true){
if((i__14481_14490 < count__14480_14489)){
var vec__14482_14491 = cljs.core._nth.call(null,chunk__14479_14488,i__14481_14490);
var k_14492 = cljs.core.nth.call(null,vec__14482_14491,(0),null);
var v_14493 = cljs.core.nth.call(null,vec__14482_14491,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14492,[cljs.core.str(v_14493),cljs.core.str("px")].join(''));

var G__14494 = seq__14478_14487;
var G__14495 = chunk__14479_14488;
var G__14496 = count__14480_14489;
var G__14497 = (i__14481_14490 + (1));
seq__14478_14487 = G__14494;
chunk__14479_14488 = G__14495;
count__14480_14489 = G__14496;
i__14481_14490 = G__14497;
continue;
} else {
var temp__4657__auto___14498 = cljs.core.seq.call(null,seq__14478_14487);
if(temp__4657__auto___14498){
var seq__14478_14499__$1 = temp__4657__auto___14498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14478_14499__$1)){
var c__13990__auto___14500 = cljs.core.chunk_first.call(null,seq__14478_14499__$1);
var G__14501 = cljs.core.chunk_rest.call(null,seq__14478_14499__$1);
var G__14502 = c__13990__auto___14500;
var G__14503 = cljs.core.count.call(null,c__13990__auto___14500);
var G__14504 = (0);
seq__14478_14487 = G__14501;
chunk__14479_14488 = G__14502;
count__14480_14489 = G__14503;
i__14481_14490 = G__14504;
continue;
} else {
var vec__14483_14505 = cljs.core.first.call(null,seq__14478_14499__$1);
var k_14506 = cljs.core.nth.call(null,vec__14483_14505,(0),null);
var v_14507 = cljs.core.nth.call(null,vec__14483_14505,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14506,[cljs.core.str(v_14507),cljs.core.str("px")].join(''));

var G__14508 = cljs.core.next.call(null,seq__14478_14499__$1);
var G__14509 = null;
var G__14510 = (0);
var G__14511 = (0);
seq__14478_14487 = G__14508;
chunk__14479_14488 = G__14509;
count__14480_14489 = G__14510;
i__14481_14490 = G__14511;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14476){
var G__14477 = cljs.core.first.call(null,seq14476);
var seq14476__$1 = cljs.core.next.call(null,seq14476);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14477,seq14476__$1);
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
var args14512 = [];
var len__14245__auto___14527 = arguments.length;
var i__14246__auto___14528 = (0);
while(true){
if((i__14246__auto___14528 < len__14245__auto___14527)){
args14512.push((arguments[i__14246__auto___14528]));

var G__14529 = (i__14246__auto___14528 + (1));
i__14246__auto___14528 = G__14529;
continue;
} else {
}
break;
}

var G__14518 = args14512.length;
switch (G__14518) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14512.slice((3)),(0)));
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
var G__14519 = elem;
(G__14519[k__$1] = v);

return G__14519;
} else {
var G__14520 = elem;
G__14520.setAttribute(k__$1,v);

return G__14520;
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

var seq__14521_14531 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__14522_14532 = null;
var count__14523_14533 = (0);
var i__14524_14534 = (0);
while(true){
if((i__14524_14534 < count__14523_14533)){
var vec__14525_14535 = cljs.core._nth.call(null,chunk__14522_14532,i__14524_14534);
var k_14536__$1 = cljs.core.nth.call(null,vec__14525_14535,(0),null);
var v_14537__$1 = cljs.core.nth.call(null,vec__14525_14535,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14536__$1,v_14537__$1);

var G__14538 = seq__14521_14531;
var G__14539 = chunk__14522_14532;
var G__14540 = count__14523_14533;
var G__14541 = (i__14524_14534 + (1));
seq__14521_14531 = G__14538;
chunk__14522_14532 = G__14539;
count__14523_14533 = G__14540;
i__14524_14534 = G__14541;
continue;
} else {
var temp__4657__auto___14542 = cljs.core.seq.call(null,seq__14521_14531);
if(temp__4657__auto___14542){
var seq__14521_14543__$1 = temp__4657__auto___14542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14521_14543__$1)){
var c__13990__auto___14544 = cljs.core.chunk_first.call(null,seq__14521_14543__$1);
var G__14545 = cljs.core.chunk_rest.call(null,seq__14521_14543__$1);
var G__14546 = c__13990__auto___14544;
var G__14547 = cljs.core.count.call(null,c__13990__auto___14544);
var G__14548 = (0);
seq__14521_14531 = G__14545;
chunk__14522_14532 = G__14546;
count__14523_14533 = G__14547;
i__14524_14534 = G__14548;
continue;
} else {
var vec__14526_14549 = cljs.core.first.call(null,seq__14521_14543__$1);
var k_14550__$1 = cljs.core.nth.call(null,vec__14526_14549,(0),null);
var v_14551__$1 = cljs.core.nth.call(null,vec__14526_14549,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14550__$1,v_14551__$1);

var G__14552 = cljs.core.next.call(null,seq__14521_14543__$1);
var G__14553 = null;
var G__14554 = (0);
var G__14555 = (0);
seq__14521_14531 = G__14552;
chunk__14522_14532 = G__14553;
count__14523_14533 = G__14554;
i__14524_14534 = G__14555;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14513){
var G__14514 = cljs.core.first.call(null,seq14513);
var seq14513__$1 = cljs.core.next.call(null,seq14513);
var G__14515 = cljs.core.first.call(null,seq14513__$1);
var seq14513__$2 = cljs.core.next.call(null,seq14513__$1);
var G__14516 = cljs.core.first.call(null,seq14513__$2);
var seq14513__$3 = cljs.core.next.call(null,seq14513__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14514,G__14515,G__14516,seq14513__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args14556 = [];
var len__14245__auto___14566 = arguments.length;
var i__14246__auto___14567 = (0);
while(true){
if((i__14246__auto___14567 < len__14245__auto___14566)){
args14556.push((arguments[i__14246__auto___14567]));

var G__14568 = (i__14246__auto___14567 + (1));
i__14246__auto___14567 = G__14568;
continue;
} else {
}
break;
}

var G__14561 = args14556.length;
switch (G__14561) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14556.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_14570__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_14570__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_14570__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14562_14571 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__14563_14572 = null;
var count__14564_14573 = (0);
var i__14565_14574 = (0);
while(true){
if((i__14565_14574 < count__14564_14573)){
var k_14575__$1 = cljs.core._nth.call(null,chunk__14563_14572,i__14565_14574);
dommy.core.remove_attr_BANG_.call(null,elem,k_14575__$1);

var G__14576 = seq__14562_14571;
var G__14577 = chunk__14563_14572;
var G__14578 = count__14564_14573;
var G__14579 = (i__14565_14574 + (1));
seq__14562_14571 = G__14576;
chunk__14563_14572 = G__14577;
count__14564_14573 = G__14578;
i__14565_14574 = G__14579;
continue;
} else {
var temp__4657__auto___14580 = cljs.core.seq.call(null,seq__14562_14571);
if(temp__4657__auto___14580){
var seq__14562_14581__$1 = temp__4657__auto___14580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14562_14581__$1)){
var c__13990__auto___14582 = cljs.core.chunk_first.call(null,seq__14562_14581__$1);
var G__14583 = cljs.core.chunk_rest.call(null,seq__14562_14581__$1);
var G__14584 = c__13990__auto___14582;
var G__14585 = cljs.core.count.call(null,c__13990__auto___14582);
var G__14586 = (0);
seq__14562_14571 = G__14583;
chunk__14563_14572 = G__14584;
count__14564_14573 = G__14585;
i__14565_14574 = G__14586;
continue;
} else {
var k_14587__$1 = cljs.core.first.call(null,seq__14562_14581__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_14587__$1);

var G__14588 = cljs.core.next.call(null,seq__14562_14581__$1);
var G__14589 = null;
var G__14590 = (0);
var G__14591 = (0);
seq__14562_14571 = G__14588;
chunk__14563_14572 = G__14589;
count__14564_14573 = G__14590;
i__14565_14574 = G__14591;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14557){
var G__14558 = cljs.core.first.call(null,seq14557);
var seq14557__$1 = cljs.core.next.call(null,seq14557);
var G__14559 = cljs.core.first.call(null,seq14557__$1);
var seq14557__$2 = cljs.core.next.call(null,seq14557__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14558,G__14559,seq14557__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args14592 = [];
var len__14245__auto___14595 = arguments.length;
var i__14246__auto___14596 = (0);
while(true){
if((i__14246__auto___14596 < len__14245__auto___14595)){
args14592.push((arguments[i__14246__auto___14596]));

var G__14597 = (i__14246__auto___14596 + (1));
i__14246__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var G__14594 = args14592.length;
switch (G__14594) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14592.length)].join('')));

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
var args14599 = [];
var len__14245__auto___14617 = arguments.length;
var i__14246__auto___14618 = (0);
while(true){
if((i__14246__auto___14618 < len__14245__auto___14617)){
args14599.push((arguments[i__14246__auto___14618]));

var G__14619 = (i__14246__auto___14618 + (1));
i__14246__auto___14618 = G__14619;
continue;
} else {
}
break;
}

var G__14604 = args14599.length;
switch (G__14604) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14599.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___14621 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14621)){
var class_list_14622 = temp__4655__auto___14621;
var seq__14605_14623 = cljs.core.seq.call(null,classes__$1);
var chunk__14606_14624 = null;
var count__14607_14625 = (0);
var i__14608_14626 = (0);
while(true){
if((i__14608_14626 < count__14607_14625)){
var c_14627 = cljs.core._nth.call(null,chunk__14606_14624,i__14608_14626);
class_list_14622.add(c_14627);

var G__14628 = seq__14605_14623;
var G__14629 = chunk__14606_14624;
var G__14630 = count__14607_14625;
var G__14631 = (i__14608_14626 + (1));
seq__14605_14623 = G__14628;
chunk__14606_14624 = G__14629;
count__14607_14625 = G__14630;
i__14608_14626 = G__14631;
continue;
} else {
var temp__4657__auto___14632 = cljs.core.seq.call(null,seq__14605_14623);
if(temp__4657__auto___14632){
var seq__14605_14633__$1 = temp__4657__auto___14632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14605_14633__$1)){
var c__13990__auto___14634 = cljs.core.chunk_first.call(null,seq__14605_14633__$1);
var G__14635 = cljs.core.chunk_rest.call(null,seq__14605_14633__$1);
var G__14636 = c__13990__auto___14634;
var G__14637 = cljs.core.count.call(null,c__13990__auto___14634);
var G__14638 = (0);
seq__14605_14623 = G__14635;
chunk__14606_14624 = G__14636;
count__14607_14625 = G__14637;
i__14608_14626 = G__14638;
continue;
} else {
var c_14639 = cljs.core.first.call(null,seq__14605_14633__$1);
class_list_14622.add(c_14639);

var G__14640 = cljs.core.next.call(null,seq__14605_14633__$1);
var G__14641 = null;
var G__14642 = (0);
var G__14643 = (0);
seq__14605_14623 = G__14640;
chunk__14606_14624 = G__14641;
count__14607_14625 = G__14642;
i__14608_14626 = G__14643;
continue;
}
} else {
}
}
break;
}
} else {
var seq__14609_14644 = cljs.core.seq.call(null,classes__$1);
var chunk__14610_14645 = null;
var count__14611_14646 = (0);
var i__14612_14647 = (0);
while(true){
if((i__14612_14647 < count__14611_14646)){
var c_14648 = cljs.core._nth.call(null,chunk__14610_14645,i__14612_14647);
var class_name_14649 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_14649,c_14648))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_14649 === ""))?c_14648:[cljs.core.str(class_name_14649),cljs.core.str(" "),cljs.core.str(c_14648)].join('')));
}

var G__14650 = seq__14609_14644;
var G__14651 = chunk__14610_14645;
var G__14652 = count__14611_14646;
var G__14653 = (i__14612_14647 + (1));
seq__14609_14644 = G__14650;
chunk__14610_14645 = G__14651;
count__14611_14646 = G__14652;
i__14612_14647 = G__14653;
continue;
} else {
var temp__4657__auto___14654 = cljs.core.seq.call(null,seq__14609_14644);
if(temp__4657__auto___14654){
var seq__14609_14655__$1 = temp__4657__auto___14654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14609_14655__$1)){
var c__13990__auto___14656 = cljs.core.chunk_first.call(null,seq__14609_14655__$1);
var G__14657 = cljs.core.chunk_rest.call(null,seq__14609_14655__$1);
var G__14658 = c__13990__auto___14656;
var G__14659 = cljs.core.count.call(null,c__13990__auto___14656);
var G__14660 = (0);
seq__14609_14644 = G__14657;
chunk__14610_14645 = G__14658;
count__14611_14646 = G__14659;
i__14612_14647 = G__14660;
continue;
} else {
var c_14661 = cljs.core.first.call(null,seq__14609_14655__$1);
var class_name_14662 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_14662,c_14661))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_14662 === ""))?c_14661:[cljs.core.str(class_name_14662),cljs.core.str(" "),cljs.core.str(c_14661)].join('')));
}

var G__14663 = cljs.core.next.call(null,seq__14609_14655__$1);
var G__14664 = null;
var G__14665 = (0);
var G__14666 = (0);
seq__14609_14644 = G__14663;
chunk__14610_14645 = G__14664;
count__14611_14646 = G__14665;
i__14612_14647 = G__14666;
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
var seq__14613_14667 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__14614_14668 = null;
var count__14615_14669 = (0);
var i__14616_14670 = (0);
while(true){
if((i__14616_14670 < count__14615_14669)){
var c_14671 = cljs.core._nth.call(null,chunk__14614_14668,i__14616_14670);
dommy.core.add_class_BANG_.call(null,elem,c_14671);

var G__14672 = seq__14613_14667;
var G__14673 = chunk__14614_14668;
var G__14674 = count__14615_14669;
var G__14675 = (i__14616_14670 + (1));
seq__14613_14667 = G__14672;
chunk__14614_14668 = G__14673;
count__14615_14669 = G__14674;
i__14616_14670 = G__14675;
continue;
} else {
var temp__4657__auto___14676 = cljs.core.seq.call(null,seq__14613_14667);
if(temp__4657__auto___14676){
var seq__14613_14677__$1 = temp__4657__auto___14676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14613_14677__$1)){
var c__13990__auto___14678 = cljs.core.chunk_first.call(null,seq__14613_14677__$1);
var G__14679 = cljs.core.chunk_rest.call(null,seq__14613_14677__$1);
var G__14680 = c__13990__auto___14678;
var G__14681 = cljs.core.count.call(null,c__13990__auto___14678);
var G__14682 = (0);
seq__14613_14667 = G__14679;
chunk__14614_14668 = G__14680;
count__14615_14669 = G__14681;
i__14616_14670 = G__14682;
continue;
} else {
var c_14683 = cljs.core.first.call(null,seq__14613_14677__$1);
dommy.core.add_class_BANG_.call(null,elem,c_14683);

var G__14684 = cljs.core.next.call(null,seq__14613_14677__$1);
var G__14685 = null;
var G__14686 = (0);
var G__14687 = (0);
seq__14613_14667 = G__14684;
chunk__14614_14668 = G__14685;
count__14615_14669 = G__14686;
i__14616_14670 = G__14687;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq14600){
var G__14601 = cljs.core.first.call(null,seq14600);
var seq14600__$1 = cljs.core.next.call(null,seq14600);
var G__14602 = cljs.core.first.call(null,seq14600__$1);
var seq14600__$2 = cljs.core.next.call(null,seq14600__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14601,G__14602,seq14600__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args14688 = [];
var len__14245__auto___14698 = arguments.length;
var i__14246__auto___14699 = (0);
while(true){
if((i__14246__auto___14699 < len__14245__auto___14698)){
args14688.push((arguments[i__14246__auto___14699]));

var G__14700 = (i__14246__auto___14699 + (1));
i__14246__auto___14699 = G__14700;
continue;
} else {
}
break;
}

var G__14693 = args14688.length;
switch (G__14693) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14688.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___14702 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14702)){
var class_list_14703 = temp__4655__auto___14702;
class_list_14703.remove(c__$1);
} else {
var class_name_14704 = dommy.core.class$.call(null,elem);
var new_class_name_14705 = dommy.utils.remove_class_str.call(null,class_name_14704,c__$1);
if((class_name_14704 === new_class_name_14705)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_14705);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__14694 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__14695 = null;
var count__14696 = (0);
var i__14697 = (0);
while(true){
if((i__14697 < count__14696)){
var c = cljs.core._nth.call(null,chunk__14695,i__14697);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__14706 = seq__14694;
var G__14707 = chunk__14695;
var G__14708 = count__14696;
var G__14709 = (i__14697 + (1));
seq__14694 = G__14706;
chunk__14695 = G__14707;
count__14696 = G__14708;
i__14697 = G__14709;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14694);
if(temp__4657__auto__){
var seq__14694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14694__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__14694__$1);
var G__14710 = cljs.core.chunk_rest.call(null,seq__14694__$1);
var G__14711 = c__13990__auto__;
var G__14712 = cljs.core.count.call(null,c__13990__auto__);
var G__14713 = (0);
seq__14694 = G__14710;
chunk__14695 = G__14711;
count__14696 = G__14712;
i__14697 = G__14713;
continue;
} else {
var c = cljs.core.first.call(null,seq__14694__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__14714 = cljs.core.next.call(null,seq__14694__$1);
var G__14715 = null;
var G__14716 = (0);
var G__14717 = (0);
seq__14694 = G__14714;
chunk__14695 = G__14715;
count__14696 = G__14716;
i__14697 = G__14717;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq14689){
var G__14690 = cljs.core.first.call(null,seq14689);
var seq14689__$1 = cljs.core.next.call(null,seq14689);
var G__14691 = cljs.core.first.call(null,seq14689__$1);
var seq14689__$2 = cljs.core.next.call(null,seq14689__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14690,G__14691,seq14689__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args14718 = [];
var len__14245__auto___14721 = arguments.length;
var i__14246__auto___14722 = (0);
while(true){
if((i__14246__auto___14722 < len__14245__auto___14721)){
args14718.push((arguments[i__14246__auto___14722]));

var G__14723 = (i__14246__auto___14722 + (1));
i__14246__auto___14722 = G__14723;
continue;
} else {
}
break;
}

var G__14720 = args14718.length;
switch (G__14720) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14718.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___14725 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14725)){
var class_list_14726 = temp__4655__auto___14725;
class_list_14726.toggle(c__$1);
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
var args14727 = [];
var len__14245__auto___14730 = arguments.length;
var i__14246__auto___14731 = (0);
while(true){
if((i__14246__auto___14731 < len__14245__auto___14730)){
args14727.push((arguments[i__14246__auto___14731]));

var G__14732 = (i__14246__auto___14731 + (1));
i__14246__auto___14731 = G__14732;
continue;
} else {
}
break;
}

var G__14729 = args14727.length;
switch (G__14729) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14727.length)].join('')));

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
var args14734 = [];
var len__14245__auto___14737 = arguments.length;
var i__14246__auto___14738 = (0);
while(true){
if((i__14246__auto___14738 < len__14245__auto___14737)){
args14734.push((arguments[i__14246__auto___14738]));

var G__14739 = (i__14246__auto___14738 + (1));
i__14246__auto___14738 = G__14739;
continue;
} else {
}
break;
}

var G__14736 = args14734.length;
switch (G__14736) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14734.length)].join('')));

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
var args14741 = [];
var len__14245__auto___14752 = arguments.length;
var i__14246__auto___14753 = (0);
while(true){
if((i__14246__auto___14753 < len__14245__auto___14752)){
args14741.push((arguments[i__14246__auto___14753]));

var G__14754 = (i__14246__auto___14753 + (1));
i__14246__auto___14753 = G__14754;
continue;
} else {
}
break;
}

var G__14746 = args14741.length;
switch (G__14746) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14741.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__14747 = parent;
G__14747.appendChild(child);

return G__14747;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__14748_14756 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__14749_14757 = null;
var count__14750_14758 = (0);
var i__14751_14759 = (0);
while(true){
if((i__14751_14759 < count__14750_14758)){
var c_14760 = cljs.core._nth.call(null,chunk__14749_14757,i__14751_14759);
dommy.core.append_BANG_.call(null,parent,c_14760);

var G__14761 = seq__14748_14756;
var G__14762 = chunk__14749_14757;
var G__14763 = count__14750_14758;
var G__14764 = (i__14751_14759 + (1));
seq__14748_14756 = G__14761;
chunk__14749_14757 = G__14762;
count__14750_14758 = G__14763;
i__14751_14759 = G__14764;
continue;
} else {
var temp__4657__auto___14765 = cljs.core.seq.call(null,seq__14748_14756);
if(temp__4657__auto___14765){
var seq__14748_14766__$1 = temp__4657__auto___14765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14748_14766__$1)){
var c__13990__auto___14767 = cljs.core.chunk_first.call(null,seq__14748_14766__$1);
var G__14768 = cljs.core.chunk_rest.call(null,seq__14748_14766__$1);
var G__14769 = c__13990__auto___14767;
var G__14770 = cljs.core.count.call(null,c__13990__auto___14767);
var G__14771 = (0);
seq__14748_14756 = G__14768;
chunk__14749_14757 = G__14769;
count__14750_14758 = G__14770;
i__14751_14759 = G__14771;
continue;
} else {
var c_14772 = cljs.core.first.call(null,seq__14748_14766__$1);
dommy.core.append_BANG_.call(null,parent,c_14772);

var G__14773 = cljs.core.next.call(null,seq__14748_14766__$1);
var G__14774 = null;
var G__14775 = (0);
var G__14776 = (0);
seq__14748_14756 = G__14773;
chunk__14749_14757 = G__14774;
count__14750_14758 = G__14775;
i__14751_14759 = G__14776;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq14742){
var G__14743 = cljs.core.first.call(null,seq14742);
var seq14742__$1 = cljs.core.next.call(null,seq14742);
var G__14744 = cljs.core.first.call(null,seq14742__$1);
var seq14742__$2 = cljs.core.next.call(null,seq14742__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14743,G__14744,seq14742__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args14777 = [];
var len__14245__auto___14788 = arguments.length;
var i__14246__auto___14789 = (0);
while(true){
if((i__14246__auto___14789 < len__14245__auto___14788)){
args14777.push((arguments[i__14246__auto___14789]));

var G__14790 = (i__14246__auto___14789 + (1));
i__14246__auto___14789 = G__14790;
continue;
} else {
}
break;
}

var G__14782 = args14777.length;
switch (G__14782) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14777.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__14783 = parent;
G__14783.insertBefore(child,parent.firstChild);

return G__14783;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__14784_14792 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__14785_14793 = null;
var count__14786_14794 = (0);
var i__14787_14795 = (0);
while(true){
if((i__14787_14795 < count__14786_14794)){
var c_14796 = cljs.core._nth.call(null,chunk__14785_14793,i__14787_14795);
dommy.core.prepend_BANG_.call(null,parent,c_14796);

var G__14797 = seq__14784_14792;
var G__14798 = chunk__14785_14793;
var G__14799 = count__14786_14794;
var G__14800 = (i__14787_14795 + (1));
seq__14784_14792 = G__14797;
chunk__14785_14793 = G__14798;
count__14786_14794 = G__14799;
i__14787_14795 = G__14800;
continue;
} else {
var temp__4657__auto___14801 = cljs.core.seq.call(null,seq__14784_14792);
if(temp__4657__auto___14801){
var seq__14784_14802__$1 = temp__4657__auto___14801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14784_14802__$1)){
var c__13990__auto___14803 = cljs.core.chunk_first.call(null,seq__14784_14802__$1);
var G__14804 = cljs.core.chunk_rest.call(null,seq__14784_14802__$1);
var G__14805 = c__13990__auto___14803;
var G__14806 = cljs.core.count.call(null,c__13990__auto___14803);
var G__14807 = (0);
seq__14784_14792 = G__14804;
chunk__14785_14793 = G__14805;
count__14786_14794 = G__14806;
i__14787_14795 = G__14807;
continue;
} else {
var c_14808 = cljs.core.first.call(null,seq__14784_14802__$1);
dommy.core.prepend_BANG_.call(null,parent,c_14808);

var G__14809 = cljs.core.next.call(null,seq__14784_14802__$1);
var G__14810 = null;
var G__14811 = (0);
var G__14812 = (0);
seq__14784_14792 = G__14809;
chunk__14785_14793 = G__14810;
count__14786_14794 = G__14811;
i__14787_14795 = G__14812;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq14778){
var G__14779 = cljs.core.first.call(null,seq14778);
var seq14778__$1 = cljs.core.next.call(null,seq14778);
var G__14780 = cljs.core.first.call(null,seq14778__$1);
var seq14778__$2 = cljs.core.next.call(null,seq14778__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14779,G__14780,seq14778__$2);
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
var temp__4655__auto___14813 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___14813)){
var next_14814 = temp__4655__auto___14813;
dommy.core.insert_before_BANG_.call(null,elem,next_14814);
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
var args14815 = [];
var len__14245__auto___14819 = arguments.length;
var i__14246__auto___14820 = (0);
while(true){
if((i__14246__auto___14820 < len__14245__auto___14819)){
args14815.push((arguments[i__14246__auto___14820]));

var G__14821 = (i__14246__auto___14820 + (1));
i__14246__auto___14820 = G__14821;
continue;
} else {
}
break;
}

var G__14817 = args14815.length;
switch (G__14817) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14815.length)].join('')));

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
var G__14818 = p;
G__14818.removeChild(elem);

return G__14818;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14823){
var vec__14824 = p__14823;
var special_mouse_event = cljs.core.nth.call(null,vec__14824,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__14824,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__14824,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__14824,special_mouse_event,real_mouse_event){
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
;})(vec__14824,special_mouse_event,real_mouse_event))
});})(vec__14824,special_mouse_event,real_mouse_event))
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
var len__14245__auto___14828 = arguments.length;
var i__14246__auto___14829 = (0);
while(true){
if((i__14246__auto___14829 < len__14245__auto___14828)){
args__14252__auto__.push((arguments[i__14246__auto___14829]));

var G__14830 = (i__14246__auto___14829 + (1));
i__14246__auto___14829 = G__14830;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq14825){
var G__14826 = cljs.core.first.call(null,seq14825);
var seq14825__$1 = cljs.core.next.call(null,seq14825);
var G__14827 = cljs.core.first.call(null,seq14825__$1);
var seq14825__$2 = cljs.core.next.call(null,seq14825__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,seq14825__$2);
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
var len__14245__auto___14856 = arguments.length;
var i__14246__auto___14857 = (0);
while(true){
if((i__14246__auto___14857 < len__14245__auto___14856)){
args__14252__auto__.push((arguments[i__14246__auto___14857]));

var G__14858 = (i__14246__auto___14857 + (1));
i__14246__auto___14857 = G__14858;
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

var vec__14833_14859 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_14860 = cljs.core.nth.call(null,vec__14833_14859,(0),null);
var selector_14861 = cljs.core.nth.call(null,vec__14833_14859,(1),null);
var seq__14834_14862 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__14841_14863 = null;
var count__14842_14864 = (0);
var i__14843_14865 = (0);
while(true){
if((i__14843_14865 < count__14842_14864)){
var vec__14850_14866 = cljs.core._nth.call(null,chunk__14841_14863,i__14843_14865);
var orig_type_14867 = cljs.core.nth.call(null,vec__14850_14866,(0),null);
var f_14868 = cljs.core.nth.call(null,vec__14850_14866,(1),null);
var seq__14844_14869 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14867,cljs.core.PersistentArrayMap.fromArray([orig_type_14867,cljs.core.identity], true, false)));
var chunk__14846_14870 = null;
var count__14847_14871 = (0);
var i__14848_14872 = (0);
while(true){
if((i__14848_14872 < count__14847_14871)){
var vec__14851_14873 = cljs.core._nth.call(null,chunk__14846_14870,i__14848_14872);
var actual_type_14874 = cljs.core.nth.call(null,vec__14851_14873,(0),null);
var factory_14875 = cljs.core.nth.call(null,vec__14851_14873,(1),null);
var canonical_f_14876 = (cljs.core.truth_(selector_14861)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14860,selector_14861):cljs.core.identity).call(null,factory_14875.call(null,f_14868));
dommy.core.update_event_listeners_BANG_.call(null,elem_14860,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14861,actual_type_14874,f_14868], null),canonical_f_14876);

if(cljs.core.truth_(elem_14860.addEventListener)){
elem_14860.addEventListener(cljs.core.name.call(null,actual_type_14874),canonical_f_14876);
} else {
elem_14860.attachEvent(cljs.core.name.call(null,actual_type_14874),canonical_f_14876);
}

var G__14877 = seq__14844_14869;
var G__14878 = chunk__14846_14870;
var G__14879 = count__14847_14871;
var G__14880 = (i__14848_14872 + (1));
seq__14844_14869 = G__14877;
chunk__14846_14870 = G__14878;
count__14847_14871 = G__14879;
i__14848_14872 = G__14880;
continue;
} else {
var temp__4657__auto___14881 = cljs.core.seq.call(null,seq__14844_14869);
if(temp__4657__auto___14881){
var seq__14844_14882__$1 = temp__4657__auto___14881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14844_14882__$1)){
var c__13990__auto___14883 = cljs.core.chunk_first.call(null,seq__14844_14882__$1);
var G__14884 = cljs.core.chunk_rest.call(null,seq__14844_14882__$1);
var G__14885 = c__13990__auto___14883;
var G__14886 = cljs.core.count.call(null,c__13990__auto___14883);
var G__14887 = (0);
seq__14844_14869 = G__14884;
chunk__14846_14870 = G__14885;
count__14847_14871 = G__14886;
i__14848_14872 = G__14887;
continue;
} else {
var vec__14852_14888 = cljs.core.first.call(null,seq__14844_14882__$1);
var actual_type_14889 = cljs.core.nth.call(null,vec__14852_14888,(0),null);
var factory_14890 = cljs.core.nth.call(null,vec__14852_14888,(1),null);
var canonical_f_14891 = (cljs.core.truth_(selector_14861)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14860,selector_14861):cljs.core.identity).call(null,factory_14890.call(null,f_14868));
dommy.core.update_event_listeners_BANG_.call(null,elem_14860,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14861,actual_type_14889,f_14868], null),canonical_f_14891);

if(cljs.core.truth_(elem_14860.addEventListener)){
elem_14860.addEventListener(cljs.core.name.call(null,actual_type_14889),canonical_f_14891);
} else {
elem_14860.attachEvent(cljs.core.name.call(null,actual_type_14889),canonical_f_14891);
}

var G__14892 = cljs.core.next.call(null,seq__14844_14882__$1);
var G__14893 = null;
var G__14894 = (0);
var G__14895 = (0);
seq__14844_14869 = G__14892;
chunk__14846_14870 = G__14893;
count__14847_14871 = G__14894;
i__14848_14872 = G__14895;
continue;
}
} else {
}
}
break;
}

var G__14896 = seq__14834_14862;
var G__14897 = chunk__14841_14863;
var G__14898 = count__14842_14864;
var G__14899 = (i__14843_14865 + (1));
seq__14834_14862 = G__14896;
chunk__14841_14863 = G__14897;
count__14842_14864 = G__14898;
i__14843_14865 = G__14899;
continue;
} else {
var temp__4657__auto___14900 = cljs.core.seq.call(null,seq__14834_14862);
if(temp__4657__auto___14900){
var seq__14834_14901__$1 = temp__4657__auto___14900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14834_14901__$1)){
var c__13990__auto___14902 = cljs.core.chunk_first.call(null,seq__14834_14901__$1);
var G__14903 = cljs.core.chunk_rest.call(null,seq__14834_14901__$1);
var G__14904 = c__13990__auto___14902;
var G__14905 = cljs.core.count.call(null,c__13990__auto___14902);
var G__14906 = (0);
seq__14834_14862 = G__14903;
chunk__14841_14863 = G__14904;
count__14842_14864 = G__14905;
i__14843_14865 = G__14906;
continue;
} else {
var vec__14853_14907 = cljs.core.first.call(null,seq__14834_14901__$1);
var orig_type_14908 = cljs.core.nth.call(null,vec__14853_14907,(0),null);
var f_14909 = cljs.core.nth.call(null,vec__14853_14907,(1),null);
var seq__14835_14910 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14908,cljs.core.PersistentArrayMap.fromArray([orig_type_14908,cljs.core.identity], true, false)));
var chunk__14837_14911 = null;
var count__14838_14912 = (0);
var i__14839_14913 = (0);
while(true){
if((i__14839_14913 < count__14838_14912)){
var vec__14854_14914 = cljs.core._nth.call(null,chunk__14837_14911,i__14839_14913);
var actual_type_14915 = cljs.core.nth.call(null,vec__14854_14914,(0),null);
var factory_14916 = cljs.core.nth.call(null,vec__14854_14914,(1),null);
var canonical_f_14917 = (cljs.core.truth_(selector_14861)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14860,selector_14861):cljs.core.identity).call(null,factory_14916.call(null,f_14909));
dommy.core.update_event_listeners_BANG_.call(null,elem_14860,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14861,actual_type_14915,f_14909], null),canonical_f_14917);

if(cljs.core.truth_(elem_14860.addEventListener)){
elem_14860.addEventListener(cljs.core.name.call(null,actual_type_14915),canonical_f_14917);
} else {
elem_14860.attachEvent(cljs.core.name.call(null,actual_type_14915),canonical_f_14917);
}

var G__14918 = seq__14835_14910;
var G__14919 = chunk__14837_14911;
var G__14920 = count__14838_14912;
var G__14921 = (i__14839_14913 + (1));
seq__14835_14910 = G__14918;
chunk__14837_14911 = G__14919;
count__14838_14912 = G__14920;
i__14839_14913 = G__14921;
continue;
} else {
var temp__4657__auto___14922__$1 = cljs.core.seq.call(null,seq__14835_14910);
if(temp__4657__auto___14922__$1){
var seq__14835_14923__$1 = temp__4657__auto___14922__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14835_14923__$1)){
var c__13990__auto___14924 = cljs.core.chunk_first.call(null,seq__14835_14923__$1);
var G__14925 = cljs.core.chunk_rest.call(null,seq__14835_14923__$1);
var G__14926 = c__13990__auto___14924;
var G__14927 = cljs.core.count.call(null,c__13990__auto___14924);
var G__14928 = (0);
seq__14835_14910 = G__14925;
chunk__14837_14911 = G__14926;
count__14838_14912 = G__14927;
i__14839_14913 = G__14928;
continue;
} else {
var vec__14855_14929 = cljs.core.first.call(null,seq__14835_14923__$1);
var actual_type_14930 = cljs.core.nth.call(null,vec__14855_14929,(0),null);
var factory_14931 = cljs.core.nth.call(null,vec__14855_14929,(1),null);
var canonical_f_14932 = (cljs.core.truth_(selector_14861)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14860,selector_14861):cljs.core.identity).call(null,factory_14931.call(null,f_14909));
dommy.core.update_event_listeners_BANG_.call(null,elem_14860,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14861,actual_type_14930,f_14909], null),canonical_f_14932);

if(cljs.core.truth_(elem_14860.addEventListener)){
elem_14860.addEventListener(cljs.core.name.call(null,actual_type_14930),canonical_f_14932);
} else {
elem_14860.attachEvent(cljs.core.name.call(null,actual_type_14930),canonical_f_14932);
}

var G__14933 = cljs.core.next.call(null,seq__14835_14923__$1);
var G__14934 = null;
var G__14935 = (0);
var G__14936 = (0);
seq__14835_14910 = G__14933;
chunk__14837_14911 = G__14934;
count__14838_14912 = G__14935;
i__14839_14913 = G__14936;
continue;
}
} else {
}
}
break;
}

var G__14937 = cljs.core.next.call(null,seq__14834_14901__$1);
var G__14938 = null;
var G__14939 = (0);
var G__14940 = (0);
seq__14834_14862 = G__14937;
chunk__14841_14863 = G__14938;
count__14842_14864 = G__14939;
i__14843_14865 = G__14940;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq14831){
var G__14832 = cljs.core.first.call(null,seq14831);
var seq14831__$1 = cljs.core.next.call(null,seq14831);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14832,seq14831__$1);
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
var len__14245__auto___14966 = arguments.length;
var i__14246__auto___14967 = (0);
while(true){
if((i__14246__auto___14967 < len__14245__auto___14966)){
args__14252__auto__.push((arguments[i__14246__auto___14967]));

var G__14968 = (i__14246__auto___14967 + (1));
i__14246__auto___14967 = G__14968;
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

var vec__14943_14969 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_14970 = cljs.core.nth.call(null,vec__14943_14969,(0),null);
var selector_14971 = cljs.core.nth.call(null,vec__14943_14969,(1),null);
var seq__14944_14972 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__14951_14973 = null;
var count__14952_14974 = (0);
var i__14953_14975 = (0);
while(true){
if((i__14953_14975 < count__14952_14974)){
var vec__14960_14976 = cljs.core._nth.call(null,chunk__14951_14973,i__14953_14975);
var orig_type_14977 = cljs.core.nth.call(null,vec__14960_14976,(0),null);
var f_14978 = cljs.core.nth.call(null,vec__14960_14976,(1),null);
var seq__14954_14979 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14977,cljs.core.PersistentArrayMap.fromArray([orig_type_14977,cljs.core.identity], true, false)));
var chunk__14956_14980 = null;
var count__14957_14981 = (0);
var i__14958_14982 = (0);
while(true){
if((i__14958_14982 < count__14957_14981)){
var vec__14961_14983 = cljs.core._nth.call(null,chunk__14956_14980,i__14958_14982);
var actual_type_14984 = cljs.core.nth.call(null,vec__14961_14983,(0),null);
var __14985 = cljs.core.nth.call(null,vec__14961_14983,(1),null);
var keys_14986 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14971,actual_type_14984,f_14978], null);
var canonical_f_14987 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14970),keys_14986);
dommy.core.update_event_listeners_BANG_.call(null,elem_14970,dommy.utils.dissoc_in,keys_14986);

if(cljs.core.truth_(elem_14970.removeEventListener)){
elem_14970.removeEventListener(cljs.core.name.call(null,actual_type_14984),canonical_f_14987);
} else {
elem_14970.detachEvent(cljs.core.name.call(null,actual_type_14984),canonical_f_14987);
}

var G__14988 = seq__14954_14979;
var G__14989 = chunk__14956_14980;
var G__14990 = count__14957_14981;
var G__14991 = (i__14958_14982 + (1));
seq__14954_14979 = G__14988;
chunk__14956_14980 = G__14989;
count__14957_14981 = G__14990;
i__14958_14982 = G__14991;
continue;
} else {
var temp__4657__auto___14992 = cljs.core.seq.call(null,seq__14954_14979);
if(temp__4657__auto___14992){
var seq__14954_14993__$1 = temp__4657__auto___14992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14954_14993__$1)){
var c__13990__auto___14994 = cljs.core.chunk_first.call(null,seq__14954_14993__$1);
var G__14995 = cljs.core.chunk_rest.call(null,seq__14954_14993__$1);
var G__14996 = c__13990__auto___14994;
var G__14997 = cljs.core.count.call(null,c__13990__auto___14994);
var G__14998 = (0);
seq__14954_14979 = G__14995;
chunk__14956_14980 = G__14996;
count__14957_14981 = G__14997;
i__14958_14982 = G__14998;
continue;
} else {
var vec__14962_14999 = cljs.core.first.call(null,seq__14954_14993__$1);
var actual_type_15000 = cljs.core.nth.call(null,vec__14962_14999,(0),null);
var __15001 = cljs.core.nth.call(null,vec__14962_14999,(1),null);
var keys_15002 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14971,actual_type_15000,f_14978], null);
var canonical_f_15003 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14970),keys_15002);
dommy.core.update_event_listeners_BANG_.call(null,elem_14970,dommy.utils.dissoc_in,keys_15002);

if(cljs.core.truth_(elem_14970.removeEventListener)){
elem_14970.removeEventListener(cljs.core.name.call(null,actual_type_15000),canonical_f_15003);
} else {
elem_14970.detachEvent(cljs.core.name.call(null,actual_type_15000),canonical_f_15003);
}

var G__15004 = cljs.core.next.call(null,seq__14954_14993__$1);
var G__15005 = null;
var G__15006 = (0);
var G__15007 = (0);
seq__14954_14979 = G__15004;
chunk__14956_14980 = G__15005;
count__14957_14981 = G__15006;
i__14958_14982 = G__15007;
continue;
}
} else {
}
}
break;
}

var G__15008 = seq__14944_14972;
var G__15009 = chunk__14951_14973;
var G__15010 = count__14952_14974;
var G__15011 = (i__14953_14975 + (1));
seq__14944_14972 = G__15008;
chunk__14951_14973 = G__15009;
count__14952_14974 = G__15010;
i__14953_14975 = G__15011;
continue;
} else {
var temp__4657__auto___15012 = cljs.core.seq.call(null,seq__14944_14972);
if(temp__4657__auto___15012){
var seq__14944_15013__$1 = temp__4657__auto___15012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14944_15013__$1)){
var c__13990__auto___15014 = cljs.core.chunk_first.call(null,seq__14944_15013__$1);
var G__15015 = cljs.core.chunk_rest.call(null,seq__14944_15013__$1);
var G__15016 = c__13990__auto___15014;
var G__15017 = cljs.core.count.call(null,c__13990__auto___15014);
var G__15018 = (0);
seq__14944_14972 = G__15015;
chunk__14951_14973 = G__15016;
count__14952_14974 = G__15017;
i__14953_14975 = G__15018;
continue;
} else {
var vec__14963_15019 = cljs.core.first.call(null,seq__14944_15013__$1);
var orig_type_15020 = cljs.core.nth.call(null,vec__14963_15019,(0),null);
var f_15021 = cljs.core.nth.call(null,vec__14963_15019,(1),null);
var seq__14945_15022 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15020,cljs.core.PersistentArrayMap.fromArray([orig_type_15020,cljs.core.identity], true, false)));
var chunk__14947_15023 = null;
var count__14948_15024 = (0);
var i__14949_15025 = (0);
while(true){
if((i__14949_15025 < count__14948_15024)){
var vec__14964_15026 = cljs.core._nth.call(null,chunk__14947_15023,i__14949_15025);
var actual_type_15027 = cljs.core.nth.call(null,vec__14964_15026,(0),null);
var __15028 = cljs.core.nth.call(null,vec__14964_15026,(1),null);
var keys_15029 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14971,actual_type_15027,f_15021], null);
var canonical_f_15030 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14970),keys_15029);
dommy.core.update_event_listeners_BANG_.call(null,elem_14970,dommy.utils.dissoc_in,keys_15029);

if(cljs.core.truth_(elem_14970.removeEventListener)){
elem_14970.removeEventListener(cljs.core.name.call(null,actual_type_15027),canonical_f_15030);
} else {
elem_14970.detachEvent(cljs.core.name.call(null,actual_type_15027),canonical_f_15030);
}

var G__15031 = seq__14945_15022;
var G__15032 = chunk__14947_15023;
var G__15033 = count__14948_15024;
var G__15034 = (i__14949_15025 + (1));
seq__14945_15022 = G__15031;
chunk__14947_15023 = G__15032;
count__14948_15024 = G__15033;
i__14949_15025 = G__15034;
continue;
} else {
var temp__4657__auto___15035__$1 = cljs.core.seq.call(null,seq__14945_15022);
if(temp__4657__auto___15035__$1){
var seq__14945_15036__$1 = temp__4657__auto___15035__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14945_15036__$1)){
var c__13990__auto___15037 = cljs.core.chunk_first.call(null,seq__14945_15036__$1);
var G__15038 = cljs.core.chunk_rest.call(null,seq__14945_15036__$1);
var G__15039 = c__13990__auto___15037;
var G__15040 = cljs.core.count.call(null,c__13990__auto___15037);
var G__15041 = (0);
seq__14945_15022 = G__15038;
chunk__14947_15023 = G__15039;
count__14948_15024 = G__15040;
i__14949_15025 = G__15041;
continue;
} else {
var vec__14965_15042 = cljs.core.first.call(null,seq__14945_15036__$1);
var actual_type_15043 = cljs.core.nth.call(null,vec__14965_15042,(0),null);
var __15044 = cljs.core.nth.call(null,vec__14965_15042,(1),null);
var keys_15045 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14971,actual_type_15043,f_15021], null);
var canonical_f_15046 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14970),keys_15045);
dommy.core.update_event_listeners_BANG_.call(null,elem_14970,dommy.utils.dissoc_in,keys_15045);

if(cljs.core.truth_(elem_14970.removeEventListener)){
elem_14970.removeEventListener(cljs.core.name.call(null,actual_type_15043),canonical_f_15046);
} else {
elem_14970.detachEvent(cljs.core.name.call(null,actual_type_15043),canonical_f_15046);
}

var G__15047 = cljs.core.next.call(null,seq__14945_15036__$1);
var G__15048 = null;
var G__15049 = (0);
var G__15050 = (0);
seq__14945_15022 = G__15047;
chunk__14947_15023 = G__15048;
count__14948_15024 = G__15049;
i__14949_15025 = G__15050;
continue;
}
} else {
}
}
break;
}

var G__15051 = cljs.core.next.call(null,seq__14944_15013__$1);
var G__15052 = null;
var G__15053 = (0);
var G__15054 = (0);
seq__14944_14972 = G__15051;
chunk__14951_14973 = G__15052;
count__14952_14974 = G__15053;
i__14953_14975 = G__15054;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq14941){
var G__14942 = cljs.core.first.call(null,seq14941);
var seq14941__$1 = cljs.core.next.call(null,seq14941);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14942,seq14941__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___15064 = arguments.length;
var i__14246__auto___15065 = (0);
while(true){
if((i__14246__auto___15065 < len__14245__auto___15064)){
args__14252__auto__.push((arguments[i__14246__auto___15065]));

var G__15066 = (i__14246__auto___15065 + (1));
i__14246__auto___15065 = G__15066;
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

var vec__15057_15067 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15068 = cljs.core.nth.call(null,vec__15057_15067,(0),null);
var selector_15069 = cljs.core.nth.call(null,vec__15057_15067,(1),null);
var seq__15058_15070 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15059_15071 = null;
var count__15060_15072 = (0);
var i__15061_15073 = (0);
while(true){
if((i__15061_15073 < count__15060_15072)){
var vec__15062_15074 = cljs.core._nth.call(null,chunk__15059_15071,i__15061_15073);
var type_15075 = cljs.core.nth.call(null,vec__15062_15074,(0),null);
var f_15076 = cljs.core.nth.call(null,vec__15062_15074,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15075,((function (seq__15058_15070,chunk__15059_15071,count__15060_15072,i__15061_15073,vec__15062_15074,type_15075,f_15076,vec__15057_15067,elem_15068,selector_15069){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15075,dommy$core$this_fn);

return f_15076.call(null,e);
});})(seq__15058_15070,chunk__15059_15071,count__15060_15072,i__15061_15073,vec__15062_15074,type_15075,f_15076,vec__15057_15067,elem_15068,selector_15069))
);

var G__15077 = seq__15058_15070;
var G__15078 = chunk__15059_15071;
var G__15079 = count__15060_15072;
var G__15080 = (i__15061_15073 + (1));
seq__15058_15070 = G__15077;
chunk__15059_15071 = G__15078;
count__15060_15072 = G__15079;
i__15061_15073 = G__15080;
continue;
} else {
var temp__4657__auto___15081 = cljs.core.seq.call(null,seq__15058_15070);
if(temp__4657__auto___15081){
var seq__15058_15082__$1 = temp__4657__auto___15081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15058_15082__$1)){
var c__13990__auto___15083 = cljs.core.chunk_first.call(null,seq__15058_15082__$1);
var G__15084 = cljs.core.chunk_rest.call(null,seq__15058_15082__$1);
var G__15085 = c__13990__auto___15083;
var G__15086 = cljs.core.count.call(null,c__13990__auto___15083);
var G__15087 = (0);
seq__15058_15070 = G__15084;
chunk__15059_15071 = G__15085;
count__15060_15072 = G__15086;
i__15061_15073 = G__15087;
continue;
} else {
var vec__15063_15088 = cljs.core.first.call(null,seq__15058_15082__$1);
var type_15089 = cljs.core.nth.call(null,vec__15063_15088,(0),null);
var f_15090 = cljs.core.nth.call(null,vec__15063_15088,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15089,((function (seq__15058_15070,chunk__15059_15071,count__15060_15072,i__15061_15073,vec__15063_15088,type_15089,f_15090,seq__15058_15082__$1,temp__4657__auto___15081,vec__15057_15067,elem_15068,selector_15069){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15089,dommy$core$this_fn);

return f_15090.call(null,e);
});})(seq__15058_15070,chunk__15059_15071,count__15060_15072,i__15061_15073,vec__15063_15088,type_15089,f_15090,seq__15058_15082__$1,temp__4657__auto___15081,vec__15057_15067,elem_15068,selector_15069))
);

var G__15091 = cljs.core.next.call(null,seq__15058_15082__$1);
var G__15092 = null;
var G__15093 = (0);
var G__15094 = (0);
seq__15058_15070 = G__15091;
chunk__15059_15071 = G__15092;
count__15060_15072 = G__15093;
i__15061_15073 = G__15094;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15055){
var G__15056 = cljs.core.first.call(null,seq15055);
var seq15055__$1 = cljs.core.next.call(null,seq15055);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15056,seq15055__$1);
});

//# sourceMappingURL=core.js.map?rel=1455205832794