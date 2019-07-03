$(function () {
  // 1. 进行表单校验
  //    校验要求: (1) 用户名不能为空
  //              (2) 密码不能为空, 且必须是 6-12 位
  $("#form").bootstrapValidator({
    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    //配置字段
    fields: {
      username: {
        //配置校驗規則
        validators: {
          notEmpty: {
            message:"用户名不能为空"
          },
          stringLength:{
            min:2,
            max:6,
            message:"用户名长度必须是2-6位"
          },
          callback: {
            message:"用户名不存在"
          }
          
        }
      },
      password: {
        validators: {
          notEmpty: {
            message:"密码不能为空"
          },
          stringLength: {
            min:6,
            max:12,
            message:"密码必须是6-12位"
          },
          callback: {
            message:"密码错误"
          }
        }
      }
    }
  });
  
  $("#form").on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$("#form").serialize(),
      dataType:"json",
      success: function (data) {
        console.log(data)
        if(data.success){
          //
          location.href="index.html"
        }
        switch(data.error){
          case 1000:
            $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
            break;
          case 1001:
          $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
            break;
        }
        /* if(data.error=='1000'){
          //用户名不存在
          
        } */
        
      }
    })
});
//重置校验状态
  $('[type="reset"]').click(function () {
    $("#form").data("bootstrapValidator").resetForm()
  })
})