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