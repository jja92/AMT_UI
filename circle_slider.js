function SliderCtrl($scope) {
  $scope.min = 10;
  $scope.max = 100;
  $scope.shape = 'Circle';
  $scope.value = 20;

  $scope.onSlide = function onSlide(value) {
    console.log('on slide  ' + value);
  }

  $scope.onSlideEnd = function onSlideEnd(value) {
    console.log('on slide end  ' + value);
  }

}

angular.module('test', ['angular.circular-slider']).controller('SliderCtrl', SliderCtrl);
