


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
