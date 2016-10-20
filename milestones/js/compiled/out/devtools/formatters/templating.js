// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x67459_67460 = value;
x67459_67460.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x67464_67465 = value;
x67464_67465.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x67469_67470 = value;
x67469_67470.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__44255__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44255__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44255__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45382__auto__ = [];
var len__45375__auto___67478 = arguments.length;
var i__45376__auto___67479 = (0);
while(true){
if((i__45376__auto___67479 < len__45375__auto___67478)){
args__45382__auto__.push((arguments[i__45376__auto___67479]));

var G__67480 = (i__45376__auto___67479 + (1));
i__45376__auto___67479 = G__67480;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__67474_67481 = cljs.core.seq.call(null,items);
var chunk__67475_67482 = null;
var count__67476_67483 = (0);
var i__67477_67484 = (0);
while(true){
if((i__67477_67484 < count__67476_67483)){
var item_67485 = cljs.core._nth.call(null,chunk__67475_67482,i__67477_67484);
if(cljs.core.some_QMARK_.call(null,item_67485)){
if(cljs.core.coll_QMARK_.call(null,item_67485)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_67485)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_67485));
}
} else {
}

var G__67486 = seq__67474_67481;
var G__67487 = chunk__67475_67482;
var G__67488 = count__67476_67483;
var G__67489 = (i__67477_67484 + (1));
seq__67474_67481 = G__67486;
chunk__67475_67482 = G__67487;
count__67476_67483 = G__67488;
i__67477_67484 = G__67489;
continue;
} else {
var temp__4657__auto___67490 = cljs.core.seq.call(null,seq__67474_67481);
if(temp__4657__auto___67490){
var seq__67474_67491__$1 = temp__4657__auto___67490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67474_67491__$1)){
var c__45081__auto___67492 = cljs.core.chunk_first.call(null,seq__67474_67491__$1);
var G__67493 = cljs.core.chunk_rest.call(null,seq__67474_67491__$1);
var G__67494 = c__45081__auto___67492;
var G__67495 = cljs.core.count.call(null,c__45081__auto___67492);
var G__67496 = (0);
seq__67474_67481 = G__67493;
chunk__67475_67482 = G__67494;
count__67476_67483 = G__67495;
i__67477_67484 = G__67496;
continue;
} else {
var item_67497 = cljs.core.first.call(null,seq__67474_67491__$1);
if(cljs.core.some_QMARK_.call(null,item_67497)){
if(cljs.core.coll_QMARK_.call(null,item_67497)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_67497)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_67497));
}
} else {
}

var G__67498 = cljs.core.next.call(null,seq__67474_67491__$1);
var G__67499 = null;
var G__67500 = (0);
var G__67501 = (0);
seq__67474_67481 = G__67498;
chunk__67475_67482 = G__67499;
count__67476_67483 = G__67500;
i__67477_67484 = G__67501;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq67473){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67473));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___67509 = arguments.length;
var i__45376__auto___67510 = (0);
while(true){
if((i__45376__auto___67510 < len__45375__auto___67509)){
args__45382__auto__.push((arguments[i__45376__auto___67510]));

var G__67511 = (i__45376__auto___67510 + (1));
i__45376__auto___67510 = G__67511;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((2) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45383__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__67505_67512 = cljs.core.seq.call(null,children);
var chunk__67506_67513 = null;
var count__67507_67514 = (0);
var i__67508_67515 = (0);
while(true){
if((i__67508_67515 < count__67507_67514)){
var child_67516 = cljs.core._nth.call(null,chunk__67506_67513,i__67508_67515);
if(cljs.core.some_QMARK_.call(null,child_67516)){
if(cljs.core.coll_QMARK_.call(null,child_67516)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_67516))));
} else {
var temp__4655__auto___67517 = devtools.formatters.helpers.pref.call(null,child_67516);
if(cljs.core.truth_(temp__4655__auto___67517)){
var child_value_67518 = temp__4655__auto___67517;
template.push(child_value_67518);
} else {
}
}
} else {
}

var G__67519 = seq__67505_67512;
var G__67520 = chunk__67506_67513;
var G__67521 = count__67507_67514;
var G__67522 = (i__67508_67515 + (1));
seq__67505_67512 = G__67519;
chunk__67506_67513 = G__67520;
count__67507_67514 = G__67521;
i__67508_67515 = G__67522;
continue;
} else {
var temp__4657__auto___67523 = cljs.core.seq.call(null,seq__67505_67512);
if(temp__4657__auto___67523){
var seq__67505_67524__$1 = temp__4657__auto___67523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67505_67524__$1)){
var c__45081__auto___67525 = cljs.core.chunk_first.call(null,seq__67505_67524__$1);
var G__67526 = cljs.core.chunk_rest.call(null,seq__67505_67524__$1);
var G__67527 = c__45081__auto___67525;
var G__67528 = cljs.core.count.call(null,c__45081__auto___67525);
var G__67529 = (0);
seq__67505_67512 = G__67526;
chunk__67506_67513 = G__67527;
count__67507_67514 = G__67528;
i__67508_67515 = G__67529;
continue;
} else {
var child_67530 = cljs.core.first.call(null,seq__67505_67524__$1);
if(cljs.core.some_QMARK_.call(null,child_67530)){
if(cljs.core.coll_QMARK_.call(null,child_67530)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_67530))));
} else {
var temp__4655__auto___67531 = devtools.formatters.helpers.pref.call(null,child_67530);
if(cljs.core.truth_(temp__4655__auto___67531)){
var child_value_67532 = temp__4655__auto___67531;
template.push(child_value_67532);
} else {
}
}
} else {
}

var G__67533 = cljs.core.next.call(null,seq__67505_67524__$1);
var G__67534 = null;
var G__67535 = (0);
var G__67536 = (0);
seq__67505_67512 = G__67533;
chunk__67506_67513 = G__67534;
count__67507_67514 = G__67535;
i__67508_67515 = G__67536;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq67502){
var G__67503 = cljs.core.first.call(null,seq67502);
var seq67502__$1 = cljs.core.next.call(null,seq67502);
var G__67504 = cljs.core.first.call(null,seq67502__$1);
var seq67502__$2 = cljs.core.next.call(null,seq67502__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__67503,G__67504,seq67502__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___67539 = arguments.length;
var i__45376__auto___67540 = (0);
while(true){
if((i__45376__auto___67540 < len__45375__auto___67539)){
args__45382__auto__.push((arguments[i__45376__auto___67540]));

var G__67541 = (i__45376__auto___67540 + (1));
i__45376__auto___67540 = G__67541;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq67537){
var G__67538 = cljs.core.first.call(null,seq67537);
var seq67537__$1 = cljs.core.next.call(null,seq67537);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67538,seq67537__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___67544 = arguments.length;
var i__45376__auto___67545 = (0);
while(true){
if((i__45376__auto___67545 < len__45375__auto___67544)){
args__45382__auto__.push((arguments[i__45376__auto___67545]));

var G__67546 = (i__45376__auto___67545 + (1));
i__45376__auto___67545 = G__67546;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq67542){
var G__67543 = cljs.core.first.call(null,seq67542);
var seq67542__$1 = cljs.core.next.call(null,seq67542);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67543,seq67542__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args67547 = [];
var len__45375__auto___67552 = arguments.length;
var i__45376__auto___67553 = (0);
while(true){
if((i__45376__auto___67553 < len__45375__auto___67552)){
args67547.push((arguments[i__45376__auto___67553]));

var G__67554 = (i__45376__auto___67553 + (1));
i__45376__auto___67553 = G__67554;
continue;
} else {
}
break;
}

var G__67549 = args67547.length;
switch (G__67549) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67547.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj67551 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44267__auto__ = start_index;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return (0);
}
})()};
return obj67551;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__45382__auto__ = [];
var len__45375__auto___67562 = arguments.length;
var i__45376__auto___67563 = (0);
while(true){
if((i__45376__auto___67563 < len__45375__auto___67562)){
args__45382__auto__.push((arguments[i__45376__auto___67563]));

var G__67564 = (i__45376__auto___67563 + (1));
i__45376__auto___67563 = G__67564;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__67558){
var vec__67559 = p__67558;
var state_override_fn = cljs.core.nth.call(null,vec__67559,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq67556){
var G__67557 = cljs.core.first.call(null,seq67556);
var seq67556__$1 = cljs.core.next.call(null,seq67556);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__67557,seq67556__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45256__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67568_67571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67569_67572 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_67568_67571,_STAR_print_fn_STAR_67569_67572,sb__45256__auto__){
return (function (x__45257__auto__){
return sb__45256__auto__.append(x__45257__auto__);
});})(_STAR_print_newline_STAR_67568_67571,_STAR_print_fn_STAR_67569_67572,sb__45256__auto__))
;

try{var _STAR_print_level_STAR_67570_67573 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_67570_67573;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67569_67572;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67568_67571;
}
return [cljs.core.str(sb__45256__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_67575 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_67575;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__67577 = name;
switch (G__67577) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__67582 = tag;
var html_tag = cljs.core.nth.call(null,vec__67582,(0),null);
var style = cljs.core.nth.call(null,vec__67582,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_67586 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_67586;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_67589 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_67590 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_67590;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_67589;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__67591 = initial_value;
var G__67592 = value.call(null);
initial_value = G__67591;
value = G__67592;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__67593 = initial_value;
var G__67594 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__67593;
value = G__67594;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__67595 = initial_value;
var G__67596 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__67595;
value = G__67596;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1476929182773