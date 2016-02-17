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
try{var exp_head__14630 = cljs.core.first.call(null,exp);
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,exp_head__14630))){
var f = cljs.core.first.call(null,exp);
var r = cljs.core.rest.call(null,exp);
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"eq?","eq?",2123283611,null))){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"=","=",-1501502141,null))){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"null?","null?",-1379283412,null))){
return cljs.core._EQ_.call(null,cljs.core.list(cljs.core.List.EMPTY),r);
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"car","car",84879915,null))){
return cljs.core.first.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"cdr","cdr",1766924024,null))){
return cljs.core.rest.call(null,cljs.core.first.call(null,r));
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"cons","cons",755448454,null))){
if(cljs.core.seq_QMARK_.call(null,cljs.core.second.call(null,r))){
return cljs.core.cons.call(null,cljs.core.first.call(null,r),cljs.core.second.call(null,r));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,r),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,r)));

}
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null))){
return scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,r));
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
return scheje$interpreter$form_apply.call(null,cljs.core.cons.call(null,scheje.interpreter.form_eval.call(null,f,a),r),a);

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
}catch (e14647){if((e14647 instanceof Error)){
var e__3351__auto__ = e14647;
if((e__3351__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto__;
}
} else {
throw e14647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14640){if((e14640 instanceof Error)){
var e__3351__auto__ = e14640;
if((e__3351__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.seq_QMARK_.call(null,exp)) || (cljs.core.sequential_QMARK_.call(null,exp))) && (cljs.core.seq.call(null,exp))){
try{var exp_head__14632 = cljs.core.first.call(null,exp);
if(((cljs.core.seq_QMARK_.call(null,exp_head__14632)) || (cljs.core.sequential_QMARK_.call(null,exp_head__14632))) && (cljs.core.seq.call(null,exp_head__14632))){
try{var exp_head__14634 = cljs.core.first.call(null,exp_head__14632);
if(cljs.core._EQ_.call(null,exp_head__14634,new cljs.core.Symbol(null,"lambda","lambda",157104302,null))){
try{var exp_tail__14635 = cljs.core.rest.call(null,exp_head__14632);
if(((cljs.core.seq_QMARK_.call(null,exp_tail__14635)) || (cljs.core.sequential_QMARK_.call(null,exp_tail__14635))) && (cljs.core.seq.call(null,exp_tail__14635))){
try{var exp_head__14632_tail__14637 = cljs.core.rest.call(null,exp_tail__14635);
if(((cljs.core.seq_QMARK_.call(null,exp_head__14632_tail__14637)) || (cljs.core.sequential_QMARK_.call(null,exp_head__14632_tail__14637))) && (cljs.core.seq.call(null,exp_head__14632_tail__14637))){
try{var exp_tail__14635_tail__14639 = cljs.core.rest.call(null,exp_head__14632_tail__14637);
if(cljs.core.empty_QMARK_.call(null,exp_tail__14635_tail__14639)){
var body = cljs.core.first.call(null,exp_head__14632_tail__14637);
var parms = cljs.core.first.call(null,exp_tail__14635);
var args = cljs.core.rest.call(null,exp);
if((parms instanceof cljs.core.Symbol)){
return scheje.interpreter.form_eval.call(null,body,cljs.core.assoc.call(null,a,parms,args));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",1975675962,null),null], null), null),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.symbol,new cljs.core.Keyword(null,"sym","sym",-1444860305),scheje.unifier.get_symbol_idx,cljs.core.name),parms)))){
var nparms = cljs.core.butlast.call(null,cljs.core.butlast.call(null,parms));
var rparm = cljs.core.last.call(null,parms);
return scheje.interpreter.form_eval.call(null,body,cljs.core.assoc.call(null,scheje.tools.pairlis.call(null,nparms,cljs.core.take.call(null,cljs.core.count.call(null,nparms),args),a),rparm,cljs.core.drop.call(null,cljs.core.count.call(null,nparms),args)));
} else {
return scheje.interpreter.form_eval.call(null,body,scheje.tools.pairlis.call(null,parms,args,a));

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e14646){if((e14646 instanceof Error)){
var e__3351__auto____$1 = e14646;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14645){if((e14645 instanceof Error)){
var e__3351__auto____$1 = e14645;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14644){if((e14644 instanceof Error)){
var e__3351__auto____$1 = e14644;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14643){if((e14643 instanceof Error)){
var e__3351__auto____$1 = e14643;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14642){if((e14642 instanceof Error)){
var e__3351__auto____$1 = e14642;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3351__auto____$1;
}
} else {
throw e14642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14641){if((e14641 instanceof Error)){
var e__3351__auto____$1 = e14641;
if((e__3351__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__3351__auto____$1;
}
} else {
throw e14641;

}
}} else {
throw e__3351__auto__;
}
} else {
throw e14640;

}
}});
scheje.interpreter.evcon = (function scheje$interpreter$evcon(conds,a){
if(cljs.core.truth_(scheje.interpreter.form_eval.call(null,cljs.core.first.call(null,cljs.core.first.call(null,conds)),a))){
return scheje.interpreter.form_eval.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,conds))),a);
} else {
return scheje$interpreter$evcon.call(null,cljs.core.rest.call(null,conds),a);

}
});
scheje.interpreter.evlis = (function scheje$interpreter$evlis(exps,a){
return cljs.core.map.call(null,(function (p1__14648_SHARP_){
return scheje.interpreter.form_eval.call(null,p1__14648_SHARP_,a);
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
throw (new Error([cljs.core.str("No binding found for "),cljs.core.str(exp)].join('')));
}
}
}
} else {
if(cljs.core.truth_(scheje.tools.atom_QMARK_.call(null,cljs.core.first.call(null,exp)))){
var some_syn = scheje.tools.get_syntax.call(null,cljs.core.first.call(null,exp),new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(a));
if(!((some_syn == null))){
var map__14651 = some_syn;
var map__14651__$1 = ((((!((map__14651 == null)))?((((map__14651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14651):map__14651);
var rules = cljs.core.get.call(null,map__14651__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
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
var G__14653 = cljs.core.rest.call(null,remaining);
remaining = G__14653;
continue;
} else {
throw (new Error([cljs.core.str("Error in resolving syntax in: "),cljs.core.str(exp)].join('')));
}

}
break;
}
} else {
if((typeof cljs.core.first.call(null,exp) === 'string') || (typeof cljs.core.first.call(null,exp) === 'number')){
throw (new Error([cljs.core.str("error: The Scalar: `"),cljs.core.str(cljs.core.first.call(null,exp)),cljs.core.str("` Cannot be Applied on "),cljs.core.str(cljs.core.rest.call(null,exp)),cljs.core.str("!!")].join('')));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,exp),new cljs.core.Symbol(null,"lambda","lambda",157104302,null))){
return exp;
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
}catch (e14655){if((e14655 instanceof Error)){
var e = e14655;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("in "),cljs.core.str(exp),cljs.core.str(" : "),cljs.core.str(e)].join('')], null)], null);
} else {
throw e14655;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Invalid Symbols in exp: "),cljs.core.str(exp)].join('')], null)], null);
}
});
scheje.interpreter.eval_prog_with_env = (function scheje$interpreter$eval_prog_with_env(a,exprs){
var remaining = exprs;
var eval_result = cljs.core.PersistentVector.EMPTY;
var env = a;
while(true){
if(cljs.core.seq.call(null,remaining)){
var exp = cljs.core.first.call(null,remaining);
var vec__14657 = scheje.interpreter.eval_exp_with_env.call(null,env,exp);
var new_env = cljs.core.nth.call(null,vec__14657,(0),null);
var the_eval = cljs.core.nth.call(null,vec__14657,(1),null);
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(the_eval) == null)){
var G__14658 = cljs.core.rest.call(null,remaining);
var G__14659 = cljs.core.conj.call(null,eval_result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,the_eval], null));
var G__14660 = new_env;
remaining = G__14658;
eval_result = G__14659;
env = G__14660;
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
scheje.interpreter.eval_prog = cljs.core.comp.call(null,cljs.core.last,cljs.core.partial.call(null,cljs.core.map,(function (p1__14661_SHARP_){
return cljs.core.get.call(null,p1__14661_SHARP_,(1));
})),new cljs.core.Keyword(null,"evals","evals",-1296313267),cljs.core.partial.call(null,scheje.interpreter.eval_prog_with_env,scheje.library.root_env));

//# sourceMappingURL=interpreter.js.map?rel=1455728536879