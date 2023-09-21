function gx2(){document.cookie="night=0;path=/",iziToast.info({timeout:17000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"增加天卡OMG网盘",message:"自带BOT 支持NE BGX"})}




function gx1(){document.cookie="night=0;path=/",iziToast.info({timeout:16000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"增加周卡暗夜网盘",message:"自带BOT 支持NE BGX"})}


function gx3(){document.cookie="night=0;path=/",iziToast.info({timeout:15000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-arrow-circle-up",backgroundColor:"#fff",title:"更新日志",message:"10分钟内不再提示"})}

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
                   
                 setTimeout(gx1 , 300);
                 setTimeout(gx2 , 1200);
                 setTimeout(gx3 , 1900);    
              
                   
                }
               

        window.onload = openWin;
