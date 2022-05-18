$(function () {
  $("body").click(function (e) {
    let bgColor = "#" + e.pageX + e.pageY;
    let i=0;
    while(bgColor.length <7){
        bgColor +=i;
        i++;
      } 
      bgColor = bgColor.slice(0, 7);
      $("body").css("background-color", bgColor);
      $("span").html(bgColor);
  });
});
