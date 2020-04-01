$(document).ready(function() {


if ($(window).width() <= 700) {
    $('.netilion_title , #title2, #title3').css('font-size' , '28px');
}

// BURGER 
var burger = $('.burger');

    burger.click(function() {
        $(this).toggleClass('active');
        $('.burger_menu').toggleClass('active');
    });


'use strict';


$(function() {    // SLIDER 1

    // Reloading page when window resizing is finished
    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 1000);
    });
    function doneResizing(){
        location.reload();
    };

    //settings for slider
    var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
    var width = $("#slider").width();
    $("#widthslides").css("width", width*4);
    

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        $('.slides').css("visibility", "visible");
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
    
                if ($(window).width() >= 800) {   //if not a smartphone, animate images
                    $(".title_image").animate({opacity: -1}, {duration: animationSpeed}).animate({'margin-right': 200}, {duration: animationSpeed, queue: false});
                    $(".title_image").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }     else {                          // esle, if Smartphone, do this
                    $(".title_image").animate({opacity: -1}, {duration: animationSpeed}).animate({'margin-right': 50}, {duration: animationSpeed, queue: false});
                    $(".title_image").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }

        }, pause);

    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $(window).resize(function() {
        $('.slides').css("visibility", "hidden");
    });

    // Start pause slider mouse hover

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

     startSlider();


});

$(function() {    // SLIDER 2

 

    //settings for slider 2
    var animationSpeed2 = 1000;
    var pause2 = 9000;
    var currentSlide2 = 1;
    var width2 = $("#slider2").width();
    $("#widthslides2").css("width", width2*4);
    var bullets = 0;
    
    //cache DOM elements
    var $slider2 = $('#slider2');
    var $slideContainer2 = $('.slides2', $slider2);
    var $slides2 = $('.slide2', $slider2);
    var interval;



    // ON CLICK -> ANIMATION
            $('#next').click(function() {
                    bullets = bullets+1;
                  if (bullets <= 2){
                    bullets = 2;
                    $('#bullet1').css("background-color","white");
                    $('#bullet2').css("background-color","#6300ff");
                    $('#bullet3').css("background-color","white");
                } else if (bullets == 3){
                    $('#bullet1').css("background-color","white");
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","#6300ff");
                } else if (bullets >= 4){
                    $('#bullet1').css("background-color","#6300ff");
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","white");
                    bullets = 1;
                }
                    $slideContainer2.animate({'margin-left': '-='+width2}, animationSpeed2, function() {
                if (++currentSlide2 === $slides2.length) {
                    currentSlide2 = 1;
                    $slideContainer2.css('margin-left', 0);
                }
            });
                
                if ($(window).width() >= 800) {   //if not a smartphone, animate images
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 50}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }     else {                          // esle, if Smartphone, do this
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 20}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }
                });



            // ON CLICK -> PREVIOUS -> ANIMATION  (not working)
            /*
            $('#previous').click(function() {
                    bullets++;
                  if (bullets == 2){
                    $('#bullet1').css("background-color","white");
                    $('#bullet2').css("background-color","#6300ff");
                } else if (bullets == 3){
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","#6300ff");
                } else if (bullets == 4){
                    $('#bullet1').css("background-color","#6300ff");
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","white");
                    bullets = 1;
                }
                    $slideContainer2.animate({'margin-left': '-='-width2}, animationSpeed2, function() {
                if (--currentSlide2 === $slides2.length) {
                    currentSlide2 = 1;
                    $slideContainer2.css('margin-left', 0);
                }
            });
                
                if ($(window).width() >= 800) {   //if not a smartphone, animate images
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 50}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }     else {                          // esle, if Smartphone, do this
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 20}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }
                });
            */



            // AUTO RUN ANIMATION WITHOUT BUTTON 
            
    function startSlider2() {
        bullets = bullets + 1;
        $('.slides2').css("visibility", "visible");
        interval = setInterval(function() {


            // BULLET ANIMATION
                bullets++;
                  if (bullets <= 2){
                    bullets = 2;
                    $('#bullet1').css("background-color","white");
                    $('#bullet2').css("background-color","#6300ff");
                    $('#bullet3').css("background-color","white");
                } else if (bullets == 3){
                    $('#bullet1').css("background-color","white");
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","#6300ff");
                } else if (bullets >= 4){
                    $('#bullet1').css("background-color","#6300ff");
                    $('#bullet2').css("background-color","white");
                    $('#bullet3').css("background-color","white");
                    bullets = 1;
                }

        

            $slideContainer2.animate({'margin-left': '-='+width2}, animationSpeed2, function() {
                if (++currentSlide2 === $slides2.length) {
                    currentSlide2 = 1;
                    $slideContainer2.css('margin-left', 0);
                }
            });
                
                if ($(window).width() >= 800) {   //if not a smartphone, animate images
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 50}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }     else {                          // esle, if Smartphone, do this
                    $(".slider2img").animate({opacity: -1}, {duration: animationSpeed2}).animate({'margin-right': 20}, {duration: animationSpeed2, queue: false});
                    $(".slider2img").animate({'margin-right': 0}, {duration: 1}).animate({opacity: 1}, {duration: 500});
            }


        }, pause2);
    }
    function pauseSlider2() {
        clearInterval(interval);
    }

    $(window).resize(function() {
        $('.slides2').css("visibility", "hidden");
    });

    // Start pause slider mouse hover

    $slideContainer2
        .on('mouseenter', pauseSlider2)
        .on('mouseleave', startSlider2);

     startSlider2();

    });

});



