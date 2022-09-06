$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('header2').addClass('header2');
        }else{
            $('header2').removeClass('header2');
        }
    });

});


var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.values.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }else {
            this.nextElementSibling.classList.remove('fijar');
          
        }
    });
}