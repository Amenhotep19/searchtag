var app = angular.module('MyAPP', ['SearchTag']);
app.controller('MainCtrl', function($scope) {
	$scope.hello = "Simple search tab";

	$scope.searchElements = [
    {name : 'tag1'},
    {name : 'test2'},
    {name : 'item3'},
  ];

  $scope.searchFilterAction = function(callback) {
    $scope.list = callback;
  };

});