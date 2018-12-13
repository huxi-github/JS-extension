// function performCommand（event）
// {
//     if（event.command ===“reload-page”）{
//         var currentURL = event.target.browserWindow.activeTab.url;
//         if（currentURL）
//             event.target.browserWindow.activeTab.url = currentURL;
//     }
//     console.log("cmd"+event.command+"executed");
// }
 
// function validateCommand（event）
// {
//     if（event.command ===“reload-page”）{
//         //如果选项卡中没有加载URL，请禁用该按钮。
//         event.target.disabled =！event.target.browserWindow.activeTab.url;
//     }
// }
 
// //如果事件处理程序位于全局HTML页面中，
// //注册申请：
// safari.application.addEventListener（“command”，performCommand，false）;
// safari.application.addEventListener（“validate”，validateCommand，false）;
// //如果事件处理程序在扩展栏中，
// //在父窗口注册：
// // safari.self.browserWindow.addEventListener（“command”，performCommand，false）;
// // safari.self.browserWindow.addEventListener（“validate”，validateCommand，false）;