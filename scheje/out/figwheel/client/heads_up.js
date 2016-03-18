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
var len__14245__auto___37185 = arguments.length;
var i__14246__auto___37186 = (0);
while(true){
if((i__14246__auto___37186 < len__14245__auto___37185)){
args__14252__auto__.push((arguments[i__14246__auto___37186]));

var G__37187 = (i__14246__auto___37186 + (1));
i__14246__auto___37186 = G__37187;
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
var seq__37177_37188 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37178_37189 = null;
var count__37179_37190 = (0);
var i__37180_37191 = (0);
while(true){
if((i__37180_37191 < count__37179_37190)){
var k_37192 = cljs.core._nth.call(null,chunk__37178_37189,i__37180_37191);
e.setAttribute(cljs.core.name.call(null,k_37192),cljs.core.get.call(null,attrs,k_37192));

var G__37193 = seq__37177_37188;
var G__37194 = chunk__37178_37189;
var G__37195 = count__37179_37190;
var G__37196 = (i__37180_37191 + (1));
seq__37177_37188 = G__37193;
chunk__37178_37189 = G__37194;
count__37179_37190 = G__37195;
i__37180_37191 = G__37196;
continue;
} else {
var temp__4657__auto___37197 = cljs.core.seq.call(null,seq__37177_37188);
if(temp__4657__auto___37197){
var seq__37177_37198__$1 = temp__4657__auto___37197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37198__$1)){
var c__13990__auto___37199 = cljs.core.chunk_first.call(null,seq__37177_37198__$1);
var G__37200 = cljs.core.chunk_rest.call(null,seq__37177_37198__$1);
var G__37201 = c__13990__auto___37199;
var G__37202 = cljs.core.count.call(null,c__13990__auto___37199);
var G__37203 = (0);
seq__37177_37188 = G__37200;
chunk__37178_37189 = G__37201;
count__37179_37190 = G__37202;
i__37180_37191 = G__37203;
continue;
} else {
var k_37204 = cljs.core.first.call(null,seq__37177_37198__$1);
e.setAttribute(cljs.core.name.call(null,k_37204),cljs.core.get.call(null,attrs,k_37204));

var G__37205 = cljs.core.next.call(null,seq__37177_37198__$1);
var G__37206 = null;
var G__37207 = (0);
var G__37208 = (0);
seq__37177_37188 = G__37205;
chunk__37178_37189 = G__37206;
count__37179_37190 = G__37207;
i__37180_37191 = G__37208;
continue;
}
} else {
}
}
break;
}

var seq__37181_37209 = cljs.core.seq.call(null,children);
var chunk__37182_37210 = null;
var count__37183_37211 = (0);
var i__37184_37212 = (0);
while(true){
if((i__37184_37212 < count__37183_37211)){
var ch_37213 = cljs.core._nth.call(null,chunk__37182_37210,i__37184_37212);
e.appendChild(ch_37213);

var G__37214 = seq__37181_37209;
var G__37215 = chunk__37182_37210;
var G__37216 = count__37183_37211;
var G__37217 = (i__37184_37212 + (1));
seq__37181_37209 = G__37214;
chunk__37182_37210 = G__37215;
count__37183_37211 = G__37216;
i__37184_37212 = G__37217;
continue;
} else {
var temp__4657__auto___37218 = cljs.core.seq.call(null,seq__37181_37209);
if(temp__4657__auto___37218){
var seq__37181_37219__$1 = temp__4657__auto___37218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181_37219__$1)){
var c__13990__auto___37220 = cljs.core.chunk_first.call(null,seq__37181_37219__$1);
var G__37221 = cljs.core.chunk_rest.call(null,seq__37181_37219__$1);
var G__37222 = c__13990__auto___37220;
var G__37223 = cljs.core.count.call(null,c__13990__auto___37220);
var G__37224 = (0);
seq__37181_37209 = G__37221;
chunk__37182_37210 = G__37222;
count__37183_37211 = G__37223;
i__37184_37212 = G__37224;
continue;
} else {
var ch_37225 = cljs.core.first.call(null,seq__37181_37219__$1);
e.appendChild(ch_37225);

var G__37226 = cljs.core.next.call(null,seq__37181_37219__$1);
var G__37227 = null;
var G__37228 = (0);
var G__37229 = (0);
seq__37181_37209 = G__37226;
chunk__37182_37210 = G__37227;
count__37183_37211 = G__37228;
i__37184_37212 = G__37229;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37174){
var G__37175 = cljs.core.first.call(null,seq37174);
var seq37174__$1 = cljs.core.next.call(null,seq37174);
var G__37176 = cljs.core.first.call(null,seq37174__$1);
var seq37174__$2 = cljs.core.next.call(null,seq37174__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37175,G__37176,seq37174__$2);
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
var el_37230 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_37230.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37230.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37230.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37230);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37231,st_map){
var map__37236 = p__37231;
var map__37236__$1 = ((((!((map__37236 == null)))?((((map__37236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37236):map__37236);
var container_el = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37236,map__37236__$1,container_el){
return (function (p__37238){
var vec__37239 = p__37238;
var k = cljs.core.nth.call(null,vec__37239,(0),null);
var v = cljs.core.nth.call(null,vec__37239,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37236,map__37236__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37240,dom_str){
var map__37243 = p__37240;
var map__37243__$1 = ((((!((map__37243 == null)))?((((map__37243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37243):map__37243);
var c = map__37243__$1;
var content_area_el = cljs.core.get.call(null,map__37243__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37245){
var map__37248 = p__37245;
var map__37248__$1 = ((((!((map__37248 == null)))?((((map__37248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37248):map__37248);
var content_area_el = cljs.core.get.call(null,map__37248__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_37291){
var state_val_37292 = (state_37291[(1)]);
if((state_val_37292 === (1))){
var inst_37276 = (state_37291[(7)]);
var inst_37276__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37277 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37278 = ["10px","10px","100%","68px","1.0"];
var inst_37279 = cljs.core.PersistentHashMap.fromArrays(inst_37277,inst_37278);
var inst_37280 = cljs.core.merge.call(null,inst_37279,style);
var inst_37281 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37276__$1,inst_37280);
var inst_37282 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37276__$1,msg);
var inst_37283 = cljs.core.async.timeout.call(null,(300));
var state_37291__$1 = (function (){var statearr_37293 = state_37291;
(statearr_37293[(7)] = inst_37276__$1);

(statearr_37293[(8)] = inst_37281);

(statearr_37293[(9)] = inst_37282);

return statearr_37293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37291__$1,(2),inst_37283);
} else {
if((state_val_37292 === (2))){
var inst_37276 = (state_37291[(7)]);
var inst_37285 = (state_37291[(2)]);
var inst_37286 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37287 = ["auto"];
var inst_37288 = cljs.core.PersistentHashMap.fromArrays(inst_37286,inst_37287);
var inst_37289 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37276,inst_37288);
var state_37291__$1 = (function (){var statearr_37294 = state_37291;
(statearr_37294[(10)] = inst_37285);

return statearr_37294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37291__$1,inst_37289);
} else {
return null;
}
}
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____0 = (function (){
var statearr_37298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37298[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__);

(statearr_37298[(1)] = (1));

return statearr_37298;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____1 = (function (state_37291){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_37291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e37299){if((e37299 instanceof Object)){
var ex__15602__auto__ = e37299;
var statearr_37300_37302 = state_37291;
(statearr_37300_37302[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37303 = state_37291;
state_37291 = G__37303;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__ = function(state_37291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____1.call(this,state_37291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_37301 = f__15620__auto__.call(null);
(statearr_37301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
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
var vec__37305 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__37305,(0),null);
var ln = cljs.core.nth.call(null,vec__37305,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__37308 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__37308,(0),null);
var file_line = cljs.core.nth.call(null,vec__37308,(1),null);
var file_column = cljs.core.nth.call(null,vec__37308,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__37308,file_name,file_line,file_column){
return (function (p1__37306_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__37306_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__37308,file_name,file_line,file_column))
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
var map__37311 = figwheel.client.heads_up.ensure_container.call(null);
var map__37311__$1 = ((((!((map__37311 == null)))?((((map__37311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37311):map__37311);
var content_area_el = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_37359){
var state_val_37360 = (state_37359[(1)]);
if((state_val_37360 === (1))){
var inst_37342 = (state_37359[(7)]);
var inst_37342__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37343 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37344 = ["0.0"];
var inst_37345 = cljs.core.PersistentHashMap.fromArrays(inst_37343,inst_37344);
var inst_37346 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37342__$1,inst_37345);
var inst_37347 = cljs.core.async.timeout.call(null,(300));
var state_37359__$1 = (function (){var statearr_37361 = state_37359;
(statearr_37361[(8)] = inst_37346);

(statearr_37361[(7)] = inst_37342__$1);

return statearr_37361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37359__$1,(2),inst_37347);
} else {
if((state_val_37360 === (2))){
var inst_37342 = (state_37359[(7)]);
var inst_37349 = (state_37359[(2)]);
var inst_37350 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37351 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37352 = cljs.core.PersistentHashMap.fromArrays(inst_37350,inst_37351);
var inst_37353 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37342,inst_37352);
var inst_37354 = cljs.core.async.timeout.call(null,(200));
var state_37359__$1 = (function (){var statearr_37362 = state_37359;
(statearr_37362[(9)] = inst_37349);

(statearr_37362[(10)] = inst_37353);

return statearr_37362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37359__$1,(3),inst_37354);
} else {
if((state_val_37360 === (3))){
var inst_37342 = (state_37359[(7)]);
var inst_37356 = (state_37359[(2)]);
var inst_37357 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37342,"");
var state_37359__$1 = (function (){var statearr_37363 = state_37359;
(statearr_37363[(11)] = inst_37356);

return statearr_37363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37359__$1,inst_37357);
} else {
return null;
}
}
}
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__15599__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__15599__auto____0 = (function (){
var statearr_37367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37367[(0)] = figwheel$client$heads_up$clear_$_state_machine__15599__auto__);

(statearr_37367[(1)] = (1));

return statearr_37367;
});
var figwheel$client$heads_up$clear_$_state_machine__15599__auto____1 = (function (state_37359){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_37359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e37368){if((e37368 instanceof Object)){
var ex__15602__auto__ = e37368;
var statearr_37369_37371 = state_37359;
(statearr_37369_37371[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37372 = state_37359;
state_37359 = G__37372;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__15599__auto__ = function(state_37359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__15599__auto____1.call(this,state_37359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__15599__auto____0;
figwheel$client$heads_up$clear_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__15599__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_37370 = f__15620__auto__.call(null);
(statearr_37370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15619__auto__){
return (function (){
var f__15620__auto__ = (function (){var switch__15598__auto__ = ((function (c__15619__auto__){
return (function (state_37404){
var state_val_37405 = (state_37404[(1)]);
if((state_val_37405 === (1))){
var inst_37394 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(2),inst_37394);
} else {
if((state_val_37405 === (2))){
var inst_37396 = (state_37404[(2)]);
var inst_37397 = cljs.core.async.timeout.call(null,(400));
var state_37404__$1 = (function (){var statearr_37406 = state_37404;
(statearr_37406[(7)] = inst_37396);

return statearr_37406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(3),inst_37397);
} else {
if((state_val_37405 === (3))){
var inst_37399 = (state_37404[(2)]);
var inst_37400 = figwheel.client.heads_up.clear.call(null);
var state_37404__$1 = (function (){var statearr_37407 = state_37404;
(statearr_37407[(8)] = inst_37399);

return statearr_37407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(4),inst_37400);
} else {
if((state_val_37405 === (4))){
var inst_37402 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37404__$1,inst_37402);
} else {
return null;
}
}
}
}
});})(c__15619__auto__))
;
return ((function (switch__15598__auto__,c__15619__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____0 = (function (){
var statearr_37411 = [null,null,null,null,null,null,null,null,null];
(statearr_37411[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__);

(statearr_37411[(1)] = (1));

return statearr_37411;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____1 = (function (state_37404){
while(true){
var ret_value__15600__auto__ = (function (){try{while(true){
var result__15601__auto__ = switch__15598__auto__.call(null,state_37404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15601__auto__;
}
break;
}
}catch (e37412){if((e37412 instanceof Object)){
var ex__15602__auto__ = e37412;
var statearr_37413_37415 = state_37404;
(statearr_37413_37415[(5)] = ex__15602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37416 = state_37404;
state_37404 = G__37416;
continue;
} else {
return ret_value__15600__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__ = function(state_37404){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____1.call(this,state_37404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__15599__auto__;
})()
;})(switch__15598__auto__,c__15619__auto__))
})();
var state__15621__auto__ = (function (){var statearr_37414 = f__15620__auto__.call(null);
(statearr_37414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15619__auto__);

return statearr_37414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(c__15619__auto__))
);

return c__15619__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1458338370315