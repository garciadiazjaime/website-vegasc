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

			var places = ['Tijuana', 'Mexicali', 'La Paz', 'Chula Vista'];
			$('.slideshow').cycle({
				fx: 'scrollLeft',
				timeout: 0,
				pager: '.slideshow_pager',
				pagerAnchorBuilder: function(idx, slide) {
					return '<li><a href="#">' + places[idx] + '</a></li>';
		    }
			});

		};

		init();
	}]);
