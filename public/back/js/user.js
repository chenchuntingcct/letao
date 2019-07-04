
  //获取表格信息
  function getUserInfo () {
    $.ajax({
      type: "get",
      url:"/user/queryUser",
      dataType:"json",
      success:function (data) {
        console.log(data)
      }
    })
  }
  
