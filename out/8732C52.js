goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__493__i = 0, G__493__a = new Array(arguments.length -  0);
while (G__493__i < G__493__a.length) {G__493__a[G__493__i] = arguments[G__493__i + 0]; ++G__493__i;}
  args = new cljs.core.IndexedSeq(G__493__a,0,null);
} 
return G__492__delegate.call(this,args);};
G__492.cljs$lang$maxFixedArity = 0;
G__492.cljs$lang$applyTo = (function (arglist__494){
var args = cljs.core.seq(arglist__494);
return G__492__delegate(args);
});
G__492.cljs$core$IFn$_invoke$arity$variadic = G__492__delegate;
return G__492;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__496__i = 0, G__496__a = new Array(arguments.length -  0);
while (G__496__i < G__496__a.length) {G__496__a[G__496__i] = arguments[G__496__i + 0]; ++G__496__i;}
  args = new cljs.core.IndexedSeq(G__496__a,0,null);
} 
return G__495__delegate.call(this,args);};
G__495.cljs$lang$maxFixedArity = 0;
G__495.cljs$lang$applyTo = (function (arglist__497){
var args = cljs.core.seq(arglist__497);
return G__495__delegate(args);
});
G__495.cljs$core$IFn$_invoke$arity$variadic = G__495__delegate;
return G__495;
})()
);

return null;
});
