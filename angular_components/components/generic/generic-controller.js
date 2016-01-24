angular.module('mint.app.GenericController', ['ngSanitize'])
    .controller('GenericController', ['$scope', '$log', 'AutoScrollService', '$translate', 'GenericService', function($scope, $log, AutoScrollService, $translate, GenericService) {

        var init = function() {
            $log.info('GenericController');
            setTimeout(function(){
                AutoScrollService.scrollTo();
            }, 400);
            
            $scope.vegaServices = getVegaServices();
            var lang = GenericService.getLang();
            $scope.menu = GenericService.getMenu(lang);
            setTimeout(function(){
                $( "#accordion" ).accordion({
                    header: "> div > h3",
                    heightStyle: "content"
                });    
            }, 300);
            
        };

        var clicks = {};
        var accordionActiveCSSClass = 'accordion-active';
        var accordionInCSSClass = 'in';

        $scope.toggle = function(id){
        	var parent = document.querySelector('#' + id);
        	var element = document.querySelector('#' + id + ' .accordion-body');

            // element.classList.remove('collapse');

        	removeCSSClass(accordionActiveCSSClass);

        	if(!clicks[id]){
        		parent.classList.add(accordionActiveCSSClass);
        		element.classList.add(accordionInCSSClass);

        		for(var property in clicks){
        			if(id != property){
        				delete clicks[property];
        			}
        		}
        		clicks[id] = true;
        	}
        	else{
        		parent.classList.remove(accordionActiveCSSClass);
        		element.classList.remove(accordionInCSSClass);

        		delete clicks[id];
        	}
        };

        $scope.customShowExtraService = function(isLast){
            // todo: it should updates when switching langs
            var element = document.querySelector('#lang .active');
            if(isLast && element && element.attributes.id.value.indexOf('en') != -1){
                return false;
            }
            return true;
        };

        var removeCSSClass = function(className){
        	var elements = document.getElementsByClassName(className);
        	for(var i=0; i<elements.length; i++){
        		elements[i].classList.remove(className);	
        	}
        };


        var getVegaServices = function(){
            var response = [];
            var services = window.data.esp.whatwedo.services;
            for(var i=0; i<services.length; i++){
                response.push(i);
            }
            return response;
        };

        init();
    }]);
