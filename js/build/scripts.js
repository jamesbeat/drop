!function($,Drupal,window,document){Drupal.behaviors.basic={attach:function(){$(window).ready(function(){var snapper=new Snap({element:document.getElementById("snap_table"),disable:"left",hyperextensible:!1,maxPosition:275,minPosition:-275,slideIntent:20,minDragDistance:20,touchToDrag:!1});snapper.on("open",function(){$("#snap_btn").addClass("active")}),snapper.on("close",function(){$("#snap_btn").removeClass("active")}),$("#snap_btn").on("click",function(e){e.preventDefault(),"right"==snapper.state().state?snapper.close():snapper.open("right")});var $body=$("html, body"),content=$("#snap_table").smoothState({prefetch:!0,pageCacheSize:4,blacklist:"#snap_btn, .tabs a",onStart:{duration:250,render:function(url,$container){content.toggleAnimationClass("is-exiting"),$body.animate({scrollTop:0}),console.log("YUCK:"+$container)}},onProgress:{duration:0,render:function(){$body.css("cursor","wait"),$body.find("a").css("cursor","wait")}},onEnd:{duration:0,render:function(url,$container,$content){$body.css("cursor","auto"),$body.find("a").css("cursor","auto"),$container.html($content)}}}).data("smoothState")}),$(window).load(function(){}),$(window).resize(function(){}),$(window).scroll(function(){}),$(document).ready(function(){})}}}(jQuery,Drupal,this,this.document);
//# sourceMappingURL=scripts.map