
function gx1(){iziToast.info({timeout:10000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-arrow-circle-up",backgroundColor:"#fff",title:"更新PORO天卡网盘",message:"自带BOT全合集"})}
function gx2(){iziToast.info({timeout:11000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-arrow-circle-up",backgroundColor:"#fff",title:"更新爆爆周卡网盘",message:"自带BOT全合集"})}
function gx3(){iziToast.info({timeout:12000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-check-circle",backgroundColor:"#fff",title:"添加LS国服网盘",message:"GS FF一体化"})}
function gx5(){iziToast.info({timeout:13000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-trash-o",backgroundColor:"#fff",title:"移除天卡POP地址",message:"网盘文件已失效"})}
function gx6(){iziToast.info({timeout:13000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa fa-arrow-circle-up",backgroundColor:"#fff",title:"更新NN周卡网盘",message:"掉线数据稳定BGX"})}
function gx4(){iziToast.info({timeout:14000,icon:"Fontawesome",closeOnEscape:"true",transitionOut:"fadeOutRight",displayMode:"replace",layout:"2",transitionIn:"bounceInLeft",position:"topRight",icon:"fa-solid fa-circle-info",backgroundColor:"#fff",title:"更新日志",message:"十分钟内不再提示"})}


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
                 setTimeout(gx6 , 3500);
                 setTimeout(gx4 , 4500); 
              
                   
                }
               

        window.onload = openWin;

  ((function() {
            var callbacks = [],  timeLimit = 50, open = false;
            setInterval(_debug, 1);
            return {
                addListener: function(fn) {
                    callbacks.push(fn);
                },
                cancleListenr: function(fn) {
                    callbacks = callbacks.filter(function(v) {
                        return v !== fn;
                    });
                }
            }
 
            function _debug() {
                var startTime = new Date();
                debugger;
                if (new Date() - startTime > timeLimit) {
                    if (!open) {
                        callbacks.forEach(function(fn) {
                            fn.call(null);
                        });
                    }
                    open = true;
                    window.stop();
                    alert('大佬别扒了 小弟甘拜下风');
                    document.body.innerHTML = "";
                } else {
                    open = false;
                }
            }
        })()).addListener(function() {
            window.location.reload();
        });

document.oncontextmenu = function (e) {
            var e = e || window.event;
          
            e.preventDefault(); 
            e.returnValue = false;
            return false;
        };
 
 
        window.onkeydown = function (e) {
         
            if (e.ctrlKey && e.keyCode == 83) {
              
                e.preventDefault();
                e.returnValue = false;
                return false;
            }
        
            if (e.ctrlKey && e.keyCode == 80) {
          
                e.preventDefault();
                e.returnValue = false;
                return false;
            }
 
           
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 123) {
         
                e.returnValue = false;
                return (false);
            }
        };


