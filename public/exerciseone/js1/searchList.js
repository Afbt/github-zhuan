// 获取get请求里面的参数


$(function(){
        // 获取到get请求的参数
        var str =location.search;
        // 这是个封装好的用来把字符串转对象的函数
        var pa = lt.getParameter(str); 
        var loadData = function (pa) { 
        // ajax
        var data= { 
          proName:pa['key'],
          page:1,
          pageSize:100,
        }
        $.ajax({
          // 请求方式
          type:"get",
          // 请求路径   给好的接口 /product/queryProduct
          url:"/product/queryProduct",
          // 参数
          data:data,
          // 回调函数
            success:function (result) {
            //模版引擎   
            var html = template('porductList',result);
            //渲染到页面
            $('.lt-product ul').html(html);
  
          }
        })
      }
  mui.init({
      pullRefresh : {
          container:".mui-scroll-wrapper",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
          down : {
              height:50,//可选,默认50.触发下拉刷新拖动距离,
              auto: false,//可选,默认false.首次加载自动下拉刷新一次
              contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
              contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
              contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
              //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
              callback :function(){
                loadData(pa);
                //pullRefresh() 在进入页面时不加载 
                setTimeout(function() {
                //endPulldownToRefresh() 每次向下滑动时在会后结束后把刷新结束
                mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh();
                }, 1000);
              } 
          },
          up : {
            height:50,//可选,默认50.触发下拉刷新拖动距离,
            auto: false,//可选,默认false.首次加载自动下拉刷新一次
            contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            callback :function(){
              loadData(pa);
              //pullRefresh() 在进入页面时不加载 
              setTimeout(function() {
              //endPulldownToRefresh() 每次向下滑动时在会后结束后把刷新结束
              mui('.mui-scroll-wrapper').pullRefresh().endPullupToRefresh();
              }, 1000);
            } 
        },
      }
  });

    // 调用一次用做初始化
    loadData(pa);
});

