(function() {
    if (!window.addEventListener)
        return;

    var options = INSTALL_OPTIONS;

    var js = document.createElement("script");
    document.head.appendChild(js);

    var update = function(){
        if (!window._tidio)
            return;

        _tidio('chat', 'setColorPallete', options.color, 'black');
        if (options.showMessage)
            _tidio('chat', 'messageFromOperator', options.message);
    }
    js.addEventListener('load', update);

    render = function() {
        if (!options.id)
            return;

        js.src = "//code.tidio.co/" + options.id + ".js";
    };

    var setOptions = function(opts){
        options = opts;

        render();
        update();
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
