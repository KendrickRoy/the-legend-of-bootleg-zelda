function checkCollision(adjustleft, adjusttop) {
    var linkLeft = $("#link").offset().left + adjustleft;
    var rockLeft = $("#rock").offset().left;
    var linkRight = linkLeft + $("#link").width();
    var rockRight = rockLeft + $("#rock").width();
    var linktop = $("#link").offset().top + adjusttop;
    var rocktop = $("#rock").offset().top;
    var rockBottom = rocktop + $("#rock").height();
    var linkBottom = linktop + $("#link").height();
    
    if(linkRight >= rockLeft && linkLeft <= rockRight && linkBottom >= rocktop && linktop <= rockBottom) {
        return true;
    }else{
        return false
    }
        
}
$("body").keydown(function(event) {
    var linkPosition = $('#link').position();
    $('#where-is-link').html("X: " + linkPosition.top + ', Y: ' + linkPosition.left);
    console.log('I AM GOING WITH ', event.which);
    if (event.which === 37 && !checkCollision(-10, 0)) {
        event.preventDefault();
        var leftTouch = $("#link").position().left - 10;
        leftTouch = Math.max(leftTouch, 0)
        //moves left
        $("#link").css("left", leftTouch);
        checkCollision()
    } else if (event.which === 39 && !checkCollision(10, 0)) {
       event.preventDefault();
        var leftTouch = $("#link").position().left + 10;
        var boxWidth = $('#play-area').width();
        var linkwidth = $('#link').width();
        leftTouch = Math.min(leftTouch, boxWidth - linkwidth)
        //moves right
        $("#link").css("left", leftTouch);;
         checkCollision()
    }  else if (event.which === 38 && !checkCollision(0, -10)) {
        var leftTouch = $("#link").position().left - 10;
        var topTouch = $("#link").position().top - 10;
        console.log(topTouch, leftTouch, event.which);
        if (topTouch < 0){
            return
        }
        //moves up
        $("#link").css("top", $("#link").position().top - 10);
        $("#link").css("top", topTouch);
         checkCollision()
    }  else if (event.which === 40 && !checkCollision(0, 10)) {
        var leftTouch = $("#link").position().left - 10;
        var topTouch = $("#link").position().top - 10;
        if (topTouch > 760 + 62){
            return
        }
        
        var linkheight = $('#link').height();
        var boxheight = $('#play-area').height(900);
        topTouch = Math.min(leftTouch, boxheight - linkheight)
        //moves down
        $("#link").css("top", $("#link").position().top + 10);
         checkCollision()
       }
});