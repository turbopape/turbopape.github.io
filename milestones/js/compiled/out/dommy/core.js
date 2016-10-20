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
var args46608 = [];
var len__45375__auto___46611 = arguments.length;
var i__45376__auto___46612 = (0);
while(true){
if((i__45376__auto___46612 < len__45375__auto___46611)){
args46608.push((arguments[i__45376__auto___46612]));

var G__46613 = (i__45376__auto___46612 + (1));
i__45376__auto___46612 = G__46613;
continue;
} else {
}
break;
}

var G__46610 = args46608.length;
switch (G__46610) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46608.length)].join('')));

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
var args46615 = [];
var len__45375__auto___46618 = arguments.length;
var i__45376__auto___46619 = (0);
while(true){
if((i__45376__auto___46619 < len__45375__auto___46618)){
args46615.push((arguments[i__45376__auto___46619]));

var G__46620 = (i__45376__auto___46619 + (1));
i__45376__auto___46619 = G__46620;
continue;
} else {
}
break;
}

var G__46617 = args46615.length;
switch (G__46617) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46615.length)].join('')));

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
var args46623 = [];
var len__45375__auto___46626 = arguments.length;
var i__45376__auto___46627 = (0);
while(true){
if((i__45376__auto___46627 < len__45375__auto___46626)){
args46623.push((arguments[i__45376__auto___46627]));

var G__46628 = (i__45376__auto___46627 + (1));
i__45376__auto___46627 = G__46628;
continue;
} else {
}
break;
}

var G__46625 = args46623.length;
switch (G__46625) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46623.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__46622_SHARP_){
return !((p1__46622_SHARP_ === base));
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
var len__45375__auto___46642 = arguments.length;
var i__45376__auto___46643 = (0);
while(true){
if((i__45376__auto___46643 < len__45375__auto___46642)){
args__45382__auto__.push((arguments[i__45376__auto___46643]));

var G__46644 = (i__45376__auto___46643 + (1));
i__45376__auto___46643 = G__46644;
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
var seq__46632_46645 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46633_46646 = null;
var count__46634_46647 = (0);
var i__46635_46648 = (0);
while(true){
if((i__46635_46648 < count__46634_46647)){
var vec__46636_46649 = cljs.core._nth.call(null,chunk__46633_46646,i__46635_46648);
var k_46650 = cljs.core.nth.call(null,vec__46636_46649,(0),null);
var v_46651 = cljs.core.nth.call(null,vec__46636_46649,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46650),v_46651);

var G__46652 = seq__46632_46645;
var G__46653 = chunk__46633_46646;
var G__46654 = count__46634_46647;
var G__46655 = (i__46635_46648 + (1));
seq__46632_46645 = G__46652;
chunk__46633_46646 = G__46653;
count__46634_46647 = G__46654;
i__46635_46648 = G__46655;
continue;
} else {
var temp__4657__auto___46656 = cljs.core.seq.call(null,seq__46632_46645);
if(temp__4657__auto___46656){
var seq__46632_46657__$1 = temp__4657__auto___46656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46632_46657__$1)){
var c__45081__auto___46658 = cljs.core.chunk_first.call(null,seq__46632_46657__$1);
var G__46659 = cljs.core.chunk_rest.call(null,seq__46632_46657__$1);
var G__46660 = c__45081__auto___46658;
var G__46661 = cljs.core.count.call(null,c__45081__auto___46658);
var G__46662 = (0);
seq__46632_46645 = G__46659;
chunk__46633_46646 = G__46660;
count__46634_46647 = G__46661;
i__46635_46648 = G__46662;
continue;
} else {
var vec__46639_46663 = cljs.core.first.call(null,seq__46632_46657__$1);
var k_46664 = cljs.core.nth.call(null,vec__46639_46663,(0),null);
var v_46665 = cljs.core.nth.call(null,vec__46639_46663,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46664),v_46665);

var G__46666 = cljs.core.next.call(null,seq__46632_46657__$1);
var G__46667 = null;
var G__46668 = (0);
var G__46669 = (0);
seq__46632_46645 = G__46666;
chunk__46633_46646 = G__46667;
count__46634_46647 = G__46668;
i__46635_46648 = G__46669;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq46630){
var G__46631 = cljs.core.first.call(null,seq46630);
var seq46630__$1 = cljs.core.next.call(null,seq46630);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46631,seq46630__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___46676 = arguments.length;
var i__45376__auto___46677 = (0);
while(true){
if((i__45376__auto___46677 < len__45375__auto___46676)){
args__45382__auto__.push((arguments[i__45376__auto___46677]));

var G__46678 = (i__45376__auto___46677 + (1));
i__45376__auto___46677 = G__46678;
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
var seq__46672_46679 = cljs.core.seq.call(null,keywords);
var chunk__46673_46680 = null;
var count__46674_46681 = (0);
var i__46675_46682 = (0);
while(true){
if((i__46675_46682 < count__46674_46681)){
var kw_46683 = cljs.core._nth.call(null,chunk__46673_46680,i__46675_46682);
style.removeProperty(dommy.utils.as_str.call(null,kw_46683));

var G__46684 = seq__46672_46679;
var G__46685 = chunk__46673_46680;
var G__46686 = count__46674_46681;
var G__46687 = (i__46675_46682 + (1));
seq__46672_46679 = G__46684;
chunk__46673_46680 = G__46685;
count__46674_46681 = G__46686;
i__46675_46682 = G__46687;
continue;
} else {
var temp__4657__auto___46688 = cljs.core.seq.call(null,seq__46672_46679);
if(temp__4657__auto___46688){
var seq__46672_46689__$1 = temp__4657__auto___46688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46672_46689__$1)){
var c__45081__auto___46690 = cljs.core.chunk_first.call(null,seq__46672_46689__$1);
var G__46691 = cljs.core.chunk_rest.call(null,seq__46672_46689__$1);
var G__46692 = c__45081__auto___46690;
var G__46693 = cljs.core.count.call(null,c__45081__auto___46690);
var G__46694 = (0);
seq__46672_46679 = G__46691;
chunk__46673_46680 = G__46692;
count__46674_46681 = G__46693;
i__46675_46682 = G__46694;
continue;
} else {
var kw_46695 = cljs.core.first.call(null,seq__46672_46689__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_46695));

var G__46696 = cljs.core.next.call(null,seq__46672_46689__$1);
var G__46697 = null;
var G__46698 = (0);
var G__46699 = (0);
seq__46672_46679 = G__46696;
chunk__46673_46680 = G__46697;
count__46674_46681 = G__46698;
i__46675_46682 = G__46699;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq46670){
var G__46671 = cljs.core.first.call(null,seq46670);
var seq46670__$1 = cljs.core.next.call(null,seq46670);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46671,seq46670__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___46712 = arguments.length;
var i__45376__auto___46713 = (0);
while(true){
if((i__45376__auto___46713 < len__45375__auto___46712)){
args__45382__auto__.push((arguments[i__45376__auto___46713]));

var G__46714 = (i__45376__auto___46713 + (1));
i__45376__auto___46713 = G__46714;
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

var seq__46702_46715 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46703_46716 = null;
var count__46704_46717 = (0);
var i__46705_46718 = (0);
while(true){
if((i__46705_46718 < count__46704_46717)){
var vec__46706_46719 = cljs.core._nth.call(null,chunk__46703_46716,i__46705_46718);
var k_46720 = cljs.core.nth.call(null,vec__46706_46719,(0),null);
var v_46721 = cljs.core.nth.call(null,vec__46706_46719,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46720,[cljs.core.str(v_46721),cljs.core.str("px")].join(''));

var G__46722 = seq__46702_46715;
var G__46723 = chunk__46703_46716;
var G__46724 = count__46704_46717;
var G__46725 = (i__46705_46718 + (1));
seq__46702_46715 = G__46722;
chunk__46703_46716 = G__46723;
count__46704_46717 = G__46724;
i__46705_46718 = G__46725;
continue;
} else {
var temp__4657__auto___46726 = cljs.core.seq.call(null,seq__46702_46715);
if(temp__4657__auto___46726){
var seq__46702_46727__$1 = temp__4657__auto___46726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46702_46727__$1)){
var c__45081__auto___46728 = cljs.core.chunk_first.call(null,seq__46702_46727__$1);
var G__46729 = cljs.core.chunk_rest.call(null,seq__46702_46727__$1);
var G__46730 = c__45081__auto___46728;
var G__46731 = cljs.core.count.call(null,c__45081__auto___46728);
var G__46732 = (0);
seq__46702_46715 = G__46729;
chunk__46703_46716 = G__46730;
count__46704_46717 = G__46731;
i__46705_46718 = G__46732;
continue;
} else {
var vec__46709_46733 = cljs.core.first.call(null,seq__46702_46727__$1);
var k_46734 = cljs.core.nth.call(null,vec__46709_46733,(0),null);
var v_46735 = cljs.core.nth.call(null,vec__46709_46733,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46734,[cljs.core.str(v_46735),cljs.core.str("px")].join(''));

var G__46736 = cljs.core.next.call(null,seq__46702_46727__$1);
var G__46737 = null;
var G__46738 = (0);
var G__46739 = (0);
seq__46702_46715 = G__46736;
chunk__46703_46716 = G__46737;
count__46704_46717 = G__46738;
i__46705_46718 = G__46739;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq46700){
var G__46701 = cljs.core.first.call(null,seq46700);
var seq46700__$1 = cljs.core.next.call(null,seq46700);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46701,seq46700__$1);
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
var args46740 = [];
var len__45375__auto___46759 = arguments.length;
var i__45376__auto___46760 = (0);
while(true){
if((i__45376__auto___46760 < len__45375__auto___46759)){
args46740.push((arguments[i__45376__auto___46760]));

var G__46761 = (i__45376__auto___46760 + (1));
i__45376__auto___46760 = G__46761;
continue;
} else {
}
break;
}

var G__46746 = args46740.length;
switch (G__46746) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args46740.slice((3)),(0),null));
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
var G__46747 = elem;
(G__46747[k__$1] = v);

return G__46747;
} else {
var G__46748 = elem;
G__46748.setAttribute(k__$1,v);

return G__46748;
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

var seq__46749_46763 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__46750_46764 = null;
var count__46751_46765 = (0);
var i__46752_46766 = (0);
while(true){
if((i__46752_46766 < count__46751_46765)){
var vec__46753_46767 = cljs.core._nth.call(null,chunk__46750_46764,i__46752_46766);
var k_46768__$1 = cljs.core.nth.call(null,vec__46753_46767,(0),null);
var v_46769__$1 = cljs.core.nth.call(null,vec__46753_46767,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46768__$1,v_46769__$1);

var G__46770 = seq__46749_46763;
var G__46771 = chunk__46750_46764;
var G__46772 = count__46751_46765;
var G__46773 = (i__46752_46766 + (1));
seq__46749_46763 = G__46770;
chunk__46750_46764 = G__46771;
count__46751_46765 = G__46772;
i__46752_46766 = G__46773;
continue;
} else {
var temp__4657__auto___46774 = cljs.core.seq.call(null,seq__46749_46763);
if(temp__4657__auto___46774){
var seq__46749_46775__$1 = temp__4657__auto___46774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46749_46775__$1)){
var c__45081__auto___46776 = cljs.core.chunk_first.call(null,seq__46749_46775__$1);
var G__46777 = cljs.core.chunk_rest.call(null,seq__46749_46775__$1);
var G__46778 = c__45081__auto___46776;
var G__46779 = cljs.core.count.call(null,c__45081__auto___46776);
var G__46780 = (0);
seq__46749_46763 = G__46777;
chunk__46750_46764 = G__46778;
count__46751_46765 = G__46779;
i__46752_46766 = G__46780;
continue;
} else {
var vec__46756_46781 = cljs.core.first.call(null,seq__46749_46775__$1);
var k_46782__$1 = cljs.core.nth.call(null,vec__46756_46781,(0),null);
var v_46783__$1 = cljs.core.nth.call(null,vec__46756_46781,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46782__$1,v_46783__$1);

var G__46784 = cljs.core.next.call(null,seq__46749_46775__$1);
var G__46785 = null;
var G__46786 = (0);
var G__46787 = (0);
seq__46749_46763 = G__46784;
chunk__46750_46764 = G__46785;
count__46751_46765 = G__46786;
i__46752_46766 = G__46787;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq46741){
var G__46742 = cljs.core.first.call(null,seq46741);
var seq46741__$1 = cljs.core.next.call(null,seq46741);
var G__46743 = cljs.core.first.call(null,seq46741__$1);
var seq46741__$2 = cljs.core.next.call(null,seq46741__$1);
var G__46744 = cljs.core.first.call(null,seq46741__$2);
var seq46741__$3 = cljs.core.next.call(null,seq46741__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46742,G__46743,G__46744,seq46741__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args46788 = [];
var len__45375__auto___46798 = arguments.length;
var i__45376__auto___46799 = (0);
while(true){
if((i__45376__auto___46799 < len__45375__auto___46798)){
args46788.push((arguments[i__45376__auto___46799]));

var G__46800 = (i__45376__auto___46799 + (1));
i__45376__auto___46799 = G__46800;
continue;
} else {
}
break;
}

var G__46793 = args46788.length;
switch (G__46793) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args46788.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_46802__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_46802__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_46802__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__46794_46803 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__46795_46804 = null;
var count__46796_46805 = (0);
var i__46797_46806 = (0);
while(true){
if((i__46797_46806 < count__46796_46805)){
var k_46807__$1 = cljs.core._nth.call(null,chunk__46795_46804,i__46797_46806);
dommy.core.remove_attr_BANG_.call(null,elem,k_46807__$1);

var G__46808 = seq__46794_46803;
var G__46809 = chunk__46795_46804;
var G__46810 = count__46796_46805;
var G__46811 = (i__46797_46806 + (1));
seq__46794_46803 = G__46808;
chunk__46795_46804 = G__46809;
count__46796_46805 = G__46810;
i__46797_46806 = G__46811;
continue;
} else {
var temp__4657__auto___46812 = cljs.core.seq.call(null,seq__46794_46803);
if(temp__4657__auto___46812){
var seq__46794_46813__$1 = temp__4657__auto___46812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46794_46813__$1)){
var c__45081__auto___46814 = cljs.core.chunk_first.call(null,seq__46794_46813__$1);
var G__46815 = cljs.core.chunk_rest.call(null,seq__46794_46813__$1);
var G__46816 = c__45081__auto___46814;
var G__46817 = cljs.core.count.call(null,c__45081__auto___46814);
var G__46818 = (0);
seq__46794_46803 = G__46815;
chunk__46795_46804 = G__46816;
count__46796_46805 = G__46817;
i__46797_46806 = G__46818;
continue;
} else {
var k_46819__$1 = cljs.core.first.call(null,seq__46794_46813__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_46819__$1);

var G__46820 = cljs.core.next.call(null,seq__46794_46813__$1);
var G__46821 = null;
var G__46822 = (0);
var G__46823 = (0);
seq__46794_46803 = G__46820;
chunk__46795_46804 = G__46821;
count__46796_46805 = G__46822;
i__46797_46806 = G__46823;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq46789){
var G__46790 = cljs.core.first.call(null,seq46789);
var seq46789__$1 = cljs.core.next.call(null,seq46789);
var G__46791 = cljs.core.first.call(null,seq46789__$1);
var seq46789__$2 = cljs.core.next.call(null,seq46789__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46790,G__46791,seq46789__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args46824 = [];
var len__45375__auto___46827 = arguments.length;
var i__45376__auto___46828 = (0);
while(true){
if((i__45376__auto___46828 < len__45375__auto___46827)){
args46824.push((arguments[i__45376__auto___46828]));

var G__46829 = (i__45376__auto___46828 + (1));
i__45376__auto___46828 = G__46829;
continue;
} else {
}
break;
}

var G__46826 = args46824.length;
switch (G__46826) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46824.length)].join('')));

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
var args46831 = [];
var len__45375__auto___46849 = arguments.length;
var i__45376__auto___46850 = (0);
while(true){
if((i__45376__auto___46850 < len__45375__auto___46849)){
args46831.push((arguments[i__45376__auto___46850]));

var G__46851 = (i__45376__auto___46850 + (1));
i__45376__auto___46850 = G__46851;
continue;
} else {
}
break;
}

var G__46836 = args46831.length;
switch (G__46836) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args46831.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___46853 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46853)){
var class_list_46854 = temp__4655__auto___46853;
var seq__46837_46855 = cljs.core.seq.call(null,classes__$1);
var chunk__46838_46856 = null;
var count__46839_46857 = (0);
var i__46840_46858 = (0);
while(true){
if((i__46840_46858 < count__46839_46857)){
var c_46859 = cljs.core._nth.call(null,chunk__46838_46856,i__46840_46858);
class_list_46854.add(c_46859);

var G__46860 = seq__46837_46855;
var G__46861 = chunk__46838_46856;
var G__46862 = count__46839_46857;
var G__46863 = (i__46840_46858 + (1));
seq__46837_46855 = G__46860;
chunk__46838_46856 = G__46861;
count__46839_46857 = G__46862;
i__46840_46858 = G__46863;
continue;
} else {
var temp__4657__auto___46864 = cljs.core.seq.call(null,seq__46837_46855);
if(temp__4657__auto___46864){
var seq__46837_46865__$1 = temp__4657__auto___46864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46837_46865__$1)){
var c__45081__auto___46866 = cljs.core.chunk_first.call(null,seq__46837_46865__$1);
var G__46867 = cljs.core.chunk_rest.call(null,seq__46837_46865__$1);
var G__46868 = c__45081__auto___46866;
var G__46869 = cljs.core.count.call(null,c__45081__auto___46866);
var G__46870 = (0);
seq__46837_46855 = G__46867;
chunk__46838_46856 = G__46868;
count__46839_46857 = G__46869;
i__46840_46858 = G__46870;
continue;
} else {
var c_46871 = cljs.core.first.call(null,seq__46837_46865__$1);
class_list_46854.add(c_46871);

var G__46872 = cljs.core.next.call(null,seq__46837_46865__$1);
var G__46873 = null;
var G__46874 = (0);
var G__46875 = (0);
seq__46837_46855 = G__46872;
chunk__46838_46856 = G__46873;
count__46839_46857 = G__46874;
i__46840_46858 = G__46875;
continue;
}
} else {
}
}
break;
}
} else {
var seq__46841_46876 = cljs.core.seq.call(null,classes__$1);
var chunk__46842_46877 = null;
var count__46843_46878 = (0);
var i__46844_46879 = (0);
while(true){
if((i__46844_46879 < count__46843_46878)){
var c_46880 = cljs.core._nth.call(null,chunk__46842_46877,i__46844_46879);
var class_name_46881 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46881,c_46880))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46881 === ""))?c_46880:[cljs.core.str(class_name_46881),cljs.core.str(" "),cljs.core.str(c_46880)].join('')));
}

var G__46882 = seq__46841_46876;
var G__46883 = chunk__46842_46877;
var G__46884 = count__46843_46878;
var G__46885 = (i__46844_46879 + (1));
seq__46841_46876 = G__46882;
chunk__46842_46877 = G__46883;
count__46843_46878 = G__46884;
i__46844_46879 = G__46885;
continue;
} else {
var temp__4657__auto___46886 = cljs.core.seq.call(null,seq__46841_46876);
if(temp__4657__auto___46886){
var seq__46841_46887__$1 = temp__4657__auto___46886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46841_46887__$1)){
var c__45081__auto___46888 = cljs.core.chunk_first.call(null,seq__46841_46887__$1);
var G__46889 = cljs.core.chunk_rest.call(null,seq__46841_46887__$1);
var G__46890 = c__45081__auto___46888;
var G__46891 = cljs.core.count.call(null,c__45081__auto___46888);
var G__46892 = (0);
seq__46841_46876 = G__46889;
chunk__46842_46877 = G__46890;
count__46843_46878 = G__46891;
i__46844_46879 = G__46892;
continue;
} else {
var c_46893 = cljs.core.first.call(null,seq__46841_46887__$1);
var class_name_46894 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46894,c_46893))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46894 === ""))?c_46893:[cljs.core.str(class_name_46894),cljs.core.str(" "),cljs.core.str(c_46893)].join('')));
}

var G__46895 = cljs.core.next.call(null,seq__46841_46887__$1);
var G__46896 = null;
var G__46897 = (0);
var G__46898 = (0);
seq__46841_46876 = G__46895;
chunk__46842_46877 = G__46896;
count__46843_46878 = G__46897;
i__46844_46879 = G__46898;
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
var seq__46845_46899 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__46846_46900 = null;
var count__46847_46901 = (0);
var i__46848_46902 = (0);
while(true){
if((i__46848_46902 < count__46847_46901)){
var c_46903 = cljs.core._nth.call(null,chunk__46846_46900,i__46848_46902);
dommy.core.add_class_BANG_.call(null,elem,c_46903);

var G__46904 = seq__46845_46899;
var G__46905 = chunk__46846_46900;
var G__46906 = count__46847_46901;
var G__46907 = (i__46848_46902 + (1));
seq__46845_46899 = G__46904;
chunk__46846_46900 = G__46905;
count__46847_46901 = G__46906;
i__46848_46902 = G__46907;
continue;
} else {
var temp__4657__auto___46908 = cljs.core.seq.call(null,seq__46845_46899);
if(temp__4657__auto___46908){
var seq__46845_46909__$1 = temp__4657__auto___46908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46845_46909__$1)){
var c__45081__auto___46910 = cljs.core.chunk_first.call(null,seq__46845_46909__$1);
var G__46911 = cljs.core.chunk_rest.call(null,seq__46845_46909__$1);
var G__46912 = c__45081__auto___46910;
var G__46913 = cljs.core.count.call(null,c__45081__auto___46910);
var G__46914 = (0);
seq__46845_46899 = G__46911;
chunk__46846_46900 = G__46912;
count__46847_46901 = G__46913;
i__46848_46902 = G__46914;
continue;
} else {
var c_46915 = cljs.core.first.call(null,seq__46845_46909__$1);
dommy.core.add_class_BANG_.call(null,elem,c_46915);

var G__46916 = cljs.core.next.call(null,seq__46845_46909__$1);
var G__46917 = null;
var G__46918 = (0);
var G__46919 = (0);
seq__46845_46899 = G__46916;
chunk__46846_46900 = G__46917;
count__46847_46901 = G__46918;
i__46848_46902 = G__46919;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq46832){
var G__46833 = cljs.core.first.call(null,seq46832);
var seq46832__$1 = cljs.core.next.call(null,seq46832);
var G__46834 = cljs.core.first.call(null,seq46832__$1);
var seq46832__$2 = cljs.core.next.call(null,seq46832__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46833,G__46834,seq46832__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args46920 = [];
var len__45375__auto___46930 = arguments.length;
var i__45376__auto___46931 = (0);
while(true){
if((i__45376__auto___46931 < len__45375__auto___46930)){
args46920.push((arguments[i__45376__auto___46931]));

var G__46932 = (i__45376__auto___46931 + (1));
i__45376__auto___46931 = G__46932;
continue;
} else {
}
break;
}

var G__46925 = args46920.length;
switch (G__46925) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args46920.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___46934 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46934)){
var class_list_46935 = temp__4655__auto___46934;
class_list_46935.remove(c__$1);
} else {
var class_name_46936 = dommy.core.class$.call(null,elem);
var new_class_name_46937 = dommy.utils.remove_class_str.call(null,class_name_46936,c__$1);
if((class_name_46936 === new_class_name_46937)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_46937);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__46926 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__46927 = null;
var count__46928 = (0);
var i__46929 = (0);
while(true){
if((i__46929 < count__46928)){
var c = cljs.core._nth.call(null,chunk__46927,i__46929);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__46938 = seq__46926;
var G__46939 = chunk__46927;
var G__46940 = count__46928;
var G__46941 = (i__46929 + (1));
seq__46926 = G__46938;
chunk__46927 = G__46939;
count__46928 = G__46940;
i__46929 = G__46941;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46926);
if(temp__4657__auto__){
var seq__46926__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46926__$1)){
var c__45081__auto__ = cljs.core.chunk_first.call(null,seq__46926__$1);
var G__46942 = cljs.core.chunk_rest.call(null,seq__46926__$1);
var G__46943 = c__45081__auto__;
var G__46944 = cljs.core.count.call(null,c__45081__auto__);
var G__46945 = (0);
seq__46926 = G__46942;
chunk__46927 = G__46943;
count__46928 = G__46944;
i__46929 = G__46945;
continue;
} else {
var c = cljs.core.first.call(null,seq__46926__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__46946 = cljs.core.next.call(null,seq__46926__$1);
var G__46947 = null;
var G__46948 = (0);
var G__46949 = (0);
seq__46926 = G__46946;
chunk__46927 = G__46947;
count__46928 = G__46948;
i__46929 = G__46949;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq46921){
var G__46922 = cljs.core.first.call(null,seq46921);
var seq46921__$1 = cljs.core.next.call(null,seq46921);
var G__46923 = cljs.core.first.call(null,seq46921__$1);
var seq46921__$2 = cljs.core.next.call(null,seq46921__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46922,G__46923,seq46921__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args46950 = [];
var len__45375__auto___46953 = arguments.length;
var i__45376__auto___46954 = (0);
while(true){
if((i__45376__auto___46954 < len__45375__auto___46953)){
args46950.push((arguments[i__45376__auto___46954]));

var G__46955 = (i__45376__auto___46954 + (1));
i__45376__auto___46954 = G__46955;
continue;
} else {
}
break;
}

var G__46952 = args46950.length;
switch (G__46952) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46950.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___46957 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46957)){
var class_list_46958 = temp__4655__auto___46957;
class_list_46958.toggle(c__$1);
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
var args46959 = [];
var len__45375__auto___46962 = arguments.length;
var i__45376__auto___46963 = (0);
while(true){
if((i__45376__auto___46963 < len__45375__auto___46962)){
args46959.push((arguments[i__45376__auto___46963]));

var G__46964 = (i__45376__auto___46963 + (1));
i__45376__auto___46963 = G__46964;
continue;
} else {
}
break;
}

var G__46961 = args46959.length;
switch (G__46961) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46959.length)].join('')));

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
var args46966 = [];
var len__45375__auto___46969 = arguments.length;
var i__45376__auto___46970 = (0);
while(true){
if((i__45376__auto___46970 < len__45375__auto___46969)){
args46966.push((arguments[i__45376__auto___46970]));

var G__46971 = (i__45376__auto___46970 + (1));
i__45376__auto___46970 = G__46971;
continue;
} else {
}
break;
}

var G__46968 = args46966.length;
switch (G__46968) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46966.length)].join('')));

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
var args46973 = [];
var len__45375__auto___46984 = arguments.length;
var i__45376__auto___46985 = (0);
while(true){
if((i__45376__auto___46985 < len__45375__auto___46984)){
args46973.push((arguments[i__45376__auto___46985]));

var G__46986 = (i__45376__auto___46985 + (1));
i__45376__auto___46985 = G__46986;
continue;
} else {
}
break;
}

var G__46978 = args46973.length;
switch (G__46978) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args46973.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__46979 = parent;
G__46979.appendChild(child);

return G__46979;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46980_46988 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46981_46989 = null;
var count__46982_46990 = (0);
var i__46983_46991 = (0);
while(true){
if((i__46983_46991 < count__46982_46990)){
var c_46992 = cljs.core._nth.call(null,chunk__46981_46989,i__46983_46991);
dommy.core.append_BANG_.call(null,parent,c_46992);

var G__46993 = seq__46980_46988;
var G__46994 = chunk__46981_46989;
var G__46995 = count__46982_46990;
var G__46996 = (i__46983_46991 + (1));
seq__46980_46988 = G__46993;
chunk__46981_46989 = G__46994;
count__46982_46990 = G__46995;
i__46983_46991 = G__46996;
continue;
} else {
var temp__4657__auto___46997 = cljs.core.seq.call(null,seq__46980_46988);
if(temp__4657__auto___46997){
var seq__46980_46998__$1 = temp__4657__auto___46997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46980_46998__$1)){
var c__45081__auto___46999 = cljs.core.chunk_first.call(null,seq__46980_46998__$1);
var G__47000 = cljs.core.chunk_rest.call(null,seq__46980_46998__$1);
var G__47001 = c__45081__auto___46999;
var G__47002 = cljs.core.count.call(null,c__45081__auto___46999);
var G__47003 = (0);
seq__46980_46988 = G__47000;
chunk__46981_46989 = G__47001;
count__46982_46990 = G__47002;
i__46983_46991 = G__47003;
continue;
} else {
var c_47004 = cljs.core.first.call(null,seq__46980_46998__$1);
dommy.core.append_BANG_.call(null,parent,c_47004);

var G__47005 = cljs.core.next.call(null,seq__46980_46998__$1);
var G__47006 = null;
var G__47007 = (0);
var G__47008 = (0);
seq__46980_46988 = G__47005;
chunk__46981_46989 = G__47006;
count__46982_46990 = G__47007;
i__46983_46991 = G__47008;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq46974){
var G__46975 = cljs.core.first.call(null,seq46974);
var seq46974__$1 = cljs.core.next.call(null,seq46974);
var G__46976 = cljs.core.first.call(null,seq46974__$1);
var seq46974__$2 = cljs.core.next.call(null,seq46974__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46975,G__46976,seq46974__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args47009 = [];
var len__45375__auto___47020 = arguments.length;
var i__45376__auto___47021 = (0);
while(true){
if((i__45376__auto___47021 < len__45375__auto___47020)){
args47009.push((arguments[i__45376__auto___47021]));

var G__47022 = (i__45376__auto___47021 + (1));
i__45376__auto___47021 = G__47022;
continue;
} else {
}
break;
}

var G__47014 = args47009.length;
switch (G__47014) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45394__auto__ = (new cljs.core.IndexedSeq(args47009.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45394__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__47015 = parent;
G__47015.insertBefore(child,parent.firstChild);

return G__47015;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__47016_47024 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__47017_47025 = null;
var count__47018_47026 = (0);
var i__47019_47027 = (0);
while(true){
if((i__47019_47027 < count__47018_47026)){
var c_47028 = cljs.core._nth.call(null,chunk__47017_47025,i__47019_47027);
dommy.core.prepend_BANG_.call(null,parent,c_47028);

var G__47029 = seq__47016_47024;
var G__47030 = chunk__47017_47025;
var G__47031 = count__47018_47026;
var G__47032 = (i__47019_47027 + (1));
seq__47016_47024 = G__47029;
chunk__47017_47025 = G__47030;
count__47018_47026 = G__47031;
i__47019_47027 = G__47032;
continue;
} else {
var temp__4657__auto___47033 = cljs.core.seq.call(null,seq__47016_47024);
if(temp__4657__auto___47033){
var seq__47016_47034__$1 = temp__4657__auto___47033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47016_47034__$1)){
var c__45081__auto___47035 = cljs.core.chunk_first.call(null,seq__47016_47034__$1);
var G__47036 = cljs.core.chunk_rest.call(null,seq__47016_47034__$1);
var G__47037 = c__45081__auto___47035;
var G__47038 = cljs.core.count.call(null,c__45081__auto___47035);
var G__47039 = (0);
seq__47016_47024 = G__47036;
chunk__47017_47025 = G__47037;
count__47018_47026 = G__47038;
i__47019_47027 = G__47039;
continue;
} else {
var c_47040 = cljs.core.first.call(null,seq__47016_47034__$1);
dommy.core.prepend_BANG_.call(null,parent,c_47040);

var G__47041 = cljs.core.next.call(null,seq__47016_47034__$1);
var G__47042 = null;
var G__47043 = (0);
var G__47044 = (0);
seq__47016_47024 = G__47041;
chunk__47017_47025 = G__47042;
count__47018_47026 = G__47043;
i__47019_47027 = G__47044;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq47010){
var G__47011 = cljs.core.first.call(null,seq47010);
var seq47010__$1 = cljs.core.next.call(null,seq47010);
var G__47012 = cljs.core.first.call(null,seq47010__$1);
var seq47010__$2 = cljs.core.next.call(null,seq47010__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47011,G__47012,seq47010__$2);
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
var temp__4655__auto___47045 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___47045)){
var next_47046 = temp__4655__auto___47045;
dommy.core.insert_before_BANG_.call(null,elem,next_47046);
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
var args47047 = [];
var len__45375__auto___47051 = arguments.length;
var i__45376__auto___47052 = (0);
while(true){
if((i__45376__auto___47052 < len__45375__auto___47051)){
args47047.push((arguments[i__45376__auto___47052]));

var G__47053 = (i__45376__auto___47052 + (1));
i__45376__auto___47052 = G__47053;
continue;
} else {
}
break;
}

var G__47049 = args47047.length;
switch (G__47049) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47047.length)].join('')));

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
var G__47050 = p;
G__47050.removeChild(elem);

return G__47050;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__47055){
var vec__47056 = p__47055;
var special_mouse_event = cljs.core.nth.call(null,vec__47056,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__47056,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__47056,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__47056,special_mouse_event,real_mouse_event){
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
;})(vec__47056,special_mouse_event,real_mouse_event))
});})(vec__47056,special_mouse_event,real_mouse_event))
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
var len__45375__auto___47062 = arguments.length;
var i__45376__auto___47063 = (0);
while(true){
if((i__45376__auto___47063 < len__45375__auto___47062)){
args__45382__auto__.push((arguments[i__45376__auto___47063]));

var G__47064 = (i__45376__auto___47063 + (1));
i__45376__auto___47063 = G__47064;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq47059){
var G__47060 = cljs.core.first.call(null,seq47059);
var seq47059__$1 = cljs.core.next.call(null,seq47059);
var G__47061 = cljs.core.first.call(null,seq47059__$1);
var seq47059__$2 = cljs.core.next.call(null,seq47059__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47060,G__47061,seq47059__$2);
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
var len__45375__auto___47104 = arguments.length;
var i__45376__auto___47105 = (0);
while(true){
if((i__45376__auto___47105 < len__45375__auto___47104)){
args__45382__auto__.push((arguments[i__45376__auto___47105]));

var G__47106 = (i__45376__auto___47105 + (1));
i__45376__auto___47105 = G__47106;
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

var vec__47067_47107 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47108 = cljs.core.nth.call(null,vec__47067_47107,(0),null);
var selector_47109 = cljs.core.nth.call(null,vec__47067_47107,(1),null);
var seq__47070_47110 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47077_47111 = null;
var count__47078_47112 = (0);
var i__47079_47113 = (0);
while(true){
if((i__47079_47113 < count__47078_47112)){
var vec__47086_47114 = cljs.core._nth.call(null,chunk__47077_47111,i__47079_47113);
var orig_type_47115 = cljs.core.nth.call(null,vec__47086_47114,(0),null);
var f_47116 = cljs.core.nth.call(null,vec__47086_47114,(1),null);
var seq__47080_47117 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47115,cljs.core.PersistentArrayMap.fromArray([orig_type_47115,cljs.core.identity], true, false)));
var chunk__47082_47118 = null;
var count__47083_47119 = (0);
var i__47084_47120 = (0);
while(true){
if((i__47084_47120 < count__47083_47119)){
var vec__47089_47121 = cljs.core._nth.call(null,chunk__47082_47118,i__47084_47120);
var actual_type_47122 = cljs.core.nth.call(null,vec__47089_47121,(0),null);
var factory_47123 = cljs.core.nth.call(null,vec__47089_47121,(1),null);
var canonical_f_47124 = (cljs.core.truth_(selector_47109)?cljs.core.partial.call(null,dommy.core.live_listener,elem_47108,selector_47109):cljs.core.identity).call(null,factory_47123.call(null,f_47116));
dommy.core.update_event_listeners_BANG_.call(null,elem_47108,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47109,actual_type_47122,f_47116], null),canonical_f_47124);

if(cljs.core.truth_(elem_47108.addEventListener)){
elem_47108.addEventListener(cljs.core.name.call(null,actual_type_47122),canonical_f_47124);
} else {
elem_47108.attachEvent(cljs.core.name.call(null,actual_type_47122),canonical_f_47124);
}

var G__47125 = seq__47080_47117;
var G__47126 = chunk__47082_47118;
var G__47127 = count__47083_47119;
var G__47128 = (i__47084_47120 + (1));
seq__47080_47117 = G__47125;
chunk__47082_47118 = G__47126;
count__47083_47119 = G__47127;
i__47084_47120 = G__47128;
continue;
} else {
var temp__4657__auto___47129 = cljs.core.seq.call(null,seq__47080_47117);
if(temp__4657__auto___47129){
var seq__47080_47130__$1 = temp__4657__auto___47129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47080_47130__$1)){
var c__45081__auto___47131 = cljs.core.chunk_first.call(null,seq__47080_47130__$1);
var G__47132 = cljs.core.chunk_rest.call(null,seq__47080_47130__$1);
var G__47133 = c__45081__auto___47131;
var G__47134 = cljs.core.count.call(null,c__45081__auto___47131);
var G__47135 = (0);
seq__47080_47117 = G__47132;
chunk__47082_47118 = G__47133;
count__47083_47119 = G__47134;
i__47084_47120 = G__47135;
continue;
} else {
var vec__47092_47136 = cljs.core.first.call(null,seq__47080_47130__$1);
var actual_type_47137 = cljs.core.nth.call(null,vec__47092_47136,(0),null);
var factory_47138 = cljs.core.nth.call(null,vec__47092_47136,(1),null);
var canonical_f_47139 = (cljs.core.truth_(selector_47109)?cljs.core.partial.call(null,dommy.core.live_listener,elem_47108,selector_47109):cljs.core.identity).call(null,factory_47138.call(null,f_47116));
dommy.core.update_event_listeners_BANG_.call(null,elem_47108,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47109,actual_type_47137,f_47116], null),canonical_f_47139);

if(cljs.core.truth_(elem_47108.addEventListener)){
elem_47108.addEventListener(cljs.core.name.call(null,actual_type_47137),canonical_f_47139);
} else {
elem_47108.attachEvent(cljs.core.name.call(null,actual_type_47137),canonical_f_47139);
}

var G__47140 = cljs.core.next.call(null,seq__47080_47130__$1);
var G__47141 = null;
var G__47142 = (0);
var G__47143 = (0);
seq__47080_47117 = G__47140;
chunk__47082_47118 = G__47141;
count__47083_47119 = G__47142;
i__47084_47120 = G__47143;
continue;
}
} else {
}
}
break;
}

var G__47144 = seq__47070_47110;
var G__47145 = chunk__47077_47111;
var G__47146 = count__47078_47112;
var G__47147 = (i__47079_47113 + (1));
seq__47070_47110 = G__47144;
chunk__47077_47111 = G__47145;
count__47078_47112 = G__47146;
i__47079_47113 = G__47147;
continue;
} else {
var temp__4657__auto___47148 = cljs.core.seq.call(null,seq__47070_47110);
if(temp__4657__auto___47148){
var seq__47070_47149__$1 = temp__4657__auto___47148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47070_47149__$1)){
var c__45081__auto___47150 = cljs.core.chunk_first.call(null,seq__47070_47149__$1);
var G__47151 = cljs.core.chunk_rest.call(null,seq__47070_47149__$1);
var G__47152 = c__45081__auto___47150;
var G__47153 = cljs.core.count.call(null,c__45081__auto___47150);
var G__47154 = (0);
seq__47070_47110 = G__47151;
chunk__47077_47111 = G__47152;
count__47078_47112 = G__47153;
i__47079_47113 = G__47154;
continue;
} else {
var vec__47095_47155 = cljs.core.first.call(null,seq__47070_47149__$1);
var orig_type_47156 = cljs.core.nth.call(null,vec__47095_47155,(0),null);
var f_47157 = cljs.core.nth.call(null,vec__47095_47155,(1),null);
var seq__47071_47158 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47156,cljs.core.PersistentArrayMap.fromArray([orig_type_47156,cljs.core.identity], true, false)));
var chunk__47073_47159 = null;
var count__47074_47160 = (0);
var i__47075_47161 = (0);
while(true){
if((i__47075_47161 < count__47074_47160)){
var vec__47098_47162 = cljs.core._nth.call(null,chunk__47073_47159,i__47075_47161);
var actual_type_47163 = cljs.core.nth.call(null,vec__47098_47162,(0),null);
var factory_47164 = cljs.core.nth.call(null,vec__47098_47162,(1),null);
var canonical_f_47165 = (cljs.core.truth_(selector_47109)?cljs.core.partial.call(null,dommy.core.live_listener,elem_47108,selector_47109):cljs.core.identity).call(null,factory_47164.call(null,f_47157));
dommy.core.update_event_listeners_BANG_.call(null,elem_47108,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47109,actual_type_47163,f_47157], null),canonical_f_47165);

if(cljs.core.truth_(elem_47108.addEventListener)){
elem_47108.addEventListener(cljs.core.name.call(null,actual_type_47163),canonical_f_47165);
} else {
elem_47108.attachEvent(cljs.core.name.call(null,actual_type_47163),canonical_f_47165);
}

var G__47166 = seq__47071_47158;
var G__47167 = chunk__47073_47159;
var G__47168 = count__47074_47160;
var G__47169 = (i__47075_47161 + (1));
seq__47071_47158 = G__47166;
chunk__47073_47159 = G__47167;
count__47074_47160 = G__47168;
i__47075_47161 = G__47169;
continue;
} else {
var temp__4657__auto___47170__$1 = cljs.core.seq.call(null,seq__47071_47158);
if(temp__4657__auto___47170__$1){
var seq__47071_47171__$1 = temp__4657__auto___47170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47071_47171__$1)){
var c__45081__auto___47172 = cljs.core.chunk_first.call(null,seq__47071_47171__$1);
var G__47173 = cljs.core.chunk_rest.call(null,seq__47071_47171__$1);
var G__47174 = c__45081__auto___47172;
var G__47175 = cljs.core.count.call(null,c__45081__auto___47172);
var G__47176 = (0);
seq__47071_47158 = G__47173;
chunk__47073_47159 = G__47174;
count__47074_47160 = G__47175;
i__47075_47161 = G__47176;
continue;
} else {
var vec__47101_47177 = cljs.core.first.call(null,seq__47071_47171__$1);
var actual_type_47178 = cljs.core.nth.call(null,vec__47101_47177,(0),null);
var factory_47179 = cljs.core.nth.call(null,vec__47101_47177,(1),null);
var canonical_f_47180 = (cljs.core.truth_(selector_47109)?cljs.core.partial.call(null,dommy.core.live_listener,elem_47108,selector_47109):cljs.core.identity).call(null,factory_47179.call(null,f_47157));
dommy.core.update_event_listeners_BANG_.call(null,elem_47108,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47109,actual_type_47178,f_47157], null),canonical_f_47180);

if(cljs.core.truth_(elem_47108.addEventListener)){
elem_47108.addEventListener(cljs.core.name.call(null,actual_type_47178),canonical_f_47180);
} else {
elem_47108.attachEvent(cljs.core.name.call(null,actual_type_47178),canonical_f_47180);
}

var G__47181 = cljs.core.next.call(null,seq__47071_47171__$1);
var G__47182 = null;
var G__47183 = (0);
var G__47184 = (0);
seq__47071_47158 = G__47181;
chunk__47073_47159 = G__47182;
count__47074_47160 = G__47183;
i__47075_47161 = G__47184;
continue;
}
} else {
}
}
break;
}

var G__47185 = cljs.core.next.call(null,seq__47070_47149__$1);
var G__47186 = null;
var G__47187 = (0);
var G__47188 = (0);
seq__47070_47110 = G__47185;
chunk__47077_47111 = G__47186;
count__47078_47112 = G__47187;
i__47079_47113 = G__47188;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq47065){
var G__47066 = cljs.core.first.call(null,seq47065);
var seq47065__$1 = cljs.core.next.call(null,seq47065);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47066,seq47065__$1);
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
var len__45375__auto___47228 = arguments.length;
var i__45376__auto___47229 = (0);
while(true){
if((i__45376__auto___47229 < len__45375__auto___47228)){
args__45382__auto__.push((arguments[i__45376__auto___47229]));

var G__47230 = (i__45376__auto___47229 + (1));
i__45376__auto___47229 = G__47230;
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

var vec__47191_47231 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47232 = cljs.core.nth.call(null,vec__47191_47231,(0),null);
var selector_47233 = cljs.core.nth.call(null,vec__47191_47231,(1),null);
var seq__47194_47234 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47201_47235 = null;
var count__47202_47236 = (0);
var i__47203_47237 = (0);
while(true){
if((i__47203_47237 < count__47202_47236)){
var vec__47210_47238 = cljs.core._nth.call(null,chunk__47201_47235,i__47203_47237);
var orig_type_47239 = cljs.core.nth.call(null,vec__47210_47238,(0),null);
var f_47240 = cljs.core.nth.call(null,vec__47210_47238,(1),null);
var seq__47204_47241 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47239,cljs.core.PersistentArrayMap.fromArray([orig_type_47239,cljs.core.identity], true, false)));
var chunk__47206_47242 = null;
var count__47207_47243 = (0);
var i__47208_47244 = (0);
while(true){
if((i__47208_47244 < count__47207_47243)){
var vec__47213_47245 = cljs.core._nth.call(null,chunk__47206_47242,i__47208_47244);
var actual_type_47246 = cljs.core.nth.call(null,vec__47213_47245,(0),null);
var __47247 = cljs.core.nth.call(null,vec__47213_47245,(1),null);
var keys_47248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47233,actual_type_47246,f_47240], null);
var canonical_f_47249 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47232),keys_47248);
dommy.core.update_event_listeners_BANG_.call(null,elem_47232,dommy.utils.dissoc_in,keys_47248);

if(cljs.core.truth_(elem_47232.removeEventListener)){
elem_47232.removeEventListener(cljs.core.name.call(null,actual_type_47246),canonical_f_47249);
} else {
elem_47232.detachEvent(cljs.core.name.call(null,actual_type_47246),canonical_f_47249);
}

var G__47250 = seq__47204_47241;
var G__47251 = chunk__47206_47242;
var G__47252 = count__47207_47243;
var G__47253 = (i__47208_47244 + (1));
seq__47204_47241 = G__47250;
chunk__47206_47242 = G__47251;
count__47207_47243 = G__47252;
i__47208_47244 = G__47253;
continue;
} else {
var temp__4657__auto___47254 = cljs.core.seq.call(null,seq__47204_47241);
if(temp__4657__auto___47254){
var seq__47204_47255__$1 = temp__4657__auto___47254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47204_47255__$1)){
var c__45081__auto___47256 = cljs.core.chunk_first.call(null,seq__47204_47255__$1);
var G__47257 = cljs.core.chunk_rest.call(null,seq__47204_47255__$1);
var G__47258 = c__45081__auto___47256;
var G__47259 = cljs.core.count.call(null,c__45081__auto___47256);
var G__47260 = (0);
seq__47204_47241 = G__47257;
chunk__47206_47242 = G__47258;
count__47207_47243 = G__47259;
i__47208_47244 = G__47260;
continue;
} else {
var vec__47216_47261 = cljs.core.first.call(null,seq__47204_47255__$1);
var actual_type_47262 = cljs.core.nth.call(null,vec__47216_47261,(0),null);
var __47263 = cljs.core.nth.call(null,vec__47216_47261,(1),null);
var keys_47264 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47233,actual_type_47262,f_47240], null);
var canonical_f_47265 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47232),keys_47264);
dommy.core.update_event_listeners_BANG_.call(null,elem_47232,dommy.utils.dissoc_in,keys_47264);

if(cljs.core.truth_(elem_47232.removeEventListener)){
elem_47232.removeEventListener(cljs.core.name.call(null,actual_type_47262),canonical_f_47265);
} else {
elem_47232.detachEvent(cljs.core.name.call(null,actual_type_47262),canonical_f_47265);
}

var G__47266 = cljs.core.next.call(null,seq__47204_47255__$1);
var G__47267 = null;
var G__47268 = (0);
var G__47269 = (0);
seq__47204_47241 = G__47266;
chunk__47206_47242 = G__47267;
count__47207_47243 = G__47268;
i__47208_47244 = G__47269;
continue;
}
} else {
}
}
break;
}

var G__47270 = seq__47194_47234;
var G__47271 = chunk__47201_47235;
var G__47272 = count__47202_47236;
var G__47273 = (i__47203_47237 + (1));
seq__47194_47234 = G__47270;
chunk__47201_47235 = G__47271;
count__47202_47236 = G__47272;
i__47203_47237 = G__47273;
continue;
} else {
var temp__4657__auto___47274 = cljs.core.seq.call(null,seq__47194_47234);
if(temp__4657__auto___47274){
var seq__47194_47275__$1 = temp__4657__auto___47274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47194_47275__$1)){
var c__45081__auto___47276 = cljs.core.chunk_first.call(null,seq__47194_47275__$1);
var G__47277 = cljs.core.chunk_rest.call(null,seq__47194_47275__$1);
var G__47278 = c__45081__auto___47276;
var G__47279 = cljs.core.count.call(null,c__45081__auto___47276);
var G__47280 = (0);
seq__47194_47234 = G__47277;
chunk__47201_47235 = G__47278;
count__47202_47236 = G__47279;
i__47203_47237 = G__47280;
continue;
} else {
var vec__47219_47281 = cljs.core.first.call(null,seq__47194_47275__$1);
var orig_type_47282 = cljs.core.nth.call(null,vec__47219_47281,(0),null);
var f_47283 = cljs.core.nth.call(null,vec__47219_47281,(1),null);
var seq__47195_47284 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47282,cljs.core.PersistentArrayMap.fromArray([orig_type_47282,cljs.core.identity], true, false)));
var chunk__47197_47285 = null;
var count__47198_47286 = (0);
var i__47199_47287 = (0);
while(true){
if((i__47199_47287 < count__47198_47286)){
var vec__47222_47288 = cljs.core._nth.call(null,chunk__47197_47285,i__47199_47287);
var actual_type_47289 = cljs.core.nth.call(null,vec__47222_47288,(0),null);
var __47290 = cljs.core.nth.call(null,vec__47222_47288,(1),null);
var keys_47291 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47233,actual_type_47289,f_47283], null);
var canonical_f_47292 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47232),keys_47291);
dommy.core.update_event_listeners_BANG_.call(null,elem_47232,dommy.utils.dissoc_in,keys_47291);

if(cljs.core.truth_(elem_47232.removeEventListener)){
elem_47232.removeEventListener(cljs.core.name.call(null,actual_type_47289),canonical_f_47292);
} else {
elem_47232.detachEvent(cljs.core.name.call(null,actual_type_47289),canonical_f_47292);
}

var G__47293 = seq__47195_47284;
var G__47294 = chunk__47197_47285;
var G__47295 = count__47198_47286;
var G__47296 = (i__47199_47287 + (1));
seq__47195_47284 = G__47293;
chunk__47197_47285 = G__47294;
count__47198_47286 = G__47295;
i__47199_47287 = G__47296;
continue;
} else {
var temp__4657__auto___47297__$1 = cljs.core.seq.call(null,seq__47195_47284);
if(temp__4657__auto___47297__$1){
var seq__47195_47298__$1 = temp__4657__auto___47297__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47195_47298__$1)){
var c__45081__auto___47299 = cljs.core.chunk_first.call(null,seq__47195_47298__$1);
var G__47300 = cljs.core.chunk_rest.call(null,seq__47195_47298__$1);
var G__47301 = c__45081__auto___47299;
var G__47302 = cljs.core.count.call(null,c__45081__auto___47299);
var G__47303 = (0);
seq__47195_47284 = G__47300;
chunk__47197_47285 = G__47301;
count__47198_47286 = G__47302;
i__47199_47287 = G__47303;
continue;
} else {
var vec__47225_47304 = cljs.core.first.call(null,seq__47195_47298__$1);
var actual_type_47305 = cljs.core.nth.call(null,vec__47225_47304,(0),null);
var __47306 = cljs.core.nth.call(null,vec__47225_47304,(1),null);
var keys_47307 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47233,actual_type_47305,f_47283], null);
var canonical_f_47308 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47232),keys_47307);
dommy.core.update_event_listeners_BANG_.call(null,elem_47232,dommy.utils.dissoc_in,keys_47307);

if(cljs.core.truth_(elem_47232.removeEventListener)){
elem_47232.removeEventListener(cljs.core.name.call(null,actual_type_47305),canonical_f_47308);
} else {
elem_47232.detachEvent(cljs.core.name.call(null,actual_type_47305),canonical_f_47308);
}

var G__47309 = cljs.core.next.call(null,seq__47195_47298__$1);
var G__47310 = null;
var G__47311 = (0);
var G__47312 = (0);
seq__47195_47284 = G__47309;
chunk__47197_47285 = G__47310;
count__47198_47286 = G__47311;
i__47199_47287 = G__47312;
continue;
}
} else {
}
}
break;
}

var G__47313 = cljs.core.next.call(null,seq__47194_47275__$1);
var G__47314 = null;
var G__47315 = (0);
var G__47316 = (0);
seq__47194_47234 = G__47313;
chunk__47201_47235 = G__47314;
count__47202_47236 = G__47315;
i__47203_47237 = G__47316;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq47189){
var G__47190 = cljs.core.first.call(null,seq47189);
var seq47189__$1 = cljs.core.next.call(null,seq47189);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47190,seq47189__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___47332 = arguments.length;
var i__45376__auto___47333 = (0);
while(true){
if((i__45376__auto___47333 < len__45375__auto___47332)){
args__45382__auto__.push((arguments[i__45376__auto___47333]));

var G__47334 = (i__45376__auto___47333 + (1));
i__45376__auto___47333 = G__47334;
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

var vec__47319_47335 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47336 = cljs.core.nth.call(null,vec__47319_47335,(0),null);
var selector_47337 = cljs.core.nth.call(null,vec__47319_47335,(1),null);
var seq__47322_47338 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47323_47339 = null;
var count__47324_47340 = (0);
var i__47325_47341 = (0);
while(true){
if((i__47325_47341 < count__47324_47340)){
var vec__47326_47342 = cljs.core._nth.call(null,chunk__47323_47339,i__47325_47341);
var type_47343 = cljs.core.nth.call(null,vec__47326_47342,(0),null);
var f_47344 = cljs.core.nth.call(null,vec__47326_47342,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47343,((function (seq__47322_47338,chunk__47323_47339,count__47324_47340,i__47325_47341,vec__47326_47342,type_47343,f_47344,vec__47319_47335,elem_47336,selector_47337){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47343,dommy$core$this_fn);

return f_47344.call(null,e);
});})(seq__47322_47338,chunk__47323_47339,count__47324_47340,i__47325_47341,vec__47326_47342,type_47343,f_47344,vec__47319_47335,elem_47336,selector_47337))
);

var G__47345 = seq__47322_47338;
var G__47346 = chunk__47323_47339;
var G__47347 = count__47324_47340;
var G__47348 = (i__47325_47341 + (1));
seq__47322_47338 = G__47345;
chunk__47323_47339 = G__47346;
count__47324_47340 = G__47347;
i__47325_47341 = G__47348;
continue;
} else {
var temp__4657__auto___47349 = cljs.core.seq.call(null,seq__47322_47338);
if(temp__4657__auto___47349){
var seq__47322_47350__$1 = temp__4657__auto___47349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47322_47350__$1)){
var c__45081__auto___47351 = cljs.core.chunk_first.call(null,seq__47322_47350__$1);
var G__47352 = cljs.core.chunk_rest.call(null,seq__47322_47350__$1);
var G__47353 = c__45081__auto___47351;
var G__47354 = cljs.core.count.call(null,c__45081__auto___47351);
var G__47355 = (0);
seq__47322_47338 = G__47352;
chunk__47323_47339 = G__47353;
count__47324_47340 = G__47354;
i__47325_47341 = G__47355;
continue;
} else {
var vec__47329_47356 = cljs.core.first.call(null,seq__47322_47350__$1);
var type_47357 = cljs.core.nth.call(null,vec__47329_47356,(0),null);
var f_47358 = cljs.core.nth.call(null,vec__47329_47356,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47357,((function (seq__47322_47338,chunk__47323_47339,count__47324_47340,i__47325_47341,vec__47329_47356,type_47357,f_47358,seq__47322_47350__$1,temp__4657__auto___47349,vec__47319_47335,elem_47336,selector_47337){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47357,dommy$core$this_fn);

return f_47358.call(null,e);
});})(seq__47322_47338,chunk__47323_47339,count__47324_47340,i__47325_47341,vec__47329_47356,type_47357,f_47358,seq__47322_47350__$1,temp__4657__auto___47349,vec__47319_47335,elem_47336,selector_47337))
);

var G__47359 = cljs.core.next.call(null,seq__47322_47350__$1);
var G__47360 = null;
var G__47361 = (0);
var G__47362 = (0);
seq__47322_47338 = G__47359;
chunk__47323_47339 = G__47360;
count__47324_47340 = G__47361;
i__47325_47341 = G__47362;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq47317){
var G__47318 = cljs.core.first.call(null,seq47317);
var seq47317__$1 = cljs.core.next.call(null,seq47317);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47318,seq47317__$1);
});


//# sourceMappingURL=core.js.map?rel=1476916465189