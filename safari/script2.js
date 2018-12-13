document.addEventListener("DOMContentLoaded", function(event) {
                          // alert("hello");
                          insertHtml();
                          checkCXSMailService();
});

document.addEventListener("DOMContentLoaded", function(event) {
                          // alert("hello");
                          var newElement = document.createElement("img");
                          // newElement.src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3240775915,1475460214&fm=26&gp=0.jpg"; //安装包基路径
                          // newElement.src = ./google.png"; //安装包相对路径 有问题
                          newElement.src = safari.extension.baseURI+"google.png"; //安装包基路径  okok
                          document.body.insertBefore(newElement,
                                                     document.body.firstChild);
                          });

function checkCXSMailService(){
    var serviceInstalled=true;
    var serviceStarted=false;
    // do check things
    if(!serviceInstalled){
        alert("请安装橙讯安全邮加解密服务插件");
    }else{
        if(!serviceStarted){
            alert("启动加解密服务...");
        }
    }
    
}

function addJS(name){
    var s = document.createElement("script");
    var link=safari.extension.baseURI + name;
    s.src = link;
    document.body.insertBefore(s,document.body.firstChild);
}


function insertHtml(){
                          var a0=document.createElement("a"); 
                          a0.href="ms:// "; 
                          a0.innerHTML="拉起服务"; 
                          document.body.insertBefore(a0,
                                                     document.body.firstChild);
                          console.log("insert a herf link 拉起服务");
                          
                          var a=document.createElement("a"); 
                          a.href="javascript:alert('A link.')"; 
                          a.innerHTML="selflink"; 
                          document.body.insertBefore(a,
                                                     document.body.firstChild);
                          console.log("insert a herf link");


                          var a2=document.createElement("a"); 
                          a2.href="javascript:encryptSub()"; 
                          a2.innerHTML="加密主题";
                          document.body.insertBefore(a2,
                                                     document.body.firstChild);
                          console.log("insert a a2 herf link");

                           //初始化
                          var a3=document.createElement("a"); 
                          a3.href="javascript:instantPlugin()"; 
                          a3.innerHTML="初始化";
                          document.body.insertBefore(a3,
                                                     document.body.firstChild);
                          console.log("insert a a3 herf link");
                          //初始化
                          //嵌入js
                          addJS("plugin.js");
                          addJS("encryptmanager.js");
                          addJS("script2.js");
                          addJS("globalfuncs.js");

 }
