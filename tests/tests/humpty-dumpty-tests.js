var serviceLocator = angular.injector(['ng', 'nurseryRhymeModule'])
var scope = {}
var $controllers = serviceLocator.get('$controller');
var $filters = serviceLocator.get("$filter");

QUnit.module('with humpty dumpty', {
    setup: function() {
        scope = serviceLocator.get('$rootScope').$new();
        $controllers('humptyDumptyController', {$scope: scope})
    }
});

test('initial state is sitting on the wall', function(){
    
    var humpty = scope.getHumpty();
    
    equal(humpty.getState(), "Sitting on the wall");
});

test('if pushed, humpty will fall', function(){
    scope.pushHumpty();
    
    var humpty = scope.getHumpty();
    
    equal(humpty.getState(), 'Had a great fall');
});

test('all the kings horses and all the kings men cannot put Humpty back together again', function(){
    scope.attemptToFix();
    
    var humpty = scope.getHumpty();
    
    equal(humpty.getState(), 'We failed sire');
});


QUnit.module("when humpty is through the looking glass");


test("he becomes more bold than usual", function(){
    var Humpty = require('../../app/humpty/humpty-dumpty').Humpty;
    
    var lookingGlass = $filters("theLookingGlass");
    
    var newHunpty = lookingGlass(new Humpty());
    
    equal(newHunpty.getMood(), "Bold");
    
})
