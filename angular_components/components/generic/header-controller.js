angular.module('mint.app.HeaderController', [])
    .controller('HeaderController', ['$scope', '$log', '$translate', '$location', 'GenericService', function($scope, $log, $translate, $location, GenericService) {

        var init = function() {
            $log.info('HeaderController');
            var lang = GenericService.getLang();
            setLangActive(lang);
            $translate.use(lang);
            $scope.menu = GenericService.getMenu(lang);
        };

        $scope.switchLang = function (lang) {
            $translate.use(lang);
            setLangActive(lang);
        };

        

        var setLangActive = function(lang){
            var element = document.querySelector('#lang .active');
            if(element){
                element.classList.remove('active');
            }
            document.getElementById('lang_'+lang).classList.add('active');
        };

        init();
    }]);
