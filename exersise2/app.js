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


      var gems = function (){

      google.load("feeds", "1");



     function initialize() {
      var feed = new google.feeds.Feed("http://www.telegraph.co.uk/news/uknews/rss");
      feed.setNumEntries(10);
      //console.log(feed),
      feed.load(function(result) {
        if (!result.error) {
        return result;
        

 
        }
        console.log(gems);
      });
    }
    google.setOnLoadCallback(initialize);
  }();

    })();