$(function () {
  $.ajax({
    // 请求方式
    type:'get',
    //请求路径  接口地址 /category/queryTopCate gory
    url:'/category/queryTopCategory',
    // 参数
    data:{},
    // 回调函数
    success:function (rows) {
      // 如果返回值是对象就在模版方法中直接传人对象
      /* 如果返回值是数组就在模版方法中将数组包装为对象 例如{items:rows}*/
      // 这里只是加载一个一级分类
       /* 通过模版 把数据动态生成html的 */
      var html = template('firstCat',rows);
      // 页面渲染
      $('.lt_left ul').html(html);
      // 二级分类需要的id
      var id = rows.rows[0].id;

      // 加载第一个的二级分类
      getSecondCategoryData({"id":id},function (data) {
        /* 通过模版 把数据动态生成html的 */
        var html = template('secondCat' ,data);
        // 渲染到页面
        $('.lt_right_right').html(html);
        
      })
    } 
  })
  // 为左侧一级分类超链接绑定点击事件
  $('.lt_left ul ').on('tap','a',function () {
    // 因为点击时是widows的
    var _this = $(this);
    // data()方法是用来取自定义属性
      var id = $(this).data('id');
      getSecondCategoryData({'id':id},function (data) {
        /* 通过模版 把数据动态生成html的 */
        var html = template('secondCat' ,data);
        // 渲染到页面
        $('.lt_right_right').html(html);
        // 链式编程 点时候切换高亮
        _this.parent().addClass('active').siblings().removeClass();
      })
  })

});
/* pa 传递的参数 这里需要的参数是id*/
/* callback 获取到数据后 该如何处理 */
var getSecondCategoryData = function (pa,callback) {
  $.ajax({
    // 请求方式
    type:'get',
    // 请求路径   端口路径
    url:'/category/querySecondCategory',
    // 参数
    data:pa,
    // 回调函数
    success:function (rows) {
    // 设置回调函数
      callback && callback(rows);
    }
  })
}

