    (function(){
      var app = angular.module('gemStore', []);

      app.controller('StoreController', function () {
        this.products = gems;
      });

      var gems = [
      {
        name: "Oolong",
        price: 2.95,
        description: 'Oolong is neither green nor black',
        images:[
          {
          full:'/rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
          thumb:'oolingthumbnail.jpg',
        },
        ],
        canPurchase: true,
        soldOut: false,
        
      },
      {
        name: "Darjeeling",
        price: 2.95,
        description: 'The champagne of tea',
        canPurchase: true,
        soldOut: false,
      },
      {
        name: "Sencha",
        price: 2.95,
        description: 'A crisp green tea',
        canPurchase: true,
        soldOut: false,
      },
];

    })();