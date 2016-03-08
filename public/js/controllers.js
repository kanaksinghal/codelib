var codelibControllers = angular.module('codelibControllers', ['chart.js']);

codelibControllers.controller('SearchCtrl', ['$scope', '$rootScope', '$location',
  function ($scope, $rootScope, $location) {
    $scope.searchText = '';
  }]);

codelibControllers.controller('LoginCtrl', ['$scope', '$rootScope',
  function($scope,$rootScope) {
    $rootScope.hideLogin = true;
  }]);

codelibControllers.controller('SearchResultCtrl', ['$scope', '$rootScope', '$routeParams', '$cookies',
  function($scope,$rootScope, $routeParams, $cookies) {
    $rootScope.showSearch = true;
    $rootScope.searchText = $routeParams.q;
    $cookies.put('searchText', $routeParams.q);

    var technologies = [
      {name:'PHP',abbreviation:'php'},
      {name:'Java',abbreviation:'java'},
      {name:'JavaScript',abbreviation:'js'},
    ];

    $scope.matchedTechs = [];
    for(var i in technologies){
      var st = $rootScope.searchText;
      var tn = new RegExp('\\b'+technologies[i].name+'\\b', 'i');
      var ta = new RegExp('\\b'+technologies[i].abbreviation+'\\b', 'i');

      if(st.match(tn))
        st=st.replace(tn, '');
      else if(st.match(ta))
        st=st.replace(ta, '');

      if(st != $rootScope.searchText)
        $scope.matchedTechs.push({st:st.replace(/\s+/g,' ').trim(), tech:technologies[i]});
    }
    $scope.matchedTechs.push({st:$rootScope.searchText});
    console.log($scope.matchedTechs);
    // if(found)

    $scope.threads=[
      {
        id:1,
        title:"dgfh",
        desc:"kjlnv dfkjvdfkjdfhdjv dfkjbhdfjhbd bf hbdfb",
        type:"snippets",
        tech:"PHP",
        auther:"kanak",
      },
      {
        id:2,
        title:"uisdbv",
        desc:"kjlnv dfkjvdfkjdfhdjv dfkjbhdfjhbd bf hbdfb",
        type:"tips",
        tech:"CSS",
        auther:"kanak",
      },
      {
        id:3,
        title:"kjbfsdb",
        desc:"kjlnv dfkjvdfkjdfhdjv dfkjbhdfjhbd bf hbdfb",
        type:"snippets",
        tech:"Java",
        auther:"kanak",
      },
    ]

    $scope.addToLibrary = function(thread){
      for (var i in $rootScope.library) {
        if($rootScope.library[i].id == thread.id)
          return;
      };
      $rootScope.library.push(thread);
      $cookies.putObject('library', $rootScope.library);
    }

    $scope.filterPerm = {type:'snippets'};
  }]);

codelibControllers.controller('ProfileCtrl', ['$scope', '$rootScope',
  function($scope,$rootScope) {

    $scope.repo = {};
    $scope.repo.labels = ["November 1","November 2","November 3","November 4","November 5","November 6","November 7","November 8","November 9","November 10","November 11","November 12","November 13","November 14","November 15","November 16","November 17","November 18","November 19","November 20","November 21","November 22","November 23","November 24","November 25","November 26","November 27","November 28","November 29","November 30"];
    $scope.repo.series = ['Daily Reach'];
    $scope.repo.data = [
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    ];
    $scope.repo.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.repo.colours= [{
      "fillColor": "rgba(52, 152, 219,1.0)",
      "strokeColor": "rgba(52, 152, 219,1.0)"
    }];
    $scope.repo.options = {
      scaleBeginAtZero : false,
      scaleShowGridLines : false,
      showScale : false
    };
  }]);