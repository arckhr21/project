$(document).ready(function() {

    $('.main_btna,.main_btn, li:contains("расписания туров")').on('click', function() {
            $('.overlay').animate({opacity: "show"}, 3000);
            $('.modal').slideDown(3000);   
    });

    $('.close').on('click', function() {
            $('.overlay').animate({opacity: "hide"}, 3000);
            $('.modal').slideUp(3000);  
    });
 
});
