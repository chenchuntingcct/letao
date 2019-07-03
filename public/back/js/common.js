//开启进度条


//结束进度条


//ajaxComplete   当每个ajax完成的时候调用  (不管成功还是失败)
$(document).ajaxStart(function(){
  NProgress.start();
})

$(document).ajaxStop(function(){
  NProgress.done();
})

//登录拦截(排除掉登录页面)
if(!location.href.indexOf("login.html")){
  $.ajax({
    type: "get",
    url:"/employee/checkRootLogin",
    dataType:"json",
    success: function (data) {
      console.log(data)
      if(data.error='400'){
        location.href="login.html"
      }
    }
  })
}
