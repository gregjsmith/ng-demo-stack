;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var nurseryRhymeModule = require('../nursery-rhymes');

var Humpty = function(){
    
    var moods = {
        Nervous: "Nervous", 
        Bold: "Bold"
    }
    
    var state = "Sitting on the wall";
    
    var getState = function(){
        return state;
    }
    
    var setState = function(newState){
        state = newState;
    }
    
    var mood = moods.Nervous;
    
    var getMood = function(){
        return mood;
    }
    
    var setMood = function(newMood){
        mood = newMood;
    }
    
    return {
        getMood: getMood,
        setMood: setMood,
        getState: getState,
        setState: setState,
        moods: moods
    }
};

module.exports.Humpty = Humpty;

nurseryRhymeModule.filter('theLookingGlass', function(){
    return function(humptyDumpty){
        humptyDumpty.setMood(humptyDumpty.moods.Bold);
        
        return humptyDumpty;
    }
})

nurseryRhymeModule.controller('humptyDumptyController', function($scope, allTheKingsHorsesAndAllTheKingsMen){
    
    var humpty = new Humpty();
    
    $scope.getHumpty = function(){
        return humpty;
    }
    
    $scope.pushHumpty = function(){
        humpty.setState("Had a great fall");
    };
    
    $scope.attemptToFix = function(){
        var state = allTheKingsHorsesAndAllTheKingsMen.fix(humpty);
        
        humpty.setState(state);
    }
});

nurseryRhymeModule.factory('allTheKingsHorsesAndAllTheKingsMen', function(){
    
    var fix = function(humpty){
        return "We failed sire";
    }
    
    return {
        fix: fix
    }
});

},{"../nursery-rhymes":2}],2:[function(require,module,exports){
module.exports = angular.module('nurseryRhymeModule', []);
},{}],3:[function(require,module,exports){
// load all the required test modules here
// for example: require('./test-module-one');

require('./tests/humpty-dumpty-tests');
},{"./tests/humpty-dumpty-tests":4}],4:[function(require,module,exports){
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

},{"../../app/humpty/humpty-dumpty":1}]},{},[3])
;