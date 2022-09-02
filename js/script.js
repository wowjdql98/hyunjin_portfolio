

$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 1000,
    sectionsColor: ['#fff', '#DCD4E5', '#CFDEF3',''],
    anchors: ['firstPage', 'secondPage', 'thirdPage','fourthPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'],
    navigationPosition: 'right',

  });

});


// 모바일 토글메뉴
$(function () {

  $('#toggle-menu-btn').click(function () {
      $('#toggle-menu-btn').toggleClass('active');
      $('#toggle-menu').toggleClass('on');
  });
});

$(document).ready(function(){
  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })
})

