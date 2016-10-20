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
var x58428_58429 = value;
x58428_58429.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x58433_58434 = value;
x58433_58434.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x58438_58439 = value;
x58438_58439.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__45375__auto___58447 = arguments.length;
var i__45376__auto___58448 = (0);
while(true){
if((i__45376__auto___58448 < len__45375__auto___58447)){
args__45382__auto__.push((arguments[i__45376__auto___58448]));

var G__58449 = (i__45376__auto___58448 + (1));
i__45376__auto___58448 = G__58449;
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
var seq__58443_58450 = cljs.core.seq.call(null,items);
var chunk__58444_58451 = null;
var count__58445_58452 = (0);
var i__58446_58453 = (0);
while(true){
if((i__58446_58453 < count__58445_58452)){
var item_58454 = cljs.core._nth.call(null,chunk__58444_58451,i__58446_58453);
if(cljs.core.some_QMARK_.call(null,item_58454)){
if(cljs.core.coll_QMARK_.call(null,item_58454)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_58454)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_58454));
}
} else {
}

var G__58455 = seq__58443_58450;
var G__58456 = chunk__58444_58451;
var G__58457 = count__58445_58452;
var G__58458 = (i__58446_58453 + (1));
seq__58443_58450 = G__58455;
chunk__58444_58451 = G__58456;
count__58445_58452 = G__58457;
i__58446_58453 = G__58458;
continue;
} else {
var temp__4657__auto___58459 = cljs.core.seq.call(null,seq__58443_58450);
if(temp__4657__auto___58459){
var seq__58443_58460__$1 = temp__4657__auto___58459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58443_58460__$1)){
var c__45081__auto___58461 = cljs.core.chunk_first.call(null,seq__58443_58460__$1);
var G__58462 = cljs.core.chunk_rest.call(null,seq__58443_58460__$1);
var G__58463 = c__45081__auto___58461;
var G__58464 = cljs.core.count.call(null,c__45081__auto___58461);
var G__58465 = (0);
seq__58443_58450 = G__58462;
chunk__58444_58451 = G__58463;
count__58445_58452 = G__58464;
i__58446_58453 = G__58465;
continue;
} else {
var item_58466 = cljs.core.first.call(null,seq__58443_58460__$1);
if(cljs.core.some_QMARK_.call(null,item_58466)){
if(cljs.core.coll_QMARK_.call(null,item_58466)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_58466)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_58466));
}
} else {
}

var G__58467 = cljs.core.next.call(null,seq__58443_58460__$1);
var G__58468 = null;
var G__58469 = (0);
var G__58470 = (0);
seq__58443_58450 = G__58467;
chunk__58444_58451 = G__58468;
count__58445_58452 = G__58469;
i__58446_58453 = G__58470;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq58442){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58442));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___58478 = arguments.length;
var i__45376__auto___58479 = (0);
while(true){
if((i__45376__auto___58479 < len__45375__auto___58478)){
args__45382__auto__.push((arguments[i__45376__auto___58479]));

var G__58480 = (i__45376__auto___58479 + (1));
i__45376__auto___58479 = G__58480;
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
var seq__58474_58481 = cljs.core.seq.call(null,children);
var chunk__58475_58482 = null;
var count__58476_58483 = (0);
var i__58477_58484 = (0);
while(true){
if((i__58477_58484 < count__58476_58483)){
var child_58485 = cljs.core._nth.call(null,chunk__58475_58482,i__58477_58484);
if(cljs.core.some_QMARK_.call(null,child_58485)){
if(cljs.core.coll_QMARK_.call(null,child_58485)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_58485))));
} else {
var temp__4655__auto___58486 = devtools.formatters.helpers.pref.call(null,child_58485);
if(cljs.core.truth_(temp__4655__auto___58486)){
var child_value_58487 = temp__4655__auto___58486;
template.push(child_value_58487);
} else {
}
}
} else {
}

var G__58488 = seq__58474_58481;
var G__58489 = chunk__58475_58482;
var G__58490 = count__58476_58483;
var G__58491 = (i__58477_58484 + (1));
seq__58474_58481 = G__58488;
chunk__58475_58482 = G__58489;
count__58476_58483 = G__58490;
i__58477_58484 = G__58491;
continue;
} else {
var temp__4657__auto___58492 = cljs.core.seq.call(null,seq__58474_58481);
if(temp__4657__auto___58492){
var seq__58474_58493__$1 = temp__4657__auto___58492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58474_58493__$1)){
var c__45081__auto___58494 = cljs.core.chunk_first.call(null,seq__58474_58493__$1);
var G__58495 = cljs.core.chunk_rest.call(null,seq__58474_58493__$1);
var G__58496 = c__45081__auto___58494;
var G__58497 = cljs.core.count.call(null,c__45081__auto___58494);
var G__58498 = (0);
seq__58474_58481 = G__58495;
chunk__58475_58482 = G__58496;
count__58476_58483 = G__58497;
i__58477_58484 = G__58498;
continue;
} else {
var child_58499 = cljs.core.first.call(null,seq__58474_58493__$1);
if(cljs.core.some_QMARK_.call(null,child_58499)){
if(cljs.core.coll_QMARK_.call(null,child_58499)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_58499))));
} else {
var temp__4655__auto___58500 = devtools.formatters.helpers.pref.call(null,child_58499);
if(cljs.core.truth_(temp__4655__auto___58500)){
var child_value_58501 = temp__4655__auto___58500;
template.push(child_value_58501);
} else {
}
}
} else {
}

var G__58502 = cljs.core.next.call(null,seq__58474_58493__$1);
var G__58503 = null;
var G__58504 = (0);
var G__58505 = (0);
seq__58474_58481 = G__58502;
chunk__58475_58482 = G__58503;
count__58476_58483 = G__58504;
i__58477_58484 = G__58505;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq58471){
var G__58472 = cljs.core.first.call(null,seq58471);
var seq58471__$1 = cljs.core.next.call(null,seq58471);
var G__58473 = cljs.core.first.call(null,seq58471__$1);
var seq58471__$2 = cljs.core.next.call(null,seq58471__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__58472,G__58473,seq58471__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___58508 = arguments.length;
var i__45376__auto___58509 = (0);
while(true){
if((i__45376__auto___58509 < len__45375__auto___58508)){
args__45382__auto__.push((arguments[i__45376__auto___58509]));

var G__58510 = (i__45376__auto___58509 + (1));
i__45376__auto___58509 = G__58510;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq58506){
var G__58507 = cljs.core.first.call(null,seq58506);
var seq58506__$1 = cljs.core.next.call(null,seq58506);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58507,seq58506__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___58513 = arguments.length;
var i__45376__auto___58514 = (0);
while(true){
if((i__45376__auto___58514 < len__45375__auto___58513)){
args__45382__auto__.push((arguments[i__45376__auto___58514]));

var G__58515 = (i__45376__auto___58514 + (1));
i__45376__auto___58514 = G__58515;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq58511){
var G__58512 = cljs.core.first.call(null,seq58511);
var seq58511__$1 = cljs.core.next.call(null,seq58511);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58512,seq58511__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args58516 = [];
var len__45375__auto___58521 = arguments.length;
var i__45376__auto___58522 = (0);
while(true){
if((i__45376__auto___58522 < len__45375__auto___58521)){
args58516.push((arguments[i__45376__auto___58522]));

var G__58523 = (i__45376__auto___58522 + (1));
i__45376__auto___58522 = G__58523;
continue;
} else {
}
break;
}

var G__58518 = args58516.length;
switch (G__58518) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58516.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj58520 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44267__auto__ = start_index;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return (0);
}
})()};
return obj58520;
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
var len__45375__auto___58531 = arguments.length;
var i__45376__auto___58532 = (0);
while(true){
if((i__45376__auto___58532 < len__45375__auto___58531)){
args__45382__auto__.push((arguments[i__45376__auto___58532]));

var G__58533 = (i__45376__auto___58532 + (1));
i__45376__auto___58532 = G__58533;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__58527){
var vec__58528 = p__58527;
var state_override_fn = cljs.core.nth.call(null,vec__58528,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq58525){
var G__58526 = cljs.core.first.call(null,seq58525);
var seq58525__$1 = cljs.core.next.call(null,seq58525);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__58526,seq58525__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45256__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_58537_58540 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_58538_58541 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_58537_58540,_STAR_print_fn_STAR_58538_58541,sb__45256__auto__){
return (function (x__45257__auto__){
return sb__45256__auto__.append(x__45257__auto__);
});})(_STAR_print_newline_STAR_58537_58540,_STAR_print_fn_STAR_58538_58541,sb__45256__auto__))
;

try{var _STAR_print_level_STAR_58539_58542 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_58539_58542;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_58538_58541;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_58537_58540;
}
return [cljs.core.str(sb__45256__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_58544 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_58544;
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
var G__58546 = name;
switch (G__58546) {
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
var vec__58551 = tag;
var html_tag = cljs.core.nth.call(null,vec__58551,(0),null);
var style = cljs.core.nth.call(null,vec__58551,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_58555 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_58555;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_58558 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_58559 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_58559;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_58558;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__58560 = initial_value;
var G__58561 = value.call(null);
initial_value = G__58560;
value = G__58561;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__58562 = initial_value;
var G__58563 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__58562;
value = G__58563;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__58564 = initial_value;
var G__58565 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__58564;
value = G__58565;
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

//# sourceMappingURL=templating.js.map?rel=1476916485507