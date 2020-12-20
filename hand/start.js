var processLine = "npm start";
var bat;
var loop = () => {
  bat = require("child_process").exec(processLine);

  bat.stdout.on("data", (data) => {
    console.log("@ " + data);
  });

  bat.on("exit", (data) => process.nextTick(loop));
};

loop();

//bat.on("close", (data) => {
//  console.log("close " + data);
//});

//bat.on("disconnect", (data) => {
//  console.log("disconnect " + data);
//});

//bat.on("error", (data) => {
//  console.log("error " + data);
//});
