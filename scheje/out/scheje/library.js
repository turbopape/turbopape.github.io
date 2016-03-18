// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje.library');
goog.require('cljs.core');
scheje.library.scheje_version = "0.2.15";
scheje.library.root_env = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"cadr","cadr",2114630923,null),new cljs.core.Symbol(null,"cadddr","cadddr",-1458618197,null),new cljs.core.Symbol(null,"caaaar","caaaar",-340772304,null),new cljs.core.Symbol(null,"cadar","cadar",-573042744,null),new cljs.core.Symbol(null,"cdar","cdar",486112651,null),new cljs.core.Symbol(null,"vector-ref","vector-ref",-724904916,null),new cljs.core.Symbol(null,"caaadr","caaadr",2100664023,null),new cljs.core.Symbol(null,"caddar","caddar",483075056,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"caaddr","caaddr",-150100525,null),new cljs.core.Symbol(null,"cdaaar","cdaaar",-1812358471,null),new cljs.core.Symbol(null,"cddar","cddar",-1959768939,null),new cljs.core.Symbol(null,"cdddr","cdddr",-676152461,null),new cljs.core.Symbol(null,"cdaadr","cdaadr",-1762057268,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.Symbol(null,"cdaar","cdaar",-29447094,null),new cljs.core.Symbol(null,"cadadr","cadadr",-2138271193,null),new cljs.core.Symbol(null,"else","else",132154381,null),new cljs.core.Symbol(null,"cdaddr","cdaddr",-990758304,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"cadaar","cadaar",678590101,null),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Symbol(null,"alist-cons","alist-cons",-735429070,null),new cljs.core.Symbol(null,"cddadr","cddadr",-989404117,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"cdadr","cdadr",-1886641205,null),new cljs.core.Symbol(null,"caddr","caddr",-950542375,null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"caadar","caadar",-885793832,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"cddr","cddr",1211372782,null),new cljs.core.Symbol(null,"cddaar","cddaar",1514688771,null),new cljs.core.Symbol(null,"caaar","caaar",1244978168,null),new cljs.core.Symbol(null,"cdddar","cdddar",826183281,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),true,new cljs.core.Symbol(null,"caar","caar",1772960842,null),false,new cljs.core.Symbol(null,"cddddr","cddddr",939271532,null),new cljs.core.Symbol(null,"caadr","caadr",1215390070,null),new cljs.core.Symbol(null,"cdadar","cdadar",-521835343,null)],[cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"i","i",253690212,null)),cljs.core.list(new cljs.core.Symbol(null,"vector-ref","vector-ref",-724904916,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"i","i",253690212,null))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"pair?","pair?",181399999,null),new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quasiquote","quasiquote",1707342874,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"lambda","lambda",157104302,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"else","else",132154381,null),new cljs.core.Symbol(null,"display","display",1882596959,null),new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"null?","null?",-1379283412,null),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"eq?","eq?",2123283611,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"*","*",345799209,null),false,true,new cljs.core.Symbol(null,"else","else",132154381,null),new cljs.core.Symbol(null,"caar","caar",1772960842,null),new cljs.core.Symbol(null,"cadr","cadr",2114630923,null),new cljs.core.Symbol(null,"cdar","cdar",486112651,null),new cljs.core.Symbol(null,"cddr","cddr",1211372782,null),new cljs.core.Symbol(null,"caaar","caaar",1244978168,null),new cljs.core.Symbol(null,"caadr","caadr",1215390070,null),new cljs.core.Symbol(null,"cadar","cadar",-573042744,null),new cljs.core.Symbol(null,"caddr","caddr",-950542375,null),new cljs.core.Symbol(null,"cdaar","cdaar",-29447094,null),new cljs.core.Symbol(null,"cdadr","cdadr",-1886641205,null),new cljs.core.Symbol(null,"cddar","cddar",-1959768939,null),new cljs.core.Symbol(null,"cdddr","cdddr",-676152461,null),new cljs.core.Symbol(null,"caaaar","caaaar",-340772304,null),new cljs.core.Symbol(null,"caaadr","caaadr",2100664023,null),new cljs.core.Symbol(null,"caadar","caadar",-885793832,null),new cljs.core.Symbol(null,"caaddr","caaddr",-150100525,null),new cljs.core.Symbol(null,"cadaar","cadaar",678590101,null),new cljs.core.Symbol(null,"cadadr","cadadr",-2138271193,null),new cljs.core.Symbol(null,"caddar","caddar",483075056,null),new cljs.core.Symbol(null,"cadddr","cadddr",-1458618197,null),new cljs.core.Symbol(null,"cdaaar","cdaaar",-1812358471,null),new cljs.core.Symbol(null,"cdaadr","cdaadr",-1762057268,null),new cljs.core.Symbol(null,"cdadar","cdadar",-521835343,null),new cljs.core.Symbol(null,"cdaddr","cdaddr",-990758304,null),new cljs.core.Symbol(null,"cddaar","cddaar",1514688771,null),new cljs.core.Symbol(null,"cddadr","cddadr",-989404117,null),new cljs.core.Symbol(null,"cdddar","cdddar",826183281,null),new cljs.core.Symbol(null,"cddddr","cddddr",939271532,null)], true),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),true,cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))),cljs.core.list(new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"bnext","bnext",1715445861,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"bnext","bnext",1715445861,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"letrec*","letrec*",536565736,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"letrec*","letrec*",536565736,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null)),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null)),true),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),false)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null)),true),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"x","x",-555367584,null),true,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"datum","datum",1402352456,null),new cljs.core.Symbol(null,"alist","alist",459905674,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"key","key",124488940,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"datum","datum",1402352456,null))),new cljs.core.Symbol(null,"alist","alist",459905674,null))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.vector,cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"eq?","eq?",2123283611,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.List.EMPTY)),false),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"eq?","eq?",2123283611,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Symbol(null,"k","k",-505765866,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),cljs.core.list(new cljs.core.Symbol(null,"else","else",132154381,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),true,cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),false,cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),cljs.core.list(new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),cljs.core.list(new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))]);

//# sourceMappingURL=library.js.map?rel=1458338364481