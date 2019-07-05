$(function(){
  var currentPage=1;
  var pageSize=5;
  getFirst ()
function getFirst (){
  $.ajax({
    type:"get",
    url:"/category/queryTopCategoryPaging",
    data:{
      pageSize:pageSize,
      page:currentPage
    },
    dataType:"json",
    success:function(data) {
       console.log(data)
       var htmlStr = template('tpl-first', data);
       $("tbody").html(htmlStr);
       $("#paginator").bootstrapPaginator({
         bootstrapMajorVersion: 3,
         //指定总页数
         totalPages: Math.ceil(data.total / data. size),
         //当前页
         currentPage:data.page ,
         onPageClicked: function(a,b,c,page) {
           console.log(page)
           //通过page获取点击的页码
           currentPage= page;
           getFirst();
          } 
      })
    }
  })
 }
 
 //添加一级分类
 
 addFirst();
 saveFirst();

function addFirst() {
  $("#addBtn").off("click").on("click",function(){
    $("#firstModal").modal("show")
  })
}
function saveFirst () {
  //表单插件的校验
  
  $("#addInBtn").off("click").on("click", function(){
     
    $("#form").bootstrapValidator({
      //配置图标
      feedbackIcons:{
        valid:'',
        invalid:'',
        validating:''
      },
      //配置字段
      fields:{
        categoryName:{
          validators:{
            notEmpty:{
              message:"一级分类不能为空"
            }
          }
        }
      }
    })
    //注册表单成功事件
    $("#form").on("success.form.bv",function(e) {
      e.preventDefault();
      //提交
      $.ajax({
        url:"/category/addTopCategory",
        type:"post",
        data:{
          categoryName :$("input[name='categoryName']").val()
        },
        dataType:"json",
        success: function(data){
          $("#firstModal").modal("hide");
          getFirst();
          console.log(data)
          //表单清空
          $("#form").data("bootstrapValidator").resetForm(true )
        }
      })
    })
  })
}

})