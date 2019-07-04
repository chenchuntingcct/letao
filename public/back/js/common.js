//登录拦截(排除掉登录页面)
  console.log('登录拦截了...')
  if(location.href.indexOf("login.html")===-1){
    $.ajax({
      type: "get",
      url:"/employee/checkRootLogin",
      dataType:"json",
      success: function (data) {
        console.log(data)
        if(data.success) {
          
        }
        if(data.error===400){
          location.href="login.html"
        }
      }
    })
  }

//ajaxComplete   当每个ajax完成的时候调用  (不管成功还是失败)
$(document).ajaxStart(function(){
  NProgress.start();
})

$(document).ajaxStop(function(){
  NProgress.done();
})

//开启进度条
$(function () {
  $(".typeclass").click(function (){
    $(".child").stop().slideToggle();
  })
  $(".icon-menu").click(function () {
    $(".lt_aside").toggleClass("hideMune")
    $(".lt_main").toggleClass("hideMune")
  })
  $(".icon-logout").click(function () {
    $('#myModal').modal('show')
  })
  $("#lgoutbtn").click(function () {
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      dataType:"json",
      success:function(data) {
        if(data.success) {
          location.href="login.html"
        }
      }
    })
  })
})

//结束进度条






