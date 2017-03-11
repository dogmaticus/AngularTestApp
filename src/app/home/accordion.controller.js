'use strict'

export default class AccordionCtrl {
    constructor($scope) {
      $scope.oneAtATime = false;

      $scope.groups = [{
          groupTitle: "Test1",
          templateUrl: "file1.html"
      }, {
          groupTitle: "Test2",
          templateUrl: "file2.html"
      }, {
          groupTitle: "Test3",
          templateUrl: "file3.html"
      }];

      $scope.status = {
          isOpen: new Array($scope.groups.length)
      };

      for (var i = 0; i < $scope.status.isOpen.length; i++) {
          $scope.status.isOpen[i] = (i === 0);
      }
    }
}

AboutController.$inject = ['$scope'];
