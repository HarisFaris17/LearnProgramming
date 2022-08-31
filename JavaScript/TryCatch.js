// if there is an error that is not inside either try and catch, the program will terminate
// the block code inside try will be executed. If there is an error happen then the program will jump to block code of catch


try{
    // error
    errorcode;
}
catch(e){
    // this will show up since there is error inside the block code of try 
    console.log("Something went wrong")
}

try{
    // this will show up
    console.log('This will show up')
}
catch(e){
    // there is no error inside block code of try, hence block code of catch will not show up
    console.log('This will not show up')
}

try{
    errorcode;
}
// variabel error e is an object
catch(e){
    // e has 3 properties, that are name, message, stack

    // name of the error
    console.log(e.name)

    // message of the error
    console.log(e.message)

    // stack is the execution files chain in javascript
    console.log(e.stack)
}

// block code inside finally will be executed no matter if there is some error or not
try{
    console.log('Haha')
}
catch(e){
    console.log("Will not showup")
}
finally{
    console.log('This will show up, always')
}

// we can throwing specific error
try{
    // property 'age' is expected butthere is no 'age' property in object. One possible scenario of this happens when transfering data over the internet
    object = JSON.parse('{"name" : "Haris"}');
    // object.age will be null
    if(!object.age){
        throw new SyntaxError('There is no object.age')
    }
    
}
catch(e){
    console.log(e.message)
}

// we can differentiate various error
try{
    // property 'age' is expected butthere is no 'age' property in object. One possible scenario of this happens when transfering data over the internet
    object = JSON.parse('{"name" : "Haris", "age" : 18}');
    // object.age will be null
    if(object.age==null){
        throw new SyntaxError('There is no object.age')
    }
    // this will throw ReferenceError since variable errorCode is now declared
    errorCode;
    
}
catch(e){
    // if the error comes from SyntaxError (as we specified above)
    if(e instanceof SyntaxError) console.log(`JSON Parse error : ${e.message}`);
    else if (e instanceof ReferenceError) console.log('Some code not declared');
    else console.log(e.message);
}