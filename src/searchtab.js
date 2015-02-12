var searchTabApp = angular.module('SearchTag', []);
searchTabApp.directive('searchtag', function() {  
  return {
    restrict:'E',
    replace:true,
    scope:true,
    link: function(scope,e,a) {
      scope.holder = a.placeholder;
      scope.action = a.btnAction;
      scope.results = [];
      scope.confirm = 0;
      scope.callback = [];
      scope.addToModel = function(name) {
        scope.searchFilter = name;
        scope.searchFilter += ":";
        document.getElementById("searchtaginput").focus();
      };
      scope.addToResult = function(name) {
        name = name.replace(",","");
        var obj = {};
        var tmp = name.split(":");
        obj[tmp[0]] = tmp[1];
        var json = JSON.parse(JSON.stringify(obj));
        var jsonResult = {name:name}
        scope.results.push(jsonResult);
        scope.callback.push(json);
        scope.searchFilter = null;
      };
      
      scope.removeTagOnBackspace = function (event) {
          if (scope.searchFilter == undefined && event.keyCode === 8) {
              scope.confirm = scope.confirm + 1;
              if (scope.confirm == 2) {
                scope.results.splice(scope.results.$last, 1);
                scope.callback.splice(scope.results.$last, 1);
                scope.confirm = 0;
              }
          }
      };
      
      scope.removeFilteredItem = function(index) {
        scope.results.splice(index, 1);
        scope.callback.splice(index, 1);
        document.getElementById("searchtaginput").focus();
      };
      
      scope.$watch(function(s) {return s.searchFilter}, function(r) {
        if (r != undefined && r.indexOf(",") > -1) {
          scope.addToResult(scope.searchFilter)
        }
      });
    },
    template:
      '<div id="searchtagmain" style="position:relative">' +
        '<div class="selectElements" ng-show="searchFilter"><div ng-repeat="elem in searchElements | filter:searchFilter"><p ng-click="addToModel(elem.name)">{{elem.name}}</p></div></div>' +
          '<div class="input-group form-control">' + 
            '<div class="resultSearchField" ng-repeat="res in results"><span class="label label-primary" ng-click="removeFilteredItem($index)">{{res.name}}</span></div>' +
            '<input id="searchtaginput" ng-model="searchFilter"ng-keydown="removeTagOnBackspace($event)" type="text" class="" placeholder="{{holder}}" />' +
            '<span class="input-group-btn"><button class="btn btn-primary" ng-click="searchFilterAction(callback)">{{action}}</button></span>' +
          '</div>' +
      '</div>'
  }
});