const events = require('events');
const eventEmitterObject = new events.EventEmitter();

function openTheDoor() {

    console.log("Open the door");
}

function openGate() {

    console.log("Open the gate");
}

function pickUpTheCall(name) {

    console.log("Hello ",name);
}

//Registering a callback fn with an event - pingpong
// eventEmitterObject.addListener('pingpong', openTheDoor);
eventEmitterObject.on('pingpong', openTheDoor);
eventEmitterObject.on('pingpong', openGate);
eventEmitterObject.on('ringring', pickUpTheCall);

eventEmitterObject.emit('pingpong');
eventEmitterObject.emit('pingpong');
eventEmitterObject.emit('pingpong');
eventEmitterObject.emit('pingpong');
eventEmitterObject.emit('ringring',"Amit");

//To remove the event
eventEmitterObject.removeAllListeners('pingpong');

// eventEmitterObject.emit('pingpong');