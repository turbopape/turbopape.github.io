// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args47561 = [];
var len__45375__auto___47567 = arguments.length;
var i__45376__auto___47568 = (0);
while(true){
if((i__45376__auto___47568 < len__45375__auto___47567)){
args47561.push((arguments[i__45376__auto___47568]));

var G__47569 = (i__45376__auto___47568 + (1));
i__45376__auto___47568 = G__47569;
continue;
} else {
}
break;
}

var G__47563 = args47561.length;
switch (G__47563) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47561.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47564 = (function (f,blockable,meta47565){
this.f = f;
this.blockable = blockable;
this.meta47565 = meta47565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47566,meta47565__$1){
var self__ = this;
var _47566__$1 = this;
return (new cljs.core.async.t_cljs$core$async47564(self__.f,self__.blockable,meta47565__$1));
});

cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47566){
var self__ = this;
var _47566__$1 = this;
return self__.meta47565;
});

cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47565","meta47565",-1910724306,null)], null);
});

cljs.core.async.t_cljs$core$async47564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47564";

cljs.core.async.t_cljs$core$async47564.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async47564");
});

cljs.core.async.__GT_t_cljs$core$async47564 = (function cljs$core$async$__GT_t_cljs$core$async47564(f__$1,blockable__$1,meta47565){
return (new cljs.core.async.t_cljs$core$async47564(f__$1,blockable__$1,meta47565));
});

}

return (new cljs.core.async.t_cljs$core$async47564(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args47573 = [];
var len__45375__auto___47576 = arguments.length;
var i__45376__auto___47577 = (0);
while(true){
if((i__45376__auto___47577 < len__45375__auto___47576)){
args47573.push((arguments[i__45376__auto___47577]));

var G__47578 = (i__45376__auto___47577 + (1));
i__45376__auto___47577 = G__47578;
continue;
} else {
}
break;
}

var G__47575 = args47573.length;
switch (G__47575) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47573.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args47580 = [];
var len__45375__auto___47583 = arguments.length;
var i__45376__auto___47584 = (0);
while(true){
if((i__45376__auto___47584 < len__45375__auto___47583)){
args47580.push((arguments[i__45376__auto___47584]));

var G__47585 = (i__45376__auto___47584 + (1));
i__45376__auto___47584 = G__47585;
continue;
} else {
}
break;
}

var G__47582 = args47580.length;
switch (G__47582) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47580.length)].join('')));

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
var args47587 = [];
var len__45375__auto___47590 = arguments.length;
var i__45376__auto___47591 = (0);
while(true){
if((i__45376__auto___47591 < len__45375__auto___47590)){
args47587.push((arguments[i__45376__auto___47591]));

var G__47592 = (i__45376__auto___47591 + (1));
i__45376__auto___47591 = G__47592;
continue;
} else {
}
break;
}

var G__47589 = args47587.length;
switch (G__47589) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47587.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47594 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47594);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47594,ret){
return (function (){
return fn1.call(null,val_47594);
});})(val_47594,ret))
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
var args47595 = [];
var len__45375__auto___47598 = arguments.length;
var i__45376__auto___47599 = (0);
while(true){
if((i__45376__auto___47599 < len__45375__auto___47598)){
args47595.push((arguments[i__45376__auto___47599]));

var G__47600 = (i__45376__auto___47599 + (1));
i__45376__auto___47599 = G__47600;
continue;
} else {
}
break;
}

var G__47597 = args47595.length;
switch (G__47597) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47595.length)].join('')));

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
var n__45185__auto___47602 = n;
var x_47603 = (0);
while(true){
if((x_47603 < n__45185__auto___47602)){
(a[x_47603] = (0));

var G__47604 = (x_47603 + (1));
x_47603 = G__47604;
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

var G__47605 = (i + (1));
i = G__47605;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47609 = (function (flag,meta47610){
this.flag = flag;
this.meta47610 = meta47610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47611,meta47610__$1){
var self__ = this;
var _47611__$1 = this;
return (new cljs.core.async.t_cljs$core$async47609(self__.flag,meta47610__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47611){
var self__ = this;
var _47611__$1 = this;
return self__.meta47610;
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47610","meta47610",864755033,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47609";

cljs.core.async.t_cljs$core$async47609.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async47609");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47609 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47609(flag__$1,meta47610){
return (new cljs.core.async.t_cljs$core$async47609(flag__$1,meta47610));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47609(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47615 = (function (flag,cb,meta47616){
this.flag = flag;
this.cb = cb;
this.meta47616 = meta47616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47617,meta47616__$1){
var self__ = this;
var _47617__$1 = this;
return (new cljs.core.async.t_cljs$core$async47615(self__.flag,self__.cb,meta47616__$1));
});

cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47617){
var self__ = this;
var _47617__$1 = this;
return self__.meta47616;
});

cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47616","meta47616",1039647081,null)], null);
});

cljs.core.async.t_cljs$core$async47615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47615";

cljs.core.async.t_cljs$core$async47615.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async47615");
});

cljs.core.async.__GT_t_cljs$core$async47615 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47615(flag__$1,cb__$1,meta47616){
return (new cljs.core.async.t_cljs$core$async47615(flag__$1,cb__$1,meta47616));
});

}

return (new cljs.core.async.t_cljs$core$async47615(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47618_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47618_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47619_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47619_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44267__auto__ = wport;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47620 = (i + (1));
i = G__47620;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44267__auto__ = ret;
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44255__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44255__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44255__auto__;
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
var args__45382__auto__ = [];
var len__45375__auto___47626 = arguments.length;
var i__45376__auto___47627 = (0);
while(true){
if((i__45376__auto___47627 < len__45375__auto___47626)){
args__45382__auto__.push((arguments[i__45376__auto___47627]));

var G__47628 = (i__45376__auto___47627 + (1));
i__45376__auto___47627 = G__47628;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47623){
var map__47624 = p__47623;
var map__47624__$1 = ((((!((map__47624 == null)))?((((map__47624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47624):map__47624);
var opts = map__47624__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47621){
var G__47622 = cljs.core.first.call(null,seq47621);
var seq47621__$1 = cljs.core.next.call(null,seq47621);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47622,seq47621__$1);
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
var args47629 = [];
var len__45375__auto___47679 = arguments.length;
var i__45376__auto___47680 = (0);
while(true){
if((i__45376__auto___47680 < len__45375__auto___47679)){
args47629.push((arguments[i__45376__auto___47680]));

var G__47681 = (i__45376__auto___47680 + (1));
i__45376__auto___47680 = G__47681;
continue;
} else {
}
break;
}

var G__47631 = args47629.length;
switch (G__47631) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47629.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47516__auto___47683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___47683){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___47683){
return (function (state_47655){
var state_val_47656 = (state_47655[(1)]);
if((state_val_47656 === (7))){
var inst_47651 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47657_47684 = state_47655__$1;
(statearr_47657_47684[(2)] = inst_47651);

(statearr_47657_47684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (1))){
var state_47655__$1 = state_47655;
var statearr_47658_47685 = state_47655__$1;
(statearr_47658_47685[(2)] = null);

(statearr_47658_47685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (4))){
var inst_47634 = (state_47655[(7)]);
var inst_47634__$1 = (state_47655[(2)]);
var inst_47635 = (inst_47634__$1 == null);
var state_47655__$1 = (function (){var statearr_47659 = state_47655;
(statearr_47659[(7)] = inst_47634__$1);

return statearr_47659;
})();
if(cljs.core.truth_(inst_47635)){
var statearr_47660_47686 = state_47655__$1;
(statearr_47660_47686[(1)] = (5));

} else {
var statearr_47661_47687 = state_47655__$1;
(statearr_47661_47687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (13))){
var state_47655__$1 = state_47655;
var statearr_47662_47688 = state_47655__$1;
(statearr_47662_47688[(2)] = null);

(statearr_47662_47688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (6))){
var inst_47634 = (state_47655[(7)]);
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47655__$1,(11),to,inst_47634);
} else {
if((state_val_47656 === (3))){
var inst_47653 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47655__$1,inst_47653);
} else {
if((state_val_47656 === (12))){
var state_47655__$1 = state_47655;
var statearr_47663_47689 = state_47655__$1;
(statearr_47663_47689[(2)] = null);

(statearr_47663_47689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (2))){
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47655__$1,(4),from);
} else {
if((state_val_47656 === (11))){
var inst_47644 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
if(cljs.core.truth_(inst_47644)){
var statearr_47664_47690 = state_47655__$1;
(statearr_47664_47690[(1)] = (12));

} else {
var statearr_47665_47691 = state_47655__$1;
(statearr_47665_47691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (9))){
var state_47655__$1 = state_47655;
var statearr_47666_47692 = state_47655__$1;
(statearr_47666_47692[(2)] = null);

(statearr_47666_47692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (5))){
var state_47655__$1 = state_47655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47667_47693 = state_47655__$1;
(statearr_47667_47693[(1)] = (8));

} else {
var statearr_47668_47694 = state_47655__$1;
(statearr_47668_47694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (14))){
var inst_47649 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47669_47695 = state_47655__$1;
(statearr_47669_47695[(2)] = inst_47649);

(statearr_47669_47695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (10))){
var inst_47641 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47670_47696 = state_47655__$1;
(statearr_47670_47696[(2)] = inst_47641);

(statearr_47670_47696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (8))){
var inst_47638 = cljs.core.async.close_BANG_.call(null,to);
var state_47655__$1 = state_47655;
var statearr_47671_47697 = state_47655__$1;
(statearr_47671_47697[(2)] = inst_47638);

(statearr_47671_47697[(1)] = (10));


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
});})(c__47516__auto___47683))
;
return ((function (switch__46318__auto__,c__47516__auto___47683){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_47675 = [null,null,null,null,null,null,null,null];
(statearr_47675[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_47675[(1)] = (1));

return statearr_47675;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_47655){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_47655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e47676){if((e47676 instanceof Object)){
var ex__46322__auto__ = e47676;
var statearr_47677_47698 = state_47655;
(statearr_47677_47698[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47699 = state_47655;
state_47655 = G__47699;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_47655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_47655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___47683))
})();
var state__47518__auto__ = (function (){var statearr_47678 = f__47517__auto__.call(null);
(statearr_47678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___47683);

return statearr_47678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___47683))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47887){
var vec__47888 = p__47887;
var v = cljs.core.nth.call(null,vec__47888,(0),null);
var p = cljs.core.nth.call(null,vec__47888,(1),null);
var job = vec__47888;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47516__auto___48074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results){
return (function (state_47895){
var state_val_47896 = (state_47895[(1)]);
if((state_val_47896 === (1))){
var state_47895__$1 = state_47895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47895__$1,(2),res,v);
} else {
if((state_val_47896 === (2))){
var inst_47892 = (state_47895[(2)]);
var inst_47893 = cljs.core.async.close_BANG_.call(null,res);
var state_47895__$1 = (function (){var statearr_47897 = state_47895;
(statearr_47897[(7)] = inst_47892);

return statearr_47897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47895__$1,inst_47893);
} else {
return null;
}
}
});})(c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results))
;
return ((function (switch__46318__auto__,c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_47901 = [null,null,null,null,null,null,null,null];
(statearr_47901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__);

(statearr_47901[(1)] = (1));

return statearr_47901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1 = (function (state_47895){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_47895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e47902){if((e47902 instanceof Object)){
var ex__46322__auto__ = e47902;
var statearr_47903_48075 = state_47895;
(statearr_47903_48075[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48076 = state_47895;
state_47895 = G__48076;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = function(state_47895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1.call(this,state_47895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results))
})();
var state__47518__auto__ = (function (){var statearr_47904 = f__47517__auto__.call(null);
(statearr_47904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48074);

return statearr_47904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___48074,res,vec__47888,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47905){
var vec__47906 = p__47905;
var v = cljs.core.nth.call(null,vec__47906,(0),null);
var p = cljs.core.nth.call(null,vec__47906,(1),null);
var job = vec__47906;
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
var n__45185__auto___48077 = n;
var __48078 = (0);
while(true){
if((__48078 < n__45185__auto___48077)){
var G__47909_48079 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47909_48079) {
case "compute":
var c__47516__auto___48081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48078,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (__48078,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function (state_47922){
var state_val_47923 = (state_47922[(1)]);
if((state_val_47923 === (1))){
var state_47922__$1 = state_47922;
var statearr_47924_48082 = state_47922__$1;
(statearr_47924_48082[(2)] = null);

(statearr_47924_48082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47923 === (2))){
var state_47922__$1 = state_47922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47922__$1,(4),jobs);
} else {
if((state_val_47923 === (3))){
var inst_47920 = (state_47922[(2)]);
var state_47922__$1 = state_47922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47922__$1,inst_47920);
} else {
if((state_val_47923 === (4))){
var inst_47912 = (state_47922[(2)]);
var inst_47913 = process.call(null,inst_47912);
var state_47922__$1 = state_47922;
if(cljs.core.truth_(inst_47913)){
var statearr_47925_48083 = state_47922__$1;
(statearr_47925_48083[(1)] = (5));

} else {
var statearr_47926_48084 = state_47922__$1;
(statearr_47926_48084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47923 === (5))){
var state_47922__$1 = state_47922;
var statearr_47927_48085 = state_47922__$1;
(statearr_47927_48085[(2)] = null);

(statearr_47927_48085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47923 === (6))){
var state_47922__$1 = state_47922;
var statearr_47928_48086 = state_47922__$1;
(statearr_47928_48086[(2)] = null);

(statearr_47928_48086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47923 === (7))){
var inst_47918 = (state_47922[(2)]);
var state_47922__$1 = state_47922;
var statearr_47929_48087 = state_47922__$1;
(statearr_47929_48087[(2)] = inst_47918);

(statearr_47929_48087[(1)] = (3));


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
});})(__48078,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
;
return ((function (__48078,switch__46318__auto__,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_47933 = [null,null,null,null,null,null,null];
(statearr_47933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__);

(statearr_47933[(1)] = (1));

return statearr_47933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1 = (function (state_47922){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_47922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e47934){if((e47934 instanceof Object)){
var ex__46322__auto__ = e47934;
var statearr_47935_48088 = state_47922;
(statearr_47935_48088[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48089 = state_47922;
state_47922 = G__48089;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = function(state_47922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1.call(this,state_47922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__;
})()
;})(__48078,switch__46318__auto__,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
})();
var state__47518__auto__ = (function (){var statearr_47936 = f__47517__auto__.call(null);
(statearr_47936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48081);

return statearr_47936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(__48078,c__47516__auto___48081,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
);


break;
case "async":
var c__47516__auto___48090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48078,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (__48078,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function (state_47949){
var state_val_47950 = (state_47949[(1)]);
if((state_val_47950 === (1))){
var state_47949__$1 = state_47949;
var statearr_47951_48091 = state_47949__$1;
(statearr_47951_48091[(2)] = null);

(statearr_47951_48091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (2))){
var state_47949__$1 = state_47949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47949__$1,(4),jobs);
} else {
if((state_val_47950 === (3))){
var inst_47947 = (state_47949[(2)]);
var state_47949__$1 = state_47949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47949__$1,inst_47947);
} else {
if((state_val_47950 === (4))){
var inst_47939 = (state_47949[(2)]);
var inst_47940 = async.call(null,inst_47939);
var state_47949__$1 = state_47949;
if(cljs.core.truth_(inst_47940)){
var statearr_47952_48092 = state_47949__$1;
(statearr_47952_48092[(1)] = (5));

} else {
var statearr_47953_48093 = state_47949__$1;
(statearr_47953_48093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (5))){
var state_47949__$1 = state_47949;
var statearr_47954_48094 = state_47949__$1;
(statearr_47954_48094[(2)] = null);

(statearr_47954_48094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (6))){
var state_47949__$1 = state_47949;
var statearr_47955_48095 = state_47949__$1;
(statearr_47955_48095[(2)] = null);

(statearr_47955_48095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (7))){
var inst_47945 = (state_47949[(2)]);
var state_47949__$1 = state_47949;
var statearr_47956_48096 = state_47949__$1;
(statearr_47956_48096[(2)] = inst_47945);

(statearr_47956_48096[(1)] = (3));


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
});})(__48078,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
;
return ((function (__48078,switch__46318__auto__,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_47960 = [null,null,null,null,null,null,null];
(statearr_47960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__);

(statearr_47960[(1)] = (1));

return statearr_47960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1 = (function (state_47949){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_47949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e47961){if((e47961 instanceof Object)){
var ex__46322__auto__ = e47961;
var statearr_47962_48097 = state_47949;
(statearr_47962_48097[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48098 = state_47949;
state_47949 = G__48098;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = function(state_47949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1.call(this,state_47949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__;
})()
;})(__48078,switch__46318__auto__,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
})();
var state__47518__auto__ = (function (){var statearr_47963 = f__47517__auto__.call(null);
(statearr_47963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48090);

return statearr_47963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(__48078,c__47516__auto___48090,G__47909_48079,n__45185__auto___48077,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__48099 = (__48078 + (1));
__48078 = G__48099;
continue;
} else {
}
break;
}

var c__47516__auto___48100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___48100,jobs,results,process,async){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___48100,jobs,results,process,async){
return (function (state_47985){
var state_val_47986 = (state_47985[(1)]);
if((state_val_47986 === (1))){
var state_47985__$1 = state_47985;
var statearr_47987_48101 = state_47985__$1;
(statearr_47987_48101[(2)] = null);

(statearr_47987_48101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (2))){
var state_47985__$1 = state_47985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47985__$1,(4),from);
} else {
if((state_val_47986 === (3))){
var inst_47983 = (state_47985[(2)]);
var state_47985__$1 = state_47985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47985__$1,inst_47983);
} else {
if((state_val_47986 === (4))){
var inst_47966 = (state_47985[(7)]);
var inst_47966__$1 = (state_47985[(2)]);
var inst_47967 = (inst_47966__$1 == null);
var state_47985__$1 = (function (){var statearr_47988 = state_47985;
(statearr_47988[(7)] = inst_47966__$1);

return statearr_47988;
})();
if(cljs.core.truth_(inst_47967)){
var statearr_47989_48102 = state_47985__$1;
(statearr_47989_48102[(1)] = (5));

} else {
var statearr_47990_48103 = state_47985__$1;
(statearr_47990_48103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (5))){
var inst_47969 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47985__$1 = state_47985;
var statearr_47991_48104 = state_47985__$1;
(statearr_47991_48104[(2)] = inst_47969);

(statearr_47991_48104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (6))){
var inst_47971 = (state_47985[(8)]);
var inst_47966 = (state_47985[(7)]);
var inst_47971__$1 = cljs.core.async.chan.call(null,(1));
var inst_47972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47973 = [inst_47966,inst_47971__$1];
var inst_47974 = (new cljs.core.PersistentVector(null,2,(5),inst_47972,inst_47973,null));
var state_47985__$1 = (function (){var statearr_47992 = state_47985;
(statearr_47992[(8)] = inst_47971__$1);

return statearr_47992;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47985__$1,(8),jobs,inst_47974);
} else {
if((state_val_47986 === (7))){
var inst_47981 = (state_47985[(2)]);
var state_47985__$1 = state_47985;
var statearr_47993_48105 = state_47985__$1;
(statearr_47993_48105[(2)] = inst_47981);

(statearr_47993_48105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (8))){
var inst_47971 = (state_47985[(8)]);
var inst_47976 = (state_47985[(2)]);
var state_47985__$1 = (function (){var statearr_47994 = state_47985;
(statearr_47994[(9)] = inst_47976);

return statearr_47994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47985__$1,(9),results,inst_47971);
} else {
if((state_val_47986 === (9))){
var inst_47978 = (state_47985[(2)]);
var state_47985__$1 = (function (){var statearr_47995 = state_47985;
(statearr_47995[(10)] = inst_47978);

return statearr_47995;
})();
var statearr_47996_48106 = state_47985__$1;
(statearr_47996_48106[(2)] = null);

(statearr_47996_48106[(1)] = (2));


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
});})(c__47516__auto___48100,jobs,results,process,async))
;
return ((function (switch__46318__auto__,c__47516__auto___48100,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_48000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__);

(statearr_48000[(1)] = (1));

return statearr_48000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1 = (function (state_47985){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_47985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48001){if((e48001 instanceof Object)){
var ex__46322__auto__ = e48001;
var statearr_48002_48107 = state_47985;
(statearr_48002_48107[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_47985;
state_47985 = G__48108;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = function(state_47985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1.call(this,state_47985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___48100,jobs,results,process,async))
})();
var state__47518__auto__ = (function (){var statearr_48003 = f__47517__auto__.call(null);
(statearr_48003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48100);

return statearr_48003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___48100,jobs,results,process,async))
);


var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__,jobs,results,process,async){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__,jobs,results,process,async){
return (function (state_48041){
var state_val_48042 = (state_48041[(1)]);
if((state_val_48042 === (7))){
var inst_48037 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
var statearr_48043_48109 = state_48041__$1;
(statearr_48043_48109[(2)] = inst_48037);

(statearr_48043_48109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (20))){
var state_48041__$1 = state_48041;
var statearr_48044_48110 = state_48041__$1;
(statearr_48044_48110[(2)] = null);

(statearr_48044_48110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (1))){
var state_48041__$1 = state_48041;
var statearr_48045_48111 = state_48041__$1;
(statearr_48045_48111[(2)] = null);

(statearr_48045_48111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (4))){
var inst_48006 = (state_48041[(7)]);
var inst_48006__$1 = (state_48041[(2)]);
var inst_48007 = (inst_48006__$1 == null);
var state_48041__$1 = (function (){var statearr_48046 = state_48041;
(statearr_48046[(7)] = inst_48006__$1);

return statearr_48046;
})();
if(cljs.core.truth_(inst_48007)){
var statearr_48047_48112 = state_48041__$1;
(statearr_48047_48112[(1)] = (5));

} else {
var statearr_48048_48113 = state_48041__$1;
(statearr_48048_48113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (15))){
var inst_48019 = (state_48041[(8)]);
var state_48041__$1 = state_48041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48041__$1,(18),to,inst_48019);
} else {
if((state_val_48042 === (21))){
var inst_48032 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
var statearr_48049_48114 = state_48041__$1;
(statearr_48049_48114[(2)] = inst_48032);

(statearr_48049_48114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (13))){
var inst_48034 = (state_48041[(2)]);
var state_48041__$1 = (function (){var statearr_48050 = state_48041;
(statearr_48050[(9)] = inst_48034);

return statearr_48050;
})();
var statearr_48051_48115 = state_48041__$1;
(statearr_48051_48115[(2)] = null);

(statearr_48051_48115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (6))){
var inst_48006 = (state_48041[(7)]);
var state_48041__$1 = state_48041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48041__$1,(11),inst_48006);
} else {
if((state_val_48042 === (17))){
var inst_48027 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
if(cljs.core.truth_(inst_48027)){
var statearr_48052_48116 = state_48041__$1;
(statearr_48052_48116[(1)] = (19));

} else {
var statearr_48053_48117 = state_48041__$1;
(statearr_48053_48117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (3))){
var inst_48039 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48041__$1,inst_48039);
} else {
if((state_val_48042 === (12))){
var inst_48016 = (state_48041[(10)]);
var state_48041__$1 = state_48041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48041__$1,(14),inst_48016);
} else {
if((state_val_48042 === (2))){
var state_48041__$1 = state_48041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48041__$1,(4),results);
} else {
if((state_val_48042 === (19))){
var state_48041__$1 = state_48041;
var statearr_48054_48118 = state_48041__$1;
(statearr_48054_48118[(2)] = null);

(statearr_48054_48118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (11))){
var inst_48016 = (state_48041[(2)]);
var state_48041__$1 = (function (){var statearr_48055 = state_48041;
(statearr_48055[(10)] = inst_48016);

return statearr_48055;
})();
var statearr_48056_48119 = state_48041__$1;
(statearr_48056_48119[(2)] = null);

(statearr_48056_48119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (9))){
var state_48041__$1 = state_48041;
var statearr_48057_48120 = state_48041__$1;
(statearr_48057_48120[(2)] = null);

(statearr_48057_48120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (5))){
var state_48041__$1 = state_48041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48058_48121 = state_48041__$1;
(statearr_48058_48121[(1)] = (8));

} else {
var statearr_48059_48122 = state_48041__$1;
(statearr_48059_48122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (14))){
var inst_48019 = (state_48041[(8)]);
var inst_48021 = (state_48041[(11)]);
var inst_48019__$1 = (state_48041[(2)]);
var inst_48020 = (inst_48019__$1 == null);
var inst_48021__$1 = cljs.core.not.call(null,inst_48020);
var state_48041__$1 = (function (){var statearr_48060 = state_48041;
(statearr_48060[(8)] = inst_48019__$1);

(statearr_48060[(11)] = inst_48021__$1);

return statearr_48060;
})();
if(inst_48021__$1){
var statearr_48061_48123 = state_48041__$1;
(statearr_48061_48123[(1)] = (15));

} else {
var statearr_48062_48124 = state_48041__$1;
(statearr_48062_48124[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (16))){
var inst_48021 = (state_48041[(11)]);
var state_48041__$1 = state_48041;
var statearr_48063_48125 = state_48041__$1;
(statearr_48063_48125[(2)] = inst_48021);

(statearr_48063_48125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (10))){
var inst_48013 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
var statearr_48064_48126 = state_48041__$1;
(statearr_48064_48126[(2)] = inst_48013);

(statearr_48064_48126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (18))){
var inst_48024 = (state_48041[(2)]);
var state_48041__$1 = state_48041;
var statearr_48065_48127 = state_48041__$1;
(statearr_48065_48127[(2)] = inst_48024);

(statearr_48065_48127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48042 === (8))){
var inst_48010 = cljs.core.async.close_BANG_.call(null,to);
var state_48041__$1 = state_48041;
var statearr_48066_48128 = state_48041__$1;
(statearr_48066_48128[(2)] = inst_48010);

(statearr_48066_48128[(1)] = (10));


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
});})(c__47516__auto__,jobs,results,process,async))
;
return ((function (switch__46318__auto__,c__47516__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_48070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__);

(statearr_48070[(1)] = (1));

return statearr_48070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1 = (function (state_48041){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_48041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48071){if((e48071 instanceof Object)){
var ex__46322__auto__ = e48071;
var statearr_48072_48129 = state_48041;
(statearr_48072_48129[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48130 = state_48041;
state_48041 = G__48130;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__ = function(state_48041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1.call(this,state_48041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__,jobs,results,process,async))
})();
var state__47518__auto__ = (function (){var statearr_48073 = f__47517__auto__.call(null);
(statearr_48073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_48073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__,jobs,results,process,async))
);

return c__47516__auto__;
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
var args48131 = [];
var len__45375__auto___48134 = arguments.length;
var i__45376__auto___48135 = (0);
while(true){
if((i__45376__auto___48135 < len__45375__auto___48134)){
args48131.push((arguments[i__45376__auto___48135]));

var G__48136 = (i__45376__auto___48135 + (1));
i__45376__auto___48135 = G__48136;
continue;
} else {
}
break;
}

var G__48133 = args48131.length;
switch (G__48133) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48131.length)].join('')));

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
var args48138 = [];
var len__45375__auto___48141 = arguments.length;
var i__45376__auto___48142 = (0);
while(true){
if((i__45376__auto___48142 < len__45375__auto___48141)){
args48138.push((arguments[i__45376__auto___48142]));

var G__48143 = (i__45376__auto___48142 + (1));
i__45376__auto___48142 = G__48143;
continue;
} else {
}
break;
}

var G__48140 = args48138.length;
switch (G__48140) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48138.length)].join('')));

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
var args48145 = [];
var len__45375__auto___48198 = arguments.length;
var i__45376__auto___48199 = (0);
while(true){
if((i__45376__auto___48199 < len__45375__auto___48198)){
args48145.push((arguments[i__45376__auto___48199]));

var G__48200 = (i__45376__auto___48199 + (1));
i__45376__auto___48199 = G__48200;
continue;
} else {
}
break;
}

var G__48147 = args48145.length;
switch (G__48147) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48145.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47516__auto___48202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___48202,tc,fc){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___48202,tc,fc){
return (function (state_48173){
var state_val_48174 = (state_48173[(1)]);
if((state_val_48174 === (7))){
var inst_48169 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
var statearr_48175_48203 = state_48173__$1;
(statearr_48175_48203[(2)] = inst_48169);

(statearr_48175_48203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (1))){
var state_48173__$1 = state_48173;
var statearr_48176_48204 = state_48173__$1;
(statearr_48176_48204[(2)] = null);

(statearr_48176_48204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (4))){
var inst_48150 = (state_48173[(7)]);
var inst_48150__$1 = (state_48173[(2)]);
var inst_48151 = (inst_48150__$1 == null);
var state_48173__$1 = (function (){var statearr_48177 = state_48173;
(statearr_48177[(7)] = inst_48150__$1);

return statearr_48177;
})();
if(cljs.core.truth_(inst_48151)){
var statearr_48178_48205 = state_48173__$1;
(statearr_48178_48205[(1)] = (5));

} else {
var statearr_48179_48206 = state_48173__$1;
(statearr_48179_48206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (13))){
var state_48173__$1 = state_48173;
var statearr_48180_48207 = state_48173__$1;
(statearr_48180_48207[(2)] = null);

(statearr_48180_48207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (6))){
var inst_48150 = (state_48173[(7)]);
var inst_48156 = p.call(null,inst_48150);
var state_48173__$1 = state_48173;
if(cljs.core.truth_(inst_48156)){
var statearr_48181_48208 = state_48173__$1;
(statearr_48181_48208[(1)] = (9));

} else {
var statearr_48182_48209 = state_48173__$1;
(statearr_48182_48209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (3))){
var inst_48171 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48173__$1,inst_48171);
} else {
if((state_val_48174 === (12))){
var state_48173__$1 = state_48173;
var statearr_48183_48210 = state_48173__$1;
(statearr_48183_48210[(2)] = null);

(statearr_48183_48210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (2))){
var state_48173__$1 = state_48173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48173__$1,(4),ch);
} else {
if((state_val_48174 === (11))){
var inst_48150 = (state_48173[(7)]);
var inst_48160 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48173__$1,(8),inst_48160,inst_48150);
} else {
if((state_val_48174 === (9))){
var state_48173__$1 = state_48173;
var statearr_48184_48211 = state_48173__$1;
(statearr_48184_48211[(2)] = tc);

(statearr_48184_48211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (5))){
var inst_48153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48154 = cljs.core.async.close_BANG_.call(null,fc);
var state_48173__$1 = (function (){var statearr_48185 = state_48173;
(statearr_48185[(8)] = inst_48153);

return statearr_48185;
})();
var statearr_48186_48212 = state_48173__$1;
(statearr_48186_48212[(2)] = inst_48154);

(statearr_48186_48212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (14))){
var inst_48167 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
var statearr_48187_48213 = state_48173__$1;
(statearr_48187_48213[(2)] = inst_48167);

(statearr_48187_48213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (10))){
var state_48173__$1 = state_48173;
var statearr_48188_48214 = state_48173__$1;
(statearr_48188_48214[(2)] = fc);

(statearr_48188_48214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (8))){
var inst_48162 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
if(cljs.core.truth_(inst_48162)){
var statearr_48189_48215 = state_48173__$1;
(statearr_48189_48215[(1)] = (12));

} else {
var statearr_48190_48216 = state_48173__$1;
(statearr_48190_48216[(1)] = (13));

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
});})(c__47516__auto___48202,tc,fc))
;
return ((function (switch__46318__auto__,c__47516__auto___48202,tc,fc){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_48194 = [null,null,null,null,null,null,null,null,null];
(statearr_48194[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_48194[(1)] = (1));

return statearr_48194;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_48173){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_48173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48195){if((e48195 instanceof Object)){
var ex__46322__auto__ = e48195;
var statearr_48196_48217 = state_48173;
(statearr_48196_48217[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48218 = state_48173;
state_48173 = G__48218;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_48173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_48173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___48202,tc,fc))
})();
var state__47518__auto__ = (function (){var statearr_48197 = f__47517__auto__.call(null);
(statearr_48197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48202);

return statearr_48197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___48202,tc,fc))
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
var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__){
return (function (state_48282){
var state_val_48283 = (state_48282[(1)]);
if((state_val_48283 === (7))){
var inst_48278 = (state_48282[(2)]);
var state_48282__$1 = state_48282;
var statearr_48284_48305 = state_48282__$1;
(statearr_48284_48305[(2)] = inst_48278);

(statearr_48284_48305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (1))){
var inst_48262 = init;
var state_48282__$1 = (function (){var statearr_48285 = state_48282;
(statearr_48285[(7)] = inst_48262);

return statearr_48285;
})();
var statearr_48286_48306 = state_48282__$1;
(statearr_48286_48306[(2)] = null);

(statearr_48286_48306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (4))){
var inst_48265 = (state_48282[(8)]);
var inst_48265__$1 = (state_48282[(2)]);
var inst_48266 = (inst_48265__$1 == null);
var state_48282__$1 = (function (){var statearr_48287 = state_48282;
(statearr_48287[(8)] = inst_48265__$1);

return statearr_48287;
})();
if(cljs.core.truth_(inst_48266)){
var statearr_48288_48307 = state_48282__$1;
(statearr_48288_48307[(1)] = (5));

} else {
var statearr_48289_48308 = state_48282__$1;
(statearr_48289_48308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (6))){
var inst_48265 = (state_48282[(8)]);
var inst_48262 = (state_48282[(7)]);
var inst_48269 = (state_48282[(9)]);
var inst_48269__$1 = f.call(null,inst_48262,inst_48265);
var inst_48270 = cljs.core.reduced_QMARK_.call(null,inst_48269__$1);
var state_48282__$1 = (function (){var statearr_48290 = state_48282;
(statearr_48290[(9)] = inst_48269__$1);

return statearr_48290;
})();
if(inst_48270){
var statearr_48291_48309 = state_48282__$1;
(statearr_48291_48309[(1)] = (8));

} else {
var statearr_48292_48310 = state_48282__$1;
(statearr_48292_48310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (3))){
var inst_48280 = (state_48282[(2)]);
var state_48282__$1 = state_48282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48282__$1,inst_48280);
} else {
if((state_val_48283 === (2))){
var state_48282__$1 = state_48282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48282__$1,(4),ch);
} else {
if((state_val_48283 === (9))){
var inst_48269 = (state_48282[(9)]);
var inst_48262 = inst_48269;
var state_48282__$1 = (function (){var statearr_48293 = state_48282;
(statearr_48293[(7)] = inst_48262);

return statearr_48293;
})();
var statearr_48294_48311 = state_48282__$1;
(statearr_48294_48311[(2)] = null);

(statearr_48294_48311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (5))){
var inst_48262 = (state_48282[(7)]);
var state_48282__$1 = state_48282;
var statearr_48295_48312 = state_48282__$1;
(statearr_48295_48312[(2)] = inst_48262);

(statearr_48295_48312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (10))){
var inst_48276 = (state_48282[(2)]);
var state_48282__$1 = state_48282;
var statearr_48296_48313 = state_48282__$1;
(statearr_48296_48313[(2)] = inst_48276);

(statearr_48296_48313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48283 === (8))){
var inst_48269 = (state_48282[(9)]);
var inst_48272 = cljs.core.deref.call(null,inst_48269);
var state_48282__$1 = state_48282;
var statearr_48297_48314 = state_48282__$1;
(statearr_48297_48314[(2)] = inst_48272);

(statearr_48297_48314[(1)] = (10));


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
});})(c__47516__auto__))
;
return ((function (switch__46318__auto__,c__47516__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46319__auto____0 = (function (){
var statearr_48301 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48301[(0)] = cljs$core$async$reduce_$_state_machine__46319__auto__);

(statearr_48301[(1)] = (1));

return statearr_48301;
});
var cljs$core$async$reduce_$_state_machine__46319__auto____1 = (function (state_48282){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_48282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48302){if((e48302 instanceof Object)){
var ex__46322__auto__ = e48302;
var statearr_48303_48315 = state_48282;
(statearr_48303_48315[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48316 = state_48282;
state_48282 = G__48316;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46319__auto__ = function(state_48282){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46319__auto____1.call(this,state_48282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46319__auto____0;
cljs$core$async$reduce_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46319__auto____1;
return cljs$core$async$reduce_$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__))
})();
var state__47518__auto__ = (function (){var statearr_48304 = f__47517__auto__.call(null);
(statearr_48304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_48304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__))
);

return c__47516__auto__;
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
var args48317 = [];
var len__45375__auto___48369 = arguments.length;
var i__45376__auto___48370 = (0);
while(true){
if((i__45376__auto___48370 < len__45375__auto___48369)){
args48317.push((arguments[i__45376__auto___48370]));

var G__48371 = (i__45376__auto___48370 + (1));
i__45376__auto___48370 = G__48371;
continue;
} else {
}
break;
}

var G__48319 = args48317.length;
switch (G__48319) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48317.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__){
return (function (state_48344){
var state_val_48345 = (state_48344[(1)]);
if((state_val_48345 === (7))){
var inst_48326 = (state_48344[(2)]);
var state_48344__$1 = state_48344;
var statearr_48346_48373 = state_48344__$1;
(statearr_48346_48373[(2)] = inst_48326);

(statearr_48346_48373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (1))){
var inst_48320 = cljs.core.seq.call(null,coll);
var inst_48321 = inst_48320;
var state_48344__$1 = (function (){var statearr_48347 = state_48344;
(statearr_48347[(7)] = inst_48321);

return statearr_48347;
})();
var statearr_48348_48374 = state_48344__$1;
(statearr_48348_48374[(2)] = null);

(statearr_48348_48374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (4))){
var inst_48321 = (state_48344[(7)]);
var inst_48324 = cljs.core.first.call(null,inst_48321);
var state_48344__$1 = state_48344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48344__$1,(7),ch,inst_48324);
} else {
if((state_val_48345 === (13))){
var inst_48338 = (state_48344[(2)]);
var state_48344__$1 = state_48344;
var statearr_48349_48375 = state_48344__$1;
(statearr_48349_48375[(2)] = inst_48338);

(statearr_48349_48375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (6))){
var inst_48329 = (state_48344[(2)]);
var state_48344__$1 = state_48344;
if(cljs.core.truth_(inst_48329)){
var statearr_48350_48376 = state_48344__$1;
(statearr_48350_48376[(1)] = (8));

} else {
var statearr_48351_48377 = state_48344__$1;
(statearr_48351_48377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (3))){
var inst_48342 = (state_48344[(2)]);
var state_48344__$1 = state_48344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48344__$1,inst_48342);
} else {
if((state_val_48345 === (12))){
var state_48344__$1 = state_48344;
var statearr_48352_48378 = state_48344__$1;
(statearr_48352_48378[(2)] = null);

(statearr_48352_48378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (2))){
var inst_48321 = (state_48344[(7)]);
var state_48344__$1 = state_48344;
if(cljs.core.truth_(inst_48321)){
var statearr_48353_48379 = state_48344__$1;
(statearr_48353_48379[(1)] = (4));

} else {
var statearr_48354_48380 = state_48344__$1;
(statearr_48354_48380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (11))){
var inst_48335 = cljs.core.async.close_BANG_.call(null,ch);
var state_48344__$1 = state_48344;
var statearr_48355_48381 = state_48344__$1;
(statearr_48355_48381[(2)] = inst_48335);

(statearr_48355_48381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (9))){
var state_48344__$1 = state_48344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48356_48382 = state_48344__$1;
(statearr_48356_48382[(1)] = (11));

} else {
var statearr_48357_48383 = state_48344__$1;
(statearr_48357_48383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (5))){
var inst_48321 = (state_48344[(7)]);
var state_48344__$1 = state_48344;
var statearr_48358_48385 = state_48344__$1;
(statearr_48358_48385[(2)] = inst_48321);

(statearr_48358_48385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (10))){
var inst_48340 = (state_48344[(2)]);
var state_48344__$1 = state_48344;
var statearr_48359_48386 = state_48344__$1;
(statearr_48359_48386[(2)] = inst_48340);

(statearr_48359_48386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48345 === (8))){
var inst_48321 = (state_48344[(7)]);
var inst_48331 = cljs.core.next.call(null,inst_48321);
var inst_48321__$1 = inst_48331;
var state_48344__$1 = (function (){var statearr_48360 = state_48344;
(statearr_48360[(7)] = inst_48321__$1);

return statearr_48360;
})();
var statearr_48361_48387 = state_48344__$1;
(statearr_48361_48387[(2)] = null);

(statearr_48361_48387[(1)] = (2));


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
});})(c__47516__auto__))
;
return ((function (switch__46318__auto__,c__47516__auto__){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_48365 = [null,null,null,null,null,null,null,null];
(statearr_48365[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_48365[(1)] = (1));

return statearr_48365;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_48344){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_48344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48366){if((e48366 instanceof Object)){
var ex__46322__auto__ = e48366;
var statearr_48367_48388 = state_48344;
(statearr_48367_48388[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48389 = state_48344;
state_48344 = G__48389;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_48344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_48344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__))
})();
var state__47518__auto__ = (function (){var statearr_48368 = f__47517__auto__.call(null);
(statearr_48368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_48368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__))
);

return c__47516__auto__;
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
var x__44930__auto__ = (((_ == null))?null:_);
var m__44931__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,_);
} else {
var m__44931__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,_);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44931__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,ch);
} else {
var m__44931__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,ch);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m);
} else {
var m__44931__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48615 = (function (ch,cs,meta48616){
this.ch = ch;
this.cs = cs;
this.meta48616 = meta48616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48617,meta48616__$1){
var self__ = this;
var _48617__$1 = this;
return (new cljs.core.async.t_cljs$core$async48615(self__.ch,self__.cs,meta48616__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48617){
var self__ = this;
var _48617__$1 = this;
return self__.meta48616;
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48616","meta48616",-137461965,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48615";

cljs.core.async.t_cljs$core$async48615.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async48615");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48615 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48615(ch__$1,cs__$1,meta48616){
return (new cljs.core.async.t_cljs$core$async48615(ch__$1,cs__$1,meta48616));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48615(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47516__auto___48840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___48840,cs,m,dchan,dctr,done){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___48840,cs,m,dchan,dctr,done){
return (function (state_48752){
var state_val_48753 = (state_48752[(1)]);
if((state_val_48753 === (7))){
var inst_48748 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48754_48841 = state_48752__$1;
(statearr_48754_48841[(2)] = inst_48748);

(statearr_48754_48841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (20))){
var inst_48651 = (state_48752[(7)]);
var inst_48663 = cljs.core.first.call(null,inst_48651);
var inst_48664 = cljs.core.nth.call(null,inst_48663,(0),null);
var inst_48665 = cljs.core.nth.call(null,inst_48663,(1),null);
var state_48752__$1 = (function (){var statearr_48755 = state_48752;
(statearr_48755[(8)] = inst_48664);

return statearr_48755;
})();
if(cljs.core.truth_(inst_48665)){
var statearr_48756_48842 = state_48752__$1;
(statearr_48756_48842[(1)] = (22));

} else {
var statearr_48757_48843 = state_48752__$1;
(statearr_48757_48843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (27))){
var inst_48620 = (state_48752[(9)]);
var inst_48700 = (state_48752[(10)]);
var inst_48695 = (state_48752[(11)]);
var inst_48693 = (state_48752[(12)]);
var inst_48700__$1 = cljs.core._nth.call(null,inst_48693,inst_48695);
var inst_48701 = cljs.core.async.put_BANG_.call(null,inst_48700__$1,inst_48620,done);
var state_48752__$1 = (function (){var statearr_48758 = state_48752;
(statearr_48758[(10)] = inst_48700__$1);

return statearr_48758;
})();
if(cljs.core.truth_(inst_48701)){
var statearr_48759_48844 = state_48752__$1;
(statearr_48759_48844[(1)] = (30));

} else {
var statearr_48760_48845 = state_48752__$1;
(statearr_48760_48845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (1))){
var state_48752__$1 = state_48752;
var statearr_48761_48846 = state_48752__$1;
(statearr_48761_48846[(2)] = null);

(statearr_48761_48846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (24))){
var inst_48651 = (state_48752[(7)]);
var inst_48670 = (state_48752[(2)]);
var inst_48671 = cljs.core.next.call(null,inst_48651);
var inst_48629 = inst_48671;
var inst_48630 = null;
var inst_48631 = (0);
var inst_48632 = (0);
var state_48752__$1 = (function (){var statearr_48762 = state_48752;
(statearr_48762[(13)] = inst_48631);

(statearr_48762[(14)] = inst_48632);

(statearr_48762[(15)] = inst_48629);

(statearr_48762[(16)] = inst_48630);

(statearr_48762[(17)] = inst_48670);

return statearr_48762;
})();
var statearr_48763_48847 = state_48752__$1;
(statearr_48763_48847[(2)] = null);

(statearr_48763_48847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (39))){
var state_48752__$1 = state_48752;
var statearr_48767_48848 = state_48752__$1;
(statearr_48767_48848[(2)] = null);

(statearr_48767_48848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (4))){
var inst_48620 = (state_48752[(9)]);
var inst_48620__$1 = (state_48752[(2)]);
var inst_48621 = (inst_48620__$1 == null);
var state_48752__$1 = (function (){var statearr_48768 = state_48752;
(statearr_48768[(9)] = inst_48620__$1);

return statearr_48768;
})();
if(cljs.core.truth_(inst_48621)){
var statearr_48769_48849 = state_48752__$1;
(statearr_48769_48849[(1)] = (5));

} else {
var statearr_48770_48850 = state_48752__$1;
(statearr_48770_48850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (15))){
var inst_48631 = (state_48752[(13)]);
var inst_48632 = (state_48752[(14)]);
var inst_48629 = (state_48752[(15)]);
var inst_48630 = (state_48752[(16)]);
var inst_48647 = (state_48752[(2)]);
var inst_48648 = (inst_48632 + (1));
var tmp48764 = inst_48631;
var tmp48765 = inst_48629;
var tmp48766 = inst_48630;
var inst_48629__$1 = tmp48765;
var inst_48630__$1 = tmp48766;
var inst_48631__$1 = tmp48764;
var inst_48632__$1 = inst_48648;
var state_48752__$1 = (function (){var statearr_48771 = state_48752;
(statearr_48771[(18)] = inst_48647);

(statearr_48771[(13)] = inst_48631__$1);

(statearr_48771[(14)] = inst_48632__$1);

(statearr_48771[(15)] = inst_48629__$1);

(statearr_48771[(16)] = inst_48630__$1);

return statearr_48771;
})();
var statearr_48772_48851 = state_48752__$1;
(statearr_48772_48851[(2)] = null);

(statearr_48772_48851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (21))){
var inst_48674 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48776_48852 = state_48752__$1;
(statearr_48776_48852[(2)] = inst_48674);

(statearr_48776_48852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (31))){
var inst_48700 = (state_48752[(10)]);
var inst_48704 = done.call(null,null);
var inst_48705 = cljs.core.async.untap_STAR_.call(null,m,inst_48700);
var state_48752__$1 = (function (){var statearr_48777 = state_48752;
(statearr_48777[(19)] = inst_48704);

return statearr_48777;
})();
var statearr_48778_48853 = state_48752__$1;
(statearr_48778_48853[(2)] = inst_48705);

(statearr_48778_48853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (32))){
var inst_48692 = (state_48752[(20)]);
var inst_48695 = (state_48752[(11)]);
var inst_48693 = (state_48752[(12)]);
var inst_48694 = (state_48752[(21)]);
var inst_48707 = (state_48752[(2)]);
var inst_48708 = (inst_48695 + (1));
var tmp48773 = inst_48692;
var tmp48774 = inst_48693;
var tmp48775 = inst_48694;
var inst_48692__$1 = tmp48773;
var inst_48693__$1 = tmp48774;
var inst_48694__$1 = tmp48775;
var inst_48695__$1 = inst_48708;
var state_48752__$1 = (function (){var statearr_48779 = state_48752;
(statearr_48779[(20)] = inst_48692__$1);

(statearr_48779[(11)] = inst_48695__$1);

(statearr_48779[(12)] = inst_48693__$1);

(statearr_48779[(21)] = inst_48694__$1);

(statearr_48779[(22)] = inst_48707);

return statearr_48779;
})();
var statearr_48780_48854 = state_48752__$1;
(statearr_48780_48854[(2)] = null);

(statearr_48780_48854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (40))){
var inst_48720 = (state_48752[(23)]);
var inst_48724 = done.call(null,null);
var inst_48725 = cljs.core.async.untap_STAR_.call(null,m,inst_48720);
var state_48752__$1 = (function (){var statearr_48781 = state_48752;
(statearr_48781[(24)] = inst_48724);

return statearr_48781;
})();
var statearr_48782_48855 = state_48752__$1;
(statearr_48782_48855[(2)] = inst_48725);

(statearr_48782_48855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (33))){
var inst_48711 = (state_48752[(25)]);
var inst_48713 = cljs.core.chunked_seq_QMARK_.call(null,inst_48711);
var state_48752__$1 = state_48752;
if(inst_48713){
var statearr_48783_48856 = state_48752__$1;
(statearr_48783_48856[(1)] = (36));

} else {
var statearr_48784_48857 = state_48752__$1;
(statearr_48784_48857[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (13))){
var inst_48641 = (state_48752[(26)]);
var inst_48644 = cljs.core.async.close_BANG_.call(null,inst_48641);
var state_48752__$1 = state_48752;
var statearr_48785_48858 = state_48752__$1;
(statearr_48785_48858[(2)] = inst_48644);

(statearr_48785_48858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (22))){
var inst_48664 = (state_48752[(8)]);
var inst_48667 = cljs.core.async.close_BANG_.call(null,inst_48664);
var state_48752__$1 = state_48752;
var statearr_48786_48859 = state_48752__$1;
(statearr_48786_48859[(2)] = inst_48667);

(statearr_48786_48859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (36))){
var inst_48711 = (state_48752[(25)]);
var inst_48715 = cljs.core.chunk_first.call(null,inst_48711);
var inst_48716 = cljs.core.chunk_rest.call(null,inst_48711);
var inst_48717 = cljs.core.count.call(null,inst_48715);
var inst_48692 = inst_48716;
var inst_48693 = inst_48715;
var inst_48694 = inst_48717;
var inst_48695 = (0);
var state_48752__$1 = (function (){var statearr_48787 = state_48752;
(statearr_48787[(20)] = inst_48692);

(statearr_48787[(11)] = inst_48695);

(statearr_48787[(12)] = inst_48693);

(statearr_48787[(21)] = inst_48694);

return statearr_48787;
})();
var statearr_48788_48860 = state_48752__$1;
(statearr_48788_48860[(2)] = null);

(statearr_48788_48860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (41))){
var inst_48711 = (state_48752[(25)]);
var inst_48727 = (state_48752[(2)]);
var inst_48728 = cljs.core.next.call(null,inst_48711);
var inst_48692 = inst_48728;
var inst_48693 = null;
var inst_48694 = (0);
var inst_48695 = (0);
var state_48752__$1 = (function (){var statearr_48789 = state_48752;
(statearr_48789[(27)] = inst_48727);

(statearr_48789[(20)] = inst_48692);

(statearr_48789[(11)] = inst_48695);

(statearr_48789[(12)] = inst_48693);

(statearr_48789[(21)] = inst_48694);

return statearr_48789;
})();
var statearr_48790_48861 = state_48752__$1;
(statearr_48790_48861[(2)] = null);

(statearr_48790_48861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (43))){
var state_48752__$1 = state_48752;
var statearr_48791_48862 = state_48752__$1;
(statearr_48791_48862[(2)] = null);

(statearr_48791_48862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (29))){
var inst_48736 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48792_48863 = state_48752__$1;
(statearr_48792_48863[(2)] = inst_48736);

(statearr_48792_48863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (44))){
var inst_48745 = (state_48752[(2)]);
var state_48752__$1 = (function (){var statearr_48793 = state_48752;
(statearr_48793[(28)] = inst_48745);

return statearr_48793;
})();
var statearr_48794_48864 = state_48752__$1;
(statearr_48794_48864[(2)] = null);

(statearr_48794_48864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (6))){
var inst_48684 = (state_48752[(29)]);
var inst_48683 = cljs.core.deref.call(null,cs);
var inst_48684__$1 = cljs.core.keys.call(null,inst_48683);
var inst_48685 = cljs.core.count.call(null,inst_48684__$1);
var inst_48686 = cljs.core.reset_BANG_.call(null,dctr,inst_48685);
var inst_48691 = cljs.core.seq.call(null,inst_48684__$1);
var inst_48692 = inst_48691;
var inst_48693 = null;
var inst_48694 = (0);
var inst_48695 = (0);
var state_48752__$1 = (function (){var statearr_48795 = state_48752;
(statearr_48795[(29)] = inst_48684__$1);

(statearr_48795[(20)] = inst_48692);

(statearr_48795[(11)] = inst_48695);

(statearr_48795[(12)] = inst_48693);

(statearr_48795[(30)] = inst_48686);

(statearr_48795[(21)] = inst_48694);

return statearr_48795;
})();
var statearr_48796_48865 = state_48752__$1;
(statearr_48796_48865[(2)] = null);

(statearr_48796_48865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (28))){
var inst_48711 = (state_48752[(25)]);
var inst_48692 = (state_48752[(20)]);
var inst_48711__$1 = cljs.core.seq.call(null,inst_48692);
var state_48752__$1 = (function (){var statearr_48797 = state_48752;
(statearr_48797[(25)] = inst_48711__$1);

return statearr_48797;
})();
if(inst_48711__$1){
var statearr_48798_48866 = state_48752__$1;
(statearr_48798_48866[(1)] = (33));

} else {
var statearr_48799_48867 = state_48752__$1;
(statearr_48799_48867[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (25))){
var inst_48695 = (state_48752[(11)]);
var inst_48694 = (state_48752[(21)]);
var inst_48697 = (inst_48695 < inst_48694);
var inst_48698 = inst_48697;
var state_48752__$1 = state_48752;
if(cljs.core.truth_(inst_48698)){
var statearr_48800_48868 = state_48752__$1;
(statearr_48800_48868[(1)] = (27));

} else {
var statearr_48801_48869 = state_48752__$1;
(statearr_48801_48869[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (34))){
var state_48752__$1 = state_48752;
var statearr_48802_48870 = state_48752__$1;
(statearr_48802_48870[(2)] = null);

(statearr_48802_48870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (17))){
var state_48752__$1 = state_48752;
var statearr_48803_48871 = state_48752__$1;
(statearr_48803_48871[(2)] = null);

(statearr_48803_48871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (3))){
var inst_48750 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48752__$1,inst_48750);
} else {
if((state_val_48753 === (12))){
var inst_48679 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48804_48872 = state_48752__$1;
(statearr_48804_48872[(2)] = inst_48679);

(statearr_48804_48872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (2))){
var state_48752__$1 = state_48752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48752__$1,(4),ch);
} else {
if((state_val_48753 === (23))){
var state_48752__$1 = state_48752;
var statearr_48805_48873 = state_48752__$1;
(statearr_48805_48873[(2)] = null);

(statearr_48805_48873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (35))){
var inst_48734 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48806_48874 = state_48752__$1;
(statearr_48806_48874[(2)] = inst_48734);

(statearr_48806_48874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (19))){
var inst_48651 = (state_48752[(7)]);
var inst_48655 = cljs.core.chunk_first.call(null,inst_48651);
var inst_48656 = cljs.core.chunk_rest.call(null,inst_48651);
var inst_48657 = cljs.core.count.call(null,inst_48655);
var inst_48629 = inst_48656;
var inst_48630 = inst_48655;
var inst_48631 = inst_48657;
var inst_48632 = (0);
var state_48752__$1 = (function (){var statearr_48807 = state_48752;
(statearr_48807[(13)] = inst_48631);

(statearr_48807[(14)] = inst_48632);

(statearr_48807[(15)] = inst_48629);

(statearr_48807[(16)] = inst_48630);

return statearr_48807;
})();
var statearr_48808_48875 = state_48752__$1;
(statearr_48808_48875[(2)] = null);

(statearr_48808_48875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (11))){
var inst_48651 = (state_48752[(7)]);
var inst_48629 = (state_48752[(15)]);
var inst_48651__$1 = cljs.core.seq.call(null,inst_48629);
var state_48752__$1 = (function (){var statearr_48809 = state_48752;
(statearr_48809[(7)] = inst_48651__$1);

return statearr_48809;
})();
if(inst_48651__$1){
var statearr_48810_48876 = state_48752__$1;
(statearr_48810_48876[(1)] = (16));

} else {
var statearr_48811_48877 = state_48752__$1;
(statearr_48811_48877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (9))){
var inst_48681 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48812_48878 = state_48752__$1;
(statearr_48812_48878[(2)] = inst_48681);

(statearr_48812_48878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (5))){
var inst_48627 = cljs.core.deref.call(null,cs);
var inst_48628 = cljs.core.seq.call(null,inst_48627);
var inst_48629 = inst_48628;
var inst_48630 = null;
var inst_48631 = (0);
var inst_48632 = (0);
var state_48752__$1 = (function (){var statearr_48813 = state_48752;
(statearr_48813[(13)] = inst_48631);

(statearr_48813[(14)] = inst_48632);

(statearr_48813[(15)] = inst_48629);

(statearr_48813[(16)] = inst_48630);

return statearr_48813;
})();
var statearr_48814_48879 = state_48752__$1;
(statearr_48814_48879[(2)] = null);

(statearr_48814_48879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (14))){
var state_48752__$1 = state_48752;
var statearr_48815_48880 = state_48752__$1;
(statearr_48815_48880[(2)] = null);

(statearr_48815_48880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (45))){
var inst_48742 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48816_48881 = state_48752__$1;
(statearr_48816_48881[(2)] = inst_48742);

(statearr_48816_48881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (26))){
var inst_48684 = (state_48752[(29)]);
var inst_48738 = (state_48752[(2)]);
var inst_48739 = cljs.core.seq.call(null,inst_48684);
var state_48752__$1 = (function (){var statearr_48817 = state_48752;
(statearr_48817[(31)] = inst_48738);

return statearr_48817;
})();
if(inst_48739){
var statearr_48818_48882 = state_48752__$1;
(statearr_48818_48882[(1)] = (42));

} else {
var statearr_48819_48883 = state_48752__$1;
(statearr_48819_48883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (16))){
var inst_48651 = (state_48752[(7)]);
var inst_48653 = cljs.core.chunked_seq_QMARK_.call(null,inst_48651);
var state_48752__$1 = state_48752;
if(inst_48653){
var statearr_48820_48884 = state_48752__$1;
(statearr_48820_48884[(1)] = (19));

} else {
var statearr_48821_48885 = state_48752__$1;
(statearr_48821_48885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (38))){
var inst_48731 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48822_48886 = state_48752__$1;
(statearr_48822_48886[(2)] = inst_48731);

(statearr_48822_48886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (30))){
var state_48752__$1 = state_48752;
var statearr_48823_48887 = state_48752__$1;
(statearr_48823_48887[(2)] = null);

(statearr_48823_48887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (10))){
var inst_48632 = (state_48752[(14)]);
var inst_48630 = (state_48752[(16)]);
var inst_48640 = cljs.core._nth.call(null,inst_48630,inst_48632);
var inst_48641 = cljs.core.nth.call(null,inst_48640,(0),null);
var inst_48642 = cljs.core.nth.call(null,inst_48640,(1),null);
var state_48752__$1 = (function (){var statearr_48824 = state_48752;
(statearr_48824[(26)] = inst_48641);

return statearr_48824;
})();
if(cljs.core.truth_(inst_48642)){
var statearr_48825_48888 = state_48752__$1;
(statearr_48825_48888[(1)] = (13));

} else {
var statearr_48826_48889 = state_48752__$1;
(statearr_48826_48889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (18))){
var inst_48677 = (state_48752[(2)]);
var state_48752__$1 = state_48752;
var statearr_48827_48890 = state_48752__$1;
(statearr_48827_48890[(2)] = inst_48677);

(statearr_48827_48890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (42))){
var state_48752__$1 = state_48752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48752__$1,(45),dchan);
} else {
if((state_val_48753 === (37))){
var inst_48711 = (state_48752[(25)]);
var inst_48620 = (state_48752[(9)]);
var inst_48720 = (state_48752[(23)]);
var inst_48720__$1 = cljs.core.first.call(null,inst_48711);
var inst_48721 = cljs.core.async.put_BANG_.call(null,inst_48720__$1,inst_48620,done);
var state_48752__$1 = (function (){var statearr_48828 = state_48752;
(statearr_48828[(23)] = inst_48720__$1);

return statearr_48828;
})();
if(cljs.core.truth_(inst_48721)){
var statearr_48829_48891 = state_48752__$1;
(statearr_48829_48891[(1)] = (39));

} else {
var statearr_48830_48892 = state_48752__$1;
(statearr_48830_48892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48753 === (8))){
var inst_48631 = (state_48752[(13)]);
var inst_48632 = (state_48752[(14)]);
var inst_48634 = (inst_48632 < inst_48631);
var inst_48635 = inst_48634;
var state_48752__$1 = state_48752;
if(cljs.core.truth_(inst_48635)){
var statearr_48831_48893 = state_48752__$1;
(statearr_48831_48893[(1)] = (10));

} else {
var statearr_48832_48894 = state_48752__$1;
(statearr_48832_48894[(1)] = (11));

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
});})(c__47516__auto___48840,cs,m,dchan,dctr,done))
;
return ((function (switch__46318__auto__,c__47516__auto___48840,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46319__auto__ = null;
var cljs$core$async$mult_$_state_machine__46319__auto____0 = (function (){
var statearr_48836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48836[(0)] = cljs$core$async$mult_$_state_machine__46319__auto__);

(statearr_48836[(1)] = (1));

return statearr_48836;
});
var cljs$core$async$mult_$_state_machine__46319__auto____1 = (function (state_48752){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_48752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e48837){if((e48837 instanceof Object)){
var ex__46322__auto__ = e48837;
var statearr_48838_48895 = state_48752;
(statearr_48838_48895[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48896 = state_48752;
state_48752 = G__48896;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46319__auto__ = function(state_48752){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46319__auto____1.call(this,state_48752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46319__auto____0;
cljs$core$async$mult_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46319__auto____1;
return cljs$core$async$mult_$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___48840,cs,m,dchan,dctr,done))
})();
var state__47518__auto__ = (function (){var statearr_48839 = f__47517__auto__.call(null);
(statearr_48839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___48840);

return statearr_48839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___48840,cs,m,dchan,dctr,done))
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
var args48897 = [];
var len__45375__auto___48900 = arguments.length;
var i__45376__auto___48901 = (0);
while(true){
if((i__45376__auto___48901 < len__45375__auto___48900)){
args48897.push((arguments[i__45376__auto___48901]));

var G__48902 = (i__45376__auto___48901 + (1));
i__45376__auto___48901 = G__48902;
continue;
} else {
}
break;
}

var G__48899 = args48897.length;
switch (G__48899) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48897.length)].join('')));

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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,ch);
} else {
var m__44931__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,ch);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,ch);
} else {
var m__44931__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,ch);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m);
} else {
var m__44931__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,state_map);
} else {
var m__44931__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,state_map);
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
var x__44930__auto__ = (((m == null))?null:m);
var m__44931__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,m,mode);
} else {
var m__44931__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45382__auto__ = [];
var len__45375__auto___48914 = arguments.length;
var i__45376__auto___48915 = (0);
while(true){
if((i__45376__auto___48915 < len__45375__auto___48914)){
args__45382__auto__.push((arguments[i__45376__auto___48915]));

var G__48916 = (i__45376__auto___48915 + (1));
i__45376__auto___48915 = G__48916;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((3) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45383__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48908){
var map__48909 = p__48908;
var map__48909__$1 = ((((!((map__48909 == null)))?((((map__48909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48909):map__48909);
var opts = map__48909__$1;
var statearr_48911_48917 = state;
(statearr_48911_48917[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48909,map__48909__$1,opts){
return (function (val){
var statearr_48912_48918 = state;
(statearr_48912_48918[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48909,map__48909__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48913_48919 = state;
(statearr_48913_48919[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48904){
var G__48905 = cljs.core.first.call(null,seq48904);
var seq48904__$1 = cljs.core.next.call(null,seq48904);
var G__48906 = cljs.core.first.call(null,seq48904__$1);
var seq48904__$2 = cljs.core.next.call(null,seq48904__$1);
var G__48907 = cljs.core.first.call(null,seq48904__$2);
var seq48904__$3 = cljs.core.next.call(null,seq48904__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48905,G__48906,G__48907,seq48904__$3);
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
if(typeof cljs.core.async.t_cljs$core$async49087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49087 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49088){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49088 = meta49088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49089,meta49088__$1){
var self__ = this;
var _49089__$1 = this;
return (new cljs.core.async.t_cljs$core$async49087(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49089){
var self__ = this;
var _49089__$1 = this;
return self__.meta49088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49088","meta49088",1943092382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49087";

cljs.core.async.t_cljs$core$async49087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49088){
return (new cljs.core.async.t_cljs$core$async49087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49087(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47516__auto___49254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49191){
var state_val_49192 = (state_49191[(1)]);
if((state_val_49192 === (7))){
var inst_49106 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49193_49255 = state_49191__$1;
(statearr_49193_49255[(2)] = inst_49106);

(statearr_49193_49255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (20))){
var inst_49118 = (state_49191[(7)]);
var state_49191__$1 = state_49191;
var statearr_49194_49256 = state_49191__$1;
(statearr_49194_49256[(2)] = inst_49118);

(statearr_49194_49256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (27))){
var state_49191__$1 = state_49191;
var statearr_49195_49257 = state_49191__$1;
(statearr_49195_49257[(2)] = null);

(statearr_49195_49257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (1))){
var inst_49093 = (state_49191[(8)]);
var inst_49093__$1 = calc_state.call(null);
var inst_49095 = (inst_49093__$1 == null);
var inst_49096 = cljs.core.not.call(null,inst_49095);
var state_49191__$1 = (function (){var statearr_49196 = state_49191;
(statearr_49196[(8)] = inst_49093__$1);

return statearr_49196;
})();
if(inst_49096){
var statearr_49197_49258 = state_49191__$1;
(statearr_49197_49258[(1)] = (2));

} else {
var statearr_49198_49259 = state_49191__$1;
(statearr_49198_49259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (24))){
var inst_49142 = (state_49191[(9)]);
var inst_49165 = (state_49191[(10)]);
var inst_49151 = (state_49191[(11)]);
var inst_49165__$1 = inst_49142.call(null,inst_49151);
var state_49191__$1 = (function (){var statearr_49199 = state_49191;
(statearr_49199[(10)] = inst_49165__$1);

return statearr_49199;
})();
if(cljs.core.truth_(inst_49165__$1)){
var statearr_49200_49260 = state_49191__$1;
(statearr_49200_49260[(1)] = (29));

} else {
var statearr_49201_49261 = state_49191__$1;
(statearr_49201_49261[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (4))){
var inst_49109 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49109)){
var statearr_49202_49262 = state_49191__$1;
(statearr_49202_49262[(1)] = (8));

} else {
var statearr_49203_49263 = state_49191__$1;
(statearr_49203_49263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (15))){
var inst_49136 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49136)){
var statearr_49204_49264 = state_49191__$1;
(statearr_49204_49264[(1)] = (19));

} else {
var statearr_49205_49265 = state_49191__$1;
(statearr_49205_49265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (21))){
var inst_49141 = (state_49191[(12)]);
var inst_49141__$1 = (state_49191[(2)]);
var inst_49142 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49143 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49144 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49191__$1 = (function (){var statearr_49206 = state_49191;
(statearr_49206[(13)] = inst_49143);

(statearr_49206[(12)] = inst_49141__$1);

(statearr_49206[(9)] = inst_49142);

return statearr_49206;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49191__$1,(22),inst_49144);
} else {
if((state_val_49192 === (31))){
var inst_49173 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49173)){
var statearr_49207_49266 = state_49191__$1;
(statearr_49207_49266[(1)] = (32));

} else {
var statearr_49208_49267 = state_49191__$1;
(statearr_49208_49267[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (32))){
var inst_49150 = (state_49191[(14)]);
var state_49191__$1 = state_49191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49191__$1,(35),out,inst_49150);
} else {
if((state_val_49192 === (33))){
var inst_49141 = (state_49191[(12)]);
var inst_49118 = inst_49141;
var state_49191__$1 = (function (){var statearr_49209 = state_49191;
(statearr_49209[(7)] = inst_49118);

return statearr_49209;
})();
var statearr_49210_49268 = state_49191__$1;
(statearr_49210_49268[(2)] = null);

(statearr_49210_49268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (13))){
var inst_49118 = (state_49191[(7)]);
var inst_49125 = inst_49118.cljs$lang$protocol_mask$partition0$;
var inst_49126 = (inst_49125 & (64));
var inst_49127 = inst_49118.cljs$core$ISeq$;
var inst_49128 = (cljs.core.PROTOCOL_SENTINEL === inst_49127);
var inst_49129 = (inst_49126) || (inst_49128);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49129)){
var statearr_49211_49269 = state_49191__$1;
(statearr_49211_49269[(1)] = (16));

} else {
var statearr_49212_49270 = state_49191__$1;
(statearr_49212_49270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (22))){
var inst_49150 = (state_49191[(14)]);
var inst_49151 = (state_49191[(11)]);
var inst_49149 = (state_49191[(2)]);
var inst_49150__$1 = cljs.core.nth.call(null,inst_49149,(0),null);
var inst_49151__$1 = cljs.core.nth.call(null,inst_49149,(1),null);
var inst_49152 = (inst_49150__$1 == null);
var inst_49153 = cljs.core._EQ_.call(null,inst_49151__$1,change);
var inst_49154 = (inst_49152) || (inst_49153);
var state_49191__$1 = (function (){var statearr_49213 = state_49191;
(statearr_49213[(14)] = inst_49150__$1);

(statearr_49213[(11)] = inst_49151__$1);

return statearr_49213;
})();
if(cljs.core.truth_(inst_49154)){
var statearr_49214_49271 = state_49191__$1;
(statearr_49214_49271[(1)] = (23));

} else {
var statearr_49215_49272 = state_49191__$1;
(statearr_49215_49272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (36))){
var inst_49141 = (state_49191[(12)]);
var inst_49118 = inst_49141;
var state_49191__$1 = (function (){var statearr_49216 = state_49191;
(statearr_49216[(7)] = inst_49118);

return statearr_49216;
})();
var statearr_49217_49273 = state_49191__$1;
(statearr_49217_49273[(2)] = null);

(statearr_49217_49273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (29))){
var inst_49165 = (state_49191[(10)]);
var state_49191__$1 = state_49191;
var statearr_49218_49274 = state_49191__$1;
(statearr_49218_49274[(2)] = inst_49165);

(statearr_49218_49274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (6))){
var state_49191__$1 = state_49191;
var statearr_49219_49275 = state_49191__$1;
(statearr_49219_49275[(2)] = false);

(statearr_49219_49275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (28))){
var inst_49161 = (state_49191[(2)]);
var inst_49162 = calc_state.call(null);
var inst_49118 = inst_49162;
var state_49191__$1 = (function (){var statearr_49220 = state_49191;
(statearr_49220[(7)] = inst_49118);

(statearr_49220[(15)] = inst_49161);

return statearr_49220;
})();
var statearr_49221_49276 = state_49191__$1;
(statearr_49221_49276[(2)] = null);

(statearr_49221_49276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (25))){
var inst_49187 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49222_49277 = state_49191__$1;
(statearr_49222_49277[(2)] = inst_49187);

(statearr_49222_49277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (34))){
var inst_49185 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49223_49278 = state_49191__$1;
(statearr_49223_49278[(2)] = inst_49185);

(statearr_49223_49278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (17))){
var state_49191__$1 = state_49191;
var statearr_49224_49279 = state_49191__$1;
(statearr_49224_49279[(2)] = false);

(statearr_49224_49279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (3))){
var state_49191__$1 = state_49191;
var statearr_49225_49280 = state_49191__$1;
(statearr_49225_49280[(2)] = false);

(statearr_49225_49280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (12))){
var inst_49189 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49191__$1,inst_49189);
} else {
if((state_val_49192 === (2))){
var inst_49093 = (state_49191[(8)]);
var inst_49098 = inst_49093.cljs$lang$protocol_mask$partition0$;
var inst_49099 = (inst_49098 & (64));
var inst_49100 = inst_49093.cljs$core$ISeq$;
var inst_49101 = (cljs.core.PROTOCOL_SENTINEL === inst_49100);
var inst_49102 = (inst_49099) || (inst_49101);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49102)){
var statearr_49226_49281 = state_49191__$1;
(statearr_49226_49281[(1)] = (5));

} else {
var statearr_49227_49282 = state_49191__$1;
(statearr_49227_49282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (23))){
var inst_49150 = (state_49191[(14)]);
var inst_49156 = (inst_49150 == null);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49156)){
var statearr_49228_49283 = state_49191__$1;
(statearr_49228_49283[(1)] = (26));

} else {
var statearr_49229_49284 = state_49191__$1;
(statearr_49229_49284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (35))){
var inst_49176 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49176)){
var statearr_49230_49285 = state_49191__$1;
(statearr_49230_49285[(1)] = (36));

} else {
var statearr_49231_49286 = state_49191__$1;
(statearr_49231_49286[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (19))){
var inst_49118 = (state_49191[(7)]);
var inst_49138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49118);
var state_49191__$1 = state_49191;
var statearr_49232_49287 = state_49191__$1;
(statearr_49232_49287[(2)] = inst_49138);

(statearr_49232_49287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (11))){
var inst_49118 = (state_49191[(7)]);
var inst_49122 = (inst_49118 == null);
var inst_49123 = cljs.core.not.call(null,inst_49122);
var state_49191__$1 = state_49191;
if(inst_49123){
var statearr_49233_49288 = state_49191__$1;
(statearr_49233_49288[(1)] = (13));

} else {
var statearr_49234_49289 = state_49191__$1;
(statearr_49234_49289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (9))){
var inst_49093 = (state_49191[(8)]);
var state_49191__$1 = state_49191;
var statearr_49235_49290 = state_49191__$1;
(statearr_49235_49290[(2)] = inst_49093);

(statearr_49235_49290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (5))){
var state_49191__$1 = state_49191;
var statearr_49236_49291 = state_49191__$1;
(statearr_49236_49291[(2)] = true);

(statearr_49236_49291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (14))){
var state_49191__$1 = state_49191;
var statearr_49237_49292 = state_49191__$1;
(statearr_49237_49292[(2)] = false);

(statearr_49237_49292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (26))){
var inst_49151 = (state_49191[(11)]);
var inst_49158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49151);
var state_49191__$1 = state_49191;
var statearr_49238_49293 = state_49191__$1;
(statearr_49238_49293[(2)] = inst_49158);

(statearr_49238_49293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (16))){
var state_49191__$1 = state_49191;
var statearr_49239_49294 = state_49191__$1;
(statearr_49239_49294[(2)] = true);

(statearr_49239_49294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (38))){
var inst_49181 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49240_49295 = state_49191__$1;
(statearr_49240_49295[(2)] = inst_49181);

(statearr_49240_49295[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (30))){
var inst_49143 = (state_49191[(13)]);
var inst_49142 = (state_49191[(9)]);
var inst_49151 = (state_49191[(11)]);
var inst_49168 = cljs.core.empty_QMARK_.call(null,inst_49142);
var inst_49169 = inst_49143.call(null,inst_49151);
var inst_49170 = cljs.core.not.call(null,inst_49169);
var inst_49171 = (inst_49168) && (inst_49170);
var state_49191__$1 = state_49191;
var statearr_49241_49296 = state_49191__$1;
(statearr_49241_49296[(2)] = inst_49171);

(statearr_49241_49296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (10))){
var inst_49093 = (state_49191[(8)]);
var inst_49114 = (state_49191[(2)]);
var inst_49115 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49116 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49117 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49118 = inst_49093;
var state_49191__$1 = (function (){var statearr_49242 = state_49191;
(statearr_49242[(16)] = inst_49116);

(statearr_49242[(17)] = inst_49117);

(statearr_49242[(7)] = inst_49118);

(statearr_49242[(18)] = inst_49115);

return statearr_49242;
})();
var statearr_49243_49297 = state_49191__$1;
(statearr_49243_49297[(2)] = null);

(statearr_49243_49297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (18))){
var inst_49133 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49244_49298 = state_49191__$1;
(statearr_49244_49298[(2)] = inst_49133);

(statearr_49244_49298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (37))){
var state_49191__$1 = state_49191;
var statearr_49245_49299 = state_49191__$1;
(statearr_49245_49299[(2)] = null);

(statearr_49245_49299[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (8))){
var inst_49093 = (state_49191[(8)]);
var inst_49111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49093);
var state_49191__$1 = state_49191;
var statearr_49246_49300 = state_49191__$1;
(statearr_49246_49300[(2)] = inst_49111);

(statearr_49246_49300[(1)] = (10));


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
});})(c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46318__auto__,c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46319__auto__ = null;
var cljs$core$async$mix_$_state_machine__46319__auto____0 = (function (){
var statearr_49250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49250[(0)] = cljs$core$async$mix_$_state_machine__46319__auto__);

(statearr_49250[(1)] = (1));

return statearr_49250;
});
var cljs$core$async$mix_$_state_machine__46319__auto____1 = (function (state_49191){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49251){if((e49251 instanceof Object)){
var ex__46322__auto__ = e49251;
var statearr_49252_49301 = state_49191;
(statearr_49252_49301[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49302 = state_49191;
state_49191 = G__49302;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46319__auto__ = function(state_49191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46319__auto____1.call(this,state_49191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46319__auto____0;
cljs$core$async$mix_$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46319__auto____1;
return cljs$core$async$mix_$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47518__auto__ = (function (){var statearr_49253 = f__47517__auto__.call(null);
(statearr_49253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49254);

return statearr_49253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__44930__auto__ = (((p == null))?null:p);
var m__44931__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44931__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__44930__auto__ = (((p == null))?null:p);
var m__44931__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,p,v,ch);
} else {
var m__44931__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49303 = [];
var len__45375__auto___49306 = arguments.length;
var i__45376__auto___49307 = (0);
while(true){
if((i__45376__auto___49307 < len__45375__auto___49306)){
args49303.push((arguments[i__45376__auto___49307]));

var G__49308 = (i__45376__auto___49307 + (1));
i__45376__auto___49307 = G__49308;
continue;
} else {
}
break;
}

var G__49305 = args49303.length;
switch (G__49305) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49303.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44930__auto__ = (((p == null))?null:p);
var m__44931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,p);
} else {
var m__44931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,p);
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
var x__44930__auto__ = (((p == null))?null:p);
var m__44931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44930__auto__)]);
if(!((m__44931__auto__ == null))){
return m__44931__auto__.call(null,p,v);
} else {
var m__44931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44931__auto____$1 == null))){
return m__44931__auto____$1.call(null,p,v);
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
var args49311 = [];
var len__45375__auto___49436 = arguments.length;
var i__45376__auto___49437 = (0);
while(true){
if((i__45376__auto___49437 < len__45375__auto___49436)){
args49311.push((arguments[i__45376__auto___49437]));

var G__49438 = (i__45376__auto___49437 + (1));
i__45376__auto___49437 = G__49438;
continue;
} else {
}
break;
}

var G__49313 = args49311.length;
switch (G__49313) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49311.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44267__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44267__auto__)){
return or__44267__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44267__auto__,mults){
return (function (p1__49310_SHARP_){
if(cljs.core.truth_(p1__49310_SHARP_.call(null,topic))){
return p1__49310_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49310_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44267__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49315 = meta49315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49316,meta49315__$1){
var self__ = this;
var _49316__$1 = this;
return (new cljs.core.async.t_cljs$core$async49314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49315__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49316){
var self__ = this;
var _49316__$1 = this;
return self__.meta49315;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49315","meta49315",-1461911450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49314";

cljs.core.async.t_cljs$core$async49314.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49314");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49314 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49315){
return (new cljs.core.async.t_cljs$core$async49314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49315));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47516__auto___49440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49440,mults,ensure_mult,p){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49440,mults,ensure_mult,p){
return (function (state_49388){
var state_val_49389 = (state_49388[(1)]);
if((state_val_49389 === (7))){
var inst_49384 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49390_49441 = state_49388__$1;
(statearr_49390_49441[(2)] = inst_49384);

(statearr_49390_49441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (20))){
var state_49388__$1 = state_49388;
var statearr_49391_49442 = state_49388__$1;
(statearr_49391_49442[(2)] = null);

(statearr_49391_49442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (1))){
var state_49388__$1 = state_49388;
var statearr_49392_49443 = state_49388__$1;
(statearr_49392_49443[(2)] = null);

(statearr_49392_49443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (24))){
var inst_49367 = (state_49388[(7)]);
var inst_49376 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49367);
var state_49388__$1 = state_49388;
var statearr_49393_49444 = state_49388__$1;
(statearr_49393_49444[(2)] = inst_49376);

(statearr_49393_49444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (4))){
var inst_49319 = (state_49388[(8)]);
var inst_49319__$1 = (state_49388[(2)]);
var inst_49320 = (inst_49319__$1 == null);
var state_49388__$1 = (function (){var statearr_49394 = state_49388;
(statearr_49394[(8)] = inst_49319__$1);

return statearr_49394;
})();
if(cljs.core.truth_(inst_49320)){
var statearr_49395_49445 = state_49388__$1;
(statearr_49395_49445[(1)] = (5));

} else {
var statearr_49396_49446 = state_49388__$1;
(statearr_49396_49446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (15))){
var inst_49361 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49397_49447 = state_49388__$1;
(statearr_49397_49447[(2)] = inst_49361);

(statearr_49397_49447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (21))){
var inst_49381 = (state_49388[(2)]);
var state_49388__$1 = (function (){var statearr_49398 = state_49388;
(statearr_49398[(9)] = inst_49381);

return statearr_49398;
})();
var statearr_49399_49448 = state_49388__$1;
(statearr_49399_49448[(2)] = null);

(statearr_49399_49448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (13))){
var inst_49343 = (state_49388[(10)]);
var inst_49345 = cljs.core.chunked_seq_QMARK_.call(null,inst_49343);
var state_49388__$1 = state_49388;
if(inst_49345){
var statearr_49400_49449 = state_49388__$1;
(statearr_49400_49449[(1)] = (16));

} else {
var statearr_49401_49450 = state_49388__$1;
(statearr_49401_49450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (22))){
var inst_49373 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
if(cljs.core.truth_(inst_49373)){
var statearr_49402_49451 = state_49388__$1;
(statearr_49402_49451[(1)] = (23));

} else {
var statearr_49403_49452 = state_49388__$1;
(statearr_49403_49452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (6))){
var inst_49319 = (state_49388[(8)]);
var inst_49369 = (state_49388[(11)]);
var inst_49367 = (state_49388[(7)]);
var inst_49367__$1 = topic_fn.call(null,inst_49319);
var inst_49368 = cljs.core.deref.call(null,mults);
var inst_49369__$1 = cljs.core.get.call(null,inst_49368,inst_49367__$1);
var state_49388__$1 = (function (){var statearr_49404 = state_49388;
(statearr_49404[(11)] = inst_49369__$1);

(statearr_49404[(7)] = inst_49367__$1);

return statearr_49404;
})();
if(cljs.core.truth_(inst_49369__$1)){
var statearr_49405_49453 = state_49388__$1;
(statearr_49405_49453[(1)] = (19));

} else {
var statearr_49406_49454 = state_49388__$1;
(statearr_49406_49454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (25))){
var inst_49378 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49407_49455 = state_49388__$1;
(statearr_49407_49455[(2)] = inst_49378);

(statearr_49407_49455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (17))){
var inst_49343 = (state_49388[(10)]);
var inst_49352 = cljs.core.first.call(null,inst_49343);
var inst_49353 = cljs.core.async.muxch_STAR_.call(null,inst_49352);
var inst_49354 = cljs.core.async.close_BANG_.call(null,inst_49353);
var inst_49355 = cljs.core.next.call(null,inst_49343);
var inst_49329 = inst_49355;
var inst_49330 = null;
var inst_49331 = (0);
var inst_49332 = (0);
var state_49388__$1 = (function (){var statearr_49408 = state_49388;
(statearr_49408[(12)] = inst_49331);

(statearr_49408[(13)] = inst_49330);

(statearr_49408[(14)] = inst_49332);

(statearr_49408[(15)] = inst_49329);

(statearr_49408[(16)] = inst_49354);

return statearr_49408;
})();
var statearr_49409_49456 = state_49388__$1;
(statearr_49409_49456[(2)] = null);

(statearr_49409_49456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (3))){
var inst_49386 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49388__$1,inst_49386);
} else {
if((state_val_49389 === (12))){
var inst_49363 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49410_49457 = state_49388__$1;
(statearr_49410_49457[(2)] = inst_49363);

(statearr_49410_49457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (2))){
var state_49388__$1 = state_49388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49388__$1,(4),ch);
} else {
if((state_val_49389 === (23))){
var state_49388__$1 = state_49388;
var statearr_49411_49458 = state_49388__$1;
(statearr_49411_49458[(2)] = null);

(statearr_49411_49458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (19))){
var inst_49319 = (state_49388[(8)]);
var inst_49369 = (state_49388[(11)]);
var inst_49371 = cljs.core.async.muxch_STAR_.call(null,inst_49369);
var state_49388__$1 = state_49388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49388__$1,(22),inst_49371,inst_49319);
} else {
if((state_val_49389 === (11))){
var inst_49343 = (state_49388[(10)]);
var inst_49329 = (state_49388[(15)]);
var inst_49343__$1 = cljs.core.seq.call(null,inst_49329);
var state_49388__$1 = (function (){var statearr_49412 = state_49388;
(statearr_49412[(10)] = inst_49343__$1);

return statearr_49412;
})();
if(inst_49343__$1){
var statearr_49413_49459 = state_49388__$1;
(statearr_49413_49459[(1)] = (13));

} else {
var statearr_49414_49460 = state_49388__$1;
(statearr_49414_49460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (9))){
var inst_49365 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49415_49461 = state_49388__$1;
(statearr_49415_49461[(2)] = inst_49365);

(statearr_49415_49461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (5))){
var inst_49326 = cljs.core.deref.call(null,mults);
var inst_49327 = cljs.core.vals.call(null,inst_49326);
var inst_49328 = cljs.core.seq.call(null,inst_49327);
var inst_49329 = inst_49328;
var inst_49330 = null;
var inst_49331 = (0);
var inst_49332 = (0);
var state_49388__$1 = (function (){var statearr_49416 = state_49388;
(statearr_49416[(12)] = inst_49331);

(statearr_49416[(13)] = inst_49330);

(statearr_49416[(14)] = inst_49332);

(statearr_49416[(15)] = inst_49329);

return statearr_49416;
})();
var statearr_49417_49462 = state_49388__$1;
(statearr_49417_49462[(2)] = null);

(statearr_49417_49462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (14))){
var state_49388__$1 = state_49388;
var statearr_49421_49463 = state_49388__$1;
(statearr_49421_49463[(2)] = null);

(statearr_49421_49463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (16))){
var inst_49343 = (state_49388[(10)]);
var inst_49347 = cljs.core.chunk_first.call(null,inst_49343);
var inst_49348 = cljs.core.chunk_rest.call(null,inst_49343);
var inst_49349 = cljs.core.count.call(null,inst_49347);
var inst_49329 = inst_49348;
var inst_49330 = inst_49347;
var inst_49331 = inst_49349;
var inst_49332 = (0);
var state_49388__$1 = (function (){var statearr_49422 = state_49388;
(statearr_49422[(12)] = inst_49331);

(statearr_49422[(13)] = inst_49330);

(statearr_49422[(14)] = inst_49332);

(statearr_49422[(15)] = inst_49329);

return statearr_49422;
})();
var statearr_49423_49464 = state_49388__$1;
(statearr_49423_49464[(2)] = null);

(statearr_49423_49464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (10))){
var inst_49331 = (state_49388[(12)]);
var inst_49330 = (state_49388[(13)]);
var inst_49332 = (state_49388[(14)]);
var inst_49329 = (state_49388[(15)]);
var inst_49337 = cljs.core._nth.call(null,inst_49330,inst_49332);
var inst_49338 = cljs.core.async.muxch_STAR_.call(null,inst_49337);
var inst_49339 = cljs.core.async.close_BANG_.call(null,inst_49338);
var inst_49340 = (inst_49332 + (1));
var tmp49418 = inst_49331;
var tmp49419 = inst_49330;
var tmp49420 = inst_49329;
var inst_49329__$1 = tmp49420;
var inst_49330__$1 = tmp49419;
var inst_49331__$1 = tmp49418;
var inst_49332__$1 = inst_49340;
var state_49388__$1 = (function (){var statearr_49424 = state_49388;
(statearr_49424[(12)] = inst_49331__$1);

(statearr_49424[(13)] = inst_49330__$1);

(statearr_49424[(17)] = inst_49339);

(statearr_49424[(14)] = inst_49332__$1);

(statearr_49424[(15)] = inst_49329__$1);

return statearr_49424;
})();
var statearr_49425_49465 = state_49388__$1;
(statearr_49425_49465[(2)] = null);

(statearr_49425_49465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (18))){
var inst_49358 = (state_49388[(2)]);
var state_49388__$1 = state_49388;
var statearr_49426_49466 = state_49388__$1;
(statearr_49426_49466[(2)] = inst_49358);

(statearr_49426_49466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49389 === (8))){
var inst_49331 = (state_49388[(12)]);
var inst_49332 = (state_49388[(14)]);
var inst_49334 = (inst_49332 < inst_49331);
var inst_49335 = inst_49334;
var state_49388__$1 = state_49388;
if(cljs.core.truth_(inst_49335)){
var statearr_49427_49467 = state_49388__$1;
(statearr_49427_49467[(1)] = (10));

} else {
var statearr_49428_49468 = state_49388__$1;
(statearr_49428_49468[(1)] = (11));

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
});})(c__47516__auto___49440,mults,ensure_mult,p))
;
return ((function (switch__46318__auto__,c__47516__auto___49440,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_49432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49432[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_49432[(1)] = (1));

return statearr_49432;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_49388){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49433){if((e49433 instanceof Object)){
var ex__46322__auto__ = e49433;
var statearr_49434_49469 = state_49388;
(statearr_49434_49469[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49470 = state_49388;
state_49388 = G__49470;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_49388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_49388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49440,mults,ensure_mult,p))
})();
var state__47518__auto__ = (function (){var statearr_49435 = f__47517__auto__.call(null);
(statearr_49435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49440);

return statearr_49435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49440,mults,ensure_mult,p))
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
var args49471 = [];
var len__45375__auto___49474 = arguments.length;
var i__45376__auto___49475 = (0);
while(true){
if((i__45376__auto___49475 < len__45375__auto___49474)){
args49471.push((arguments[i__45376__auto___49475]));

var G__49476 = (i__45376__auto___49475 + (1));
i__45376__auto___49475 = G__49476;
continue;
} else {
}
break;
}

var G__49473 = args49471.length;
switch (G__49473) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49471.length)].join('')));

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
var args49478 = [];
var len__45375__auto___49481 = arguments.length;
var i__45376__auto___49482 = (0);
while(true){
if((i__45376__auto___49482 < len__45375__auto___49481)){
args49478.push((arguments[i__45376__auto___49482]));

var G__49483 = (i__45376__auto___49482 + (1));
i__45376__auto___49482 = G__49483;
continue;
} else {
}
break;
}

var G__49480 = args49478.length;
switch (G__49480) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49478.length)].join('')));

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
var args49485 = [];
var len__45375__auto___49556 = arguments.length;
var i__45376__auto___49557 = (0);
while(true){
if((i__45376__auto___49557 < len__45375__auto___49556)){
args49485.push((arguments[i__45376__auto___49557]));

var G__49558 = (i__45376__auto___49557 + (1));
i__45376__auto___49557 = G__49558;
continue;
} else {
}
break;
}

var G__49487 = args49485.length;
switch (G__49487) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49485.length)].join('')));

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
var c__47516__auto___49560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49526){
var state_val_49527 = (state_49526[(1)]);
if((state_val_49527 === (7))){
var state_49526__$1 = state_49526;
var statearr_49528_49561 = state_49526__$1;
(statearr_49528_49561[(2)] = null);

(statearr_49528_49561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (1))){
var state_49526__$1 = state_49526;
var statearr_49529_49562 = state_49526__$1;
(statearr_49529_49562[(2)] = null);

(statearr_49529_49562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (4))){
var inst_49490 = (state_49526[(7)]);
var inst_49492 = (inst_49490 < cnt);
var state_49526__$1 = state_49526;
if(cljs.core.truth_(inst_49492)){
var statearr_49530_49563 = state_49526__$1;
(statearr_49530_49563[(1)] = (6));

} else {
var statearr_49531_49564 = state_49526__$1;
(statearr_49531_49564[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (15))){
var inst_49522 = (state_49526[(2)]);
var state_49526__$1 = state_49526;
var statearr_49532_49565 = state_49526__$1;
(statearr_49532_49565[(2)] = inst_49522);

(statearr_49532_49565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (13))){
var inst_49515 = cljs.core.async.close_BANG_.call(null,out);
var state_49526__$1 = state_49526;
var statearr_49533_49566 = state_49526__$1;
(statearr_49533_49566[(2)] = inst_49515);

(statearr_49533_49566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (6))){
var state_49526__$1 = state_49526;
var statearr_49534_49567 = state_49526__$1;
(statearr_49534_49567[(2)] = null);

(statearr_49534_49567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (3))){
var inst_49524 = (state_49526[(2)]);
var state_49526__$1 = state_49526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49526__$1,inst_49524);
} else {
if((state_val_49527 === (12))){
var inst_49512 = (state_49526[(8)]);
var inst_49512__$1 = (state_49526[(2)]);
var inst_49513 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49512__$1);
var state_49526__$1 = (function (){var statearr_49535 = state_49526;
(statearr_49535[(8)] = inst_49512__$1);

return statearr_49535;
})();
if(cljs.core.truth_(inst_49513)){
var statearr_49536_49568 = state_49526__$1;
(statearr_49536_49568[(1)] = (13));

} else {
var statearr_49537_49569 = state_49526__$1;
(statearr_49537_49569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (2))){
var inst_49489 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49490 = (0);
var state_49526__$1 = (function (){var statearr_49538 = state_49526;
(statearr_49538[(9)] = inst_49489);

(statearr_49538[(7)] = inst_49490);

return statearr_49538;
})();
var statearr_49539_49570 = state_49526__$1;
(statearr_49539_49570[(2)] = null);

(statearr_49539_49570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (11))){
var inst_49490 = (state_49526[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49526,(10),Object,null,(9));
var inst_49499 = chs__$1.call(null,inst_49490);
var inst_49500 = done.call(null,inst_49490);
var inst_49501 = cljs.core.async.take_BANG_.call(null,inst_49499,inst_49500);
var state_49526__$1 = state_49526;
var statearr_49540_49571 = state_49526__$1;
(statearr_49540_49571[(2)] = inst_49501);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (9))){
var inst_49490 = (state_49526[(7)]);
var inst_49503 = (state_49526[(2)]);
var inst_49504 = (inst_49490 + (1));
var inst_49490__$1 = inst_49504;
var state_49526__$1 = (function (){var statearr_49541 = state_49526;
(statearr_49541[(7)] = inst_49490__$1);

(statearr_49541[(10)] = inst_49503);

return statearr_49541;
})();
var statearr_49542_49572 = state_49526__$1;
(statearr_49542_49572[(2)] = null);

(statearr_49542_49572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (5))){
var inst_49510 = (state_49526[(2)]);
var state_49526__$1 = (function (){var statearr_49543 = state_49526;
(statearr_49543[(11)] = inst_49510);

return statearr_49543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49526__$1,(12),dchan);
} else {
if((state_val_49527 === (14))){
var inst_49512 = (state_49526[(8)]);
var inst_49517 = cljs.core.apply.call(null,f,inst_49512);
var state_49526__$1 = state_49526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49526__$1,(16),out,inst_49517);
} else {
if((state_val_49527 === (16))){
var inst_49519 = (state_49526[(2)]);
var state_49526__$1 = (function (){var statearr_49544 = state_49526;
(statearr_49544[(12)] = inst_49519);

return statearr_49544;
})();
var statearr_49545_49573 = state_49526__$1;
(statearr_49545_49573[(2)] = null);

(statearr_49545_49573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (10))){
var inst_49494 = (state_49526[(2)]);
var inst_49495 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49526__$1 = (function (){var statearr_49546 = state_49526;
(statearr_49546[(13)] = inst_49494);

return statearr_49546;
})();
var statearr_49547_49574 = state_49526__$1;
(statearr_49547_49574[(2)] = inst_49495);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49527 === (8))){
var inst_49508 = (state_49526[(2)]);
var state_49526__$1 = state_49526;
var statearr_49548_49575 = state_49526__$1;
(statearr_49548_49575[(2)] = inst_49508);

(statearr_49548_49575[(1)] = (5));


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
});})(c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46318__auto__,c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_49552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49552[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_49552[(1)] = (1));

return statearr_49552;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_49526){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49553){if((e49553 instanceof Object)){
var ex__46322__auto__ = e49553;
var statearr_49554_49576 = state_49526;
(statearr_49554_49576[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49577 = state_49526;
state_49526 = G__49577;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_49526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_49526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47518__auto__ = (function (){var statearr_49555 = f__47517__auto__.call(null);
(statearr_49555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49560);

return statearr_49555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49560,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args49579 = [];
var len__45375__auto___49637 = arguments.length;
var i__45376__auto___49638 = (0);
while(true){
if((i__45376__auto___49638 < len__45375__auto___49637)){
args49579.push((arguments[i__45376__auto___49638]));

var G__49639 = (i__45376__auto___49638 + (1));
i__45376__auto___49638 = G__49639;
continue;
} else {
}
break;
}

var G__49581 = args49579.length;
switch (G__49581) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49579.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___49641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49641,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49641,out){
return (function (state_49613){
var state_val_49614 = (state_49613[(1)]);
if((state_val_49614 === (7))){
var inst_49593 = (state_49613[(7)]);
var inst_49592 = (state_49613[(8)]);
var inst_49592__$1 = (state_49613[(2)]);
var inst_49593__$1 = cljs.core.nth.call(null,inst_49592__$1,(0),null);
var inst_49594 = cljs.core.nth.call(null,inst_49592__$1,(1),null);
var inst_49595 = (inst_49593__$1 == null);
var state_49613__$1 = (function (){var statearr_49615 = state_49613;
(statearr_49615[(7)] = inst_49593__$1);

(statearr_49615[(9)] = inst_49594);

(statearr_49615[(8)] = inst_49592__$1);

return statearr_49615;
})();
if(cljs.core.truth_(inst_49595)){
var statearr_49616_49642 = state_49613__$1;
(statearr_49616_49642[(1)] = (8));

} else {
var statearr_49617_49643 = state_49613__$1;
(statearr_49617_49643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (1))){
var inst_49582 = cljs.core.vec.call(null,chs);
var inst_49583 = inst_49582;
var state_49613__$1 = (function (){var statearr_49618 = state_49613;
(statearr_49618[(10)] = inst_49583);

return statearr_49618;
})();
var statearr_49619_49644 = state_49613__$1;
(statearr_49619_49644[(2)] = null);

(statearr_49619_49644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (4))){
var inst_49583 = (state_49613[(10)]);
var state_49613__$1 = state_49613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49613__$1,(7),inst_49583);
} else {
if((state_val_49614 === (6))){
var inst_49609 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
var statearr_49620_49645 = state_49613__$1;
(statearr_49620_49645[(2)] = inst_49609);

(statearr_49620_49645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (3))){
var inst_49611 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49613__$1,inst_49611);
} else {
if((state_val_49614 === (2))){
var inst_49583 = (state_49613[(10)]);
var inst_49585 = cljs.core.count.call(null,inst_49583);
var inst_49586 = (inst_49585 > (0));
var state_49613__$1 = state_49613;
if(cljs.core.truth_(inst_49586)){
var statearr_49622_49646 = state_49613__$1;
(statearr_49622_49646[(1)] = (4));

} else {
var statearr_49623_49647 = state_49613__$1;
(statearr_49623_49647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (11))){
var inst_49583 = (state_49613[(10)]);
var inst_49602 = (state_49613[(2)]);
var tmp49621 = inst_49583;
var inst_49583__$1 = tmp49621;
var state_49613__$1 = (function (){var statearr_49624 = state_49613;
(statearr_49624[(11)] = inst_49602);

(statearr_49624[(10)] = inst_49583__$1);

return statearr_49624;
})();
var statearr_49625_49648 = state_49613__$1;
(statearr_49625_49648[(2)] = null);

(statearr_49625_49648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (9))){
var inst_49593 = (state_49613[(7)]);
var state_49613__$1 = state_49613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49613__$1,(11),out,inst_49593);
} else {
if((state_val_49614 === (5))){
var inst_49607 = cljs.core.async.close_BANG_.call(null,out);
var state_49613__$1 = state_49613;
var statearr_49626_49649 = state_49613__$1;
(statearr_49626_49649[(2)] = inst_49607);

(statearr_49626_49649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (10))){
var inst_49605 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
var statearr_49627_49650 = state_49613__$1;
(statearr_49627_49650[(2)] = inst_49605);

(statearr_49627_49650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (8))){
var inst_49593 = (state_49613[(7)]);
var inst_49594 = (state_49613[(9)]);
var inst_49583 = (state_49613[(10)]);
var inst_49592 = (state_49613[(8)]);
var inst_49597 = (function (){var cs = inst_49583;
var vec__49588 = inst_49592;
var v = inst_49593;
var c = inst_49594;
return ((function (cs,vec__49588,v,c,inst_49593,inst_49594,inst_49583,inst_49592,state_val_49614,c__47516__auto___49641,out){
return (function (p1__49578_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49578_SHARP_);
});
;})(cs,vec__49588,v,c,inst_49593,inst_49594,inst_49583,inst_49592,state_val_49614,c__47516__auto___49641,out))
})();
var inst_49598 = cljs.core.filterv.call(null,inst_49597,inst_49583);
var inst_49583__$1 = inst_49598;
var state_49613__$1 = (function (){var statearr_49628 = state_49613;
(statearr_49628[(10)] = inst_49583__$1);

return statearr_49628;
})();
var statearr_49629_49651 = state_49613__$1;
(statearr_49629_49651[(2)] = null);

(statearr_49629_49651[(1)] = (2));


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
});})(c__47516__auto___49641,out))
;
return ((function (switch__46318__auto__,c__47516__auto___49641,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_49633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49633[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_49633[(1)] = (1));

return statearr_49633;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_49613){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49634){if((e49634 instanceof Object)){
var ex__46322__auto__ = e49634;
var statearr_49635_49652 = state_49613;
(statearr_49635_49652[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49653 = state_49613;
state_49613 = G__49653;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_49613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_49613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49641,out))
})();
var state__47518__auto__ = (function (){var statearr_49636 = f__47517__auto__.call(null);
(statearr_49636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49641);

return statearr_49636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49641,out))
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
var args49654 = [];
var len__45375__auto___49703 = arguments.length;
var i__45376__auto___49704 = (0);
while(true){
if((i__45376__auto___49704 < len__45375__auto___49703)){
args49654.push((arguments[i__45376__auto___49704]));

var G__49705 = (i__45376__auto___49704 + (1));
i__45376__auto___49704 = G__49705;
continue;
} else {
}
break;
}

var G__49656 = args49654.length;
switch (G__49656) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49654.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___49707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49707,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49707,out){
return (function (state_49680){
var state_val_49681 = (state_49680[(1)]);
if((state_val_49681 === (7))){
var inst_49662 = (state_49680[(7)]);
var inst_49662__$1 = (state_49680[(2)]);
var inst_49663 = (inst_49662__$1 == null);
var inst_49664 = cljs.core.not.call(null,inst_49663);
var state_49680__$1 = (function (){var statearr_49682 = state_49680;
(statearr_49682[(7)] = inst_49662__$1);

return statearr_49682;
})();
if(inst_49664){
var statearr_49683_49708 = state_49680__$1;
(statearr_49683_49708[(1)] = (8));

} else {
var statearr_49684_49709 = state_49680__$1;
(statearr_49684_49709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (1))){
var inst_49657 = (0);
var state_49680__$1 = (function (){var statearr_49685 = state_49680;
(statearr_49685[(8)] = inst_49657);

return statearr_49685;
})();
var statearr_49686_49710 = state_49680__$1;
(statearr_49686_49710[(2)] = null);

(statearr_49686_49710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (4))){
var state_49680__$1 = state_49680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49680__$1,(7),ch);
} else {
if((state_val_49681 === (6))){
var inst_49675 = (state_49680[(2)]);
var state_49680__$1 = state_49680;
var statearr_49687_49711 = state_49680__$1;
(statearr_49687_49711[(2)] = inst_49675);

(statearr_49687_49711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (3))){
var inst_49677 = (state_49680[(2)]);
var inst_49678 = cljs.core.async.close_BANG_.call(null,out);
var state_49680__$1 = (function (){var statearr_49688 = state_49680;
(statearr_49688[(9)] = inst_49677);

return statearr_49688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49680__$1,inst_49678);
} else {
if((state_val_49681 === (2))){
var inst_49657 = (state_49680[(8)]);
var inst_49659 = (inst_49657 < n);
var state_49680__$1 = state_49680;
if(cljs.core.truth_(inst_49659)){
var statearr_49689_49712 = state_49680__$1;
(statearr_49689_49712[(1)] = (4));

} else {
var statearr_49690_49713 = state_49680__$1;
(statearr_49690_49713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (11))){
var inst_49657 = (state_49680[(8)]);
var inst_49667 = (state_49680[(2)]);
var inst_49668 = (inst_49657 + (1));
var inst_49657__$1 = inst_49668;
var state_49680__$1 = (function (){var statearr_49691 = state_49680;
(statearr_49691[(8)] = inst_49657__$1);

(statearr_49691[(10)] = inst_49667);

return statearr_49691;
})();
var statearr_49692_49714 = state_49680__$1;
(statearr_49692_49714[(2)] = null);

(statearr_49692_49714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (9))){
var state_49680__$1 = state_49680;
var statearr_49693_49715 = state_49680__$1;
(statearr_49693_49715[(2)] = null);

(statearr_49693_49715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (5))){
var state_49680__$1 = state_49680;
var statearr_49694_49716 = state_49680__$1;
(statearr_49694_49716[(2)] = null);

(statearr_49694_49716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (10))){
var inst_49672 = (state_49680[(2)]);
var state_49680__$1 = state_49680;
var statearr_49695_49717 = state_49680__$1;
(statearr_49695_49717[(2)] = inst_49672);

(statearr_49695_49717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49681 === (8))){
var inst_49662 = (state_49680[(7)]);
var state_49680__$1 = state_49680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49680__$1,(11),out,inst_49662);
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
});})(c__47516__auto___49707,out))
;
return ((function (switch__46318__auto__,c__47516__auto___49707,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_49699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49699[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_49699[(1)] = (1));

return statearr_49699;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_49680){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49700){if((e49700 instanceof Object)){
var ex__46322__auto__ = e49700;
var statearr_49701_49718 = state_49680;
(statearr_49701_49718[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49719 = state_49680;
state_49680 = G__49719;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_49680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_49680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49707,out))
})();
var state__47518__auto__ = (function (){var statearr_49702 = f__47517__auto__.call(null);
(statearr_49702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49707);

return statearr_49702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49707,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49727 = (function (f,ch,meta49728){
this.f = f;
this.ch = ch;
this.meta49728 = meta49728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49729,meta49728__$1){
var self__ = this;
var _49729__$1 = this;
return (new cljs.core.async.t_cljs$core$async49727(self__.f,self__.ch,meta49728__$1));
});

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49729){
var self__ = this;
var _49729__$1 = this;
return self__.meta49728;
});

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49730 = (function (f,ch,meta49728,_,fn1,meta49731){
this.f = f;
this.ch = ch;
this.meta49728 = meta49728;
this._ = _;
this.fn1 = fn1;
this.meta49731 = meta49731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49732,meta49731__$1){
var self__ = this;
var _49732__$1 = this;
return (new cljs.core.async.t_cljs$core$async49730(self__.f,self__.ch,self__.meta49728,self__._,self__.fn1,meta49731__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49732){
var self__ = this;
var _49732__$1 = this;
return self__.meta49731;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49720_SHARP_){
return f1.call(null,(((p1__49720_SHARP_ == null))?null:self__.f.call(null,p1__49720_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49728","meta49728",1325236080,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49727","cljs.core.async/t_cljs$core$async49727",1855101303,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49731","meta49731",-431437923,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49730";

cljs.core.async.t_cljs$core$async49730.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49730");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49730 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49730(f__$1,ch__$1,meta49728__$1,___$2,fn1__$1,meta49731){
return (new cljs.core.async.t_cljs$core$async49730(f__$1,ch__$1,meta49728__$1,___$2,fn1__$1,meta49731));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49730(self__.f,self__.ch,self__.meta49728,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44255__auto__ = ret;
if(cljs.core.truth_(and__44255__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44255__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49728","meta49728",1325236080,null)], null);
});

cljs.core.async.t_cljs$core$async49727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49727";

cljs.core.async.t_cljs$core$async49727.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49727");
});

cljs.core.async.__GT_t_cljs$core$async49727 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49727(f__$1,ch__$1,meta49728){
return (new cljs.core.async.t_cljs$core$async49727(f__$1,ch__$1,meta49728));
});

}

return (new cljs.core.async.t_cljs$core$async49727(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49736 = (function (f,ch,meta49737){
this.f = f;
this.ch = ch;
this.meta49737 = meta49737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49738,meta49737__$1){
var self__ = this;
var _49738__$1 = this;
return (new cljs.core.async.t_cljs$core$async49736(self__.f,self__.ch,meta49737__$1));
});

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49738){
var self__ = this;
var _49738__$1 = this;
return self__.meta49737;
});

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49737","meta49737",66460397,null)], null);
});

cljs.core.async.t_cljs$core$async49736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49736";

cljs.core.async.t_cljs$core$async49736.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49736");
});

cljs.core.async.__GT_t_cljs$core$async49736 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49736(f__$1,ch__$1,meta49737){
return (new cljs.core.async.t_cljs$core$async49736(f__$1,ch__$1,meta49737));
});

}

return (new cljs.core.async.t_cljs$core$async49736(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49742 = (function (p,ch,meta49743){
this.p = p;
this.ch = ch;
this.meta49743 = meta49743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49744,meta49743__$1){
var self__ = this;
var _49744__$1 = this;
return (new cljs.core.async.t_cljs$core$async49742(self__.p,self__.ch,meta49743__$1));
});

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49744){
var self__ = this;
var _49744__$1 = this;
return self__.meta49743;
});

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49743","meta49743",91741033,null)], null);
});

cljs.core.async.t_cljs$core$async49742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49742";

cljs.core.async.t_cljs$core$async49742.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async49742");
});

cljs.core.async.__GT_t_cljs$core$async49742 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49742(p__$1,ch__$1,meta49743){
return (new cljs.core.async.t_cljs$core$async49742(p__$1,ch__$1,meta49743));
});

}

return (new cljs.core.async.t_cljs$core$async49742(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args49745 = [];
var len__45375__auto___49789 = arguments.length;
var i__45376__auto___49790 = (0);
while(true){
if((i__45376__auto___49790 < len__45375__auto___49789)){
args49745.push((arguments[i__45376__auto___49790]));

var G__49791 = (i__45376__auto___49790 + (1));
i__45376__auto___49790 = G__49791;
continue;
} else {
}
break;
}

var G__49747 = args49745.length;
switch (G__49747) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49745.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___49793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___49793,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___49793,out){
return (function (state_49768){
var state_val_49769 = (state_49768[(1)]);
if((state_val_49769 === (7))){
var inst_49764 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
var statearr_49770_49794 = state_49768__$1;
(statearr_49770_49794[(2)] = inst_49764);

(statearr_49770_49794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (1))){
var state_49768__$1 = state_49768;
var statearr_49771_49795 = state_49768__$1;
(statearr_49771_49795[(2)] = null);

(statearr_49771_49795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (4))){
var inst_49750 = (state_49768[(7)]);
var inst_49750__$1 = (state_49768[(2)]);
var inst_49751 = (inst_49750__$1 == null);
var state_49768__$1 = (function (){var statearr_49772 = state_49768;
(statearr_49772[(7)] = inst_49750__$1);

return statearr_49772;
})();
if(cljs.core.truth_(inst_49751)){
var statearr_49773_49796 = state_49768__$1;
(statearr_49773_49796[(1)] = (5));

} else {
var statearr_49774_49797 = state_49768__$1;
(statearr_49774_49797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (6))){
var inst_49750 = (state_49768[(7)]);
var inst_49755 = p.call(null,inst_49750);
var state_49768__$1 = state_49768;
if(cljs.core.truth_(inst_49755)){
var statearr_49775_49798 = state_49768__$1;
(statearr_49775_49798[(1)] = (8));

} else {
var statearr_49776_49799 = state_49768__$1;
(statearr_49776_49799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (3))){
var inst_49766 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49768__$1,inst_49766);
} else {
if((state_val_49769 === (2))){
var state_49768__$1 = state_49768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49768__$1,(4),ch);
} else {
if((state_val_49769 === (11))){
var inst_49758 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
var statearr_49777_49800 = state_49768__$1;
(statearr_49777_49800[(2)] = inst_49758);

(statearr_49777_49800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (9))){
var state_49768__$1 = state_49768;
var statearr_49778_49801 = state_49768__$1;
(statearr_49778_49801[(2)] = null);

(statearr_49778_49801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (5))){
var inst_49753 = cljs.core.async.close_BANG_.call(null,out);
var state_49768__$1 = state_49768;
var statearr_49779_49802 = state_49768__$1;
(statearr_49779_49802[(2)] = inst_49753);

(statearr_49779_49802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (10))){
var inst_49761 = (state_49768[(2)]);
var state_49768__$1 = (function (){var statearr_49780 = state_49768;
(statearr_49780[(8)] = inst_49761);

return statearr_49780;
})();
var statearr_49781_49803 = state_49768__$1;
(statearr_49781_49803[(2)] = null);

(statearr_49781_49803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (8))){
var inst_49750 = (state_49768[(7)]);
var state_49768__$1 = state_49768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49768__$1,(11),out,inst_49750);
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
});})(c__47516__auto___49793,out))
;
return ((function (switch__46318__auto__,c__47516__auto___49793,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_49785 = [null,null,null,null,null,null,null,null,null];
(statearr_49785[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_49785[(1)] = (1));

return statearr_49785;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_49768){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e49786){if((e49786 instanceof Object)){
var ex__46322__auto__ = e49786;
var statearr_49787_49804 = state_49768;
(statearr_49787_49804[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49805 = state_49768;
state_49768 = G__49805;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_49768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_49768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___49793,out))
})();
var state__47518__auto__ = (function (){var statearr_49788 = f__47517__auto__.call(null);
(statearr_49788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___49793);

return statearr_49788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___49793,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49806 = [];
var len__45375__auto___49809 = arguments.length;
var i__45376__auto___49810 = (0);
while(true){
if((i__45376__auto___49810 < len__45375__auto___49809)){
args49806.push((arguments[i__45376__auto___49810]));

var G__49811 = (i__45376__auto___49810 + (1));
i__45376__auto___49810 = G__49811;
continue;
} else {
}
break;
}

var G__49808 = args49806.length;
switch (G__49808) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49806.length)].join('')));

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
var c__47516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto__){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto__){
return (function (state_49978){
var state_val_49979 = (state_49978[(1)]);
if((state_val_49979 === (7))){
var inst_49974 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
var statearr_49980_50021 = state_49978__$1;
(statearr_49980_50021[(2)] = inst_49974);

(statearr_49980_50021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (20))){
var inst_49944 = (state_49978[(7)]);
var inst_49955 = (state_49978[(2)]);
var inst_49956 = cljs.core.next.call(null,inst_49944);
var inst_49930 = inst_49956;
var inst_49931 = null;
var inst_49932 = (0);
var inst_49933 = (0);
var state_49978__$1 = (function (){var statearr_49981 = state_49978;
(statearr_49981[(8)] = inst_49933);

(statearr_49981[(9)] = inst_49930);

(statearr_49981[(10)] = inst_49932);

(statearr_49981[(11)] = inst_49931);

(statearr_49981[(12)] = inst_49955);

return statearr_49981;
})();
var statearr_49982_50022 = state_49978__$1;
(statearr_49982_50022[(2)] = null);

(statearr_49982_50022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (1))){
var state_49978__$1 = state_49978;
var statearr_49983_50023 = state_49978__$1;
(statearr_49983_50023[(2)] = null);

(statearr_49983_50023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (4))){
var inst_49919 = (state_49978[(13)]);
var inst_49919__$1 = (state_49978[(2)]);
var inst_49920 = (inst_49919__$1 == null);
var state_49978__$1 = (function (){var statearr_49984 = state_49978;
(statearr_49984[(13)] = inst_49919__$1);

return statearr_49984;
})();
if(cljs.core.truth_(inst_49920)){
var statearr_49985_50024 = state_49978__$1;
(statearr_49985_50024[(1)] = (5));

} else {
var statearr_49986_50025 = state_49978__$1;
(statearr_49986_50025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (15))){
var state_49978__$1 = state_49978;
var statearr_49990_50026 = state_49978__$1;
(statearr_49990_50026[(2)] = null);

(statearr_49990_50026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (21))){
var state_49978__$1 = state_49978;
var statearr_49991_50027 = state_49978__$1;
(statearr_49991_50027[(2)] = null);

(statearr_49991_50027[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (13))){
var inst_49933 = (state_49978[(8)]);
var inst_49930 = (state_49978[(9)]);
var inst_49932 = (state_49978[(10)]);
var inst_49931 = (state_49978[(11)]);
var inst_49940 = (state_49978[(2)]);
var inst_49941 = (inst_49933 + (1));
var tmp49987 = inst_49930;
var tmp49988 = inst_49932;
var tmp49989 = inst_49931;
var inst_49930__$1 = tmp49987;
var inst_49931__$1 = tmp49989;
var inst_49932__$1 = tmp49988;
var inst_49933__$1 = inst_49941;
var state_49978__$1 = (function (){var statearr_49992 = state_49978;
(statearr_49992[(8)] = inst_49933__$1);

(statearr_49992[(9)] = inst_49930__$1);

(statearr_49992[(10)] = inst_49932__$1);

(statearr_49992[(14)] = inst_49940);

(statearr_49992[(11)] = inst_49931__$1);

return statearr_49992;
})();
var statearr_49993_50028 = state_49978__$1;
(statearr_49993_50028[(2)] = null);

(statearr_49993_50028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (22))){
var state_49978__$1 = state_49978;
var statearr_49994_50029 = state_49978__$1;
(statearr_49994_50029[(2)] = null);

(statearr_49994_50029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (6))){
var inst_49919 = (state_49978[(13)]);
var inst_49928 = f.call(null,inst_49919);
var inst_49929 = cljs.core.seq.call(null,inst_49928);
var inst_49930 = inst_49929;
var inst_49931 = null;
var inst_49932 = (0);
var inst_49933 = (0);
var state_49978__$1 = (function (){var statearr_49995 = state_49978;
(statearr_49995[(8)] = inst_49933);

(statearr_49995[(9)] = inst_49930);

(statearr_49995[(10)] = inst_49932);

(statearr_49995[(11)] = inst_49931);

return statearr_49995;
})();
var statearr_49996_50030 = state_49978__$1;
(statearr_49996_50030[(2)] = null);

(statearr_49996_50030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (17))){
var inst_49944 = (state_49978[(7)]);
var inst_49948 = cljs.core.chunk_first.call(null,inst_49944);
var inst_49949 = cljs.core.chunk_rest.call(null,inst_49944);
var inst_49950 = cljs.core.count.call(null,inst_49948);
var inst_49930 = inst_49949;
var inst_49931 = inst_49948;
var inst_49932 = inst_49950;
var inst_49933 = (0);
var state_49978__$1 = (function (){var statearr_49997 = state_49978;
(statearr_49997[(8)] = inst_49933);

(statearr_49997[(9)] = inst_49930);

(statearr_49997[(10)] = inst_49932);

(statearr_49997[(11)] = inst_49931);

return statearr_49997;
})();
var statearr_49998_50031 = state_49978__$1;
(statearr_49998_50031[(2)] = null);

(statearr_49998_50031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (3))){
var inst_49976 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49978__$1,inst_49976);
} else {
if((state_val_49979 === (12))){
var inst_49964 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
var statearr_49999_50032 = state_49978__$1;
(statearr_49999_50032[(2)] = inst_49964);

(statearr_49999_50032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (2))){
var state_49978__$1 = state_49978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49978__$1,(4),in$);
} else {
if((state_val_49979 === (23))){
var inst_49972 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
var statearr_50000_50033 = state_49978__$1;
(statearr_50000_50033[(2)] = inst_49972);

(statearr_50000_50033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (19))){
var inst_49959 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
var statearr_50001_50034 = state_49978__$1;
(statearr_50001_50034[(2)] = inst_49959);

(statearr_50001_50034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (11))){
var inst_49930 = (state_49978[(9)]);
var inst_49944 = (state_49978[(7)]);
var inst_49944__$1 = cljs.core.seq.call(null,inst_49930);
var state_49978__$1 = (function (){var statearr_50002 = state_49978;
(statearr_50002[(7)] = inst_49944__$1);

return statearr_50002;
})();
if(inst_49944__$1){
var statearr_50003_50035 = state_49978__$1;
(statearr_50003_50035[(1)] = (14));

} else {
var statearr_50004_50036 = state_49978__$1;
(statearr_50004_50036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (9))){
var inst_49966 = (state_49978[(2)]);
var inst_49967 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49978__$1 = (function (){var statearr_50005 = state_49978;
(statearr_50005[(15)] = inst_49966);

return statearr_50005;
})();
if(cljs.core.truth_(inst_49967)){
var statearr_50006_50037 = state_49978__$1;
(statearr_50006_50037[(1)] = (21));

} else {
var statearr_50007_50038 = state_49978__$1;
(statearr_50007_50038[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (5))){
var inst_49922 = cljs.core.async.close_BANG_.call(null,out);
var state_49978__$1 = state_49978;
var statearr_50008_50039 = state_49978__$1;
(statearr_50008_50039[(2)] = inst_49922);

(statearr_50008_50039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (14))){
var inst_49944 = (state_49978[(7)]);
var inst_49946 = cljs.core.chunked_seq_QMARK_.call(null,inst_49944);
var state_49978__$1 = state_49978;
if(inst_49946){
var statearr_50009_50040 = state_49978__$1;
(statearr_50009_50040[(1)] = (17));

} else {
var statearr_50010_50041 = state_49978__$1;
(statearr_50010_50041[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (16))){
var inst_49962 = (state_49978[(2)]);
var state_49978__$1 = state_49978;
var statearr_50011_50042 = state_49978__$1;
(statearr_50011_50042[(2)] = inst_49962);

(statearr_50011_50042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49979 === (10))){
var inst_49933 = (state_49978[(8)]);
var inst_49931 = (state_49978[(11)]);
var inst_49938 = cljs.core._nth.call(null,inst_49931,inst_49933);
var state_49978__$1 = state_49978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49978__$1,(13),out,inst_49938);
} else {
if((state_val_49979 === (18))){
var inst_49944 = (state_49978[(7)]);
var inst_49953 = cljs.core.first.call(null,inst_49944);
var state_49978__$1 = state_49978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49978__$1,(20),out,inst_49953);
} else {
if((state_val_49979 === (8))){
var inst_49933 = (state_49978[(8)]);
var inst_49932 = (state_49978[(10)]);
var inst_49935 = (inst_49933 < inst_49932);
var inst_49936 = inst_49935;
var state_49978__$1 = state_49978;
if(cljs.core.truth_(inst_49936)){
var statearr_50012_50043 = state_49978__$1;
(statearr_50012_50043[(1)] = (10));

} else {
var statearr_50013_50044 = state_49978__$1;
(statearr_50013_50044[(1)] = (11));

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
});})(c__47516__auto__))
;
return ((function (switch__46318__auto__,c__47516__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____0 = (function (){
var statearr_50017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50017[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__);

(statearr_50017[(1)] = (1));

return statearr_50017;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____1 = (function (state_49978){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_49978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50018){if((e50018 instanceof Object)){
var ex__46322__auto__ = e50018;
var statearr_50019_50045 = state_49978;
(statearr_50019_50045[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50046 = state_49978;
state_49978 = G__50046;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__ = function(state_49978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____1.call(this,state_49978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto__))
})();
var state__47518__auto__ = (function (){var statearr_50020 = f__47517__auto__.call(null);
(statearr_50020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto__);

return statearr_50020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto__))
);

return c__47516__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args50047 = [];
var len__45375__auto___50050 = arguments.length;
var i__45376__auto___50051 = (0);
while(true){
if((i__45376__auto___50051 < len__45375__auto___50050)){
args50047.push((arguments[i__45376__auto___50051]));

var G__50052 = (i__45376__auto___50051 + (1));
i__45376__auto___50051 = G__50052;
continue;
} else {
}
break;
}

var G__50049 = args50047.length;
switch (G__50049) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50047.length)].join('')));

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
var args50054 = [];
var len__45375__auto___50057 = arguments.length;
var i__45376__auto___50058 = (0);
while(true){
if((i__45376__auto___50058 < len__45375__auto___50057)){
args50054.push((arguments[i__45376__auto___50058]));

var G__50059 = (i__45376__auto___50058 + (1));
i__45376__auto___50058 = G__50059;
continue;
} else {
}
break;
}

var G__50056 = args50054.length;
switch (G__50056) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50054.length)].join('')));

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
var args50061 = [];
var len__45375__auto___50112 = arguments.length;
var i__45376__auto___50113 = (0);
while(true){
if((i__45376__auto___50113 < len__45375__auto___50112)){
args50061.push((arguments[i__45376__auto___50113]));

var G__50114 = (i__45376__auto___50113 + (1));
i__45376__auto___50113 = G__50114;
continue;
} else {
}
break;
}

var G__50063 = args50061.length;
switch (G__50063) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50061.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___50116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___50116,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___50116,out){
return (function (state_50087){
var state_val_50088 = (state_50087[(1)]);
if((state_val_50088 === (7))){
var inst_50082 = (state_50087[(2)]);
var state_50087__$1 = state_50087;
var statearr_50089_50117 = state_50087__$1;
(statearr_50089_50117[(2)] = inst_50082);

(statearr_50089_50117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (1))){
var inst_50064 = null;
var state_50087__$1 = (function (){var statearr_50090 = state_50087;
(statearr_50090[(7)] = inst_50064);

return statearr_50090;
})();
var statearr_50091_50118 = state_50087__$1;
(statearr_50091_50118[(2)] = null);

(statearr_50091_50118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (4))){
var inst_50067 = (state_50087[(8)]);
var inst_50067__$1 = (state_50087[(2)]);
var inst_50068 = (inst_50067__$1 == null);
var inst_50069 = cljs.core.not.call(null,inst_50068);
var state_50087__$1 = (function (){var statearr_50092 = state_50087;
(statearr_50092[(8)] = inst_50067__$1);

return statearr_50092;
})();
if(inst_50069){
var statearr_50093_50119 = state_50087__$1;
(statearr_50093_50119[(1)] = (5));

} else {
var statearr_50094_50120 = state_50087__$1;
(statearr_50094_50120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (6))){
var state_50087__$1 = state_50087;
var statearr_50095_50121 = state_50087__$1;
(statearr_50095_50121[(2)] = null);

(statearr_50095_50121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (3))){
var inst_50084 = (state_50087[(2)]);
var inst_50085 = cljs.core.async.close_BANG_.call(null,out);
var state_50087__$1 = (function (){var statearr_50096 = state_50087;
(statearr_50096[(9)] = inst_50084);

return statearr_50096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50087__$1,inst_50085);
} else {
if((state_val_50088 === (2))){
var state_50087__$1 = state_50087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50087__$1,(4),ch);
} else {
if((state_val_50088 === (11))){
var inst_50067 = (state_50087[(8)]);
var inst_50076 = (state_50087[(2)]);
var inst_50064 = inst_50067;
var state_50087__$1 = (function (){var statearr_50097 = state_50087;
(statearr_50097[(10)] = inst_50076);

(statearr_50097[(7)] = inst_50064);

return statearr_50097;
})();
var statearr_50098_50122 = state_50087__$1;
(statearr_50098_50122[(2)] = null);

(statearr_50098_50122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (9))){
var inst_50067 = (state_50087[(8)]);
var state_50087__$1 = state_50087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50087__$1,(11),out,inst_50067);
} else {
if((state_val_50088 === (5))){
var inst_50064 = (state_50087[(7)]);
var inst_50067 = (state_50087[(8)]);
var inst_50071 = cljs.core._EQ_.call(null,inst_50067,inst_50064);
var state_50087__$1 = state_50087;
if(inst_50071){
var statearr_50100_50123 = state_50087__$1;
(statearr_50100_50123[(1)] = (8));

} else {
var statearr_50101_50124 = state_50087__$1;
(statearr_50101_50124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (10))){
var inst_50079 = (state_50087[(2)]);
var state_50087__$1 = state_50087;
var statearr_50102_50125 = state_50087__$1;
(statearr_50102_50125[(2)] = inst_50079);

(statearr_50102_50125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50088 === (8))){
var inst_50064 = (state_50087[(7)]);
var tmp50099 = inst_50064;
var inst_50064__$1 = tmp50099;
var state_50087__$1 = (function (){var statearr_50103 = state_50087;
(statearr_50103[(7)] = inst_50064__$1);

return statearr_50103;
})();
var statearr_50104_50126 = state_50087__$1;
(statearr_50104_50126[(2)] = null);

(statearr_50104_50126[(1)] = (2));


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
});})(c__47516__auto___50116,out))
;
return ((function (switch__46318__auto__,c__47516__auto___50116,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_50108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50108[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_50108[(1)] = (1));

return statearr_50108;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_50087){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_50087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50109){if((e50109 instanceof Object)){
var ex__46322__auto__ = e50109;
var statearr_50110_50127 = state_50087;
(statearr_50110_50127[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50128 = state_50087;
state_50087 = G__50128;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_50087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_50087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___50116,out))
})();
var state__47518__auto__ = (function (){var statearr_50111 = f__47517__auto__.call(null);
(statearr_50111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___50116);

return statearr_50111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___50116,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50129 = [];
var len__45375__auto___50199 = arguments.length;
var i__45376__auto___50200 = (0);
while(true){
if((i__45376__auto___50200 < len__45375__auto___50199)){
args50129.push((arguments[i__45376__auto___50200]));

var G__50201 = (i__45376__auto___50200 + (1));
i__45376__auto___50200 = G__50201;
continue;
} else {
}
break;
}

var G__50131 = args50129.length;
switch (G__50131) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50129.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___50203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___50203,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___50203,out){
return (function (state_50169){
var state_val_50170 = (state_50169[(1)]);
if((state_val_50170 === (7))){
var inst_50165 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
var statearr_50171_50204 = state_50169__$1;
(statearr_50171_50204[(2)] = inst_50165);

(statearr_50171_50204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (1))){
var inst_50132 = (new Array(n));
var inst_50133 = inst_50132;
var inst_50134 = (0);
var state_50169__$1 = (function (){var statearr_50172 = state_50169;
(statearr_50172[(7)] = inst_50134);

(statearr_50172[(8)] = inst_50133);

return statearr_50172;
})();
var statearr_50173_50205 = state_50169__$1;
(statearr_50173_50205[(2)] = null);

(statearr_50173_50205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (4))){
var inst_50137 = (state_50169[(9)]);
var inst_50137__$1 = (state_50169[(2)]);
var inst_50138 = (inst_50137__$1 == null);
var inst_50139 = cljs.core.not.call(null,inst_50138);
var state_50169__$1 = (function (){var statearr_50174 = state_50169;
(statearr_50174[(9)] = inst_50137__$1);

return statearr_50174;
})();
if(inst_50139){
var statearr_50175_50206 = state_50169__$1;
(statearr_50175_50206[(1)] = (5));

} else {
var statearr_50176_50207 = state_50169__$1;
(statearr_50176_50207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (15))){
var inst_50159 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
var statearr_50177_50208 = state_50169__$1;
(statearr_50177_50208[(2)] = inst_50159);

(statearr_50177_50208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (13))){
var state_50169__$1 = state_50169;
var statearr_50178_50209 = state_50169__$1;
(statearr_50178_50209[(2)] = null);

(statearr_50178_50209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (6))){
var inst_50134 = (state_50169[(7)]);
var inst_50155 = (inst_50134 > (0));
var state_50169__$1 = state_50169;
if(cljs.core.truth_(inst_50155)){
var statearr_50179_50210 = state_50169__$1;
(statearr_50179_50210[(1)] = (12));

} else {
var statearr_50180_50211 = state_50169__$1;
(statearr_50180_50211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (3))){
var inst_50167 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50169__$1,inst_50167);
} else {
if((state_val_50170 === (12))){
var inst_50133 = (state_50169[(8)]);
var inst_50157 = cljs.core.vec.call(null,inst_50133);
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50169__$1,(15),out,inst_50157);
} else {
if((state_val_50170 === (2))){
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50169__$1,(4),ch);
} else {
if((state_val_50170 === (11))){
var inst_50149 = (state_50169[(2)]);
var inst_50150 = (new Array(n));
var inst_50133 = inst_50150;
var inst_50134 = (0);
var state_50169__$1 = (function (){var statearr_50181 = state_50169;
(statearr_50181[(7)] = inst_50134);

(statearr_50181[(8)] = inst_50133);

(statearr_50181[(10)] = inst_50149);

return statearr_50181;
})();
var statearr_50182_50212 = state_50169__$1;
(statearr_50182_50212[(2)] = null);

(statearr_50182_50212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (9))){
var inst_50133 = (state_50169[(8)]);
var inst_50147 = cljs.core.vec.call(null,inst_50133);
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50169__$1,(11),out,inst_50147);
} else {
if((state_val_50170 === (5))){
var inst_50134 = (state_50169[(7)]);
var inst_50142 = (state_50169[(11)]);
var inst_50133 = (state_50169[(8)]);
var inst_50137 = (state_50169[(9)]);
var inst_50141 = (inst_50133[inst_50134] = inst_50137);
var inst_50142__$1 = (inst_50134 + (1));
var inst_50143 = (inst_50142__$1 < n);
var state_50169__$1 = (function (){var statearr_50183 = state_50169;
(statearr_50183[(11)] = inst_50142__$1);

(statearr_50183[(12)] = inst_50141);

return statearr_50183;
})();
if(cljs.core.truth_(inst_50143)){
var statearr_50184_50213 = state_50169__$1;
(statearr_50184_50213[(1)] = (8));

} else {
var statearr_50185_50214 = state_50169__$1;
(statearr_50185_50214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (14))){
var inst_50162 = (state_50169[(2)]);
var inst_50163 = cljs.core.async.close_BANG_.call(null,out);
var state_50169__$1 = (function (){var statearr_50187 = state_50169;
(statearr_50187[(13)] = inst_50162);

return statearr_50187;
})();
var statearr_50188_50215 = state_50169__$1;
(statearr_50188_50215[(2)] = inst_50163);

(statearr_50188_50215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (10))){
var inst_50153 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
var statearr_50189_50216 = state_50169__$1;
(statearr_50189_50216[(2)] = inst_50153);

(statearr_50189_50216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (8))){
var inst_50142 = (state_50169[(11)]);
var inst_50133 = (state_50169[(8)]);
var tmp50186 = inst_50133;
var inst_50133__$1 = tmp50186;
var inst_50134 = inst_50142;
var state_50169__$1 = (function (){var statearr_50190 = state_50169;
(statearr_50190[(7)] = inst_50134);

(statearr_50190[(8)] = inst_50133__$1);

return statearr_50190;
})();
var statearr_50191_50217 = state_50169__$1;
(statearr_50191_50217[(2)] = null);

(statearr_50191_50217[(1)] = (2));


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
});})(c__47516__auto___50203,out))
;
return ((function (switch__46318__auto__,c__47516__auto___50203,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_50195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50195[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_50195[(1)] = (1));

return statearr_50195;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_50169){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_50169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50196){if((e50196 instanceof Object)){
var ex__46322__auto__ = e50196;
var statearr_50197_50218 = state_50169;
(statearr_50197_50218[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50219 = state_50169;
state_50169 = G__50219;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_50169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_50169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___50203,out))
})();
var state__47518__auto__ = (function (){var statearr_50198 = f__47517__auto__.call(null);
(statearr_50198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___50203);

return statearr_50198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___50203,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50220 = [];
var len__45375__auto___50294 = arguments.length;
var i__45376__auto___50295 = (0);
while(true){
if((i__45376__auto___50295 < len__45375__auto___50294)){
args50220.push((arguments[i__45376__auto___50295]));

var G__50296 = (i__45376__auto___50295 + (1));
i__45376__auto___50295 = G__50296;
continue;
} else {
}
break;
}

var G__50222 = args50220.length;
switch (G__50222) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50220.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47516__auto___50298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47516__auto___50298,out){
return (function (){
var f__47517__auto__ = (function (){var switch__46318__auto__ = ((function (c__47516__auto___50298,out){
return (function (state_50264){
var state_val_50265 = (state_50264[(1)]);
if((state_val_50265 === (7))){
var inst_50260 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50266_50299 = state_50264__$1;
(statearr_50266_50299[(2)] = inst_50260);

(statearr_50266_50299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (1))){
var inst_50223 = [];
var inst_50224 = inst_50223;
var inst_50225 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50264__$1 = (function (){var statearr_50267 = state_50264;
(statearr_50267[(7)] = inst_50224);

(statearr_50267[(8)] = inst_50225);

return statearr_50267;
})();
var statearr_50268_50300 = state_50264__$1;
(statearr_50268_50300[(2)] = null);

(statearr_50268_50300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (4))){
var inst_50228 = (state_50264[(9)]);
var inst_50228__$1 = (state_50264[(2)]);
var inst_50229 = (inst_50228__$1 == null);
var inst_50230 = cljs.core.not.call(null,inst_50229);
var state_50264__$1 = (function (){var statearr_50269 = state_50264;
(statearr_50269[(9)] = inst_50228__$1);

return statearr_50269;
})();
if(inst_50230){
var statearr_50270_50301 = state_50264__$1;
(statearr_50270_50301[(1)] = (5));

} else {
var statearr_50271_50302 = state_50264__$1;
(statearr_50271_50302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (15))){
var inst_50254 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50272_50303 = state_50264__$1;
(statearr_50272_50303[(2)] = inst_50254);

(statearr_50272_50303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (13))){
var state_50264__$1 = state_50264;
var statearr_50273_50304 = state_50264__$1;
(statearr_50273_50304[(2)] = null);

(statearr_50273_50304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (6))){
var inst_50224 = (state_50264[(7)]);
var inst_50249 = inst_50224.length;
var inst_50250 = (inst_50249 > (0));
var state_50264__$1 = state_50264;
if(cljs.core.truth_(inst_50250)){
var statearr_50274_50305 = state_50264__$1;
(statearr_50274_50305[(1)] = (12));

} else {
var statearr_50275_50306 = state_50264__$1;
(statearr_50275_50306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (3))){
var inst_50262 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50264__$1,inst_50262);
} else {
if((state_val_50265 === (12))){
var inst_50224 = (state_50264[(7)]);
var inst_50252 = cljs.core.vec.call(null,inst_50224);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50264__$1,(15),out,inst_50252);
} else {
if((state_val_50265 === (2))){
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50264__$1,(4),ch);
} else {
if((state_val_50265 === (11))){
var inst_50228 = (state_50264[(9)]);
var inst_50232 = (state_50264[(10)]);
var inst_50242 = (state_50264[(2)]);
var inst_50243 = [];
var inst_50244 = inst_50243.push(inst_50228);
var inst_50224 = inst_50243;
var inst_50225 = inst_50232;
var state_50264__$1 = (function (){var statearr_50276 = state_50264;
(statearr_50276[(7)] = inst_50224);

(statearr_50276[(11)] = inst_50244);

(statearr_50276[(8)] = inst_50225);

(statearr_50276[(12)] = inst_50242);

return statearr_50276;
})();
var statearr_50277_50307 = state_50264__$1;
(statearr_50277_50307[(2)] = null);

(statearr_50277_50307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (9))){
var inst_50224 = (state_50264[(7)]);
var inst_50240 = cljs.core.vec.call(null,inst_50224);
var state_50264__$1 = state_50264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50264__$1,(11),out,inst_50240);
} else {
if((state_val_50265 === (5))){
var inst_50225 = (state_50264[(8)]);
var inst_50228 = (state_50264[(9)]);
var inst_50232 = (state_50264[(10)]);
var inst_50232__$1 = f.call(null,inst_50228);
var inst_50233 = cljs.core._EQ_.call(null,inst_50232__$1,inst_50225);
var inst_50234 = cljs.core.keyword_identical_QMARK_.call(null,inst_50225,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50235 = (inst_50233) || (inst_50234);
var state_50264__$1 = (function (){var statearr_50278 = state_50264;
(statearr_50278[(10)] = inst_50232__$1);

return statearr_50278;
})();
if(cljs.core.truth_(inst_50235)){
var statearr_50279_50308 = state_50264__$1;
(statearr_50279_50308[(1)] = (8));

} else {
var statearr_50280_50309 = state_50264__$1;
(statearr_50280_50309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (14))){
var inst_50257 = (state_50264[(2)]);
var inst_50258 = cljs.core.async.close_BANG_.call(null,out);
var state_50264__$1 = (function (){var statearr_50282 = state_50264;
(statearr_50282[(13)] = inst_50257);

return statearr_50282;
})();
var statearr_50283_50310 = state_50264__$1;
(statearr_50283_50310[(2)] = inst_50258);

(statearr_50283_50310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (10))){
var inst_50247 = (state_50264[(2)]);
var state_50264__$1 = state_50264;
var statearr_50284_50311 = state_50264__$1;
(statearr_50284_50311[(2)] = inst_50247);

(statearr_50284_50311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50265 === (8))){
var inst_50224 = (state_50264[(7)]);
var inst_50228 = (state_50264[(9)]);
var inst_50232 = (state_50264[(10)]);
var inst_50237 = inst_50224.push(inst_50228);
var tmp50281 = inst_50224;
var inst_50224__$1 = tmp50281;
var inst_50225 = inst_50232;
var state_50264__$1 = (function (){var statearr_50285 = state_50264;
(statearr_50285[(7)] = inst_50224__$1);

(statearr_50285[(14)] = inst_50237);

(statearr_50285[(8)] = inst_50225);

return statearr_50285;
})();
var statearr_50286_50312 = state_50264__$1;
(statearr_50286_50312[(2)] = null);

(statearr_50286_50312[(1)] = (2));


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
});})(c__47516__auto___50298,out))
;
return ((function (switch__46318__auto__,c__47516__auto___50298,out){
return (function() {
var cljs$core$async$state_machine__46319__auto__ = null;
var cljs$core$async$state_machine__46319__auto____0 = (function (){
var statearr_50290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50290[(0)] = cljs$core$async$state_machine__46319__auto__);

(statearr_50290[(1)] = (1));

return statearr_50290;
});
var cljs$core$async$state_machine__46319__auto____1 = (function (state_50264){
while(true){
var ret_value__46320__auto__ = (function (){try{while(true){
var result__46321__auto__ = switch__46318__auto__.call(null,state_50264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46321__auto__;
}
break;
}
}catch (e50291){if((e50291 instanceof Object)){
var ex__46322__auto__ = e50291;
var statearr_50292_50313 = state_50264;
(statearr_50292_50313[(5)] = ex__46322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50314 = state_50264;
state_50264 = G__50314;
continue;
} else {
return ret_value__46320__auto__;
}
break;
}
});
cljs$core$async$state_machine__46319__auto__ = function(state_50264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46319__auto____1.call(this,state_50264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46319__auto____0;
cljs$core$async$state_machine__46319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46319__auto____1;
return cljs$core$async$state_machine__46319__auto__;
})()
;})(switch__46318__auto__,c__47516__auto___50298,out))
})();
var state__47518__auto__ = (function (){var statearr_50293 = f__47517__auto__.call(null);
(statearr_50293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47516__auto___50298);

return statearr_50293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47518__auto__);
});})(c__47516__auto___50298,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476916468257