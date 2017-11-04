
$(function () {
  /*初始化区域滚动*/
mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

var cart = function (type,url,data,callback) { 
   var data =  data||{}  
  $.ajax({
    // 请求方式
    type:type,
    //请求路径
    url:url,
    // 传入后台的参数 查 不需要参数了
    data:data,
    // 回调函数
    success:function(result) {
        callback&&callback(result)
    }
  })
}
    // 调用下 查 的函数
    var add = function(){
      cart('get','/cart/queryCart',{},function (result) {
            // 模版生成
        // 因为result 参数对象数组 所以要转对象 {item:result}
        var html = template('cartList',{items:result});
        // 渲染到页面  
        $('#OA_task_2').html(html);
    });
  }
    add();

  $('body').on('change','.check',function () {
    ched();
  })
  // 点击复选框 定单总金额 立即算出的函数
  var ched = function () {
    var ched =$('.check:checked');
    var ches =0;
    for (var i = 0; i < ched.length; i++) {
      ches += (ched[i].dataset['num']*ched[i].dataset['price']);
    }
    $('#cartAmount').text(Math.ceil(ches*100)/100);
  }

  $('.mui-table-view').on('tap','.mui-btn-blue',function () {
    // 获取到在编辑的a标签里储存的自定义属性
    var data1 = $(this)[0].dataset;//.dataset;
    // console.log(data1);
    // cartAmount
    
    // 模版生成
    var html = template('editCart',data1);
    // replace(/[\r\n]/g, "") 这里用了个正则来把 换行给 替换为空字符
    mui.confirm(html.replace(/[\r\n]/g, ""), '操作提示', ["是","否"], function(e){
      // 选择 的 是 e参数里会有index:0
      // 选择 的 否 e参数里会有index:1
      if(e.index == 0){
          var data={  
            id:data1['id'],
            size:$('.lt-itemes>.psize.active').text(),
            num:$('.mui-input-numbox').val(),
          }
          cart('post','/cart/updateCart',data,function (result) {
            if(result.success){
              mui.toast('修改成功');
              add();
              ched();
            }
          })
      } else {
        mui.toast('亲 买了把。。。。');
        
      }

    });
    // 初始化下
    mui(".mui-numbox").numbox();
    // 给编辑
    $(document).on("tap",".lt-itemes",function(){
      var $this = $(this);
      $this.siblings().children().removeClass("active");
      $this.children().addClass("active");
    });



  })


})