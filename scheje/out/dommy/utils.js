// Compiled by ClojureScript 1.7.170 {}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__14297){
var vec__14299 = p__14297;
var k = cljs.core.nth.call(null,vec__14299,(0),null);
var ks = cljs.core.nthnext.call(null,vec__14299,(1));
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__13175__auto__ = ks;
if(cljs.core.truth_(and__13175__auto__)){
return dommy$utils$dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__13175__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [cljs.core.str((function (){var G__14301 = cljs.core.namespace.call(null,s);
if((G__14301 == null)){
return null;
} else {
return [cljs.core.str(G__14301),cljs.core.str("/")].join('');
}
})()),cljs.core.str(cljs.core.name.call(null,s))].join('');
} else {
return s;
}
});
/**
 * Does `class-name` string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_match_QMARK_ = (function dommy$utils$class_match_QMARK_(class_name,class$,idx){
var and__13175__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__13175__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__13175__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.utils.class_index = (function dommy$utils$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.utils.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__14302 = (i + class$.length);
start_from = G__14302;
continue;
}
} else {
return null;
}
break;
}
});
dommy.utils.remove_class_str = (function dommy$utils$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4655__auto__ = dommy.utils.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
var G__14303 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__14303;
continue;
} else {
return class_name;
}
break;
}
});

//# sourceMappingURL=utils.js.map?rel=1464515094055