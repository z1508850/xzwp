
function gx2(){document.cookie="night=0;path=/",iziToast.info({timeout:80000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"增加周卡暗夜链接",message:"自带BOT 支持NE BGX"})}




function gx1(){document.cookie="night=1;path=/",iziToast.info({timeout:10000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"增加天卡OMG链接",message:"自带BOT 支持NE BGX"})}

function gx3(){document.cookie="night=2;path=/",iziToast.info({timeout:10000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title: "增加天OMG接", message:"自带BOT 支持NE BGX"})}

function gx4(){document.cookie="night=3;path=/",iziToast.info({timeout:10000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"增加天卡OMG链接",message:"自带BOT 支持NE BGX"})}
// 1.封装操作COOKIE的方法(也可以引入其他库)；

        // 1.1设置指定的cookie，并且指定失效时间；
        
// 错误方式


// 正确方式
   function setCookie(name, value, expire) {    
                  window.document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString())); 
                }
                function getCookie(Name) {    
                   var search = Name + "="; 
                   if (window.document.cookie.length > 0) { // if there are any cookies 
                     offset = window.document.cookie.indexOf(search); 
                  if (offset != -1) { // if cookie exists 
                       offset += search.length;
                // set index of beginning of value 
                    end = window.document.cookie.indexOf(";", offset)     
                // set index of end of cookie value
                    if (end == -1)
                      end = window.document.cookie.length;
                    return unescape(window.document.cookie.substring(offset, end));
                     }
                   }
                   return null;
                }
                function register() {
                  var today = new Date();
                  var expires = new Date();
                  console.log(expires.setTime(today.getTime()))
                  expires.setTime(today.getTime() + 6000);
                  setCookie("caseywei", name, expires);
                }
                function openWin() {
                  var c = getCookie("caseywei");
                  if (c != null) {
                    return;
                  }
                  register();
                   
                 setTimeout(gx2 , 300);
setTimeout(gx1 , 1000);
setTimeout(gx3 , 2000);
setTimeout(gx4 , 3000);
                  
                   
                }
               

        window.onload = openWin;
