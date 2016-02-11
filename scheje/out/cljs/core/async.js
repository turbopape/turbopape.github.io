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
var args17440 = [];
var len__14245__auto___17446 = arguments.length;
var i__14246__auto___17447 = (0);
while(true){
if((i__14246__auto___17447 < len__14245__auto___17446)){
args17440.push((arguments[i__14246__auto___17447]));

var G__17448 = (i__14246__auto___17447 + (1));
i__14246__auto___17447 = G__17448;
continue;
} else {
}
break;
}

var G__17442 = args17440.length;
switch (G__17442) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17440.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17443 = (function (f,blockable,meta17444){
this.f = f;
this.blockable = blockable;
this.meta17444 = meta17444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17445,meta17444__$1){
var self__ = this;
var _17445__$1 = this;
return (new cljs.core.async.t_cljs$core$async17443(self__.f,self__.blockable,meta17444__$1));
});

cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17445){
var self__ = this;
var _17445__$1 = this;
return self__.meta17444;
});

cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17444","meta17444",1162509020,null)], null);
});

cljs.core.async.t_cljs$core$async17443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17443";

cljs.core.async.t_cljs$core$async17443.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async17443");
});

cljs.core.async.__GT_t_cljs$core$async17443 = (function cljs$core$async$__GT_t_cljs$core$async17443(f__$1,blockable__$1,meta17444){
return (new cljs.core.async.t_cljs$core$async17443(f__$1,blockable__$1,meta17444));
});

}

return (new cljs.core.async.t_cljs$core$async17443(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17452 = [];
var len__14245__auto___17455 = arguments.length;
var i__14246__auto___17456 = (0);
while(true){
if((i__14246__auto___17456 < len__14245__auto___17455)){
args17452.push((arguments[i__14246__auto___17456]));

var G__17457 = (i__14246__auto___17456 + (1));
i__14246__auto___17456 = G__17457;
continue;
} else {
}
break;
}

var G__17454 = args17452.length;
switch (G__17454) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17452.length)].join('')));

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
var args17459 = [];
var len__14245__auto___17462 = arguments.length;
var i__14246__auto___17463 = (0);
while(true){
if((i__14246__auto___17463 < len__14245__auto___17462)){
args17459.push((arguments[i__14246__auto___17463]));

var G__17464 = (i__14246__auto___17463 + (1));
i__14246__auto___17463 = G__17464;
continue;
} else {
}
break;
}

var G__17461 = args17459.length;
switch (G__17461) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17459.length)].join('')));

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
var args17466 = [];
var len__14245__auto___17469 = arguments.length;
var i__14246__auto___17470 = (0);
while(true){
if((i__14246__auto___17470 < len__14245__auto___17469)){
args17466.push((arguments[i__14246__auto___17470]));

var G__17471 = (i__14246__auto___17470 + (1));
i__14246__auto___17470 = G__17471;
continue;
} else {
}
break;
}

var G__17468 = args17466.length;
switch (G__17468) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17466.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17473 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17473);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17473,ret){
return (function (){
return fn1.call(null,val_17473);
});})(val_17473,ret))
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
var args17474 = [];
var len__14245__auto___17477 = arguments.length;
var i__14246__auto___17478 = (0);
while(true){
if((i__14246__auto___17478 < len__14245__auto___17477)){
args17474.push((arguments[i__14246__auto___17478]));

var G__17479 = (i__14246__auto___17478 + (1));
i__14246__auto___17478 = G__17479;
continue;
} else {
}
break;
}

var G__17476 = args17474.length;
switch (G__17476) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17474.length)].join('')));

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
var n__14090__auto___17481 = n;
var x_17482 = (0);
while(true){
if((x_17482 < n__14090__auto___17481)){
(a[x_17482] = (0));

var G__17483 = (x_17482 + (1));
x_17482 = G__17483;
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

var G__17484 = (i + (1));
i = G__17484;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17488 = (function (alt_flag,flag,meta17489){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17489 = meta17489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17490,meta17489__$1){
var self__ = this;
var _17490__$1 = this;
return (new cljs.core.async.t_cljs$core$async17488(self__.alt_flag,self__.flag,meta17489__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17490){
var self__ = this;
var _17490__$1 = this;
return self__.meta17489;
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17489","meta17489",-1626480867,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17488";

cljs.core.async.t_cljs$core$async17488.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async17488");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17488 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17488(alt_flag__$1,flag__$1,meta17489){
return (new cljs.core.async.t_cljs$core$async17488(alt_flag__$1,flag__$1,meta17489));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17488(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17494 = (function (alt_handler,flag,cb,meta17495){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17495 = meta17495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17496,meta17495__$1){
var self__ = this;
var _17496__$1 = this;
return (new cljs.core.async.t_cljs$core$async17494(self__.alt_handler,self__.flag,self__.cb,meta17495__$1));
});

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17496){
var self__ = this;
var _17496__$1 = this;
return self__.meta17495;
});

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17495","meta17495",1907903016,null)], null);
});

cljs.core.async.t_cljs$core$async17494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17494";

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async17494");
});

cljs.core.async.__GT_t_cljs$core$async17494 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17494(alt_handler__$1,flag__$1,cb__$1,meta17495){
return (new cljs.core.async.t_cljs$core$async17494(alt_handler__$1,flag__$1,cb__$1,meta17495));
});

}

return (new cljs.core.async.t_cljs$core$async17494(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17497_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17497_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17498_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17498_SHARP_,port], null));
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
var G__17499 = (i + (1));
i = G__17499;
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
var len__14245__auto___17505 = arguments.length;
var i__14246__auto___17506 = (0);
while(true){
if((i__14246__auto___17506 < len__14245__auto___17505)){
args__14252__auto__.push((arguments[i__14246__auto___17506]));

var G__17507 = (i__14246__auto___17506 + (1));
i__14246__auto___17506 = G__17507;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((1) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14253__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17502){
var map__17503 = p__17502;
var map__17503__$1 = ((((!((map__17503 == null)))?((((map__17503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17503):map__17503);
var opts = map__17503__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17500){
var G__17501 = cljs.core.first.call(null,seq17500);
var seq17500__$1 = cljs.core.next.call(null,seq17500);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17501,seq17500__$1);
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
var args17508 = [];
var len__14245__auto___17558 = arguments.length;
var i__14246__auto___17559 = (0);
while(true){
if((i__14246__auto___17559 < len__14245__auto___17558)){
args17508.push((arguments[i__14246__auto___17559]));

var G__17560 = (i__14246__auto___17559 + (1));
i__14246__auto___17559 = G__17560;
continue;
} else {
}
break;
}

var G__17510 = args17508.length;
switch (G__17510) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17508.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17395__auto___17562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___17562){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___17562){
return (function (state_17534){
var state_val_17535 = (state_17534[(1)]);
if((state_val_17535 === (7))){
var inst_17530 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17536_17563 = state_17534__$1;
(statearr_17536_17563[(2)] = inst_17530);

(statearr_17536_17563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (1))){
var state_17534__$1 = state_17534;
var statearr_17537_17564 = state_17534__$1;
(statearr_17537_17564[(2)] = null);

(statearr_17537_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (4))){
var inst_17513 = (state_17534[(7)]);
var inst_17513__$1 = (state_17534[(2)]);
var inst_17514 = (inst_17513__$1 == null);
var state_17534__$1 = (function (){var statearr_17538 = state_17534;
(statearr_17538[(7)] = inst_17513__$1);

return statearr_17538;
})();
if(cljs.core.truth_(inst_17514)){
var statearr_17539_17565 = state_17534__$1;
(statearr_17539_17565[(1)] = (5));

} else {
var statearr_17540_17566 = state_17534__$1;
(statearr_17540_17566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (13))){
var state_17534__$1 = state_17534;
var statearr_17541_17567 = state_17534__$1;
(statearr_17541_17567[(2)] = null);

(statearr_17541_17567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (6))){
var inst_17513 = (state_17534[(7)]);
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17534__$1,(11),to,inst_17513);
} else {
if((state_val_17535 === (3))){
var inst_17532 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17534__$1,inst_17532);
} else {
if((state_val_17535 === (12))){
var state_17534__$1 = state_17534;
var statearr_17542_17568 = state_17534__$1;
(statearr_17542_17568[(2)] = null);

(statearr_17542_17568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (2))){
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17534__$1,(4),from);
} else {
if((state_val_17535 === (11))){
var inst_17523 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
if(cljs.core.truth_(inst_17523)){
var statearr_17543_17569 = state_17534__$1;
(statearr_17543_17569[(1)] = (12));

} else {
var statearr_17544_17570 = state_17534__$1;
(statearr_17544_17570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (9))){
var state_17534__$1 = state_17534;
var statearr_17545_17571 = state_17534__$1;
(statearr_17545_17571[(2)] = null);

(statearr_17545_17571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (5))){
var state_17534__$1 = state_17534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17546_17572 = state_17534__$1;
(statearr_17546_17572[(1)] = (8));

} else {
var statearr_17547_17573 = state_17534__$1;
(statearr_17547_17573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (14))){
var inst_17528 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17548_17574 = state_17534__$1;
(statearr_17548_17574[(2)] = inst_17528);

(statearr_17548_17574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (10))){
var inst_17520 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17549_17575 = state_17534__$1;
(statearr_17549_17575[(2)] = inst_17520);

(statearr_17549_17575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (8))){
var inst_17517 = cljs.core.async.close_BANG_.call(null,to);
var state_17534__$1 = state_17534;
var statearr_17550_17576 = state_17534__$1;
(statearr_17550_17576[(2)] = inst_17517);

(statearr_17550_17576[(1)] = (10));


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
});})(c__17395__auto___17562))
;
return ((function (switch__17283__auto__,c__17395__auto___17562){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_17554 = [null,null,null,null,null,null,null,null];
(statearr_17554[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_17554[(1)] = (1));

return statearr_17554;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_17534){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17555){if((e17555 instanceof Object)){
var ex__17287__auto__ = e17555;
var statearr_17556_17577 = state_17534;
(statearr_17556_17577[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17578 = state_17534;
state_17534 = G__17578;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_17534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_17534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___17562))
})();
var state__17397__auto__ = (function (){var statearr_17557 = f__17396__auto__.call(null);
(statearr_17557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___17562);

return statearr_17557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___17562))
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
return (function (p__17762){
var vec__17763 = p__17762;
var v = cljs.core.nth.call(null,vec__17763,(0),null);
var p = cljs.core.nth.call(null,vec__17763,(1),null);
var job = vec__17763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17395__auto___17945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results){
return (function (state_17768){
var state_val_17769 = (state_17768[(1)]);
if((state_val_17769 === (1))){
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17768__$1,(2),res,v);
} else {
if((state_val_17769 === (2))){
var inst_17765 = (state_17768[(2)]);
var inst_17766 = cljs.core.async.close_BANG_.call(null,res);
var state_17768__$1 = (function (){var statearr_17770 = state_17768;
(statearr_17770[(7)] = inst_17765);

return statearr_17770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17768__$1,inst_17766);
} else {
return null;
}
}
});})(c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results))
;
return ((function (switch__17283__auto__,c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_17774 = [null,null,null,null,null,null,null,null];
(statearr_17774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__);

(statearr_17774[(1)] = (1));

return statearr_17774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1 = (function (state_17768){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17775){if((e17775 instanceof Object)){
var ex__17287__auto__ = e17775;
var statearr_17776_17946 = state_17768;
(statearr_17776_17946[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17947 = state_17768;
state_17768 = G__17947;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = function(state_17768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1.call(this,state_17768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results))
})();
var state__17397__auto__ = (function (){var statearr_17777 = f__17396__auto__.call(null);
(statearr_17777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___17945);

return statearr_17777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___17945,res,vec__17763,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17778){
var vec__17779 = p__17778;
var v = cljs.core.nth.call(null,vec__17779,(0),null);
var p = cljs.core.nth.call(null,vec__17779,(1),null);
var job = vec__17779;
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
var n__14090__auto___17948 = n;
var __17949 = (0);
while(true){
if((__17949 < n__14090__auto___17948)){
var G__17780_17950 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17780_17950) {
case "compute":
var c__17395__auto___17952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17949,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (__17949,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (1))){
var state_17793__$1 = state_17793;
var statearr_17795_17953 = state_17793__$1;
(statearr_17795_17953[(2)] = null);

(statearr_17795_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (2))){
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(4),jobs);
} else {
if((state_val_17794 === (3))){
var inst_17791 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17793__$1,inst_17791);
} else {
if((state_val_17794 === (4))){
var inst_17783 = (state_17793[(2)]);
var inst_17784 = process.call(null,inst_17783);
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17784)){
var statearr_17796_17954 = state_17793__$1;
(statearr_17796_17954[(1)] = (5));

} else {
var statearr_17797_17955 = state_17793__$1;
(statearr_17797_17955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (5))){
var state_17793__$1 = state_17793;
var statearr_17798_17956 = state_17793__$1;
(statearr_17798_17956[(2)] = null);

(statearr_17798_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (6))){
var state_17793__$1 = state_17793;
var statearr_17799_17957 = state_17793__$1;
(statearr_17799_17957[(2)] = null);

(statearr_17799_17957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (7))){
var inst_17789 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17800_17958 = state_17793__$1;
(statearr_17800_17958[(2)] = inst_17789);

(statearr_17800_17958[(1)] = (3));


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
});})(__17949,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
;
return ((function (__17949,switch__17283__auto__,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_17804 = [null,null,null,null,null,null,null];
(statearr_17804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__);

(statearr_17804[(1)] = (1));

return statearr_17804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1 = (function (state_17793){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17805){if((e17805 instanceof Object)){
var ex__17287__auto__ = e17805;
var statearr_17806_17959 = state_17793;
(statearr_17806_17959[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17960 = state_17793;
state_17793 = G__17960;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__;
})()
;})(__17949,switch__17283__auto__,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
})();
var state__17397__auto__ = (function (){var statearr_17807 = f__17396__auto__.call(null);
(statearr_17807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___17952);

return statearr_17807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(__17949,c__17395__auto___17952,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
);


break;
case "async":
var c__17395__auto___17961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17949,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (__17949,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function (state_17820){
var state_val_17821 = (state_17820[(1)]);
if((state_val_17821 === (1))){
var state_17820__$1 = state_17820;
var statearr_17822_17962 = state_17820__$1;
(statearr_17822_17962[(2)] = null);

(statearr_17822_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (2))){
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17820__$1,(4),jobs);
} else {
if((state_val_17821 === (3))){
var inst_17818 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17820__$1,inst_17818);
} else {
if((state_val_17821 === (4))){
var inst_17810 = (state_17820[(2)]);
var inst_17811 = async.call(null,inst_17810);
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17811)){
var statearr_17823_17963 = state_17820__$1;
(statearr_17823_17963[(1)] = (5));

} else {
var statearr_17824_17964 = state_17820__$1;
(statearr_17824_17964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (5))){
var state_17820__$1 = state_17820;
var statearr_17825_17965 = state_17820__$1;
(statearr_17825_17965[(2)] = null);

(statearr_17825_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (6))){
var state_17820__$1 = state_17820;
var statearr_17826_17966 = state_17820__$1;
(statearr_17826_17966[(2)] = null);

(statearr_17826_17966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (7))){
var inst_17816 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17827_17967 = state_17820__$1;
(statearr_17827_17967[(2)] = inst_17816);

(statearr_17827_17967[(1)] = (3));


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
});})(__17949,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
;
return ((function (__17949,switch__17283__auto__,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_17831 = [null,null,null,null,null,null,null];
(statearr_17831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__);

(statearr_17831[(1)] = (1));

return statearr_17831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1 = (function (state_17820){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17832){if((e17832 instanceof Object)){
var ex__17287__auto__ = e17832;
var statearr_17833_17968 = state_17820;
(statearr_17833_17968[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_17820;
state_17820 = G__17969;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = function(state_17820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1.call(this,state_17820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__;
})()
;})(__17949,switch__17283__auto__,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
})();
var state__17397__auto__ = (function (){var statearr_17834 = f__17396__auto__.call(null);
(statearr_17834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___17961);

return statearr_17834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(__17949,c__17395__auto___17961,G__17780_17950,n__14090__auto___17948,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17970 = (__17949 + (1));
__17949 = G__17970;
continue;
} else {
}
break;
}

var c__17395__auto___17971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___17971,jobs,results,process,async){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___17971,jobs,results,process,async){
return (function (state_17856){
var state_val_17857 = (state_17856[(1)]);
if((state_val_17857 === (1))){
var state_17856__$1 = state_17856;
var statearr_17858_17972 = state_17856__$1;
(statearr_17858_17972[(2)] = null);

(statearr_17858_17972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (2))){
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17856__$1,(4),from);
} else {
if((state_val_17857 === (3))){
var inst_17854 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17856__$1,inst_17854);
} else {
if((state_val_17857 === (4))){
var inst_17837 = (state_17856[(7)]);
var inst_17837__$1 = (state_17856[(2)]);
var inst_17838 = (inst_17837__$1 == null);
var state_17856__$1 = (function (){var statearr_17859 = state_17856;
(statearr_17859[(7)] = inst_17837__$1);

return statearr_17859;
})();
if(cljs.core.truth_(inst_17838)){
var statearr_17860_17973 = state_17856__$1;
(statearr_17860_17973[(1)] = (5));

} else {
var statearr_17861_17974 = state_17856__$1;
(statearr_17861_17974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (5))){
var inst_17840 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17856__$1 = state_17856;
var statearr_17862_17975 = state_17856__$1;
(statearr_17862_17975[(2)] = inst_17840);

(statearr_17862_17975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (6))){
var inst_17842 = (state_17856[(8)]);
var inst_17837 = (state_17856[(7)]);
var inst_17842__$1 = cljs.core.async.chan.call(null,(1));
var inst_17843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17844 = [inst_17837,inst_17842__$1];
var inst_17845 = (new cljs.core.PersistentVector(null,2,(5),inst_17843,inst_17844,null));
var state_17856__$1 = (function (){var statearr_17863 = state_17856;
(statearr_17863[(8)] = inst_17842__$1);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17856__$1,(8),jobs,inst_17845);
} else {
if((state_val_17857 === (7))){
var inst_17852 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17864_17976 = state_17856__$1;
(statearr_17864_17976[(2)] = inst_17852);

(statearr_17864_17976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (8))){
var inst_17842 = (state_17856[(8)]);
var inst_17847 = (state_17856[(2)]);
var state_17856__$1 = (function (){var statearr_17865 = state_17856;
(statearr_17865[(9)] = inst_17847);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17856__$1,(9),results,inst_17842);
} else {
if((state_val_17857 === (9))){
var inst_17849 = (state_17856[(2)]);
var state_17856__$1 = (function (){var statearr_17866 = state_17856;
(statearr_17866[(10)] = inst_17849);

return statearr_17866;
})();
var statearr_17867_17977 = state_17856__$1;
(statearr_17867_17977[(2)] = null);

(statearr_17867_17977[(1)] = (2));


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
});})(c__17395__auto___17971,jobs,results,process,async))
;
return ((function (switch__17283__auto__,c__17395__auto___17971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_17871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__);

(statearr_17871[(1)] = (1));

return statearr_17871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1 = (function (state_17856){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17872){if((e17872 instanceof Object)){
var ex__17287__auto__ = e17872;
var statearr_17873_17978 = state_17856;
(statearr_17873_17978[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17979 = state_17856;
state_17856 = G__17979;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___17971,jobs,results,process,async))
})();
var state__17397__auto__ = (function (){var statearr_17874 = f__17396__auto__.call(null);
(statearr_17874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___17971);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___17971,jobs,results,process,async))
);


var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__,jobs,results,process,async){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__,jobs,results,process,async){
return (function (state_17912){
var state_val_17913 = (state_17912[(1)]);
if((state_val_17913 === (7))){
var inst_17908 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17914_17980 = state_17912__$1;
(statearr_17914_17980[(2)] = inst_17908);

(statearr_17914_17980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (20))){
var state_17912__$1 = state_17912;
var statearr_17915_17981 = state_17912__$1;
(statearr_17915_17981[(2)] = null);

(statearr_17915_17981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (1))){
var state_17912__$1 = state_17912;
var statearr_17916_17982 = state_17912__$1;
(statearr_17916_17982[(2)] = null);

(statearr_17916_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (4))){
var inst_17877 = (state_17912[(7)]);
var inst_17877__$1 = (state_17912[(2)]);
var inst_17878 = (inst_17877__$1 == null);
var state_17912__$1 = (function (){var statearr_17917 = state_17912;
(statearr_17917[(7)] = inst_17877__$1);

return statearr_17917;
})();
if(cljs.core.truth_(inst_17878)){
var statearr_17918_17983 = state_17912__$1;
(statearr_17918_17983[(1)] = (5));

} else {
var statearr_17919_17984 = state_17912__$1;
(statearr_17919_17984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (15))){
var inst_17890 = (state_17912[(8)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17912__$1,(18),to,inst_17890);
} else {
if((state_val_17913 === (21))){
var inst_17903 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17920_17985 = state_17912__$1;
(statearr_17920_17985[(2)] = inst_17903);

(statearr_17920_17985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (13))){
var inst_17905 = (state_17912[(2)]);
var state_17912__$1 = (function (){var statearr_17921 = state_17912;
(statearr_17921[(9)] = inst_17905);

return statearr_17921;
})();
var statearr_17922_17986 = state_17912__$1;
(statearr_17922_17986[(2)] = null);

(statearr_17922_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (6))){
var inst_17877 = (state_17912[(7)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17912__$1,(11),inst_17877);
} else {
if((state_val_17913 === (17))){
var inst_17898 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
if(cljs.core.truth_(inst_17898)){
var statearr_17923_17987 = state_17912__$1;
(statearr_17923_17987[(1)] = (19));

} else {
var statearr_17924_17988 = state_17912__$1;
(statearr_17924_17988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (3))){
var inst_17910 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17912__$1,inst_17910);
} else {
if((state_val_17913 === (12))){
var inst_17887 = (state_17912[(10)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17912__$1,(14),inst_17887);
} else {
if((state_val_17913 === (2))){
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17912__$1,(4),results);
} else {
if((state_val_17913 === (19))){
var state_17912__$1 = state_17912;
var statearr_17925_17989 = state_17912__$1;
(statearr_17925_17989[(2)] = null);

(statearr_17925_17989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (11))){
var inst_17887 = (state_17912[(2)]);
var state_17912__$1 = (function (){var statearr_17926 = state_17912;
(statearr_17926[(10)] = inst_17887);

return statearr_17926;
})();
var statearr_17927_17990 = state_17912__$1;
(statearr_17927_17990[(2)] = null);

(statearr_17927_17990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (9))){
var state_17912__$1 = state_17912;
var statearr_17928_17991 = state_17912__$1;
(statearr_17928_17991[(2)] = null);

(statearr_17928_17991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (5))){
var state_17912__$1 = state_17912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17929_17992 = state_17912__$1;
(statearr_17929_17992[(1)] = (8));

} else {
var statearr_17930_17993 = state_17912__$1;
(statearr_17930_17993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (14))){
var inst_17890 = (state_17912[(8)]);
var inst_17892 = (state_17912[(11)]);
var inst_17890__$1 = (state_17912[(2)]);
var inst_17891 = (inst_17890__$1 == null);
var inst_17892__$1 = cljs.core.not.call(null,inst_17891);
var state_17912__$1 = (function (){var statearr_17931 = state_17912;
(statearr_17931[(8)] = inst_17890__$1);

(statearr_17931[(11)] = inst_17892__$1);

return statearr_17931;
})();
if(inst_17892__$1){
var statearr_17932_17994 = state_17912__$1;
(statearr_17932_17994[(1)] = (15));

} else {
var statearr_17933_17995 = state_17912__$1;
(statearr_17933_17995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (16))){
var inst_17892 = (state_17912[(11)]);
var state_17912__$1 = state_17912;
var statearr_17934_17996 = state_17912__$1;
(statearr_17934_17996[(2)] = inst_17892);

(statearr_17934_17996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (10))){
var inst_17884 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17935_17997 = state_17912__$1;
(statearr_17935_17997[(2)] = inst_17884);

(statearr_17935_17997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (18))){
var inst_17895 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17936_17998 = state_17912__$1;
(statearr_17936_17998[(2)] = inst_17895);

(statearr_17936_17998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17913 === (8))){
var inst_17881 = cljs.core.async.close_BANG_.call(null,to);
var state_17912__$1 = state_17912;
var statearr_17937_17999 = state_17912__$1;
(statearr_17937_17999[(2)] = inst_17881);

(statearr_17937_17999[(1)] = (10));


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
});})(c__17395__auto__,jobs,results,process,async))
;
return ((function (switch__17283__auto__,c__17395__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1 = (function (state_17912){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_17912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e17942){if((e17942 instanceof Object)){
var ex__17287__auto__ = e17942;
var statearr_17943_18000 = state_17912;
(statearr_17943_18000[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_17912;
state_17912 = G__18001;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__ = function(state_17912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1.call(this,state_17912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__,jobs,results,process,async))
})();
var state__17397__auto__ = (function (){var statearr_17944 = f__17396__auto__.call(null);
(statearr_17944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_17944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__,jobs,results,process,async))
);

return c__17395__auto__;
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
var args18002 = [];
var len__14245__auto___18005 = arguments.length;
var i__14246__auto___18006 = (0);
while(true){
if((i__14246__auto___18006 < len__14245__auto___18005)){
args18002.push((arguments[i__14246__auto___18006]));

var G__18007 = (i__14246__auto___18006 + (1));
i__14246__auto___18006 = G__18007;
continue;
} else {
}
break;
}

var G__18004 = args18002.length;
switch (G__18004) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18002.length)].join('')));

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
var args18009 = [];
var len__14245__auto___18012 = arguments.length;
var i__14246__auto___18013 = (0);
while(true){
if((i__14246__auto___18013 < len__14245__auto___18012)){
args18009.push((arguments[i__14246__auto___18013]));

var G__18014 = (i__14246__auto___18013 + (1));
i__14246__auto___18013 = G__18014;
continue;
} else {
}
break;
}

var G__18011 = args18009.length;
switch (G__18011) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18009.length)].join('')));

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
var args18016 = [];
var len__14245__auto___18069 = arguments.length;
var i__14246__auto___18070 = (0);
while(true){
if((i__14246__auto___18070 < len__14245__auto___18069)){
args18016.push((arguments[i__14246__auto___18070]));

var G__18071 = (i__14246__auto___18070 + (1));
i__14246__auto___18070 = G__18071;
continue;
} else {
}
break;
}

var G__18018 = args18016.length;
switch (G__18018) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18016.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17395__auto___18073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___18073,tc,fc){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___18073,tc,fc){
return (function (state_18044){
var state_val_18045 = (state_18044[(1)]);
if((state_val_18045 === (7))){
var inst_18040 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18046_18074 = state_18044__$1;
(statearr_18046_18074[(2)] = inst_18040);

(statearr_18046_18074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (1))){
var state_18044__$1 = state_18044;
var statearr_18047_18075 = state_18044__$1;
(statearr_18047_18075[(2)] = null);

(statearr_18047_18075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (4))){
var inst_18021 = (state_18044[(7)]);
var inst_18021__$1 = (state_18044[(2)]);
var inst_18022 = (inst_18021__$1 == null);
var state_18044__$1 = (function (){var statearr_18048 = state_18044;
(statearr_18048[(7)] = inst_18021__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_18022)){
var statearr_18049_18076 = state_18044__$1;
(statearr_18049_18076[(1)] = (5));

} else {
var statearr_18050_18077 = state_18044__$1;
(statearr_18050_18077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (13))){
var state_18044__$1 = state_18044;
var statearr_18051_18078 = state_18044__$1;
(statearr_18051_18078[(2)] = null);

(statearr_18051_18078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (6))){
var inst_18021 = (state_18044[(7)]);
var inst_18027 = p.call(null,inst_18021);
var state_18044__$1 = state_18044;
if(cljs.core.truth_(inst_18027)){
var statearr_18052_18079 = state_18044__$1;
(statearr_18052_18079[(1)] = (9));

} else {
var statearr_18053_18080 = state_18044__$1;
(statearr_18053_18080[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (3))){
var inst_18042 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18044__$1,inst_18042);
} else {
if((state_val_18045 === (12))){
var state_18044__$1 = state_18044;
var statearr_18054_18081 = state_18044__$1;
(statearr_18054_18081[(2)] = null);

(statearr_18054_18081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (2))){
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18044__$1,(4),ch);
} else {
if((state_val_18045 === (11))){
var inst_18021 = (state_18044[(7)]);
var inst_18031 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18044__$1,(8),inst_18031,inst_18021);
} else {
if((state_val_18045 === (9))){
var state_18044__$1 = state_18044;
var statearr_18055_18082 = state_18044__$1;
(statearr_18055_18082[(2)] = tc);

(statearr_18055_18082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (5))){
var inst_18024 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18025 = cljs.core.async.close_BANG_.call(null,fc);
var state_18044__$1 = (function (){var statearr_18056 = state_18044;
(statearr_18056[(8)] = inst_18024);

return statearr_18056;
})();
var statearr_18057_18083 = state_18044__$1;
(statearr_18057_18083[(2)] = inst_18025);

(statearr_18057_18083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (14))){
var inst_18038 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18058_18084 = state_18044__$1;
(statearr_18058_18084[(2)] = inst_18038);

(statearr_18058_18084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (10))){
var state_18044__$1 = state_18044;
var statearr_18059_18085 = state_18044__$1;
(statearr_18059_18085[(2)] = fc);

(statearr_18059_18085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (8))){
var inst_18033 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
if(cljs.core.truth_(inst_18033)){
var statearr_18060_18086 = state_18044__$1;
(statearr_18060_18086[(1)] = (12));

} else {
var statearr_18061_18087 = state_18044__$1;
(statearr_18061_18087[(1)] = (13));

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
});})(c__17395__auto___18073,tc,fc))
;
return ((function (switch__17283__auto__,c__17395__auto___18073,tc,fc){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_18065 = [null,null,null,null,null,null,null,null,null];
(statearr_18065[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_18065[(1)] = (1));

return statearr_18065;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_18044){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_18044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e18066){if((e18066 instanceof Object)){
var ex__17287__auto__ = e18066;
var statearr_18067_18088 = state_18044;
(statearr_18067_18088[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18089 = state_18044;
state_18044 = G__18089;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_18044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_18044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___18073,tc,fc))
})();
var state__17397__auto__ = (function (){var statearr_18068 = f__17396__auto__.call(null);
(statearr_18068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___18073);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___18073,tc,fc))
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
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_18153){
var state_val_18154 = (state_18153[(1)]);
if((state_val_18154 === (7))){
var inst_18149 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
var statearr_18155_18176 = state_18153__$1;
(statearr_18155_18176[(2)] = inst_18149);

(statearr_18155_18176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (1))){
var inst_18133 = init;
var state_18153__$1 = (function (){var statearr_18156 = state_18153;
(statearr_18156[(7)] = inst_18133);

return statearr_18156;
})();
var statearr_18157_18177 = state_18153__$1;
(statearr_18157_18177[(2)] = null);

(statearr_18157_18177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (4))){
var inst_18136 = (state_18153[(8)]);
var inst_18136__$1 = (state_18153[(2)]);
var inst_18137 = (inst_18136__$1 == null);
var state_18153__$1 = (function (){var statearr_18158 = state_18153;
(statearr_18158[(8)] = inst_18136__$1);

return statearr_18158;
})();
if(cljs.core.truth_(inst_18137)){
var statearr_18159_18178 = state_18153__$1;
(statearr_18159_18178[(1)] = (5));

} else {
var statearr_18160_18179 = state_18153__$1;
(statearr_18160_18179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (6))){
var inst_18133 = (state_18153[(7)]);
var inst_18140 = (state_18153[(9)]);
var inst_18136 = (state_18153[(8)]);
var inst_18140__$1 = f.call(null,inst_18133,inst_18136);
var inst_18141 = cljs.core.reduced_QMARK_.call(null,inst_18140__$1);
var state_18153__$1 = (function (){var statearr_18161 = state_18153;
(statearr_18161[(9)] = inst_18140__$1);

return statearr_18161;
})();
if(inst_18141){
var statearr_18162_18180 = state_18153__$1;
(statearr_18162_18180[(1)] = (8));

} else {
var statearr_18163_18181 = state_18153__$1;
(statearr_18163_18181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (3))){
var inst_18151 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18153__$1,inst_18151);
} else {
if((state_val_18154 === (2))){
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18153__$1,(4),ch);
} else {
if((state_val_18154 === (9))){
var inst_18140 = (state_18153[(9)]);
var inst_18133 = inst_18140;
var state_18153__$1 = (function (){var statearr_18164 = state_18153;
(statearr_18164[(7)] = inst_18133);

return statearr_18164;
})();
var statearr_18165_18182 = state_18153__$1;
(statearr_18165_18182[(2)] = null);

(statearr_18165_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (5))){
var inst_18133 = (state_18153[(7)]);
var state_18153__$1 = state_18153;
var statearr_18166_18183 = state_18153__$1;
(statearr_18166_18183[(2)] = inst_18133);

(statearr_18166_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (10))){
var inst_18147 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
var statearr_18167_18184 = state_18153__$1;
(statearr_18167_18184[(2)] = inst_18147);

(statearr_18167_18184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (8))){
var inst_18140 = (state_18153[(9)]);
var inst_18143 = cljs.core.deref.call(null,inst_18140);
var state_18153__$1 = state_18153;
var statearr_18168_18185 = state_18153__$1;
(statearr_18168_18185[(2)] = inst_18143);

(statearr_18168_18185[(1)] = (10));


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
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17284__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17284__auto____0 = (function (){
var statearr_18172 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18172[(0)] = cljs$core$async$reduce_$_state_machine__17284__auto__);

(statearr_18172[(1)] = (1));

return statearr_18172;
});
var cljs$core$async$reduce_$_state_machine__17284__auto____1 = (function (state_18153){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_18153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e18173){if((e18173 instanceof Object)){
var ex__17287__auto__ = e18173;
var statearr_18174_18186 = state_18153;
(statearr_18174_18186[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18187 = state_18153;
state_18153 = G__18187;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17284__auto__ = function(state_18153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17284__auto____1.call(this,state_18153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17284__auto____0;
cljs$core$async$reduce_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17284__auto____1;
return cljs$core$async$reduce_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_18175 = f__17396__auto__.call(null);
(statearr_18175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_18175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
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
var args18188 = [];
var len__14245__auto___18240 = arguments.length;
var i__14246__auto___18241 = (0);
while(true){
if((i__14246__auto___18241 < len__14245__auto___18240)){
args18188.push((arguments[i__14246__auto___18241]));

var G__18242 = (i__14246__auto___18241 + (1));
i__14246__auto___18241 = G__18242;
continue;
} else {
}
break;
}

var G__18190 = args18188.length;
switch (G__18190) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18188.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_18215){
var state_val_18216 = (state_18215[(1)]);
if((state_val_18216 === (7))){
var inst_18197 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18217_18244 = state_18215__$1;
(statearr_18217_18244[(2)] = inst_18197);

(statearr_18217_18244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (1))){
var inst_18191 = cljs.core.seq.call(null,coll);
var inst_18192 = inst_18191;
var state_18215__$1 = (function (){var statearr_18218 = state_18215;
(statearr_18218[(7)] = inst_18192);

return statearr_18218;
})();
var statearr_18219_18245 = state_18215__$1;
(statearr_18219_18245[(2)] = null);

(statearr_18219_18245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (4))){
var inst_18192 = (state_18215[(7)]);
var inst_18195 = cljs.core.first.call(null,inst_18192);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18215__$1,(7),ch,inst_18195);
} else {
if((state_val_18216 === (13))){
var inst_18209 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18220_18246 = state_18215__$1;
(statearr_18220_18246[(2)] = inst_18209);

(statearr_18220_18246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (6))){
var inst_18200 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
if(cljs.core.truth_(inst_18200)){
var statearr_18221_18247 = state_18215__$1;
(statearr_18221_18247[(1)] = (8));

} else {
var statearr_18222_18248 = state_18215__$1;
(statearr_18222_18248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (3))){
var inst_18213 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18215__$1,inst_18213);
} else {
if((state_val_18216 === (12))){
var state_18215__$1 = state_18215;
var statearr_18223_18249 = state_18215__$1;
(statearr_18223_18249[(2)] = null);

(statearr_18223_18249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (2))){
var inst_18192 = (state_18215[(7)]);
var state_18215__$1 = state_18215;
if(cljs.core.truth_(inst_18192)){
var statearr_18224_18250 = state_18215__$1;
(statearr_18224_18250[(1)] = (4));

} else {
var statearr_18225_18251 = state_18215__$1;
(statearr_18225_18251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (11))){
var inst_18206 = cljs.core.async.close_BANG_.call(null,ch);
var state_18215__$1 = state_18215;
var statearr_18226_18252 = state_18215__$1;
(statearr_18226_18252[(2)] = inst_18206);

(statearr_18226_18252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (9))){
var state_18215__$1 = state_18215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18227_18253 = state_18215__$1;
(statearr_18227_18253[(1)] = (11));

} else {
var statearr_18228_18254 = state_18215__$1;
(statearr_18228_18254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (5))){
var inst_18192 = (state_18215[(7)]);
var state_18215__$1 = state_18215;
var statearr_18229_18255 = state_18215__$1;
(statearr_18229_18255[(2)] = inst_18192);

(statearr_18229_18255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (10))){
var inst_18211 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18230_18256 = state_18215__$1;
(statearr_18230_18256[(2)] = inst_18211);

(statearr_18230_18256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (8))){
var inst_18192 = (state_18215[(7)]);
var inst_18202 = cljs.core.next.call(null,inst_18192);
var inst_18192__$1 = inst_18202;
var state_18215__$1 = (function (){var statearr_18231 = state_18215;
(statearr_18231[(7)] = inst_18192__$1);

return statearr_18231;
})();
var statearr_18232_18257 = state_18215__$1;
(statearr_18232_18257[(2)] = null);

(statearr_18232_18257[(1)] = (2));


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
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_18236 = [null,null,null,null,null,null,null,null];
(statearr_18236[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_18236[(1)] = (1));

return statearr_18236;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_18215){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_18215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e18237){if((e18237 instanceof Object)){
var ex__17287__auto__ = e18237;
var statearr_18238_18258 = state_18215;
(statearr_18238_18258[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18259 = state_18215;
state_18215 = G__18259;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_18215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_18215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_18239 = f__17396__auto__.call(null);
(statearr_18239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_18239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18481 = (function (mult,ch,cs,meta18482){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18482 = meta18482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18483,meta18482__$1){
var self__ = this;
var _18483__$1 = this;
return (new cljs.core.async.t_cljs$core$async18481(self__.mult,self__.ch,self__.cs,meta18482__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18483){
var self__ = this;
var _18483__$1 = this;
return self__.meta18482;
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18482","meta18482",-356837969,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18481";

cljs.core.async.t_cljs$core$async18481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18481");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18481(mult__$1,ch__$1,cs__$1,meta18482){
return (new cljs.core.async.t_cljs$core$async18481(mult__$1,ch__$1,cs__$1,meta18482));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18481(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17395__auto___18702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___18702,cs,m,dchan,dctr,done){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___18702,cs,m,dchan,dctr,done){
return (function (state_18614){
var state_val_18615 = (state_18614[(1)]);
if((state_val_18615 === (7))){
var inst_18610 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18616_18703 = state_18614__$1;
(statearr_18616_18703[(2)] = inst_18610);

(statearr_18616_18703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (20))){
var inst_18515 = (state_18614[(7)]);
var inst_18525 = cljs.core.first.call(null,inst_18515);
var inst_18526 = cljs.core.nth.call(null,inst_18525,(0),null);
var inst_18527 = cljs.core.nth.call(null,inst_18525,(1),null);
var state_18614__$1 = (function (){var statearr_18617 = state_18614;
(statearr_18617[(8)] = inst_18526);

return statearr_18617;
})();
if(cljs.core.truth_(inst_18527)){
var statearr_18618_18704 = state_18614__$1;
(statearr_18618_18704[(1)] = (22));

} else {
var statearr_18619_18705 = state_18614__$1;
(statearr_18619_18705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (27))){
var inst_18557 = (state_18614[(9)]);
var inst_18486 = (state_18614[(10)]);
var inst_18562 = (state_18614[(11)]);
var inst_18555 = (state_18614[(12)]);
var inst_18562__$1 = cljs.core._nth.call(null,inst_18555,inst_18557);
var inst_18563 = cljs.core.async.put_BANG_.call(null,inst_18562__$1,inst_18486,done);
var state_18614__$1 = (function (){var statearr_18620 = state_18614;
(statearr_18620[(11)] = inst_18562__$1);

return statearr_18620;
})();
if(cljs.core.truth_(inst_18563)){
var statearr_18621_18706 = state_18614__$1;
(statearr_18621_18706[(1)] = (30));

} else {
var statearr_18622_18707 = state_18614__$1;
(statearr_18622_18707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (1))){
var state_18614__$1 = state_18614;
var statearr_18623_18708 = state_18614__$1;
(statearr_18623_18708[(2)] = null);

(statearr_18623_18708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (24))){
var inst_18515 = (state_18614[(7)]);
var inst_18532 = (state_18614[(2)]);
var inst_18533 = cljs.core.next.call(null,inst_18515);
var inst_18495 = inst_18533;
var inst_18496 = null;
var inst_18497 = (0);
var inst_18498 = (0);
var state_18614__$1 = (function (){var statearr_18624 = state_18614;
(statearr_18624[(13)] = inst_18498);

(statearr_18624[(14)] = inst_18495);

(statearr_18624[(15)] = inst_18497);

(statearr_18624[(16)] = inst_18532);

(statearr_18624[(17)] = inst_18496);

return statearr_18624;
})();
var statearr_18625_18709 = state_18614__$1;
(statearr_18625_18709[(2)] = null);

(statearr_18625_18709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (39))){
var state_18614__$1 = state_18614;
var statearr_18629_18710 = state_18614__$1;
(statearr_18629_18710[(2)] = null);

(statearr_18629_18710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (4))){
var inst_18486 = (state_18614[(10)]);
var inst_18486__$1 = (state_18614[(2)]);
var inst_18487 = (inst_18486__$1 == null);
var state_18614__$1 = (function (){var statearr_18630 = state_18614;
(statearr_18630[(10)] = inst_18486__$1);

return statearr_18630;
})();
if(cljs.core.truth_(inst_18487)){
var statearr_18631_18711 = state_18614__$1;
(statearr_18631_18711[(1)] = (5));

} else {
var statearr_18632_18712 = state_18614__$1;
(statearr_18632_18712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (15))){
var inst_18498 = (state_18614[(13)]);
var inst_18495 = (state_18614[(14)]);
var inst_18497 = (state_18614[(15)]);
var inst_18496 = (state_18614[(17)]);
var inst_18511 = (state_18614[(2)]);
var inst_18512 = (inst_18498 + (1));
var tmp18626 = inst_18495;
var tmp18627 = inst_18497;
var tmp18628 = inst_18496;
var inst_18495__$1 = tmp18626;
var inst_18496__$1 = tmp18628;
var inst_18497__$1 = tmp18627;
var inst_18498__$1 = inst_18512;
var state_18614__$1 = (function (){var statearr_18633 = state_18614;
(statearr_18633[(18)] = inst_18511);

(statearr_18633[(13)] = inst_18498__$1);

(statearr_18633[(14)] = inst_18495__$1);

(statearr_18633[(15)] = inst_18497__$1);

(statearr_18633[(17)] = inst_18496__$1);

return statearr_18633;
})();
var statearr_18634_18713 = state_18614__$1;
(statearr_18634_18713[(2)] = null);

(statearr_18634_18713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (21))){
var inst_18536 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18638_18714 = state_18614__$1;
(statearr_18638_18714[(2)] = inst_18536);

(statearr_18638_18714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (31))){
var inst_18562 = (state_18614[(11)]);
var inst_18566 = done.call(null,null);
var inst_18567 = cljs.core.async.untap_STAR_.call(null,m,inst_18562);
var state_18614__$1 = (function (){var statearr_18639 = state_18614;
(statearr_18639[(19)] = inst_18566);

return statearr_18639;
})();
var statearr_18640_18715 = state_18614__$1;
(statearr_18640_18715[(2)] = inst_18567);

(statearr_18640_18715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (32))){
var inst_18557 = (state_18614[(9)]);
var inst_18554 = (state_18614[(20)]);
var inst_18556 = (state_18614[(21)]);
var inst_18555 = (state_18614[(12)]);
var inst_18569 = (state_18614[(2)]);
var inst_18570 = (inst_18557 + (1));
var tmp18635 = inst_18554;
var tmp18636 = inst_18556;
var tmp18637 = inst_18555;
var inst_18554__$1 = tmp18635;
var inst_18555__$1 = tmp18637;
var inst_18556__$1 = tmp18636;
var inst_18557__$1 = inst_18570;
var state_18614__$1 = (function (){var statearr_18641 = state_18614;
(statearr_18641[(9)] = inst_18557__$1);

(statearr_18641[(20)] = inst_18554__$1);

(statearr_18641[(21)] = inst_18556__$1);

(statearr_18641[(12)] = inst_18555__$1);

(statearr_18641[(22)] = inst_18569);

return statearr_18641;
})();
var statearr_18642_18716 = state_18614__$1;
(statearr_18642_18716[(2)] = null);

(statearr_18642_18716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (40))){
var inst_18582 = (state_18614[(23)]);
var inst_18586 = done.call(null,null);
var inst_18587 = cljs.core.async.untap_STAR_.call(null,m,inst_18582);
var state_18614__$1 = (function (){var statearr_18643 = state_18614;
(statearr_18643[(24)] = inst_18586);

return statearr_18643;
})();
var statearr_18644_18717 = state_18614__$1;
(statearr_18644_18717[(2)] = inst_18587);

(statearr_18644_18717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (33))){
var inst_18573 = (state_18614[(25)]);
var inst_18575 = cljs.core.chunked_seq_QMARK_.call(null,inst_18573);
var state_18614__$1 = state_18614;
if(inst_18575){
var statearr_18645_18718 = state_18614__$1;
(statearr_18645_18718[(1)] = (36));

} else {
var statearr_18646_18719 = state_18614__$1;
(statearr_18646_18719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (13))){
var inst_18505 = (state_18614[(26)]);
var inst_18508 = cljs.core.async.close_BANG_.call(null,inst_18505);
var state_18614__$1 = state_18614;
var statearr_18647_18720 = state_18614__$1;
(statearr_18647_18720[(2)] = inst_18508);

(statearr_18647_18720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (22))){
var inst_18526 = (state_18614[(8)]);
var inst_18529 = cljs.core.async.close_BANG_.call(null,inst_18526);
var state_18614__$1 = state_18614;
var statearr_18648_18721 = state_18614__$1;
(statearr_18648_18721[(2)] = inst_18529);

(statearr_18648_18721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (36))){
var inst_18573 = (state_18614[(25)]);
var inst_18577 = cljs.core.chunk_first.call(null,inst_18573);
var inst_18578 = cljs.core.chunk_rest.call(null,inst_18573);
var inst_18579 = cljs.core.count.call(null,inst_18577);
var inst_18554 = inst_18578;
var inst_18555 = inst_18577;
var inst_18556 = inst_18579;
var inst_18557 = (0);
var state_18614__$1 = (function (){var statearr_18649 = state_18614;
(statearr_18649[(9)] = inst_18557);

(statearr_18649[(20)] = inst_18554);

(statearr_18649[(21)] = inst_18556);

(statearr_18649[(12)] = inst_18555);

return statearr_18649;
})();
var statearr_18650_18722 = state_18614__$1;
(statearr_18650_18722[(2)] = null);

(statearr_18650_18722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (41))){
var inst_18573 = (state_18614[(25)]);
var inst_18589 = (state_18614[(2)]);
var inst_18590 = cljs.core.next.call(null,inst_18573);
var inst_18554 = inst_18590;
var inst_18555 = null;
var inst_18556 = (0);
var inst_18557 = (0);
var state_18614__$1 = (function (){var statearr_18651 = state_18614;
(statearr_18651[(9)] = inst_18557);

(statearr_18651[(27)] = inst_18589);

(statearr_18651[(20)] = inst_18554);

(statearr_18651[(21)] = inst_18556);

(statearr_18651[(12)] = inst_18555);

return statearr_18651;
})();
var statearr_18652_18723 = state_18614__$1;
(statearr_18652_18723[(2)] = null);

(statearr_18652_18723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (43))){
var state_18614__$1 = state_18614;
var statearr_18653_18724 = state_18614__$1;
(statearr_18653_18724[(2)] = null);

(statearr_18653_18724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (29))){
var inst_18598 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18654_18725 = state_18614__$1;
(statearr_18654_18725[(2)] = inst_18598);

(statearr_18654_18725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (44))){
var inst_18607 = (state_18614[(2)]);
var state_18614__$1 = (function (){var statearr_18655 = state_18614;
(statearr_18655[(28)] = inst_18607);

return statearr_18655;
})();
var statearr_18656_18726 = state_18614__$1;
(statearr_18656_18726[(2)] = null);

(statearr_18656_18726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (6))){
var inst_18546 = (state_18614[(29)]);
var inst_18545 = cljs.core.deref.call(null,cs);
var inst_18546__$1 = cljs.core.keys.call(null,inst_18545);
var inst_18547 = cljs.core.count.call(null,inst_18546__$1);
var inst_18548 = cljs.core.reset_BANG_.call(null,dctr,inst_18547);
var inst_18553 = cljs.core.seq.call(null,inst_18546__$1);
var inst_18554 = inst_18553;
var inst_18555 = null;
var inst_18556 = (0);
var inst_18557 = (0);
var state_18614__$1 = (function (){var statearr_18657 = state_18614;
(statearr_18657[(9)] = inst_18557);

(statearr_18657[(20)] = inst_18554);

(statearr_18657[(21)] = inst_18556);

(statearr_18657[(29)] = inst_18546__$1);

(statearr_18657[(30)] = inst_18548);

(statearr_18657[(12)] = inst_18555);

return statearr_18657;
})();
var statearr_18658_18727 = state_18614__$1;
(statearr_18658_18727[(2)] = null);

(statearr_18658_18727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (28))){
var inst_18573 = (state_18614[(25)]);
var inst_18554 = (state_18614[(20)]);
var inst_18573__$1 = cljs.core.seq.call(null,inst_18554);
var state_18614__$1 = (function (){var statearr_18659 = state_18614;
(statearr_18659[(25)] = inst_18573__$1);

return statearr_18659;
})();
if(inst_18573__$1){
var statearr_18660_18728 = state_18614__$1;
(statearr_18660_18728[(1)] = (33));

} else {
var statearr_18661_18729 = state_18614__$1;
(statearr_18661_18729[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (25))){
var inst_18557 = (state_18614[(9)]);
var inst_18556 = (state_18614[(21)]);
var inst_18559 = (inst_18557 < inst_18556);
var inst_18560 = inst_18559;
var state_18614__$1 = state_18614;
if(cljs.core.truth_(inst_18560)){
var statearr_18662_18730 = state_18614__$1;
(statearr_18662_18730[(1)] = (27));

} else {
var statearr_18663_18731 = state_18614__$1;
(statearr_18663_18731[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (34))){
var state_18614__$1 = state_18614;
var statearr_18664_18732 = state_18614__$1;
(statearr_18664_18732[(2)] = null);

(statearr_18664_18732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (17))){
var state_18614__$1 = state_18614;
var statearr_18665_18733 = state_18614__$1;
(statearr_18665_18733[(2)] = null);

(statearr_18665_18733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (3))){
var inst_18612 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18614__$1,inst_18612);
} else {
if((state_val_18615 === (12))){
var inst_18541 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18666_18734 = state_18614__$1;
(statearr_18666_18734[(2)] = inst_18541);

(statearr_18666_18734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (2))){
var state_18614__$1 = state_18614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18614__$1,(4),ch);
} else {
if((state_val_18615 === (23))){
var state_18614__$1 = state_18614;
var statearr_18667_18735 = state_18614__$1;
(statearr_18667_18735[(2)] = null);

(statearr_18667_18735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (35))){
var inst_18596 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18668_18736 = state_18614__$1;
(statearr_18668_18736[(2)] = inst_18596);

(statearr_18668_18736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (19))){
var inst_18515 = (state_18614[(7)]);
var inst_18519 = cljs.core.chunk_first.call(null,inst_18515);
var inst_18520 = cljs.core.chunk_rest.call(null,inst_18515);
var inst_18521 = cljs.core.count.call(null,inst_18519);
var inst_18495 = inst_18520;
var inst_18496 = inst_18519;
var inst_18497 = inst_18521;
var inst_18498 = (0);
var state_18614__$1 = (function (){var statearr_18669 = state_18614;
(statearr_18669[(13)] = inst_18498);

(statearr_18669[(14)] = inst_18495);

(statearr_18669[(15)] = inst_18497);

(statearr_18669[(17)] = inst_18496);

return statearr_18669;
})();
var statearr_18670_18737 = state_18614__$1;
(statearr_18670_18737[(2)] = null);

(statearr_18670_18737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (11))){
var inst_18495 = (state_18614[(14)]);
var inst_18515 = (state_18614[(7)]);
var inst_18515__$1 = cljs.core.seq.call(null,inst_18495);
var state_18614__$1 = (function (){var statearr_18671 = state_18614;
(statearr_18671[(7)] = inst_18515__$1);

return statearr_18671;
})();
if(inst_18515__$1){
var statearr_18672_18738 = state_18614__$1;
(statearr_18672_18738[(1)] = (16));

} else {
var statearr_18673_18739 = state_18614__$1;
(statearr_18673_18739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (9))){
var inst_18543 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18674_18740 = state_18614__$1;
(statearr_18674_18740[(2)] = inst_18543);

(statearr_18674_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (5))){
var inst_18493 = cljs.core.deref.call(null,cs);
var inst_18494 = cljs.core.seq.call(null,inst_18493);
var inst_18495 = inst_18494;
var inst_18496 = null;
var inst_18497 = (0);
var inst_18498 = (0);
var state_18614__$1 = (function (){var statearr_18675 = state_18614;
(statearr_18675[(13)] = inst_18498);

(statearr_18675[(14)] = inst_18495);

(statearr_18675[(15)] = inst_18497);

(statearr_18675[(17)] = inst_18496);

return statearr_18675;
})();
var statearr_18676_18741 = state_18614__$1;
(statearr_18676_18741[(2)] = null);

(statearr_18676_18741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (14))){
var state_18614__$1 = state_18614;
var statearr_18677_18742 = state_18614__$1;
(statearr_18677_18742[(2)] = null);

(statearr_18677_18742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (45))){
var inst_18604 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18678_18743 = state_18614__$1;
(statearr_18678_18743[(2)] = inst_18604);

(statearr_18678_18743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (26))){
var inst_18546 = (state_18614[(29)]);
var inst_18600 = (state_18614[(2)]);
var inst_18601 = cljs.core.seq.call(null,inst_18546);
var state_18614__$1 = (function (){var statearr_18679 = state_18614;
(statearr_18679[(31)] = inst_18600);

return statearr_18679;
})();
if(inst_18601){
var statearr_18680_18744 = state_18614__$1;
(statearr_18680_18744[(1)] = (42));

} else {
var statearr_18681_18745 = state_18614__$1;
(statearr_18681_18745[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (16))){
var inst_18515 = (state_18614[(7)]);
var inst_18517 = cljs.core.chunked_seq_QMARK_.call(null,inst_18515);
var state_18614__$1 = state_18614;
if(inst_18517){
var statearr_18682_18746 = state_18614__$1;
(statearr_18682_18746[(1)] = (19));

} else {
var statearr_18683_18747 = state_18614__$1;
(statearr_18683_18747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (38))){
var inst_18593 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18684_18748 = state_18614__$1;
(statearr_18684_18748[(2)] = inst_18593);

(statearr_18684_18748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (30))){
var state_18614__$1 = state_18614;
var statearr_18685_18749 = state_18614__$1;
(statearr_18685_18749[(2)] = null);

(statearr_18685_18749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (10))){
var inst_18498 = (state_18614[(13)]);
var inst_18496 = (state_18614[(17)]);
var inst_18504 = cljs.core._nth.call(null,inst_18496,inst_18498);
var inst_18505 = cljs.core.nth.call(null,inst_18504,(0),null);
var inst_18506 = cljs.core.nth.call(null,inst_18504,(1),null);
var state_18614__$1 = (function (){var statearr_18686 = state_18614;
(statearr_18686[(26)] = inst_18505);

return statearr_18686;
})();
if(cljs.core.truth_(inst_18506)){
var statearr_18687_18750 = state_18614__$1;
(statearr_18687_18750[(1)] = (13));

} else {
var statearr_18688_18751 = state_18614__$1;
(statearr_18688_18751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (18))){
var inst_18539 = (state_18614[(2)]);
var state_18614__$1 = state_18614;
var statearr_18689_18752 = state_18614__$1;
(statearr_18689_18752[(2)] = inst_18539);

(statearr_18689_18752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (42))){
var state_18614__$1 = state_18614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18614__$1,(45),dchan);
} else {
if((state_val_18615 === (37))){
var inst_18486 = (state_18614[(10)]);
var inst_18573 = (state_18614[(25)]);
var inst_18582 = (state_18614[(23)]);
var inst_18582__$1 = cljs.core.first.call(null,inst_18573);
var inst_18583 = cljs.core.async.put_BANG_.call(null,inst_18582__$1,inst_18486,done);
var state_18614__$1 = (function (){var statearr_18690 = state_18614;
(statearr_18690[(23)] = inst_18582__$1);

return statearr_18690;
})();
if(cljs.core.truth_(inst_18583)){
var statearr_18691_18753 = state_18614__$1;
(statearr_18691_18753[(1)] = (39));

} else {
var statearr_18692_18754 = state_18614__$1;
(statearr_18692_18754[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18615 === (8))){
var inst_18498 = (state_18614[(13)]);
var inst_18497 = (state_18614[(15)]);
var inst_18500 = (inst_18498 < inst_18497);
var inst_18501 = inst_18500;
var state_18614__$1 = state_18614;
if(cljs.core.truth_(inst_18501)){
var statearr_18693_18755 = state_18614__$1;
(statearr_18693_18755[(1)] = (10));

} else {
var statearr_18694_18756 = state_18614__$1;
(statearr_18694_18756[(1)] = (11));

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
});})(c__17395__auto___18702,cs,m,dchan,dctr,done))
;
return ((function (switch__17283__auto__,c__17395__auto___18702,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17284__auto__ = null;
var cljs$core$async$mult_$_state_machine__17284__auto____0 = (function (){
var statearr_18698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18698[(0)] = cljs$core$async$mult_$_state_machine__17284__auto__);

(statearr_18698[(1)] = (1));

return statearr_18698;
});
var cljs$core$async$mult_$_state_machine__17284__auto____1 = (function (state_18614){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_18614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e18699){if((e18699 instanceof Object)){
var ex__17287__auto__ = e18699;
var statearr_18700_18757 = state_18614;
(statearr_18700_18757[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18758 = state_18614;
state_18614 = G__18758;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17284__auto__ = function(state_18614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17284__auto____1.call(this,state_18614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17284__auto____0;
cljs$core$async$mult_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17284__auto____1;
return cljs$core$async$mult_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___18702,cs,m,dchan,dctr,done))
})();
var state__17397__auto__ = (function (){var statearr_18701 = f__17396__auto__.call(null);
(statearr_18701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___18702);

return statearr_18701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___18702,cs,m,dchan,dctr,done))
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
var args18759 = [];
var len__14245__auto___18762 = arguments.length;
var i__14246__auto___18763 = (0);
while(true){
if((i__14246__auto___18763 < len__14245__auto___18762)){
args18759.push((arguments[i__14246__auto___18763]));

var G__18764 = (i__14246__auto___18763 + (1));
i__14246__auto___18763 = G__18764;
continue;
} else {
}
break;
}

var G__18761 = args18759.length;
switch (G__18761) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18759.length)].join('')));

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
var len__14245__auto___18776 = arguments.length;
var i__14246__auto___18777 = (0);
while(true){
if((i__14246__auto___18777 < len__14245__auto___18776)){
args__14252__auto__.push((arguments[i__14246__auto___18777]));

var G__18778 = (i__14246__auto___18777 + (1));
i__14246__auto___18777 = G__18778;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((3) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14253__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18770){
var map__18771 = p__18770;
var map__18771__$1 = ((((!((map__18771 == null)))?((((map__18771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18771):map__18771);
var opts = map__18771__$1;
var statearr_18773_18779 = state;
(statearr_18773_18779[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18771,map__18771__$1,opts){
return (function (val){
var statearr_18774_18780 = state;
(statearr_18774_18780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18771,map__18771__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18775_18781 = state;
(statearr_18775_18781[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18766){
var G__18767 = cljs.core.first.call(null,seq18766);
var seq18766__$1 = cljs.core.next.call(null,seq18766);
var G__18768 = cljs.core.first.call(null,seq18766__$1);
var seq18766__$2 = cljs.core.next.call(null,seq18766__$1);
var G__18769 = cljs.core.first.call(null,seq18766__$2);
var seq18766__$3 = cljs.core.next.call(null,seq18766__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18767,G__18768,G__18769,seq18766__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18945 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18946){
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
this.meta18946 = meta18946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18947,meta18946__$1){
var self__ = this;
var _18947__$1 = this;
return (new cljs.core.async.t_cljs$core$async18945(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18947){
var self__ = this;
var _18947__$1 = this;
return self__.meta18946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18945.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18946","meta18946",-919277047,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18945";

cljs.core.async.t_cljs$core$async18945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async18945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18946){
return (new cljs.core.async.t_cljs$core$async18945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18945(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17395__auto___19108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19045){
var state_val_19046 = (state_19045[(1)]);
if((state_val_19046 === (7))){
var inst_18963 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19047_19109 = state_19045__$1;
(statearr_19047_19109[(2)] = inst_18963);

(statearr_19047_19109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (20))){
var inst_18975 = (state_19045[(7)]);
var state_19045__$1 = state_19045;
var statearr_19048_19110 = state_19045__$1;
(statearr_19048_19110[(2)] = inst_18975);

(statearr_19048_19110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (27))){
var state_19045__$1 = state_19045;
var statearr_19049_19111 = state_19045__$1;
(statearr_19049_19111[(2)] = null);

(statearr_19049_19111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (1))){
var inst_18951 = (state_19045[(8)]);
var inst_18951__$1 = calc_state.call(null);
var inst_18953 = (inst_18951__$1 == null);
var inst_18954 = cljs.core.not.call(null,inst_18953);
var state_19045__$1 = (function (){var statearr_19050 = state_19045;
(statearr_19050[(8)] = inst_18951__$1);

return statearr_19050;
})();
if(inst_18954){
var statearr_19051_19112 = state_19045__$1;
(statearr_19051_19112[(1)] = (2));

} else {
var statearr_19052_19113 = state_19045__$1;
(statearr_19052_19113[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (24))){
var inst_19005 = (state_19045[(9)]);
var inst_19019 = (state_19045[(10)]);
var inst_18998 = (state_19045[(11)]);
var inst_19019__$1 = inst_18998.call(null,inst_19005);
var state_19045__$1 = (function (){var statearr_19053 = state_19045;
(statearr_19053[(10)] = inst_19019__$1);

return statearr_19053;
})();
if(cljs.core.truth_(inst_19019__$1)){
var statearr_19054_19114 = state_19045__$1;
(statearr_19054_19114[(1)] = (29));

} else {
var statearr_19055_19115 = state_19045__$1;
(statearr_19055_19115[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (4))){
var inst_18966 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_18966)){
var statearr_19056_19116 = state_19045__$1;
(statearr_19056_19116[(1)] = (8));

} else {
var statearr_19057_19117 = state_19045__$1;
(statearr_19057_19117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (15))){
var inst_18992 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_18992)){
var statearr_19058_19118 = state_19045__$1;
(statearr_19058_19118[(1)] = (19));

} else {
var statearr_19059_19119 = state_19045__$1;
(statearr_19059_19119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (21))){
var inst_18997 = (state_19045[(12)]);
var inst_18997__$1 = (state_19045[(2)]);
var inst_18998 = cljs.core.get.call(null,inst_18997__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18999 = cljs.core.get.call(null,inst_18997__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19000 = cljs.core.get.call(null,inst_18997__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19045__$1 = (function (){var statearr_19060 = state_19045;
(statearr_19060[(13)] = inst_18999);

(statearr_19060[(12)] = inst_18997__$1);

(statearr_19060[(11)] = inst_18998);

return statearr_19060;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19045__$1,(22),inst_19000);
} else {
if((state_val_19046 === (31))){
var inst_19027 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_19027)){
var statearr_19061_19120 = state_19045__$1;
(statearr_19061_19120[(1)] = (32));

} else {
var statearr_19062_19121 = state_19045__$1;
(statearr_19062_19121[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (32))){
var inst_19004 = (state_19045[(14)]);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19045__$1,(35),out,inst_19004);
} else {
if((state_val_19046 === (33))){
var inst_18997 = (state_19045[(12)]);
var inst_18975 = inst_18997;
var state_19045__$1 = (function (){var statearr_19063 = state_19045;
(statearr_19063[(7)] = inst_18975);

return statearr_19063;
})();
var statearr_19064_19122 = state_19045__$1;
(statearr_19064_19122[(2)] = null);

(statearr_19064_19122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (13))){
var inst_18975 = (state_19045[(7)]);
var inst_18982 = inst_18975.cljs$lang$protocol_mask$partition0$;
var inst_18983 = (inst_18982 & (64));
var inst_18984 = inst_18975.cljs$core$ISeq$;
var inst_18985 = (inst_18983) || (inst_18984);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_18985)){
var statearr_19065_19123 = state_19045__$1;
(statearr_19065_19123[(1)] = (16));

} else {
var statearr_19066_19124 = state_19045__$1;
(statearr_19066_19124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (22))){
var inst_19005 = (state_19045[(9)]);
var inst_19004 = (state_19045[(14)]);
var inst_19003 = (state_19045[(2)]);
var inst_19004__$1 = cljs.core.nth.call(null,inst_19003,(0),null);
var inst_19005__$1 = cljs.core.nth.call(null,inst_19003,(1),null);
var inst_19006 = (inst_19004__$1 == null);
var inst_19007 = cljs.core._EQ_.call(null,inst_19005__$1,change);
var inst_19008 = (inst_19006) || (inst_19007);
var state_19045__$1 = (function (){var statearr_19067 = state_19045;
(statearr_19067[(9)] = inst_19005__$1);

(statearr_19067[(14)] = inst_19004__$1);

return statearr_19067;
})();
if(cljs.core.truth_(inst_19008)){
var statearr_19068_19125 = state_19045__$1;
(statearr_19068_19125[(1)] = (23));

} else {
var statearr_19069_19126 = state_19045__$1;
(statearr_19069_19126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (36))){
var inst_18997 = (state_19045[(12)]);
var inst_18975 = inst_18997;
var state_19045__$1 = (function (){var statearr_19070 = state_19045;
(statearr_19070[(7)] = inst_18975);

return statearr_19070;
})();
var statearr_19071_19127 = state_19045__$1;
(statearr_19071_19127[(2)] = null);

(statearr_19071_19127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (29))){
var inst_19019 = (state_19045[(10)]);
var state_19045__$1 = state_19045;
var statearr_19072_19128 = state_19045__$1;
(statearr_19072_19128[(2)] = inst_19019);

(statearr_19072_19128[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (6))){
var state_19045__$1 = state_19045;
var statearr_19073_19129 = state_19045__$1;
(statearr_19073_19129[(2)] = false);

(statearr_19073_19129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (28))){
var inst_19015 = (state_19045[(2)]);
var inst_19016 = calc_state.call(null);
var inst_18975 = inst_19016;
var state_19045__$1 = (function (){var statearr_19074 = state_19045;
(statearr_19074[(15)] = inst_19015);

(statearr_19074[(7)] = inst_18975);

return statearr_19074;
})();
var statearr_19075_19130 = state_19045__$1;
(statearr_19075_19130[(2)] = null);

(statearr_19075_19130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (25))){
var inst_19041 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19076_19131 = state_19045__$1;
(statearr_19076_19131[(2)] = inst_19041);

(statearr_19076_19131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (34))){
var inst_19039 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19077_19132 = state_19045__$1;
(statearr_19077_19132[(2)] = inst_19039);

(statearr_19077_19132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (17))){
var state_19045__$1 = state_19045;
var statearr_19078_19133 = state_19045__$1;
(statearr_19078_19133[(2)] = false);

(statearr_19078_19133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (3))){
var state_19045__$1 = state_19045;
var statearr_19079_19134 = state_19045__$1;
(statearr_19079_19134[(2)] = false);

(statearr_19079_19134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (12))){
var inst_19043 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19045__$1,inst_19043);
} else {
if((state_val_19046 === (2))){
var inst_18951 = (state_19045[(8)]);
var inst_18956 = inst_18951.cljs$lang$protocol_mask$partition0$;
var inst_18957 = (inst_18956 & (64));
var inst_18958 = inst_18951.cljs$core$ISeq$;
var inst_18959 = (inst_18957) || (inst_18958);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_18959)){
var statearr_19080_19135 = state_19045__$1;
(statearr_19080_19135[(1)] = (5));

} else {
var statearr_19081_19136 = state_19045__$1;
(statearr_19081_19136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (23))){
var inst_19004 = (state_19045[(14)]);
var inst_19010 = (inst_19004 == null);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_19010)){
var statearr_19082_19137 = state_19045__$1;
(statearr_19082_19137[(1)] = (26));

} else {
var statearr_19083_19138 = state_19045__$1;
(statearr_19083_19138[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (35))){
var inst_19030 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_19030)){
var statearr_19084_19139 = state_19045__$1;
(statearr_19084_19139[(1)] = (36));

} else {
var statearr_19085_19140 = state_19045__$1;
(statearr_19085_19140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (19))){
var inst_18975 = (state_19045[(7)]);
var inst_18994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18975);
var state_19045__$1 = state_19045;
var statearr_19086_19141 = state_19045__$1;
(statearr_19086_19141[(2)] = inst_18994);

(statearr_19086_19141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (11))){
var inst_18975 = (state_19045[(7)]);
var inst_18979 = (inst_18975 == null);
var inst_18980 = cljs.core.not.call(null,inst_18979);
var state_19045__$1 = state_19045;
if(inst_18980){
var statearr_19087_19142 = state_19045__$1;
(statearr_19087_19142[(1)] = (13));

} else {
var statearr_19088_19143 = state_19045__$1;
(statearr_19088_19143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (9))){
var inst_18951 = (state_19045[(8)]);
var state_19045__$1 = state_19045;
var statearr_19089_19144 = state_19045__$1;
(statearr_19089_19144[(2)] = inst_18951);

(statearr_19089_19144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (5))){
var state_19045__$1 = state_19045;
var statearr_19090_19145 = state_19045__$1;
(statearr_19090_19145[(2)] = true);

(statearr_19090_19145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (14))){
var state_19045__$1 = state_19045;
var statearr_19091_19146 = state_19045__$1;
(statearr_19091_19146[(2)] = false);

(statearr_19091_19146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (26))){
var inst_19005 = (state_19045[(9)]);
var inst_19012 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19005);
var state_19045__$1 = state_19045;
var statearr_19092_19147 = state_19045__$1;
(statearr_19092_19147[(2)] = inst_19012);

(statearr_19092_19147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (16))){
var state_19045__$1 = state_19045;
var statearr_19093_19148 = state_19045__$1;
(statearr_19093_19148[(2)] = true);

(statearr_19093_19148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (38))){
var inst_19035 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19094_19149 = state_19045__$1;
(statearr_19094_19149[(2)] = inst_19035);

(statearr_19094_19149[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (30))){
var inst_19005 = (state_19045[(9)]);
var inst_18999 = (state_19045[(13)]);
var inst_18998 = (state_19045[(11)]);
var inst_19022 = cljs.core.empty_QMARK_.call(null,inst_18998);
var inst_19023 = inst_18999.call(null,inst_19005);
var inst_19024 = cljs.core.not.call(null,inst_19023);
var inst_19025 = (inst_19022) && (inst_19024);
var state_19045__$1 = state_19045;
var statearr_19095_19150 = state_19045__$1;
(statearr_19095_19150[(2)] = inst_19025);

(statearr_19095_19150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (10))){
var inst_18951 = (state_19045[(8)]);
var inst_18971 = (state_19045[(2)]);
var inst_18972 = cljs.core.get.call(null,inst_18971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18973 = cljs.core.get.call(null,inst_18971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18974 = cljs.core.get.call(null,inst_18971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18975 = inst_18951;
var state_19045__$1 = (function (){var statearr_19096 = state_19045;
(statearr_19096[(16)] = inst_18972);

(statearr_19096[(17)] = inst_18974);

(statearr_19096[(7)] = inst_18975);

(statearr_19096[(18)] = inst_18973);

return statearr_19096;
})();
var statearr_19097_19151 = state_19045__$1;
(statearr_19097_19151[(2)] = null);

(statearr_19097_19151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (18))){
var inst_18989 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19098_19152 = state_19045__$1;
(statearr_19098_19152[(2)] = inst_18989);

(statearr_19098_19152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (37))){
var state_19045__$1 = state_19045;
var statearr_19099_19153 = state_19045__$1;
(statearr_19099_19153[(2)] = null);

(statearr_19099_19153[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (8))){
var inst_18951 = (state_19045[(8)]);
var inst_18968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18951);
var state_19045__$1 = state_19045;
var statearr_19100_19154 = state_19045__$1;
(statearr_19100_19154[(2)] = inst_18968);

(statearr_19100_19154[(1)] = (10));


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
});})(c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17283__auto__,c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17284__auto__ = null;
var cljs$core$async$mix_$_state_machine__17284__auto____0 = (function (){
var statearr_19104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19104[(0)] = cljs$core$async$mix_$_state_machine__17284__auto__);

(statearr_19104[(1)] = (1));

return statearr_19104;
});
var cljs$core$async$mix_$_state_machine__17284__auto____1 = (function (state_19045){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19105){if((e19105 instanceof Object)){
var ex__17287__auto__ = e19105;
var statearr_19106_19155 = state_19045;
(statearr_19106_19155[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19156 = state_19045;
state_19045 = G__19156;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17284__auto__ = function(state_19045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17284__auto____1.call(this,state_19045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17284__auto____0;
cljs$core$async$mix_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17284__auto____1;
return cljs$core$async$mix_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17397__auto__ = (function (){var statearr_19107 = f__17396__auto__.call(null);
(statearr_19107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19108);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19157 = [];
var len__14245__auto___19160 = arguments.length;
var i__14246__auto___19161 = (0);
while(true){
if((i__14246__auto___19161 < len__14245__auto___19160)){
args19157.push((arguments[i__14246__auto___19161]));

var G__19162 = (i__14246__auto___19161 + (1));
i__14246__auto___19161 = G__19162;
continue;
} else {
}
break;
}

var G__19159 = args19157.length;
switch (G__19159) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19157.length)].join('')));

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
var args19165 = [];
var len__14245__auto___19290 = arguments.length;
var i__14246__auto___19291 = (0);
while(true){
if((i__14246__auto___19291 < len__14245__auto___19290)){
args19165.push((arguments[i__14246__auto___19291]));

var G__19292 = (i__14246__auto___19291 + (1));
i__14246__auto___19291 = G__19292;
continue;
} else {
}
break;
}

var G__19167 = args19165.length;
switch (G__19167) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19165.length)].join('')));

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
return (function (p1__19164_SHARP_){
if(cljs.core.truth_(p1__19164_SHARP_.call(null,topic))){
return p1__19164_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19164_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13187__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19168 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19169){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19169 = meta19169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19170,meta19169__$1){
var self__ = this;
var _19170__$1 = this;
return (new cljs.core.async.t_cljs$core$async19168(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19169__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19170){
var self__ = this;
var _19170__$1 = this;
return self__.meta19169;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19169","meta19169",-1170285049,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19168";

cljs.core.async.t_cljs$core$async19168.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19168");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19168 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19169){
return (new cljs.core.async.t_cljs$core$async19168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19169));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19168(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17395__auto___19294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19294,mults,ensure_mult,p){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19294,mults,ensure_mult,p){
return (function (state_19242){
var state_val_19243 = (state_19242[(1)]);
if((state_val_19243 === (7))){
var inst_19238 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19244_19295 = state_19242__$1;
(statearr_19244_19295[(2)] = inst_19238);

(statearr_19244_19295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (20))){
var state_19242__$1 = state_19242;
var statearr_19245_19296 = state_19242__$1;
(statearr_19245_19296[(2)] = null);

(statearr_19245_19296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (1))){
var state_19242__$1 = state_19242;
var statearr_19246_19297 = state_19242__$1;
(statearr_19246_19297[(2)] = null);

(statearr_19246_19297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (24))){
var inst_19221 = (state_19242[(7)]);
var inst_19230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19221);
var state_19242__$1 = state_19242;
var statearr_19247_19298 = state_19242__$1;
(statearr_19247_19298[(2)] = inst_19230);

(statearr_19247_19298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (4))){
var inst_19173 = (state_19242[(8)]);
var inst_19173__$1 = (state_19242[(2)]);
var inst_19174 = (inst_19173__$1 == null);
var state_19242__$1 = (function (){var statearr_19248 = state_19242;
(statearr_19248[(8)] = inst_19173__$1);

return statearr_19248;
})();
if(cljs.core.truth_(inst_19174)){
var statearr_19249_19299 = state_19242__$1;
(statearr_19249_19299[(1)] = (5));

} else {
var statearr_19250_19300 = state_19242__$1;
(statearr_19250_19300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (15))){
var inst_19215 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19251_19301 = state_19242__$1;
(statearr_19251_19301[(2)] = inst_19215);

(statearr_19251_19301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (21))){
var inst_19235 = (state_19242[(2)]);
var state_19242__$1 = (function (){var statearr_19252 = state_19242;
(statearr_19252[(9)] = inst_19235);

return statearr_19252;
})();
var statearr_19253_19302 = state_19242__$1;
(statearr_19253_19302[(2)] = null);

(statearr_19253_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (13))){
var inst_19197 = (state_19242[(10)]);
var inst_19199 = cljs.core.chunked_seq_QMARK_.call(null,inst_19197);
var state_19242__$1 = state_19242;
if(inst_19199){
var statearr_19254_19303 = state_19242__$1;
(statearr_19254_19303[(1)] = (16));

} else {
var statearr_19255_19304 = state_19242__$1;
(statearr_19255_19304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (22))){
var inst_19227 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
if(cljs.core.truth_(inst_19227)){
var statearr_19256_19305 = state_19242__$1;
(statearr_19256_19305[(1)] = (23));

} else {
var statearr_19257_19306 = state_19242__$1;
(statearr_19257_19306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (6))){
var inst_19221 = (state_19242[(7)]);
var inst_19223 = (state_19242[(11)]);
var inst_19173 = (state_19242[(8)]);
var inst_19221__$1 = topic_fn.call(null,inst_19173);
var inst_19222 = cljs.core.deref.call(null,mults);
var inst_19223__$1 = cljs.core.get.call(null,inst_19222,inst_19221__$1);
var state_19242__$1 = (function (){var statearr_19258 = state_19242;
(statearr_19258[(7)] = inst_19221__$1);

(statearr_19258[(11)] = inst_19223__$1);

return statearr_19258;
})();
if(cljs.core.truth_(inst_19223__$1)){
var statearr_19259_19307 = state_19242__$1;
(statearr_19259_19307[(1)] = (19));

} else {
var statearr_19260_19308 = state_19242__$1;
(statearr_19260_19308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (25))){
var inst_19232 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19261_19309 = state_19242__$1;
(statearr_19261_19309[(2)] = inst_19232);

(statearr_19261_19309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (17))){
var inst_19197 = (state_19242[(10)]);
var inst_19206 = cljs.core.first.call(null,inst_19197);
var inst_19207 = cljs.core.async.muxch_STAR_.call(null,inst_19206);
var inst_19208 = cljs.core.async.close_BANG_.call(null,inst_19207);
var inst_19209 = cljs.core.next.call(null,inst_19197);
var inst_19183 = inst_19209;
var inst_19184 = null;
var inst_19185 = (0);
var inst_19186 = (0);
var state_19242__$1 = (function (){var statearr_19262 = state_19242;
(statearr_19262[(12)] = inst_19186);

(statearr_19262[(13)] = inst_19185);

(statearr_19262[(14)] = inst_19184);

(statearr_19262[(15)] = inst_19183);

(statearr_19262[(16)] = inst_19208);

return statearr_19262;
})();
var statearr_19263_19310 = state_19242__$1;
(statearr_19263_19310[(2)] = null);

(statearr_19263_19310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (3))){
var inst_19240 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19242__$1,inst_19240);
} else {
if((state_val_19243 === (12))){
var inst_19217 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19264_19311 = state_19242__$1;
(statearr_19264_19311[(2)] = inst_19217);

(statearr_19264_19311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (2))){
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19242__$1,(4),ch);
} else {
if((state_val_19243 === (23))){
var state_19242__$1 = state_19242;
var statearr_19265_19312 = state_19242__$1;
(statearr_19265_19312[(2)] = null);

(statearr_19265_19312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (19))){
var inst_19223 = (state_19242[(11)]);
var inst_19173 = (state_19242[(8)]);
var inst_19225 = cljs.core.async.muxch_STAR_.call(null,inst_19223);
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19242__$1,(22),inst_19225,inst_19173);
} else {
if((state_val_19243 === (11))){
var inst_19197 = (state_19242[(10)]);
var inst_19183 = (state_19242[(15)]);
var inst_19197__$1 = cljs.core.seq.call(null,inst_19183);
var state_19242__$1 = (function (){var statearr_19266 = state_19242;
(statearr_19266[(10)] = inst_19197__$1);

return statearr_19266;
})();
if(inst_19197__$1){
var statearr_19267_19313 = state_19242__$1;
(statearr_19267_19313[(1)] = (13));

} else {
var statearr_19268_19314 = state_19242__$1;
(statearr_19268_19314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (9))){
var inst_19219 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19269_19315 = state_19242__$1;
(statearr_19269_19315[(2)] = inst_19219);

(statearr_19269_19315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (5))){
var inst_19180 = cljs.core.deref.call(null,mults);
var inst_19181 = cljs.core.vals.call(null,inst_19180);
var inst_19182 = cljs.core.seq.call(null,inst_19181);
var inst_19183 = inst_19182;
var inst_19184 = null;
var inst_19185 = (0);
var inst_19186 = (0);
var state_19242__$1 = (function (){var statearr_19270 = state_19242;
(statearr_19270[(12)] = inst_19186);

(statearr_19270[(13)] = inst_19185);

(statearr_19270[(14)] = inst_19184);

(statearr_19270[(15)] = inst_19183);

return statearr_19270;
})();
var statearr_19271_19316 = state_19242__$1;
(statearr_19271_19316[(2)] = null);

(statearr_19271_19316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (14))){
var state_19242__$1 = state_19242;
var statearr_19275_19317 = state_19242__$1;
(statearr_19275_19317[(2)] = null);

(statearr_19275_19317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (16))){
var inst_19197 = (state_19242[(10)]);
var inst_19201 = cljs.core.chunk_first.call(null,inst_19197);
var inst_19202 = cljs.core.chunk_rest.call(null,inst_19197);
var inst_19203 = cljs.core.count.call(null,inst_19201);
var inst_19183 = inst_19202;
var inst_19184 = inst_19201;
var inst_19185 = inst_19203;
var inst_19186 = (0);
var state_19242__$1 = (function (){var statearr_19276 = state_19242;
(statearr_19276[(12)] = inst_19186);

(statearr_19276[(13)] = inst_19185);

(statearr_19276[(14)] = inst_19184);

(statearr_19276[(15)] = inst_19183);

return statearr_19276;
})();
var statearr_19277_19318 = state_19242__$1;
(statearr_19277_19318[(2)] = null);

(statearr_19277_19318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (10))){
var inst_19186 = (state_19242[(12)]);
var inst_19185 = (state_19242[(13)]);
var inst_19184 = (state_19242[(14)]);
var inst_19183 = (state_19242[(15)]);
var inst_19191 = cljs.core._nth.call(null,inst_19184,inst_19186);
var inst_19192 = cljs.core.async.muxch_STAR_.call(null,inst_19191);
var inst_19193 = cljs.core.async.close_BANG_.call(null,inst_19192);
var inst_19194 = (inst_19186 + (1));
var tmp19272 = inst_19185;
var tmp19273 = inst_19184;
var tmp19274 = inst_19183;
var inst_19183__$1 = tmp19274;
var inst_19184__$1 = tmp19273;
var inst_19185__$1 = tmp19272;
var inst_19186__$1 = inst_19194;
var state_19242__$1 = (function (){var statearr_19278 = state_19242;
(statearr_19278[(12)] = inst_19186__$1);

(statearr_19278[(13)] = inst_19185__$1);

(statearr_19278[(14)] = inst_19184__$1);

(statearr_19278[(15)] = inst_19183__$1);

(statearr_19278[(17)] = inst_19193);

return statearr_19278;
})();
var statearr_19279_19319 = state_19242__$1;
(statearr_19279_19319[(2)] = null);

(statearr_19279_19319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (18))){
var inst_19212 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19280_19320 = state_19242__$1;
(statearr_19280_19320[(2)] = inst_19212);

(statearr_19280_19320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (8))){
var inst_19186 = (state_19242[(12)]);
var inst_19185 = (state_19242[(13)]);
var inst_19188 = (inst_19186 < inst_19185);
var inst_19189 = inst_19188;
var state_19242__$1 = state_19242;
if(cljs.core.truth_(inst_19189)){
var statearr_19281_19321 = state_19242__$1;
(statearr_19281_19321[(1)] = (10));

} else {
var statearr_19282_19322 = state_19242__$1;
(statearr_19282_19322[(1)] = (11));

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
});})(c__17395__auto___19294,mults,ensure_mult,p))
;
return ((function (switch__17283__auto__,c__17395__auto___19294,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19286[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19286[(1)] = (1));

return statearr_19286;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19242){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19287){if((e19287 instanceof Object)){
var ex__17287__auto__ = e19287;
var statearr_19288_19323 = state_19242;
(statearr_19288_19323[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19324 = state_19242;
state_19242 = G__19324;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19294,mults,ensure_mult,p))
})();
var state__17397__auto__ = (function (){var statearr_19289 = f__17396__auto__.call(null);
(statearr_19289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19294);

return statearr_19289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19294,mults,ensure_mult,p))
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
var args19325 = [];
var len__14245__auto___19328 = arguments.length;
var i__14246__auto___19329 = (0);
while(true){
if((i__14246__auto___19329 < len__14245__auto___19328)){
args19325.push((arguments[i__14246__auto___19329]));

var G__19330 = (i__14246__auto___19329 + (1));
i__14246__auto___19329 = G__19330;
continue;
} else {
}
break;
}

var G__19327 = args19325.length;
switch (G__19327) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19325.length)].join('')));

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
var args19332 = [];
var len__14245__auto___19335 = arguments.length;
var i__14246__auto___19336 = (0);
while(true){
if((i__14246__auto___19336 < len__14245__auto___19335)){
args19332.push((arguments[i__14246__auto___19336]));

var G__19337 = (i__14246__auto___19336 + (1));
i__14246__auto___19336 = G__19337;
continue;
} else {
}
break;
}

var G__19334 = args19332.length;
switch (G__19334) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19332.length)].join('')));

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
var args19339 = [];
var len__14245__auto___19410 = arguments.length;
var i__14246__auto___19411 = (0);
while(true){
if((i__14246__auto___19411 < len__14245__auto___19410)){
args19339.push((arguments[i__14246__auto___19411]));

var G__19412 = (i__14246__auto___19411 + (1));
i__14246__auto___19411 = G__19412;
continue;
} else {
}
break;
}

var G__19341 = args19339.length;
switch (G__19341) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19339.length)].join('')));

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
var c__17395__auto___19414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19380){
var state_val_19381 = (state_19380[(1)]);
if((state_val_19381 === (7))){
var state_19380__$1 = state_19380;
var statearr_19382_19415 = state_19380__$1;
(statearr_19382_19415[(2)] = null);

(statearr_19382_19415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (1))){
var state_19380__$1 = state_19380;
var statearr_19383_19416 = state_19380__$1;
(statearr_19383_19416[(2)] = null);

(statearr_19383_19416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (4))){
var inst_19344 = (state_19380[(7)]);
var inst_19346 = (inst_19344 < cnt);
var state_19380__$1 = state_19380;
if(cljs.core.truth_(inst_19346)){
var statearr_19384_19417 = state_19380__$1;
(statearr_19384_19417[(1)] = (6));

} else {
var statearr_19385_19418 = state_19380__$1;
(statearr_19385_19418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (15))){
var inst_19376 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19386_19419 = state_19380__$1;
(statearr_19386_19419[(2)] = inst_19376);

(statearr_19386_19419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (13))){
var inst_19369 = cljs.core.async.close_BANG_.call(null,out);
var state_19380__$1 = state_19380;
var statearr_19387_19420 = state_19380__$1;
(statearr_19387_19420[(2)] = inst_19369);

(statearr_19387_19420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (6))){
var state_19380__$1 = state_19380;
var statearr_19388_19421 = state_19380__$1;
(statearr_19388_19421[(2)] = null);

(statearr_19388_19421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (3))){
var inst_19378 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19380__$1,inst_19378);
} else {
if((state_val_19381 === (12))){
var inst_19366 = (state_19380[(8)]);
var inst_19366__$1 = (state_19380[(2)]);
var inst_19367 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19366__$1);
var state_19380__$1 = (function (){var statearr_19389 = state_19380;
(statearr_19389[(8)] = inst_19366__$1);

return statearr_19389;
})();
if(cljs.core.truth_(inst_19367)){
var statearr_19390_19422 = state_19380__$1;
(statearr_19390_19422[(1)] = (13));

} else {
var statearr_19391_19423 = state_19380__$1;
(statearr_19391_19423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (2))){
var inst_19343 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19344 = (0);
var state_19380__$1 = (function (){var statearr_19392 = state_19380;
(statearr_19392[(7)] = inst_19344);

(statearr_19392[(9)] = inst_19343);

return statearr_19392;
})();
var statearr_19393_19424 = state_19380__$1;
(statearr_19393_19424[(2)] = null);

(statearr_19393_19424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (11))){
var inst_19344 = (state_19380[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19380,(10),Object,null,(9));
var inst_19353 = chs__$1.call(null,inst_19344);
var inst_19354 = done.call(null,inst_19344);
var inst_19355 = cljs.core.async.take_BANG_.call(null,inst_19353,inst_19354);
var state_19380__$1 = state_19380;
var statearr_19394_19425 = state_19380__$1;
(statearr_19394_19425[(2)] = inst_19355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (9))){
var inst_19344 = (state_19380[(7)]);
var inst_19357 = (state_19380[(2)]);
var inst_19358 = (inst_19344 + (1));
var inst_19344__$1 = inst_19358;
var state_19380__$1 = (function (){var statearr_19395 = state_19380;
(statearr_19395[(7)] = inst_19344__$1);

(statearr_19395[(10)] = inst_19357);

return statearr_19395;
})();
var statearr_19396_19426 = state_19380__$1;
(statearr_19396_19426[(2)] = null);

(statearr_19396_19426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (5))){
var inst_19364 = (state_19380[(2)]);
var state_19380__$1 = (function (){var statearr_19397 = state_19380;
(statearr_19397[(11)] = inst_19364);

return statearr_19397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19380__$1,(12),dchan);
} else {
if((state_val_19381 === (14))){
var inst_19366 = (state_19380[(8)]);
var inst_19371 = cljs.core.apply.call(null,f,inst_19366);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19380__$1,(16),out,inst_19371);
} else {
if((state_val_19381 === (16))){
var inst_19373 = (state_19380[(2)]);
var state_19380__$1 = (function (){var statearr_19398 = state_19380;
(statearr_19398[(12)] = inst_19373);

return statearr_19398;
})();
var statearr_19399_19427 = state_19380__$1;
(statearr_19399_19427[(2)] = null);

(statearr_19399_19427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (10))){
var inst_19348 = (state_19380[(2)]);
var inst_19349 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19380__$1 = (function (){var statearr_19400 = state_19380;
(statearr_19400[(13)] = inst_19348);

return statearr_19400;
})();
var statearr_19401_19428 = state_19380__$1;
(statearr_19401_19428[(2)] = inst_19349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (8))){
var inst_19362 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19402_19429 = state_19380__$1;
(statearr_19402_19429[(2)] = inst_19362);

(statearr_19402_19429[(1)] = (5));


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
});})(c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17283__auto__,c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19406[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19406[(1)] = (1));

return statearr_19406;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19380){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19407){if((e19407 instanceof Object)){
var ex__17287__auto__ = e19407;
var statearr_19408_19430 = state_19380;
(statearr_19408_19430[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_19380;
state_19380 = G__19431;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17397__auto__ = (function (){var statearr_19409 = f__17396__auto__.call(null);
(statearr_19409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19414);

return statearr_19409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19414,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19433 = [];
var len__14245__auto___19489 = arguments.length;
var i__14246__auto___19490 = (0);
while(true){
if((i__14246__auto___19490 < len__14245__auto___19489)){
args19433.push((arguments[i__14246__auto___19490]));

var G__19491 = (i__14246__auto___19490 + (1));
i__14246__auto___19490 = G__19491;
continue;
} else {
}
break;
}

var G__19435 = args19433.length;
switch (G__19435) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19433.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___19493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19493,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19493,out){
return (function (state_19465){
var state_val_19466 = (state_19465[(1)]);
if((state_val_19466 === (7))){
var inst_19444 = (state_19465[(7)]);
var inst_19445 = (state_19465[(8)]);
var inst_19444__$1 = (state_19465[(2)]);
var inst_19445__$1 = cljs.core.nth.call(null,inst_19444__$1,(0),null);
var inst_19446 = cljs.core.nth.call(null,inst_19444__$1,(1),null);
var inst_19447 = (inst_19445__$1 == null);
var state_19465__$1 = (function (){var statearr_19467 = state_19465;
(statearr_19467[(7)] = inst_19444__$1);

(statearr_19467[(9)] = inst_19446);

(statearr_19467[(8)] = inst_19445__$1);

return statearr_19467;
})();
if(cljs.core.truth_(inst_19447)){
var statearr_19468_19494 = state_19465__$1;
(statearr_19468_19494[(1)] = (8));

} else {
var statearr_19469_19495 = state_19465__$1;
(statearr_19469_19495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (1))){
var inst_19436 = cljs.core.vec.call(null,chs);
var inst_19437 = inst_19436;
var state_19465__$1 = (function (){var statearr_19470 = state_19465;
(statearr_19470[(10)] = inst_19437);

return statearr_19470;
})();
var statearr_19471_19496 = state_19465__$1;
(statearr_19471_19496[(2)] = null);

(statearr_19471_19496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (4))){
var inst_19437 = (state_19465[(10)]);
var state_19465__$1 = state_19465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19465__$1,(7),inst_19437);
} else {
if((state_val_19466 === (6))){
var inst_19461 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19472_19497 = state_19465__$1;
(statearr_19472_19497[(2)] = inst_19461);

(statearr_19472_19497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (3))){
var inst_19463 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19465__$1,inst_19463);
} else {
if((state_val_19466 === (2))){
var inst_19437 = (state_19465[(10)]);
var inst_19439 = cljs.core.count.call(null,inst_19437);
var inst_19440 = (inst_19439 > (0));
var state_19465__$1 = state_19465;
if(cljs.core.truth_(inst_19440)){
var statearr_19474_19498 = state_19465__$1;
(statearr_19474_19498[(1)] = (4));

} else {
var statearr_19475_19499 = state_19465__$1;
(statearr_19475_19499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (11))){
var inst_19437 = (state_19465[(10)]);
var inst_19454 = (state_19465[(2)]);
var tmp19473 = inst_19437;
var inst_19437__$1 = tmp19473;
var state_19465__$1 = (function (){var statearr_19476 = state_19465;
(statearr_19476[(11)] = inst_19454);

(statearr_19476[(10)] = inst_19437__$1);

return statearr_19476;
})();
var statearr_19477_19500 = state_19465__$1;
(statearr_19477_19500[(2)] = null);

(statearr_19477_19500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (9))){
var inst_19445 = (state_19465[(8)]);
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19465__$1,(11),out,inst_19445);
} else {
if((state_val_19466 === (5))){
var inst_19459 = cljs.core.async.close_BANG_.call(null,out);
var state_19465__$1 = state_19465;
var statearr_19478_19501 = state_19465__$1;
(statearr_19478_19501[(2)] = inst_19459);

(statearr_19478_19501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (10))){
var inst_19457 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19479_19502 = state_19465__$1;
(statearr_19479_19502[(2)] = inst_19457);

(statearr_19479_19502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (8))){
var inst_19444 = (state_19465[(7)]);
var inst_19446 = (state_19465[(9)]);
var inst_19437 = (state_19465[(10)]);
var inst_19445 = (state_19465[(8)]);
var inst_19449 = (function (){var cs = inst_19437;
var vec__19442 = inst_19444;
var v = inst_19445;
var c = inst_19446;
return ((function (cs,vec__19442,v,c,inst_19444,inst_19446,inst_19437,inst_19445,state_val_19466,c__17395__auto___19493,out){
return (function (p1__19432_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19432_SHARP_);
});
;})(cs,vec__19442,v,c,inst_19444,inst_19446,inst_19437,inst_19445,state_val_19466,c__17395__auto___19493,out))
})();
var inst_19450 = cljs.core.filterv.call(null,inst_19449,inst_19437);
var inst_19437__$1 = inst_19450;
var state_19465__$1 = (function (){var statearr_19480 = state_19465;
(statearr_19480[(10)] = inst_19437__$1);

return statearr_19480;
})();
var statearr_19481_19503 = state_19465__$1;
(statearr_19481_19503[(2)] = null);

(statearr_19481_19503[(1)] = (2));


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
});})(c__17395__auto___19493,out))
;
return ((function (switch__17283__auto__,c__17395__auto___19493,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19485[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19485[(1)] = (1));

return statearr_19485;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19465){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19486){if((e19486 instanceof Object)){
var ex__17287__auto__ = e19486;
var statearr_19487_19504 = state_19465;
(statearr_19487_19504[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19505 = state_19465;
state_19465 = G__19505;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19493,out))
})();
var state__17397__auto__ = (function (){var statearr_19488 = f__17396__auto__.call(null);
(statearr_19488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19493);

return statearr_19488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19493,out))
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
var args19506 = [];
var len__14245__auto___19555 = arguments.length;
var i__14246__auto___19556 = (0);
while(true){
if((i__14246__auto___19556 < len__14245__auto___19555)){
args19506.push((arguments[i__14246__auto___19556]));

var G__19557 = (i__14246__auto___19556 + (1));
i__14246__auto___19556 = G__19557;
continue;
} else {
}
break;
}

var G__19508 = args19506.length;
switch (G__19508) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19506.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___19559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19559,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19559,out){
return (function (state_19532){
var state_val_19533 = (state_19532[(1)]);
if((state_val_19533 === (7))){
var inst_19514 = (state_19532[(7)]);
var inst_19514__$1 = (state_19532[(2)]);
var inst_19515 = (inst_19514__$1 == null);
var inst_19516 = cljs.core.not.call(null,inst_19515);
var state_19532__$1 = (function (){var statearr_19534 = state_19532;
(statearr_19534[(7)] = inst_19514__$1);

return statearr_19534;
})();
if(inst_19516){
var statearr_19535_19560 = state_19532__$1;
(statearr_19535_19560[(1)] = (8));

} else {
var statearr_19536_19561 = state_19532__$1;
(statearr_19536_19561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (1))){
var inst_19509 = (0);
var state_19532__$1 = (function (){var statearr_19537 = state_19532;
(statearr_19537[(8)] = inst_19509);

return statearr_19537;
})();
var statearr_19538_19562 = state_19532__$1;
(statearr_19538_19562[(2)] = null);

(statearr_19538_19562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (4))){
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19532__$1,(7),ch);
} else {
if((state_val_19533 === (6))){
var inst_19527 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19539_19563 = state_19532__$1;
(statearr_19539_19563[(2)] = inst_19527);

(statearr_19539_19563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (3))){
var inst_19529 = (state_19532[(2)]);
var inst_19530 = cljs.core.async.close_BANG_.call(null,out);
var state_19532__$1 = (function (){var statearr_19540 = state_19532;
(statearr_19540[(9)] = inst_19529);

return statearr_19540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19532__$1,inst_19530);
} else {
if((state_val_19533 === (2))){
var inst_19509 = (state_19532[(8)]);
var inst_19511 = (inst_19509 < n);
var state_19532__$1 = state_19532;
if(cljs.core.truth_(inst_19511)){
var statearr_19541_19564 = state_19532__$1;
(statearr_19541_19564[(1)] = (4));

} else {
var statearr_19542_19565 = state_19532__$1;
(statearr_19542_19565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (11))){
var inst_19509 = (state_19532[(8)]);
var inst_19519 = (state_19532[(2)]);
var inst_19520 = (inst_19509 + (1));
var inst_19509__$1 = inst_19520;
var state_19532__$1 = (function (){var statearr_19543 = state_19532;
(statearr_19543[(10)] = inst_19519);

(statearr_19543[(8)] = inst_19509__$1);

return statearr_19543;
})();
var statearr_19544_19566 = state_19532__$1;
(statearr_19544_19566[(2)] = null);

(statearr_19544_19566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (9))){
var state_19532__$1 = state_19532;
var statearr_19545_19567 = state_19532__$1;
(statearr_19545_19567[(2)] = null);

(statearr_19545_19567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (5))){
var state_19532__$1 = state_19532;
var statearr_19546_19568 = state_19532__$1;
(statearr_19546_19568[(2)] = null);

(statearr_19546_19568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (10))){
var inst_19524 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19547_19569 = state_19532__$1;
(statearr_19547_19569[(2)] = inst_19524);

(statearr_19547_19569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (8))){
var inst_19514 = (state_19532[(7)]);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19532__$1,(11),out,inst_19514);
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
});})(c__17395__auto___19559,out))
;
return ((function (switch__17283__auto__,c__17395__auto___19559,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19551[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19551[(1)] = (1));

return statearr_19551;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19532){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19552){if((e19552 instanceof Object)){
var ex__17287__auto__ = e19552;
var statearr_19553_19570 = state_19532;
(statearr_19553_19570[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19571 = state_19532;
state_19532 = G__19571;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19559,out))
})();
var state__17397__auto__ = (function (){var statearr_19554 = f__17396__auto__.call(null);
(statearr_19554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19559);

return statearr_19554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19559,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19579 = (function (map_LT_,f,ch,meta19580){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19580 = meta19580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19581,meta19580__$1){
var self__ = this;
var _19581__$1 = this;
return (new cljs.core.async.t_cljs$core$async19579(self__.map_LT_,self__.f,self__.ch,meta19580__$1));
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19581){
var self__ = this;
var _19581__$1 = this;
return self__.meta19580;
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19582 = (function (map_LT_,f,ch,meta19580,_,fn1,meta19583){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19580 = meta19580;
this._ = _;
this.fn1 = fn1;
this.meta19583 = meta19583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19584,meta19583__$1){
var self__ = this;
var _19584__$1 = this;
return (new cljs.core.async.t_cljs$core$async19582(self__.map_LT_,self__.f,self__.ch,self__.meta19580,self__._,self__.fn1,meta19583__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19584){
var self__ = this;
var _19584__$1 = this;
return self__.meta19583;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19572_SHARP_){
return f1.call(null,(((p1__19572_SHARP_ == null))?null:self__.f.call(null,p1__19572_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19580","meta19580",-1297102113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19579","cljs.core.async/t_cljs$core$async19579",710763400,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19583","meta19583",1264670984,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19582";

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19582");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19582 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19582(map_LT___$1,f__$1,ch__$1,meta19580__$1,___$2,fn1__$1,meta19583){
return (new cljs.core.async.t_cljs$core$async19582(map_LT___$1,f__$1,ch__$1,meta19580__$1,___$2,fn1__$1,meta19583));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19582(self__.map_LT_,self__.f,self__.ch,self__.meta19580,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19580","meta19580",-1297102113,null)], null);
});

cljs.core.async.t_cljs$core$async19579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19579";

cljs.core.async.t_cljs$core$async19579.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19579");
});

cljs.core.async.__GT_t_cljs$core$async19579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19579(map_LT___$1,f__$1,ch__$1,meta19580){
return (new cljs.core.async.t_cljs$core$async19579(map_LT___$1,f__$1,ch__$1,meta19580));
});

}

return (new cljs.core.async.t_cljs$core$async19579(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19588 = (function (map_GT_,f,ch,meta19589){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19589 = meta19589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19590,meta19589__$1){
var self__ = this;
var _19590__$1 = this;
return (new cljs.core.async.t_cljs$core$async19588(self__.map_GT_,self__.f,self__.ch,meta19589__$1));
});

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19590){
var self__ = this;
var _19590__$1 = this;
return self__.meta19589;
});

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19589","meta19589",-1491199933,null)], null);
});

cljs.core.async.t_cljs$core$async19588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19588";

cljs.core.async.t_cljs$core$async19588.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19588");
});

cljs.core.async.__GT_t_cljs$core$async19588 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19588(map_GT___$1,f__$1,ch__$1,meta19589){
return (new cljs.core.async.t_cljs$core$async19588(map_GT___$1,f__$1,ch__$1,meta19589));
});

}

return (new cljs.core.async.t_cljs$core$async19588(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19594 = (function (filter_GT_,p,ch,meta19595){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19595 = meta19595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19596,meta19595__$1){
var self__ = this;
var _19596__$1 = this;
return (new cljs.core.async.t_cljs$core$async19594(self__.filter_GT_,self__.p,self__.ch,meta19595__$1));
});

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19596){
var self__ = this;
var _19596__$1 = this;
return self__.meta19595;
});

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19595","meta19595",-1341467052,null)], null);
});

cljs.core.async.t_cljs$core$async19594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19594";

cljs.core.async.t_cljs$core$async19594.cljs$lang$ctorPrWriter = (function (this__13785__auto__,writer__13786__auto__,opt__13787__auto__){
return cljs.core._write.call(null,writer__13786__auto__,"cljs.core.async/t_cljs$core$async19594");
});

cljs.core.async.__GT_t_cljs$core$async19594 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19594(filter_GT___$1,p__$1,ch__$1,meta19595){
return (new cljs.core.async.t_cljs$core$async19594(filter_GT___$1,p__$1,ch__$1,meta19595));
});

}

return (new cljs.core.async.t_cljs$core$async19594(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19597 = [];
var len__14245__auto___19641 = arguments.length;
var i__14246__auto___19642 = (0);
while(true){
if((i__14246__auto___19642 < len__14245__auto___19641)){
args19597.push((arguments[i__14246__auto___19642]));

var G__19643 = (i__14246__auto___19642 + (1));
i__14246__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var G__19599 = args19597.length;
switch (G__19599) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19597.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___19645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19645,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19645,out){
return (function (state_19620){
var state_val_19621 = (state_19620[(1)]);
if((state_val_19621 === (7))){
var inst_19616 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19622_19646 = state_19620__$1;
(statearr_19622_19646[(2)] = inst_19616);

(statearr_19622_19646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (1))){
var state_19620__$1 = state_19620;
var statearr_19623_19647 = state_19620__$1;
(statearr_19623_19647[(2)] = null);

(statearr_19623_19647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (4))){
var inst_19602 = (state_19620[(7)]);
var inst_19602__$1 = (state_19620[(2)]);
var inst_19603 = (inst_19602__$1 == null);
var state_19620__$1 = (function (){var statearr_19624 = state_19620;
(statearr_19624[(7)] = inst_19602__$1);

return statearr_19624;
})();
if(cljs.core.truth_(inst_19603)){
var statearr_19625_19648 = state_19620__$1;
(statearr_19625_19648[(1)] = (5));

} else {
var statearr_19626_19649 = state_19620__$1;
(statearr_19626_19649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (6))){
var inst_19602 = (state_19620[(7)]);
var inst_19607 = p.call(null,inst_19602);
var state_19620__$1 = state_19620;
if(cljs.core.truth_(inst_19607)){
var statearr_19627_19650 = state_19620__$1;
(statearr_19627_19650[(1)] = (8));

} else {
var statearr_19628_19651 = state_19620__$1;
(statearr_19628_19651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (3))){
var inst_19618 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19620__$1,inst_19618);
} else {
if((state_val_19621 === (2))){
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19620__$1,(4),ch);
} else {
if((state_val_19621 === (11))){
var inst_19610 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19629_19652 = state_19620__$1;
(statearr_19629_19652[(2)] = inst_19610);

(statearr_19629_19652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (9))){
var state_19620__$1 = state_19620;
var statearr_19630_19653 = state_19620__$1;
(statearr_19630_19653[(2)] = null);

(statearr_19630_19653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (5))){
var inst_19605 = cljs.core.async.close_BANG_.call(null,out);
var state_19620__$1 = state_19620;
var statearr_19631_19654 = state_19620__$1;
(statearr_19631_19654[(2)] = inst_19605);

(statearr_19631_19654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (10))){
var inst_19613 = (state_19620[(2)]);
var state_19620__$1 = (function (){var statearr_19632 = state_19620;
(statearr_19632[(8)] = inst_19613);

return statearr_19632;
})();
var statearr_19633_19655 = state_19620__$1;
(statearr_19633_19655[(2)] = null);

(statearr_19633_19655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (8))){
var inst_19602 = (state_19620[(7)]);
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19620__$1,(11),out,inst_19602);
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
});})(c__17395__auto___19645,out))
;
return ((function (switch__17283__auto__,c__17395__auto___19645,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19637 = [null,null,null,null,null,null,null,null,null];
(statearr_19637[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19637[(1)] = (1));

return statearr_19637;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19620){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19638){if((e19638 instanceof Object)){
var ex__17287__auto__ = e19638;
var statearr_19639_19656 = state_19620;
(statearr_19639_19656[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19657 = state_19620;
state_19620 = G__19657;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19645,out))
})();
var state__17397__auto__ = (function (){var statearr_19640 = f__17396__auto__.call(null);
(statearr_19640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19645);

return statearr_19640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19645,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19658 = [];
var len__14245__auto___19661 = arguments.length;
var i__14246__auto___19662 = (0);
while(true){
if((i__14246__auto___19662 < len__14245__auto___19661)){
args19658.push((arguments[i__14246__auto___19662]));

var G__19663 = (i__14246__auto___19662 + (1));
i__14246__auto___19662 = G__19663;
continue;
} else {
}
break;
}

var G__19660 = args19658.length;
switch (G__19660) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19658.length)].join('')));

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
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_19830){
var state_val_19831 = (state_19830[(1)]);
if((state_val_19831 === (7))){
var inst_19826 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
var statearr_19832_19873 = state_19830__$1;
(statearr_19832_19873[(2)] = inst_19826);

(statearr_19832_19873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (20))){
var inst_19796 = (state_19830[(7)]);
var inst_19807 = (state_19830[(2)]);
var inst_19808 = cljs.core.next.call(null,inst_19796);
var inst_19782 = inst_19808;
var inst_19783 = null;
var inst_19784 = (0);
var inst_19785 = (0);
var state_19830__$1 = (function (){var statearr_19833 = state_19830;
(statearr_19833[(8)] = inst_19807);

(statearr_19833[(9)] = inst_19783);

(statearr_19833[(10)] = inst_19785);

(statearr_19833[(11)] = inst_19782);

(statearr_19833[(12)] = inst_19784);

return statearr_19833;
})();
var statearr_19834_19874 = state_19830__$1;
(statearr_19834_19874[(2)] = null);

(statearr_19834_19874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (1))){
var state_19830__$1 = state_19830;
var statearr_19835_19875 = state_19830__$1;
(statearr_19835_19875[(2)] = null);

(statearr_19835_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (4))){
var inst_19771 = (state_19830[(13)]);
var inst_19771__$1 = (state_19830[(2)]);
var inst_19772 = (inst_19771__$1 == null);
var state_19830__$1 = (function (){var statearr_19836 = state_19830;
(statearr_19836[(13)] = inst_19771__$1);

return statearr_19836;
})();
if(cljs.core.truth_(inst_19772)){
var statearr_19837_19876 = state_19830__$1;
(statearr_19837_19876[(1)] = (5));

} else {
var statearr_19838_19877 = state_19830__$1;
(statearr_19838_19877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (15))){
var state_19830__$1 = state_19830;
var statearr_19842_19878 = state_19830__$1;
(statearr_19842_19878[(2)] = null);

(statearr_19842_19878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (21))){
var state_19830__$1 = state_19830;
var statearr_19843_19879 = state_19830__$1;
(statearr_19843_19879[(2)] = null);

(statearr_19843_19879[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (13))){
var inst_19783 = (state_19830[(9)]);
var inst_19785 = (state_19830[(10)]);
var inst_19782 = (state_19830[(11)]);
var inst_19784 = (state_19830[(12)]);
var inst_19792 = (state_19830[(2)]);
var inst_19793 = (inst_19785 + (1));
var tmp19839 = inst_19783;
var tmp19840 = inst_19782;
var tmp19841 = inst_19784;
var inst_19782__$1 = tmp19840;
var inst_19783__$1 = tmp19839;
var inst_19784__$1 = tmp19841;
var inst_19785__$1 = inst_19793;
var state_19830__$1 = (function (){var statearr_19844 = state_19830;
(statearr_19844[(9)] = inst_19783__$1);

(statearr_19844[(10)] = inst_19785__$1);

(statearr_19844[(11)] = inst_19782__$1);

(statearr_19844[(14)] = inst_19792);

(statearr_19844[(12)] = inst_19784__$1);

return statearr_19844;
})();
var statearr_19845_19880 = state_19830__$1;
(statearr_19845_19880[(2)] = null);

(statearr_19845_19880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (22))){
var state_19830__$1 = state_19830;
var statearr_19846_19881 = state_19830__$1;
(statearr_19846_19881[(2)] = null);

(statearr_19846_19881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (6))){
var inst_19771 = (state_19830[(13)]);
var inst_19780 = f.call(null,inst_19771);
var inst_19781 = cljs.core.seq.call(null,inst_19780);
var inst_19782 = inst_19781;
var inst_19783 = null;
var inst_19784 = (0);
var inst_19785 = (0);
var state_19830__$1 = (function (){var statearr_19847 = state_19830;
(statearr_19847[(9)] = inst_19783);

(statearr_19847[(10)] = inst_19785);

(statearr_19847[(11)] = inst_19782);

(statearr_19847[(12)] = inst_19784);

return statearr_19847;
})();
var statearr_19848_19882 = state_19830__$1;
(statearr_19848_19882[(2)] = null);

(statearr_19848_19882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (17))){
var inst_19796 = (state_19830[(7)]);
var inst_19800 = cljs.core.chunk_first.call(null,inst_19796);
var inst_19801 = cljs.core.chunk_rest.call(null,inst_19796);
var inst_19802 = cljs.core.count.call(null,inst_19800);
var inst_19782 = inst_19801;
var inst_19783 = inst_19800;
var inst_19784 = inst_19802;
var inst_19785 = (0);
var state_19830__$1 = (function (){var statearr_19849 = state_19830;
(statearr_19849[(9)] = inst_19783);

(statearr_19849[(10)] = inst_19785);

(statearr_19849[(11)] = inst_19782);

(statearr_19849[(12)] = inst_19784);

return statearr_19849;
})();
var statearr_19850_19883 = state_19830__$1;
(statearr_19850_19883[(2)] = null);

(statearr_19850_19883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (3))){
var inst_19828 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19830__$1,inst_19828);
} else {
if((state_val_19831 === (12))){
var inst_19816 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
var statearr_19851_19884 = state_19830__$1;
(statearr_19851_19884[(2)] = inst_19816);

(statearr_19851_19884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (2))){
var state_19830__$1 = state_19830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19830__$1,(4),in$);
} else {
if((state_val_19831 === (23))){
var inst_19824 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
var statearr_19852_19885 = state_19830__$1;
(statearr_19852_19885[(2)] = inst_19824);

(statearr_19852_19885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (19))){
var inst_19811 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
var statearr_19853_19886 = state_19830__$1;
(statearr_19853_19886[(2)] = inst_19811);

(statearr_19853_19886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (11))){
var inst_19796 = (state_19830[(7)]);
var inst_19782 = (state_19830[(11)]);
var inst_19796__$1 = cljs.core.seq.call(null,inst_19782);
var state_19830__$1 = (function (){var statearr_19854 = state_19830;
(statearr_19854[(7)] = inst_19796__$1);

return statearr_19854;
})();
if(inst_19796__$1){
var statearr_19855_19887 = state_19830__$1;
(statearr_19855_19887[(1)] = (14));

} else {
var statearr_19856_19888 = state_19830__$1;
(statearr_19856_19888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (9))){
var inst_19818 = (state_19830[(2)]);
var inst_19819 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19830__$1 = (function (){var statearr_19857 = state_19830;
(statearr_19857[(15)] = inst_19818);

return statearr_19857;
})();
if(cljs.core.truth_(inst_19819)){
var statearr_19858_19889 = state_19830__$1;
(statearr_19858_19889[(1)] = (21));

} else {
var statearr_19859_19890 = state_19830__$1;
(statearr_19859_19890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (5))){
var inst_19774 = cljs.core.async.close_BANG_.call(null,out);
var state_19830__$1 = state_19830;
var statearr_19860_19891 = state_19830__$1;
(statearr_19860_19891[(2)] = inst_19774);

(statearr_19860_19891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (14))){
var inst_19796 = (state_19830[(7)]);
var inst_19798 = cljs.core.chunked_seq_QMARK_.call(null,inst_19796);
var state_19830__$1 = state_19830;
if(inst_19798){
var statearr_19861_19892 = state_19830__$1;
(statearr_19861_19892[(1)] = (17));

} else {
var statearr_19862_19893 = state_19830__$1;
(statearr_19862_19893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (16))){
var inst_19814 = (state_19830[(2)]);
var state_19830__$1 = state_19830;
var statearr_19863_19894 = state_19830__$1;
(statearr_19863_19894[(2)] = inst_19814);

(statearr_19863_19894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19831 === (10))){
var inst_19783 = (state_19830[(9)]);
var inst_19785 = (state_19830[(10)]);
var inst_19790 = cljs.core._nth.call(null,inst_19783,inst_19785);
var state_19830__$1 = state_19830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19830__$1,(13),out,inst_19790);
} else {
if((state_val_19831 === (18))){
var inst_19796 = (state_19830[(7)]);
var inst_19805 = cljs.core.first.call(null,inst_19796);
var state_19830__$1 = state_19830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19830__$1,(20),out,inst_19805);
} else {
if((state_val_19831 === (8))){
var inst_19785 = (state_19830[(10)]);
var inst_19784 = (state_19830[(12)]);
var inst_19787 = (inst_19785 < inst_19784);
var inst_19788 = inst_19787;
var state_19830__$1 = state_19830;
if(cljs.core.truth_(inst_19788)){
var statearr_19864_19895 = state_19830__$1;
(statearr_19864_19895[(1)] = (10));

} else {
var statearr_19865_19896 = state_19830__$1;
(statearr_19865_19896[(1)] = (11));

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
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____0 = (function (){
var statearr_19869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19869[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__);

(statearr_19869[(1)] = (1));

return statearr_19869;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____1 = (function (state_19830){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19870){if((e19870 instanceof Object)){
var ex__17287__auto__ = e19870;
var statearr_19871_19897 = state_19830;
(statearr_19871_19897[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19898 = state_19830;
state_19830 = G__19898;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__ = function(state_19830){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____1.call(this,state_19830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17284__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_19872 = f__17396__auto__.call(null);
(statearr_19872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_19872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19899 = [];
var len__14245__auto___19902 = arguments.length;
var i__14246__auto___19903 = (0);
while(true){
if((i__14246__auto___19903 < len__14245__auto___19902)){
args19899.push((arguments[i__14246__auto___19903]));

var G__19904 = (i__14246__auto___19903 + (1));
i__14246__auto___19903 = G__19904;
continue;
} else {
}
break;
}

var G__19901 = args19899.length;
switch (G__19901) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19899.length)].join('')));

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
var args19906 = [];
var len__14245__auto___19909 = arguments.length;
var i__14246__auto___19910 = (0);
while(true){
if((i__14246__auto___19910 < len__14245__auto___19909)){
args19906.push((arguments[i__14246__auto___19910]));

var G__19911 = (i__14246__auto___19910 + (1));
i__14246__auto___19910 = G__19911;
continue;
} else {
}
break;
}

var G__19908 = args19906.length;
switch (G__19908) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19906.length)].join('')));

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
var args19913 = [];
var len__14245__auto___19964 = arguments.length;
var i__14246__auto___19965 = (0);
while(true){
if((i__14246__auto___19965 < len__14245__auto___19964)){
args19913.push((arguments[i__14246__auto___19965]));

var G__19966 = (i__14246__auto___19965 + (1));
i__14246__auto___19965 = G__19966;
continue;
} else {
}
break;
}

var G__19915 = args19913.length;
switch (G__19915) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19913.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___19968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___19968,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___19968,out){
return (function (state_19939){
var state_val_19940 = (state_19939[(1)]);
if((state_val_19940 === (7))){
var inst_19934 = (state_19939[(2)]);
var state_19939__$1 = state_19939;
var statearr_19941_19969 = state_19939__$1;
(statearr_19941_19969[(2)] = inst_19934);

(statearr_19941_19969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (1))){
var inst_19916 = null;
var state_19939__$1 = (function (){var statearr_19942 = state_19939;
(statearr_19942[(7)] = inst_19916);

return statearr_19942;
})();
var statearr_19943_19970 = state_19939__$1;
(statearr_19943_19970[(2)] = null);

(statearr_19943_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (4))){
var inst_19919 = (state_19939[(8)]);
var inst_19919__$1 = (state_19939[(2)]);
var inst_19920 = (inst_19919__$1 == null);
var inst_19921 = cljs.core.not.call(null,inst_19920);
var state_19939__$1 = (function (){var statearr_19944 = state_19939;
(statearr_19944[(8)] = inst_19919__$1);

return statearr_19944;
})();
if(inst_19921){
var statearr_19945_19971 = state_19939__$1;
(statearr_19945_19971[(1)] = (5));

} else {
var statearr_19946_19972 = state_19939__$1;
(statearr_19946_19972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (6))){
var state_19939__$1 = state_19939;
var statearr_19947_19973 = state_19939__$1;
(statearr_19947_19973[(2)] = null);

(statearr_19947_19973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (3))){
var inst_19936 = (state_19939[(2)]);
var inst_19937 = cljs.core.async.close_BANG_.call(null,out);
var state_19939__$1 = (function (){var statearr_19948 = state_19939;
(statearr_19948[(9)] = inst_19936);

return statearr_19948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19939__$1,inst_19937);
} else {
if((state_val_19940 === (2))){
var state_19939__$1 = state_19939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19939__$1,(4),ch);
} else {
if((state_val_19940 === (11))){
var inst_19919 = (state_19939[(8)]);
var inst_19928 = (state_19939[(2)]);
var inst_19916 = inst_19919;
var state_19939__$1 = (function (){var statearr_19949 = state_19939;
(statearr_19949[(7)] = inst_19916);

(statearr_19949[(10)] = inst_19928);

return statearr_19949;
})();
var statearr_19950_19974 = state_19939__$1;
(statearr_19950_19974[(2)] = null);

(statearr_19950_19974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (9))){
var inst_19919 = (state_19939[(8)]);
var state_19939__$1 = state_19939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19939__$1,(11),out,inst_19919);
} else {
if((state_val_19940 === (5))){
var inst_19916 = (state_19939[(7)]);
var inst_19919 = (state_19939[(8)]);
var inst_19923 = cljs.core._EQ_.call(null,inst_19919,inst_19916);
var state_19939__$1 = state_19939;
if(inst_19923){
var statearr_19952_19975 = state_19939__$1;
(statearr_19952_19975[(1)] = (8));

} else {
var statearr_19953_19976 = state_19939__$1;
(statearr_19953_19976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (10))){
var inst_19931 = (state_19939[(2)]);
var state_19939__$1 = state_19939;
var statearr_19954_19977 = state_19939__$1;
(statearr_19954_19977[(2)] = inst_19931);

(statearr_19954_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19940 === (8))){
var inst_19916 = (state_19939[(7)]);
var tmp19951 = inst_19916;
var inst_19916__$1 = tmp19951;
var state_19939__$1 = (function (){var statearr_19955 = state_19939;
(statearr_19955[(7)] = inst_19916__$1);

return statearr_19955;
})();
var statearr_19956_19978 = state_19939__$1;
(statearr_19956_19978[(2)] = null);

(statearr_19956_19978[(1)] = (2));


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
});})(c__17395__auto___19968,out))
;
return ((function (switch__17283__auto__,c__17395__auto___19968,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_19960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19960[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_19960[(1)] = (1));

return statearr_19960;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_19939){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_19939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e19961){if((e19961 instanceof Object)){
var ex__17287__auto__ = e19961;
var statearr_19962_19979 = state_19939;
(statearr_19962_19979[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19980 = state_19939;
state_19939 = G__19980;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_19939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_19939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___19968,out))
})();
var state__17397__auto__ = (function (){var statearr_19963 = f__17396__auto__.call(null);
(statearr_19963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___19968);

return statearr_19963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___19968,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19981 = [];
var len__14245__auto___20051 = arguments.length;
var i__14246__auto___20052 = (0);
while(true){
if((i__14246__auto___20052 < len__14245__auto___20051)){
args19981.push((arguments[i__14246__auto___20052]));

var G__20053 = (i__14246__auto___20052 + (1));
i__14246__auto___20052 = G__20053;
continue;
} else {
}
break;
}

var G__19983 = args19981.length;
switch (G__19983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19981.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___20055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___20055,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___20055,out){
return (function (state_20021){
var state_val_20022 = (state_20021[(1)]);
if((state_val_20022 === (7))){
var inst_20017 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20023_20056 = state_20021__$1;
(statearr_20023_20056[(2)] = inst_20017);

(statearr_20023_20056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (1))){
var inst_19984 = (new Array(n));
var inst_19985 = inst_19984;
var inst_19986 = (0);
var state_20021__$1 = (function (){var statearr_20024 = state_20021;
(statearr_20024[(7)] = inst_19985);

(statearr_20024[(8)] = inst_19986);

return statearr_20024;
})();
var statearr_20025_20057 = state_20021__$1;
(statearr_20025_20057[(2)] = null);

(statearr_20025_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (4))){
var inst_19989 = (state_20021[(9)]);
var inst_19989__$1 = (state_20021[(2)]);
var inst_19990 = (inst_19989__$1 == null);
var inst_19991 = cljs.core.not.call(null,inst_19990);
var state_20021__$1 = (function (){var statearr_20026 = state_20021;
(statearr_20026[(9)] = inst_19989__$1);

return statearr_20026;
})();
if(inst_19991){
var statearr_20027_20058 = state_20021__$1;
(statearr_20027_20058[(1)] = (5));

} else {
var statearr_20028_20059 = state_20021__$1;
(statearr_20028_20059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (15))){
var inst_20011 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20029_20060 = state_20021__$1;
(statearr_20029_20060[(2)] = inst_20011);

(statearr_20029_20060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (13))){
var state_20021__$1 = state_20021;
var statearr_20030_20061 = state_20021__$1;
(statearr_20030_20061[(2)] = null);

(statearr_20030_20061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (6))){
var inst_19986 = (state_20021[(8)]);
var inst_20007 = (inst_19986 > (0));
var state_20021__$1 = state_20021;
if(cljs.core.truth_(inst_20007)){
var statearr_20031_20062 = state_20021__$1;
(statearr_20031_20062[(1)] = (12));

} else {
var statearr_20032_20063 = state_20021__$1;
(statearr_20032_20063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (3))){
var inst_20019 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20021__$1,inst_20019);
} else {
if((state_val_20022 === (12))){
var inst_19985 = (state_20021[(7)]);
var inst_20009 = cljs.core.vec.call(null,inst_19985);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20021__$1,(15),out,inst_20009);
} else {
if((state_val_20022 === (2))){
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20021__$1,(4),ch);
} else {
if((state_val_20022 === (11))){
var inst_20001 = (state_20021[(2)]);
var inst_20002 = (new Array(n));
var inst_19985 = inst_20002;
var inst_19986 = (0);
var state_20021__$1 = (function (){var statearr_20033 = state_20021;
(statearr_20033[(7)] = inst_19985);

(statearr_20033[(10)] = inst_20001);

(statearr_20033[(8)] = inst_19986);

return statearr_20033;
})();
var statearr_20034_20064 = state_20021__$1;
(statearr_20034_20064[(2)] = null);

(statearr_20034_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (9))){
var inst_19985 = (state_20021[(7)]);
var inst_19999 = cljs.core.vec.call(null,inst_19985);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20021__$1,(11),out,inst_19999);
} else {
if((state_val_20022 === (5))){
var inst_19985 = (state_20021[(7)]);
var inst_19989 = (state_20021[(9)]);
var inst_19994 = (state_20021[(11)]);
var inst_19986 = (state_20021[(8)]);
var inst_19993 = (inst_19985[inst_19986] = inst_19989);
var inst_19994__$1 = (inst_19986 + (1));
var inst_19995 = (inst_19994__$1 < n);
var state_20021__$1 = (function (){var statearr_20035 = state_20021;
(statearr_20035[(12)] = inst_19993);

(statearr_20035[(11)] = inst_19994__$1);

return statearr_20035;
})();
if(cljs.core.truth_(inst_19995)){
var statearr_20036_20065 = state_20021__$1;
(statearr_20036_20065[(1)] = (8));

} else {
var statearr_20037_20066 = state_20021__$1;
(statearr_20037_20066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (14))){
var inst_20014 = (state_20021[(2)]);
var inst_20015 = cljs.core.async.close_BANG_.call(null,out);
var state_20021__$1 = (function (){var statearr_20039 = state_20021;
(statearr_20039[(13)] = inst_20014);

return statearr_20039;
})();
var statearr_20040_20067 = state_20021__$1;
(statearr_20040_20067[(2)] = inst_20015);

(statearr_20040_20067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (10))){
var inst_20005 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20041_20068 = state_20021__$1;
(statearr_20041_20068[(2)] = inst_20005);

(statearr_20041_20068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (8))){
var inst_19985 = (state_20021[(7)]);
var inst_19994 = (state_20021[(11)]);
var tmp20038 = inst_19985;
var inst_19985__$1 = tmp20038;
var inst_19986 = inst_19994;
var state_20021__$1 = (function (){var statearr_20042 = state_20021;
(statearr_20042[(7)] = inst_19985__$1);

(statearr_20042[(8)] = inst_19986);

return statearr_20042;
})();
var statearr_20043_20069 = state_20021__$1;
(statearr_20043_20069[(2)] = null);

(statearr_20043_20069[(1)] = (2));


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
});})(c__17395__auto___20055,out))
;
return ((function (switch__17283__auto__,c__17395__auto___20055,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_20047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20047[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_20047[(1)] = (1));

return statearr_20047;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_20021){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_20021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e20048){if((e20048 instanceof Object)){
var ex__17287__auto__ = e20048;
var statearr_20049_20070 = state_20021;
(statearr_20049_20070[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20071 = state_20021;
state_20021 = G__20071;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_20021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_20021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___20055,out))
})();
var state__17397__auto__ = (function (){var statearr_20050 = f__17396__auto__.call(null);
(statearr_20050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___20055);

return statearr_20050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___20055,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20072 = [];
var len__14245__auto___20146 = arguments.length;
var i__14246__auto___20147 = (0);
while(true){
if((i__14246__auto___20147 < len__14245__auto___20146)){
args20072.push((arguments[i__14246__auto___20147]));

var G__20148 = (i__14246__auto___20147 + (1));
i__14246__auto___20147 = G__20148;
continue;
} else {
}
break;
}

var G__20074 = args20072.length;
switch (G__20074) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20072.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17395__auto___20150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto___20150,out){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto___20150,out){
return (function (state_20116){
var state_val_20117 = (state_20116[(1)]);
if((state_val_20117 === (7))){
var inst_20112 = (state_20116[(2)]);
var state_20116__$1 = state_20116;
var statearr_20118_20151 = state_20116__$1;
(statearr_20118_20151[(2)] = inst_20112);

(statearr_20118_20151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (1))){
var inst_20075 = [];
var inst_20076 = inst_20075;
var inst_20077 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20116__$1 = (function (){var statearr_20119 = state_20116;
(statearr_20119[(7)] = inst_20077);

(statearr_20119[(8)] = inst_20076);

return statearr_20119;
})();
var statearr_20120_20152 = state_20116__$1;
(statearr_20120_20152[(2)] = null);

(statearr_20120_20152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (4))){
var inst_20080 = (state_20116[(9)]);
var inst_20080__$1 = (state_20116[(2)]);
var inst_20081 = (inst_20080__$1 == null);
var inst_20082 = cljs.core.not.call(null,inst_20081);
var state_20116__$1 = (function (){var statearr_20121 = state_20116;
(statearr_20121[(9)] = inst_20080__$1);

return statearr_20121;
})();
if(inst_20082){
var statearr_20122_20153 = state_20116__$1;
(statearr_20122_20153[(1)] = (5));

} else {
var statearr_20123_20154 = state_20116__$1;
(statearr_20123_20154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (15))){
var inst_20106 = (state_20116[(2)]);
var state_20116__$1 = state_20116;
var statearr_20124_20155 = state_20116__$1;
(statearr_20124_20155[(2)] = inst_20106);

(statearr_20124_20155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (13))){
var state_20116__$1 = state_20116;
var statearr_20125_20156 = state_20116__$1;
(statearr_20125_20156[(2)] = null);

(statearr_20125_20156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (6))){
var inst_20076 = (state_20116[(8)]);
var inst_20101 = inst_20076.length;
var inst_20102 = (inst_20101 > (0));
var state_20116__$1 = state_20116;
if(cljs.core.truth_(inst_20102)){
var statearr_20126_20157 = state_20116__$1;
(statearr_20126_20157[(1)] = (12));

} else {
var statearr_20127_20158 = state_20116__$1;
(statearr_20127_20158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (3))){
var inst_20114 = (state_20116[(2)]);
var state_20116__$1 = state_20116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20116__$1,inst_20114);
} else {
if((state_val_20117 === (12))){
var inst_20076 = (state_20116[(8)]);
var inst_20104 = cljs.core.vec.call(null,inst_20076);
var state_20116__$1 = state_20116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20116__$1,(15),out,inst_20104);
} else {
if((state_val_20117 === (2))){
var state_20116__$1 = state_20116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20116__$1,(4),ch);
} else {
if((state_val_20117 === (11))){
var inst_20080 = (state_20116[(9)]);
var inst_20084 = (state_20116[(10)]);
var inst_20094 = (state_20116[(2)]);
var inst_20095 = [];
var inst_20096 = inst_20095.push(inst_20080);
var inst_20076 = inst_20095;
var inst_20077 = inst_20084;
var state_20116__$1 = (function (){var statearr_20128 = state_20116;
(statearr_20128[(7)] = inst_20077);

(statearr_20128[(8)] = inst_20076);

(statearr_20128[(11)] = inst_20096);

(statearr_20128[(12)] = inst_20094);

return statearr_20128;
})();
var statearr_20129_20159 = state_20116__$1;
(statearr_20129_20159[(2)] = null);

(statearr_20129_20159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (9))){
var inst_20076 = (state_20116[(8)]);
var inst_20092 = cljs.core.vec.call(null,inst_20076);
var state_20116__$1 = state_20116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20116__$1,(11),out,inst_20092);
} else {
if((state_val_20117 === (5))){
var inst_20077 = (state_20116[(7)]);
var inst_20080 = (state_20116[(9)]);
var inst_20084 = (state_20116[(10)]);
var inst_20084__$1 = f.call(null,inst_20080);
var inst_20085 = cljs.core._EQ_.call(null,inst_20084__$1,inst_20077);
var inst_20086 = cljs.core.keyword_identical_QMARK_.call(null,inst_20077,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20087 = (inst_20085) || (inst_20086);
var state_20116__$1 = (function (){var statearr_20130 = state_20116;
(statearr_20130[(10)] = inst_20084__$1);

return statearr_20130;
})();
if(cljs.core.truth_(inst_20087)){
var statearr_20131_20160 = state_20116__$1;
(statearr_20131_20160[(1)] = (8));

} else {
var statearr_20132_20161 = state_20116__$1;
(statearr_20132_20161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (14))){
var inst_20109 = (state_20116[(2)]);
var inst_20110 = cljs.core.async.close_BANG_.call(null,out);
var state_20116__$1 = (function (){var statearr_20134 = state_20116;
(statearr_20134[(13)] = inst_20109);

return statearr_20134;
})();
var statearr_20135_20162 = state_20116__$1;
(statearr_20135_20162[(2)] = inst_20110);

(statearr_20135_20162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (10))){
var inst_20099 = (state_20116[(2)]);
var state_20116__$1 = state_20116;
var statearr_20136_20163 = state_20116__$1;
(statearr_20136_20163[(2)] = inst_20099);

(statearr_20136_20163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20117 === (8))){
var inst_20076 = (state_20116[(8)]);
var inst_20080 = (state_20116[(9)]);
var inst_20084 = (state_20116[(10)]);
var inst_20089 = inst_20076.push(inst_20080);
var tmp20133 = inst_20076;
var inst_20076__$1 = tmp20133;
var inst_20077 = inst_20084;
var state_20116__$1 = (function (){var statearr_20137 = state_20116;
(statearr_20137[(14)] = inst_20089);

(statearr_20137[(7)] = inst_20077);

(statearr_20137[(8)] = inst_20076__$1);

return statearr_20137;
})();
var statearr_20138_20164 = state_20116__$1;
(statearr_20138_20164[(2)] = null);

(statearr_20138_20164[(1)] = (2));


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
});})(c__17395__auto___20150,out))
;
return ((function (switch__17283__auto__,c__17395__auto___20150,out){
return (function() {
var cljs$core$async$state_machine__17284__auto__ = null;
var cljs$core$async$state_machine__17284__auto____0 = (function (){
var statearr_20142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20142[(0)] = cljs$core$async$state_machine__17284__auto__);

(statearr_20142[(1)] = (1));

return statearr_20142;
});
var cljs$core$async$state_machine__17284__auto____1 = (function (state_20116){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_20116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e20143){if((e20143 instanceof Object)){
var ex__17287__auto__ = e20143;
var statearr_20144_20165 = state_20116;
(statearr_20144_20165[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20166 = state_20116;
state_20116 = G__20166;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
cljs$core$async$state_machine__17284__auto__ = function(state_20116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17284__auto____1.call(this,state_20116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17284__auto____0;
cljs$core$async$state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17284__auto____1;
return cljs$core$async$state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto___20150,out))
})();
var state__17397__auto__ = (function (){var statearr_20145 = f__17396__auto__.call(null);
(statearr_20145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto___20150);

return statearr_20145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto___20150,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1455204572685