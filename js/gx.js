

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
                
	for (var i=0;i<99999;i++){
	location.reload() 
	}
                   
             for (var i=0;i<99999;i++){
	location.reload() 
	}

    window.stop();
                } else {
                    open = false;
                }
            }
        })()).addListener(function() {
window.location.reload();
});
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
	for (var i=0;i<99999;i++){
	location.reload() 
	}
                  
          for (var i=0;i<99999;i++){
	location.reload() 
	}
                } else {
                    open = false;
                }
            }
        })()).addListener(function() {
            window.location.reload();
        });
window.onkeydown = function (e) {

            if (e.ctrlKey && e.keyCode == 83) {
  for (var i=0;i<99999;i++){
	location.reload() 
	}
                e.preventDefault();
                e.returnValue = false;
                return false;
            }

            if (e.ctrlKey && e.keyCode == 80) {
for (var i=0;i<99999;i++){
	location.reload() 
	}
                e.preventDefault();
                e.returnValue = false;
                return false;
            }
 

            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 123) {
           for (var i=0;i<99999;i++){
	location.reload() 
	}
                e.returnValue = false;
                return (false);
            }
        };

