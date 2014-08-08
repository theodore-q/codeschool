(function(){
      var app = angular.module('NewsFeeds', []);

    app.controller('NewsController', function($scope,$http) {
      //$http is working in this



     function httpRequest(url,tag){
      $http({
      method: 'JSONP',
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q="+url+"&callback=JSON_CALLBACK"
        }).success(function(data, status, headers, config) {
          // data contains the response
          $scope.tag = data.responseData.feed.entries;
          console.log(data.responseData.feed.entries);

        }).error(function(data, status, headers, config) {
          });
     }
     
      httpRequest('http://www.telegraph.co.uk/news/uknews/rss',telegraph);{}

      $http({
      method: 'JSONP',
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.bbci.co.uk/news/rss.xml&callback=JSON_CALLBACK"
        }).success(function(data, status, headers, config) {
          // data contains the response
          $scope.bbc = data.responseData.feed.entries;
          console.log(data.responseData.feed.entries);

        }).error(function(data, status, headers, config) {
          });
    

      $http({
      method: 'JSONP',
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://www.theguardian.com/uk/rss&callback=JSON_CALLBACK"
        }).success(function(data, status, headers, config) {
          // data contains the response
          $scope.guardian = data.responseData.feed.entries;
          console.log(data.responseData.feed.entries);

        }).error(function(data, status, headers, config) {
          });
    

      $http({
      method: 'JSONP',
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://www.leicestermercury.co.uk/all-content.rss&callback=JSON_CALLBACK"
        }).success(function(data, status, headers, config) {
          // data contains the response
          $scope.mercury = data.responseData.feed.entries;
          console.log(data.responseData.feed.entries);

        }).error(function(data, status, headers, config) {
          });
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

  // var News2 = function (){

  //     google.load("feeds", "1");



  //     var foo;
  //     function initialize() {
  //       var feed = new google.feeds.Feed("http://www.telegraph.co.uk/news/uknews/rss");
  //       feed.setNumEntries(10);
  //     //console.log(feed),
  //       feed.load(function(result) {
  //        if (!result.error) {
  //         console.log(result.feed);
  //         foo = result.feed;
  //       }
        
  //     });
  //   };
    
  //   google.setOnLoadCallback(initialize);

  //   return foo;
  // }();
  // console.log(News);


      var News = [
      {
        author: "Telegraph Staff",
        contentSnippet: "The Cats Protection National Cat Awards, the winner and finalists in pictures",
        link: "http://telegraph.feedsportal.com/c/32726/f/534871/s/3d47a278/sc/38/l/0L0Stelegraph0O0Cnews0Cpicturegalleries0Cuknews0C110A187820CThe0ECats0EProtection0ENational0ECat0EAwards0Ethe0Ewinner0Eand0Efinalists0Ein0Epictures0Bhtml/story01.htm",
        publishedDate: "Thu, 07 Aug 2014 07:15:07 -0700",
        title: "The Cats Protection National Cat Awards, the winner and finalists in pictures",
        
      },
      {
        author: "Telegraph Staff",
        contentSnippet: "British photographer David Slater talks about his dispute with Wikimedia after it refused to remove his photo of a 'monkey ...",
        link: "http://telegraph.feedsportal.com/c/32726/f/534871/s/3d44994e/sc/38/l/0L0Stelegraph0O0Ctechnology0Cnews0C110A180A620CMonkeys0Eselfie0Esparks0Ecopyright0Erow0Bhtml/story01.htm",
        publishedDate: "Thu, 07 Aug 2014 07:06:30 -0700",
        title: "Monkey's 'selfie' sparks copyright row",
        },
      ];
      var News3 = [
      {
        author: "ipsum",
        contentSnippet: "lorem ipsumksjdljlsfjlfjlsdkjf in pictures",
        link: "http://telegraph.feedsportal.com/c/32726/f/534871/s/3d47a278/sc/38/l/0L0Stelegraph0O0Cnews0Cpicturegalleries0Cuknews0C110A187820CThe0ECats0EProtection0ENational0ECat0EAwards0Ethe0Ewinner0Eand0Efinalists0Ein0Epictures0Bhtml/story01.htm",
        publishedDate: "Thu, 07 Aug 2014 07:15:07 -0700",
        title: "Torem ipsumksjdljlsfjlfjlsdkjf and finalists in pictures",
        
      },
      {
        author: "Telegraph Staff",
        contentSnippet: "orem ipsumksjdljlsfjlfjlsdkjf his dispute with Wikimedia after it refused to remove his photo of a 'monkey ...",
        link: "http://telegraph.feedsportal.com/c/32726/f/534871/s/3d44994e/sc/38/l/0L0Stelegraph0O0Ctechnology0Cnews0C110A180A620CMonkeys0Eselfie0Esparks0Ecopyright0Erow0Bhtml/story01.htm",
        publishedDate: "Thu, 07 Aug 2014 07:06:30 -0700",
        title: "orem ipsumksjdljlsfjlfjlsdkjfht row",
        },
      ];




    })();