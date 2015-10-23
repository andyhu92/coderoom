App.controller('mainCtrl',['$scope',function ($scope){
   $scope.move = {
      set:function(num){
         $scope.$broadcast('change',num.toString());
      }
   }

}]);
App.controller('NotesAllCtrl',['Notes','$scope',function (Notes,$scope){
    $scope.notesAll = Notes.query();
     $scope.id='1';
     $scope.$on('change',function (event,args){
      $scope.id = args;
     })
}]);

App.controller('ModalCtrl', ['$scope','$modal',function ($scope, $modal) {

  $scope.animationsEnabled = true;

  $scope.open = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        note: function () {
          return $scope.note;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

App.controller('ModalInstanceCtrl', ['$scope','$modalInstance','note',function ($scope, $modalInstance,note) {
  $scope.note = note;
  $scope.ok = function () {
    $modalInstance.close();
  };

}]);


