// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33274 = [];
var len__14245__auto___33280 = arguments.length;
var i__14246__auto___33281 = (0);
while(true){
if((i__14246__auto___33281 < len__14245__auto___33280)){
args33274.push((arguments[i__14246__auto___33281]));

var G__33282 = (i__14246__auto___33281 + (1));
i__14246__auto___33281 = G__33282;
continue;
} else {
}
break;
}

var G__33276 = args33274.length;
switch (G__33276) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33274.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33277 = (function (f,blockable,meta33278){
this.f = f;
this.blockable = blockable;
this.meta33278 = meta33278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33279,meta33278__$1){
var self__ = this;
var _33279__$1 = this;
return (new cljs.core.async.t_cljs$core$async33277(self__.f,self__.blockable,meta33278__$1));
});

cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33279){
var self__ = this;
var _33279__$1 = this;
return self__.meta33278;
});

cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33278","meta33278",1519700734,null)], null);
});

cljs.core.async.t_cljs$core$async33277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33277";

cljs.core.async.t_cljs$core$async33277.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async33277");
});

cljs.core.async.__GT_t_cljs$core$async33277 = (function cljs$core$async$__GT_t_cljs$core$async33277(f__$1,blockable__$1,meta33278){
return (new cljs.core.async.t_cljs$core$async33277(f__$1,blockable__$1,meta33278));
});

}

return (new cljs.core.async.t_cljs$core$async33277(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33286 = [];
var len__14245__auto___33289 = arguments.length;
var i__14246__auto___33290 = (0);
while(true){
if((i__14246__auto___33290 < len__14245__auto___33289)){
args33286.push((arguments[i__14246__auto___33290]));

var G__33291 = (i__14246__auto___33290 + (1));
i__14246__auto___33290 = G__33291;
continue;
} else {
}
break;
}

var G__33288 = args33286.length;
switch (G__33288) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33286.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33293 = [];
var len__14245__auto___33296 = arguments.length;
var i__14246__auto___33297 = (0);
while(true){
if((i__14246__auto___33297 < len__14245__auto___33296)){
args33293.push((arguments[i__14246__auto___33297]));

var G__33298 = (i__14246__auto___33297 + (1));
i__14246__auto___33297 = G__33298;
continue;
} else {
}
break;
}

var G__33295 = args33293.length;
switch (G__33295) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33293.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33300 = [];
var len__14245__auto___33303 = arguments.length;
var i__14246__auto___33304 = (0);
while(true){
if((i__14246__auto___33304 < len__14245__auto___33303)){
args33300.push((arguments[i__14246__auto___33304]));

var G__33305 = (i__14246__auto___33304 + (1));
i__14246__auto___33304 = G__33305;
continue;
} else {
}
break;
}

var G__33302 = args33300.length;
switch (G__33302) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33300.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33307 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33307);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33307,ret){
return (function (){
return fn1.call(null,val_33307);
});})(val_33307,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33308 = [];
var len__14245__auto___33311 = arguments.length;
var i__14246__auto___33312 = (0);
while(true){
if((i__14246__auto___33312 < len__14245__auto___33311)){
args33308.push((arguments[i__14246__auto___33312]));

var G__33313 = (i__14246__auto___33312 + (1));
i__14246__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var G__33310 = args33308.length;
switch (G__33310) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33308.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__14090__auto___33315 = n;
var x_33316 = (0);
while(true){
if((x_33316 < n__14090__auto___33315)){
(a[x_33316] = (0));

var G__33317 = (x_33316 + (1));
x_33316 = G__33317;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33318 = (i + (1));
i = G__33318;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33322 = (function (alt_flag,flag,meta33323){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33323 = meta33323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33324,meta33323__$1){
var self__ = this;
var _33324__$1 = this;
return (new cljs.core.async.t_cljs$core$async33322(self__.alt_flag,self__.flag,meta33323__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33324){
var self__ = this;
var _33324__$1 = this;
return self__.meta33323;
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33323","meta33323",-2040083733,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33322";

cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async33322");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33322 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33322(alt_flag__$1,flag__$1,meta33323){
return (new cljs.core.async.t_cljs$core$async33322(alt_flag__$1,flag__$1,meta33323));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33322(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33328 = (function (alt_handler,flag,cb,meta33329){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33329 = meta33329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33330,meta33329__$1){
var self__ = this;
var _33330__$1 = this;
return (new cljs.core.async.t_cljs$core$async33328(self__.alt_handler,self__.flag,self__.cb,meta33329__$1));
});

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33330){
var self__ = this;
var _33330__$1 = this;
return self__.meta33329;
});

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33329","meta33329",2037288913,null)], null);
});

cljs.core.async.t_cljs$core$async33328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33328";

cljs.core.async.t_cljs$core$async33328.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async33328");
});

cljs.core.async.__GT_t_cljs$core$async33328 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33328(alt_handler__$1,flag__$1,cb__$1,meta33329){
return (new cljs.core.async.t_cljs$core$async33328(alt_handler__$1,flag__$1,cb__$1,meta33329));
});

}

return (new cljs.core.async.t_cljs$core$async33328(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33331_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33331_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33332_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33332_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13187__auto__ = wport;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33333 = (i + (1));
i = G__33333;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13187__auto__ = ret;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__13175__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13175__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13175__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___33339 = arguments.length;
var i__14246__auto___33340 = (0);
while(true){
if((i__14246__auto___33340 < len__14245__auto___33339)){
args__14252__auto__.push((arguments[i__14246__auto___33340]));

var G__33341 = (i__14246__auto___33340 + (1));
i__14246__auto___33340 = G__33341;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33336){
var map__33337 = p__33336;
var map__33337__$1 = ((((!((map__33337 == null)))?((((map__33337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33337):map__33337);
var opts = map__33337__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33334){
var G__33335 = cljs.core.first.call(null,seq33334);
var seq33334__$1 = cljs.core.next.call(null,seq33334);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33335,seq33334__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33342 = [];
var len__14245__auto___33392 = arguments.length;
var i__14246__auto___33393 = (0);
while(true){
if((i__14246__auto___33393 < len__14245__auto___33392)){
args33342.push((arguments[i__14246__auto___33393]));

var G__33394 = (i__14246__auto___33393 + (1));
i__14246__auto___33393 = G__33394;
continue;
} else {
}
break;
}

var G__33344 = args33342.length;
switch (G__33344) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33342.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15619__auto___33396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___33396){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___33396){
return (function (state_33368){
var state_val_33369 = (state_33368[(1)]);
if((state_val_33369 === (7))){
var inst_33364 = (state_33368[(2)]);
var state_33368__$1 = state_33368;
var statearr_33370_33397 = state_33368__$1;
(statearr_33370_33397[(2)] = inst_33364);

(statearr_33370_33397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (1))){
var state_33368__$1 = state_33368;
var statearr_33371_33398 = state_33368__$1;
(statearr_33371_33398[(2)] = null);

(statearr_33371_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (4))){
var inst_33347 = (state_33368[(7)]);
var inst_33347__$1 = (state_33368[(2)]);
var inst_33348 = (inst_33347__$1 == null);
var state_33368__$1 = (function (){var statearr_33372 = state_33368;
(statearr_33372[(7)] = inst_33347__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33348)){
var statearr_33373_33399 = state_33368__$1;
(statearr_33373_33399[(1)] = (5));

} else {
var statearr_33374_33400 = state_33368__$1;
(statearr_33374_33400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (13))){
var state_33368__$1 = state_33368;
var statearr_33375_33401 = state_33368__$1;
(statearr_33375_33401[(2)] = null);

(statearr_33375_33401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (6))){
var inst_33347 = (state_33368[(7)]);
var state_33368__$1 = state_33368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33368__$1,(11),to,inst_33347);
} else {
if((state_val_33369 === (3))){
var inst_33366 = (state_33368[(2)]);
var state_33368__$1 = state_33368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33368__$1,inst_33366);
} else {
if((state_val_33369 === (12))){
var state_33368__$1 = state_33368;
var statearr_33376_33402 = state_33368__$1;
(statearr_33376_33402[(2)] = null);

(statearr_33376_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (2))){
var state_33368__$1 = state_33368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33368__$1,(4),from);
} else {
if((state_val_33369 === (11))){
var inst_33357 = (state_33368[(2)]);
var state_33368__$1 = state_33368;
if(cljs.core.truth_(inst_33357)){
var statearr_33377_33403 = state_33368__$1;
(statearr_33377_33403[(1)] = (12));

} else {
var statearr_33378_33404 = state_33368__$1;
(statearr_33378_33404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (9))){
var state_33368__$1 = state_33368;
var statearr_33379_33405 = state_33368__$1;
(statearr_33379_33405[(2)] = null);

(statearr_33379_33405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (5))){
var state_33368__$1 = state_33368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33380_33406 = state_33368__$1;
(statearr_33380_33406[(1)] = (8));

} else {
var statearr_33381_33407 = state_33368__$1;
(statearr_33381_33407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (14))){
var inst_33362 = (state_33368[(2)]);
var state_33368__$1 = state_33368;
var statearr_33382_33408 = state_33368__$1;
(statearr_33382_33408[(2)] = inst_33362);

(statearr_33382_33408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (10))){
var inst_33354 = (state_33368[(2)]);
var state_33368__$1 = state_33368;
var statearr_33383_33409 = state_33368__$1;
(statearr_33383_33409[(2)] = inst_33354);

(statearr_33383_33409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33369 === (8))){
var inst_33351 = cljs.core.async.close_BANG_.call(null,to);
var state_33368__$1 = state_33368;
var statearr_33384_33410 = state_33368__$1;
(statearr_33384_33410[(2)] = inst_33351);

(statearr_33384_33410[(1)] = (10));


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
});})(c__15619__auto___33396))
;
return ((function (switch__15598__auto__,c__15619__auto___33396){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_33388 = [null,null,null,null,null,null,null,null];
(statearr_33388[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_33388[(1)] = (1));

return statearr_33388;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_33368){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33389){if((e33389 instanceof Object)){
var ex__15602__auto__ = e33389;
var statearr_33390_33411 = state_33368;
(statearr_33390_33411[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33412 = state_33368;
state_33368 = G__33412;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_33368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_33368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___33396))
})();
var state__15621__auto__ = (function (){var statearr_33391 = f__15620__auto__.call(null);
(statearr_33391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33396);

return statearr_33391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___33396))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33596){
var vec__33597 = p__33596;
var v = cljs.core.nth.call(null,vec__33597,(0),null);
var p = cljs.core.nth.call(null,vec__33597,(1),null);
var job = vec__33597;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15619__auto___33779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results){
return (function (state_33602){
var state_val_33603 = (state_33602[(1)]);
if((state_val_33603 === (1))){
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33602__$1,(2),res,v);
} else {
if((state_val_33603 === (2))){
var inst_33599 = (state_33602[(2)]);
var inst_33600 = cljs.core.async.close_BANG_.call(null,res);
var state_33602__$1 = (function (){var statearr_33604 = state_33602;
(statearr_33604[(7)] = inst_33599);

return statearr_33604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33602__$1,inst_33600);
} else {
return null;
}
}
});})(c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results))
;
return ((function (switch__15598__auto__,c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_33608 = [null,null,null,null,null,null,null,null];
(statearr_33608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__);

(statearr_33608[(1)] = (1));

return statearr_33608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1 = (function (state_33602){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33609){if((e33609 instanceof Object)){
var ex__15602__auto__ = e33609;
var statearr_33610_33780 = state_33602;
(statearr_33610_33780[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33781 = state_33602;
state_33602 = G__33781;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results))
})();
var state__15621__auto__ = (function (){var statearr_33611 = f__15620__auto__.call(null);
(statearr_33611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33779);

return statearr_33611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___33779,res,vec__33597,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33612){
var vec__33613 = p__33612;
var v = cljs.core.nth.call(null,vec__33613,(0),null);
var p = cljs.core.nth.call(null,vec__33613,(1),null);
var job = vec__33613;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__14090__auto___33782 = n;
var __33783 = (0);
while(true){
if((__33783 < n__14090__auto___33782)){
var G__33614_33784 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33614_33784) {
case "compute":
var c__15619__auto___33786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33783,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (__33783,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function (state_33627){
var state_val_33628 = (state_33627[(1)]);
if((state_val_33628 === (1))){
var state_33627__$1 = state_33627;
var statearr_33629_33787 = state_33627__$1;
(statearr_33629_33787[(2)] = null);

(statearr_33629_33787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (2))){
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33627__$1,(4),jobs);
} else {
if((state_val_33628 === (3))){
var inst_33625 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33627__$1,inst_33625);
} else {
if((state_val_33628 === (4))){
var inst_33617 = (state_33627[(2)]);
var inst_33618 = process.call(null,inst_33617);
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33618)){
var statearr_33630_33788 = state_33627__$1;
(statearr_33630_33788[(1)] = (5));

} else {
var statearr_33631_33789 = state_33627__$1;
(statearr_33631_33789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (5))){
var state_33627__$1 = state_33627;
var statearr_33632_33790 = state_33627__$1;
(statearr_33632_33790[(2)] = null);

(statearr_33632_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (6))){
var state_33627__$1 = state_33627;
var statearr_33633_33791 = state_33627__$1;
(statearr_33633_33791[(2)] = null);

(statearr_33633_33791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (7))){
var inst_33623 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33634_33792 = state_33627__$1;
(statearr_33634_33792[(2)] = inst_33623);

(statearr_33634_33792[(1)] = (3));


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
});})(__33783,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
;
return ((function (__33783,switch__15598__auto__,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null];
(statearr_33638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1 = (function (state_33627){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33639){if((e33639 instanceof Object)){
var ex__15602__auto__ = e33639;
var statearr_33640_33793 = state_33627;
(statearr_33640_33793[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33794 = state_33627;
state_33627 = G__33794;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = function(state_33627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1.call(this,state_33627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__;
})()
;})(__33783,switch__15598__auto__,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
})();
var state__15621__auto__ = (function (){var statearr_33641 = f__15620__auto__.call(null);
(statearr_33641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33786);

return statearr_33641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(__33783,c__15619__auto___33786,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
);


break;
case "async":
var c__15619__auto___33795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33783,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (__33783,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function (state_33654){
var state_val_33655 = (state_33654[(1)]);
if((state_val_33655 === (1))){
var state_33654__$1 = state_33654;
var statearr_33656_33796 = state_33654__$1;
(statearr_33656_33796[(2)] = null);

(statearr_33656_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (2))){
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33654__$1,(4),jobs);
} else {
if((state_val_33655 === (3))){
var inst_33652 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33654__$1,inst_33652);
} else {
if((state_val_33655 === (4))){
var inst_33644 = (state_33654[(2)]);
var inst_33645 = async.call(null,inst_33644);
var state_33654__$1 = state_33654;
if(cljs.core.truth_(inst_33645)){
var statearr_33657_33797 = state_33654__$1;
(statearr_33657_33797[(1)] = (5));

} else {
var statearr_33658_33798 = state_33654__$1;
(statearr_33658_33798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (5))){
var state_33654__$1 = state_33654;
var statearr_33659_33799 = state_33654__$1;
(statearr_33659_33799[(2)] = null);

(statearr_33659_33799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (6))){
var state_33654__$1 = state_33654;
var statearr_33660_33800 = state_33654__$1;
(statearr_33660_33800[(2)] = null);

(statearr_33660_33800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (7))){
var inst_33650 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33661_33801 = state_33654__$1;
(statearr_33661_33801[(2)] = inst_33650);

(statearr_33661_33801[(1)] = (3));


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
});})(__33783,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
;
return ((function (__33783,switch__15598__auto__,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_33665 = [null,null,null,null,null,null,null];
(statearr_33665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__);

(statearr_33665[(1)] = (1));

return statearr_33665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1 = (function (state_33654){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33666){if((e33666 instanceof Object)){
var ex__15602__auto__ = e33666;
var statearr_33667_33802 = state_33654;
(statearr_33667_33802[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33803 = state_33654;
state_33654 = G__33803;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = function(state_33654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1.call(this,state_33654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__;
})()
;})(__33783,switch__15598__auto__,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
})();
var state__15621__auto__ = (function (){var statearr_33668 = f__15620__auto__.call(null);
(statearr_33668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33795);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(__33783,c__15619__auto___33795,G__33614_33784,n__14090__auto___33782,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33804 = (__33783 + (1));
__33783 = G__33804;
continue;
} else {
}
break;
}

var c__15619__auto___33805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___33805,jobs,results,process,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___33805,jobs,results,process,async){
return (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (1))){
var state_33690__$1 = state_33690;
var statearr_33692_33806 = state_33690__$1;
(statearr_33692_33806[(2)] = null);

(statearr_33692_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (2))){
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33690__$1,(4),from);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (4))){
var inst_33671 = (state_33690[(7)]);
var inst_33671__$1 = (state_33690[(2)]);
var inst_33672 = (inst_33671__$1 == null);
var state_33690__$1 = (function (){var statearr_33693 = state_33690;
(statearr_33693[(7)] = inst_33671__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33672)){
var statearr_33694_33807 = state_33690__$1;
(statearr_33694_33807[(1)] = (5));

} else {
var statearr_33695_33808 = state_33690__$1;
(statearr_33695_33808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33674 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33690__$1 = state_33690;
var statearr_33696_33809 = state_33690__$1;
(statearr_33696_33809[(2)] = inst_33674);

(statearr_33696_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33676 = (state_33690[(8)]);
var inst_33671 = (state_33690[(7)]);
var inst_33676__$1 = cljs.core.async.chan.call(null,(1));
var inst_33677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33678 = [inst_33671,inst_33676__$1];
var inst_33679 = (new cljs.core.PersistentVector(null,2,(5),inst_33677,inst_33678,null));
var state_33690__$1 = (function (){var statearr_33697 = state_33690;
(statearr_33697[(8)] = inst_33676__$1);

return statearr_33697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33690__$1,(8),jobs,inst_33679);
} else {
if((state_val_33691 === (7))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33698_33810 = state_33690__$1;
(statearr_33698_33810[(2)] = inst_33686);

(statearr_33698_33810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33676 = (state_33690[(8)]);
var inst_33681 = (state_33690[(2)]);
var state_33690__$1 = (function (){var statearr_33699 = state_33690;
(statearr_33699[(9)] = inst_33681);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33690__$1,(9),results,inst_33676);
} else {
if((state_val_33691 === (9))){
var inst_33683 = (state_33690[(2)]);
var state_33690__$1 = (function (){var statearr_33700 = state_33690;
(statearr_33700[(10)] = inst_33683);

return statearr_33700;
})();
var statearr_33701_33811 = state_33690__$1;
(statearr_33701_33811[(2)] = null);

(statearr_33701_33811[(1)] = (2));


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
});})(c__15619__auto___33805,jobs,results,process,async))
;
return ((function (switch__15598__auto__,c__15619__auto___33805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_33705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__);

(statearr_33705[(1)] = (1));

return statearr_33705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1 = (function (state_33690){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33706){if((e33706 instanceof Object)){
var ex__15602__auto__ = e33706;
var statearr_33707_33812 = state_33690;
(statearr_33707_33812[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33813 = state_33690;
state_33690 = G__33813;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___33805,jobs,results,process,async))
})();
var state__15621__auto__ = (function (){var statearr_33708 = f__15620__auto__.call(null);
(statearr_33708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33805);

return statearr_33708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___33805,jobs,results,process,async))
);


var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__,jobs,results,process,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__,jobs,results,process,async){
return (function (state_33746){
var state_val_33747 = (state_33746[(1)]);
if((state_val_33747 === (7))){
var inst_33742 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33748_33814 = state_33746__$1;
(statearr_33748_33814[(2)] = inst_33742);

(statearr_33748_33814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (20))){
var state_33746__$1 = state_33746;
var statearr_33749_33815 = state_33746__$1;
(statearr_33749_33815[(2)] = null);

(statearr_33749_33815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (1))){
var state_33746__$1 = state_33746;
var statearr_33750_33816 = state_33746__$1;
(statearr_33750_33816[(2)] = null);

(statearr_33750_33816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (4))){
var inst_33711 = (state_33746[(7)]);
var inst_33711__$1 = (state_33746[(2)]);
var inst_33712 = (inst_33711__$1 == null);
var state_33746__$1 = (function (){var statearr_33751 = state_33746;
(statearr_33751[(7)] = inst_33711__$1);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33712)){
var statearr_33752_33817 = state_33746__$1;
(statearr_33752_33817[(1)] = (5));

} else {
var statearr_33753_33818 = state_33746__$1;
(statearr_33753_33818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (15))){
var inst_33724 = (state_33746[(8)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33746__$1,(18),to,inst_33724);
} else {
if((state_val_33747 === (21))){
var inst_33737 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33754_33819 = state_33746__$1;
(statearr_33754_33819[(2)] = inst_33737);

(statearr_33754_33819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (13))){
var inst_33739 = (state_33746[(2)]);
var state_33746__$1 = (function (){var statearr_33755 = state_33746;
(statearr_33755[(9)] = inst_33739);

return statearr_33755;
})();
var statearr_33756_33820 = state_33746__$1;
(statearr_33756_33820[(2)] = null);

(statearr_33756_33820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (6))){
var inst_33711 = (state_33746[(7)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33746__$1,(11),inst_33711);
} else {
if((state_val_33747 === (17))){
var inst_33732 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
if(cljs.core.truth_(inst_33732)){
var statearr_33757_33821 = state_33746__$1;
(statearr_33757_33821[(1)] = (19));

} else {
var statearr_33758_33822 = state_33746__$1;
(statearr_33758_33822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (3))){
var inst_33744 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33746__$1,inst_33744);
} else {
if((state_val_33747 === (12))){
var inst_33721 = (state_33746[(10)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33746__$1,(14),inst_33721);
} else {
if((state_val_33747 === (2))){
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33746__$1,(4),results);
} else {
if((state_val_33747 === (19))){
var state_33746__$1 = state_33746;
var statearr_33759_33823 = state_33746__$1;
(statearr_33759_33823[(2)] = null);

(statearr_33759_33823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (11))){
var inst_33721 = (state_33746[(2)]);
var state_33746__$1 = (function (){var statearr_33760 = state_33746;
(statearr_33760[(10)] = inst_33721);

return statearr_33760;
})();
var statearr_33761_33824 = state_33746__$1;
(statearr_33761_33824[(2)] = null);

(statearr_33761_33824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (9))){
var state_33746__$1 = state_33746;
var statearr_33762_33825 = state_33746__$1;
(statearr_33762_33825[(2)] = null);

(statearr_33762_33825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (5))){
var state_33746__$1 = state_33746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33763_33826 = state_33746__$1;
(statearr_33763_33826[(1)] = (8));

} else {
var statearr_33764_33827 = state_33746__$1;
(statearr_33764_33827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (14))){
var inst_33726 = (state_33746[(11)]);
var inst_33724 = (state_33746[(8)]);
var inst_33724__$1 = (state_33746[(2)]);
var inst_33725 = (inst_33724__$1 == null);
var inst_33726__$1 = cljs.core.not.call(null,inst_33725);
var state_33746__$1 = (function (){var statearr_33765 = state_33746;
(statearr_33765[(11)] = inst_33726__$1);

(statearr_33765[(8)] = inst_33724__$1);

return statearr_33765;
})();
if(inst_33726__$1){
var statearr_33766_33828 = state_33746__$1;
(statearr_33766_33828[(1)] = (15));

} else {
var statearr_33767_33829 = state_33746__$1;
(statearr_33767_33829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (16))){
var inst_33726 = (state_33746[(11)]);
var state_33746__$1 = state_33746;
var statearr_33768_33830 = state_33746__$1;
(statearr_33768_33830[(2)] = inst_33726);

(statearr_33768_33830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (10))){
var inst_33718 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33769_33831 = state_33746__$1;
(statearr_33769_33831[(2)] = inst_33718);

(statearr_33769_33831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (18))){
var inst_33729 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33770_33832 = state_33746__$1;
(statearr_33770_33832[(2)] = inst_33729);

(statearr_33770_33832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (8))){
var inst_33715 = cljs.core.async.close_BANG_.call(null,to);
var state_33746__$1 = state_33746;
var statearr_33771_33833 = state_33746__$1;
(statearr_33771_33833[(2)] = inst_33715);

(statearr_33771_33833[(1)] = (10));


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
}
}
}
}
});})(c__15619__auto__,jobs,results,process,async))
;
return ((function (switch__15598__auto__,c__15619__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_33775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__);

(statearr_33775[(1)] = (1));

return statearr_33775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1 = (function (state_33746){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33776){if((e33776 instanceof Object)){
var ex__15602__auto__ = e33776;
var statearr_33777_33834 = state_33746;
(statearr_33777_33834[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33835 = state_33746;
state_33746 = G__33835;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__ = function(state_33746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1.call(this,state_33746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__,jobs,results,process,async))
})();
var state__15621__auto__ = (function (){var statearr_33778 = f__15620__auto__.call(null);
(statearr_33778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_33778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__,jobs,results,process,async))
);

return c__15619__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33836 = [];
var len__14245__auto___33839 = arguments.length;
var i__14246__auto___33840 = (0);
while(true){
if((i__14246__auto___33840 < len__14245__auto___33839)){
args33836.push((arguments[i__14246__auto___33840]));

var G__33841 = (i__14246__auto___33840 + (1));
i__14246__auto___33840 = G__33841;
continue;
} else {
}
break;
}

var G__33838 = args33836.length;
switch (G__33838) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33836.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args33843 = [];
var len__14245__auto___33846 = arguments.length;
var i__14246__auto___33847 = (0);
while(true){
if((i__14246__auto___33847 < len__14245__auto___33846)){
args33843.push((arguments[i__14246__auto___33847]));

var G__33848 = (i__14246__auto___33847 + (1));
i__14246__auto___33847 = G__33848;
continue;
} else {
}
break;
}

var G__33845 = args33843.length;
switch (G__33845) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33843.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args33850 = [];
var len__14245__auto___33903 = arguments.length;
var i__14246__auto___33904 = (0);
while(true){
if((i__14246__auto___33904 < len__14245__auto___33903)){
args33850.push((arguments[i__14246__auto___33904]));

var G__33905 = (i__14246__auto___33904 + (1));
i__14246__auto___33904 = G__33905;
continue;
} else {
}
break;
}

var G__33852 = args33850.length;
switch (G__33852) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33850.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15619__auto___33907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___33907,tc,fc){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___33907,tc,fc){
return (function (state_33878){
var state_val_33879 = (state_33878[(1)]);
if((state_val_33879 === (7))){
var inst_33874 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33880_33908 = state_33878__$1;
(statearr_33880_33908[(2)] = inst_33874);

(statearr_33880_33908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (1))){
var state_33878__$1 = state_33878;
var statearr_33881_33909 = state_33878__$1;
(statearr_33881_33909[(2)] = null);

(statearr_33881_33909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (4))){
var inst_33855 = (state_33878[(7)]);
var inst_33855__$1 = (state_33878[(2)]);
var inst_33856 = (inst_33855__$1 == null);
var state_33878__$1 = (function (){var statearr_33882 = state_33878;
(statearr_33882[(7)] = inst_33855__$1);

return statearr_33882;
})();
if(cljs.core.truth_(inst_33856)){
var statearr_33883_33910 = state_33878__$1;
(statearr_33883_33910[(1)] = (5));

} else {
var statearr_33884_33911 = state_33878__$1;
(statearr_33884_33911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (13))){
var state_33878__$1 = state_33878;
var statearr_33885_33912 = state_33878__$1;
(statearr_33885_33912[(2)] = null);

(statearr_33885_33912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (6))){
var inst_33855 = (state_33878[(7)]);
var inst_33861 = p.call(null,inst_33855);
var state_33878__$1 = state_33878;
if(cljs.core.truth_(inst_33861)){
var statearr_33886_33913 = state_33878__$1;
(statearr_33886_33913[(1)] = (9));

} else {
var statearr_33887_33914 = state_33878__$1;
(statearr_33887_33914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (3))){
var inst_33876 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33878__$1,inst_33876);
} else {
if((state_val_33879 === (12))){
var state_33878__$1 = state_33878;
var statearr_33888_33915 = state_33878__$1;
(statearr_33888_33915[(2)] = null);

(statearr_33888_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (2))){
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33878__$1,(4),ch);
} else {
if((state_val_33879 === (11))){
var inst_33855 = (state_33878[(7)]);
var inst_33865 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33878__$1,(8),inst_33865,inst_33855);
} else {
if((state_val_33879 === (9))){
var state_33878__$1 = state_33878;
var statearr_33889_33916 = state_33878__$1;
(statearr_33889_33916[(2)] = tc);

(statearr_33889_33916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (5))){
var inst_33858 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33859 = cljs.core.async.close_BANG_.call(null,fc);
var state_33878__$1 = (function (){var statearr_33890 = state_33878;
(statearr_33890[(8)] = inst_33858);

return statearr_33890;
})();
var statearr_33891_33917 = state_33878__$1;
(statearr_33891_33917[(2)] = inst_33859);

(statearr_33891_33917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (14))){
var inst_33872 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33892_33918 = state_33878__$1;
(statearr_33892_33918[(2)] = inst_33872);

(statearr_33892_33918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (10))){
var state_33878__$1 = state_33878;
var statearr_33893_33919 = state_33878__$1;
(statearr_33893_33919[(2)] = fc);

(statearr_33893_33919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (8))){
var inst_33867 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
if(cljs.core.truth_(inst_33867)){
var statearr_33894_33920 = state_33878__$1;
(statearr_33894_33920[(1)] = (12));

} else {
var statearr_33895_33921 = state_33878__$1;
(statearr_33895_33921[(1)] = (13));

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
});})(c__15619__auto___33907,tc,fc))
;
return ((function (switch__15598__auto__,c__15619__auto___33907,tc,fc){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_33899 = [null,null,null,null,null,null,null,null,null];
(statearr_33899[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_33899[(1)] = (1));

return statearr_33899;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_33878){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e33900){if((e33900 instanceof Object)){
var ex__15602__auto__ = e33900;
var statearr_33901_33922 = state_33878;
(statearr_33901_33922[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_33878;
state_33878 = G__33923;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_33878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_33878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___33907,tc,fc))
})();
var state__15621__auto__ = (function (){var statearr_33902 = f__15620__auto__.call(null);
(statearr_33902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___33907);

return statearr_33902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___33907,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_33987){
var state_val_33988 = (state_33987[(1)]);
if((state_val_33988 === (7))){
var inst_33983 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
var statearr_33989_34010 = state_33987__$1;
(statearr_33989_34010[(2)] = inst_33983);

(statearr_33989_34010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (1))){
var inst_33967 = init;
var state_33987__$1 = (function (){var statearr_33990 = state_33987;
(statearr_33990[(7)] = inst_33967);

return statearr_33990;
})();
var statearr_33991_34011 = state_33987__$1;
(statearr_33991_34011[(2)] = null);

(statearr_33991_34011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (4))){
var inst_33970 = (state_33987[(8)]);
var inst_33970__$1 = (state_33987[(2)]);
var inst_33971 = (inst_33970__$1 == null);
var state_33987__$1 = (function (){var statearr_33992 = state_33987;
(statearr_33992[(8)] = inst_33970__$1);

return statearr_33992;
})();
if(cljs.core.truth_(inst_33971)){
var statearr_33993_34012 = state_33987__$1;
(statearr_33993_34012[(1)] = (5));

} else {
var statearr_33994_34013 = state_33987__$1;
(statearr_33994_34013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (6))){
var inst_33974 = (state_33987[(9)]);
var inst_33967 = (state_33987[(7)]);
var inst_33970 = (state_33987[(8)]);
var inst_33974__$1 = f.call(null,inst_33967,inst_33970);
var inst_33975 = cljs.core.reduced_QMARK_.call(null,inst_33974__$1);
var state_33987__$1 = (function (){var statearr_33995 = state_33987;
(statearr_33995[(9)] = inst_33974__$1);

return statearr_33995;
})();
if(inst_33975){
var statearr_33996_34014 = state_33987__$1;
(statearr_33996_34014[(1)] = (8));

} else {
var statearr_33997_34015 = state_33987__$1;
(statearr_33997_34015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (3))){
var inst_33985 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33987__$1,inst_33985);
} else {
if((state_val_33988 === (2))){
var state_33987__$1 = state_33987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33987__$1,(4),ch);
} else {
if((state_val_33988 === (9))){
var inst_33974 = (state_33987[(9)]);
var inst_33967 = inst_33974;
var state_33987__$1 = (function (){var statearr_33998 = state_33987;
(statearr_33998[(7)] = inst_33967);

return statearr_33998;
})();
var statearr_33999_34016 = state_33987__$1;
(statearr_33999_34016[(2)] = null);

(statearr_33999_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (5))){
var inst_33967 = (state_33987[(7)]);
var state_33987__$1 = state_33987;
var statearr_34000_34017 = state_33987__$1;
(statearr_34000_34017[(2)] = inst_33967);

(statearr_34000_34017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (10))){
var inst_33981 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
var statearr_34001_34018 = state_33987__$1;
(statearr_34001_34018[(2)] = inst_33981);

(statearr_34001_34018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (8))){
var inst_33974 = (state_33987[(9)]);
var inst_33977 = cljs.core.deref.call(null,inst_33974);
var state_33987__$1 = state_33987;
var statearr_34002_34019 = state_33987__$1;
(statearr_34002_34019[(2)] = inst_33977);

(statearr_34002_34019[(1)] = (10));


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
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15599__auto____0 = (function (){
var statearr_34006 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34006[(0)] = cljs$core$async$reduce_$_state_machine__15599__auto__);

(statearr_34006[(1)] = (1));

return statearr_34006;
});
var cljs$core$async$reduce_$_state_machine__15599__auto____1 = (function (state_33987){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_33987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e34007){if((e34007 instanceof Object)){
var ex__15602__auto__ = e34007;
var statearr_34008_34020 = state_33987;
(statearr_34008_34020[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_33987;
state_33987 = G__34021;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15599__auto__ = function(state_33987){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15599__auto____1.call(this,state_33987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15599__auto____0;
cljs$core$async$reduce_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15599__auto____1;
return cljs$core$async$reduce_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_34009 = f__15620__auto__.call(null);
(statearr_34009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34022 = [];
var len__14245__auto___34074 = arguments.length;
var i__14246__auto___34075 = (0);
while(true){
if((i__14246__auto___34075 < len__14245__auto___34074)){
args34022.push((arguments[i__14246__auto___34075]));

var G__34076 = (i__14246__auto___34075 + (1));
i__14246__auto___34075 = G__34076;
continue;
} else {
}
break;
}

var G__34024 = args34022.length;
switch (G__34024) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34022.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_34049){
var state_val_34050 = (state_34049[(1)]);
if((state_val_34050 === (7))){
var inst_34031 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34051_34078 = state_34049__$1;
(statearr_34051_34078[(2)] = inst_34031);

(statearr_34051_34078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (1))){
var inst_34025 = cljs.core.seq.call(null,coll);
var inst_34026 = inst_34025;
var state_34049__$1 = (function (){var statearr_34052 = state_34049;
(statearr_34052[(7)] = inst_34026);

return statearr_34052;
})();
var statearr_34053_34079 = state_34049__$1;
(statearr_34053_34079[(2)] = null);

(statearr_34053_34079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (4))){
var inst_34026 = (state_34049[(7)]);
var inst_34029 = cljs.core.first.call(null,inst_34026);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34049__$1,(7),ch,inst_34029);
} else {
if((state_val_34050 === (13))){
var inst_34043 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34054_34080 = state_34049__$1;
(statearr_34054_34080[(2)] = inst_34043);

(statearr_34054_34080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (6))){
var inst_34034 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34034)){
var statearr_34055_34081 = state_34049__$1;
(statearr_34055_34081[(1)] = (8));

} else {
var statearr_34056_34082 = state_34049__$1;
(statearr_34056_34082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (3))){
var inst_34047 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34049__$1,inst_34047);
} else {
if((state_val_34050 === (12))){
var state_34049__$1 = state_34049;
var statearr_34057_34083 = state_34049__$1;
(statearr_34057_34083[(2)] = null);

(statearr_34057_34083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (2))){
var inst_34026 = (state_34049[(7)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34026)){
var statearr_34058_34084 = state_34049__$1;
(statearr_34058_34084[(1)] = (4));

} else {
var statearr_34059_34085 = state_34049__$1;
(statearr_34059_34085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (11))){
var inst_34040 = cljs.core.async.close_BANG_.call(null,ch);
var state_34049__$1 = state_34049;
var statearr_34060_34086 = state_34049__$1;
(statearr_34060_34086[(2)] = inst_34040);

(statearr_34060_34086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (9))){
var state_34049__$1 = state_34049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34061_34087 = state_34049__$1;
(statearr_34061_34087[(1)] = (11));

} else {
var statearr_34062_34088 = state_34049__$1;
(statearr_34062_34088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (5))){
var inst_34026 = (state_34049[(7)]);
var state_34049__$1 = state_34049;
var statearr_34063_34089 = state_34049__$1;
(statearr_34063_34089[(2)] = inst_34026);

(statearr_34063_34089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (10))){
var inst_34045 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34064_34090 = state_34049__$1;
(statearr_34064_34090[(2)] = inst_34045);

(statearr_34064_34090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (8))){
var inst_34026 = (state_34049[(7)]);
var inst_34036 = cljs.core.next.call(null,inst_34026);
var inst_34026__$1 = inst_34036;
var state_34049__$1 = (function (){var statearr_34065 = state_34049;
(statearr_34065[(7)] = inst_34026__$1);

return statearr_34065;
})();
var statearr_34066_34091 = state_34049__$1;
(statearr_34066_34091[(2)] = null);

(statearr_34066_34091[(1)] = (2));


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
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_34049){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_34049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e34071){if((e34071 instanceof Object)){
var ex__15602__auto__ = e34071;
var statearr_34072_34092 = state_34049;
(statearr_34072_34092[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34093 = state_34049;
state_34049 = G__34093;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_34049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_34049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_34073 = f__15620__auto__.call(null);
(statearr_34073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_34073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13842__auto__ = (((_ == null))?null:_);
var m__13843__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,_);
} else {
var m__13843__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__13843__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,ch);
} else {
var m__13843__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m);
} else {
var m__13843__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34315 = (function (mult,ch,cs,meta34316){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34316 = meta34316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34317,meta34316__$1){
var self__ = this;
var _34317__$1 = this;
return (new cljs.core.async.t_cljs$core$async34315(self__.mult,self__.ch,self__.cs,meta34316__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34317){
var self__ = this;
var _34317__$1 = this;
return self__.meta34316;
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34316","meta34316",1731630655,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34315";

cljs.core.async.t_cljs$core$async34315.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async34315");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34315 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34315(mult__$1,ch__$1,cs__$1,meta34316){
return (new cljs.core.async.t_cljs$core$async34315(mult__$1,ch__$1,cs__$1,meta34316));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34315(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15619__auto___34536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___34536,cs,m,dchan,dctr,done){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___34536,cs,m,dchan,dctr,done){
return (function (state_34448){
var state_val_34449 = (state_34448[(1)]);
if((state_val_34449 === (7))){
var inst_34444 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34450_34537 = state_34448__$1;
(statearr_34450_34537[(2)] = inst_34444);

(statearr_34450_34537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (20))){
var inst_34349 = (state_34448[(7)]);
var inst_34359 = cljs.core.first.call(null,inst_34349);
var inst_34360 = cljs.core.nth.call(null,inst_34359,(0),null);
var inst_34361 = cljs.core.nth.call(null,inst_34359,(1),null);
var state_34448__$1 = (function (){var statearr_34451 = state_34448;
(statearr_34451[(8)] = inst_34360);

return statearr_34451;
})();
if(cljs.core.truth_(inst_34361)){
var statearr_34452_34538 = state_34448__$1;
(statearr_34452_34538[(1)] = (22));

} else {
var statearr_34453_34539 = state_34448__$1;
(statearr_34453_34539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (27))){
var inst_34389 = (state_34448[(9)]);
var inst_34391 = (state_34448[(10)]);
var inst_34396 = (state_34448[(11)]);
var inst_34320 = (state_34448[(12)]);
var inst_34396__$1 = cljs.core._nth.call(null,inst_34389,inst_34391);
var inst_34397 = cljs.core.async.put_BANG_.call(null,inst_34396__$1,inst_34320,done);
var state_34448__$1 = (function (){var statearr_34454 = state_34448;
(statearr_34454[(11)] = inst_34396__$1);

return statearr_34454;
})();
if(cljs.core.truth_(inst_34397)){
var statearr_34455_34540 = state_34448__$1;
(statearr_34455_34540[(1)] = (30));

} else {
var statearr_34456_34541 = state_34448__$1;
(statearr_34456_34541[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (1))){
var state_34448__$1 = state_34448;
var statearr_34457_34542 = state_34448__$1;
(statearr_34457_34542[(2)] = null);

(statearr_34457_34542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (24))){
var inst_34349 = (state_34448[(7)]);
var inst_34366 = (state_34448[(2)]);
var inst_34367 = cljs.core.next.call(null,inst_34349);
var inst_34329 = inst_34367;
var inst_34330 = null;
var inst_34331 = (0);
var inst_34332 = (0);
var state_34448__$1 = (function (){var statearr_34458 = state_34448;
(statearr_34458[(13)] = inst_34332);

(statearr_34458[(14)] = inst_34330);

(statearr_34458[(15)] = inst_34329);

(statearr_34458[(16)] = inst_34366);

(statearr_34458[(17)] = inst_34331);

return statearr_34458;
})();
var statearr_34459_34543 = state_34448__$1;
(statearr_34459_34543[(2)] = null);

(statearr_34459_34543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (39))){
var state_34448__$1 = state_34448;
var statearr_34463_34544 = state_34448__$1;
(statearr_34463_34544[(2)] = null);

(statearr_34463_34544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (4))){
var inst_34320 = (state_34448[(12)]);
var inst_34320__$1 = (state_34448[(2)]);
var inst_34321 = (inst_34320__$1 == null);
var state_34448__$1 = (function (){var statearr_34464 = state_34448;
(statearr_34464[(12)] = inst_34320__$1);

return statearr_34464;
})();
if(cljs.core.truth_(inst_34321)){
var statearr_34465_34545 = state_34448__$1;
(statearr_34465_34545[(1)] = (5));

} else {
var statearr_34466_34546 = state_34448__$1;
(statearr_34466_34546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (15))){
var inst_34332 = (state_34448[(13)]);
var inst_34330 = (state_34448[(14)]);
var inst_34329 = (state_34448[(15)]);
var inst_34331 = (state_34448[(17)]);
var inst_34345 = (state_34448[(2)]);
var inst_34346 = (inst_34332 + (1));
var tmp34460 = inst_34330;
var tmp34461 = inst_34329;
var tmp34462 = inst_34331;
var inst_34329__$1 = tmp34461;
var inst_34330__$1 = tmp34460;
var inst_34331__$1 = tmp34462;
var inst_34332__$1 = inst_34346;
var state_34448__$1 = (function (){var statearr_34467 = state_34448;
(statearr_34467[(18)] = inst_34345);

(statearr_34467[(13)] = inst_34332__$1);

(statearr_34467[(14)] = inst_34330__$1);

(statearr_34467[(15)] = inst_34329__$1);

(statearr_34467[(17)] = inst_34331__$1);

return statearr_34467;
})();
var statearr_34468_34547 = state_34448__$1;
(statearr_34468_34547[(2)] = null);

(statearr_34468_34547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (21))){
var inst_34370 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34472_34548 = state_34448__$1;
(statearr_34472_34548[(2)] = inst_34370);

(statearr_34472_34548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (31))){
var inst_34396 = (state_34448[(11)]);
var inst_34400 = done.call(null,null);
var inst_34401 = cljs.core.async.untap_STAR_.call(null,m,inst_34396);
var state_34448__$1 = (function (){var statearr_34473 = state_34448;
(statearr_34473[(19)] = inst_34400);

return statearr_34473;
})();
var statearr_34474_34549 = state_34448__$1;
(statearr_34474_34549[(2)] = inst_34401);

(statearr_34474_34549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (32))){
var inst_34389 = (state_34448[(9)]);
var inst_34391 = (state_34448[(10)]);
var inst_34388 = (state_34448[(20)]);
var inst_34390 = (state_34448[(21)]);
var inst_34403 = (state_34448[(2)]);
var inst_34404 = (inst_34391 + (1));
var tmp34469 = inst_34389;
var tmp34470 = inst_34388;
var tmp34471 = inst_34390;
var inst_34388__$1 = tmp34470;
var inst_34389__$1 = tmp34469;
var inst_34390__$1 = tmp34471;
var inst_34391__$1 = inst_34404;
var state_34448__$1 = (function (){var statearr_34475 = state_34448;
(statearr_34475[(9)] = inst_34389__$1);

(statearr_34475[(10)] = inst_34391__$1);

(statearr_34475[(20)] = inst_34388__$1);

(statearr_34475[(21)] = inst_34390__$1);

(statearr_34475[(22)] = inst_34403);

return statearr_34475;
})();
var statearr_34476_34550 = state_34448__$1;
(statearr_34476_34550[(2)] = null);

(statearr_34476_34550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (40))){
var inst_34416 = (state_34448[(23)]);
var inst_34420 = done.call(null,null);
var inst_34421 = cljs.core.async.untap_STAR_.call(null,m,inst_34416);
var state_34448__$1 = (function (){var statearr_34477 = state_34448;
(statearr_34477[(24)] = inst_34420);

return statearr_34477;
})();
var statearr_34478_34551 = state_34448__$1;
(statearr_34478_34551[(2)] = inst_34421);

(statearr_34478_34551[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (33))){
var inst_34407 = (state_34448[(25)]);
var inst_34409 = cljs.core.chunked_seq_QMARK_.call(null,inst_34407);
var state_34448__$1 = state_34448;
if(inst_34409){
var statearr_34479_34552 = state_34448__$1;
(statearr_34479_34552[(1)] = (36));

} else {
var statearr_34480_34553 = state_34448__$1;
(statearr_34480_34553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (13))){
var inst_34339 = (state_34448[(26)]);
var inst_34342 = cljs.core.async.close_BANG_.call(null,inst_34339);
var state_34448__$1 = state_34448;
var statearr_34481_34554 = state_34448__$1;
(statearr_34481_34554[(2)] = inst_34342);

(statearr_34481_34554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (22))){
var inst_34360 = (state_34448[(8)]);
var inst_34363 = cljs.core.async.close_BANG_.call(null,inst_34360);
var state_34448__$1 = state_34448;
var statearr_34482_34555 = state_34448__$1;
(statearr_34482_34555[(2)] = inst_34363);

(statearr_34482_34555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (36))){
var inst_34407 = (state_34448[(25)]);
var inst_34411 = cljs.core.chunk_first.call(null,inst_34407);
var inst_34412 = cljs.core.chunk_rest.call(null,inst_34407);
var inst_34413 = cljs.core.count.call(null,inst_34411);
var inst_34388 = inst_34412;
var inst_34389 = inst_34411;
var inst_34390 = inst_34413;
var inst_34391 = (0);
var state_34448__$1 = (function (){var statearr_34483 = state_34448;
(statearr_34483[(9)] = inst_34389);

(statearr_34483[(10)] = inst_34391);

(statearr_34483[(20)] = inst_34388);

(statearr_34483[(21)] = inst_34390);

return statearr_34483;
})();
var statearr_34484_34556 = state_34448__$1;
(statearr_34484_34556[(2)] = null);

(statearr_34484_34556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (41))){
var inst_34407 = (state_34448[(25)]);
var inst_34423 = (state_34448[(2)]);
var inst_34424 = cljs.core.next.call(null,inst_34407);
var inst_34388 = inst_34424;
var inst_34389 = null;
var inst_34390 = (0);
var inst_34391 = (0);
var state_34448__$1 = (function (){var statearr_34485 = state_34448;
(statearr_34485[(9)] = inst_34389);

(statearr_34485[(10)] = inst_34391);

(statearr_34485[(20)] = inst_34388);

(statearr_34485[(21)] = inst_34390);

(statearr_34485[(27)] = inst_34423);

return statearr_34485;
})();
var statearr_34486_34557 = state_34448__$1;
(statearr_34486_34557[(2)] = null);

(statearr_34486_34557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (43))){
var state_34448__$1 = state_34448;
var statearr_34487_34558 = state_34448__$1;
(statearr_34487_34558[(2)] = null);

(statearr_34487_34558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (29))){
var inst_34432 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34488_34559 = state_34448__$1;
(statearr_34488_34559[(2)] = inst_34432);

(statearr_34488_34559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (44))){
var inst_34441 = (state_34448[(2)]);
var state_34448__$1 = (function (){var statearr_34489 = state_34448;
(statearr_34489[(28)] = inst_34441);

return statearr_34489;
})();
var statearr_34490_34560 = state_34448__$1;
(statearr_34490_34560[(2)] = null);

(statearr_34490_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (6))){
var inst_34380 = (state_34448[(29)]);
var inst_34379 = cljs.core.deref.call(null,cs);
var inst_34380__$1 = cljs.core.keys.call(null,inst_34379);
var inst_34381 = cljs.core.count.call(null,inst_34380__$1);
var inst_34382 = cljs.core.reset_BANG_.call(null,dctr,inst_34381);
var inst_34387 = cljs.core.seq.call(null,inst_34380__$1);
var inst_34388 = inst_34387;
var inst_34389 = null;
var inst_34390 = (0);
var inst_34391 = (0);
var state_34448__$1 = (function (){var statearr_34491 = state_34448;
(statearr_34491[(29)] = inst_34380__$1);

(statearr_34491[(9)] = inst_34389);

(statearr_34491[(10)] = inst_34391);

(statearr_34491[(20)] = inst_34388);

(statearr_34491[(21)] = inst_34390);

(statearr_34491[(30)] = inst_34382);

return statearr_34491;
})();
var statearr_34492_34561 = state_34448__$1;
(statearr_34492_34561[(2)] = null);

(statearr_34492_34561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (28))){
var inst_34407 = (state_34448[(25)]);
var inst_34388 = (state_34448[(20)]);
var inst_34407__$1 = cljs.core.seq.call(null,inst_34388);
var state_34448__$1 = (function (){var statearr_34493 = state_34448;
(statearr_34493[(25)] = inst_34407__$1);

return statearr_34493;
})();
if(inst_34407__$1){
var statearr_34494_34562 = state_34448__$1;
(statearr_34494_34562[(1)] = (33));

} else {
var statearr_34495_34563 = state_34448__$1;
(statearr_34495_34563[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (25))){
var inst_34391 = (state_34448[(10)]);
var inst_34390 = (state_34448[(21)]);
var inst_34393 = (inst_34391 < inst_34390);
var inst_34394 = inst_34393;
var state_34448__$1 = state_34448;
if(cljs.core.truth_(inst_34394)){
var statearr_34496_34564 = state_34448__$1;
(statearr_34496_34564[(1)] = (27));

} else {
var statearr_34497_34565 = state_34448__$1;
(statearr_34497_34565[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (34))){
var state_34448__$1 = state_34448;
var statearr_34498_34566 = state_34448__$1;
(statearr_34498_34566[(2)] = null);

(statearr_34498_34566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (17))){
var state_34448__$1 = state_34448;
var statearr_34499_34567 = state_34448__$1;
(statearr_34499_34567[(2)] = null);

(statearr_34499_34567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (3))){
var inst_34446 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34448__$1,inst_34446);
} else {
if((state_val_34449 === (12))){
var inst_34375 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34500_34568 = state_34448__$1;
(statearr_34500_34568[(2)] = inst_34375);

(statearr_34500_34568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (2))){
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34448__$1,(4),ch);
} else {
if((state_val_34449 === (23))){
var state_34448__$1 = state_34448;
var statearr_34501_34569 = state_34448__$1;
(statearr_34501_34569[(2)] = null);

(statearr_34501_34569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (35))){
var inst_34430 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34502_34570 = state_34448__$1;
(statearr_34502_34570[(2)] = inst_34430);

(statearr_34502_34570[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (19))){
var inst_34349 = (state_34448[(7)]);
var inst_34353 = cljs.core.chunk_first.call(null,inst_34349);
var inst_34354 = cljs.core.chunk_rest.call(null,inst_34349);
var inst_34355 = cljs.core.count.call(null,inst_34353);
var inst_34329 = inst_34354;
var inst_34330 = inst_34353;
var inst_34331 = inst_34355;
var inst_34332 = (0);
var state_34448__$1 = (function (){var statearr_34503 = state_34448;
(statearr_34503[(13)] = inst_34332);

(statearr_34503[(14)] = inst_34330);

(statearr_34503[(15)] = inst_34329);

(statearr_34503[(17)] = inst_34331);

return statearr_34503;
})();
var statearr_34504_34571 = state_34448__$1;
(statearr_34504_34571[(2)] = null);

(statearr_34504_34571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (11))){
var inst_34349 = (state_34448[(7)]);
var inst_34329 = (state_34448[(15)]);
var inst_34349__$1 = cljs.core.seq.call(null,inst_34329);
var state_34448__$1 = (function (){var statearr_34505 = state_34448;
(statearr_34505[(7)] = inst_34349__$1);

return statearr_34505;
})();
if(inst_34349__$1){
var statearr_34506_34572 = state_34448__$1;
(statearr_34506_34572[(1)] = (16));

} else {
var statearr_34507_34573 = state_34448__$1;
(statearr_34507_34573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (9))){
var inst_34377 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34508_34574 = state_34448__$1;
(statearr_34508_34574[(2)] = inst_34377);

(statearr_34508_34574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (5))){
var inst_34327 = cljs.core.deref.call(null,cs);
var inst_34328 = cljs.core.seq.call(null,inst_34327);
var inst_34329 = inst_34328;
var inst_34330 = null;
var inst_34331 = (0);
var inst_34332 = (0);
var state_34448__$1 = (function (){var statearr_34509 = state_34448;
(statearr_34509[(13)] = inst_34332);

(statearr_34509[(14)] = inst_34330);

(statearr_34509[(15)] = inst_34329);

(statearr_34509[(17)] = inst_34331);

return statearr_34509;
})();
var statearr_34510_34575 = state_34448__$1;
(statearr_34510_34575[(2)] = null);

(statearr_34510_34575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (14))){
var state_34448__$1 = state_34448;
var statearr_34511_34576 = state_34448__$1;
(statearr_34511_34576[(2)] = null);

(statearr_34511_34576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (45))){
var inst_34438 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34512_34577 = state_34448__$1;
(statearr_34512_34577[(2)] = inst_34438);

(statearr_34512_34577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (26))){
var inst_34380 = (state_34448[(29)]);
var inst_34434 = (state_34448[(2)]);
var inst_34435 = cljs.core.seq.call(null,inst_34380);
var state_34448__$1 = (function (){var statearr_34513 = state_34448;
(statearr_34513[(31)] = inst_34434);

return statearr_34513;
})();
if(inst_34435){
var statearr_34514_34578 = state_34448__$1;
(statearr_34514_34578[(1)] = (42));

} else {
var statearr_34515_34579 = state_34448__$1;
(statearr_34515_34579[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (16))){
var inst_34349 = (state_34448[(7)]);
var inst_34351 = cljs.core.chunked_seq_QMARK_.call(null,inst_34349);
var state_34448__$1 = state_34448;
if(inst_34351){
var statearr_34516_34580 = state_34448__$1;
(statearr_34516_34580[(1)] = (19));

} else {
var statearr_34517_34581 = state_34448__$1;
(statearr_34517_34581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (38))){
var inst_34427 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34518_34582 = state_34448__$1;
(statearr_34518_34582[(2)] = inst_34427);

(statearr_34518_34582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (30))){
var state_34448__$1 = state_34448;
var statearr_34519_34583 = state_34448__$1;
(statearr_34519_34583[(2)] = null);

(statearr_34519_34583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (10))){
var inst_34332 = (state_34448[(13)]);
var inst_34330 = (state_34448[(14)]);
var inst_34338 = cljs.core._nth.call(null,inst_34330,inst_34332);
var inst_34339 = cljs.core.nth.call(null,inst_34338,(0),null);
var inst_34340 = cljs.core.nth.call(null,inst_34338,(1),null);
var state_34448__$1 = (function (){var statearr_34520 = state_34448;
(statearr_34520[(26)] = inst_34339);

return statearr_34520;
})();
if(cljs.core.truth_(inst_34340)){
var statearr_34521_34584 = state_34448__$1;
(statearr_34521_34584[(1)] = (13));

} else {
var statearr_34522_34585 = state_34448__$1;
(statearr_34522_34585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (18))){
var inst_34373 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34523_34586 = state_34448__$1;
(statearr_34523_34586[(2)] = inst_34373);

(statearr_34523_34586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (42))){
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34448__$1,(45),dchan);
} else {
if((state_val_34449 === (37))){
var inst_34407 = (state_34448[(25)]);
var inst_34320 = (state_34448[(12)]);
var inst_34416 = (state_34448[(23)]);
var inst_34416__$1 = cljs.core.first.call(null,inst_34407);
var inst_34417 = cljs.core.async.put_BANG_.call(null,inst_34416__$1,inst_34320,done);
var state_34448__$1 = (function (){var statearr_34524 = state_34448;
(statearr_34524[(23)] = inst_34416__$1);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34417)){
var statearr_34525_34587 = state_34448__$1;
(statearr_34525_34587[(1)] = (39));

} else {
var statearr_34526_34588 = state_34448__$1;
(statearr_34526_34588[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (8))){
var inst_34332 = (state_34448[(13)]);
var inst_34331 = (state_34448[(17)]);
var inst_34334 = (inst_34332 < inst_34331);
var inst_34335 = inst_34334;
var state_34448__$1 = state_34448;
if(cljs.core.truth_(inst_34335)){
var statearr_34527_34589 = state_34448__$1;
(statearr_34527_34589[(1)] = (10));

} else {
var statearr_34528_34590 = state_34448__$1;
(statearr_34528_34590[(1)] = (11));

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
});})(c__15619__auto___34536,cs,m,dchan,dctr,done))
;
return ((function (switch__15598__auto__,c__15619__auto___34536,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15599__auto__ = null;
var cljs$core$async$mult_$_state_machine__15599__auto____0 = (function (){
var statearr_34532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34532[(0)] = cljs$core$async$mult_$_state_machine__15599__auto__);

(statearr_34532[(1)] = (1));

return statearr_34532;
});
var cljs$core$async$mult_$_state_machine__15599__auto____1 = (function (state_34448){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_34448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e34533){if((e34533 instanceof Object)){
var ex__15602__auto__ = e34533;
var statearr_34534_34591 = state_34448;
(statearr_34534_34591[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_34448;
state_34448 = G__34592;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15599__auto__ = function(state_34448){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15599__auto____1.call(this,state_34448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15599__auto____0;
cljs$core$async$mult_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15599__auto____1;
return cljs$core$async$mult_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___34536,cs,m,dchan,dctr,done))
})();
var state__15621__auto__ = (function (){var statearr_34535 = f__15620__auto__.call(null);
(statearr_34535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___34536);

return statearr_34535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___34536,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34593 = [];
var len__14245__auto___34596 = arguments.length;
var i__14246__auto___34597 = (0);
while(true){
if((i__14246__auto___34597 < len__14245__auto___34596)){
args34593.push((arguments[i__14246__auto___34597]));

var G__34598 = (i__14246__auto___34597 + (1));
i__14246__auto___34597 = G__34598;
continue;
} else {
}
break;
}

var G__34595 = args34593.length;
switch (G__34595) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34593.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,ch);
} else {
var m__13843__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,ch);
} else {
var m__13843__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m);
} else {
var m__13843__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,state_map);
} else {
var m__13843__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13842__auto__ = (((m == null))?null:m);
var m__13843__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,m,mode);
} else {
var m__13843__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__14252__auto__ = [];
var len__14245__auto___34610 = arguments.length;
var i__14246__auto___34611 = (0);
while(true){
if((i__14246__auto___34611 < len__14245__auto___34610)){
args__14252__auto__.push((arguments[i__14246__auto___34611]));

var G__34612 = (i__14246__auto___34611 + (1));
i__14246__auto___34611 = G__34612;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((3) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14253__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34604){
var map__34605 = p__34604;
var map__34605__$1 = ((((!((map__34605 == null)))?((((map__34605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34605):map__34605);
var opts = map__34605__$1;
var statearr_34607_34613 = state;
(statearr_34607_34613[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34605,map__34605__$1,opts){
return (function (val){
var statearr_34608_34614 = state;
(statearr_34608_34614[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34605,map__34605__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34609_34615 = state;
(statearr_34609_34615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34600){
var G__34601 = cljs.core.first.call(null,seq34600);
var seq34600__$1 = cljs.core.next.call(null,seq34600);
var G__34602 = cljs.core.first.call(null,seq34600__$1);
var seq34600__$2 = cljs.core.next.call(null,seq34600__$1);
var G__34603 = cljs.core.first.call(null,seq34600__$2);
var seq34600__$3 = cljs.core.next.call(null,seq34600__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34601,G__34602,G__34603,seq34600__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34779 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34780){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34780 = meta34780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34781,meta34780__$1){
var self__ = this;
var _34781__$1 = this;
return (new cljs.core.async.t_cljs$core$async34779(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34780__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34781){
var self__ = this;
var _34781__$1 = this;
return self__.meta34780;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34780","meta34780",-2031132870,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34779";

cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async34779");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34779 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34779(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34780){
return (new cljs.core.async.t_cljs$core$async34779(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34780));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34779(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15619__auto___34942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34879){
var state_val_34880 = (state_34879[(1)]);
if((state_val_34880 === (7))){
var inst_34797 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34881_34943 = state_34879__$1;
(statearr_34881_34943[(2)] = inst_34797);

(statearr_34881_34943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (20))){
var inst_34809 = (state_34879[(7)]);
var state_34879__$1 = state_34879;
var statearr_34882_34944 = state_34879__$1;
(statearr_34882_34944[(2)] = inst_34809);

(statearr_34882_34944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (27))){
var state_34879__$1 = state_34879;
var statearr_34883_34945 = state_34879__$1;
(statearr_34883_34945[(2)] = null);

(statearr_34883_34945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (1))){
var inst_34785 = (state_34879[(8)]);
var inst_34785__$1 = calc_state.call(null);
var inst_34787 = (inst_34785__$1 == null);
var inst_34788 = cljs.core.not.call(null,inst_34787);
var state_34879__$1 = (function (){var statearr_34884 = state_34879;
(statearr_34884[(8)] = inst_34785__$1);

return statearr_34884;
})();
if(inst_34788){
var statearr_34885_34946 = state_34879__$1;
(statearr_34885_34946[(1)] = (2));

} else {
var statearr_34886_34947 = state_34879__$1;
(statearr_34886_34947[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (24))){
var inst_34853 = (state_34879[(9)]);
var inst_34832 = (state_34879[(10)]);
var inst_34839 = (state_34879[(11)]);
var inst_34853__$1 = inst_34832.call(null,inst_34839);
var state_34879__$1 = (function (){var statearr_34887 = state_34879;
(statearr_34887[(9)] = inst_34853__$1);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34853__$1)){
var statearr_34888_34948 = state_34879__$1;
(statearr_34888_34948[(1)] = (29));

} else {
var statearr_34889_34949 = state_34879__$1;
(statearr_34889_34949[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (4))){
var inst_34800 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34800)){
var statearr_34890_34950 = state_34879__$1;
(statearr_34890_34950[(1)] = (8));

} else {
var statearr_34891_34951 = state_34879__$1;
(statearr_34891_34951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (15))){
var inst_34826 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34826)){
var statearr_34892_34952 = state_34879__$1;
(statearr_34892_34952[(1)] = (19));

} else {
var statearr_34893_34953 = state_34879__$1;
(statearr_34893_34953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (21))){
var inst_34831 = (state_34879[(12)]);
var inst_34831__$1 = (state_34879[(2)]);
var inst_34832 = cljs.core.get.call(null,inst_34831__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34833 = cljs.core.get.call(null,inst_34831__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34834 = cljs.core.get.call(null,inst_34831__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34879__$1 = (function (){var statearr_34894 = state_34879;
(statearr_34894[(12)] = inst_34831__$1);

(statearr_34894[(13)] = inst_34833);

(statearr_34894[(10)] = inst_34832);

return statearr_34894;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34879__$1,(22),inst_34834);
} else {
if((state_val_34880 === (31))){
var inst_34861 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34861)){
var statearr_34895_34954 = state_34879__$1;
(statearr_34895_34954[(1)] = (32));

} else {
var statearr_34896_34955 = state_34879__$1;
(statearr_34896_34955[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (32))){
var inst_34838 = (state_34879[(14)]);
var state_34879__$1 = state_34879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34879__$1,(35),out,inst_34838);
} else {
if((state_val_34880 === (33))){
var inst_34831 = (state_34879[(12)]);
var inst_34809 = inst_34831;
var state_34879__$1 = (function (){var statearr_34897 = state_34879;
(statearr_34897[(7)] = inst_34809);

return statearr_34897;
})();
var statearr_34898_34956 = state_34879__$1;
(statearr_34898_34956[(2)] = null);

(statearr_34898_34956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (13))){
var inst_34809 = (state_34879[(7)]);
var inst_34816 = inst_34809.cljs$lang$protocol_mask$partition0$;
var inst_34817 = (inst_34816 & (64));
var inst_34818 = inst_34809.cljs$core$ISeq$;
var inst_34819 = (inst_34817) || (inst_34818);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34819)){
var statearr_34899_34957 = state_34879__$1;
(statearr_34899_34957[(1)] = (16));

} else {
var statearr_34900_34958 = state_34879__$1;
(statearr_34900_34958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (22))){
var inst_34838 = (state_34879[(14)]);
var inst_34839 = (state_34879[(11)]);
var inst_34837 = (state_34879[(2)]);
var inst_34838__$1 = cljs.core.nth.call(null,inst_34837,(0),null);
var inst_34839__$1 = cljs.core.nth.call(null,inst_34837,(1),null);
var inst_34840 = (inst_34838__$1 == null);
var inst_34841 = cljs.core._EQ_.call(null,inst_34839__$1,change);
var inst_34842 = (inst_34840) || (inst_34841);
var state_34879__$1 = (function (){var statearr_34901 = state_34879;
(statearr_34901[(14)] = inst_34838__$1);

(statearr_34901[(11)] = inst_34839__$1);

return statearr_34901;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34902_34959 = state_34879__$1;
(statearr_34902_34959[(1)] = (23));

} else {
var statearr_34903_34960 = state_34879__$1;
(statearr_34903_34960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (36))){
var inst_34831 = (state_34879[(12)]);
var inst_34809 = inst_34831;
var state_34879__$1 = (function (){var statearr_34904 = state_34879;
(statearr_34904[(7)] = inst_34809);

return statearr_34904;
})();
var statearr_34905_34961 = state_34879__$1;
(statearr_34905_34961[(2)] = null);

(statearr_34905_34961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (29))){
var inst_34853 = (state_34879[(9)]);
var state_34879__$1 = state_34879;
var statearr_34906_34962 = state_34879__$1;
(statearr_34906_34962[(2)] = inst_34853);

(statearr_34906_34962[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (6))){
var state_34879__$1 = state_34879;
var statearr_34907_34963 = state_34879__$1;
(statearr_34907_34963[(2)] = false);

(statearr_34907_34963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (28))){
var inst_34849 = (state_34879[(2)]);
var inst_34850 = calc_state.call(null);
var inst_34809 = inst_34850;
var state_34879__$1 = (function (){var statearr_34908 = state_34879;
(statearr_34908[(15)] = inst_34849);

(statearr_34908[(7)] = inst_34809);

return statearr_34908;
})();
var statearr_34909_34964 = state_34879__$1;
(statearr_34909_34964[(2)] = null);

(statearr_34909_34964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (25))){
var inst_34875 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34910_34965 = state_34879__$1;
(statearr_34910_34965[(2)] = inst_34875);

(statearr_34910_34965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (34))){
var inst_34873 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34911_34966 = state_34879__$1;
(statearr_34911_34966[(2)] = inst_34873);

(statearr_34911_34966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (17))){
var state_34879__$1 = state_34879;
var statearr_34912_34967 = state_34879__$1;
(statearr_34912_34967[(2)] = false);

(statearr_34912_34967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (3))){
var state_34879__$1 = state_34879;
var statearr_34913_34968 = state_34879__$1;
(statearr_34913_34968[(2)] = false);

(statearr_34913_34968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (12))){
var inst_34877 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34879__$1,inst_34877);
} else {
if((state_val_34880 === (2))){
var inst_34785 = (state_34879[(8)]);
var inst_34790 = inst_34785.cljs$lang$protocol_mask$partition0$;
var inst_34791 = (inst_34790 & (64));
var inst_34792 = inst_34785.cljs$core$ISeq$;
var inst_34793 = (inst_34791) || (inst_34792);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34793)){
var statearr_34914_34969 = state_34879__$1;
(statearr_34914_34969[(1)] = (5));

} else {
var statearr_34915_34970 = state_34879__$1;
(statearr_34915_34970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (23))){
var inst_34838 = (state_34879[(14)]);
var inst_34844 = (inst_34838 == null);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34844)){
var statearr_34916_34971 = state_34879__$1;
(statearr_34916_34971[(1)] = (26));

} else {
var statearr_34917_34972 = state_34879__$1;
(statearr_34917_34972[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (35))){
var inst_34864 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
if(cljs.core.truth_(inst_34864)){
var statearr_34918_34973 = state_34879__$1;
(statearr_34918_34973[(1)] = (36));

} else {
var statearr_34919_34974 = state_34879__$1;
(statearr_34919_34974[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (19))){
var inst_34809 = (state_34879[(7)]);
var inst_34828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34809);
var state_34879__$1 = state_34879;
var statearr_34920_34975 = state_34879__$1;
(statearr_34920_34975[(2)] = inst_34828);

(statearr_34920_34975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (11))){
var inst_34809 = (state_34879[(7)]);
var inst_34813 = (inst_34809 == null);
var inst_34814 = cljs.core.not.call(null,inst_34813);
var state_34879__$1 = state_34879;
if(inst_34814){
var statearr_34921_34976 = state_34879__$1;
(statearr_34921_34976[(1)] = (13));

} else {
var statearr_34922_34977 = state_34879__$1;
(statearr_34922_34977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (9))){
var inst_34785 = (state_34879[(8)]);
var state_34879__$1 = state_34879;
var statearr_34923_34978 = state_34879__$1;
(statearr_34923_34978[(2)] = inst_34785);

(statearr_34923_34978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (5))){
var state_34879__$1 = state_34879;
var statearr_34924_34979 = state_34879__$1;
(statearr_34924_34979[(2)] = true);

(statearr_34924_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (14))){
var state_34879__$1 = state_34879;
var statearr_34925_34980 = state_34879__$1;
(statearr_34925_34980[(2)] = false);

(statearr_34925_34980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (26))){
var inst_34839 = (state_34879[(11)]);
var inst_34846 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34839);
var state_34879__$1 = state_34879;
var statearr_34926_34981 = state_34879__$1;
(statearr_34926_34981[(2)] = inst_34846);

(statearr_34926_34981[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (16))){
var state_34879__$1 = state_34879;
var statearr_34927_34982 = state_34879__$1;
(statearr_34927_34982[(2)] = true);

(statearr_34927_34982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (38))){
var inst_34869 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34928_34983 = state_34879__$1;
(statearr_34928_34983[(2)] = inst_34869);

(statearr_34928_34983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (30))){
var inst_34833 = (state_34879[(13)]);
var inst_34832 = (state_34879[(10)]);
var inst_34839 = (state_34879[(11)]);
var inst_34856 = cljs.core.empty_QMARK_.call(null,inst_34832);
var inst_34857 = inst_34833.call(null,inst_34839);
var inst_34858 = cljs.core.not.call(null,inst_34857);
var inst_34859 = (inst_34856) && (inst_34858);
var state_34879__$1 = state_34879;
var statearr_34929_34984 = state_34879__$1;
(statearr_34929_34984[(2)] = inst_34859);

(statearr_34929_34984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (10))){
var inst_34785 = (state_34879[(8)]);
var inst_34805 = (state_34879[(2)]);
var inst_34806 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34807 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34808 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34809 = inst_34785;
var state_34879__$1 = (function (){var statearr_34930 = state_34879;
(statearr_34930[(16)] = inst_34808);

(statearr_34930[(17)] = inst_34807);

(statearr_34930[(7)] = inst_34809);

(statearr_34930[(18)] = inst_34806);

return statearr_34930;
})();
var statearr_34931_34985 = state_34879__$1;
(statearr_34931_34985[(2)] = null);

(statearr_34931_34985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (18))){
var inst_34823 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34932_34986 = state_34879__$1;
(statearr_34932_34986[(2)] = inst_34823);

(statearr_34932_34986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (37))){
var state_34879__$1 = state_34879;
var statearr_34933_34987 = state_34879__$1;
(statearr_34933_34987[(2)] = null);

(statearr_34933_34987[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34880 === (8))){
var inst_34785 = (state_34879[(8)]);
var inst_34802 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34785);
var state_34879__$1 = state_34879;
var statearr_34934_34988 = state_34879__$1;
(statearr_34934_34988[(2)] = inst_34802);

(statearr_34934_34988[(1)] = (10));


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
});})(c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15598__auto__,c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15599__auto__ = null;
var cljs$core$async$mix_$_state_machine__15599__auto____0 = (function (){
var statearr_34938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34938[(0)] = cljs$core$async$mix_$_state_machine__15599__auto__);

(statearr_34938[(1)] = (1));

return statearr_34938;
});
var cljs$core$async$mix_$_state_machine__15599__auto____1 = (function (state_34879){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_34879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e34939){if((e34939 instanceof Object)){
var ex__15602__auto__ = e34939;
var statearr_34940_34989 = state_34879;
(statearr_34940_34989[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34990 = state_34879;
state_34879 = G__34990;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15599__auto__ = function(state_34879){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15599__auto____1.call(this,state_34879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15599__auto____0;
cljs$core$async$mix_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15599__auto____1;
return cljs$core$async$mix_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15621__auto__ = (function (){var statearr_34941 = f__15620__auto__.call(null);
(statearr_34941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___34942);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___34942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13842__auto__ = (((p == null))?null:p);
var m__13843__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__13843__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13842__auto__ = (((p == null))?null:p);
var m__13843__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,p,v,ch);
} else {
var m__13843__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34991 = [];
var len__14245__auto___34994 = arguments.length;
var i__14246__auto___34995 = (0);
while(true){
if((i__14246__auto___34995 < len__14245__auto___34994)){
args34991.push((arguments[i__14246__auto___34995]));

var G__34996 = (i__14246__auto___34995 + (1));
i__14246__auto___34995 = G__34996;
continue;
} else {
}
break;
}

var G__34993 = args34991.length;
switch (G__34993) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34991.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13842__auto__ = (((p == null))?null:p);
var m__13843__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,p);
} else {
var m__13843__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13842__auto__ = (((p == null))?null:p);
var m__13843__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13842__auto__)]);
if(!((m__13843__auto__ == null))){
return m__13843__auto__.call(null,p,v);
} else {
var m__13843__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__13843__auto____$1 == null))){
return m__13843__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34999 = [];
var len__14245__auto___35124 = arguments.length;
var i__14246__auto___35125 = (0);
while(true){
if((i__14246__auto___35125 < len__14245__auto___35124)){
args34999.push((arguments[i__14246__auto___35125]));

var G__35126 = (i__14246__auto___35125 + (1));
i__14246__auto___35125 = G__35126;
continue;
} else {
}
break;
}

var G__35001 = args34999.length;
switch (G__35001) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34999.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__13187__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13187__auto__,mults){
return (function (p1__34998_SHARP_){
if(cljs.core.truth_(p1__34998_SHARP_.call(null,topic))){
return p1__34998_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34998_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13187__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35002 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35003){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35003 = meta35003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35004,meta35003__$1){
var self__ = this;
var _35004__$1 = this;
return (new cljs.core.async.t_cljs$core$async35002(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35003__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35004){
var self__ = this;
var _35004__$1 = this;
return self__.meta35003;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35003","meta35003",-1171844725,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35002";

cljs.core.async.t_cljs$core$async35002.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async35002");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35002 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35002(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35003){
return (new cljs.core.async.t_cljs$core$async35002(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35003));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35002(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15619__auto___35128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35128,mults,ensure_mult,p){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35128,mults,ensure_mult,p){
return (function (state_35076){
var state_val_35077 = (state_35076[(1)]);
if((state_val_35077 === (7))){
var inst_35072 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35078_35129 = state_35076__$1;
(statearr_35078_35129[(2)] = inst_35072);

(statearr_35078_35129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (20))){
var state_35076__$1 = state_35076;
var statearr_35079_35130 = state_35076__$1;
(statearr_35079_35130[(2)] = null);

(statearr_35079_35130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (1))){
var state_35076__$1 = state_35076;
var statearr_35080_35131 = state_35076__$1;
(statearr_35080_35131[(2)] = null);

(statearr_35080_35131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (24))){
var inst_35055 = (state_35076[(7)]);
var inst_35064 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35055);
var state_35076__$1 = state_35076;
var statearr_35081_35132 = state_35076__$1;
(statearr_35081_35132[(2)] = inst_35064);

(statearr_35081_35132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (4))){
var inst_35007 = (state_35076[(8)]);
var inst_35007__$1 = (state_35076[(2)]);
var inst_35008 = (inst_35007__$1 == null);
var state_35076__$1 = (function (){var statearr_35082 = state_35076;
(statearr_35082[(8)] = inst_35007__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_35008)){
var statearr_35083_35133 = state_35076__$1;
(statearr_35083_35133[(1)] = (5));

} else {
var statearr_35084_35134 = state_35076__$1;
(statearr_35084_35134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (15))){
var inst_35049 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35085_35135 = state_35076__$1;
(statearr_35085_35135[(2)] = inst_35049);

(statearr_35085_35135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (21))){
var inst_35069 = (state_35076[(2)]);
var state_35076__$1 = (function (){var statearr_35086 = state_35076;
(statearr_35086[(9)] = inst_35069);

return statearr_35086;
})();
var statearr_35087_35136 = state_35076__$1;
(statearr_35087_35136[(2)] = null);

(statearr_35087_35136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (13))){
var inst_35031 = (state_35076[(10)]);
var inst_35033 = cljs.core.chunked_seq_QMARK_.call(null,inst_35031);
var state_35076__$1 = state_35076;
if(inst_35033){
var statearr_35088_35137 = state_35076__$1;
(statearr_35088_35137[(1)] = (16));

} else {
var statearr_35089_35138 = state_35076__$1;
(statearr_35089_35138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (22))){
var inst_35061 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35061)){
var statearr_35090_35139 = state_35076__$1;
(statearr_35090_35139[(1)] = (23));

} else {
var statearr_35091_35140 = state_35076__$1;
(statearr_35091_35140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (6))){
var inst_35057 = (state_35076[(11)]);
var inst_35055 = (state_35076[(7)]);
var inst_35007 = (state_35076[(8)]);
var inst_35055__$1 = topic_fn.call(null,inst_35007);
var inst_35056 = cljs.core.deref.call(null,mults);
var inst_35057__$1 = cljs.core.get.call(null,inst_35056,inst_35055__$1);
var state_35076__$1 = (function (){var statearr_35092 = state_35076;
(statearr_35092[(11)] = inst_35057__$1);

(statearr_35092[(7)] = inst_35055__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_35057__$1)){
var statearr_35093_35141 = state_35076__$1;
(statearr_35093_35141[(1)] = (19));

} else {
var statearr_35094_35142 = state_35076__$1;
(statearr_35094_35142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (25))){
var inst_35066 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35095_35143 = state_35076__$1;
(statearr_35095_35143[(2)] = inst_35066);

(statearr_35095_35143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (17))){
var inst_35031 = (state_35076[(10)]);
var inst_35040 = cljs.core.first.call(null,inst_35031);
var inst_35041 = cljs.core.async.muxch_STAR_.call(null,inst_35040);
var inst_35042 = cljs.core.async.close_BANG_.call(null,inst_35041);
var inst_35043 = cljs.core.next.call(null,inst_35031);
var inst_35017 = inst_35043;
var inst_35018 = null;
var inst_35019 = (0);
var inst_35020 = (0);
var state_35076__$1 = (function (){var statearr_35096 = state_35076;
(statearr_35096[(12)] = inst_35018);

(statearr_35096[(13)] = inst_35042);

(statearr_35096[(14)] = inst_35017);

(statearr_35096[(15)] = inst_35020);

(statearr_35096[(16)] = inst_35019);

return statearr_35096;
})();
var statearr_35097_35144 = state_35076__$1;
(statearr_35097_35144[(2)] = null);

(statearr_35097_35144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (3))){
var inst_35074 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35076__$1,inst_35074);
} else {
if((state_val_35077 === (12))){
var inst_35051 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35098_35145 = state_35076__$1;
(statearr_35098_35145[(2)] = inst_35051);

(statearr_35098_35145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (2))){
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35076__$1,(4),ch);
} else {
if((state_val_35077 === (23))){
var state_35076__$1 = state_35076;
var statearr_35099_35146 = state_35076__$1;
(statearr_35099_35146[(2)] = null);

(statearr_35099_35146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (19))){
var inst_35057 = (state_35076[(11)]);
var inst_35007 = (state_35076[(8)]);
var inst_35059 = cljs.core.async.muxch_STAR_.call(null,inst_35057);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35076__$1,(22),inst_35059,inst_35007);
} else {
if((state_val_35077 === (11))){
var inst_35017 = (state_35076[(14)]);
var inst_35031 = (state_35076[(10)]);
var inst_35031__$1 = cljs.core.seq.call(null,inst_35017);
var state_35076__$1 = (function (){var statearr_35100 = state_35076;
(statearr_35100[(10)] = inst_35031__$1);

return statearr_35100;
})();
if(inst_35031__$1){
var statearr_35101_35147 = state_35076__$1;
(statearr_35101_35147[(1)] = (13));

} else {
var statearr_35102_35148 = state_35076__$1;
(statearr_35102_35148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (9))){
var inst_35053 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35103_35149 = state_35076__$1;
(statearr_35103_35149[(2)] = inst_35053);

(statearr_35103_35149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (5))){
var inst_35014 = cljs.core.deref.call(null,mults);
var inst_35015 = cljs.core.vals.call(null,inst_35014);
var inst_35016 = cljs.core.seq.call(null,inst_35015);
var inst_35017 = inst_35016;
var inst_35018 = null;
var inst_35019 = (0);
var inst_35020 = (0);
var state_35076__$1 = (function (){var statearr_35104 = state_35076;
(statearr_35104[(12)] = inst_35018);

(statearr_35104[(14)] = inst_35017);

(statearr_35104[(15)] = inst_35020);

(statearr_35104[(16)] = inst_35019);

return statearr_35104;
})();
var statearr_35105_35150 = state_35076__$1;
(statearr_35105_35150[(2)] = null);

(statearr_35105_35150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (14))){
var state_35076__$1 = state_35076;
var statearr_35109_35151 = state_35076__$1;
(statearr_35109_35151[(2)] = null);

(statearr_35109_35151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (16))){
var inst_35031 = (state_35076[(10)]);
var inst_35035 = cljs.core.chunk_first.call(null,inst_35031);
var inst_35036 = cljs.core.chunk_rest.call(null,inst_35031);
var inst_35037 = cljs.core.count.call(null,inst_35035);
var inst_35017 = inst_35036;
var inst_35018 = inst_35035;
var inst_35019 = inst_35037;
var inst_35020 = (0);
var state_35076__$1 = (function (){var statearr_35110 = state_35076;
(statearr_35110[(12)] = inst_35018);

(statearr_35110[(14)] = inst_35017);

(statearr_35110[(15)] = inst_35020);

(statearr_35110[(16)] = inst_35019);

return statearr_35110;
})();
var statearr_35111_35152 = state_35076__$1;
(statearr_35111_35152[(2)] = null);

(statearr_35111_35152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (10))){
var inst_35018 = (state_35076[(12)]);
var inst_35017 = (state_35076[(14)]);
var inst_35020 = (state_35076[(15)]);
var inst_35019 = (state_35076[(16)]);
var inst_35025 = cljs.core._nth.call(null,inst_35018,inst_35020);
var inst_35026 = cljs.core.async.muxch_STAR_.call(null,inst_35025);
var inst_35027 = cljs.core.async.close_BANG_.call(null,inst_35026);
var inst_35028 = (inst_35020 + (1));
var tmp35106 = inst_35018;
var tmp35107 = inst_35017;
var tmp35108 = inst_35019;
var inst_35017__$1 = tmp35107;
var inst_35018__$1 = tmp35106;
var inst_35019__$1 = tmp35108;
var inst_35020__$1 = inst_35028;
var state_35076__$1 = (function (){var statearr_35112 = state_35076;
(statearr_35112[(12)] = inst_35018__$1);

(statearr_35112[(17)] = inst_35027);

(statearr_35112[(14)] = inst_35017__$1);

(statearr_35112[(15)] = inst_35020__$1);

(statearr_35112[(16)] = inst_35019__$1);

return statearr_35112;
})();
var statearr_35113_35153 = state_35076__$1;
(statearr_35113_35153[(2)] = null);

(statearr_35113_35153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (18))){
var inst_35046 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35114_35154 = state_35076__$1;
(statearr_35114_35154[(2)] = inst_35046);

(statearr_35114_35154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (8))){
var inst_35020 = (state_35076[(15)]);
var inst_35019 = (state_35076[(16)]);
var inst_35022 = (inst_35020 < inst_35019);
var inst_35023 = inst_35022;
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35023)){
var statearr_35115_35155 = state_35076__$1;
(statearr_35115_35155[(1)] = (10));

} else {
var statearr_35116_35156 = state_35076__$1;
(statearr_35116_35156[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__15619__auto___35128,mults,ensure_mult,p))
;
return ((function (switch__15598__auto__,c__15619__auto___35128,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35120[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35120[(1)] = (1));

return statearr_35120;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35076){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35121){if((e35121 instanceof Object)){
var ex__15602__auto__ = e35121;
var statearr_35122_35157 = state_35076;
(statearr_35122_35157[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35158 = state_35076;
state_35076 = G__35158;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35128,mults,ensure_mult,p))
})();
var state__15621__auto__ = (function (){var statearr_35123 = f__15620__auto__.call(null);
(statearr_35123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35128);

return statearr_35123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35128,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35159 = [];
var len__14245__auto___35162 = arguments.length;
var i__14246__auto___35163 = (0);
while(true){
if((i__14246__auto___35163 < len__14245__auto___35162)){
args35159.push((arguments[i__14246__auto___35163]));

var G__35164 = (i__14246__auto___35163 + (1));
i__14246__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var G__35161 = args35159.length;
switch (G__35161) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35159.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35166 = [];
var len__14245__auto___35169 = arguments.length;
var i__14246__auto___35170 = (0);
while(true){
if((i__14246__auto___35170 < len__14245__auto___35169)){
args35166.push((arguments[i__14246__auto___35170]));

var G__35171 = (i__14246__auto___35170 + (1));
i__14246__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var G__35168 = args35166.length;
switch (G__35168) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35166.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35173 = [];
var len__14245__auto___35244 = arguments.length;
var i__14246__auto___35245 = (0);
while(true){
if((i__14246__auto___35245 < len__14245__auto___35244)){
args35173.push((arguments[i__14246__auto___35245]));

var G__35246 = (i__14246__auto___35245 + (1));
i__14246__auto___35245 = G__35246;
continue;
} else {
}
break;
}

var G__35175 = args35173.length;
switch (G__35175) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35173.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15619__auto___35248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35214){
var state_val_35215 = (state_35214[(1)]);
if((state_val_35215 === (7))){
var state_35214__$1 = state_35214;
var statearr_35216_35249 = state_35214__$1;
(statearr_35216_35249[(2)] = null);

(statearr_35216_35249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (1))){
var state_35214__$1 = state_35214;
var statearr_35217_35250 = state_35214__$1;
(statearr_35217_35250[(2)] = null);

(statearr_35217_35250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (4))){
var inst_35178 = (state_35214[(7)]);
var inst_35180 = (inst_35178 < cnt);
var state_35214__$1 = state_35214;
if(cljs.core.truth_(inst_35180)){
var statearr_35218_35251 = state_35214__$1;
(statearr_35218_35251[(1)] = (6));

} else {
var statearr_35219_35252 = state_35214__$1;
(statearr_35219_35252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (15))){
var inst_35210 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35220_35253 = state_35214__$1;
(statearr_35220_35253[(2)] = inst_35210);

(statearr_35220_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (13))){
var inst_35203 = cljs.core.async.close_BANG_.call(null,out);
var state_35214__$1 = state_35214;
var statearr_35221_35254 = state_35214__$1;
(statearr_35221_35254[(2)] = inst_35203);

(statearr_35221_35254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (6))){
var state_35214__$1 = state_35214;
var statearr_35222_35255 = state_35214__$1;
(statearr_35222_35255[(2)] = null);

(statearr_35222_35255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (3))){
var inst_35212 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35214__$1,inst_35212);
} else {
if((state_val_35215 === (12))){
var inst_35200 = (state_35214[(8)]);
var inst_35200__$1 = (state_35214[(2)]);
var inst_35201 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35200__$1);
var state_35214__$1 = (function (){var statearr_35223 = state_35214;
(statearr_35223[(8)] = inst_35200__$1);

return statearr_35223;
})();
if(cljs.core.truth_(inst_35201)){
var statearr_35224_35256 = state_35214__$1;
(statearr_35224_35256[(1)] = (13));

} else {
var statearr_35225_35257 = state_35214__$1;
(statearr_35225_35257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (2))){
var inst_35177 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35178 = (0);
var state_35214__$1 = (function (){var statearr_35226 = state_35214;
(statearr_35226[(9)] = inst_35177);

(statearr_35226[(7)] = inst_35178);

return statearr_35226;
})();
var statearr_35227_35258 = state_35214__$1;
(statearr_35227_35258[(2)] = null);

(statearr_35227_35258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (11))){
var inst_35178 = (state_35214[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35214,(10),Object,null,(9));
var inst_35187 = chs__$1.call(null,inst_35178);
var inst_35188 = done.call(null,inst_35178);
var inst_35189 = cljs.core.async.take_BANG_.call(null,inst_35187,inst_35188);
var state_35214__$1 = state_35214;
var statearr_35228_35259 = state_35214__$1;
(statearr_35228_35259[(2)] = inst_35189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35214__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (9))){
var inst_35178 = (state_35214[(7)]);
var inst_35191 = (state_35214[(2)]);
var inst_35192 = (inst_35178 + (1));
var inst_35178__$1 = inst_35192;
var state_35214__$1 = (function (){var statearr_35229 = state_35214;
(statearr_35229[(10)] = inst_35191);

(statearr_35229[(7)] = inst_35178__$1);

return statearr_35229;
})();
var statearr_35230_35260 = state_35214__$1;
(statearr_35230_35260[(2)] = null);

(statearr_35230_35260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (5))){
var inst_35198 = (state_35214[(2)]);
var state_35214__$1 = (function (){var statearr_35231 = state_35214;
(statearr_35231[(11)] = inst_35198);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35214__$1,(12),dchan);
} else {
if((state_val_35215 === (14))){
var inst_35200 = (state_35214[(8)]);
var inst_35205 = cljs.core.apply.call(null,f,inst_35200);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35214__$1,(16),out,inst_35205);
} else {
if((state_val_35215 === (16))){
var inst_35207 = (state_35214[(2)]);
var state_35214__$1 = (function (){var statearr_35232 = state_35214;
(statearr_35232[(12)] = inst_35207);

return statearr_35232;
})();
var statearr_35233_35261 = state_35214__$1;
(statearr_35233_35261[(2)] = null);

(statearr_35233_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (10))){
var inst_35182 = (state_35214[(2)]);
var inst_35183 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35214__$1 = (function (){var statearr_35234 = state_35214;
(statearr_35234[(13)] = inst_35182);

return statearr_35234;
})();
var statearr_35235_35262 = state_35214__$1;
(statearr_35235_35262[(2)] = inst_35183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35214__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (8))){
var inst_35196 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35236_35263 = state_35214__$1;
(statearr_35236_35263[(2)] = inst_35196);

(statearr_35236_35263[(1)] = (5));


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
});})(c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15598__auto__,c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35240[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35240[(1)] = (1));

return statearr_35240;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35214){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35241){if((e35241 instanceof Object)){
var ex__15602__auto__ = e35241;
var statearr_35242_35264 = state_35214;
(statearr_35242_35264[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35265 = state_35214;
state_35214 = G__35265;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15621__auto__ = (function (){var statearr_35243 = f__15620__auto__.call(null);
(statearr_35243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35248);

return statearr_35243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35248,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35267 = [];
var len__14245__auto___35323 = arguments.length;
var i__14246__auto___35324 = (0);
while(true){
if((i__14246__auto___35324 < len__14245__auto___35323)){
args35267.push((arguments[i__14246__auto___35324]));

var G__35325 = (i__14246__auto___35324 + (1));
i__14246__auto___35324 = G__35325;
continue;
} else {
}
break;
}

var G__35269 = args35267.length;
switch (G__35269) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35267.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35327,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35327,out){
return (function (state_35299){
var state_val_35300 = (state_35299[(1)]);
if((state_val_35300 === (7))){
var inst_35278 = (state_35299[(7)]);
var inst_35279 = (state_35299[(8)]);
var inst_35278__$1 = (state_35299[(2)]);
var inst_35279__$1 = cljs.core.nth.call(null,inst_35278__$1,(0),null);
var inst_35280 = cljs.core.nth.call(null,inst_35278__$1,(1),null);
var inst_35281 = (inst_35279__$1 == null);
var state_35299__$1 = (function (){var statearr_35301 = state_35299;
(statearr_35301[(7)] = inst_35278__$1);

(statearr_35301[(9)] = inst_35280);

(statearr_35301[(8)] = inst_35279__$1);

return statearr_35301;
})();
if(cljs.core.truth_(inst_35281)){
var statearr_35302_35328 = state_35299__$1;
(statearr_35302_35328[(1)] = (8));

} else {
var statearr_35303_35329 = state_35299__$1;
(statearr_35303_35329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (1))){
var inst_35270 = cljs.core.vec.call(null,chs);
var inst_35271 = inst_35270;
var state_35299__$1 = (function (){var statearr_35304 = state_35299;
(statearr_35304[(10)] = inst_35271);

return statearr_35304;
})();
var statearr_35305_35330 = state_35299__$1;
(statearr_35305_35330[(2)] = null);

(statearr_35305_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (4))){
var inst_35271 = (state_35299[(10)]);
var state_35299__$1 = state_35299;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35299__$1,(7),inst_35271);
} else {
if((state_val_35300 === (6))){
var inst_35295 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
var statearr_35306_35331 = state_35299__$1;
(statearr_35306_35331[(2)] = inst_35295);

(statearr_35306_35331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (3))){
var inst_35297 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35299__$1,inst_35297);
} else {
if((state_val_35300 === (2))){
var inst_35271 = (state_35299[(10)]);
var inst_35273 = cljs.core.count.call(null,inst_35271);
var inst_35274 = (inst_35273 > (0));
var state_35299__$1 = state_35299;
if(cljs.core.truth_(inst_35274)){
var statearr_35308_35332 = state_35299__$1;
(statearr_35308_35332[(1)] = (4));

} else {
var statearr_35309_35333 = state_35299__$1;
(statearr_35309_35333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (11))){
var inst_35271 = (state_35299[(10)]);
var inst_35288 = (state_35299[(2)]);
var tmp35307 = inst_35271;
var inst_35271__$1 = tmp35307;
var state_35299__$1 = (function (){var statearr_35310 = state_35299;
(statearr_35310[(11)] = inst_35288);

(statearr_35310[(10)] = inst_35271__$1);

return statearr_35310;
})();
var statearr_35311_35334 = state_35299__$1;
(statearr_35311_35334[(2)] = null);

(statearr_35311_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (9))){
var inst_35279 = (state_35299[(8)]);
var state_35299__$1 = state_35299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35299__$1,(11),out,inst_35279);
} else {
if((state_val_35300 === (5))){
var inst_35293 = cljs.core.async.close_BANG_.call(null,out);
var state_35299__$1 = state_35299;
var statearr_35312_35335 = state_35299__$1;
(statearr_35312_35335[(2)] = inst_35293);

(statearr_35312_35335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (10))){
var inst_35291 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
var statearr_35313_35336 = state_35299__$1;
(statearr_35313_35336[(2)] = inst_35291);

(statearr_35313_35336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (8))){
var inst_35278 = (state_35299[(7)]);
var inst_35280 = (state_35299[(9)]);
var inst_35279 = (state_35299[(8)]);
var inst_35271 = (state_35299[(10)]);
var inst_35283 = (function (){var cs = inst_35271;
var vec__35276 = inst_35278;
var v = inst_35279;
var c = inst_35280;
return ((function (cs,vec__35276,v,c,inst_35278,inst_35280,inst_35279,inst_35271,state_val_35300,c__15619__auto___35327,out){
return (function (p1__35266_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35266_SHARP_);
});
;})(cs,vec__35276,v,c,inst_35278,inst_35280,inst_35279,inst_35271,state_val_35300,c__15619__auto___35327,out))
})();
var inst_35284 = cljs.core.filterv.call(null,inst_35283,inst_35271);
var inst_35271__$1 = inst_35284;
var state_35299__$1 = (function (){var statearr_35314 = state_35299;
(statearr_35314[(10)] = inst_35271__$1);

return statearr_35314;
})();
var statearr_35315_35337 = state_35299__$1;
(statearr_35315_35337[(2)] = null);

(statearr_35315_35337[(1)] = (2));


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
});})(c__15619__auto___35327,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35327,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35319[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35319[(1)] = (1));

return statearr_35319;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35299){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35320){if((e35320 instanceof Object)){
var ex__15602__auto__ = e35320;
var statearr_35321_35338 = state_35299;
(statearr_35321_35338[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35339 = state_35299;
state_35299 = G__35339;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35327,out))
})();
var state__15621__auto__ = (function (){var statearr_35322 = f__15620__auto__.call(null);
(statearr_35322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35327);

return statearr_35322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35327,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35340 = [];
var len__14245__auto___35389 = arguments.length;
var i__14246__auto___35390 = (0);
while(true){
if((i__14246__auto___35390 < len__14245__auto___35389)){
args35340.push((arguments[i__14246__auto___35390]));

var G__35391 = (i__14246__auto___35390 + (1));
i__14246__auto___35390 = G__35391;
continue;
} else {
}
break;
}

var G__35342 = args35340.length;
switch (G__35342) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35340.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35393,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35393,out){
return (function (state_35366){
var state_val_35367 = (state_35366[(1)]);
if((state_val_35367 === (7))){
var inst_35348 = (state_35366[(7)]);
var inst_35348__$1 = (state_35366[(2)]);
var inst_35349 = (inst_35348__$1 == null);
var inst_35350 = cljs.core.not.call(null,inst_35349);
var state_35366__$1 = (function (){var statearr_35368 = state_35366;
(statearr_35368[(7)] = inst_35348__$1);

return statearr_35368;
})();
if(inst_35350){
var statearr_35369_35394 = state_35366__$1;
(statearr_35369_35394[(1)] = (8));

} else {
var statearr_35370_35395 = state_35366__$1;
(statearr_35370_35395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (1))){
var inst_35343 = (0);
var state_35366__$1 = (function (){var statearr_35371 = state_35366;
(statearr_35371[(8)] = inst_35343);

return statearr_35371;
})();
var statearr_35372_35396 = state_35366__$1;
(statearr_35372_35396[(2)] = null);

(statearr_35372_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (4))){
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35366__$1,(7),ch);
} else {
if((state_val_35367 === (6))){
var inst_35361 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35373_35397 = state_35366__$1;
(statearr_35373_35397[(2)] = inst_35361);

(statearr_35373_35397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (3))){
var inst_35363 = (state_35366[(2)]);
var inst_35364 = cljs.core.async.close_BANG_.call(null,out);
var state_35366__$1 = (function (){var statearr_35374 = state_35366;
(statearr_35374[(9)] = inst_35363);

return statearr_35374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35366__$1,inst_35364);
} else {
if((state_val_35367 === (2))){
var inst_35343 = (state_35366[(8)]);
var inst_35345 = (inst_35343 < n);
var state_35366__$1 = state_35366;
if(cljs.core.truth_(inst_35345)){
var statearr_35375_35398 = state_35366__$1;
(statearr_35375_35398[(1)] = (4));

} else {
var statearr_35376_35399 = state_35366__$1;
(statearr_35376_35399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (11))){
var inst_35343 = (state_35366[(8)]);
var inst_35353 = (state_35366[(2)]);
var inst_35354 = (inst_35343 + (1));
var inst_35343__$1 = inst_35354;
var state_35366__$1 = (function (){var statearr_35377 = state_35366;
(statearr_35377[(8)] = inst_35343__$1);

(statearr_35377[(10)] = inst_35353);

return statearr_35377;
})();
var statearr_35378_35400 = state_35366__$1;
(statearr_35378_35400[(2)] = null);

(statearr_35378_35400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (9))){
var state_35366__$1 = state_35366;
var statearr_35379_35401 = state_35366__$1;
(statearr_35379_35401[(2)] = null);

(statearr_35379_35401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (5))){
var state_35366__$1 = state_35366;
var statearr_35380_35402 = state_35366__$1;
(statearr_35380_35402[(2)] = null);

(statearr_35380_35402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (10))){
var inst_35358 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35381_35403 = state_35366__$1;
(statearr_35381_35403[(2)] = inst_35358);

(statearr_35381_35403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (8))){
var inst_35348 = (state_35366[(7)]);
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35366__$1,(11),out,inst_35348);
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
});})(c__15619__auto___35393,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35393,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35385[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35385[(1)] = (1));

return statearr_35385;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35366){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35386){if((e35386 instanceof Object)){
var ex__15602__auto__ = e35386;
var statearr_35387_35404 = state_35366;
(statearr_35387_35404[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35405 = state_35366;
state_35366 = G__35405;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35393,out))
})();
var state__15621__auto__ = (function (){var statearr_35388 = f__15620__auto__.call(null);
(statearr_35388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35393);

return statearr_35388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35393,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35413 = (function (map_LT_,f,ch,meta35414){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35414 = meta35414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35415,meta35414__$1){
var self__ = this;
var _35415__$1 = this;
return (new cljs.core.async.t_cljs$core$async35413(self__.map_LT_,self__.f,self__.ch,meta35414__$1));
});

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35415){
var self__ = this;
var _35415__$1 = this;
return self__.meta35414;
});

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35416 = (function (map_LT_,f,ch,meta35414,_,fn1,meta35417){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35414 = meta35414;
this._ = _;
this.fn1 = fn1;
this.meta35417 = meta35417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35418,meta35417__$1){
var self__ = this;
var _35418__$1 = this;
return (new cljs.core.async.t_cljs$core$async35416(self__.map_LT_,self__.f,self__.ch,self__.meta35414,self__._,self__.fn1,meta35417__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35418){
var self__ = this;
var _35418__$1 = this;
return self__.meta35417;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35406_SHARP_){
return f1.call(null,(((p1__35406_SHARP_ == null))?null:self__.f.call(null,p1__35406_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35414","meta35414",-2054366535,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35413","cljs.core.async/t_cljs$core$async35413",-2054276797,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35417","meta35417",1393076005,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35416";

cljs.core.async.t_cljs$core$async35416.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async35416");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35416 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35416(map_LT___$1,f__$1,ch__$1,meta35414__$1,___$2,fn1__$1,meta35417){
return (new cljs.core.async.t_cljs$core$async35416(map_LT___$1,f__$1,ch__$1,meta35414__$1,___$2,fn1__$1,meta35417));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35416(self__.map_LT_,self__.f,self__.ch,self__.meta35414,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13175__auto__ = ret;
if(cljs.core.truth_(and__13175__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13175__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35414","meta35414",-2054366535,null)], null);
});

cljs.core.async.t_cljs$core$async35413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35413";

cljs.core.async.t_cljs$core$async35413.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async35413");
});

cljs.core.async.__GT_t_cljs$core$async35413 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35413(map_LT___$1,f__$1,ch__$1,meta35414){
return (new cljs.core.async.t_cljs$core$async35413(map_LT___$1,f__$1,ch__$1,meta35414));
});

}

return (new cljs.core.async.t_cljs$core$async35413(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35422 = (function (map_GT_,f,ch,meta35423){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35423 = meta35423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35424,meta35423__$1){
var self__ = this;
var _35424__$1 = this;
return (new cljs.core.async.t_cljs$core$async35422(self__.map_GT_,self__.f,self__.ch,meta35423__$1));
});

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35424){
var self__ = this;
var _35424__$1 = this;
return self__.meta35423;
});

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35423","meta35423",476374285,null)], null);
});

cljs.core.async.t_cljs$core$async35422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35422";

cljs.core.async.t_cljs$core$async35422.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async35422");
});

cljs.core.async.__GT_t_cljs$core$async35422 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35422(map_GT___$1,f__$1,ch__$1,meta35423){
return (new cljs.core.async.t_cljs$core$async35422(map_GT___$1,f__$1,ch__$1,meta35423));
});

}

return (new cljs.core.async.t_cljs$core$async35422(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35428 = (function (filter_GT_,p,ch,meta35429){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35429 = meta35429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35430,meta35429__$1){
var self__ = this;
var _35430__$1 = this;
return (new cljs.core.async.t_cljs$core$async35428(self__.filter_GT_,self__.p,self__.ch,meta35429__$1));
});

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35430){
var self__ = this;
var _35430__$1 = this;
return self__.meta35429;
});

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35429","meta35429",685283799,null)], null);
});

cljs.core.async.t_cljs$core$async35428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35428";

cljs.core.async.t_cljs$core$async35428.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async35428");
});

cljs.core.async.__GT_t_cljs$core$async35428 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35428(filter_GT___$1,p__$1,ch__$1,meta35429){
return (new cljs.core.async.t_cljs$core$async35428(filter_GT___$1,p__$1,ch__$1,meta35429));
});

}

return (new cljs.core.async.t_cljs$core$async35428(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35431 = [];
var len__14245__auto___35475 = arguments.length;
var i__14246__auto___35476 = (0);
while(true){
if((i__14246__auto___35476 < len__14245__auto___35475)){
args35431.push((arguments[i__14246__auto___35476]));

var G__35477 = (i__14246__auto___35476 + (1));
i__14246__auto___35476 = G__35477;
continue;
} else {
}
break;
}

var G__35433 = args35431.length;
switch (G__35433) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35431.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35479,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35479,out){
return (function (state_35454){
var state_val_35455 = (state_35454[(1)]);
if((state_val_35455 === (7))){
var inst_35450 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35456_35480 = state_35454__$1;
(statearr_35456_35480[(2)] = inst_35450);

(statearr_35456_35480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (1))){
var state_35454__$1 = state_35454;
var statearr_35457_35481 = state_35454__$1;
(statearr_35457_35481[(2)] = null);

(statearr_35457_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (4))){
var inst_35436 = (state_35454[(7)]);
var inst_35436__$1 = (state_35454[(2)]);
var inst_35437 = (inst_35436__$1 == null);
var state_35454__$1 = (function (){var statearr_35458 = state_35454;
(statearr_35458[(7)] = inst_35436__$1);

return statearr_35458;
})();
if(cljs.core.truth_(inst_35437)){
var statearr_35459_35482 = state_35454__$1;
(statearr_35459_35482[(1)] = (5));

} else {
var statearr_35460_35483 = state_35454__$1;
(statearr_35460_35483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (6))){
var inst_35436 = (state_35454[(7)]);
var inst_35441 = p.call(null,inst_35436);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35441)){
var statearr_35461_35484 = state_35454__$1;
(statearr_35461_35484[(1)] = (8));

} else {
var statearr_35462_35485 = state_35454__$1;
(statearr_35462_35485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (3))){
var inst_35452 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35454__$1,inst_35452);
} else {
if((state_val_35455 === (2))){
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35454__$1,(4),ch);
} else {
if((state_val_35455 === (11))){
var inst_35444 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35463_35486 = state_35454__$1;
(statearr_35463_35486[(2)] = inst_35444);

(statearr_35463_35486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (9))){
var state_35454__$1 = state_35454;
var statearr_35464_35487 = state_35454__$1;
(statearr_35464_35487[(2)] = null);

(statearr_35464_35487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (5))){
var inst_35439 = cljs.core.async.close_BANG_.call(null,out);
var state_35454__$1 = state_35454;
var statearr_35465_35488 = state_35454__$1;
(statearr_35465_35488[(2)] = inst_35439);

(statearr_35465_35488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (10))){
var inst_35447 = (state_35454[(2)]);
var state_35454__$1 = (function (){var statearr_35466 = state_35454;
(statearr_35466[(8)] = inst_35447);

return statearr_35466;
})();
var statearr_35467_35489 = state_35454__$1;
(statearr_35467_35489[(2)] = null);

(statearr_35467_35489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (8))){
var inst_35436 = (state_35454[(7)]);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35454__$1,(11),out,inst_35436);
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
});})(c__15619__auto___35479,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35479,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35471 = [null,null,null,null,null,null,null,null,null];
(statearr_35471[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35471[(1)] = (1));

return statearr_35471;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35454){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35472){if((e35472 instanceof Object)){
var ex__15602__auto__ = e35472;
var statearr_35473_35490 = state_35454;
(statearr_35473_35490[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35491 = state_35454;
state_35454 = G__35491;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35479,out))
})();
var state__15621__auto__ = (function (){var statearr_35474 = f__15620__auto__.call(null);
(statearr_35474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35479);

return statearr_35474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35479,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35492 = [];
var len__14245__auto___35495 = arguments.length;
var i__14246__auto___35496 = (0);
while(true){
if((i__14246__auto___35496 < len__14245__auto___35495)){
args35492.push((arguments[i__14246__auto___35496]));

var G__35497 = (i__14246__auto___35496 + (1));
i__14246__auto___35496 = G__35497;
continue;
} else {
}
break;
}

var G__35494 = args35492.length;
switch (G__35494) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35492.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_35664){
var state_val_35665 = (state_35664[(1)]);
if((state_val_35665 === (7))){
var inst_35660 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
var statearr_35666_35707 = state_35664__$1;
(statearr_35666_35707[(2)] = inst_35660);

(statearr_35666_35707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (20))){
var inst_35630 = (state_35664[(7)]);
var inst_35641 = (state_35664[(2)]);
var inst_35642 = cljs.core.next.call(null,inst_35630);
var inst_35616 = inst_35642;
var inst_35617 = null;
var inst_35618 = (0);
var inst_35619 = (0);
var state_35664__$1 = (function (){var statearr_35667 = state_35664;
(statearr_35667[(8)] = inst_35641);

(statearr_35667[(9)] = inst_35617);

(statearr_35667[(10)] = inst_35616);

(statearr_35667[(11)] = inst_35618);

(statearr_35667[(12)] = inst_35619);

return statearr_35667;
})();
var statearr_35668_35708 = state_35664__$1;
(statearr_35668_35708[(2)] = null);

(statearr_35668_35708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (1))){
var state_35664__$1 = state_35664;
var statearr_35669_35709 = state_35664__$1;
(statearr_35669_35709[(2)] = null);

(statearr_35669_35709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (4))){
var inst_35605 = (state_35664[(13)]);
var inst_35605__$1 = (state_35664[(2)]);
var inst_35606 = (inst_35605__$1 == null);
var state_35664__$1 = (function (){var statearr_35670 = state_35664;
(statearr_35670[(13)] = inst_35605__$1);

return statearr_35670;
})();
if(cljs.core.truth_(inst_35606)){
var statearr_35671_35710 = state_35664__$1;
(statearr_35671_35710[(1)] = (5));

} else {
var statearr_35672_35711 = state_35664__$1;
(statearr_35672_35711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (15))){
var state_35664__$1 = state_35664;
var statearr_35676_35712 = state_35664__$1;
(statearr_35676_35712[(2)] = null);

(statearr_35676_35712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (21))){
var state_35664__$1 = state_35664;
var statearr_35677_35713 = state_35664__$1;
(statearr_35677_35713[(2)] = null);

(statearr_35677_35713[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (13))){
var inst_35617 = (state_35664[(9)]);
var inst_35616 = (state_35664[(10)]);
var inst_35618 = (state_35664[(11)]);
var inst_35619 = (state_35664[(12)]);
var inst_35626 = (state_35664[(2)]);
var inst_35627 = (inst_35619 + (1));
var tmp35673 = inst_35617;
var tmp35674 = inst_35616;
var tmp35675 = inst_35618;
var inst_35616__$1 = tmp35674;
var inst_35617__$1 = tmp35673;
var inst_35618__$1 = tmp35675;
var inst_35619__$1 = inst_35627;
var state_35664__$1 = (function (){var statearr_35678 = state_35664;
(statearr_35678[(9)] = inst_35617__$1);

(statearr_35678[(10)] = inst_35616__$1);

(statearr_35678[(11)] = inst_35618__$1);

(statearr_35678[(14)] = inst_35626);

(statearr_35678[(12)] = inst_35619__$1);

return statearr_35678;
})();
var statearr_35679_35714 = state_35664__$1;
(statearr_35679_35714[(2)] = null);

(statearr_35679_35714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (22))){
var state_35664__$1 = state_35664;
var statearr_35680_35715 = state_35664__$1;
(statearr_35680_35715[(2)] = null);

(statearr_35680_35715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (6))){
var inst_35605 = (state_35664[(13)]);
var inst_35614 = f.call(null,inst_35605);
var inst_35615 = cljs.core.seq.call(null,inst_35614);
var inst_35616 = inst_35615;
var inst_35617 = null;
var inst_35618 = (0);
var inst_35619 = (0);
var state_35664__$1 = (function (){var statearr_35681 = state_35664;
(statearr_35681[(9)] = inst_35617);

(statearr_35681[(10)] = inst_35616);

(statearr_35681[(11)] = inst_35618);

(statearr_35681[(12)] = inst_35619);

return statearr_35681;
})();
var statearr_35682_35716 = state_35664__$1;
(statearr_35682_35716[(2)] = null);

(statearr_35682_35716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (17))){
var inst_35630 = (state_35664[(7)]);
var inst_35634 = cljs.core.chunk_first.call(null,inst_35630);
var inst_35635 = cljs.core.chunk_rest.call(null,inst_35630);
var inst_35636 = cljs.core.count.call(null,inst_35634);
var inst_35616 = inst_35635;
var inst_35617 = inst_35634;
var inst_35618 = inst_35636;
var inst_35619 = (0);
var state_35664__$1 = (function (){var statearr_35683 = state_35664;
(statearr_35683[(9)] = inst_35617);

(statearr_35683[(10)] = inst_35616);

(statearr_35683[(11)] = inst_35618);

(statearr_35683[(12)] = inst_35619);

return statearr_35683;
})();
var statearr_35684_35717 = state_35664__$1;
(statearr_35684_35717[(2)] = null);

(statearr_35684_35717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (3))){
var inst_35662 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35664__$1,inst_35662);
} else {
if((state_val_35665 === (12))){
var inst_35650 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
var statearr_35685_35718 = state_35664__$1;
(statearr_35685_35718[(2)] = inst_35650);

(statearr_35685_35718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (2))){
var state_35664__$1 = state_35664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35664__$1,(4),in$);
} else {
if((state_val_35665 === (23))){
var inst_35658 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
var statearr_35686_35719 = state_35664__$1;
(statearr_35686_35719[(2)] = inst_35658);

(statearr_35686_35719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (19))){
var inst_35645 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
var statearr_35687_35720 = state_35664__$1;
(statearr_35687_35720[(2)] = inst_35645);

(statearr_35687_35720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (11))){
var inst_35616 = (state_35664[(10)]);
var inst_35630 = (state_35664[(7)]);
var inst_35630__$1 = cljs.core.seq.call(null,inst_35616);
var state_35664__$1 = (function (){var statearr_35688 = state_35664;
(statearr_35688[(7)] = inst_35630__$1);

return statearr_35688;
})();
if(inst_35630__$1){
var statearr_35689_35721 = state_35664__$1;
(statearr_35689_35721[(1)] = (14));

} else {
var statearr_35690_35722 = state_35664__$1;
(statearr_35690_35722[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (9))){
var inst_35652 = (state_35664[(2)]);
var inst_35653 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35664__$1 = (function (){var statearr_35691 = state_35664;
(statearr_35691[(15)] = inst_35652);

return statearr_35691;
})();
if(cljs.core.truth_(inst_35653)){
var statearr_35692_35723 = state_35664__$1;
(statearr_35692_35723[(1)] = (21));

} else {
var statearr_35693_35724 = state_35664__$1;
(statearr_35693_35724[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (5))){
var inst_35608 = cljs.core.async.close_BANG_.call(null,out);
var state_35664__$1 = state_35664;
var statearr_35694_35725 = state_35664__$1;
(statearr_35694_35725[(2)] = inst_35608);

(statearr_35694_35725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (14))){
var inst_35630 = (state_35664[(7)]);
var inst_35632 = cljs.core.chunked_seq_QMARK_.call(null,inst_35630);
var state_35664__$1 = state_35664;
if(inst_35632){
var statearr_35695_35726 = state_35664__$1;
(statearr_35695_35726[(1)] = (17));

} else {
var statearr_35696_35727 = state_35664__$1;
(statearr_35696_35727[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (16))){
var inst_35648 = (state_35664[(2)]);
var state_35664__$1 = state_35664;
var statearr_35697_35728 = state_35664__$1;
(statearr_35697_35728[(2)] = inst_35648);

(statearr_35697_35728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35665 === (10))){
var inst_35617 = (state_35664[(9)]);
var inst_35619 = (state_35664[(12)]);
var inst_35624 = cljs.core._nth.call(null,inst_35617,inst_35619);
var state_35664__$1 = state_35664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35664__$1,(13),out,inst_35624);
} else {
if((state_val_35665 === (18))){
var inst_35630 = (state_35664[(7)]);
var inst_35639 = cljs.core.first.call(null,inst_35630);
var state_35664__$1 = state_35664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35664__$1,(20),out,inst_35639);
} else {
if((state_val_35665 === (8))){
var inst_35618 = (state_35664[(11)]);
var inst_35619 = (state_35664[(12)]);
var inst_35621 = (inst_35619 < inst_35618);
var inst_35622 = inst_35621;
var state_35664__$1 = state_35664;
if(cljs.core.truth_(inst_35622)){
var statearr_35698_35729 = state_35664__$1;
(statearr_35698_35729[(1)] = (10));

} else {
var statearr_35699_35730 = state_35664__$1;
(statearr_35699_35730[(1)] = (11));

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
}
}
}
}
}
}
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____0 = (function (){
var statearr_35703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35703[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__);

(statearr_35703[(1)] = (1));

return statearr_35703;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____1 = (function (state_35664){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35704){if((e35704 instanceof Object)){
var ex__15602__auto__ = e35704;
var statearr_35705_35731 = state_35664;
(statearr_35705_35731[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_35664;
state_35664 = G__35732;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__ = function(state_35664){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____1.call(this,state_35664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_35706 = f__15620__auto__.call(null);
(statearr_35706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_35706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35733 = [];
var len__14245__auto___35736 = arguments.length;
var i__14246__auto___35737 = (0);
while(true){
if((i__14246__auto___35737 < len__14245__auto___35736)){
args35733.push((arguments[i__14246__auto___35737]));

var G__35738 = (i__14246__auto___35737 + (1));
i__14246__auto___35737 = G__35738;
continue;
} else {
}
break;
}

var G__35735 = args35733.length;
switch (G__35735) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35733.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35740 = [];
var len__14245__auto___35743 = arguments.length;
var i__14246__auto___35744 = (0);
while(true){
if((i__14246__auto___35744 < len__14245__auto___35743)){
args35740.push((arguments[i__14246__auto___35744]));

var G__35745 = (i__14246__auto___35744 + (1));
i__14246__auto___35744 = G__35745;
continue;
} else {
}
break;
}

var G__35742 = args35740.length;
switch (G__35742) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35740.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35747 = [];
var len__14245__auto___35798 = arguments.length;
var i__14246__auto___35799 = (0);
while(true){
if((i__14246__auto___35799 < len__14245__auto___35798)){
args35747.push((arguments[i__14246__auto___35799]));

var G__35800 = (i__14246__auto___35799 + (1));
i__14246__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var G__35749 = args35747.length;
switch (G__35749) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35747.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35802,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35802,out){
return (function (state_35773){
var state_val_35774 = (state_35773[(1)]);
if((state_val_35774 === (7))){
var inst_35768 = (state_35773[(2)]);
var state_35773__$1 = state_35773;
var statearr_35775_35803 = state_35773__$1;
(statearr_35775_35803[(2)] = inst_35768);

(statearr_35775_35803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (1))){
var inst_35750 = null;
var state_35773__$1 = (function (){var statearr_35776 = state_35773;
(statearr_35776[(7)] = inst_35750);

return statearr_35776;
})();
var statearr_35777_35804 = state_35773__$1;
(statearr_35777_35804[(2)] = null);

(statearr_35777_35804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (4))){
var inst_35753 = (state_35773[(8)]);
var inst_35753__$1 = (state_35773[(2)]);
var inst_35754 = (inst_35753__$1 == null);
var inst_35755 = cljs.core.not.call(null,inst_35754);
var state_35773__$1 = (function (){var statearr_35778 = state_35773;
(statearr_35778[(8)] = inst_35753__$1);

return statearr_35778;
})();
if(inst_35755){
var statearr_35779_35805 = state_35773__$1;
(statearr_35779_35805[(1)] = (5));

} else {
var statearr_35780_35806 = state_35773__$1;
(statearr_35780_35806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (6))){
var state_35773__$1 = state_35773;
var statearr_35781_35807 = state_35773__$1;
(statearr_35781_35807[(2)] = null);

(statearr_35781_35807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (3))){
var inst_35770 = (state_35773[(2)]);
var inst_35771 = cljs.core.async.close_BANG_.call(null,out);
var state_35773__$1 = (function (){var statearr_35782 = state_35773;
(statearr_35782[(9)] = inst_35770);

return statearr_35782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35773__$1,inst_35771);
} else {
if((state_val_35774 === (2))){
var state_35773__$1 = state_35773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35773__$1,(4),ch);
} else {
if((state_val_35774 === (11))){
var inst_35753 = (state_35773[(8)]);
var inst_35762 = (state_35773[(2)]);
var inst_35750 = inst_35753;
var state_35773__$1 = (function (){var statearr_35783 = state_35773;
(statearr_35783[(10)] = inst_35762);

(statearr_35783[(7)] = inst_35750);

return statearr_35783;
})();
var statearr_35784_35808 = state_35773__$1;
(statearr_35784_35808[(2)] = null);

(statearr_35784_35808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (9))){
var inst_35753 = (state_35773[(8)]);
var state_35773__$1 = state_35773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35773__$1,(11),out,inst_35753);
} else {
if((state_val_35774 === (5))){
var inst_35753 = (state_35773[(8)]);
var inst_35750 = (state_35773[(7)]);
var inst_35757 = cljs.core._EQ_.call(null,inst_35753,inst_35750);
var state_35773__$1 = state_35773;
if(inst_35757){
var statearr_35786_35809 = state_35773__$1;
(statearr_35786_35809[(1)] = (8));

} else {
var statearr_35787_35810 = state_35773__$1;
(statearr_35787_35810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (10))){
var inst_35765 = (state_35773[(2)]);
var state_35773__$1 = state_35773;
var statearr_35788_35811 = state_35773__$1;
(statearr_35788_35811[(2)] = inst_35765);

(statearr_35788_35811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35774 === (8))){
var inst_35750 = (state_35773[(7)]);
var tmp35785 = inst_35750;
var inst_35750__$1 = tmp35785;
var state_35773__$1 = (function (){var statearr_35789 = state_35773;
(statearr_35789[(7)] = inst_35750__$1);

return statearr_35789;
})();
var statearr_35790_35812 = state_35773__$1;
(statearr_35790_35812[(2)] = null);

(statearr_35790_35812[(1)] = (2));


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
});})(c__15619__auto___35802,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35802,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35794[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35794[(1)] = (1));

return statearr_35794;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35773){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35795){if((e35795 instanceof Object)){
var ex__15602__auto__ = e35795;
var statearr_35796_35813 = state_35773;
(statearr_35796_35813[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35814 = state_35773;
state_35773 = G__35814;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35802,out))
})();
var state__15621__auto__ = (function (){var statearr_35797 = f__15620__auto__.call(null);
(statearr_35797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35802);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35802,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35815 = [];
var len__14245__auto___35885 = arguments.length;
var i__14246__auto___35886 = (0);
while(true){
if((i__14246__auto___35886 < len__14245__auto___35885)){
args35815.push((arguments[i__14246__auto___35886]));

var G__35887 = (i__14246__auto___35886 + (1));
i__14246__auto___35886 = G__35887;
continue;
} else {
}
break;
}

var G__35817 = args35815.length;
switch (G__35817) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35815.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35889,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35889,out){
return (function (state_35855){
var state_val_35856 = (state_35855[(1)]);
if((state_val_35856 === (7))){
var inst_35851 = (state_35855[(2)]);
var state_35855__$1 = state_35855;
var statearr_35857_35890 = state_35855__$1;
(statearr_35857_35890[(2)] = inst_35851);

(statearr_35857_35890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (1))){
var inst_35818 = (new Array(n));
var inst_35819 = inst_35818;
var inst_35820 = (0);
var state_35855__$1 = (function (){var statearr_35858 = state_35855;
(statearr_35858[(7)] = inst_35819);

(statearr_35858[(8)] = inst_35820);

return statearr_35858;
})();
var statearr_35859_35891 = state_35855__$1;
(statearr_35859_35891[(2)] = null);

(statearr_35859_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (4))){
var inst_35823 = (state_35855[(9)]);
var inst_35823__$1 = (state_35855[(2)]);
var inst_35824 = (inst_35823__$1 == null);
var inst_35825 = cljs.core.not.call(null,inst_35824);
var state_35855__$1 = (function (){var statearr_35860 = state_35855;
(statearr_35860[(9)] = inst_35823__$1);

return statearr_35860;
})();
if(inst_35825){
var statearr_35861_35892 = state_35855__$1;
(statearr_35861_35892[(1)] = (5));

} else {
var statearr_35862_35893 = state_35855__$1;
(statearr_35862_35893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (15))){
var inst_35845 = (state_35855[(2)]);
var state_35855__$1 = state_35855;
var statearr_35863_35894 = state_35855__$1;
(statearr_35863_35894[(2)] = inst_35845);

(statearr_35863_35894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (13))){
var state_35855__$1 = state_35855;
var statearr_35864_35895 = state_35855__$1;
(statearr_35864_35895[(2)] = null);

(statearr_35864_35895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (6))){
var inst_35820 = (state_35855[(8)]);
var inst_35841 = (inst_35820 > (0));
var state_35855__$1 = state_35855;
if(cljs.core.truth_(inst_35841)){
var statearr_35865_35896 = state_35855__$1;
(statearr_35865_35896[(1)] = (12));

} else {
var statearr_35866_35897 = state_35855__$1;
(statearr_35866_35897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (3))){
var inst_35853 = (state_35855[(2)]);
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35855__$1,inst_35853);
} else {
if((state_val_35856 === (12))){
var inst_35819 = (state_35855[(7)]);
var inst_35843 = cljs.core.vec.call(null,inst_35819);
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35855__$1,(15),out,inst_35843);
} else {
if((state_val_35856 === (2))){
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35855__$1,(4),ch);
} else {
if((state_val_35856 === (11))){
var inst_35835 = (state_35855[(2)]);
var inst_35836 = (new Array(n));
var inst_35819 = inst_35836;
var inst_35820 = (0);
var state_35855__$1 = (function (){var statearr_35867 = state_35855;
(statearr_35867[(7)] = inst_35819);

(statearr_35867[(10)] = inst_35835);

(statearr_35867[(8)] = inst_35820);

return statearr_35867;
})();
var statearr_35868_35898 = state_35855__$1;
(statearr_35868_35898[(2)] = null);

(statearr_35868_35898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (9))){
var inst_35819 = (state_35855[(7)]);
var inst_35833 = cljs.core.vec.call(null,inst_35819);
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35855__$1,(11),out,inst_35833);
} else {
if((state_val_35856 === (5))){
var inst_35819 = (state_35855[(7)]);
var inst_35823 = (state_35855[(9)]);
var inst_35828 = (state_35855[(11)]);
var inst_35820 = (state_35855[(8)]);
var inst_35827 = (inst_35819[inst_35820] = inst_35823);
var inst_35828__$1 = (inst_35820 + (1));
var inst_35829 = (inst_35828__$1 < n);
var state_35855__$1 = (function (){var statearr_35869 = state_35855;
(statearr_35869[(11)] = inst_35828__$1);

(statearr_35869[(12)] = inst_35827);

return statearr_35869;
})();
if(cljs.core.truth_(inst_35829)){
var statearr_35870_35899 = state_35855__$1;
(statearr_35870_35899[(1)] = (8));

} else {
var statearr_35871_35900 = state_35855__$1;
(statearr_35871_35900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (14))){
var inst_35848 = (state_35855[(2)]);
var inst_35849 = cljs.core.async.close_BANG_.call(null,out);
var state_35855__$1 = (function (){var statearr_35873 = state_35855;
(statearr_35873[(13)] = inst_35848);

return statearr_35873;
})();
var statearr_35874_35901 = state_35855__$1;
(statearr_35874_35901[(2)] = inst_35849);

(statearr_35874_35901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (10))){
var inst_35839 = (state_35855[(2)]);
var state_35855__$1 = state_35855;
var statearr_35875_35902 = state_35855__$1;
(statearr_35875_35902[(2)] = inst_35839);

(statearr_35875_35902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (8))){
var inst_35819 = (state_35855[(7)]);
var inst_35828 = (state_35855[(11)]);
var tmp35872 = inst_35819;
var inst_35819__$1 = tmp35872;
var inst_35820 = inst_35828;
var state_35855__$1 = (function (){var statearr_35876 = state_35855;
(statearr_35876[(7)] = inst_35819__$1);

(statearr_35876[(8)] = inst_35820);

return statearr_35876;
})();
var statearr_35877_35903 = state_35855__$1;
(statearr_35877_35903[(2)] = null);

(statearr_35877_35903[(1)] = (2));


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
});})(c__15619__auto___35889,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35889,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35881[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35881[(1)] = (1));

return statearr_35881;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35855){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35882){if((e35882 instanceof Object)){
var ex__15602__auto__ = e35882;
var statearr_35883_35904 = state_35855;
(statearr_35883_35904[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35905 = state_35855;
state_35855 = G__35905;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35889,out))
})();
var state__15621__auto__ = (function (){var statearr_35884 = f__15620__auto__.call(null);
(statearr_35884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35889);

return statearr_35884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35889,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35906 = [];
var len__14245__auto___35980 = arguments.length;
var i__14246__auto___35981 = (0);
while(true){
if((i__14246__auto___35981 < len__14245__auto___35980)){
args35906.push((arguments[i__14246__auto___35981]));

var G__35982 = (i__14246__auto___35981 + (1));
i__14246__auto___35981 = G__35982;
continue;
} else {
}
break;
}

var G__35908 = args35906.length;
switch (G__35908) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35906.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___35984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto___35984,out){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto___35984,out){
return (function (state_35950){
var state_val_35951 = (state_35950[(1)]);
if((state_val_35951 === (7))){
var inst_35946 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
var statearr_35952_35985 = state_35950__$1;
(statearr_35952_35985[(2)] = inst_35946);

(statearr_35952_35985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (1))){
var inst_35909 = [];
var inst_35910 = inst_35909;
var inst_35911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35950__$1 = (function (){var statearr_35953 = state_35950;
(statearr_35953[(7)] = inst_35910);

(statearr_35953[(8)] = inst_35911);

return statearr_35953;
})();
var statearr_35954_35986 = state_35950__$1;
(statearr_35954_35986[(2)] = null);

(statearr_35954_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (4))){
var inst_35914 = (state_35950[(9)]);
var inst_35914__$1 = (state_35950[(2)]);
var inst_35915 = (inst_35914__$1 == null);
var inst_35916 = cljs.core.not.call(null,inst_35915);
var state_35950__$1 = (function (){var statearr_35955 = state_35950;
(statearr_35955[(9)] = inst_35914__$1);

return statearr_35955;
})();
if(inst_35916){
var statearr_35956_35987 = state_35950__$1;
(statearr_35956_35987[(1)] = (5));

} else {
var statearr_35957_35988 = state_35950__$1;
(statearr_35957_35988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (15))){
var inst_35940 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
var statearr_35958_35989 = state_35950__$1;
(statearr_35958_35989[(2)] = inst_35940);

(statearr_35958_35989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (13))){
var state_35950__$1 = state_35950;
var statearr_35959_35990 = state_35950__$1;
(statearr_35959_35990[(2)] = null);

(statearr_35959_35990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (6))){
var inst_35910 = (state_35950[(7)]);
var inst_35935 = inst_35910.length;
var inst_35936 = (inst_35935 > (0));
var state_35950__$1 = state_35950;
if(cljs.core.truth_(inst_35936)){
var statearr_35960_35991 = state_35950__$1;
(statearr_35960_35991[(1)] = (12));

} else {
var statearr_35961_35992 = state_35950__$1;
(statearr_35961_35992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (3))){
var inst_35948 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35950__$1,inst_35948);
} else {
if((state_val_35951 === (12))){
var inst_35910 = (state_35950[(7)]);
var inst_35938 = cljs.core.vec.call(null,inst_35910);
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35950__$1,(15),out,inst_35938);
} else {
if((state_val_35951 === (2))){
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35950__$1,(4),ch);
} else {
if((state_val_35951 === (11))){
var inst_35914 = (state_35950[(9)]);
var inst_35918 = (state_35950[(10)]);
var inst_35928 = (state_35950[(2)]);
var inst_35929 = [];
var inst_35930 = inst_35929.push(inst_35914);
var inst_35910 = inst_35929;
var inst_35911 = inst_35918;
var state_35950__$1 = (function (){var statearr_35962 = state_35950;
(statearr_35962[(11)] = inst_35928);

(statearr_35962[(7)] = inst_35910);

(statearr_35962[(8)] = inst_35911);

(statearr_35962[(12)] = inst_35930);

return statearr_35962;
})();
var statearr_35963_35993 = state_35950__$1;
(statearr_35963_35993[(2)] = null);

(statearr_35963_35993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (9))){
var inst_35910 = (state_35950[(7)]);
var inst_35926 = cljs.core.vec.call(null,inst_35910);
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35950__$1,(11),out,inst_35926);
} else {
if((state_val_35951 === (5))){
var inst_35914 = (state_35950[(9)]);
var inst_35918 = (state_35950[(10)]);
var inst_35911 = (state_35950[(8)]);
var inst_35918__$1 = f.call(null,inst_35914);
var inst_35919 = cljs.core._EQ_.call(null,inst_35918__$1,inst_35911);
var inst_35920 = cljs.core.keyword_identical_QMARK_.call(null,inst_35911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35921 = (inst_35919) || (inst_35920);
var state_35950__$1 = (function (){var statearr_35964 = state_35950;
(statearr_35964[(10)] = inst_35918__$1);

return statearr_35964;
})();
if(cljs.core.truth_(inst_35921)){
var statearr_35965_35994 = state_35950__$1;
(statearr_35965_35994[(1)] = (8));

} else {
var statearr_35966_35995 = state_35950__$1;
(statearr_35966_35995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (14))){
var inst_35943 = (state_35950[(2)]);
var inst_35944 = cljs.core.async.close_BANG_.call(null,out);
var state_35950__$1 = (function (){var statearr_35968 = state_35950;
(statearr_35968[(13)] = inst_35943);

return statearr_35968;
})();
var statearr_35969_35996 = state_35950__$1;
(statearr_35969_35996[(2)] = inst_35944);

(statearr_35969_35996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (10))){
var inst_35933 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
var statearr_35970_35997 = state_35950__$1;
(statearr_35970_35997[(2)] = inst_35933);

(statearr_35970_35997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (8))){
var inst_35914 = (state_35950[(9)]);
var inst_35918 = (state_35950[(10)]);
var inst_35910 = (state_35950[(7)]);
var inst_35923 = inst_35910.push(inst_35914);
var tmp35967 = inst_35910;
var inst_35910__$1 = tmp35967;
var inst_35911 = inst_35918;
var state_35950__$1 = (function (){var statearr_35971 = state_35950;
(statearr_35971[(14)] = inst_35923);

(statearr_35971[(7)] = inst_35910__$1);

(statearr_35971[(8)] = inst_35911);

return statearr_35971;
})();
var statearr_35972_35998 = state_35950__$1;
(statearr_35972_35998[(2)] = null);

(statearr_35972_35998[(1)] = (2));


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
});})(c__15619__auto___35984,out))
;
return ((function (switch__15598__auto__,c__15619__auto___35984,out){
return (function() {
var cljs$core$async$state_machine__15599__auto__ = null;
var cljs$core$async$state_machine__15599__auto____0 = (function (){
var statearr_35976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35976[(0)] = cljs$core$async$state_machine__15599__auto__);

(statearr_35976[(1)] = (1));

return statearr_35976;
});
var cljs$core$async$state_machine__15599__auto____1 = (function (state_35950){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_35950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e35977){if((e35977 instanceof Object)){
var ex__15602__auto__ = e35977;
var statearr_35978_35999 = state_35950;
(statearr_35978_35999[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36000 = state_35950;
state_35950 = G__36000;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
cljs$core$async$state_machine__15599__auto__ = function(state_35950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15599__auto____1.call(this,state_35950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15599__auto____0;
cljs$core$async$state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15599__auto____1;
return cljs$core$async$state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto___35984,out))
})();
var state__15621__auto__ = (function (){var statearr_35979 = f__15620__auto__.call(null);
(statearr_35979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto___35984);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto___35984,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458338369323