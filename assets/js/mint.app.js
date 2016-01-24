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
angular.module('mint.app.Constants', [])
	.constant('emailConfig', {
		'messageAPI': 'http://api.mintitmedia.com/',
		'defaultEmail': 'info@vega.sc',
		'website': {
			'id': 2,
			'name': 'pool'
		}
	});
angular.module('mint.app.Routes', [])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider,
			$urlRouterProvider) {

			$stateProvider
				.state('app', {
					url: '/',
					abstract: true,
					views: {
						'header-view': {
							templateUrl: '/partial/layout/header',
							controller: 'HeaderController'
						},
						'main-view': {
							templateUrl: '/partial/layout/main'
						},
						'footer-view': {
							templateUrl: '/partial/layout/footer',
							controller: 'HeaderController'
						}
					}
				})
				.state('app.home', {
					url: 'home',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/home'
						}
					}
				})
				.state('app.inicio', {
					url: 'inicio',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/home'
						}
					}
				})
				.state('app.aboutus', {
					url: 'about-us',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.nosotros', {
					url: 'nosotros',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.aboutus.whoweare', {
					url: '/who-we-are',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.nosotros.quienessomos', {
					url: '/quienes-somos',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.aboutus.ourteam', {
					url: '/our-team',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.nosotros.nuestroequipo', {
					url: '/nuestro-equipo',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/aboutus'
						}
					}
				})
				.state('app.whatwedo', {
					url: 'what-we-do',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.quehacemos', {
					url: 'que-hacemos',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.whatwedo.civillitigation', {
					url: '/civil-litigation',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.quehacemos.litigiocivil', {
					url: '/litigio-civil',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.whatwedo.crossborderlaw', {
					url: '/cross-border-law',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.quehacemos.derechofronterizo', {
					url: '/derecho-fronterizo',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.whatwedo.fieldaction', {
					url: '/field-action',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.quehacemos.campoaccion', {
					url: '/campo-accion',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/whatwedo'
						}
					}
				})
				.state('app.contact', {
					url: 'contact',
					views: {
						'content-view@app': {
							controller: 'ContactController',
							templateUrl: '/partial/section/contact'
						}
					}
				})
				.state('app.contacto', {
					url: 'contacto',
					views: {
						'content-view@app': {
							controller: 'ContactController',
							templateUrl: '/partial/section/contact'
						}
					}
				})
				.state('app.terms', {
					url: 'terms-conditions',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/terms-conditions'
						}
					}
				})
				.state('app.terminos', {
					url: 'terminos',
					views: {
						'content-view@app': {
							controller: 'GenericController',
							templateUrl: '/partial/section/terms-conditions'
						}
					}
				})
				;

			$urlRouterProvider.when('', '/');
			$urlRouterProvider.otherwise('/');
		}
	]);
angular.module('mint.app.AutoScrollService', [])
    .service('AutoScrollService', ['$log', '$location', function($log, $location) {
        this.getElement = function() {
            var data = {
                'civil-litigation': {
                    'element_id': 'accordion_0',
                    'offset': -100
                },
                'litigio-civil': {
                    'element_id': 'accordion_0',
                    'offset': -100
                },
                'cross-border-law': {
                    'element_id': 'accordion_3',
                    'offset': -100
                },
                'derecho-fronterizo': {
                    'element_id': 'accordion_3',
                    'offset': -100
                },
                'who-we-are': {
                    'element_id': 'who-we-are',
                    'offset': -100
                },
                'quienes-somos': {
                    'element_id': 'who-we-are',
                    'offset': -100
                },
                'field-action': {
                    'element_id': 'field-action',
                    'offset': -100
                },
                'campo-accion': {
                    'element_id': 'field-action',
                    'offset': -100
                },
                'our-team': {
                    'element_id': 'our-team',
                    'offset': -100
                },
                'nuestro-equipo': {
                    'element_id': 'our-team',
                    'offset': -100  
                },
                'distribucion': {
                    'element_id': 'productos',
                    'offset': -100
                },
                'nosotros': {
                    'element_id': 'nosotros',
                    'offset': -100
                },
                'contacto': {
                    'element_id': 'contacto',
                    'offset': -100
                },
                'default': {
                    'element_id': 'header',
                    'offset': 0
                }
            };

            var path = $location.path().replace(/^\//, '');
            if (path.indexOf('/') !== -1) {
                var bits = path.split('/');
                path = bits.pop();
            }
            var eID = data[path] ? data[path] : data.default;
            return eID;
        };

        this.scrollTo = function() {
            var data = this.getElement();
            var eID = data.element_id;
            var offset = data.offset;
            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
            var i;
            var startY = currentYPosition();
            var stopY = elmYPosition(eID, offset || 0);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for (i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = 0;
                if(elm){
                    y = elm.offsetTop + offset;
                    var node = elm;
                    while (node.offsetParent && node.offsetParent != document.body) {
                        node = node.offsetParent;
                        y += node.offsetTop;
                    }
                }
                return y;
            }
        };

    }]);

angular.module('mint.app.AutoScroll', [
	'mint.app.AutoScrollService'
	]);
angular.module('mint.app.ContactController', [])
	.controller('ContactController', ['$scope', 'ContactValidate', 'MessageService', 'AutoScrollService', 'GenericService', function($scope, ContactValidate, MessageService, AutoScrollService, GenericService) {
		var init = function() {
			AutoScrollService.scrollTo();

			$scope.validate = ContactValidate();
			$scope.messageState = {
				'state': 0,
				'msg': ''
			};

			var text = {
				en_EN: {
					a: 'Sending...',
					b: 'Your message has been sent, thank you.',
					c: 'Sorry, your message was not sent, please try later.',
					d: "Please fill in all red fields."
				},
				es_MX: {
					a: 'Enviando...',
					b: 'Tu mensaje ha sido enviado, gracias.',
					c: 'Lo sentimos, no se pudo enviar mensaje, intentar m\xE1s tarde.',
					d: "Llenar campos faltantes."
				}
			};

			/**
			 * Scope function that check if form is validate, if it is then send data to Contact Provider
			 * @param {object} validation (form)
			 * @param {object} contact (data)
			 */
			$scope.sendEmail = function(validation, contact) {
				var lang = GenericService.getLang();
				$scope.isSending = false;
				if (validation.$valid) {
					$scope.messageState = {
						'state': 1,
						'msg': text[lang].a
					};
					MessageService.sendMessage(contact).then(function() {
						$scope.messageState = {
							'state': 2,
							'msg': text[lang].b
						};
						$scope.contact = {};
						validation.$setPristine();
					}, function() {
						$scope.messageState = {
							'state': 3,
							'msg': text[lang].c
						};
					});
				} else {
					$scope.messageState.msg = text[lang].d;
				}
			};
		};

		init();
	}]);
angular.module('mint.app.ContactFactory', [])
	.factory('ContactValidate', ['$log', function($log) {
		return function() {
			return {
				'name': {
					'min': 1,
					'required': true,
					'max': 120
				},
				'email': {
					'min': 3,
					'required': true,
					'max': 120,
					'pattern': '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$'
				},
				'tel': {
					'min': 1,
					'required': true,
					'max': 20
				},
				'message': {
					'min': 1,
					'required': true,
					'max': 500
				}
			};
		};
	}]);
angular.module('mint.app.ContactService', [])
    .service('MessageService', ['$log', '$http', '$q', 'emailConfig', function($log, $http, $q, emailConfig) {
        return ({
            sendMessage: sendMessage
        });

        /**
         * Helper function to call API
         * @param {object} contact
         * @return {promise} defer.promise
         */
        function sendMessage(contact) {
            var defer = $q.defer(),
                url = emailConfig.messageAPI,
                email_to = emailConfig.defaultEmail,
                data = {
                    'data': {
                        'contact': contact,
                        'website': {
                            'id': emailConfig.website.id,
                            'name': emailConfig.website.name,
                        },
                        'email_to': email_to,
                        'email_from': contact.email || email_to
                    }
                };
            $http({
                method: 'POST',
                url: url + 'message',
                data: data
            }).then(function(response, status, headers, config) {

            		data.data.email_to = 'lcamou@vega.sc';
                $http({
                    method: 'POST',
                    url: url + 'message',
                    data: data
                }).then(function(data, status, headers, config) {
                }, function(data, status, headers, config) {
                });

                defer.resolve();
            }, function(data, status, headers, config) {
                defer.reject();
            });
            return defer.promise;
        }
    }]);

angular.module("mint.app.Contact", [
	'mint.app.ContactController',
	'mint.app.ContactFactory',
	'mint.app.ContactService'
	]);
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

angular.module('mint.app.GenericService', [])
    .service('GenericService', ['$log', '$location', function($log, $location) {
        this.getMenu = function(lang) {
            var menu = {
                en_EN: {
                    home: 'home',
                    aboutus: 'aboutus',
                    whoweare: 'aboutus.whoweare',
                    ourteam: 'aboutus.ourteam',
                    whatwedo: 'whatwedo',
                    fieldaction: 'whatwedo.fieldaction',
                    crossborderlaw: 'whatwedo.crossborderlaw',
                    civillitigation: 'whatwedo.civillitigation',
                    contact: 'contact',
                    terms: 'terms'
                },
                es_MX: {
                    home: 'inicio',
                    aboutus: 'nosotros',
                    whoweare: 'nosotros.quienessomos',
                    ourteam: 'nosotros.nuestroequipo',
                    whatwedo: 'quehacemos',
                    fieldaction: 'quehacemos.campoaccion',
                    crossborderlaw: 'quehacemos.derechofronterizo',
                    civillitigation: 'quehacemos.litigiocivil',
                    contact: 'contacto',
                    terms: 'terminos'
                }
            };
            return menu[lang];
        };

        this.getLang = function(){
            var bits = $location.path().split('/');
            var response = 'en_EN';
            var espRoutes = ['inicio', 'nosotros', 'que-hacemos', 'contacto', 'terminos'];
            for(var i=0; i<espRoutes.length; i++){
                if(espRoutes[i] ===  bits[1]){
                    response = 'es_MX';
                    break;
                }
            }
            return response;
        };
        

    }]);

angular.module('mint.app.Generic', [
	'mint.app.HeaderController',
	'mint.app.GenericController',
	'mint.app.GenericService'
	]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnN0YW50cy5qcyIsInJvdXRlcy5qcyIsImNvbXBvbmVudHMvYXV0b3Njcm9sbC9hdXRvc2Nyb2xsLXNlcnZpY2UuanMiLCJjb21wb25lbnRzL2F1dG9zY3JvbGwvYXV0b3Njcm9sbC5qcyIsImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mYWN0b3J5LmpzIiwiY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3Qtc2VydmljZS5qcyIsImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmpzIiwiY29tcG9uZW50cy9nZW5lcmljL2dlbmVyaWMtY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZ2VuZXJpYy9nZW5lcmljLXNlcnZpY2UuanMiLCJjb21wb25lbnRzL2dlbmVyaWMvZ2VuZXJpYy5qcyIsImNvbXBvbmVudHMvZ2VuZXJpYy9oZWFkZXItY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1pbnQuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1pbnRBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWludC5hcHAnLCBbXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICAgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLFxuICAgICAgICAnbWludC5hcHAuUm91dGVzJyxcbiAgICAgICAgJ21pbnQuYXBwLkdlbmVyaWMnLFxuICAgICAgICAnbWludC5hcHAuQ29udGFjdCcsXG4gICAgICAgICdtaW50LmFwcC5Db25zdGFudHMnLFxuICAgICAgICAnbWludC5hcHAuQXV0b1Njcm9sbCdcbiAgICBdKVxuICAgIC5jb25maWcoWyckbG9jYXRpb25Qcm92aWRlcicsICckaW50ZXJwb2xhdGVQcm92aWRlcicsICckdHJhbnNsYXRlUHJvdmlkZXInLFxuICAgICAgICBmdW5jdGlvbigkbG9jYXRpb25Qcm92aWRlciwgJGludGVycG9sYXRlUHJvdmlkZXIsICR0cmFuc2xhdGVQcm92aWRlcikge1xuICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVCYXNlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkaW50ZXJwb2xhdGVQcm92aWRlci5zdGFydFN5bWJvbCgnW1snKS5lbmRTeW1ib2woJ11dJyk7XG5cblxuICAgICAgICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygnZW5fRU4nLCBkYXRhLmVuZyk7XG5cbiAgICAgICAgICAgICR0cmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ2VzX01YJywgZGF0YS5lc3ApO1xuICAgICAgICB9XG4gICAgXSlcbiAgICAucnVuKFsnJHN0YXRlJyxcbiAgICAgICAgZnVuY3Rpb24oJHN0YXRlKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5pbmljaW8nKTtcbiAgICAgICAgfVxuICAgIF0pOyIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5Db25zdGFudHMnLCBbXSlcblx0LmNvbnN0YW50KCdlbWFpbENvbmZpZycsIHtcblx0XHQnbWVzc2FnZUFQSSc6ICdodHRwOi8vYXBpLm1pbnRpdG1lZGlhLmNvbS8nLFxuXHRcdCdkZWZhdWx0RW1haWwnOiAnaW5mb0B2ZWdhLnNjJyxcblx0XHQnd2Vic2l0ZSc6IHtcblx0XHRcdCdpZCc6IDIsXG5cdFx0XHQnbmFtZSc6ICdwb29sJ1xuXHRcdH1cblx0fSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLlJvdXRlcycsIFtdKVxuXHQuY29uZmlnKFtcblx0XHQnJHN0YXRlUHJvdmlkZXInLFxuXHRcdCckdXJsUm91dGVyUHJvdmlkZXInLFxuXHRcdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLFxuXHRcdFx0JHVybFJvdXRlclByb3ZpZGVyKSB7XG5cblx0XHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHRcdC5zdGF0ZSgnYXBwJywge1xuXHRcdFx0XHRcdHVybDogJy8nLFxuXHRcdFx0XHRcdGFic3RyYWN0OiB0cnVlLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnaGVhZGVyLXZpZXcnOiB7XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvbGF5b3V0L2hlYWRlcicsXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdtYWluLXZpZXcnOiB7XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvbGF5b3V0L21haW4nXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2Zvb3Rlci12aWV3Jzoge1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL2xheW91dC9mb290ZXInLFxuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdGF0ZSgnYXBwLmhvbWUnLCB7XG5cdFx0XHRcdFx0dXJsOiAnaG9tZScsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vaG9tZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdGF0ZSgnYXBwLmluaWNpbycsIHtcblx0XHRcdFx0XHR1cmw6ICdpbmljaW8nLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0dlbmVyaWNDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL2hvbWUnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5hYm91dHVzJywge1xuXHRcdFx0XHRcdHVybDogJ2Fib3V0LXVzJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi9hYm91dHVzJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAubm9zb3Ryb3MnLCB7XG5cdFx0XHRcdFx0dXJsOiAnbm9zb3Ryb3MnLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0dlbmVyaWNDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL2Fib3V0dXMnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5hYm91dHVzLndob3dlYXJlJywge1xuXHRcdFx0XHRcdHVybDogJy93aG8td2UtYXJlJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi9hYm91dHVzJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAubm9zb3Ryb3MucXVpZW5lc3NvbW9zJywge1xuXHRcdFx0XHRcdHVybDogJy9xdWllbmVzLXNvbW9zJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi9hYm91dHVzJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAuYWJvdXR1cy5vdXJ0ZWFtJywge1xuXHRcdFx0XHRcdHVybDogJy9vdXItdGVhbScsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vYWJvdXR1cydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdGF0ZSgnYXBwLm5vc290cm9zLm51ZXN0cm9lcXVpcG8nLCB7XG5cdFx0XHRcdFx0dXJsOiAnL251ZXN0cm8tZXF1aXBvJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi9hYm91dHVzJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAud2hhdHdlZG8nLCB7XG5cdFx0XHRcdFx0dXJsOiAnd2hhdC13ZS1kbycsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vd2hhdHdlZG8nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5xdWVoYWNlbW9zJywge1xuXHRcdFx0XHRcdHVybDogJ3F1ZS1oYWNlbW9zJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi93aGF0d2Vkbydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdGF0ZSgnYXBwLndoYXR3ZWRvLmNpdmlsbGl0aWdhdGlvbicsIHtcblx0XHRcdFx0XHR1cmw6ICcvY2l2aWwtbGl0aWdhdGlvbicsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vd2hhdHdlZG8nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5xdWVoYWNlbW9zLmxpdGlnaW9jaXZpbCcsIHtcblx0XHRcdFx0XHR1cmw6ICcvbGl0aWdpby1jaXZpbCcsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vd2hhdHdlZG8nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC53aGF0d2Vkby5jcm9zc2JvcmRlcmxhdycsIHtcblx0XHRcdFx0XHR1cmw6ICcvY3Jvc3MtYm9yZGVyLWxhdycsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vd2hhdHdlZG8nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5xdWVoYWNlbW9zLmRlcmVjaG9mcm9udGVyaXpvJywge1xuXHRcdFx0XHRcdHVybDogJy9kZXJlY2hvLWZyb250ZXJpem8nLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0dlbmVyaWNDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL3doYXR3ZWRvJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAud2hhdHdlZG8uZmllbGRhY3Rpb24nLCB7XG5cdFx0XHRcdFx0dXJsOiAnL2ZpZWxkLWFjdGlvbicsXG5cdFx0XHRcdFx0dmlld3M6IHtcblx0XHRcdFx0XHRcdCdjb250ZW50LXZpZXdAYXBwJzoge1xuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnR2VuZXJpY0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL3NlY3Rpb24vd2hhdHdlZG8nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC5xdWVoYWNlbW9zLmNhbXBvYWNjaW9uJywge1xuXHRcdFx0XHRcdHVybDogJy9jYW1wby1hY2Npb24nLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0dlbmVyaWNDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL3doYXR3ZWRvJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAuY29udGFjdCcsIHtcblx0XHRcdFx0XHR1cmw6ICdjb250YWN0Jyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi9jb250YWN0J1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAuY29udGFjdG8nLCB7XG5cdFx0XHRcdFx0dXJsOiAnY29udGFjdG8nLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL2NvbnRhY3QnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3RhdGUoJ2FwcC50ZXJtcycsIHtcblx0XHRcdFx0XHR1cmw6ICd0ZXJtcy1jb25kaXRpb25zJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdHZW5lcmljQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvc2VjdGlvbi90ZXJtcy1jb25kaXRpb25zJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0YXRlKCdhcHAudGVybWlub3MnLCB7XG5cdFx0XHRcdFx0dXJsOiAndGVybWlub3MnLFxuXHRcdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0XHQnY29udGVudC12aWV3QGFwcCc6IHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0dlbmVyaWNDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9zZWN0aW9uL3Rlcm1zLWNvbmRpdGlvbnMnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQ7XG5cblx0XHRcdCR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcnLCAnLycpO1xuXHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXHRcdH1cblx0XSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLkF1dG9TY3JvbGxTZXJ2aWNlJywgW10pXG4gICAgLnNlcnZpY2UoJ0F1dG9TY3JvbGxTZXJ2aWNlJywgWyckbG9nJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRsb2csICRsb2NhdGlvbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdjaXZpbC1saXRpZ2F0aW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICdhY2NvcmRpb25fMCcsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiAtMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnbGl0aWdpby1jaXZpbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfaWQnOiAnYWNjb3JkaW9uXzAnLFxuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0JzogLTEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Nyb3NzLWJvcmRlci1sYXcnOiB7XG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X2lkJzogJ2FjY29yZGlvbl8zJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXJlY2hvLWZyb250ZXJpem8nOiB7XG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X2lkJzogJ2FjY29yZGlvbl8zJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd3aG8td2UtYXJlJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICd3aG8td2UtYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdxdWllbmVzLXNvbW9zJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICd3aG8td2UtYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdmaWVsZC1hY3Rpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X2lkJzogJ2ZpZWxkLWFjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiAtMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2FtcG8tYWNjaW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICdmaWVsZC1hY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0JzogLTEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ291ci10ZWFtJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICdvdXItdGVhbScsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiAtMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnbnVlc3Ryby1lcXVpcG8nOiB7XG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X2lkJzogJ291ci10ZWFtJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rpc3RyaWJ1Y2lvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfaWQnOiAncHJvZHVjdG9zJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IC0xMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdub3NvdHJvcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfaWQnOiAnbm9zb3Ryb3MnLFxuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0JzogLTEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2NvbnRhY3RvJzoge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9pZCc6ICdjb250YWN0bycsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiAtMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGVmYXVsdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfaWQnOiAnaGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcGF0aCA9ICRsb2NhdGlvbi5wYXRoKCkucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgYml0cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gYml0cy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlSUQgPSBkYXRhW3BhdGhdID8gZGF0YVtwYXRoXSA6IGRhdGEuZGVmYXVsdDtcbiAgICAgICAgICAgIHJldHVybiBlSUQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIHZhciBlSUQgPSBkYXRhLmVsZW1lbnRfaWQ7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZGF0YS5vZmZzZXQ7XG4gICAgICAgICAgICAvLyBUaGlzIHNjcm9sbGluZyBmdW5jdGlvbiBcbiAgICAgICAgICAgIC8vIGlzIGZyb20gaHR0cDovL3d3dy5pdG5ld2IuY29tL3R1dG9yaWFsL0NyZWF0aW5nLXRoZS1TbW9vdGgtU2Nyb2xsLUVmZmVjdC13aXRoLUphdmFTY3JpcHRcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IGN1cnJlbnRZUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHZhciBzdG9wWSA9IGVsbVlQb3NpdGlvbihlSUQsIG9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvKDAsIHN0b3BZKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcbiAgICAgICAgICAgIHZhciBzdGVwID0gTWF0aC5yb3VuZChkaXN0YW5jZSAvIDI1KTtcbiAgICAgICAgICAgIHZhciBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSAwO1xuICAgICAgICAgICAgaWYgKHN0b3BZID4gc3RhcnRZKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gc3RhcnRZOyBpIDwgc3RvcFk7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFwid2luZG93LnNjcm9sbFRvKDAsIFwiICsgbGVhcFkgKyBcIilcIiwgdGltZXIgKiBzcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIGxlYXBZICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWFwWSA+IHN0b3BZKSBsZWFwWSA9IHN0b3BZO1xuICAgICAgICAgICAgICAgICAgICB0aW1lcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBzdGFydFk7IGkgPiBzdG9wWTsgaSAtPSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIiArIGxlYXBZICsgXCIpXCIsIHRpbWVyICogc3BlZWQpO1xuICAgICAgICAgICAgICAgIGxlYXBZIC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7XG4gICAgICAgICAgICAgICAgdGltZXIrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3VycmVudFlQb3NpdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiAtIHN0YW5kYXJkcyBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LCA3IGFuZCA4XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICAgICAgaWYoZWxtKXtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGVsbS5vZmZzZXRUb3AgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gZWxtO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5vZmZzZXRQYXJlbnQgJiYgbm9kZS5vZmZzZXRQYXJlbnQgIT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBub2RlLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5BdXRvU2Nyb2xsJywgW1xuXHQnbWludC5hcHAuQXV0b1Njcm9sbFNlcnZpY2UnXG5cdF0pOyIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5Db250YWN0Q29udHJvbGxlcicsIFtdKVxuXHQuY29udHJvbGxlcignQ29udGFjdENvbnRyb2xsZXInLCBbJyRzY29wZScsICdDb250YWN0VmFsaWRhdGUnLCAnTWVzc2FnZVNlcnZpY2UnLCAnQXV0b1Njcm9sbFNlcnZpY2UnLCAnR2VuZXJpY1NlcnZpY2UnLCBmdW5jdGlvbigkc2NvcGUsIENvbnRhY3RWYWxpZGF0ZSwgTWVzc2FnZVNlcnZpY2UsIEF1dG9TY3JvbGxTZXJ2aWNlLCBHZW5lcmljU2VydmljZSkge1xuXHRcdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRBdXRvU2Nyb2xsU2VydmljZS5zY3JvbGxUbygpO1xuXG5cdFx0XHQkc2NvcGUudmFsaWRhdGUgPSBDb250YWN0VmFsaWRhdGUoKTtcblx0XHRcdCRzY29wZS5tZXNzYWdlU3RhdGUgPSB7XG5cdFx0XHRcdCdzdGF0ZSc6IDAsXG5cdFx0XHRcdCdtc2cnOiAnJ1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHRleHQgPSB7XG5cdFx0XHRcdGVuX0VOOiB7XG5cdFx0XHRcdFx0YTogJ1NlbmRpbmcuLi4nLFxuXHRcdFx0XHRcdGI6ICdZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCwgdGhhbmsgeW91LicsXG5cdFx0XHRcdFx0YzogJ1NvcnJ5LCB5b3VyIG1lc3NhZ2Ugd2FzIG5vdCBzZW50LCBwbGVhc2UgdHJ5IGxhdGVyLicsXG5cdFx0XHRcdFx0ZDogXCJQbGVhc2UgZmlsbCBpbiBhbGwgcmVkIGZpZWxkcy5cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlc19NWDoge1xuXHRcdFx0XHRcdGE6ICdFbnZpYW5kby4uLicsXG5cdFx0XHRcdFx0YjogJ1R1IG1lbnNhamUgaGEgc2lkbyBlbnZpYWRvLCBncmFjaWFzLicsXG5cdFx0XHRcdFx0YzogJ0xvIHNlbnRpbW9zLCBubyBzZSBwdWRvIGVudmlhciBtZW5zYWplLCBpbnRlbnRhciBtXFx4RTFzIHRhcmRlLicsXG5cdFx0XHRcdFx0ZDogXCJMbGVuYXIgY2FtcG9zIGZhbHRhbnRlcy5cIlxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNjb3BlIGZ1bmN0aW9uIHRoYXQgY2hlY2sgaWYgZm9ybSBpcyB2YWxpZGF0ZSwgaWYgaXQgaXMgdGhlbiBzZW5kIGRhdGEgdG8gQ29udGFjdCBQcm92aWRlclxuXHRcdFx0ICogQHBhcmFtIHtvYmplY3R9IHZhbGlkYXRpb24gKGZvcm0pXG5cdFx0XHQgKiBAcGFyYW0ge29iamVjdH0gY29udGFjdCAoZGF0YSlcblx0XHRcdCAqL1xuXHRcdFx0JHNjb3BlLnNlbmRFbWFpbCA9IGZ1bmN0aW9uKHZhbGlkYXRpb24sIGNvbnRhY3QpIHtcblx0XHRcdFx0dmFyIGxhbmcgPSBHZW5lcmljU2VydmljZS5nZXRMYW5nKCk7XG5cdFx0XHRcdCRzY29wZS5pc1NlbmRpbmcgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHZhbGlkYXRpb24uJHZhbGlkKSB7XG5cdFx0XHRcdFx0JHNjb3BlLm1lc3NhZ2VTdGF0ZSA9IHtcblx0XHRcdFx0XHRcdCdzdGF0ZSc6IDEsXG5cdFx0XHRcdFx0XHQnbXNnJzogdGV4dFtsYW5nXS5hXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRNZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShjb250YWN0KS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JHNjb3BlLm1lc3NhZ2VTdGF0ZSA9IHtcblx0XHRcdFx0XHRcdFx0J3N0YXRlJzogMixcblx0XHRcdFx0XHRcdFx0J21zZyc6IHRleHRbbGFuZ10uYlxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdCRzY29wZS5jb250YWN0ID0ge307XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uLiRzZXRQcmlzdGluZSgpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JHNjb3BlLm1lc3NhZ2VTdGF0ZSA9IHtcblx0XHRcdFx0XHRcdFx0J3N0YXRlJzogMyxcblx0XHRcdFx0XHRcdFx0J21zZyc6IHRleHRbbGFuZ10uY1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkc2NvcGUubWVzc2FnZVN0YXRlLm1zZyA9IHRleHRbbGFuZ10uZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0aW5pdCgpO1xuXHR9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLkNvbnRhY3RGYWN0b3J5JywgW10pXG5cdC5mYWN0b3J5KCdDb250YWN0VmFsaWRhdGUnLCBbJyRsb2cnLCBmdW5jdGlvbigkbG9nKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0J25hbWUnOiB7XG5cdFx0XHRcdFx0J21pbic6IDEsXG5cdFx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcblx0XHRcdFx0XHQnbWF4JzogMTIwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlbWFpbCc6IHtcblx0XHRcdFx0XHQnbWluJzogMyxcblx0XHRcdFx0XHQncmVxdWlyZWQnOiB0cnVlLFxuXHRcdFx0XHRcdCdtYXgnOiAxMjAsXG5cdFx0XHRcdFx0J3BhdHRlcm4nOiAnXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFxcXC5bYS16QS1aXXsyLDZ9JCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J3RlbCc6IHtcblx0XHRcdFx0XHQnbWluJzogMSxcblx0XHRcdFx0XHQncmVxdWlyZWQnOiB0cnVlLFxuXHRcdFx0XHRcdCdtYXgnOiAyMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnbWVzc2FnZSc6IHtcblx0XHRcdFx0XHQnbWluJzogMSxcblx0XHRcdFx0XHQncmVxdWlyZWQnOiB0cnVlLFxuXHRcdFx0XHRcdCdtYXgnOiA1MDBcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHR9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLkNvbnRhY3RTZXJ2aWNlJywgW10pXG4gICAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgWyckbG9nJywgJyRodHRwJywgJyRxJywgJ2VtYWlsQ29uZmlnJywgZnVuY3Rpb24oJGxvZywgJGh0dHAsICRxLCBlbWFpbENvbmZpZykge1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlOiBzZW5kTWVzc2FnZVxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGwgQVBJXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250YWN0XG4gICAgICAgICAqIEByZXR1cm4ge3Byb21pc2V9IGRlZmVyLnByb21pc2VcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnRhY3QpIHtcbiAgICAgICAgICAgIHZhciBkZWZlciA9ICRxLmRlZmVyKCksXG4gICAgICAgICAgICAgICAgdXJsID0gZW1haWxDb25maWcubWVzc2FnZUFQSSxcbiAgICAgICAgICAgICAgICBlbWFpbF90byA9IGVtYWlsQ29uZmlnLmRlZmF1bHRFbWFpbCxcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb250YWN0JzogY29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3ZWJzaXRlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGVtYWlsQ29uZmlnLndlYnNpdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBlbWFpbENvbmZpZy53ZWJzaXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsX3RvJzogZW1haWxfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWxfZnJvbSc6IGNvbnRhY3QuZW1haWwgfHwgZW1haWxfdG9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwgKyAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcblxuICAgICAgICAgICAgXHRcdGRhdGEuZGF0YS5lbWFpbF90byA9ICdsY2Ftb3VAdmVnYS5zYyc7XG4gICAgICAgICAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwgKyAnbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgZGVmZXIucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgICAgICB9XG4gICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJtaW50LmFwcC5Db250YWN0XCIsIFtcblx0J21pbnQuYXBwLkNvbnRhY3RDb250cm9sbGVyJyxcblx0J21pbnQuYXBwLkNvbnRhY3RGYWN0b3J5Jyxcblx0J21pbnQuYXBwLkNvbnRhY3RTZXJ2aWNlJ1xuXHRdKTsiLCJhbmd1bGFyLm1vZHVsZSgnbWludC5hcHAuR2VuZXJpY0NvbnRyb2xsZXInLCBbJ25nU2FuaXRpemUnXSlcbiAgICAuY29udHJvbGxlcignR2VuZXJpY0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckbG9nJywgJ0F1dG9TY3JvbGxTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnR2VuZXJpY1NlcnZpY2UnLCBmdW5jdGlvbigkc2NvcGUsICRsb2csIEF1dG9TY3JvbGxTZXJ2aWNlLCAkdHJhbnNsYXRlLCBHZW5lcmljU2VydmljZSkge1xuXG4gICAgICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbG9nLmluZm8oJ0dlbmVyaWNDb250cm9sbGVyJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgQXV0b1Njcm9sbFNlcnZpY2Uuc2Nyb2xsVG8oKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS52ZWdhU2VydmljZXMgPSBnZXRWZWdhU2VydmljZXMoKTtcbiAgICAgICAgICAgIHZhciBsYW5nID0gR2VuZXJpY1NlcnZpY2UuZ2V0TGFuZygpO1xuICAgICAgICAgICAgJHNjb3BlLm1lbnUgPSBHZW5lcmljU2VydmljZS5nZXRNZW51KGxhbmcpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoIFwiI2FjY29yZGlvblwiICkuYWNjb3JkaW9uKHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIj4gZGl2ID4gaDNcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0U3R5bGU6IFwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjbGlja3MgPSB7fTtcbiAgICAgICAgdmFyIGFjY29yZGlvbkFjdGl2ZUNTU0NsYXNzID0gJ2FjY29yZGlvbi1hY3RpdmUnO1xuICAgICAgICB2YXIgYWNjb3JkaW9uSW5DU1NDbGFzcyA9ICdpbic7XG5cbiAgICAgICAgJHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgXHR2YXIgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpZCk7XG4gICAgICAgIFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkICsgJyAuYWNjb3JkaW9uLWJvZHknKTtcblxuICAgICAgICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuXG4gICAgICAgIFx0cmVtb3ZlQ1NTQ2xhc3MoYWNjb3JkaW9uQWN0aXZlQ1NTQ2xhc3MpO1xuXG4gICAgICAgIFx0aWYoIWNsaWNrc1tpZF0pe1xuICAgICAgICBcdFx0cGFyZW50LmNsYXNzTGlzdC5hZGQoYWNjb3JkaW9uQWN0aXZlQ1NTQ2xhc3MpO1xuICAgICAgICBcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFjY29yZGlvbkluQ1NTQ2xhc3MpO1xuXG4gICAgICAgIFx0XHRmb3IodmFyIHByb3BlcnR5IGluIGNsaWNrcyl7XG4gICAgICAgIFx0XHRcdGlmKGlkICE9IHByb3BlcnR5KXtcbiAgICAgICAgXHRcdFx0XHRkZWxldGUgY2xpY2tzW3Byb3BlcnR5XTtcbiAgICAgICAgXHRcdFx0fVxuICAgICAgICBcdFx0fVxuICAgICAgICBcdFx0Y2xpY2tzW2lkXSA9IHRydWU7XG4gICAgICAgIFx0fVxuICAgICAgICBcdGVsc2V7XG4gICAgICAgIFx0XHRwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShhY2NvcmRpb25BY3RpdmVDU1NDbGFzcyk7XG4gICAgICAgIFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYWNjb3JkaW9uSW5DU1NDbGFzcyk7XG5cbiAgICAgICAgXHRcdGRlbGV0ZSBjbGlja3NbaWRdO1xuICAgICAgICBcdH1cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY3VzdG9tU2hvd0V4dHJhU2VydmljZSA9IGZ1bmN0aW9uKGlzTGFzdCl7XG4gICAgICAgICAgICAvLyB0b2RvOiBpdCBzaG91bGQgdXBkYXRlcyB3aGVuIHN3aXRjaGluZyBsYW5nc1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZyAuYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpc0xhc3QgJiYgZWxlbWVudCAmJiBlbGVtZW50LmF0dHJpYnV0ZXMuaWQudmFsdWUuaW5kZXhPZignZW4nKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlbW92ZUNTU0NsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcbiAgICAgICAgXHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG4gICAgICAgIFx0Zm9yKHZhciBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBcdFx0ZWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1x0XG4gICAgICAgIFx0fVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdmFyIGdldFZlZ2FTZXJ2aWNlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlcyA9IHdpbmRvdy5kYXRhLmVzcC53aGF0d2Vkby5zZXJ2aWNlcztcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHNlcnZpY2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluaXQoKTtcbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWludC5hcHAuR2VuZXJpY1NlcnZpY2UnLCBbXSlcbiAgICAuc2VydmljZSgnR2VuZXJpY1NlcnZpY2UnLCBbJyRsb2cnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJGxvZywgJGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuZ2V0TWVudSA9IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgICAgICAgIHZhciBtZW51ID0ge1xuICAgICAgICAgICAgICAgIGVuX0VOOiB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWU6ICdob21lJyxcbiAgICAgICAgICAgICAgICAgICAgYWJvdXR1czogJ2Fib3V0dXMnLFxuICAgICAgICAgICAgICAgICAgICB3aG93ZWFyZTogJ2Fib3V0dXMud2hvd2VhcmUnLFxuICAgICAgICAgICAgICAgICAgICBvdXJ0ZWFtOiAnYWJvdXR1cy5vdXJ0ZWFtJyxcbiAgICAgICAgICAgICAgICAgICAgd2hhdHdlZG86ICd3aGF0d2VkbycsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkYWN0aW9uOiAnd2hhdHdlZG8uZmllbGRhY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc2JvcmRlcmxhdzogJ3doYXR3ZWRvLmNyb3NzYm9yZGVybGF3JyxcbiAgICAgICAgICAgICAgICAgICAgY2l2aWxsaXRpZ2F0aW9uOiAnd2hhdHdlZG8uY2l2aWxsaXRpZ2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdDogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtczogJ3Rlcm1zJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXNfTVg6IHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZTogJ2luaWNpbycsXG4gICAgICAgICAgICAgICAgICAgIGFib3V0dXM6ICdub3NvdHJvcycsXG4gICAgICAgICAgICAgICAgICAgIHdob3dlYXJlOiAnbm9zb3Ryb3MucXVpZW5lc3NvbW9zJyxcbiAgICAgICAgICAgICAgICAgICAgb3VydGVhbTogJ25vc290cm9zLm51ZXN0cm9lcXVpcG8nLFxuICAgICAgICAgICAgICAgICAgICB3aGF0d2VkbzogJ3F1ZWhhY2Vtb3MnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZGFjdGlvbjogJ3F1ZWhhY2Vtb3MuY2FtcG9hY2Npb24nLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc2JvcmRlcmxhdzogJ3F1ZWhhY2Vtb3MuZGVyZWNob2Zyb250ZXJpem8nLFxuICAgICAgICAgICAgICAgICAgICBjaXZpbGxpdGlnYXRpb246ICdxdWVoYWNlbW9zLmxpdGlnaW9jaXZpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICdjb250YWN0bycsXG4gICAgICAgICAgICAgICAgICAgIHRlcm1zOiAndGVybWlub3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtZW51W2xhbmddO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0TGFuZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgYml0cyA9ICRsb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICdlbl9FTic7XG4gICAgICAgICAgICB2YXIgZXNwUm91dGVzID0gWydpbmljaW8nLCAnbm9zb3Ryb3MnLCAncXVlLWhhY2Vtb3MnLCAnY29udGFjdG8nLCAndGVybWlub3MnXTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGVzcFJvdXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoZXNwUm91dGVzW2ldID09PSAgYml0c1sxXSl7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gJ2VzX01YJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9O1xuICAgICAgICBcblxuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5HZW5lcmljJywgW1xuXHQnbWludC5hcHAuSGVhZGVyQ29udHJvbGxlcicsXG5cdCdtaW50LmFwcC5HZW5lcmljQ29udHJvbGxlcicsXG5cdCdtaW50LmFwcC5HZW5lcmljU2VydmljZSdcblx0XSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLkhlYWRlckNvbnRyb2xsZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignSGVhZGVyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRsb2cnLCAnJHRyYW5zbGF0ZScsICckbG9jYXRpb24nLCAnR2VuZXJpY1NlcnZpY2UnLCBmdW5jdGlvbigkc2NvcGUsICRsb2csICR0cmFuc2xhdGUsICRsb2NhdGlvbiwgR2VuZXJpY1NlcnZpY2UpIHtcblxuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5pbmZvKCdIZWFkZXJDb250cm9sbGVyJyk7XG4gICAgICAgICAgICB2YXIgbGFuZyA9IEdlbmVyaWNTZXJ2aWNlLmdldExhbmcoKTtcbiAgICAgICAgICAgIHNldExhbmdBY3RpdmUobGFuZyk7XG4gICAgICAgICAgICAkdHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgICAgICAgICAgICRzY29wZS5tZW51ID0gR2VuZXJpY1NlcnZpY2UuZ2V0TWVudShsYW5nKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc3dpdGNoTGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgICAgICAkdHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgICAgICAgICAgIHNldExhbmdBY3RpdmUobGFuZyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgXG5cbiAgICAgICAgdmFyIHNldExhbmdBY3RpdmUgPSBmdW5jdGlvbihsYW5nKXtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmcgLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5nXycrbGFuZykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW5pdCgpO1xuICAgIH1dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
