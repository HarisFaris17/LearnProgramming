const graph = {
    a:['b','c','f'],
    b:['d','e'],
    c:['e','f'],
    d:[],
    e:[],
    f:[]
}

const graphWithCyclic = {//abd cyclic
    a:['b','c','f'],
    b:['d','e'],
    c:['e','f'],
    d:['a','e'],
    e:[],
    f:[]
}

function depthFirstSearch(graph,source,destination){
    let stack=[source];
    while(stack.length>0){
        let test=stack.pop();
        if(test==destination) return true;
        for(let neighbor of graph[test]){
            stack.push(neighbor);
        }
    }
    return false;
}

console.log(`depthFirstSearch(graph,'a','f') ${depthFirstSearch(graph,'a','f')}`);

function depthFirstSearchRecursion(graph,source,destination){
    if(source==destination) return true;
    for(let neighbor of graph[source]){
        if(depthFirstSearchRecursion(graph,neighbor,destination)) return true;
    }
    return false;
}

console.log(`depthFirstSearchRecursion(graph,'a','g') ${depthFirstSearchRecursion(graph,'a','g')}`);

function breadthFirstSearch(graph,source,destination){
    let query=[source];
    while(query.length>0){
        let test=query.shift();
        if(test==destination) return true;
        for(let neighbor of graph[test]){
            query.push(neighbor);
        }
    }
    return false;
}

console.log(`breadthFirstSearch(graph,'a','f') ${breadthFirstSearch(graph,'a','f')}`)

function depthFirstSearchWithCyclicProtection(graph,source,destination){
    let stack=[source];
    let path=[];
    while(stack.length>0){
        let test=stack.pop();
        if(test==destination) return true;
        if(path.includes(test)) continue;
        path.push(test);
        for(let neighbor of graph[test]){
            stack.push(neighbor);
        }
    }
    return false;
}

console.log(`depthFirstSearchWithCyclicProtection(graphWithCyclic,'a','e') ${depthFirstSearchWithCyclicProtection(graphWithCyclic,'a','e')}`);

//depthFirstSearch with cyclic protection 
//with recursion
function depthFirstSearchRecursionWithCyclicProtection(graph,source,destination){
    var path=[];
    function depthFirstSearchRecursionWithCyclicProtection(graph,source,destination){
        if(source==destination) return true;
        //logging untuk memberitahu apakah node sudah pernah dilalui
        // console.log(`${path} ${source} ${path.includes(source)}`);
        if(path.includes(source)) return false;
        path.push(source);
        for(let neighbor of graph[source]){
            if(depthFirstSearchRecursionWithCyclicProtection(graph,neighbor,destination)) return true;
        }
        return false;
    }
    return depthFirstSearchRecursionWithCyclicProtection(graph,source,destination);
}

console.log(`depthFirstSearchRecursionWithCyclicProtection(graphWithCyclic,'a','e') ${depthFirstSearchRecursionWithCyclicProtection(graphWithCyclic,'a','e')}`);

function breadthFirstSearchWithCyclicProtection(graph,source,destination){
    let query=[source];
    let path=[];
    while(query.length>0){
        let test=query.shift();
        if(test==destination) return true;
        if(path.includes(test)) continue;
        path.push(test);
        for(let neighbor of graph[test]){
            query.push(neighbor);
        }
    }
    return false;
}

console.log(`breadthFirstSearchWithCyclicProtection(graphWithCyclic,'a','e') ${breadthFirstSearchWithCyclicProtection(graphWithCyclic,'a','e')}`)