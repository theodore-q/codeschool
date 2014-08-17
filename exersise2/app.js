    (function(){
      var app = angular.module('gemStore', []);

      app.controller('StoreController', function () {
        this.products = gems;
      });

      app.controller('PanelController', function (){
      this.tab = 1;
    
      this.selectTab = function (setTab){
        this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
  });


      var gems = [
        {
          name: "Dodecahedron",
          price: 2.95,
          images: [
          { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
          { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
          { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: 'Amazing',
          canPurchase: true,
          soldOut: false,
        },
        {
          name: "Pentagonal Gem",
          price: 5.95,
          images: [
          { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
          { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
          { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: 'not so amazing',
          canPurchase: false,
          soldOut: false,
        }
      ];






    })();