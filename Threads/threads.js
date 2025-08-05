const { isMainThread, workerData, Worker } = require("worker_threads")

if (isMainThread) {

    console.log(`Worker! Process ID: ${process.pid}`);
    new Worker(__filename, // it will get the threads.js
        {
            workerData: [23, 2, 4, 63, 49],
        }
    );
    new Worker(__filename, // it will get the threads.js
        {
            workerData: [5, 12, 29, 39, 50],
        }
    );

}
else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`Sorted Arrays are here with Process ID: ${process.pid} :  ${workerData.sort((a,b)=> a-b)}`);
}

/*

Worker threads are of the same process.
--------------------------------------
Example

We have a arrays, and we want to sort() using threads example
both the workers will run side by side, using the same process. 
each will sort the data, and worker data will get updated. 

by using the worker threads, we can get the advantage of the CPU multiple processor. 

*/
