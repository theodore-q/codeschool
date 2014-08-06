    (function () {
        var app = angular.module('store', []);

        app.controller('StoreController', function(){
			this.product = tea;
        });
        var tea = {
			name: 'Oolong',
			price: 2.60,
			description: 'Oolong is neither green nor black'
        };

    })();