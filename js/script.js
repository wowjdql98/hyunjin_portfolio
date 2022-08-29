$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 1000,
    sectionsColor: ['#fff', '#4B6CB7', '#CFDEF3','#4B6CB7'],
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'],
    navigationPosition: 'right',

  });

});


