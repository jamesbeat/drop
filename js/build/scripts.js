!function($,Drupal,window,document){Drupal.behaviors.basic={attach:function(){$(window).ready(function(){var snapper=new Snap({element:document.getElementById("snap_table"),disable:"left",hyperextensible:!1,maxPosition:275,minPosition:-275,slideIntent:20,minDragDistance:20,touchToDrag:!1});snapper.on("open",function(){$("#snap_btn").addClass("active")}),snapper.on("close",function(){$("#snap_btn").removeClass("active")}),$("#snap_btn").on("click",function(e){e.preventDefault(),"right"==snapper.state().state?snapper.close():snapper.open("right")}),$("#snap_demo").on("click",function(e){e.preventDefault(),"right"==snapper.state().state?snapper.close():snapper.open("right")})}),$(window).load(function(){$("pre code").each(function(i,block){hljs.highlightBlock(block)}),$.isFunction($.fn.unveil)&&$("img").unveil(200,function(){console.log("lazy"),$(this).load(function(){console.log("loaded")})})}),$(window).resize(function(){}),$(window).scroll(function(){}),$(document).ready(function(){})}}}(jQuery,Drupal,this,this.document);
//# sourceMappingURL=scripts.map