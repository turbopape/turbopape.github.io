// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__44930__auto__ = (((value == null))?null:value);
var m__44931__auto__ = (devtools.format._header[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,value);
} else {
var m__44931__auto____$1 = (devtools.format._header["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__44930__auto__ = (((value == null))?null:value);
var m__44931__auto__ = (devtools.format._has_body[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,value);
} else {
var m__44931__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__44930__auto__ = (((value == null))?null:value);
var m__44931__auto__ = (devtools.format._body[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,value);
} else {
var m__44931__auto____$1 = (devtools.format._body["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65006__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65006__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65006__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65006__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65005__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65005__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65027 = arguments.length;
var i__45376__auto___65028 = (0);
while(true){
if((i__45376__auto___65028 < len__45375__auto___65027)){
args__45382__auto__.push((arguments[i__45376__auto___65028]));

var G__65029 = (i__45376__auto___65028 + (1));
i__45376__auto___65028 = G__65029;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq65026){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65026));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65031 = arguments.length;
var i__45376__auto___65032 = (0);
while(true){
if((i__45376__auto___65032 < len__45375__auto___65031)){
args__45382__auto__.push((arguments[i__45376__auto___65032]));

var G__65033 = (i__45376__auto___65032 + (1));
i__45376__auto___65032 = G__65033;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq65030){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65030));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65035 = arguments.length;
var i__45376__auto___65036 = (0);
while(true){
if((i__45376__auto___65036 < len__45375__auto___65035)){
args__45382__auto__.push((arguments[i__45376__auto___65036]));

var G__65037 = (i__45376__auto___65036 + (1));
i__45376__auto___65036 = G__65037;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq65034){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65034));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65039 = arguments.length;
var i__45376__auto___65040 = (0);
while(true){
if((i__45376__auto___65040 < len__45375__auto___65039)){
args__45382__auto__.push((arguments[i__45376__auto___65040]));

var G__65041 = (i__45376__auto___65040 + (1));
i__45376__auto___65040 = G__65041;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq65038){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65038));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65043 = arguments.length;
var i__45376__auto___65044 = (0);
while(true){
if((i__45376__auto___65044 < len__45375__auto___65043)){
args__45382__auto__.push((arguments[i__45376__auto___65044]));

var G__65045 = (i__45376__auto___65044 + (1));
i__45376__auto___65044 = G__65045;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq65042){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65042));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65047 = arguments.length;
var i__45376__auto___65048 = (0);
while(true){
if((i__45376__auto___65048 < len__45375__auto___65047)){
args__45382__auto__.push((arguments[i__45376__auto___65048]));

var G__65049 = (i__45376__auto___65048 + (1));
i__45376__auto___65048 = G__65049;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq65046){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65046));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65051 = arguments.length;
var i__45376__auto___65052 = (0);
while(true){
if((i__45376__auto___65052 < len__45375__auto___65051)){
args__45382__auto__.push((arguments[i__45376__auto___65052]));

var G__65053 = (i__45376__auto___65052 + (1));
i__45376__auto___65052 = G__65053;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq65050){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65050));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65061 = arguments.length;
var i__45376__auto___65062 = (0);
while(true){
if((i__45376__auto___65062 < len__45375__auto___65061)){
args__45382__auto__.push((arguments[i__45376__auto___65062]));

var G__65063 = (i__45376__auto___65062 + (1));
i__45376__auto___65062 = G__65063;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__65057){
var vec__65058 = p__65057;
var state_override = cljs.core.nth.call(null,vec__65058,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__65058,state_override){
return (function (p1__65054_SHARP_){
return cljs.core.merge.call(null,p1__65054_SHARP_,state_override);
});})(vec__65058,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq65055){
var G__65056 = cljs.core.first.call(null,seq65055);
var seq65055__$1 = cljs.core.next.call(null,seq65055);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__65056,seq65055__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65065 = arguments.length;
var i__45376__auto___65066 = (0);
while(true){
if((i__45376__auto___65066 < len__45375__auto___65065)){
args__45382__auto__.push((arguments[i__45376__auto___65066]));

var G__65067 = (i__45376__auto___65066 + (1));
i__45376__auto___65066 = G__65067;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((0) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__45383__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq65064){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65064));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___65070 = arguments.length;
var i__45376__auto___65071 = (0);
while(true){
if((i__45376__auto___65071 < len__45375__auto___65070)){
args__45382__auto__.push((arguments[i__45376__auto___65071]));

var G__65072 = (i__45376__auto___65071 + (1));
i__45376__auto___65071 = G__65072;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq65068){
var G__65069 = cljs.core.first.call(null,seq65068);
var seq65068__$1 = cljs.core.next.call(null,seq65068);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__65069,seq65068__$1);
});


//# sourceMappingURL=format.js.map?rel=1476929176484