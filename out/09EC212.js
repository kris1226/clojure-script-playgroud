goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__505__i = 0, G__505__a = new Array(arguments.length -  0);
while (G__505__i < G__505__a.length) {G__505__a[G__505__i] = arguments[G__505__i + 0]; ++G__505__i;}
  args = new cljs.core.IndexedSeq(G__505__a,0,null);
} 
return G__504__delegate.call(this,args);};
G__504.cljs$lang$maxFixedArity = 0;
G__504.cljs$lang$applyTo = (function (arglist__506){
var args = cljs.core.seq(arglist__506);
return G__504__delegate(args);
});
G__504.cljs$core$IFn$_invoke$arity$variadic = G__504__delegate;
return G__504;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508__i = 0, G__508__a = new Array(arguments.length -  0);
while (G__508__i < G__508__a.length) {G__508__a[G__508__i] = arguments[G__508__i + 0]; ++G__508__i;}
  args = new cljs.core.IndexedSeq(G__508__a,0,null);
} 
return G__507__delegate.call(this,args);};
G__507.cljs$lang$maxFixedArity = 0;
G__507.cljs$lang$applyTo = (function (arglist__509){
var args = cljs.core.seq(arglist__509);
return G__507__delegate(args);
});
G__507.cljs$core$IFn$_invoke$arity$variadic = G__507__delegate;
return G__507;
})()
);

return null;
});
