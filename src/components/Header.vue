<template>
    <div class="header">
    	<span id="menu">导航</span>
        <div id="guide">
            <ul>
                <li><a href="android/danji.html">单机</a></li>
                <li><a href="android/danji.html">网游</a></li>
                <li><a href="android/danji.html">应用</a></li>
                <li><a href="android/danji.html">攻略</a></li>
                <li><a href="android/danji.html">资讯</a></li>
            </ul>
    	</div>
        <a class="search" href="index.html">搜索</a>
    	<img class="logo" src="../../public/data/img/logo.png">
    </div>
</template>

<script>
// import Swipe from '../assets/js/swipe.js';
import $ from 'jquery';
export default {
  mounted(){
    $(document).ready(function(){
   $(".main").append("<div id='overlay'></div>");
   $("#menu").click(function(){
      $("#guide").slideToggle();
      $("#overlay").toggleClass("show");
   })
   
   //search
	/*$(".text").keypress(function(){        
		$(this).next(".btn").show();
		$(".btn").click(function(){
			$(this).siblings(".text").val("");
		})
	});*/
	$(".text").focus(function(){        
		var txt_value =  $(this).val();  
		if(txt_value==this.defaultValue){  
        	$(this).val("").css("color","#313131");              
		} 
	});
})

function fjcHeight(){
	$(".proportion").each(function(i,n){
	        var FjcHeight=$(this).attr("F");
			var nowWidth=$(this).width();
			var thisHeight=nowWidth*parseFloat(FjcHeight);
	        $(this).css("height",thisHeight+"px");
	});     
}
function fontSizeHack(){
        var viewportW=$(".main").width();
		var fz=(viewportW/320)*0.625;
		$(".index-banner").css("font-size",(fz*100)+"%");
}

$(window).resize(function(){
	fjcHeight();
	fontSizeHack();
})
  }
}
</script>

<style scoped>

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, button, textarea, p, blockquote { margin: 0; padding: 0; }

table { border-collapse: collapse; border-spacing: 0; }

li { list-style: none; }

img { border: 0; }

a{ outline:none; color:#313131; text-decoration:none;}

.cl:after{ content:'\20'; display:block; height:0; clear:both; }

.cl{ *zoom:1;} 


#menu,.header .search,.gamelist li .btn_down,.footer a,.back_nav .back,.readlist li,.star,.star i,.game_search .text,.game_search .btn{ background:url(../../public/data/img/sprite.png) no-repeat 0 0; background-size:60px 174px;}

body{min-width:320px;background:#f8f8f8;font:12px/1.5 "Microsoft Yahei","Arial"; color:#888;-webkit-text-size-adjust:none}

.main{width:100%;max-width:768px; min-height:176px;margin:0 auto; position:relative; overflow:hidden;}

.header{ padding:13px 0; text-align:center; border-bottom:1px solid #dcdcdc; position:relative;}

.header .logo{ display:block; margin:0 auto; height:19px;}

.header #menu{ float:left; margin-left:4%;}

#menu{ width:21px; height:19px; font:0/0 a; background-position:-39px 2px; cursor:pointer;}

#guide{ position:absolute; left:0; top:45px; z-index:999; background:#f8f8f8; width:100%; overflow:hidden; display:none;box-shadow: 0px 2px 2px #666;}

#guide ul{ margin-top:0;overflow:hidden; margin-left:-1px; border-bottom:1px solid #fff; border-bottom:1px solid #dcdcdc;}

#guide li{ float:left; width:25%; text-align:center; border-left:1px solid #dcdcdc; border-top:1px solid #dcdcdc; margin-left:-1px;}

#guide li a{ color:#4398d1; display:block; border-left:1px solid #fff; border-top:1px solid #fff; line-height:63px; font-size:16px;}

#overlay{ width:100%; height:100%; position:absolute; left:0; top:45px; background:rgba(0, 0, 0, 0.1); z-index:200; display:none;}

#overlay.show{ display:block;}

.header .search{ float:right; width:18px; height:19px; font:0/0 a; background-position:-42px -17px; margin-right:4%;}
</style>



