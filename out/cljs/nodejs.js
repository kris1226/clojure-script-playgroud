// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__482__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__483__i = 0, G__483__a = new Array(arguments.length -  0);
while (G__483__i < G__483__a.length) {G__483__a[G__483__i] = arguments[G__483__i + 0]; ++G__483__i;}
  args = new cljs.core.IndexedSeq(G__483__a,0,null);
} 
return G__482__delegate.call(this,args);};
G__482.cljs$lang$maxFixedArity = 0;
G__482.cljs$lang$applyTo = (function (arglist__484){
var args = cljs.core.seq(arglist__484);
return G__482__delegate(args);
});
G__482.cljs$core$IFn$_invoke$arity$variadic = G__482__delegate;
return G__482;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__485__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__486__i = 0, G__486__a = new Array(arguments.length -  0);
while (G__486__i < G__486__a.length) {G__486__a[G__486__i] = arguments[G__486__i + 0]; ++G__486__i;}
  args = new cljs.core.IndexedSeq(G__486__a,0,null);
} 
return G__485__delegate.call(this,args);};
G__485.cljs$lang$maxFixedArity = 0;
G__485.cljs$lang$applyTo = (function (arglist__487){
var args = cljs.core.seq(arglist__487);
return G__485__delegate(args);
});
G__485.cljs$core$IFn$_invoke$arity$variadic = G__485__delegate;
return G__485;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
