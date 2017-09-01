var gridItem = new JDUI.instance.GridItem({
    title: "",
    hook: ".grid-item-wrap",
    gridNum: '3',
    value: '0',
    map: [{
        icon: "&#xe681;",
        text: "模式1",
        value: "0"
    }, {
        icon: "&#xe67a;",
        text: "模式2",
        value: "1"
    }, {
        icon: "&#xe65f;",
        text: "模式3",
        value: "2"
    }, {
        icon: "&#xe665;",
        text: "模式4",
        value: "3"
    }, {
        icon: "&#xe67a;",
        text: "模式5",
        value: "4"
    }, {
        icon: "&#xe65f;",
        text: "模式6",
        value: "5"
    }],

    beforeTap: function() {
        console.log("before");
    },
    onTap: function(item, index, content) {
        console.log('下发的值: ' + index);
    },
    afterTap: function() {
        console.log("after");

    }
});
// var mySwiper = new Swiper('.swiper-container1', {
//     // autoplay: 500,//可选选项，自动滑动
//     slidesPerView : 3,
//     // slidesPerGroup : 8,
// })
var mySwiper = new Swiper('.swiper-container', {
    // autoplay: 500,//可选选项，自动滑动
    slidesPerView : 3,
    // slidesPerGroup : 8,
});
var value = '2';
var elem = $('.swiper-slide').data('2');
console.log(elem);
$('.swiper-slide').click(function() {
    $('.swiper-slide').removeClass('active-item');
    $(this).addClass('active-item');
});
