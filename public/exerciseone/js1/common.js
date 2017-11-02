// 得到get请求的参数并且把它转换为对象
// console.log(location.search);
// 建个空的对象
var lt = {};
// 将得到的http协议里参数转换为对象

lt.getParameter = function (str) {
    var pa = {} ;//再建个空的对象为下步

    // 去除参数字符字符串最前面的 问号
    str = str.substring(1);
    // 按&符号来分隔
    var arr = str.split('&'); //key=1
    // 循环遍历每一个key对应的value
    for(var i=0;i<arr.length; i++){
        //  每个key和value 通过=号分隔
        var item = arr[i].split('='); 
        // 将参数添加到对象
        pa[item[0]]= item[1];
    }
    // 当调用这个函数就返回这个对象
    return pa;
} 