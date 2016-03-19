// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('scheje.tools');
goog.require('scheje.unifier');
goog.require('scheje.expander');
goog.require('scheje.library');
scheje.interpreter.ts = cljs.core.atom.call(null,(0));
scheje.interpreter.form_eval;
scheje.interpreter.form_apply = (function scheje$interpreter$form_apply(exp,a){
try{if(((cljs.core.seq_QMARK_.call(null,exp)) || (cljs.core.sequential_QMARK_.call(null,exp))) && (cljs.core.seq.call(null,exp))){
try{var exp_head__14638 = cljs.core.first.call(null,exp);
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,exp_head__14638))){
var f = cljs.core.first.call(null,exp);
var r = cljs.core.rest.call(null,exp);
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"length","length",-2065447907,null))){
return cljs.core.count.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"eq?","eq?",2123283611,null))){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"pair?","pair?",181399999,null))){
return cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"=","=",-1501502141,null))){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"null?","null?",-1379283412,null))){
return cljs.core._EQ_.call(null,cljs.core.list(cljs.core.List.EMPTY),r);
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"zero?","zero?",325758897,null))){
return (cljs.core.first.call(null,r) === (0));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"car","car",84879915,null))){
return cljs.core.first.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"cdr","cdr",1766924024,null))){
return cljs.core.rest.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"cons","cons",755448454,null))){
return cljs.core.cons.call(null,cljs.core.first.call(null,r),cljs.core.second.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null))){
return scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"not","not",1044554643,null))){
return cljs.core.not.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null))){
return (cljs.core.first.call(null,r) instanceof cljs.core.Symbol);
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"number?","number?",-1747282210,null))){
return typeof cljs.core.first.call(null,r) === 'number';
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null))){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"vector","vector",-751469611,null))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r);
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"vector-ref","vector-ref",-724904916,null))){
return cljs.core.apply.call(null,cljs.core.get,r);
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"display","display",1882596959,null))){
return cljs.core.apply.call(null,cljs.core.println,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"+","+",-740910886,null))){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"-","-",-471816912,null))){
return cljs.core.apply.call(null,cljs.core._,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"_slash_","_slash_",1400598089,null))){
return cljs.core.apply.call(null,cljs.core._SLASH_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"/","/",-1371932971,null))){
return cljs.core.apply.call(null,cljs.core._SLASH_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"*","*",345799209,null))){
return cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"<","<",993667236,null))){
return cljs.core.apply.call(null,cljs.core._LT_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,">",">",1085014381,null))){
return cljs.core.apply.call(null,cljs.core._GT_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"<=","<=",1244895369,null))){
return cljs.core.apply.call(null,cljs.core._LT__EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,">=",">=",1016916022,null))){
return cljs.core.apply.call(null,cljs.core._GT__EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
var f_eval = scheje.interpreter.form_eval.call(null,f,a);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.first.call(null,f_eval))){
return scheje$interpreter$form_apply.call(null,cljs.core.cons.call(null,f_eval,r),a);
} else {
throw (new Error(cljs.core.pr_str.call(null,"Can't apply ",f_eval," on ",r)));
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e14654){if((e14654 instanceof Error)){
var e__3351__auto__ = e14654;
if((e__3351__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto__;
}
} else {
throw e14654;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14648){if((e14648 instanceof Error)){
var e__3351__auto__ = e14648;
if((e__3351__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.seq_QMARK_.call(null,exp)) || (cljs.core.sequential_QMARK_.call(null,exp))) && (cljs.core.seq.call(null,exp))){
try{var exp_head__14640 = cljs.core.first.call(null,exp);
if(((cljs.core.seq_QMARK_.call(null,exp_head__14640)) || (cljs.core.sequential_QMARK_.call(null,exp_head__14640))) && (cljs.core.seq.call(null,exp_head__14640))){
try{var exp_head__14642 = cljs.core.first.call(null,exp_head__14640);
if(cljs.core._EQ_.call(null,exp_head__14642,new cljs.core.Symbol(null,"lambda","lambda",157104302,null))){
try{var exp_tail__14643 = cljs.core.rest.call(null,exp_head__14640);
if(((cljs.core.seq_QMARK_.call(null,exp_tail__14643)) || (cljs.core.sequential_QMARK_.call(null,exp_tail__14643))) && (cljs.core.seq.call(null,exp_tail__14643))){
try{var exp_head__14640_tail__14645 = cljs.core.rest.call(null,exp_tail__14643);
if(((cljs.core.seq_QMARK_.call(null,exp_head__14640_tail__14645)) || (cljs.core.sequential_QMARK_.call(null,exp_head__14640_tail__14645))) && (cljs.core.seq.call(null,exp_head__14640_tail__14645))){
var body = cljs.core.first.call(null,exp_head__14640_tail__14645);
var env = cljs.core.rest.call(null,exp_head__14640_tail__14645);
var parms = cljs.core.first.call(null,exp_tail__14643);
var args = cljs.core.rest.call(null,exp);
if((parms instanceof cljs.core.Symbol)){
return scheje.interpreter.form_eval.call(null,body,cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.cons.call(null,a,env)),parms,args));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",1975675962,null),null], null), null),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.symbol,new cljs.core.Keyword(null,"sym","sym",-1444860305),scheje.unifier.get_symbol_idx,cljs.core.name),parms)))){
var nparms = cljs.core.butlast.call(null,cljs.core.butlast.call(null,parms));
var rparm = cljs.core.last.call(null,parms);
return scheje.interpreter.form_eval.call(null,body,cljs.core.merge.call(null,cljs.core.assoc.call(null,scheje.tools.pairlis.call(null,nparms,cljs.core.take.call(null,cljs.core.count.call(null,nparms),args),a),rparm,cljs.core.drop.call(null,cljs.core.count.call(null,nparms),args)),cljs.core.apply.call(null,cljs.core.merge,env)));
} else {
return scheje.interpreter.form_eval.call(null,body,scheje.tools.pairlis.call(null,parms,args,cljs.core.apply.call(null,cljs.core.merge,cljs.core.cons.call(null,(function (){var println = env;
return a;
})(),env))));

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e14653){if((e14653 instanceof Error)){
var e__3351__auto____$1 = e14653;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14652){if((e14652 instanceof Error)){
var e__3351__auto____$1 = e14652;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14651){if((e14651 instanceof Error)){
var e__3351__auto____$1 = e14651;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14650){if((e14650 instanceof Error)){
var e__3351__auto____$1 = e14650;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14649){if((e14649 instanceof Error)){
var e__3351__auto____$1 = e14649;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
return scheje.interpreter.form_eval.call(null,cljs.core.cons.call(null,scheje.interpreter.form_eval.call(null,cljs.core.first.call(null,exp),a),cljs.core.rest.call(null,exp)),a);
} else {
throw e__3351__auto____$1;
}
} else {
throw e14649;

}
}} else {
throw e__3351__auto__;
}
} else {
throw e14648;

}
}});
scheje.interpreter.evcon = (function scheje$interpreter$evcon(conds,a){
if(cljs.core.truth_(scheje.interpreter.form_eval.call(null,cljs.core.first.call(null,cljs.core.first.call(null,conds)),a))){
if(cljs.core.truth_((function (){var and__13175__auto__ = scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,conds))));
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,conds))));
} else {
return and__13175__auto__;
}
})())){
return cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,conds))));
} else {
return scheje.interpreter.form_eval.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,conds))),a);

}
} else {
return scheje$interpreter$evcon.call(null,cljs.core.rest.call(null,conds),a);

}
});
scheje.interpreter.evlis = (function scheje$interpreter$evlis(exps,a){
return cljs.core.map.call(null,(function (p1__14655_SHARP_){
return scheje.interpreter.form_eval.call(null,p1__14655_SHARP_,a);
}),exps);
});
scheje.interpreter.define_syntax = (function scheje$interpreter$define_syntax(a,syn_name,literals,pattern_rules){
return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax","syntax",-1637761676)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),syn_name,new cljs.core.Keyword(null,"literals","literals",-427821498),literals,new cljs.core.Keyword(null,"rules","rules",1198912366),pattern_rules], null));
});
scheje.interpreter.define = (function scheje$interpreter$define(a,sym,binding){
return cljs.core.assoc.call(null,a,sym,scheje.interpreter.form_eval.call(null,binding,a));
});
scheje.interpreter.sym_set_BANG_ = (function scheje$interpreter$sym_set_BANG_(a,sym,binding){
var exists_QMARK_ = cljs.core.get.call(null,a,sym);
if(!((exists_QMARK_ == null))){
return scheje.interpreter.define.call(null,a,sym,binding);
} else {
throw (new Error([cljs.core.str("set! can't find symbol: "),cljs.core.str(sym)].join('')));
}
});
scheje.interpreter.form_eval_quasi = (function scheje$interpreter$form_eval_quasi(exp,a){
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,exp))){
return exp;
} else {
if((cljs.core._EQ_.call(null,cljs.core.List.EMPTY,exp)) || ((exp == null))){
return cljs.core.List.EMPTY;
} else {
if((typeof exp === 'number') || (typeof exp === 'string')){
return exp;
} else {
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,exp)))){
return cljs.core.cons.call(null,cljs.core.first.call(null,exp),scheje$interpreter$form_eval_quasi.call(null,cljs.core.rest.call(null,exp),a));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,exp)),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null))){
return cljs.core.cons.call(null,scheje.interpreter.form_eval.call(null,cljs.core.second.call(null,cljs.core.first.call(null,exp)),a),scheje$interpreter$form_eval_quasi.call(null,cljs.core.rest.call(null,exp),a));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,exp)),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null))){
return cljs.core.into.call(null,scheje.interpreter.form_eval.call(null,cljs.core.second.call(null,cljs.core.first.call(null,exp)),a),scheje$interpreter$form_eval_quasi.call(null,cljs.core.rest.call(null,exp),a));
} else {
return cljs.core.cons.call(null,scheje$interpreter$form_eval_quasi.call(null,cljs.core.first.call(null,exp),a),scheje$interpreter$form_eval_quasi.call(null,cljs.core.rest.call(null,exp),a));

}
}
}
}
}
}
});
scheje.interpreter.form_eval = (function scheje$interpreter$form_eval(exp,a){
if((cljs.core._EQ_.call(null,cljs.core.List.EMPTY,exp)) || ((exp == null))){
return cljs.core.List.EMPTY;
} else {
if((typeof exp === 'number') || (typeof exp === 'string')){
return exp;
} else {
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,exp))){
var scope = cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scopes","scopes",-1571524352),exp], null));
if(!((scope == null))){
return cljs.core.get.call(null,scope,exp);
} else {
var from_root = cljs.core.get.call(null,a,exp);
if(!((from_root == null))){
return from_root;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["#",null], null), null),cljs.core.name.call(null,exp)))){
return scheje$interpreter$form_eval.call(null,cljs.core.symbol.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(scheje.unifier.get_symbol_idx.call(null,cljs.core.name.call(null,exp)))),a);
} else {
throw (new Error(cljs.core.pr_str.call(null,"No binding found for ",exp)));
}
}
}
} else {
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,exp)))){
var some_syn = scheje.tools.get_syntax.call(null,cljs.core.first.call(null,exp),new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(a));
if(!((some_syn == null))){
var map__14658 = some_syn;
var map__14658__$1 = ((((!((map__14658 == null)))?((((map__14658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14658):map__14658);
var rules = cljs.core.get.call(null,map__14658__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var remaining = rules;
while(true){
var cur_rule = cljs.core.first.call(null,remaining);
var cur_pattern = cljs.core.first.call(null,cur_rule);
var cur_tpl = cljs.core.second.call(null,cur_rule);
var a_match = scheje.unifier.unify.call(null,cur_pattern,exp,cljs.core.swap_BANG_.call(null,scheje.interpreter.ts,cljs.core.inc),a);
if((cljs.core.get.call(null,a_match,new cljs.core.Keyword(null,"error","error",-978969032)) == null)){
var expanded_tpl = scheje.expander.expand_w_bindings.call(null,cur_tpl,a_match);
return scheje$interpreter$form_eval.call(null,expanded_tpl,cljs.core.assoc_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scopes","scopes",-1571524352),expanded_tpl], null),cljs.core.conj.call(null,scheje.library.root_env,a_match)));
} else {
if(cljs.core.seq.call(null,remaining)){
var G__14660 = cljs.core.rest.call(null,remaining);
remaining = G__14660;
continue;
} else {
throw (new Error(cljs.core.pr_str.call(null,"Error in resolving syntax in: ",exp)));
}

}
break;
}
} else {
if((typeof cljs.core.first.call(null,exp) === 'string') || (typeof cljs.core.first.call(null,exp) === 'number')){
throw (new Error(cljs.core.pr_str.call(null,"error: The Scalar: `",cljs.core.first.call(null,exp),"` Cannot be Applied on ",cljs.core.rest.call(null,exp),"!!")));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"lambda","lambda",157104302,null))){
return cljs.core.concat.call(null,exp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"quasiquote","quasiquote",1707342874,null))){
return scheje.interpreter.form_eval_quasi.call(null,cljs.core.second.call(null,exp),a);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null))){
throw (new Error([cljs.core.str("error: unquote can only be called "),cljs.core.str("in a quasiquoted form!")].join('')));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null))){
throw (new Error([cljs.core.str("error: unquote-splicing can only be"),cljs.core.str("called in a quasiquoted form!")].join('')));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
return cljs.core.first.call(null,cljs.core.rest.call(null,exp));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"cond","cond",1606708055,null))){
return scheje.interpreter.evcon.call(null,cljs.core.rest.call(null,exp),a);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"if","if",1181717262,null))){
if(cljs.core.truth_(scheje$interpreter$form_eval.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,exp)),a))){
return scheje$interpreter$form_eval.call(null,cljs.core.second.call(null,cljs.core.rest.call(null,exp)),a);
} else {
return scheje$interpreter$form_eval.call(null,cljs.core.nth.call(null,cljs.core.rest.call(null,exp),(2)),a);
}
} else {
return scheje.interpreter.form_apply.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,exp),scheje.interpreter.evlis.call(null,cljs.core.rest.call(null,exp),a)),a);

}
}
}
}
}
}
}
}
}
} else {
return scheje.interpreter.form_apply.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,exp),scheje.interpreter.evlis.call(null,cljs.core.rest.call(null,exp),a)),a);

}
}
}
}
});
scheje.interpreter.eval_exp_with_env = (function scheje$interpreter$eval_exp_with_env(env,exp){
if(cljs.core.truth_(scheje.tools.is_exp_valid_QMARK_.call(null,exp))){
try{if((cljs.core.seq_QMARK_.call(null,exp)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"define-syntax","define-syntax",-675654212,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheje.interpreter.define_syntax.call(null,env,cljs.core.second.call(null,exp),cljs.core.second.call(null,cljs.core.second.call(null,cljs.core.rest.call(null,exp))),cljs.core.rest.call(null,cljs.core.rest.call(null,cljs.core.second.call(null,cljs.core.rest.call(null,exp))))),cljs.core.second.call(null,exp)], null);
} else {
if((cljs.core.seq_QMARK_.call(null,exp)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"set!","set!",250714521,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheje.interpreter.sym_set_BANG_.call(null,env,cljs.core.second.call(null,exp),cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,exp)))),cljs.core.second.call(null,exp)], null);
} else {
if((cljs.core.seq_QMARK_.call(null,exp)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"define","define",-366059178,null)))){
if(cljs.core.seq_QMARK_.call(null,cljs.core.second.call(null,exp))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheje.interpreter.define.call(null,env,cljs.core.first.call(null,cljs.core.second.call(null,exp)),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,exp)))),cljs.core.rest.call(null,cljs.core.second.call(null,exp))),new cljs.core.Symbol(null,"lambda","lambda",157104302,null))),cljs.core.second.call(null,exp)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheje.interpreter.define.call(null,env,cljs.core.second.call(null,exp),cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,exp)))),cljs.core.second.call(null,exp)], null);

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,scheje.interpreter.form_eval.call(null,exp,env)], null);

}
}
}
}catch (e14662){if((e14662 instanceof Error)){
var e = e14662;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("in "),cljs.core.str(exp),cljs.core.str(" : "),cljs.core.str(e)].join('')], null)], null);
} else {
throw e14662;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.pr_str.call(null,"Invalid Symbols in exp: ",exp)], null)], null);
}
});
scheje.interpreter.eval_prog_with_env = (function scheje$interpreter$eval_prog_with_env(a,exprs){
var remaining = exprs;
var eval_result = cljs.core.PersistentVector.EMPTY;
var env = a;
while(true){
if(cljs.core.seq.call(null,remaining)){
var exp = cljs.core.first.call(null,remaining);
var vec__14664 = scheje.interpreter.eval_exp_with_env.call(null,env,exp);
var new_env = cljs.core.nth.call(null,vec__14664,(0),null);
var the_eval = cljs.core.nth.call(null,vec__14664,(1),null);
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(the_eval) == null)){
var G__14665 = cljs.core.rest.call(null,remaining);
var G__14666 = cljs.core.conj.call(null,eval_result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,the_eval], null));
var G__14667 = new_env;
remaining = G__14665;
eval_result = G__14666;
env = G__14667;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"evals","evals",-1296313267),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,the_eval], null)], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"evals","evals",-1296313267),eval_result], null);
}
break;
}
});
scheje.interpreter.eval_prog = cljs.core.comp.call(null,cljs.core.last,cljs.core.partial.call(null,cljs.core.map,(function (p1__14668_SHARP_){
return cljs.core.get.call(null,p1__14668_SHARP_,(1));
})),new cljs.core.Keyword(null,"evals","evals",-1296313267),cljs.core.partial.call(null,scheje.interpreter.eval_prog_with_env,scheje.library.root_env));
scheje.interpreter.eval_prog.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null),(100))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),(1),(2)));
scheje.interpreter.eval_prog.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"y","y",-117328249,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null))))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),(1),(2),(3),(4)))));
scheje.interpreter.eval_prog.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),(1),(2),(3),(4)));

//# sourceMappingURL=interpreter.js.map?rel=1464515095101