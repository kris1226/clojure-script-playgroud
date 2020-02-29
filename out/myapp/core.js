// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('myapp.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
myapp.core._main = (function myapp$core$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___491 = arguments.length;
var i__4731__auto___492 = (0);
while(true){
if((i__4731__auto___492 < len__4730__auto___491)){
args__4736__auto__.push((arguments[i__4731__auto___492]));

var G__493 = (i__4731__auto___492 + (1));
i__4731__auto___492 = G__493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return myapp.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

myapp.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world!");
});

myapp.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
myapp.core._main.cljs$lang$applyTo = (function (seq490){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq490));
});

cljs.core._STAR_main_cli_fn_STAR_ = myapp.core._main;

//# sourceMappingURL=core.js.map
