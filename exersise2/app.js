    (function(){
      var app = angular.module('gemStore', []);

      app.controller('StoreController', function () {
        this.product = gems;
      });

      var gems = [
      {
        name: "Oolong",
        price: 2.95,
        description: 'Oolong is neither green nor black',
        canPurchase: true,
        
      },
      {
        name: "Darjeeling",
        price: 2.95,
        description: 'The champagne of tea',
        canPurchase: true,
      },
      {
        name: "Sencha",
        price: 2.95,
        description: 'A crisp green tea',
        canPurchase: true,
      },
];

    })();