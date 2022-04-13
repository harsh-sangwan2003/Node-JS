//Attaching events to process

process.on('exit', (code) => {

    console.log("Node App Exit: ", code);
})

process.on('uncaughtException', err => {

    console.log("Some problem occurred: ", err);
})

// throw new Error("Hi");
show();