// promise been used for fetching data over the API/Internet
// promise used for asynchronous program.
// usually there are two returned value when dealing with promise. resolved (succeed) will be returned if condition for promise met, whereas reject (fail) will be returned if condition inside function doesn't met

// back to Ordering a tea scenario
// in this scenario setTimeout used to simulate the time it takes to do the function in real life. setTimeout will stop the asynchronous process for the time specified in the second argument.
let state = {
    ingredients : {tea : 180, water : 150},
    isTeaMachineReady : true
}
const checkIngredients = (state)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(state.ingredients.tea>=150&&state.ingredients.water>=100) resolve('Ingredients ready');
            else if(state.ingredients.tea<150&&state.ingredients.water>=100) reject('Ingredients tea not enough, can\'t make the tea');
            else if(state.ingredients.tea>=150&&state.ingredients.water<100) reject("Ingredients water not enough, can\'t make the tea");
            else reject('Ingredients tea and water not enough');
        },3000);
    });
}

const checkMachine = (state)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(state.isTeaMachineReady) resolve('Machine ready, tea can be made');
            else reject('Machine is busy');
        },3000);
    })
}

const makeTea = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('The tea is ready');
        },1000);
    });
}

const readyThePlateAndCup = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Plate and cup is ready!')
        },1000);
    });
}

const serveTea = () => {
    setTimeout(()=>{
        console.log('Here is your tea, sir');
    },3000);
}

const orderTea = (state)=>{
    // then will be executed right after the previous asynchronous function completed. then actually accepts two arguments the (resolve,reject) message. But to make things more fancier Javascript comes with catch method, which will only catch the reject only (when the promise doesn't fulfilled)
    checkIngredients(state)
        .then((resolveMessage)=>{
            console.log(resolveMessage);
            return checkMachine(state);
        })
        .then((resolveMessage)=>{
            console.log(resolveMessage);
            // feels like making tea and ready the plate can run asynchronously (paralel)
            // the Promise.all will make all promises inside Array from first argument can run simultaniously
            return Promise.all([readyThePlateAndCup(),makeTea()]);
        })
        .then((resolveMessage)=>{
            console.log(resolveMessage);
            serveTea();
        }) // catch can cath the reject promise from the then(s) above
        .catch((rejectMessage)=>{
            console.log(rejectMessage);
        })
}
// method then in object Promise will be executed after the function 

orderTea(state)
 