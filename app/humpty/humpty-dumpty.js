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
