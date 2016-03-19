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
var len__14245__auto___22181 = arguments.length;
var i__14246__auto___22182 = (0);
while(true){
if((i__14246__auto___22182 < len__14245__auto___22181)){
args__14252__auto__.push((arguments[i__14246__auto___22182]));

var G__22183 = (i__14246__auto___22182 + (1));
i__14246__auto___22182 = G__22183;
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
var seq__22173_22184 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22174_22185 = null;
var count__22175_22186 = (0);
var i__22176_22187 = (0);
while(true){
if((i__22176_22187 < count__22175_22186)){
var k_22188 = cljs.core._nth.call(null,chunk__22174_22185,i__22176_22187);
e.setAttribute(cljs.core.name.call(null,k_22188),cljs.core.get.call(null,attrs,k_22188));

var G__22189 = seq__22173_22184;
var G__22190 = chunk__22174_22185;
var G__22191 = count__22175_22186;
var G__22192 = (i__22176_22187 + (1));
seq__22173_22184 = G__22189;
chunk__22174_22185 = G__22190;
count__22175_22186 = G__22191;
i__22176_22187 = G__22192;
continue;
} else {
var temp__4657__auto___22193 = cljs.core.seq.call(null,seq__22173_22184);
if(temp__4657__auto___22193){
var seq__22173_22194__$1 = temp__4657__auto___22193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22173_22194__$1)){
var c__13990__auto___22195 = cljs.core.chunk_first.call(null,seq__22173_22194__$1);
var G__22196 = cljs.core.chunk_rest.call(null,seq__22173_22194__$1);
var G__22197 = c__13990__auto___22195;
var G__22198 = cljs.core.count.call(null,c__13990__auto___22195);
var G__22199 = (0);
seq__22173_22184 = G__22196;
chunk__22174_22185 = G__22197;
count__22175_22186 = G__22198;
i__22176_22187 = G__22199;
continue;
} else {
var k_22200 = cljs.core.first.call(null,seq__22173_22194__$1);
e.setAttribute(cljs.core.name.call(null,k_22200),cljs.core.get.call(null,attrs,k_22200));

var G__22201 = cljs.core.next.call(null,seq__22173_22194__$1);
var G__22202 = null;
var G__22203 = (0);
var G__22204 = (0);
seq__22173_22184 = G__22201;
chunk__22174_22185 = G__22202;
count__22175_22186 = G__22203;
i__22176_22187 = G__22204;
continue;
}
} else {
}
}
break;
}

var seq__22177_22205 = cljs.core.seq.call(null,children);
var chunk__22178_22206 = null;
var count__22179_22207 = (0);
var i__22180_22208 = (0);
while(true){
if((i__22180_22208 < count__22179_22207)){
var ch_22209 = cljs.core._nth.call(null,chunk__22178_22206,i__22180_22208);
e.appendChild(ch_22209);

var G__22210 = seq__22177_22205;
var G__22211 = chunk__22178_22206;
var G__22212 = count__22179_22207;
var G__22213 = (i__22180_22208 + (1));
seq__22177_22205 = G__22210;
chunk__22178_22206 = G__22211;
count__22179_22207 = G__22212;
i__22180_22208 = G__22213;
continue;
} else {
var temp__4657__auto___22214 = cljs.core.seq.call(null,seq__22177_22205);
if(temp__4657__auto___22214){
var seq__22177_22215__$1 = temp__4657__auto___22214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22177_22215__$1)){
var c__13990__auto___22216 = cljs.core.chunk_first.call(null,seq__22177_22215__$1);
var G__22217 = cljs.core.chunk_rest.call(null,seq__22177_22215__$1);
var G__22218 = c__13990__auto___22216;
var G__22219 = cljs.core.count.call(null,c__13990__auto___22216);
var G__22220 = (0);
seq__22177_22205 = G__22217;
chunk__22178_22206 = G__22218;
count__22179_22207 = G__22219;
i__22180_22208 = G__22220;
continue;
} else {
var ch_22221 = cljs.core.first.call(null,seq__22177_22215__$1);
e.appendChild(ch_22221);

var G__22222 = cljs.core.next.call(null,seq__22177_22215__$1);
var G__22223 = null;
var G__22224 = (0);
var G__22225 = (0);
seq__22177_22205 = G__22222;
chunk__22178_22206 = G__22223;
count__22179_22207 = G__22224;
i__22180_22208 = G__22225;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq22170){
var G__22171 = cljs.core.first.call(null,seq22170);
var seq22170__$1 = cljs.core.next.call(null,seq22170);
var G__22172 = cljs.core.first.call(null,seq22170__$1);
var seq22170__$2 = cljs.core.next.call(null,seq22170__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__22171,G__22172,seq22170__$2);
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
var el_22226 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_22226.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22226.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_22226.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22226);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__22227,st_map){
var map__22232 = p__22227;
var map__22232__$1 = ((((!((map__22232 == null)))?((((map__22232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22232):map__22232);
var container_el = cljs.core.get.call(null,map__22232__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22232,map__22232__$1,container_el){
return (function (p__22234){
var vec__22235 = p__22234;
var k = cljs.core.nth.call(null,vec__22235,(0),null);
var v = cljs.core.nth.call(null,vec__22235,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22232,map__22232__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__22236,dom_str){
var map__22239 = p__22236;
var map__22239__$1 = ((((!((map__22239 == null)))?((((map__22239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22239):map__22239);
var c = map__22239__$1;
var content_area_el = cljs.core.get.call(null,map__22239__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__22241){
var map__22244 = p__22241;
var map__22244__$1 = ((((!((map__22244 == null)))?((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);
var content_area_el = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_22287){
var state_val_22288 = (state_22287[(1)]);
if((state_val_22288 === (1))){
var inst_22272 = (state_22287[(7)]);
var inst_22272__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22273 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22274 = ["10px","10px","100%","68px","1.0"];
var inst_22275 = cljs.core.PersistentHashMap.fromArrays(inst_22273,inst_22274);
var inst_22276 = cljs.core.merge.call(null,inst_22275,style);
var inst_22277 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22272__$1,inst_22276);
var inst_22278 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22272__$1,msg);
var inst_22279 = cljs.core.async.timeout.call(null,(300));
var state_22287__$1 = (function (){var statearr_22289 = state_22287;
(statearr_22289[(7)] = inst_22272__$1);

(statearr_22289[(8)] = inst_22277);

(statearr_22289[(9)] = inst_22278);

return statearr_22289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22287__$1,(2),inst_22279);
} else {
if((state_val_22288 === (2))){
var inst_22272 = (state_22287[(7)]);
var inst_22281 = (state_22287[(2)]);
var inst_22282 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22283 = ["auto"];
var inst_22284 = cljs.core.PersistentHashMap.fromArrays(inst_22282,inst_22283);
var inst_22285 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22272,inst_22284);
var state_22287__$1 = (function (){var statearr_22290 = state_22287;
(statearr_22290[(10)] = inst_22281);

return statearr_22290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22287__$1,inst_22285);
} else {
return null;
}
}
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____0 = (function (){
var statearr_22294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22294[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__);

(statearr_22294[(1)] = (1));

return statearr_22294;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____1 = (function (state_22287){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_22287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e22295){if((e22295 instanceof Object)){
var ex__18085__auto__ = e22295;
var statearr_22296_22298 = state_22287;
(statearr_22296_22298[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22299 = state_22287;
state_22287 = G__22299;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__ = function(state_22287){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____1.call(this,state_22287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_22297 = f__18194__auto__.call(null);
(statearr_22297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_22297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
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
var vec__22301 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__22301,(0),null);
var ln = cljs.core.nth.call(null,vec__22301,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__22304 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__22304,(0),null);
var file_line = cljs.core.nth.call(null,vec__22304,(1),null);
var file_column = cljs.core.nth.call(null,vec__22304,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22304,file_name,file_line,file_column){
return (function (p1__22302_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__22302_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__22304,file_name,file_line,file_column))
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
var map__22307 = figwheel.client.heads_up.ensure_container.call(null);
var map__22307__$1 = ((((!((map__22307 == null)))?((((map__22307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22307):map__22307);
var content_area_el = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_22355){
var state_val_22356 = (state_22355[(1)]);
if((state_val_22356 === (1))){
var inst_22338 = (state_22355[(7)]);
var inst_22338__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22339 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22340 = ["0.0"];
var inst_22341 = cljs.core.PersistentHashMap.fromArrays(inst_22339,inst_22340);
var inst_22342 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22338__$1,inst_22341);
var inst_22343 = cljs.core.async.timeout.call(null,(300));
var state_22355__$1 = (function (){var statearr_22357 = state_22355;
(statearr_22357[(7)] = inst_22338__$1);

(statearr_22357[(8)] = inst_22342);

return statearr_22357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22355__$1,(2),inst_22343);
} else {
if((state_val_22356 === (2))){
var inst_22338 = (state_22355[(7)]);
var inst_22345 = (state_22355[(2)]);
var inst_22346 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22347 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22348 = cljs.core.PersistentHashMap.fromArrays(inst_22346,inst_22347);
var inst_22349 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22338,inst_22348);
var inst_22350 = cljs.core.async.timeout.call(null,(200));
var state_22355__$1 = (function (){var statearr_22358 = state_22355;
(statearr_22358[(9)] = inst_22345);

(statearr_22358[(10)] = inst_22349);

return statearr_22358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22355__$1,(3),inst_22350);
} else {
if((state_val_22356 === (3))){
var inst_22338 = (state_22355[(7)]);
var inst_22352 = (state_22355[(2)]);
var inst_22353 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22338,"");
var state_22355__$1 = (function (){var statearr_22359 = state_22355;
(statearr_22359[(11)] = inst_22352);

return statearr_22359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22355__$1,inst_22353);
} else {
return null;
}
}
}
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18082__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18082__auto____0 = (function (){
var statearr_22363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22363[(0)] = figwheel$client$heads_up$clear_$_state_machine__18082__auto__);

(statearr_22363[(1)] = (1));

return statearr_22363;
});
var figwheel$client$heads_up$clear_$_state_machine__18082__auto____1 = (function (state_22355){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_22355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e22364){if((e22364 instanceof Object)){
var ex__18085__auto__ = e22364;
var statearr_22365_22367 = state_22355;
(statearr_22365_22367[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22368 = state_22355;
state_22355 = G__22368;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18082__auto__ = function(state_22355){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18082__auto____1.call(this,state_22355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18082__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18082__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_22366 = f__18194__auto__.call(null);
(statearr_22366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_22366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18193__auto__){
return (function (){
var f__18194__auto__ = (function (){var switch__18081__auto__ = ((function (c__18193__auto__){
return (function (state_22400){
var state_val_22401 = (state_22400[(1)]);
if((state_val_22401 === (1))){
var inst_22390 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22400__$1 = state_22400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22400__$1,(2),inst_22390);
} else {
if((state_val_22401 === (2))){
var inst_22392 = (state_22400[(2)]);
var inst_22393 = cljs.core.async.timeout.call(null,(400));
var state_22400__$1 = (function (){var statearr_22402 = state_22400;
(statearr_22402[(7)] = inst_22392);

return statearr_22402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22400__$1,(3),inst_22393);
} else {
if((state_val_22401 === (3))){
var inst_22395 = (state_22400[(2)]);
var inst_22396 = figwheel.client.heads_up.clear.call(null);
var state_22400__$1 = (function (){var statearr_22403 = state_22400;
(statearr_22403[(8)] = inst_22395);

return statearr_22403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22400__$1,(4),inst_22396);
} else {
if((state_val_22401 === (4))){
var inst_22398 = (state_22400[(2)]);
var state_22400__$1 = state_22400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22400__$1,inst_22398);
} else {
return null;
}
}
}
}
});})(c__18193__auto__))
;
return ((function (switch__18081__auto__,c__18193__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____0 = (function (){
var statearr_22407 = [null,null,null,null,null,null,null,null,null];
(statearr_22407[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__);

(statearr_22407[(1)] = (1));

return statearr_22407;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____1 = (function (state_22400){
while(true){
var ret_value__18083__auto__ = (function (){try{while(true){
var result__18084__auto__ = switch__18081__auto__.call(null,state_22400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18084__auto__;
}
break;
}
}catch (e22408){if((e22408 instanceof Object)){
var ex__18085__auto__ = e22408;
var statearr_22409_22411 = state_22400;
(statearr_22409_22411[(5)] = ex__18085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22412 = state_22400;
state_22400 = G__22412;
continue;
} else {
return ret_value__18083__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__ = function(state_22400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____1.call(this,state_22400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18082__auto__;
})()
;})(switch__18081__auto__,c__18193__auto__))
})();
var state__18195__auto__ = (function (){var statearr_22410 = f__18194__auto__.call(null);
(statearr_22410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18193__auto__);

return statearr_22410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18195__auto__);
});})(c__18193__auto__))
);

return c__18193__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1464515101599