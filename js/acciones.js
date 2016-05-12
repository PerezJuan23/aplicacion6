// JavaScript Document

$(document).ready(function (e){
 document .addEventListener ("deviceready",function(){
  $('#btnbeep').on('tap',function(){
	 navigator.notification.beep(10);//numero de veces que deseas que notifique
  });//beep

 $('#btnvibrar').on('tap',function(){
	 navigator.notification.vibrate(10000);
 });
 });
});
