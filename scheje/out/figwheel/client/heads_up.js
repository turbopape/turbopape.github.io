// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__14252__auto__ = [];
var len__14245__auto___21383 = arguments.length;
var i__14246__auto___21384 = (0);
while(true){
if((i__14246__auto___21384 < len__14245__auto___21383)){
args__14252__auto__.push((arguments[i__14246__auto___21384]));

var G__21385 = (i__14246__auto___21384 + (1));
i__14246__auto___21384 = G__21385;
continue;
} else {
}
break;
}

var argseq__14253__auto__ = ((((2) < args__14252__auto__.length))?(new cljs.core.IndexedSeq(args__14252__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14253__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21375_21386 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21376_21387 = null;
var count__21377_21388 = (0);
var i__21378_21389 = (0);
while(true){
if((i__21378_21389 < count__21377_21388)){
var k_21390 = cljs.core._nth.call(null,chunk__21376_21387,i__21378_21389);
e.setAttribute(cljs.core.name.call(null,k_21390),cljs.core.get.call(null,attrs,k_21390));

var G__21391 = seq__21375_21386;
var G__21392 = chunk__21376_21387;
var G__21393 = count__21377_21388;
var G__21394 = (i__21378_21389 + (1));
seq__21375_21386 = G__21391;
chunk__21376_21387 = G__21392;
count__21377_21388 = G__21393;
i__21378_21389 = G__21394;
continue;
} else {
var temp__4657__auto___21395 = cljs.core.seq.call(null,seq__21375_21386);
if(temp__4657__auto___21395){
var seq__21375_21396__$1 = temp__4657__auto___21395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21375_21396__$1)){
var c__13990__auto___21397 = cljs.core.chunk_first.call(null,seq__21375_21396__$1);
var G__21398 = cljs.core.chunk_rest.call(null,seq__21375_21396__$1);
var G__21399 = c__13990__auto___21397;
var G__21400 = cljs.core.count.call(null,c__13990__auto___21397);
var G__21401 = (0);
seq__21375_21386 = G__21398;
chunk__21376_21387 = G__21399;
count__21377_21388 = G__21400;
i__21378_21389 = G__21401;
continue;
} else {
var k_21402 = cljs.core.first.call(null,seq__21375_21396__$1);
e.setAttribute(cljs.core.name.call(null,k_21402),cljs.core.get.call(null,attrs,k_21402));

var G__21403 = cljs.core.next.call(null,seq__21375_21396__$1);
var G__21404 = null;
var G__21405 = (0);
var G__21406 = (0);
seq__21375_21386 = G__21403;
chunk__21376_21387 = G__21404;
count__21377_21388 = G__21405;
i__21378_21389 = G__21406;
continue;
}
} else {
}
}
break;
}

var seq__21379_21407 = cljs.core.seq.call(null,children);
var chunk__21380_21408 = null;
var count__21381_21409 = (0);
var i__21382_21410 = (0);
while(true){
if((i__21382_21410 < count__21381_21409)){
var ch_21411 = cljs.core._nth.call(null,chunk__21380_21408,i__21382_21410);
e.appendChild(ch_21411);

var G__21412 = seq__21379_21407;
var G__21413 = chunk__21380_21408;
var G__21414 = count__21381_21409;
var G__21415 = (i__21382_21410 + (1));
seq__21379_21407 = G__21412;
chunk__21380_21408 = G__21413;
count__21381_21409 = G__21414;
i__21382_21410 = G__21415;
continue;
} else {
var temp__4657__auto___21416 = cljs.core.seq.call(null,seq__21379_21407);
if(temp__4657__auto___21416){
var seq__21379_21417__$1 = temp__4657__auto___21416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21379_21417__$1)){
var c__13990__auto___21418 = cljs.core.chunk_first.call(null,seq__21379_21417__$1);
var G__21419 = cljs.core.chunk_rest.call(null,seq__21379_21417__$1);
var G__21420 = c__13990__auto___21418;
var G__21421 = cljs.core.count.call(null,c__13990__auto___21418);
var G__21422 = (0);
seq__21379_21407 = G__21419;
chunk__21380_21408 = G__21420;
count__21381_21409 = G__21421;
i__21382_21410 = G__21422;
continue;
} else {
var ch_21423 = cljs.core.first.call(null,seq__21379_21417__$1);
e.appendChild(ch_21423);

var G__21424 = cljs.core.next.call(null,seq__21379_21417__$1);
var G__21425 = null;
var G__21426 = (0);
var G__21427 = (0);
seq__21379_21407 = G__21424;
chunk__21380_21408 = G__21425;
count__21381_21409 = G__21426;
i__21382_21410 = G__21427;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21372){
var G__21373 = cljs.core.first.call(null,seq21372);
var seq21372__$1 = cljs.core.next.call(null,seq21372);
var G__21374 = cljs.core.first.call(null,seq21372__$1);
var seq21372__$2 = cljs.core.next.call(null,seq21372__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21373,G__21374,seq21372__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__14100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14101__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14104__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__14100__auto__,prefer_table__14101__auto__,method_cache__14102__auto__,cached_hierarchy__14103__auto__,hierarchy__14104__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__14100__auto__,prefer_table__14101__auto__,method_cache__14102__auto__,cached_hierarchy__14103__auto__,hierarchy__14104__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14104__auto__,method_table__14100__auto__,prefer_table__14101__auto__,method_cache__14102__auto__,cached_hierarchy__14103__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21428 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21428.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21428.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_21428.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21428);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21429,st_map){
var map__21434 = p__21429;
var map__21434__$1 = ((((!((map__21434 == null)))?((((map__21434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21434):map__21434);
var container_el = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21434,map__21434__$1,container_el){
return (function (p__21436){
var vec__21437 = p__21436;
var k = cljs.core.nth.call(null,vec__21437,(0),null);
var v = cljs.core.nth.call(null,vec__21437,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21434,map__21434__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21438,dom_str){
var map__21441 = p__21438;
var map__21441__$1 = ((((!((map__21441 == null)))?((((map__21441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21441):map__21441);
var c = map__21441__$1;
var content_area_el = cljs.core.get.call(null,map__21441__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21443){
var map__21446 = p__21443;
var map__21446__$1 = ((((!((map__21446 == null)))?((((map__21446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21446):map__21446);
var content_area_el = cljs.core.get.call(null,map__21446__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_21489){
var state_val_21490 = (state_21489[(1)]);
if((state_val_21490 === (1))){
var inst_21474 = (state_21489[(7)]);
var inst_21474__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21475 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21476 = ["10px","10px","100%","68px","1.0"];
var inst_21477 = cljs.core.PersistentHashMap.fromArrays(inst_21475,inst_21476);
var inst_21478 = cljs.core.merge.call(null,inst_21477,style);
var inst_21479 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21474__$1,inst_21478);
var inst_21480 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21474__$1,msg);
var inst_21481 = cljs.core.async.timeout.call(null,(300));
var state_21489__$1 = (function (){var statearr_21491 = state_21489;
(statearr_21491[(8)] = inst_21479);

(statearr_21491[(9)] = inst_21480);

(statearr_21491[(7)] = inst_21474__$1);

return statearr_21491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(2),inst_21481);
} else {
if((state_val_21490 === (2))){
var inst_21474 = (state_21489[(7)]);
var inst_21483 = (state_21489[(2)]);
var inst_21484 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21485 = ["auto"];
var inst_21486 = cljs.core.PersistentHashMap.fromArrays(inst_21484,inst_21485);
var inst_21487 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21474,inst_21486);
var state_21489__$1 = (function (){var statearr_21492 = state_21489;
(statearr_21492[(10)] = inst_21483);

return statearr_21492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21489__$1,inst_21487);
} else {
return null;
}
}
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____0 = (function (){
var statearr_21496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21496[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__);

(statearr_21496[(1)] = (1));

return statearr_21496;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____1 = (function (state_21489){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_21489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e21497){if((e21497 instanceof Object)){
var ex__17287__auto__ = e21497;
var statearr_21498_21500 = state_21489;
(statearr_21498_21500[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21501 = state_21489;
state_21489 = G__21501;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__ = function(state_21489){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____1.call(this,state_21489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_21499 = f__17396__auto__.call(null);
(statearr_21499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_21499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21503 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__21503,(0),null);
var ln = cljs.core.nth.call(null,vec__21503,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21506 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21506,(0),null);
var file_line = cljs.core.nth.call(null,vec__21506,(1),null);
var file_column = cljs.core.nth.call(null,vec__21506,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21506,file_name,file_line,file_column){
return (function (p1__21504_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21504_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21506,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__13187__auto__ = file_line;
if(cljs.core.truth_(or__13187__auto__)){
return or__13187__auto__;
} else {
var and__13175__auto__ = cause;
if(cljs.core.truth_(and__13175__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__13175__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21509 = figwheel.client.heads_up.ensure_container.call(null);
var map__21509__$1 = ((((!((map__21509 == null)))?((((map__21509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21509):map__21509);
var content_area_el = cljs.core.get.call(null,map__21509__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_21557){
var state_val_21558 = (state_21557[(1)]);
if((state_val_21558 === (1))){
var inst_21540 = (state_21557[(7)]);
var inst_21540__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21541 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21542 = ["0.0"];
var inst_21543 = cljs.core.PersistentHashMap.fromArrays(inst_21541,inst_21542);
var inst_21544 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21540__$1,inst_21543);
var inst_21545 = cljs.core.async.timeout.call(null,(300));
var state_21557__$1 = (function (){var statearr_21559 = state_21557;
(statearr_21559[(7)] = inst_21540__$1);

(statearr_21559[(8)] = inst_21544);

return statearr_21559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21557__$1,(2),inst_21545);
} else {
if((state_val_21558 === (2))){
var inst_21540 = (state_21557[(7)]);
var inst_21547 = (state_21557[(2)]);
var inst_21548 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21549 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21550 = cljs.core.PersistentHashMap.fromArrays(inst_21548,inst_21549);
var inst_21551 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21540,inst_21550);
var inst_21552 = cljs.core.async.timeout.call(null,(200));
var state_21557__$1 = (function (){var statearr_21560 = state_21557;
(statearr_21560[(9)] = inst_21551);

(statearr_21560[(10)] = inst_21547);

return statearr_21560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21557__$1,(3),inst_21552);
} else {
if((state_val_21558 === (3))){
var inst_21540 = (state_21557[(7)]);
var inst_21554 = (state_21557[(2)]);
var inst_21555 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21540,"");
var state_21557__$1 = (function (){var statearr_21561 = state_21557;
(statearr_21561[(11)] = inst_21554);

return statearr_21561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21557__$1,inst_21555);
} else {
return null;
}
}
}
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__17284__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__17284__auto____0 = (function (){
var statearr_21565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21565[(0)] = figwheel$client$heads_up$clear_$_state_machine__17284__auto__);

(statearr_21565[(1)] = (1));

return statearr_21565;
});
var figwheel$client$heads_up$clear_$_state_machine__17284__auto____1 = (function (state_21557){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_21557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e21566){if((e21566 instanceof Object)){
var ex__17287__auto__ = e21566;
var statearr_21567_21569 = state_21557;
(statearr_21567_21569[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21570 = state_21557;
state_21557 = G__21570;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__17284__auto__ = function(state_21557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__17284__auto____1.call(this,state_21557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__17284__auto____0;
figwheel$client$heads_up$clear_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__17284__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_21568 = f__17396__auto__.call(null);
(statearr_21568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_21568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__17395__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17395__auto__){
return (function (){
var f__17396__auto__ = (function (){var switch__17283__auto__ = ((function (c__17395__auto__){
return (function (state_21602){
var state_val_21603 = (state_21602[(1)]);
if((state_val_21603 === (1))){
var inst_21592 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(2),inst_21592);
} else {
if((state_val_21603 === (2))){
var inst_21594 = (state_21602[(2)]);
var inst_21595 = cljs.core.async.timeout.call(null,(400));
var state_21602__$1 = (function (){var statearr_21604 = state_21602;
(statearr_21604[(7)] = inst_21594);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(3),inst_21595);
} else {
if((state_val_21603 === (3))){
var inst_21597 = (state_21602[(2)]);
var inst_21598 = figwheel.client.heads_up.clear.call(null);
var state_21602__$1 = (function (){var statearr_21605 = state_21602;
(statearr_21605[(8)] = inst_21597);

return statearr_21605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(4),inst_21598);
} else {
if((state_val_21603 === (4))){
var inst_21600 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21602__$1,inst_21600);
} else {
return null;
}
}
}
}
});})(c__17395__auto__))
;
return ((function (switch__17283__auto__,c__17395__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____0 = (function (){
var statearr_21609 = [null,null,null,null,null,null,null,null,null];
(statearr_21609[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__);

(statearr_21609[(1)] = (1));

return statearr_21609;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____1 = (function (state_21602){
while(true){
var ret_value__17285__auto__ = (function (){try{while(true){
var result__17286__auto__ = switch__17283__auto__.call(null,state_21602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17286__auto__;
}
break;
}
}catch (e21610){if((e21610 instanceof Object)){
var ex__17287__auto__ = e21610;
var statearr_21611_21613 = state_21602;
(statearr_21611_21613[(5)] = ex__17287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21614 = state_21602;
state_21602 = G__21614;
continue;
} else {
return ret_value__17285__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__ = function(state_21602){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____1.call(this,state_21602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__17284__auto__;
})()
;})(switch__17283__auto__,c__17395__auto__))
})();
var state__17397__auto__ = (function (){var statearr_21612 = f__17396__auto__.call(null);
(statearr_21612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17395__auto__);

return statearr_21612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17397__auto__);
});})(c__17395__auto__))
);

return c__17395__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1455204573690