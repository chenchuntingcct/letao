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

