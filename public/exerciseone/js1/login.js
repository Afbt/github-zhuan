
$(function () {
  // 点击输入
$('.mui-btn-primary').on('tap',function () {
    // 获取用户书输入的name 并提交后的数据
    var name = $('.mui-input-clear').val();
    // 获取用户书输入的mima 并提交后的数据
    var mima = $('.mui-input-password').val();

    if( ($.trim(name)=='') && ($.trim(mima)=='') ){
      mui.toast('亲 。。请输入用户名或密码请输入密码');
      return false;
    }
    
    var data = {
      username:name,
      password:mima
    }
    $.ajax({
      // 请求方式
      type:'post',
      // 请求路径  接口
      url:'/user/login',
      //传入后台的参数
      data:data,
      // 回调函数
      success:function(result){

        // 成功会返回一个{success:true或是fasle}
        if (result.error == 403) { 
          mui.toast(result.message);
          return false;
        }
        if(result.success){
          // alert('登陆成功');
           /*http://localhost:3000/m/login.html?returnURL=http://localhost:3000/m/product-detail.html?id=1*/
          //  indexOf() 这个方法判断后只会输出0或1
          if( location.search && location.search.indexOf('?returnURL')==0 ){
              //replace() 
              location.href = location.search.replace('?returnURL=','');
          } else {
            // 不是从其他页面跳转过来的就 默认跳转到首页 index.html
            location.href = "index.html";
          }
        }
      }
    })


})
  
})