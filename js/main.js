/* $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger','.header__menu').toggleClass('active');
    });
}); */
$(function(){   
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');//блокировка скролла при открытом бургере
    });
});