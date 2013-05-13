/* global console */
/*
 * svgenie
 * https://github.com/Causata/svgenie
 *
 * Copyright (c) 2013 Causata Ltd
 * Licensed under the MIT license.
 */

var svgenie = (function(){
    "use strict";
    
    var _toCanvas = function( id, options ){
        if ( id.substr(0,1) == "#" ) { id = id.substr(1); }
        console.log(id);
    };
    
    var _toDataURL = function( id, options ){
        var canvas = _toCanvas( id, options );
        return canvas.toDataURL("image/png");
    };
    
    var _save = function( id, options ){
        var content = _toDataURL( id, options );
        
    };
    
    return {
        save : _save,
        toCanvas : _toCanvas,
        _toDataURL : _toDataURL
    };
})();