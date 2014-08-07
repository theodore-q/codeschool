(function(){
      var app = angular.module('gemStore', []);

      app.controller('NewsController', function () {
        this.articles = News.enrtries;
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

  var News = function (){

      google.load("feeds", "1");



      var foo;
      function initialize() {
        var feed = new google.feeds.Feed("http://www.telegraph.co.uk/news/uknews/rss");
        feed.setNumEntries(10);
      //console.log(feed),
        feed.load(function(result) {
         if (!result.error) {
          console.log(result.feed);
          foo = result.feed;
        }
        
      });
    };
    
    google.setOnLoadCallback(initialize);

    return foo;
  }();
  console.log(News);


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