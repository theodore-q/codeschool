    (function(){
      var app = angular.module('gemStore', []);

      app.controller('StoreController', function () {
        this.products = gems;
      });

      app.controller('PanelController', function(){
        this.tab = 2;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
      

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      });


      var gems = [
      {
        name: "Oolong",
        price: 4.95,
        description: 'Oolong is neither green nor black',
        images:[
          {
          full:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
          thumb:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
        },
        ],
        canPurchase: true,
        soldOut: false,
        
      },
      {
        name: "Darjeeling",
        price: 2.95,
        description: 'The champagne of tea',
        images:[
          {
          full:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
          thumb:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
        },
        ],
        canPurchase: true,
        soldOut: false,
      },
      {
        name: "Sencha",
        price: 2.95,
        description: 'A crisp green tea',
        images:[
          {
          full:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
          thumb:'rustic-ti-kuan-yin-oolong-tea-256px-256px.jpg',
        },
        ],
        canPurchase: true,
        soldOut: false,
      },
];

    })();