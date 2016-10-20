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
var args56827 = [];
var len__45375__auto___56833 = arguments.length;
var i__45376__auto___56834 = (0);
while(true){
if((i__45376__auto___56834 < len__45375__auto___56833)){
args56827.push((arguments[i__45376__auto___56834]));

var G__56835 = (i__45376__auto___56834 + (1));
i__45376__auto___56834 = G__56835;
continue;
} else {
}
break;
}

var G__56829 = args56827.length;
switch (G__56829) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56827.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56830 = (function (f,blockable,meta56831){
this.f = f;
this.blockable = blockable;
this.meta56831 = meta56831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56832,meta56831__$1){
var self__ = this;
var _56832__$1 = this;
return (new cljs.core.async.t_cljs$core$async56830(self__.f,self__.blockable,meta56831__$1));
});

cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56832){
var self__ = this;
var _56832__$1 = this;
return self__.meta56831;
});

cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56831","meta56831",-63727340,null)], null);
});

cljs.core.async.t_cljs$core$async56830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56830";

cljs.core.async.t_cljs$core$async56830.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async56830");
});

cljs.core.async.__GT_t_cljs$core$async56830 = (function cljs$core$async$__GT_t_cljs$core$async56830(f__$1,blockable__$1,meta56831){
return (new cljs.core.async.t_cljs$core$async56830(f__$1,blockable__$1,meta56831));
});

}

return (new cljs.core.async.t_cljs$core$async56830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args56839 = [];
var len__45375__auto___56842 = arguments.length;
var i__45376__auto___56843 = (0);
while(true){
if((i__45376__auto___56843 < len__45375__auto___56842)){
args56839.push((arguments[i__45376__auto___56843]));

var G__56844 = (i__45376__auto___56843 + (1));
i__45376__auto___56843 = G__56844;
continue;
} else {
}
break;
}

var G__56841 = args56839.length;
switch (G__56841) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56839.length)].join('')));

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
var args56846 = [];
var len__45375__auto___56849 = arguments.length;
var i__45376__auto___56850 = (0);
while(true){
if((i__45376__auto___56850 < len__45375__auto___56849)){
args56846.push((arguments[i__45376__auto___56850]));

var G__56851 = (i__45376__auto___56850 + (1));
i__45376__auto___56850 = G__56851;
continue;
} else {
}
break;
}

var G__56848 = args56846.length;
switch (G__56848) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56846.length)].join('')));

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
var args56853 = [];
var len__45375__auto___56856 = arguments.length;
var i__45376__auto___56857 = (0);
while(true){
if((i__45376__auto___56857 < len__45375__auto___56856)){
args56853.push((arguments[i__45376__auto___56857]));

var G__56858 = (i__45376__auto___56857 + (1));
i__45376__auto___56857 = G__56858;
continue;
} else {
}
break;
}

var G__56855 = args56853.length;
switch (G__56855) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56853.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56860 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56860);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56860,ret){
return (function (){
return fn1.call(null,val_56860);
});})(val_56860,ret))
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
var args56861 = [];
var len__45375__auto___56864 = arguments.length;
var i__45376__auto___56865 = (0);
while(true){
if((i__45376__auto___56865 < len__45375__auto___56864)){
args56861.push((arguments[i__45376__auto___56865]));

var G__56866 = (i__45376__auto___56865 + (1));
i__45376__auto___56865 = G__56866;
continue;
} else {
}
break;
}

var G__56863 = args56861.length;
switch (G__56863) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56861.length)].join('')));

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
var n__45185__auto___56868 = n;
var x_56869 = (0);
while(true){
if((x_56869 < n__45185__auto___56868)){
(a[x_56869] = (0));

var G__56870 = (x_56869 + (1));
x_56869 = G__56870;
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

var G__56871 = (i + (1));
i = G__56871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56875 = (function (flag,meta56876){
this.flag = flag;
this.meta56876 = meta56876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56877,meta56876__$1){
var self__ = this;
var _56877__$1 = this;
return (new cljs.core.async.t_cljs$core$async56875(self__.flag,meta56876__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56877){
var self__ = this;
var _56877__$1 = this;
return self__.meta56876;
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56876","meta56876",-1257728605,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56875";

cljs.core.async.t_cljs$core$async56875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async56875");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56875 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56875(flag__$1,meta56876){
return (new cljs.core.async.t_cljs$core$async56875(flag__$1,meta56876));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56875(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56881 = (function (flag,cb,meta56882){
this.flag = flag;
this.cb = cb;
this.meta56882 = meta56882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56883,meta56882__$1){
var self__ = this;
var _56883__$1 = this;
return (new cljs.core.async.t_cljs$core$async56881(self__.flag,self__.cb,meta56882__$1));
});

cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56883){
var self__ = this;
var _56883__$1 = this;
return self__.meta56882;
});

cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56882","meta56882",-1858456412,null)], null);
});

cljs.core.async.t_cljs$core$async56881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56881";

cljs.core.async.t_cljs$core$async56881.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async56881");
});

cljs.core.async.__GT_t_cljs$core$async56881 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56881(flag__$1,cb__$1,meta56882){
return (new cljs.core.async.t_cljs$core$async56881(flag__$1,cb__$1,meta56882));
});

}

return (new cljs.core.async.t_cljs$core$async56881(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56884_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56884_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56885_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56885_SHARP_,port], null));
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
var G__56886 = (i + (1));
i = G__56886;
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
var len__45375__auto___56892 = arguments.length;
var i__45376__auto___56893 = (0);
while(true){
if((i__45376__auto___56893 < len__45375__auto___56892)){
args__45382__auto__.push((arguments[i__45376__auto___56893]));

var G__56894 = (i__45376__auto___56893 + (1));
i__45376__auto___56893 = G__56894;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((1) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45383__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56889){
var map__56890 = p__56889;
var map__56890__$1 = ((((!((map__56890 == null)))?((((map__56890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56890):map__56890);
var opts = map__56890__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56887){
var G__56888 = cljs.core.first.call(null,seq56887);
var seq56887__$1 = cljs.core.next.call(null,seq56887);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56888,seq56887__$1);
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
var args56895 = [];
var len__45375__auto___56945 = arguments.length;
var i__45376__auto___56946 = (0);
while(true){
if((i__45376__auto___56946 < len__45375__auto___56945)){
args56895.push((arguments[i__45376__auto___56946]));

var G__56947 = (i__45376__auto___56946 + (1));
i__45376__auto___56946 = G__56947;
continue;
} else {
}
break;
}

var G__56897 = args56895.length;
switch (G__56897) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56895.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47652__auto___56949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___56949){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___56949){
return (function (state_56921){
var state_val_56922 = (state_56921[(1)]);
if((state_val_56922 === (7))){
var inst_56917 = (state_56921[(2)]);
var state_56921__$1 = state_56921;
var statearr_56923_56950 = state_56921__$1;
(statearr_56923_56950[(2)] = inst_56917);

(statearr_56923_56950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (1))){
var state_56921__$1 = state_56921;
var statearr_56924_56951 = state_56921__$1;
(statearr_56924_56951[(2)] = null);

(statearr_56924_56951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (4))){
var inst_56900 = (state_56921[(7)]);
var inst_56900__$1 = (state_56921[(2)]);
var inst_56901 = (inst_56900__$1 == null);
var state_56921__$1 = (function (){var statearr_56925 = state_56921;
(statearr_56925[(7)] = inst_56900__$1);

return statearr_56925;
})();
if(cljs.core.truth_(inst_56901)){
var statearr_56926_56952 = state_56921__$1;
(statearr_56926_56952[(1)] = (5));

} else {
var statearr_56927_56953 = state_56921__$1;
(statearr_56927_56953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (13))){
var state_56921__$1 = state_56921;
var statearr_56928_56954 = state_56921__$1;
(statearr_56928_56954[(2)] = null);

(statearr_56928_56954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (6))){
var inst_56900 = (state_56921[(7)]);
var state_56921__$1 = state_56921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56921__$1,(11),to,inst_56900);
} else {
if((state_val_56922 === (3))){
var inst_56919 = (state_56921[(2)]);
var state_56921__$1 = state_56921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56921__$1,inst_56919);
} else {
if((state_val_56922 === (12))){
var state_56921__$1 = state_56921;
var statearr_56929_56955 = state_56921__$1;
(statearr_56929_56955[(2)] = null);

(statearr_56929_56955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (2))){
var state_56921__$1 = state_56921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56921__$1,(4),from);
} else {
if((state_val_56922 === (11))){
var inst_56910 = (state_56921[(2)]);
var state_56921__$1 = state_56921;
if(cljs.core.truth_(inst_56910)){
var statearr_56930_56956 = state_56921__$1;
(statearr_56930_56956[(1)] = (12));

} else {
var statearr_56931_56957 = state_56921__$1;
(statearr_56931_56957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (9))){
var state_56921__$1 = state_56921;
var statearr_56932_56958 = state_56921__$1;
(statearr_56932_56958[(2)] = null);

(statearr_56932_56958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (5))){
var state_56921__$1 = state_56921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56933_56959 = state_56921__$1;
(statearr_56933_56959[(1)] = (8));

} else {
var statearr_56934_56960 = state_56921__$1;
(statearr_56934_56960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (14))){
var inst_56915 = (state_56921[(2)]);
var state_56921__$1 = state_56921;
var statearr_56935_56961 = state_56921__$1;
(statearr_56935_56961[(2)] = inst_56915);

(statearr_56935_56961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (10))){
var inst_56907 = (state_56921[(2)]);
var state_56921__$1 = state_56921;
var statearr_56936_56962 = state_56921__$1;
(statearr_56936_56962[(2)] = inst_56907);

(statearr_56936_56962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56922 === (8))){
var inst_56904 = cljs.core.async.close_BANG_.call(null,to);
var state_56921__$1 = state_56921;
var statearr_56937_56963 = state_56921__$1;
(statearr_56937_56963[(2)] = inst_56904);

(statearr_56937_56963[(1)] = (10));


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
});})(c__47652__auto___56949))
;
return ((function (switch__47587__auto__,c__47652__auto___56949){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_56941 = [null,null,null,null,null,null,null,null];
(statearr_56941[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_56941[(1)] = (1));

return statearr_56941;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_56921){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_56921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e56942){if((e56942 instanceof Object)){
var ex__47591__auto__ = e56942;
var statearr_56943_56964 = state_56921;
(statearr_56943_56964[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56965 = state_56921;
state_56921 = G__56965;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_56921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_56921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___56949))
})();
var state__47654__auto__ = (function (){var statearr_56944 = f__47653__auto__.call(null);
(statearr_56944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___56949);

return statearr_56944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___56949))
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
return (function (p__57153){
var vec__57154 = p__57153;
var v = cljs.core.nth.call(null,vec__57154,(0),null);
var p = cljs.core.nth.call(null,vec__57154,(1),null);
var job = vec__57154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47652__auto___57340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results){
return (function (state_57161){
var state_val_57162 = (state_57161[(1)]);
if((state_val_57162 === (1))){
var state_57161__$1 = state_57161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57161__$1,(2),res,v);
} else {
if((state_val_57162 === (2))){
var inst_57158 = (state_57161[(2)]);
var inst_57159 = cljs.core.async.close_BANG_.call(null,res);
var state_57161__$1 = (function (){var statearr_57163 = state_57161;
(statearr_57163[(7)] = inst_57158);

return statearr_57163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57161__$1,inst_57159);
} else {
return null;
}
}
});})(c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results))
;
return ((function (switch__47587__auto__,c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_57167 = [null,null,null,null,null,null,null,null];
(statearr_57167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__);

(statearr_57167[(1)] = (1));

return statearr_57167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1 = (function (state_57161){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57168){if((e57168 instanceof Object)){
var ex__47591__auto__ = e57168;
var statearr_57169_57341 = state_57161;
(statearr_57169_57341[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57342 = state_57161;
state_57161 = G__57342;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = function(state_57161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1.call(this,state_57161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results))
})();
var state__47654__auto__ = (function (){var statearr_57170 = f__47653__auto__.call(null);
(statearr_57170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___57340);

return statearr_57170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___57340,res,vec__57154,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__57171){
var vec__57172 = p__57171;
var v = cljs.core.nth.call(null,vec__57172,(0),null);
var p = cljs.core.nth.call(null,vec__57172,(1),null);
var job = vec__57172;
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
var n__45185__auto___57343 = n;
var __57344 = (0);
while(true){
if((__57344 < n__45185__auto___57343)){
var G__57175_57345 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57175_57345) {
case "compute":
var c__47652__auto___57347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57344,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (__57344,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function (state_57188){
var state_val_57189 = (state_57188[(1)]);
if((state_val_57189 === (1))){
var state_57188__$1 = state_57188;
var statearr_57190_57348 = state_57188__$1;
(statearr_57190_57348[(2)] = null);

(statearr_57190_57348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57189 === (2))){
var state_57188__$1 = state_57188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57188__$1,(4),jobs);
} else {
if((state_val_57189 === (3))){
var inst_57186 = (state_57188[(2)]);
var state_57188__$1 = state_57188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57188__$1,inst_57186);
} else {
if((state_val_57189 === (4))){
var inst_57178 = (state_57188[(2)]);
var inst_57179 = process.call(null,inst_57178);
var state_57188__$1 = state_57188;
if(cljs.core.truth_(inst_57179)){
var statearr_57191_57349 = state_57188__$1;
(statearr_57191_57349[(1)] = (5));

} else {
var statearr_57192_57350 = state_57188__$1;
(statearr_57192_57350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57189 === (5))){
var state_57188__$1 = state_57188;
var statearr_57193_57351 = state_57188__$1;
(statearr_57193_57351[(2)] = null);

(statearr_57193_57351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57189 === (6))){
var state_57188__$1 = state_57188;
var statearr_57194_57352 = state_57188__$1;
(statearr_57194_57352[(2)] = null);

(statearr_57194_57352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57189 === (7))){
var inst_57184 = (state_57188[(2)]);
var state_57188__$1 = state_57188;
var statearr_57195_57353 = state_57188__$1;
(statearr_57195_57353[(2)] = inst_57184);

(statearr_57195_57353[(1)] = (3));


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
});})(__57344,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
;
return ((function (__57344,switch__47587__auto__,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_57199 = [null,null,null,null,null,null,null];
(statearr_57199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__);

(statearr_57199[(1)] = (1));

return statearr_57199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1 = (function (state_57188){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57200){if((e57200 instanceof Object)){
var ex__47591__auto__ = e57200;
var statearr_57201_57354 = state_57188;
(statearr_57201_57354[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57355 = state_57188;
state_57188 = G__57355;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = function(state_57188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1.call(this,state_57188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__;
})()
;})(__57344,switch__47587__auto__,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
})();
var state__47654__auto__ = (function (){var statearr_57202 = f__47653__auto__.call(null);
(statearr_57202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___57347);

return statearr_57202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(__57344,c__47652__auto___57347,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
);


break;
case "async":
var c__47652__auto___57356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57344,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (__57344,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function (state_57215){
var state_val_57216 = (state_57215[(1)]);
if((state_val_57216 === (1))){
var state_57215__$1 = state_57215;
var statearr_57217_57357 = state_57215__$1;
(statearr_57217_57357[(2)] = null);

(statearr_57217_57357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57216 === (2))){
var state_57215__$1 = state_57215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57215__$1,(4),jobs);
} else {
if((state_val_57216 === (3))){
var inst_57213 = (state_57215[(2)]);
var state_57215__$1 = state_57215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57215__$1,inst_57213);
} else {
if((state_val_57216 === (4))){
var inst_57205 = (state_57215[(2)]);
var inst_57206 = async.call(null,inst_57205);
var state_57215__$1 = state_57215;
if(cljs.core.truth_(inst_57206)){
var statearr_57218_57358 = state_57215__$1;
(statearr_57218_57358[(1)] = (5));

} else {
var statearr_57219_57359 = state_57215__$1;
(statearr_57219_57359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57216 === (5))){
var state_57215__$1 = state_57215;
var statearr_57220_57360 = state_57215__$1;
(statearr_57220_57360[(2)] = null);

(statearr_57220_57360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57216 === (6))){
var state_57215__$1 = state_57215;
var statearr_57221_57361 = state_57215__$1;
(statearr_57221_57361[(2)] = null);

(statearr_57221_57361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57216 === (7))){
var inst_57211 = (state_57215[(2)]);
var state_57215__$1 = state_57215;
var statearr_57222_57362 = state_57215__$1;
(statearr_57222_57362[(2)] = inst_57211);

(statearr_57222_57362[(1)] = (3));


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
});})(__57344,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
;
return ((function (__57344,switch__47587__auto__,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_57226 = [null,null,null,null,null,null,null];
(statearr_57226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__);

(statearr_57226[(1)] = (1));

return statearr_57226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1 = (function (state_57215){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57227){if((e57227 instanceof Object)){
var ex__47591__auto__ = e57227;
var statearr_57228_57363 = state_57215;
(statearr_57228_57363[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57364 = state_57215;
state_57215 = G__57364;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = function(state_57215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1.call(this,state_57215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__;
})()
;})(__57344,switch__47587__auto__,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
})();
var state__47654__auto__ = (function (){var statearr_57229 = f__47653__auto__.call(null);
(statearr_57229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___57356);

return statearr_57229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(__57344,c__47652__auto___57356,G__57175_57345,n__45185__auto___57343,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__57365 = (__57344 + (1));
__57344 = G__57365;
continue;
} else {
}
break;
}

var c__47652__auto___57366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___57366,jobs,results,process,async){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___57366,jobs,results,process,async){
return (function (state_57251){
var state_val_57252 = (state_57251[(1)]);
if((state_val_57252 === (1))){
var state_57251__$1 = state_57251;
var statearr_57253_57367 = state_57251__$1;
(statearr_57253_57367[(2)] = null);

(statearr_57253_57367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57252 === (2))){
var state_57251__$1 = state_57251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57251__$1,(4),from);
} else {
if((state_val_57252 === (3))){
var inst_57249 = (state_57251[(2)]);
var state_57251__$1 = state_57251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57251__$1,inst_57249);
} else {
if((state_val_57252 === (4))){
var inst_57232 = (state_57251[(7)]);
var inst_57232__$1 = (state_57251[(2)]);
var inst_57233 = (inst_57232__$1 == null);
var state_57251__$1 = (function (){var statearr_57254 = state_57251;
(statearr_57254[(7)] = inst_57232__$1);

return statearr_57254;
})();
if(cljs.core.truth_(inst_57233)){
var statearr_57255_57368 = state_57251__$1;
(statearr_57255_57368[(1)] = (5));

} else {
var statearr_57256_57369 = state_57251__$1;
(statearr_57256_57369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57252 === (5))){
var inst_57235 = cljs.core.async.close_BANG_.call(null,jobs);
var state_57251__$1 = state_57251;
var statearr_57257_57370 = state_57251__$1;
(statearr_57257_57370[(2)] = inst_57235);

(statearr_57257_57370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57252 === (6))){
var inst_57237 = (state_57251[(8)]);
var inst_57232 = (state_57251[(7)]);
var inst_57237__$1 = cljs.core.async.chan.call(null,(1));
var inst_57238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57239 = [inst_57232,inst_57237__$1];
var inst_57240 = (new cljs.core.PersistentVector(null,2,(5),inst_57238,inst_57239,null));
var state_57251__$1 = (function (){var statearr_57258 = state_57251;
(statearr_57258[(8)] = inst_57237__$1);

return statearr_57258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57251__$1,(8),jobs,inst_57240);
} else {
if((state_val_57252 === (7))){
var inst_57247 = (state_57251[(2)]);
var state_57251__$1 = state_57251;
var statearr_57259_57371 = state_57251__$1;
(statearr_57259_57371[(2)] = inst_57247);

(statearr_57259_57371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57252 === (8))){
var inst_57237 = (state_57251[(8)]);
var inst_57242 = (state_57251[(2)]);
var state_57251__$1 = (function (){var statearr_57260 = state_57251;
(statearr_57260[(9)] = inst_57242);

return statearr_57260;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57251__$1,(9),results,inst_57237);
} else {
if((state_val_57252 === (9))){
var inst_57244 = (state_57251[(2)]);
var state_57251__$1 = (function (){var statearr_57261 = state_57251;
(statearr_57261[(10)] = inst_57244);

return statearr_57261;
})();
var statearr_57262_57372 = state_57251__$1;
(statearr_57262_57372[(2)] = null);

(statearr_57262_57372[(1)] = (2));


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
});})(c__47652__auto___57366,jobs,results,process,async))
;
return ((function (switch__47587__auto__,c__47652__auto___57366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_57266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__);

(statearr_57266[(1)] = (1));

return statearr_57266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1 = (function (state_57251){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57267){if((e57267 instanceof Object)){
var ex__47591__auto__ = e57267;
var statearr_57268_57373 = state_57251;
(statearr_57268_57373[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57374 = state_57251;
state_57251 = G__57374;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = function(state_57251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1.call(this,state_57251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___57366,jobs,results,process,async))
})();
var state__47654__auto__ = (function (){var statearr_57269 = f__47653__auto__.call(null);
(statearr_57269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___57366);

return statearr_57269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___57366,jobs,results,process,async))
);


var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__,jobs,results,process,async){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__,jobs,results,process,async){
return (function (state_57307){
var state_val_57308 = (state_57307[(1)]);
if((state_val_57308 === (7))){
var inst_57303 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57309_57375 = state_57307__$1;
(statearr_57309_57375[(2)] = inst_57303);

(statearr_57309_57375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (20))){
var state_57307__$1 = state_57307;
var statearr_57310_57376 = state_57307__$1;
(statearr_57310_57376[(2)] = null);

(statearr_57310_57376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (1))){
var state_57307__$1 = state_57307;
var statearr_57311_57377 = state_57307__$1;
(statearr_57311_57377[(2)] = null);

(statearr_57311_57377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (4))){
var inst_57272 = (state_57307[(7)]);
var inst_57272__$1 = (state_57307[(2)]);
var inst_57273 = (inst_57272__$1 == null);
var state_57307__$1 = (function (){var statearr_57312 = state_57307;
(statearr_57312[(7)] = inst_57272__$1);

return statearr_57312;
})();
if(cljs.core.truth_(inst_57273)){
var statearr_57313_57378 = state_57307__$1;
(statearr_57313_57378[(1)] = (5));

} else {
var statearr_57314_57379 = state_57307__$1;
(statearr_57314_57379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (15))){
var inst_57285 = (state_57307[(8)]);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57307__$1,(18),to,inst_57285);
} else {
if((state_val_57308 === (21))){
var inst_57298 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57315_57380 = state_57307__$1;
(statearr_57315_57380[(2)] = inst_57298);

(statearr_57315_57380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (13))){
var inst_57300 = (state_57307[(2)]);
var state_57307__$1 = (function (){var statearr_57316 = state_57307;
(statearr_57316[(9)] = inst_57300);

return statearr_57316;
})();
var statearr_57317_57381 = state_57307__$1;
(statearr_57317_57381[(2)] = null);

(statearr_57317_57381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (6))){
var inst_57272 = (state_57307[(7)]);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57307__$1,(11),inst_57272);
} else {
if((state_val_57308 === (17))){
var inst_57293 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
if(cljs.core.truth_(inst_57293)){
var statearr_57318_57382 = state_57307__$1;
(statearr_57318_57382[(1)] = (19));

} else {
var statearr_57319_57383 = state_57307__$1;
(statearr_57319_57383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (3))){
var inst_57305 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57307__$1,inst_57305);
} else {
if((state_val_57308 === (12))){
var inst_57282 = (state_57307[(10)]);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57307__$1,(14),inst_57282);
} else {
if((state_val_57308 === (2))){
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57307__$1,(4),results);
} else {
if((state_val_57308 === (19))){
var state_57307__$1 = state_57307;
var statearr_57320_57384 = state_57307__$1;
(statearr_57320_57384[(2)] = null);

(statearr_57320_57384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (11))){
var inst_57282 = (state_57307[(2)]);
var state_57307__$1 = (function (){var statearr_57321 = state_57307;
(statearr_57321[(10)] = inst_57282);

return statearr_57321;
})();
var statearr_57322_57385 = state_57307__$1;
(statearr_57322_57385[(2)] = null);

(statearr_57322_57385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (9))){
var state_57307__$1 = state_57307;
var statearr_57323_57386 = state_57307__$1;
(statearr_57323_57386[(2)] = null);

(statearr_57323_57386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (5))){
var state_57307__$1 = state_57307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57324_57387 = state_57307__$1;
(statearr_57324_57387[(1)] = (8));

} else {
var statearr_57325_57388 = state_57307__$1;
(statearr_57325_57388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (14))){
var inst_57285 = (state_57307[(8)]);
var inst_57287 = (state_57307[(11)]);
var inst_57285__$1 = (state_57307[(2)]);
var inst_57286 = (inst_57285__$1 == null);
var inst_57287__$1 = cljs.core.not.call(null,inst_57286);
var state_57307__$1 = (function (){var statearr_57326 = state_57307;
(statearr_57326[(8)] = inst_57285__$1);

(statearr_57326[(11)] = inst_57287__$1);

return statearr_57326;
})();
if(inst_57287__$1){
var statearr_57327_57389 = state_57307__$1;
(statearr_57327_57389[(1)] = (15));

} else {
var statearr_57328_57390 = state_57307__$1;
(statearr_57328_57390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (16))){
var inst_57287 = (state_57307[(11)]);
var state_57307__$1 = state_57307;
var statearr_57329_57391 = state_57307__$1;
(statearr_57329_57391[(2)] = inst_57287);

(statearr_57329_57391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (10))){
var inst_57279 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57330_57392 = state_57307__$1;
(statearr_57330_57392[(2)] = inst_57279);

(statearr_57330_57392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (18))){
var inst_57290 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57331_57393 = state_57307__$1;
(statearr_57331_57393[(2)] = inst_57290);

(statearr_57331_57393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (8))){
var inst_57276 = cljs.core.async.close_BANG_.call(null,to);
var state_57307__$1 = state_57307;
var statearr_57332_57394 = state_57307__$1;
(statearr_57332_57394[(2)] = inst_57276);

(statearr_57332_57394[(1)] = (10));


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
});})(c__47652__auto__,jobs,results,process,async))
;
return ((function (switch__47587__auto__,c__47652__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_57336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__);

(statearr_57336[(1)] = (1));

return statearr_57336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1 = (function (state_57307){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57337){if((e57337 instanceof Object)){
var ex__47591__auto__ = e57337;
var statearr_57338_57395 = state_57307;
(statearr_57338_57395[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57396 = state_57307;
state_57307 = G__57396;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__ = function(state_57307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1.call(this,state_57307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__,jobs,results,process,async))
})();
var state__47654__auto__ = (function (){var statearr_57339 = f__47653__auto__.call(null);
(statearr_57339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_57339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__,jobs,results,process,async))
);

return c__47652__auto__;
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
var args57397 = [];
var len__45375__auto___57400 = arguments.length;
var i__45376__auto___57401 = (0);
while(true){
if((i__45376__auto___57401 < len__45375__auto___57400)){
args57397.push((arguments[i__45376__auto___57401]));

var G__57402 = (i__45376__auto___57401 + (1));
i__45376__auto___57401 = G__57402;
continue;
} else {
}
break;
}

var G__57399 = args57397.length;
switch (G__57399) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57397.length)].join('')));

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
var args57404 = [];
var len__45375__auto___57407 = arguments.length;
var i__45376__auto___57408 = (0);
while(true){
if((i__45376__auto___57408 < len__45375__auto___57407)){
args57404.push((arguments[i__45376__auto___57408]));

var G__57409 = (i__45376__auto___57408 + (1));
i__45376__auto___57408 = G__57409;
continue;
} else {
}
break;
}

var G__57406 = args57404.length;
switch (G__57406) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57404.length)].join('')));

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
var args57411 = [];
var len__45375__auto___57464 = arguments.length;
var i__45376__auto___57465 = (0);
while(true){
if((i__45376__auto___57465 < len__45375__auto___57464)){
args57411.push((arguments[i__45376__auto___57465]));

var G__57466 = (i__45376__auto___57465 + (1));
i__45376__auto___57465 = G__57466;
continue;
} else {
}
break;
}

var G__57413 = args57411.length;
switch (G__57413) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57411.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47652__auto___57468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___57468,tc,fc){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___57468,tc,fc){
return (function (state_57439){
var state_val_57440 = (state_57439[(1)]);
if((state_val_57440 === (7))){
var inst_57435 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
var statearr_57441_57469 = state_57439__$1;
(statearr_57441_57469[(2)] = inst_57435);

(statearr_57441_57469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (1))){
var state_57439__$1 = state_57439;
var statearr_57442_57470 = state_57439__$1;
(statearr_57442_57470[(2)] = null);

(statearr_57442_57470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (4))){
var inst_57416 = (state_57439[(7)]);
var inst_57416__$1 = (state_57439[(2)]);
var inst_57417 = (inst_57416__$1 == null);
var state_57439__$1 = (function (){var statearr_57443 = state_57439;
(statearr_57443[(7)] = inst_57416__$1);

return statearr_57443;
})();
if(cljs.core.truth_(inst_57417)){
var statearr_57444_57471 = state_57439__$1;
(statearr_57444_57471[(1)] = (5));

} else {
var statearr_57445_57472 = state_57439__$1;
(statearr_57445_57472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (13))){
var state_57439__$1 = state_57439;
var statearr_57446_57473 = state_57439__$1;
(statearr_57446_57473[(2)] = null);

(statearr_57446_57473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (6))){
var inst_57416 = (state_57439[(7)]);
var inst_57422 = p.call(null,inst_57416);
var state_57439__$1 = state_57439;
if(cljs.core.truth_(inst_57422)){
var statearr_57447_57474 = state_57439__$1;
(statearr_57447_57474[(1)] = (9));

} else {
var statearr_57448_57475 = state_57439__$1;
(statearr_57448_57475[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (3))){
var inst_57437 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57439__$1,inst_57437);
} else {
if((state_val_57440 === (12))){
var state_57439__$1 = state_57439;
var statearr_57449_57476 = state_57439__$1;
(statearr_57449_57476[(2)] = null);

(statearr_57449_57476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (2))){
var state_57439__$1 = state_57439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57439__$1,(4),ch);
} else {
if((state_val_57440 === (11))){
var inst_57416 = (state_57439[(7)]);
var inst_57426 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57439__$1,(8),inst_57426,inst_57416);
} else {
if((state_val_57440 === (9))){
var state_57439__$1 = state_57439;
var statearr_57450_57477 = state_57439__$1;
(statearr_57450_57477[(2)] = tc);

(statearr_57450_57477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (5))){
var inst_57419 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57420 = cljs.core.async.close_BANG_.call(null,fc);
var state_57439__$1 = (function (){var statearr_57451 = state_57439;
(statearr_57451[(8)] = inst_57419);

return statearr_57451;
})();
var statearr_57452_57478 = state_57439__$1;
(statearr_57452_57478[(2)] = inst_57420);

(statearr_57452_57478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (14))){
var inst_57433 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
var statearr_57453_57479 = state_57439__$1;
(statearr_57453_57479[(2)] = inst_57433);

(statearr_57453_57479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (10))){
var state_57439__$1 = state_57439;
var statearr_57454_57480 = state_57439__$1;
(statearr_57454_57480[(2)] = fc);

(statearr_57454_57480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (8))){
var inst_57428 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
if(cljs.core.truth_(inst_57428)){
var statearr_57455_57481 = state_57439__$1;
(statearr_57455_57481[(1)] = (12));

} else {
var statearr_57456_57482 = state_57439__$1;
(statearr_57456_57482[(1)] = (13));

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
});})(c__47652__auto___57468,tc,fc))
;
return ((function (switch__47587__auto__,c__47652__auto___57468,tc,fc){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_57460 = [null,null,null,null,null,null,null,null,null];
(statearr_57460[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_57460[(1)] = (1));

return statearr_57460;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_57439){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57461){if((e57461 instanceof Object)){
var ex__47591__auto__ = e57461;
var statearr_57462_57483 = state_57439;
(statearr_57462_57483[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57484 = state_57439;
state_57439 = G__57484;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_57439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_57439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___57468,tc,fc))
})();
var state__47654__auto__ = (function (){var statearr_57463 = f__47653__auto__.call(null);
(statearr_57463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___57468);

return statearr_57463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___57468,tc,fc))
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
var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__){
return (function (state_57548){
var state_val_57549 = (state_57548[(1)]);
if((state_val_57549 === (7))){
var inst_57544 = (state_57548[(2)]);
var state_57548__$1 = state_57548;
var statearr_57550_57571 = state_57548__$1;
(statearr_57550_57571[(2)] = inst_57544);

(statearr_57550_57571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (1))){
var inst_57528 = init;
var state_57548__$1 = (function (){var statearr_57551 = state_57548;
(statearr_57551[(7)] = inst_57528);

return statearr_57551;
})();
var statearr_57552_57572 = state_57548__$1;
(statearr_57552_57572[(2)] = null);

(statearr_57552_57572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (4))){
var inst_57531 = (state_57548[(8)]);
var inst_57531__$1 = (state_57548[(2)]);
var inst_57532 = (inst_57531__$1 == null);
var state_57548__$1 = (function (){var statearr_57553 = state_57548;
(statearr_57553[(8)] = inst_57531__$1);

return statearr_57553;
})();
if(cljs.core.truth_(inst_57532)){
var statearr_57554_57573 = state_57548__$1;
(statearr_57554_57573[(1)] = (5));

} else {
var statearr_57555_57574 = state_57548__$1;
(statearr_57555_57574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (6))){
var inst_57528 = (state_57548[(7)]);
var inst_57531 = (state_57548[(8)]);
var inst_57535 = (state_57548[(9)]);
var inst_57535__$1 = f.call(null,inst_57528,inst_57531);
var inst_57536 = cljs.core.reduced_QMARK_.call(null,inst_57535__$1);
var state_57548__$1 = (function (){var statearr_57556 = state_57548;
(statearr_57556[(9)] = inst_57535__$1);

return statearr_57556;
})();
if(inst_57536){
var statearr_57557_57575 = state_57548__$1;
(statearr_57557_57575[(1)] = (8));

} else {
var statearr_57558_57576 = state_57548__$1;
(statearr_57558_57576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (3))){
var inst_57546 = (state_57548[(2)]);
var state_57548__$1 = state_57548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57548__$1,inst_57546);
} else {
if((state_val_57549 === (2))){
var state_57548__$1 = state_57548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57548__$1,(4),ch);
} else {
if((state_val_57549 === (9))){
var inst_57535 = (state_57548[(9)]);
var inst_57528 = inst_57535;
var state_57548__$1 = (function (){var statearr_57559 = state_57548;
(statearr_57559[(7)] = inst_57528);

return statearr_57559;
})();
var statearr_57560_57577 = state_57548__$1;
(statearr_57560_57577[(2)] = null);

(statearr_57560_57577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (5))){
var inst_57528 = (state_57548[(7)]);
var state_57548__$1 = state_57548;
var statearr_57561_57578 = state_57548__$1;
(statearr_57561_57578[(2)] = inst_57528);

(statearr_57561_57578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (10))){
var inst_57542 = (state_57548[(2)]);
var state_57548__$1 = state_57548;
var statearr_57562_57579 = state_57548__$1;
(statearr_57562_57579[(2)] = inst_57542);

(statearr_57562_57579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57549 === (8))){
var inst_57535 = (state_57548[(9)]);
var inst_57538 = cljs.core.deref.call(null,inst_57535);
var state_57548__$1 = state_57548;
var statearr_57563_57580 = state_57548__$1;
(statearr_57563_57580[(2)] = inst_57538);

(statearr_57563_57580[(1)] = (10));


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
});})(c__47652__auto__))
;
return ((function (switch__47587__auto__,c__47652__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47588__auto____0 = (function (){
var statearr_57567 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57567[(0)] = cljs$core$async$reduce_$_state_machine__47588__auto__);

(statearr_57567[(1)] = (1));

return statearr_57567;
});
var cljs$core$async$reduce_$_state_machine__47588__auto____1 = (function (state_57548){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57568){if((e57568 instanceof Object)){
var ex__47591__auto__ = e57568;
var statearr_57569_57581 = state_57548;
(statearr_57569_57581[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57582 = state_57548;
state_57548 = G__57582;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47588__auto__ = function(state_57548){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47588__auto____1.call(this,state_57548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47588__auto____0;
cljs$core$async$reduce_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47588__auto____1;
return cljs$core$async$reduce_$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__))
})();
var state__47654__auto__ = (function (){var statearr_57570 = f__47653__auto__.call(null);
(statearr_57570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_57570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__))
);

return c__47652__auto__;
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
var args57583 = [];
var len__45375__auto___57635 = arguments.length;
var i__45376__auto___57636 = (0);
while(true){
if((i__45376__auto___57636 < len__45375__auto___57635)){
args57583.push((arguments[i__45376__auto___57636]));

var G__57637 = (i__45376__auto___57636 + (1));
i__45376__auto___57636 = G__57637;
continue;
} else {
}
break;
}

var G__57585 = args57583.length;
switch (G__57585) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57583.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__){
return (function (state_57610){
var state_val_57611 = (state_57610[(1)]);
if((state_val_57611 === (7))){
var inst_57592 = (state_57610[(2)]);
var state_57610__$1 = state_57610;
var statearr_57612_57639 = state_57610__$1;
(statearr_57612_57639[(2)] = inst_57592);

(statearr_57612_57639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (1))){
var inst_57586 = cljs.core.seq.call(null,coll);
var inst_57587 = inst_57586;
var state_57610__$1 = (function (){var statearr_57613 = state_57610;
(statearr_57613[(7)] = inst_57587);

return statearr_57613;
})();
var statearr_57614_57640 = state_57610__$1;
(statearr_57614_57640[(2)] = null);

(statearr_57614_57640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (4))){
var inst_57587 = (state_57610[(7)]);
var inst_57590 = cljs.core.first.call(null,inst_57587);
var state_57610__$1 = state_57610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57610__$1,(7),ch,inst_57590);
} else {
if((state_val_57611 === (13))){
var inst_57604 = (state_57610[(2)]);
var state_57610__$1 = state_57610;
var statearr_57615_57641 = state_57610__$1;
(statearr_57615_57641[(2)] = inst_57604);

(statearr_57615_57641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (6))){
var inst_57595 = (state_57610[(2)]);
var state_57610__$1 = state_57610;
if(cljs.core.truth_(inst_57595)){
var statearr_57616_57642 = state_57610__$1;
(statearr_57616_57642[(1)] = (8));

} else {
var statearr_57617_57643 = state_57610__$1;
(statearr_57617_57643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (3))){
var inst_57608 = (state_57610[(2)]);
var state_57610__$1 = state_57610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57610__$1,inst_57608);
} else {
if((state_val_57611 === (12))){
var state_57610__$1 = state_57610;
var statearr_57618_57644 = state_57610__$1;
(statearr_57618_57644[(2)] = null);

(statearr_57618_57644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (2))){
var inst_57587 = (state_57610[(7)]);
var state_57610__$1 = state_57610;
if(cljs.core.truth_(inst_57587)){
var statearr_57619_57645 = state_57610__$1;
(statearr_57619_57645[(1)] = (4));

} else {
var statearr_57620_57646 = state_57610__$1;
(statearr_57620_57646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (11))){
var inst_57601 = cljs.core.async.close_BANG_.call(null,ch);
var state_57610__$1 = state_57610;
var statearr_57621_57647 = state_57610__$1;
(statearr_57621_57647[(2)] = inst_57601);

(statearr_57621_57647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (9))){
var state_57610__$1 = state_57610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57622_57648 = state_57610__$1;
(statearr_57622_57648[(1)] = (11));

} else {
var statearr_57623_57649 = state_57610__$1;
(statearr_57623_57649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (5))){
var inst_57587 = (state_57610[(7)]);
var state_57610__$1 = state_57610;
var statearr_57624_57650 = state_57610__$1;
(statearr_57624_57650[(2)] = inst_57587);

(statearr_57624_57650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (10))){
var inst_57606 = (state_57610[(2)]);
var state_57610__$1 = state_57610;
var statearr_57625_57651 = state_57610__$1;
(statearr_57625_57651[(2)] = inst_57606);

(statearr_57625_57651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57611 === (8))){
var inst_57587 = (state_57610[(7)]);
var inst_57597 = cljs.core.next.call(null,inst_57587);
var inst_57587__$1 = inst_57597;
var state_57610__$1 = (function (){var statearr_57626 = state_57610;
(statearr_57626[(7)] = inst_57587__$1);

return statearr_57626;
})();
var statearr_57627_57652 = state_57610__$1;
(statearr_57627_57652[(2)] = null);

(statearr_57627_57652[(1)] = (2));


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
});})(c__47652__auto__))
;
return ((function (switch__47587__auto__,c__47652__auto__){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_57631 = [null,null,null,null,null,null,null,null];
(statearr_57631[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_57631[(1)] = (1));

return statearr_57631;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_57610){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_57610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e57632){if((e57632 instanceof Object)){
var ex__47591__auto__ = e57632;
var statearr_57633_57653 = state_57610;
(statearr_57633_57653[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57654 = state_57610;
state_57610 = G__57654;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_57610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_57610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__))
})();
var state__47654__auto__ = (function (){var statearr_57634 = f__47653__auto__.call(null);
(statearr_57634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_57634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__))
);

return c__47652__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async57880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57880 = (function (ch,cs,meta57881){
this.ch = ch;
this.cs = cs;
this.meta57881 = meta57881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57882,meta57881__$1){
var self__ = this;
var _57882__$1 = this;
return (new cljs.core.async.t_cljs$core$async57880(self__.ch,self__.cs,meta57881__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57882){
var self__ = this;
var _57882__$1 = this;
return self__.meta57881;
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57881","meta57881",-1744784619,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57880";

cljs.core.async.t_cljs$core$async57880.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async57880");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async57880 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57880(ch__$1,cs__$1,meta57881){
return (new cljs.core.async.t_cljs$core$async57880(ch__$1,cs__$1,meta57881));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57880(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47652__auto___58105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58105,cs,m,dchan,dctr,done){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58105,cs,m,dchan,dctr,done){
return (function (state_58017){
var state_val_58018 = (state_58017[(1)]);
if((state_val_58018 === (7))){
var inst_58013 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58019_58106 = state_58017__$1;
(statearr_58019_58106[(2)] = inst_58013);

(statearr_58019_58106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (20))){
var inst_57916 = (state_58017[(7)]);
var inst_57928 = cljs.core.first.call(null,inst_57916);
var inst_57929 = cljs.core.nth.call(null,inst_57928,(0),null);
var inst_57930 = cljs.core.nth.call(null,inst_57928,(1),null);
var state_58017__$1 = (function (){var statearr_58020 = state_58017;
(statearr_58020[(8)] = inst_57929);

return statearr_58020;
})();
if(cljs.core.truth_(inst_57930)){
var statearr_58021_58107 = state_58017__$1;
(statearr_58021_58107[(1)] = (22));

} else {
var statearr_58022_58108 = state_58017__$1;
(statearr_58022_58108[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (27))){
var inst_57960 = (state_58017[(9)]);
var inst_57965 = (state_58017[(10)]);
var inst_57885 = (state_58017[(11)]);
var inst_57958 = (state_58017[(12)]);
var inst_57965__$1 = cljs.core._nth.call(null,inst_57958,inst_57960);
var inst_57966 = cljs.core.async.put_BANG_.call(null,inst_57965__$1,inst_57885,done);
var state_58017__$1 = (function (){var statearr_58023 = state_58017;
(statearr_58023[(10)] = inst_57965__$1);

return statearr_58023;
})();
if(cljs.core.truth_(inst_57966)){
var statearr_58024_58109 = state_58017__$1;
(statearr_58024_58109[(1)] = (30));

} else {
var statearr_58025_58110 = state_58017__$1;
(statearr_58025_58110[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (1))){
var state_58017__$1 = state_58017;
var statearr_58026_58111 = state_58017__$1;
(statearr_58026_58111[(2)] = null);

(statearr_58026_58111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (24))){
var inst_57916 = (state_58017[(7)]);
var inst_57935 = (state_58017[(2)]);
var inst_57936 = cljs.core.next.call(null,inst_57916);
var inst_57894 = inst_57936;
var inst_57895 = null;
var inst_57896 = (0);
var inst_57897 = (0);
var state_58017__$1 = (function (){var statearr_58027 = state_58017;
(statearr_58027[(13)] = inst_57935);

(statearr_58027[(14)] = inst_57896);

(statearr_58027[(15)] = inst_57894);

(statearr_58027[(16)] = inst_57897);

(statearr_58027[(17)] = inst_57895);

return statearr_58027;
})();
var statearr_58028_58112 = state_58017__$1;
(statearr_58028_58112[(2)] = null);

(statearr_58028_58112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (39))){
var state_58017__$1 = state_58017;
var statearr_58032_58113 = state_58017__$1;
(statearr_58032_58113[(2)] = null);

(statearr_58032_58113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (4))){
var inst_57885 = (state_58017[(11)]);
var inst_57885__$1 = (state_58017[(2)]);
var inst_57886 = (inst_57885__$1 == null);
var state_58017__$1 = (function (){var statearr_58033 = state_58017;
(statearr_58033[(11)] = inst_57885__$1);

return statearr_58033;
})();
if(cljs.core.truth_(inst_57886)){
var statearr_58034_58114 = state_58017__$1;
(statearr_58034_58114[(1)] = (5));

} else {
var statearr_58035_58115 = state_58017__$1;
(statearr_58035_58115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (15))){
var inst_57896 = (state_58017[(14)]);
var inst_57894 = (state_58017[(15)]);
var inst_57897 = (state_58017[(16)]);
var inst_57895 = (state_58017[(17)]);
var inst_57912 = (state_58017[(2)]);
var inst_57913 = (inst_57897 + (1));
var tmp58029 = inst_57896;
var tmp58030 = inst_57894;
var tmp58031 = inst_57895;
var inst_57894__$1 = tmp58030;
var inst_57895__$1 = tmp58031;
var inst_57896__$1 = tmp58029;
var inst_57897__$1 = inst_57913;
var state_58017__$1 = (function (){var statearr_58036 = state_58017;
(statearr_58036[(18)] = inst_57912);

(statearr_58036[(14)] = inst_57896__$1);

(statearr_58036[(15)] = inst_57894__$1);

(statearr_58036[(16)] = inst_57897__$1);

(statearr_58036[(17)] = inst_57895__$1);

return statearr_58036;
})();
var statearr_58037_58116 = state_58017__$1;
(statearr_58037_58116[(2)] = null);

(statearr_58037_58116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (21))){
var inst_57939 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58041_58117 = state_58017__$1;
(statearr_58041_58117[(2)] = inst_57939);

(statearr_58041_58117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (31))){
var inst_57965 = (state_58017[(10)]);
var inst_57969 = done.call(null,null);
var inst_57970 = cljs.core.async.untap_STAR_.call(null,m,inst_57965);
var state_58017__$1 = (function (){var statearr_58042 = state_58017;
(statearr_58042[(19)] = inst_57969);

return statearr_58042;
})();
var statearr_58043_58118 = state_58017__$1;
(statearr_58043_58118[(2)] = inst_57970);

(statearr_58043_58118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (32))){
var inst_57960 = (state_58017[(9)]);
var inst_57958 = (state_58017[(12)]);
var inst_57959 = (state_58017[(20)]);
var inst_57957 = (state_58017[(21)]);
var inst_57972 = (state_58017[(2)]);
var inst_57973 = (inst_57960 + (1));
var tmp58038 = inst_57958;
var tmp58039 = inst_57959;
var tmp58040 = inst_57957;
var inst_57957__$1 = tmp58040;
var inst_57958__$1 = tmp58038;
var inst_57959__$1 = tmp58039;
var inst_57960__$1 = inst_57973;
var state_58017__$1 = (function (){var statearr_58044 = state_58017;
(statearr_58044[(22)] = inst_57972);

(statearr_58044[(9)] = inst_57960__$1);

(statearr_58044[(12)] = inst_57958__$1);

(statearr_58044[(20)] = inst_57959__$1);

(statearr_58044[(21)] = inst_57957__$1);

return statearr_58044;
})();
var statearr_58045_58119 = state_58017__$1;
(statearr_58045_58119[(2)] = null);

(statearr_58045_58119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (40))){
var inst_57985 = (state_58017[(23)]);
var inst_57989 = done.call(null,null);
var inst_57990 = cljs.core.async.untap_STAR_.call(null,m,inst_57985);
var state_58017__$1 = (function (){var statearr_58046 = state_58017;
(statearr_58046[(24)] = inst_57989);

return statearr_58046;
})();
var statearr_58047_58120 = state_58017__$1;
(statearr_58047_58120[(2)] = inst_57990);

(statearr_58047_58120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (33))){
var inst_57976 = (state_58017[(25)]);
var inst_57978 = cljs.core.chunked_seq_QMARK_.call(null,inst_57976);
var state_58017__$1 = state_58017;
if(inst_57978){
var statearr_58048_58121 = state_58017__$1;
(statearr_58048_58121[(1)] = (36));

} else {
var statearr_58049_58122 = state_58017__$1;
(statearr_58049_58122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (13))){
var inst_57906 = (state_58017[(26)]);
var inst_57909 = cljs.core.async.close_BANG_.call(null,inst_57906);
var state_58017__$1 = state_58017;
var statearr_58050_58123 = state_58017__$1;
(statearr_58050_58123[(2)] = inst_57909);

(statearr_58050_58123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (22))){
var inst_57929 = (state_58017[(8)]);
var inst_57932 = cljs.core.async.close_BANG_.call(null,inst_57929);
var state_58017__$1 = state_58017;
var statearr_58051_58124 = state_58017__$1;
(statearr_58051_58124[(2)] = inst_57932);

(statearr_58051_58124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (36))){
var inst_57976 = (state_58017[(25)]);
var inst_57980 = cljs.core.chunk_first.call(null,inst_57976);
var inst_57981 = cljs.core.chunk_rest.call(null,inst_57976);
var inst_57982 = cljs.core.count.call(null,inst_57980);
var inst_57957 = inst_57981;
var inst_57958 = inst_57980;
var inst_57959 = inst_57982;
var inst_57960 = (0);
var state_58017__$1 = (function (){var statearr_58052 = state_58017;
(statearr_58052[(9)] = inst_57960);

(statearr_58052[(12)] = inst_57958);

(statearr_58052[(20)] = inst_57959);

(statearr_58052[(21)] = inst_57957);

return statearr_58052;
})();
var statearr_58053_58125 = state_58017__$1;
(statearr_58053_58125[(2)] = null);

(statearr_58053_58125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (41))){
var inst_57976 = (state_58017[(25)]);
var inst_57992 = (state_58017[(2)]);
var inst_57993 = cljs.core.next.call(null,inst_57976);
var inst_57957 = inst_57993;
var inst_57958 = null;
var inst_57959 = (0);
var inst_57960 = (0);
var state_58017__$1 = (function (){var statearr_58054 = state_58017;
(statearr_58054[(9)] = inst_57960);

(statearr_58054[(12)] = inst_57958);

(statearr_58054[(27)] = inst_57992);

(statearr_58054[(20)] = inst_57959);

(statearr_58054[(21)] = inst_57957);

return statearr_58054;
})();
var statearr_58055_58126 = state_58017__$1;
(statearr_58055_58126[(2)] = null);

(statearr_58055_58126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (43))){
var state_58017__$1 = state_58017;
var statearr_58056_58127 = state_58017__$1;
(statearr_58056_58127[(2)] = null);

(statearr_58056_58127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (29))){
var inst_58001 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58057_58128 = state_58017__$1;
(statearr_58057_58128[(2)] = inst_58001);

(statearr_58057_58128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (44))){
var inst_58010 = (state_58017[(2)]);
var state_58017__$1 = (function (){var statearr_58058 = state_58017;
(statearr_58058[(28)] = inst_58010);

return statearr_58058;
})();
var statearr_58059_58129 = state_58017__$1;
(statearr_58059_58129[(2)] = null);

(statearr_58059_58129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (6))){
var inst_57949 = (state_58017[(29)]);
var inst_57948 = cljs.core.deref.call(null,cs);
var inst_57949__$1 = cljs.core.keys.call(null,inst_57948);
var inst_57950 = cljs.core.count.call(null,inst_57949__$1);
var inst_57951 = cljs.core.reset_BANG_.call(null,dctr,inst_57950);
var inst_57956 = cljs.core.seq.call(null,inst_57949__$1);
var inst_57957 = inst_57956;
var inst_57958 = null;
var inst_57959 = (0);
var inst_57960 = (0);
var state_58017__$1 = (function (){var statearr_58060 = state_58017;
(statearr_58060[(29)] = inst_57949__$1);

(statearr_58060[(9)] = inst_57960);

(statearr_58060[(12)] = inst_57958);

(statearr_58060[(30)] = inst_57951);

(statearr_58060[(20)] = inst_57959);

(statearr_58060[(21)] = inst_57957);

return statearr_58060;
})();
var statearr_58061_58130 = state_58017__$1;
(statearr_58061_58130[(2)] = null);

(statearr_58061_58130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (28))){
var inst_57976 = (state_58017[(25)]);
var inst_57957 = (state_58017[(21)]);
var inst_57976__$1 = cljs.core.seq.call(null,inst_57957);
var state_58017__$1 = (function (){var statearr_58062 = state_58017;
(statearr_58062[(25)] = inst_57976__$1);

return statearr_58062;
})();
if(inst_57976__$1){
var statearr_58063_58131 = state_58017__$1;
(statearr_58063_58131[(1)] = (33));

} else {
var statearr_58064_58132 = state_58017__$1;
(statearr_58064_58132[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (25))){
var inst_57960 = (state_58017[(9)]);
var inst_57959 = (state_58017[(20)]);
var inst_57962 = (inst_57960 < inst_57959);
var inst_57963 = inst_57962;
var state_58017__$1 = state_58017;
if(cljs.core.truth_(inst_57963)){
var statearr_58065_58133 = state_58017__$1;
(statearr_58065_58133[(1)] = (27));

} else {
var statearr_58066_58134 = state_58017__$1;
(statearr_58066_58134[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (34))){
var state_58017__$1 = state_58017;
var statearr_58067_58135 = state_58017__$1;
(statearr_58067_58135[(2)] = null);

(statearr_58067_58135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (17))){
var state_58017__$1 = state_58017;
var statearr_58068_58136 = state_58017__$1;
(statearr_58068_58136[(2)] = null);

(statearr_58068_58136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (3))){
var inst_58015 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58017__$1,inst_58015);
} else {
if((state_val_58018 === (12))){
var inst_57944 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58069_58137 = state_58017__$1;
(statearr_58069_58137[(2)] = inst_57944);

(statearr_58069_58137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (2))){
var state_58017__$1 = state_58017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58017__$1,(4),ch);
} else {
if((state_val_58018 === (23))){
var state_58017__$1 = state_58017;
var statearr_58070_58138 = state_58017__$1;
(statearr_58070_58138[(2)] = null);

(statearr_58070_58138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (35))){
var inst_57999 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58071_58139 = state_58017__$1;
(statearr_58071_58139[(2)] = inst_57999);

(statearr_58071_58139[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (19))){
var inst_57916 = (state_58017[(7)]);
var inst_57920 = cljs.core.chunk_first.call(null,inst_57916);
var inst_57921 = cljs.core.chunk_rest.call(null,inst_57916);
var inst_57922 = cljs.core.count.call(null,inst_57920);
var inst_57894 = inst_57921;
var inst_57895 = inst_57920;
var inst_57896 = inst_57922;
var inst_57897 = (0);
var state_58017__$1 = (function (){var statearr_58072 = state_58017;
(statearr_58072[(14)] = inst_57896);

(statearr_58072[(15)] = inst_57894);

(statearr_58072[(16)] = inst_57897);

(statearr_58072[(17)] = inst_57895);

return statearr_58072;
})();
var statearr_58073_58140 = state_58017__$1;
(statearr_58073_58140[(2)] = null);

(statearr_58073_58140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (11))){
var inst_57894 = (state_58017[(15)]);
var inst_57916 = (state_58017[(7)]);
var inst_57916__$1 = cljs.core.seq.call(null,inst_57894);
var state_58017__$1 = (function (){var statearr_58074 = state_58017;
(statearr_58074[(7)] = inst_57916__$1);

return statearr_58074;
})();
if(inst_57916__$1){
var statearr_58075_58141 = state_58017__$1;
(statearr_58075_58141[(1)] = (16));

} else {
var statearr_58076_58142 = state_58017__$1;
(statearr_58076_58142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (9))){
var inst_57946 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58077_58143 = state_58017__$1;
(statearr_58077_58143[(2)] = inst_57946);

(statearr_58077_58143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (5))){
var inst_57892 = cljs.core.deref.call(null,cs);
var inst_57893 = cljs.core.seq.call(null,inst_57892);
var inst_57894 = inst_57893;
var inst_57895 = null;
var inst_57896 = (0);
var inst_57897 = (0);
var state_58017__$1 = (function (){var statearr_58078 = state_58017;
(statearr_58078[(14)] = inst_57896);

(statearr_58078[(15)] = inst_57894);

(statearr_58078[(16)] = inst_57897);

(statearr_58078[(17)] = inst_57895);

return statearr_58078;
})();
var statearr_58079_58144 = state_58017__$1;
(statearr_58079_58144[(2)] = null);

(statearr_58079_58144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (14))){
var state_58017__$1 = state_58017;
var statearr_58080_58145 = state_58017__$1;
(statearr_58080_58145[(2)] = null);

(statearr_58080_58145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (45))){
var inst_58007 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58081_58146 = state_58017__$1;
(statearr_58081_58146[(2)] = inst_58007);

(statearr_58081_58146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (26))){
var inst_57949 = (state_58017[(29)]);
var inst_58003 = (state_58017[(2)]);
var inst_58004 = cljs.core.seq.call(null,inst_57949);
var state_58017__$1 = (function (){var statearr_58082 = state_58017;
(statearr_58082[(31)] = inst_58003);

return statearr_58082;
})();
if(inst_58004){
var statearr_58083_58147 = state_58017__$1;
(statearr_58083_58147[(1)] = (42));

} else {
var statearr_58084_58148 = state_58017__$1;
(statearr_58084_58148[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (16))){
var inst_57916 = (state_58017[(7)]);
var inst_57918 = cljs.core.chunked_seq_QMARK_.call(null,inst_57916);
var state_58017__$1 = state_58017;
if(inst_57918){
var statearr_58085_58149 = state_58017__$1;
(statearr_58085_58149[(1)] = (19));

} else {
var statearr_58086_58150 = state_58017__$1;
(statearr_58086_58150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (38))){
var inst_57996 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58087_58151 = state_58017__$1;
(statearr_58087_58151[(2)] = inst_57996);

(statearr_58087_58151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (30))){
var state_58017__$1 = state_58017;
var statearr_58088_58152 = state_58017__$1;
(statearr_58088_58152[(2)] = null);

(statearr_58088_58152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (10))){
var inst_57897 = (state_58017[(16)]);
var inst_57895 = (state_58017[(17)]);
var inst_57905 = cljs.core._nth.call(null,inst_57895,inst_57897);
var inst_57906 = cljs.core.nth.call(null,inst_57905,(0),null);
var inst_57907 = cljs.core.nth.call(null,inst_57905,(1),null);
var state_58017__$1 = (function (){var statearr_58089 = state_58017;
(statearr_58089[(26)] = inst_57906);

return statearr_58089;
})();
if(cljs.core.truth_(inst_57907)){
var statearr_58090_58153 = state_58017__$1;
(statearr_58090_58153[(1)] = (13));

} else {
var statearr_58091_58154 = state_58017__$1;
(statearr_58091_58154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (18))){
var inst_57942 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58092_58155 = state_58017__$1;
(statearr_58092_58155[(2)] = inst_57942);

(statearr_58092_58155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (42))){
var state_58017__$1 = state_58017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58017__$1,(45),dchan);
} else {
if((state_val_58018 === (37))){
var inst_57885 = (state_58017[(11)]);
var inst_57976 = (state_58017[(25)]);
var inst_57985 = (state_58017[(23)]);
var inst_57985__$1 = cljs.core.first.call(null,inst_57976);
var inst_57986 = cljs.core.async.put_BANG_.call(null,inst_57985__$1,inst_57885,done);
var state_58017__$1 = (function (){var statearr_58093 = state_58017;
(statearr_58093[(23)] = inst_57985__$1);

return statearr_58093;
})();
if(cljs.core.truth_(inst_57986)){
var statearr_58094_58156 = state_58017__$1;
(statearr_58094_58156[(1)] = (39));

} else {
var statearr_58095_58157 = state_58017__$1;
(statearr_58095_58157[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (8))){
var inst_57896 = (state_58017[(14)]);
var inst_57897 = (state_58017[(16)]);
var inst_57899 = (inst_57897 < inst_57896);
var inst_57900 = inst_57899;
var state_58017__$1 = state_58017;
if(cljs.core.truth_(inst_57900)){
var statearr_58096_58158 = state_58017__$1;
(statearr_58096_58158[(1)] = (10));

} else {
var statearr_58097_58159 = state_58017__$1;
(statearr_58097_58159[(1)] = (11));

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
});})(c__47652__auto___58105,cs,m,dchan,dctr,done))
;
return ((function (switch__47587__auto__,c__47652__auto___58105,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47588__auto__ = null;
var cljs$core$async$mult_$_state_machine__47588__auto____0 = (function (){
var statearr_58101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58101[(0)] = cljs$core$async$mult_$_state_machine__47588__auto__);

(statearr_58101[(1)] = (1));

return statearr_58101;
});
var cljs$core$async$mult_$_state_machine__47588__auto____1 = (function (state_58017){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58102){if((e58102 instanceof Object)){
var ex__47591__auto__ = e58102;
var statearr_58103_58160 = state_58017;
(statearr_58103_58160[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58161 = state_58017;
state_58017 = G__58161;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47588__auto__ = function(state_58017){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47588__auto____1.call(this,state_58017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47588__auto____0;
cljs$core$async$mult_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47588__auto____1;
return cljs$core$async$mult_$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58105,cs,m,dchan,dctr,done))
})();
var state__47654__auto__ = (function (){var statearr_58104 = f__47653__auto__.call(null);
(statearr_58104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58105);

return statearr_58104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58105,cs,m,dchan,dctr,done))
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
var args58162 = [];
var len__45375__auto___58165 = arguments.length;
var i__45376__auto___58166 = (0);
while(true){
if((i__45376__auto___58166 < len__45375__auto___58165)){
args58162.push((arguments[i__45376__auto___58166]));

var G__58167 = (i__45376__auto___58166 + (1));
i__45376__auto___58166 = G__58167;
continue;
} else {
}
break;
}

var G__58164 = args58162.length;
switch (G__58164) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58162.length)].join('')));

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
var len__45375__auto___58179 = arguments.length;
var i__45376__auto___58180 = (0);
while(true){
if((i__45376__auto___58180 < len__45375__auto___58179)){
args__45382__auto__.push((arguments[i__45376__auto___58180]));

var G__58181 = (i__45376__auto___58180 + (1));
i__45376__auto___58180 = G__58181;
continue;
} else {
}
break;
}

var argseq__45383__auto__ = ((((3) < args__45382__auto__.length))?(new cljs.core.IndexedSeq(args__45382__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45383__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58173){
var map__58174 = p__58173;
var map__58174__$1 = ((((!((map__58174 == null)))?((((map__58174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58174):map__58174);
var opts = map__58174__$1;
var statearr_58176_58182 = state;
(statearr_58176_58182[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__58174,map__58174__$1,opts){
return (function (val){
var statearr_58177_58183 = state;
(statearr_58177_58183[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__58174,map__58174__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_58178_58184 = state;
(statearr_58178_58184[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58169){
var G__58170 = cljs.core.first.call(null,seq58169);
var seq58169__$1 = cljs.core.next.call(null,seq58169);
var G__58171 = cljs.core.first.call(null,seq58169__$1);
var seq58169__$2 = cljs.core.next.call(null,seq58169__$1);
var G__58172 = cljs.core.first.call(null,seq58169__$2);
var seq58169__$3 = cljs.core.next.call(null,seq58169__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58170,G__58171,G__58172,seq58169__$3);
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
if(typeof cljs.core.async.t_cljs$core$async58352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58352 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta58353){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta58353 = meta58353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58354,meta58353__$1){
var self__ = this;
var _58354__$1 = this;
return (new cljs.core.async.t_cljs$core$async58352(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta58353__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58354){
var self__ = this;
var _58354__$1 = this;
return self__.meta58353;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async58352.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta58353","meta58353",384891659,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58352";

cljs.core.async.t_cljs$core$async58352.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async58352");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async58352 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async58352(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58353){
return (new cljs.core.async.t_cljs$core$async58352(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58353));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async58352(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47652__auto___58519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_58456){
var state_val_58457 = (state_58456[(1)]);
if((state_val_58457 === (7))){
var inst_58371 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
var statearr_58458_58520 = state_58456__$1;
(statearr_58458_58520[(2)] = inst_58371);

(statearr_58458_58520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (20))){
var inst_58383 = (state_58456[(7)]);
var state_58456__$1 = state_58456;
var statearr_58459_58521 = state_58456__$1;
(statearr_58459_58521[(2)] = inst_58383);

(statearr_58459_58521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (27))){
var state_58456__$1 = state_58456;
var statearr_58460_58522 = state_58456__$1;
(statearr_58460_58522[(2)] = null);

(statearr_58460_58522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (1))){
var inst_58358 = (state_58456[(8)]);
var inst_58358__$1 = calc_state.call(null);
var inst_58360 = (inst_58358__$1 == null);
var inst_58361 = cljs.core.not.call(null,inst_58360);
var state_58456__$1 = (function (){var statearr_58461 = state_58456;
(statearr_58461[(8)] = inst_58358__$1);

return statearr_58461;
})();
if(inst_58361){
var statearr_58462_58523 = state_58456__$1;
(statearr_58462_58523[(1)] = (2));

} else {
var statearr_58463_58524 = state_58456__$1;
(statearr_58463_58524[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (24))){
var inst_58416 = (state_58456[(9)]);
var inst_58407 = (state_58456[(10)]);
var inst_58430 = (state_58456[(11)]);
var inst_58430__$1 = inst_58407.call(null,inst_58416);
var state_58456__$1 = (function (){var statearr_58464 = state_58456;
(statearr_58464[(11)] = inst_58430__$1);

return statearr_58464;
})();
if(cljs.core.truth_(inst_58430__$1)){
var statearr_58465_58525 = state_58456__$1;
(statearr_58465_58525[(1)] = (29));

} else {
var statearr_58466_58526 = state_58456__$1;
(statearr_58466_58526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (4))){
var inst_58374 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58374)){
var statearr_58467_58527 = state_58456__$1;
(statearr_58467_58527[(1)] = (8));

} else {
var statearr_58468_58528 = state_58456__$1;
(statearr_58468_58528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (15))){
var inst_58401 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58401)){
var statearr_58469_58529 = state_58456__$1;
(statearr_58469_58529[(1)] = (19));

} else {
var statearr_58470_58530 = state_58456__$1;
(statearr_58470_58530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (21))){
var inst_58406 = (state_58456[(12)]);
var inst_58406__$1 = (state_58456[(2)]);
var inst_58407 = cljs.core.get.call(null,inst_58406__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58408 = cljs.core.get.call(null,inst_58406__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58409 = cljs.core.get.call(null,inst_58406__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58456__$1 = (function (){var statearr_58471 = state_58456;
(statearr_58471[(13)] = inst_58408);

(statearr_58471[(12)] = inst_58406__$1);

(statearr_58471[(10)] = inst_58407);

return statearr_58471;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_58456__$1,(22),inst_58409);
} else {
if((state_val_58457 === (31))){
var inst_58438 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58438)){
var statearr_58472_58531 = state_58456__$1;
(statearr_58472_58531[(1)] = (32));

} else {
var statearr_58473_58532 = state_58456__$1;
(statearr_58473_58532[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (32))){
var inst_58415 = (state_58456[(14)]);
var state_58456__$1 = state_58456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58456__$1,(35),out,inst_58415);
} else {
if((state_val_58457 === (33))){
var inst_58406 = (state_58456[(12)]);
var inst_58383 = inst_58406;
var state_58456__$1 = (function (){var statearr_58474 = state_58456;
(statearr_58474[(7)] = inst_58383);

return statearr_58474;
})();
var statearr_58475_58533 = state_58456__$1;
(statearr_58475_58533[(2)] = null);

(statearr_58475_58533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (13))){
var inst_58383 = (state_58456[(7)]);
var inst_58390 = inst_58383.cljs$lang$protocol_mask$partition0$;
var inst_58391 = (inst_58390 & (64));
var inst_58392 = inst_58383.cljs$core$ISeq$;
var inst_58393 = (cljs.core.PROTOCOL_SENTINEL === inst_58392);
var inst_58394 = (inst_58391) || (inst_58393);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58394)){
var statearr_58476_58534 = state_58456__$1;
(statearr_58476_58534[(1)] = (16));

} else {
var statearr_58477_58535 = state_58456__$1;
(statearr_58477_58535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (22))){
var inst_58416 = (state_58456[(9)]);
var inst_58415 = (state_58456[(14)]);
var inst_58414 = (state_58456[(2)]);
var inst_58415__$1 = cljs.core.nth.call(null,inst_58414,(0),null);
var inst_58416__$1 = cljs.core.nth.call(null,inst_58414,(1),null);
var inst_58417 = (inst_58415__$1 == null);
var inst_58418 = cljs.core._EQ_.call(null,inst_58416__$1,change);
var inst_58419 = (inst_58417) || (inst_58418);
var state_58456__$1 = (function (){var statearr_58478 = state_58456;
(statearr_58478[(9)] = inst_58416__$1);

(statearr_58478[(14)] = inst_58415__$1);

return statearr_58478;
})();
if(cljs.core.truth_(inst_58419)){
var statearr_58479_58536 = state_58456__$1;
(statearr_58479_58536[(1)] = (23));

} else {
var statearr_58480_58537 = state_58456__$1;
(statearr_58480_58537[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (36))){
var inst_58406 = (state_58456[(12)]);
var inst_58383 = inst_58406;
var state_58456__$1 = (function (){var statearr_58481 = state_58456;
(statearr_58481[(7)] = inst_58383);

return statearr_58481;
})();
var statearr_58482_58538 = state_58456__$1;
(statearr_58482_58538[(2)] = null);

(statearr_58482_58538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (29))){
var inst_58430 = (state_58456[(11)]);
var state_58456__$1 = state_58456;
var statearr_58483_58539 = state_58456__$1;
(statearr_58483_58539[(2)] = inst_58430);

(statearr_58483_58539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (6))){
var state_58456__$1 = state_58456;
var statearr_58484_58540 = state_58456__$1;
(statearr_58484_58540[(2)] = false);

(statearr_58484_58540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (28))){
var inst_58426 = (state_58456[(2)]);
var inst_58427 = calc_state.call(null);
var inst_58383 = inst_58427;
var state_58456__$1 = (function (){var statearr_58485 = state_58456;
(statearr_58485[(7)] = inst_58383);

(statearr_58485[(15)] = inst_58426);

return statearr_58485;
})();
var statearr_58486_58541 = state_58456__$1;
(statearr_58486_58541[(2)] = null);

(statearr_58486_58541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (25))){
var inst_58452 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
var statearr_58487_58542 = state_58456__$1;
(statearr_58487_58542[(2)] = inst_58452);

(statearr_58487_58542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (34))){
var inst_58450 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
var statearr_58488_58543 = state_58456__$1;
(statearr_58488_58543[(2)] = inst_58450);

(statearr_58488_58543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (17))){
var state_58456__$1 = state_58456;
var statearr_58489_58544 = state_58456__$1;
(statearr_58489_58544[(2)] = false);

(statearr_58489_58544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (3))){
var state_58456__$1 = state_58456;
var statearr_58490_58545 = state_58456__$1;
(statearr_58490_58545[(2)] = false);

(statearr_58490_58545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (12))){
var inst_58454 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58456__$1,inst_58454);
} else {
if((state_val_58457 === (2))){
var inst_58358 = (state_58456[(8)]);
var inst_58363 = inst_58358.cljs$lang$protocol_mask$partition0$;
var inst_58364 = (inst_58363 & (64));
var inst_58365 = inst_58358.cljs$core$ISeq$;
var inst_58366 = (cljs.core.PROTOCOL_SENTINEL === inst_58365);
var inst_58367 = (inst_58364) || (inst_58366);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58367)){
var statearr_58491_58546 = state_58456__$1;
(statearr_58491_58546[(1)] = (5));

} else {
var statearr_58492_58547 = state_58456__$1;
(statearr_58492_58547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (23))){
var inst_58415 = (state_58456[(14)]);
var inst_58421 = (inst_58415 == null);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58421)){
var statearr_58493_58548 = state_58456__$1;
(statearr_58493_58548[(1)] = (26));

} else {
var statearr_58494_58549 = state_58456__$1;
(statearr_58494_58549[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (35))){
var inst_58441 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
if(cljs.core.truth_(inst_58441)){
var statearr_58495_58550 = state_58456__$1;
(statearr_58495_58550[(1)] = (36));

} else {
var statearr_58496_58551 = state_58456__$1;
(statearr_58496_58551[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (19))){
var inst_58383 = (state_58456[(7)]);
var inst_58403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58383);
var state_58456__$1 = state_58456;
var statearr_58497_58552 = state_58456__$1;
(statearr_58497_58552[(2)] = inst_58403);

(statearr_58497_58552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (11))){
var inst_58383 = (state_58456[(7)]);
var inst_58387 = (inst_58383 == null);
var inst_58388 = cljs.core.not.call(null,inst_58387);
var state_58456__$1 = state_58456;
if(inst_58388){
var statearr_58498_58553 = state_58456__$1;
(statearr_58498_58553[(1)] = (13));

} else {
var statearr_58499_58554 = state_58456__$1;
(statearr_58499_58554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (9))){
var inst_58358 = (state_58456[(8)]);
var state_58456__$1 = state_58456;
var statearr_58500_58555 = state_58456__$1;
(statearr_58500_58555[(2)] = inst_58358);

(statearr_58500_58555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (5))){
var state_58456__$1 = state_58456;
var statearr_58501_58556 = state_58456__$1;
(statearr_58501_58556[(2)] = true);

(statearr_58501_58556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (14))){
var state_58456__$1 = state_58456;
var statearr_58502_58557 = state_58456__$1;
(statearr_58502_58557[(2)] = false);

(statearr_58502_58557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (26))){
var inst_58416 = (state_58456[(9)]);
var inst_58423 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_58416);
var state_58456__$1 = state_58456;
var statearr_58503_58558 = state_58456__$1;
(statearr_58503_58558[(2)] = inst_58423);

(statearr_58503_58558[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (16))){
var state_58456__$1 = state_58456;
var statearr_58504_58559 = state_58456__$1;
(statearr_58504_58559[(2)] = true);

(statearr_58504_58559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (38))){
var inst_58446 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
var statearr_58505_58560 = state_58456__$1;
(statearr_58505_58560[(2)] = inst_58446);

(statearr_58505_58560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (30))){
var inst_58408 = (state_58456[(13)]);
var inst_58416 = (state_58456[(9)]);
var inst_58407 = (state_58456[(10)]);
var inst_58433 = cljs.core.empty_QMARK_.call(null,inst_58407);
var inst_58434 = inst_58408.call(null,inst_58416);
var inst_58435 = cljs.core.not.call(null,inst_58434);
var inst_58436 = (inst_58433) && (inst_58435);
var state_58456__$1 = state_58456;
var statearr_58506_58561 = state_58456__$1;
(statearr_58506_58561[(2)] = inst_58436);

(statearr_58506_58561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (10))){
var inst_58358 = (state_58456[(8)]);
var inst_58379 = (state_58456[(2)]);
var inst_58380 = cljs.core.get.call(null,inst_58379,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58381 = cljs.core.get.call(null,inst_58379,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58382 = cljs.core.get.call(null,inst_58379,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58383 = inst_58358;
var state_58456__$1 = (function (){var statearr_58507 = state_58456;
(statearr_58507[(7)] = inst_58383);

(statearr_58507[(16)] = inst_58380);

(statearr_58507[(17)] = inst_58382);

(statearr_58507[(18)] = inst_58381);

return statearr_58507;
})();
var statearr_58508_58562 = state_58456__$1;
(statearr_58508_58562[(2)] = null);

(statearr_58508_58562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (18))){
var inst_58398 = (state_58456[(2)]);
var state_58456__$1 = state_58456;
var statearr_58509_58563 = state_58456__$1;
(statearr_58509_58563[(2)] = inst_58398);

(statearr_58509_58563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (37))){
var state_58456__$1 = state_58456;
var statearr_58510_58564 = state_58456__$1;
(statearr_58510_58564[(2)] = null);

(statearr_58510_58564[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58457 === (8))){
var inst_58358 = (state_58456[(8)]);
var inst_58376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58358);
var state_58456__$1 = state_58456;
var statearr_58511_58565 = state_58456__$1;
(statearr_58511_58565[(2)] = inst_58376);

(statearr_58511_58565[(1)] = (10));


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
});})(c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47587__auto__,c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47588__auto__ = null;
var cljs$core$async$mix_$_state_machine__47588__auto____0 = (function (){
var statearr_58515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58515[(0)] = cljs$core$async$mix_$_state_machine__47588__auto__);

(statearr_58515[(1)] = (1));

return statearr_58515;
});
var cljs$core$async$mix_$_state_machine__47588__auto____1 = (function (state_58456){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58516){if((e58516 instanceof Object)){
var ex__47591__auto__ = e58516;
var statearr_58517_58566 = state_58456;
(statearr_58517_58566[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58567 = state_58456;
state_58456 = G__58567;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47588__auto__ = function(state_58456){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47588__auto____1.call(this,state_58456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47588__auto____0;
cljs$core$async$mix_$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47588__auto____1;
return cljs$core$async$mix_$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47654__auto__ = (function (){var statearr_58518 = f__47653__auto__.call(null);
(statearr_58518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58519);

return statearr_58518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args58568 = [];
var len__45375__auto___58571 = arguments.length;
var i__45376__auto___58572 = (0);
while(true){
if((i__45376__auto___58572 < len__45375__auto___58571)){
args58568.push((arguments[i__45376__auto___58572]));

var G__58573 = (i__45376__auto___58572 + (1));
i__45376__auto___58572 = G__58573;
continue;
} else {
}
break;
}

var G__58570 = args58568.length;
switch (G__58570) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58568.length)].join('')));

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
var args58576 = [];
var len__45375__auto___58701 = arguments.length;
var i__45376__auto___58702 = (0);
while(true){
if((i__45376__auto___58702 < len__45375__auto___58701)){
args58576.push((arguments[i__45376__auto___58702]));

var G__58703 = (i__45376__auto___58702 + (1));
i__45376__auto___58702 = G__58703;
continue;
} else {
}
break;
}

var G__58578 = args58576.length;
switch (G__58578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58576.length)].join('')));

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
return (function (p1__58575_SHARP_){
if(cljs.core.truth_(p1__58575_SHARP_.call(null,topic))){
return p1__58575_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58575_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44267__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async58579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58580 = meta58580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58581,meta58580__$1){
var self__ = this;
var _58581__$1 = this;
return (new cljs.core.async.t_cljs$core$async58579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58580__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58581){
var self__ = this;
var _58581__$1 = this;
return self__.meta58580;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58580","meta58580",-1253749646,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58579";

cljs.core.async.t_cljs$core$async58579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async58579");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async58579 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58580){
return (new cljs.core.async.t_cljs$core$async58579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58580));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47652__auto___58705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58705,mults,ensure_mult,p){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58705,mults,ensure_mult,p){
return (function (state_58653){
var state_val_58654 = (state_58653[(1)]);
if((state_val_58654 === (7))){
var inst_58649 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58655_58706 = state_58653__$1;
(statearr_58655_58706[(2)] = inst_58649);

(statearr_58655_58706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (20))){
var state_58653__$1 = state_58653;
var statearr_58656_58707 = state_58653__$1;
(statearr_58656_58707[(2)] = null);

(statearr_58656_58707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (1))){
var state_58653__$1 = state_58653;
var statearr_58657_58708 = state_58653__$1;
(statearr_58657_58708[(2)] = null);

(statearr_58657_58708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (24))){
var inst_58632 = (state_58653[(7)]);
var inst_58641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58632);
var state_58653__$1 = state_58653;
var statearr_58658_58709 = state_58653__$1;
(statearr_58658_58709[(2)] = inst_58641);

(statearr_58658_58709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (4))){
var inst_58584 = (state_58653[(8)]);
var inst_58584__$1 = (state_58653[(2)]);
var inst_58585 = (inst_58584__$1 == null);
var state_58653__$1 = (function (){var statearr_58659 = state_58653;
(statearr_58659[(8)] = inst_58584__$1);

return statearr_58659;
})();
if(cljs.core.truth_(inst_58585)){
var statearr_58660_58710 = state_58653__$1;
(statearr_58660_58710[(1)] = (5));

} else {
var statearr_58661_58711 = state_58653__$1;
(statearr_58661_58711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (15))){
var inst_58626 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58662_58712 = state_58653__$1;
(statearr_58662_58712[(2)] = inst_58626);

(statearr_58662_58712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (21))){
var inst_58646 = (state_58653[(2)]);
var state_58653__$1 = (function (){var statearr_58663 = state_58653;
(statearr_58663[(9)] = inst_58646);

return statearr_58663;
})();
var statearr_58664_58713 = state_58653__$1;
(statearr_58664_58713[(2)] = null);

(statearr_58664_58713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (13))){
var inst_58608 = (state_58653[(10)]);
var inst_58610 = cljs.core.chunked_seq_QMARK_.call(null,inst_58608);
var state_58653__$1 = state_58653;
if(inst_58610){
var statearr_58665_58714 = state_58653__$1;
(statearr_58665_58714[(1)] = (16));

} else {
var statearr_58666_58715 = state_58653__$1;
(statearr_58666_58715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (22))){
var inst_58638 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
if(cljs.core.truth_(inst_58638)){
var statearr_58667_58716 = state_58653__$1;
(statearr_58667_58716[(1)] = (23));

} else {
var statearr_58668_58717 = state_58653__$1;
(statearr_58668_58717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (6))){
var inst_58632 = (state_58653[(7)]);
var inst_58634 = (state_58653[(11)]);
var inst_58584 = (state_58653[(8)]);
var inst_58632__$1 = topic_fn.call(null,inst_58584);
var inst_58633 = cljs.core.deref.call(null,mults);
var inst_58634__$1 = cljs.core.get.call(null,inst_58633,inst_58632__$1);
var state_58653__$1 = (function (){var statearr_58669 = state_58653;
(statearr_58669[(7)] = inst_58632__$1);

(statearr_58669[(11)] = inst_58634__$1);

return statearr_58669;
})();
if(cljs.core.truth_(inst_58634__$1)){
var statearr_58670_58718 = state_58653__$1;
(statearr_58670_58718[(1)] = (19));

} else {
var statearr_58671_58719 = state_58653__$1;
(statearr_58671_58719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (25))){
var inst_58643 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58672_58720 = state_58653__$1;
(statearr_58672_58720[(2)] = inst_58643);

(statearr_58672_58720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (17))){
var inst_58608 = (state_58653[(10)]);
var inst_58617 = cljs.core.first.call(null,inst_58608);
var inst_58618 = cljs.core.async.muxch_STAR_.call(null,inst_58617);
var inst_58619 = cljs.core.async.close_BANG_.call(null,inst_58618);
var inst_58620 = cljs.core.next.call(null,inst_58608);
var inst_58594 = inst_58620;
var inst_58595 = null;
var inst_58596 = (0);
var inst_58597 = (0);
var state_58653__$1 = (function (){var statearr_58673 = state_58653;
(statearr_58673[(12)] = inst_58597);

(statearr_58673[(13)] = inst_58594);

(statearr_58673[(14)] = inst_58595);

(statearr_58673[(15)] = inst_58596);

(statearr_58673[(16)] = inst_58619);

return statearr_58673;
})();
var statearr_58674_58721 = state_58653__$1;
(statearr_58674_58721[(2)] = null);

(statearr_58674_58721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (3))){
var inst_58651 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58653__$1,inst_58651);
} else {
if((state_val_58654 === (12))){
var inst_58628 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58675_58722 = state_58653__$1;
(statearr_58675_58722[(2)] = inst_58628);

(statearr_58675_58722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (2))){
var state_58653__$1 = state_58653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58653__$1,(4),ch);
} else {
if((state_val_58654 === (23))){
var state_58653__$1 = state_58653;
var statearr_58676_58723 = state_58653__$1;
(statearr_58676_58723[(2)] = null);

(statearr_58676_58723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (19))){
var inst_58634 = (state_58653[(11)]);
var inst_58584 = (state_58653[(8)]);
var inst_58636 = cljs.core.async.muxch_STAR_.call(null,inst_58634);
var state_58653__$1 = state_58653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58653__$1,(22),inst_58636,inst_58584);
} else {
if((state_val_58654 === (11))){
var inst_58594 = (state_58653[(13)]);
var inst_58608 = (state_58653[(10)]);
var inst_58608__$1 = cljs.core.seq.call(null,inst_58594);
var state_58653__$1 = (function (){var statearr_58677 = state_58653;
(statearr_58677[(10)] = inst_58608__$1);

return statearr_58677;
})();
if(inst_58608__$1){
var statearr_58678_58724 = state_58653__$1;
(statearr_58678_58724[(1)] = (13));

} else {
var statearr_58679_58725 = state_58653__$1;
(statearr_58679_58725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (9))){
var inst_58630 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58680_58726 = state_58653__$1;
(statearr_58680_58726[(2)] = inst_58630);

(statearr_58680_58726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (5))){
var inst_58591 = cljs.core.deref.call(null,mults);
var inst_58592 = cljs.core.vals.call(null,inst_58591);
var inst_58593 = cljs.core.seq.call(null,inst_58592);
var inst_58594 = inst_58593;
var inst_58595 = null;
var inst_58596 = (0);
var inst_58597 = (0);
var state_58653__$1 = (function (){var statearr_58681 = state_58653;
(statearr_58681[(12)] = inst_58597);

(statearr_58681[(13)] = inst_58594);

(statearr_58681[(14)] = inst_58595);

(statearr_58681[(15)] = inst_58596);

return statearr_58681;
})();
var statearr_58682_58727 = state_58653__$1;
(statearr_58682_58727[(2)] = null);

(statearr_58682_58727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (14))){
var state_58653__$1 = state_58653;
var statearr_58686_58728 = state_58653__$1;
(statearr_58686_58728[(2)] = null);

(statearr_58686_58728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (16))){
var inst_58608 = (state_58653[(10)]);
var inst_58612 = cljs.core.chunk_first.call(null,inst_58608);
var inst_58613 = cljs.core.chunk_rest.call(null,inst_58608);
var inst_58614 = cljs.core.count.call(null,inst_58612);
var inst_58594 = inst_58613;
var inst_58595 = inst_58612;
var inst_58596 = inst_58614;
var inst_58597 = (0);
var state_58653__$1 = (function (){var statearr_58687 = state_58653;
(statearr_58687[(12)] = inst_58597);

(statearr_58687[(13)] = inst_58594);

(statearr_58687[(14)] = inst_58595);

(statearr_58687[(15)] = inst_58596);

return statearr_58687;
})();
var statearr_58688_58729 = state_58653__$1;
(statearr_58688_58729[(2)] = null);

(statearr_58688_58729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (10))){
var inst_58597 = (state_58653[(12)]);
var inst_58594 = (state_58653[(13)]);
var inst_58595 = (state_58653[(14)]);
var inst_58596 = (state_58653[(15)]);
var inst_58602 = cljs.core._nth.call(null,inst_58595,inst_58597);
var inst_58603 = cljs.core.async.muxch_STAR_.call(null,inst_58602);
var inst_58604 = cljs.core.async.close_BANG_.call(null,inst_58603);
var inst_58605 = (inst_58597 + (1));
var tmp58683 = inst_58594;
var tmp58684 = inst_58595;
var tmp58685 = inst_58596;
var inst_58594__$1 = tmp58683;
var inst_58595__$1 = tmp58684;
var inst_58596__$1 = tmp58685;
var inst_58597__$1 = inst_58605;
var state_58653__$1 = (function (){var statearr_58689 = state_58653;
(statearr_58689[(12)] = inst_58597__$1);

(statearr_58689[(13)] = inst_58594__$1);

(statearr_58689[(14)] = inst_58595__$1);

(statearr_58689[(17)] = inst_58604);

(statearr_58689[(15)] = inst_58596__$1);

return statearr_58689;
})();
var statearr_58690_58730 = state_58653__$1;
(statearr_58690_58730[(2)] = null);

(statearr_58690_58730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (18))){
var inst_58623 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58691_58731 = state_58653__$1;
(statearr_58691_58731[(2)] = inst_58623);

(statearr_58691_58731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (8))){
var inst_58597 = (state_58653[(12)]);
var inst_58596 = (state_58653[(15)]);
var inst_58599 = (inst_58597 < inst_58596);
var inst_58600 = inst_58599;
var state_58653__$1 = state_58653;
if(cljs.core.truth_(inst_58600)){
var statearr_58692_58732 = state_58653__$1;
(statearr_58692_58732[(1)] = (10));

} else {
var statearr_58693_58733 = state_58653__$1;
(statearr_58693_58733[(1)] = (11));

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
});})(c__47652__auto___58705,mults,ensure_mult,p))
;
return ((function (switch__47587__auto__,c__47652__auto___58705,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_58697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58697[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_58697[(1)] = (1));

return statearr_58697;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_58653){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58698){if((e58698 instanceof Object)){
var ex__47591__auto__ = e58698;
var statearr_58699_58734 = state_58653;
(statearr_58699_58734[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58735 = state_58653;
state_58653 = G__58735;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_58653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_58653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58705,mults,ensure_mult,p))
})();
var state__47654__auto__ = (function (){var statearr_58700 = f__47653__auto__.call(null);
(statearr_58700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58705);

return statearr_58700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58705,mults,ensure_mult,p))
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
var args58736 = [];
var len__45375__auto___58739 = arguments.length;
var i__45376__auto___58740 = (0);
while(true){
if((i__45376__auto___58740 < len__45375__auto___58739)){
args58736.push((arguments[i__45376__auto___58740]));

var G__58741 = (i__45376__auto___58740 + (1));
i__45376__auto___58740 = G__58741;
continue;
} else {
}
break;
}

var G__58738 = args58736.length;
switch (G__58738) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58736.length)].join('')));

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
var args58743 = [];
var len__45375__auto___58746 = arguments.length;
var i__45376__auto___58747 = (0);
while(true){
if((i__45376__auto___58747 < len__45375__auto___58746)){
args58743.push((arguments[i__45376__auto___58747]));

var G__58748 = (i__45376__auto___58747 + (1));
i__45376__auto___58747 = G__58748;
continue;
} else {
}
break;
}

var G__58745 = args58743.length;
switch (G__58745) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58743.length)].join('')));

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
var args58750 = [];
var len__45375__auto___58821 = arguments.length;
var i__45376__auto___58822 = (0);
while(true){
if((i__45376__auto___58822 < len__45375__auto___58821)){
args58750.push((arguments[i__45376__auto___58822]));

var G__58823 = (i__45376__auto___58822 + (1));
i__45376__auto___58822 = G__58823;
continue;
} else {
}
break;
}

var G__58752 = args58750.length;
switch (G__58752) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58750.length)].join('')));

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
var c__47652__auto___58825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58791){
var state_val_58792 = (state_58791[(1)]);
if((state_val_58792 === (7))){
var state_58791__$1 = state_58791;
var statearr_58793_58826 = state_58791__$1;
(statearr_58793_58826[(2)] = null);

(statearr_58793_58826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (1))){
var state_58791__$1 = state_58791;
var statearr_58794_58827 = state_58791__$1;
(statearr_58794_58827[(2)] = null);

(statearr_58794_58827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (4))){
var inst_58755 = (state_58791[(7)]);
var inst_58757 = (inst_58755 < cnt);
var state_58791__$1 = state_58791;
if(cljs.core.truth_(inst_58757)){
var statearr_58795_58828 = state_58791__$1;
(statearr_58795_58828[(1)] = (6));

} else {
var statearr_58796_58829 = state_58791__$1;
(statearr_58796_58829[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (15))){
var inst_58787 = (state_58791[(2)]);
var state_58791__$1 = state_58791;
var statearr_58797_58830 = state_58791__$1;
(statearr_58797_58830[(2)] = inst_58787);

(statearr_58797_58830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (13))){
var inst_58780 = cljs.core.async.close_BANG_.call(null,out);
var state_58791__$1 = state_58791;
var statearr_58798_58831 = state_58791__$1;
(statearr_58798_58831[(2)] = inst_58780);

(statearr_58798_58831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (6))){
var state_58791__$1 = state_58791;
var statearr_58799_58832 = state_58791__$1;
(statearr_58799_58832[(2)] = null);

(statearr_58799_58832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (3))){
var inst_58789 = (state_58791[(2)]);
var state_58791__$1 = state_58791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58791__$1,inst_58789);
} else {
if((state_val_58792 === (12))){
var inst_58777 = (state_58791[(8)]);
var inst_58777__$1 = (state_58791[(2)]);
var inst_58778 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58777__$1);
var state_58791__$1 = (function (){var statearr_58800 = state_58791;
(statearr_58800[(8)] = inst_58777__$1);

return statearr_58800;
})();
if(cljs.core.truth_(inst_58778)){
var statearr_58801_58833 = state_58791__$1;
(statearr_58801_58833[(1)] = (13));

} else {
var statearr_58802_58834 = state_58791__$1;
(statearr_58802_58834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (2))){
var inst_58754 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58755 = (0);
var state_58791__$1 = (function (){var statearr_58803 = state_58791;
(statearr_58803[(9)] = inst_58754);

(statearr_58803[(7)] = inst_58755);

return statearr_58803;
})();
var statearr_58804_58835 = state_58791__$1;
(statearr_58804_58835[(2)] = null);

(statearr_58804_58835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (11))){
var inst_58755 = (state_58791[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58791,(10),Object,null,(9));
var inst_58764 = chs__$1.call(null,inst_58755);
var inst_58765 = done.call(null,inst_58755);
var inst_58766 = cljs.core.async.take_BANG_.call(null,inst_58764,inst_58765);
var state_58791__$1 = state_58791;
var statearr_58805_58836 = state_58791__$1;
(statearr_58805_58836[(2)] = inst_58766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (9))){
var inst_58755 = (state_58791[(7)]);
var inst_58768 = (state_58791[(2)]);
var inst_58769 = (inst_58755 + (1));
var inst_58755__$1 = inst_58769;
var state_58791__$1 = (function (){var statearr_58806 = state_58791;
(statearr_58806[(10)] = inst_58768);

(statearr_58806[(7)] = inst_58755__$1);

return statearr_58806;
})();
var statearr_58807_58837 = state_58791__$1;
(statearr_58807_58837[(2)] = null);

(statearr_58807_58837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (5))){
var inst_58775 = (state_58791[(2)]);
var state_58791__$1 = (function (){var statearr_58808 = state_58791;
(statearr_58808[(11)] = inst_58775);

return statearr_58808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58791__$1,(12),dchan);
} else {
if((state_val_58792 === (14))){
var inst_58777 = (state_58791[(8)]);
var inst_58782 = cljs.core.apply.call(null,f,inst_58777);
var state_58791__$1 = state_58791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58791__$1,(16),out,inst_58782);
} else {
if((state_val_58792 === (16))){
var inst_58784 = (state_58791[(2)]);
var state_58791__$1 = (function (){var statearr_58809 = state_58791;
(statearr_58809[(12)] = inst_58784);

return statearr_58809;
})();
var statearr_58810_58838 = state_58791__$1;
(statearr_58810_58838[(2)] = null);

(statearr_58810_58838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (10))){
var inst_58759 = (state_58791[(2)]);
var inst_58760 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58791__$1 = (function (){var statearr_58811 = state_58791;
(statearr_58811[(13)] = inst_58759);

return statearr_58811;
})();
var statearr_58812_58839 = state_58791__$1;
(statearr_58812_58839[(2)] = inst_58760);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58792 === (8))){
var inst_58773 = (state_58791[(2)]);
var state_58791__$1 = state_58791;
var statearr_58813_58840 = state_58791__$1;
(statearr_58813_58840[(2)] = inst_58773);

(statearr_58813_58840[(1)] = (5));


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
});})(c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47587__auto__,c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_58817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58817[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_58817[(1)] = (1));

return statearr_58817;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_58791){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58818){if((e58818 instanceof Object)){
var ex__47591__auto__ = e58818;
var statearr_58819_58841 = state_58791;
(statearr_58819_58841[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58842 = state_58791;
state_58791 = G__58842;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_58791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_58791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47654__auto__ = (function (){var statearr_58820 = f__47653__auto__.call(null);
(statearr_58820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58825);

return statearr_58820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58825,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args58844 = [];
var len__45375__auto___58902 = arguments.length;
var i__45376__auto___58903 = (0);
while(true){
if((i__45376__auto___58903 < len__45375__auto___58902)){
args58844.push((arguments[i__45376__auto___58903]));

var G__58904 = (i__45376__auto___58903 + (1));
i__45376__auto___58903 = G__58904;
continue;
} else {
}
break;
}

var G__58846 = args58844.length;
switch (G__58846) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58844.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___58906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58906,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58906,out){
return (function (state_58878){
var state_val_58879 = (state_58878[(1)]);
if((state_val_58879 === (7))){
var inst_58857 = (state_58878[(7)]);
var inst_58858 = (state_58878[(8)]);
var inst_58857__$1 = (state_58878[(2)]);
var inst_58858__$1 = cljs.core.nth.call(null,inst_58857__$1,(0),null);
var inst_58859 = cljs.core.nth.call(null,inst_58857__$1,(1),null);
var inst_58860 = (inst_58858__$1 == null);
var state_58878__$1 = (function (){var statearr_58880 = state_58878;
(statearr_58880[(9)] = inst_58859);

(statearr_58880[(7)] = inst_58857__$1);

(statearr_58880[(8)] = inst_58858__$1);

return statearr_58880;
})();
if(cljs.core.truth_(inst_58860)){
var statearr_58881_58907 = state_58878__$1;
(statearr_58881_58907[(1)] = (8));

} else {
var statearr_58882_58908 = state_58878__$1;
(statearr_58882_58908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (1))){
var inst_58847 = cljs.core.vec.call(null,chs);
var inst_58848 = inst_58847;
var state_58878__$1 = (function (){var statearr_58883 = state_58878;
(statearr_58883[(10)] = inst_58848);

return statearr_58883;
})();
var statearr_58884_58909 = state_58878__$1;
(statearr_58884_58909[(2)] = null);

(statearr_58884_58909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (4))){
var inst_58848 = (state_58878[(10)]);
var state_58878__$1 = state_58878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58878__$1,(7),inst_58848);
} else {
if((state_val_58879 === (6))){
var inst_58874 = (state_58878[(2)]);
var state_58878__$1 = state_58878;
var statearr_58885_58910 = state_58878__$1;
(statearr_58885_58910[(2)] = inst_58874);

(statearr_58885_58910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (3))){
var inst_58876 = (state_58878[(2)]);
var state_58878__$1 = state_58878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58878__$1,inst_58876);
} else {
if((state_val_58879 === (2))){
var inst_58848 = (state_58878[(10)]);
var inst_58850 = cljs.core.count.call(null,inst_58848);
var inst_58851 = (inst_58850 > (0));
var state_58878__$1 = state_58878;
if(cljs.core.truth_(inst_58851)){
var statearr_58887_58911 = state_58878__$1;
(statearr_58887_58911[(1)] = (4));

} else {
var statearr_58888_58912 = state_58878__$1;
(statearr_58888_58912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (11))){
var inst_58848 = (state_58878[(10)]);
var inst_58867 = (state_58878[(2)]);
var tmp58886 = inst_58848;
var inst_58848__$1 = tmp58886;
var state_58878__$1 = (function (){var statearr_58889 = state_58878;
(statearr_58889[(11)] = inst_58867);

(statearr_58889[(10)] = inst_58848__$1);

return statearr_58889;
})();
var statearr_58890_58913 = state_58878__$1;
(statearr_58890_58913[(2)] = null);

(statearr_58890_58913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (9))){
var inst_58858 = (state_58878[(8)]);
var state_58878__$1 = state_58878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58878__$1,(11),out,inst_58858);
} else {
if((state_val_58879 === (5))){
var inst_58872 = cljs.core.async.close_BANG_.call(null,out);
var state_58878__$1 = state_58878;
var statearr_58891_58914 = state_58878__$1;
(statearr_58891_58914[(2)] = inst_58872);

(statearr_58891_58914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (10))){
var inst_58870 = (state_58878[(2)]);
var state_58878__$1 = state_58878;
var statearr_58892_58915 = state_58878__$1;
(statearr_58892_58915[(2)] = inst_58870);

(statearr_58892_58915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (8))){
var inst_58859 = (state_58878[(9)]);
var inst_58857 = (state_58878[(7)]);
var inst_58858 = (state_58878[(8)]);
var inst_58848 = (state_58878[(10)]);
var inst_58862 = (function (){var cs = inst_58848;
var vec__58853 = inst_58857;
var v = inst_58858;
var c = inst_58859;
return ((function (cs,vec__58853,v,c,inst_58859,inst_58857,inst_58858,inst_58848,state_val_58879,c__47652__auto___58906,out){
return (function (p1__58843_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58843_SHARP_);
});
;})(cs,vec__58853,v,c,inst_58859,inst_58857,inst_58858,inst_58848,state_val_58879,c__47652__auto___58906,out))
})();
var inst_58863 = cljs.core.filterv.call(null,inst_58862,inst_58848);
var inst_58848__$1 = inst_58863;
var state_58878__$1 = (function (){var statearr_58893 = state_58878;
(statearr_58893[(10)] = inst_58848__$1);

return statearr_58893;
})();
var statearr_58894_58916 = state_58878__$1;
(statearr_58894_58916[(2)] = null);

(statearr_58894_58916[(1)] = (2));


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
});})(c__47652__auto___58906,out))
;
return ((function (switch__47587__auto__,c__47652__auto___58906,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_58898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58898[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_58898[(1)] = (1));

return statearr_58898;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_58878){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58899){if((e58899 instanceof Object)){
var ex__47591__auto__ = e58899;
var statearr_58900_58917 = state_58878;
(statearr_58900_58917[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58918 = state_58878;
state_58878 = G__58918;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_58878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_58878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58906,out))
})();
var state__47654__auto__ = (function (){var statearr_58901 = f__47653__auto__.call(null);
(statearr_58901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58906);

return statearr_58901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58906,out))
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
var args58919 = [];
var len__45375__auto___58968 = arguments.length;
var i__45376__auto___58969 = (0);
while(true){
if((i__45376__auto___58969 < len__45375__auto___58968)){
args58919.push((arguments[i__45376__auto___58969]));

var G__58970 = (i__45376__auto___58969 + (1));
i__45376__auto___58969 = G__58970;
continue;
} else {
}
break;
}

var G__58921 = args58919.length;
switch (G__58921) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58919.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___58972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___58972,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___58972,out){
return (function (state_58945){
var state_val_58946 = (state_58945[(1)]);
if((state_val_58946 === (7))){
var inst_58927 = (state_58945[(7)]);
var inst_58927__$1 = (state_58945[(2)]);
var inst_58928 = (inst_58927__$1 == null);
var inst_58929 = cljs.core.not.call(null,inst_58928);
var state_58945__$1 = (function (){var statearr_58947 = state_58945;
(statearr_58947[(7)] = inst_58927__$1);

return statearr_58947;
})();
if(inst_58929){
var statearr_58948_58973 = state_58945__$1;
(statearr_58948_58973[(1)] = (8));

} else {
var statearr_58949_58974 = state_58945__$1;
(statearr_58949_58974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (1))){
var inst_58922 = (0);
var state_58945__$1 = (function (){var statearr_58950 = state_58945;
(statearr_58950[(8)] = inst_58922);

return statearr_58950;
})();
var statearr_58951_58975 = state_58945__$1;
(statearr_58951_58975[(2)] = null);

(statearr_58951_58975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (4))){
var state_58945__$1 = state_58945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58945__$1,(7),ch);
} else {
if((state_val_58946 === (6))){
var inst_58940 = (state_58945[(2)]);
var state_58945__$1 = state_58945;
var statearr_58952_58976 = state_58945__$1;
(statearr_58952_58976[(2)] = inst_58940);

(statearr_58952_58976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (3))){
var inst_58942 = (state_58945[(2)]);
var inst_58943 = cljs.core.async.close_BANG_.call(null,out);
var state_58945__$1 = (function (){var statearr_58953 = state_58945;
(statearr_58953[(9)] = inst_58942);

return statearr_58953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58945__$1,inst_58943);
} else {
if((state_val_58946 === (2))){
var inst_58922 = (state_58945[(8)]);
var inst_58924 = (inst_58922 < n);
var state_58945__$1 = state_58945;
if(cljs.core.truth_(inst_58924)){
var statearr_58954_58977 = state_58945__$1;
(statearr_58954_58977[(1)] = (4));

} else {
var statearr_58955_58978 = state_58945__$1;
(statearr_58955_58978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (11))){
var inst_58922 = (state_58945[(8)]);
var inst_58932 = (state_58945[(2)]);
var inst_58933 = (inst_58922 + (1));
var inst_58922__$1 = inst_58933;
var state_58945__$1 = (function (){var statearr_58956 = state_58945;
(statearr_58956[(10)] = inst_58932);

(statearr_58956[(8)] = inst_58922__$1);

return statearr_58956;
})();
var statearr_58957_58979 = state_58945__$1;
(statearr_58957_58979[(2)] = null);

(statearr_58957_58979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (9))){
var state_58945__$1 = state_58945;
var statearr_58958_58980 = state_58945__$1;
(statearr_58958_58980[(2)] = null);

(statearr_58958_58980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (5))){
var state_58945__$1 = state_58945;
var statearr_58959_58981 = state_58945__$1;
(statearr_58959_58981[(2)] = null);

(statearr_58959_58981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (10))){
var inst_58937 = (state_58945[(2)]);
var state_58945__$1 = state_58945;
var statearr_58960_58982 = state_58945__$1;
(statearr_58960_58982[(2)] = inst_58937);

(statearr_58960_58982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58946 === (8))){
var inst_58927 = (state_58945[(7)]);
var state_58945__$1 = state_58945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58945__$1,(11),out,inst_58927);
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
});})(c__47652__auto___58972,out))
;
return ((function (switch__47587__auto__,c__47652__auto___58972,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_58964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58964[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_58964[(1)] = (1));

return statearr_58964;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_58945){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_58945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e58965){if((e58965 instanceof Object)){
var ex__47591__auto__ = e58965;
var statearr_58966_58983 = state_58945;
(statearr_58966_58983[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58984 = state_58945;
state_58945 = G__58984;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_58945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_58945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___58972,out))
})();
var state__47654__auto__ = (function (){var statearr_58967 = f__47653__auto__.call(null);
(statearr_58967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___58972);

return statearr_58967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___58972,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58992 = (function (f,ch,meta58993){
this.f = f;
this.ch = ch;
this.meta58993 = meta58993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58994,meta58993__$1){
var self__ = this;
var _58994__$1 = this;
return (new cljs.core.async.t_cljs$core$async58992(self__.f,self__.ch,meta58993__$1));
});

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58994){
var self__ = this;
var _58994__$1 = this;
return self__.meta58993;
});

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58995 = (function (f,ch,meta58993,_,fn1,meta58996){
this.f = f;
this.ch = ch;
this.meta58993 = meta58993;
this._ = _;
this.fn1 = fn1;
this.meta58996 = meta58996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58997,meta58996__$1){
var self__ = this;
var _58997__$1 = this;
return (new cljs.core.async.t_cljs$core$async58995(self__.f,self__.ch,self__.meta58993,self__._,self__.fn1,meta58996__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58997){
var self__ = this;
var _58997__$1 = this;
return self__.meta58996;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58985_SHARP_){
return f1.call(null,(((p1__58985_SHARP_ == null))?null:self__.f.call(null,p1__58985_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58993","meta58993",-526645846,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58992","cljs.core.async/t_cljs$core$async58992",2086607672,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58996","meta58996",-503739407,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58995";

cljs.core.async.t_cljs$core$async58995.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async58995");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async58995 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58995(f__$1,ch__$1,meta58993__$1,___$2,fn1__$1,meta58996){
return (new cljs.core.async.t_cljs$core$async58995(f__$1,ch__$1,meta58993__$1,___$2,fn1__$1,meta58996));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58995(self__.f,self__.ch,self__.meta58993,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58993","meta58993",-526645846,null)], null);
});

cljs.core.async.t_cljs$core$async58992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58992";

cljs.core.async.t_cljs$core$async58992.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async58992");
});

cljs.core.async.__GT_t_cljs$core$async58992 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58992(f__$1,ch__$1,meta58993){
return (new cljs.core.async.t_cljs$core$async58992(f__$1,ch__$1,meta58993));
});

}

return (new cljs.core.async.t_cljs$core$async58992(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59001 = (function (f,ch,meta59002){
this.f = f;
this.ch = ch;
this.meta59002 = meta59002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59003,meta59002__$1){
var self__ = this;
var _59003__$1 = this;
return (new cljs.core.async.t_cljs$core$async59001(self__.f,self__.ch,meta59002__$1));
});

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59003){
var self__ = this;
var _59003__$1 = this;
return self__.meta59002;
});

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async59001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59002","meta59002",-1683796309,null)], null);
});

cljs.core.async.t_cljs$core$async59001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59001";

cljs.core.async.t_cljs$core$async59001.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async59001");
});

cljs.core.async.__GT_t_cljs$core$async59001 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59001(f__$1,ch__$1,meta59002){
return (new cljs.core.async.t_cljs$core$async59001(f__$1,ch__$1,meta59002));
});

}

return (new cljs.core.async.t_cljs$core$async59001(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async59007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59007 = (function (p,ch,meta59008){
this.p = p;
this.ch = ch;
this.meta59008 = meta59008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59009,meta59008__$1){
var self__ = this;
var _59009__$1 = this;
return (new cljs.core.async.t_cljs$core$async59007(self__.p,self__.ch,meta59008__$1));
});

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59009){
var self__ = this;
var _59009__$1 = this;
return self__.meta59008;
});

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async59007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59008","meta59008",914604799,null)], null);
});

cljs.core.async.t_cljs$core$async59007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59007";

cljs.core.async.t_cljs$core$async59007.cljs$lang$ctorPrWriter = (function (this__44873__auto__,writer__44874__auto__,opt__44875__auto__){
return cljs.core._write.call(null,writer__44874__auto__,"cljs.core.async/t_cljs$core$async59007");
});

cljs.core.async.__GT_t_cljs$core$async59007 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59007(p__$1,ch__$1,meta59008){
return (new cljs.core.async.t_cljs$core$async59007(p__$1,ch__$1,meta59008));
});

}

return (new cljs.core.async.t_cljs$core$async59007(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args59010 = [];
var len__45375__auto___59054 = arguments.length;
var i__45376__auto___59055 = (0);
while(true){
if((i__45376__auto___59055 < len__45375__auto___59054)){
args59010.push((arguments[i__45376__auto___59055]));

var G__59056 = (i__45376__auto___59055 + (1));
i__45376__auto___59055 = G__59056;
continue;
} else {
}
break;
}

var G__59012 = args59010.length;
switch (G__59012) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59010.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___59058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___59058,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___59058,out){
return (function (state_59033){
var state_val_59034 = (state_59033[(1)]);
if((state_val_59034 === (7))){
var inst_59029 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
var statearr_59035_59059 = state_59033__$1;
(statearr_59035_59059[(2)] = inst_59029);

(statearr_59035_59059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (1))){
var state_59033__$1 = state_59033;
var statearr_59036_59060 = state_59033__$1;
(statearr_59036_59060[(2)] = null);

(statearr_59036_59060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (4))){
var inst_59015 = (state_59033[(7)]);
var inst_59015__$1 = (state_59033[(2)]);
var inst_59016 = (inst_59015__$1 == null);
var state_59033__$1 = (function (){var statearr_59037 = state_59033;
(statearr_59037[(7)] = inst_59015__$1);

return statearr_59037;
})();
if(cljs.core.truth_(inst_59016)){
var statearr_59038_59061 = state_59033__$1;
(statearr_59038_59061[(1)] = (5));

} else {
var statearr_59039_59062 = state_59033__$1;
(statearr_59039_59062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (6))){
var inst_59015 = (state_59033[(7)]);
var inst_59020 = p.call(null,inst_59015);
var state_59033__$1 = state_59033;
if(cljs.core.truth_(inst_59020)){
var statearr_59040_59063 = state_59033__$1;
(statearr_59040_59063[(1)] = (8));

} else {
var statearr_59041_59064 = state_59033__$1;
(statearr_59041_59064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (3))){
var inst_59031 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59033__$1,inst_59031);
} else {
if((state_val_59034 === (2))){
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59033__$1,(4),ch);
} else {
if((state_val_59034 === (11))){
var inst_59023 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
var statearr_59042_59065 = state_59033__$1;
(statearr_59042_59065[(2)] = inst_59023);

(statearr_59042_59065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (9))){
var state_59033__$1 = state_59033;
var statearr_59043_59066 = state_59033__$1;
(statearr_59043_59066[(2)] = null);

(statearr_59043_59066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (5))){
var inst_59018 = cljs.core.async.close_BANG_.call(null,out);
var state_59033__$1 = state_59033;
var statearr_59044_59067 = state_59033__$1;
(statearr_59044_59067[(2)] = inst_59018);

(statearr_59044_59067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (10))){
var inst_59026 = (state_59033[(2)]);
var state_59033__$1 = (function (){var statearr_59045 = state_59033;
(statearr_59045[(8)] = inst_59026);

return statearr_59045;
})();
var statearr_59046_59068 = state_59033__$1;
(statearr_59046_59068[(2)] = null);

(statearr_59046_59068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (8))){
var inst_59015 = (state_59033[(7)]);
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59033__$1,(11),out,inst_59015);
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
});})(c__47652__auto___59058,out))
;
return ((function (switch__47587__auto__,c__47652__auto___59058,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_59050 = [null,null,null,null,null,null,null,null,null];
(statearr_59050[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_59050[(1)] = (1));

return statearr_59050;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_59033){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59051){if((e59051 instanceof Object)){
var ex__47591__auto__ = e59051;
var statearr_59052_59069 = state_59033;
(statearr_59052_59069[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59070 = state_59033;
state_59033 = G__59070;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_59033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_59033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___59058,out))
})();
var state__47654__auto__ = (function (){var statearr_59053 = f__47653__auto__.call(null);
(statearr_59053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___59058);

return statearr_59053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___59058,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args59071 = [];
var len__45375__auto___59074 = arguments.length;
var i__45376__auto___59075 = (0);
while(true){
if((i__45376__auto___59075 < len__45375__auto___59074)){
args59071.push((arguments[i__45376__auto___59075]));

var G__59076 = (i__45376__auto___59075 + (1));
i__45376__auto___59075 = G__59076;
continue;
} else {
}
break;
}

var G__59073 = args59071.length;
switch (G__59073) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59071.length)].join('')));

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
var c__47652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto__){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto__){
return (function (state_59243){
var state_val_59244 = (state_59243[(1)]);
if((state_val_59244 === (7))){
var inst_59239 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
var statearr_59245_59286 = state_59243__$1;
(statearr_59245_59286[(2)] = inst_59239);

(statearr_59245_59286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (20))){
var inst_59209 = (state_59243[(7)]);
var inst_59220 = (state_59243[(2)]);
var inst_59221 = cljs.core.next.call(null,inst_59209);
var inst_59195 = inst_59221;
var inst_59196 = null;
var inst_59197 = (0);
var inst_59198 = (0);
var state_59243__$1 = (function (){var statearr_59246 = state_59243;
(statearr_59246[(8)] = inst_59198);

(statearr_59246[(9)] = inst_59197);

(statearr_59246[(10)] = inst_59196);

(statearr_59246[(11)] = inst_59220);

(statearr_59246[(12)] = inst_59195);

return statearr_59246;
})();
var statearr_59247_59287 = state_59243__$1;
(statearr_59247_59287[(2)] = null);

(statearr_59247_59287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (1))){
var state_59243__$1 = state_59243;
var statearr_59248_59288 = state_59243__$1;
(statearr_59248_59288[(2)] = null);

(statearr_59248_59288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (4))){
var inst_59184 = (state_59243[(13)]);
var inst_59184__$1 = (state_59243[(2)]);
var inst_59185 = (inst_59184__$1 == null);
var state_59243__$1 = (function (){var statearr_59249 = state_59243;
(statearr_59249[(13)] = inst_59184__$1);

return statearr_59249;
})();
if(cljs.core.truth_(inst_59185)){
var statearr_59250_59289 = state_59243__$1;
(statearr_59250_59289[(1)] = (5));

} else {
var statearr_59251_59290 = state_59243__$1;
(statearr_59251_59290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (15))){
var state_59243__$1 = state_59243;
var statearr_59255_59291 = state_59243__$1;
(statearr_59255_59291[(2)] = null);

(statearr_59255_59291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (21))){
var state_59243__$1 = state_59243;
var statearr_59256_59292 = state_59243__$1;
(statearr_59256_59292[(2)] = null);

(statearr_59256_59292[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (13))){
var inst_59198 = (state_59243[(8)]);
var inst_59197 = (state_59243[(9)]);
var inst_59196 = (state_59243[(10)]);
var inst_59195 = (state_59243[(12)]);
var inst_59205 = (state_59243[(2)]);
var inst_59206 = (inst_59198 + (1));
var tmp59252 = inst_59197;
var tmp59253 = inst_59196;
var tmp59254 = inst_59195;
var inst_59195__$1 = tmp59254;
var inst_59196__$1 = tmp59253;
var inst_59197__$1 = tmp59252;
var inst_59198__$1 = inst_59206;
var state_59243__$1 = (function (){var statearr_59257 = state_59243;
(statearr_59257[(14)] = inst_59205);

(statearr_59257[(8)] = inst_59198__$1);

(statearr_59257[(9)] = inst_59197__$1);

(statearr_59257[(10)] = inst_59196__$1);

(statearr_59257[(12)] = inst_59195__$1);

return statearr_59257;
})();
var statearr_59258_59293 = state_59243__$1;
(statearr_59258_59293[(2)] = null);

(statearr_59258_59293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (22))){
var state_59243__$1 = state_59243;
var statearr_59259_59294 = state_59243__$1;
(statearr_59259_59294[(2)] = null);

(statearr_59259_59294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (6))){
var inst_59184 = (state_59243[(13)]);
var inst_59193 = f.call(null,inst_59184);
var inst_59194 = cljs.core.seq.call(null,inst_59193);
var inst_59195 = inst_59194;
var inst_59196 = null;
var inst_59197 = (0);
var inst_59198 = (0);
var state_59243__$1 = (function (){var statearr_59260 = state_59243;
(statearr_59260[(8)] = inst_59198);

(statearr_59260[(9)] = inst_59197);

(statearr_59260[(10)] = inst_59196);

(statearr_59260[(12)] = inst_59195);

return statearr_59260;
})();
var statearr_59261_59295 = state_59243__$1;
(statearr_59261_59295[(2)] = null);

(statearr_59261_59295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (17))){
var inst_59209 = (state_59243[(7)]);
var inst_59213 = cljs.core.chunk_first.call(null,inst_59209);
var inst_59214 = cljs.core.chunk_rest.call(null,inst_59209);
var inst_59215 = cljs.core.count.call(null,inst_59213);
var inst_59195 = inst_59214;
var inst_59196 = inst_59213;
var inst_59197 = inst_59215;
var inst_59198 = (0);
var state_59243__$1 = (function (){var statearr_59262 = state_59243;
(statearr_59262[(8)] = inst_59198);

(statearr_59262[(9)] = inst_59197);

(statearr_59262[(10)] = inst_59196);

(statearr_59262[(12)] = inst_59195);

return statearr_59262;
})();
var statearr_59263_59296 = state_59243__$1;
(statearr_59263_59296[(2)] = null);

(statearr_59263_59296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (3))){
var inst_59241 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59243__$1,inst_59241);
} else {
if((state_val_59244 === (12))){
var inst_59229 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
var statearr_59264_59297 = state_59243__$1;
(statearr_59264_59297[(2)] = inst_59229);

(statearr_59264_59297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (2))){
var state_59243__$1 = state_59243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59243__$1,(4),in$);
} else {
if((state_val_59244 === (23))){
var inst_59237 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
var statearr_59265_59298 = state_59243__$1;
(statearr_59265_59298[(2)] = inst_59237);

(statearr_59265_59298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (19))){
var inst_59224 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
var statearr_59266_59299 = state_59243__$1;
(statearr_59266_59299[(2)] = inst_59224);

(statearr_59266_59299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (11))){
var inst_59209 = (state_59243[(7)]);
var inst_59195 = (state_59243[(12)]);
var inst_59209__$1 = cljs.core.seq.call(null,inst_59195);
var state_59243__$1 = (function (){var statearr_59267 = state_59243;
(statearr_59267[(7)] = inst_59209__$1);

return statearr_59267;
})();
if(inst_59209__$1){
var statearr_59268_59300 = state_59243__$1;
(statearr_59268_59300[(1)] = (14));

} else {
var statearr_59269_59301 = state_59243__$1;
(statearr_59269_59301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (9))){
var inst_59231 = (state_59243[(2)]);
var inst_59232 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59243__$1 = (function (){var statearr_59270 = state_59243;
(statearr_59270[(15)] = inst_59231);

return statearr_59270;
})();
if(cljs.core.truth_(inst_59232)){
var statearr_59271_59302 = state_59243__$1;
(statearr_59271_59302[(1)] = (21));

} else {
var statearr_59272_59303 = state_59243__$1;
(statearr_59272_59303[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (5))){
var inst_59187 = cljs.core.async.close_BANG_.call(null,out);
var state_59243__$1 = state_59243;
var statearr_59273_59304 = state_59243__$1;
(statearr_59273_59304[(2)] = inst_59187);

(statearr_59273_59304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (14))){
var inst_59209 = (state_59243[(7)]);
var inst_59211 = cljs.core.chunked_seq_QMARK_.call(null,inst_59209);
var state_59243__$1 = state_59243;
if(inst_59211){
var statearr_59274_59305 = state_59243__$1;
(statearr_59274_59305[(1)] = (17));

} else {
var statearr_59275_59306 = state_59243__$1;
(statearr_59275_59306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (16))){
var inst_59227 = (state_59243[(2)]);
var state_59243__$1 = state_59243;
var statearr_59276_59307 = state_59243__$1;
(statearr_59276_59307[(2)] = inst_59227);

(statearr_59276_59307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59244 === (10))){
var inst_59198 = (state_59243[(8)]);
var inst_59196 = (state_59243[(10)]);
var inst_59203 = cljs.core._nth.call(null,inst_59196,inst_59198);
var state_59243__$1 = state_59243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59243__$1,(13),out,inst_59203);
} else {
if((state_val_59244 === (18))){
var inst_59209 = (state_59243[(7)]);
var inst_59218 = cljs.core.first.call(null,inst_59209);
var state_59243__$1 = state_59243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59243__$1,(20),out,inst_59218);
} else {
if((state_val_59244 === (8))){
var inst_59198 = (state_59243[(8)]);
var inst_59197 = (state_59243[(9)]);
var inst_59200 = (inst_59198 < inst_59197);
var inst_59201 = inst_59200;
var state_59243__$1 = state_59243;
if(cljs.core.truth_(inst_59201)){
var statearr_59277_59308 = state_59243__$1;
(statearr_59277_59308[(1)] = (10));

} else {
var statearr_59278_59309 = state_59243__$1;
(statearr_59278_59309[(1)] = (11));

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
});})(c__47652__auto__))
;
return ((function (switch__47587__auto__,c__47652__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____0 = (function (){
var statearr_59282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59282[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__);

(statearr_59282[(1)] = (1));

return statearr_59282;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____1 = (function (state_59243){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59283){if((e59283 instanceof Object)){
var ex__47591__auto__ = e59283;
var statearr_59284_59310 = state_59243;
(statearr_59284_59310[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59311 = state_59243;
state_59243 = G__59311;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__ = function(state_59243){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____1.call(this,state_59243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto__))
})();
var state__47654__auto__ = (function (){var statearr_59285 = f__47653__auto__.call(null);
(statearr_59285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto__);

return statearr_59285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto__))
);

return c__47652__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args59312 = [];
var len__45375__auto___59315 = arguments.length;
var i__45376__auto___59316 = (0);
while(true){
if((i__45376__auto___59316 < len__45375__auto___59315)){
args59312.push((arguments[i__45376__auto___59316]));

var G__59317 = (i__45376__auto___59316 + (1));
i__45376__auto___59316 = G__59317;
continue;
} else {
}
break;
}

var G__59314 = args59312.length;
switch (G__59314) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59312.length)].join('')));

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
var args59319 = [];
var len__45375__auto___59322 = arguments.length;
var i__45376__auto___59323 = (0);
while(true){
if((i__45376__auto___59323 < len__45375__auto___59322)){
args59319.push((arguments[i__45376__auto___59323]));

var G__59324 = (i__45376__auto___59323 + (1));
i__45376__auto___59323 = G__59324;
continue;
} else {
}
break;
}

var G__59321 = args59319.length;
switch (G__59321) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59319.length)].join('')));

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
var args59326 = [];
var len__45375__auto___59377 = arguments.length;
var i__45376__auto___59378 = (0);
while(true){
if((i__45376__auto___59378 < len__45375__auto___59377)){
args59326.push((arguments[i__45376__auto___59378]));

var G__59379 = (i__45376__auto___59378 + (1));
i__45376__auto___59378 = G__59379;
continue;
} else {
}
break;
}

var G__59328 = args59326.length;
switch (G__59328) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59326.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___59381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___59381,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___59381,out){
return (function (state_59352){
var state_val_59353 = (state_59352[(1)]);
if((state_val_59353 === (7))){
var inst_59347 = (state_59352[(2)]);
var state_59352__$1 = state_59352;
var statearr_59354_59382 = state_59352__$1;
(statearr_59354_59382[(2)] = inst_59347);

(statearr_59354_59382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (1))){
var inst_59329 = null;
var state_59352__$1 = (function (){var statearr_59355 = state_59352;
(statearr_59355[(7)] = inst_59329);

return statearr_59355;
})();
var statearr_59356_59383 = state_59352__$1;
(statearr_59356_59383[(2)] = null);

(statearr_59356_59383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (4))){
var inst_59332 = (state_59352[(8)]);
var inst_59332__$1 = (state_59352[(2)]);
var inst_59333 = (inst_59332__$1 == null);
var inst_59334 = cljs.core.not.call(null,inst_59333);
var state_59352__$1 = (function (){var statearr_59357 = state_59352;
(statearr_59357[(8)] = inst_59332__$1);

return statearr_59357;
})();
if(inst_59334){
var statearr_59358_59384 = state_59352__$1;
(statearr_59358_59384[(1)] = (5));

} else {
var statearr_59359_59385 = state_59352__$1;
(statearr_59359_59385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (6))){
var state_59352__$1 = state_59352;
var statearr_59360_59386 = state_59352__$1;
(statearr_59360_59386[(2)] = null);

(statearr_59360_59386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (3))){
var inst_59349 = (state_59352[(2)]);
var inst_59350 = cljs.core.async.close_BANG_.call(null,out);
var state_59352__$1 = (function (){var statearr_59361 = state_59352;
(statearr_59361[(9)] = inst_59349);

return statearr_59361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59352__$1,inst_59350);
} else {
if((state_val_59353 === (2))){
var state_59352__$1 = state_59352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59352__$1,(4),ch);
} else {
if((state_val_59353 === (11))){
var inst_59332 = (state_59352[(8)]);
var inst_59341 = (state_59352[(2)]);
var inst_59329 = inst_59332;
var state_59352__$1 = (function (){var statearr_59362 = state_59352;
(statearr_59362[(10)] = inst_59341);

(statearr_59362[(7)] = inst_59329);

return statearr_59362;
})();
var statearr_59363_59387 = state_59352__$1;
(statearr_59363_59387[(2)] = null);

(statearr_59363_59387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (9))){
var inst_59332 = (state_59352[(8)]);
var state_59352__$1 = state_59352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59352__$1,(11),out,inst_59332);
} else {
if((state_val_59353 === (5))){
var inst_59329 = (state_59352[(7)]);
var inst_59332 = (state_59352[(8)]);
var inst_59336 = cljs.core._EQ_.call(null,inst_59332,inst_59329);
var state_59352__$1 = state_59352;
if(inst_59336){
var statearr_59365_59388 = state_59352__$1;
(statearr_59365_59388[(1)] = (8));

} else {
var statearr_59366_59389 = state_59352__$1;
(statearr_59366_59389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (10))){
var inst_59344 = (state_59352[(2)]);
var state_59352__$1 = state_59352;
var statearr_59367_59390 = state_59352__$1;
(statearr_59367_59390[(2)] = inst_59344);

(statearr_59367_59390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59353 === (8))){
var inst_59329 = (state_59352[(7)]);
var tmp59364 = inst_59329;
var inst_59329__$1 = tmp59364;
var state_59352__$1 = (function (){var statearr_59368 = state_59352;
(statearr_59368[(7)] = inst_59329__$1);

return statearr_59368;
})();
var statearr_59369_59391 = state_59352__$1;
(statearr_59369_59391[(2)] = null);

(statearr_59369_59391[(1)] = (2));


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
});})(c__47652__auto___59381,out))
;
return ((function (switch__47587__auto__,c__47652__auto___59381,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_59373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59373[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_59373[(1)] = (1));

return statearr_59373;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_59352){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59374){if((e59374 instanceof Object)){
var ex__47591__auto__ = e59374;
var statearr_59375_59392 = state_59352;
(statearr_59375_59392[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59393 = state_59352;
state_59352 = G__59393;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_59352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_59352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___59381,out))
})();
var state__47654__auto__ = (function (){var statearr_59376 = f__47653__auto__.call(null);
(statearr_59376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___59381);

return statearr_59376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___59381,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args59394 = [];
var len__45375__auto___59464 = arguments.length;
var i__45376__auto___59465 = (0);
while(true){
if((i__45376__auto___59465 < len__45375__auto___59464)){
args59394.push((arguments[i__45376__auto___59465]));

var G__59466 = (i__45376__auto___59465 + (1));
i__45376__auto___59465 = G__59466;
continue;
} else {
}
break;
}

var G__59396 = args59394.length;
switch (G__59396) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59394.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___59468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___59468,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___59468,out){
return (function (state_59434){
var state_val_59435 = (state_59434[(1)]);
if((state_val_59435 === (7))){
var inst_59430 = (state_59434[(2)]);
var state_59434__$1 = state_59434;
var statearr_59436_59469 = state_59434__$1;
(statearr_59436_59469[(2)] = inst_59430);

(statearr_59436_59469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (1))){
var inst_59397 = (new Array(n));
var inst_59398 = inst_59397;
var inst_59399 = (0);
var state_59434__$1 = (function (){var statearr_59437 = state_59434;
(statearr_59437[(7)] = inst_59398);

(statearr_59437[(8)] = inst_59399);

return statearr_59437;
})();
var statearr_59438_59470 = state_59434__$1;
(statearr_59438_59470[(2)] = null);

(statearr_59438_59470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (4))){
var inst_59402 = (state_59434[(9)]);
var inst_59402__$1 = (state_59434[(2)]);
var inst_59403 = (inst_59402__$1 == null);
var inst_59404 = cljs.core.not.call(null,inst_59403);
var state_59434__$1 = (function (){var statearr_59439 = state_59434;
(statearr_59439[(9)] = inst_59402__$1);

return statearr_59439;
})();
if(inst_59404){
var statearr_59440_59471 = state_59434__$1;
(statearr_59440_59471[(1)] = (5));

} else {
var statearr_59441_59472 = state_59434__$1;
(statearr_59441_59472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (15))){
var inst_59424 = (state_59434[(2)]);
var state_59434__$1 = state_59434;
var statearr_59442_59473 = state_59434__$1;
(statearr_59442_59473[(2)] = inst_59424);

(statearr_59442_59473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (13))){
var state_59434__$1 = state_59434;
var statearr_59443_59474 = state_59434__$1;
(statearr_59443_59474[(2)] = null);

(statearr_59443_59474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (6))){
var inst_59399 = (state_59434[(8)]);
var inst_59420 = (inst_59399 > (0));
var state_59434__$1 = state_59434;
if(cljs.core.truth_(inst_59420)){
var statearr_59444_59475 = state_59434__$1;
(statearr_59444_59475[(1)] = (12));

} else {
var statearr_59445_59476 = state_59434__$1;
(statearr_59445_59476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (3))){
var inst_59432 = (state_59434[(2)]);
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59434__$1,inst_59432);
} else {
if((state_val_59435 === (12))){
var inst_59398 = (state_59434[(7)]);
var inst_59422 = cljs.core.vec.call(null,inst_59398);
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59434__$1,(15),out,inst_59422);
} else {
if((state_val_59435 === (2))){
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59434__$1,(4),ch);
} else {
if((state_val_59435 === (11))){
var inst_59414 = (state_59434[(2)]);
var inst_59415 = (new Array(n));
var inst_59398 = inst_59415;
var inst_59399 = (0);
var state_59434__$1 = (function (){var statearr_59446 = state_59434;
(statearr_59446[(7)] = inst_59398);

(statearr_59446[(10)] = inst_59414);

(statearr_59446[(8)] = inst_59399);

return statearr_59446;
})();
var statearr_59447_59477 = state_59434__$1;
(statearr_59447_59477[(2)] = null);

(statearr_59447_59477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (9))){
var inst_59398 = (state_59434[(7)]);
var inst_59412 = cljs.core.vec.call(null,inst_59398);
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59434__$1,(11),out,inst_59412);
} else {
if((state_val_59435 === (5))){
var inst_59407 = (state_59434[(11)]);
var inst_59398 = (state_59434[(7)]);
var inst_59402 = (state_59434[(9)]);
var inst_59399 = (state_59434[(8)]);
var inst_59406 = (inst_59398[inst_59399] = inst_59402);
var inst_59407__$1 = (inst_59399 + (1));
var inst_59408 = (inst_59407__$1 < n);
var state_59434__$1 = (function (){var statearr_59448 = state_59434;
(statearr_59448[(11)] = inst_59407__$1);

(statearr_59448[(12)] = inst_59406);

return statearr_59448;
})();
if(cljs.core.truth_(inst_59408)){
var statearr_59449_59478 = state_59434__$1;
(statearr_59449_59478[(1)] = (8));

} else {
var statearr_59450_59479 = state_59434__$1;
(statearr_59450_59479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (14))){
var inst_59427 = (state_59434[(2)]);
var inst_59428 = cljs.core.async.close_BANG_.call(null,out);
var state_59434__$1 = (function (){var statearr_59452 = state_59434;
(statearr_59452[(13)] = inst_59427);

return statearr_59452;
})();
var statearr_59453_59480 = state_59434__$1;
(statearr_59453_59480[(2)] = inst_59428);

(statearr_59453_59480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (10))){
var inst_59418 = (state_59434[(2)]);
var state_59434__$1 = state_59434;
var statearr_59454_59481 = state_59434__$1;
(statearr_59454_59481[(2)] = inst_59418);

(statearr_59454_59481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59435 === (8))){
var inst_59407 = (state_59434[(11)]);
var inst_59398 = (state_59434[(7)]);
var tmp59451 = inst_59398;
var inst_59398__$1 = tmp59451;
var inst_59399 = inst_59407;
var state_59434__$1 = (function (){var statearr_59455 = state_59434;
(statearr_59455[(7)] = inst_59398__$1);

(statearr_59455[(8)] = inst_59399);

return statearr_59455;
})();
var statearr_59456_59482 = state_59434__$1;
(statearr_59456_59482[(2)] = null);

(statearr_59456_59482[(1)] = (2));


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
});})(c__47652__auto___59468,out))
;
return ((function (switch__47587__auto__,c__47652__auto___59468,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_59460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59460[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_59460[(1)] = (1));

return statearr_59460;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_59434){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59461){if((e59461 instanceof Object)){
var ex__47591__auto__ = e59461;
var statearr_59462_59483 = state_59434;
(statearr_59462_59483[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59484 = state_59434;
state_59434 = G__59484;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_59434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_59434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___59468,out))
})();
var state__47654__auto__ = (function (){var statearr_59463 = f__47653__auto__.call(null);
(statearr_59463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___59468);

return statearr_59463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___59468,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args59485 = [];
var len__45375__auto___59559 = arguments.length;
var i__45376__auto___59560 = (0);
while(true){
if((i__45376__auto___59560 < len__45375__auto___59559)){
args59485.push((arguments[i__45376__auto___59560]));

var G__59561 = (i__45376__auto___59560 + (1));
i__45376__auto___59560 = G__59561;
continue;
} else {
}
break;
}

var G__59487 = args59485.length;
switch (G__59487) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59485.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47652__auto___59563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47652__auto___59563,out){
return (function (){
var f__47653__auto__ = (function (){var switch__47587__auto__ = ((function (c__47652__auto___59563,out){
return (function (state_59529){
var state_val_59530 = (state_59529[(1)]);
if((state_val_59530 === (7))){
var inst_59525 = (state_59529[(2)]);
var state_59529__$1 = state_59529;
var statearr_59531_59564 = state_59529__$1;
(statearr_59531_59564[(2)] = inst_59525);

(statearr_59531_59564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (1))){
var inst_59488 = [];
var inst_59489 = inst_59488;
var inst_59490 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59529__$1 = (function (){var statearr_59532 = state_59529;
(statearr_59532[(7)] = inst_59489);

(statearr_59532[(8)] = inst_59490);

return statearr_59532;
})();
var statearr_59533_59565 = state_59529__$1;
(statearr_59533_59565[(2)] = null);

(statearr_59533_59565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (4))){
var inst_59493 = (state_59529[(9)]);
var inst_59493__$1 = (state_59529[(2)]);
var inst_59494 = (inst_59493__$1 == null);
var inst_59495 = cljs.core.not.call(null,inst_59494);
var state_59529__$1 = (function (){var statearr_59534 = state_59529;
(statearr_59534[(9)] = inst_59493__$1);

return statearr_59534;
})();
if(inst_59495){
var statearr_59535_59566 = state_59529__$1;
(statearr_59535_59566[(1)] = (5));

} else {
var statearr_59536_59567 = state_59529__$1;
(statearr_59536_59567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (15))){
var inst_59519 = (state_59529[(2)]);
var state_59529__$1 = state_59529;
var statearr_59537_59568 = state_59529__$1;
(statearr_59537_59568[(2)] = inst_59519);

(statearr_59537_59568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (13))){
var state_59529__$1 = state_59529;
var statearr_59538_59569 = state_59529__$1;
(statearr_59538_59569[(2)] = null);

(statearr_59538_59569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (6))){
var inst_59489 = (state_59529[(7)]);
var inst_59514 = inst_59489.length;
var inst_59515 = (inst_59514 > (0));
var state_59529__$1 = state_59529;
if(cljs.core.truth_(inst_59515)){
var statearr_59539_59570 = state_59529__$1;
(statearr_59539_59570[(1)] = (12));

} else {
var statearr_59540_59571 = state_59529__$1;
(statearr_59540_59571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (3))){
var inst_59527 = (state_59529[(2)]);
var state_59529__$1 = state_59529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59529__$1,inst_59527);
} else {
if((state_val_59530 === (12))){
var inst_59489 = (state_59529[(7)]);
var inst_59517 = cljs.core.vec.call(null,inst_59489);
var state_59529__$1 = state_59529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59529__$1,(15),out,inst_59517);
} else {
if((state_val_59530 === (2))){
var state_59529__$1 = state_59529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59529__$1,(4),ch);
} else {
if((state_val_59530 === (11))){
var inst_59497 = (state_59529[(10)]);
var inst_59493 = (state_59529[(9)]);
var inst_59507 = (state_59529[(2)]);
var inst_59508 = [];
var inst_59509 = inst_59508.push(inst_59493);
var inst_59489 = inst_59508;
var inst_59490 = inst_59497;
var state_59529__$1 = (function (){var statearr_59541 = state_59529;
(statearr_59541[(11)] = inst_59509);

(statearr_59541[(12)] = inst_59507);

(statearr_59541[(7)] = inst_59489);

(statearr_59541[(8)] = inst_59490);

return statearr_59541;
})();
var statearr_59542_59572 = state_59529__$1;
(statearr_59542_59572[(2)] = null);

(statearr_59542_59572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (9))){
var inst_59489 = (state_59529[(7)]);
var inst_59505 = cljs.core.vec.call(null,inst_59489);
var state_59529__$1 = state_59529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59529__$1,(11),out,inst_59505);
} else {
if((state_val_59530 === (5))){
var inst_59497 = (state_59529[(10)]);
var inst_59493 = (state_59529[(9)]);
var inst_59490 = (state_59529[(8)]);
var inst_59497__$1 = f.call(null,inst_59493);
var inst_59498 = cljs.core._EQ_.call(null,inst_59497__$1,inst_59490);
var inst_59499 = cljs.core.keyword_identical_QMARK_.call(null,inst_59490,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59500 = (inst_59498) || (inst_59499);
var state_59529__$1 = (function (){var statearr_59543 = state_59529;
(statearr_59543[(10)] = inst_59497__$1);

return statearr_59543;
})();
if(cljs.core.truth_(inst_59500)){
var statearr_59544_59573 = state_59529__$1;
(statearr_59544_59573[(1)] = (8));

} else {
var statearr_59545_59574 = state_59529__$1;
(statearr_59545_59574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (14))){
var inst_59522 = (state_59529[(2)]);
var inst_59523 = cljs.core.async.close_BANG_.call(null,out);
var state_59529__$1 = (function (){var statearr_59547 = state_59529;
(statearr_59547[(13)] = inst_59522);

return statearr_59547;
})();
var statearr_59548_59575 = state_59529__$1;
(statearr_59548_59575[(2)] = inst_59523);

(statearr_59548_59575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (10))){
var inst_59512 = (state_59529[(2)]);
var state_59529__$1 = state_59529;
var statearr_59549_59576 = state_59529__$1;
(statearr_59549_59576[(2)] = inst_59512);

(statearr_59549_59576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59530 === (8))){
var inst_59497 = (state_59529[(10)]);
var inst_59493 = (state_59529[(9)]);
var inst_59489 = (state_59529[(7)]);
var inst_59502 = inst_59489.push(inst_59493);
var tmp59546 = inst_59489;
var inst_59489__$1 = tmp59546;
var inst_59490 = inst_59497;
var state_59529__$1 = (function (){var statearr_59550 = state_59529;
(statearr_59550[(14)] = inst_59502);

(statearr_59550[(7)] = inst_59489__$1);

(statearr_59550[(8)] = inst_59490);

return statearr_59550;
})();
var statearr_59551_59577 = state_59529__$1;
(statearr_59551_59577[(2)] = null);

(statearr_59551_59577[(1)] = (2));


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
});})(c__47652__auto___59563,out))
;
return ((function (switch__47587__auto__,c__47652__auto___59563,out){
return (function() {
var cljs$core$async$state_machine__47588__auto__ = null;
var cljs$core$async$state_machine__47588__auto____0 = (function (){
var statearr_59555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59555[(0)] = cljs$core$async$state_machine__47588__auto__);

(statearr_59555[(1)] = (1));

return statearr_59555;
});
var cljs$core$async$state_machine__47588__auto____1 = (function (state_59529){
while(true){
var ret_value__47589__auto__ = (function (){try{while(true){
var result__47590__auto__ = switch__47587__auto__.call(null,state_59529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47590__auto__;
}
break;
}
}catch (e59556){if((e59556 instanceof Object)){
var ex__47591__auto__ = e59556;
var statearr_59557_59578 = state_59529;
(statearr_59557_59578[(5)] = ex__47591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59579 = state_59529;
state_59529 = G__59579;
continue;
} else {
return ret_value__47589__auto__;
}
break;
}
});
cljs$core$async$state_machine__47588__auto__ = function(state_59529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47588__auto____1.call(this,state_59529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47588__auto____0;
cljs$core$async$state_machine__47588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47588__auto____1;
return cljs$core$async$state_machine__47588__auto__;
})()
;})(switch__47587__auto__,c__47652__auto___59563,out))
})();
var state__47654__auto__ = (function (){var statearr_59558 = f__47653__auto__.call(null);
(statearr_59558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47652__auto___59563);

return statearr_59558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47654__auto__);
});})(c__47652__auto___59563,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476929165111