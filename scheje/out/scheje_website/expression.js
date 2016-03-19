// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje_website.expression');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
scheje_website.expression.try_read = (function scheje_website$expression$try_read(rdr,feature){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null).call(null,feature))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null),new cljs.core.Symbol(null,"feature","feature",1667774179,null))))].join('')));
}

if(cljs.core.truth_(rdr)){
return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.PersistentHashSet.fromArray([feature], true),new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword("scheje-website.expression","EOF","scheje-website.expression/EOF",-683759069)], null),rdr);
} else {
return null;
}
});
scheje_website.expression.lined_read = (function scheje_website$expression$lined_read(var_args){
var args17120 = [];
var len__14245__auto___17123 = arguments.length;
var i__14246__auto___17124 = (0);
while(true){
if((i__14246__auto___17124 < len__14245__auto___17123)){
args17120.push((arguments[i__14246__auto___17124]));

var G__17125 = (i__14246__auto___17124 + (1));
i__14246__auto___17124 = G__17125;
continue;
} else {
}
break;
}

var G__17122 = args17120.length;
switch (G__17122) {
case 1:
return scheje_website.expression.lined_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return scheje_website.expression.lined_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17120.length)].join('')));

}
});

scheje_website.expression.lined_read.cljs$core$IFn$_invoke$arity$1 = (function (string){
return scheje_website.expression.lined_read.call(null,string,new cljs.core.Keyword(null,"clj","clj",-660495428));
});

scheje_website.expression.lined_read.cljs$core$IFn$_invoke$arity$2 = (function (string,feature){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,string);
return cljs.core.take_while.call(null,((function (rdr){
return (function (p1__17119_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("scheje-website.expression","EOF","scheje-website.expression/EOF",-683759069),p1__17119_SHARP_);
});})(rdr))
,cljs.core.repeatedly.call(null,((function (rdr){
return (function (){
return scheje_website.expression.try_read.call(null,rdr,feature);
});})(rdr))
));
});

scheje_website.expression.lined_read.cljs$lang$maxFixedArity = 2;
scheje_website.expression.find_form = (function scheje_website$expression$find_form(forms,pos){
var cur_line = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos) + (1));
var cur_col = new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(pos);
var prev = null;
var left = forms;
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,left);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var map__17129 = cljs.core.meta.call(null,f);
var map__17129__$1 = ((((!((map__17129 == null)))?((((map__17129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17129):map__17129);
var line = cljs.core.get.call(null,map__17129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.call(null,map__17129__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.call(null,map__17129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.call(null,map__17129__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
if(((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,line,cur_line))){
return f;
} else {
if(cljs.core.truth_((function (){var and__13175__auto__ = end_line;
if(cljs.core.truth_(and__13175__auto__)){
var and__13175__auto____$1 = line;
if(cljs.core.truth_(and__13175__auto____$1)){
return ((line <= cur_line)) && ((end_line >= cur_line));
} else {
return and__13175__auto____$1;
}
} else {
return and__13175__auto__;
}
})())){
return f;
} else {
var G__17131 = f;
var G__17132 = cljs.core.rest.call(null,left);
prev = G__17131;
left = G__17132;
continue;

}
}
} else {
return null;
}
break;
}
});
scheje_website.expression.is_non_clojure_QMARK_ = (function scheje_website$expression$is_non_clojure_QMARK_(s){
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.pr_str.call(null,s),(0)),"#")) && (!(cljs.core.set_QMARK_.call(null,s)));
});
scheje_website.expression.__GT_ns_sym = (function scheje_website$expression$__GT_ns_sym(nsp){
return cljs.core.symbol.call(null,[cljs.core.str(nsp)].join(''));
});
scheje_website.expression.trim_last = (function scheje_website$expression$trim_last(s,n){
var size = cljs.core.count.call(null,s);
return cljs.core.subs.call(null,s,(0),(size - n));
});
scheje_website.expression.meta_QMARK_ = (function scheje_website$expression$meta_QMARK_(thing){
if((thing instanceof clojure.lang.IObj)){
return cljs.core.meta.call(null,thing);
} else {
return null;
}
});
scheje_website.expression.clean_serialize = (function scheje_website$expression$clean_serialize(var_args){
var args__14252__auto__ = [];
var len__14245__auto___17138 = arguments.length;
var i__14246__auto___17139 = (0);
while(true){
if((i__14246__auto___17139 < len__14245__auto___17138)){
args__14252__auto__.push((arguments[i__14246__auto___17139]));

var G__17140 = (i__14246__auto___17139 + (1));
i__14246__auto___17139 = G__17140;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return scheje_website.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

scheje_website.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic = (function (res,p__17135){
var vec__17136 = p__17135;
var opts = cljs.core.nth.call(null,vec__17136,(0),null);
var _STAR_print_length_STAR_17137 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = (function (){var or__13187__auto__ = new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
var or__13187__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(or__13187__auto____$1)){
return or__13187__auto____$1;
} else {
return (1000);
}
}
})();

try{if(cljs.core.fn_QMARK_.call(null,res)){
return new cljs.core.Symbol(null,"fn","fn",465265323,null);
} else {
if(cljs.core.truth_(cljs.core.var_QMARK_.call(null,res))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allow-var?","allow-var?",-1089551792).cljs$core$IFn$_invoke$arity$1(opts))){
return res;
} else {
return [cljs.core.str(res)].join('');
}
} else {
if((res == null)){
return "nil";
} else {
if(res === false){
return "false";
} else {
if(cljs.core.truth_((function (){var and__13175__auto__ = (res instanceof clojure.lang.Atom);
if(and__13175__auto__){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__13175__auto__;
}
})())){
return [cljs.core.str("atom["),cljs.core.str(cljs.core.deref.call(null,res)),cljs.core.str("]")].join('');
} else {
if((res instanceof clojure.lang.Atom)){
return [cljs.core.str("atom")].join('');
} else {
if(cljs.core.truth_((function (){var and__13175__auto__ = typeof res === 'string';
if(and__13175__auto__){
return new cljs.core.Keyword(null,"verbatim","verbatim",814762204).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__13175__auto__;
}
})())){
return res;
} else {
return cljs.core.pr_str.call(null,res);

}
}
}
}
}
}
}
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_17137;
}});

scheje_website.expression.clean_serialize.cljs$lang$maxFixedArity = (1);

scheje_website.expression.clean_serialize.cljs$lang$applyTo = (function (seq17133){
var G__17134 = cljs.core.first.call(null,seq17133);
var seq17133__$1 = cljs.core.next.call(null,seq17133);
return scheje_website.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic(G__17134,seq17133__$1);
});
scheje_website.expression.truncate = (function scheje_website$expression$truncate(v){
return v;
});
scheje_website.expression.prep_code = (function scheje_website$expression$prep_code(code,meta){
if((cljs.core.not.call(null,meta)) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(meta)))){
return code;
} else {
return [cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.repeat.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$2(meta,(0)),"\n"))),cljs.core.str(code)].join('');
}
});
scheje_website.expression.clear_scheme_booleans = (function scheje_website$expression$clear_scheme_booleans(code){
var code_false = clojure.string.replace.call(null,code,/#f/,"false");
var code_true = clojure.string.replace.call(null,code_false,/#t/,"true");
return code_true;
});
scheje_website.expression.handle = (function scheje_website$expression$handle(msg,meta,pos){
try{var code = scheje_website.expression.prep_code.call(null,scheje_website.expression.clear_scheme_booleans.call(null,msg),null);
var forms = scheje_website.expression.lined_read.call(null,code);
var forms__$1 = ((cljs.core.not.call(null,pos))?forms:(function (){var form = scheje_website.expression.find_form.call(null,forms,pos);
if((form == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null);
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"syntax","syntax",-1637761676),"ok",new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
}catch (e17142){if((e17142 instanceof Error)){
var e = e17142;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"syntax","syntax",-1637761676),"ko",new cljs.core.Keyword(null,"forms","forms",2045992350),e], null);
} else {
throw e17142;

}
}});

//# sourceMappingURL=expression.js.map?rel=1464515098366