    (function(){
      var app = angular.module('gemStore', []);

      app.controller('StoreController', function () {
        this.product = gem;
      });

      var gem = {
        name: "Oolong",
        price: 2.95,
        description: 'Oolong is neither green nor black',
        canPurchase: true
      };


console.log(app);

    })();