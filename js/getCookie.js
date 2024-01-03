
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

// -----飾品-------

$('.add-to-cart').click(function(){
    alert("成功加入購物車！");
    // 如果設data
    // var id = $('.product1').attr('data-id');
    // var pname = $('.product1').attr('data-pname');
    var price = $('.product1').attr('data-price');
    var qty = $('.countnum').val();

    
    //加id之後 
    // setCookie('pname', pname , 1);
    setCookie('price', price , 1);
    setCookie('qty', qty, 1);
})


$(document).ready(function(){
    function getCookie2(){
        // var id = $('.product1').attr('data-id');
        // var pname = getCookie('p1pname');
        // var pname = getCookie('pname');
        var price = getCookie('price');
        var qty = getCookie('qty');

        // $('.product1Name h3').text(getCookie('pname'));
        $('.product1Price').text('$' + price);
        $('.product1Qty').val(qty);
        console.log(getCookie('pname'))
    }

    getCookie2();

    // if($('.product1Name h3').text() == ""){
    //     $('.cart-info').hide();
    // }else{
    //     $('.cart-info').show()
    // }



    // $('.fa-xmark').click(function(){
    //     $('.cart-info').hide()
    // })

});




$(document).ready(function () {
    function removeProductCookie() {
        // 移除相應的 cookie
        document.cookie = 'product_pic=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'product_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'product_price=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'product_qty=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    function updateCartInfo() {
        var pname = getCookie('product_name');

        if (!pname) {
            // 如果商品名稱為空，表示尚未添加商品至購物車
            removeProductCookie();
            $('.cart-info').hide();
            // alert("尚未添加商品至購物車！");
            $('.cart-pay').hide();
            $('.cart-empty').show();
        } else {
            $('.cart-info').show();
            $('.cart-pay').show();
        }
    }

    // 初始載入時更新購物車資訊
    updateCartInfo();

    // 點擊加入購物車按鈕的事件
    $('.add-to-cart').click(function () {
        var ppic = $(this).data('pic');
        var pname = $(this).data('pname');
        var price = parseFloat($(this).data('price'));
        var qty = parseInt($('.countnum').val());

        setCookie('product_pic', ppic, 1);
        setCookie('product_name', pname, 1);
        setCookie('product_price', price, 1);
        setCookie('product_qty', qty, 1);

        updateCartInfo();
    });

    // 移除購物車商品的事件
    $('.fa-xmark').click(function () {
        // 移除相應的 cookie
        removeProductCookie();

        // 更新購物車資訊
        updateCartInfo();
    });
});




//---購物車總計計算---


// document.getElementById('subtotal').innerText = '$' + (1000 * (document.querySelector('.countnum').value));
// document.getElementById('cart-total').innerText = '$' + (1000 * (document.querySelector('.countnum').value));



// // 获取输入框元素
// var countnumInput = document.querySelector('.countnum');

// // 获取你想要设置的值（假设这里是一个数字）
// var newValue = parseInt(document.querySelector('.countnum').value); // 你可以将这个值替换为你需要的任何值

// // 设置输入框的值
// countnumInput.value = newValue;

// // 更新页面上的其他元素，比如显示新值的元素
// document.getElementById('someElementId').innerText = 'Value: ' + newValue;




function updateTotals() {
    // 获取数量和单价
    // var countnum = parseInt(document.querySelector('.countnum').value);
    var countnum = parseInt(document.getElementsByClassName('product_qty').value);
    var unitPrice = 1000;

    // 计算小计和总额
    var subtotal = countnum * unitPrice;
    var total = subtotal;

    // 更新小计和总额的元素内容
    document.getElementById('subtotal').innerText = '$' + subtotal;
    document.getElementById('cart-total').innerText = '$' + total;
    // alert(parseInt(document.querySelector('#countnum').value));
    alert(parseInt(document.getElementsByClassName('product_qty').value));
    // alert(qty);
    // alert(unitPrice);
}

// 在需要的地方调用该函数
updateTotals();

// 获取输入框的值并将其解析为整数
// var countnumValue = parseInt(document.querySelector('#countnum').value);
var countnumValue = parseInt(document.getElementsByClassName('product_qty').value);
console.log(countnumValue);
// 输出到控制台
console.log(countnumValue);

// 在这里你可以使用 countnumValue 变量进行其他操作
// 例如，将其应用到元素的innerText中
document.getElementById('subtotal').innerText = 'Value: ' + countnumValue;














