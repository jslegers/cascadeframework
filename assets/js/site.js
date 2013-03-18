Detector.load=function(){
    Loader.apply(window,[].slice.call(arguments,0));
}
Loader([ {
    load: 'assets/js/lib/google/prettify/prettify.js',
    callback: function () {
        App.log("Prettify loaded!");
    }
}, {
    load:  "assets/js/lib/jquery/jquery-" + Detector.jqueryversion + ".js",
    callback: function () {
        App.log("jQuery loaded!");
    }
}, {
    load: 'assets/js/lib/jquery/jquery.easing.js',
    callback: function () {
        App.log("jQuery Easing loaded!");
    }
}, {
    load: 'assets/js/lib/jquery/jquery.cascade.js',
    callback: function () {
        App.log("Cascade loaded!");
    }
}, {
    test: App.checkFile(App.filename),
    success: App.filename
}]);

