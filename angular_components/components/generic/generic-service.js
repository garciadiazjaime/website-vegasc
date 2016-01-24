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
