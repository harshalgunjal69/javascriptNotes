// The event loop in JavaScript is a mechanism that allows for the execution of 
// asynchronous code such as callbacks and promises. It works by repeatedly 
// checking a queue of messages for any pending tasks that need to be executed. 
// When the call stack is empty, the event loop transfers the oldest message from 
// the queue to the stack for processing. This allows the main thread to remain 
// unblocked, enabling a non-blocking I/O model and thus allowing for tasks such 
// as UI rendering and network requests to occur in the background.

// Step 1: Call Stack Initialization
// The call stack is a LIFO (Last In, First Out) stack that keeps track of all the operations to be performed. 
// When a script starts, the main function (global execution context) is pushed onto the stack.

// Step 2: Web APIs and Callback Queue
// JavaScript runtime contains Web APIs that are capable of handling tasks such as DOM events, AJAX requests,
// and timers. When these operations complete, the corresponding callbacks are placed into the "callback queue."

// Step 3: Event Loop Begins
// The event loop starts running when the call stack is empty, i.e., all the initial synchronous code has finished executing.

// Step 4: Queue Monitoring
// The event loop continuously monitors the call stack and the callback queue. If the call stack is empty and there are 
// callbacks in the queue, the event loop pushes the first callback onto the call stack to be executed.

// Step 5: Execution of Callbacks
// Once pushed onto the call stack, the callback is executed. During its execution, if it encounters any asynchronous 
// operations, they are handled by the Web APIs, and upon completion, their callbacks are again placed in the queue.

// Step 6: Rendering
// Certain tasks like updating the UI are performed at specific times by the browser's rendering engine. If rendering is 
// due, the event loop will allow the rendering steps to run before continuing with the next iteration.

// Step 7: Next Iteration
// After executing a callback and the rendering (if needed), the event loop goes back to step 4, continuously checking 
// for callbacks in the queue. This process repeats for each iteration of the event loop.

// This model allows JavaScript to perform non-blocking operations despite being single-threaded, by offloading 
// operations that take time to complete to the Web APIs and then executing the callbacks only when the stack is clear.
