goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__491__i = 0, G__491__a = new Array(arguments.length -  0);
while (G__491__i < G__491__a.length) {G__491__a[G__491__i] = arguments[G__491__i + 0]; ++G__491__i;}
  args = new cljs.core.IndexedSeq(G__491__a,0,null);
} 
return G__490__delegate.call(this,args);};
G__490.cljs$lang$maxFixedArity = 0;
G__490.cljs$lang$applyTo = (function (arglist__492){
var args = cljs.core.seq(arglist__492);
return G__490__delegate(args);
});
G__490.cljs$core$IFn$_invoke$arity$variadic = G__490__delegate;
return G__490;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__494__i = 0, G__494__a = new Array(arguments.length -  0);
while (G__494__i < G__494__a.length) {G__494__a[G__494__i] = arguments[G__494__i + 0]; ++G__494__i;}
  args = new cljs.core.IndexedSeq(G__494__a,0,null);
} 
return G__493__delegate.call(this,args);};
G__493.cljs$lang$maxFixedArity = 0;
G__493.cljs$lang$applyTo = (function (arglist__495){
var args = cljs.core.seq(arglist__495);
return G__493__delegate(args);
});
G__493.cljs$core$IFn$_invoke$arity$variadic = G__493__delegate;
return G__493;
})()
);

return null;
});
