$(document).ready(function(){
    
    $('.input-control').submit(function(){
        var formVal = $('.list-form').val();
        
        
    });
    
    
    
    
    
    
    //Show delete button when hovering
    $('.item-text').mouseenter(function(){
        $(this).children().show();
    });
    
    $('.item-text').mouseleave(function(){
        $(this).children().hide();
    });
    
});

