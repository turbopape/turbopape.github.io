// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje.tools');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.reader');
scheje.tools.get_syntax = (function scheje$tools$get_syntax(exp,syntaxes){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14422_SHARP_){
return cljs.core._EQ_.call(null,exp,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__14422_SHARP_));
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
var G__14423 = cljs.core.rest.call(null,remaining);
var G__14424 = cur_level;
var G__14425 = result__$1;
var G__14426 = new_current_sexp;
remaining = G__14423;
level = G__14424;
result = G__14425;
current_sexp = G__14426;
continue;
} else {
var G__14427 = cljs.core.rest.call(null,remaining);
var G__14428 = level;
var G__14429 = result;
var G__14430 = current_sexp;
remaining = G__14427;
level = G__14428;
result = G__14429;
current_sexp = G__14430;
continue;
}
} else {
return result;
}
break;
}
});
scheje.tools.load_prog_from_file = (function scheje$tools$load_prog_from_file(f){
var file_string = (function (){var fs = require("fs");
return fs.readFileSync(f,"utf8");
})();
return cljs.core.map.call(null,cljs.reader.read_string,scheje.tools.get_sexps.call(null,file_string));
});

//# sourceMappingURL=tools.js.map?rel=1455728536295