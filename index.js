$(function(){
    $('.imgslider').bxSlider({auto:'true'});
    /*$('.gnb_area .inner .gnb .depth1 li').on('mouseover',function(){
         $(this).children('.depth2_area .depth2_box').stop().slideDown();
    })*/

    
    $('.depth1').on('mouseover',function(){
        var index=$(this).index();
        $('.depth2_area').show();
        $('.depth2_box').eq(index).show();
        $('.depth2_box').eq(index).siblings().hide();
    })
    
    $('.mainvisual,.main_logo').on('mouseover',function(){
         $('.depth2_box,.depth2_area').hide();
    })
    
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        minDate:0,	
        maxDate:'+1M',
        prevText: '이전 달',	
        nextText: '다음 달',	
        closeText: '닫기', 
        currentText: '오늘', 
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],	
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	
        showMonthAfterYear: true,	
        yearSuffix: '년',	
        showButtonPanel: true,
        buttonImageOnly: true,	
        buttonImage: "images/calendar.gif",	
        buttonText: "Select date"
    });
    var checkinDate = $(".checkin_date").val();
    var checkoutDate = $(".checkout_date").val();

    //체크아웃이 먼저 눌려잇을 땐 어카쥐..
    $(".checkin_date").datepicker({
        onClose: function(){
            checkinDate = $(".checkin_date").val();
            $(".checkout_date").datepicker({
                minDate: checkinDate,
                onClose: function(){
                    checkoutDate = $(".checkout_date").val();
                    var check1 = new Date(checkoutDate) - new Date(checkinDate);
                    var check2 = 24*60*60*1000;
                    var countDate = parseInt(check1/check2)
                    $(".count_date").val(countDate + "박" + (countDate+1) + "일");
                }
            });  
        } 
    }); 
});
        

