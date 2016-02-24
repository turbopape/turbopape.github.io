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
var args14804 = [];
var len__14245__auto___14807 = arguments.length;
var i__14246__auto___14808 = (0);
while(true){
if((i__14246__auto___14808 < len__14245__auto___14807)){
args14804.push((arguments[i__14246__auto___14808]));

var G__14809 = (i__14246__auto___14808 + (1));
i__14246__auto___14808 = G__14809;
continue;
} else {
}
break;
}

var G__14806 = args14804.length;
switch (G__14806) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14804.length)].join('')));

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
var args14811 = [];
var len__14245__auto___14814 = arguments.length;
var i__14246__auto___14815 = (0);
while(true){
if((i__14246__auto___14815 < len__14245__auto___14814)){
args14811.push((arguments[i__14246__auto___14815]));

var G__14816 = (i__14246__auto___14815 + (1));
i__14246__auto___14815 = G__14816;
continue;
} else {
}
break;
}

var G__14813 = args14811.length;
switch (G__14813) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14811.length)].join('')));

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
var args14819 = [];
var len__14245__auto___14822 = arguments.length;
var i__14246__auto___14823 = (0);
while(true){
if((i__14246__auto___14823 < len__14245__auto___14822)){
args14819.push((arguments[i__14246__auto___14823]));

var G__14824 = (i__14246__auto___14823 + (1));
i__14246__auto___14823 = G__14824;
continue;
} else {
}
break;
}

var G__14821 = args14819.length;
switch (G__14821) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14819.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__14818_SHARP_){
return !((p1__14818_SHARP_ === base));
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
var len__14245__auto___14834 = arguments.length;
var i__14246__auto___14835 = (0);
while(true){
if((i__14246__auto___14835 < len__14245__auto___14834)){
args__14252__auto__.push((arguments[i__14246__auto___14835]));

var G__14836 = (i__14246__auto___14835 + (1));
i__14246__auto___14835 = G__14836;
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
var seq__14828_14837 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14829_14838 = null;
var count__14830_14839 = (0);
var i__14831_14840 = (0);
while(true){
if((i__14831_14840 < count__14830_14839)){
var vec__14832_14841 = cljs.core._nth.call(null,chunk__14829_14838,i__14831_14840);
var k_14842 = cljs.core.nth.call(null,vec__14832_14841,(0),null);
var v_14843 = cljs.core.nth.call(null,vec__14832_14841,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14842),v_14843);

var G__14844 = seq__14828_14837;
var G__14845 = chunk__14829_14838;
var G__14846 = count__14830_14839;
var G__14847 = (i__14831_14840 + (1));
seq__14828_14837 = G__14844;
chunk__14829_14838 = G__14845;
count__14830_14839 = G__14846;
i__14831_14840 = G__14847;
continue;
} else {
var temp__4657__auto___14848 = cljs.core.seq.call(null,seq__14828_14837);
if(temp__4657__auto___14848){
var seq__14828_14849__$1 = temp__4657__auto___14848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14828_14849__$1)){
var c__13990__auto___14850 = cljs.core.chunk_first.call(null,seq__14828_14849__$1);
var G__14851 = cljs.core.chunk_rest.call(null,seq__14828_14849__$1);
var G__14852 = c__13990__auto___14850;
var G__14853 = cljs.core.count.call(null,c__13990__auto___14850);
var G__14854 = (0);
seq__14828_14837 = G__14851;
chunk__14829_14838 = G__14852;
count__14830_14839 = G__14853;
i__14831_14840 = G__14854;
continue;
} else {
var vec__14833_14855 = cljs.core.first.call(null,seq__14828_14849__$1);
var k_14856 = cljs.core.nth.call(null,vec__14833_14855,(0),null);
var v_14857 = cljs.core.nth.call(null,vec__14833_14855,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14856),v_14857);

var G__14858 = cljs.core.next.call(null,seq__14828_14849__$1);
var G__14859 = null;
var G__14860 = (0);
var G__14861 = (0);
seq__14828_14837 = G__14858;
chunk__14829_14838 = G__14859;
count__14830_14839 = G__14860;
i__14831_14840 = G__14861;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14826){
var G__14827 = cljs.core.first.call(null,seq14826);
var seq14826__$1 = cljs.core.next.call(null,seq14826);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14827,seq14826__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14868 = arguments.length;
var i__14246__auto___14869 = (0);
while(true){
if((i__14246__auto___14869 < len__14245__auto___14868)){
args__14252__auto__.push((arguments[i__14246__auto___14869]));

var G__14870 = (i__14246__auto___14869 + (1));
i__14246__auto___14869 = G__14870;
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
var seq__14864_14871 = cljs.core.seq.call(null,keywords);
var chunk__14865_14872 = null;
var count__14866_14873 = (0);
var i__14867_14874 = (0);
while(true){
if((i__14867_14874 < count__14866_14873)){
var kw_14875 = cljs.core._nth.call(null,chunk__14865_14872,i__14867_14874);
style.removeProperty(dommy.utils.as_str.call(null,kw_14875));

var G__14876 = seq__14864_14871;
var G__14877 = chunk__14865_14872;
var G__14878 = count__14866_14873;
var G__14879 = (i__14867_14874 + (1));
seq__14864_14871 = G__14876;
chunk__14865_14872 = G__14877;
count__14866_14873 = G__14878;
i__14867_14874 = G__14879;
continue;
} else {
var temp__4657__auto___14880 = cljs.core.seq.call(null,seq__14864_14871);
if(temp__4657__auto___14880){
var seq__14864_14881__$1 = temp__4657__auto___14880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14864_14881__$1)){
var c__13990__auto___14882 = cljs.core.chunk_first.call(null,seq__14864_14881__$1);
var G__14883 = cljs.core.chunk_rest.call(null,seq__14864_14881__$1);
var G__14884 = c__13990__auto___14882;
var G__14885 = cljs.core.count.call(null,c__13990__auto___14882);
var G__14886 = (0);
seq__14864_14871 = G__14883;
chunk__14865_14872 = G__14884;
count__14866_14873 = G__14885;
i__14867_14874 = G__14886;
continue;
} else {
var kw_14887 = cljs.core.first.call(null,seq__14864_14881__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_14887));

var G__14888 = cljs.core.next.call(null,seq__14864_14881__$1);
var G__14889 = null;
var G__14890 = (0);
var G__14891 = (0);
seq__14864_14871 = G__14888;
chunk__14865_14872 = G__14889;
count__14866_14873 = G__14890;
i__14867_14874 = G__14891;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14862){
var G__14863 = cljs.core.first.call(null,seq14862);
var seq14862__$1 = cljs.core.next.call(null,seq14862);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14863,seq14862__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14900 = arguments.length;
var i__14246__auto___14901 = (0);
while(true){
if((i__14246__auto___14901 < len__14245__auto___14900)){
args__14252__auto__.push((arguments[i__14246__auto___14901]));

var G__14902 = (i__14246__auto___14901 + (1));
i__14246__auto___14901 = G__14902;
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

var seq__14894_14903 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14895_14904 = null;
var count__14896_14905 = (0);
var i__14897_14906 = (0);
while(true){
if((i__14897_14906 < count__14896_14905)){
var vec__14898_14907 = cljs.core._nth.call(null,chunk__14895_14904,i__14897_14906);
var k_14908 = cljs.core.nth.call(null,vec__14898_14907,(0),null);
var v_14909 = cljs.core.nth.call(null,vec__14898_14907,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14908,[cljs.core.str(v_14909),cljs.core.str("px")].join(''));

var G__14910 = seq__14894_14903;
var G__14911 = chunk__14895_14904;
var G__14912 = count__14896_14905;
var G__14913 = (i__14897_14906 + (1));
seq__14894_14903 = G__14910;
chunk__14895_14904 = G__14911;
count__14896_14905 = G__14912;
i__14897_14906 = G__14913;
continue;
} else {
var temp__4657__auto___14914 = cljs.core.seq.call(null,seq__14894_14903);
if(temp__4657__auto___14914){
var seq__14894_14915__$1 = temp__4657__auto___14914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14894_14915__$1)){
var c__13990__auto___14916 = cljs.core.chunk_first.call(null,seq__14894_14915__$1);
var G__14917 = cljs.core.chunk_rest.call(null,seq__14894_14915__$1);
var G__14918 = c__13990__auto___14916;
var G__14919 = cljs.core.count.call(null,c__13990__auto___14916);
var G__14920 = (0);
seq__14894_14903 = G__14917;
chunk__14895_14904 = G__14918;
count__14896_14905 = G__14919;
i__14897_14906 = G__14920;
continue;
} else {
var vec__14899_14921 = cljs.core.first.call(null,seq__14894_14915__$1);
var k_14922 = cljs.core.nth.call(null,vec__14899_14921,(0),null);
var v_14923 = cljs.core.nth.call(null,vec__14899_14921,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14922,[cljs.core.str(v_14923),cljs.core.str("px")].join(''));

var G__14924 = cljs.core.next.call(null,seq__14894_14915__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14894_14903 = G__14924;
chunk__14895_14904 = G__14925;
count__14896_14905 = G__14926;
i__14897_14906 = G__14927;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14892){
var G__14893 = cljs.core.first.call(null,seq14892);
var seq14892__$1 = cljs.core.next.call(null,seq14892);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14893,seq14892__$1);
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
var args14928 = [];
var len__14245__auto___14943 = arguments.length;
var i__14246__auto___14944 = (0);
while(true){
if((i__14246__auto___14944 < len__14245__auto___14943)){
args14928.push((arguments[i__14246__auto___14944]));

var G__14945 = (i__14246__auto___14944 + (1));
i__14246__auto___14944 = G__14945;
continue;
} else {
}
break;
}

var G__14934 = args14928.length;
switch (G__14934) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14928.slice((3)),(0)));
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
var G__14935 = elem;
(G__14935[k__$1] = v);

return G__14935;
} else {
var G__14936 = elem;
G__14936.setAttribute(k__$1,v);

return G__14936;
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

var seq__14937_14947 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__14938_14948 = null;
var count__14939_14949 = (0);
var i__14940_14950 = (0);
while(true){
if((i__14940_14950 < count__14939_14949)){
var vec__14941_14951 = cljs.core._nth.call(null,chunk__14938_14948,i__14940_14950);
var k_14952__$1 = cljs.core.nth.call(null,vec__14941_14951,(0),null);
var v_14953__$1 = cljs.core.nth.call(null,vec__14941_14951,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14952__$1,v_14953__$1);

var G__14954 = seq__14937_14947;
var G__14955 = chunk__14938_14948;
var G__14956 = count__14939_14949;
var G__14957 = (i__14940_14950 + (1));
seq__14937_14947 = G__14954;
chunk__14938_14948 = G__14955;
count__14939_14949 = G__14956;
i__14940_14950 = G__14957;
continue;
} else {
var temp__4657__auto___14958 = cljs.core.seq.call(null,seq__14937_14947);
if(temp__4657__auto___14958){
var seq__14937_14959__$1 = temp__4657__auto___14958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14937_14959__$1)){
var c__13990__auto___14960 = cljs.core.chunk_first.call(null,seq__14937_14959__$1);
var G__14961 = cljs.core.chunk_rest.call(null,seq__14937_14959__$1);
var G__14962 = c__13990__auto___14960;
var G__14963 = cljs.core.count.call(null,c__13990__auto___14960);
var G__14964 = (0);
seq__14937_14947 = G__14961;
chunk__14938_14948 = G__14962;
count__14939_14949 = G__14963;
i__14940_14950 = G__14964;
continue;
} else {
var vec__14942_14965 = cljs.core.first.call(null,seq__14937_14959__$1);
var k_14966__$1 = cljs.core.nth.call(null,vec__14942_14965,(0),null);
var v_14967__$1 = cljs.core.nth.call(null,vec__14942_14965,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14966__$1,v_14967__$1);

var G__14968 = cljs.core.next.call(null,seq__14937_14959__$1);
var G__14969 = null;
var G__14970 = (0);
var G__14971 = (0);
seq__14937_14947 = G__14968;
chunk__14938_14948 = G__14969;
count__14939_14949 = G__14970;
i__14940_14950 = G__14971;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14929){
var G__14930 = cljs.core.first.call(null,seq14929);
var seq14929__$1 = cljs.core.next.call(null,seq14929);
var G__14931 = cljs.core.first.call(null,seq14929__$1);
var seq14929__$2 = cljs.core.next.call(null,seq14929__$1);
var G__14932 = cljs.core.first.call(null,seq14929__$2);
var seq14929__$3 = cljs.core.next.call(null,seq14929__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14930,G__14931,G__14932,seq14929__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args14972 = [];
var len__14245__auto___14982 = arguments.length;
var i__14246__auto___14983 = (0);
while(true){
if((i__14246__auto___14983 < len__14245__auto___14982)){
args14972.push((arguments[i__14246__auto___14983]));

var G__14984 = (i__14246__auto___14983 + (1));
i__14246__auto___14983 = G__14984;
continue;
} else {
}
break;
}

var G__14977 = args14972.length;
switch (G__14977) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14972.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_14986__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_14986__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_14986__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14978_14987 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__14979_14988 = null;
var count__14980_14989 = (0);
var i__14981_14990 = (0);
while(true){
if((i__14981_14990 < count__14980_14989)){
var k_14991__$1 = cljs.core._nth.call(null,chunk__14979_14988,i__14981_14990);
dommy.core.remove_attr_BANG_.call(null,elem,k_14991__$1);

var G__14992 = seq__14978_14987;
var G__14993 = chunk__14979_14988;
var G__14994 = count__14980_14989;
var G__14995 = (i__14981_14990 + (1));
seq__14978_14987 = G__14992;
chunk__14979_14988 = G__14993;
count__14980_14989 = G__14994;
i__14981_14990 = G__14995;
continue;
} else {
var temp__4657__auto___14996 = cljs.core.seq.call(null,seq__14978_14987);
if(temp__4657__auto___14996){
var seq__14978_14997__$1 = temp__4657__auto___14996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14978_14997__$1)){
var c__13990__auto___14998 = cljs.core.chunk_first.call(null,seq__14978_14997__$1);
var G__14999 = cljs.core.chunk_rest.call(null,seq__14978_14997__$1);
var G__15000 = c__13990__auto___14998;
var G__15001 = cljs.core.count.call(null,c__13990__auto___14998);
var G__15002 = (0);
seq__14978_14987 = G__14999;
chunk__14979_14988 = G__15000;
count__14980_14989 = G__15001;
i__14981_14990 = G__15002;
continue;
} else {
var k_15003__$1 = cljs.core.first.call(null,seq__14978_14997__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_15003__$1);

var G__15004 = cljs.core.next.call(null,seq__14978_14997__$1);
var G__15005 = null;
var G__15006 = (0);
var G__15007 = (0);
seq__14978_14987 = G__15004;
chunk__14979_14988 = G__15005;
count__14980_14989 = G__15006;
i__14981_14990 = G__15007;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14973){
var G__14974 = cljs.core.first.call(null,seq14973);
var seq14973__$1 = cljs.core.next.call(null,seq14973);
var G__14975 = cljs.core.first.call(null,seq14973__$1);
var seq14973__$2 = cljs.core.next.call(null,seq14973__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14974,G__14975,seq14973__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args15008 = [];
var len__14245__auto___15011 = arguments.length;
var i__14246__auto___15012 = (0);
while(true){
if((i__14246__auto___15012 < len__14245__auto___15011)){
args15008.push((arguments[i__14246__auto___15012]));

var G__15013 = (i__14246__auto___15012 + (1));
i__14246__auto___15012 = G__15013;
continue;
} else {
}
break;
}

var G__15010 = args15008.length;
switch (G__15010) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15008.length)].join('')));

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
var args15015 = [];
var len__14245__auto___15033 = arguments.length;
var i__14246__auto___15034 = (0);
while(true){
if((i__14246__auto___15034 < len__14245__auto___15033)){
args15015.push((arguments[i__14246__auto___15034]));

var G__15035 = (i__14246__auto___15034 + (1));
i__14246__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var G__15020 = args15015.length;
switch (G__15020) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15015.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___15037 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15037)){
var class_list_15038 = temp__4655__auto___15037;
var seq__15021_15039 = cljs.core.seq.call(null,classes__$1);
var chunk__15022_15040 = null;
var count__15023_15041 = (0);
var i__15024_15042 = (0);
while(true){
if((i__15024_15042 < count__15023_15041)){
var c_15043 = cljs.core._nth.call(null,chunk__15022_15040,i__15024_15042);
class_list_15038.add(c_15043);

var G__15044 = seq__15021_15039;
var G__15045 = chunk__15022_15040;
var G__15046 = count__15023_15041;
var G__15047 = (i__15024_15042 + (1));
seq__15021_15039 = G__15044;
chunk__15022_15040 = G__15045;
count__15023_15041 = G__15046;
i__15024_15042 = G__15047;
continue;
} else {
var temp__4657__auto___15048 = cljs.core.seq.call(null,seq__15021_15039);
if(temp__4657__auto___15048){
var seq__15021_15049__$1 = temp__4657__auto___15048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15021_15049__$1)){
var c__13990__auto___15050 = cljs.core.chunk_first.call(null,seq__15021_15049__$1);
var G__15051 = cljs.core.chunk_rest.call(null,seq__15021_15049__$1);
var G__15052 = c__13990__auto___15050;
var G__15053 = cljs.core.count.call(null,c__13990__auto___15050);
var G__15054 = (0);
seq__15021_15039 = G__15051;
chunk__15022_15040 = G__15052;
count__15023_15041 = G__15053;
i__15024_15042 = G__15054;
continue;
} else {
var c_15055 = cljs.core.first.call(null,seq__15021_15049__$1);
class_list_15038.add(c_15055);

var G__15056 = cljs.core.next.call(null,seq__15021_15049__$1);
var G__15057 = null;
var G__15058 = (0);
var G__15059 = (0);
seq__15021_15039 = G__15056;
chunk__15022_15040 = G__15057;
count__15023_15041 = G__15058;
i__15024_15042 = G__15059;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15025_15060 = cljs.core.seq.call(null,classes__$1);
var chunk__15026_15061 = null;
var count__15027_15062 = (0);
var i__15028_15063 = (0);
while(true){
if((i__15028_15063 < count__15027_15062)){
var c_15064 = cljs.core._nth.call(null,chunk__15026_15061,i__15028_15063);
var class_name_15065 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_15065,c_15064))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_15065 === ""))?c_15064:[cljs.core.str(class_name_15065),cljs.core.str(" "),cljs.core.str(c_15064)].join('')));
}

var G__15066 = seq__15025_15060;
var G__15067 = chunk__15026_15061;
var G__15068 = count__15027_15062;
var G__15069 = (i__15028_15063 + (1));
seq__15025_15060 = G__15066;
chunk__15026_15061 = G__15067;
count__15027_15062 = G__15068;
i__15028_15063 = G__15069;
continue;
} else {
var temp__4657__auto___15070 = cljs.core.seq.call(null,seq__15025_15060);
if(temp__4657__auto___15070){
var seq__15025_15071__$1 = temp__4657__auto___15070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15025_15071__$1)){
var c__13990__auto___15072 = cljs.core.chunk_first.call(null,seq__15025_15071__$1);
var G__15073 = cljs.core.chunk_rest.call(null,seq__15025_15071__$1);
var G__15074 = c__13990__auto___15072;
var G__15075 = cljs.core.count.call(null,c__13990__auto___15072);
var G__15076 = (0);
seq__15025_15060 = G__15073;
chunk__15026_15061 = G__15074;
count__15027_15062 = G__15075;
i__15028_15063 = G__15076;
continue;
} else {
var c_15077 = cljs.core.first.call(null,seq__15025_15071__$1);
var class_name_15078 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_15078,c_15077))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_15078 === ""))?c_15077:[cljs.core.str(class_name_15078),cljs.core.str(" "),cljs.core.str(c_15077)].join('')));
}

var G__15079 = cljs.core.next.call(null,seq__15025_15071__$1);
var G__15080 = null;
var G__15081 = (0);
var G__15082 = (0);
seq__15025_15060 = G__15079;
chunk__15026_15061 = G__15080;
count__15027_15062 = G__15081;
i__15028_15063 = G__15082;
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
var seq__15029_15083 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__15030_15084 = null;
var count__15031_15085 = (0);
var i__15032_15086 = (0);
while(true){
if((i__15032_15086 < count__15031_15085)){
var c_15087 = cljs.core._nth.call(null,chunk__15030_15084,i__15032_15086);
dommy.core.add_class_BANG_.call(null,elem,c_15087);

var G__15088 = seq__15029_15083;
var G__15089 = chunk__15030_15084;
var G__15090 = count__15031_15085;
var G__15091 = (i__15032_15086 + (1));
seq__15029_15083 = G__15088;
chunk__15030_15084 = G__15089;
count__15031_15085 = G__15090;
i__15032_15086 = G__15091;
continue;
} else {
var temp__4657__auto___15092 = cljs.core.seq.call(null,seq__15029_15083);
if(temp__4657__auto___15092){
var seq__15029_15093__$1 = temp__4657__auto___15092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15029_15093__$1)){
var c__13990__auto___15094 = cljs.core.chunk_first.call(null,seq__15029_15093__$1);
var G__15095 = cljs.core.chunk_rest.call(null,seq__15029_15093__$1);
var G__15096 = c__13990__auto___15094;
var G__15097 = cljs.core.count.call(null,c__13990__auto___15094);
var G__15098 = (0);
seq__15029_15083 = G__15095;
chunk__15030_15084 = G__15096;
count__15031_15085 = G__15097;
i__15032_15086 = G__15098;
continue;
} else {
var c_15099 = cljs.core.first.call(null,seq__15029_15093__$1);
dommy.core.add_class_BANG_.call(null,elem,c_15099);

var G__15100 = cljs.core.next.call(null,seq__15029_15093__$1);
var G__15101 = null;
var G__15102 = (0);
var G__15103 = (0);
seq__15029_15083 = G__15100;
chunk__15030_15084 = G__15101;
count__15031_15085 = G__15102;
i__15032_15086 = G__15103;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15016){
var G__15017 = cljs.core.first.call(null,seq15016);
var seq15016__$1 = cljs.core.next.call(null,seq15016);
var G__15018 = cljs.core.first.call(null,seq15016__$1);
var seq15016__$2 = cljs.core.next.call(null,seq15016__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15017,G__15018,seq15016__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args15104 = [];
var len__14245__auto___15114 = arguments.length;
var i__14246__auto___15115 = (0);
while(true){
if((i__14246__auto___15115 < len__14245__auto___15114)){
args15104.push((arguments[i__14246__auto___15115]));

var G__15116 = (i__14246__auto___15115 + (1));
i__14246__auto___15115 = G__15116;
continue;
} else {
}
break;
}

var G__15109 = args15104.length;
switch (G__15109) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15104.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___15118 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15118)){
var class_list_15119 = temp__4655__auto___15118;
class_list_15119.remove(c__$1);
} else {
var class_name_15120 = dommy.core.class$.call(null,elem);
var new_class_name_15121 = dommy.utils.remove_class_str.call(null,class_name_15120,c__$1);
if((class_name_15120 === new_class_name_15121)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_15121);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15110 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__15111 = null;
var count__15112 = (0);
var i__15113 = (0);
while(true){
if((i__15113 < count__15112)){
var c = cljs.core._nth.call(null,chunk__15111,i__15113);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__15122 = seq__15110;
var G__15123 = chunk__15111;
var G__15124 = count__15112;
var G__15125 = (i__15113 + (1));
seq__15110 = G__15122;
chunk__15111 = G__15123;
count__15112 = G__15124;
i__15113 = G__15125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15110);
if(temp__4657__auto__){
var seq__15110__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15110__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__15110__$1);
var G__15126 = cljs.core.chunk_rest.call(null,seq__15110__$1);
var G__15127 = c__13990__auto__;
var G__15128 = cljs.core.count.call(null,c__13990__auto__);
var G__15129 = (0);
seq__15110 = G__15126;
chunk__15111 = G__15127;
count__15112 = G__15128;
i__15113 = G__15129;
continue;
} else {
var c = cljs.core.first.call(null,seq__15110__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__15130 = cljs.core.next.call(null,seq__15110__$1);
var G__15131 = null;
var G__15132 = (0);
var G__15133 = (0);
seq__15110 = G__15130;
chunk__15111 = G__15131;
count__15112 = G__15132;
i__15113 = G__15133;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15105){
var G__15106 = cljs.core.first.call(null,seq15105);
var seq15105__$1 = cljs.core.next.call(null,seq15105);
var G__15107 = cljs.core.first.call(null,seq15105__$1);
var seq15105__$2 = cljs.core.next.call(null,seq15105__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15106,G__15107,seq15105__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args15134 = [];
var len__14245__auto___15137 = arguments.length;
var i__14246__auto___15138 = (0);
while(true){
if((i__14246__auto___15138 < len__14245__auto___15137)){
args15134.push((arguments[i__14246__auto___15138]));

var G__15139 = (i__14246__auto___15138 + (1));
i__14246__auto___15138 = G__15139;
continue;
} else {
}
break;
}

var G__15136 = args15134.length;
switch (G__15136) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15134.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___15141 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15141)){
var class_list_15142 = temp__4655__auto___15141;
class_list_15142.toggle(c__$1);
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
var args15143 = [];
var len__14245__auto___15146 = arguments.length;
var i__14246__auto___15147 = (0);
while(true){
if((i__14246__auto___15147 < len__14245__auto___15146)){
args15143.push((arguments[i__14246__auto___15147]));

var G__15148 = (i__14246__auto___15147 + (1));
i__14246__auto___15147 = G__15148;
continue;
} else {
}
break;
}

var G__15145 = args15143.length;
switch (G__15145) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15143.length)].join('')));

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
var args15150 = [];
var len__14245__auto___15153 = arguments.length;
var i__14246__auto___15154 = (0);
while(true){
if((i__14246__auto___15154 < len__14245__auto___15153)){
args15150.push((arguments[i__14246__auto___15154]));

var G__15155 = (i__14246__auto___15154 + (1));
i__14246__auto___15154 = G__15155;
continue;
} else {
}
break;
}

var G__15152 = args15150.length;
switch (G__15152) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15150.length)].join('')));

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
var args15157 = [];
var len__14245__auto___15168 = arguments.length;
var i__14246__auto___15169 = (0);
while(true){
if((i__14246__auto___15169 < len__14245__auto___15168)){
args15157.push((arguments[i__14246__auto___15169]));

var G__15170 = (i__14246__auto___15169 + (1));
i__14246__auto___15169 = G__15170;
continue;
} else {
}
break;
}

var G__15162 = args15157.length;
switch (G__15162) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15157.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15163 = parent;
G__15163.appendChild(child);

return G__15163;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15164_15172 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__15165_15173 = null;
var count__15166_15174 = (0);
var i__15167_15175 = (0);
while(true){
if((i__15167_15175 < count__15166_15174)){
var c_15176 = cljs.core._nth.call(null,chunk__15165_15173,i__15167_15175);
dommy.core.append_BANG_.call(null,parent,c_15176);

var G__15177 = seq__15164_15172;
var G__15178 = chunk__15165_15173;
var G__15179 = count__15166_15174;
var G__15180 = (i__15167_15175 + (1));
seq__15164_15172 = G__15177;
chunk__15165_15173 = G__15178;
count__15166_15174 = G__15179;
i__15167_15175 = G__15180;
continue;
} else {
var temp__4657__auto___15181 = cljs.core.seq.call(null,seq__15164_15172);
if(temp__4657__auto___15181){
var seq__15164_15182__$1 = temp__4657__auto___15181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15164_15182__$1)){
var c__13990__auto___15183 = cljs.core.chunk_first.call(null,seq__15164_15182__$1);
var G__15184 = cljs.core.chunk_rest.call(null,seq__15164_15182__$1);
var G__15185 = c__13990__auto___15183;
var G__15186 = cljs.core.count.call(null,c__13990__auto___15183);
var G__15187 = (0);
seq__15164_15172 = G__15184;
chunk__15165_15173 = G__15185;
count__15166_15174 = G__15186;
i__15167_15175 = G__15187;
continue;
} else {
var c_15188 = cljs.core.first.call(null,seq__15164_15182__$1);
dommy.core.append_BANG_.call(null,parent,c_15188);

var G__15189 = cljs.core.next.call(null,seq__15164_15182__$1);
var G__15190 = null;
var G__15191 = (0);
var G__15192 = (0);
seq__15164_15172 = G__15189;
chunk__15165_15173 = G__15190;
count__15166_15174 = G__15191;
i__15167_15175 = G__15192;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15158){
var G__15159 = cljs.core.first.call(null,seq15158);
var seq15158__$1 = cljs.core.next.call(null,seq15158);
var G__15160 = cljs.core.first.call(null,seq15158__$1);
var seq15158__$2 = cljs.core.next.call(null,seq15158__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15159,G__15160,seq15158__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args15193 = [];
var len__14245__auto___15204 = arguments.length;
var i__14246__auto___15205 = (0);
while(true){
if((i__14246__auto___15205 < len__14245__auto___15204)){
args15193.push((arguments[i__14246__auto___15205]));

var G__15206 = (i__14246__auto___15205 + (1));
i__14246__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var G__15198 = args15193.length;
switch (G__15198) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15193.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15199 = parent;
G__15199.insertBefore(child,parent.firstChild);

return G__15199;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15200_15208 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__15201_15209 = null;
var count__15202_15210 = (0);
var i__15203_15211 = (0);
while(true){
if((i__15203_15211 < count__15202_15210)){
var c_15212 = cljs.core._nth.call(null,chunk__15201_15209,i__15203_15211);
dommy.core.prepend_BANG_.call(null,parent,c_15212);

var G__15213 = seq__15200_15208;
var G__15214 = chunk__15201_15209;
var G__15215 = count__15202_15210;
var G__15216 = (i__15203_15211 + (1));
seq__15200_15208 = G__15213;
chunk__15201_15209 = G__15214;
count__15202_15210 = G__15215;
i__15203_15211 = G__15216;
continue;
} else {
var temp__4657__auto___15217 = cljs.core.seq.call(null,seq__15200_15208);
if(temp__4657__auto___15217){
var seq__15200_15218__$1 = temp__4657__auto___15217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15200_15218__$1)){
var c__13990__auto___15219 = cljs.core.chunk_first.call(null,seq__15200_15218__$1);
var G__15220 = cljs.core.chunk_rest.call(null,seq__15200_15218__$1);
var G__15221 = c__13990__auto___15219;
var G__15222 = cljs.core.count.call(null,c__13990__auto___15219);
var G__15223 = (0);
seq__15200_15208 = G__15220;
chunk__15201_15209 = G__15221;
count__15202_15210 = G__15222;
i__15203_15211 = G__15223;
continue;
} else {
var c_15224 = cljs.core.first.call(null,seq__15200_15218__$1);
dommy.core.prepend_BANG_.call(null,parent,c_15224);

var G__15225 = cljs.core.next.call(null,seq__15200_15218__$1);
var G__15226 = null;
var G__15227 = (0);
var G__15228 = (0);
seq__15200_15208 = G__15225;
chunk__15201_15209 = G__15226;
count__15202_15210 = G__15227;
i__15203_15211 = G__15228;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15194){
var G__15195 = cljs.core.first.call(null,seq15194);
var seq15194__$1 = cljs.core.next.call(null,seq15194);
var G__15196 = cljs.core.first.call(null,seq15194__$1);
var seq15194__$2 = cljs.core.next.call(null,seq15194__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15195,G__15196,seq15194__$2);
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
var temp__4655__auto___15229 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15229)){
var next_15230 = temp__4655__auto___15229;
dommy.core.insert_before_BANG_.call(null,elem,next_15230);
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
var args15231 = [];
var len__14245__auto___15235 = arguments.length;
var i__14246__auto___15236 = (0);
while(true){
if((i__14246__auto___15236 < len__14245__auto___15235)){
args15231.push((arguments[i__14246__auto___15236]));

var G__15237 = (i__14246__auto___15236 + (1));
i__14246__auto___15236 = G__15237;
continue;
} else {
}
break;
}

var G__15233 = args15231.length;
switch (G__15233) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15231.length)].join('')));

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
var G__15234 = p;
G__15234.removeChild(elem);

return G__15234;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15239){
var vec__15240 = p__15239;
var special_mouse_event = cljs.core.nth.call(null,vec__15240,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__15240,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__15240,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15240,special_mouse_event,real_mouse_event){
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
;})(vec__15240,special_mouse_event,real_mouse_event))
});})(vec__15240,special_mouse_event,real_mouse_event))
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
var len__14245__auto___15244 = arguments.length;
var i__14246__auto___15245 = (0);
while(true){
if((i__14246__auto___15245 < len__14245__auto___15244)){
args__14252__auto__.push((arguments[i__14246__auto___15245]));

var G__15246 = (i__14246__auto___15245 + (1));
i__14246__auto___15245 = G__15246;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15241){
var G__15242 = cljs.core.first.call(null,seq15241);
var seq15241__$1 = cljs.core.next.call(null,seq15241);
var G__15243 = cljs.core.first.call(null,seq15241__$1);
var seq15241__$2 = cljs.core.next.call(null,seq15241__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15242,G__15243,seq15241__$2);
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
var len__14245__auto___15272 = arguments.length;
var i__14246__auto___15273 = (0);
while(true){
if((i__14246__auto___15273 < len__14245__auto___15272)){
args__14252__auto__.push((arguments[i__14246__auto___15273]));

var G__15274 = (i__14246__auto___15273 + (1));
i__14246__auto___15273 = G__15274;
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

var vec__15249_15275 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15276 = cljs.core.nth.call(null,vec__15249_15275,(0),null);
var selector_15277 = cljs.core.nth.call(null,vec__15249_15275,(1),null);
var seq__15250_15278 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15257_15279 = null;
var count__15258_15280 = (0);
var i__15259_15281 = (0);
while(true){
if((i__15259_15281 < count__15258_15280)){
var vec__15266_15282 = cljs.core._nth.call(null,chunk__15257_15279,i__15259_15281);
var orig_type_15283 = cljs.core.nth.call(null,vec__15266_15282,(0),null);
var f_15284 = cljs.core.nth.call(null,vec__15266_15282,(1),null);
var seq__15260_15285 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15283,cljs.core.PersistentArrayMap.fromArray([orig_type_15283,cljs.core.identity], true, false)));
var chunk__15262_15286 = null;
var count__15263_15287 = (0);
var i__15264_15288 = (0);
while(true){
if((i__15264_15288 < count__15263_15287)){
var vec__15267_15289 = cljs.core._nth.call(null,chunk__15262_15286,i__15264_15288);
var actual_type_15290 = cljs.core.nth.call(null,vec__15267_15289,(0),null);
var factory_15291 = cljs.core.nth.call(null,vec__15267_15289,(1),null);
var canonical_f_15292 = (cljs.core.truth_(selector_15277)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15276,selector_15277):cljs.core.identity).call(null,factory_15291.call(null,f_15284));
dommy.core.update_event_listeners_BANG_.call(null,elem_15276,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15277,actual_type_15290,f_15284], null),canonical_f_15292);

if(cljs.core.truth_(elem_15276.addEventListener)){
elem_15276.addEventListener(cljs.core.name.call(null,actual_type_15290),canonical_f_15292);
} else {
elem_15276.attachEvent(cljs.core.name.call(null,actual_type_15290),canonical_f_15292);
}

var G__15293 = seq__15260_15285;
var G__15294 = chunk__15262_15286;
var G__15295 = count__15263_15287;
var G__15296 = (i__15264_15288 + (1));
seq__15260_15285 = G__15293;
chunk__15262_15286 = G__15294;
count__15263_15287 = G__15295;
i__15264_15288 = G__15296;
continue;
} else {
var temp__4657__auto___15297 = cljs.core.seq.call(null,seq__15260_15285);
if(temp__4657__auto___15297){
var seq__15260_15298__$1 = temp__4657__auto___15297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15260_15298__$1)){
var c__13990__auto___15299 = cljs.core.chunk_first.call(null,seq__15260_15298__$1);
var G__15300 = cljs.core.chunk_rest.call(null,seq__15260_15298__$1);
var G__15301 = c__13990__auto___15299;
var G__15302 = cljs.core.count.call(null,c__13990__auto___15299);
var G__15303 = (0);
seq__15260_15285 = G__15300;
chunk__15262_15286 = G__15301;
count__15263_15287 = G__15302;
i__15264_15288 = G__15303;
continue;
} else {
var vec__15268_15304 = cljs.core.first.call(null,seq__15260_15298__$1);
var actual_type_15305 = cljs.core.nth.call(null,vec__15268_15304,(0),null);
var factory_15306 = cljs.core.nth.call(null,vec__15268_15304,(1),null);
var canonical_f_15307 = (cljs.core.truth_(selector_15277)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15276,selector_15277):cljs.core.identity).call(null,factory_15306.call(null,f_15284));
dommy.core.update_event_listeners_BANG_.call(null,elem_15276,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15277,actual_type_15305,f_15284], null),canonical_f_15307);

if(cljs.core.truth_(elem_15276.addEventListener)){
elem_15276.addEventListener(cljs.core.name.call(null,actual_type_15305),canonical_f_15307);
} else {
elem_15276.attachEvent(cljs.core.name.call(null,actual_type_15305),canonical_f_15307);
}

var G__15308 = cljs.core.next.call(null,seq__15260_15298__$1);
var G__15309 = null;
var G__15310 = (0);
var G__15311 = (0);
seq__15260_15285 = G__15308;
chunk__15262_15286 = G__15309;
count__15263_15287 = G__15310;
i__15264_15288 = G__15311;
continue;
}
} else {
}
}
break;
}

var G__15312 = seq__15250_15278;
var G__15313 = chunk__15257_15279;
var G__15314 = count__15258_15280;
var G__15315 = (i__15259_15281 + (1));
seq__15250_15278 = G__15312;
chunk__15257_15279 = G__15313;
count__15258_15280 = G__15314;
i__15259_15281 = G__15315;
continue;
} else {
var temp__4657__auto___15316 = cljs.core.seq.call(null,seq__15250_15278);
if(temp__4657__auto___15316){
var seq__15250_15317__$1 = temp__4657__auto___15316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15250_15317__$1)){
var c__13990__auto___15318 = cljs.core.chunk_first.call(null,seq__15250_15317__$1);
var G__15319 = cljs.core.chunk_rest.call(null,seq__15250_15317__$1);
var G__15320 = c__13990__auto___15318;
var G__15321 = cljs.core.count.call(null,c__13990__auto___15318);
var G__15322 = (0);
seq__15250_15278 = G__15319;
chunk__15257_15279 = G__15320;
count__15258_15280 = G__15321;
i__15259_15281 = G__15322;
continue;
} else {
var vec__15269_15323 = cljs.core.first.call(null,seq__15250_15317__$1);
var orig_type_15324 = cljs.core.nth.call(null,vec__15269_15323,(0),null);
var f_15325 = cljs.core.nth.call(null,vec__15269_15323,(1),null);
var seq__15251_15326 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15324,cljs.core.PersistentArrayMap.fromArray([orig_type_15324,cljs.core.identity], true, false)));
var chunk__15253_15327 = null;
var count__15254_15328 = (0);
var i__15255_15329 = (0);
while(true){
if((i__15255_15329 < count__15254_15328)){
var vec__15270_15330 = cljs.core._nth.call(null,chunk__15253_15327,i__15255_15329);
var actual_type_15331 = cljs.core.nth.call(null,vec__15270_15330,(0),null);
var factory_15332 = cljs.core.nth.call(null,vec__15270_15330,(1),null);
var canonical_f_15333 = (cljs.core.truth_(selector_15277)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15276,selector_15277):cljs.core.identity).call(null,factory_15332.call(null,f_15325));
dommy.core.update_event_listeners_BANG_.call(null,elem_15276,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15277,actual_type_15331,f_15325], null),canonical_f_15333);

if(cljs.core.truth_(elem_15276.addEventListener)){
elem_15276.addEventListener(cljs.core.name.call(null,actual_type_15331),canonical_f_15333);
} else {
elem_15276.attachEvent(cljs.core.name.call(null,actual_type_15331),canonical_f_15333);
}

var G__15334 = seq__15251_15326;
var G__15335 = chunk__15253_15327;
var G__15336 = count__15254_15328;
var G__15337 = (i__15255_15329 + (1));
seq__15251_15326 = G__15334;
chunk__15253_15327 = G__15335;
count__15254_15328 = G__15336;
i__15255_15329 = G__15337;
continue;
} else {
var temp__4657__auto___15338__$1 = cljs.core.seq.call(null,seq__15251_15326);
if(temp__4657__auto___15338__$1){
var seq__15251_15339__$1 = temp__4657__auto___15338__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15251_15339__$1)){
var c__13990__auto___15340 = cljs.core.chunk_first.call(null,seq__15251_15339__$1);
var G__15341 = cljs.core.chunk_rest.call(null,seq__15251_15339__$1);
var G__15342 = c__13990__auto___15340;
var G__15343 = cljs.core.count.call(null,c__13990__auto___15340);
var G__15344 = (0);
seq__15251_15326 = G__15341;
chunk__15253_15327 = G__15342;
count__15254_15328 = G__15343;
i__15255_15329 = G__15344;
continue;
} else {
var vec__15271_15345 = cljs.core.first.call(null,seq__15251_15339__$1);
var actual_type_15346 = cljs.core.nth.call(null,vec__15271_15345,(0),null);
var factory_15347 = cljs.core.nth.call(null,vec__15271_15345,(1),null);
var canonical_f_15348 = (cljs.core.truth_(selector_15277)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15276,selector_15277):cljs.core.identity).call(null,factory_15347.call(null,f_15325));
dommy.core.update_event_listeners_BANG_.call(null,elem_15276,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15277,actual_type_15346,f_15325], null),canonical_f_15348);

if(cljs.core.truth_(elem_15276.addEventListener)){
elem_15276.addEventListener(cljs.core.name.call(null,actual_type_15346),canonical_f_15348);
} else {
elem_15276.attachEvent(cljs.core.name.call(null,actual_type_15346),canonical_f_15348);
}

var G__15349 = cljs.core.next.call(null,seq__15251_15339__$1);
var G__15350 = null;
var G__15351 = (0);
var G__15352 = (0);
seq__15251_15326 = G__15349;
chunk__15253_15327 = G__15350;
count__15254_15328 = G__15351;
i__15255_15329 = G__15352;
continue;
}
} else {
}
}
break;
}

var G__15353 = cljs.core.next.call(null,seq__15250_15317__$1);
var G__15354 = null;
var G__15355 = (0);
var G__15356 = (0);
seq__15250_15278 = G__15353;
chunk__15257_15279 = G__15354;
count__15258_15280 = G__15355;
i__15259_15281 = G__15356;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15247){
var G__15248 = cljs.core.first.call(null,seq15247);
var seq15247__$1 = cljs.core.next.call(null,seq15247);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15248,seq15247__$1);
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
var len__14245__auto___15382 = arguments.length;
var i__14246__auto___15383 = (0);
while(true){
if((i__14246__auto___15383 < len__14245__auto___15382)){
args__14252__auto__.push((arguments[i__14246__auto___15383]));

var G__15384 = (i__14246__auto___15383 + (1));
i__14246__auto___15383 = G__15384;
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

var vec__15359_15385 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15386 = cljs.core.nth.call(null,vec__15359_15385,(0),null);
var selector_15387 = cljs.core.nth.call(null,vec__15359_15385,(1),null);
var seq__15360_15388 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15367_15389 = null;
var count__15368_15390 = (0);
var i__15369_15391 = (0);
while(true){
if((i__15369_15391 < count__15368_15390)){
var vec__15376_15392 = cljs.core._nth.call(null,chunk__15367_15389,i__15369_15391);
var orig_type_15393 = cljs.core.nth.call(null,vec__15376_15392,(0),null);
var f_15394 = cljs.core.nth.call(null,vec__15376_15392,(1),null);
var seq__15370_15395 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15393,cljs.core.PersistentArrayMap.fromArray([orig_type_15393,cljs.core.identity], true, false)));
var chunk__15372_15396 = null;
var count__15373_15397 = (0);
var i__15374_15398 = (0);
while(true){
if((i__15374_15398 < count__15373_15397)){
var vec__15377_15399 = cljs.core._nth.call(null,chunk__15372_15396,i__15374_15398);
var actual_type_15400 = cljs.core.nth.call(null,vec__15377_15399,(0),null);
var __15401 = cljs.core.nth.call(null,vec__15377_15399,(1),null);
var keys_15402 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15387,actual_type_15400,f_15394], null);
var canonical_f_15403 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15386),keys_15402);
dommy.core.update_event_listeners_BANG_.call(null,elem_15386,dommy.utils.dissoc_in,keys_15402);

if(cljs.core.truth_(elem_15386.removeEventListener)){
elem_15386.removeEventListener(cljs.core.name.call(null,actual_type_15400),canonical_f_15403);
} else {
elem_15386.detachEvent(cljs.core.name.call(null,actual_type_15400),canonical_f_15403);
}

var G__15404 = seq__15370_15395;
var G__15405 = chunk__15372_15396;
var G__15406 = count__15373_15397;
var G__15407 = (i__15374_15398 + (1));
seq__15370_15395 = G__15404;
chunk__15372_15396 = G__15405;
count__15373_15397 = G__15406;
i__15374_15398 = G__15407;
continue;
} else {
var temp__4657__auto___15408 = cljs.core.seq.call(null,seq__15370_15395);
if(temp__4657__auto___15408){
var seq__15370_15409__$1 = temp__4657__auto___15408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15370_15409__$1)){
var c__13990__auto___15410 = cljs.core.chunk_first.call(null,seq__15370_15409__$1);
var G__15411 = cljs.core.chunk_rest.call(null,seq__15370_15409__$1);
var G__15412 = c__13990__auto___15410;
var G__15413 = cljs.core.count.call(null,c__13990__auto___15410);
var G__15414 = (0);
seq__15370_15395 = G__15411;
chunk__15372_15396 = G__15412;
count__15373_15397 = G__15413;
i__15374_15398 = G__15414;
continue;
} else {
var vec__15378_15415 = cljs.core.first.call(null,seq__15370_15409__$1);
var actual_type_15416 = cljs.core.nth.call(null,vec__15378_15415,(0),null);
var __15417 = cljs.core.nth.call(null,vec__15378_15415,(1),null);
var keys_15418 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15387,actual_type_15416,f_15394], null);
var canonical_f_15419 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15386),keys_15418);
dommy.core.update_event_listeners_BANG_.call(null,elem_15386,dommy.utils.dissoc_in,keys_15418);

if(cljs.core.truth_(elem_15386.removeEventListener)){
elem_15386.removeEventListener(cljs.core.name.call(null,actual_type_15416),canonical_f_15419);
} else {
elem_15386.detachEvent(cljs.core.name.call(null,actual_type_15416),canonical_f_15419);
}

var G__15420 = cljs.core.next.call(null,seq__15370_15409__$1);
var G__15421 = null;
var G__15422 = (0);
var G__15423 = (0);
seq__15370_15395 = G__15420;
chunk__15372_15396 = G__15421;
count__15373_15397 = G__15422;
i__15374_15398 = G__15423;
continue;
}
} else {
}
}
break;
}

var G__15424 = seq__15360_15388;
var G__15425 = chunk__15367_15389;
var G__15426 = count__15368_15390;
var G__15427 = (i__15369_15391 + (1));
seq__15360_15388 = G__15424;
chunk__15367_15389 = G__15425;
count__15368_15390 = G__15426;
i__15369_15391 = G__15427;
continue;
} else {
var temp__4657__auto___15428 = cljs.core.seq.call(null,seq__15360_15388);
if(temp__4657__auto___15428){
var seq__15360_15429__$1 = temp__4657__auto___15428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15360_15429__$1)){
var c__13990__auto___15430 = cljs.core.chunk_first.call(null,seq__15360_15429__$1);
var G__15431 = cljs.core.chunk_rest.call(null,seq__15360_15429__$1);
var G__15432 = c__13990__auto___15430;
var G__15433 = cljs.core.count.call(null,c__13990__auto___15430);
var G__15434 = (0);
seq__15360_15388 = G__15431;
chunk__15367_15389 = G__15432;
count__15368_15390 = G__15433;
i__15369_15391 = G__15434;
continue;
} else {
var vec__15379_15435 = cljs.core.first.call(null,seq__15360_15429__$1);
var orig_type_15436 = cljs.core.nth.call(null,vec__15379_15435,(0),null);
var f_15437 = cljs.core.nth.call(null,vec__15379_15435,(1),null);
var seq__15361_15438 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15436,cljs.core.PersistentArrayMap.fromArray([orig_type_15436,cljs.core.identity], true, false)));
var chunk__15363_15439 = null;
var count__15364_15440 = (0);
var i__15365_15441 = (0);
while(true){
if((i__15365_15441 < count__15364_15440)){
var vec__15380_15442 = cljs.core._nth.call(null,chunk__15363_15439,i__15365_15441);
var actual_type_15443 = cljs.core.nth.call(null,vec__15380_15442,(0),null);
var __15444 = cljs.core.nth.call(null,vec__15380_15442,(1),null);
var keys_15445 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15387,actual_type_15443,f_15437], null);
var canonical_f_15446 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15386),keys_15445);
dommy.core.update_event_listeners_BANG_.call(null,elem_15386,dommy.utils.dissoc_in,keys_15445);

if(cljs.core.truth_(elem_15386.removeEventListener)){
elem_15386.removeEventListener(cljs.core.name.call(null,actual_type_15443),canonical_f_15446);
} else {
elem_15386.detachEvent(cljs.core.name.call(null,actual_type_15443),canonical_f_15446);
}

var G__15447 = seq__15361_15438;
var G__15448 = chunk__15363_15439;
var G__15449 = count__15364_15440;
var G__15450 = (i__15365_15441 + (1));
seq__15361_15438 = G__15447;
chunk__15363_15439 = G__15448;
count__15364_15440 = G__15449;
i__15365_15441 = G__15450;
continue;
} else {
var temp__4657__auto___15451__$1 = cljs.core.seq.call(null,seq__15361_15438);
if(temp__4657__auto___15451__$1){
var seq__15361_15452__$1 = temp__4657__auto___15451__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15452__$1)){
var c__13990__auto___15453 = cljs.core.chunk_first.call(null,seq__15361_15452__$1);
var G__15454 = cljs.core.chunk_rest.call(null,seq__15361_15452__$1);
var G__15455 = c__13990__auto___15453;
var G__15456 = cljs.core.count.call(null,c__13990__auto___15453);
var G__15457 = (0);
seq__15361_15438 = G__15454;
chunk__15363_15439 = G__15455;
count__15364_15440 = G__15456;
i__15365_15441 = G__15457;
continue;
} else {
var vec__15381_15458 = cljs.core.first.call(null,seq__15361_15452__$1);
var actual_type_15459 = cljs.core.nth.call(null,vec__15381_15458,(0),null);
var __15460 = cljs.core.nth.call(null,vec__15381_15458,(1),null);
var keys_15461 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15387,actual_type_15459,f_15437], null);
var canonical_f_15462 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15386),keys_15461);
dommy.core.update_event_listeners_BANG_.call(null,elem_15386,dommy.utils.dissoc_in,keys_15461);

if(cljs.core.truth_(elem_15386.removeEventListener)){
elem_15386.removeEventListener(cljs.core.name.call(null,actual_type_15459),canonical_f_15462);
} else {
elem_15386.detachEvent(cljs.core.name.call(null,actual_type_15459),canonical_f_15462);
}

var G__15463 = cljs.core.next.call(null,seq__15361_15452__$1);
var G__15464 = null;
var G__15465 = (0);
var G__15466 = (0);
seq__15361_15438 = G__15463;
chunk__15363_15439 = G__15464;
count__15364_15440 = G__15465;
i__15365_15441 = G__15466;
continue;
}
} else {
}
}
break;
}

var G__15467 = cljs.core.next.call(null,seq__15360_15429__$1);
var G__15468 = null;
var G__15469 = (0);
var G__15470 = (0);
seq__15360_15388 = G__15467;
chunk__15367_15389 = G__15468;
count__15368_15390 = G__15469;
i__15369_15391 = G__15470;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15357){
var G__15358 = cljs.core.first.call(null,seq15357);
var seq15357__$1 = cljs.core.next.call(null,seq15357);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15358,seq15357__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___15480 = arguments.length;
var i__14246__auto___15481 = (0);
while(true){
if((i__14246__auto___15481 < len__14245__auto___15480)){
args__14252__auto__.push((arguments[i__14246__auto___15481]));

var G__15482 = (i__14246__auto___15481 + (1));
i__14246__auto___15481 = G__15482;
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

var vec__15473_15483 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15484 = cljs.core.nth.call(null,vec__15473_15483,(0),null);
var selector_15485 = cljs.core.nth.call(null,vec__15473_15483,(1),null);
var seq__15474_15486 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15475_15487 = null;
var count__15476_15488 = (0);
var i__15477_15489 = (0);
while(true){
if((i__15477_15489 < count__15476_15488)){
var vec__15478_15490 = cljs.core._nth.call(null,chunk__15475_15487,i__15477_15489);
var type_15491 = cljs.core.nth.call(null,vec__15478_15490,(0),null);
var f_15492 = cljs.core.nth.call(null,vec__15478_15490,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15491,((function (seq__15474_15486,chunk__15475_15487,count__15476_15488,i__15477_15489,vec__15478_15490,type_15491,f_15492,vec__15473_15483,elem_15484,selector_15485){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15491,dommy$core$this_fn);

return f_15492.call(null,e);
});})(seq__15474_15486,chunk__15475_15487,count__15476_15488,i__15477_15489,vec__15478_15490,type_15491,f_15492,vec__15473_15483,elem_15484,selector_15485))
);

var G__15493 = seq__15474_15486;
var G__15494 = chunk__15475_15487;
var G__15495 = count__15476_15488;
var G__15496 = (i__15477_15489 + (1));
seq__15474_15486 = G__15493;
chunk__15475_15487 = G__15494;
count__15476_15488 = G__15495;
i__15477_15489 = G__15496;
continue;
} else {
var temp__4657__auto___15497 = cljs.core.seq.call(null,seq__15474_15486);
if(temp__4657__auto___15497){
var seq__15474_15498__$1 = temp__4657__auto___15497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15474_15498__$1)){
var c__13990__auto___15499 = cljs.core.chunk_first.call(null,seq__15474_15498__$1);
var G__15500 = cljs.core.chunk_rest.call(null,seq__15474_15498__$1);
var G__15501 = c__13990__auto___15499;
var G__15502 = cljs.core.count.call(null,c__13990__auto___15499);
var G__15503 = (0);
seq__15474_15486 = G__15500;
chunk__15475_15487 = G__15501;
count__15476_15488 = G__15502;
i__15477_15489 = G__15503;
continue;
} else {
var vec__15479_15504 = cljs.core.first.call(null,seq__15474_15498__$1);
var type_15505 = cljs.core.nth.call(null,vec__15479_15504,(0),null);
var f_15506 = cljs.core.nth.call(null,vec__15479_15504,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15505,((function (seq__15474_15486,chunk__15475_15487,count__15476_15488,i__15477_15489,vec__15479_15504,type_15505,f_15506,seq__15474_15498__$1,temp__4657__auto___15497,vec__15473_15483,elem_15484,selector_15485){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15505,dommy$core$this_fn);

return f_15506.call(null,e);
});})(seq__15474_15486,chunk__15475_15487,count__15476_15488,i__15477_15489,vec__15479_15504,type_15505,f_15506,seq__15474_15498__$1,temp__4657__auto___15497,vec__15473_15483,elem_15484,selector_15485))
);

var G__15507 = cljs.core.next.call(null,seq__15474_15498__$1);
var G__15508 = null;
var G__15509 = (0);
var G__15510 = (0);
seq__15474_15486 = G__15507;
chunk__15475_15487 = G__15508;
count__15476_15488 = G__15509;
i__15477_15489 = G__15510;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15471){
var G__15472 = cljs.core.first.call(null,seq15471);
var seq15471__$1 = cljs.core.next.call(null,seq15471);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15472,seq15471__$1);
});

//# sourceMappingURL=core.js.map?rel=1456341630075