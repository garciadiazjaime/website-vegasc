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
