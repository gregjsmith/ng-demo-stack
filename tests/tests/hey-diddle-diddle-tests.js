var serviceLocator = angular.injector(['ng', 'nurseryRhymeModule'])
var scope = {}
var $controllers = serviceLocator.get('$controller');

QUnit.module('with hey diddle diddle', {
    setup: function() {
        scope = serviceLocator.get('$rootScope').$new();
        $controllers('heyDiddleDiddleController', {$scope: scope})
    }
});


test("the cat has a fiddle", function(){

    var hasFiddle = scope.cat.hasFiddle();
    
    ok(hasFiddle);
})


test("the cow's current state is jumping", function(){
    
    var state = scope.cow.getState();
    
    equal(state, "Jumping");
    
});

test("the cow's current position is Over The Moon", function(){
     
     var position = scope.cow.getPosition();

    equal(position, "Over The Moon")
})