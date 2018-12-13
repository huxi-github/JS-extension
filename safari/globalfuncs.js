    var plug=null;
    
    function instantPlugin()
    {
        if(!plug)
        plug=new plugin(1,2);
        if(!plug)
        alert("初始化成功");
    }

    function encryptMsg()
    {
      var teststr="hellossjcksjcksck";
      var msgid="12456245";
      var re=plug.WST_EncryptSubjec(msgid,teststr);
      console.log(re);
    }
    
    function encryptSub()
    {   var contextId=0;
        var subject="helloencryptMsg，this is subject for testing";
        var messageId="12456245";
        var re=encryptSubject(plug,contextId, messageId, subject);
        console.log(re);
    }