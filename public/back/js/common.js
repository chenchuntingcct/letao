//开启进度条


//结束进度条


//ajaxComplete   当每个ajax完成的时候调用  (不管成功还是失败)
$(document).ajaxStart(function(){
  NProgress.start();
})

$(document).ajaxStop(function(){
  NProgress.done();
})