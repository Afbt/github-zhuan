


$.ajax({
  // 请求方式
  type:'GET',
  //请求路径  接口地址 /category/queryTopCate gory
  url:'/category/queryTopCategory',
  // data:{},
  success:function (result) {
    console.log(result);
  } 
})