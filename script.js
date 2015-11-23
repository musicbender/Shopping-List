$(document).ready(function(){
    
    $('.input-control').focus();
    
    //Add new list item
    $('.input-control').submit(function(){
        var formVal = $('.list-form').val();
        
        $('.shopping-list').first().prepend('<div class="list-item"><div class="check-box"><div class="unchecked"></div></div><div class="item-text">' + formVal + '<div class="delete">X</div></div></div>');
        
        $('.list-form').val('');
        
        return false;
    });
    
    
    //Show delete button when hovering
    $('.item-text').on('mouseenter', '.item-text', function(){
        $(this).children().show();
        alert('test');
    });
    
    /*$('.item-text').mouseenter(function(){
        $(this).children().show();
    });*/
    
    $('.item-text').mouseleave(function(){
        $(this).children().hide();
    });
    
    //Hover over checkbox
    $('.check-box').mouseenter(function(){
        $(this).children().css('background-color', '#FF822D');
    });
    
    $('.check-box').mouseleave(function(){
        $(this).children().css('background-color', 'black');
    });
    
});

