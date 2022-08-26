$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('header2').addClass('header2');
        }else{
            $('header2').removeClass('header2');
        }
    });

});