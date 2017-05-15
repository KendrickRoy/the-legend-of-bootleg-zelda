$("body").keydown(function(event) {
    if (event.which === 37) {
        $("#link").css("left", $("#link").position().left - 10);
    } else if (event.which === 39) {
        $("#link").css("left", $("#link").position().left + 10);
    } else {
        return;
    }
});
