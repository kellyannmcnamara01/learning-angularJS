window.onload = function(){
    //git title link smooth scroll
    $('#git-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#git").offset().top
            },
            1000);
    });
    //css title link smooth scroll
    $('#css-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#css").offset().top
            },
            1000);
    });
}; //end widow onload