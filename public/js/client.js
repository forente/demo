var app = angular.module('snackApp', []);

app.controller('SnackController', function($scope, $http) {
  $scope.showError = false;

  var configObject = {
    method: 'GET',
    url: '/snacks/all'
  };

  function handleSuccess(response) {
    $scope.snacks = response.data;
    console.log('Success:', response);
  }

  function handleFailure(response) {
    console.log('Failure:', response);
  }

  function getSnacks() {
    $http(configObject).then(handleSuccess, handleFailure);
  }

  $scope.addSnack = function() {
    var data = {snackName: $scope.input, type: 'Salty'};
    $http.post('/snacks/add', data).then(function(response){
      console.log(response);
      $scope.input = '';
      $scope.showError = false;
      getSnacks();
    }, function(response){
      $scope.showError = true;

      console.log(response);
    });
  };

  getSnacks();
});
