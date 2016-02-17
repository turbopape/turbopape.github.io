// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__22417 = cljs.core._EQ_;
var expr__22418 = (function (){var or__13187__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e22421){if((e22421 instanceof Error)){
var e = e22421;
return false;
} else {
throw e22421;

}
}})();
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__22417.call(null,"true",expr__22418))){
return true;
} else {
if(cljs.core.truth_(pred__22417.call(null,"false",expr__22418))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22418)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e22423){if((e22423 instanceof Error)){
var e = e22423;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e22423;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__14252__auto__ = [];
var len__14245__auto___22425 = arguments.length;
var i__14246__auto___22426 = (0);
while(true){
if((i__14246__auto___22426 < len__14245__auto___22425)){
args__14252__auto__.push((arguments[i__14246__auto___22426]));

var G__22427 = (i__14246__auto___22426 + (1));
i__14246__auto___22426 = G__22427;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((0) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__14253__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq22424){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22424));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22428){
var map__22431 = p__22428;
var map__22431__$1 = ((((!((map__22431 == null)))?((((map__22431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22431):map__22431);
var message = cljs.core.get.call(null,map__22431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22431__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__13187__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__13175__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13175__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13175__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18195__auto___22593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___22593,ch){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___22593,ch){
return (function (state_22562){
var state_val_22563 = (state_22562[(1)]);
if((state_val_22563 === (7))){
var inst_22558 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22564_22594 = state_22562__$1;
(statearr_22564_22594[(2)] = inst_22558);

(statearr_22564_22594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (1))){
var state_22562__$1 = state_22562;
var statearr_22565_22595 = state_22562__$1;
(statearr_22565_22595[(2)] = null);

(statearr_22565_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (4))){
var inst_22515 = (state_22562[(7)]);
var inst_22515__$1 = (state_22562[(2)]);
var state_22562__$1 = (function (){var statearr_22566 = state_22562;
(statearr_22566[(7)] = inst_22515__$1);

return statearr_22566;
})();
if(cljs.core.truth_(inst_22515__$1)){
var statearr_22567_22596 = state_22562__$1;
(statearr_22567_22596[(1)] = (5));

} else {
var statearr_22568_22597 = state_22562__$1;
(statearr_22568_22597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (15))){
var inst_22522 = (state_22562[(8)]);
var inst_22537 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22522);
var inst_22538 = cljs.core.first.call(null,inst_22537);
var inst_22539 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22538);
var inst_22540 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_22539)].join('');
var inst_22541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_22540);
var state_22562__$1 = state_22562;
var statearr_22569_22598 = state_22562__$1;
(statearr_22569_22598[(2)] = inst_22541);

(statearr_22569_22598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (13))){
var inst_22546 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22570_22599 = state_22562__$1;
(statearr_22570_22599[(2)] = inst_22546);

(statearr_22570_22599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (6))){
var state_22562__$1 = state_22562;
var statearr_22571_22600 = state_22562__$1;
(statearr_22571_22600[(2)] = null);

(statearr_22571_22600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (17))){
var inst_22544 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22572_22601 = state_22562__$1;
(statearr_22572_22601[(2)] = inst_22544);

(statearr_22572_22601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (3))){
var inst_22560 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22562__$1,inst_22560);
} else {
if((state_val_22563 === (12))){
var inst_22521 = (state_22562[(9)]);
var inst_22535 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22521,opts);
var state_22562__$1 = state_22562;
if(cljs.core.truth_(inst_22535)){
var statearr_22573_22602 = state_22562__$1;
(statearr_22573_22602[(1)] = (15));

} else {
var statearr_22574_22603 = state_22562__$1;
(statearr_22574_22603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (2))){
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22562__$1,(4),ch);
} else {
if((state_val_22563 === (11))){
var inst_22522 = (state_22562[(8)]);
var inst_22527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22528 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22522);
var inst_22529 = cljs.core.async.timeout.call(null,(1000));
var inst_22530 = [inst_22528,inst_22529];
var inst_22531 = (new cljs.core.PersistentVector(null,2,(5),inst_22527,inst_22530,null));
var state_22562__$1 = state_22562;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22562__$1,(14),inst_22531);
} else {
if((state_val_22563 === (9))){
var inst_22522 = (state_22562[(8)]);
var inst_22548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_22549 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22522);
var inst_22550 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22549);
var inst_22551 = [cljs.core.str("Not loading: "),cljs.core.str(inst_22550)].join('');
var inst_22552 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_22551);
var state_22562__$1 = (function (){var statearr_22575 = state_22562;
(statearr_22575[(10)] = inst_22548);

return statearr_22575;
})();
var statearr_22576_22604 = state_22562__$1;
(statearr_22576_22604[(2)] = inst_22552);

(statearr_22576_22604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (5))){
var inst_22515 = (state_22562[(7)]);
var inst_22517 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22518 = (new cljs.core.PersistentArrayMap(null,2,inst_22517,null));
var inst_22519 = (new cljs.core.PersistentHashSet(null,inst_22518,null));
var inst_22520 = figwheel.client.focus_msgs.call(null,inst_22519,inst_22515);
var inst_22521 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22520);
var inst_22522 = cljs.core.first.call(null,inst_22520);
var inst_22523 = figwheel.client.autoload_QMARK_.call(null);
var state_22562__$1 = (function (){var statearr_22577 = state_22562;
(statearr_22577[(8)] = inst_22522);

(statearr_22577[(9)] = inst_22521);

return statearr_22577;
})();
if(cljs.core.truth_(inst_22523)){
var statearr_22578_22605 = state_22562__$1;
(statearr_22578_22605[(1)] = (8));

} else {
var statearr_22579_22606 = state_22562__$1;
(statearr_22579_22606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (14))){
var inst_22533 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22580_22607 = state_22562__$1;
(statearr_22580_22607[(2)] = inst_22533);

(statearr_22580_22607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (16))){
var state_22562__$1 = state_22562;
var statearr_22581_22608 = state_22562__$1;
(statearr_22581_22608[(2)] = null);

(statearr_22581_22608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (10))){
var inst_22554 = (state_22562[(2)]);
var state_22562__$1 = (function (){var statearr_22582 = state_22562;
(statearr_22582[(11)] = inst_22554);

return statearr_22582;
})();
var statearr_22583_22609 = state_22562__$1;
(statearr_22583_22609[(2)] = null);

(statearr_22583_22609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (8))){
var inst_22521 = (state_22562[(9)]);
var inst_22525 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22521,opts);
var state_22562__$1 = state_22562;
if(cljs.core.truth_(inst_22525)){
var statearr_22584_22610 = state_22562__$1;
(statearr_22584_22610[(1)] = (11));

} else {
var statearr_22585_22611 = state_22562__$1;
(statearr_22585_22611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__18195__auto___22593,ch))
;
return ((function (switch__18083__auto__,c__18195__auto___22593,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____0 = (function (){
var statearr_22589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22589[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__);

(statearr_22589[(1)] = (1));

return statearr_22589;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____1 = (function (state_22562){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_22562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e22590){if((e22590 instanceof Object)){
var ex__18087__auto__ = e22590;
var statearr_22591_22612 = state_22562;
(statearr_22591_22612[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22613 = state_22562;
state_22562 = G__22613;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__ = function(state_22562){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____1.call(this,state_22562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18084__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___22593,ch))
})();
var state__18197__auto__ = (function (){var statearr_22592 = f__18196__auto__.call(null);
(statearr_22592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___22593);

return statearr_22592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___22593,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22614_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22614_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_22621 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22621){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22619 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22620 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22620;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22619;
}}catch (e22618){if((e22618 instanceof Error)){
var e = e22618;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22621], null));
} else {
var e = e22618;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22621))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22622){
var map__22629 = p__22622;
var map__22629__$1 = ((((!((map__22629 == null)))?((((map__22629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);
var opts = map__22629__$1;
var build_id = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22629,map__22629__$1,opts,build_id){
return (function (p__22631){
var vec__22632 = p__22631;
var map__22633 = cljs.core.nth.call(null,vec__22632,(0),null);
var map__22633__$1 = ((((!((map__22633 == null)))?((((map__22633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22633):map__22633);
var msg = map__22633__$1;
var msg_name = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22632,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22632,map__22633,map__22633__$1,msg,msg_name,_,map__22629,map__22629__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22632,map__22633,map__22633__$1,msg,msg_name,_,map__22629,map__22629__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22629,map__22629__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22639){
var vec__22640 = p__22639;
var map__22641 = cljs.core.nth.call(null,vec__22640,(0),null);
var map__22641__$1 = ((((!((map__22641 == null)))?((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var msg = map__22641__$1;
var msg_name = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22640,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22643){
var map__22653 = p__22643;
var map__22653__$1 = ((((!((map__22653 == null)))?((((map__22653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22653):map__22653);
var on_compile_warning = cljs.core.get.call(null,map__22653__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22653__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22653,map__22653__$1,on_compile_warning,on_compile_fail){
return (function (p__22655){
var vec__22656 = p__22655;
var map__22657 = cljs.core.nth.call(null,vec__22656,(0),null);
var map__22657__$1 = ((((!((map__22657 == null)))?((((map__22657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22657):map__22657);
var msg = map__22657__$1;
var msg_name = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22656,(1));
var pred__22659 = cljs.core._EQ_;
var expr__22660 = msg_name;
if(cljs.core.truth_(pred__22659.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22660))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22659.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22660))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22653,map__22653__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__,msg_hist,msg_names,msg){
return (function (state_22876){
var state_val_22877 = (state_22876[(1)]);
if((state_val_22877 === (7))){
var inst_22800 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22800)){
var statearr_22878_22924 = state_22876__$1;
(statearr_22878_22924[(1)] = (8));

} else {
var statearr_22879_22925 = state_22876__$1;
(statearr_22879_22925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (20))){
var inst_22870 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22880_22926 = state_22876__$1;
(statearr_22880_22926[(2)] = inst_22870);

(statearr_22880_22926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (27))){
var inst_22866 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22881_22927 = state_22876__$1;
(statearr_22881_22927[(2)] = inst_22866);

(statearr_22881_22927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (1))){
var inst_22793 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22793)){
var statearr_22882_22928 = state_22876__$1;
(statearr_22882_22928[(1)] = (2));

} else {
var statearr_22883_22929 = state_22876__$1;
(statearr_22883_22929[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (24))){
var inst_22868 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22884_22930 = state_22876__$1;
(statearr_22884_22930[(2)] = inst_22868);

(statearr_22884_22930[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (4))){
var inst_22874 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22876__$1,inst_22874);
} else {
if((state_val_22877 === (15))){
var inst_22872 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22885_22931 = state_22876__$1;
(statearr_22885_22931[(2)] = inst_22872);

(statearr_22885_22931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (21))){
var inst_22831 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22886_22932 = state_22876__$1;
(statearr_22886_22932[(2)] = inst_22831);

(statearr_22886_22932[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (31))){
var inst_22855 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22855)){
var statearr_22887_22933 = state_22876__$1;
(statearr_22887_22933[(1)] = (34));

} else {
var statearr_22888_22934 = state_22876__$1;
(statearr_22888_22934[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (32))){
var inst_22864 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22889_22935 = state_22876__$1;
(statearr_22889_22935[(2)] = inst_22864);

(statearr_22889_22935[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (33))){
var inst_22853 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22890_22936 = state_22876__$1;
(statearr_22890_22936[(2)] = inst_22853);

(statearr_22890_22936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (13))){
var inst_22814 = figwheel.client.heads_up.clear.call(null);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(16),inst_22814);
} else {
if((state_val_22877 === (22))){
var inst_22835 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22836 = figwheel.client.heads_up.append_message.call(null,inst_22835);
var state_22876__$1 = state_22876;
var statearr_22891_22937 = state_22876__$1;
(statearr_22891_22937[(2)] = inst_22836);

(statearr_22891_22937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (36))){
var inst_22862 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22892_22938 = state_22876__$1;
(statearr_22892_22938[(2)] = inst_22862);

(statearr_22892_22938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (29))){
var inst_22846 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22893_22939 = state_22876__$1;
(statearr_22893_22939[(2)] = inst_22846);

(statearr_22893_22939[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (6))){
var inst_22795 = (state_22876[(7)]);
var state_22876__$1 = state_22876;
var statearr_22894_22940 = state_22876__$1;
(statearr_22894_22940[(2)] = inst_22795);

(statearr_22894_22940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (28))){
var inst_22842 = (state_22876[(2)]);
var inst_22843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22844 = figwheel.client.heads_up.display_warning.call(null,inst_22843);
var state_22876__$1 = (function (){var statearr_22895 = state_22876;
(statearr_22895[(8)] = inst_22842);

return statearr_22895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(29),inst_22844);
} else {
if((state_val_22877 === (25))){
var inst_22840 = figwheel.client.heads_up.clear.call(null);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(28),inst_22840);
} else {
if((state_val_22877 === (34))){
var inst_22857 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(37),inst_22857);
} else {
if((state_val_22877 === (17))){
var inst_22822 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22896_22941 = state_22876__$1;
(statearr_22896_22941[(2)] = inst_22822);

(statearr_22896_22941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (3))){
var inst_22812 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22812)){
var statearr_22897_22942 = state_22876__$1;
(statearr_22897_22942[(1)] = (13));

} else {
var statearr_22898_22943 = state_22876__$1;
(statearr_22898_22943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (12))){
var inst_22808 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22899_22944 = state_22876__$1;
(statearr_22899_22944[(2)] = inst_22808);

(statearr_22899_22944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (2))){
var inst_22795 = (state_22876[(7)]);
var inst_22795__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22876__$1 = (function (){var statearr_22900 = state_22876;
(statearr_22900[(7)] = inst_22795__$1);

return statearr_22900;
})();
if(cljs.core.truth_(inst_22795__$1)){
var statearr_22901_22945 = state_22876__$1;
(statearr_22901_22945[(1)] = (5));

} else {
var statearr_22902_22946 = state_22876__$1;
(statearr_22902_22946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (23))){
var inst_22838 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22838)){
var statearr_22903_22947 = state_22876__$1;
(statearr_22903_22947[(1)] = (25));

} else {
var statearr_22904_22948 = state_22876__$1;
(statearr_22904_22948[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (35))){
var state_22876__$1 = state_22876;
var statearr_22905_22949 = state_22876__$1;
(statearr_22905_22949[(2)] = null);

(statearr_22905_22949[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (19))){
var inst_22833 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22833)){
var statearr_22906_22950 = state_22876__$1;
(statearr_22906_22950[(1)] = (22));

} else {
var statearr_22907_22951 = state_22876__$1;
(statearr_22907_22951[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (11))){
var inst_22804 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22908_22952 = state_22876__$1;
(statearr_22908_22952[(2)] = inst_22804);

(statearr_22908_22952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (9))){
var inst_22806 = figwheel.client.heads_up.clear.call(null);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(12),inst_22806);
} else {
if((state_val_22877 === (5))){
var inst_22797 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22876__$1 = state_22876;
var statearr_22909_22953 = state_22876__$1;
(statearr_22909_22953[(2)] = inst_22797);

(statearr_22909_22953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (14))){
var inst_22824 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22824)){
var statearr_22910_22954 = state_22876__$1;
(statearr_22910_22954[(1)] = (18));

} else {
var statearr_22911_22955 = state_22876__$1;
(statearr_22911_22955[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (26))){
var inst_22848 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22876__$1 = state_22876;
if(cljs.core.truth_(inst_22848)){
var statearr_22912_22956 = state_22876__$1;
(statearr_22912_22956[(1)] = (30));

} else {
var statearr_22913_22957 = state_22876__$1;
(statearr_22913_22957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (16))){
var inst_22816 = (state_22876[(2)]);
var inst_22817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22818 = figwheel.client.format_messages.call(null,inst_22817);
var inst_22819 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22820 = figwheel.client.heads_up.display_error.call(null,inst_22818,inst_22819);
var state_22876__$1 = (function (){var statearr_22914 = state_22876;
(statearr_22914[(9)] = inst_22816);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(17),inst_22820);
} else {
if((state_val_22877 === (30))){
var inst_22850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22851 = figwheel.client.heads_up.display_warning.call(null,inst_22850);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(33),inst_22851);
} else {
if((state_val_22877 === (10))){
var inst_22810 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22915_22958 = state_22876__$1;
(statearr_22915_22958[(2)] = inst_22810);

(statearr_22915_22958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (18))){
var inst_22826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22827 = figwheel.client.format_messages.call(null,inst_22826);
var inst_22828 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22829 = figwheel.client.heads_up.display_error.call(null,inst_22827,inst_22828);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(21),inst_22829);
} else {
if((state_val_22877 === (37))){
var inst_22859 = (state_22876[(2)]);
var state_22876__$1 = state_22876;
var statearr_22916_22959 = state_22876__$1;
(statearr_22916_22959[(2)] = inst_22859);

(statearr_22916_22959[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22877 === (8))){
var inst_22802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22876__$1 = state_22876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22876__$1,(11),inst_22802);
} else {
return null;
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
});})(c__18195__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18083__auto__,c__18195__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____0 = (function (){
var statearr_22920 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22920[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__);

(statearr_22920[(1)] = (1));

return statearr_22920;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____1 = (function (state_22876){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_22876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e22921){if((e22921 instanceof Object)){
var ex__18087__auto__ = e22921;
var statearr_22922_22960 = state_22876;
(statearr_22922_22960[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22961 = state_22876;
state_22876 = G__22961;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__ = function(state_22876){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____1.call(this,state_22876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__,msg_hist,msg_names,msg))
})();
var state__18197__auto__ = (function (){var statearr_22923 = f__18196__auto__.call(null);
(statearr_22923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_22923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__,msg_hist,msg_names,msg))
);

return c__18195__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18195__auto___23024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___23024,ch){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___23024,ch){
return (function (state_23007){
var state_val_23008 = (state_23007[(1)]);
if((state_val_23008 === (1))){
var state_23007__$1 = state_23007;
var statearr_23009_23025 = state_23007__$1;
(statearr_23009_23025[(2)] = null);

(statearr_23009_23025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (2))){
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23007__$1,(4),ch);
} else {
if((state_val_23008 === (3))){
var inst_23005 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23007__$1,inst_23005);
} else {
if((state_val_23008 === (4))){
var inst_22995 = (state_23007[(7)]);
var inst_22995__$1 = (state_23007[(2)]);
var state_23007__$1 = (function (){var statearr_23010 = state_23007;
(statearr_23010[(7)] = inst_22995__$1);

return statearr_23010;
})();
if(cljs.core.truth_(inst_22995__$1)){
var statearr_23011_23026 = state_23007__$1;
(statearr_23011_23026[(1)] = (5));

} else {
var statearr_23012_23027 = state_23007__$1;
(statearr_23012_23027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (5))){
var inst_22995 = (state_23007[(7)]);
var inst_22997 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22995);
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23007__$1,(8),inst_22997);
} else {
if((state_val_23008 === (6))){
var state_23007__$1 = state_23007;
var statearr_23013_23028 = state_23007__$1;
(statearr_23013_23028[(2)] = null);

(statearr_23013_23028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (7))){
var inst_23003 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
var statearr_23014_23029 = state_23007__$1;
(statearr_23014_23029[(2)] = inst_23003);

(statearr_23014_23029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (8))){
var inst_22999 = (state_23007[(2)]);
var state_23007__$1 = (function (){var statearr_23015 = state_23007;
(statearr_23015[(8)] = inst_22999);

return statearr_23015;
})();
var statearr_23016_23030 = state_23007__$1;
(statearr_23016_23030[(2)] = null);

(statearr_23016_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18195__auto___23024,ch))
;
return ((function (switch__18083__auto__,c__18195__auto___23024,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18084__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18084__auto____0 = (function (){
var statearr_23020 = [null,null,null,null,null,null,null,null,null];
(statearr_23020[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18084__auto__);

(statearr_23020[(1)] = (1));

return statearr_23020;
});
var figwheel$client$heads_up_plugin_$_state_machine__18084__auto____1 = (function (state_23007){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_23007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e23021){if((e23021 instanceof Object)){
var ex__18087__auto__ = e23021;
var statearr_23022_23031 = state_23007;
(statearr_23022_23031[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23032 = state_23007;
state_23007 = G__23032;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18084__auto__ = function(state_23007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18084__auto____1.call(this,state_23007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18084__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18084__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___23024,ch))
})();
var state__18197__auto__ = (function (){var statearr_23023 = f__18196__auto__.call(null);
(statearr_23023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___23024);

return statearr_23023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___23024,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__){
return (function (state_23053){
var state_val_23054 = (state_23053[(1)]);
if((state_val_23054 === (1))){
var inst_23048 = cljs.core.async.timeout.call(null,(3000));
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23053__$1,(2),inst_23048);
} else {
if((state_val_23054 === (2))){
var inst_23050 = (state_23053[(2)]);
var inst_23051 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23053__$1 = (function (){var statearr_23055 = state_23053;
(statearr_23055[(7)] = inst_23050);

return statearr_23055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23053__$1,inst_23051);
} else {
return null;
}
}
});})(c__18195__auto__))
;
return ((function (switch__18083__auto__,c__18195__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____0 = (function (){
var statearr_23059 = [null,null,null,null,null,null,null,null];
(statearr_23059[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__);

(statearr_23059[(1)] = (1));

return statearr_23059;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____1 = (function (state_23053){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_23053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e23060){if((e23060 instanceof Object)){
var ex__18087__auto__ = e23060;
var statearr_23061_23063 = state_23053;
(statearr_23061_23063[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23064 = state_23053;
state_23053 = G__23064;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__ = function(state_23053){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____1.call(this,state_23053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18084__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__))
})();
var state__18197__auto__ = (function (){var statearr_23062 = f__18196__auto__.call(null);
(statearr_23062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_23062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__))
);

return c__18195__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23065){
var map__23072 = p__23065;
var map__23072__$1 = ((((!((map__23072 == null)))?((((map__23072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23072):map__23072);
var ed = map__23072__$1;
var formatted_exception = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23074_23078 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23075_23079 = null;
var count__23076_23080 = (0);
var i__23077_23081 = (0);
while(true){
if((i__23077_23081 < count__23076_23080)){
var msg_23082 = cljs.core._nth.call(null,chunk__23075_23079,i__23077_23081);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23082);

var G__23083 = seq__23074_23078;
var G__23084 = chunk__23075_23079;
var G__23085 = count__23076_23080;
var G__23086 = (i__23077_23081 + (1));
seq__23074_23078 = G__23083;
chunk__23075_23079 = G__23084;
count__23076_23080 = G__23085;
i__23077_23081 = G__23086;
continue;
} else {
var temp__4657__auto___23087 = cljs.core.seq.call(null,seq__23074_23078);
if(temp__4657__auto___23087){
var seq__23074_23088__$1 = temp__4657__auto___23087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23074_23088__$1)){
var c__13990__auto___23089 = cljs.core.chunk_first.call(null,seq__23074_23088__$1);
var G__23090 = cljs.core.chunk_rest.call(null,seq__23074_23088__$1);
var G__23091 = c__13990__auto___23089;
var G__23092 = cljs.core.count.call(null,c__13990__auto___23089);
var G__23093 = (0);
seq__23074_23078 = G__23090;
chunk__23075_23079 = G__23091;
count__23076_23080 = G__23092;
i__23077_23081 = G__23093;
continue;
} else {
var msg_23094 = cljs.core.first.call(null,seq__23074_23088__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23094);

var G__23095 = cljs.core.next.call(null,seq__23074_23088__$1);
var G__23096 = null;
var G__23097 = (0);
var G__23098 = (0);
seq__23074_23078 = G__23095;
chunk__23075_23079 = G__23096;
count__23076_23080 = G__23097;
i__23077_23081 = G__23098;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23099){
var map__23102 = p__23099;
var map__23102__$1 = ((((!((map__23102 == null)))?((((map__23102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23102):map__23102);
var w = map__23102__$1;
var message = cljs.core.get.call(null,map__23102__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__13175__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__13175__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__13175__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__23110 = cljs.core.seq.call(null,plugins);
var chunk__23111 = null;
var count__23112 = (0);
var i__23113 = (0);
while(true){
if((i__23113 < count__23112)){
var vec__23114 = cljs.core._nth.call(null,chunk__23111,i__23113);
var k = cljs.core.nth.call(null,vec__23114,(0),null);
var plugin = cljs.core.nth.call(null,vec__23114,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23116 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23110,chunk__23111,count__23112,i__23113,pl_23116,vec__23114,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23116.call(null,msg_hist);
});})(seq__23110,chunk__23111,count__23112,i__23113,pl_23116,vec__23114,k,plugin))
);
} else {
}

var G__23117 = seq__23110;
var G__23118 = chunk__23111;
var G__23119 = count__23112;
var G__23120 = (i__23113 + (1));
seq__23110 = G__23117;
chunk__23111 = G__23118;
count__23112 = G__23119;
i__23113 = G__23120;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23110);
if(temp__4657__auto__){
var seq__23110__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23110__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__23110__$1);
var G__23121 = cljs.core.chunk_rest.call(null,seq__23110__$1);
var G__23122 = c__13990__auto__;
var G__23123 = cljs.core.count.call(null,c__13990__auto__);
var G__23124 = (0);
seq__23110 = G__23121;
chunk__23111 = G__23122;
count__23112 = G__23123;
i__23113 = G__23124;
continue;
} else {
var vec__23115 = cljs.core.first.call(null,seq__23110__$1);
var k = cljs.core.nth.call(null,vec__23115,(0),null);
var plugin = cljs.core.nth.call(null,vec__23115,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23125 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23110,chunk__23111,count__23112,i__23113,pl_23125,vec__23115,k,plugin,seq__23110__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23125.call(null,msg_hist);
});})(seq__23110,chunk__23111,count__23112,i__23113,pl_23125,vec__23115,k,plugin,seq__23110__$1,temp__4657__auto__))
);
} else {
}

var G__23126 = cljs.core.next.call(null,seq__23110__$1);
var G__23127 = null;
var G__23128 = (0);
var G__23129 = (0);
seq__23110 = G__23126;
chunk__23111 = G__23127;
count__23112 = G__23128;
i__23113 = G__23129;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args23130 = [];
var len__14245__auto___23133 = arguments.length;
var i__14246__auto___23134 = (0);
while(true){
if((i__14246__auto___23134 < len__14245__auto___23133)){
args23130.push((arguments[i__14246__auto___23134]));

var G__23135 = (i__14246__auto___23134 + (1));
i__14246__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var G__23132 = args23130.length;
switch (G__23132) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23130.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__14252__auto__ = [];
var len__14245__auto___23141 = arguments.length;
var i__14246__auto___23142 = (0);
while(true){
if((i__14246__auto___23142 < len__14245__auto___23141)){
args__14252__auto__.push((arguments[i__14246__auto___23142]));

var G__23143 = (i__14246__auto___23142 + (1));
i__14246__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((0) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__14253__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23138){
var map__23139 = p__23138;
var map__23139__$1 = ((((!((map__23139 == null)))?((((map__23139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23139):map__23139);
var opts = map__23139__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23137){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23137));
});

//# sourceMappingURL=client.js.map?rel=1455728543712