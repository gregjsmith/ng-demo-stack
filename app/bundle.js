;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../nursery-rhymes":3}],2:[function(require,module,exports){
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

},{"../nursery-rhymes":3}],3:[function(require,module,exports){
module.exports = angular.module('nurseryRhymeModule', []);
},{}],4:[function(require,module,exports){
// this is the start up file for the the applicaiton; all applicaiton parts should be loaded here, in dependency order
// for example, if controller-1 had a dependency on module-1, module-1 should be loaded first, thus:
// require('./module-1');
// require('./controller-1');

require('./nursery-rhymes');
require('./humpty/humpty-dumpty');
require('./diddle/hey-diddle-diddle');
},{"./diddle/hey-diddle-diddle":1,"./humpty/humpty-dumpty":2,"./nursery-rhymes":3}]},{},[4])
;