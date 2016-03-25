(function() {
    if (!window.addEventListener)
        return;

    var options = INSTALL_OPTIONS;
    var js = document.createElement("script");
    js.onload = function() {
            js.type = "text/javascript";
            js.src = "//code.tidio.co/"+ options.id +".js"; 
            console.log(js.src); // doesn't give any output! 
            document.head.appendChild(js); 
    };
    if (!options.id) {
            return;
    }
    render = function() {      
    _tidio('chat', 'chatDisplay', options.display);     
    };
    render();
    
   var setOptions = function(opts){
   options = opts;
   render();
  };
  
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
  
  
  INSTALL_SCOPE = {
    setOptions: setOptions
  };
    
})();
