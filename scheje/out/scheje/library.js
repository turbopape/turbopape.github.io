// Compiled by ClojureScript 1.7.170 {}
goog.provide('scheje.library');
goog.require('cljs.core');
scheje.library.scheje_version = "0.2.12";
scheje.library.root_env = new cljs.core.PersistentArrayMap(null, 6, [true,true,new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),false,false,new cljs.core.Symbol(null,"else","else",132154381,null),true,new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"lambda","lambda",157104302,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"else","else",132154381,null),new cljs.core.Symbol(null,"display","display",1882596959,null),new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"car","car",84879915,null),new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),new cljs.core.Symbol(null,"null?","null?",-1379283412,null),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"eq?","eq?",2123283611,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"*","*",345799209,null),false,true,new cljs.core.Symbol(null,"else","else",132154381,null)], null),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),cljs.core.list(new cljs.core.Symbol(null,"lambda","lambda",157104302,null),cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))),cljs.core.list(new cljs.core.Symbol(null,"let-name","let-name",-242007550,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"letrec","letrec",-39593707,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"bnext","bnext",1715445861,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null)),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.list(new cljs.core.Symbol(null,"bnext","bnext",1715445861,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"letrec*","letrec*",536565736,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"letrec*","letrec*",536565736,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null)),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null)),true),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),false)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Keyword(null,"literals","literals",-427821498),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null)),true),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"x","x",-555367584,null),true,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)))))], null)], null)], null);

//# sourceMappingURL=library.js.map?rel=1455728536764