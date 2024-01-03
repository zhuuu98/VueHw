
// ---漢堡---

$('#ham').click(function(){
    // 如果 #hamBar2 的不透明度不是 0，表示已經點擊過，需要還原
    if ($("#hamBar2").css('opacity') !== '0') {
        // 將 #hamBar2 的不透明度設置為 0
        $("#hamBar2").css({'opacity': '0'});
        
        // 將 #hamBar1 往下移動 10px 且傾斜 45 度
        $("#hamBar1").css({
            'transform': 'translateY(11px) rotate(45deg)',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $("#hamBar3").css({
            'transform': 'translateY(-11px) rotate(-45deg)',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $('#overlay').show();

        $('body').addClass('no-scroll');


    } else {
        // 如果 #hamBar2 的不透明度已經是 0，表示是還原狀態，則重置所有屬性
        $("#hamBar2").css({'opacity': '1'});  // 還原 #hamBar2 的不透明度
        $("#hamBar1").css({
            'transform': 'none',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $("#hamBar3").css({
            'transform': 'none',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $('#overlay').hide();

        $('body').removeClass('no-scroll');
    }
});

$('.fa-sort-down').click(function() {
    $(this).toggleClass('rotate180');
});



// ---首頁小header---

$(function () {
    let showHeight = 300;

    // 檢查視窗寬度，只在寬度大於 768px 時執行
    if ($(window).width() > 768) {
        $('.index-mb-header').css({
            // display: 'block',
            opacity: 0,
        });

        $(window).scroll(function () {
            $('.index-mb-header').each(function () {
                let areaTop = $(this).offset().top; // 物件和螢幕的距離

                if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
                    $(this).stop().animate({
                        opacity: 1,
                    }, 250);
                } else {
                    $(this).stop().animate({
                        opacity: 0,
                    }, 200);
                }
            });
        });
    }
});




//----首頁slider----

$(function () {
    let divWidth = $('#sliderBoard').width() //div的寬度 = li的寬度
    let imgCount = $('#content li').length //計算有幾張圖片

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`) //增加圓圈的li標籤
    }
    $('#contentButton li:first').addClass('clicked') //針對圓圈li的第一個小孩增加class : clicked 

    $('#content li').width(divWidth)   //li的寬度
    $('#content').width(divWidth * imgCount)   //ul的寬度 = li的個數 * li的寬度


    let index = 0
    let timer = setInterval(moveToNext, 3000)

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 3000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    }
});


// ----小圖換大圖----
// 使用 on 函數簡化事件處理
$(".small:first").css('border', '2px solid #6c6c6c');

$(".small").on("click", function() {
    // 將大圖片的 src 設置為被點擊的小圖片的 src
    $(".large").attr("src", $(this).attr("src"));
    
    // 為被點擊的小圖片添加黑色邊框
    $(this).css('border', '2px solid #6c6c6c');

    // 移除其他小圖片的邊框
    $(".small").not(this).css('border', 'none');
});



//----NAV搜尋放大鏡消失-----
$('.search').click(function() {
    // Check if elements with the class "search-logo" are currently visible
    if ($('.search-logo').is(':visible')) {
        // If visible, hide them
        $('.search-logo').hide();
    } else {
        // If not visible, show them
        $('.search-logo').show();
    }
});


//----篩選filter----

//全部商品
$('.filter-all').click(function(){
    $('.card').show();
})

//項鍊
$('.filter-necklace').click(function(){
    $('.card').show();
    $('.card:not(.necklace)').hide();
});

//手鍊
$('.filter-bracelet').click(function(){
    $('.card').show();
    $('.card:not(.bracelet)').hide();
});

//戒指
$('.filter-ring').click(function(){
    $('.card').show();
    $('.card:not(.ring)').hide();
});

//耳環
$('.filter-earring').click(function(){
    $('.card').show();
    $('.card:not(.earring)').hide();
});


//-----預約預設今天日期-----
 // 獲取今天的日期
    var today = new Date();
            
 // 將日期格式化為 "YYYY-MM-DD"，適用於 input type="date"
    var formattedDate = today.toISOString().split('T')[0];

 // 將預設值設置為今天的日期
    $('#today').val(formattedDate);

 // 將最小值設置為今天的日期
$('#today').prop('min', formattedDate);




//---登入提醒---
$('.signin-btn').click(function(){
    alert('已成功登入！');
});


//---預約課程加入購物車----
$('.re-add-to-cart').click(function(){
    alert("成功加入購物車！");
})













