

const style = document.createElement('style');
  style.innerText = `
    .barrage {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffffe6;
      color: #333;
      padding: 10px 15px;
      border-radius: 5px;
      z-index: 9999;
      display: flex;
      align-items: center;
    }

    .barrage-icon {
      display: block;
      width: 20px;
      height: 20px;
      background-image: url('https://cdn3.codesign.qq.com/screens/previews/2023/10/24/jM93UEfMyMIRXfy8jBGwHATwiF0mBZ3ngnmn0qcd.png'); 
      background-size: cover;
      margin-right: 5px;
      margin-left: -5px;
      line-height: 20px;
    }
  `;
  document.head.appendChild(style);

  function showBarrage(event) {
    if (window.innerWidth < 768) {
      return;
    }

    event.preventDefault(); 

    const barrage = document.createElement('span');
    barrage.innerHTML = '<span class="barrage-icon"></span>为了您更好的游览体验，本站禁用右键。';
    barrage.classList.add('barrage');
    document.body.appendChild(barrage);

    const { clientWidth, clientHeight } = document.documentElement;
    barrage.style.left = `${clientWidth / 2}px`;
    barrage.style.top = `${clientHeight / 8}px`;

    setTimeout(() => {
      document.body.removeChild(barrage); 
    }, 5000);
  }

  function updateBarrageDisplay() {
    const isSmallScreen = window.innerWidth < 768;


    if (isSmallScreen) {
      document.body.removeEventListener('contextmenu', showBarrage);
    } else {
      document.body.addEventListener('contextmenu', showBarrage);
    }
  }


  updateBarrageDisplay();

  window.addEventListener('resize', updateBarrageDisplay);



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
