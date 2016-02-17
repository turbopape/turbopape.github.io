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
var args18240 = [];
var len__14245__auto___18246 = arguments.length;
var i__14246__auto___18247 = (0);
while(true){
if((i__14246__auto___18247 < len__14245__auto___18246)){
args18240.push((arguments[i__14246__auto___18247]));

var G__18248 = (i__14246__auto___18247 + (1));
i__14246__auto___18247 = G__18248;
continue;
} else {
}
break;
}

var G__18242 = args18240.length;
switch (G__18242) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18240.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18243 = (function (f,blockable,meta18244){
this.f = f;
this.blockable = blockable;
this.meta18244 = meta18244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18245,meta18244__$1){
var self__ = this;
var _18245__$1 = this;
return (new cljs.core.async.t_cljs$core$async18243(self__.f,self__.blockable,meta18244__$1));
});

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18245){
var self__ = this;
var _18245__$1 = this;
return self__.meta18244;
});

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18244","meta18244",1802868186,null)], null);
});

cljs.core.async.t_cljs$core$async18243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18243";

cljs.core.async.t_cljs$core$async18243.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18243");
});

cljs.core.async.__GT_t_cljs$core$async18243 = (function cljs$core$async$__GT_t_cljs$core$async18243(f__$1,blockable__$1,meta18244){
return (new cljs.core.async.t_cljs$core$async18243(f__$1,blockable__$1,meta18244));
});

}

return (new cljs.core.async.t_cljs$core$async18243(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args18252 = [];
var len__14245__auto___18255 = arguments.length;
var i__14246__auto___18256 = (0);
while(true){
if((i__14246__auto___18256 < len__14245__auto___18255)){
args18252.push((arguments[i__14246__auto___18256]));

var G__18257 = (i__14246__auto___18256 + (1));
i__14246__auto___18256 = G__18257;
continue;
} else {
}
break;
}

var G__18254 = args18252.length;
switch (G__18254) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18252.length)].join('')));

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
var args18259 = [];
var len__14245__auto___18262 = arguments.length;
var i__14246__auto___18263 = (0);
while(true){
if((i__14246__auto___18263 < len__14245__auto___18262)){
args18259.push((arguments[i__14246__auto___18263]));

var G__18264 = (i__14246__auto___18263 + (1));
i__14246__auto___18263 = G__18264;
continue;
} else {
}
break;
}

var G__18261 = args18259.length;
switch (G__18261) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18259.length)].join('')));

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
var args18266 = [];
var len__14245__auto___18269 = arguments.length;
var i__14246__auto___18270 = (0);
while(true){
if((i__14246__auto___18270 < len__14245__auto___18269)){
args18266.push((arguments[i__14246__auto___18270]));

var G__18271 = (i__14246__auto___18270 + (1));
i__14246__auto___18270 = G__18271;
continue;
} else {
}
break;
}

var G__18268 = args18266.length;
switch (G__18268) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18266.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18273 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18273);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18273,ret){
return (function (){
return fn1.call(null,val_18273);
});})(val_18273,ret))
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
var args18274 = [];
var len__14245__auto___18277 = arguments.length;
var i__14246__auto___18278 = (0);
while(true){
if((i__14246__auto___18278 < len__14245__auto___18277)){
args18274.push((arguments[i__14246__auto___18278]));

var G__18279 = (i__14246__auto___18278 + (1));
i__14246__auto___18278 = G__18279;
continue;
} else {
}
break;
}

var G__18276 = args18274.length;
switch (G__18276) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18274.length)].join('')));

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
var n__14090__auto___18281 = n;
var x_18282 = (0);
while(true){
if((x_18282 < n__14090__auto___18281)){
(a[x_18282] = (0));

var G__18283 = (x_18282 + (1));
x_18282 = G__18283;
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

var G__18284 = (i + (1));
i = G__18284;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18288 = (function (alt_flag,flag,meta18289){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18289 = meta18289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18290,meta18289__$1){
var self__ = this;
var _18290__$1 = this;
return (new cljs.core.async.t_cljs$core$async18288(self__.alt_flag,self__.flag,meta18289__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18290){
var self__ = this;
var _18290__$1 = this;
return self__.meta18289;
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18289","meta18289",-1349710246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18288";

cljs.core.async.t_cljs$core$async18288.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18288");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18288 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18288(alt_flag__$1,flag__$1,meta18289){
return (new cljs.core.async.t_cljs$core$async18288(alt_flag__$1,flag__$1,meta18289));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18288(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18294 = (function (alt_handler,flag,cb,meta18295){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18295 = meta18295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18296,meta18295__$1){
var self__ = this;
var _18296__$1 = this;
return (new cljs.core.async.t_cljs$core$async18294(self__.alt_handler,self__.flag,self__.cb,meta18295__$1));
});

cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18296){
var self__ = this;
var _18296__$1 = this;
return self__.meta18295;
});

cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18295","meta18295",-1127907496,null)], null);
});

cljs.core.async.t_cljs$core$async18294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18294";

cljs.core.async.t_cljs$core$async18294.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18294");
});

cljs.core.async.__GT_t_cljs$core$async18294 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18294(alt_handler__$1,flag__$1,cb__$1,meta18295){
return (new cljs.core.async.t_cljs$core$async18294(alt_handler__$1,flag__$1,cb__$1,meta18295));
});

}

return (new cljs.core.async.t_cljs$core$async18294(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18297_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18297_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18298_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18298_SHARP_,port], null));
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
var G__18299 = (i + (1));
i = G__18299;
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
var len__14245__auto___18305 = arguments.length;
var i__14246__auto___18306 = (0);
while(true){
if((i__14246__auto___18306 < len__14245__auto___18305)){
args__14252__auto__.push((arguments[i__14246__auto___18306]));

var G__18307 = (i__14246__auto___18306 + (1));
i__14246__auto___18306 = G__18307;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18302){
var map__18303 = p__18302;
var map__18303__$1 = ((((!((map__18303 == null)))?((((map__18303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18303):map__18303);
var opts = map__18303__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18300){
var G__18301 = cljs.core.first.call(null,seq18300);
var seq18300__$1 = cljs.core.next.call(null,seq18300);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18301,seq18300__$1);
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
var args18308 = [];
var len__14245__auto___18358 = arguments.length;
var i__14246__auto___18359 = (0);
while(true){
if((i__14246__auto___18359 < len__14245__auto___18358)){
args18308.push((arguments[i__14246__auto___18359]));

var G__18360 = (i__14246__auto___18359 + (1));
i__14246__auto___18359 = G__18360;
continue;
} else {
}
break;
}

var G__18310 = args18308.length;
switch (G__18310) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18308.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18195__auto___18362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___18362){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___18362){
return (function (state_18334){
var state_val_18335 = (state_18334[(1)]);
if((state_val_18335 === (7))){
var inst_18330 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18336_18363 = state_18334__$1;
(statearr_18336_18363[(2)] = inst_18330);

(statearr_18336_18363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (1))){
var state_18334__$1 = state_18334;
var statearr_18337_18364 = state_18334__$1;
(statearr_18337_18364[(2)] = null);

(statearr_18337_18364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (4))){
var inst_18313 = (state_18334[(7)]);
var inst_18313__$1 = (state_18334[(2)]);
var inst_18314 = (inst_18313__$1 == null);
var state_18334__$1 = (function (){var statearr_18338 = state_18334;
(statearr_18338[(7)] = inst_18313__$1);

return statearr_18338;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18339_18365 = state_18334__$1;
(statearr_18339_18365[(1)] = (5));

} else {
var statearr_18340_18366 = state_18334__$1;
(statearr_18340_18366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (13))){
var state_18334__$1 = state_18334;
var statearr_18341_18367 = state_18334__$1;
(statearr_18341_18367[(2)] = null);

(statearr_18341_18367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (6))){
var inst_18313 = (state_18334[(7)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18334__$1,(11),to,inst_18313);
} else {
if((state_val_18335 === (3))){
var inst_18332 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18334__$1,inst_18332);
} else {
if((state_val_18335 === (12))){
var state_18334__$1 = state_18334;
var statearr_18342_18368 = state_18334__$1;
(statearr_18342_18368[(2)] = null);

(statearr_18342_18368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (2))){
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18334__$1,(4),from);
} else {
if((state_val_18335 === (11))){
var inst_18323 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
if(cljs.core.truth_(inst_18323)){
var statearr_18343_18369 = state_18334__$1;
(statearr_18343_18369[(1)] = (12));

} else {
var statearr_18344_18370 = state_18334__$1;
(statearr_18344_18370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (9))){
var state_18334__$1 = state_18334;
var statearr_18345_18371 = state_18334__$1;
(statearr_18345_18371[(2)] = null);

(statearr_18345_18371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (5))){
var state_18334__$1 = state_18334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18346_18372 = state_18334__$1;
(statearr_18346_18372[(1)] = (8));

} else {
var statearr_18347_18373 = state_18334__$1;
(statearr_18347_18373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (14))){
var inst_18328 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18348_18374 = state_18334__$1;
(statearr_18348_18374[(2)] = inst_18328);

(statearr_18348_18374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (10))){
var inst_18320 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18349_18375 = state_18334__$1;
(statearr_18349_18375[(2)] = inst_18320);

(statearr_18349_18375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18335 === (8))){
var inst_18317 = cljs.core.async.close_BANG_.call(null,to);
var state_18334__$1 = state_18334;
var statearr_18350_18376 = state_18334__$1;
(statearr_18350_18376[(2)] = inst_18317);

(statearr_18350_18376[(1)] = (10));


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
});})(c__18195__auto___18362))
;
return ((function (switch__18083__auto__,c__18195__auto___18362){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_18354 = [null,null,null,null,null,null,null,null];
(statearr_18354[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_18354[(1)] = (1));

return statearr_18354;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_18334){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18355){if((e18355 instanceof Object)){
var ex__18087__auto__ = e18355;
var statearr_18356_18377 = state_18334;
(statearr_18356_18377[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18378 = state_18334;
state_18334 = G__18378;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_18334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_18334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___18362))
})();
var state__18197__auto__ = (function (){var statearr_18357 = f__18196__auto__.call(null);
(statearr_18357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18362);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___18362))
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
return (function (p__18562){
var vec__18563 = p__18562;
var v = cljs.core.nth.call(null,vec__18563,(0),null);
var p = cljs.core.nth.call(null,vec__18563,(1),null);
var job = vec__18563;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18195__auto___18745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results){
return (function (state_18568){
var state_val_18569 = (state_18568[(1)]);
if((state_val_18569 === (1))){
var state_18568__$1 = state_18568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18568__$1,(2),res,v);
} else {
if((state_val_18569 === (2))){
var inst_18565 = (state_18568[(2)]);
var inst_18566 = cljs.core.async.close_BANG_.call(null,res);
var state_18568__$1 = (function (){var statearr_18570 = state_18568;
(statearr_18570[(7)] = inst_18565);

return statearr_18570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18568__$1,inst_18566);
} else {
return null;
}
}
});})(c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results))
;
return ((function (switch__18083__auto__,c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_18574 = [null,null,null,null,null,null,null,null];
(statearr_18574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__);

(statearr_18574[(1)] = (1));

return statearr_18574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1 = (function (state_18568){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18575){if((e18575 instanceof Object)){
var ex__18087__auto__ = e18575;
var statearr_18576_18746 = state_18568;
(statearr_18576_18746[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18747 = state_18568;
state_18568 = G__18747;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = function(state_18568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1.call(this,state_18568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results))
})();
var state__18197__auto__ = (function (){var statearr_18577 = f__18196__auto__.call(null);
(statearr_18577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18745);

return statearr_18577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___18745,res,vec__18563,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18578){
var vec__18579 = p__18578;
var v = cljs.core.nth.call(null,vec__18579,(0),null);
var p = cljs.core.nth.call(null,vec__18579,(1),null);
var job = vec__18579;
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
var n__14090__auto___18748 = n;
var __18749 = (0);
while(true){
if((__18749 < n__14090__auto___18748)){
var G__18580_18750 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18580_18750) {
case "compute":
var c__18195__auto___18752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18749,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (__18749,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function (state_18593){
var state_val_18594 = (state_18593[(1)]);
if((state_val_18594 === (1))){
var state_18593__$1 = state_18593;
var statearr_18595_18753 = state_18593__$1;
(statearr_18595_18753[(2)] = null);

(statearr_18595_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18594 === (2))){
var state_18593__$1 = state_18593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18593__$1,(4),jobs);
} else {
if((state_val_18594 === (3))){
var inst_18591 = (state_18593[(2)]);
var state_18593__$1 = state_18593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18593__$1,inst_18591);
} else {
if((state_val_18594 === (4))){
var inst_18583 = (state_18593[(2)]);
var inst_18584 = process.call(null,inst_18583);
var state_18593__$1 = state_18593;
if(cljs.core.truth_(inst_18584)){
var statearr_18596_18754 = state_18593__$1;
(statearr_18596_18754[(1)] = (5));

} else {
var statearr_18597_18755 = state_18593__$1;
(statearr_18597_18755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18594 === (5))){
var state_18593__$1 = state_18593;
var statearr_18598_18756 = state_18593__$1;
(statearr_18598_18756[(2)] = null);

(statearr_18598_18756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18594 === (6))){
var state_18593__$1 = state_18593;
var statearr_18599_18757 = state_18593__$1;
(statearr_18599_18757[(2)] = null);

(statearr_18599_18757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18594 === (7))){
var inst_18589 = (state_18593[(2)]);
var state_18593__$1 = state_18593;
var statearr_18600_18758 = state_18593__$1;
(statearr_18600_18758[(2)] = inst_18589);

(statearr_18600_18758[(1)] = (3));


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
});})(__18749,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
;
return ((function (__18749,switch__18083__auto__,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_18604 = [null,null,null,null,null,null,null];
(statearr_18604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__);

(statearr_18604[(1)] = (1));

return statearr_18604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1 = (function (state_18593){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18605){if((e18605 instanceof Object)){
var ex__18087__auto__ = e18605;
var statearr_18606_18759 = state_18593;
(statearr_18606_18759[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18760 = state_18593;
state_18593 = G__18760;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = function(state_18593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1.call(this,state_18593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__;
})()
;})(__18749,switch__18083__auto__,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
})();
var state__18197__auto__ = (function (){var statearr_18607 = f__18196__auto__.call(null);
(statearr_18607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18752);

return statearr_18607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(__18749,c__18195__auto___18752,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
);


break;
case "async":
var c__18195__auto___18761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18749,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (__18749,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function (state_18620){
var state_val_18621 = (state_18620[(1)]);
if((state_val_18621 === (1))){
var state_18620__$1 = state_18620;
var statearr_18622_18762 = state_18620__$1;
(statearr_18622_18762[(2)] = null);

(statearr_18622_18762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (2))){
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18620__$1,(4),jobs);
} else {
if((state_val_18621 === (3))){
var inst_18618 = (state_18620[(2)]);
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18620__$1,inst_18618);
} else {
if((state_val_18621 === (4))){
var inst_18610 = (state_18620[(2)]);
var inst_18611 = async.call(null,inst_18610);
var state_18620__$1 = state_18620;
if(cljs.core.truth_(inst_18611)){
var statearr_18623_18763 = state_18620__$1;
(statearr_18623_18763[(1)] = (5));

} else {
var statearr_18624_18764 = state_18620__$1;
(statearr_18624_18764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (5))){
var state_18620__$1 = state_18620;
var statearr_18625_18765 = state_18620__$1;
(statearr_18625_18765[(2)] = null);

(statearr_18625_18765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (6))){
var state_18620__$1 = state_18620;
var statearr_18626_18766 = state_18620__$1;
(statearr_18626_18766[(2)] = null);

(statearr_18626_18766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (7))){
var inst_18616 = (state_18620[(2)]);
var state_18620__$1 = state_18620;
var statearr_18627_18767 = state_18620__$1;
(statearr_18627_18767[(2)] = inst_18616);

(statearr_18627_18767[(1)] = (3));


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
});})(__18749,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
;
return ((function (__18749,switch__18083__auto__,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_18631 = [null,null,null,null,null,null,null];
(statearr_18631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__);

(statearr_18631[(1)] = (1));

return statearr_18631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1 = (function (state_18620){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18632){if((e18632 instanceof Object)){
var ex__18087__auto__ = e18632;
var statearr_18633_18768 = state_18620;
(statearr_18633_18768[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18769 = state_18620;
state_18620 = G__18769;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = function(state_18620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1.call(this,state_18620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__;
})()
;})(__18749,switch__18083__auto__,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
})();
var state__18197__auto__ = (function (){var statearr_18634 = f__18196__auto__.call(null);
(statearr_18634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18761);

return statearr_18634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(__18749,c__18195__auto___18761,G__18580_18750,n__14090__auto___18748,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18770 = (__18749 + (1));
__18749 = G__18770;
continue;
} else {
}
break;
}

var c__18195__auto___18771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___18771,jobs,results,process,async){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___18771,jobs,results,process,async){
return (function (state_18656){
var state_val_18657 = (state_18656[(1)]);
if((state_val_18657 === (1))){
var state_18656__$1 = state_18656;
var statearr_18658_18772 = state_18656__$1;
(statearr_18658_18772[(2)] = null);

(statearr_18658_18772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (2))){
var state_18656__$1 = state_18656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18656__$1,(4),from);
} else {
if((state_val_18657 === (3))){
var inst_18654 = (state_18656[(2)]);
var state_18656__$1 = state_18656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18656__$1,inst_18654);
} else {
if((state_val_18657 === (4))){
var inst_18637 = (state_18656[(7)]);
var inst_18637__$1 = (state_18656[(2)]);
var inst_18638 = (inst_18637__$1 == null);
var state_18656__$1 = (function (){var statearr_18659 = state_18656;
(statearr_18659[(7)] = inst_18637__$1);

return statearr_18659;
})();
if(cljs.core.truth_(inst_18638)){
var statearr_18660_18773 = state_18656__$1;
(statearr_18660_18773[(1)] = (5));

} else {
var statearr_18661_18774 = state_18656__$1;
(statearr_18661_18774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (5))){
var inst_18640 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18656__$1 = state_18656;
var statearr_18662_18775 = state_18656__$1;
(statearr_18662_18775[(2)] = inst_18640);

(statearr_18662_18775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (6))){
var inst_18637 = (state_18656[(7)]);
var inst_18642 = (state_18656[(8)]);
var inst_18642__$1 = cljs.core.async.chan.call(null,(1));
var inst_18643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18644 = [inst_18637,inst_18642__$1];
var inst_18645 = (new cljs.core.PersistentVector(null,2,(5),inst_18643,inst_18644,null));
var state_18656__$1 = (function (){var statearr_18663 = state_18656;
(statearr_18663[(8)] = inst_18642__$1);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18656__$1,(8),jobs,inst_18645);
} else {
if((state_val_18657 === (7))){
var inst_18652 = (state_18656[(2)]);
var state_18656__$1 = state_18656;
var statearr_18664_18776 = state_18656__$1;
(statearr_18664_18776[(2)] = inst_18652);

(statearr_18664_18776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (8))){
var inst_18642 = (state_18656[(8)]);
var inst_18647 = (state_18656[(2)]);
var state_18656__$1 = (function (){var statearr_18665 = state_18656;
(statearr_18665[(9)] = inst_18647);

return statearr_18665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18656__$1,(9),results,inst_18642);
} else {
if((state_val_18657 === (9))){
var inst_18649 = (state_18656[(2)]);
var state_18656__$1 = (function (){var statearr_18666 = state_18656;
(statearr_18666[(10)] = inst_18649);

return statearr_18666;
})();
var statearr_18667_18777 = state_18656__$1;
(statearr_18667_18777[(2)] = null);

(statearr_18667_18777[(1)] = (2));


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
});})(c__18195__auto___18771,jobs,results,process,async))
;
return ((function (switch__18083__auto__,c__18195__auto___18771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_18671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__);

(statearr_18671[(1)] = (1));

return statearr_18671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1 = (function (state_18656){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18672){if((e18672 instanceof Object)){
var ex__18087__auto__ = e18672;
var statearr_18673_18778 = state_18656;
(statearr_18673_18778[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18779 = state_18656;
state_18656 = G__18779;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = function(state_18656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1.call(this,state_18656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___18771,jobs,results,process,async))
})();
var state__18197__auto__ = (function (){var statearr_18674 = f__18196__auto__.call(null);
(statearr_18674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18771);

return statearr_18674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___18771,jobs,results,process,async))
);


var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__,jobs,results,process,async){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__,jobs,results,process,async){
return (function (state_18712){
var state_val_18713 = (state_18712[(1)]);
if((state_val_18713 === (7))){
var inst_18708 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18714_18780 = state_18712__$1;
(statearr_18714_18780[(2)] = inst_18708);

(statearr_18714_18780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (20))){
var state_18712__$1 = state_18712;
var statearr_18715_18781 = state_18712__$1;
(statearr_18715_18781[(2)] = null);

(statearr_18715_18781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (1))){
var state_18712__$1 = state_18712;
var statearr_18716_18782 = state_18712__$1;
(statearr_18716_18782[(2)] = null);

(statearr_18716_18782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (4))){
var inst_18677 = (state_18712[(7)]);
var inst_18677__$1 = (state_18712[(2)]);
var inst_18678 = (inst_18677__$1 == null);
var state_18712__$1 = (function (){var statearr_18717 = state_18712;
(statearr_18717[(7)] = inst_18677__$1);

return statearr_18717;
})();
if(cljs.core.truth_(inst_18678)){
var statearr_18718_18783 = state_18712__$1;
(statearr_18718_18783[(1)] = (5));

} else {
var statearr_18719_18784 = state_18712__$1;
(statearr_18719_18784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (15))){
var inst_18690 = (state_18712[(8)]);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18712__$1,(18),to,inst_18690);
} else {
if((state_val_18713 === (21))){
var inst_18703 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18720_18785 = state_18712__$1;
(statearr_18720_18785[(2)] = inst_18703);

(statearr_18720_18785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (13))){
var inst_18705 = (state_18712[(2)]);
var state_18712__$1 = (function (){var statearr_18721 = state_18712;
(statearr_18721[(9)] = inst_18705);

return statearr_18721;
})();
var statearr_18722_18786 = state_18712__$1;
(statearr_18722_18786[(2)] = null);

(statearr_18722_18786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (6))){
var inst_18677 = (state_18712[(7)]);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18712__$1,(11),inst_18677);
} else {
if((state_val_18713 === (17))){
var inst_18698 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
if(cljs.core.truth_(inst_18698)){
var statearr_18723_18787 = state_18712__$1;
(statearr_18723_18787[(1)] = (19));

} else {
var statearr_18724_18788 = state_18712__$1;
(statearr_18724_18788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (3))){
var inst_18710 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18712__$1,inst_18710);
} else {
if((state_val_18713 === (12))){
var inst_18687 = (state_18712[(10)]);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18712__$1,(14),inst_18687);
} else {
if((state_val_18713 === (2))){
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18712__$1,(4),results);
} else {
if((state_val_18713 === (19))){
var state_18712__$1 = state_18712;
var statearr_18725_18789 = state_18712__$1;
(statearr_18725_18789[(2)] = null);

(statearr_18725_18789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (11))){
var inst_18687 = (state_18712[(2)]);
var state_18712__$1 = (function (){var statearr_18726 = state_18712;
(statearr_18726[(10)] = inst_18687);

return statearr_18726;
})();
var statearr_18727_18790 = state_18712__$1;
(statearr_18727_18790[(2)] = null);

(statearr_18727_18790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (9))){
var state_18712__$1 = state_18712;
var statearr_18728_18791 = state_18712__$1;
(statearr_18728_18791[(2)] = null);

(statearr_18728_18791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (5))){
var state_18712__$1 = state_18712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18729_18792 = state_18712__$1;
(statearr_18729_18792[(1)] = (8));

} else {
var statearr_18730_18793 = state_18712__$1;
(statearr_18730_18793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (14))){
var inst_18692 = (state_18712[(11)]);
var inst_18690 = (state_18712[(8)]);
var inst_18690__$1 = (state_18712[(2)]);
var inst_18691 = (inst_18690__$1 == null);
var inst_18692__$1 = cljs.core.not.call(null,inst_18691);
var state_18712__$1 = (function (){var statearr_18731 = state_18712;
(statearr_18731[(11)] = inst_18692__$1);

(statearr_18731[(8)] = inst_18690__$1);

return statearr_18731;
})();
if(inst_18692__$1){
var statearr_18732_18794 = state_18712__$1;
(statearr_18732_18794[(1)] = (15));

} else {
var statearr_18733_18795 = state_18712__$1;
(statearr_18733_18795[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (16))){
var inst_18692 = (state_18712[(11)]);
var state_18712__$1 = state_18712;
var statearr_18734_18796 = state_18712__$1;
(statearr_18734_18796[(2)] = inst_18692);

(statearr_18734_18796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (10))){
var inst_18684 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18735_18797 = state_18712__$1;
(statearr_18735_18797[(2)] = inst_18684);

(statearr_18735_18797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (18))){
var inst_18695 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18736_18798 = state_18712__$1;
(statearr_18736_18798[(2)] = inst_18695);

(statearr_18736_18798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (8))){
var inst_18681 = cljs.core.async.close_BANG_.call(null,to);
var state_18712__$1 = state_18712;
var statearr_18737_18799 = state_18712__$1;
(statearr_18737_18799[(2)] = inst_18681);

(statearr_18737_18799[(1)] = (10));


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
});})(c__18195__auto__,jobs,results,process,async))
;
return ((function (switch__18083__auto__,c__18195__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_18741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__);

(statearr_18741[(1)] = (1));

return statearr_18741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1 = (function (state_18712){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18742){if((e18742 instanceof Object)){
var ex__18087__auto__ = e18742;
var statearr_18743_18800 = state_18712;
(statearr_18743_18800[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18801 = state_18712;
state_18712 = G__18801;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__ = function(state_18712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1.call(this,state_18712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__,jobs,results,process,async))
})();
var state__18197__auto__ = (function (){var statearr_18744 = f__18196__auto__.call(null);
(statearr_18744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_18744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__,jobs,results,process,async))
);

return c__18195__auto__;
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
var args18802 = [];
var len__14245__auto___18805 = arguments.length;
var i__14246__auto___18806 = (0);
while(true){
if((i__14246__auto___18806 < len__14245__auto___18805)){
args18802.push((arguments[i__14246__auto___18806]));

var G__18807 = (i__14246__auto___18806 + (1));
i__14246__auto___18806 = G__18807;
continue;
} else {
}
break;
}

var G__18804 = args18802.length;
switch (G__18804) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18802.length)].join('')));

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
var args18809 = [];
var len__14245__auto___18812 = arguments.length;
var i__14246__auto___18813 = (0);
while(true){
if((i__14246__auto___18813 < len__14245__auto___18812)){
args18809.push((arguments[i__14246__auto___18813]));

var G__18814 = (i__14246__auto___18813 + (1));
i__14246__auto___18813 = G__18814;
continue;
} else {
}
break;
}

var G__18811 = args18809.length;
switch (G__18811) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18809.length)].join('')));

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
var args18816 = [];
var len__14245__auto___18869 = arguments.length;
var i__14246__auto___18870 = (0);
while(true){
if((i__14246__auto___18870 < len__14245__auto___18869)){
args18816.push((arguments[i__14246__auto___18870]));

var G__18871 = (i__14246__auto___18870 + (1));
i__14246__auto___18870 = G__18871;
continue;
} else {
}
break;
}

var G__18818 = args18816.length;
switch (G__18818) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18816.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18195__auto___18873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___18873,tc,fc){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___18873,tc,fc){
return (function (state_18844){
var state_val_18845 = (state_18844[(1)]);
if((state_val_18845 === (7))){
var inst_18840 = (state_18844[(2)]);
var state_18844__$1 = state_18844;
var statearr_18846_18874 = state_18844__$1;
(statearr_18846_18874[(2)] = inst_18840);

(statearr_18846_18874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (1))){
var state_18844__$1 = state_18844;
var statearr_18847_18875 = state_18844__$1;
(statearr_18847_18875[(2)] = null);

(statearr_18847_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (4))){
var inst_18821 = (state_18844[(7)]);
var inst_18821__$1 = (state_18844[(2)]);
var inst_18822 = (inst_18821__$1 == null);
var state_18844__$1 = (function (){var statearr_18848 = state_18844;
(statearr_18848[(7)] = inst_18821__$1);

return statearr_18848;
})();
if(cljs.core.truth_(inst_18822)){
var statearr_18849_18876 = state_18844__$1;
(statearr_18849_18876[(1)] = (5));

} else {
var statearr_18850_18877 = state_18844__$1;
(statearr_18850_18877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (13))){
var state_18844__$1 = state_18844;
var statearr_18851_18878 = state_18844__$1;
(statearr_18851_18878[(2)] = null);

(statearr_18851_18878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (6))){
var inst_18821 = (state_18844[(7)]);
var inst_18827 = p.call(null,inst_18821);
var state_18844__$1 = state_18844;
if(cljs.core.truth_(inst_18827)){
var statearr_18852_18879 = state_18844__$1;
(statearr_18852_18879[(1)] = (9));

} else {
var statearr_18853_18880 = state_18844__$1;
(statearr_18853_18880[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (3))){
var inst_18842 = (state_18844[(2)]);
var state_18844__$1 = state_18844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18844__$1,inst_18842);
} else {
if((state_val_18845 === (12))){
var state_18844__$1 = state_18844;
var statearr_18854_18881 = state_18844__$1;
(statearr_18854_18881[(2)] = null);

(statearr_18854_18881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (2))){
var state_18844__$1 = state_18844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18844__$1,(4),ch);
} else {
if((state_val_18845 === (11))){
var inst_18821 = (state_18844[(7)]);
var inst_18831 = (state_18844[(2)]);
var state_18844__$1 = state_18844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18844__$1,(8),inst_18831,inst_18821);
} else {
if((state_val_18845 === (9))){
var state_18844__$1 = state_18844;
var statearr_18855_18882 = state_18844__$1;
(statearr_18855_18882[(2)] = tc);

(statearr_18855_18882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (5))){
var inst_18824 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18825 = cljs.core.async.close_BANG_.call(null,fc);
var state_18844__$1 = (function (){var statearr_18856 = state_18844;
(statearr_18856[(8)] = inst_18824);

return statearr_18856;
})();
var statearr_18857_18883 = state_18844__$1;
(statearr_18857_18883[(2)] = inst_18825);

(statearr_18857_18883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (14))){
var inst_18838 = (state_18844[(2)]);
var state_18844__$1 = state_18844;
var statearr_18858_18884 = state_18844__$1;
(statearr_18858_18884[(2)] = inst_18838);

(statearr_18858_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (10))){
var state_18844__$1 = state_18844;
var statearr_18859_18885 = state_18844__$1;
(statearr_18859_18885[(2)] = fc);

(statearr_18859_18885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18845 === (8))){
var inst_18833 = (state_18844[(2)]);
var state_18844__$1 = state_18844;
if(cljs.core.truth_(inst_18833)){
var statearr_18860_18886 = state_18844__$1;
(statearr_18860_18886[(1)] = (12));

} else {
var statearr_18861_18887 = state_18844__$1;
(statearr_18861_18887[(1)] = (13));

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
});})(c__18195__auto___18873,tc,fc))
;
return ((function (switch__18083__auto__,c__18195__auto___18873,tc,fc){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_18865 = [null,null,null,null,null,null,null,null,null];
(statearr_18865[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_18865[(1)] = (1));

return statearr_18865;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_18844){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18866){if((e18866 instanceof Object)){
var ex__18087__auto__ = e18866;
var statearr_18867_18888 = state_18844;
(statearr_18867_18888[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18889 = state_18844;
state_18844 = G__18889;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_18844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_18844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___18873,tc,fc))
})();
var state__18197__auto__ = (function (){var statearr_18868 = f__18196__auto__.call(null);
(statearr_18868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___18873);

return statearr_18868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___18873,tc,fc))
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
var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__){
return (function (state_18953){
var state_val_18954 = (state_18953[(1)]);
if((state_val_18954 === (7))){
var inst_18949 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18955_18976 = state_18953__$1;
(statearr_18955_18976[(2)] = inst_18949);

(statearr_18955_18976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (1))){
var inst_18933 = init;
var state_18953__$1 = (function (){var statearr_18956 = state_18953;
(statearr_18956[(7)] = inst_18933);

return statearr_18956;
})();
var statearr_18957_18977 = state_18953__$1;
(statearr_18957_18977[(2)] = null);

(statearr_18957_18977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (4))){
var inst_18936 = (state_18953[(8)]);
var inst_18936__$1 = (state_18953[(2)]);
var inst_18937 = (inst_18936__$1 == null);
var state_18953__$1 = (function (){var statearr_18958 = state_18953;
(statearr_18958[(8)] = inst_18936__$1);

return statearr_18958;
})();
if(cljs.core.truth_(inst_18937)){
var statearr_18959_18978 = state_18953__$1;
(statearr_18959_18978[(1)] = (5));

} else {
var statearr_18960_18979 = state_18953__$1;
(statearr_18960_18979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (6))){
var inst_18940 = (state_18953[(9)]);
var inst_18936 = (state_18953[(8)]);
var inst_18933 = (state_18953[(7)]);
var inst_18940__$1 = f.call(null,inst_18933,inst_18936);
var inst_18941 = cljs.core.reduced_QMARK_.call(null,inst_18940__$1);
var state_18953__$1 = (function (){var statearr_18961 = state_18953;
(statearr_18961[(9)] = inst_18940__$1);

return statearr_18961;
})();
if(inst_18941){
var statearr_18962_18980 = state_18953__$1;
(statearr_18962_18980[(1)] = (8));

} else {
var statearr_18963_18981 = state_18953__$1;
(statearr_18963_18981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (3))){
var inst_18951 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18953__$1,inst_18951);
} else {
if((state_val_18954 === (2))){
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18953__$1,(4),ch);
} else {
if((state_val_18954 === (9))){
var inst_18940 = (state_18953[(9)]);
var inst_18933 = inst_18940;
var state_18953__$1 = (function (){var statearr_18964 = state_18953;
(statearr_18964[(7)] = inst_18933);

return statearr_18964;
})();
var statearr_18965_18982 = state_18953__$1;
(statearr_18965_18982[(2)] = null);

(statearr_18965_18982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (5))){
var inst_18933 = (state_18953[(7)]);
var state_18953__$1 = state_18953;
var statearr_18966_18983 = state_18953__$1;
(statearr_18966_18983[(2)] = inst_18933);

(statearr_18966_18983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (10))){
var inst_18947 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18967_18984 = state_18953__$1;
(statearr_18967_18984[(2)] = inst_18947);

(statearr_18967_18984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (8))){
var inst_18940 = (state_18953[(9)]);
var inst_18943 = cljs.core.deref.call(null,inst_18940);
var state_18953__$1 = state_18953;
var statearr_18968_18985 = state_18953__$1;
(statearr_18968_18985[(2)] = inst_18943);

(statearr_18968_18985[(1)] = (10));


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
});})(c__18195__auto__))
;
return ((function (switch__18083__auto__,c__18195__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18084__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18084__auto____0 = (function (){
var statearr_18972 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18972[(0)] = cljs$core$async$reduce_$_state_machine__18084__auto__);

(statearr_18972[(1)] = (1));

return statearr_18972;
});
var cljs$core$async$reduce_$_state_machine__18084__auto____1 = (function (state_18953){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_18953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e18973){if((e18973 instanceof Object)){
var ex__18087__auto__ = e18973;
var statearr_18974_18986 = state_18953;
(statearr_18974_18986[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18987 = state_18953;
state_18953 = G__18987;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18084__auto__ = function(state_18953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18084__auto____1.call(this,state_18953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18084__auto____0;
cljs$core$async$reduce_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18084__auto____1;
return cljs$core$async$reduce_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__))
})();
var state__18197__auto__ = (function (){var statearr_18975 = f__18196__auto__.call(null);
(statearr_18975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_18975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__))
);

return c__18195__auto__;
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
var args18988 = [];
var len__14245__auto___19040 = arguments.length;
var i__14246__auto___19041 = (0);
while(true){
if((i__14246__auto___19041 < len__14245__auto___19040)){
args18988.push((arguments[i__14246__auto___19041]));

var G__19042 = (i__14246__auto___19041 + (1));
i__14246__auto___19041 = G__19042;
continue;
} else {
}
break;
}

var G__18990 = args18988.length;
switch (G__18990) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18988.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__){
return (function (state_19015){
var state_val_19016 = (state_19015[(1)]);
if((state_val_19016 === (7))){
var inst_18997 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19017_19044 = state_19015__$1;
(statearr_19017_19044[(2)] = inst_18997);

(statearr_19017_19044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (1))){
var inst_18991 = cljs.core.seq.call(null,coll);
var inst_18992 = inst_18991;
var state_19015__$1 = (function (){var statearr_19018 = state_19015;
(statearr_19018[(7)] = inst_18992);

return statearr_19018;
})();
var statearr_19019_19045 = state_19015__$1;
(statearr_19019_19045[(2)] = null);

(statearr_19019_19045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (4))){
var inst_18992 = (state_19015[(7)]);
var inst_18995 = cljs.core.first.call(null,inst_18992);
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19015__$1,(7),ch,inst_18995);
} else {
if((state_val_19016 === (13))){
var inst_19009 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19020_19046 = state_19015__$1;
(statearr_19020_19046[(2)] = inst_19009);

(statearr_19020_19046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (6))){
var inst_19000 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
if(cljs.core.truth_(inst_19000)){
var statearr_19021_19047 = state_19015__$1;
(statearr_19021_19047[(1)] = (8));

} else {
var statearr_19022_19048 = state_19015__$1;
(statearr_19022_19048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (3))){
var inst_19013 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19015__$1,inst_19013);
} else {
if((state_val_19016 === (12))){
var state_19015__$1 = state_19015;
var statearr_19023_19049 = state_19015__$1;
(statearr_19023_19049[(2)] = null);

(statearr_19023_19049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (2))){
var inst_18992 = (state_19015[(7)]);
var state_19015__$1 = state_19015;
if(cljs.core.truth_(inst_18992)){
var statearr_19024_19050 = state_19015__$1;
(statearr_19024_19050[(1)] = (4));

} else {
var statearr_19025_19051 = state_19015__$1;
(statearr_19025_19051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (11))){
var inst_19006 = cljs.core.async.close_BANG_.call(null,ch);
var state_19015__$1 = state_19015;
var statearr_19026_19052 = state_19015__$1;
(statearr_19026_19052[(2)] = inst_19006);

(statearr_19026_19052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (9))){
var state_19015__$1 = state_19015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19027_19053 = state_19015__$1;
(statearr_19027_19053[(1)] = (11));

} else {
var statearr_19028_19054 = state_19015__$1;
(statearr_19028_19054[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (5))){
var inst_18992 = (state_19015[(7)]);
var state_19015__$1 = state_19015;
var statearr_19029_19055 = state_19015__$1;
(statearr_19029_19055[(2)] = inst_18992);

(statearr_19029_19055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (10))){
var inst_19011 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19030_19056 = state_19015__$1;
(statearr_19030_19056[(2)] = inst_19011);

(statearr_19030_19056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (8))){
var inst_18992 = (state_19015[(7)]);
var inst_19002 = cljs.core.next.call(null,inst_18992);
var inst_18992__$1 = inst_19002;
var state_19015__$1 = (function (){var statearr_19031 = state_19015;
(statearr_19031[(7)] = inst_18992__$1);

return statearr_19031;
})();
var statearr_19032_19057 = state_19015__$1;
(statearr_19032_19057[(2)] = null);

(statearr_19032_19057[(1)] = (2));


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
});})(c__18195__auto__))
;
return ((function (switch__18083__auto__,c__18195__auto__){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_19036 = [null,null,null,null,null,null,null,null];
(statearr_19036[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_19036[(1)] = (1));

return statearr_19036;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_19015){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_19015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e19037){if((e19037 instanceof Object)){
var ex__18087__auto__ = e19037;
var statearr_19038_19058 = state_19015;
(statearr_19038_19058[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19059 = state_19015;
state_19015 = G__19059;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_19015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_19015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__))
})();
var state__18197__auto__ = (function (){var statearr_19039 = f__18196__auto__.call(null);
(statearr_19039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_19039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__))
);

return c__18195__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async19281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19281 = (function (mult,ch,cs,meta19282){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19282 = meta19282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19283,meta19282__$1){
var self__ = this;
var _19283__$1 = this;
return (new cljs.core.async.t_cljs$core$async19281(self__.mult,self__.ch,self__.cs,meta19282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19283){
var self__ = this;
var _19283__$1 = this;
return self__.meta19282;
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19282","meta19282",-640987294,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19281";

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19281");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19281(mult__$1,ch__$1,cs__$1,meta19282){
return (new cljs.core.async.t_cljs$core$async19281(mult__$1,ch__$1,cs__$1,meta19282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19281(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18195__auto___19502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___19502,cs,m,dchan,dctr,done){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___19502,cs,m,dchan,dctr,done){
return (function (state_19414){
var state_val_19415 = (state_19414[(1)]);
if((state_val_19415 === (7))){
var inst_19410 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19416_19503 = state_19414__$1;
(statearr_19416_19503[(2)] = inst_19410);

(statearr_19416_19503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (20))){
var inst_19315 = (state_19414[(7)]);
var inst_19325 = cljs.core.first.call(null,inst_19315);
var inst_19326 = cljs.core.nth.call(null,inst_19325,(0),null);
var inst_19327 = cljs.core.nth.call(null,inst_19325,(1),null);
var state_19414__$1 = (function (){var statearr_19417 = state_19414;
(statearr_19417[(8)] = inst_19326);

return statearr_19417;
})();
if(cljs.core.truth_(inst_19327)){
var statearr_19418_19504 = state_19414__$1;
(statearr_19418_19504[(1)] = (22));

} else {
var statearr_19419_19505 = state_19414__$1;
(statearr_19419_19505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (27))){
var inst_19355 = (state_19414[(9)]);
var inst_19286 = (state_19414[(10)]);
var inst_19362 = (state_19414[(11)]);
var inst_19357 = (state_19414[(12)]);
var inst_19362__$1 = cljs.core._nth.call(null,inst_19355,inst_19357);
var inst_19363 = cljs.core.async.put_BANG_.call(null,inst_19362__$1,inst_19286,done);
var state_19414__$1 = (function (){var statearr_19420 = state_19414;
(statearr_19420[(11)] = inst_19362__$1);

return statearr_19420;
})();
if(cljs.core.truth_(inst_19363)){
var statearr_19421_19506 = state_19414__$1;
(statearr_19421_19506[(1)] = (30));

} else {
var statearr_19422_19507 = state_19414__$1;
(statearr_19422_19507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (1))){
var state_19414__$1 = state_19414;
var statearr_19423_19508 = state_19414__$1;
(statearr_19423_19508[(2)] = null);

(statearr_19423_19508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (24))){
var inst_19315 = (state_19414[(7)]);
var inst_19332 = (state_19414[(2)]);
var inst_19333 = cljs.core.next.call(null,inst_19315);
var inst_19295 = inst_19333;
var inst_19296 = null;
var inst_19297 = (0);
var inst_19298 = (0);
var state_19414__$1 = (function (){var statearr_19424 = state_19414;
(statearr_19424[(13)] = inst_19295);

(statearr_19424[(14)] = inst_19296);

(statearr_19424[(15)] = inst_19298);

(statearr_19424[(16)] = inst_19297);

(statearr_19424[(17)] = inst_19332);

return statearr_19424;
})();
var statearr_19425_19509 = state_19414__$1;
(statearr_19425_19509[(2)] = null);

(statearr_19425_19509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (39))){
var state_19414__$1 = state_19414;
var statearr_19429_19510 = state_19414__$1;
(statearr_19429_19510[(2)] = null);

(statearr_19429_19510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (4))){
var inst_19286 = (state_19414[(10)]);
var inst_19286__$1 = (state_19414[(2)]);
var inst_19287 = (inst_19286__$1 == null);
var state_19414__$1 = (function (){var statearr_19430 = state_19414;
(statearr_19430[(10)] = inst_19286__$1);

return statearr_19430;
})();
if(cljs.core.truth_(inst_19287)){
var statearr_19431_19511 = state_19414__$1;
(statearr_19431_19511[(1)] = (5));

} else {
var statearr_19432_19512 = state_19414__$1;
(statearr_19432_19512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (15))){
var inst_19295 = (state_19414[(13)]);
var inst_19296 = (state_19414[(14)]);
var inst_19298 = (state_19414[(15)]);
var inst_19297 = (state_19414[(16)]);
var inst_19311 = (state_19414[(2)]);
var inst_19312 = (inst_19298 + (1));
var tmp19426 = inst_19295;
var tmp19427 = inst_19296;
var tmp19428 = inst_19297;
var inst_19295__$1 = tmp19426;
var inst_19296__$1 = tmp19427;
var inst_19297__$1 = tmp19428;
var inst_19298__$1 = inst_19312;
var state_19414__$1 = (function (){var statearr_19433 = state_19414;
(statearr_19433[(13)] = inst_19295__$1);

(statearr_19433[(18)] = inst_19311);

(statearr_19433[(14)] = inst_19296__$1);

(statearr_19433[(15)] = inst_19298__$1);

(statearr_19433[(16)] = inst_19297__$1);

return statearr_19433;
})();
var statearr_19434_19513 = state_19414__$1;
(statearr_19434_19513[(2)] = null);

(statearr_19434_19513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (21))){
var inst_19336 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19438_19514 = state_19414__$1;
(statearr_19438_19514[(2)] = inst_19336);

(statearr_19438_19514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (31))){
var inst_19362 = (state_19414[(11)]);
var inst_19366 = done.call(null,null);
var inst_19367 = cljs.core.async.untap_STAR_.call(null,m,inst_19362);
var state_19414__$1 = (function (){var statearr_19439 = state_19414;
(statearr_19439[(19)] = inst_19366);

return statearr_19439;
})();
var statearr_19440_19515 = state_19414__$1;
(statearr_19440_19515[(2)] = inst_19367);

(statearr_19440_19515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (32))){
var inst_19355 = (state_19414[(9)]);
var inst_19354 = (state_19414[(20)]);
var inst_19356 = (state_19414[(21)]);
var inst_19357 = (state_19414[(12)]);
var inst_19369 = (state_19414[(2)]);
var inst_19370 = (inst_19357 + (1));
var tmp19435 = inst_19355;
var tmp19436 = inst_19354;
var tmp19437 = inst_19356;
var inst_19354__$1 = tmp19436;
var inst_19355__$1 = tmp19435;
var inst_19356__$1 = tmp19437;
var inst_19357__$1 = inst_19370;
var state_19414__$1 = (function (){var statearr_19441 = state_19414;
(statearr_19441[(9)] = inst_19355__$1);

(statearr_19441[(20)] = inst_19354__$1);

(statearr_19441[(21)] = inst_19356__$1);

(statearr_19441[(12)] = inst_19357__$1);

(statearr_19441[(22)] = inst_19369);

return statearr_19441;
})();
var statearr_19442_19516 = state_19414__$1;
(statearr_19442_19516[(2)] = null);

(statearr_19442_19516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (40))){
var inst_19382 = (state_19414[(23)]);
var inst_19386 = done.call(null,null);
var inst_19387 = cljs.core.async.untap_STAR_.call(null,m,inst_19382);
var state_19414__$1 = (function (){var statearr_19443 = state_19414;
(statearr_19443[(24)] = inst_19386);

return statearr_19443;
})();
var statearr_19444_19517 = state_19414__$1;
(statearr_19444_19517[(2)] = inst_19387);

(statearr_19444_19517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (33))){
var inst_19373 = (state_19414[(25)]);
var inst_19375 = cljs.core.chunked_seq_QMARK_.call(null,inst_19373);
var state_19414__$1 = state_19414;
if(inst_19375){
var statearr_19445_19518 = state_19414__$1;
(statearr_19445_19518[(1)] = (36));

} else {
var statearr_19446_19519 = state_19414__$1;
(statearr_19446_19519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (13))){
var inst_19305 = (state_19414[(26)]);
var inst_19308 = cljs.core.async.close_BANG_.call(null,inst_19305);
var state_19414__$1 = state_19414;
var statearr_19447_19520 = state_19414__$1;
(statearr_19447_19520[(2)] = inst_19308);

(statearr_19447_19520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (22))){
var inst_19326 = (state_19414[(8)]);
var inst_19329 = cljs.core.async.close_BANG_.call(null,inst_19326);
var state_19414__$1 = state_19414;
var statearr_19448_19521 = state_19414__$1;
(statearr_19448_19521[(2)] = inst_19329);

(statearr_19448_19521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (36))){
var inst_19373 = (state_19414[(25)]);
var inst_19377 = cljs.core.chunk_first.call(null,inst_19373);
var inst_19378 = cljs.core.chunk_rest.call(null,inst_19373);
var inst_19379 = cljs.core.count.call(null,inst_19377);
var inst_19354 = inst_19378;
var inst_19355 = inst_19377;
var inst_19356 = inst_19379;
var inst_19357 = (0);
var state_19414__$1 = (function (){var statearr_19449 = state_19414;
(statearr_19449[(9)] = inst_19355);

(statearr_19449[(20)] = inst_19354);

(statearr_19449[(21)] = inst_19356);

(statearr_19449[(12)] = inst_19357);

return statearr_19449;
})();
var statearr_19450_19522 = state_19414__$1;
(statearr_19450_19522[(2)] = null);

(statearr_19450_19522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (41))){
var inst_19373 = (state_19414[(25)]);
var inst_19389 = (state_19414[(2)]);
var inst_19390 = cljs.core.next.call(null,inst_19373);
var inst_19354 = inst_19390;
var inst_19355 = null;
var inst_19356 = (0);
var inst_19357 = (0);
var state_19414__$1 = (function (){var statearr_19451 = state_19414;
(statearr_19451[(9)] = inst_19355);

(statearr_19451[(27)] = inst_19389);

(statearr_19451[(20)] = inst_19354);

(statearr_19451[(21)] = inst_19356);

(statearr_19451[(12)] = inst_19357);

return statearr_19451;
})();
var statearr_19452_19523 = state_19414__$1;
(statearr_19452_19523[(2)] = null);

(statearr_19452_19523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (43))){
var state_19414__$1 = state_19414;
var statearr_19453_19524 = state_19414__$1;
(statearr_19453_19524[(2)] = null);

(statearr_19453_19524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (29))){
var inst_19398 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19454_19525 = state_19414__$1;
(statearr_19454_19525[(2)] = inst_19398);

(statearr_19454_19525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (44))){
var inst_19407 = (state_19414[(2)]);
var state_19414__$1 = (function (){var statearr_19455 = state_19414;
(statearr_19455[(28)] = inst_19407);

return statearr_19455;
})();
var statearr_19456_19526 = state_19414__$1;
(statearr_19456_19526[(2)] = null);

(statearr_19456_19526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (6))){
var inst_19346 = (state_19414[(29)]);
var inst_19345 = cljs.core.deref.call(null,cs);
var inst_19346__$1 = cljs.core.keys.call(null,inst_19345);
var inst_19347 = cljs.core.count.call(null,inst_19346__$1);
var inst_19348 = cljs.core.reset_BANG_.call(null,dctr,inst_19347);
var inst_19353 = cljs.core.seq.call(null,inst_19346__$1);
var inst_19354 = inst_19353;
var inst_19355 = null;
var inst_19356 = (0);
var inst_19357 = (0);
var state_19414__$1 = (function (){var statearr_19457 = state_19414;
(statearr_19457[(9)] = inst_19355);

(statearr_19457[(30)] = inst_19348);

(statearr_19457[(29)] = inst_19346__$1);

(statearr_19457[(20)] = inst_19354);

(statearr_19457[(21)] = inst_19356);

(statearr_19457[(12)] = inst_19357);

return statearr_19457;
})();
var statearr_19458_19527 = state_19414__$1;
(statearr_19458_19527[(2)] = null);

(statearr_19458_19527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (28))){
var inst_19373 = (state_19414[(25)]);
var inst_19354 = (state_19414[(20)]);
var inst_19373__$1 = cljs.core.seq.call(null,inst_19354);
var state_19414__$1 = (function (){var statearr_19459 = state_19414;
(statearr_19459[(25)] = inst_19373__$1);

return statearr_19459;
})();
if(inst_19373__$1){
var statearr_19460_19528 = state_19414__$1;
(statearr_19460_19528[(1)] = (33));

} else {
var statearr_19461_19529 = state_19414__$1;
(statearr_19461_19529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (25))){
var inst_19356 = (state_19414[(21)]);
var inst_19357 = (state_19414[(12)]);
var inst_19359 = (inst_19357 < inst_19356);
var inst_19360 = inst_19359;
var state_19414__$1 = state_19414;
if(cljs.core.truth_(inst_19360)){
var statearr_19462_19530 = state_19414__$1;
(statearr_19462_19530[(1)] = (27));

} else {
var statearr_19463_19531 = state_19414__$1;
(statearr_19463_19531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (34))){
var state_19414__$1 = state_19414;
var statearr_19464_19532 = state_19414__$1;
(statearr_19464_19532[(2)] = null);

(statearr_19464_19532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (17))){
var state_19414__$1 = state_19414;
var statearr_19465_19533 = state_19414__$1;
(statearr_19465_19533[(2)] = null);

(statearr_19465_19533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (3))){
var inst_19412 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19414__$1,inst_19412);
} else {
if((state_val_19415 === (12))){
var inst_19341 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19466_19534 = state_19414__$1;
(statearr_19466_19534[(2)] = inst_19341);

(statearr_19466_19534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (2))){
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(4),ch);
} else {
if((state_val_19415 === (23))){
var state_19414__$1 = state_19414;
var statearr_19467_19535 = state_19414__$1;
(statearr_19467_19535[(2)] = null);

(statearr_19467_19535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (35))){
var inst_19396 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19468_19536 = state_19414__$1;
(statearr_19468_19536[(2)] = inst_19396);

(statearr_19468_19536[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (19))){
var inst_19315 = (state_19414[(7)]);
var inst_19319 = cljs.core.chunk_first.call(null,inst_19315);
var inst_19320 = cljs.core.chunk_rest.call(null,inst_19315);
var inst_19321 = cljs.core.count.call(null,inst_19319);
var inst_19295 = inst_19320;
var inst_19296 = inst_19319;
var inst_19297 = inst_19321;
var inst_19298 = (0);
var state_19414__$1 = (function (){var statearr_19469 = state_19414;
(statearr_19469[(13)] = inst_19295);

(statearr_19469[(14)] = inst_19296);

(statearr_19469[(15)] = inst_19298);

(statearr_19469[(16)] = inst_19297);

return statearr_19469;
})();
var statearr_19470_19537 = state_19414__$1;
(statearr_19470_19537[(2)] = null);

(statearr_19470_19537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (11))){
var inst_19295 = (state_19414[(13)]);
var inst_19315 = (state_19414[(7)]);
var inst_19315__$1 = cljs.core.seq.call(null,inst_19295);
var state_19414__$1 = (function (){var statearr_19471 = state_19414;
(statearr_19471[(7)] = inst_19315__$1);

return statearr_19471;
})();
if(inst_19315__$1){
var statearr_19472_19538 = state_19414__$1;
(statearr_19472_19538[(1)] = (16));

} else {
var statearr_19473_19539 = state_19414__$1;
(statearr_19473_19539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (9))){
var inst_19343 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19474_19540 = state_19414__$1;
(statearr_19474_19540[(2)] = inst_19343);

(statearr_19474_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (5))){
var inst_19293 = cljs.core.deref.call(null,cs);
var inst_19294 = cljs.core.seq.call(null,inst_19293);
var inst_19295 = inst_19294;
var inst_19296 = null;
var inst_19297 = (0);
var inst_19298 = (0);
var state_19414__$1 = (function (){var statearr_19475 = state_19414;
(statearr_19475[(13)] = inst_19295);

(statearr_19475[(14)] = inst_19296);

(statearr_19475[(15)] = inst_19298);

(statearr_19475[(16)] = inst_19297);

return statearr_19475;
})();
var statearr_19476_19541 = state_19414__$1;
(statearr_19476_19541[(2)] = null);

(statearr_19476_19541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (14))){
var state_19414__$1 = state_19414;
var statearr_19477_19542 = state_19414__$1;
(statearr_19477_19542[(2)] = null);

(statearr_19477_19542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (45))){
var inst_19404 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19478_19543 = state_19414__$1;
(statearr_19478_19543[(2)] = inst_19404);

(statearr_19478_19543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (26))){
var inst_19346 = (state_19414[(29)]);
var inst_19400 = (state_19414[(2)]);
var inst_19401 = cljs.core.seq.call(null,inst_19346);
var state_19414__$1 = (function (){var statearr_19479 = state_19414;
(statearr_19479[(31)] = inst_19400);

return statearr_19479;
})();
if(inst_19401){
var statearr_19480_19544 = state_19414__$1;
(statearr_19480_19544[(1)] = (42));

} else {
var statearr_19481_19545 = state_19414__$1;
(statearr_19481_19545[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (16))){
var inst_19315 = (state_19414[(7)]);
var inst_19317 = cljs.core.chunked_seq_QMARK_.call(null,inst_19315);
var state_19414__$1 = state_19414;
if(inst_19317){
var statearr_19482_19546 = state_19414__$1;
(statearr_19482_19546[(1)] = (19));

} else {
var statearr_19483_19547 = state_19414__$1;
(statearr_19483_19547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (38))){
var inst_19393 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19484_19548 = state_19414__$1;
(statearr_19484_19548[(2)] = inst_19393);

(statearr_19484_19548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (30))){
var state_19414__$1 = state_19414;
var statearr_19485_19549 = state_19414__$1;
(statearr_19485_19549[(2)] = null);

(statearr_19485_19549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (10))){
var inst_19296 = (state_19414[(14)]);
var inst_19298 = (state_19414[(15)]);
var inst_19304 = cljs.core._nth.call(null,inst_19296,inst_19298);
var inst_19305 = cljs.core.nth.call(null,inst_19304,(0),null);
var inst_19306 = cljs.core.nth.call(null,inst_19304,(1),null);
var state_19414__$1 = (function (){var statearr_19486 = state_19414;
(statearr_19486[(26)] = inst_19305);

return statearr_19486;
})();
if(cljs.core.truth_(inst_19306)){
var statearr_19487_19550 = state_19414__$1;
(statearr_19487_19550[(1)] = (13));

} else {
var statearr_19488_19551 = state_19414__$1;
(statearr_19488_19551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (18))){
var inst_19339 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19489_19552 = state_19414__$1;
(statearr_19489_19552[(2)] = inst_19339);

(statearr_19489_19552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (42))){
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(45),dchan);
} else {
if((state_val_19415 === (37))){
var inst_19373 = (state_19414[(25)]);
var inst_19286 = (state_19414[(10)]);
var inst_19382 = (state_19414[(23)]);
var inst_19382__$1 = cljs.core.first.call(null,inst_19373);
var inst_19383 = cljs.core.async.put_BANG_.call(null,inst_19382__$1,inst_19286,done);
var state_19414__$1 = (function (){var statearr_19490 = state_19414;
(statearr_19490[(23)] = inst_19382__$1);

return statearr_19490;
})();
if(cljs.core.truth_(inst_19383)){
var statearr_19491_19553 = state_19414__$1;
(statearr_19491_19553[(1)] = (39));

} else {
var statearr_19492_19554 = state_19414__$1;
(statearr_19492_19554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (8))){
var inst_19298 = (state_19414[(15)]);
var inst_19297 = (state_19414[(16)]);
var inst_19300 = (inst_19298 < inst_19297);
var inst_19301 = inst_19300;
var state_19414__$1 = state_19414;
if(cljs.core.truth_(inst_19301)){
var statearr_19493_19555 = state_19414__$1;
(statearr_19493_19555[(1)] = (10));

} else {
var statearr_19494_19556 = state_19414__$1;
(statearr_19494_19556[(1)] = (11));

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
});})(c__18195__auto___19502,cs,m,dchan,dctr,done))
;
return ((function (switch__18083__auto__,c__18195__auto___19502,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18084__auto__ = null;
var cljs$core$async$mult_$_state_machine__18084__auto____0 = (function (){
var statearr_19498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19498[(0)] = cljs$core$async$mult_$_state_machine__18084__auto__);

(statearr_19498[(1)] = (1));

return statearr_19498;
});
var cljs$core$async$mult_$_state_machine__18084__auto____1 = (function (state_19414){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_19414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e19499){if((e19499 instanceof Object)){
var ex__18087__auto__ = e19499;
var statearr_19500_19557 = state_19414;
(statearr_19500_19557[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19558 = state_19414;
state_19414 = G__19558;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18084__auto__ = function(state_19414){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18084__auto____1.call(this,state_19414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18084__auto____0;
cljs$core$async$mult_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18084__auto____1;
return cljs$core$async$mult_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___19502,cs,m,dchan,dctr,done))
})();
var state__18197__auto__ = (function (){var statearr_19501 = f__18196__auto__.call(null);
(statearr_19501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___19502);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___19502,cs,m,dchan,dctr,done))
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
var args19559 = [];
var len__14245__auto___19562 = arguments.length;
var i__14246__auto___19563 = (0);
while(true){
if((i__14246__auto___19563 < len__14245__auto___19562)){
args19559.push((arguments[i__14246__auto___19563]));

var G__19564 = (i__14246__auto___19563 + (1));
i__14246__auto___19563 = G__19564;
continue;
} else {
}
break;
}

var G__19561 = args19559.length;
switch (G__19561) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19559.length)].join('')));

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
var len__14245__auto___19576 = arguments.length;
var i__14246__auto___19577 = (0);
while(true){
if((i__14246__auto___19577 < len__14245__auto___19576)){
args__14252__auto__.push((arguments[i__14246__auto___19577]));

var G__19578 = (i__14246__auto___19577 + (1));
i__14246__auto___19577 = G__19578;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((3) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14253__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19570){
var map__19571 = p__19570;
var map__19571__$1 = ((((!((map__19571 == null)))?((((map__19571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19571):map__19571);
var opts = map__19571__$1;
var statearr_19573_19579 = state;
(statearr_19573_19579[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__19571,map__19571__$1,opts){
return (function (val){
var statearr_19574_19580 = state;
(statearr_19574_19580[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19571,map__19571__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19575_19581 = state;
(statearr_19575_19581[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19566){
var G__19567 = cljs.core.first.call(null,seq19566);
var seq19566__$1 = cljs.core.next.call(null,seq19566);
var G__19568 = cljs.core.first.call(null,seq19566__$1);
var seq19566__$2 = cljs.core.next.call(null,seq19566__$1);
var G__19569 = cljs.core.first.call(null,seq19566__$2);
var seq19566__$3 = cljs.core.next.call(null,seq19566__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19567,G__19568,G__19569,seq19566__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19745 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19746){
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
this.meta19746 = meta19746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19747,meta19746__$1){
var self__ = this;
var _19747__$1 = this;
return (new cljs.core.async.t_cljs$core$async19745(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19746__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19747){
var self__ = this;
var _19747__$1 = this;
return self__.meta19746;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19745.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19746","meta19746",1512922025,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19745";

cljs.core.async.t_cljs$core$async19745.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19745");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19745 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19745(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19746){
return (new cljs.core.async.t_cljs$core$async19745(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19746));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19745(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18195__auto___19908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19845){
var state_val_19846 = (state_19845[(1)]);
if((state_val_19846 === (7))){
var inst_19763 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19847_19909 = state_19845__$1;
(statearr_19847_19909[(2)] = inst_19763);

(statearr_19847_19909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (20))){
var inst_19775 = (state_19845[(7)]);
var state_19845__$1 = state_19845;
var statearr_19848_19910 = state_19845__$1;
(statearr_19848_19910[(2)] = inst_19775);

(statearr_19848_19910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (27))){
var state_19845__$1 = state_19845;
var statearr_19849_19911 = state_19845__$1;
(statearr_19849_19911[(2)] = null);

(statearr_19849_19911[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (1))){
var inst_19751 = (state_19845[(8)]);
var inst_19751__$1 = calc_state.call(null);
var inst_19753 = (inst_19751__$1 == null);
var inst_19754 = cljs.core.not.call(null,inst_19753);
var state_19845__$1 = (function (){var statearr_19850 = state_19845;
(statearr_19850[(8)] = inst_19751__$1);

return statearr_19850;
})();
if(inst_19754){
var statearr_19851_19912 = state_19845__$1;
(statearr_19851_19912[(1)] = (2));

} else {
var statearr_19852_19913 = state_19845__$1;
(statearr_19852_19913[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (24))){
var inst_19805 = (state_19845[(9)]);
var inst_19819 = (state_19845[(10)]);
var inst_19798 = (state_19845[(11)]);
var inst_19819__$1 = inst_19798.call(null,inst_19805);
var state_19845__$1 = (function (){var statearr_19853 = state_19845;
(statearr_19853[(10)] = inst_19819__$1);

return statearr_19853;
})();
if(cljs.core.truth_(inst_19819__$1)){
var statearr_19854_19914 = state_19845__$1;
(statearr_19854_19914[(1)] = (29));

} else {
var statearr_19855_19915 = state_19845__$1;
(statearr_19855_19915[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (4))){
var inst_19766 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19766)){
var statearr_19856_19916 = state_19845__$1;
(statearr_19856_19916[(1)] = (8));

} else {
var statearr_19857_19917 = state_19845__$1;
(statearr_19857_19917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (15))){
var inst_19792 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19792)){
var statearr_19858_19918 = state_19845__$1;
(statearr_19858_19918[(1)] = (19));

} else {
var statearr_19859_19919 = state_19845__$1;
(statearr_19859_19919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (21))){
var inst_19797 = (state_19845[(12)]);
var inst_19797__$1 = (state_19845[(2)]);
var inst_19798 = cljs.core.get.call(null,inst_19797__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19799 = cljs.core.get.call(null,inst_19797__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19800 = cljs.core.get.call(null,inst_19797__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19845__$1 = (function (){var statearr_19860 = state_19845;
(statearr_19860[(13)] = inst_19799);

(statearr_19860[(12)] = inst_19797__$1);

(statearr_19860[(11)] = inst_19798);

return statearr_19860;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19845__$1,(22),inst_19800);
} else {
if((state_val_19846 === (31))){
var inst_19827 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19827)){
var statearr_19861_19920 = state_19845__$1;
(statearr_19861_19920[(1)] = (32));

} else {
var statearr_19862_19921 = state_19845__$1;
(statearr_19862_19921[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (32))){
var inst_19804 = (state_19845[(14)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19845__$1,(35),out,inst_19804);
} else {
if((state_val_19846 === (33))){
var inst_19797 = (state_19845[(12)]);
var inst_19775 = inst_19797;
var state_19845__$1 = (function (){var statearr_19863 = state_19845;
(statearr_19863[(7)] = inst_19775);

return statearr_19863;
})();
var statearr_19864_19922 = state_19845__$1;
(statearr_19864_19922[(2)] = null);

(statearr_19864_19922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (13))){
var inst_19775 = (state_19845[(7)]);
var inst_19782 = inst_19775.cljs$lang$protocol_mask$partition0$;
var inst_19783 = (inst_19782 & (64));
var inst_19784 = inst_19775.cljs$core$ISeq$;
var inst_19785 = (inst_19783) || (inst_19784);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19785)){
var statearr_19865_19923 = state_19845__$1;
(statearr_19865_19923[(1)] = (16));

} else {
var statearr_19866_19924 = state_19845__$1;
(statearr_19866_19924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (22))){
var inst_19805 = (state_19845[(9)]);
var inst_19804 = (state_19845[(14)]);
var inst_19803 = (state_19845[(2)]);
var inst_19804__$1 = cljs.core.nth.call(null,inst_19803,(0),null);
var inst_19805__$1 = cljs.core.nth.call(null,inst_19803,(1),null);
var inst_19806 = (inst_19804__$1 == null);
var inst_19807 = cljs.core._EQ_.call(null,inst_19805__$1,change);
var inst_19808 = (inst_19806) || (inst_19807);
var state_19845__$1 = (function (){var statearr_19867 = state_19845;
(statearr_19867[(9)] = inst_19805__$1);

(statearr_19867[(14)] = inst_19804__$1);

return statearr_19867;
})();
if(cljs.core.truth_(inst_19808)){
var statearr_19868_19925 = state_19845__$1;
(statearr_19868_19925[(1)] = (23));

} else {
var statearr_19869_19926 = state_19845__$1;
(statearr_19869_19926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (36))){
var inst_19797 = (state_19845[(12)]);
var inst_19775 = inst_19797;
var state_19845__$1 = (function (){var statearr_19870 = state_19845;
(statearr_19870[(7)] = inst_19775);

return statearr_19870;
})();
var statearr_19871_19927 = state_19845__$1;
(statearr_19871_19927[(2)] = null);

(statearr_19871_19927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (29))){
var inst_19819 = (state_19845[(10)]);
var state_19845__$1 = state_19845;
var statearr_19872_19928 = state_19845__$1;
(statearr_19872_19928[(2)] = inst_19819);

(statearr_19872_19928[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (6))){
var state_19845__$1 = state_19845;
var statearr_19873_19929 = state_19845__$1;
(statearr_19873_19929[(2)] = false);

(statearr_19873_19929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (28))){
var inst_19815 = (state_19845[(2)]);
var inst_19816 = calc_state.call(null);
var inst_19775 = inst_19816;
var state_19845__$1 = (function (){var statearr_19874 = state_19845;
(statearr_19874[(15)] = inst_19815);

(statearr_19874[(7)] = inst_19775);

return statearr_19874;
})();
var statearr_19875_19930 = state_19845__$1;
(statearr_19875_19930[(2)] = null);

(statearr_19875_19930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (25))){
var inst_19841 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19876_19931 = state_19845__$1;
(statearr_19876_19931[(2)] = inst_19841);

(statearr_19876_19931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (34))){
var inst_19839 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19877_19932 = state_19845__$1;
(statearr_19877_19932[(2)] = inst_19839);

(statearr_19877_19932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (17))){
var state_19845__$1 = state_19845;
var statearr_19878_19933 = state_19845__$1;
(statearr_19878_19933[(2)] = false);

(statearr_19878_19933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (3))){
var state_19845__$1 = state_19845;
var statearr_19879_19934 = state_19845__$1;
(statearr_19879_19934[(2)] = false);

(statearr_19879_19934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (12))){
var inst_19843 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19845__$1,inst_19843);
} else {
if((state_val_19846 === (2))){
var inst_19751 = (state_19845[(8)]);
var inst_19756 = inst_19751.cljs$lang$protocol_mask$partition0$;
var inst_19757 = (inst_19756 & (64));
var inst_19758 = inst_19751.cljs$core$ISeq$;
var inst_19759 = (inst_19757) || (inst_19758);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19759)){
var statearr_19880_19935 = state_19845__$1;
(statearr_19880_19935[(1)] = (5));

} else {
var statearr_19881_19936 = state_19845__$1;
(statearr_19881_19936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (23))){
var inst_19804 = (state_19845[(14)]);
var inst_19810 = (inst_19804 == null);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19810)){
var statearr_19882_19937 = state_19845__$1;
(statearr_19882_19937[(1)] = (26));

} else {
var statearr_19883_19938 = state_19845__$1;
(statearr_19883_19938[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (35))){
var inst_19830 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19830)){
var statearr_19884_19939 = state_19845__$1;
(statearr_19884_19939[(1)] = (36));

} else {
var statearr_19885_19940 = state_19845__$1;
(statearr_19885_19940[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (19))){
var inst_19775 = (state_19845[(7)]);
var inst_19794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19775);
var state_19845__$1 = state_19845;
var statearr_19886_19941 = state_19845__$1;
(statearr_19886_19941[(2)] = inst_19794);

(statearr_19886_19941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (11))){
var inst_19775 = (state_19845[(7)]);
var inst_19779 = (inst_19775 == null);
var inst_19780 = cljs.core.not.call(null,inst_19779);
var state_19845__$1 = state_19845;
if(inst_19780){
var statearr_19887_19942 = state_19845__$1;
(statearr_19887_19942[(1)] = (13));

} else {
var statearr_19888_19943 = state_19845__$1;
(statearr_19888_19943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (9))){
var inst_19751 = (state_19845[(8)]);
var state_19845__$1 = state_19845;
var statearr_19889_19944 = state_19845__$1;
(statearr_19889_19944[(2)] = inst_19751);

(statearr_19889_19944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (5))){
var state_19845__$1 = state_19845;
var statearr_19890_19945 = state_19845__$1;
(statearr_19890_19945[(2)] = true);

(statearr_19890_19945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (14))){
var state_19845__$1 = state_19845;
var statearr_19891_19946 = state_19845__$1;
(statearr_19891_19946[(2)] = false);

(statearr_19891_19946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (26))){
var inst_19805 = (state_19845[(9)]);
var inst_19812 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19805);
var state_19845__$1 = state_19845;
var statearr_19892_19947 = state_19845__$1;
(statearr_19892_19947[(2)] = inst_19812);

(statearr_19892_19947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (16))){
var state_19845__$1 = state_19845;
var statearr_19893_19948 = state_19845__$1;
(statearr_19893_19948[(2)] = true);

(statearr_19893_19948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (38))){
var inst_19835 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19894_19949 = state_19845__$1;
(statearr_19894_19949[(2)] = inst_19835);

(statearr_19894_19949[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (30))){
var inst_19799 = (state_19845[(13)]);
var inst_19805 = (state_19845[(9)]);
var inst_19798 = (state_19845[(11)]);
var inst_19822 = cljs.core.empty_QMARK_.call(null,inst_19798);
var inst_19823 = inst_19799.call(null,inst_19805);
var inst_19824 = cljs.core.not.call(null,inst_19823);
var inst_19825 = (inst_19822) && (inst_19824);
var state_19845__$1 = state_19845;
var statearr_19895_19950 = state_19845__$1;
(statearr_19895_19950[(2)] = inst_19825);

(statearr_19895_19950[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (10))){
var inst_19751 = (state_19845[(8)]);
var inst_19771 = (state_19845[(2)]);
var inst_19772 = cljs.core.get.call(null,inst_19771,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19773 = cljs.core.get.call(null,inst_19771,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19774 = cljs.core.get.call(null,inst_19771,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19775 = inst_19751;
var state_19845__$1 = (function (){var statearr_19896 = state_19845;
(statearr_19896[(16)] = inst_19772);

(statearr_19896[(17)] = inst_19773);

(statearr_19896[(7)] = inst_19775);

(statearr_19896[(18)] = inst_19774);

return statearr_19896;
})();
var statearr_19897_19951 = state_19845__$1;
(statearr_19897_19951[(2)] = null);

(statearr_19897_19951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (18))){
var inst_19789 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19898_19952 = state_19845__$1;
(statearr_19898_19952[(2)] = inst_19789);

(statearr_19898_19952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (37))){
var state_19845__$1 = state_19845;
var statearr_19899_19953 = state_19845__$1;
(statearr_19899_19953[(2)] = null);

(statearr_19899_19953[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (8))){
var inst_19751 = (state_19845[(8)]);
var inst_19768 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19751);
var state_19845__$1 = state_19845;
var statearr_19900_19954 = state_19845__$1;
(statearr_19900_19954[(2)] = inst_19768);

(statearr_19900_19954[(1)] = (10));


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
});})(c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18083__auto__,c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18084__auto__ = null;
var cljs$core$async$mix_$_state_machine__18084__auto____0 = (function (){
var statearr_19904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19904[(0)] = cljs$core$async$mix_$_state_machine__18084__auto__);

(statearr_19904[(1)] = (1));

return statearr_19904;
});
var cljs$core$async$mix_$_state_machine__18084__auto____1 = (function (state_19845){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_19845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e19905){if((e19905 instanceof Object)){
var ex__18087__auto__ = e19905;
var statearr_19906_19955 = state_19845;
(statearr_19906_19955[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19956 = state_19845;
state_19845 = G__19956;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18084__auto__ = function(state_19845){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18084__auto____1.call(this,state_19845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18084__auto____0;
cljs$core$async$mix_$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18084__auto____1;
return cljs$core$async$mix_$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18197__auto__ = (function (){var statearr_19907 = f__18196__auto__.call(null);
(statearr_19907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___19908);

return statearr_19907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___19908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19957 = [];
var len__14245__auto___19960 = arguments.length;
var i__14246__auto___19961 = (0);
while(true){
if((i__14246__auto___19961 < len__14245__auto___19960)){
args19957.push((arguments[i__14246__auto___19961]));

var G__19962 = (i__14246__auto___19961 + (1));
i__14246__auto___19961 = G__19962;
continue;
} else {
}
break;
}

var G__19959 = args19957.length;
switch (G__19959) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19957.length)].join('')));

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
var args19965 = [];
var len__14245__auto___20090 = arguments.length;
var i__14246__auto___20091 = (0);
while(true){
if((i__14246__auto___20091 < len__14245__auto___20090)){
args19965.push((arguments[i__14246__auto___20091]));

var G__20092 = (i__14246__auto___20091 + (1));
i__14246__auto___20091 = G__20092;
continue;
} else {
}
break;
}

var G__19967 = args19965.length;
switch (G__19967) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19965.length)].join('')));

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
return (function (p1__19964_SHARP_){
if(cljs.core.truth_(p1__19964_SHARP_.call(null,topic))){
return p1__19964_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19964_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13187__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19968 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19969){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19969 = meta19969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19970,meta19969__$1){
var self__ = this;
var _19970__$1 = this;
return (new cljs.core.async.t_cljs$core$async19968(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19969__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19970){
var self__ = this;
var _19970__$1 = this;
return self__.meta19969;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19969","meta19969",1455617120,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19968";

cljs.core.async.t_cljs$core$async19968.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19968");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19968 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19968(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19969){
return (new cljs.core.async.t_cljs$core$async19968(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19969));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19968(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18195__auto___20094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20094,mults,ensure_mult,p){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20094,mults,ensure_mult,p){
return (function (state_20042){
var state_val_20043 = (state_20042[(1)]);
if((state_val_20043 === (7))){
var inst_20038 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20044_20095 = state_20042__$1;
(statearr_20044_20095[(2)] = inst_20038);

(statearr_20044_20095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (20))){
var state_20042__$1 = state_20042;
var statearr_20045_20096 = state_20042__$1;
(statearr_20045_20096[(2)] = null);

(statearr_20045_20096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (1))){
var state_20042__$1 = state_20042;
var statearr_20046_20097 = state_20042__$1;
(statearr_20046_20097[(2)] = null);

(statearr_20046_20097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (24))){
var inst_20021 = (state_20042[(7)]);
var inst_20030 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20021);
var state_20042__$1 = state_20042;
var statearr_20047_20098 = state_20042__$1;
(statearr_20047_20098[(2)] = inst_20030);

(statearr_20047_20098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (4))){
var inst_19973 = (state_20042[(8)]);
var inst_19973__$1 = (state_20042[(2)]);
var inst_19974 = (inst_19973__$1 == null);
var state_20042__$1 = (function (){var statearr_20048 = state_20042;
(statearr_20048[(8)] = inst_19973__$1);

return statearr_20048;
})();
if(cljs.core.truth_(inst_19974)){
var statearr_20049_20099 = state_20042__$1;
(statearr_20049_20099[(1)] = (5));

} else {
var statearr_20050_20100 = state_20042__$1;
(statearr_20050_20100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (15))){
var inst_20015 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20051_20101 = state_20042__$1;
(statearr_20051_20101[(2)] = inst_20015);

(statearr_20051_20101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (21))){
var inst_20035 = (state_20042[(2)]);
var state_20042__$1 = (function (){var statearr_20052 = state_20042;
(statearr_20052[(9)] = inst_20035);

return statearr_20052;
})();
var statearr_20053_20102 = state_20042__$1;
(statearr_20053_20102[(2)] = null);

(statearr_20053_20102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (13))){
var inst_19997 = (state_20042[(10)]);
var inst_19999 = cljs.core.chunked_seq_QMARK_.call(null,inst_19997);
var state_20042__$1 = state_20042;
if(inst_19999){
var statearr_20054_20103 = state_20042__$1;
(statearr_20054_20103[(1)] = (16));

} else {
var statearr_20055_20104 = state_20042__$1;
(statearr_20055_20104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (22))){
var inst_20027 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
if(cljs.core.truth_(inst_20027)){
var statearr_20056_20105 = state_20042__$1;
(statearr_20056_20105[(1)] = (23));

} else {
var statearr_20057_20106 = state_20042__$1;
(statearr_20057_20106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (6))){
var inst_20021 = (state_20042[(7)]);
var inst_19973 = (state_20042[(8)]);
var inst_20023 = (state_20042[(11)]);
var inst_20021__$1 = topic_fn.call(null,inst_19973);
var inst_20022 = cljs.core.deref.call(null,mults);
var inst_20023__$1 = cljs.core.get.call(null,inst_20022,inst_20021__$1);
var state_20042__$1 = (function (){var statearr_20058 = state_20042;
(statearr_20058[(7)] = inst_20021__$1);

(statearr_20058[(11)] = inst_20023__$1);

return statearr_20058;
})();
if(cljs.core.truth_(inst_20023__$1)){
var statearr_20059_20107 = state_20042__$1;
(statearr_20059_20107[(1)] = (19));

} else {
var statearr_20060_20108 = state_20042__$1;
(statearr_20060_20108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (25))){
var inst_20032 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20061_20109 = state_20042__$1;
(statearr_20061_20109[(2)] = inst_20032);

(statearr_20061_20109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (17))){
var inst_19997 = (state_20042[(10)]);
var inst_20006 = cljs.core.first.call(null,inst_19997);
var inst_20007 = cljs.core.async.muxch_STAR_.call(null,inst_20006);
var inst_20008 = cljs.core.async.close_BANG_.call(null,inst_20007);
var inst_20009 = cljs.core.next.call(null,inst_19997);
var inst_19983 = inst_20009;
var inst_19984 = null;
var inst_19985 = (0);
var inst_19986 = (0);
var state_20042__$1 = (function (){var statearr_20062 = state_20042;
(statearr_20062[(12)] = inst_19985);

(statearr_20062[(13)] = inst_19984);

(statearr_20062[(14)] = inst_19983);

(statearr_20062[(15)] = inst_19986);

(statearr_20062[(16)] = inst_20008);

return statearr_20062;
})();
var statearr_20063_20110 = state_20042__$1;
(statearr_20063_20110[(2)] = null);

(statearr_20063_20110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (3))){
var inst_20040 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20042__$1,inst_20040);
} else {
if((state_val_20043 === (12))){
var inst_20017 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20064_20111 = state_20042__$1;
(statearr_20064_20111[(2)] = inst_20017);

(statearr_20064_20111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (2))){
var state_20042__$1 = state_20042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20042__$1,(4),ch);
} else {
if((state_val_20043 === (23))){
var state_20042__$1 = state_20042;
var statearr_20065_20112 = state_20042__$1;
(statearr_20065_20112[(2)] = null);

(statearr_20065_20112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (19))){
var inst_19973 = (state_20042[(8)]);
var inst_20023 = (state_20042[(11)]);
var inst_20025 = cljs.core.async.muxch_STAR_.call(null,inst_20023);
var state_20042__$1 = state_20042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20042__$1,(22),inst_20025,inst_19973);
} else {
if((state_val_20043 === (11))){
var inst_19983 = (state_20042[(14)]);
var inst_19997 = (state_20042[(10)]);
var inst_19997__$1 = cljs.core.seq.call(null,inst_19983);
var state_20042__$1 = (function (){var statearr_20066 = state_20042;
(statearr_20066[(10)] = inst_19997__$1);

return statearr_20066;
})();
if(inst_19997__$1){
var statearr_20067_20113 = state_20042__$1;
(statearr_20067_20113[(1)] = (13));

} else {
var statearr_20068_20114 = state_20042__$1;
(statearr_20068_20114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (9))){
var inst_20019 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20069_20115 = state_20042__$1;
(statearr_20069_20115[(2)] = inst_20019);

(statearr_20069_20115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (5))){
var inst_19980 = cljs.core.deref.call(null,mults);
var inst_19981 = cljs.core.vals.call(null,inst_19980);
var inst_19982 = cljs.core.seq.call(null,inst_19981);
var inst_19983 = inst_19982;
var inst_19984 = null;
var inst_19985 = (0);
var inst_19986 = (0);
var state_20042__$1 = (function (){var statearr_20070 = state_20042;
(statearr_20070[(12)] = inst_19985);

(statearr_20070[(13)] = inst_19984);

(statearr_20070[(14)] = inst_19983);

(statearr_20070[(15)] = inst_19986);

return statearr_20070;
})();
var statearr_20071_20116 = state_20042__$1;
(statearr_20071_20116[(2)] = null);

(statearr_20071_20116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (14))){
var state_20042__$1 = state_20042;
var statearr_20075_20117 = state_20042__$1;
(statearr_20075_20117[(2)] = null);

(statearr_20075_20117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (16))){
var inst_19997 = (state_20042[(10)]);
var inst_20001 = cljs.core.chunk_first.call(null,inst_19997);
var inst_20002 = cljs.core.chunk_rest.call(null,inst_19997);
var inst_20003 = cljs.core.count.call(null,inst_20001);
var inst_19983 = inst_20002;
var inst_19984 = inst_20001;
var inst_19985 = inst_20003;
var inst_19986 = (0);
var state_20042__$1 = (function (){var statearr_20076 = state_20042;
(statearr_20076[(12)] = inst_19985);

(statearr_20076[(13)] = inst_19984);

(statearr_20076[(14)] = inst_19983);

(statearr_20076[(15)] = inst_19986);

return statearr_20076;
})();
var statearr_20077_20118 = state_20042__$1;
(statearr_20077_20118[(2)] = null);

(statearr_20077_20118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (10))){
var inst_19985 = (state_20042[(12)]);
var inst_19984 = (state_20042[(13)]);
var inst_19983 = (state_20042[(14)]);
var inst_19986 = (state_20042[(15)]);
var inst_19991 = cljs.core._nth.call(null,inst_19984,inst_19986);
var inst_19992 = cljs.core.async.muxch_STAR_.call(null,inst_19991);
var inst_19993 = cljs.core.async.close_BANG_.call(null,inst_19992);
var inst_19994 = (inst_19986 + (1));
var tmp20072 = inst_19985;
var tmp20073 = inst_19984;
var tmp20074 = inst_19983;
var inst_19983__$1 = tmp20074;
var inst_19984__$1 = tmp20073;
var inst_19985__$1 = tmp20072;
var inst_19986__$1 = inst_19994;
var state_20042__$1 = (function (){var statearr_20078 = state_20042;
(statearr_20078[(12)] = inst_19985__$1);

(statearr_20078[(13)] = inst_19984__$1);

(statearr_20078[(14)] = inst_19983__$1);

(statearr_20078[(17)] = inst_19993);

(statearr_20078[(15)] = inst_19986__$1);

return statearr_20078;
})();
var statearr_20079_20119 = state_20042__$1;
(statearr_20079_20119[(2)] = null);

(statearr_20079_20119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (18))){
var inst_20012 = (state_20042[(2)]);
var state_20042__$1 = state_20042;
var statearr_20080_20120 = state_20042__$1;
(statearr_20080_20120[(2)] = inst_20012);

(statearr_20080_20120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20043 === (8))){
var inst_19985 = (state_20042[(12)]);
var inst_19986 = (state_20042[(15)]);
var inst_19988 = (inst_19986 < inst_19985);
var inst_19989 = inst_19988;
var state_20042__$1 = state_20042;
if(cljs.core.truth_(inst_19989)){
var statearr_20081_20121 = state_20042__$1;
(statearr_20081_20121[(1)] = (10));

} else {
var statearr_20082_20122 = state_20042__$1;
(statearr_20082_20122[(1)] = (11));

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
});})(c__18195__auto___20094,mults,ensure_mult,p))
;
return ((function (switch__18083__auto__,c__18195__auto___20094,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20086[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20086[(1)] = (1));

return statearr_20086;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20042){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20087){if((e20087 instanceof Object)){
var ex__18087__auto__ = e20087;
var statearr_20088_20123 = state_20042;
(statearr_20088_20123[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20124 = state_20042;
state_20042 = G__20124;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20094,mults,ensure_mult,p))
})();
var state__18197__auto__ = (function (){var statearr_20089 = f__18196__auto__.call(null);
(statearr_20089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20094);

return statearr_20089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20094,mults,ensure_mult,p))
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
var args20125 = [];
var len__14245__auto___20128 = arguments.length;
var i__14246__auto___20129 = (0);
while(true){
if((i__14246__auto___20129 < len__14245__auto___20128)){
args20125.push((arguments[i__14246__auto___20129]));

var G__20130 = (i__14246__auto___20129 + (1));
i__14246__auto___20129 = G__20130;
continue;
} else {
}
break;
}

var G__20127 = args20125.length;
switch (G__20127) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20125.length)].join('')));

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
var args20132 = [];
var len__14245__auto___20135 = arguments.length;
var i__14246__auto___20136 = (0);
while(true){
if((i__14246__auto___20136 < len__14245__auto___20135)){
args20132.push((arguments[i__14246__auto___20136]));

var G__20137 = (i__14246__auto___20136 + (1));
i__14246__auto___20136 = G__20137;
continue;
} else {
}
break;
}

var G__20134 = args20132.length;
switch (G__20134) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20132.length)].join('')));

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
var args20139 = [];
var len__14245__auto___20210 = arguments.length;
var i__14246__auto___20211 = (0);
while(true){
if((i__14246__auto___20211 < len__14245__auto___20210)){
args20139.push((arguments[i__14246__auto___20211]));

var G__20212 = (i__14246__auto___20211 + (1));
i__14246__auto___20211 = G__20212;
continue;
} else {
}
break;
}

var G__20141 = args20139.length;
switch (G__20141) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20139.length)].join('')));

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
var c__18195__auto___20214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20180){
var state_val_20181 = (state_20180[(1)]);
if((state_val_20181 === (7))){
var state_20180__$1 = state_20180;
var statearr_20182_20215 = state_20180__$1;
(statearr_20182_20215[(2)] = null);

(statearr_20182_20215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (1))){
var state_20180__$1 = state_20180;
var statearr_20183_20216 = state_20180__$1;
(statearr_20183_20216[(2)] = null);

(statearr_20183_20216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (4))){
var inst_20144 = (state_20180[(7)]);
var inst_20146 = (inst_20144 < cnt);
var state_20180__$1 = state_20180;
if(cljs.core.truth_(inst_20146)){
var statearr_20184_20217 = state_20180__$1;
(statearr_20184_20217[(1)] = (6));

} else {
var statearr_20185_20218 = state_20180__$1;
(statearr_20185_20218[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (15))){
var inst_20176 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
var statearr_20186_20219 = state_20180__$1;
(statearr_20186_20219[(2)] = inst_20176);

(statearr_20186_20219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (13))){
var inst_20169 = cljs.core.async.close_BANG_.call(null,out);
var state_20180__$1 = state_20180;
var statearr_20187_20220 = state_20180__$1;
(statearr_20187_20220[(2)] = inst_20169);

(statearr_20187_20220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (6))){
var state_20180__$1 = state_20180;
var statearr_20188_20221 = state_20180__$1;
(statearr_20188_20221[(2)] = null);

(statearr_20188_20221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (3))){
var inst_20178 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20180__$1,inst_20178);
} else {
if((state_val_20181 === (12))){
var inst_20166 = (state_20180[(8)]);
var inst_20166__$1 = (state_20180[(2)]);
var inst_20167 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20166__$1);
var state_20180__$1 = (function (){var statearr_20189 = state_20180;
(statearr_20189[(8)] = inst_20166__$1);

return statearr_20189;
})();
if(cljs.core.truth_(inst_20167)){
var statearr_20190_20222 = state_20180__$1;
(statearr_20190_20222[(1)] = (13));

} else {
var statearr_20191_20223 = state_20180__$1;
(statearr_20191_20223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (2))){
var inst_20143 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20144 = (0);
var state_20180__$1 = (function (){var statearr_20192 = state_20180;
(statearr_20192[(9)] = inst_20143);

(statearr_20192[(7)] = inst_20144);

return statearr_20192;
})();
var statearr_20193_20224 = state_20180__$1;
(statearr_20193_20224[(2)] = null);

(statearr_20193_20224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (11))){
var inst_20144 = (state_20180[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20180,(10),Object,null,(9));
var inst_20153 = chs__$1.call(null,inst_20144);
var inst_20154 = done.call(null,inst_20144);
var inst_20155 = cljs.core.async.take_BANG_.call(null,inst_20153,inst_20154);
var state_20180__$1 = state_20180;
var statearr_20194_20225 = state_20180__$1;
(statearr_20194_20225[(2)] = inst_20155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20180__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (9))){
var inst_20144 = (state_20180[(7)]);
var inst_20157 = (state_20180[(2)]);
var inst_20158 = (inst_20144 + (1));
var inst_20144__$1 = inst_20158;
var state_20180__$1 = (function (){var statearr_20195 = state_20180;
(statearr_20195[(10)] = inst_20157);

(statearr_20195[(7)] = inst_20144__$1);

return statearr_20195;
})();
var statearr_20196_20226 = state_20180__$1;
(statearr_20196_20226[(2)] = null);

(statearr_20196_20226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (5))){
var inst_20164 = (state_20180[(2)]);
var state_20180__$1 = (function (){var statearr_20197 = state_20180;
(statearr_20197[(11)] = inst_20164);

return statearr_20197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20180__$1,(12),dchan);
} else {
if((state_val_20181 === (14))){
var inst_20166 = (state_20180[(8)]);
var inst_20171 = cljs.core.apply.call(null,f,inst_20166);
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20180__$1,(16),out,inst_20171);
} else {
if((state_val_20181 === (16))){
var inst_20173 = (state_20180[(2)]);
var state_20180__$1 = (function (){var statearr_20198 = state_20180;
(statearr_20198[(12)] = inst_20173);

return statearr_20198;
})();
var statearr_20199_20227 = state_20180__$1;
(statearr_20199_20227[(2)] = null);

(statearr_20199_20227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (10))){
var inst_20148 = (state_20180[(2)]);
var inst_20149 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20180__$1 = (function (){var statearr_20200 = state_20180;
(statearr_20200[(13)] = inst_20148);

return statearr_20200;
})();
var statearr_20201_20228 = state_20180__$1;
(statearr_20201_20228[(2)] = inst_20149);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20180__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (8))){
var inst_20162 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
var statearr_20202_20229 = state_20180__$1;
(statearr_20202_20229[(2)] = inst_20162);

(statearr_20202_20229[(1)] = (5));


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
});})(c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18083__auto__,c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20206[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20206[(1)] = (1));

return statearr_20206;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20180){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20207){if((e20207 instanceof Object)){
var ex__18087__auto__ = e20207;
var statearr_20208_20230 = state_20180;
(statearr_20208_20230[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20231 = state_20180;
state_20180 = G__20231;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18197__auto__ = (function (){var statearr_20209 = f__18196__auto__.call(null);
(statearr_20209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20214);

return statearr_20209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20214,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20233 = [];
var len__14245__auto___20289 = arguments.length;
var i__14246__auto___20290 = (0);
while(true){
if((i__14246__auto___20290 < len__14245__auto___20289)){
args20233.push((arguments[i__14246__auto___20290]));

var G__20291 = (i__14246__auto___20290 + (1));
i__14246__auto___20290 = G__20291;
continue;
} else {
}
break;
}

var G__20235 = args20233.length;
switch (G__20235) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20233.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20293,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20293,out){
return (function (state_20265){
var state_val_20266 = (state_20265[(1)]);
if((state_val_20266 === (7))){
var inst_20244 = (state_20265[(7)]);
var inst_20245 = (state_20265[(8)]);
var inst_20244__$1 = (state_20265[(2)]);
var inst_20245__$1 = cljs.core.nth.call(null,inst_20244__$1,(0),null);
var inst_20246 = cljs.core.nth.call(null,inst_20244__$1,(1),null);
var inst_20247 = (inst_20245__$1 == null);
var state_20265__$1 = (function (){var statearr_20267 = state_20265;
(statearr_20267[(9)] = inst_20246);

(statearr_20267[(7)] = inst_20244__$1);

(statearr_20267[(8)] = inst_20245__$1);

return statearr_20267;
})();
if(cljs.core.truth_(inst_20247)){
var statearr_20268_20294 = state_20265__$1;
(statearr_20268_20294[(1)] = (8));

} else {
var statearr_20269_20295 = state_20265__$1;
(statearr_20269_20295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (1))){
var inst_20236 = cljs.core.vec.call(null,chs);
var inst_20237 = inst_20236;
var state_20265__$1 = (function (){var statearr_20270 = state_20265;
(statearr_20270[(10)] = inst_20237);

return statearr_20270;
})();
var statearr_20271_20296 = state_20265__$1;
(statearr_20271_20296[(2)] = null);

(statearr_20271_20296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (4))){
var inst_20237 = (state_20265[(10)]);
var state_20265__$1 = state_20265;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20265__$1,(7),inst_20237);
} else {
if((state_val_20266 === (6))){
var inst_20261 = (state_20265[(2)]);
var state_20265__$1 = state_20265;
var statearr_20272_20297 = state_20265__$1;
(statearr_20272_20297[(2)] = inst_20261);

(statearr_20272_20297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (3))){
var inst_20263 = (state_20265[(2)]);
var state_20265__$1 = state_20265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20265__$1,inst_20263);
} else {
if((state_val_20266 === (2))){
var inst_20237 = (state_20265[(10)]);
var inst_20239 = cljs.core.count.call(null,inst_20237);
var inst_20240 = (inst_20239 > (0));
var state_20265__$1 = state_20265;
if(cljs.core.truth_(inst_20240)){
var statearr_20274_20298 = state_20265__$1;
(statearr_20274_20298[(1)] = (4));

} else {
var statearr_20275_20299 = state_20265__$1;
(statearr_20275_20299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (11))){
var inst_20237 = (state_20265[(10)]);
var inst_20254 = (state_20265[(2)]);
var tmp20273 = inst_20237;
var inst_20237__$1 = tmp20273;
var state_20265__$1 = (function (){var statearr_20276 = state_20265;
(statearr_20276[(10)] = inst_20237__$1);

(statearr_20276[(11)] = inst_20254);

return statearr_20276;
})();
var statearr_20277_20300 = state_20265__$1;
(statearr_20277_20300[(2)] = null);

(statearr_20277_20300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (9))){
var inst_20245 = (state_20265[(8)]);
var state_20265__$1 = state_20265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20265__$1,(11),out,inst_20245);
} else {
if((state_val_20266 === (5))){
var inst_20259 = cljs.core.async.close_BANG_.call(null,out);
var state_20265__$1 = state_20265;
var statearr_20278_20301 = state_20265__$1;
(statearr_20278_20301[(2)] = inst_20259);

(statearr_20278_20301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (10))){
var inst_20257 = (state_20265[(2)]);
var state_20265__$1 = state_20265;
var statearr_20279_20302 = state_20265__$1;
(statearr_20279_20302[(2)] = inst_20257);

(statearr_20279_20302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20266 === (8))){
var inst_20246 = (state_20265[(9)]);
var inst_20244 = (state_20265[(7)]);
var inst_20237 = (state_20265[(10)]);
var inst_20245 = (state_20265[(8)]);
var inst_20249 = (function (){var cs = inst_20237;
var vec__20242 = inst_20244;
var v = inst_20245;
var c = inst_20246;
return ((function (cs,vec__20242,v,c,inst_20246,inst_20244,inst_20237,inst_20245,state_val_20266,c__18195__auto___20293,out){
return (function (p1__20232_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20232_SHARP_);
});
;})(cs,vec__20242,v,c,inst_20246,inst_20244,inst_20237,inst_20245,state_val_20266,c__18195__auto___20293,out))
})();
var inst_20250 = cljs.core.filterv.call(null,inst_20249,inst_20237);
var inst_20237__$1 = inst_20250;
var state_20265__$1 = (function (){var statearr_20280 = state_20265;
(statearr_20280[(10)] = inst_20237__$1);

return statearr_20280;
})();
var statearr_20281_20303 = state_20265__$1;
(statearr_20281_20303[(2)] = null);

(statearr_20281_20303[(1)] = (2));


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
});})(c__18195__auto___20293,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20293,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20285[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20285[(1)] = (1));

return statearr_20285;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20265){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20286){if((e20286 instanceof Object)){
var ex__18087__auto__ = e20286;
var statearr_20287_20304 = state_20265;
(statearr_20287_20304[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20305 = state_20265;
state_20265 = G__20305;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20293,out))
})();
var state__18197__auto__ = (function (){var statearr_20288 = f__18196__auto__.call(null);
(statearr_20288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20293);

return statearr_20288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20293,out))
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
var args20306 = [];
var len__14245__auto___20355 = arguments.length;
var i__14246__auto___20356 = (0);
while(true){
if((i__14246__auto___20356 < len__14245__auto___20355)){
args20306.push((arguments[i__14246__auto___20356]));

var G__20357 = (i__14246__auto___20356 + (1));
i__14246__auto___20356 = G__20357;
continue;
} else {
}
break;
}

var G__20308 = args20306.length;
switch (G__20308) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20306.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20359,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20359,out){
return (function (state_20332){
var state_val_20333 = (state_20332[(1)]);
if((state_val_20333 === (7))){
var inst_20314 = (state_20332[(7)]);
var inst_20314__$1 = (state_20332[(2)]);
var inst_20315 = (inst_20314__$1 == null);
var inst_20316 = cljs.core.not.call(null,inst_20315);
var state_20332__$1 = (function (){var statearr_20334 = state_20332;
(statearr_20334[(7)] = inst_20314__$1);

return statearr_20334;
})();
if(inst_20316){
var statearr_20335_20360 = state_20332__$1;
(statearr_20335_20360[(1)] = (8));

} else {
var statearr_20336_20361 = state_20332__$1;
(statearr_20336_20361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (1))){
var inst_20309 = (0);
var state_20332__$1 = (function (){var statearr_20337 = state_20332;
(statearr_20337[(8)] = inst_20309);

return statearr_20337;
})();
var statearr_20338_20362 = state_20332__$1;
(statearr_20338_20362[(2)] = null);

(statearr_20338_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (4))){
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20332__$1,(7),ch);
} else {
if((state_val_20333 === (6))){
var inst_20327 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20339_20363 = state_20332__$1;
(statearr_20339_20363[(2)] = inst_20327);

(statearr_20339_20363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (3))){
var inst_20329 = (state_20332[(2)]);
var inst_20330 = cljs.core.async.close_BANG_.call(null,out);
var state_20332__$1 = (function (){var statearr_20340 = state_20332;
(statearr_20340[(9)] = inst_20329);

return statearr_20340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20332__$1,inst_20330);
} else {
if((state_val_20333 === (2))){
var inst_20309 = (state_20332[(8)]);
var inst_20311 = (inst_20309 < n);
var state_20332__$1 = state_20332;
if(cljs.core.truth_(inst_20311)){
var statearr_20341_20364 = state_20332__$1;
(statearr_20341_20364[(1)] = (4));

} else {
var statearr_20342_20365 = state_20332__$1;
(statearr_20342_20365[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (11))){
var inst_20309 = (state_20332[(8)]);
var inst_20319 = (state_20332[(2)]);
var inst_20320 = (inst_20309 + (1));
var inst_20309__$1 = inst_20320;
var state_20332__$1 = (function (){var statearr_20343 = state_20332;
(statearr_20343[(8)] = inst_20309__$1);

(statearr_20343[(10)] = inst_20319);

return statearr_20343;
})();
var statearr_20344_20366 = state_20332__$1;
(statearr_20344_20366[(2)] = null);

(statearr_20344_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (9))){
var state_20332__$1 = state_20332;
var statearr_20345_20367 = state_20332__$1;
(statearr_20345_20367[(2)] = null);

(statearr_20345_20367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (5))){
var state_20332__$1 = state_20332;
var statearr_20346_20368 = state_20332__$1;
(statearr_20346_20368[(2)] = null);

(statearr_20346_20368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (10))){
var inst_20324 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20347_20369 = state_20332__$1;
(statearr_20347_20369[(2)] = inst_20324);

(statearr_20347_20369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (8))){
var inst_20314 = (state_20332[(7)]);
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20332__$1,(11),out,inst_20314);
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
});})(c__18195__auto___20359,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20359,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20351[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20351[(1)] = (1));

return statearr_20351;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20332){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20352){if((e20352 instanceof Object)){
var ex__18087__auto__ = e20352;
var statearr_20353_20370 = state_20332;
(statearr_20353_20370[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20371 = state_20332;
state_20332 = G__20371;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20359,out))
})();
var state__18197__auto__ = (function (){var statearr_20354 = f__18196__auto__.call(null);
(statearr_20354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20359);

return statearr_20354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20359,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20379 = (function (map_LT_,f,ch,meta20380){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20380 = meta20380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20381,meta20380__$1){
var self__ = this;
var _20381__$1 = this;
return (new cljs.core.async.t_cljs$core$async20379(self__.map_LT_,self__.f,self__.ch,meta20380__$1));
});

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20381){
var self__ = this;
var _20381__$1 = this;
return self__.meta20380;
});

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20382 = (function (map_LT_,f,ch,meta20380,_,fn1,meta20383){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20380 = meta20380;
this._ = _;
this.fn1 = fn1;
this.meta20383 = meta20383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20384,meta20383__$1){
var self__ = this;
var _20384__$1 = this;
return (new cljs.core.async.t_cljs$core$async20382(self__.map_LT_,self__.f,self__.ch,self__.meta20380,self__._,self__.fn1,meta20383__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20384){
var self__ = this;
var _20384__$1 = this;
return self__.meta20383;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20372_SHARP_){
return f1.call(null,(((p1__20372_SHARP_ == null))?null:self__.f.call(null,p1__20372_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20380","meta20380",970880082,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20379","cljs.core.async/t_cljs$core$async20379",-91480039,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20383","meta20383",1031759871,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20382";

cljs.core.async.t_cljs$core$async20382.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20382");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20382 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20382(map_LT___$1,f__$1,ch__$1,meta20380__$1,___$2,fn1__$1,meta20383){
return (new cljs.core.async.t_cljs$core$async20382(map_LT___$1,f__$1,ch__$1,meta20380__$1,___$2,fn1__$1,meta20383));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20382(self__.map_LT_,self__.f,self__.ch,self__.meta20380,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20380","meta20380",970880082,null)], null);
});

cljs.core.async.t_cljs$core$async20379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20379";

cljs.core.async.t_cljs$core$async20379.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20379");
});

cljs.core.async.__GT_t_cljs$core$async20379 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20379(map_LT___$1,f__$1,ch__$1,meta20380){
return (new cljs.core.async.t_cljs$core$async20379(map_LT___$1,f__$1,ch__$1,meta20380));
});

}

return (new cljs.core.async.t_cljs$core$async20379(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20388 = (function (map_GT_,f,ch,meta20389){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20389 = meta20389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20390,meta20389__$1){
var self__ = this;
var _20390__$1 = this;
return (new cljs.core.async.t_cljs$core$async20388(self__.map_GT_,self__.f,self__.ch,meta20389__$1));
});

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20390){
var self__ = this;
var _20390__$1 = this;
return self__.meta20389;
});

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20389","meta20389",201545427,null)], null);
});

cljs.core.async.t_cljs$core$async20388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20388";

cljs.core.async.t_cljs$core$async20388.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20388");
});

cljs.core.async.__GT_t_cljs$core$async20388 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20388(map_GT___$1,f__$1,ch__$1,meta20389){
return (new cljs.core.async.t_cljs$core$async20388(map_GT___$1,f__$1,ch__$1,meta20389));
});

}

return (new cljs.core.async.t_cljs$core$async20388(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20394 = (function (filter_GT_,p,ch,meta20395){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20395 = meta20395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20396,meta20395__$1){
var self__ = this;
var _20396__$1 = this;
return (new cljs.core.async.t_cljs$core$async20394(self__.filter_GT_,self__.p,self__.ch,meta20395__$1));
});

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20396){
var self__ = this;
var _20396__$1 = this;
return self__.meta20395;
});

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20395","meta20395",874259008,null)], null);
});

cljs.core.async.t_cljs$core$async20394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20394";

cljs.core.async.t_cljs$core$async20394.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20394");
});

cljs.core.async.__GT_t_cljs$core$async20394 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20394(filter_GT___$1,p__$1,ch__$1,meta20395){
return (new cljs.core.async.t_cljs$core$async20394(filter_GT___$1,p__$1,ch__$1,meta20395));
});

}

return (new cljs.core.async.t_cljs$core$async20394(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20397 = [];
var len__14245__auto___20441 = arguments.length;
var i__14246__auto___20442 = (0);
while(true){
if((i__14246__auto___20442 < len__14245__auto___20441)){
args20397.push((arguments[i__14246__auto___20442]));

var G__20443 = (i__14246__auto___20442 + (1));
i__14246__auto___20442 = G__20443;
continue;
} else {
}
break;
}

var G__20399 = args20397.length;
switch (G__20399) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20397.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20445,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20445,out){
return (function (state_20420){
var state_val_20421 = (state_20420[(1)]);
if((state_val_20421 === (7))){
var inst_20416 = (state_20420[(2)]);
var state_20420__$1 = state_20420;
var statearr_20422_20446 = state_20420__$1;
(statearr_20422_20446[(2)] = inst_20416);

(statearr_20422_20446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (1))){
var state_20420__$1 = state_20420;
var statearr_20423_20447 = state_20420__$1;
(statearr_20423_20447[(2)] = null);

(statearr_20423_20447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (4))){
var inst_20402 = (state_20420[(7)]);
var inst_20402__$1 = (state_20420[(2)]);
var inst_20403 = (inst_20402__$1 == null);
var state_20420__$1 = (function (){var statearr_20424 = state_20420;
(statearr_20424[(7)] = inst_20402__$1);

return statearr_20424;
})();
if(cljs.core.truth_(inst_20403)){
var statearr_20425_20448 = state_20420__$1;
(statearr_20425_20448[(1)] = (5));

} else {
var statearr_20426_20449 = state_20420__$1;
(statearr_20426_20449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (6))){
var inst_20402 = (state_20420[(7)]);
var inst_20407 = p.call(null,inst_20402);
var state_20420__$1 = state_20420;
if(cljs.core.truth_(inst_20407)){
var statearr_20427_20450 = state_20420__$1;
(statearr_20427_20450[(1)] = (8));

} else {
var statearr_20428_20451 = state_20420__$1;
(statearr_20428_20451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (3))){
var inst_20418 = (state_20420[(2)]);
var state_20420__$1 = state_20420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20420__$1,inst_20418);
} else {
if((state_val_20421 === (2))){
var state_20420__$1 = state_20420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20420__$1,(4),ch);
} else {
if((state_val_20421 === (11))){
var inst_20410 = (state_20420[(2)]);
var state_20420__$1 = state_20420;
var statearr_20429_20452 = state_20420__$1;
(statearr_20429_20452[(2)] = inst_20410);

(statearr_20429_20452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (9))){
var state_20420__$1 = state_20420;
var statearr_20430_20453 = state_20420__$1;
(statearr_20430_20453[(2)] = null);

(statearr_20430_20453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (5))){
var inst_20405 = cljs.core.async.close_BANG_.call(null,out);
var state_20420__$1 = state_20420;
var statearr_20431_20454 = state_20420__$1;
(statearr_20431_20454[(2)] = inst_20405);

(statearr_20431_20454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (10))){
var inst_20413 = (state_20420[(2)]);
var state_20420__$1 = (function (){var statearr_20432 = state_20420;
(statearr_20432[(8)] = inst_20413);

return statearr_20432;
})();
var statearr_20433_20455 = state_20420__$1;
(statearr_20433_20455[(2)] = null);

(statearr_20433_20455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (8))){
var inst_20402 = (state_20420[(7)]);
var state_20420__$1 = state_20420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20420__$1,(11),out,inst_20402);
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
});})(c__18195__auto___20445,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20445,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20437 = [null,null,null,null,null,null,null,null,null];
(statearr_20437[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20437[(1)] = (1));

return statearr_20437;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20420){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20438){if((e20438 instanceof Object)){
var ex__18087__auto__ = e20438;
var statearr_20439_20456 = state_20420;
(statearr_20439_20456[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20457 = state_20420;
state_20420 = G__20457;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20445,out))
})();
var state__18197__auto__ = (function (){var statearr_20440 = f__18196__auto__.call(null);
(statearr_20440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20445);

return statearr_20440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20445,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20458 = [];
var len__14245__auto___20461 = arguments.length;
var i__14246__auto___20462 = (0);
while(true){
if((i__14246__auto___20462 < len__14245__auto___20461)){
args20458.push((arguments[i__14246__auto___20462]));

var G__20463 = (i__14246__auto___20462 + (1));
i__14246__auto___20462 = G__20463;
continue;
} else {
}
break;
}

var G__20460 = args20458.length;
switch (G__20460) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20458.length)].join('')));

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
var c__18195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto__){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto__){
return (function (state_20630){
var state_val_20631 = (state_20630[(1)]);
if((state_val_20631 === (7))){
var inst_20626 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20632_20673 = state_20630__$1;
(statearr_20632_20673[(2)] = inst_20626);

(statearr_20632_20673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (20))){
var inst_20596 = (state_20630[(7)]);
var inst_20607 = (state_20630[(2)]);
var inst_20608 = cljs.core.next.call(null,inst_20596);
var inst_20582 = inst_20608;
var inst_20583 = null;
var inst_20584 = (0);
var inst_20585 = (0);
var state_20630__$1 = (function (){var statearr_20633 = state_20630;
(statearr_20633[(8)] = inst_20584);

(statearr_20633[(9)] = inst_20583);

(statearr_20633[(10)] = inst_20582);

(statearr_20633[(11)] = inst_20607);

(statearr_20633[(12)] = inst_20585);

return statearr_20633;
})();
var statearr_20634_20674 = state_20630__$1;
(statearr_20634_20674[(2)] = null);

(statearr_20634_20674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (1))){
var state_20630__$1 = state_20630;
var statearr_20635_20675 = state_20630__$1;
(statearr_20635_20675[(2)] = null);

(statearr_20635_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (4))){
var inst_20571 = (state_20630[(13)]);
var inst_20571__$1 = (state_20630[(2)]);
var inst_20572 = (inst_20571__$1 == null);
var state_20630__$1 = (function (){var statearr_20636 = state_20630;
(statearr_20636[(13)] = inst_20571__$1);

return statearr_20636;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20637_20676 = state_20630__$1;
(statearr_20637_20676[(1)] = (5));

} else {
var statearr_20638_20677 = state_20630__$1;
(statearr_20638_20677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (15))){
var state_20630__$1 = state_20630;
var statearr_20642_20678 = state_20630__$1;
(statearr_20642_20678[(2)] = null);

(statearr_20642_20678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (21))){
var state_20630__$1 = state_20630;
var statearr_20643_20679 = state_20630__$1;
(statearr_20643_20679[(2)] = null);

(statearr_20643_20679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (13))){
var inst_20584 = (state_20630[(8)]);
var inst_20583 = (state_20630[(9)]);
var inst_20582 = (state_20630[(10)]);
var inst_20585 = (state_20630[(12)]);
var inst_20592 = (state_20630[(2)]);
var inst_20593 = (inst_20585 + (1));
var tmp20639 = inst_20584;
var tmp20640 = inst_20583;
var tmp20641 = inst_20582;
var inst_20582__$1 = tmp20641;
var inst_20583__$1 = tmp20640;
var inst_20584__$1 = tmp20639;
var inst_20585__$1 = inst_20593;
var state_20630__$1 = (function (){var statearr_20644 = state_20630;
(statearr_20644[(8)] = inst_20584__$1);

(statearr_20644[(14)] = inst_20592);

(statearr_20644[(9)] = inst_20583__$1);

(statearr_20644[(10)] = inst_20582__$1);

(statearr_20644[(12)] = inst_20585__$1);

return statearr_20644;
})();
var statearr_20645_20680 = state_20630__$1;
(statearr_20645_20680[(2)] = null);

(statearr_20645_20680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (22))){
var state_20630__$1 = state_20630;
var statearr_20646_20681 = state_20630__$1;
(statearr_20646_20681[(2)] = null);

(statearr_20646_20681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (6))){
var inst_20571 = (state_20630[(13)]);
var inst_20580 = f.call(null,inst_20571);
var inst_20581 = cljs.core.seq.call(null,inst_20580);
var inst_20582 = inst_20581;
var inst_20583 = null;
var inst_20584 = (0);
var inst_20585 = (0);
var state_20630__$1 = (function (){var statearr_20647 = state_20630;
(statearr_20647[(8)] = inst_20584);

(statearr_20647[(9)] = inst_20583);

(statearr_20647[(10)] = inst_20582);

(statearr_20647[(12)] = inst_20585);

return statearr_20647;
})();
var statearr_20648_20682 = state_20630__$1;
(statearr_20648_20682[(2)] = null);

(statearr_20648_20682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (17))){
var inst_20596 = (state_20630[(7)]);
var inst_20600 = cljs.core.chunk_first.call(null,inst_20596);
var inst_20601 = cljs.core.chunk_rest.call(null,inst_20596);
var inst_20602 = cljs.core.count.call(null,inst_20600);
var inst_20582 = inst_20601;
var inst_20583 = inst_20600;
var inst_20584 = inst_20602;
var inst_20585 = (0);
var state_20630__$1 = (function (){var statearr_20649 = state_20630;
(statearr_20649[(8)] = inst_20584);

(statearr_20649[(9)] = inst_20583);

(statearr_20649[(10)] = inst_20582);

(statearr_20649[(12)] = inst_20585);

return statearr_20649;
})();
var statearr_20650_20683 = state_20630__$1;
(statearr_20650_20683[(2)] = null);

(statearr_20650_20683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (3))){
var inst_20628 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20630__$1,inst_20628);
} else {
if((state_val_20631 === (12))){
var inst_20616 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20651_20684 = state_20630__$1;
(statearr_20651_20684[(2)] = inst_20616);

(statearr_20651_20684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (2))){
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20630__$1,(4),in$);
} else {
if((state_val_20631 === (23))){
var inst_20624 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20652_20685 = state_20630__$1;
(statearr_20652_20685[(2)] = inst_20624);

(statearr_20652_20685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (19))){
var inst_20611 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20653_20686 = state_20630__$1;
(statearr_20653_20686[(2)] = inst_20611);

(statearr_20653_20686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (11))){
var inst_20582 = (state_20630[(10)]);
var inst_20596 = (state_20630[(7)]);
var inst_20596__$1 = cljs.core.seq.call(null,inst_20582);
var state_20630__$1 = (function (){var statearr_20654 = state_20630;
(statearr_20654[(7)] = inst_20596__$1);

return statearr_20654;
})();
if(inst_20596__$1){
var statearr_20655_20687 = state_20630__$1;
(statearr_20655_20687[(1)] = (14));

} else {
var statearr_20656_20688 = state_20630__$1;
(statearr_20656_20688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (9))){
var inst_20618 = (state_20630[(2)]);
var inst_20619 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20630__$1 = (function (){var statearr_20657 = state_20630;
(statearr_20657[(15)] = inst_20618);

return statearr_20657;
})();
if(cljs.core.truth_(inst_20619)){
var statearr_20658_20689 = state_20630__$1;
(statearr_20658_20689[(1)] = (21));

} else {
var statearr_20659_20690 = state_20630__$1;
(statearr_20659_20690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (5))){
var inst_20574 = cljs.core.async.close_BANG_.call(null,out);
var state_20630__$1 = state_20630;
var statearr_20660_20691 = state_20630__$1;
(statearr_20660_20691[(2)] = inst_20574);

(statearr_20660_20691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (14))){
var inst_20596 = (state_20630[(7)]);
var inst_20598 = cljs.core.chunked_seq_QMARK_.call(null,inst_20596);
var state_20630__$1 = state_20630;
if(inst_20598){
var statearr_20661_20692 = state_20630__$1;
(statearr_20661_20692[(1)] = (17));

} else {
var statearr_20662_20693 = state_20630__$1;
(statearr_20662_20693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (16))){
var inst_20614 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20663_20694 = state_20630__$1;
(statearr_20663_20694[(2)] = inst_20614);

(statearr_20663_20694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (10))){
var inst_20583 = (state_20630[(9)]);
var inst_20585 = (state_20630[(12)]);
var inst_20590 = cljs.core._nth.call(null,inst_20583,inst_20585);
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20630__$1,(13),out,inst_20590);
} else {
if((state_val_20631 === (18))){
var inst_20596 = (state_20630[(7)]);
var inst_20605 = cljs.core.first.call(null,inst_20596);
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20630__$1,(20),out,inst_20605);
} else {
if((state_val_20631 === (8))){
var inst_20584 = (state_20630[(8)]);
var inst_20585 = (state_20630[(12)]);
var inst_20587 = (inst_20585 < inst_20584);
var inst_20588 = inst_20587;
var state_20630__$1 = state_20630;
if(cljs.core.truth_(inst_20588)){
var statearr_20664_20695 = state_20630__$1;
(statearr_20664_20695[(1)] = (10));

} else {
var statearr_20665_20696 = state_20630__$1;
(statearr_20665_20696[(1)] = (11));

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
});})(c__18195__auto__))
;
return ((function (switch__18083__auto__,c__18195__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____0 = (function (){
var statearr_20669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__);

(statearr_20669[(1)] = (1));

return statearr_20669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____1 = (function (state_20630){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20670){if((e20670 instanceof Object)){
var ex__18087__auto__ = e20670;
var statearr_20671_20697 = state_20630;
(statearr_20671_20697[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20698 = state_20630;
state_20630 = G__20698;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__ = function(state_20630){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____1.call(this,state_20630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18084__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto__))
})();
var state__18197__auto__ = (function (){var statearr_20672 = f__18196__auto__.call(null);
(statearr_20672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto__);

return statearr_20672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto__))
);

return c__18195__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20699 = [];
var len__14245__auto___20702 = arguments.length;
var i__14246__auto___20703 = (0);
while(true){
if((i__14246__auto___20703 < len__14245__auto___20702)){
args20699.push((arguments[i__14246__auto___20703]));

var G__20704 = (i__14246__auto___20703 + (1));
i__14246__auto___20703 = G__20704;
continue;
} else {
}
break;
}

var G__20701 = args20699.length;
switch (G__20701) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20699.length)].join('')));

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
var args20706 = [];
var len__14245__auto___20709 = arguments.length;
var i__14246__auto___20710 = (0);
while(true){
if((i__14246__auto___20710 < len__14245__auto___20709)){
args20706.push((arguments[i__14246__auto___20710]));

var G__20711 = (i__14246__auto___20710 + (1));
i__14246__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var G__20708 = args20706.length;
switch (G__20708) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20706.length)].join('')));

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
var args20713 = [];
var len__14245__auto___20764 = arguments.length;
var i__14246__auto___20765 = (0);
while(true){
if((i__14246__auto___20765 < len__14245__auto___20764)){
args20713.push((arguments[i__14246__auto___20765]));

var G__20766 = (i__14246__auto___20765 + (1));
i__14246__auto___20765 = G__20766;
continue;
} else {
}
break;
}

var G__20715 = args20713.length;
switch (G__20715) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20713.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20768,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20768,out){
return (function (state_20739){
var state_val_20740 = (state_20739[(1)]);
if((state_val_20740 === (7))){
var inst_20734 = (state_20739[(2)]);
var state_20739__$1 = state_20739;
var statearr_20741_20769 = state_20739__$1;
(statearr_20741_20769[(2)] = inst_20734);

(statearr_20741_20769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (1))){
var inst_20716 = null;
var state_20739__$1 = (function (){var statearr_20742 = state_20739;
(statearr_20742[(7)] = inst_20716);

return statearr_20742;
})();
var statearr_20743_20770 = state_20739__$1;
(statearr_20743_20770[(2)] = null);

(statearr_20743_20770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (4))){
var inst_20719 = (state_20739[(8)]);
var inst_20719__$1 = (state_20739[(2)]);
var inst_20720 = (inst_20719__$1 == null);
var inst_20721 = cljs.core.not.call(null,inst_20720);
var state_20739__$1 = (function (){var statearr_20744 = state_20739;
(statearr_20744[(8)] = inst_20719__$1);

return statearr_20744;
})();
if(inst_20721){
var statearr_20745_20771 = state_20739__$1;
(statearr_20745_20771[(1)] = (5));

} else {
var statearr_20746_20772 = state_20739__$1;
(statearr_20746_20772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (6))){
var state_20739__$1 = state_20739;
var statearr_20747_20773 = state_20739__$1;
(statearr_20747_20773[(2)] = null);

(statearr_20747_20773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (3))){
var inst_20736 = (state_20739[(2)]);
var inst_20737 = cljs.core.async.close_BANG_.call(null,out);
var state_20739__$1 = (function (){var statearr_20748 = state_20739;
(statearr_20748[(9)] = inst_20736);

return statearr_20748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20739__$1,inst_20737);
} else {
if((state_val_20740 === (2))){
var state_20739__$1 = state_20739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20739__$1,(4),ch);
} else {
if((state_val_20740 === (11))){
var inst_20719 = (state_20739[(8)]);
var inst_20728 = (state_20739[(2)]);
var inst_20716 = inst_20719;
var state_20739__$1 = (function (){var statearr_20749 = state_20739;
(statearr_20749[(10)] = inst_20728);

(statearr_20749[(7)] = inst_20716);

return statearr_20749;
})();
var statearr_20750_20774 = state_20739__$1;
(statearr_20750_20774[(2)] = null);

(statearr_20750_20774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (9))){
var inst_20719 = (state_20739[(8)]);
var state_20739__$1 = state_20739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20739__$1,(11),out,inst_20719);
} else {
if((state_val_20740 === (5))){
var inst_20716 = (state_20739[(7)]);
var inst_20719 = (state_20739[(8)]);
var inst_20723 = cljs.core._EQ_.call(null,inst_20719,inst_20716);
var state_20739__$1 = state_20739;
if(inst_20723){
var statearr_20752_20775 = state_20739__$1;
(statearr_20752_20775[(1)] = (8));

} else {
var statearr_20753_20776 = state_20739__$1;
(statearr_20753_20776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (10))){
var inst_20731 = (state_20739[(2)]);
var state_20739__$1 = state_20739;
var statearr_20754_20777 = state_20739__$1;
(statearr_20754_20777[(2)] = inst_20731);

(statearr_20754_20777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20740 === (8))){
var inst_20716 = (state_20739[(7)]);
var tmp20751 = inst_20716;
var inst_20716__$1 = tmp20751;
var state_20739__$1 = (function (){var statearr_20755 = state_20739;
(statearr_20755[(7)] = inst_20716__$1);

return statearr_20755;
})();
var statearr_20756_20778 = state_20739__$1;
(statearr_20756_20778[(2)] = null);

(statearr_20756_20778[(1)] = (2));


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
});})(c__18195__auto___20768,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20768,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20760[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20760[(1)] = (1));

return statearr_20760;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20739){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20761){if((e20761 instanceof Object)){
var ex__18087__auto__ = e20761;
var statearr_20762_20779 = state_20739;
(statearr_20762_20779[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20780 = state_20739;
state_20739 = G__20780;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20768,out))
})();
var state__18197__auto__ = (function (){var statearr_20763 = f__18196__auto__.call(null);
(statearr_20763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20768);

return statearr_20763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20768,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20781 = [];
var len__14245__auto___20851 = arguments.length;
var i__14246__auto___20852 = (0);
while(true){
if((i__14246__auto___20852 < len__14245__auto___20851)){
args20781.push((arguments[i__14246__auto___20852]));

var G__20853 = (i__14246__auto___20852 + (1));
i__14246__auto___20852 = G__20853;
continue;
} else {
}
break;
}

var G__20783 = args20781.length;
switch (G__20783) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20781.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20855,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20855,out){
return (function (state_20821){
var state_val_20822 = (state_20821[(1)]);
if((state_val_20822 === (7))){
var inst_20817 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20823_20856 = state_20821__$1;
(statearr_20823_20856[(2)] = inst_20817);

(statearr_20823_20856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (1))){
var inst_20784 = (new Array(n));
var inst_20785 = inst_20784;
var inst_20786 = (0);
var state_20821__$1 = (function (){var statearr_20824 = state_20821;
(statearr_20824[(7)] = inst_20785);

(statearr_20824[(8)] = inst_20786);

return statearr_20824;
})();
var statearr_20825_20857 = state_20821__$1;
(statearr_20825_20857[(2)] = null);

(statearr_20825_20857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (4))){
var inst_20789 = (state_20821[(9)]);
var inst_20789__$1 = (state_20821[(2)]);
var inst_20790 = (inst_20789__$1 == null);
var inst_20791 = cljs.core.not.call(null,inst_20790);
var state_20821__$1 = (function (){var statearr_20826 = state_20821;
(statearr_20826[(9)] = inst_20789__$1);

return statearr_20826;
})();
if(inst_20791){
var statearr_20827_20858 = state_20821__$1;
(statearr_20827_20858[(1)] = (5));

} else {
var statearr_20828_20859 = state_20821__$1;
(statearr_20828_20859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (15))){
var inst_20811 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20829_20860 = state_20821__$1;
(statearr_20829_20860[(2)] = inst_20811);

(statearr_20829_20860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (13))){
var state_20821__$1 = state_20821;
var statearr_20830_20861 = state_20821__$1;
(statearr_20830_20861[(2)] = null);

(statearr_20830_20861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (6))){
var inst_20786 = (state_20821[(8)]);
var inst_20807 = (inst_20786 > (0));
var state_20821__$1 = state_20821;
if(cljs.core.truth_(inst_20807)){
var statearr_20831_20862 = state_20821__$1;
(statearr_20831_20862[(1)] = (12));

} else {
var statearr_20832_20863 = state_20821__$1;
(statearr_20832_20863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (3))){
var inst_20819 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20821__$1,inst_20819);
} else {
if((state_val_20822 === (12))){
var inst_20785 = (state_20821[(7)]);
var inst_20809 = cljs.core.vec.call(null,inst_20785);
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20821__$1,(15),out,inst_20809);
} else {
if((state_val_20822 === (2))){
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20821__$1,(4),ch);
} else {
if((state_val_20822 === (11))){
var inst_20801 = (state_20821[(2)]);
var inst_20802 = (new Array(n));
var inst_20785 = inst_20802;
var inst_20786 = (0);
var state_20821__$1 = (function (){var statearr_20833 = state_20821;
(statearr_20833[(10)] = inst_20801);

(statearr_20833[(7)] = inst_20785);

(statearr_20833[(8)] = inst_20786);

return statearr_20833;
})();
var statearr_20834_20864 = state_20821__$1;
(statearr_20834_20864[(2)] = null);

(statearr_20834_20864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (9))){
var inst_20785 = (state_20821[(7)]);
var inst_20799 = cljs.core.vec.call(null,inst_20785);
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20821__$1,(11),out,inst_20799);
} else {
if((state_val_20822 === (5))){
var inst_20785 = (state_20821[(7)]);
var inst_20794 = (state_20821[(11)]);
var inst_20789 = (state_20821[(9)]);
var inst_20786 = (state_20821[(8)]);
var inst_20793 = (inst_20785[inst_20786] = inst_20789);
var inst_20794__$1 = (inst_20786 + (1));
var inst_20795 = (inst_20794__$1 < n);
var state_20821__$1 = (function (){var statearr_20835 = state_20821;
(statearr_20835[(11)] = inst_20794__$1);

(statearr_20835[(12)] = inst_20793);

return statearr_20835;
})();
if(cljs.core.truth_(inst_20795)){
var statearr_20836_20865 = state_20821__$1;
(statearr_20836_20865[(1)] = (8));

} else {
var statearr_20837_20866 = state_20821__$1;
(statearr_20837_20866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (14))){
var inst_20814 = (state_20821[(2)]);
var inst_20815 = cljs.core.async.close_BANG_.call(null,out);
var state_20821__$1 = (function (){var statearr_20839 = state_20821;
(statearr_20839[(13)] = inst_20814);

return statearr_20839;
})();
var statearr_20840_20867 = state_20821__$1;
(statearr_20840_20867[(2)] = inst_20815);

(statearr_20840_20867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (10))){
var inst_20805 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20841_20868 = state_20821__$1;
(statearr_20841_20868[(2)] = inst_20805);

(statearr_20841_20868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (8))){
var inst_20785 = (state_20821[(7)]);
var inst_20794 = (state_20821[(11)]);
var tmp20838 = inst_20785;
var inst_20785__$1 = tmp20838;
var inst_20786 = inst_20794;
var state_20821__$1 = (function (){var statearr_20842 = state_20821;
(statearr_20842[(7)] = inst_20785__$1);

(statearr_20842[(8)] = inst_20786);

return statearr_20842;
})();
var statearr_20843_20869 = state_20821__$1;
(statearr_20843_20869[(2)] = null);

(statearr_20843_20869[(1)] = (2));


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
});})(c__18195__auto___20855,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20855,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20847[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20847[(1)] = (1));

return statearr_20847;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20821){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20848){if((e20848 instanceof Object)){
var ex__18087__auto__ = e20848;
var statearr_20849_20870 = state_20821;
(statearr_20849_20870[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20871 = state_20821;
state_20821 = G__20871;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20855,out))
})();
var state__18197__auto__ = (function (){var statearr_20850 = f__18196__auto__.call(null);
(statearr_20850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20855);

return statearr_20850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20855,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20872 = [];
var len__14245__auto___20946 = arguments.length;
var i__14246__auto___20947 = (0);
while(true){
if((i__14246__auto___20947 < len__14245__auto___20946)){
args20872.push((arguments[i__14246__auto___20947]));

var G__20948 = (i__14246__auto___20947 + (1));
i__14246__auto___20947 = G__20948;
continue;
} else {
}
break;
}

var G__20874 = args20872.length;
switch (G__20874) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20872.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18195__auto___20950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18195__auto___20950,out){
return (function (){
var f__18196__auto__ = (function (){var switch__18083__auto__ = ((function (c__18195__auto___20950,out){
return (function (state_20916){
var state_val_20917 = (state_20916[(1)]);
if((state_val_20917 === (7))){
var inst_20912 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
var statearr_20918_20951 = state_20916__$1;
(statearr_20918_20951[(2)] = inst_20912);

(statearr_20918_20951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (1))){
var inst_20875 = [];
var inst_20876 = inst_20875;
var inst_20877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20916__$1 = (function (){var statearr_20919 = state_20916;
(statearr_20919[(7)] = inst_20877);

(statearr_20919[(8)] = inst_20876);

return statearr_20919;
})();
var statearr_20920_20952 = state_20916__$1;
(statearr_20920_20952[(2)] = null);

(statearr_20920_20952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (4))){
var inst_20880 = (state_20916[(9)]);
var inst_20880__$1 = (state_20916[(2)]);
var inst_20881 = (inst_20880__$1 == null);
var inst_20882 = cljs.core.not.call(null,inst_20881);
var state_20916__$1 = (function (){var statearr_20921 = state_20916;
(statearr_20921[(9)] = inst_20880__$1);

return statearr_20921;
})();
if(inst_20882){
var statearr_20922_20953 = state_20916__$1;
(statearr_20922_20953[(1)] = (5));

} else {
var statearr_20923_20954 = state_20916__$1;
(statearr_20923_20954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (15))){
var inst_20906 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
var statearr_20924_20955 = state_20916__$1;
(statearr_20924_20955[(2)] = inst_20906);

(statearr_20924_20955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (13))){
var state_20916__$1 = state_20916;
var statearr_20925_20956 = state_20916__$1;
(statearr_20925_20956[(2)] = null);

(statearr_20925_20956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (6))){
var inst_20876 = (state_20916[(8)]);
var inst_20901 = inst_20876.length;
var inst_20902 = (inst_20901 > (0));
var state_20916__$1 = state_20916;
if(cljs.core.truth_(inst_20902)){
var statearr_20926_20957 = state_20916__$1;
(statearr_20926_20957[(1)] = (12));

} else {
var statearr_20927_20958 = state_20916__$1;
(statearr_20927_20958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (3))){
var inst_20914 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20916__$1,inst_20914);
} else {
if((state_val_20917 === (12))){
var inst_20876 = (state_20916[(8)]);
var inst_20904 = cljs.core.vec.call(null,inst_20876);
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20916__$1,(15),out,inst_20904);
} else {
if((state_val_20917 === (2))){
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20916__$1,(4),ch);
} else {
if((state_val_20917 === (11))){
var inst_20880 = (state_20916[(9)]);
var inst_20884 = (state_20916[(10)]);
var inst_20894 = (state_20916[(2)]);
var inst_20895 = [];
var inst_20896 = inst_20895.push(inst_20880);
var inst_20876 = inst_20895;
var inst_20877 = inst_20884;
var state_20916__$1 = (function (){var statearr_20928 = state_20916;
(statearr_20928[(7)] = inst_20877);

(statearr_20928[(11)] = inst_20896);

(statearr_20928[(8)] = inst_20876);

(statearr_20928[(12)] = inst_20894);

return statearr_20928;
})();
var statearr_20929_20959 = state_20916__$1;
(statearr_20929_20959[(2)] = null);

(statearr_20929_20959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (9))){
var inst_20876 = (state_20916[(8)]);
var inst_20892 = cljs.core.vec.call(null,inst_20876);
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20916__$1,(11),out,inst_20892);
} else {
if((state_val_20917 === (5))){
var inst_20880 = (state_20916[(9)]);
var inst_20877 = (state_20916[(7)]);
var inst_20884 = (state_20916[(10)]);
var inst_20884__$1 = f.call(null,inst_20880);
var inst_20885 = cljs.core._EQ_.call(null,inst_20884__$1,inst_20877);
var inst_20886 = cljs.core.keyword_identical_QMARK_.call(null,inst_20877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20887 = (inst_20885) || (inst_20886);
var state_20916__$1 = (function (){var statearr_20930 = state_20916;
(statearr_20930[(10)] = inst_20884__$1);

return statearr_20930;
})();
if(cljs.core.truth_(inst_20887)){
var statearr_20931_20960 = state_20916__$1;
(statearr_20931_20960[(1)] = (8));

} else {
var statearr_20932_20961 = state_20916__$1;
(statearr_20932_20961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (14))){
var inst_20909 = (state_20916[(2)]);
var inst_20910 = cljs.core.async.close_BANG_.call(null,out);
var state_20916__$1 = (function (){var statearr_20934 = state_20916;
(statearr_20934[(13)] = inst_20909);

return statearr_20934;
})();
var statearr_20935_20962 = state_20916__$1;
(statearr_20935_20962[(2)] = inst_20910);

(statearr_20935_20962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (10))){
var inst_20899 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
var statearr_20936_20963 = state_20916__$1;
(statearr_20936_20963[(2)] = inst_20899);

(statearr_20936_20963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (8))){
var inst_20880 = (state_20916[(9)]);
var inst_20876 = (state_20916[(8)]);
var inst_20884 = (state_20916[(10)]);
var inst_20889 = inst_20876.push(inst_20880);
var tmp20933 = inst_20876;
var inst_20876__$1 = tmp20933;
var inst_20877 = inst_20884;
var state_20916__$1 = (function (){var statearr_20937 = state_20916;
(statearr_20937[(7)] = inst_20877);

(statearr_20937[(14)] = inst_20889);

(statearr_20937[(8)] = inst_20876__$1);

return statearr_20937;
})();
var statearr_20938_20964 = state_20916__$1;
(statearr_20938_20964[(2)] = null);

(statearr_20938_20964[(1)] = (2));


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
});})(c__18195__auto___20950,out))
;
return ((function (switch__18083__auto__,c__18195__auto___20950,out){
return (function() {
var cljs$core$async$state_machine__18084__auto__ = null;
var cljs$core$async$state_machine__18084__auto____0 = (function (){
var statearr_20942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20942[(0)] = cljs$core$async$state_machine__18084__auto__);

(statearr_20942[(1)] = (1));

return statearr_20942;
});
var cljs$core$async$state_machine__18084__auto____1 = (function (state_20916){
while(true){
var ret_value__18085__auto__ = (function (){try{while(true){
var result__18086__auto__ = switch__18083__auto__.call(null,state_20916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18086__auto__;
}
break;
}
}catch (e20943){if((e20943 instanceof Object)){
var ex__18087__auto__ = e20943;
var statearr_20944_20965 = state_20916;
(statearr_20944_20965[(5)] = ex__18087__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20966 = state_20916;
state_20916 = G__20966;
continue;
} else {
return ret_value__18085__auto__;
}
break;
}
});
cljs$core$async$state_machine__18084__auto__ = function(state_20916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18084__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18084__auto____1.call(this,state_20916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18084__auto____0;
cljs$core$async$state_machine__18084__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18084__auto____1;
return cljs$core$async$state_machine__18084__auto__;
})()
;})(switch__18083__auto__,c__18195__auto___20950,out))
})();
var state__18197__auto__ = (function (){var statearr_20945 = f__18196__auto__.call(null);
(statearr_20945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18195__auto___20950);

return statearr_20945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18197__auto__);
});})(c__18195__auto___20950,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1455728542310