'use strict';
angular.module('main')
.controller('LocationCtrl', function ($scope, $http, $cordovaGeolocation) {

  //cordova Geolocation functions

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (/*position*/) {
      // var lat = position.coords.latitude;
      // var lng = position.coords.longitude;
    }, function (err) {
      console.error(err);
    });

  var watchOptions = {timeout: 3000, enableHighAccuracy: false};
  var watch = $cordovageolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function (err) {
      console.error(err);
    },
    function (/*position*/) {
      // var lat = position.coords.latitude;
      // var lng = position.coords.longitude;
    });

  $cordovaGeolocation.clearWatch(watch)
  .then(
    function (/*success*/) {
      //package lng, lat and devId into phoneLocation Object

    },
    function (err) {
      console.error(err);
    });

  //client to server location functions

  $scope.sendLocation = function (phoneLocation) {
    $http({
      method: 'PUT',
      url: '/locations',
      data: phoneLocation
    }).then(function (response) {
      console.log(response);
    }, function (err) {
      console.error(err);
    });
  };

  $scope.getLocations = function () {
    $http({
      method: 'GET',
      url: '/locations',
    }).then(function (response) {
      console.log(response);
      $scope.allPlayers = response;
    }, function (err) {
      console.error(err);
    });
  };
});

