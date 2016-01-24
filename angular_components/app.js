var mintApp = angular.module('mint.app', [
        'ui.router',
        'ui.bootstrap',
        'pascalprecht.translate',
        'mint.app.Routes',
        'mint.app.Generic',
        'mint.app.Contact',
        'mint.app.Constants',
        'mint.app.AutoScroll'
    ])
    .config(['$locationProvider', '$interpolateProvider', '$translateProvider',
        function($locationProvider, $interpolateProvider, $translateProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $interpolateProvider.startSymbol('[[').endSymbol(']]');


            $translateProvider.translations('en_EN', data.eng);

            $translateProvider.translations('es_MX', data.esp);
        }
    ])
    .run(['$state',
        function($state) {
            $state.go('app.inicio');
        }
    ]);