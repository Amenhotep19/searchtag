# searchtag
Angular Module to Search

## How to use

### Add item
* Type "t", to filter items.
* Select one item.
* Type something.
* Type , (comma) to add.

### Remove item
* Click on the tag to remove.
* Press backspace 2 times to remove the last item.

## How to install

    <searchtag placeholder="search" btn-action="search"></searchtag>

* btn-action : button value
* placeholder : placeholder

var app = angular.module('MyAPP', ['SearchTag']);

Your controller

    app.controller('MainCtrl', function($scope) {

Your tag list

    $scope.searchElements = [
      {name : 'tag1'},
      {name : 'test2'},
      {name : 'item3'},
    ];
  
Your callback function
  
    $scope.searchFilterAction = function(callback) {
      $scope.list = callback;
    };
    
    
**Require**
angularjs and bootstrap

**Demo**
http://embed.plnkr.co/U8GKqLJaw17PXKsIit7U/
