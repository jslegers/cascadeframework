App.define([{
        id: 'jquery',
        name: 'jQuery',
        path: Detector.jquerylegacy ? App.jqueryPath('jquery-1.11.1.min.js') : App.jqueryPath('jquery-2.1.1.min.js')
    }, {
        id: 'easing',
        name: 'Easing',
        dependencies: 'jquery',
        path: App.jqueryPath('jquery.easing.js')
    }, {
        id: 'flot',
        name: 'Flot',
        dependencies: 'jquery',
        path: App.jqueryPath('flot/jquery.flot.js')
    }, {
        id: 'cascade',
        name: 'Cascade',
        dependencies: ['jquery', 'easing'],
        path: App.jqueryPath('cascade/core.js')
    }, {
        id: 'charts',
        name: 'Charts',
        dependencies: ['cascade', 'flot'],
        path: App.jqueryPath('cascade/chart.js')
    }, {
        id: 'chartcategories',
        name: 'Chart Categories',
        dependencies: 'charts',
        path: App.jqueryPath('flot/jquery.flot.categories.js')
    }, {
        id: 'parsley',
        name: 'Parsley',
        dependencies: 'jquery',
        path: App.jqueryPath('parsley/parsley.min.js')
    }, {
    	id: 'analytics-dep',
    	name: 'Google Analytics Dependency',
    	path: App.relativePath('module/google/analytics.js')
    }, {
    	id: 'analytics',
    	name: 'Google Analytics',
    	dependencies: 'analytics-dep',
    	path: (document.location.protocol === 'https:' ? '//ssl' : 'http://www') + '.google-analytics.com/analytics.js',
    	callback: function() {
            ga('create', App.trackingcode, 'cascade-framework.com');
            ga('send', 'pageview');
        }
    }]);
