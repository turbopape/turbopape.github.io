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
var pred__21617 = cljs.core._EQ_;
var expr__21618 = (function (){var or__13187__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e21621){if((e21621 instanceof Error)){
var e = e21621;
return false;
} else {
throw e21621;

}
}})();
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__21617.call(null,"true",expr__21618))){
return true;
} else {
if(cljs.core.truth_(pred__21617.call(null,"false",expr__21618))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21618)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e21623){if((e21623 instanceof Error)){
var e = e21623;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e21623;

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
var len__14245__auto___21625 = arguments.length;
var i__14246__auto___21626 = (0);
while(true){
if((i__14246__auto___21626 < len__14245__auto___21625)){
args__14252__auto__.push((arguments[i__14246__auto___21626]));

var G__21627 = (i__14246__auto___21626 + (1));
i__14246__auto___21626 = G__21627;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq21624){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21624));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21628){
var map__21631 = p__21628;
var map__21631__$1 = ((((!((map__21631 == null)))?((((map__21631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21631):map__21631);
var message = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__17395__auto___21793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___21793,ch){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___21793,ch){
return (function (state_21762){
var state_val_21763 = (state_21762[(1)]);
if((state_val_21763 === (7))){
var inst_21758 = (state_21762[(2)]);
var state_21762__$1 = state_21762;
var statearr_21764_21794 = state_21762__$1;
(statearr_21764_21794[(2)] = inst_21758);

(statearr_21764_21794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (1))){
var state_21762__$1 = state_21762;
var statearr_21765_21795 = state_21762__$1;
(statearr_21765_21795[(2)] = null);

(statearr_21765_21795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (4))){
var inst_21715 = (state_21762[(7)]);
var inst_21715__$1 = (state_21762[(2)]);
var state_21762__$1 = (function (){var statearr_21766 = state_21762;
(statearr_21766[(7)] = inst_21715__$1);

return statearr_21766;
})();
if(cljs.core.truth_(inst_21715__$1)){
var statearr_21767_21796 = state_21762__$1;
(statearr_21767_21796[(1)] = (5));

} else {
var statearr_21768_21797 = state_21762__$1;
(statearr_21768_21797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (15))){
var inst_21722 = (state_21762[(8)]);
var inst_21737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21722);
var inst_21738 = cljs.core.first.call(null,inst_21737);
var inst_21739 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21738);
var inst_21740 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_21739)].join('');
var inst_21741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_21740);
var state_21762__$1 = state_21762;
var statearr_21769_21798 = state_21762__$1;
(statearr_21769_21798[(2)] = inst_21741);

(statearr_21769_21798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (13))){
var inst_21746 = (state_21762[(2)]);
var state_21762__$1 = state_21762;
var statearr_21770_21799 = state_21762__$1;
(statearr_21770_21799[(2)] = inst_21746);

(statearr_21770_21799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (6))){
var state_21762__$1 = state_21762;
var statearr_21771_21800 = state_21762__$1;
(statearr_21771_21800[(2)] = null);

(statearr_21771_21800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (17))){
var inst_21744 = (state_21762[(2)]);
var state_21762__$1 = state_21762;
var statearr_21772_21801 = state_21762__$1;
(statearr_21772_21801[(2)] = inst_21744);

(statearr_21772_21801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (3))){
var inst_21760 = (state_21762[(2)]);
var state_21762__$1 = state_21762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21762__$1,inst_21760);
} else {
if((state_val_21763 === (12))){
var inst_21721 = (state_21762[(9)]);
var inst_21735 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21721,opts);
var state_21762__$1 = state_21762;
if(cljs.core.truth_(inst_21735)){
var statearr_21773_21802 = state_21762__$1;
(statearr_21773_21802[(1)] = (15));

} else {
var statearr_21774_21803 = state_21762__$1;
(statearr_21774_21803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (2))){
var state_21762__$1 = state_21762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21762__$1,(4),ch);
} else {
if((state_val_21763 === (11))){
var inst_21722 = (state_21762[(8)]);
var inst_21727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21728 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21722);
var inst_21729 = cljs.core.async.timeout.call(null,(1000));
var inst_21730 = [inst_21728,inst_21729];
var inst_21731 = (new cljs.core.PersistentVector(null,2,(5),inst_21727,inst_21730,null));
var state_21762__$1 = state_21762;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21762__$1,(14),inst_21731);
} else {
if((state_val_21763 === (9))){
var inst_21722 = (state_21762[(8)]);
var inst_21748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_21749 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21722);
var inst_21750 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21749);
var inst_21751 = [cljs.core.str("Not loading: "),cljs.core.str(inst_21750)].join('');
var inst_21752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_21751);
var state_21762__$1 = (function (){var statearr_21775 = state_21762;
(statearr_21775[(10)] = inst_21748);

return statearr_21775;
})();
var statearr_21776_21804 = state_21762__$1;
(statearr_21776_21804[(2)] = inst_21752);

(statearr_21776_21804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (5))){
var inst_21715 = (state_21762[(7)]);
var inst_21717 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21718 = (new cljs.core.PersistentArrayMap(null,2,inst_21717,null));
var inst_21719 = (new cljs.core.PersistentHashSet(null,inst_21718,null));
var inst_21720 = figwheel.client.focus_msgs.call(null,inst_21719,inst_21715);
var inst_21721 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21720);
var inst_21722 = cljs.core.first.call(null,inst_21720);
var inst_21723 = figwheel.client.autoload_QMARK_.call(null);
var state_21762__$1 = (function (){var statearr_21777 = state_21762;
(statearr_21777[(8)] = inst_21722);

(statearr_21777[(9)] = inst_21721);

return statearr_21777;
})();
if(cljs.core.truth_(inst_21723)){
var statearr_21778_21805 = state_21762__$1;
(statearr_21778_21805[(1)] = (8));

} else {
var statearr_21779_21806 = state_21762__$1;
(statearr_21779_21806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (14))){
var inst_21733 = (state_21762[(2)]);
var state_21762__$1 = state_21762;
var statearr_21780_21807 = state_21762__$1;
(statearr_21780_21807[(2)] = inst_21733);

(statearr_21780_21807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (16))){
var state_21762__$1 = state_21762;
var statearr_21781_21808 = state_21762__$1;
(statearr_21781_21808[(2)] = null);

(statearr_21781_21808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (10))){
var inst_21754 = (state_21762[(2)]);
var state_21762__$1 = (function (){var statearr_21782 = state_21762;
(statearr_21782[(11)] = inst_21754);

return statearr_21782;
})();
var statearr_21783_21809 = state_21762__$1;
(statearr_21783_21809[(2)] = null);

(statearr_21783_21809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21763 === (8))){
var inst_21721 = (state_21762[(9)]);
var inst_21725 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21721,opts);
var state_21762__$1 = state_21762;
if(cljs.core.truth_(inst_21725)){
var statearr_21784_21810 = state_21762__$1;
(statearr_21784_21810[(1)] = (11));

} else {
var statearr_21785_21811 = state_21762__$1;
(statearr_21785_21811[(1)] = (12));

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
});})(c__17395__auto___21793,ch))
;
return ((function (switch__17283__auto__,c__17395__auto___21793,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____0 = (function (){
var statearr_21789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21789[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__);

(statearr_21789[(1)] = (1));

return statearr_21789;
});
var figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____1 = (function (state_21762){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_21762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e21790){if((e21790 instanceof Object)){
var ex__17287__auto__ = e21790;
var statearr_21791_21812 = state_21762;
(statearr_21791_21812[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21813 = state_21762;
state_21762 = G__21813;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__ = function(state_21762){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____1.call(this,state_21762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__17284__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___21793,ch))
})();
var state__17397__auto__ = (function (){var statearr_21792 = f__17396__auto__.call(null);
(statearr_21792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___21793);

return statearr_21792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___21793,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21814_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21814_SHARP_));
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
var base_path_21821 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21821){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21820 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21820;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21819;
}}catch (e21818){if((e21818 instanceof Error)){
var e = e21818;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21821], null));
} else {
var e = e21818;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21821))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21822){
var map__21829 = p__21822;
var map__21829__$1 = ((((!((map__21829 == null)))?((((map__21829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21829):map__21829);
var opts = map__21829__$1;
var build_id = cljs.core.get.call(null,map__21829__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21829,map__21829__$1,opts,build_id){
return (function (p__21831){
var vec__21832 = p__21831;
var map__21833 = cljs.core.nth.call(null,vec__21832,(0),null);
var map__21833__$1 = ((((!((map__21833 == null)))?((((map__21833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21833):map__21833);
var msg = map__21833__$1;
var msg_name = cljs.core.get.call(null,map__21833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21832,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21832,map__21833,map__21833__$1,msg,msg_name,_,map__21829,map__21829__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21832,map__21833,map__21833__$1,msg,msg_name,_,map__21829,map__21829__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21829,map__21829__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21839){
var vec__21840 = p__21839;
var map__21841 = cljs.core.nth.call(null,vec__21840,(0),null);
var map__21841__$1 = ((((!((map__21841 == null)))?((((map__21841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21841):map__21841);
var msg = map__21841__$1;
var msg_name = cljs.core.get.call(null,map__21841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21840,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21843){
var map__21853 = p__21843;
var map__21853__$1 = ((((!((map__21853 == null)))?((((map__21853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21853):map__21853);
var on_compile_warning = cljs.core.get.call(null,map__21853__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21853__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21853,map__21853__$1,on_compile_warning,on_compile_fail){
return (function (p__21855){
var vec__21856 = p__21855;
var map__21857 = cljs.core.nth.call(null,vec__21856,(0),null);
var map__21857__$1 = ((((!((map__21857 == null)))?((((map__21857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21857):map__21857);
var msg = map__21857__$1;
var msg_name = cljs.core.get.call(null,map__21857__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21856,(1));
var pred__21859 = cljs.core._EQ_;
var expr__21860 = msg_name;
if(cljs.core.truth_(pred__21859.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21860))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21859.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21860))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21853,map__21853__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__,msg_hist,msg_names,msg){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__,msg_hist,msg_names,msg){
return (function (state_22076){
var state_val_22077 = (state_22076[(1)]);
if((state_val_22077 === (7))){
var inst_22000 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22000)){
var statearr_22078_22124 = state_22076__$1;
(statearr_22078_22124[(1)] = (8));

} else {
var statearr_22079_22125 = state_22076__$1;
(statearr_22079_22125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (20))){
var inst_22070 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22080_22126 = state_22076__$1;
(statearr_22080_22126[(2)] = inst_22070);

(statearr_22080_22126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (27))){
var inst_22066 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22081_22127 = state_22076__$1;
(statearr_22081_22127[(2)] = inst_22066);

(statearr_22081_22127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (1))){
var inst_21993 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_21993)){
var statearr_22082_22128 = state_22076__$1;
(statearr_22082_22128[(1)] = (2));

} else {
var statearr_22083_22129 = state_22076__$1;
(statearr_22083_22129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (24))){
var inst_22068 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22084_22130 = state_22076__$1;
(statearr_22084_22130[(2)] = inst_22068);

(statearr_22084_22130[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (4))){
var inst_22074 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22076__$1,inst_22074);
} else {
if((state_val_22077 === (15))){
var inst_22072 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22085_22131 = state_22076__$1;
(statearr_22085_22131[(2)] = inst_22072);

(statearr_22085_22131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (21))){
var inst_22031 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22086_22132 = state_22076__$1;
(statearr_22086_22132[(2)] = inst_22031);

(statearr_22086_22132[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (31))){
var inst_22055 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22055)){
var statearr_22087_22133 = state_22076__$1;
(statearr_22087_22133[(1)] = (34));

} else {
var statearr_22088_22134 = state_22076__$1;
(statearr_22088_22134[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (32))){
var inst_22064 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22089_22135 = state_22076__$1;
(statearr_22089_22135[(2)] = inst_22064);

(statearr_22089_22135[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (33))){
var inst_22053 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22090_22136 = state_22076__$1;
(statearr_22090_22136[(2)] = inst_22053);

(statearr_22090_22136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (13))){
var inst_22014 = figwheel.client.heads_up.clear.call(null);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(16),inst_22014);
} else {
if((state_val_22077 === (22))){
var inst_22035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22036 = figwheel.client.heads_up.append_message.call(null,inst_22035);
var state_22076__$1 = state_22076;
var statearr_22091_22137 = state_22076__$1;
(statearr_22091_22137[(2)] = inst_22036);

(statearr_22091_22137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (36))){
var inst_22062 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22092_22138 = state_22076__$1;
(statearr_22092_22138[(2)] = inst_22062);

(statearr_22092_22138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (29))){
var inst_22046 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22093_22139 = state_22076__$1;
(statearr_22093_22139[(2)] = inst_22046);

(statearr_22093_22139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (6))){
var inst_21995 = (state_22076[(7)]);
var state_22076__$1 = state_22076;
var statearr_22094_22140 = state_22076__$1;
(statearr_22094_22140[(2)] = inst_21995);

(statearr_22094_22140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (28))){
var inst_22042 = (state_22076[(2)]);
var inst_22043 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22044 = figwheel.client.heads_up.display_warning.call(null,inst_22043);
var state_22076__$1 = (function (){var statearr_22095 = state_22076;
(statearr_22095[(8)] = inst_22042);

return statearr_22095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(29),inst_22044);
} else {
if((state_val_22077 === (25))){
var inst_22040 = figwheel.client.heads_up.clear.call(null);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(28),inst_22040);
} else {
if((state_val_22077 === (34))){
var inst_22057 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(37),inst_22057);
} else {
if((state_val_22077 === (17))){
var inst_22022 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22096_22141 = state_22076__$1;
(statearr_22096_22141[(2)] = inst_22022);

(statearr_22096_22141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (3))){
var inst_22012 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22012)){
var statearr_22097_22142 = state_22076__$1;
(statearr_22097_22142[(1)] = (13));

} else {
var statearr_22098_22143 = state_22076__$1;
(statearr_22098_22143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (12))){
var inst_22008 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22099_22144 = state_22076__$1;
(statearr_22099_22144[(2)] = inst_22008);

(statearr_22099_22144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (2))){
var inst_21995 = (state_22076[(7)]);
var inst_21995__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22076__$1 = (function (){var statearr_22100 = state_22076;
(statearr_22100[(7)] = inst_21995__$1);

return statearr_22100;
})();
if(cljs.core.truth_(inst_21995__$1)){
var statearr_22101_22145 = state_22076__$1;
(statearr_22101_22145[(1)] = (5));

} else {
var statearr_22102_22146 = state_22076__$1;
(statearr_22102_22146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (23))){
var inst_22038 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22038)){
var statearr_22103_22147 = state_22076__$1;
(statearr_22103_22147[(1)] = (25));

} else {
var statearr_22104_22148 = state_22076__$1;
(statearr_22104_22148[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (35))){
var state_22076__$1 = state_22076;
var statearr_22105_22149 = state_22076__$1;
(statearr_22105_22149[(2)] = null);

(statearr_22105_22149[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (19))){
var inst_22033 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22033)){
var statearr_22106_22150 = state_22076__$1;
(statearr_22106_22150[(1)] = (22));

} else {
var statearr_22107_22151 = state_22076__$1;
(statearr_22107_22151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (11))){
var inst_22004 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22108_22152 = state_22076__$1;
(statearr_22108_22152[(2)] = inst_22004);

(statearr_22108_22152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (9))){
var inst_22006 = figwheel.client.heads_up.clear.call(null);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(12),inst_22006);
} else {
if((state_val_22077 === (5))){
var inst_21997 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22076__$1 = state_22076;
var statearr_22109_22153 = state_22076__$1;
(statearr_22109_22153[(2)] = inst_21997);

(statearr_22109_22153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (14))){
var inst_22024 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22024)){
var statearr_22110_22154 = state_22076__$1;
(statearr_22110_22154[(1)] = (18));

} else {
var statearr_22111_22155 = state_22076__$1;
(statearr_22111_22155[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (26))){
var inst_22048 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22076__$1 = state_22076;
if(cljs.core.truth_(inst_22048)){
var statearr_22112_22156 = state_22076__$1;
(statearr_22112_22156[(1)] = (30));

} else {
var statearr_22113_22157 = state_22076__$1;
(statearr_22113_22157[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (16))){
var inst_22016 = (state_22076[(2)]);
var inst_22017 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22018 = figwheel.client.format_messages.call(null,inst_22017);
var inst_22019 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22020 = figwheel.client.heads_up.display_error.call(null,inst_22018,inst_22019);
var state_22076__$1 = (function (){var statearr_22114 = state_22076;
(statearr_22114[(9)] = inst_22016);

return statearr_22114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(17),inst_22020);
} else {
if((state_val_22077 === (30))){
var inst_22050 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22051 = figwheel.client.heads_up.display_warning.call(null,inst_22050);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(33),inst_22051);
} else {
if((state_val_22077 === (10))){
var inst_22010 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22115_22158 = state_22076__$1;
(statearr_22115_22158[(2)] = inst_22010);

(statearr_22115_22158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (18))){
var inst_22026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22027 = figwheel.client.format_messages.call(null,inst_22026);
var inst_22028 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22029 = figwheel.client.heads_up.display_error.call(null,inst_22027,inst_22028);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(21),inst_22029);
} else {
if((state_val_22077 === (37))){
var inst_22059 = (state_22076[(2)]);
var state_22076__$1 = state_22076;
var statearr_22116_22159 = state_22076__$1;
(statearr_22116_22159[(2)] = inst_22059);

(statearr_22116_22159[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22077 === (8))){
var inst_22002 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22076__$1 = state_22076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22076__$1,(11),inst_22002);
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
});})(c__17395__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__17283__auto__,c__17395__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____0 = (function (){
var statearr_22120 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22120[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__);

(statearr_22120[(1)] = (1));

return statearr_22120;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____1 = (function (state_22076){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_22076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e22121){if((e22121 instanceof Object)){
var ex__17287__auto__ = e22121;
var statearr_22122_22160 = state_22076;
(statearr_22122_22160[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22161 = state_22076;
state_22076 = G__22161;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__ = function(state_22076){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____1.call(this,state_22076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__,msg_hist,msg_names,msg))
})();
var state__17397__auto__ = (function (){var statearr_22123 = f__17396__auto__.call(null);
(statearr_22123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_22123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__,msg_hist,msg_names,msg))
);

return c__17395__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17395__auto___22224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___22224,ch){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___22224,ch){
return (function (state_22207){
var state_val_22208 = (state_22207[(1)]);
if((state_val_22208 === (1))){
var state_22207__$1 = state_22207;
var statearr_22209_22225 = state_22207__$1;
(statearr_22209_22225[(2)] = null);

(statearr_22209_22225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22208 === (2))){
var state_22207__$1 = state_22207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22207__$1,(4),ch);
} else {
if((state_val_22208 === (3))){
var inst_22205 = (state_22207[(2)]);
var state_22207__$1 = state_22207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22207__$1,inst_22205);
} else {
if((state_val_22208 === (4))){
var inst_22195 = (state_22207[(7)]);
var inst_22195__$1 = (state_22207[(2)]);
var state_22207__$1 = (function (){var statearr_22210 = state_22207;
(statearr_22210[(7)] = inst_22195__$1);

return statearr_22210;
})();
if(cljs.core.truth_(inst_22195__$1)){
var statearr_22211_22226 = state_22207__$1;
(statearr_22211_22226[(1)] = (5));

} else {
var statearr_22212_22227 = state_22207__$1;
(statearr_22212_22227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22208 === (5))){
var inst_22195 = (state_22207[(7)]);
var inst_22197 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22195);
var state_22207__$1 = state_22207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22207__$1,(8),inst_22197);
} else {
if((state_val_22208 === (6))){
var state_22207__$1 = state_22207;
var statearr_22213_22228 = state_22207__$1;
(statearr_22213_22228[(2)] = null);

(statearr_22213_22228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22208 === (7))){
var inst_22203 = (state_22207[(2)]);
var state_22207__$1 = state_22207;
var statearr_22214_22229 = state_22207__$1;
(statearr_22214_22229[(2)] = inst_22203);

(statearr_22214_22229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22208 === (8))){
var inst_22199 = (state_22207[(2)]);
var state_22207__$1 = (function (){var statearr_22215 = state_22207;
(statearr_22215[(8)] = inst_22199);

return statearr_22215;
})();
var statearr_22216_22230 = state_22207__$1;
(statearr_22216_22230[(2)] = null);

(statearr_22216_22230[(1)] = (2));


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
});})(c__17395__auto___22224,ch))
;
return ((function (switch__17283__auto__,c__17395__auto___22224,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__17284__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__17284__auto____0 = (function (){
var statearr_22220 = [null,null,null,null,null,null,null,null,null];
(statearr_22220[(0)] = figwheel$client$heads_up_plugin_$_state_machine__17284__auto__);

(statearr_22220[(1)] = (1));

return statearr_22220;
});
var figwheel$client$heads_up_plugin_$_state_machine__17284__auto____1 = (function (state_22207){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_22207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e22221){if((e22221 instanceof Object)){
var ex__17287__auto__ = e22221;
var statearr_22222_22231 = state_22207;
(statearr_22222_22231[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22232 = state_22207;
state_22207 = G__22232;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__17284__auto__ = function(state_22207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__17284__auto____1.call(this,state_22207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__17284__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__17284__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___22224,ch))
})();
var state__17397__auto__ = (function (){var statearr_22223 = f__17396__auto__.call(null);
(statearr_22223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___22224);

return statearr_22223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___22224,ch))
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
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_22253){
var state_val_22254 = (state_22253[(1)]);
if((state_val_22254 === (1))){
var inst_22248 = cljs.core.async.timeout.call(null,(3000));
var state_22253__$1 = state_22253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22253__$1,(2),inst_22248);
} else {
if((state_val_22254 === (2))){
var inst_22250 = (state_22253[(2)]);
var inst_22251 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22253__$1 = (function (){var statearr_22255 = state_22253;
(statearr_22255[(7)] = inst_22250);

return statearr_22255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22253__$1,inst_22251);
} else {
return null;
}
}
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____0 = (function (){
var statearr_22259 = [null,null,null,null,null,null,null,null];
(statearr_22259[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__);

(statearr_22259[(1)] = (1));

return statearr_22259;
});
var figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____1 = (function (state_22253){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_22253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e22260){if((e22260 instanceof Object)){
var ex__17287__auto__ = e22260;
var statearr_22261_22263 = state_22253;
(statearr_22261_22263[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22264 = state_22253;
state_22253 = G__22264;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__ = function(state_22253){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____1.call(this,state_22253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__17284__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_22262 = f__17396__auto__.call(null);
(statearr_22262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_22262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22265){
var map__22272 = p__22265;
var map__22272__$1 = ((((!((map__22272 == null)))?((((map__22272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22272):map__22272);
var ed = map__22272__$1;
var formatted_exception = cljs.core.get.call(null,map__22272__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22272__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22272__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22274_22278 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22275_22279 = null;
var count__22276_22280 = (0);
var i__22277_22281 = (0);
while(true){
if((i__22277_22281 < count__22276_22280)){
var msg_22282 = cljs.core._nth.call(null,chunk__22275_22279,i__22277_22281);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22282);

var G__22283 = seq__22274_22278;
var G__22284 = chunk__22275_22279;
var G__22285 = count__22276_22280;
var G__22286 = (i__22277_22281 + (1));
seq__22274_22278 = G__22283;
chunk__22275_22279 = G__22284;
count__22276_22280 = G__22285;
i__22277_22281 = G__22286;
continue;
} else {
var temp__4657__auto___22287 = cljs.core.seq.call(null,seq__22274_22278);
if(temp__4657__auto___22287){
var seq__22274_22288__$1 = temp__4657__auto___22287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22274_22288__$1)){
var c__13990__auto___22289 = cljs.core.chunk_first.call(null,seq__22274_22288__$1);
var G__22290 = cljs.core.chunk_rest.call(null,seq__22274_22288__$1);
var G__22291 = c__13990__auto___22289;
var G__22292 = cljs.core.count.call(null,c__13990__auto___22289);
var G__22293 = (0);
seq__22274_22278 = G__22290;
chunk__22275_22279 = G__22291;
count__22276_22280 = G__22292;
i__22277_22281 = G__22293;
continue;
} else {
var msg_22294 = cljs.core.first.call(null,seq__22274_22288__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22294);

var G__22295 = cljs.core.next.call(null,seq__22274_22288__$1);
var G__22296 = null;
var G__22297 = (0);
var G__22298 = (0);
seq__22274_22278 = G__22295;
chunk__22275_22279 = G__22296;
count__22276_22280 = G__22297;
i__22277_22281 = G__22298;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22299){
var map__22302 = p__22299;
var map__22302__$1 = ((((!((map__22302 == null)))?((((map__22302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22302):map__22302);
var w = map__22302__$1;
var message = cljs.core.get.call(null,map__22302__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22310 = cljs.core.seq.call(null,plugins);
var chunk__22311 = null;
var count__22312 = (0);
var i__22313 = (0);
while(true){
if((i__22313 < count__22312)){
var vec__22314 = cljs.core._nth.call(null,chunk__22311,i__22313);
var k = cljs.core.nth.call(null,vec__22314,(0),null);
var plugin = cljs.core.nth.call(null,vec__22314,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22316 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22310,chunk__22311,count__22312,i__22313,pl_22316,vec__22314,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22316.call(null,msg_hist);
});})(seq__22310,chunk__22311,count__22312,i__22313,pl_22316,vec__22314,k,plugin))
);
} else {
}

var G__22317 = seq__22310;
var G__22318 = chunk__22311;
var G__22319 = count__22312;
var G__22320 = (i__22313 + (1));
seq__22310 = G__22317;
chunk__22311 = G__22318;
count__22312 = G__22319;
i__22313 = G__22320;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22310);
if(temp__4657__auto__){
var seq__22310__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22310__$1)){
var c__13990__auto__ = cljs.core.chunk_first.call(null,seq__22310__$1);
var G__22321 = cljs.core.chunk_rest.call(null,seq__22310__$1);
var G__22322 = c__13990__auto__;
var G__22323 = cljs.core.count.call(null,c__13990__auto__);
var G__22324 = (0);
seq__22310 = G__22321;
chunk__22311 = G__22322;
count__22312 = G__22323;
i__22313 = G__22324;
continue;
} else {
var vec__22315 = cljs.core.first.call(null,seq__22310__$1);
var k = cljs.core.nth.call(null,vec__22315,(0),null);
var plugin = cljs.core.nth.call(null,vec__22315,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22325 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22310,chunk__22311,count__22312,i__22313,pl_22325,vec__22315,k,plugin,seq__22310__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22325.call(null,msg_hist);
});})(seq__22310,chunk__22311,count__22312,i__22313,pl_22325,vec__22315,k,plugin,seq__22310__$1,temp__4657__auto__))
);
} else {
}

var G__22326 = cljs.core.next.call(null,seq__22310__$1);
var G__22327 = null;
var G__22328 = (0);
var G__22329 = (0);
seq__22310 = G__22326;
chunk__22311 = G__22327;
count__22312 = G__22328;
i__22313 = G__22329;
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
var args22330 = [];
var len__14245__auto___22333 = arguments.length;
var i__14246__auto___22334 = (0);
while(true){
if((i__14246__auto___22334 < len__14245__auto___22333)){
args22330.push((arguments[i__14246__auto___22334]));

var G__22335 = (i__14246__auto___22334 + (1));
i__14246__auto___22334 = G__22335;
continue;
} else {
}
break;
}

var G__22332 = args22330.length;
switch (G__22332) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22330.length)].join('')));

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
var len__14245__auto___22341 = arguments.length;
var i__14246__auto___22342 = (0);
while(true){
if((i__14246__auto___22342 < len__14245__auto___22341)){
args__14252__auto__.push((arguments[i__14246__auto___22342]));

var G__22343 = (i__14246__auto___22342 + (1));
i__14246__auto___22342 = G__22343;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((0) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__14253__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22338){
var map__22339 = p__22338;
var map__22339__$1 = ((((!((map__22339 == null)))?((((map__22339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22339):map__22339);
var opts = map__22339__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22337){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22337));
});

//# sourceMappingURL=client.js.map?rel=1455105330850