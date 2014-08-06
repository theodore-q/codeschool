   //  (function () {
   //      var app = angular.module('TeaStore', []);

   //      app.controller('StoreController', function(){
			// this.product = Tea;
   //      });

   //      var Tea = {
			// name: 'Oolong',
			// price: 2.60,
			// description: 'Oolong is neither green nor black',
   //      };

   //  })();

        (function(){
      var app = angular.module('gemStore', []);

      var gem = {
        name: "Dodecahedron",
        price: 2.95,
        description: '. . .',
      }

      app.controller('StoreController', function () {
        this.product = gem;
      });
    })();
    console.log("loaded");