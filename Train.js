var database = firebase.database();
var newEntry = database.ref();

var destEntered = "";
var nextEntered = "";
var freqEntered = "";
var trainEntered = "";
var minutesAway = "";

$("#submit").on("click", function(event) {
    event.preventDefault();

    trainEntered = $("#train-input").val().trim();
    destEntered = $("#destination-input").val().trim();
    startEntered = $("#start-input").val().trim();
    freqEntered = $("#freq-input").val().trim();
    


    newEntry.push({
        train: trainEntered,
        destination: destEntered,
        startTime: startEntered,
        frequency: freqEntered,
        
    })
    // minAway = startTime - frequency???
    // var start = 

});


newEntry.on("child_added", function(childSnapshot) {
    var newAdd = childSnapshot.val();
    
    console.log("Train: " + newAdd.train);
    console.log("Destinaion: " + newAdd.destination);
    console.log("Start Time: " + newAdd.startTime);
    console.log("Frequency: " + newAdd.frequency);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var trainTd = $("<td>").text(newAdd.train);
    var destinationTd = $("<td>").text(newAdd.destination);
    var frequencyTd = $("<td>").text(newAdd.frequency);
    var minAwayTd = moment().format('hh:mm');
    var nextTd   =

    // var nextTd = moment().from(start);
    tRow.append(trainTd, destinationTd, frequencyTd, nextTd, minAwayTd);
    tBody.append(tRow);
    $("#table").append(tBody);


    
    

});

// can't get the Next Arrival column to display anything other than the current time, regardless of what I put in the form.  
// unable to figure out the minutes away column.  
// Tried reading the documentation on it but coudln't figure out how to get it to display/what the 
// equation was to get a number to appear in that spot.
// unsure of why everytime I reload the page the timestamp updates to the current time.