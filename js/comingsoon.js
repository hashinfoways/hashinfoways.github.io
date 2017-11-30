function waterFloat(n,t,a,e){var i=n,o=function(n,t,a,e){n.animate({top:"+="+e},t,"linear",function(){$({deg:-a}).animate({deg:a},{duration:t,step:function(t){n.css({transform:"rotate("+t+"deg)"})}},"linear"),n.animate({top:"-="+e},t,"linear",function(){$({deg:a}).animate({deg:-a},{duration:t,step:function(t){n.css({transform:"rotate("+t+"deg)"})}},"linear"),o(n,t,a,e)})})};o(i,t,a,e)}

/* page js */
$(document).ready(function(){
    $('.backUrl').click(function(){
      window.history.back();
    });
    // 404 moving js
    var b1 = $('#b1');
    var b2 = $('#b2');
    var b3 = $('#b3');
    var b4 = $('#b4'); 
    var b5 = $('#b5');
    var b6 = $('#b6');
    var b7 = $('#b7');
    var b8 = $('#b8');
    var b9 = $('#b9');
    var b10 = $('#b10');
    var b11 = $('#b11');
    var b12 = $('#b12');
    var p1 = new waterFloat(b1,900,30,20);
    var p2 = new waterFloat(b2,700,30,30);
    var p3 = new waterFloat(b3,800,30,15);
    var p4 = new waterFloat(b4,900,-30,10);
    var p5 = new waterFloat(b5,700,-30,14);
    var p6 = new waterFloat(b6,800,-30,10);
    var p7 = new waterFloat(b7,900,60,20);
    var p8 = new waterFloat(b8,700,60,30);
    var p9 = new waterFloat(b9,800,60,15);
    var p10 = new waterFloat(b10,900,-60,10);
    var p11 = new waterFloat(b11,700,-60,14);
    var p12 = new waterFloat(b12,800,-60,10);
  });