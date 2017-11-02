// 初始化滚动轮播
var gallery = mui('.mui-slider');
gallery.slider({
  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});

//初始化滚动
  mui('.mui-scroll-wrapper').scroll({
  indicators: false,
  deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

// $(".lt-foot").siblings().removeClass();
$(".lt-foot a").on('tap',function () {
  $(this).addClass('active');
})

