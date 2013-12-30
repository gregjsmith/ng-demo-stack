var nurseryRhymesModule = require('../nursery-rhymes');

var Cat = function(){

    var hasFiddle = function(){
        return true;
    }
    
    return{
        hasFiddle: hasFiddle
    }
}

module.exports.Cat = Cat;


var Cow = function(){

    var state = 'Jumping';
    
    var getState = function(){
        return state;
    }
    
    var getPosition = function(){
        return "Over The Moon";
    }
    
    return {
        getState: getState,
        getPosition: getPosition
    }

}

module.exports.Cow = Cow;

nurseryRhymesModule.controller("heyDiddleDiddleController", function($scope){

    $scope.cat = new Cat();
    
    $scope.cow = new Cow();
    
});

nurseryRhymesModule.directive('littleDogDiv', function(){
    
    return {
        restrict: 'E',
        controller: 'heyDiddleDiddleController',
        template: '<div>HAHAHAHAHAHAHAHAHAHAHA what fun!</div>'
    }
})