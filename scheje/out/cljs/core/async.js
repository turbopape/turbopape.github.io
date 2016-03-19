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
var args18238 = [];
var len__14245__auto___18244 = arguments.length;
var i__14246__auto___18245 = (0);
while(true){
if((i__14246__auto___18245 < len__14245__auto___18244)){
args18238.push((arguments[i__14246__auto___18245]));

var G__18246 = (i__14246__auto___18245 + (1));
i__14246__auto___18245 = G__18246;
continue;
} else {
}
break;
}

var G__18240 = args18238.length;
switch (G__18240) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18238.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18241 = (function (f,blockable,meta18242){
this.f = f;
this.blockable = blockable;
this.meta18242 = meta18242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18243,meta18242__$1){
var self__ = this;
var _18243__$1 = this;
return (new cljs.core.async.t_cljs$core$async18241(self__.f,self__.blockable,meta18242__$1));
});

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18243){
var self__ = this;
var _18243__$1 = this;
return self__.meta18242;
});

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18242","meta18242",-1320258842,null)], null);
});

cljs.core.async.t_cljs$core$async18241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18241";

cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18241");
});

cljs.core.async.__GT_t_cljs$core$async18241 = (function cljs$core$async$__GT_t_cljs$core$async18241(f__$1,blockable__$1,meta18242){
return (new cljs.core.async.t_cljs$core$async18241(f__$1,blockable__$1,meta18242));
});

}

return (new cljs.core.async.t_cljs$core$async18241(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args18250 = [];
var len__14245__auto___18253 = arguments.length;
var i__14246__auto___18254 = (0);
while(true){
if((i__14246__auto___18254 < len__14245__auto___18253)){
args18250.push((arguments[i__14246__auto___18254]));

var G__18255 = (i__14246__auto___18254 + (1));
i__14246__auto___18254 = G__18255;
continue;
} else {
}
break;
}

var G__18252 = args18250.length;
switch (G__18252) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18250.length)].join('')));

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
var args18257 = [];
var len__14245__auto___18260 = arguments.length;
var i__14246__auto___18261 = (0);
while(true){
if((i__14246__auto___18261 < len__14245__auto___18260)){
args18257.push((arguments[i__14246__auto___18261]));

var G__18262 = (i__14246__auto___18261 + (1));
i__14246__auto___18261 = G__18262;
continue;
} else {
}
break;
}

var G__18259 = args18257.length;
switch (G__18259) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18257.length)].join('')));

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
var args18264 = [];
var len__14245__auto___18267 = arguments.length;
var i__14246__auto___18268 = (0);
while(true){
if((i__14246__auto___18268 < len__14245__auto___18267)){
args18264.push((arguments[i__14246__auto___18268]));

var G__18269 = (i__14246__auto___18268 + (1));
i__14246__auto___18268 = G__18269;
continue;
} else {
}
break;
}

var G__18266 = args18264.length;
switch (G__18266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18264.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18271 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18271);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18271,ret){
return (function (){
return fn1.call(null,val_18271);
});})(val_18271,ret))
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
var args18272 = [];
var len__14245__auto___18275 = arguments.length;
var i__14246__auto___18276 = (0);
while(true){
if((i__14246__auto___18276 < len__14245__auto___18275)){
args18272.push((arguments[i__14246__auto___18276]));

var G__18277 = (i__14246__auto___18276 + (1));
i__14246__auto___18276 = G__18277;
continue;
} else {
}
break;
}

var G__18274 = args18272.length;
switch (G__18274) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18272.length)].join('')));

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
var n__14090__auto___18279 = n;
var x_18280 = (0);
while(true){
if((x_18280 < n__14090__auto___18279)){
(a[x_18280] = (0));

var G__18281 = (x_18280 + (1));
x_18280 = G__18281;
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

var G__18282 = (i + (1));
i = G__18282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18286 = (function (alt_flag,flag,meta18287){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18287 = meta18287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18288,meta18287__$1){
var self__ = this;
var _18288__$1 = this;
return (new cljs.core.async.t_cljs$core$async18286(self__.alt_flag,self__.flag,meta18287__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18288){
var self__ = this;
var _18288__$1 = this;
return self__.meta18287;
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18287","meta18287",-1062276352,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18286";

cljs.core.async.t_cljs$core$async18286.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18286");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18286 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18286(alt_flag__$1,flag__$1,meta18287){
return (new cljs.core.async.t_cljs$core$async18286(alt_flag__$1,flag__$1,meta18287));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18286(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18292 = (function (alt_handler,flag,cb,meta18293){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18293 = meta18293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18294,meta18293__$1){
var self__ = this;
var _18294__$1 = this;
return (new cljs.core.async.t_cljs$core$async18292(self__.alt_handler,self__.flag,self__.cb,meta18293__$1));
});

cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18294){
var self__ = this;
var _18294__$1 = this;
return self__.meta18293;
});

cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18293","meta18293",-1889013468,null)], null);
});

cljs.core.async.t_cljs$core$async18292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18292";

cljs.core.async.t_cljs$core$async18292.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18292");
});

cljs.core.async.__GT_t_cljs$core$async18292 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18292(alt_handler__$1,flag__$1,cb__$1,meta18293){
return (new cljs.core.async.t_cljs$core$async18292(alt_handler__$1,flag__$1,cb__$1,meta18293));
});

}

return (new cljs.core.async.t_cljs$core$async18292(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18295_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18295_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18296_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18296_SHARP_,port], null));
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
var G__18297 = (i + (1));
i = G__18297;
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
var len__14245__auto___18303 = arguments.length;
var i__14246__auto___18304 = (0);
while(true){
if((i__14246__auto___18304 < len__14245__auto___18303)){
args__14252__auto__.push((arguments[i__14246__auto___18304]));

var G__18305 = (i__14246__auto___18304 + (1));
i__14246__auto___18304 = G__18305;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18300){
var map__18301 = p__18300;
var map__18301__$1 = ((((!((map__18301 == null)))?((((map__18301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18301):map__18301);
var opts = map__18301__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18298){
var G__18299 = cljs.core.first.call(null,seq18298);
var seq18298__$1 = cljs.core.next.call(null,seq18298);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18299,seq18298__$1);
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
var args18306 = [];
var len__14245__auto___18356 = arguments.length;
var i__14246__auto___18357 = (0);
while(true){
if((i__14246__auto___18357 < len__14245__auto___18356)){
args18306.push((arguments[i__14246__auto___18357]));

var G__18358 = (i__14246__auto___18357 + (1));
i__14246__auto___18357 = G__18358;
continue;
} else {
}
break;
}

var G__18308 = args18306.length;
switch (G__18308) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18306.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18193__auto___18360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___18360){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___18360){
return (function (state_18332){
var state_val_18333 = (state_18332[(1)]);
if((state_val_18333 === (7))){
var inst_18328 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18334_18361 = state_18332__$1;
(statearr_18334_18361[(2)] = inst_18328);

(statearr_18334_18361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (1))){
var state_18332__$1 = state_18332;
var statearr_18335_18362 = state_18332__$1;
(statearr_18335_18362[(2)] = null);

(statearr_18335_18362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (4))){
var inst_18311 = (state_18332[(7)]);
var inst_18311__$1 = (state_18332[(2)]);
var inst_18312 = (inst_18311__$1 == null);
var state_18332__$1 = (function (){var statearr_18336 = state_18332;
(statearr_18336[(7)] = inst_18311__$1);

return statearr_18336;
})();
if(cljs.core.truth_(inst_18312)){
var statearr_18337_18363 = state_18332__$1;
(statearr_18337_18363[(1)] = (5));

} else {
var statearr_18338_18364 = state_18332__$1;
(statearr_18338_18364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (13))){
var state_18332__$1 = state_18332;
var statearr_18339_18365 = state_18332__$1;
(statearr_18339_18365[(2)] = null);

(statearr_18339_18365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (6))){
var inst_18311 = (state_18332[(7)]);
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18332__$1,(11),to,inst_18311);
} else {
if((state_val_18333 === (3))){
var inst_18330 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18332__$1,inst_18330);
} else {
if((state_val_18333 === (12))){
var state_18332__$1 = state_18332;
var statearr_18340_18366 = state_18332__$1;
(statearr_18340_18366[(2)] = null);

(statearr_18340_18366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (2))){
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18332__$1,(4),from);
} else {
if((state_val_18333 === (11))){
var inst_18321 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
if(cljs.core.truth_(inst_18321)){
var statearr_18341_18367 = state_18332__$1;
(statearr_18341_18367[(1)] = (12));

} else {
var statearr_18342_18368 = state_18332__$1;
(statearr_18342_18368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (9))){
var state_18332__$1 = state_18332;
var statearr_18343_18369 = state_18332__$1;
(statearr_18343_18369[(2)] = null);

(statearr_18343_18369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (5))){
var state_18332__$1 = state_18332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18344_18370 = state_18332__$1;
(statearr_18344_18370[(1)] = (8));

} else {
var statearr_18345_18371 = state_18332__$1;
(statearr_18345_18371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (14))){
var inst_18326 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18346_18372 = state_18332__$1;
(statearr_18346_18372[(2)] = inst_18326);

(statearr_18346_18372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (10))){
var inst_18318 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18347_18373 = state_18332__$1;
(statearr_18347_18373[(2)] = inst_18318);

(statearr_18347_18373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18333 === (8))){
var inst_18315 = cljs.core.async.close_BANG_.call(null,to);
var state_18332__$1 = state_18332;
var statearr_18348_18374 = state_18332__$1;
(statearr_18348_18374[(2)] = inst_18315);

(statearr_18348_18374[(1)] = (10));


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
});})(c__18193__auto___18360))
;
return ((function (switch__18081__auto__,c__18193__auto___18360){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_18352 = [null,null,null,null,null,null,null,null];
(statearr_18352[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_18352[(1)] = (1));

return statearr_18352;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_18332){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18353){if((e18353 instanceof Object)){
var ex__18085__auto__ = e18353;
var statearr_18354_18375 = state_18332;
(statearr_18354_18375[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18376 = state_18332;
state_18332 = G__18376;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_18332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_18332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___18360))
})();
var state__18195__auto__ = (function (){var statearr_18355 = f__18194__auto__.call(null);
(statearr_18355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18360);

return statearr_18355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___18360))
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
return (function (p__18560){
var vec__18561 = p__18560;
var v = cljs.core.nth.call(null,vec__18561,(0),null);
var p = cljs.core.nth.call(null,vec__18561,(1),null);
var job = vec__18561;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18193__auto___18743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results){
return (function (state_18566){
var state_val_18567 = (state_18566[(1)]);
if((state_val_18567 === (1))){
var state_18566__$1 = state_18566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18566__$1,(2),res,v);
} else {
if((state_val_18567 === (2))){
var inst_18563 = (state_18566[(2)]);
var inst_18564 = cljs.core.async.close_BANG_.call(null,res);
var state_18566__$1 = (function (){var statearr_18568 = state_18566;
(statearr_18568[(7)] = inst_18563);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18566__$1,inst_18564);
} else {
return null;
}
}
});})(c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results))
;
return ((function (switch__18081__auto__,c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_18572 = [null,null,null,null,null,null,null,null];
(statearr_18572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__);

(statearr_18572[(1)] = (1));

return statearr_18572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1 = (function (state_18566){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18573){if((e18573 instanceof Object)){
var ex__18085__auto__ = e18573;
var statearr_18574_18744 = state_18566;
(statearr_18574_18744[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18745 = state_18566;
state_18566 = G__18745;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = function(state_18566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1.call(this,state_18566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results))
})();
var state__18195__auto__ = (function (){var statearr_18575 = f__18194__auto__.call(null);
(statearr_18575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18743);

return statearr_18575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___18743,res,vec__18561,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18576){
var vec__18577 = p__18576;
var v = cljs.core.nth.call(null,vec__18577,(0),null);
var p = cljs.core.nth.call(null,vec__18577,(1),null);
var job = vec__18577;
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
var n__14090__auto___18746 = n;
var __18747 = (0);
while(true){
if((__18747 < n__14090__auto___18746)){
var G__18578_18748 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18578_18748) {
case "compute":
var c__18193__auto___18750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18747,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (__18747,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function (state_18591){
var state_val_18592 = (state_18591[(1)]);
if((state_val_18592 === (1))){
var state_18591__$1 = state_18591;
var statearr_18593_18751 = state_18591__$1;
(statearr_18593_18751[(2)] = null);

(statearr_18593_18751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (2))){
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18591__$1,(4),jobs);
} else {
if((state_val_18592 === (3))){
var inst_18589 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18591__$1,inst_18589);
} else {
if((state_val_18592 === (4))){
var inst_18581 = (state_18591[(2)]);
var inst_18582 = process.call(null,inst_18581);
var state_18591__$1 = state_18591;
if(cljs.core.truth_(inst_18582)){
var statearr_18594_18752 = state_18591__$1;
(statearr_18594_18752[(1)] = (5));

} else {
var statearr_18595_18753 = state_18591__$1;
(statearr_18595_18753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (5))){
var state_18591__$1 = state_18591;
var statearr_18596_18754 = state_18591__$1;
(statearr_18596_18754[(2)] = null);

(statearr_18596_18754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (6))){
var state_18591__$1 = state_18591;
var statearr_18597_18755 = state_18591__$1;
(statearr_18597_18755[(2)] = null);

(statearr_18597_18755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (7))){
var inst_18587 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
var statearr_18598_18756 = state_18591__$1;
(statearr_18598_18756[(2)] = inst_18587);

(statearr_18598_18756[(1)] = (3));


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
});})(__18747,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
;
return ((function (__18747,switch__18081__auto__,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_18602 = [null,null,null,null,null,null,null];
(statearr_18602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__);

(statearr_18602[(1)] = (1));

return statearr_18602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1 = (function (state_18591){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18603){if((e18603 instanceof Object)){
var ex__18085__auto__ = e18603;
var statearr_18604_18757 = state_18591;
(statearr_18604_18757[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18758 = state_18591;
state_18591 = G__18758;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = function(state_18591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1.call(this,state_18591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__;
})()
;})(__18747,switch__18081__auto__,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
})();
var state__18195__auto__ = (function (){var statearr_18605 = f__18194__auto__.call(null);
(statearr_18605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18750);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(__18747,c__18193__auto___18750,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
);


break;
case "async":
var c__18193__auto___18759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18747,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (__18747,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function (state_18618){
var state_val_18619 = (state_18618[(1)]);
if((state_val_18619 === (1))){
var state_18618__$1 = state_18618;
var statearr_18620_18760 = state_18618__$1;
(statearr_18620_18760[(2)] = null);

(statearr_18620_18760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (2))){
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18618__$1,(4),jobs);
} else {
if((state_val_18619 === (3))){
var inst_18616 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18618__$1,inst_18616);
} else {
if((state_val_18619 === (4))){
var inst_18608 = (state_18618[(2)]);
var inst_18609 = async.call(null,inst_18608);
var state_18618__$1 = state_18618;
if(cljs.core.truth_(inst_18609)){
var statearr_18621_18761 = state_18618__$1;
(statearr_18621_18761[(1)] = (5));

} else {
var statearr_18622_18762 = state_18618__$1;
(statearr_18622_18762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (5))){
var state_18618__$1 = state_18618;
var statearr_18623_18763 = state_18618__$1;
(statearr_18623_18763[(2)] = null);

(statearr_18623_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (6))){
var state_18618__$1 = state_18618;
var statearr_18624_18764 = state_18618__$1;
(statearr_18624_18764[(2)] = null);

(statearr_18624_18764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (7))){
var inst_18614 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18625_18765 = state_18618__$1;
(statearr_18625_18765[(2)] = inst_18614);

(statearr_18625_18765[(1)] = (3));


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
});})(__18747,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
;
return ((function (__18747,switch__18081__auto__,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null];
(statearr_18629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1 = (function (state_18618){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object)){
var ex__18085__auto__ = e18630;
var statearr_18631_18766 = state_18618;
(statearr_18631_18766[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18767 = state_18618;
state_18618 = G__18767;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__;
})()
;})(__18747,switch__18081__auto__,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
})();
var state__18195__auto__ = (function (){var statearr_18632 = f__18194__auto__.call(null);
(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18759);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(__18747,c__18193__auto___18759,G__18578_18748,n__14090__auto___18746,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18768 = (__18747 + (1));
__18747 = G__18768;
continue;
} else {
}
break;
}

var c__18193__auto___18769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___18769,jobs,results,process,async){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___18769,jobs,results,process,async){
return (function (state_18654){
var state_val_18655 = (state_18654[(1)]);
if((state_val_18655 === (1))){
var state_18654__$1 = state_18654;
var statearr_18656_18770 = state_18654__$1;
(statearr_18656_18770[(2)] = null);

(statearr_18656_18770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (2))){
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18654__$1,(4),from);
} else {
if((state_val_18655 === (3))){
var inst_18652 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18654__$1,inst_18652);
} else {
if((state_val_18655 === (4))){
var inst_18635 = (state_18654[(7)]);
var inst_18635__$1 = (state_18654[(2)]);
var inst_18636 = (inst_18635__$1 == null);
var state_18654__$1 = (function (){var statearr_18657 = state_18654;
(statearr_18657[(7)] = inst_18635__$1);

return statearr_18657;
})();
if(cljs.core.truth_(inst_18636)){
var statearr_18658_18771 = state_18654__$1;
(statearr_18658_18771[(1)] = (5));

} else {
var statearr_18659_18772 = state_18654__$1;
(statearr_18659_18772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (5))){
var inst_18638 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18654__$1 = state_18654;
var statearr_18660_18773 = state_18654__$1;
(statearr_18660_18773[(2)] = inst_18638);

(statearr_18660_18773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (6))){
var inst_18640 = (state_18654[(8)]);
var inst_18635 = (state_18654[(7)]);
var inst_18640__$1 = cljs.core.async.chan.call(null,(1));
var inst_18641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18642 = [inst_18635,inst_18640__$1];
var inst_18643 = (new cljs.core.PersistentVector(null,2,(5),inst_18641,inst_18642,null));
var state_18654__$1 = (function (){var statearr_18661 = state_18654;
(statearr_18661[(8)] = inst_18640__$1);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18654__$1,(8),jobs,inst_18643);
} else {
if((state_val_18655 === (7))){
var inst_18650 = (state_18654[(2)]);
var state_18654__$1 = state_18654;
var statearr_18662_18774 = state_18654__$1;
(statearr_18662_18774[(2)] = inst_18650);

(statearr_18662_18774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18655 === (8))){
var inst_18640 = (state_18654[(8)]);
var inst_18645 = (state_18654[(2)]);
var state_18654__$1 = (function (){var statearr_18663 = state_18654;
(statearr_18663[(9)] = inst_18645);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18654__$1,(9),results,inst_18640);
} else {
if((state_val_18655 === (9))){
var inst_18647 = (state_18654[(2)]);
var state_18654__$1 = (function (){var statearr_18664 = state_18654;
(statearr_18664[(10)] = inst_18647);

return statearr_18664;
})();
var statearr_18665_18775 = state_18654__$1;
(statearr_18665_18775[(2)] = null);

(statearr_18665_18775[(1)] = (2));


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
});})(c__18193__auto___18769,jobs,results,process,async))
;
return ((function (switch__18081__auto__,c__18193__auto___18769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_18669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__);

(statearr_18669[(1)] = (1));

return statearr_18669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1 = (function (state_18654){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18670){if((e18670 instanceof Object)){
var ex__18085__auto__ = e18670;
var statearr_18671_18776 = state_18654;
(statearr_18671_18776[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18777 = state_18654;
state_18654 = G__18777;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = function(state_18654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1.call(this,state_18654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___18769,jobs,results,process,async))
})();
var state__18195__auto__ = (function (){var statearr_18672 = f__18194__auto__.call(null);
(statearr_18672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18769);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___18769,jobs,results,process,async))
);


var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__,jobs,results,process,async){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__,jobs,results,process,async){
return (function (state_18710){
var state_val_18711 = (state_18710[(1)]);
if((state_val_18711 === (7))){
var inst_18706 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
var statearr_18712_18778 = state_18710__$1;
(statearr_18712_18778[(2)] = inst_18706);

(statearr_18712_18778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (20))){
var state_18710__$1 = state_18710;
var statearr_18713_18779 = state_18710__$1;
(statearr_18713_18779[(2)] = null);

(statearr_18713_18779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (1))){
var state_18710__$1 = state_18710;
var statearr_18714_18780 = state_18710__$1;
(statearr_18714_18780[(2)] = null);

(statearr_18714_18780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (4))){
var inst_18675 = (state_18710[(7)]);
var inst_18675__$1 = (state_18710[(2)]);
var inst_18676 = (inst_18675__$1 == null);
var state_18710__$1 = (function (){var statearr_18715 = state_18710;
(statearr_18715[(7)] = inst_18675__$1);

return statearr_18715;
})();
if(cljs.core.truth_(inst_18676)){
var statearr_18716_18781 = state_18710__$1;
(statearr_18716_18781[(1)] = (5));

} else {
var statearr_18717_18782 = state_18710__$1;
(statearr_18717_18782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (15))){
var inst_18688 = (state_18710[(8)]);
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18710__$1,(18),to,inst_18688);
} else {
if((state_val_18711 === (21))){
var inst_18701 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
var statearr_18718_18783 = state_18710__$1;
(statearr_18718_18783[(2)] = inst_18701);

(statearr_18718_18783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (13))){
var inst_18703 = (state_18710[(2)]);
var state_18710__$1 = (function (){var statearr_18719 = state_18710;
(statearr_18719[(9)] = inst_18703);

return statearr_18719;
})();
var statearr_18720_18784 = state_18710__$1;
(statearr_18720_18784[(2)] = null);

(statearr_18720_18784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (6))){
var inst_18675 = (state_18710[(7)]);
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18710__$1,(11),inst_18675);
} else {
if((state_val_18711 === (17))){
var inst_18696 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
if(cljs.core.truth_(inst_18696)){
var statearr_18721_18785 = state_18710__$1;
(statearr_18721_18785[(1)] = (19));

} else {
var statearr_18722_18786 = state_18710__$1;
(statearr_18722_18786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (3))){
var inst_18708 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18710__$1,inst_18708);
} else {
if((state_val_18711 === (12))){
var inst_18685 = (state_18710[(10)]);
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18710__$1,(14),inst_18685);
} else {
if((state_val_18711 === (2))){
var state_18710__$1 = state_18710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18710__$1,(4),results);
} else {
if((state_val_18711 === (19))){
var state_18710__$1 = state_18710;
var statearr_18723_18787 = state_18710__$1;
(statearr_18723_18787[(2)] = null);

(statearr_18723_18787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (11))){
var inst_18685 = (state_18710[(2)]);
var state_18710__$1 = (function (){var statearr_18724 = state_18710;
(statearr_18724[(10)] = inst_18685);

return statearr_18724;
})();
var statearr_18725_18788 = state_18710__$1;
(statearr_18725_18788[(2)] = null);

(statearr_18725_18788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (9))){
var state_18710__$1 = state_18710;
var statearr_18726_18789 = state_18710__$1;
(statearr_18726_18789[(2)] = null);

(statearr_18726_18789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (5))){
var state_18710__$1 = state_18710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18727_18790 = state_18710__$1;
(statearr_18727_18790[(1)] = (8));

} else {
var statearr_18728_18791 = state_18710__$1;
(statearr_18728_18791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (14))){
var inst_18688 = (state_18710[(8)]);
var inst_18690 = (state_18710[(11)]);
var inst_18688__$1 = (state_18710[(2)]);
var inst_18689 = (inst_18688__$1 == null);
var inst_18690__$1 = cljs.core.not.call(null,inst_18689);
var state_18710__$1 = (function (){var statearr_18729 = state_18710;
(statearr_18729[(8)] = inst_18688__$1);

(statearr_18729[(11)] = inst_18690__$1);

return statearr_18729;
})();
if(inst_18690__$1){
var statearr_18730_18792 = state_18710__$1;
(statearr_18730_18792[(1)] = (15));

} else {
var statearr_18731_18793 = state_18710__$1;
(statearr_18731_18793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (16))){
var inst_18690 = (state_18710[(11)]);
var state_18710__$1 = state_18710;
var statearr_18732_18794 = state_18710__$1;
(statearr_18732_18794[(2)] = inst_18690);

(statearr_18732_18794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (10))){
var inst_18682 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
var statearr_18733_18795 = state_18710__$1;
(statearr_18733_18795[(2)] = inst_18682);

(statearr_18733_18795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (18))){
var inst_18693 = (state_18710[(2)]);
var state_18710__$1 = state_18710;
var statearr_18734_18796 = state_18710__$1;
(statearr_18734_18796[(2)] = inst_18693);

(statearr_18734_18796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18711 === (8))){
var inst_18679 = cljs.core.async.close_BANG_.call(null,to);
var state_18710__$1 = state_18710;
var statearr_18735_18797 = state_18710__$1;
(statearr_18735_18797[(2)] = inst_18679);

(statearr_18735_18797[(1)] = (10));


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
});})(c__18193__auto__,jobs,results,process,async))
;
return ((function (switch__18081__auto__,c__18193__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_18739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__);

(statearr_18739[(1)] = (1));

return statearr_18739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1 = (function (state_18710){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18740){if((e18740 instanceof Object)){
var ex__18085__auto__ = e18740;
var statearr_18741_18798 = state_18710;
(statearr_18741_18798[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18799 = state_18710;
state_18710 = G__18799;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__ = function(state_18710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1.call(this,state_18710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__,jobs,results,process,async))
})();
var state__18195__auto__ = (function (){var statearr_18742 = f__18194__auto__.call(null);
(statearr_18742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_18742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__,jobs,results,process,async))
);

return c__18193__auto__;
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
var args18800 = [];
var len__14245__auto___18803 = arguments.length;
var i__14246__auto___18804 = (0);
while(true){
if((i__14246__auto___18804 < len__14245__auto___18803)){
args18800.push((arguments[i__14246__auto___18804]));

var G__18805 = (i__14246__auto___18804 + (1));
i__14246__auto___18804 = G__18805;
continue;
} else {
}
break;
}

var G__18802 = args18800.length;
switch (G__18802) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18800.length)].join('')));

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
var args18807 = [];
var len__14245__auto___18810 = arguments.length;
var i__14246__auto___18811 = (0);
while(true){
if((i__14246__auto___18811 < len__14245__auto___18810)){
args18807.push((arguments[i__14246__auto___18811]));

var G__18812 = (i__14246__auto___18811 + (1));
i__14246__auto___18811 = G__18812;
continue;
} else {
}
break;
}

var G__18809 = args18807.length;
switch (G__18809) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18807.length)].join('')));

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
var args18814 = [];
var len__14245__auto___18867 = arguments.length;
var i__14246__auto___18868 = (0);
while(true){
if((i__14246__auto___18868 < len__14245__auto___18867)){
args18814.push((arguments[i__14246__auto___18868]));

var G__18869 = (i__14246__auto___18868 + (1));
i__14246__auto___18868 = G__18869;
continue;
} else {
}
break;
}

var G__18816 = args18814.length;
switch (G__18816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18814.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18193__auto___18871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___18871,tc,fc){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___18871,tc,fc){
return (function (state_18842){
var state_val_18843 = (state_18842[(1)]);
if((state_val_18843 === (7))){
var inst_18838 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
var statearr_18844_18872 = state_18842__$1;
(statearr_18844_18872[(2)] = inst_18838);

(statearr_18844_18872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (1))){
var state_18842__$1 = state_18842;
var statearr_18845_18873 = state_18842__$1;
(statearr_18845_18873[(2)] = null);

(statearr_18845_18873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (4))){
var inst_18819 = (state_18842[(7)]);
var inst_18819__$1 = (state_18842[(2)]);
var inst_18820 = (inst_18819__$1 == null);
var state_18842__$1 = (function (){var statearr_18846 = state_18842;
(statearr_18846[(7)] = inst_18819__$1);

return statearr_18846;
})();
if(cljs.core.truth_(inst_18820)){
var statearr_18847_18874 = state_18842__$1;
(statearr_18847_18874[(1)] = (5));

} else {
var statearr_18848_18875 = state_18842__$1;
(statearr_18848_18875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (13))){
var state_18842__$1 = state_18842;
var statearr_18849_18876 = state_18842__$1;
(statearr_18849_18876[(2)] = null);

(statearr_18849_18876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (6))){
var inst_18819 = (state_18842[(7)]);
var inst_18825 = p.call(null,inst_18819);
var state_18842__$1 = state_18842;
if(cljs.core.truth_(inst_18825)){
var statearr_18850_18877 = state_18842__$1;
(statearr_18850_18877[(1)] = (9));

} else {
var statearr_18851_18878 = state_18842__$1;
(statearr_18851_18878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (3))){
var inst_18840 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18842__$1,inst_18840);
} else {
if((state_val_18843 === (12))){
var state_18842__$1 = state_18842;
var statearr_18852_18879 = state_18842__$1;
(statearr_18852_18879[(2)] = null);

(statearr_18852_18879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (2))){
var state_18842__$1 = state_18842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18842__$1,(4),ch);
} else {
if((state_val_18843 === (11))){
var inst_18819 = (state_18842[(7)]);
var inst_18829 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18842__$1,(8),inst_18829,inst_18819);
} else {
if((state_val_18843 === (9))){
var state_18842__$1 = state_18842;
var statearr_18853_18880 = state_18842__$1;
(statearr_18853_18880[(2)] = tc);

(statearr_18853_18880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (5))){
var inst_18822 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18823 = cljs.core.async.close_BANG_.call(null,fc);
var state_18842__$1 = (function (){var statearr_18854 = state_18842;
(statearr_18854[(8)] = inst_18822);

return statearr_18854;
})();
var statearr_18855_18881 = state_18842__$1;
(statearr_18855_18881[(2)] = inst_18823);

(statearr_18855_18881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (14))){
var inst_18836 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
var statearr_18856_18882 = state_18842__$1;
(statearr_18856_18882[(2)] = inst_18836);

(statearr_18856_18882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (10))){
var state_18842__$1 = state_18842;
var statearr_18857_18883 = state_18842__$1;
(statearr_18857_18883[(2)] = fc);

(statearr_18857_18883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18843 === (8))){
var inst_18831 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
if(cljs.core.truth_(inst_18831)){
var statearr_18858_18884 = state_18842__$1;
(statearr_18858_18884[(1)] = (12));

} else {
var statearr_18859_18885 = state_18842__$1;
(statearr_18859_18885[(1)] = (13));

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
});})(c__18193__auto___18871,tc,fc))
;
return ((function (switch__18081__auto__,c__18193__auto___18871,tc,fc){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_18863 = [null,null,null,null,null,null,null,null,null];
(statearr_18863[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_18863[(1)] = (1));

return statearr_18863;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_18842){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18864){if((e18864 instanceof Object)){
var ex__18085__auto__ = e18864;
var statearr_18865_18886 = state_18842;
(statearr_18865_18886[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_18842;
state_18842 = G__18887;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_18842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_18842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___18871,tc,fc))
})();
var state__18195__auto__ = (function (){var statearr_18866 = f__18194__auto__.call(null);
(statearr_18866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___18871);

return statearr_18866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___18871,tc,fc))
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
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_18951){
var state_val_18952 = (state_18951[(1)]);
if((state_val_18952 === (7))){
var inst_18947 = (state_18951[(2)]);
var state_18951__$1 = state_18951;
var statearr_18953_18974 = state_18951__$1;
(statearr_18953_18974[(2)] = inst_18947);

(statearr_18953_18974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (1))){
var inst_18931 = init;
var state_18951__$1 = (function (){var statearr_18954 = state_18951;
(statearr_18954[(7)] = inst_18931);

return statearr_18954;
})();
var statearr_18955_18975 = state_18951__$1;
(statearr_18955_18975[(2)] = null);

(statearr_18955_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (4))){
var inst_18934 = (state_18951[(8)]);
var inst_18934__$1 = (state_18951[(2)]);
var inst_18935 = (inst_18934__$1 == null);
var state_18951__$1 = (function (){var statearr_18956 = state_18951;
(statearr_18956[(8)] = inst_18934__$1);

return statearr_18956;
})();
if(cljs.core.truth_(inst_18935)){
var statearr_18957_18976 = state_18951__$1;
(statearr_18957_18976[(1)] = (5));

} else {
var statearr_18958_18977 = state_18951__$1;
(statearr_18958_18977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (6))){
var inst_18934 = (state_18951[(8)]);
var inst_18938 = (state_18951[(9)]);
var inst_18931 = (state_18951[(7)]);
var inst_18938__$1 = f.call(null,inst_18931,inst_18934);
var inst_18939 = cljs.core.reduced_QMARK_.call(null,inst_18938__$1);
var state_18951__$1 = (function (){var statearr_18959 = state_18951;
(statearr_18959[(9)] = inst_18938__$1);

return statearr_18959;
})();
if(inst_18939){
var statearr_18960_18978 = state_18951__$1;
(statearr_18960_18978[(1)] = (8));

} else {
var statearr_18961_18979 = state_18951__$1;
(statearr_18961_18979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (3))){
var inst_18949 = (state_18951[(2)]);
var state_18951__$1 = state_18951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18951__$1,inst_18949);
} else {
if((state_val_18952 === (2))){
var state_18951__$1 = state_18951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18951__$1,(4),ch);
} else {
if((state_val_18952 === (9))){
var inst_18938 = (state_18951[(9)]);
var inst_18931 = inst_18938;
var state_18951__$1 = (function (){var statearr_18962 = state_18951;
(statearr_18962[(7)] = inst_18931);

return statearr_18962;
})();
var statearr_18963_18980 = state_18951__$1;
(statearr_18963_18980[(2)] = null);

(statearr_18963_18980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (5))){
var inst_18931 = (state_18951[(7)]);
var state_18951__$1 = state_18951;
var statearr_18964_18981 = state_18951__$1;
(statearr_18964_18981[(2)] = inst_18931);

(statearr_18964_18981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (10))){
var inst_18945 = (state_18951[(2)]);
var state_18951__$1 = state_18951;
var statearr_18965_18982 = state_18951__$1;
(statearr_18965_18982[(2)] = inst_18945);

(statearr_18965_18982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18952 === (8))){
var inst_18938 = (state_18951[(9)]);
var inst_18941 = cljs.core.deref.call(null,inst_18938);
var state_18951__$1 = state_18951;
var statearr_18966_18983 = state_18951__$1;
(statearr_18966_18983[(2)] = inst_18941);

(statearr_18966_18983[(1)] = (10));


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
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18082__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18082__auto____0 = (function (){
var statearr_18970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18970[(0)] = cljs$core$async$reduce_$_state_machine__18082__auto__);

(statearr_18970[(1)] = (1));

return statearr_18970;
});
var cljs$core$async$reduce_$_state_machine__18082__auto____1 = (function (state_18951){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_18951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e18971){if((e18971 instanceof Object)){
var ex__18085__auto__ = e18971;
var statearr_18972_18984 = state_18951;
(statearr_18972_18984[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18985 = state_18951;
state_18951 = G__18985;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18082__auto__ = function(state_18951){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18082__auto____1.call(this,state_18951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18082__auto____0;
cljs$core$async$reduce_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18082__auto____1;
return cljs$core$async$reduce_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_18973 = f__18194__auto__.call(null);
(statearr_18973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_18973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
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
var args18986 = [];
var len__14245__auto___19038 = arguments.length;
var i__14246__auto___19039 = (0);
while(true){
if((i__14246__auto___19039 < len__14245__auto___19038)){
args18986.push((arguments[i__14246__auto___19039]));

var G__19040 = (i__14246__auto___19039 + (1));
i__14246__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var G__18988 = args18986.length;
switch (G__18988) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18986.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_19013){
var state_val_19014 = (state_19013[(1)]);
if((state_val_19014 === (7))){
var inst_18995 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19015_19042 = state_19013__$1;
(statearr_19015_19042[(2)] = inst_18995);

(statearr_19015_19042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (1))){
var inst_18989 = cljs.core.seq.call(null,coll);
var inst_18990 = inst_18989;
var state_19013__$1 = (function (){var statearr_19016 = state_19013;
(statearr_19016[(7)] = inst_18990);

return statearr_19016;
})();
var statearr_19017_19043 = state_19013__$1;
(statearr_19017_19043[(2)] = null);

(statearr_19017_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (4))){
var inst_18990 = (state_19013[(7)]);
var inst_18993 = cljs.core.first.call(null,inst_18990);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19013__$1,(7),ch,inst_18993);
} else {
if((state_val_19014 === (13))){
var inst_19007 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19018_19044 = state_19013__$1;
(statearr_19018_19044[(2)] = inst_19007);

(statearr_19018_19044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (6))){
var inst_18998 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
if(cljs.core.truth_(inst_18998)){
var statearr_19019_19045 = state_19013__$1;
(statearr_19019_19045[(1)] = (8));

} else {
var statearr_19020_19046 = state_19013__$1;
(statearr_19020_19046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (3))){
var inst_19011 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19013__$1,inst_19011);
} else {
if((state_val_19014 === (12))){
var state_19013__$1 = state_19013;
var statearr_19021_19047 = state_19013__$1;
(statearr_19021_19047[(2)] = null);

(statearr_19021_19047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (2))){
var inst_18990 = (state_19013[(7)]);
var state_19013__$1 = state_19013;
if(cljs.core.truth_(inst_18990)){
var statearr_19022_19048 = state_19013__$1;
(statearr_19022_19048[(1)] = (4));

} else {
var statearr_19023_19049 = state_19013__$1;
(statearr_19023_19049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (11))){
var inst_19004 = cljs.core.async.close_BANG_.call(null,ch);
var state_19013__$1 = state_19013;
var statearr_19024_19050 = state_19013__$1;
(statearr_19024_19050[(2)] = inst_19004);

(statearr_19024_19050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (9))){
var state_19013__$1 = state_19013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19025_19051 = state_19013__$1;
(statearr_19025_19051[(1)] = (11));

} else {
var statearr_19026_19052 = state_19013__$1;
(statearr_19026_19052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (5))){
var inst_18990 = (state_19013[(7)]);
var state_19013__$1 = state_19013;
var statearr_19027_19053 = state_19013__$1;
(statearr_19027_19053[(2)] = inst_18990);

(statearr_19027_19053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (10))){
var inst_19009 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19028_19054 = state_19013__$1;
(statearr_19028_19054[(2)] = inst_19009);

(statearr_19028_19054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (8))){
var inst_18990 = (state_19013[(7)]);
var inst_19000 = cljs.core.next.call(null,inst_18990);
var inst_18990__$1 = inst_19000;
var state_19013__$1 = (function (){var statearr_19029 = state_19013;
(statearr_19029[(7)] = inst_18990__$1);

return statearr_19029;
})();
var statearr_19030_19055 = state_19013__$1;
(statearr_19030_19055[(2)] = null);

(statearr_19030_19055[(1)] = (2));


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
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_19034 = [null,null,null,null,null,null,null,null];
(statearr_19034[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_19034[(1)] = (1));

return statearr_19034;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_19013){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_19013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e19035){if((e19035 instanceof Object)){
var ex__18085__auto__ = e19035;
var statearr_19036_19056 = state_19013;
(statearr_19036_19056[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19057 = state_19013;
state_19013 = G__19057;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_19013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_19013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_19037 = f__18194__auto__.call(null);
(statearr_19037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_19037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async19279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19279 = (function (mult,ch,cs,meta19280){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19280 = meta19280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19281,meta19280__$1){
var self__ = this;
var _19281__$1 = this;
return (new cljs.core.async.t_cljs$core$async19279(self__.mult,self__.ch,self__.cs,meta19280__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19281){
var self__ = this;
var _19281__$1 = this;
return self__.meta19280;
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19280","meta19280",1683672642,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19279";

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19279");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19279 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19279(mult__$1,ch__$1,cs__$1,meta19280){
return (new cljs.core.async.t_cljs$core$async19279(mult__$1,ch__$1,cs__$1,meta19280));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19279(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18193__auto___19500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___19500,cs,m,dchan,dctr,done){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___19500,cs,m,dchan,dctr,done){
return (function (state_19412){
var state_val_19413 = (state_19412[(1)]);
if((state_val_19413 === (7))){
var inst_19408 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19414_19501 = state_19412__$1;
(statearr_19414_19501[(2)] = inst_19408);

(statearr_19414_19501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (20))){
var inst_19313 = (state_19412[(7)]);
var inst_19323 = cljs.core.first.call(null,inst_19313);
var inst_19324 = cljs.core.nth.call(null,inst_19323,(0),null);
var inst_19325 = cljs.core.nth.call(null,inst_19323,(1),null);
var state_19412__$1 = (function (){var statearr_19415 = state_19412;
(statearr_19415[(8)] = inst_19324);

return statearr_19415;
})();
if(cljs.core.truth_(inst_19325)){
var statearr_19416_19502 = state_19412__$1;
(statearr_19416_19502[(1)] = (22));

} else {
var statearr_19417_19503 = state_19412__$1;
(statearr_19417_19503[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (27))){
var inst_19353 = (state_19412[(9)]);
var inst_19355 = (state_19412[(10)]);
var inst_19284 = (state_19412[(11)]);
var inst_19360 = (state_19412[(12)]);
var inst_19360__$1 = cljs.core._nth.call(null,inst_19353,inst_19355);
var inst_19361 = cljs.core.async.put_BANG_.call(null,inst_19360__$1,inst_19284,done);
var state_19412__$1 = (function (){var statearr_19418 = state_19412;
(statearr_19418[(12)] = inst_19360__$1);

return statearr_19418;
})();
if(cljs.core.truth_(inst_19361)){
var statearr_19419_19504 = state_19412__$1;
(statearr_19419_19504[(1)] = (30));

} else {
var statearr_19420_19505 = state_19412__$1;
(statearr_19420_19505[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (1))){
var state_19412__$1 = state_19412;
var statearr_19421_19506 = state_19412__$1;
(statearr_19421_19506[(2)] = null);

(statearr_19421_19506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (24))){
var inst_19313 = (state_19412[(7)]);
var inst_19330 = (state_19412[(2)]);
var inst_19331 = cljs.core.next.call(null,inst_19313);
var inst_19293 = inst_19331;
var inst_19294 = null;
var inst_19295 = (0);
var inst_19296 = (0);
var state_19412__$1 = (function (){var statearr_19422 = state_19412;
(statearr_19422[(13)] = inst_19295);

(statearr_19422[(14)] = inst_19330);

(statearr_19422[(15)] = inst_19296);

(statearr_19422[(16)] = inst_19293);

(statearr_19422[(17)] = inst_19294);

return statearr_19422;
})();
var statearr_19423_19507 = state_19412__$1;
(statearr_19423_19507[(2)] = null);

(statearr_19423_19507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (39))){
var state_19412__$1 = state_19412;
var statearr_19427_19508 = state_19412__$1;
(statearr_19427_19508[(2)] = null);

(statearr_19427_19508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (4))){
var inst_19284 = (state_19412[(11)]);
var inst_19284__$1 = (state_19412[(2)]);
var inst_19285 = (inst_19284__$1 == null);
var state_19412__$1 = (function (){var statearr_19428 = state_19412;
(statearr_19428[(11)] = inst_19284__$1);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19285)){
var statearr_19429_19509 = state_19412__$1;
(statearr_19429_19509[(1)] = (5));

} else {
var statearr_19430_19510 = state_19412__$1;
(statearr_19430_19510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (15))){
var inst_19295 = (state_19412[(13)]);
var inst_19296 = (state_19412[(15)]);
var inst_19293 = (state_19412[(16)]);
var inst_19294 = (state_19412[(17)]);
var inst_19309 = (state_19412[(2)]);
var inst_19310 = (inst_19296 + (1));
var tmp19424 = inst_19295;
var tmp19425 = inst_19293;
var tmp19426 = inst_19294;
var inst_19293__$1 = tmp19425;
var inst_19294__$1 = tmp19426;
var inst_19295__$1 = tmp19424;
var inst_19296__$1 = inst_19310;
var state_19412__$1 = (function (){var statearr_19431 = state_19412;
(statearr_19431[(13)] = inst_19295__$1);

(statearr_19431[(15)] = inst_19296__$1);

(statearr_19431[(16)] = inst_19293__$1);

(statearr_19431[(17)] = inst_19294__$1);

(statearr_19431[(18)] = inst_19309);

return statearr_19431;
})();
var statearr_19432_19511 = state_19412__$1;
(statearr_19432_19511[(2)] = null);

(statearr_19432_19511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (21))){
var inst_19334 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19436_19512 = state_19412__$1;
(statearr_19436_19512[(2)] = inst_19334);

(statearr_19436_19512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (31))){
var inst_19360 = (state_19412[(12)]);
var inst_19364 = done.call(null,null);
var inst_19365 = cljs.core.async.untap_STAR_.call(null,m,inst_19360);
var state_19412__$1 = (function (){var statearr_19437 = state_19412;
(statearr_19437[(19)] = inst_19364);

return statearr_19437;
})();
var statearr_19438_19513 = state_19412__$1;
(statearr_19438_19513[(2)] = inst_19365);

(statearr_19438_19513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (32))){
var inst_19353 = (state_19412[(9)]);
var inst_19355 = (state_19412[(10)]);
var inst_19354 = (state_19412[(20)]);
var inst_19352 = (state_19412[(21)]);
var inst_19367 = (state_19412[(2)]);
var inst_19368 = (inst_19355 + (1));
var tmp19433 = inst_19353;
var tmp19434 = inst_19354;
var tmp19435 = inst_19352;
var inst_19352__$1 = tmp19435;
var inst_19353__$1 = tmp19433;
var inst_19354__$1 = tmp19434;
var inst_19355__$1 = inst_19368;
var state_19412__$1 = (function (){var statearr_19439 = state_19412;
(statearr_19439[(9)] = inst_19353__$1);

(statearr_19439[(10)] = inst_19355__$1);

(statearr_19439[(20)] = inst_19354__$1);

(statearr_19439[(22)] = inst_19367);

(statearr_19439[(21)] = inst_19352__$1);

return statearr_19439;
})();
var statearr_19440_19514 = state_19412__$1;
(statearr_19440_19514[(2)] = null);

(statearr_19440_19514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (40))){
var inst_19380 = (state_19412[(23)]);
var inst_19384 = done.call(null,null);
var inst_19385 = cljs.core.async.untap_STAR_.call(null,m,inst_19380);
var state_19412__$1 = (function (){var statearr_19441 = state_19412;
(statearr_19441[(24)] = inst_19384);

return statearr_19441;
})();
var statearr_19442_19515 = state_19412__$1;
(statearr_19442_19515[(2)] = inst_19385);

(statearr_19442_19515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (33))){
var inst_19371 = (state_19412[(25)]);
var inst_19373 = cljs.core.chunked_seq_QMARK_.call(null,inst_19371);
var state_19412__$1 = state_19412;
if(inst_19373){
var statearr_19443_19516 = state_19412__$1;
(statearr_19443_19516[(1)] = (36));

} else {
var statearr_19444_19517 = state_19412__$1;
(statearr_19444_19517[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (13))){
var inst_19303 = (state_19412[(26)]);
var inst_19306 = cljs.core.async.close_BANG_.call(null,inst_19303);
var state_19412__$1 = state_19412;
var statearr_19445_19518 = state_19412__$1;
(statearr_19445_19518[(2)] = inst_19306);

(statearr_19445_19518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (22))){
var inst_19324 = (state_19412[(8)]);
var inst_19327 = cljs.core.async.close_BANG_.call(null,inst_19324);
var state_19412__$1 = state_19412;
var statearr_19446_19519 = state_19412__$1;
(statearr_19446_19519[(2)] = inst_19327);

(statearr_19446_19519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (36))){
var inst_19371 = (state_19412[(25)]);
var inst_19375 = cljs.core.chunk_first.call(null,inst_19371);
var inst_19376 = cljs.core.chunk_rest.call(null,inst_19371);
var inst_19377 = cljs.core.count.call(null,inst_19375);
var inst_19352 = inst_19376;
var inst_19353 = inst_19375;
var inst_19354 = inst_19377;
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19447 = state_19412;
(statearr_19447[(9)] = inst_19353);

(statearr_19447[(10)] = inst_19355);

(statearr_19447[(20)] = inst_19354);

(statearr_19447[(21)] = inst_19352);

return statearr_19447;
})();
var statearr_19448_19520 = state_19412__$1;
(statearr_19448_19520[(2)] = null);

(statearr_19448_19520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (41))){
var inst_19371 = (state_19412[(25)]);
var inst_19387 = (state_19412[(2)]);
var inst_19388 = cljs.core.next.call(null,inst_19371);
var inst_19352 = inst_19388;
var inst_19353 = null;
var inst_19354 = (0);
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19449 = state_19412;
(statearr_19449[(9)] = inst_19353);

(statearr_19449[(10)] = inst_19355);

(statearr_19449[(27)] = inst_19387);

(statearr_19449[(20)] = inst_19354);

(statearr_19449[(21)] = inst_19352);

return statearr_19449;
})();
var statearr_19450_19521 = state_19412__$1;
(statearr_19450_19521[(2)] = null);

(statearr_19450_19521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (43))){
var state_19412__$1 = state_19412;
var statearr_19451_19522 = state_19412__$1;
(statearr_19451_19522[(2)] = null);

(statearr_19451_19522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (29))){
var inst_19396 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19452_19523 = state_19412__$1;
(statearr_19452_19523[(2)] = inst_19396);

(statearr_19452_19523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (44))){
var inst_19405 = (state_19412[(2)]);
var state_19412__$1 = (function (){var statearr_19453 = state_19412;
(statearr_19453[(28)] = inst_19405);

return statearr_19453;
})();
var statearr_19454_19524 = state_19412__$1;
(statearr_19454_19524[(2)] = null);

(statearr_19454_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (6))){
var inst_19344 = (state_19412[(29)]);
var inst_19343 = cljs.core.deref.call(null,cs);
var inst_19344__$1 = cljs.core.keys.call(null,inst_19343);
var inst_19345 = cljs.core.count.call(null,inst_19344__$1);
var inst_19346 = cljs.core.reset_BANG_.call(null,dctr,inst_19345);
var inst_19351 = cljs.core.seq.call(null,inst_19344__$1);
var inst_19352 = inst_19351;
var inst_19353 = null;
var inst_19354 = (0);
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19455 = state_19412;
(statearr_19455[(9)] = inst_19353);

(statearr_19455[(10)] = inst_19355);

(statearr_19455[(30)] = inst_19346);

(statearr_19455[(20)] = inst_19354);

(statearr_19455[(21)] = inst_19352);

(statearr_19455[(29)] = inst_19344__$1);

return statearr_19455;
})();
var statearr_19456_19525 = state_19412__$1;
(statearr_19456_19525[(2)] = null);

(statearr_19456_19525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (28))){
var inst_19371 = (state_19412[(25)]);
var inst_19352 = (state_19412[(21)]);
var inst_19371__$1 = cljs.core.seq.call(null,inst_19352);
var state_19412__$1 = (function (){var statearr_19457 = state_19412;
(statearr_19457[(25)] = inst_19371__$1);

return statearr_19457;
})();
if(inst_19371__$1){
var statearr_19458_19526 = state_19412__$1;
(statearr_19458_19526[(1)] = (33));

} else {
var statearr_19459_19527 = state_19412__$1;
(statearr_19459_19527[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (25))){
var inst_19355 = (state_19412[(10)]);
var inst_19354 = (state_19412[(20)]);
var inst_19357 = (inst_19355 < inst_19354);
var inst_19358 = inst_19357;
var state_19412__$1 = state_19412;
if(cljs.core.truth_(inst_19358)){
var statearr_19460_19528 = state_19412__$1;
(statearr_19460_19528[(1)] = (27));

} else {
var statearr_19461_19529 = state_19412__$1;
(statearr_19461_19529[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (34))){
var state_19412__$1 = state_19412;
var statearr_19462_19530 = state_19412__$1;
(statearr_19462_19530[(2)] = null);

(statearr_19462_19530[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (17))){
var state_19412__$1 = state_19412;
var statearr_19463_19531 = state_19412__$1;
(statearr_19463_19531[(2)] = null);

(statearr_19463_19531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (3))){
var inst_19410 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19412__$1,inst_19410);
} else {
if((state_val_19413 === (12))){
var inst_19339 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19464_19532 = state_19412__$1;
(statearr_19464_19532[(2)] = inst_19339);

(statearr_19464_19532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (2))){
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19412__$1,(4),ch);
} else {
if((state_val_19413 === (23))){
var state_19412__$1 = state_19412;
var statearr_19465_19533 = state_19412__$1;
(statearr_19465_19533[(2)] = null);

(statearr_19465_19533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (35))){
var inst_19394 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19466_19534 = state_19412__$1;
(statearr_19466_19534[(2)] = inst_19394);

(statearr_19466_19534[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (19))){
var inst_19313 = (state_19412[(7)]);
var inst_19317 = cljs.core.chunk_first.call(null,inst_19313);
var inst_19318 = cljs.core.chunk_rest.call(null,inst_19313);
var inst_19319 = cljs.core.count.call(null,inst_19317);
var inst_19293 = inst_19318;
var inst_19294 = inst_19317;
var inst_19295 = inst_19319;
var inst_19296 = (0);
var state_19412__$1 = (function (){var statearr_19467 = state_19412;
(statearr_19467[(13)] = inst_19295);

(statearr_19467[(15)] = inst_19296);

(statearr_19467[(16)] = inst_19293);

(statearr_19467[(17)] = inst_19294);

return statearr_19467;
})();
var statearr_19468_19535 = state_19412__$1;
(statearr_19468_19535[(2)] = null);

(statearr_19468_19535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (11))){
var inst_19313 = (state_19412[(7)]);
var inst_19293 = (state_19412[(16)]);
var inst_19313__$1 = cljs.core.seq.call(null,inst_19293);
var state_19412__$1 = (function (){var statearr_19469 = state_19412;
(statearr_19469[(7)] = inst_19313__$1);

return statearr_19469;
})();
if(inst_19313__$1){
var statearr_19470_19536 = state_19412__$1;
(statearr_19470_19536[(1)] = (16));

} else {
var statearr_19471_19537 = state_19412__$1;
(statearr_19471_19537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (9))){
var inst_19341 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19472_19538 = state_19412__$1;
(statearr_19472_19538[(2)] = inst_19341);

(statearr_19472_19538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (5))){
var inst_19291 = cljs.core.deref.call(null,cs);
var inst_19292 = cljs.core.seq.call(null,inst_19291);
var inst_19293 = inst_19292;
var inst_19294 = null;
var inst_19295 = (0);
var inst_19296 = (0);
var state_19412__$1 = (function (){var statearr_19473 = state_19412;
(statearr_19473[(13)] = inst_19295);

(statearr_19473[(15)] = inst_19296);

(statearr_19473[(16)] = inst_19293);

(statearr_19473[(17)] = inst_19294);

return statearr_19473;
})();
var statearr_19474_19539 = state_19412__$1;
(statearr_19474_19539[(2)] = null);

(statearr_19474_19539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (14))){
var state_19412__$1 = state_19412;
var statearr_19475_19540 = state_19412__$1;
(statearr_19475_19540[(2)] = null);

(statearr_19475_19540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (45))){
var inst_19402 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19476_19541 = state_19412__$1;
(statearr_19476_19541[(2)] = inst_19402);

(statearr_19476_19541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (26))){
var inst_19344 = (state_19412[(29)]);
var inst_19398 = (state_19412[(2)]);
var inst_19399 = cljs.core.seq.call(null,inst_19344);
var state_19412__$1 = (function (){var statearr_19477 = state_19412;
(statearr_19477[(31)] = inst_19398);

return statearr_19477;
})();
if(inst_19399){
var statearr_19478_19542 = state_19412__$1;
(statearr_19478_19542[(1)] = (42));

} else {
var statearr_19479_19543 = state_19412__$1;
(statearr_19479_19543[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (16))){
var inst_19313 = (state_19412[(7)]);
var inst_19315 = cljs.core.chunked_seq_QMARK_.call(null,inst_19313);
var state_19412__$1 = state_19412;
if(inst_19315){
var statearr_19480_19544 = state_19412__$1;
(statearr_19480_19544[(1)] = (19));

} else {
var statearr_19481_19545 = state_19412__$1;
(statearr_19481_19545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (38))){
var inst_19391 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19482_19546 = state_19412__$1;
(statearr_19482_19546[(2)] = inst_19391);

(statearr_19482_19546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (30))){
var state_19412__$1 = state_19412;
var statearr_19483_19547 = state_19412__$1;
(statearr_19483_19547[(2)] = null);

(statearr_19483_19547[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (10))){
var inst_19296 = (state_19412[(15)]);
var inst_19294 = (state_19412[(17)]);
var inst_19302 = cljs.core._nth.call(null,inst_19294,inst_19296);
var inst_19303 = cljs.core.nth.call(null,inst_19302,(0),null);
var inst_19304 = cljs.core.nth.call(null,inst_19302,(1),null);
var state_19412__$1 = (function (){var statearr_19484 = state_19412;
(statearr_19484[(26)] = inst_19303);

return statearr_19484;
})();
if(cljs.core.truth_(inst_19304)){
var statearr_19485_19548 = state_19412__$1;
(statearr_19485_19548[(1)] = (13));

} else {
var statearr_19486_19549 = state_19412__$1;
(statearr_19486_19549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (18))){
var inst_19337 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19487_19550 = state_19412__$1;
(statearr_19487_19550[(2)] = inst_19337);

(statearr_19487_19550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (42))){
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19412__$1,(45),dchan);
} else {
if((state_val_19413 === (37))){
var inst_19371 = (state_19412[(25)]);
var inst_19380 = (state_19412[(23)]);
var inst_19284 = (state_19412[(11)]);
var inst_19380__$1 = cljs.core.first.call(null,inst_19371);
var inst_19381 = cljs.core.async.put_BANG_.call(null,inst_19380__$1,inst_19284,done);
var state_19412__$1 = (function (){var statearr_19488 = state_19412;
(statearr_19488[(23)] = inst_19380__$1);

return statearr_19488;
})();
if(cljs.core.truth_(inst_19381)){
var statearr_19489_19551 = state_19412__$1;
(statearr_19489_19551[(1)] = (39));

} else {
var statearr_19490_19552 = state_19412__$1;
(statearr_19490_19552[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (8))){
var inst_19295 = (state_19412[(13)]);
var inst_19296 = (state_19412[(15)]);
var inst_19298 = (inst_19296 < inst_19295);
var inst_19299 = inst_19298;
var state_19412__$1 = state_19412;
if(cljs.core.truth_(inst_19299)){
var statearr_19491_19553 = state_19412__$1;
(statearr_19491_19553[(1)] = (10));

} else {
var statearr_19492_19554 = state_19412__$1;
(statearr_19492_19554[(1)] = (11));

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
});})(c__18193__auto___19500,cs,m,dchan,dctr,done))
;
return ((function (switch__18081__auto__,c__18193__auto___19500,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18082__auto__ = null;
var cljs$core$async$mult_$_state_machine__18082__auto____0 = (function (){
var statearr_19496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19496[(0)] = cljs$core$async$mult_$_state_machine__18082__auto__);

(statearr_19496[(1)] = (1));

return statearr_19496;
});
var cljs$core$async$mult_$_state_machine__18082__auto____1 = (function (state_19412){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_19412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e19497){if((e19497 instanceof Object)){
var ex__18085__auto__ = e19497;
var statearr_19498_19555 = state_19412;
(statearr_19498_19555[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19556 = state_19412;
state_19412 = G__19556;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18082__auto__ = function(state_19412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18082__auto____1.call(this,state_19412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18082__auto____0;
cljs$core$async$mult_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18082__auto____1;
return cljs$core$async$mult_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___19500,cs,m,dchan,dctr,done))
})();
var state__18195__auto__ = (function (){var statearr_19499 = f__18194__auto__.call(null);
(statearr_19499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___19500);

return statearr_19499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___19500,cs,m,dchan,dctr,done))
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
var args19557 = [];
var len__14245__auto___19560 = arguments.length;
var i__14246__auto___19561 = (0);
while(true){
if((i__14246__auto___19561 < len__14245__auto___19560)){
args19557.push((arguments[i__14246__auto___19561]));

var G__19562 = (i__14246__auto___19561 + (1));
i__14246__auto___19561 = G__19562;
continue;
} else {
}
break;
}

var G__19559 = args19557.length;
switch (G__19559) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19557.length)].join('')));

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
var len__14245__auto___19574 = arguments.length;
var i__14246__auto___19575 = (0);
while(true){
if((i__14246__auto___19575 < len__14245__auto___19574)){
args__14252__auto__.push((arguments[i__14246__auto___19575]));

var G__19576 = (i__14246__auto___19575 + (1));
i__14246__auto___19575 = G__19576;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((3) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14253__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19568){
var map__19569 = p__19568;
var map__19569__$1 = ((((!((map__19569 == null)))?((((map__19569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19569):map__19569);
var opts = map__19569__$1;
var statearr_19571_19577 = state;
(statearr_19571_19577[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__19569,map__19569__$1,opts){
return (function (val){
var statearr_19572_19578 = state;
(statearr_19572_19578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19569,map__19569__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19573_19579 = state;
(statearr_19573_19579[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19564){
var G__19565 = cljs.core.first.call(null,seq19564);
var seq19564__$1 = cljs.core.next.call(null,seq19564);
var G__19566 = cljs.core.first.call(null,seq19564__$1);
var seq19564__$2 = cljs.core.next.call(null,seq19564__$1);
var G__19567 = cljs.core.first.call(null,seq19564__$2);
var seq19564__$3 = cljs.core.next.call(null,seq19564__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19565,G__19566,G__19567,seq19564__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19743 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19744){
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
this.meta19744 = meta19744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19745,meta19744__$1){
var self__ = this;
var _19745__$1 = this;
return (new cljs.core.async.t_cljs$core$async19743(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19744__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19745){
var self__ = this;
var _19745__$1 = this;
return self__.meta19744;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19743.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19744","meta19744",-411774498,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19743";

cljs.core.async.t_cljs$core$async19743.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19743");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19743 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19744){
return (new cljs.core.async.t_cljs$core$async19743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19744));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19743(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18193__auto___19906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19843){
var state_val_19844 = (state_19843[(1)]);
if((state_val_19844 === (7))){
var inst_19761 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19845_19907 = state_19843__$1;
(statearr_19845_19907[(2)] = inst_19761);

(statearr_19845_19907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (20))){
var inst_19773 = (state_19843[(7)]);
var state_19843__$1 = state_19843;
var statearr_19846_19908 = state_19843__$1;
(statearr_19846_19908[(2)] = inst_19773);

(statearr_19846_19908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (27))){
var state_19843__$1 = state_19843;
var statearr_19847_19909 = state_19843__$1;
(statearr_19847_19909[(2)] = null);

(statearr_19847_19909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (1))){
var inst_19749 = (state_19843[(8)]);
var inst_19749__$1 = calc_state.call(null);
var inst_19751 = (inst_19749__$1 == null);
var inst_19752 = cljs.core.not.call(null,inst_19751);
var state_19843__$1 = (function (){var statearr_19848 = state_19843;
(statearr_19848[(8)] = inst_19749__$1);

return statearr_19848;
})();
if(inst_19752){
var statearr_19849_19910 = state_19843__$1;
(statearr_19849_19910[(1)] = (2));

} else {
var statearr_19850_19911 = state_19843__$1;
(statearr_19850_19911[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (24))){
var inst_19796 = (state_19843[(9)]);
var inst_19803 = (state_19843[(10)]);
var inst_19817 = (state_19843[(11)]);
var inst_19817__$1 = inst_19796.call(null,inst_19803);
var state_19843__$1 = (function (){var statearr_19851 = state_19843;
(statearr_19851[(11)] = inst_19817__$1);

return statearr_19851;
})();
if(cljs.core.truth_(inst_19817__$1)){
var statearr_19852_19912 = state_19843__$1;
(statearr_19852_19912[(1)] = (29));

} else {
var statearr_19853_19913 = state_19843__$1;
(statearr_19853_19913[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (4))){
var inst_19764 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19764)){
var statearr_19854_19914 = state_19843__$1;
(statearr_19854_19914[(1)] = (8));

} else {
var statearr_19855_19915 = state_19843__$1;
(statearr_19855_19915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (15))){
var inst_19790 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19790)){
var statearr_19856_19916 = state_19843__$1;
(statearr_19856_19916[(1)] = (19));

} else {
var statearr_19857_19917 = state_19843__$1;
(statearr_19857_19917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (21))){
var inst_19795 = (state_19843[(12)]);
var inst_19795__$1 = (state_19843[(2)]);
var inst_19796 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19797 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19798 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19843__$1 = (function (){var statearr_19858 = state_19843;
(statearr_19858[(9)] = inst_19796);

(statearr_19858[(12)] = inst_19795__$1);

(statearr_19858[(13)] = inst_19797);

return statearr_19858;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19843__$1,(22),inst_19798);
} else {
if((state_val_19844 === (31))){
var inst_19825 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19825)){
var statearr_19859_19918 = state_19843__$1;
(statearr_19859_19918[(1)] = (32));

} else {
var statearr_19860_19919 = state_19843__$1;
(statearr_19860_19919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (32))){
var inst_19802 = (state_19843[(14)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19843__$1,(35),out,inst_19802);
} else {
if((state_val_19844 === (33))){
var inst_19795 = (state_19843[(12)]);
var inst_19773 = inst_19795;
var state_19843__$1 = (function (){var statearr_19861 = state_19843;
(statearr_19861[(7)] = inst_19773);

return statearr_19861;
})();
var statearr_19862_19920 = state_19843__$1;
(statearr_19862_19920[(2)] = null);

(statearr_19862_19920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (13))){
var inst_19773 = (state_19843[(7)]);
var inst_19780 = inst_19773.cljs$lang$protocol_mask$partition0$;
var inst_19781 = (inst_19780 & (64));
var inst_19782 = inst_19773.cljs$core$ISeq$;
var inst_19783 = (inst_19781) || (inst_19782);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19783)){
var statearr_19863_19921 = state_19843__$1;
(statearr_19863_19921[(1)] = (16));

} else {
var statearr_19864_19922 = state_19843__$1;
(statearr_19864_19922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (22))){
var inst_19802 = (state_19843[(14)]);
var inst_19803 = (state_19843[(10)]);
var inst_19801 = (state_19843[(2)]);
var inst_19802__$1 = cljs.core.nth.call(null,inst_19801,(0),null);
var inst_19803__$1 = cljs.core.nth.call(null,inst_19801,(1),null);
var inst_19804 = (inst_19802__$1 == null);
var inst_19805 = cljs.core._EQ_.call(null,inst_19803__$1,change);
var inst_19806 = (inst_19804) || (inst_19805);
var state_19843__$1 = (function (){var statearr_19865 = state_19843;
(statearr_19865[(14)] = inst_19802__$1);

(statearr_19865[(10)] = inst_19803__$1);

return statearr_19865;
})();
if(cljs.core.truth_(inst_19806)){
var statearr_19866_19923 = state_19843__$1;
(statearr_19866_19923[(1)] = (23));

} else {
var statearr_19867_19924 = state_19843__$1;
(statearr_19867_19924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (36))){
var inst_19795 = (state_19843[(12)]);
var inst_19773 = inst_19795;
var state_19843__$1 = (function (){var statearr_19868 = state_19843;
(statearr_19868[(7)] = inst_19773);

return statearr_19868;
})();
var statearr_19869_19925 = state_19843__$1;
(statearr_19869_19925[(2)] = null);

(statearr_19869_19925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (29))){
var inst_19817 = (state_19843[(11)]);
var state_19843__$1 = state_19843;
var statearr_19870_19926 = state_19843__$1;
(statearr_19870_19926[(2)] = inst_19817);

(statearr_19870_19926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (6))){
var state_19843__$1 = state_19843;
var statearr_19871_19927 = state_19843__$1;
(statearr_19871_19927[(2)] = false);

(statearr_19871_19927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (28))){
var inst_19813 = (state_19843[(2)]);
var inst_19814 = calc_state.call(null);
var inst_19773 = inst_19814;
var state_19843__$1 = (function (){var statearr_19872 = state_19843;
(statearr_19872[(7)] = inst_19773);

(statearr_19872[(15)] = inst_19813);

return statearr_19872;
})();
var statearr_19873_19928 = state_19843__$1;
(statearr_19873_19928[(2)] = null);

(statearr_19873_19928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (25))){
var inst_19839 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19874_19929 = state_19843__$1;
(statearr_19874_19929[(2)] = inst_19839);

(statearr_19874_19929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (34))){
var inst_19837 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19875_19930 = state_19843__$1;
(statearr_19875_19930[(2)] = inst_19837);

(statearr_19875_19930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (17))){
var state_19843__$1 = state_19843;
var statearr_19876_19931 = state_19843__$1;
(statearr_19876_19931[(2)] = false);

(statearr_19876_19931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (3))){
var state_19843__$1 = state_19843;
var statearr_19877_19932 = state_19843__$1;
(statearr_19877_19932[(2)] = false);

(statearr_19877_19932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (12))){
var inst_19841 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19843__$1,inst_19841);
} else {
if((state_val_19844 === (2))){
var inst_19749 = (state_19843[(8)]);
var inst_19754 = inst_19749.cljs$lang$protocol_mask$partition0$;
var inst_19755 = (inst_19754 & (64));
var inst_19756 = inst_19749.cljs$core$ISeq$;
var inst_19757 = (inst_19755) || (inst_19756);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19757)){
var statearr_19878_19933 = state_19843__$1;
(statearr_19878_19933[(1)] = (5));

} else {
var statearr_19879_19934 = state_19843__$1;
(statearr_19879_19934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (23))){
var inst_19802 = (state_19843[(14)]);
var inst_19808 = (inst_19802 == null);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19808)){
var statearr_19880_19935 = state_19843__$1;
(statearr_19880_19935[(1)] = (26));

} else {
var statearr_19881_19936 = state_19843__$1;
(statearr_19881_19936[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (35))){
var inst_19828 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19828)){
var statearr_19882_19937 = state_19843__$1;
(statearr_19882_19937[(1)] = (36));

} else {
var statearr_19883_19938 = state_19843__$1;
(statearr_19883_19938[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (19))){
var inst_19773 = (state_19843[(7)]);
var inst_19792 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19773);
var state_19843__$1 = state_19843;
var statearr_19884_19939 = state_19843__$1;
(statearr_19884_19939[(2)] = inst_19792);

(statearr_19884_19939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (11))){
var inst_19773 = (state_19843[(7)]);
var inst_19777 = (inst_19773 == null);
var inst_19778 = cljs.core.not.call(null,inst_19777);
var state_19843__$1 = state_19843;
if(inst_19778){
var statearr_19885_19940 = state_19843__$1;
(statearr_19885_19940[(1)] = (13));

} else {
var statearr_19886_19941 = state_19843__$1;
(statearr_19886_19941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (9))){
var inst_19749 = (state_19843[(8)]);
var state_19843__$1 = state_19843;
var statearr_19887_19942 = state_19843__$1;
(statearr_19887_19942[(2)] = inst_19749);

(statearr_19887_19942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (5))){
var state_19843__$1 = state_19843;
var statearr_19888_19943 = state_19843__$1;
(statearr_19888_19943[(2)] = true);

(statearr_19888_19943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (14))){
var state_19843__$1 = state_19843;
var statearr_19889_19944 = state_19843__$1;
(statearr_19889_19944[(2)] = false);

(statearr_19889_19944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (26))){
var inst_19803 = (state_19843[(10)]);
var inst_19810 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19803);
var state_19843__$1 = state_19843;
var statearr_19890_19945 = state_19843__$1;
(statearr_19890_19945[(2)] = inst_19810);

(statearr_19890_19945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (16))){
var state_19843__$1 = state_19843;
var statearr_19891_19946 = state_19843__$1;
(statearr_19891_19946[(2)] = true);

(statearr_19891_19946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (38))){
var inst_19833 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19892_19947 = state_19843__$1;
(statearr_19892_19947[(2)] = inst_19833);

(statearr_19892_19947[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (30))){
var inst_19796 = (state_19843[(9)]);
var inst_19803 = (state_19843[(10)]);
var inst_19797 = (state_19843[(13)]);
var inst_19820 = cljs.core.empty_QMARK_.call(null,inst_19796);
var inst_19821 = inst_19797.call(null,inst_19803);
var inst_19822 = cljs.core.not.call(null,inst_19821);
var inst_19823 = (inst_19820) && (inst_19822);
var state_19843__$1 = state_19843;
var statearr_19893_19948 = state_19843__$1;
(statearr_19893_19948[(2)] = inst_19823);

(statearr_19893_19948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (10))){
var inst_19749 = (state_19843[(8)]);
var inst_19769 = (state_19843[(2)]);
var inst_19770 = cljs.core.get.call(null,inst_19769,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19771 = cljs.core.get.call(null,inst_19769,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19772 = cljs.core.get.call(null,inst_19769,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19773 = inst_19749;
var state_19843__$1 = (function (){var statearr_19894 = state_19843;
(statearr_19894[(16)] = inst_19771);

(statearr_19894[(17)] = inst_19772);

(statearr_19894[(7)] = inst_19773);

(statearr_19894[(18)] = inst_19770);

return statearr_19894;
})();
var statearr_19895_19949 = state_19843__$1;
(statearr_19895_19949[(2)] = null);

(statearr_19895_19949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (18))){
var inst_19787 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19896_19950 = state_19843__$1;
(statearr_19896_19950[(2)] = inst_19787);

(statearr_19896_19950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (37))){
var state_19843__$1 = state_19843;
var statearr_19897_19951 = state_19843__$1;
(statearr_19897_19951[(2)] = null);

(statearr_19897_19951[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (8))){
var inst_19749 = (state_19843[(8)]);
var inst_19766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19749);
var state_19843__$1 = state_19843;
var statearr_19898_19952 = state_19843__$1;
(statearr_19898_19952[(2)] = inst_19766);

(statearr_19898_19952[(1)] = (10));


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
});})(c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18081__auto__,c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18082__auto__ = null;
var cljs$core$async$mix_$_state_machine__18082__auto____0 = (function (){
var statearr_19902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19902[(0)] = cljs$core$async$mix_$_state_machine__18082__auto__);

(statearr_19902[(1)] = (1));

return statearr_19902;
});
var cljs$core$async$mix_$_state_machine__18082__auto____1 = (function (state_19843){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_19843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e19903){if((e19903 instanceof Object)){
var ex__18085__auto__ = e19903;
var statearr_19904_19953 = state_19843;
(statearr_19904_19953[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19954 = state_19843;
state_19843 = G__19954;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18082__auto__ = function(state_19843){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18082__auto____1.call(this,state_19843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18082__auto____0;
cljs$core$async$mix_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18082__auto____1;
return cljs$core$async$mix_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18195__auto__ = (function (){var statearr_19905 = f__18194__auto__.call(null);
(statearr_19905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___19906);

return statearr_19905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19955 = [];
var len__14245__auto___19958 = arguments.length;
var i__14246__auto___19959 = (0);
while(true){
if((i__14246__auto___19959 < len__14245__auto___19958)){
args19955.push((arguments[i__14246__auto___19959]));

var G__19960 = (i__14246__auto___19959 + (1));
i__14246__auto___19959 = G__19960;
continue;
} else {
}
break;
}

var G__19957 = args19955.length;
switch (G__19957) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19955.length)].join('')));

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
var args19963 = [];
var len__14245__auto___20088 = arguments.length;
var i__14246__auto___20089 = (0);
while(true){
if((i__14246__auto___20089 < len__14245__auto___20088)){
args19963.push((arguments[i__14246__auto___20089]));

var G__20090 = (i__14246__auto___20089 + (1));
i__14246__auto___20089 = G__20090;
continue;
} else {
}
break;
}

var G__19965 = args19963.length;
switch (G__19965) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19963.length)].join('')));

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
return (function (p1__19962_SHARP_){
if(cljs.core.truth_(p1__19962_SHARP_.call(null,topic))){
return p1__19962_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19962_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13187__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19966 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19967){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19967 = meta19967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19968,meta19967__$1){
var self__ = this;
var _19968__$1 = this;
return (new cljs.core.async.t_cljs$core$async19966(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19967__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19968){
var self__ = this;
var _19968__$1 = this;
return self__.meta19967;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19967","meta19967",-245962728,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19966";

cljs.core.async.t_cljs$core$async19966.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19966");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19966 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19966(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19967){
return (new cljs.core.async.t_cljs$core$async19966(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19967));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19966(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18193__auto___20092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20092,mults,ensure_mult,p){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20092,mults,ensure_mult,p){
return (function (state_20040){
var state_val_20041 = (state_20040[(1)]);
if((state_val_20041 === (7))){
var inst_20036 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20042_20093 = state_20040__$1;
(statearr_20042_20093[(2)] = inst_20036);

(statearr_20042_20093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (20))){
var state_20040__$1 = state_20040;
var statearr_20043_20094 = state_20040__$1;
(statearr_20043_20094[(2)] = null);

(statearr_20043_20094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (1))){
var state_20040__$1 = state_20040;
var statearr_20044_20095 = state_20040__$1;
(statearr_20044_20095[(2)] = null);

(statearr_20044_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (24))){
var inst_20019 = (state_20040[(7)]);
var inst_20028 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20019);
var state_20040__$1 = state_20040;
var statearr_20045_20096 = state_20040__$1;
(statearr_20045_20096[(2)] = inst_20028);

(statearr_20045_20096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (4))){
var inst_19971 = (state_20040[(8)]);
var inst_19971__$1 = (state_20040[(2)]);
var inst_19972 = (inst_19971__$1 == null);
var state_20040__$1 = (function (){var statearr_20046 = state_20040;
(statearr_20046[(8)] = inst_19971__$1);

return statearr_20046;
})();
if(cljs.core.truth_(inst_19972)){
var statearr_20047_20097 = state_20040__$1;
(statearr_20047_20097[(1)] = (5));

} else {
var statearr_20048_20098 = state_20040__$1;
(statearr_20048_20098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (15))){
var inst_20013 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20049_20099 = state_20040__$1;
(statearr_20049_20099[(2)] = inst_20013);

(statearr_20049_20099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (21))){
var inst_20033 = (state_20040[(2)]);
var state_20040__$1 = (function (){var statearr_20050 = state_20040;
(statearr_20050[(9)] = inst_20033);

return statearr_20050;
})();
var statearr_20051_20100 = state_20040__$1;
(statearr_20051_20100[(2)] = null);

(statearr_20051_20100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (13))){
var inst_19995 = (state_20040[(10)]);
var inst_19997 = cljs.core.chunked_seq_QMARK_.call(null,inst_19995);
var state_20040__$1 = state_20040;
if(inst_19997){
var statearr_20052_20101 = state_20040__$1;
(statearr_20052_20101[(1)] = (16));

} else {
var statearr_20053_20102 = state_20040__$1;
(statearr_20053_20102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (22))){
var inst_20025 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
if(cljs.core.truth_(inst_20025)){
var statearr_20054_20103 = state_20040__$1;
(statearr_20054_20103[(1)] = (23));

} else {
var statearr_20055_20104 = state_20040__$1;
(statearr_20055_20104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (6))){
var inst_19971 = (state_20040[(8)]);
var inst_20021 = (state_20040[(11)]);
var inst_20019 = (state_20040[(7)]);
var inst_20019__$1 = topic_fn.call(null,inst_19971);
var inst_20020 = cljs.core.deref.call(null,mults);
var inst_20021__$1 = cljs.core.get.call(null,inst_20020,inst_20019__$1);
var state_20040__$1 = (function (){var statearr_20056 = state_20040;
(statearr_20056[(11)] = inst_20021__$1);

(statearr_20056[(7)] = inst_20019__$1);

return statearr_20056;
})();
if(cljs.core.truth_(inst_20021__$1)){
var statearr_20057_20105 = state_20040__$1;
(statearr_20057_20105[(1)] = (19));

} else {
var statearr_20058_20106 = state_20040__$1;
(statearr_20058_20106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (25))){
var inst_20030 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20059_20107 = state_20040__$1;
(statearr_20059_20107[(2)] = inst_20030);

(statearr_20059_20107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (17))){
var inst_19995 = (state_20040[(10)]);
var inst_20004 = cljs.core.first.call(null,inst_19995);
var inst_20005 = cljs.core.async.muxch_STAR_.call(null,inst_20004);
var inst_20006 = cljs.core.async.close_BANG_.call(null,inst_20005);
var inst_20007 = cljs.core.next.call(null,inst_19995);
var inst_19981 = inst_20007;
var inst_19982 = null;
var inst_19983 = (0);
var inst_19984 = (0);
var state_20040__$1 = (function (){var statearr_20060 = state_20040;
(statearr_20060[(12)] = inst_19982);

(statearr_20060[(13)] = inst_20006);

(statearr_20060[(14)] = inst_19984);

(statearr_20060[(15)] = inst_19983);

(statearr_20060[(16)] = inst_19981);

return statearr_20060;
})();
var statearr_20061_20108 = state_20040__$1;
(statearr_20061_20108[(2)] = null);

(statearr_20061_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (3))){
var inst_20038 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20040__$1,inst_20038);
} else {
if((state_val_20041 === (12))){
var inst_20015 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20062_20109 = state_20040__$1;
(statearr_20062_20109[(2)] = inst_20015);

(statearr_20062_20109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (2))){
var state_20040__$1 = state_20040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20040__$1,(4),ch);
} else {
if((state_val_20041 === (23))){
var state_20040__$1 = state_20040;
var statearr_20063_20110 = state_20040__$1;
(statearr_20063_20110[(2)] = null);

(statearr_20063_20110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (19))){
var inst_19971 = (state_20040[(8)]);
var inst_20021 = (state_20040[(11)]);
var inst_20023 = cljs.core.async.muxch_STAR_.call(null,inst_20021);
var state_20040__$1 = state_20040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20040__$1,(22),inst_20023,inst_19971);
} else {
if((state_val_20041 === (11))){
var inst_19995 = (state_20040[(10)]);
var inst_19981 = (state_20040[(16)]);
var inst_19995__$1 = cljs.core.seq.call(null,inst_19981);
var state_20040__$1 = (function (){var statearr_20064 = state_20040;
(statearr_20064[(10)] = inst_19995__$1);

return statearr_20064;
})();
if(inst_19995__$1){
var statearr_20065_20111 = state_20040__$1;
(statearr_20065_20111[(1)] = (13));

} else {
var statearr_20066_20112 = state_20040__$1;
(statearr_20066_20112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (9))){
var inst_20017 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20067_20113 = state_20040__$1;
(statearr_20067_20113[(2)] = inst_20017);

(statearr_20067_20113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (5))){
var inst_19978 = cljs.core.deref.call(null,mults);
var inst_19979 = cljs.core.vals.call(null,inst_19978);
var inst_19980 = cljs.core.seq.call(null,inst_19979);
var inst_19981 = inst_19980;
var inst_19982 = null;
var inst_19983 = (0);
var inst_19984 = (0);
var state_20040__$1 = (function (){var statearr_20068 = state_20040;
(statearr_20068[(12)] = inst_19982);

(statearr_20068[(14)] = inst_19984);

(statearr_20068[(15)] = inst_19983);

(statearr_20068[(16)] = inst_19981);

return statearr_20068;
})();
var statearr_20069_20114 = state_20040__$1;
(statearr_20069_20114[(2)] = null);

(statearr_20069_20114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (14))){
var state_20040__$1 = state_20040;
var statearr_20073_20115 = state_20040__$1;
(statearr_20073_20115[(2)] = null);

(statearr_20073_20115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (16))){
var inst_19995 = (state_20040[(10)]);
var inst_19999 = cljs.core.chunk_first.call(null,inst_19995);
var inst_20000 = cljs.core.chunk_rest.call(null,inst_19995);
var inst_20001 = cljs.core.count.call(null,inst_19999);
var inst_19981 = inst_20000;
var inst_19982 = inst_19999;
var inst_19983 = inst_20001;
var inst_19984 = (0);
var state_20040__$1 = (function (){var statearr_20074 = state_20040;
(statearr_20074[(12)] = inst_19982);

(statearr_20074[(14)] = inst_19984);

(statearr_20074[(15)] = inst_19983);

(statearr_20074[(16)] = inst_19981);

return statearr_20074;
})();
var statearr_20075_20116 = state_20040__$1;
(statearr_20075_20116[(2)] = null);

(statearr_20075_20116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (10))){
var inst_19982 = (state_20040[(12)]);
var inst_19984 = (state_20040[(14)]);
var inst_19983 = (state_20040[(15)]);
var inst_19981 = (state_20040[(16)]);
var inst_19989 = cljs.core._nth.call(null,inst_19982,inst_19984);
var inst_19990 = cljs.core.async.muxch_STAR_.call(null,inst_19989);
var inst_19991 = cljs.core.async.close_BANG_.call(null,inst_19990);
var inst_19992 = (inst_19984 + (1));
var tmp20070 = inst_19982;
var tmp20071 = inst_19983;
var tmp20072 = inst_19981;
var inst_19981__$1 = tmp20072;
var inst_19982__$1 = tmp20070;
var inst_19983__$1 = tmp20071;
var inst_19984__$1 = inst_19992;
var state_20040__$1 = (function (){var statearr_20076 = state_20040;
(statearr_20076[(17)] = inst_19991);

(statearr_20076[(12)] = inst_19982__$1);

(statearr_20076[(14)] = inst_19984__$1);

(statearr_20076[(15)] = inst_19983__$1);

(statearr_20076[(16)] = inst_19981__$1);

return statearr_20076;
})();
var statearr_20077_20117 = state_20040__$1;
(statearr_20077_20117[(2)] = null);

(statearr_20077_20117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (18))){
var inst_20010 = (state_20040[(2)]);
var state_20040__$1 = state_20040;
var statearr_20078_20118 = state_20040__$1;
(statearr_20078_20118[(2)] = inst_20010);

(statearr_20078_20118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20041 === (8))){
var inst_19984 = (state_20040[(14)]);
var inst_19983 = (state_20040[(15)]);
var inst_19986 = (inst_19984 < inst_19983);
var inst_19987 = inst_19986;
var state_20040__$1 = state_20040;
if(cljs.core.truth_(inst_19987)){
var statearr_20079_20119 = state_20040__$1;
(statearr_20079_20119[(1)] = (10));

} else {
var statearr_20080_20120 = state_20040__$1;
(statearr_20080_20120[(1)] = (11));

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
});})(c__18193__auto___20092,mults,ensure_mult,p))
;
return ((function (switch__18081__auto__,c__18193__auto___20092,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20084[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20084[(1)] = (1));

return statearr_20084;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20040){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20085){if((e20085 instanceof Object)){
var ex__18085__auto__ = e20085;
var statearr_20086_20121 = state_20040;
(statearr_20086_20121[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20122 = state_20040;
state_20040 = G__20122;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20092,mults,ensure_mult,p))
})();
var state__18195__auto__ = (function (){var statearr_20087 = f__18194__auto__.call(null);
(statearr_20087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20092);

return statearr_20087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20092,mults,ensure_mult,p))
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
var args20123 = [];
var len__14245__auto___20126 = arguments.length;
var i__14246__auto___20127 = (0);
while(true){
if((i__14246__auto___20127 < len__14245__auto___20126)){
args20123.push((arguments[i__14246__auto___20127]));

var G__20128 = (i__14246__auto___20127 + (1));
i__14246__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var G__20125 = args20123.length;
switch (G__20125) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20123.length)].join('')));

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
var args20130 = [];
var len__14245__auto___20133 = arguments.length;
var i__14246__auto___20134 = (0);
while(true){
if((i__14246__auto___20134 < len__14245__auto___20133)){
args20130.push((arguments[i__14246__auto___20134]));

var G__20135 = (i__14246__auto___20134 + (1));
i__14246__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var G__20132 = args20130.length;
switch (G__20132) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20130.length)].join('')));

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
var args20137 = [];
var len__14245__auto___20208 = arguments.length;
var i__14246__auto___20209 = (0);
while(true){
if((i__14246__auto___20209 < len__14245__auto___20208)){
args20137.push((arguments[i__14246__auto___20209]));

var G__20210 = (i__14246__auto___20209 + (1));
i__14246__auto___20209 = G__20210;
continue;
} else {
}
break;
}

var G__20139 = args20137.length;
switch (G__20139) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20137.length)].join('')));

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
var c__18193__auto___20212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20178){
var state_val_20179 = (state_20178[(1)]);
if((state_val_20179 === (7))){
var state_20178__$1 = state_20178;
var statearr_20180_20213 = state_20178__$1;
(statearr_20180_20213[(2)] = null);

(statearr_20180_20213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (1))){
var state_20178__$1 = state_20178;
var statearr_20181_20214 = state_20178__$1;
(statearr_20181_20214[(2)] = null);

(statearr_20181_20214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (4))){
var inst_20142 = (state_20178[(7)]);
var inst_20144 = (inst_20142 < cnt);
var state_20178__$1 = state_20178;
if(cljs.core.truth_(inst_20144)){
var statearr_20182_20215 = state_20178__$1;
(statearr_20182_20215[(1)] = (6));

} else {
var statearr_20183_20216 = state_20178__$1;
(statearr_20183_20216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (15))){
var inst_20174 = (state_20178[(2)]);
var state_20178__$1 = state_20178;
var statearr_20184_20217 = state_20178__$1;
(statearr_20184_20217[(2)] = inst_20174);

(statearr_20184_20217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (13))){
var inst_20167 = cljs.core.async.close_BANG_.call(null,out);
var state_20178__$1 = state_20178;
var statearr_20185_20218 = state_20178__$1;
(statearr_20185_20218[(2)] = inst_20167);

(statearr_20185_20218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (6))){
var state_20178__$1 = state_20178;
var statearr_20186_20219 = state_20178__$1;
(statearr_20186_20219[(2)] = null);

(statearr_20186_20219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (3))){
var inst_20176 = (state_20178[(2)]);
var state_20178__$1 = state_20178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20178__$1,inst_20176);
} else {
if((state_val_20179 === (12))){
var inst_20164 = (state_20178[(8)]);
var inst_20164__$1 = (state_20178[(2)]);
var inst_20165 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20164__$1);
var state_20178__$1 = (function (){var statearr_20187 = state_20178;
(statearr_20187[(8)] = inst_20164__$1);

return statearr_20187;
})();
if(cljs.core.truth_(inst_20165)){
var statearr_20188_20220 = state_20178__$1;
(statearr_20188_20220[(1)] = (13));

} else {
var statearr_20189_20221 = state_20178__$1;
(statearr_20189_20221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (2))){
var inst_20141 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20142 = (0);
var state_20178__$1 = (function (){var statearr_20190 = state_20178;
(statearr_20190[(9)] = inst_20141);

(statearr_20190[(7)] = inst_20142);

return statearr_20190;
})();
var statearr_20191_20222 = state_20178__$1;
(statearr_20191_20222[(2)] = null);

(statearr_20191_20222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (11))){
var inst_20142 = (state_20178[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20178,(10),Object,null,(9));
var inst_20151 = chs__$1.call(null,inst_20142);
var inst_20152 = done.call(null,inst_20142);
var inst_20153 = cljs.core.async.take_BANG_.call(null,inst_20151,inst_20152);
var state_20178__$1 = state_20178;
var statearr_20192_20223 = state_20178__$1;
(statearr_20192_20223[(2)] = inst_20153);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (9))){
var inst_20142 = (state_20178[(7)]);
var inst_20155 = (state_20178[(2)]);
var inst_20156 = (inst_20142 + (1));
var inst_20142__$1 = inst_20156;
var state_20178__$1 = (function (){var statearr_20193 = state_20178;
(statearr_20193[(10)] = inst_20155);

(statearr_20193[(7)] = inst_20142__$1);

return statearr_20193;
})();
var statearr_20194_20224 = state_20178__$1;
(statearr_20194_20224[(2)] = null);

(statearr_20194_20224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (5))){
var inst_20162 = (state_20178[(2)]);
var state_20178__$1 = (function (){var statearr_20195 = state_20178;
(statearr_20195[(11)] = inst_20162);

return statearr_20195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20178__$1,(12),dchan);
} else {
if((state_val_20179 === (14))){
var inst_20164 = (state_20178[(8)]);
var inst_20169 = cljs.core.apply.call(null,f,inst_20164);
var state_20178__$1 = state_20178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20178__$1,(16),out,inst_20169);
} else {
if((state_val_20179 === (16))){
var inst_20171 = (state_20178[(2)]);
var state_20178__$1 = (function (){var statearr_20196 = state_20178;
(statearr_20196[(12)] = inst_20171);

return statearr_20196;
})();
var statearr_20197_20225 = state_20178__$1;
(statearr_20197_20225[(2)] = null);

(statearr_20197_20225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (10))){
var inst_20146 = (state_20178[(2)]);
var inst_20147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20178__$1 = (function (){var statearr_20198 = state_20178;
(statearr_20198[(13)] = inst_20146);

return statearr_20198;
})();
var statearr_20199_20226 = state_20178__$1;
(statearr_20199_20226[(2)] = inst_20147);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20179 === (8))){
var inst_20160 = (state_20178[(2)]);
var state_20178__$1 = state_20178;
var statearr_20200_20227 = state_20178__$1;
(statearr_20200_20227[(2)] = inst_20160);

(statearr_20200_20227[(1)] = (5));


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
});})(c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18081__auto__,c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20204[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20204[(1)] = (1));

return statearr_20204;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20178){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20205){if((e20205 instanceof Object)){
var ex__18085__auto__ = e20205;
var statearr_20206_20228 = state_20178;
(statearr_20206_20228[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20229 = state_20178;
state_20178 = G__20229;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18195__auto__ = (function (){var statearr_20207 = f__18194__auto__.call(null);
(statearr_20207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20212);

return statearr_20207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20212,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20231 = [];
var len__14245__auto___20287 = arguments.length;
var i__14246__auto___20288 = (0);
while(true){
if((i__14246__auto___20288 < len__14245__auto___20287)){
args20231.push((arguments[i__14246__auto___20288]));

var G__20289 = (i__14246__auto___20288 + (1));
i__14246__auto___20288 = G__20289;
continue;
} else {
}
break;
}

var G__20233 = args20231.length;
switch (G__20233) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20231.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20291,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20291,out){
return (function (state_20263){
var state_val_20264 = (state_20263[(1)]);
if((state_val_20264 === (7))){
var inst_20242 = (state_20263[(7)]);
var inst_20243 = (state_20263[(8)]);
var inst_20242__$1 = (state_20263[(2)]);
var inst_20243__$1 = cljs.core.nth.call(null,inst_20242__$1,(0),null);
var inst_20244 = cljs.core.nth.call(null,inst_20242__$1,(1),null);
var inst_20245 = (inst_20243__$1 == null);
var state_20263__$1 = (function (){var statearr_20265 = state_20263;
(statearr_20265[(9)] = inst_20244);

(statearr_20265[(7)] = inst_20242__$1);

(statearr_20265[(8)] = inst_20243__$1);

return statearr_20265;
})();
if(cljs.core.truth_(inst_20245)){
var statearr_20266_20292 = state_20263__$1;
(statearr_20266_20292[(1)] = (8));

} else {
var statearr_20267_20293 = state_20263__$1;
(statearr_20267_20293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (1))){
var inst_20234 = cljs.core.vec.call(null,chs);
var inst_20235 = inst_20234;
var state_20263__$1 = (function (){var statearr_20268 = state_20263;
(statearr_20268[(10)] = inst_20235);

return statearr_20268;
})();
var statearr_20269_20294 = state_20263__$1;
(statearr_20269_20294[(2)] = null);

(statearr_20269_20294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (4))){
var inst_20235 = (state_20263[(10)]);
var state_20263__$1 = state_20263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20263__$1,(7),inst_20235);
} else {
if((state_val_20264 === (6))){
var inst_20259 = (state_20263[(2)]);
var state_20263__$1 = state_20263;
var statearr_20270_20295 = state_20263__$1;
(statearr_20270_20295[(2)] = inst_20259);

(statearr_20270_20295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (3))){
var inst_20261 = (state_20263[(2)]);
var state_20263__$1 = state_20263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20263__$1,inst_20261);
} else {
if((state_val_20264 === (2))){
var inst_20235 = (state_20263[(10)]);
var inst_20237 = cljs.core.count.call(null,inst_20235);
var inst_20238 = (inst_20237 > (0));
var state_20263__$1 = state_20263;
if(cljs.core.truth_(inst_20238)){
var statearr_20272_20296 = state_20263__$1;
(statearr_20272_20296[(1)] = (4));

} else {
var statearr_20273_20297 = state_20263__$1;
(statearr_20273_20297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (11))){
var inst_20235 = (state_20263[(10)]);
var inst_20252 = (state_20263[(2)]);
var tmp20271 = inst_20235;
var inst_20235__$1 = tmp20271;
var state_20263__$1 = (function (){var statearr_20274 = state_20263;
(statearr_20274[(11)] = inst_20252);

(statearr_20274[(10)] = inst_20235__$1);

return statearr_20274;
})();
var statearr_20275_20298 = state_20263__$1;
(statearr_20275_20298[(2)] = null);

(statearr_20275_20298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (9))){
var inst_20243 = (state_20263[(8)]);
var state_20263__$1 = state_20263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20263__$1,(11),out,inst_20243);
} else {
if((state_val_20264 === (5))){
var inst_20257 = cljs.core.async.close_BANG_.call(null,out);
var state_20263__$1 = state_20263;
var statearr_20276_20299 = state_20263__$1;
(statearr_20276_20299[(2)] = inst_20257);

(statearr_20276_20299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (10))){
var inst_20255 = (state_20263[(2)]);
var state_20263__$1 = state_20263;
var statearr_20277_20300 = state_20263__$1;
(statearr_20277_20300[(2)] = inst_20255);

(statearr_20277_20300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (8))){
var inst_20244 = (state_20263[(9)]);
var inst_20235 = (state_20263[(10)]);
var inst_20242 = (state_20263[(7)]);
var inst_20243 = (state_20263[(8)]);
var inst_20247 = (function (){var cs = inst_20235;
var vec__20240 = inst_20242;
var v = inst_20243;
var c = inst_20244;
return ((function (cs,vec__20240,v,c,inst_20244,inst_20235,inst_20242,inst_20243,state_val_20264,c__18193__auto___20291,out){
return (function (p1__20230_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20230_SHARP_);
});
;})(cs,vec__20240,v,c,inst_20244,inst_20235,inst_20242,inst_20243,state_val_20264,c__18193__auto___20291,out))
})();
var inst_20248 = cljs.core.filterv.call(null,inst_20247,inst_20235);
var inst_20235__$1 = inst_20248;
var state_20263__$1 = (function (){var statearr_20278 = state_20263;
(statearr_20278[(10)] = inst_20235__$1);

return statearr_20278;
})();
var statearr_20279_20301 = state_20263__$1;
(statearr_20279_20301[(2)] = null);

(statearr_20279_20301[(1)] = (2));


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
});})(c__18193__auto___20291,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20291,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20283[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20283[(1)] = (1));

return statearr_20283;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20263){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20284){if((e20284 instanceof Object)){
var ex__18085__auto__ = e20284;
var statearr_20285_20302 = state_20263;
(statearr_20285_20302[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20303 = state_20263;
state_20263 = G__20303;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20291,out))
})();
var state__18195__auto__ = (function (){var statearr_20286 = f__18194__auto__.call(null);
(statearr_20286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20291);

return statearr_20286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20291,out))
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
var args20304 = [];
var len__14245__auto___20353 = arguments.length;
var i__14246__auto___20354 = (0);
while(true){
if((i__14246__auto___20354 < len__14245__auto___20353)){
args20304.push((arguments[i__14246__auto___20354]));

var G__20355 = (i__14246__auto___20354 + (1));
i__14246__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var G__20306 = args20304.length;
switch (G__20306) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20304.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20357,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20357,out){
return (function (state_20330){
var state_val_20331 = (state_20330[(1)]);
if((state_val_20331 === (7))){
var inst_20312 = (state_20330[(7)]);
var inst_20312__$1 = (state_20330[(2)]);
var inst_20313 = (inst_20312__$1 == null);
var inst_20314 = cljs.core.not.call(null,inst_20313);
var state_20330__$1 = (function (){var statearr_20332 = state_20330;
(statearr_20332[(7)] = inst_20312__$1);

return statearr_20332;
})();
if(inst_20314){
var statearr_20333_20358 = state_20330__$1;
(statearr_20333_20358[(1)] = (8));

} else {
var statearr_20334_20359 = state_20330__$1;
(statearr_20334_20359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (1))){
var inst_20307 = (0);
var state_20330__$1 = (function (){var statearr_20335 = state_20330;
(statearr_20335[(8)] = inst_20307);

return statearr_20335;
})();
var statearr_20336_20360 = state_20330__$1;
(statearr_20336_20360[(2)] = null);

(statearr_20336_20360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (4))){
var state_20330__$1 = state_20330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20330__$1,(7),ch);
} else {
if((state_val_20331 === (6))){
var inst_20325 = (state_20330[(2)]);
var state_20330__$1 = state_20330;
var statearr_20337_20361 = state_20330__$1;
(statearr_20337_20361[(2)] = inst_20325);

(statearr_20337_20361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (3))){
var inst_20327 = (state_20330[(2)]);
var inst_20328 = cljs.core.async.close_BANG_.call(null,out);
var state_20330__$1 = (function (){var statearr_20338 = state_20330;
(statearr_20338[(9)] = inst_20327);

return statearr_20338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20330__$1,inst_20328);
} else {
if((state_val_20331 === (2))){
var inst_20307 = (state_20330[(8)]);
var inst_20309 = (inst_20307 < n);
var state_20330__$1 = state_20330;
if(cljs.core.truth_(inst_20309)){
var statearr_20339_20362 = state_20330__$1;
(statearr_20339_20362[(1)] = (4));

} else {
var statearr_20340_20363 = state_20330__$1;
(statearr_20340_20363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (11))){
var inst_20307 = (state_20330[(8)]);
var inst_20317 = (state_20330[(2)]);
var inst_20318 = (inst_20307 + (1));
var inst_20307__$1 = inst_20318;
var state_20330__$1 = (function (){var statearr_20341 = state_20330;
(statearr_20341[(10)] = inst_20317);

(statearr_20341[(8)] = inst_20307__$1);

return statearr_20341;
})();
var statearr_20342_20364 = state_20330__$1;
(statearr_20342_20364[(2)] = null);

(statearr_20342_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (9))){
var state_20330__$1 = state_20330;
var statearr_20343_20365 = state_20330__$1;
(statearr_20343_20365[(2)] = null);

(statearr_20343_20365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (5))){
var state_20330__$1 = state_20330;
var statearr_20344_20366 = state_20330__$1;
(statearr_20344_20366[(2)] = null);

(statearr_20344_20366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (10))){
var inst_20322 = (state_20330[(2)]);
var state_20330__$1 = state_20330;
var statearr_20345_20367 = state_20330__$1;
(statearr_20345_20367[(2)] = inst_20322);

(statearr_20345_20367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20331 === (8))){
var inst_20312 = (state_20330[(7)]);
var state_20330__$1 = state_20330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20330__$1,(11),out,inst_20312);
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
});})(c__18193__auto___20357,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20357,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20349[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20349[(1)] = (1));

return statearr_20349;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20330){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20350){if((e20350 instanceof Object)){
var ex__18085__auto__ = e20350;
var statearr_20351_20368 = state_20330;
(statearr_20351_20368[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20369 = state_20330;
state_20330 = G__20369;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20357,out))
})();
var state__18195__auto__ = (function (){var statearr_20352 = f__18194__auto__.call(null);
(statearr_20352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20357);

return statearr_20352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20357,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20377 = (function (map_LT_,f,ch,meta20378){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20378 = meta20378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20379,meta20378__$1){
var self__ = this;
var _20379__$1 = this;
return (new cljs.core.async.t_cljs$core$async20377(self__.map_LT_,self__.f,self__.ch,meta20378__$1));
});

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20379){
var self__ = this;
var _20379__$1 = this;
return self__.meta20378;
});

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20380 = (function (map_LT_,f,ch,meta20378,_,fn1,meta20381){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20378 = meta20378;
this._ = _;
this.fn1 = fn1;
this.meta20381 = meta20381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20382,meta20381__$1){
var self__ = this;
var _20382__$1 = this;
return (new cljs.core.async.t_cljs$core$async20380(self__.map_LT_,self__.f,self__.ch,self__.meta20378,self__._,self__.fn1,meta20381__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20382){
var self__ = this;
var _20382__$1 = this;
return self__.meta20381;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20370_SHARP_){
return f1.call(null,(((p1__20370_SHARP_ == null))?null:self__.f.call(null,p1__20370_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20378","meta20378",647564650,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20377","cljs.core.async/t_cljs$core$async20377",1426313955,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20381","meta20381",-1608837826,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20380";

cljs.core.async.t_cljs$core$async20380.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20380");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20380 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20380(map_LT___$1,f__$1,ch__$1,meta20378__$1,___$2,fn1__$1,meta20381){
return (new cljs.core.async.t_cljs$core$async20380(map_LT___$1,f__$1,ch__$1,meta20378__$1,___$2,fn1__$1,meta20381));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20380(self__.map_LT_,self__.f,self__.ch,self__.meta20378,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20378","meta20378",647564650,null)], null);
});

cljs.core.async.t_cljs$core$async20377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20377";

cljs.core.async.t_cljs$core$async20377.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20377");
});

cljs.core.async.__GT_t_cljs$core$async20377 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20377(map_LT___$1,f__$1,ch__$1,meta20378){
return (new cljs.core.async.t_cljs$core$async20377(map_LT___$1,f__$1,ch__$1,meta20378));
});

}

return (new cljs.core.async.t_cljs$core$async20377(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20386 = (function (map_GT_,f,ch,meta20387){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20387 = meta20387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20388,meta20387__$1){
var self__ = this;
var _20388__$1 = this;
return (new cljs.core.async.t_cljs$core$async20386(self__.map_GT_,self__.f,self__.ch,meta20387__$1));
});

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20388){
var self__ = this;
var _20388__$1 = this;
return self__.meta20387;
});

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20387","meta20387",313927749,null)], null);
});

cljs.core.async.t_cljs$core$async20386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20386";

cljs.core.async.t_cljs$core$async20386.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20386");
});

cljs.core.async.__GT_t_cljs$core$async20386 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20386(map_GT___$1,f__$1,ch__$1,meta20387){
return (new cljs.core.async.t_cljs$core$async20386(map_GT___$1,f__$1,ch__$1,meta20387));
});

}

return (new cljs.core.async.t_cljs$core$async20386(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20392 = (function (filter_GT_,p,ch,meta20393){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20393 = meta20393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20394,meta20393__$1){
var self__ = this;
var _20394__$1 = this;
return (new cljs.core.async.t_cljs$core$async20392(self__.filter_GT_,self__.p,self__.ch,meta20393__$1));
});

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20394){
var self__ = this;
var _20394__$1 = this;
return self__.meta20393;
});

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20393","meta20393",795867013,null)], null);
});

cljs.core.async.t_cljs$core$async20392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20392";

cljs.core.async.t_cljs$core$async20392.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async20392");
});

cljs.core.async.__GT_t_cljs$core$async20392 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20392(filter_GT___$1,p__$1,ch__$1,meta20393){
return (new cljs.core.async.t_cljs$core$async20392(filter_GT___$1,p__$1,ch__$1,meta20393));
});

}

return (new cljs.core.async.t_cljs$core$async20392(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20395 = [];
var len__14245__auto___20439 = arguments.length;
var i__14246__auto___20440 = (0);
while(true){
if((i__14246__auto___20440 < len__14245__auto___20439)){
args20395.push((arguments[i__14246__auto___20440]));

var G__20441 = (i__14246__auto___20440 + (1));
i__14246__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var G__20397 = args20395.length;
switch (G__20397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20395.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20443,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20443,out){
return (function (state_20418){
var state_val_20419 = (state_20418[(1)]);
if((state_val_20419 === (7))){
var inst_20414 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20420_20444 = state_20418__$1;
(statearr_20420_20444[(2)] = inst_20414);

(statearr_20420_20444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (1))){
var state_20418__$1 = state_20418;
var statearr_20421_20445 = state_20418__$1;
(statearr_20421_20445[(2)] = null);

(statearr_20421_20445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (4))){
var inst_20400 = (state_20418[(7)]);
var inst_20400__$1 = (state_20418[(2)]);
var inst_20401 = (inst_20400__$1 == null);
var state_20418__$1 = (function (){var statearr_20422 = state_20418;
(statearr_20422[(7)] = inst_20400__$1);

return statearr_20422;
})();
if(cljs.core.truth_(inst_20401)){
var statearr_20423_20446 = state_20418__$1;
(statearr_20423_20446[(1)] = (5));

} else {
var statearr_20424_20447 = state_20418__$1;
(statearr_20424_20447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (6))){
var inst_20400 = (state_20418[(7)]);
var inst_20405 = p.call(null,inst_20400);
var state_20418__$1 = state_20418;
if(cljs.core.truth_(inst_20405)){
var statearr_20425_20448 = state_20418__$1;
(statearr_20425_20448[(1)] = (8));

} else {
var statearr_20426_20449 = state_20418__$1;
(statearr_20426_20449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (3))){
var inst_20416 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20418__$1,inst_20416);
} else {
if((state_val_20419 === (2))){
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20418__$1,(4),ch);
} else {
if((state_val_20419 === (11))){
var inst_20408 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20427_20450 = state_20418__$1;
(statearr_20427_20450[(2)] = inst_20408);

(statearr_20427_20450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (9))){
var state_20418__$1 = state_20418;
var statearr_20428_20451 = state_20418__$1;
(statearr_20428_20451[(2)] = null);

(statearr_20428_20451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (5))){
var inst_20403 = cljs.core.async.close_BANG_.call(null,out);
var state_20418__$1 = state_20418;
var statearr_20429_20452 = state_20418__$1;
(statearr_20429_20452[(2)] = inst_20403);

(statearr_20429_20452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (10))){
var inst_20411 = (state_20418[(2)]);
var state_20418__$1 = (function (){var statearr_20430 = state_20418;
(statearr_20430[(8)] = inst_20411);

return statearr_20430;
})();
var statearr_20431_20453 = state_20418__$1;
(statearr_20431_20453[(2)] = null);

(statearr_20431_20453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (8))){
var inst_20400 = (state_20418[(7)]);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20418__$1,(11),out,inst_20400);
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
});})(c__18193__auto___20443,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20443,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20435 = [null,null,null,null,null,null,null,null,null];
(statearr_20435[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20435[(1)] = (1));

return statearr_20435;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20418){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20436){if((e20436 instanceof Object)){
var ex__18085__auto__ = e20436;
var statearr_20437_20454 = state_20418;
(statearr_20437_20454[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20455 = state_20418;
state_20418 = G__20455;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20443,out))
})();
var state__18195__auto__ = (function (){var statearr_20438 = f__18194__auto__.call(null);
(statearr_20438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20443);

return statearr_20438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20443,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20456 = [];
var len__14245__auto___20459 = arguments.length;
var i__14246__auto___20460 = (0);
while(true){
if((i__14246__auto___20460 < len__14245__auto___20459)){
args20456.push((arguments[i__14246__auto___20460]));

var G__20461 = (i__14246__auto___20460 + (1));
i__14246__auto___20460 = G__20461;
continue;
} else {
}
break;
}

var G__20458 = args20456.length;
switch (G__20458) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20456.length)].join('')));

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
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_20628){
var state_val_20629 = (state_20628[(1)]);
if((state_val_20629 === (7))){
var inst_20624 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20630_20671 = state_20628__$1;
(statearr_20630_20671[(2)] = inst_20624);

(statearr_20630_20671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (20))){
var inst_20594 = (state_20628[(7)]);
var inst_20605 = (state_20628[(2)]);
var inst_20606 = cljs.core.next.call(null,inst_20594);
var inst_20580 = inst_20606;
var inst_20581 = null;
var inst_20582 = (0);
var inst_20583 = (0);
var state_20628__$1 = (function (){var statearr_20631 = state_20628;
(statearr_20631[(8)] = inst_20583);

(statearr_20631[(9)] = inst_20582);

(statearr_20631[(10)] = inst_20580);

(statearr_20631[(11)] = inst_20605);

(statearr_20631[(12)] = inst_20581);

return statearr_20631;
})();
var statearr_20632_20672 = state_20628__$1;
(statearr_20632_20672[(2)] = null);

(statearr_20632_20672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (1))){
var state_20628__$1 = state_20628;
var statearr_20633_20673 = state_20628__$1;
(statearr_20633_20673[(2)] = null);

(statearr_20633_20673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (4))){
var inst_20569 = (state_20628[(13)]);
var inst_20569__$1 = (state_20628[(2)]);
var inst_20570 = (inst_20569__$1 == null);
var state_20628__$1 = (function (){var statearr_20634 = state_20628;
(statearr_20634[(13)] = inst_20569__$1);

return statearr_20634;
})();
if(cljs.core.truth_(inst_20570)){
var statearr_20635_20674 = state_20628__$1;
(statearr_20635_20674[(1)] = (5));

} else {
var statearr_20636_20675 = state_20628__$1;
(statearr_20636_20675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (15))){
var state_20628__$1 = state_20628;
var statearr_20640_20676 = state_20628__$1;
(statearr_20640_20676[(2)] = null);

(statearr_20640_20676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (21))){
var state_20628__$1 = state_20628;
var statearr_20641_20677 = state_20628__$1;
(statearr_20641_20677[(2)] = null);

(statearr_20641_20677[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (13))){
var inst_20583 = (state_20628[(8)]);
var inst_20582 = (state_20628[(9)]);
var inst_20580 = (state_20628[(10)]);
var inst_20581 = (state_20628[(12)]);
var inst_20590 = (state_20628[(2)]);
var inst_20591 = (inst_20583 + (1));
var tmp20637 = inst_20582;
var tmp20638 = inst_20580;
var tmp20639 = inst_20581;
var inst_20580__$1 = tmp20638;
var inst_20581__$1 = tmp20639;
var inst_20582__$1 = tmp20637;
var inst_20583__$1 = inst_20591;
var state_20628__$1 = (function (){var statearr_20642 = state_20628;
(statearr_20642[(8)] = inst_20583__$1);

(statearr_20642[(9)] = inst_20582__$1);

(statearr_20642[(10)] = inst_20580__$1);

(statearr_20642[(14)] = inst_20590);

(statearr_20642[(12)] = inst_20581__$1);

return statearr_20642;
})();
var statearr_20643_20678 = state_20628__$1;
(statearr_20643_20678[(2)] = null);

(statearr_20643_20678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (22))){
var state_20628__$1 = state_20628;
var statearr_20644_20679 = state_20628__$1;
(statearr_20644_20679[(2)] = null);

(statearr_20644_20679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (6))){
var inst_20569 = (state_20628[(13)]);
var inst_20578 = f.call(null,inst_20569);
var inst_20579 = cljs.core.seq.call(null,inst_20578);
var inst_20580 = inst_20579;
var inst_20581 = null;
var inst_20582 = (0);
var inst_20583 = (0);
var state_20628__$1 = (function (){var statearr_20645 = state_20628;
(statearr_20645[(8)] = inst_20583);

(statearr_20645[(9)] = inst_20582);

(statearr_20645[(10)] = inst_20580);

(statearr_20645[(12)] = inst_20581);

return statearr_20645;
})();
var statearr_20646_20680 = state_20628__$1;
(statearr_20646_20680[(2)] = null);

(statearr_20646_20680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (17))){
var inst_20594 = (state_20628[(7)]);
var inst_20598 = cljs.core.chunk_first.call(null,inst_20594);
var inst_20599 = cljs.core.chunk_rest.call(null,inst_20594);
var inst_20600 = cljs.core.count.call(null,inst_20598);
var inst_20580 = inst_20599;
var inst_20581 = inst_20598;
var inst_20582 = inst_20600;
var inst_20583 = (0);
var state_20628__$1 = (function (){var statearr_20647 = state_20628;
(statearr_20647[(8)] = inst_20583);

(statearr_20647[(9)] = inst_20582);

(statearr_20647[(10)] = inst_20580);

(statearr_20647[(12)] = inst_20581);

return statearr_20647;
})();
var statearr_20648_20681 = state_20628__$1;
(statearr_20648_20681[(2)] = null);

(statearr_20648_20681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (3))){
var inst_20626 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20628__$1,inst_20626);
} else {
if((state_val_20629 === (12))){
var inst_20614 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20649_20682 = state_20628__$1;
(statearr_20649_20682[(2)] = inst_20614);

(statearr_20649_20682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (2))){
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20628__$1,(4),in$);
} else {
if((state_val_20629 === (23))){
var inst_20622 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20650_20683 = state_20628__$1;
(statearr_20650_20683[(2)] = inst_20622);

(statearr_20650_20683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (19))){
var inst_20609 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20651_20684 = state_20628__$1;
(statearr_20651_20684[(2)] = inst_20609);

(statearr_20651_20684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (11))){
var inst_20580 = (state_20628[(10)]);
var inst_20594 = (state_20628[(7)]);
var inst_20594__$1 = cljs.core.seq.call(null,inst_20580);
var state_20628__$1 = (function (){var statearr_20652 = state_20628;
(statearr_20652[(7)] = inst_20594__$1);

return statearr_20652;
})();
if(inst_20594__$1){
var statearr_20653_20685 = state_20628__$1;
(statearr_20653_20685[(1)] = (14));

} else {
var statearr_20654_20686 = state_20628__$1;
(statearr_20654_20686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (9))){
var inst_20616 = (state_20628[(2)]);
var inst_20617 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20628__$1 = (function (){var statearr_20655 = state_20628;
(statearr_20655[(15)] = inst_20616);

return statearr_20655;
})();
if(cljs.core.truth_(inst_20617)){
var statearr_20656_20687 = state_20628__$1;
(statearr_20656_20687[(1)] = (21));

} else {
var statearr_20657_20688 = state_20628__$1;
(statearr_20657_20688[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (5))){
var inst_20572 = cljs.core.async.close_BANG_.call(null,out);
var state_20628__$1 = state_20628;
var statearr_20658_20689 = state_20628__$1;
(statearr_20658_20689[(2)] = inst_20572);

(statearr_20658_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (14))){
var inst_20594 = (state_20628[(7)]);
var inst_20596 = cljs.core.chunked_seq_QMARK_.call(null,inst_20594);
var state_20628__$1 = state_20628;
if(inst_20596){
var statearr_20659_20690 = state_20628__$1;
(statearr_20659_20690[(1)] = (17));

} else {
var statearr_20660_20691 = state_20628__$1;
(statearr_20660_20691[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (16))){
var inst_20612 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20661_20692 = state_20628__$1;
(statearr_20661_20692[(2)] = inst_20612);

(statearr_20661_20692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (10))){
var inst_20583 = (state_20628[(8)]);
var inst_20581 = (state_20628[(12)]);
var inst_20588 = cljs.core._nth.call(null,inst_20581,inst_20583);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20628__$1,(13),out,inst_20588);
} else {
if((state_val_20629 === (18))){
var inst_20594 = (state_20628[(7)]);
var inst_20603 = cljs.core.first.call(null,inst_20594);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20628__$1,(20),out,inst_20603);
} else {
if((state_val_20629 === (8))){
var inst_20583 = (state_20628[(8)]);
var inst_20582 = (state_20628[(9)]);
var inst_20585 = (inst_20583 < inst_20582);
var inst_20586 = inst_20585;
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20586)){
var statearr_20662_20693 = state_20628__$1;
(statearr_20662_20693[(1)] = (10));

} else {
var statearr_20663_20694 = state_20628__$1;
(statearr_20663_20694[(1)] = (11));

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
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____0 = (function (){
var statearr_20667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20667[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__);

(statearr_20667[(1)] = (1));

return statearr_20667;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____1 = (function (state_20628){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20668){if((e20668 instanceof Object)){
var ex__18085__auto__ = e20668;
var statearr_20669_20695 = state_20628;
(statearr_20669_20695[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20696 = state_20628;
state_20628 = G__20696;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__ = function(state_20628){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____1.call(this,state_20628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18082__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_20670 = f__18194__auto__.call(null);
(statearr_20670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_20670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20697 = [];
var len__14245__auto___20700 = arguments.length;
var i__14246__auto___20701 = (0);
while(true){
if((i__14246__auto___20701 < len__14245__auto___20700)){
args20697.push((arguments[i__14246__auto___20701]));

var G__20702 = (i__14246__auto___20701 + (1));
i__14246__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var G__20699 = args20697.length;
switch (G__20699) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20697.length)].join('')));

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
var args20704 = [];
var len__14245__auto___20707 = arguments.length;
var i__14246__auto___20708 = (0);
while(true){
if((i__14246__auto___20708 < len__14245__auto___20707)){
args20704.push((arguments[i__14246__auto___20708]));

var G__20709 = (i__14246__auto___20708 + (1));
i__14246__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var G__20706 = args20704.length;
switch (G__20706) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20704.length)].join('')));

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
var args20711 = [];
var len__14245__auto___20762 = arguments.length;
var i__14246__auto___20763 = (0);
while(true){
if((i__14246__auto___20763 < len__14245__auto___20762)){
args20711.push((arguments[i__14246__auto___20763]));

var G__20764 = (i__14246__auto___20763 + (1));
i__14246__auto___20763 = G__20764;
continue;
} else {
}
break;
}

var G__20713 = args20711.length;
switch (G__20713) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20711.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20766,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20766,out){
return (function (state_20737){
var state_val_20738 = (state_20737[(1)]);
if((state_val_20738 === (7))){
var inst_20732 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20739_20767 = state_20737__$1;
(statearr_20739_20767[(2)] = inst_20732);

(statearr_20739_20767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (1))){
var inst_20714 = null;
var state_20737__$1 = (function (){var statearr_20740 = state_20737;
(statearr_20740[(7)] = inst_20714);

return statearr_20740;
})();
var statearr_20741_20768 = state_20737__$1;
(statearr_20741_20768[(2)] = null);

(statearr_20741_20768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (4))){
var inst_20717 = (state_20737[(8)]);
var inst_20717__$1 = (state_20737[(2)]);
var inst_20718 = (inst_20717__$1 == null);
var inst_20719 = cljs.core.not.call(null,inst_20718);
var state_20737__$1 = (function (){var statearr_20742 = state_20737;
(statearr_20742[(8)] = inst_20717__$1);

return statearr_20742;
})();
if(inst_20719){
var statearr_20743_20769 = state_20737__$1;
(statearr_20743_20769[(1)] = (5));

} else {
var statearr_20744_20770 = state_20737__$1;
(statearr_20744_20770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (6))){
var state_20737__$1 = state_20737;
var statearr_20745_20771 = state_20737__$1;
(statearr_20745_20771[(2)] = null);

(statearr_20745_20771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (3))){
var inst_20734 = (state_20737[(2)]);
var inst_20735 = cljs.core.async.close_BANG_.call(null,out);
var state_20737__$1 = (function (){var statearr_20746 = state_20737;
(statearr_20746[(9)] = inst_20734);

return statearr_20746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20737__$1,inst_20735);
} else {
if((state_val_20738 === (2))){
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20737__$1,(4),ch);
} else {
if((state_val_20738 === (11))){
var inst_20717 = (state_20737[(8)]);
var inst_20726 = (state_20737[(2)]);
var inst_20714 = inst_20717;
var state_20737__$1 = (function (){var statearr_20747 = state_20737;
(statearr_20747[(10)] = inst_20726);

(statearr_20747[(7)] = inst_20714);

return statearr_20747;
})();
var statearr_20748_20772 = state_20737__$1;
(statearr_20748_20772[(2)] = null);

(statearr_20748_20772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (9))){
var inst_20717 = (state_20737[(8)]);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20737__$1,(11),out,inst_20717);
} else {
if((state_val_20738 === (5))){
var inst_20717 = (state_20737[(8)]);
var inst_20714 = (state_20737[(7)]);
var inst_20721 = cljs.core._EQ_.call(null,inst_20717,inst_20714);
var state_20737__$1 = state_20737;
if(inst_20721){
var statearr_20750_20773 = state_20737__$1;
(statearr_20750_20773[(1)] = (8));

} else {
var statearr_20751_20774 = state_20737__$1;
(statearr_20751_20774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (10))){
var inst_20729 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20752_20775 = state_20737__$1;
(statearr_20752_20775[(2)] = inst_20729);

(statearr_20752_20775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (8))){
var inst_20714 = (state_20737[(7)]);
var tmp20749 = inst_20714;
var inst_20714__$1 = tmp20749;
var state_20737__$1 = (function (){var statearr_20753 = state_20737;
(statearr_20753[(7)] = inst_20714__$1);

return statearr_20753;
})();
var statearr_20754_20776 = state_20737__$1;
(statearr_20754_20776[(2)] = null);

(statearr_20754_20776[(1)] = (2));


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
});})(c__18193__auto___20766,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20766,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20758[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20758[(1)] = (1));

return statearr_20758;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20737){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20759){if((e20759 instanceof Object)){
var ex__18085__auto__ = e20759;
var statearr_20760_20777 = state_20737;
(statearr_20760_20777[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20778 = state_20737;
state_20737 = G__20778;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20766,out))
})();
var state__18195__auto__ = (function (){var statearr_20761 = f__18194__auto__.call(null);
(statearr_20761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20766);

return statearr_20761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20766,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20779 = [];
var len__14245__auto___20849 = arguments.length;
var i__14246__auto___20850 = (0);
while(true){
if((i__14246__auto___20850 < len__14245__auto___20849)){
args20779.push((arguments[i__14246__auto___20850]));

var G__20851 = (i__14246__auto___20850 + (1));
i__14246__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var G__20781 = args20779.length;
switch (G__20781) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20779.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20853,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20853,out){
return (function (state_20819){
var state_val_20820 = (state_20819[(1)]);
if((state_val_20820 === (7))){
var inst_20815 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20821_20854 = state_20819__$1;
(statearr_20821_20854[(2)] = inst_20815);

(statearr_20821_20854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (1))){
var inst_20782 = (new Array(n));
var inst_20783 = inst_20782;
var inst_20784 = (0);
var state_20819__$1 = (function (){var statearr_20822 = state_20819;
(statearr_20822[(7)] = inst_20783);

(statearr_20822[(8)] = inst_20784);

return statearr_20822;
})();
var statearr_20823_20855 = state_20819__$1;
(statearr_20823_20855[(2)] = null);

(statearr_20823_20855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (4))){
var inst_20787 = (state_20819[(9)]);
var inst_20787__$1 = (state_20819[(2)]);
var inst_20788 = (inst_20787__$1 == null);
var inst_20789 = cljs.core.not.call(null,inst_20788);
var state_20819__$1 = (function (){var statearr_20824 = state_20819;
(statearr_20824[(9)] = inst_20787__$1);

return statearr_20824;
})();
if(inst_20789){
var statearr_20825_20856 = state_20819__$1;
(statearr_20825_20856[(1)] = (5));

} else {
var statearr_20826_20857 = state_20819__$1;
(statearr_20826_20857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (15))){
var inst_20809 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20827_20858 = state_20819__$1;
(statearr_20827_20858[(2)] = inst_20809);

(statearr_20827_20858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (13))){
var state_20819__$1 = state_20819;
var statearr_20828_20859 = state_20819__$1;
(statearr_20828_20859[(2)] = null);

(statearr_20828_20859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (6))){
var inst_20784 = (state_20819[(8)]);
var inst_20805 = (inst_20784 > (0));
var state_20819__$1 = state_20819;
if(cljs.core.truth_(inst_20805)){
var statearr_20829_20860 = state_20819__$1;
(statearr_20829_20860[(1)] = (12));

} else {
var statearr_20830_20861 = state_20819__$1;
(statearr_20830_20861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (3))){
var inst_20817 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20819__$1,inst_20817);
} else {
if((state_val_20820 === (12))){
var inst_20783 = (state_20819[(7)]);
var inst_20807 = cljs.core.vec.call(null,inst_20783);
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20819__$1,(15),out,inst_20807);
} else {
if((state_val_20820 === (2))){
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20819__$1,(4),ch);
} else {
if((state_val_20820 === (11))){
var inst_20799 = (state_20819[(2)]);
var inst_20800 = (new Array(n));
var inst_20783 = inst_20800;
var inst_20784 = (0);
var state_20819__$1 = (function (){var statearr_20831 = state_20819;
(statearr_20831[(7)] = inst_20783);

(statearr_20831[(8)] = inst_20784);

(statearr_20831[(10)] = inst_20799);

return statearr_20831;
})();
var statearr_20832_20862 = state_20819__$1;
(statearr_20832_20862[(2)] = null);

(statearr_20832_20862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (9))){
var inst_20783 = (state_20819[(7)]);
var inst_20797 = cljs.core.vec.call(null,inst_20783);
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20819__$1,(11),out,inst_20797);
} else {
if((state_val_20820 === (5))){
var inst_20787 = (state_20819[(9)]);
var inst_20783 = (state_20819[(7)]);
var inst_20792 = (state_20819[(11)]);
var inst_20784 = (state_20819[(8)]);
var inst_20791 = (inst_20783[inst_20784] = inst_20787);
var inst_20792__$1 = (inst_20784 + (1));
var inst_20793 = (inst_20792__$1 < n);
var state_20819__$1 = (function (){var statearr_20833 = state_20819;
(statearr_20833[(11)] = inst_20792__$1);

(statearr_20833[(12)] = inst_20791);

return statearr_20833;
})();
if(cljs.core.truth_(inst_20793)){
var statearr_20834_20863 = state_20819__$1;
(statearr_20834_20863[(1)] = (8));

} else {
var statearr_20835_20864 = state_20819__$1;
(statearr_20835_20864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (14))){
var inst_20812 = (state_20819[(2)]);
var inst_20813 = cljs.core.async.close_BANG_.call(null,out);
var state_20819__$1 = (function (){var statearr_20837 = state_20819;
(statearr_20837[(13)] = inst_20812);

return statearr_20837;
})();
var statearr_20838_20865 = state_20819__$1;
(statearr_20838_20865[(2)] = inst_20813);

(statearr_20838_20865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (10))){
var inst_20803 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20839_20866 = state_20819__$1;
(statearr_20839_20866[(2)] = inst_20803);

(statearr_20839_20866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (8))){
var inst_20783 = (state_20819[(7)]);
var inst_20792 = (state_20819[(11)]);
var tmp20836 = inst_20783;
var inst_20783__$1 = tmp20836;
var inst_20784 = inst_20792;
var state_20819__$1 = (function (){var statearr_20840 = state_20819;
(statearr_20840[(7)] = inst_20783__$1);

(statearr_20840[(8)] = inst_20784);

return statearr_20840;
})();
var statearr_20841_20867 = state_20819__$1;
(statearr_20841_20867[(2)] = null);

(statearr_20841_20867[(1)] = (2));


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
});})(c__18193__auto___20853,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20853,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20845[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20845[(1)] = (1));

return statearr_20845;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20819){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20846){if((e20846 instanceof Object)){
var ex__18085__auto__ = e20846;
var statearr_20847_20868 = state_20819;
(statearr_20847_20868[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20869 = state_20819;
state_20819 = G__20869;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20853,out))
})();
var state__18195__auto__ = (function (){var statearr_20848 = f__18194__auto__.call(null);
(statearr_20848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20853);

return statearr_20848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20853,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20870 = [];
var len__14245__auto___20944 = arguments.length;
var i__14246__auto___20945 = (0);
while(true){
if((i__14246__auto___20945 < len__14245__auto___20944)){
args20870.push((arguments[i__14246__auto___20945]));

var G__20946 = (i__14246__auto___20945 + (1));
i__14246__auto___20945 = G__20946;
continue;
} else {
}
break;
}

var G__20872 = args20870.length;
switch (G__20872) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20870.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18193__auto___20948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto___20948,out){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto___20948,out){
return (function (state_20914){
var state_val_20915 = (state_20914[(1)]);
if((state_val_20915 === (7))){
var inst_20910 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
var statearr_20916_20949 = state_20914__$1;
(statearr_20916_20949[(2)] = inst_20910);

(statearr_20916_20949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (1))){
var inst_20873 = [];
var inst_20874 = inst_20873;
var inst_20875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20914__$1 = (function (){var statearr_20917 = state_20914;
(statearr_20917[(7)] = inst_20875);

(statearr_20917[(8)] = inst_20874);

return statearr_20917;
})();
var statearr_20918_20950 = state_20914__$1;
(statearr_20918_20950[(2)] = null);

(statearr_20918_20950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (4))){
var inst_20878 = (state_20914[(9)]);
var inst_20878__$1 = (state_20914[(2)]);
var inst_20879 = (inst_20878__$1 == null);
var inst_20880 = cljs.core.not.call(null,inst_20879);
var state_20914__$1 = (function (){var statearr_20919 = state_20914;
(statearr_20919[(9)] = inst_20878__$1);

return statearr_20919;
})();
if(inst_20880){
var statearr_20920_20951 = state_20914__$1;
(statearr_20920_20951[(1)] = (5));

} else {
var statearr_20921_20952 = state_20914__$1;
(statearr_20921_20952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (15))){
var inst_20904 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
var statearr_20922_20953 = state_20914__$1;
(statearr_20922_20953[(2)] = inst_20904);

(statearr_20922_20953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (13))){
var state_20914__$1 = state_20914;
var statearr_20923_20954 = state_20914__$1;
(statearr_20923_20954[(2)] = null);

(statearr_20923_20954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (6))){
var inst_20874 = (state_20914[(8)]);
var inst_20899 = inst_20874.length;
var inst_20900 = (inst_20899 > (0));
var state_20914__$1 = state_20914;
if(cljs.core.truth_(inst_20900)){
var statearr_20924_20955 = state_20914__$1;
(statearr_20924_20955[(1)] = (12));

} else {
var statearr_20925_20956 = state_20914__$1;
(statearr_20925_20956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (3))){
var inst_20912 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20914__$1,inst_20912);
} else {
if((state_val_20915 === (12))){
var inst_20874 = (state_20914[(8)]);
var inst_20902 = cljs.core.vec.call(null,inst_20874);
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20914__$1,(15),out,inst_20902);
} else {
if((state_val_20915 === (2))){
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,(4),ch);
} else {
if((state_val_20915 === (11))){
var inst_20882 = (state_20914[(10)]);
var inst_20878 = (state_20914[(9)]);
var inst_20892 = (state_20914[(2)]);
var inst_20893 = [];
var inst_20894 = inst_20893.push(inst_20878);
var inst_20874 = inst_20893;
var inst_20875 = inst_20882;
var state_20914__$1 = (function (){var statearr_20926 = state_20914;
(statearr_20926[(7)] = inst_20875);

(statearr_20926[(8)] = inst_20874);

(statearr_20926[(11)] = inst_20892);

(statearr_20926[(12)] = inst_20894);

return statearr_20926;
})();
var statearr_20927_20957 = state_20914__$1;
(statearr_20927_20957[(2)] = null);

(statearr_20927_20957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (9))){
var inst_20874 = (state_20914[(8)]);
var inst_20890 = cljs.core.vec.call(null,inst_20874);
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20914__$1,(11),out,inst_20890);
} else {
if((state_val_20915 === (5))){
var inst_20875 = (state_20914[(7)]);
var inst_20882 = (state_20914[(10)]);
var inst_20878 = (state_20914[(9)]);
var inst_20882__$1 = f.call(null,inst_20878);
var inst_20883 = cljs.core._EQ_.call(null,inst_20882__$1,inst_20875);
var inst_20884 = cljs.core.keyword_identical_QMARK_.call(null,inst_20875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20885 = (inst_20883) || (inst_20884);
var state_20914__$1 = (function (){var statearr_20928 = state_20914;
(statearr_20928[(10)] = inst_20882__$1);

return statearr_20928;
})();
if(cljs.core.truth_(inst_20885)){
var statearr_20929_20958 = state_20914__$1;
(statearr_20929_20958[(1)] = (8));

} else {
var statearr_20930_20959 = state_20914__$1;
(statearr_20930_20959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (14))){
var inst_20907 = (state_20914[(2)]);
var inst_20908 = cljs.core.async.close_BANG_.call(null,out);
var state_20914__$1 = (function (){var statearr_20932 = state_20914;
(statearr_20932[(13)] = inst_20907);

return statearr_20932;
})();
var statearr_20933_20960 = state_20914__$1;
(statearr_20933_20960[(2)] = inst_20908);

(statearr_20933_20960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (10))){
var inst_20897 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
var statearr_20934_20961 = state_20914__$1;
(statearr_20934_20961[(2)] = inst_20897);

(statearr_20934_20961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (8))){
var inst_20874 = (state_20914[(8)]);
var inst_20882 = (state_20914[(10)]);
var inst_20878 = (state_20914[(9)]);
var inst_20887 = inst_20874.push(inst_20878);
var tmp20931 = inst_20874;
var inst_20874__$1 = tmp20931;
var inst_20875 = inst_20882;
var state_20914__$1 = (function (){var statearr_20935 = state_20914;
(statearr_20935[(7)] = inst_20875);

(statearr_20935[(14)] = inst_20887);

(statearr_20935[(8)] = inst_20874__$1);

return statearr_20935;
})();
var statearr_20936_20962 = state_20914__$1;
(statearr_20936_20962[(2)] = null);

(statearr_20936_20962[(1)] = (2));


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
});})(c__18193__auto___20948,out))
;
return ((function (switch__18081__auto__,c__18193__auto___20948,out){
return (function() {
var cljs$core$async$state_machine__18082__auto__ = null;
var cljs$core$async$state_machine__18082__auto____0 = (function (){
var statearr_20940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20940[(0)] = cljs$core$async$state_machine__18082__auto__);

(statearr_20940[(1)] = (1));

return statearr_20940;
});
var cljs$core$async$state_machine__18082__auto____1 = (function (state_20914){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_20914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e20941){if((e20941 instanceof Object)){
var ex__18085__auto__ = e20941;
var statearr_20942_20963 = state_20914;
(statearr_20942_20963[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20964 = state_20914;
state_20914 = G__20964;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
cljs$core$async$state_machine__18082__auto__ = function(state_20914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18082__auto____1.call(this,state_20914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18082__auto____0;
cljs$core$async$state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18082__auto____1;
return cljs$core$async$state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto___20948,out))
})();
var state__18195__auto__ = (function (){var statearr_20943 = f__18194__auto__.call(null);
(statearr_20943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto___20948);

return statearr_20943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto___20948,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1464515100530