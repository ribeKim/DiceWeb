const test = new WebSocket("wss://pi.coco1337.xyz:58000");

test.onopen = (event) => {
  console.log('websocket onopen');
}

addEventListener("message", (event) => {
  console.log("worker event message", event.target, event.type);
  postMessage(event.data);
})