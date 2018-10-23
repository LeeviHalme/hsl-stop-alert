/**
 * HSL Bus stop alert
 * 
 * Repository: hsl-stop-alert
 * Author: Leevi Halme
 */

// Require Dependencies
const WebSocket = require("ws");

const wsUrl = "wss://mqtt.hsl.fi";
const busStopId = 0;

// WebSocket Setup
const ws = new WebSocket(wsUrl);
 
ws.on("open", function open() {
  ws.send("connect");
});
 
ws.on("message", function incoming(data) {
  console.log(data);
});