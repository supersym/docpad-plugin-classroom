/*Asynchronous Callbacks*/

//Sometimes functions can take a long time to return. For example if you call a
//function read(file), the function might have to stop and wait for the disk to
//spin-up and seek to the right location before the information is ready. If the
//file is actually a socket connection to another server in the cloud, the
//function will have to wait until the other server responds.

//This can be a problem. For example, in the browser you don't want the user
//interface to freeze while you fetch map results from Google Maps. On the
//server, you don't want one request that accesses a rarely used part of the
//database to hold up all other requests.

//Luckily there is a solution. In the asynchronous model the readAsync function
//accepts both a file and a callback parameter. The function returns immediately
//before the file is read and schedules the read to happen sometime in the
//future. Once the data is ready, the callback function is called on the data.

//And what's a callback? It's a closure! We'll look at how to use asynchronous
//functions; implementing them is a whole other story.

//Here's an example of how you would use a regular blocking read function to get
//the contents of a file.


var readFile = function () {
    var data;
    data = read('file.txt');
    doSomething('Contents: ' + data);
};

Here's the same example using an asynchronous readAsync function.

var readFileAsync = function () {
    var func = function (x) {
        /* You can do things here with the
           file contents x. */
        doSomething('Contents: ' + x);
    };
    readAsync('file.txt', func);
    /* You can do things here but you don't
       have access to the file contents. func
       may or may not have been called at this
       point. */
    doMoreStuff();
};

//Someone calls readFileAsync. Inside readFileAsync, readAsync is called with callback func. Once the data is ready, readAsync calls func with the data. Then func calls doSomething with the updated string containing the data. This might happen before, during, or after the execution of doMoreStuff().
