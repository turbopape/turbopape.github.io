goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('milestones_ui.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54272__delegate = function (x){
if(cljs.core.truth_(milestones_ui.core.on_js_reload)){
return cljs.core.apply.call(null,milestones_ui.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'milestones-ui.core/on-js-reload' is missing");
}
};
var G__54272 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54273__i = 0, G__54273__a = new Array(arguments.length -  0);
while (G__54273__i < G__54273__a.length) {G__54273__a[G__54273__i] = arguments[G__54273__i + 0]; ++G__54273__i;}
  x = new cljs.core.IndexedSeq(G__54273__a,0);
} 
return G__54272__delegate.call(this,x);};
G__54272.cljs$lang$maxFixedArity = 0;
G__54272.cljs$lang$applyTo = (function (arglist__54274){
var x = cljs.core.seq(arglist__54274);
return G__54272__delegate(x);
});
G__54272.cljs$core$IFn$_invoke$arity$variadic = G__54272__delegate;
return G__54272;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
