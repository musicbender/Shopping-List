$(document).ready(function(){
    
    //Puts focus on form when page loads
    $('.list-form').focus();
    
    
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
    $('.shopping-list').on('mouseenter', '.check-box, .check-box-checked', function(){
        $(this).children().css('background-color', '#FF822D');
    });
    
    $('.shopping-list').on('mouseleave', '.check-box', function(){
        $(this).children().css('background-color', 'black');
    });
    
        $('.shopping-list').on('mouseleave', '.check-box-checked', function(){
        $(this).children().css('background-color', 'transparent');
    });
    
    
    //Check off list item 
    $('.shopping-list').on('click', '.check-box', function(){
        $(this).removeClass('check-box').addClass('check-box-checked');
        $(this).children().css('background-color', '#FF822D');
        
        $(this).children().removeClass('unchecked').addClass('checked');
        $(this).siblings().addClass('text-checked');
    });
    
    
    //Re-uncheck list item
    $('.shopping-list').on('click', '.check-box-checked', function(){
        $(this).removeClass('check-box-checked').addClass('check-box');
        $(this).children().css('background-color', '#FF822D');
        
        $(this).children().removeClass('checked').addClass('unchecked');
        $(this).siblings().removeClass('text-checked');
    });
    
    //Delete list item
    $('.shopping-list').on('click', '.delete', function(){
        $(this).parent().parent().remove();
    });
    
});

