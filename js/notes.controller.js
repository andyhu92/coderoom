App.controller('NotesAllCtrl',function (Notes,$scope){
    $scope.notesAll = Notes.query();
})

App.controller('ModalCtrl', function ($scope, $modal) {

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

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('note-modal').controller('ModalInstanceCtrl', function ($scope, $modalInstance,note) {
  $scope.note = note;
  $scope.ok = function () {
    $modalInstance.close();
  };

});


