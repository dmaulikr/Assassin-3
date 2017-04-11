'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ionic.cloud',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider, $ionicCloudProvider) {
  $ionicCloudProvider.init({
    'core': {
      app_id: '824b4476'
    }
  });

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/user');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
    .state('main.user', {
      url: '/user',
      views: {
        'tab-user': {
          templateUrl: 'main/templates/user.html',
          controller: 'UserCtrl as ctrl'
        }
      }
    })
    .state('main.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'main/templates/map.html',
          controller: 'MapCtrl as ctrl'
        }
      }
    })
    .state('main.debug', {
      url: '/debug',
      views: {
        'tab-debug': {
          templateUrl: 'main/templates/debug.html',
          controller: 'DebugCtrl as ctrl'
        }
      }
    });
})
.run(function(Location, $ionicPlatform) {
  Location.initLocation();
});


