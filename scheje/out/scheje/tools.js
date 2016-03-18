// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje.tools');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.reader');
scheje.tools.get_syntax = (function scheje$tools$get_syntax(exp,syntaxes){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30823_SHARP_){
return cljs.core._EQ_.call(null,exp,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30823_SHARP_));
}),syntaxes));
});
scheje.tools.get_literals = (function scheje$tools$get_literals(syntaxes){
return cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"literals","literals",-427821498),syntaxes);
});
scheje.tools.literal_QMARK_ = (function scheje$tools$literal_QMARK_(exp,syntaxes){
return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([exp], true),scheje.tools.get_literals.call(null,syntaxes)) == null));
});
scheje.tools.atom_QMARK_ = (function scheje$tools$atom_QMARK_(x){
return !(cljs.core.seq_QMARK_.call(null,x));
});
scheje.tools.pairlis = (function scheje$tools$pairlis(x,y,z){
return cljs.core.into.call(null,z,cljs.core.map.call(null,(function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),x,y));
});
scheje.tools.is_valid_symbol_QMARK_ = (function scheje$tools$is_valid_symbol_QMARK_(s){
return cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["`",null,"\"",null,"#",null,"'",null,"(",null,")",null,",",null,";",null,"[",null,"{",null,"\\",null,"|",null,"]",null,"}",null], null), null),cljs.core.name.call(null,s)));
});
scheje.tools.get_symbols = (function scheje$tools$get_symbols(exp){
var res = cljs.core.atom.call(null,cljs.core.List.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,x);
} else {
return null;
}
});})(res))
,exp);

return cljs.core.deref.call(null,res);
});
scheje.tools.is_exp_valid_QMARK_ = (function scheje$tools$is_exp_valid_QMARK_(exp){
return cljs.core.every_QMARK_.call(null,scheje.tools.is_valid_symbol_QMARK_,scheje.tools.get_symbols.call(null,exp));
});
scheje.tools.rm_comments = (function scheje$tools$rm_comments(s){
return s.replace((new RegExp(";.*\n+","g")),"").replace((new RegExp(";.*$","g")),"");
});
scheje.tools.get_sexps = (function scheje$tools$get_sexps(s){
var remaining = scheje.tools.rm_comments.call(null,s);
var level = (0);
var result = cljs.core.PersistentVector.EMPTY;
var current_sexp = "";
while(true){
if(cljs.core.seq.call(null,remaining)){
var cur_char = cljs.core.first.call(null,remaining);
if(!(cljs.core._EQ_.call(null,"\n",cur_char))){
var cur_level = ((cljs.core._EQ_.call(null,cur_char,"("))?(level + (1)):((cljs.core._EQ_.call(null,cur_char,")"))?(level - (1)):level
));
var result__$1 = (((cur_level === (0)))?cljs.core.conj.call(null,result,[cljs.core.str(current_sexp),cljs.core.str(cur_char)].join('')):result);
var new_current_sexp = (((cur_level === (0)))?"":[cljs.core.str(current_sexp),cljs.core.str(cur_char)].join(''));
var G__30824 = cljs.core.rest.call(null,remaining);
var G__30825 = cur_level;
var G__30826 = result__$1;
var G__30827 = new_current_sexp;
remaining = G__30824;
level = G__30825;
result = G__30826;
current_sexp = G__30827;
continue;
} else {
var G__30828 = cljs.core.rest.call(null,remaining);
var G__30829 = level;
var G__30830 = result;
var G__30831 = current_sexp;
remaining = G__30828;
level = G__30829;
result = G__30830;
current_sexp = G__30831;
continue;
}
} else {
return result;
}
break;
}
});
/**
 * replace #t, :, /,... into valid clojure strs
 */
scheje.tools.sanitize_scm__GT_clj = (function scheje$tools$sanitize_scm__GT_clj(s){
return s.replace("#t","true").replace("#f","false").replace("==","_dbl_eq_").replace("/","_slash_").replace("#(","(vector ").replace("#","_hash_").replace(":","_column_").replace("@","_at_").replace("^","_circum_");
});
/**
 * replace clojure literals to scheme literals #t, #f, :, @...
 */
scheje.tools.print_clj__GT_scm = (function scheje$tools$print_clj__GT_scm(s){
return s.replace("true","#t").replace("false","#f").replace("_dbl_eq_","==").replace("_slash_","/").replace("[","#(").replace("]",")").replace("_hash_","#").replace("_column_",":").replace("_at_","@").replace("_circum_","^");
});
scheje.tools.format_eval = (function scheje$tools$format_eval(the_eval){
return scheje.tools.print_clj__GT_scm.call(null,cljs.core.pr_str.call(null,the_eval));
});
scheje.tools.slurp_scm_str = (function scheje$tools$slurp_scm_str(input){
return cljs.reader.read_string.call(null,scheje.tools.sanitize_scm__GT_clj.call(null,input));
});
scheje.tools.load_prog_from_file = (function scheje$tools$load_prog_from_file(f){
var file_string = (function (){var fs = require("fs");
return fs.readFileSync(f,"utf8");
})();
return cljs.core.map.call(null,cljs.reader.read_string,scheje.tools.get_sexps.call(null,scheje.tools.sanitize_scm__GT_clj.call(null,file_string)));
});

//# sourceMappingURL=tools.js.map?rel=1458338364190