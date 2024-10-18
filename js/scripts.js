$(document).ready(function() {
    // Effects

    // Hide and fade in
    $("#title1").hide().fadeIn(2000); 

    // Slide up and down
    $("#title1").click(function() {
        $(this).slideUp().slideDown();
    });

    // When hovering over the article, change the background color 
    $("#title1").hover(function() {
        $(this).css("background-color", "#d0d0d0");
    }, function() {
        $(this).css("background-color", "#f9f9f9");
    });

    // Animation
    $("#title2").animate({
        opacity: 0.7,
        height: "toggle"
    }, 2000);

    // Event

    // Change background color and alert
    $("#title3").on("click", function() {
        $(this).css("border-color", "#ff0000");
        alert("Article clicked!");
    });
});

$(document).ready(function() {
    // Add a funny jQuery effect to the image
    $("#sunImage").click(function() {
        $(this).animate({
            width: "toggle",
            height: "toggle"
        }, 1000, function() {
            $(this).animate({
                width: "toggle",
                height: "toggle"
            }, 1000);
        });
    });
});