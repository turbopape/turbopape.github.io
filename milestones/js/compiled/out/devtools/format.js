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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"make_template");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"make_group");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"make_reference");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"make_surrogate");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"render_markup");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"_LT_header_GT_");
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
var o__55963__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55963__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55963__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55963__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55962__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55962__auto__,"_LT_standard_body_GT_");
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
var len__45375__auto___55984 = arguments.length;
var i__45376__auto___55985 = (0);
while(true){
if((i__45376__auto___55985 < len__45375__auto___55984)){
args__45382__auto__.push((arguments[i__45376__auto___55985]));

var G__55986 = (i__45376__auto___55985 + (1));
i__45376__auto___55985 = G__55986;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq55983){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55983));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___55988 = arguments.length;
var i__45376__auto___55989 = (0);
while(true){
if((i__45376__auto___55989 < len__45375__auto___55988)){
args__45382__auto__.push((arguments[i__45376__auto___55989]));

var G__55990 = (i__45376__auto___55989 + (1));
i__45376__auto___55989 = G__55990;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq55987){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55987));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45382__auto__ = [];
var len__45375__auto___55992 = arguments.length;
var i__45376__auto___55993 = (0);
while(true){
if((i__45376__auto___55993 < len__45375__auto___55992)){
args__45382__auto__.push((arguments[i__45376__auto___55993]));

var G__55994 = (i__45376__auto___55993 + (1));
i__45376__auto___55993 = G__55994;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq55991){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55991));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45382__auto__ = [];
var len__45375__auto___55996 = arguments.length;
var i__45376__auto___55997 = (0);
while(true){
if((i__45376__auto___55997 < len__45375__auto___55996)){
args__45382__auto__.push((arguments[i__45376__auto___55997]));

var G__55998 = (i__45376__auto___55997 + (1));
i__45376__auto___55997 = G__55998;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq55995){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55995));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56000 = arguments.length;
var i__45376__auto___56001 = (0);
while(true){
if((i__45376__auto___56001 < len__45375__auto___56000)){
args__45382__auto__.push((arguments[i__45376__auto___56001]));

var G__56002 = (i__45376__auto___56001 + (1));
i__45376__auto___56001 = G__56002;
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

devtools.format.template.cljs$lang$applyTo = (function (seq55999){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55999));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56004 = arguments.length;
var i__45376__auto___56005 = (0);
while(true){
if((i__45376__auto___56005 < len__45375__auto___56004)){
args__45382__auto__.push((arguments[i__45376__auto___56005]));

var G__56006 = (i__45376__auto___56005 + (1));
i__45376__auto___56005 = G__56006;
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

devtools.format.group.cljs$lang$applyTo = (function (seq56003){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56003));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56008 = arguments.length;
var i__45376__auto___56009 = (0);
while(true){
if((i__45376__auto___56009 < len__45375__auto___56008)){
args__45382__auto__.push((arguments[i__45376__auto___56009]));

var G__56010 = (i__45376__auto___56009 + (1));
i__45376__auto___56009 = G__56010;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq56007){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56007));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56018 = arguments.length;
var i__45376__auto___56019 = (0);
while(true){
if((i__45376__auto___56019 < len__45375__auto___56018)){
args__45382__auto__.push((arguments[i__45376__auto___56019]));

var G__56020 = (i__45376__auto___56019 + (1));
i__45376__auto___56019 = G__56020;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__56014){
var vec__56015 = p__56014;
var state_override = cljs.core.nth.call(null,vec__56015,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__56015,state_override){
return (function (p1__56011_SHARP_){
return cljs.core.merge.call(null,p1__56011_SHARP_,state_override);
});})(vec__56015,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq56012){
var G__56013 = cljs.core.first.call(null,seq56012);
var seq56012__$1 = cljs.core.next.call(null,seq56012);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__56013,seq56012__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56022 = arguments.length;
var i__45376__auto___56023 = (0);
while(true){
if((i__45376__auto___56023 < len__45375__auto___56022)){
args__45382__auto__.push((arguments[i__45376__auto___56023]));

var G__56024 = (i__45376__auto___56023 + (1));
i__45376__auto___56023 = G__56024;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq56021){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56021));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45382__auto__ = [];
var len__45375__auto___56027 = arguments.length;
var i__45376__auto___56028 = (0);
while(true){
if((i__45376__auto___56028 < len__45375__auto___56027)){
args__45382__auto__.push((arguments[i__45376__auto___56028]));

var G__56029 = (i__45376__auto___56028 + (1));
i__45376__auto___56028 = G__56029;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq56025){
var G__56026 = cljs.core.first.call(null,seq56025);
var seq56025__$1 = cljs.core.next.call(null,seq56025);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__56026,seq56025__$1);
});


//# sourceMappingURL=format.js.map?rel=1476916479755