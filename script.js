$(document).ready(function(){
    
    $('.input-control').submit(function(){
        var formVal = $('.list-form').val();
        
        $('.shopping-list').first().prepend('<div class="list-item"><div class="check-box"><div class="unchecked"></div></div><div class="item-text">' + formVal + '<div class="delete">X</div></div></div>');
        
        return false;
    });
    
    
    
    
    
    
    //Show delete button when hovering
    $('.item-text').mouseenter(function(){
        $(this).children().show();
    });
    
    $('.item-text').mouseleave(function(){
        $(this).children().hide();
    });
    
});

