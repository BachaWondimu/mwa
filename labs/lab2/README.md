# CS572-EventLoop
1. Explain the difference between synchronous and asynchronous operations in Node.js.
   
   synchronous operations in v8 run code line by line. That means the next statement will not be excuted before the proceeding one is done. On the other hand, asynchronous operations delagate the tasks(lines of codes) to some supporting enviroments like Web APIs in the frontend(browser) or Libuv componant in nodejs. Those supporting environment will schedule the tasks in their queues called Macrotask Queue.

2. Describe the main components of the Node.js event loop. What happens in each phase? 

   Event loop has six phases:
   1. timers
        executes callbacks scheduled by setTimeout() and setInterval().
   2. pending callback
        this componant if for node to utilize internally to execute callbacks for some system operations such as types of TCP errors.
   3. idle
        only used internally by the node to stop infinite loop.
   4. poll
        All node works except the one scheduled by timers and close callback will be sheduled inside poll queue.
   5. check
         executes callbacks scheduled by setImmediate api.
   6. close callbacks
        close backs functions will be stored in this queue.

3. How does Node.js handle non-blocking I/O operations? Explain the role of LibUV.

   Node.js allows for asynchronous functionality despite JavaScript's synchronous nature. Features like setTimeout originate from the environment's global object, not JavaScript itself. And, this environment, in the case of node, relies on libuv, which enables non-blocking I/O operations by efficiently handling asynchronous tasks.

4. Discuss the limitations of a single-threaded event loop. When might using worker threads be beneficial? 

   Event loop is single threaded and scheduling too much asynch tasks in its queues will end up blocking the event loop. In that case either spinnig up worker threads or creating a child process can be benefiacial. 

5. Who utilize the pre-allocated threads?

   There are four pre-allocated threade utilized by the node core APIs mainly used for handling blocking tasks like reading from or writing to file and ecription/decription operations.

6. Explain the difference between synchronous code and blocking code?

   Blocking code is a line of code that takes to much time to be excuted while synchronous code is a code that is to be executed sequentially one by one. Sychronous code can be blocking if it is time taking to be executed.

7. Explain the difference between `setImmediate(f)` and `setTimeout(f, Time)`? 

   setImmediate(f) puts the function f in a check queue and it will be handled immidiately after poll queue is completed. setTimeOut schedules a function to be run after a minimum threshold.

8. Explain the difference between `process.nextTick(f)` and `setImmediate(f)`?

   process.nextTick(f) is not part of event loop but setImmediate does. Also the nextTick queue has the highest priority than all other queues.

9. Explain the difference between `process.nextTick(f)` and `queueMicrotask(f)`?

   microtask queues are managed by v8 and has less priority than nextTick while nicketTick is managed by node and has a higher priority than all other queues including microTask queues.

10. Name 10 of Node Core modules
   1. path
   2. fs
   3. querystring
   4. events
   5. http
   6. os
   7. util

11. Name 10 of Node Global objects
   1. Buffer
   2. console
   3. Crypto
   4. crypto
   5. event
   6. file
   7. global
   8. navigator
   9. process
   10. Response
   11. Request
   12. URL
   13. URlSearchParams
  
# Navigate to the `test` folder, and run `npm i`.
Write down your observation and explain what happens in Node when you run the following commands:
   * `npm run start`  
   * For Windows: 
      * `npm run start`
      * `SET UV_THREADPOOL_SIZE=2 && npm run start`
      * `SET UV_THREADPOOL_SIZE=8 && npm run start`
      * `SET UV_THREADPOOL_SIZE=12 && npm run start`
   * For MacOS: 
      * `npm run start`
      * `export UV_THREADPOOL_SIZE=2 && npm run start`
      * `export UV_THREADPOOL_SIZE=8 && npm run start`
      * `export UV_THREADPOOL_SIZE=12 && npm run start`

      Adding more threads did not make the latency time shorter. Thread best practice is to have threads that is slightly higher than number of cpu cores. if we have more threads then the context-swithing will be higher, which leads to higher latency.
