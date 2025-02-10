const { Task } = require("./lib/Task");


const sum1 = x =>  x + 1

const future = x => new Task((res, rej)=> {
    setTimeout(()=> {
        res(x)
    }, 100)
});
future(1).map(sum1).fork(console.log, console.error) // Hello