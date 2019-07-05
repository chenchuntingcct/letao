$(function(){
    //
    var currentPage=1;
    var pageSize = 5;
    var currentId; 
    var currentState
    
        getUserInfo();
        
  
  //获取表格信息
  function getUserInfo () {
    $.ajax({
      type: "get",
      url:"/user/queryUser",
      data:{
        page: currentPage,
        pageSize: pageSize
      },
      dataType:"json",
      success:function (data) {
        console.log(data)
        //template(模板ID, 对象)
        var htmlStr = template('tpl', data)
        $("tbody").html(htmlStr)
        $("#paginator").bootstrapPaginator({
          //配置bootrap版本
          bootstrapMajorVersion: 3,
          //指定总页数
          totalPages: Math.ceil(data.total / data. size),
          //当前页
          currentPage:data.page,
          onPageClicked: function(a,b,c,page) {
            console.log(page)
            //通过page获取点击的页码
            currentPage= page;
            getUserInfo();
          }
        })
      }
    })
  }
  //禁用 启用
  $("tbody").on('click','.btn' ,function () {
    //显示模态框
    $("#userStateModel").modal("show");
      currentId = $(this).parent().data("id");
      currentState = $(this).hasClass("btn-danger")?0:1
      console.log(currentId)
      console.log(currentState)
      changeUserState ();
  })
  
  //切换用户状态
  function changeUserState () {
    $("#submitBtn").off("click").on("click",function (){
      console.log("我切换状态了吗")
      $.ajax({
        type: "POST",
        url:"/user/updateUser",
        data:{
          id:currentId,
          isDelete:currentState
        },
        dataType:"json",
        success: function (data) {
          if(data.success){
            $("#userStateModel").modal("hide");
            getUserInfo();
          }
        }
      })
    })
  }
})
  
  
  
