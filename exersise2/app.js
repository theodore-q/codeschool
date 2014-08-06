    (function () {
        var app = angular.module('TeaStore', []);

        app.controller('StoreController', function(){
			this.product = Tea;
        });
        
        var Tea = {
			name: 'Oolong',
			price: 2.60,
			description: 'Oolong is neither green nor black',
        };

    })();