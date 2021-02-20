//==============================
//    Owl Carosal Slider
//===============================

$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 40) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })

})




//============Scroll Top======================
$(document).ready(function () {

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });


    $('.top').hide();

    $(window).scroll(function () {
        var topButton = $(this).scrollTop();

        if (topButton < 400) {
            $('.top').fadeOut();
        } else {
            $('.top').fadeIn();
        }
    });

});



//============Password Hide Show======================

var eye = false;

function toggle() {

    if (eye) {
        document.getElementById("password").setAttribute('type', 'password');
        document.getElementById("eye1").style.display = 'none';
        document.getElementById("eye").style.display = 'block';
        eye = false;
    } else {
        document.getElementById("password").setAttribute('type', 'text');
        document.getElementById("eye").style.display = 'none';
        document.getElementById("eye1").style.display = 'block';
        eye = true;
    }

};

//============Cart Section======================

$(document).ready(function () {

    $('.cart-area').click(function () {
        $('.add-cart-section').show(200);
    });


});

$(document).ready(function () {

    $('.cart-icon').click(function () {
        $('.add-cart-section').hide(100);
    });


});


//==============Toastr======================

$('.add-to-cart').click(function () {
    $(function () {
        toastr.success("Successfully Added", "Product");
    });

    toastr.options = {
        "positionClass": "toast-bottom-right",
        "timeOut": "3000",
    }
});





//============Zoom======================
$(".zoom").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
});
