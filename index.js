/**
 * * This script demonstrates the order of execution in the Node.js Event Loop.
 * * It logs 'Start' and 'End' synchronously, while scheduling a `setTimeout` and a `setImmediate` callback.
 * ? The `setTimeout` callback is executed after 0 milliseconds during the timers phase.
 * ? The `setImmediate` callback is executed during the check phase, which can often occur before the `setTimeout` callback.
 * ! Note: Even though both `setTimeout` and `setImmediate` are asynchronous, their execution order is determined by the event loop phases.
 * TODO: Test the behavior with different timer values for `setTimeout` to see how it affects execution order.
 */

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate 1");
// });

// console.log("End");

/**
 * * This script demonstrates the basics of asynchronous programming in Node.js.
 * * It logs 'Start' and 'End' synchronously while using `setTimeout` and `setImmediate` to showcase how asynchronous operations work.
 * ? `setTimeout` schedules a callback to be executed after a specified delay (2 seconds in this case).
 * ? `setImmediate` schedules a callback to execute as soon as the current event loop phase is complete.
 * ! Note: Even though `setTimeout` has a delay, `setImmediate` may run before it due to how the event loop processes the phases.
 * TODO: Explore behavior by adjusting the `setTimeout` delay to understand event loop execution order.
 */

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 2000);

setImmediate(() => {
  console.log("Immediate 1");
});

console.log("End");
