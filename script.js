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
    $('.shopping-list').on('mouseenter', '.item-text', function(){
        $(this).children().show();
    });
    
    $('.shopping-list').on('mouseleave', '.item-text', function(){
        $(this).children().hide();
    });
    
    
    //Hover over checkbox
    $('.shopping-list').on('mouseenter', '.check-box', function(){
        $(this).children().css('background-color', '#FF822D');
    });
    
    $('.shopping-list').on('mouseleave', '.check-box', function(){
        $(this).children().css('background-color', 'black');
    });
    
});

