$(function () {

  var id=lt.getParameter(location.search);

  // 渲染页面
  $.ajax({
    // 请求方式
    type:'get',
    // 接口
    url:'/product/queryProductDetail',
    // 往后台传入的参数
    data:id,
    //回调函数
    success:function (result) {
      // 生成模版数据
      var html = template('proDuct',result);
      // 将生成的模版数据渲染
      $(".lt-content .mui-scroll").html(html);
      // 手动初始化轮播图
      var gallery = mui('.mui-slider');
      gallery.slider({
          interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
      });
      // 点击切换尺码 上的active  因为是动态产生的数据所以要事件委托 
      $('.lt-content').on('tap','.psize',function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      });
      //手动初始化数字输入框
      mui('.mui-numbox').numbox();
    }
  });
  // /* 加入购物车 */
  $('.mui-btn-warning').on('tap',function () {
    // 因为传入的参数需要三个
    var num=$('.mui-input-numbox').val(); //产品数量
    var size=$('.psize.active').text(); //产品尺码
    var data ={
      productId:id['id'], //产品id
      num:num,  //产品数量
      size:size //产品尺码  
    }
    $.ajax({
      //请求方式
      type:'post',
      // 请求路径  接口
      url:'/cart/addCart',
      //需要往后台传入的参数
      data:data,
      //回调函数
      success:function(result){
        // 通过返回来的数据来判断是否登录
        // 登录后才能添加购物车
        if( result.error && result.error == 400 ){
          // 这里是在http协议中增加参数 并且携带到跳转到的网页
          location.href = 'login.html?returnURL='+location.href;
        } else {
          mui.confirm('添加购物车成功,是否进入购物车查看', '操作提示', ["是","否"], function(e){
              if(e.index == 0){
                location.href = 'cart.html'
              } 
          });
        }
      }
    })
  })


})