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
var args14802 = [];
var len__14245__auto___14805 = arguments.length;
var i__14246__auto___14806 = (0);
while(true){
if((i__14246__auto___14806 < len__14245__auto___14805)){
args14802.push((arguments[i__14246__auto___14806]));

var G__14807 = (i__14246__auto___14806 + (1));
i__14246__auto___14806 = G__14807;
continue;
} else {
}
break;
}

var G__14804 = args14802.length;
switch (G__14804) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14802.length)].join('')));

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
var args14809 = [];
var len__14245__auto___14812 = arguments.length;
var i__14246__auto___14813 = (0);
while(true){
if((i__14246__auto___14813 < len__14245__auto___14812)){
args14809.push((arguments[i__14246__auto___14813]));

var G__14814 = (i__14246__auto___14813 + (1));
i__14246__auto___14813 = G__14814;
continue;
} else {
}
break;
}

var G__14811 = args14809.length;
switch (G__14811) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14809.length)].join('')));

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
var args14817 = [];
var len__14245__auto___14820 = arguments.length;
var i__14246__auto___14821 = (0);
while(true){
if((i__14246__auto___14821 < len__14245__auto___14820)){
args14817.push((arguments[i__14246__auto___14821]));

var G__14822 = (i__14246__auto___14821 + (1));
i__14246__auto___14821 = G__14822;
continue;
} else {
}
break;
}

var G__14819 = args14817.length;
switch (G__14819) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14817.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__14816_SHARP_){
return !((p1__14816_SHARP_ === base));
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
var len__14245__auto___14832 = arguments.length;
var i__14246__auto___14833 = (0);
while(true){
if((i__14246__auto___14833 < len__14245__auto___14832)){
args__14252__auto__.push((arguments[i__14246__auto___14833]));

var G__14834 = (i__14246__auto___14833 + (1));
i__14246__auto___14833 = G__14834;
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
var seq__14826_14835 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14827_14836 = null;
var count__14828_14837 = (0);
var i__14829_14838 = (0);
while(true){
if((i__14829_14838 < count__14828_14837)){
var vec__14830_14839 = cljs.core._nth.call(null,chunk__14827_14836,i__14829_14838);
var k_14840 = cljs.core.nth.call(null,vec__14830_14839,(0),null);
var v_14841 = cljs.core.nth.call(null,vec__14830_14839,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14840),v_14841);

var G__14842 = seq__14826_14835;
var G__14843 = chunk__14827_14836;
var G__14844 = count__14828_14837;
var G__14845 = (i__14829_14838 + (1));
seq__14826_14835 = G__14842;
chunk__14827_14836 = G__14843;
count__14828_14837 = G__14844;
i__14829_14838 = G__14845;
continue;
} else {
var temp__4657__auto___14846 = cljs.core.seq.call(null,seq__14826_14835);
if(temp__4657__auto___14846){
var seq__14826_14847__$1 = temp__4657__auto___14846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14826_14847__$1)){
var c__13990__auto___14848 = cljs.core.chunk_first.call(null,seq__14826_14847__$1);
var G__14849 = cljs.core.chunk_rest.call(null,seq__14826_14847__$1);
var G__14850 = c__13990__auto___14848;
var G__14851 = cljs.core.count.call(null,c__13990__auto___14848);
var G__14852 = (0);
seq__14826_14835 = G__14849;
chunk__14827_14836 = G__14850;
count__14828_14837 = G__14851;
i__14829_14838 = G__14852;
continue;
} else {
var vec__14831_14853 = cljs.core.first.call(null,seq__14826_14847__$1);
var k_14854 = cljs.core.nth.call(null,vec__14831_14853,(0),null);
var v_14855 = cljs.core.nth.call(null,vec__14831_14853,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_14854),v_14855);

var G__14856 = cljs.core.next.call(null,seq__14826_14847__$1);
var G__14857 = null;
var G__14858 = (0);
var G__14859 = (0);
seq__14826_14835 = G__14856;
chunk__14827_14836 = G__14857;
count__14828_14837 = G__14858;
i__14829_14838 = G__14859;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14824){
var G__14825 = cljs.core.first.call(null,seq14824);
var seq14824__$1 = cljs.core.next.call(null,seq14824);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14825,seq14824__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14866 = arguments.length;
var i__14246__auto___14867 = (0);
while(true){
if((i__14246__auto___14867 < len__14245__auto___14866)){
args__14252__auto__.push((arguments[i__14246__auto___14867]));

var G__14868 = (i__14246__auto___14867 + (1));
i__14246__auto___14867 = G__14868;
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
var seq__14862_14869 = cljs.core.seq.call(null,keywords);
var chunk__14863_14870 = null;
var count__14864_14871 = (0);
var i__14865_14872 = (0);
while(true){
if((i__14865_14872 < count__14864_14871)){
var kw_14873 = cljs.core._nth.call(null,chunk__14863_14870,i__14865_14872);
style.removeProperty(dommy.utils.as_str.call(null,kw_14873));

var G__14874 = seq__14862_14869;
var G__14875 = chunk__14863_14870;
var G__14876 = count__14864_14871;
var G__14877 = (i__14865_14872 + (1));
seq__14862_14869 = G__14874;
chunk__14863_14870 = G__14875;
count__14864_14871 = G__14876;
i__14865_14872 = G__14877;
continue;
} else {
var temp__4657__auto___14878 = cljs.core.seq.call(null,seq__14862_14869);
if(temp__4657__auto___14878){
var seq__14862_14879__$1 = temp__4657__auto___14878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14862_14879__$1)){
var c__13990__auto___14880 = cljs.core.chunk_first.call(null,seq__14862_14879__$1);
var G__14881 = cljs.core.chunk_rest.call(null,seq__14862_14879__$1);
var G__14882 = c__13990__auto___14880;
var G__14883 = cljs.core.count.call(null,c__13990__auto___14880);
var G__14884 = (0);
seq__14862_14869 = G__14881;
chunk__14863_14870 = G__14882;
count__14864_14871 = G__14883;
i__14865_14872 = G__14884;
continue;
} else {
var kw_14885 = cljs.core.first.call(null,seq__14862_14879__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_14885));

var G__14886 = cljs.core.next.call(null,seq__14862_14879__$1);
var G__14887 = null;
var G__14888 = (0);
var G__14889 = (0);
seq__14862_14869 = G__14886;
chunk__14863_14870 = G__14887;
count__14864_14871 = G__14888;
i__14865_14872 = G__14889;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14860){
var G__14861 = cljs.core.first.call(null,seq14860);
var seq14860__$1 = cljs.core.next.call(null,seq14860);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14861,seq14860__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___14898 = arguments.length;
var i__14246__auto___14899 = (0);
while(true){
if((i__14246__auto___14899 < len__14245__auto___14898)){
args__14252__auto__.push((arguments[i__14246__auto___14899]));

var G__14900 = (i__14246__auto___14899 + (1));
i__14246__auto___14899 = G__14900;
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

var seq__14892_14901 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__14893_14902 = null;
var count__14894_14903 = (0);
var i__14895_14904 = (0);
while(true){
if((i__14895_14904 < count__14894_14903)){
var vec__14896_14905 = cljs.core._nth.call(null,chunk__14893_14902,i__14895_14904);
var k_14906 = cljs.core.nth.call(null,vec__14896_14905,(0),null);
var v_14907 = cljs.core.nth.call(null,vec__14896_14905,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14906,[cljs.core.str(v_14907),cljs.core.str("px")].join(''));

var G__14908 = seq__14892_14901;
var G__14909 = chunk__14893_14902;
var G__14910 = count__14894_14903;
var G__14911 = (i__14895_14904 + (1));
seq__14892_14901 = G__14908;
chunk__14893_14902 = G__14909;
count__14894_14903 = G__14910;
i__14895_14904 = G__14911;
continue;
} else {
var temp__4657__auto___14912 = cljs.core.seq.call(null,seq__14892_14901);
if(temp__4657__auto___14912){
var seq__14892_14913__$1 = temp__4657__auto___14912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14892_14913__$1)){
var c__13990__auto___14914 = cljs.core.chunk_first.call(null,seq__14892_14913__$1);
var G__14915 = cljs.core.chunk_rest.call(null,seq__14892_14913__$1);
var G__14916 = c__13990__auto___14914;
var G__14917 = cljs.core.count.call(null,c__13990__auto___14914);
var G__14918 = (0);
seq__14892_14901 = G__14915;
chunk__14893_14902 = G__14916;
count__14894_14903 = G__14917;
i__14895_14904 = G__14918;
continue;
} else {
var vec__14897_14919 = cljs.core.first.call(null,seq__14892_14913__$1);
var k_14920 = cljs.core.nth.call(null,vec__14897_14919,(0),null);
var v_14921 = cljs.core.nth.call(null,vec__14897_14919,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_14920,[cljs.core.str(v_14921),cljs.core.str("px")].join(''));

var G__14922 = cljs.core.next.call(null,seq__14892_14913__$1);
var G__14923 = null;
var G__14924 = (0);
var G__14925 = (0);
seq__14892_14901 = G__14922;
chunk__14893_14902 = G__14923;
count__14894_14903 = G__14924;
i__14895_14904 = G__14925;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14890){
var G__14891 = cljs.core.first.call(null,seq14890);
var seq14890__$1 = cljs.core.next.call(null,seq14890);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14891,seq14890__$1);
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
var args14926 = [];
var len__14245__auto___14941 = arguments.length;
var i__14246__auto___14942 = (0);
while(true){
if((i__14246__auto___14942 < len__14245__auto___14941)){
args14926.push((arguments[i__14246__auto___14942]));

var G__14943 = (i__14246__auto___14942 + (1));
i__14246__auto___14942 = G__14943;
continue;
} else {
}
break;
}

var G__14932 = args14926.length;
switch (G__14932) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14926.slice((3)),(0)));
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
var G__14933 = elem;
(G__14933[k__$1] = v);

return G__14933;
} else {
var G__14934 = elem;
G__14934.setAttribute(k__$1,v);

return G__14934;
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

var seq__14935_14945 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__14936_14946 = null;
var count__14937_14947 = (0);
var i__14938_14948 = (0);
while(true){
if((i__14938_14948 < count__14937_14947)){
var vec__14939_14949 = cljs.core._nth.call(null,chunk__14936_14946,i__14938_14948);
var k_14950__$1 = cljs.core.nth.call(null,vec__14939_14949,(0),null);
var v_14951__$1 = cljs.core.nth.call(null,vec__14939_14949,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14950__$1,v_14951__$1);

var G__14952 = seq__14935_14945;
var G__14953 = chunk__14936_14946;
var G__14954 = count__14937_14947;
var G__14955 = (i__14938_14948 + (1));
seq__14935_14945 = G__14952;
chunk__14936_14946 = G__14953;
count__14937_14947 = G__14954;
i__14938_14948 = G__14955;
continue;
} else {
var temp__4657__auto___14956 = cljs.core.seq.call(null,seq__14935_14945);
if(temp__4657__auto___14956){
var seq__14935_14957__$1 = temp__4657__auto___14956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14935_14957__$1)){
var c__13990__auto___14958 = cljs.core.chunk_first.call(null,seq__14935_14957__$1);
var G__14959 = cljs.core.chunk_rest.call(null,seq__14935_14957__$1);
var G__14960 = c__13990__auto___14958;
var G__14961 = cljs.core.count.call(null,c__13990__auto___14958);
var G__14962 = (0);
seq__14935_14945 = G__14959;
chunk__14936_14946 = G__14960;
count__14937_14947 = G__14961;
i__14938_14948 = G__14962;
continue;
} else {
var vec__14940_14963 = cljs.core.first.call(null,seq__14935_14957__$1);
var k_14964__$1 = cljs.core.nth.call(null,vec__14940_14963,(0),null);
var v_14965__$1 = cljs.core.nth.call(null,vec__14940_14963,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_14964__$1,v_14965__$1);

var G__14966 = cljs.core.next.call(null,seq__14935_14957__$1);
var G__14967 = null;
var G__14968 = (0);
var G__14969 = (0);
seq__14935_14945 = G__14966;
chunk__14936_14946 = G__14967;
count__14937_14947 = G__14968;
i__14938_14948 = G__14969;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14927){
var G__14928 = cljs.core.first.call(null,seq14927);
var seq14927__$1 = cljs.core.next.call(null,seq14927);
var G__14929 = cljs.core.first.call(null,seq14927__$1);
var seq14927__$2 = cljs.core.next.call(null,seq14927__$1);
var G__14930 = cljs.core.first.call(null,seq14927__$2);
var seq14927__$3 = cljs.core.next.call(null,seq14927__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14928,G__14929,G__14930,seq14927__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args14970 = [];
var len__14245__auto___14980 = arguments.length;
var i__14246__auto___14981 = (0);
while(true){
if((i__14246__auto___14981 < len__14245__auto___14980)){
args14970.push((arguments[i__14246__auto___14981]));

var G__14982 = (i__14246__auto___14981 + (1));
i__14246__auto___14981 = G__14982;
continue;
} else {
}
break;
}

var G__14975 = args14970.length;
switch (G__14975) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args14970.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_14984__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_14984__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_14984__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14976_14985 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__14977_14986 = null;
var count__14978_14987 = (0);
var i__14979_14988 = (0);
while(true){
if((i__14979_14988 < count__14978_14987)){
var k_14989__$1 = cljs.core._nth.call(null,chunk__14977_14986,i__14979_14988);
dommy.core.remove_attr_BANG_.call(null,elem,k_14989__$1);

var G__14990 = seq__14976_14985;
var G__14991 = chunk__14977_14986;
var G__14992 = count__14978_14987;
var G__14993 = (i__14979_14988 + (1));
seq__14976_14985 = G__14990;
chunk__14977_14986 = G__14991;
count__14978_14987 = G__14992;
i__14979_14988 = G__14993;
continue;
} else {
var temp__4657__auto___14994 = cljs.core.seq.call(null,seq__14976_14985);
if(temp__4657__auto___14994){
var seq__14976_14995__$1 = temp__4657__auto___14994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14976_14995__$1)){
var c__13990__auto___14996 = cljs.core.chunk_first.call(null,seq__14976_14995__$1);
var G__14997 = cljs.core.chunk_rest.call(null,seq__14976_14995__$1);
var G__14998 = c__13990__auto___14996;
var G__14999 = cljs.core.count.call(null,c__13990__auto___14996);
var G__15000 = (0);
seq__14976_14985 = G__14997;
chunk__14977_14986 = G__14998;
count__14978_14987 = G__14999;
i__14979_14988 = G__15000;
continue;
} else {
var k_15001__$1 = cljs.core.first.call(null,seq__14976_14995__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_15001__$1);

var G__15002 = cljs.core.next.call(null,seq__14976_14995__$1);
var G__15003 = null;
var G__15004 = (0);
var G__15005 = (0);
seq__14976_14985 = G__15002;
chunk__14977_14986 = G__15003;
count__14978_14987 = G__15004;
i__14979_14988 = G__15005;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14971){
var G__14972 = cljs.core.first.call(null,seq14971);
var seq14971__$1 = cljs.core.next.call(null,seq14971);
var G__14973 = cljs.core.first.call(null,seq14971__$1);
var seq14971__$2 = cljs.core.next.call(null,seq14971__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14972,G__14973,seq14971__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args15006 = [];
var len__14245__auto___15009 = arguments.length;
var i__14246__auto___15010 = (0);
while(true){
if((i__14246__auto___15010 < len__14245__auto___15009)){
args15006.push((arguments[i__14246__auto___15010]));

var G__15011 = (i__14246__auto___15010 + (1));
i__14246__auto___15010 = G__15011;
continue;
} else {
}
break;
}

var G__15008 = args15006.length;
switch (G__15008) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15006.length)].join('')));

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
var args15013 = [];
var len__14245__auto___15031 = arguments.length;
var i__14246__auto___15032 = (0);
while(true){
if((i__14246__auto___15032 < len__14245__auto___15031)){
args15013.push((arguments[i__14246__auto___15032]));

var G__15033 = (i__14246__auto___15032 + (1));
i__14246__auto___15032 = G__15033;
continue;
} else {
}
break;
}

var G__15018 = args15013.length;
switch (G__15018) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15013.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___15035 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15035)){
var class_list_15036 = temp__4655__auto___15035;
var seq__15019_15037 = cljs.core.seq.call(null,classes__$1);
var chunk__15020_15038 = null;
var count__15021_15039 = (0);
var i__15022_15040 = (0);
while(true){
if((i__15022_15040 < count__15021_15039)){
var c_15041 = cljs.core._nth.call(null,chunk__15020_15038,i__15022_15040);
class_list_15036.add(c_15041);

var G__15042 = seq__15019_15037;
var G__15043 = chunk__15020_15038;
var G__15044 = count__15021_15039;
var G__15045 = (i__15022_15040 + (1));
seq__15019_15037 = G__15042;
chunk__15020_15038 = G__15043;
count__15021_15039 = G__15044;
i__15022_15040 = G__15045;
continue;
} else {
var temp__4657__auto___15046 = cljs.core.seq.call(null,seq__15019_15037);
if(temp__4657__auto___15046){
var seq__15019_15047__$1 = temp__4657__auto___15046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15019_15047__$1)){
var c__13990__auto___15048 = cljs.core.chunk_first.call(null,seq__15019_15047__$1);
var G__15049 = cljs.core.chunk_rest.call(null,seq__15019_15047__$1);
var G__15050 = c__13990__auto___15048;
var G__15051 = cljs.core.count.call(null,c__13990__auto___15048);
var G__15052 = (0);
seq__15019_15037 = G__15049;
chunk__15020_15038 = G__15050;
count__15021_15039 = G__15051;
i__15022_15040 = G__15052;
continue;
} else {
var c_15053 = cljs.core.first.call(null,seq__15019_15047__$1);
class_list_15036.add(c_15053);

var G__15054 = cljs.core.next.call(null,seq__15019_15047__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__15019_15037 = G__15054;
chunk__15020_15038 = G__15055;
count__15021_15039 = G__15056;
i__15022_15040 = G__15057;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15023_15058 = cljs.core.seq.call(null,classes__$1);
var chunk__15024_15059 = null;
var count__15025_15060 = (0);
var i__15026_15061 = (0);
while(true){
if((i__15026_15061 < count__15025_15060)){
var c_15062 = cljs.core._nth.call(null,chunk__15024_15059,i__15026_15061);
var class_name_15063 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_15063,c_15062))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_15063 === ""))?c_15062:[cljs.core.str(class_name_15063),cljs.core.str(" "),cljs.core.str(c_15062)].join('')));
}

var G__15064 = seq__15023_15058;
var G__15065 = chunk__15024_15059;
var G__15066 = count__15025_15060;
var G__15067 = (i__15026_15061 + (1));
seq__15023_15058 = G__15064;
chunk__15024_15059 = G__15065;
count__15025_15060 = G__15066;
i__15026_15061 = G__15067;
continue;
} else {
var temp__4657__auto___15068 = cljs.core.seq.call(null,seq__15023_15058);
if(temp__4657__auto___15068){
var seq__15023_15069__$1 = temp__4657__auto___15068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15023_15069__$1)){
var c__13990__auto___15070 = cljs.core.chunk_first.call(null,seq__15023_15069__$1);
var G__15071 = cljs.core.chunk_rest.call(null,seq__15023_15069__$1);
var G__15072 = c__13990__auto___15070;
var G__15073 = cljs.core.count.call(null,c__13990__auto___15070);
var G__15074 = (0);
seq__15023_15058 = G__15071;
chunk__15024_15059 = G__15072;
count__15025_15060 = G__15073;
i__15026_15061 = G__15074;
continue;
} else {
var c_15075 = cljs.core.first.call(null,seq__15023_15069__$1);
var class_name_15076 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_15076,c_15075))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_15076 === ""))?c_15075:[cljs.core.str(class_name_15076),cljs.core.str(" "),cljs.core.str(c_15075)].join('')));
}

var G__15077 = cljs.core.next.call(null,seq__15023_15069__$1);
var G__15078 = null;
var G__15079 = (0);
var G__15080 = (0);
seq__15023_15058 = G__15077;
chunk__15024_15059 = G__15078;
count__15025_15060 = G__15079;
i__15026_15061 = G__15080;
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
var seq__15027_15081 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__15028_15082 = null;
var count__15029_15083 = (0);
var i__15030_15084 = (0);
while(true){
if((i__15030_15084 < count__15029_15083)){
var c_15085 = cljs.core._nth.call(null,chunk__15028_15082,i__15030_15084);
dommy.core.add_class_BANG_.call(null,elem,c_15085);

var G__15086 = seq__15027_15081;
var G__15087 = chunk__15028_15082;
var G__15088 = count__15029_15083;
var G__15089 = (i__15030_15084 + (1));
seq__15027_15081 = G__15086;
chunk__15028_15082 = G__15087;
count__15029_15083 = G__15088;
i__15030_15084 = G__15089;
continue;
} else {
var temp__4657__auto___15090 = cljs.core.seq.call(null,seq__15027_15081);
if(temp__4657__auto___15090){
var seq__15027_15091__$1 = temp__4657__auto___15090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15027_15091__$1)){
var c__13990__auto___15092 = cljs.core.chunk_first.call(null,seq__15027_15091__$1);
var G__15093 = cljs.core.chunk_rest.call(null,seq__15027_15091__$1);
var G__15094 = c__13990__auto___15092;
var G__15095 = cljs.core.count.call(null,c__13990__auto___15092);
var G__15096 = (0);
seq__15027_15081 = G__15093;
chunk__15028_15082 = G__15094;
count__15029_15083 = G__15095;
i__15030_15084 = G__15096;
continue;
} else {
var c_15097 = cljs.core.first.call(null,seq__15027_15091__$1);
dommy.core.add_class_BANG_.call(null,elem,c_15097);

var G__15098 = cljs.core.next.call(null,seq__15027_15091__$1);
var G__15099 = null;
var G__15100 = (0);
var G__15101 = (0);
seq__15027_15081 = G__15098;
chunk__15028_15082 = G__15099;
count__15029_15083 = G__15100;
i__15030_15084 = G__15101;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15014){
var G__15015 = cljs.core.first.call(null,seq15014);
var seq15014__$1 = cljs.core.next.call(null,seq15014);
var G__15016 = cljs.core.first.call(null,seq15014__$1);
var seq15014__$2 = cljs.core.next.call(null,seq15014__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15015,G__15016,seq15014__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args15102 = [];
var len__14245__auto___15112 = arguments.length;
var i__14246__auto___15113 = (0);
while(true){
if((i__14246__auto___15113 < len__14245__auto___15112)){
args15102.push((arguments[i__14246__auto___15113]));

var G__15114 = (i__14246__auto___15113 + (1));
i__14246__auto___15113 = G__15114;
continue;
} else {
}
break;
}

var G__15107 = args15102.length;
switch (G__15107) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15102.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___15116 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15116)){
var class_list_15117 = temp__4655__auto___15116;
class_list_15117.remove(c__$1);
} else {
var class_name_15118 = dommy.core.class$.call(null,elem);
var new_class_name_15119 = dommy.utils.remove_class_str.call(null,class_name_15118,c__$1);
if((class_name_15118 === new_class_name_15119)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_15119);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15108 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__15109 = null;
var count__15110 = (0);
var i__15111 = (0);
while(true){
if((i__15111 < count__15110)){
var c = cljs.core._nth.call(null,chunk__15109,i__15111);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__15120 = seq__15108;
var G__15121 = chunk__15109;
var G__15122 = count__15110;
var G__15123 = (i__15111 + (1));
seq__15108 = G__15120;
chunk__15109 = G__15121;
count__15110 = G__15122;
i__15111 = G__15123;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15108);
if(temp__4657__auto__){
var seq__15108__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15108__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__15108__$1);
var G__15124 = cljs.core.chunk_rest.call(null,seq__15108__$1);
var G__15125 = c__13990__auto__;
var G__15126 = cljs.core.count.call(null,c__13990__auto__);
var G__15127 = (0);
seq__15108 = G__15124;
chunk__15109 = G__15125;
count__15110 = G__15126;
i__15111 = G__15127;
continue;
} else {
var c = cljs.core.first.call(null,seq__15108__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__15128 = cljs.core.next.call(null,seq__15108__$1);
var G__15129 = null;
var G__15130 = (0);
var G__15131 = (0);
seq__15108 = G__15128;
chunk__15109 = G__15129;
count__15110 = G__15130;
i__15111 = G__15131;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first.call(null,seq15103);
var seq15103__$1 = cljs.core.next.call(null,seq15103);
var G__15105 = cljs.core.first.call(null,seq15103__$1);
var seq15103__$2 = cljs.core.next.call(null,seq15103__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15104,G__15105,seq15103__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args15132 = [];
var len__14245__auto___15135 = arguments.length;
var i__14246__auto___15136 = (0);
while(true){
if((i__14246__auto___15136 < len__14245__auto___15135)){
args15132.push((arguments[i__14246__auto___15136]));

var G__15137 = (i__14246__auto___15136 + (1));
i__14246__auto___15136 = G__15137;
continue;
} else {
}
break;
}

var G__15134 = args15132.length;
switch (G__15134) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15132.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___15139 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15139)){
var class_list_15140 = temp__4655__auto___15139;
class_list_15140.toggle(c__$1);
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
var args15141 = [];
var len__14245__auto___15144 = arguments.length;
var i__14246__auto___15145 = (0);
while(true){
if((i__14246__auto___15145 < len__14245__auto___15144)){
args15141.push((arguments[i__14246__auto___15145]));

var G__15146 = (i__14246__auto___15145 + (1));
i__14246__auto___15145 = G__15146;
continue;
} else {
}
break;
}

var G__15143 = args15141.length;
switch (G__15143) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15141.length)].join('')));

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
var args15148 = [];
var len__14245__auto___15151 = arguments.length;
var i__14246__auto___15152 = (0);
while(true){
if((i__14246__auto___15152 < len__14245__auto___15151)){
args15148.push((arguments[i__14246__auto___15152]));

var G__15153 = (i__14246__auto___15152 + (1));
i__14246__auto___15152 = G__15153;
continue;
} else {
}
break;
}

var G__15150 = args15148.length;
switch (G__15150) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15148.length)].join('')));

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
var args15155 = [];
var len__14245__auto___15166 = arguments.length;
var i__14246__auto___15167 = (0);
while(true){
if((i__14246__auto___15167 < len__14245__auto___15166)){
args15155.push((arguments[i__14246__auto___15167]));

var G__15168 = (i__14246__auto___15167 + (1));
i__14246__auto___15167 = G__15168;
continue;
} else {
}
break;
}

var G__15160 = args15155.length;
switch (G__15160) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15155.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15161 = parent;
G__15161.appendChild(child);

return G__15161;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15162_15170 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__15163_15171 = null;
var count__15164_15172 = (0);
var i__15165_15173 = (0);
while(true){
if((i__15165_15173 < count__15164_15172)){
var c_15174 = cljs.core._nth.call(null,chunk__15163_15171,i__15165_15173);
dommy.core.append_BANG_.call(null,parent,c_15174);

var G__15175 = seq__15162_15170;
var G__15176 = chunk__15163_15171;
var G__15177 = count__15164_15172;
var G__15178 = (i__15165_15173 + (1));
seq__15162_15170 = G__15175;
chunk__15163_15171 = G__15176;
count__15164_15172 = G__15177;
i__15165_15173 = G__15178;
continue;
} else {
var temp__4657__auto___15179 = cljs.core.seq.call(null,seq__15162_15170);
if(temp__4657__auto___15179){
var seq__15162_15180__$1 = temp__4657__auto___15179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15162_15180__$1)){
var c__13990__auto___15181 = cljs.core.chunk_first.call(null,seq__15162_15180__$1);
var G__15182 = cljs.core.chunk_rest.call(null,seq__15162_15180__$1);
var G__15183 = c__13990__auto___15181;
var G__15184 = cljs.core.count.call(null,c__13990__auto___15181);
var G__15185 = (0);
seq__15162_15170 = G__15182;
chunk__15163_15171 = G__15183;
count__15164_15172 = G__15184;
i__15165_15173 = G__15185;
continue;
} else {
var c_15186 = cljs.core.first.call(null,seq__15162_15180__$1);
dommy.core.append_BANG_.call(null,parent,c_15186);

var G__15187 = cljs.core.next.call(null,seq__15162_15180__$1);
var G__15188 = null;
var G__15189 = (0);
var G__15190 = (0);
seq__15162_15170 = G__15187;
chunk__15163_15171 = G__15188;
count__15164_15172 = G__15189;
i__15165_15173 = G__15190;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15156){
var G__15157 = cljs.core.first.call(null,seq15156);
var seq15156__$1 = cljs.core.next.call(null,seq15156);
var G__15158 = cljs.core.first.call(null,seq15156__$1);
var seq15156__$2 = cljs.core.next.call(null,seq15156__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15157,G__15158,seq15156__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args15191 = [];
var len__14245__auto___15202 = arguments.length;
var i__14246__auto___15203 = (0);
while(true){
if((i__14246__auto___15203 < len__14245__auto___15202)){
args15191.push((arguments[i__14246__auto___15203]));

var G__15204 = (i__14246__auto___15203 + (1));
i__14246__auto___15203 = G__15204;
continue;
} else {
}
break;
}

var G__15196 = args15191.length;
switch (G__15196) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14264__auto__ = (new cljs.core.IndexedSeq(args15191.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14264__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15197 = parent;
G__15197.insertBefore(child,parent.firstChild);

return G__15197;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15198_15206 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__15199_15207 = null;
var count__15200_15208 = (0);
var i__15201_15209 = (0);
while(true){
if((i__15201_15209 < count__15200_15208)){
var c_15210 = cljs.core._nth.call(null,chunk__15199_15207,i__15201_15209);
dommy.core.prepend_BANG_.call(null,parent,c_15210);

var G__15211 = seq__15198_15206;
var G__15212 = chunk__15199_15207;
var G__15213 = count__15200_15208;
var G__15214 = (i__15201_15209 + (1));
seq__15198_15206 = G__15211;
chunk__15199_15207 = G__15212;
count__15200_15208 = G__15213;
i__15201_15209 = G__15214;
continue;
} else {
var temp__4657__auto___15215 = cljs.core.seq.call(null,seq__15198_15206);
if(temp__4657__auto___15215){
var seq__15198_15216__$1 = temp__4657__auto___15215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15198_15216__$1)){
var c__13990__auto___15217 = cljs.core.chunk_first.call(null,seq__15198_15216__$1);
var G__15218 = cljs.core.chunk_rest.call(null,seq__15198_15216__$1);
var G__15219 = c__13990__auto___15217;
var G__15220 = cljs.core.count.call(null,c__13990__auto___15217);
var G__15221 = (0);
seq__15198_15206 = G__15218;
chunk__15199_15207 = G__15219;
count__15200_15208 = G__15220;
i__15201_15209 = G__15221;
continue;
} else {
var c_15222 = cljs.core.first.call(null,seq__15198_15216__$1);
dommy.core.prepend_BANG_.call(null,parent,c_15222);

var G__15223 = cljs.core.next.call(null,seq__15198_15216__$1);
var G__15224 = null;
var G__15225 = (0);
var G__15226 = (0);
seq__15198_15206 = G__15223;
chunk__15199_15207 = G__15224;
count__15200_15208 = G__15225;
i__15201_15209 = G__15226;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15192){
var G__15193 = cljs.core.first.call(null,seq15192);
var seq15192__$1 = cljs.core.next.call(null,seq15192);
var G__15194 = cljs.core.first.call(null,seq15192__$1);
var seq15192__$2 = cljs.core.next.call(null,seq15192__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15193,G__15194,seq15192__$2);
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
var temp__4655__auto___15227 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15227)){
var next_15228 = temp__4655__auto___15227;
dommy.core.insert_before_BANG_.call(null,elem,next_15228);
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
var args15229 = [];
var len__14245__auto___15233 = arguments.length;
var i__14246__auto___15234 = (0);
while(true){
if((i__14246__auto___15234 < len__14245__auto___15233)){
args15229.push((arguments[i__14246__auto___15234]));

var G__15235 = (i__14246__auto___15234 + (1));
i__14246__auto___15234 = G__15235;
continue;
} else {
}
break;
}

var G__15231 = args15229.length;
switch (G__15231) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15229.length)].join('')));

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
var G__15232 = p;
G__15232.removeChild(elem);

return G__15232;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15237){
var vec__15238 = p__15237;
var special_mouse_event = cljs.core.nth.call(null,vec__15238,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__15238,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__15238,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15238,special_mouse_event,real_mouse_event){
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
;})(vec__15238,special_mouse_event,real_mouse_event))
});})(vec__15238,special_mouse_event,real_mouse_event))
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
var len__14245__auto___15242 = arguments.length;
var i__14246__auto___15243 = (0);
while(true){
if((i__14246__auto___15243 < len__14245__auto___15242)){
args__14252__auto__.push((arguments[i__14246__auto___15243]));

var G__15244 = (i__14246__auto___15243 + (1));
i__14246__auto___15243 = G__15244;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15239){
var G__15240 = cljs.core.first.call(null,seq15239);
var seq15239__$1 = cljs.core.next.call(null,seq15239);
var G__15241 = cljs.core.first.call(null,seq15239__$1);
var seq15239__$2 = cljs.core.next.call(null,seq15239__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15240,G__15241,seq15239__$2);
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
var len__14245__auto___15270 = arguments.length;
var i__14246__auto___15271 = (0);
while(true){
if((i__14246__auto___15271 < len__14245__auto___15270)){
args__14252__auto__.push((arguments[i__14246__auto___15271]));

var G__15272 = (i__14246__auto___15271 + (1));
i__14246__auto___15271 = G__15272;
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

var vec__15247_15273 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15274 = cljs.core.nth.call(null,vec__15247_15273,(0),null);
var selector_15275 = cljs.core.nth.call(null,vec__15247_15273,(1),null);
var seq__15248_15276 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15255_15277 = null;
var count__15256_15278 = (0);
var i__15257_15279 = (0);
while(true){
if((i__15257_15279 < count__15256_15278)){
var vec__15264_15280 = cljs.core._nth.call(null,chunk__15255_15277,i__15257_15279);
var orig_type_15281 = cljs.core.nth.call(null,vec__15264_15280,(0),null);
var f_15282 = cljs.core.nth.call(null,vec__15264_15280,(1),null);
var seq__15258_15283 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15281,cljs.core.PersistentArrayMap.fromArray([orig_type_15281,cljs.core.identity], true, false)));
var chunk__15260_15284 = null;
var count__15261_15285 = (0);
var i__15262_15286 = (0);
while(true){
if((i__15262_15286 < count__15261_15285)){
var vec__15265_15287 = cljs.core._nth.call(null,chunk__15260_15284,i__15262_15286);
var actual_type_15288 = cljs.core.nth.call(null,vec__15265_15287,(0),null);
var factory_15289 = cljs.core.nth.call(null,vec__15265_15287,(1),null);
var canonical_f_15290 = (cljs.core.truth_(selector_15275)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15274,selector_15275):cljs.core.identity).call(null,factory_15289.call(null,f_15282));
dommy.core.update_event_listeners_BANG_.call(null,elem_15274,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15275,actual_type_15288,f_15282], null),canonical_f_15290);

if(cljs.core.truth_(elem_15274.addEventListener)){
elem_15274.addEventListener(cljs.core.name.call(null,actual_type_15288),canonical_f_15290);
} else {
elem_15274.attachEvent(cljs.core.name.call(null,actual_type_15288),canonical_f_15290);
}

var G__15291 = seq__15258_15283;
var G__15292 = chunk__15260_15284;
var G__15293 = count__15261_15285;
var G__15294 = (i__15262_15286 + (1));
seq__15258_15283 = G__15291;
chunk__15260_15284 = G__15292;
count__15261_15285 = G__15293;
i__15262_15286 = G__15294;
continue;
} else {
var temp__4657__auto___15295 = cljs.core.seq.call(null,seq__15258_15283);
if(temp__4657__auto___15295){
var seq__15258_15296__$1 = temp__4657__auto___15295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15258_15296__$1)){
var c__13990__auto___15297 = cljs.core.chunk_first.call(null,seq__15258_15296__$1);
var G__15298 = cljs.core.chunk_rest.call(null,seq__15258_15296__$1);
var G__15299 = c__13990__auto___15297;
var G__15300 = cljs.core.count.call(null,c__13990__auto___15297);
var G__15301 = (0);
seq__15258_15283 = G__15298;
chunk__15260_15284 = G__15299;
count__15261_15285 = G__15300;
i__15262_15286 = G__15301;
continue;
} else {
var vec__15266_15302 = cljs.core.first.call(null,seq__15258_15296__$1);
var actual_type_15303 = cljs.core.nth.call(null,vec__15266_15302,(0),null);
var factory_15304 = cljs.core.nth.call(null,vec__15266_15302,(1),null);
var canonical_f_15305 = (cljs.core.truth_(selector_15275)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15274,selector_15275):cljs.core.identity).call(null,factory_15304.call(null,f_15282));
dommy.core.update_event_listeners_BANG_.call(null,elem_15274,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15275,actual_type_15303,f_15282], null),canonical_f_15305);

if(cljs.core.truth_(elem_15274.addEventListener)){
elem_15274.addEventListener(cljs.core.name.call(null,actual_type_15303),canonical_f_15305);
} else {
elem_15274.attachEvent(cljs.core.name.call(null,actual_type_15303),canonical_f_15305);
}

var G__15306 = cljs.core.next.call(null,seq__15258_15296__$1);
var G__15307 = null;
var G__15308 = (0);
var G__15309 = (0);
seq__15258_15283 = G__15306;
chunk__15260_15284 = G__15307;
count__15261_15285 = G__15308;
i__15262_15286 = G__15309;
continue;
}
} else {
}
}
break;
}

var G__15310 = seq__15248_15276;
var G__15311 = chunk__15255_15277;
var G__15312 = count__15256_15278;
var G__15313 = (i__15257_15279 + (1));
seq__15248_15276 = G__15310;
chunk__15255_15277 = G__15311;
count__15256_15278 = G__15312;
i__15257_15279 = G__15313;
continue;
} else {
var temp__4657__auto___15314 = cljs.core.seq.call(null,seq__15248_15276);
if(temp__4657__auto___15314){
var seq__15248_15315__$1 = temp__4657__auto___15314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15248_15315__$1)){
var c__13990__auto___15316 = cljs.core.chunk_first.call(null,seq__15248_15315__$1);
var G__15317 = cljs.core.chunk_rest.call(null,seq__15248_15315__$1);
var G__15318 = c__13990__auto___15316;
var G__15319 = cljs.core.count.call(null,c__13990__auto___15316);
var G__15320 = (0);
seq__15248_15276 = G__15317;
chunk__15255_15277 = G__15318;
count__15256_15278 = G__15319;
i__15257_15279 = G__15320;
continue;
} else {
var vec__15267_15321 = cljs.core.first.call(null,seq__15248_15315__$1);
var orig_type_15322 = cljs.core.nth.call(null,vec__15267_15321,(0),null);
var f_15323 = cljs.core.nth.call(null,vec__15267_15321,(1),null);
var seq__15249_15324 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15322,cljs.core.PersistentArrayMap.fromArray([orig_type_15322,cljs.core.identity], true, false)));
var chunk__15251_15325 = null;
var count__15252_15326 = (0);
var i__15253_15327 = (0);
while(true){
if((i__15253_15327 < count__15252_15326)){
var vec__15268_15328 = cljs.core._nth.call(null,chunk__15251_15325,i__15253_15327);
var actual_type_15329 = cljs.core.nth.call(null,vec__15268_15328,(0),null);
var factory_15330 = cljs.core.nth.call(null,vec__15268_15328,(1),null);
var canonical_f_15331 = (cljs.core.truth_(selector_15275)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15274,selector_15275):cljs.core.identity).call(null,factory_15330.call(null,f_15323));
dommy.core.update_event_listeners_BANG_.call(null,elem_15274,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15275,actual_type_15329,f_15323], null),canonical_f_15331);

if(cljs.core.truth_(elem_15274.addEventListener)){
elem_15274.addEventListener(cljs.core.name.call(null,actual_type_15329),canonical_f_15331);
} else {
elem_15274.attachEvent(cljs.core.name.call(null,actual_type_15329),canonical_f_15331);
}

var G__15332 = seq__15249_15324;
var G__15333 = chunk__15251_15325;
var G__15334 = count__15252_15326;
var G__15335 = (i__15253_15327 + (1));
seq__15249_15324 = G__15332;
chunk__15251_15325 = G__15333;
count__15252_15326 = G__15334;
i__15253_15327 = G__15335;
continue;
} else {
var temp__4657__auto___15336__$1 = cljs.core.seq.call(null,seq__15249_15324);
if(temp__4657__auto___15336__$1){
var seq__15249_15337__$1 = temp__4657__auto___15336__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15249_15337__$1)){
var c__13990__auto___15338 = cljs.core.chunk_first.call(null,seq__15249_15337__$1);
var G__15339 = cljs.core.chunk_rest.call(null,seq__15249_15337__$1);
var G__15340 = c__13990__auto___15338;
var G__15341 = cljs.core.count.call(null,c__13990__auto___15338);
var G__15342 = (0);
seq__15249_15324 = G__15339;
chunk__15251_15325 = G__15340;
count__15252_15326 = G__15341;
i__15253_15327 = G__15342;
continue;
} else {
var vec__15269_15343 = cljs.core.first.call(null,seq__15249_15337__$1);
var actual_type_15344 = cljs.core.nth.call(null,vec__15269_15343,(0),null);
var factory_15345 = cljs.core.nth.call(null,vec__15269_15343,(1),null);
var canonical_f_15346 = (cljs.core.truth_(selector_15275)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15274,selector_15275):cljs.core.identity).call(null,factory_15345.call(null,f_15323));
dommy.core.update_event_listeners_BANG_.call(null,elem_15274,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15275,actual_type_15344,f_15323], null),canonical_f_15346);

if(cljs.core.truth_(elem_15274.addEventListener)){
elem_15274.addEventListener(cljs.core.name.call(null,actual_type_15344),canonical_f_15346);
} else {
elem_15274.attachEvent(cljs.core.name.call(null,actual_type_15344),canonical_f_15346);
}

var G__15347 = cljs.core.next.call(null,seq__15249_15337__$1);
var G__15348 = null;
var G__15349 = (0);
var G__15350 = (0);
seq__15249_15324 = G__15347;
chunk__15251_15325 = G__15348;
count__15252_15326 = G__15349;
i__15253_15327 = G__15350;
continue;
}
} else {
}
}
break;
}

var G__15351 = cljs.core.next.call(null,seq__15248_15315__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__15248_15276 = G__15351;
chunk__15255_15277 = G__15352;
count__15256_15278 = G__15353;
i__15257_15279 = G__15354;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15245){
var G__15246 = cljs.core.first.call(null,seq15245);
var seq15245__$1 = cljs.core.next.call(null,seq15245);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15246,seq15245__$1);
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
var len__14245__auto___15380 = arguments.length;
var i__14246__auto___15381 = (0);
while(true){
if((i__14246__auto___15381 < len__14245__auto___15380)){
args__14252__auto__.push((arguments[i__14246__auto___15381]));

var G__15382 = (i__14246__auto___15381 + (1));
i__14246__auto___15381 = G__15382;
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

var vec__15357_15383 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15384 = cljs.core.nth.call(null,vec__15357_15383,(0),null);
var selector_15385 = cljs.core.nth.call(null,vec__15357_15383,(1),null);
var seq__15358_15386 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15365_15387 = null;
var count__15366_15388 = (0);
var i__15367_15389 = (0);
while(true){
if((i__15367_15389 < count__15366_15388)){
var vec__15374_15390 = cljs.core._nth.call(null,chunk__15365_15387,i__15367_15389);
var orig_type_15391 = cljs.core.nth.call(null,vec__15374_15390,(0),null);
var f_15392 = cljs.core.nth.call(null,vec__15374_15390,(1),null);
var seq__15368_15393 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15391,cljs.core.PersistentArrayMap.fromArray([orig_type_15391,cljs.core.identity], true, false)));
var chunk__15370_15394 = null;
var count__15371_15395 = (0);
var i__15372_15396 = (0);
while(true){
if((i__15372_15396 < count__15371_15395)){
var vec__15375_15397 = cljs.core._nth.call(null,chunk__15370_15394,i__15372_15396);
var actual_type_15398 = cljs.core.nth.call(null,vec__15375_15397,(0),null);
var __15399 = cljs.core.nth.call(null,vec__15375_15397,(1),null);
var keys_15400 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15385,actual_type_15398,f_15392], null);
var canonical_f_15401 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15384),keys_15400);
dommy.core.update_event_listeners_BANG_.call(null,elem_15384,dommy.utils.dissoc_in,keys_15400);

if(cljs.core.truth_(elem_15384.removeEventListener)){
elem_15384.removeEventListener(cljs.core.name.call(null,actual_type_15398),canonical_f_15401);
} else {
elem_15384.detachEvent(cljs.core.name.call(null,actual_type_15398),canonical_f_15401);
}

var G__15402 = seq__15368_15393;
var G__15403 = chunk__15370_15394;
var G__15404 = count__15371_15395;
var G__15405 = (i__15372_15396 + (1));
seq__15368_15393 = G__15402;
chunk__15370_15394 = G__15403;
count__15371_15395 = G__15404;
i__15372_15396 = G__15405;
continue;
} else {
var temp__4657__auto___15406 = cljs.core.seq.call(null,seq__15368_15393);
if(temp__4657__auto___15406){
var seq__15368_15407__$1 = temp__4657__auto___15406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15368_15407__$1)){
var c__13990__auto___15408 = cljs.core.chunk_first.call(null,seq__15368_15407__$1);
var G__15409 = cljs.core.chunk_rest.call(null,seq__15368_15407__$1);
var G__15410 = c__13990__auto___15408;
var G__15411 = cljs.core.count.call(null,c__13990__auto___15408);
var G__15412 = (0);
seq__15368_15393 = G__15409;
chunk__15370_15394 = G__15410;
count__15371_15395 = G__15411;
i__15372_15396 = G__15412;
continue;
} else {
var vec__15376_15413 = cljs.core.first.call(null,seq__15368_15407__$1);
var actual_type_15414 = cljs.core.nth.call(null,vec__15376_15413,(0),null);
var __15415 = cljs.core.nth.call(null,vec__15376_15413,(1),null);
var keys_15416 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15385,actual_type_15414,f_15392], null);
var canonical_f_15417 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15384),keys_15416);
dommy.core.update_event_listeners_BANG_.call(null,elem_15384,dommy.utils.dissoc_in,keys_15416);

if(cljs.core.truth_(elem_15384.removeEventListener)){
elem_15384.removeEventListener(cljs.core.name.call(null,actual_type_15414),canonical_f_15417);
} else {
elem_15384.detachEvent(cljs.core.name.call(null,actual_type_15414),canonical_f_15417);
}

var G__15418 = cljs.core.next.call(null,seq__15368_15407__$1);
var G__15419 = null;
var G__15420 = (0);
var G__15421 = (0);
seq__15368_15393 = G__15418;
chunk__15370_15394 = G__15419;
count__15371_15395 = G__15420;
i__15372_15396 = G__15421;
continue;
}
} else {
}
}
break;
}

var G__15422 = seq__15358_15386;
var G__15423 = chunk__15365_15387;
var G__15424 = count__15366_15388;
var G__15425 = (i__15367_15389 + (1));
seq__15358_15386 = G__15422;
chunk__15365_15387 = G__15423;
count__15366_15388 = G__15424;
i__15367_15389 = G__15425;
continue;
} else {
var temp__4657__auto___15426 = cljs.core.seq.call(null,seq__15358_15386);
if(temp__4657__auto___15426){
var seq__15358_15427__$1 = temp__4657__auto___15426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15358_15427__$1)){
var c__13990__auto___15428 = cljs.core.chunk_first.call(null,seq__15358_15427__$1);
var G__15429 = cljs.core.chunk_rest.call(null,seq__15358_15427__$1);
var G__15430 = c__13990__auto___15428;
var G__15431 = cljs.core.count.call(null,c__13990__auto___15428);
var G__15432 = (0);
seq__15358_15386 = G__15429;
chunk__15365_15387 = G__15430;
count__15366_15388 = G__15431;
i__15367_15389 = G__15432;
continue;
} else {
var vec__15377_15433 = cljs.core.first.call(null,seq__15358_15427__$1);
var orig_type_15434 = cljs.core.nth.call(null,vec__15377_15433,(0),null);
var f_15435 = cljs.core.nth.call(null,vec__15377_15433,(1),null);
var seq__15359_15436 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15434,cljs.core.PersistentArrayMap.fromArray([orig_type_15434,cljs.core.identity], true, false)));
var chunk__15361_15437 = null;
var count__15362_15438 = (0);
var i__15363_15439 = (0);
while(true){
if((i__15363_15439 < count__15362_15438)){
var vec__15378_15440 = cljs.core._nth.call(null,chunk__15361_15437,i__15363_15439);
var actual_type_15441 = cljs.core.nth.call(null,vec__15378_15440,(0),null);
var __15442 = cljs.core.nth.call(null,vec__15378_15440,(1),null);
var keys_15443 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15385,actual_type_15441,f_15435], null);
var canonical_f_15444 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15384),keys_15443);
dommy.core.update_event_listeners_BANG_.call(null,elem_15384,dommy.utils.dissoc_in,keys_15443);

if(cljs.core.truth_(elem_15384.removeEventListener)){
elem_15384.removeEventListener(cljs.core.name.call(null,actual_type_15441),canonical_f_15444);
} else {
elem_15384.detachEvent(cljs.core.name.call(null,actual_type_15441),canonical_f_15444);
}

var G__15445 = seq__15359_15436;
var G__15446 = chunk__15361_15437;
var G__15447 = count__15362_15438;
var G__15448 = (i__15363_15439 + (1));
seq__15359_15436 = G__15445;
chunk__15361_15437 = G__15446;
count__15362_15438 = G__15447;
i__15363_15439 = G__15448;
continue;
} else {
var temp__4657__auto___15449__$1 = cljs.core.seq.call(null,seq__15359_15436);
if(temp__4657__auto___15449__$1){
var seq__15359_15450__$1 = temp__4657__auto___15449__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15359_15450__$1)){
var c__13990__auto___15451 = cljs.core.chunk_first.call(null,seq__15359_15450__$1);
var G__15452 = cljs.core.chunk_rest.call(null,seq__15359_15450__$1);
var G__15453 = c__13990__auto___15451;
var G__15454 = cljs.core.count.call(null,c__13990__auto___15451);
var G__15455 = (0);
seq__15359_15436 = G__15452;
chunk__15361_15437 = G__15453;
count__15362_15438 = G__15454;
i__15363_15439 = G__15455;
continue;
} else {
var vec__15379_15456 = cljs.core.first.call(null,seq__15359_15450__$1);
var actual_type_15457 = cljs.core.nth.call(null,vec__15379_15456,(0),null);
var __15458 = cljs.core.nth.call(null,vec__15379_15456,(1),null);
var keys_15459 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15385,actual_type_15457,f_15435], null);
var canonical_f_15460 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15384),keys_15459);
dommy.core.update_event_listeners_BANG_.call(null,elem_15384,dommy.utils.dissoc_in,keys_15459);

if(cljs.core.truth_(elem_15384.removeEventListener)){
elem_15384.removeEventListener(cljs.core.name.call(null,actual_type_15457),canonical_f_15460);
} else {
elem_15384.detachEvent(cljs.core.name.call(null,actual_type_15457),canonical_f_15460);
}

var G__15461 = cljs.core.next.call(null,seq__15359_15450__$1);
var G__15462 = null;
var G__15463 = (0);
var G__15464 = (0);
seq__15359_15436 = G__15461;
chunk__15361_15437 = G__15462;
count__15362_15438 = G__15463;
i__15363_15439 = G__15464;
continue;
}
} else {
}
}
break;
}

var G__15465 = cljs.core.next.call(null,seq__15358_15427__$1);
var G__15466 = null;
var G__15467 = (0);
var G__15468 = (0);
seq__15358_15386 = G__15465;
chunk__15365_15387 = G__15466;
count__15366_15388 = G__15467;
i__15367_15389 = G__15468;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15355){
var G__15356 = cljs.core.first.call(null,seq15355);
var seq15355__$1 = cljs.core.next.call(null,seq15355);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15356,seq15355__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___15478 = arguments.length;
var i__14246__auto___15479 = (0);
while(true){
if((i__14246__auto___15479 < len__14245__auto___15478)){
args__14252__auto__.push((arguments[i__14246__auto___15479]));

var G__15480 = (i__14246__auto___15479 + (1));
i__14246__auto___15479 = G__15480;
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

var vec__15471_15481 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_15482 = cljs.core.nth.call(null,vec__15471_15481,(0),null);
var selector_15483 = cljs.core.nth.call(null,vec__15471_15481,(1),null);
var seq__15472_15484 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__15473_15485 = null;
var count__15474_15486 = (0);
var i__15475_15487 = (0);
while(true){
if((i__15475_15487 < count__15474_15486)){
var vec__15476_15488 = cljs.core._nth.call(null,chunk__15473_15485,i__15475_15487);
var type_15489 = cljs.core.nth.call(null,vec__15476_15488,(0),null);
var f_15490 = cljs.core.nth.call(null,vec__15476_15488,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15489,((function (seq__15472_15484,chunk__15473_15485,count__15474_15486,i__15475_15487,vec__15476_15488,type_15489,f_15490,vec__15471_15481,elem_15482,selector_15483){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15489,dommy$core$this_fn);

return f_15490.call(null,e);
});})(seq__15472_15484,chunk__15473_15485,count__15474_15486,i__15475_15487,vec__15476_15488,type_15489,f_15490,vec__15471_15481,elem_15482,selector_15483))
);

var G__15491 = seq__15472_15484;
var G__15492 = chunk__15473_15485;
var G__15493 = count__15474_15486;
var G__15494 = (i__15475_15487 + (1));
seq__15472_15484 = G__15491;
chunk__15473_15485 = G__15492;
count__15474_15486 = G__15493;
i__15475_15487 = G__15494;
continue;
} else {
var temp__4657__auto___15495 = cljs.core.seq.call(null,seq__15472_15484);
if(temp__4657__auto___15495){
var seq__15472_15496__$1 = temp__4657__auto___15495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15472_15496__$1)){
var c__13990__auto___15497 = cljs.core.chunk_first.call(null,seq__15472_15496__$1);
var G__15498 = cljs.core.chunk_rest.call(null,seq__15472_15496__$1);
var G__15499 = c__13990__auto___15497;
var G__15500 = cljs.core.count.call(null,c__13990__auto___15497);
var G__15501 = (0);
seq__15472_15484 = G__15498;
chunk__15473_15485 = G__15499;
count__15474_15486 = G__15500;
i__15475_15487 = G__15501;
continue;
} else {
var vec__15477_15502 = cljs.core.first.call(null,seq__15472_15496__$1);
var type_15503 = cljs.core.nth.call(null,vec__15477_15502,(0),null);
var f_15504 = cljs.core.nth.call(null,vec__15477_15502,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_15503,((function (seq__15472_15484,chunk__15473_15485,count__15474_15486,i__15475_15487,vec__15477_15502,type_15503,f_15504,seq__15472_15496__$1,temp__4657__auto___15495,vec__15471_15481,elem_15482,selector_15483){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_15503,dommy$core$this_fn);

return f_15504.call(null,e);
});})(seq__15472_15484,chunk__15473_15485,count__15474_15486,i__15475_15487,vec__15477_15502,type_15503,f_15504,seq__15472_15496__$1,temp__4657__auto___15495,vec__15471_15481,elem_15482,selector_15483))
);

var G__15505 = cljs.core.next.call(null,seq__15472_15496__$1);
var G__15506 = null;
var G__15507 = (0);
var G__15508 = (0);
seq__15472_15484 = G__15505;
chunk__15473_15485 = G__15506;
count__15474_15486 = G__15507;
i__15475_15487 = G__15508;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15469){
var G__15470 = cljs.core.first.call(null,seq15469);
var seq15469__$1 = cljs.core.next.call(null,seq15469);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15470,seq15469__$1);
});

//# sourceMappingURL=core.js.map?rel=1464515095553