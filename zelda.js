$("body").keydown(function(event) {
    if (event.which === 37) {
        event.preventDefault();
        var leftTouch = $("#link").position().left - 10;
        leftTouch = Math.max(leftTouch, 0)
        $("#link").css("left", leftTouch);
    } else if (event.which === 39) {
        $("#link").css("left", $("#link").position().left + 10);
    }  else if (event.which === 38) {
        $("#link").css("top", $("#link").position().top - 10);
    }  else if (event.which === 40) {
        $("#link").css("top", $("#link").position().top + 10);
       }
});