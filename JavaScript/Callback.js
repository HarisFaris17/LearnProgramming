// Synchronous program is program that its next code cant be executed except the previous code has completed
// whereas Asynchronous program is a program that runs paralel (next code can executed even though previous code hasn't completed)

// in order to make things understandable, we will make the lesson into scenario of ordering a tea

const makeTea = callback => {
    let tea = null
    console.log("Please wait, we are making your tea")
    // the lambda function inside setTimeout will be executed after time specified in the second argument of setTimeout. after that the callback will be called
    setTimeout(()=>{tea='Tea has been made, we will serve it to you';callback(tea)},3000)
}

// this callback function will be passed into function makeTea, hence whenever timeout in setTimeout in function makeTea has been reached  this function will be executed
const callbackAfterTeaHasBeenMade = (tea) => console.log(tea)

// scenario
console.log('Walk in to a tea store')
console.log('Order 1 tea, please')
// the watress will start making us a tea
makeTea(callbackAfterTeaHasBeenMade)
// while we are waiting the tea to be served, we can do other things like browsing on the internet, making assignment, etc
console.log("Making assignment")
console.log('Browsing over the internet')
// we wait until we got the tea
// callback function is a function that runs whenever the asynchronous function completed