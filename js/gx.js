
function gx1(){iziToast.info({timeout:13000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-arrow-circle-up",backgroundColor:"#fff",title:"更新天卡Poro网盘",message:"自带BOT 机器码"})}
function gx2(){iziToast.info({timeout:14000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"添加周卡M5网盘",message:"只支持BGX"})}
function gx3(){iziToast.info({timeout:15000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"添加周卡ON网盘",message:"掉线数据"})}
function gx5(){iziToast.info({timeout:16000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-trash-o",backgroundColor:"#fff",title:"移除天卡POP地址",message:"网盘文件已失效"})}

function gx4(){iziToast.info({timeout:17000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa-solid fa-circle-info",backgroundColor:"#fff",title:"更新日志",message:"十分钟内不再提示"})}


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
                  expires.setTime(today.getTime() + 600000);
                  setCookie("caseywei", name, expires);
                }
                function openWin() {
                  var c = getCookie("caseywei");
                  if (c != null) {
                    return;
                  }
                  register();
                   
              setTimeout(gx1 , 500);
              setTimeout(gx2 , 1500);
              setTimeout(gx3 , 2500); 
                 //setTimeout(gx5 , 3500);
                 setTimeout(gx4 , 3500); 
              
                   
                }
               

        window.onload = openWin;
