function EncryptSubjectResult()
{
    this.code = "S_OK";//
    this.encryptedSubjectBase64 = "";// 
}

/**
 *
 *
 * @param    {string}  contextId
 * @param     {string}  messageId
 * @param     {string}  subject
 * @returns  {EncryptSubjectResult}
 */
function encryptSubject(plugin,contextId, messageId, subject)
{
    //var utf8_str = UTFTranslate.Change(subject);
    var tmp = plugin.WST_EncryptSubject(messageId,subject);
    var result = new EncryptSubjectResult();
    result.code = tmp[0];
    result.encryptedSubjectBase64 = tmp[1];
    return result;
}
