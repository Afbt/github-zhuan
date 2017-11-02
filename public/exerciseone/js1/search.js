/**
 * Created by Administrator on 2017/11/2.
 */
/*数据的动态渲染*/
$(function(){

    /*添加搜索按钮的点击事件：*/
    $(".mui_btn_blue").on("tap",function(){
        /*1.获取用户输入的商品名称*/
        var value = $("#user_Input").val();
        // 加到http协议里 变成get请求  然后跳转
        location.href = "searchList.html?key="+value;
    });
})
