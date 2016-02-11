// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje_website.core');
goog.require('cljs.core');
goog.require('scheje.interpreter');
goog.require('scheje.library');
goog.require('scheje.tools');
goog.require('cljs.reader');
goog.require('scheje_website.expression');
goog.require('dommy.core');
scheje_website.core.exec_env = cljs.core.atom.call(null,scheje.library.root_env);
scheje_website.core.codemirror_config = new cljs.core.PersistentArrayMap(null, 6, ["value",document.getElementById("default-template").value,"mode","scheme","keyMap","emacs","readOnly",false,"styleActiveLine",true,"lineNumbers",true], null);
scheje_website.core.create_editor = (function scheje_website$core$create_editor(config){
return CodeMirror(document.getElementById("scheme-codemirror"),cljs.core.clj__GT_js.call(null,config));
});
scheje_website.core.editor = scheje_website.core.create_editor.call(null,scheje_website.core.codemirror_config);
scheje_website.core.display_zone = document.querySelector("body #portfolio #dzone");
scheje_website.core.show_eval_BANG_ = (function scheje_website$core$show_eval_BANG_(ev){
var temp__4655__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(ev);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return dommy.core.add_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,scheje_website.core.display_zone,error),new cljs.core.Keyword(null,"alert-success","alert-success",-1764385150)),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399));
} else {
if(cljs.core.truth_(ev)){
return dommy.core.add_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,scheje_website.core.display_zone,ev),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399)),new cljs.core.Keyword(null,"alert-success","alert-success",-1764385150));
} else {
return dommy.core.remove_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,scheje_website.core.display_zone,""),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399)),new cljs.core.Keyword(null,"alert-success","alert-success",-1764385150));
}
}
});
scheje_website.core.eval_sexps_BANG_ = (function scheje_website$core$eval_sexps_BANG_(sexps){
var seq_sexps = cljs.core.apply.call(null,cljs.core.list,sexps);
var forms_eval = scheje.interpreter.eval_prog_with_env.call(null,cljs.core.deref.call(null,scheje_website.core.exec_env),seq_sexps);
var last_eval = cljs.core.last.call(null,cljs.core.map.call(null,((function (seq_sexps,forms_eval){
return (function (p1__15719_SHARP_){
return cljs.core.get.call(null,p1__15719_SHARP_,(1));
});})(seq_sexps,forms_eval))
,new cljs.core.Keyword(null,"evals","evals",-1296313267).cljs$core$IFn$_invoke$arity$1(forms_eval)));
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(last_eval) == null)){
cljs.core.swap_BANG_.call(null,scheje_website.core.exec_env,cljs.core.merge,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(forms_eval));
} else {
}

return scheje_website.core.show_eval_BANG_.call(null,last_eval);
});
scheje_website.core.editor.setOption("extraKeys",(function (){var obj15721 = {"Ctrl-J":(function (cm){
var sexps = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.reader.read_string,scheje.tools.get_sexps.call(null,scheje_website.core.editor.getValue())));
if((cljs.core.count.call(null,sexps) > (0))){
return scheje_website.core.eval_sexps_BANG_.call(null,sexps);
} else {
return null;
}
}),"Ctrl-X Ctrl-E":(function (cm){
var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),scheje_website.core.editor.getCursor().line,new cljs.core.Keyword(null,"ch","ch",-554717905),scheje_website.core.editor.getCursor().ch], null);
var meta = null;
var code = scheje_website.core.editor.getValue();
var s_exp = scheje_website.expression.handle.call(null,code,meta,pos);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(s_exp),"ok")){
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,s_exp,new cljs.core.Keyword(null,"forms","forms",2045992350))))){
return scheje_website.core.eval_sexps_BANG_.call(null,s_exp.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350)));
} else {
return scheje_website.core.eval_sexps_BANG_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,scheje_website.core.editor.getLine(cljs.core.get.call(null,pos,new cljs.core.Keyword(null,"line","line",212345235)))));
}
} else {
return null;
}
})};
return obj15721;
})());

//# sourceMappingURL=core.js.map?rel=1455208629279