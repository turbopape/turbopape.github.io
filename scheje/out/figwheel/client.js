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
var pred__37419 = cljs.core._EQ_;
var expr__37420 = (function (){var or__13187__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e37423){if((e37423 instanceof Error)){
var e = e37423;
return false;
} else {
throw e37423;

}
}})();
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37419.call(null,"true",expr__37420))){
return true;
} else {
if(cljs.core.truth_(pred__37419.call(null,"false",expr__37420))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37420)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37425){if((e37425 instanceof Error)){
var e = e37425;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37425;

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
var len__14245__auto___37427 = arguments.length;
var i__14246__auto___37428 = (0);
while(true){
if((i__14246__auto___37428 < len__14245__auto___37427)){
args__14252__auto__.push((arguments[i__14246__auto___37428]));

var G__37429 = (i__14246__auto___37428 + (1));
i__14246__auto___37428 = G__37429;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq37426){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37426));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37430){
var map__37433 = p__37430;
var map__37433__$1 = ((((!((map__37433 == null)))?((((map__37433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37433):map__37433);
var message = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__15619__auto___37595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___37595,ch){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___37595,ch){
return (function (state_37564){
var state_val_37565 = (state_37564[(1)]);
if((state_val_37565 === (7))){
var inst_37560 = (state_37564[(2)]);
var state_37564__$1 = state_37564;
var statearr_37566_37596 = state_37564__$1;
(statearr_37566_37596[(2)] = inst_37560);

(statearr_37566_37596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (1))){
var state_37564__$1 = state_37564;
var statearr_37567_37597 = state_37564__$1;
(statearr_37567_37597[(2)] = null);

(statearr_37567_37597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (4))){
var inst_37517 = (state_37564[(7)]);
var inst_37517__$1 = (state_37564[(2)]);
var state_37564__$1 = (function (){var statearr_37568 = state_37564;
(statearr_37568[(7)] = inst_37517__$1);

return statearr_37568;
})();
if(cljs.core.truth_(inst_37517__$1)){
var statearr_37569_37598 = state_37564__$1;
(statearr_37569_37598[(1)] = (5));

} else {
var statearr_37570_37599 = state_37564__$1;
(statearr_37570_37599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (15))){
var inst_37524 = (state_37564[(8)]);
var inst_37539 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37524);
var inst_37540 = cljs.core.first.call(null,inst_37539);
var inst_37541 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37540);
var inst_37542 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37541)].join('');
var inst_37543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37542);
var state_37564__$1 = state_37564;
var statearr_37571_37600 = state_37564__$1;
(statearr_37571_37600[(2)] = inst_37543);

(statearr_37571_37600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (13))){
var inst_37548 = (state_37564[(2)]);
var state_37564__$1 = state_37564;
var statearr_37572_37601 = state_37564__$1;
(statearr_37572_37601[(2)] = inst_37548);

(statearr_37572_37601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (6))){
var state_37564__$1 = state_37564;
var statearr_37573_37602 = state_37564__$1;
(statearr_37573_37602[(2)] = null);

(statearr_37573_37602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (17))){
var inst_37546 = (state_37564[(2)]);
var state_37564__$1 = state_37564;
var statearr_37574_37603 = state_37564__$1;
(statearr_37574_37603[(2)] = inst_37546);

(statearr_37574_37603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (3))){
var inst_37562 = (state_37564[(2)]);
var state_37564__$1 = state_37564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37564__$1,inst_37562);
} else {
if((state_val_37565 === (12))){
var inst_37523 = (state_37564[(9)]);
var inst_37537 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37523,opts);
var state_37564__$1 = state_37564;
if(cljs.core.truth_(inst_37537)){
var statearr_37575_37604 = state_37564__$1;
(statearr_37575_37604[(1)] = (15));

} else {
var statearr_37576_37605 = state_37564__$1;
(statearr_37576_37605[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (2))){
var state_37564__$1 = state_37564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37564__$1,(4),ch);
} else {
if((state_val_37565 === (11))){
var inst_37524 = (state_37564[(8)]);
var inst_37529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37530 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37524);
var inst_37531 = cljs.core.async.timeout.call(null,(1000));
var inst_37532 = [inst_37530,inst_37531];
var inst_37533 = (new cljs.core.PersistentVector(null,2,(5),inst_37529,inst_37532,null));
var state_37564__$1 = state_37564;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37564__$1,(14),inst_37533);
} else {
if((state_val_37565 === (9))){
var inst_37524 = (state_37564[(8)]);
var inst_37550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37524);
var inst_37552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37551);
var inst_37553 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37552)].join('');
var inst_37554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37553);
var state_37564__$1 = (function (){var statearr_37577 = state_37564;
(statearr_37577[(10)] = inst_37550);

return statearr_37577;
})();
var statearr_37578_37606 = state_37564__$1;
(statearr_37578_37606[(2)] = inst_37554);

(statearr_37578_37606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (5))){
var inst_37517 = (state_37564[(7)]);
var inst_37519 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37520 = (new cljs.core.PersistentArrayMap(null,2,inst_37519,null));
var inst_37521 = (new cljs.core.PersistentHashSet(null,inst_37520,null));
var inst_37522 = figwheel.client.focus_msgs.call(null,inst_37521,inst_37517);
var inst_37523 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37522);
var inst_37524 = cljs.core.first.call(null,inst_37522);
var inst_37525 = figwheel.client.autoload_QMARK_.call(null);
var state_37564__$1 = (function (){var statearr_37579 = state_37564;
(statearr_37579[(8)] = inst_37524);

(statearr_37579[(9)] = inst_37523);

return statearr_37579;
})();
if(cljs.core.truth_(inst_37525)){
var statearr_37580_37607 = state_37564__$1;
(statearr_37580_37607[(1)] = (8));

} else {
var statearr_37581_37608 = state_37564__$1;
(statearr_37581_37608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (14))){
var inst_37535 = (state_37564[(2)]);
var state_37564__$1 = state_37564;
var statearr_37582_37609 = state_37564__$1;
(statearr_37582_37609[(2)] = inst_37535);

(statearr_37582_37609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (16))){
var state_37564__$1 = state_37564;
var statearr_37583_37610 = state_37564__$1;
(statearr_37583_37610[(2)] = null);

(statearr_37583_37610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (10))){
var inst_37556 = (state_37564[(2)]);
var state_37564__$1 = (function (){var statearr_37584 = state_37564;
(statearr_37584[(11)] = inst_37556);

return statearr_37584;
})();
var statearr_37585_37611 = state_37564__$1;
(statearr_37585_37611[(2)] = null);

(statearr_37585_37611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37565 === (8))){
var inst_37523 = (state_37564[(9)]);
var inst_37527 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37523,opts);
var state_37564__$1 = state_37564;
if(cljs.core.truth_(inst_37527)){
var statearr_37586_37612 = state_37564__$1;
(statearr_37586_37612[(1)] = (11));

} else {
var statearr_37587_37613 = state_37564__$1;
(statearr_37587_37613[(1)] = (12));

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
});})(c__15619__auto___37595,ch))
;
return ((function (switch__15598__auto__,c__15619__auto___37595,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____0 = (function (){
var statearr_37591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37591[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__);

(statearr_37591[(1)] = (1));

return statearr_37591;
});
var figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____1 = (function (state_37564){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_37564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e37592){if((e37592 instanceof Object)){
var ex__15602__auto__ = e37592;
var statearr_37593_37614 = state_37564;
(statearr_37593_37614[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37615 = state_37564;
state_37564 = G__37615;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__ = function(state_37564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____1.call(this,state_37564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__15599__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___37595,ch))
})();
var state__15621__auto__ = (function (){var statearr_37594 = f__15620__auto__.call(null);
(statearr_37594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___37595);

return statearr_37594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___37595,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37616_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37616_SHARP_));
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
var base_path_37623 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37623){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37622 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37622;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37621;
}}catch (e37620){if((e37620 instanceof Error)){
var e = e37620;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37623], null));
} else {
var e = e37620;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37623))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37624){
var map__37631 = p__37624;
var map__37631__$1 = ((((!((map__37631 == null)))?((((map__37631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37631):map__37631);
var opts = map__37631__$1;
var build_id = cljs.core.get.call(null,map__37631__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37631,map__37631__$1,opts,build_id){
return (function (p__37633){
var vec__37634 = p__37633;
var map__37635 = cljs.core.nth.call(null,vec__37634,(0),null);
var map__37635__$1 = ((((!((map__37635 == null)))?((((map__37635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37635):map__37635);
var msg = map__37635__$1;
var msg_name = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37634,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37634,map__37635,map__37635__$1,msg,msg_name,_,map__37631,map__37631__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37634,map__37635,map__37635__$1,msg,msg_name,_,map__37631,map__37631__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37631,map__37631__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37641){
var vec__37642 = p__37641;
var map__37643 = cljs.core.nth.call(null,vec__37642,(0),null);
var map__37643__$1 = ((((!((map__37643 == null)))?((((map__37643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37643):map__37643);
var msg = map__37643__$1;
var msg_name = cljs.core.get.call(null,map__37643__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37642,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37645){
var map__37655 = p__37645;
var map__37655__$1 = ((((!((map__37655 == null)))?((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);
var on_compile_warning = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37655,map__37655__$1,on_compile_warning,on_compile_fail){
return (function (p__37657){
var vec__37658 = p__37657;
var map__37659 = cljs.core.nth.call(null,vec__37658,(0),null);
var map__37659__$1 = ((((!((map__37659 == null)))?((((map__37659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37659):map__37659);
var msg = map__37659__$1;
var msg_name = cljs.core.get.call(null,map__37659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37658,(1));
var pred__37661 = cljs.core._EQ_;
var expr__37662 = msg_name;
if(cljs.core.truth_(pred__37661.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37662))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37661.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37662))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37655,map__37655__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__,msg_hist,msg_names,msg){
return (function (state_37878){
var state_val_37879 = (state_37878[(1)]);
if((state_val_37879 === (7))){
var inst_37802 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37802)){
var statearr_37880_37926 = state_37878__$1;
(statearr_37880_37926[(1)] = (8));

} else {
var statearr_37881_37927 = state_37878__$1;
(statearr_37881_37927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (20))){
var inst_37872 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37882_37928 = state_37878__$1;
(statearr_37882_37928[(2)] = inst_37872);

(statearr_37882_37928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (27))){
var inst_37868 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37883_37929 = state_37878__$1;
(statearr_37883_37929[(2)] = inst_37868);

(statearr_37883_37929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (1))){
var inst_37795 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37795)){
var statearr_37884_37930 = state_37878__$1;
(statearr_37884_37930[(1)] = (2));

} else {
var statearr_37885_37931 = state_37878__$1;
(statearr_37885_37931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (24))){
var inst_37870 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37886_37932 = state_37878__$1;
(statearr_37886_37932[(2)] = inst_37870);

(statearr_37886_37932[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (4))){
var inst_37876 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37878__$1,inst_37876);
} else {
if((state_val_37879 === (15))){
var inst_37874 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37887_37933 = state_37878__$1;
(statearr_37887_37933[(2)] = inst_37874);

(statearr_37887_37933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (21))){
var inst_37833 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37888_37934 = state_37878__$1;
(statearr_37888_37934[(2)] = inst_37833);

(statearr_37888_37934[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (31))){
var inst_37857 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37857)){
var statearr_37889_37935 = state_37878__$1;
(statearr_37889_37935[(1)] = (34));

} else {
var statearr_37890_37936 = state_37878__$1;
(statearr_37890_37936[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (32))){
var inst_37866 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37891_37937 = state_37878__$1;
(statearr_37891_37937[(2)] = inst_37866);

(statearr_37891_37937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (33))){
var inst_37855 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37892_37938 = state_37878__$1;
(statearr_37892_37938[(2)] = inst_37855);

(statearr_37892_37938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (13))){
var inst_37816 = figwheel.client.heads_up.clear.call(null);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(16),inst_37816);
} else {
if((state_val_37879 === (22))){
var inst_37837 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37838 = figwheel.client.heads_up.append_message.call(null,inst_37837);
var state_37878__$1 = state_37878;
var statearr_37893_37939 = state_37878__$1;
(statearr_37893_37939[(2)] = inst_37838);

(statearr_37893_37939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (36))){
var inst_37864 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37894_37940 = state_37878__$1;
(statearr_37894_37940[(2)] = inst_37864);

(statearr_37894_37940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (29))){
var inst_37848 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37895_37941 = state_37878__$1;
(statearr_37895_37941[(2)] = inst_37848);

(statearr_37895_37941[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (6))){
var inst_37797 = (state_37878[(7)]);
var state_37878__$1 = state_37878;
var statearr_37896_37942 = state_37878__$1;
(statearr_37896_37942[(2)] = inst_37797);

(statearr_37896_37942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (28))){
var inst_37844 = (state_37878[(2)]);
var inst_37845 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37846 = figwheel.client.heads_up.display_warning.call(null,inst_37845);
var state_37878__$1 = (function (){var statearr_37897 = state_37878;
(statearr_37897[(8)] = inst_37844);

return statearr_37897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(29),inst_37846);
} else {
if((state_val_37879 === (25))){
var inst_37842 = figwheel.client.heads_up.clear.call(null);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(28),inst_37842);
} else {
if((state_val_37879 === (34))){
var inst_37859 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(37),inst_37859);
} else {
if((state_val_37879 === (17))){
var inst_37824 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37898_37943 = state_37878__$1;
(statearr_37898_37943[(2)] = inst_37824);

(statearr_37898_37943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (3))){
var inst_37814 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37814)){
var statearr_37899_37944 = state_37878__$1;
(statearr_37899_37944[(1)] = (13));

} else {
var statearr_37900_37945 = state_37878__$1;
(statearr_37900_37945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (12))){
var inst_37810 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37901_37946 = state_37878__$1;
(statearr_37901_37946[(2)] = inst_37810);

(statearr_37901_37946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (2))){
var inst_37797 = (state_37878[(7)]);
var inst_37797__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37878__$1 = (function (){var statearr_37902 = state_37878;
(statearr_37902[(7)] = inst_37797__$1);

return statearr_37902;
})();
if(cljs.core.truth_(inst_37797__$1)){
var statearr_37903_37947 = state_37878__$1;
(statearr_37903_37947[(1)] = (5));

} else {
var statearr_37904_37948 = state_37878__$1;
(statearr_37904_37948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (23))){
var inst_37840 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37840)){
var statearr_37905_37949 = state_37878__$1;
(statearr_37905_37949[(1)] = (25));

} else {
var statearr_37906_37950 = state_37878__$1;
(statearr_37906_37950[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (35))){
var state_37878__$1 = state_37878;
var statearr_37907_37951 = state_37878__$1;
(statearr_37907_37951[(2)] = null);

(statearr_37907_37951[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (19))){
var inst_37835 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37835)){
var statearr_37908_37952 = state_37878__$1;
(statearr_37908_37952[(1)] = (22));

} else {
var statearr_37909_37953 = state_37878__$1;
(statearr_37909_37953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (11))){
var inst_37806 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37910_37954 = state_37878__$1;
(statearr_37910_37954[(2)] = inst_37806);

(statearr_37910_37954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (9))){
var inst_37808 = figwheel.client.heads_up.clear.call(null);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(12),inst_37808);
} else {
if((state_val_37879 === (5))){
var inst_37799 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37878__$1 = state_37878;
var statearr_37911_37955 = state_37878__$1;
(statearr_37911_37955[(2)] = inst_37799);

(statearr_37911_37955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (14))){
var inst_37826 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37826)){
var statearr_37912_37956 = state_37878__$1;
(statearr_37912_37956[(1)] = (18));

} else {
var statearr_37913_37957 = state_37878__$1;
(statearr_37913_37957[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (26))){
var inst_37850 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37878__$1 = state_37878;
if(cljs.core.truth_(inst_37850)){
var statearr_37914_37958 = state_37878__$1;
(statearr_37914_37958[(1)] = (30));

} else {
var statearr_37915_37959 = state_37878__$1;
(statearr_37915_37959[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (16))){
var inst_37818 = (state_37878[(2)]);
var inst_37819 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37820 = figwheel.client.format_messages.call(null,inst_37819);
var inst_37821 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37822 = figwheel.client.heads_up.display_error.call(null,inst_37820,inst_37821);
var state_37878__$1 = (function (){var statearr_37916 = state_37878;
(statearr_37916[(9)] = inst_37818);

return statearr_37916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(17),inst_37822);
} else {
if((state_val_37879 === (30))){
var inst_37852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37853 = figwheel.client.heads_up.display_warning.call(null,inst_37852);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(33),inst_37853);
} else {
if((state_val_37879 === (10))){
var inst_37812 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37917_37960 = state_37878__$1;
(statearr_37917_37960[(2)] = inst_37812);

(statearr_37917_37960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (18))){
var inst_37828 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37829 = figwheel.client.format_messages.call(null,inst_37828);
var inst_37830 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37831 = figwheel.client.heads_up.display_error.call(null,inst_37829,inst_37830);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(21),inst_37831);
} else {
if((state_val_37879 === (37))){
var inst_37861 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37918_37961 = state_37878__$1;
(statearr_37918_37961[(2)] = inst_37861);

(statearr_37918_37961[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37879 === (8))){
var inst_37804 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37878__$1,(11),inst_37804);
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
});})(c__15619__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15598__auto__,c__15619__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____0 = (function (){
var statearr_37922 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37922[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__);

(statearr_37922[(1)] = (1));

return statearr_37922;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____1 = (function (state_37878){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_37878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e37923){if((e37923 instanceof Object)){
var ex__15602__auto__ = e37923;
var statearr_37924_37962 = state_37878;
(statearr_37924_37962[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37963 = state_37878;
state_37878 = G__37963;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__ = function(state_37878){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____1.call(this,state_37878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__,msg_hist,msg_names,msg))
})();
var state__15621__auto__ = (function (){var statearr_37925 = f__15620__auto__.call(null);
(statearr_37925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_37925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__,msg_hist,msg_names,msg))
);

return c__15619__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15619__auto___38026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___38026,ch){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___38026,ch){
return (function (state_38009){
var state_val_38010 = (state_38009[(1)]);
if((state_val_38010 === (1))){
var state_38009__$1 = state_38009;
var statearr_38011_38027 = state_38009__$1;
(statearr_38011_38027[(2)] = null);

(statearr_38011_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (2))){
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,(4),ch);
} else {
if((state_val_38010 === (3))){
var inst_38007 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38009__$1,inst_38007);
} else {
if((state_val_38010 === (4))){
var inst_37997 = (state_38009[(7)]);
var inst_37997__$1 = (state_38009[(2)]);
var state_38009__$1 = (function (){var statearr_38012 = state_38009;
(statearr_38012[(7)] = inst_37997__$1);

return statearr_38012;
})();
if(cljs.core.truth_(inst_37997__$1)){
var statearr_38013_38028 = state_38009__$1;
(statearr_38013_38028[(1)] = (5));

} else {
var statearr_38014_38029 = state_38009__$1;
(statearr_38014_38029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (5))){
var inst_37997 = (state_38009[(7)]);
var inst_37999 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37997);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,(8),inst_37999);
} else {
if((state_val_38010 === (6))){
var state_38009__$1 = state_38009;
var statearr_38015_38030 = state_38009__$1;
(statearr_38015_38030[(2)] = null);

(statearr_38015_38030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (7))){
var inst_38005 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
var statearr_38016_38031 = state_38009__$1;
(statearr_38016_38031[(2)] = inst_38005);

(statearr_38016_38031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (8))){
var inst_38001 = (state_38009[(2)]);
var state_38009__$1 = (function (){var statearr_38017 = state_38009;
(statearr_38017[(8)] = inst_38001);

return statearr_38017;
})();
var statearr_38018_38032 = state_38009__$1;
(statearr_38018_38032[(2)] = null);

(statearr_38018_38032[(1)] = (2));


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
});})(c__15619__auto___38026,ch))
;
return ((function (switch__15598__auto__,c__15619__auto___38026,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__15599__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__15599__auto____0 = (function (){
var statearr_38022 = [null,null,null,null,null,null,null,null,null];
(statearr_38022[(0)] = figwheel$client$heads_up_plugin_$_state_machine__15599__auto__);

(statearr_38022[(1)] = (1));

return statearr_38022;
});
var figwheel$client$heads_up_plugin_$_state_machine__15599__auto____1 = (function (state_38009){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_38009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e38023){if((e38023 instanceof Object)){
var ex__15602__auto__ = e38023;
var statearr_38024_38033 = state_38009;
(statearr_38024_38033[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38034 = state_38009;
state_38009 = G__38034;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__15599__auto__ = function(state_38009){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__15599__auto____1.call(this,state_38009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__15599__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__15599__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___38026,ch))
})();
var state__15621__auto__ = (function (){var statearr_38025 = f__15620__auto__.call(null);
(statearr_38025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___38026);

return statearr_38025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___38026,ch))
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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_38055){
var state_val_38056 = (state_38055[(1)]);
if((state_val_38056 === (1))){
var inst_38050 = cljs.core.async.timeout.call(null,(3000));
var state_38055__$1 = state_38055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38055__$1,(2),inst_38050);
} else {
if((state_val_38056 === (2))){
var inst_38052 = (state_38055[(2)]);
var inst_38053 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38055__$1 = (function (){var statearr_38057 = state_38055;
(statearr_38057[(7)] = inst_38052);

return statearr_38057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38055__$1,inst_38053);
} else {
return null;
}
}
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____0 = (function (){
var statearr_38061 = [null,null,null,null,null,null,null,null];
(statearr_38061[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__);

(statearr_38061[(1)] = (1));

return statearr_38061;
});
var figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____1 = (function (state_38055){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_38055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e38062){if((e38062 instanceof Object)){
var ex__15602__auto__ = e38062;
var statearr_38063_38065 = state_38055;
(statearr_38063_38065[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38066 = state_38055;
state_38055 = G__38066;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__ = function(state_38055){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____1.call(this,state_38055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__15599__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_38064 = f__15620__auto__.call(null);
(statearr_38064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_38064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38067){
var map__38074 = p__38067;
var map__38074__$1 = ((((!((map__38074 == null)))?((((map__38074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38074):map__38074);
var ed = map__38074__$1;
var formatted_exception = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38076_38080 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38077_38081 = null;
var count__38078_38082 = (0);
var i__38079_38083 = (0);
while(true){
if((i__38079_38083 < count__38078_38082)){
var msg_38084 = cljs.core._nth.call(null,chunk__38077_38081,i__38079_38083);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38084);

var G__38085 = seq__38076_38080;
var G__38086 = chunk__38077_38081;
var G__38087 = count__38078_38082;
var G__38088 = (i__38079_38083 + (1));
seq__38076_38080 = G__38085;
chunk__38077_38081 = G__38086;
count__38078_38082 = G__38087;
i__38079_38083 = G__38088;
continue;
} else {
var temp__4657__auto___38089 = cljs.core.seq.call(null,seq__38076_38080);
if(temp__4657__auto___38089){
var seq__38076_38090__$1 = temp__4657__auto___38089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38076_38090__$1)){
var c__13990__auto___38091 = cljs.core.chunk_first.call(null,seq__38076_38090__$1);
var G__38092 = cljs.core.chunk_rest.call(null,seq__38076_38090__$1);
var G__38093 = c__13990__auto___38091;
var G__38094 = cljs.core.count.call(null,c__13990__auto___38091);
var G__38095 = (0);
seq__38076_38080 = G__38092;
chunk__38077_38081 = G__38093;
count__38078_38082 = G__38094;
i__38079_38083 = G__38095;
continue;
} else {
var msg_38096 = cljs.core.first.call(null,seq__38076_38090__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38096);

var G__38097 = cljs.core.next.call(null,seq__38076_38090__$1);
var G__38098 = null;
var G__38099 = (0);
var G__38100 = (0);
seq__38076_38080 = G__38097;
chunk__38077_38081 = G__38098;
count__38078_38082 = G__38099;
i__38079_38083 = G__38100;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38101){
var map__38104 = p__38101;
var map__38104__$1 = ((((!((map__38104 == null)))?((((map__38104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38104):map__38104);
var w = map__38104__$1;
var message = cljs.core.get.call(null,map__38104__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38112 = cljs.core.seq.call(null,plugins);
var chunk__38113 = null;
var count__38114 = (0);
var i__38115 = (0);
while(true){
if((i__38115 < count__38114)){
var vec__38116 = cljs.core._nth.call(null,chunk__38113,i__38115);
var k = cljs.core.nth.call(null,vec__38116,(0),null);
var plugin = cljs.core.nth.call(null,vec__38116,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38118 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38112,chunk__38113,count__38114,i__38115,pl_38118,vec__38116,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38118.call(null,msg_hist);
});})(seq__38112,chunk__38113,count__38114,i__38115,pl_38118,vec__38116,k,plugin))
);
} else {
}

var G__38119 = seq__38112;
var G__38120 = chunk__38113;
var G__38121 = count__38114;
var G__38122 = (i__38115 + (1));
seq__38112 = G__38119;
chunk__38113 = G__38120;
count__38114 = G__38121;
i__38115 = G__38122;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38112);
if(temp__4657__auto__){
var seq__38112__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38112__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__38112__$1);
var G__38123 = cljs.core.chunk_rest.call(null,seq__38112__$1);
var G__38124 = c__13990__auto__;
var G__38125 = cljs.core.count.call(null,c__13990__auto__);
var G__38126 = (0);
seq__38112 = G__38123;
chunk__38113 = G__38124;
count__38114 = G__38125;
i__38115 = G__38126;
continue;
} else {
var vec__38117 = cljs.core.first.call(null,seq__38112__$1);
var k = cljs.core.nth.call(null,vec__38117,(0),null);
var plugin = cljs.core.nth.call(null,vec__38117,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38127 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38112,chunk__38113,count__38114,i__38115,pl_38127,vec__38117,k,plugin,seq__38112__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38127.call(null,msg_hist);
});})(seq__38112,chunk__38113,count__38114,i__38115,pl_38127,vec__38117,k,plugin,seq__38112__$1,temp__4657__auto__))
);
} else {
}

var G__38128 = cljs.core.next.call(null,seq__38112__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__38112 = G__38128;
chunk__38113 = G__38129;
count__38114 = G__38130;
i__38115 = G__38131;
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
var args38132 = [];
var len__14245__auto___38135 = arguments.length;
var i__14246__auto___38136 = (0);
while(true){
if((i__14246__auto___38136 < len__14245__auto___38135)){
args38132.push((arguments[i__14246__auto___38136]));

var G__38137 = (i__14246__auto___38136 + (1));
i__14246__auto___38136 = G__38137;
continue;
} else {
}
break;
}

var G__38134 = args38132.length;
switch (G__38134) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38132.length)].join('')));

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
var len__14245__auto___38143 = arguments.length;
var i__14246__auto___38144 = (0);
while(true){
if((i__14246__auto___38144 < len__14245__auto___38143)){
args__14252__auto__.push((arguments[i__14246__auto___38144]));

var G__38145 = (i__14246__auto___38144 + (1));
i__14246__auto___38144 = G__38145;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((0) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__14253__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38140){
var map__38141 = p__38140;
var map__38141__$1 = ((((!((map__38141 == null)))?((((map__38141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38141):map__38141);
var opts = map__38141__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38139){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38139));
});

//# sourceMappingURL=client.js.map?rel=1458338370646