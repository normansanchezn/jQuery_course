/**
 * Selector for element
 */
$(document).ready(function() {
    $("#btn_hide_text").click(function() {
        $("p").hide();
    });
});


/**
 * Selector for id
 */
$(document).ready(function() {
    $("#btn_hide_head").click(function() { 
        $("#head").hide();
     });
});

/**
 * Selector for class
 */
$(document).ready(function() {
    $(".creating").click(function() {
        $(".change").html('Holaaaa');
    });
});

/**
 * Selector this
 */
$(document).ready(function() {
    $(".something").click(function() {
        $(this).html("Something")
    });
});