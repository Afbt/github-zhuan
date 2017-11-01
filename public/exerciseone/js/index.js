var gallery = mui('.mui-slider');
gallery.slider({
  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});


// mui('.mui-scroll-wrapper').scroll.options = {

//   indicators: false, //是否显示滚动条
//   deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
//   bounce: true //是否启用回弹
//  }
  mui('.mui-scroll-wrapper').scroll({
  indicators: false,
  deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});