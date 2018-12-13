function stringConnect(){
    this._str_=new Array();
}
stringConnect.prototype.append=function(a){
    this._str_.push(a);
}
stringConnect.prototype.toString=function(){
    return this._str_.join();
}

stringConnect.prototype.toStringWithSeparator=function(a){
    return this._str_.join(a);
}

class plugin{
    constructor(x,y){
    this.name = x;
    this.age = y;
    this.LocalUrl = "https://localhost:8422";
    }
    //基本的私有方法
     httpPost(URL, PARAMS){
         
         var re=new Array();
         re[0]="ok";
         re[1]=" ";
        var oAjax = new XMLHttpRequest();
        //2,open
        oAjax.open('POST',URL, false);//false表示同步请求
        //3,setHeader,get请求不需要
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        //4，定义返回触发的函数，定义在send之前，不然同步请求就出问题
        oAjax.onreadystatechange = function() {
            //6,通过状态确认完成
            if (oAjax.readyState == 4 && oAjax.status == 200) {
                //7,获取返回值，解析json格式字符串为对象
                //var data = JSON.parse(oAjax.responseText);
                var data = (oAjax.responseText);
                // console.log('文字信息');
                // console.log(data);
                re[0]="ok";
                re[1]=data;
            } else {
                console.log(oAjax);
                re[0]="erro";
                re[1]=data;
            }
        };
        var paramstr=new stringConnect;
        for (var x in PARAMS) {
            paramstr.append(x+"="+PARAMS[x]);  //不需要+"&"
        }
        var reqstr=paramstr.toStringWithSeparator("&");
        // reqstr=reqstr.substring(0,reqstr.lastIndexOf("&"));
        console.log("request string=="+reqstr);
        //5发送内容格式"a=1&b=2"，而不是json
         oAjax.send(reqstr);
        return re;
 
    }
    
     WST_EncryptSubjec(messageId,subject){
     // var PARAMS={"metod",param1,param2,param3}
        var PARAMS={"metod":"WST_EncryptSubjec","messageId":messageId,"subject":subject};
         var re=this.httpPost(this.LocalUrl,PARAMS);
         return re;
     }
    
     WST_EncryptSubject(messageId,subject){
        var PARAMS={"metod":"WST_EncryptSubject","messageId":messageId,"subject":subject};
         var re=this.httpPost(this.LocalUrl,PARAMS);
         return re;
     }
}
