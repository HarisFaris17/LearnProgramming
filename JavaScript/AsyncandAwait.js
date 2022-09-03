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

// we can write asynchronous promise like synchronous style

// Refer to Promise.js
const orderTeaAsynchronousButSynchronousStyle = async ()=>{
    // this will return the resolve/reject message
    let ingredients = await checkIngredients(state);
    console.log(ingredients)
    let machine = await checkMachine(state);
    // this will return the resolve/reject message
    console.log(machine);
    let compound = await Promise.all([makeTea(),readyThePlateAndCup()])
    console.log(compound)
    await serveTea();
}

console.log("proof that this is asynchronous");
orderTeaAsynchronousButSynchronousStyle();
console.log("This will show up before function above")