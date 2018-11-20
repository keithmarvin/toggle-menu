//toggle menu
var clicked = true;


$('#toggle').click(
  function (){
    $('#toggle').toggleClass('Changed');
    //TweenMax.set($('#menuContainer'),{css:{width:"100%", height:"100%", left:0, top:0,}})
    if(clicked){
    	TweenMax.to($('#menu-el-1'), .5, {delay:.4, scale:100, ease:Power3.easeIn, force3D:false});
    	TweenMax.to($('#menu-el-2'), .5, {delay:.2, scale:100, ease:Power3.easeIn, force3D:false});
    	TweenMax.to($('#menu-el-3'), .5, {scale:100, ease:Power3.easeIn, force3D:false});
    }else{
      	TweenMax.to($('#menu-el-1'), .5, {scale:0, ease:Power3.easeOut, force3D:false});
      	TweenMax.to($('#menu-el-2'), .5, {delay:.2, scale:0, ease:Power3.easeOut, force3D:false});
      	TweenMax.to($('#menu-el-3'), .5, {delay:.4, scale:0, ease:Power3.easeOut, force3D:false});
    }
    clicked = !clicked;
});