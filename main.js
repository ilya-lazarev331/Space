function buttonClick() {
    $('#button1').bind("click", function() {
        $('#button1 + ul').slideToggle(250);
    });
    $('#button2').bind("click", function() {
        $('#button2 + ul').slideToggle(250);
    });
}

function scrolling() {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 250);
        return false; 
    });
}

$(function(){
    var topPos = $('.side').offset().top;
    var botPos = $('.footer').offset().top;
    $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > topPos) {
        if(top >= 22740) {
            $('.side').addClass('defaultDown');
        }
        else{
            $('.side').addClass('fixed');
            $('.side').removeClass('defaultDown');
        }
    } 
    else {
        $('.side').removeClass('defaultDown');
        $('.side').removeClass('fixed');
    }
    });
});

$(document).ready(function() {
    scrolling();
    buttonClick();    
});