// event module
const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("someEvent", (message) => {
    console.log(message);
}
);
emitter.emit("someEvent", "The event was emitted");


