function anotherAddEventListener(typeOfEvent, callback) {
    let eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOFKeypress: 2
    }

    if(eventThatHappened.eventType === "keypress") {
        callback(eventThatHappened);
    }
}

debugger;
anotherAddEventListener("keypress", function(event) {
   console.log(event); 
});