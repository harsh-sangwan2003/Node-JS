const events = require('events');
const eventEmmiterObject = new events.EventEmitter();

function openDoor() {

    console.log("Open the door");
}


function openGate() {

    console.log("Open the gate");
}

function pickUpTheCall(name) {

    console.log("Hello ", name);
}

//Registers an event and when the event is fired callback function is called
// eventEmmiterObject.addListener('pingpong', openDoor);
eventEmmiterObject.on('pingpong', openDoor);
eventEmmiterObject.on('pingpong', openGate);

//Fires an event
eventEmmiterObject.emit('pingpong');
eventEmmiterObject.emit('pingpong');
eventEmmiterObject.emit('pingpong');

eventEmmiterObject.on('ringring', pickUpTheCall);
eventEmmiterObject.emit('ringring', "Harsh");


// eventEmmiterObject.off('pingpong');
// eventEmmiterObject.removeAllListeners('pingpong');