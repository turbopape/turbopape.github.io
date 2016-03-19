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
var pred__22415 = cljs.core._EQ_;
var expr__22416 = (function (){var or__13187__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e22419){if((e22419 instanceof Error)){
var e = e22419;
return false;
} else {
throw e22419;

}
}})();
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__22415.call(null,"true",expr__22416))){
return true;
} else {
if(cljs.core.truth_(pred__22415.call(null,"false",expr__22416))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22416)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e22421){if((e22421 instanceof Error)){
var e = e22421;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e22421;

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
var len__14245__auto___22423 = arguments.length;
var i__14246__auto___22424 = (0);
while(true){
if((i__14246__auto___22424 < len__14245__auto___22423)){
args__14252__auto__.push((arguments[i__14246__auto___22424]));

var G__22425 = (i__14246__auto___22424 + (1));
i__14246__auto___22424 = G__22425;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq22422){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22422));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22426){
var map__22429 = p__22426;
var map__22429__$1 = ((((!((map__22429 == null)))?((((map__22429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22429):map__22429);
var message = cljs.core.get.call(null,map__22429__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22429__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18193__auto___22591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___22591,ch){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___22591,ch){
return (function (state_22560){
var state_val_22561 = (state_22560[(1)]);
if((state_val_22561 === (7))){
var inst_22556 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22562_22592 = state_22560__$1;
(statearr_22562_22592[(2)] = inst_22556);

(statearr_22562_22592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (1))){
var state_22560__$1 = state_22560;
var statearr_22563_22593 = state_22560__$1;
(statearr_22563_22593[(2)] = null);

(statearr_22563_22593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (4))){
var inst_22513 = (state_22560[(7)]);
var inst_22513__$1 = (state_22560[(2)]);
var state_22560__$1 = (function (){var statearr_22564 = state_22560;
(statearr_22564[(7)] = inst_22513__$1);

return statearr_22564;
})();
if(cljs.core.truth_(inst_22513__$1)){
var statearr_22565_22594 = state_22560__$1;
(statearr_22565_22594[(1)] = (5));

} else {
var statearr_22566_22595 = state_22560__$1;
(statearr_22566_22595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (15))){
var inst_22520 = (state_22560[(8)]);
var inst_22535 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22520);
var inst_22536 = cljs.core.first.call(null,inst_22535);
var inst_22537 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22536);
var inst_22538 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_22537)].join('');
var inst_22539 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_22538);
var state_22560__$1 = state_22560;
var statearr_22567_22596 = state_22560__$1;
(statearr_22567_22596[(2)] = inst_22539);

(statearr_22567_22596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (13))){
var inst_22544 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22568_22597 = state_22560__$1;
(statearr_22568_22597[(2)] = inst_22544);

(statearr_22568_22597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (6))){
var state_22560__$1 = state_22560;
var statearr_22569_22598 = state_22560__$1;
(statearr_22569_22598[(2)] = null);

(statearr_22569_22598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (17))){
var inst_22542 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22570_22599 = state_22560__$1;
(statearr_22570_22599[(2)] = inst_22542);

(statearr_22570_22599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (3))){
var inst_22558 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22560__$1,inst_22558);
} else {
if((state_val_22561 === (12))){
var inst_22519 = (state_22560[(9)]);
var inst_22533 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22519,opts);
var state_22560__$1 = state_22560;
if(cljs.core.truth_(inst_22533)){
var statearr_22571_22600 = state_22560__$1;
(statearr_22571_22600[(1)] = (15));

} else {
var statearr_22572_22601 = state_22560__$1;
(statearr_22572_22601[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (2))){
var state_22560__$1 = state_22560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22560__$1,(4),ch);
} else {
if((state_val_22561 === (11))){
var inst_22520 = (state_22560[(8)]);
var inst_22525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22526 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22520);
var inst_22527 = cljs.core.async.timeout.call(null,(1000));
var inst_22528 = [inst_22526,inst_22527];
var inst_22529 = (new cljs.core.PersistentVector(null,2,(5),inst_22525,inst_22528,null));
var state_22560__$1 = state_22560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22560__$1,(14),inst_22529);
} else {
if((state_val_22561 === (9))){
var inst_22520 = (state_22560[(8)]);
var inst_22546 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_22547 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22520);
var inst_22548 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22547);
var inst_22549 = [cljs.core.str("Not loading: "),cljs.core.str(inst_22548)].join('');
var inst_22550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_22549);
var state_22560__$1 = (function (){var statearr_22573 = state_22560;
(statearr_22573[(10)] = inst_22546);

return statearr_22573;
})();
var statearr_22574_22602 = state_22560__$1;
(statearr_22574_22602[(2)] = inst_22550);

(statearr_22574_22602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (5))){
var inst_22513 = (state_22560[(7)]);
var inst_22515 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22516 = (new cljs.core.PersistentArrayMap(null,2,inst_22515,null));
var inst_22517 = (new cljs.core.PersistentHashSet(null,inst_22516,null));
var inst_22518 = figwheel.client.focus_msgs.call(null,inst_22517,inst_22513);
var inst_22519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22518);
var inst_22520 = cljs.core.first.call(null,inst_22518);
var inst_22521 = figwheel.client.autoload_QMARK_.call(null);
var state_22560__$1 = (function (){var statearr_22575 = state_22560;
(statearr_22575[(9)] = inst_22519);

(statearr_22575[(8)] = inst_22520);

return statearr_22575;
})();
if(cljs.core.truth_(inst_22521)){
var statearr_22576_22603 = state_22560__$1;
(statearr_22576_22603[(1)] = (8));

} else {
var statearr_22577_22604 = state_22560__$1;
(statearr_22577_22604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (14))){
var inst_22531 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22578_22605 = state_22560__$1;
(statearr_22578_22605[(2)] = inst_22531);

(statearr_22578_22605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (16))){
var state_22560__$1 = state_22560;
var statearr_22579_22606 = state_22560__$1;
(statearr_22579_22606[(2)] = null);

(statearr_22579_22606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (10))){
var inst_22552 = (state_22560[(2)]);
var state_22560__$1 = (function (){var statearr_22580 = state_22560;
(statearr_22580[(11)] = inst_22552);

return statearr_22580;
})();
var statearr_22581_22607 = state_22560__$1;
(statearr_22581_22607[(2)] = null);

(statearr_22581_22607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (8))){
var inst_22519 = (state_22560[(9)]);
var inst_22523 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22519,opts);
var state_22560__$1 = state_22560;
if(cljs.core.truth_(inst_22523)){
var statearr_22582_22608 = state_22560__$1;
(statearr_22582_22608[(1)] = (11));

} else {
var statearr_22583_22609 = state_22560__$1;
(statearr_22583_22609[(1)] = (12));

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
});})(c__18193__auto___22591,ch))
;
return ((function (switch__18081__auto__,c__18193__auto___22591,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____0 = (function (){
var statearr_22587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22587[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__);

(statearr_22587[(1)] = (1));

return statearr_22587;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____1 = (function (state_22560){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_22560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e22588){if((e22588 instanceof Object)){
var ex__18085__auto__ = e22588;
var statearr_22589_22610 = state_22560;
(statearr_22589_22610[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22611 = state_22560;
state_22560 = G__22611;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__ = function(state_22560){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____1.call(this,state_22560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18082__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___22591,ch))
})();
var state__18195__auto__ = (function (){var statearr_22590 = f__18194__auto__.call(null);
(statearr_22590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___22591);

return statearr_22590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___22591,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22612_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22612_SHARP_));
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
var base_path_22619 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22619){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22618 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22618;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22617;
}}catch (e22616){if((e22616 instanceof Error)){
var e = e22616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22619], null));
} else {
var e = e22616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22619))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22620){
var map__22627 = p__22620;
var map__22627__$1 = ((((!((map__22627 == null)))?((((map__22627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22627):map__22627);
var opts = map__22627__$1;
var build_id = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22627,map__22627__$1,opts,build_id){
return (function (p__22629){
var vec__22630 = p__22629;
var map__22631 = cljs.core.nth.call(null,vec__22630,(0),null);
var map__22631__$1 = ((((!((map__22631 == null)))?((((map__22631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22631):map__22631);
var msg = map__22631__$1;
var msg_name = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22630,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22630,map__22631,map__22631__$1,msg,msg_name,_,map__22627,map__22627__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22630,map__22631,map__22631__$1,msg,msg_name,_,map__22627,map__22627__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22627,map__22627__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22637){
var vec__22638 = p__22637;
var map__22639 = cljs.core.nth.call(null,vec__22638,(0),null);
var map__22639__$1 = ((((!((map__22639 == null)))?((((map__22639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22639):map__22639);
var msg = map__22639__$1;
var msg_name = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22638,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22641){
var map__22651 = p__22641;
var map__22651__$1 = ((((!((map__22651 == null)))?((((map__22651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22651):map__22651);
var on_compile_warning = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22651,map__22651__$1,on_compile_warning,on_compile_fail){
return (function (p__22653){
var vec__22654 = p__22653;
var map__22655 = cljs.core.nth.call(null,vec__22654,(0),null);
var map__22655__$1 = ((((!((map__22655 == null)))?((((map__22655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22655):map__22655);
var msg = map__22655__$1;
var msg_name = cljs.core.get.call(null,map__22655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22654,(1));
var pred__22657 = cljs.core._EQ_;
var expr__22658 = msg_name;
if(cljs.core.truth_(pred__22657.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22658))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22657.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22658))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22651,map__22651__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__,msg_hist,msg_names,msg){
return (function (state_22874){
var state_val_22875 = (state_22874[(1)]);
if((state_val_22875 === (7))){
var inst_22798 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22798)){
var statearr_22876_22922 = state_22874__$1;
(statearr_22876_22922[(1)] = (8));

} else {
var statearr_22877_22923 = state_22874__$1;
(statearr_22877_22923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (20))){
var inst_22868 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22878_22924 = state_22874__$1;
(statearr_22878_22924[(2)] = inst_22868);

(statearr_22878_22924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (27))){
var inst_22864 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22879_22925 = state_22874__$1;
(statearr_22879_22925[(2)] = inst_22864);

(statearr_22879_22925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (1))){
var inst_22791 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22791)){
var statearr_22880_22926 = state_22874__$1;
(statearr_22880_22926[(1)] = (2));

} else {
var statearr_22881_22927 = state_22874__$1;
(statearr_22881_22927[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (24))){
var inst_22866 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22882_22928 = state_22874__$1;
(statearr_22882_22928[(2)] = inst_22866);

(statearr_22882_22928[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (4))){
var inst_22872 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22874__$1,inst_22872);
} else {
if((state_val_22875 === (15))){
var inst_22870 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22883_22929 = state_22874__$1;
(statearr_22883_22929[(2)] = inst_22870);

(statearr_22883_22929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (21))){
var inst_22829 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22884_22930 = state_22874__$1;
(statearr_22884_22930[(2)] = inst_22829);

(statearr_22884_22930[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (31))){
var inst_22853 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22853)){
var statearr_22885_22931 = state_22874__$1;
(statearr_22885_22931[(1)] = (34));

} else {
var statearr_22886_22932 = state_22874__$1;
(statearr_22886_22932[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (32))){
var inst_22862 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22887_22933 = state_22874__$1;
(statearr_22887_22933[(2)] = inst_22862);

(statearr_22887_22933[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (33))){
var inst_22851 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22888_22934 = state_22874__$1;
(statearr_22888_22934[(2)] = inst_22851);

(statearr_22888_22934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (13))){
var inst_22812 = figwheel.client.heads_up.clear.call(null);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(16),inst_22812);
} else {
if((state_val_22875 === (22))){
var inst_22833 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22834 = figwheel.client.heads_up.append_message.call(null,inst_22833);
var state_22874__$1 = state_22874;
var statearr_22889_22935 = state_22874__$1;
(statearr_22889_22935[(2)] = inst_22834);

(statearr_22889_22935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (36))){
var inst_22860 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22890_22936 = state_22874__$1;
(statearr_22890_22936[(2)] = inst_22860);

(statearr_22890_22936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (29))){
var inst_22844 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22891_22937 = state_22874__$1;
(statearr_22891_22937[(2)] = inst_22844);

(statearr_22891_22937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (6))){
var inst_22793 = (state_22874[(7)]);
var state_22874__$1 = state_22874;
var statearr_22892_22938 = state_22874__$1;
(statearr_22892_22938[(2)] = inst_22793);

(statearr_22892_22938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (28))){
var inst_22840 = (state_22874[(2)]);
var inst_22841 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22842 = figwheel.client.heads_up.display_warning.call(null,inst_22841);
var state_22874__$1 = (function (){var statearr_22893 = state_22874;
(statearr_22893[(8)] = inst_22840);

return statearr_22893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(29),inst_22842);
} else {
if((state_val_22875 === (25))){
var inst_22838 = figwheel.client.heads_up.clear.call(null);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(28),inst_22838);
} else {
if((state_val_22875 === (34))){
var inst_22855 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(37),inst_22855);
} else {
if((state_val_22875 === (17))){
var inst_22820 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22894_22939 = state_22874__$1;
(statearr_22894_22939[(2)] = inst_22820);

(statearr_22894_22939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (3))){
var inst_22810 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22810)){
var statearr_22895_22940 = state_22874__$1;
(statearr_22895_22940[(1)] = (13));

} else {
var statearr_22896_22941 = state_22874__$1;
(statearr_22896_22941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (12))){
var inst_22806 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22897_22942 = state_22874__$1;
(statearr_22897_22942[(2)] = inst_22806);

(statearr_22897_22942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (2))){
var inst_22793 = (state_22874[(7)]);
var inst_22793__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22874__$1 = (function (){var statearr_22898 = state_22874;
(statearr_22898[(7)] = inst_22793__$1);

return statearr_22898;
})();
if(cljs.core.truth_(inst_22793__$1)){
var statearr_22899_22943 = state_22874__$1;
(statearr_22899_22943[(1)] = (5));

} else {
var statearr_22900_22944 = state_22874__$1;
(statearr_22900_22944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (23))){
var inst_22836 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22836)){
var statearr_22901_22945 = state_22874__$1;
(statearr_22901_22945[(1)] = (25));

} else {
var statearr_22902_22946 = state_22874__$1;
(statearr_22902_22946[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (35))){
var state_22874__$1 = state_22874;
var statearr_22903_22947 = state_22874__$1;
(statearr_22903_22947[(2)] = null);

(statearr_22903_22947[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (19))){
var inst_22831 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22831)){
var statearr_22904_22948 = state_22874__$1;
(statearr_22904_22948[(1)] = (22));

} else {
var statearr_22905_22949 = state_22874__$1;
(statearr_22905_22949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (11))){
var inst_22802 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22906_22950 = state_22874__$1;
(statearr_22906_22950[(2)] = inst_22802);

(statearr_22906_22950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (9))){
var inst_22804 = figwheel.client.heads_up.clear.call(null);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(12),inst_22804);
} else {
if((state_val_22875 === (5))){
var inst_22795 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22874__$1 = state_22874;
var statearr_22907_22951 = state_22874__$1;
(statearr_22907_22951[(2)] = inst_22795);

(statearr_22907_22951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (14))){
var inst_22822 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22822)){
var statearr_22908_22952 = state_22874__$1;
(statearr_22908_22952[(1)] = (18));

} else {
var statearr_22909_22953 = state_22874__$1;
(statearr_22909_22953[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (26))){
var inst_22846 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22874__$1 = state_22874;
if(cljs.core.truth_(inst_22846)){
var statearr_22910_22954 = state_22874__$1;
(statearr_22910_22954[(1)] = (30));

} else {
var statearr_22911_22955 = state_22874__$1;
(statearr_22911_22955[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (16))){
var inst_22814 = (state_22874[(2)]);
var inst_22815 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22816 = figwheel.client.format_messages.call(null,inst_22815);
var inst_22817 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22818 = figwheel.client.heads_up.display_error.call(null,inst_22816,inst_22817);
var state_22874__$1 = (function (){var statearr_22912 = state_22874;
(statearr_22912[(9)] = inst_22814);

return statearr_22912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(17),inst_22818);
} else {
if((state_val_22875 === (30))){
var inst_22848 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22849 = figwheel.client.heads_up.display_warning.call(null,inst_22848);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(33),inst_22849);
} else {
if((state_val_22875 === (10))){
var inst_22808 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22913_22956 = state_22874__$1;
(statearr_22913_22956[(2)] = inst_22808);

(statearr_22913_22956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (18))){
var inst_22824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22825 = figwheel.client.format_messages.call(null,inst_22824);
var inst_22826 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22827 = figwheel.client.heads_up.display_error.call(null,inst_22825,inst_22826);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(21),inst_22827);
} else {
if((state_val_22875 === (37))){
var inst_22857 = (state_22874[(2)]);
var state_22874__$1 = state_22874;
var statearr_22914_22957 = state_22874__$1;
(statearr_22914_22957[(2)] = inst_22857);

(statearr_22914_22957[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22875 === (8))){
var inst_22800 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22874__$1 = state_22874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22874__$1,(11),inst_22800);
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
});})(c__18193__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18081__auto__,c__18193__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____0 = (function (){
var statearr_22918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22918[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__);

(statearr_22918[(1)] = (1));

return statearr_22918;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____1 = (function (state_22874){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_22874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e22919){if((e22919 instanceof Object)){
var ex__18085__auto__ = e22919;
var statearr_22920_22958 = state_22874;
(statearr_22920_22958[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22959 = state_22874;
state_22874 = G__22959;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__ = function(state_22874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____1.call(this,state_22874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__,msg_hist,msg_names,msg))
})();
var state__18195__auto__ = (function (){var statearr_22921 = f__18194__auto__.call(null);
(statearr_22921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_22921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__,msg_hist,msg_names,msg))
);

return c__18193__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18193__auto___23022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___23022,ch){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___23022,ch){
return (function (state_23005){
var state_val_23006 = (state_23005[(1)]);
if((state_val_23006 === (1))){
var state_23005__$1 = state_23005;
var statearr_23007_23023 = state_23005__$1;
(statearr_23007_23023[(2)] = null);

(statearr_23007_23023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (2))){
var state_23005__$1 = state_23005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23005__$1,(4),ch);
} else {
if((state_val_23006 === (3))){
var inst_23003 = (state_23005[(2)]);
var state_23005__$1 = state_23005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23005__$1,inst_23003);
} else {
if((state_val_23006 === (4))){
var inst_22993 = (state_23005[(7)]);
var inst_22993__$1 = (state_23005[(2)]);
var state_23005__$1 = (function (){var statearr_23008 = state_23005;
(statearr_23008[(7)] = inst_22993__$1);

return statearr_23008;
})();
if(cljs.core.truth_(inst_22993__$1)){
var statearr_23009_23024 = state_23005__$1;
(statearr_23009_23024[(1)] = (5));

} else {
var statearr_23010_23025 = state_23005__$1;
(statearr_23010_23025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (5))){
var inst_22993 = (state_23005[(7)]);
var inst_22995 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22993);
var state_23005__$1 = state_23005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23005__$1,(8),inst_22995);
} else {
if((state_val_23006 === (6))){
var state_23005__$1 = state_23005;
var statearr_23011_23026 = state_23005__$1;
(statearr_23011_23026[(2)] = null);

(statearr_23011_23026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (7))){
var inst_23001 = (state_23005[(2)]);
var state_23005__$1 = state_23005;
var statearr_23012_23027 = state_23005__$1;
(statearr_23012_23027[(2)] = inst_23001);

(statearr_23012_23027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (8))){
var inst_22997 = (state_23005[(2)]);
var state_23005__$1 = (function (){var statearr_23013 = state_23005;
(statearr_23013[(8)] = inst_22997);

return statearr_23013;
})();
var statearr_23014_23028 = state_23005__$1;
(statearr_23014_23028[(2)] = null);

(statearr_23014_23028[(1)] = (2));


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
});})(c__18193__auto___23022,ch))
;
return ((function (switch__18081__auto__,c__18193__auto___23022,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18082__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18082__auto____0 = (function (){
var statearr_23018 = [null,null,null,null,null,null,null,null,null];
(statearr_23018[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18082__auto__);

(statearr_23018[(1)] = (1));

return statearr_23018;
});
var figwheel$client$heads_up_plugin_$_state_machine__18082__auto____1 = (function (state_23005){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_23005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e23019){if((e23019 instanceof Object)){
var ex__18085__auto__ = e23019;
var statearr_23020_23029 = state_23005;
(statearr_23020_23029[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23030 = state_23005;
state_23005 = G__23030;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18082__auto__ = function(state_23005){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18082__auto____1.call(this,state_23005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18082__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18082__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___23022,ch))
})();
var state__18195__auto__ = (function (){var statearr_23021 = f__18194__auto__.call(null);
(statearr_23021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___23022);

return statearr_23021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___23022,ch))
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
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_23051){
var state_val_23052 = (state_23051[(1)]);
if((state_val_23052 === (1))){
var inst_23046 = cljs.core.async.timeout.call(null,(3000));
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23051__$1,(2),inst_23046);
} else {
if((state_val_23052 === (2))){
var inst_23048 = (state_23051[(2)]);
var inst_23049 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23051__$1 = (function (){var statearr_23053 = state_23051;
(statearr_23053[(7)] = inst_23048);

return statearr_23053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23051__$1,inst_23049);
} else {
return null;
}
}
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____0 = (function (){
var statearr_23057 = [null,null,null,null,null,null,null,null];
(statearr_23057[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__);

(statearr_23057[(1)] = (1));

return statearr_23057;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____1 = (function (state_23051){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_23051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e23058){if((e23058 instanceof Object)){
var ex__18085__auto__ = e23058;
var statearr_23059_23061 = state_23051;
(statearr_23059_23061[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23062 = state_23051;
state_23051 = G__23062;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__ = function(state_23051){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____1.call(this,state_23051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18082__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_23060 = f__18194__auto__.call(null);
(statearr_23060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_23060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23063){
var map__23070 = p__23063;
var map__23070__$1 = ((((!((map__23070 == null)))?((((map__23070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23070):map__23070);
var ed = map__23070__$1;
var formatted_exception = cljs.core.get.call(null,map__23070__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23070__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23070__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23072_23076 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23073_23077 = null;
var count__23074_23078 = (0);
var i__23075_23079 = (0);
while(true){
if((i__23075_23079 < count__23074_23078)){
var msg_23080 = cljs.core._nth.call(null,chunk__23073_23077,i__23075_23079);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23080);

var G__23081 = seq__23072_23076;
var G__23082 = chunk__23073_23077;
var G__23083 = count__23074_23078;
var G__23084 = (i__23075_23079 + (1));
seq__23072_23076 = G__23081;
chunk__23073_23077 = G__23082;
count__23074_23078 = G__23083;
i__23075_23079 = G__23084;
continue;
} else {
var temp__4657__auto___23085 = cljs.core.seq.call(null,seq__23072_23076);
if(temp__4657__auto___23085){
var seq__23072_23086__$1 = temp__4657__auto___23085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23072_23086__$1)){
var c__13990__auto___23087 = cljs.core.chunk_first.call(null,seq__23072_23086__$1);
var G__23088 = cljs.core.chunk_rest.call(null,seq__23072_23086__$1);
var G__23089 = c__13990__auto___23087;
var G__23090 = cljs.core.count.call(null,c__13990__auto___23087);
var G__23091 = (0);
seq__23072_23076 = G__23088;
chunk__23073_23077 = G__23089;
count__23074_23078 = G__23090;
i__23075_23079 = G__23091;
continue;
} else {
var msg_23092 = cljs.core.first.call(null,seq__23072_23086__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23092);

var G__23093 = cljs.core.next.call(null,seq__23072_23086__$1);
var G__23094 = null;
var G__23095 = (0);
var G__23096 = (0);
seq__23072_23076 = G__23093;
chunk__23073_23077 = G__23094;
count__23074_23078 = G__23095;
i__23075_23079 = G__23096;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23097){
var map__23100 = p__23097;
var map__23100__$1 = ((((!((map__23100 == null)))?((((map__23100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23100):map__23100);
var w = map__23100__$1;
var message = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__23108 = cljs.core.seq.call(null,plugins);
var chunk__23109 = null;
var count__23110 = (0);
var i__23111 = (0);
while(true){
if((i__23111 < count__23110)){
var vec__23112 = cljs.core._nth.call(null,chunk__23109,i__23111);
var k = cljs.core.nth.call(null,vec__23112,(0),null);
var plugin = cljs.core.nth.call(null,vec__23112,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23114 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23108,chunk__23109,count__23110,i__23111,pl_23114,vec__23112,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23114.call(null,msg_hist);
});})(seq__23108,chunk__23109,count__23110,i__23111,pl_23114,vec__23112,k,plugin))
);
} else {
}

var G__23115 = seq__23108;
var G__23116 = chunk__23109;
var G__23117 = count__23110;
var G__23118 = (i__23111 + (1));
seq__23108 = G__23115;
chunk__23109 = G__23116;
count__23110 = G__23117;
i__23111 = G__23118;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23108);
if(temp__4657__auto__){
var seq__23108__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23108__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__23108__$1);
var G__23119 = cljs.core.chunk_rest.call(null,seq__23108__$1);
var G__23120 = c__13990__auto__;
var G__23121 = cljs.core.count.call(null,c__13990__auto__);
var G__23122 = (0);
seq__23108 = G__23119;
chunk__23109 = G__23120;
count__23110 = G__23121;
i__23111 = G__23122;
continue;
} else {
var vec__23113 = cljs.core.first.call(null,seq__23108__$1);
var k = cljs.core.nth.call(null,vec__23113,(0),null);
var plugin = cljs.core.nth.call(null,vec__23113,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23123 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23108,chunk__23109,count__23110,i__23111,pl_23123,vec__23113,k,plugin,seq__23108__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23123.call(null,msg_hist);
});})(seq__23108,chunk__23109,count__23110,i__23111,pl_23123,vec__23113,k,plugin,seq__23108__$1,temp__4657__auto__))
);
} else {
}

var G__23124 = cljs.core.next.call(null,seq__23108__$1);
var G__23125 = null;
var G__23126 = (0);
var G__23127 = (0);
seq__23108 = G__23124;
chunk__23109 = G__23125;
count__23110 = G__23126;
i__23111 = G__23127;
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
var args23128 = [];
var len__14245__auto___23131 = arguments.length;
var i__14246__auto___23132 = (0);
while(true){
if((i__14246__auto___23132 < len__14245__auto___23131)){
args23128.push((arguments[i__14246__auto___23132]));

var G__23133 = (i__14246__auto___23132 + (1));
i__14246__auto___23132 = G__23133;
continue;
} else {
}
break;
}

var G__23130 = args23128.length;
switch (G__23130) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23128.length)].join('')));

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
var len__14245__auto___23139 = arguments.length;
var i__14246__auto___23140 = (0);
while(true){
if((i__14246__auto___23140 < len__14245__auto___23139)){
args__14252__auto__.push((arguments[i__14246__auto___23140]));

var G__23141 = (i__14246__auto___23140 + (1));
i__14246__auto___23140 = G__23141;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((0) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__14253__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23136){
var map__23137 = p__23136;
var map__23137__$1 = ((((!((map__23137 == null)))?((((map__23137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23137):map__23137);
var opts = map__23137__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23135){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23135));
});

//# sourceMappingURL=client.js.map?rel=1464515101965