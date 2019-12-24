$(document).ready(function(){
    $('.sidebar-button').click(function(){
        $('.sidebar').css('right','0');
        $('#body-wrap').addClass('body-wrapper');
        $('body').css('overflow','hidden');
    });
    $('.sidebar-close-button').click(function(){
        $('#body-wrap').removeClass('body-wrapper');
        $('.sidebar').css('right','-350px');
        $('body').css('overflow','auto')

    });
});