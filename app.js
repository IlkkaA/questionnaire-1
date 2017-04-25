var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/start');
    
    $stateProvider
        
      // START PAGE =================================
      .state('start', {
          url: '/start',
          templateUrl: 'start.html',
          controller: function($scope) {
          }


      })
    
    
      // QUESTIONNAIRE FORM ========================================
      .state('questionnaire', {
          url: '/questionnaire',
          templateUrl: 'questionnaire.html'
      })

      // nested list with custom controller
      .state('questionnaire.list', {
          url: '/list',
          templateUrl: 'partial-home-list.html',
          controller: function($scope) {
              $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
          }
      })

      // nested list with just some random string data
      .state('questionnaire.paragraph', {
          url: '/paragraph',
          template: 'I could sure use a drink right now.'
      })

      ;
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});