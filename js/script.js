$(function(){
    // scroll
    $('html').niceScroll({
        cursorborder: "1px solid #f7600e",
        cursorcolor : '#f7600e'
    });
    // back-ground-header
    $(".header").height($(window).height())
    $(window).resize(function(){
        $(".header").height($(window).height())
        
    })
    $('.header .arrow').click(function(){
        $('html , body').animate({
            scrollTop : $('.features').offset().top
        },1000)
    })
    $('.show-more').click(function(){
        $(this).css('display' , 'none')
        $('.hidden').fadeIn(1500)
        
    })

    //checkarrow
    var leftarrow = $('.fa-chevron-left')
    var rightarrow = $('.fa-chevron-right')
    function checkclient(){
        $('.client:first').hasClass('active') ? leftarrow.hide() : leftarrow.show();
        $('.client:last').hasClass('active') ? rightarrow.hide() : rightarrow.show();
    }
    checkclient()

    $('.testim svg').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(500 , function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(500);
                checkclient()
            })
        }else{
            $('.testim .active').fadeOut(500 , function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(500);
                checkclient()
            })
        }
    })
})
