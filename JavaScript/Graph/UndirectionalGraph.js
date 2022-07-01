const edges = [
    ['a','b'],
    ['b','c'],
    ['b','d'],
    ['a','e'],
    ['b','e'],
    ['d','f']
]

function edgesToNodes(edges){
    let nodes={};
    for(let i in edges){
        if(!nodes[edges[i][0]]) nodes[edges[i][0]]=[];
        if(!nodes[edges[i][1]]) nodes[edges[i][1]]=[];
        nodes[edges[i][0]].push(edges[i][1]);
        nodes[edges[i][1]].push(edges[i][0]);
    }
    return nodes;
}

function uniDirectionalHasPathWithDepthFirstSearch(edges,source,destination){
    let nodes=edgesToNodes(edges);
    console.log(nodes);
    
    return depthFirstSearchWithCyclicProtection(nodes,source,destination);
}

function uniDirectionalHasPathWithBreadthFirstSearch(edges,source,destination){
    let nodes=edgesToNodes(edges);
    console.log(nodes);
    
    return breadthFirstSearchWithCyclicProtection(nodes,source,destination);
}

//dapat digunakan karena ada cyclic protection
function depthFirstSearchWithCyclicProtection(graph,source,destination){
    let stack=[source];
    let path=[];
    while(stack.length>0){
        let test=stack.pop();
        if(test==destination) return true;
        if(path.includes(test)) continue;
        console.log(test);
        path.push(test);
        for(let neighbor of graph[test]){
            stack.push(neighbor);
        }
    }
    return false;
}

function breadthFirstSearchWithCyclicProtection(graph,source,destination){
    let query=[source];
    let path=[];
    while(query.length>0){
        let test=query.shift();
        if(test==destination) return true;
        if(path.includes(test)) continue;
        console.log(test);
        path.push(test);
        for(let neighbor of graph[test]){
            query.push(neighbor);
        }
    }
    return false;
}

console.log(`uniDirectionalHasPathWithDepthFirstSearch(edges,'a','f') ${uniDirectionalHasPathWithDepthFirstSearch(edges,'a','f')}`);
console.log(`uniDirectionalHasPathWithDepthFirstSearch(edges,'a','z') ${uniDirectionalHasPathWithDepthFirstSearch(edges,'a','z')}`);
console.log(`uniDirectionalHasPathWithBreadthFirstSearch(edges,'a','f') ${uniDirectionalHasPathWithBreadthFirstSearch(edges,'a','f')}`);
console.log(`uniDirectionalHasPathWithBreadthFirstSearch(edges,'a','z') ${uniDirectionalHasPathWithBreadthFirstSearch(edges,'a','z')}`);

const edgesWithUnconnectedNodes = [
    ['a','b'],
    ['b','c'],
    ['b','d'],
    ['a','e'],
    ['b','e'],
    ['d','f'],
    ['g','h']
]

function countConnectedComponent(edges){
    if(edges==null) return 0;
    let nodes = edgesToNodes(edges);
    console.log(nodes);
    let path = [];
    let count = 0;
    for(let node in nodes){
        if(path.includes(node)) continue;
        let stack = [node];
        //iterating sampai semua node yang terhubung secara langsung ataupun tidak langsung ke variabel node selesai dan simpan di path, sehingga meskipun
        //setelah for mengulang terus dan bertemu node yang sudah diiterasikan, maka tidak akan dieksekusi
        while(stack.length>0){//menggunakan breadth first search
            let connectedNode = stack.pop();
            console.log(connectedNode);
            if(path.includes(connectedNode)) continue;
            path.push(connectedNode);
            for(let neighbor of nodes[connectedNode]){
                stack.unshift(neighbor);
            }
        }
        count++;
    }
    return count;
}

console.log(countConnectedComponent(edgesWithUnconnectedNodes))

function largestComponent(edges){
    if(edges==null) return 0;
    let nodes = edgesToNodes(edges);
    console.log(nodes);
    let path = [];
    let max = 0;
    for(let node in nodes){
        if(path.includes(node)) continue;
        let stack = [node];
        let count = 0;
        while(stack.length>0){//menggunakan breadth first search
            let connectedNode = stack.pop();
            console.log(connectedNode);
            if(path.includes(connectedNode)) continue;
            path.push(connectedNode);
            for(let neighbor of nodes[connectedNode]){
                stack.unshift(neighbor);
            }
            count++;
        }
        if(count>max) max=count;
    }
    return max;
}

console.log(largestComponent(edgesWithUnconnectedNodes));

//shortestpath pasti menggunakan breadth first search
function shortestPath(edges,source,destination){
    if(edges==null||edges.length==0) return [];
    let graph = edgesToNodes(edges);
    let query=[source];
    let path=[];
    let shortestPath=[];
    while(query.length>0){
        let test=query.shift();
        //jika sudah mencapai destinasi
        if(test==destination){ 
            console.log(path);
            while(path.length>0){
                console.log(test);
                if(graph[path[path.length-1]].includes(test)){
                    shortestPath.unshift(test);
                    test=path.pop();
                }else{
                    path.pop();
                }
            }
            console.log(test);
            shortestPath.unshift(test);
            return shortestPath;
        }
        if(path.includes(test)) continue;
        console.log(test);
        path.push(test);
        for(let neighbor of graph[test]){
            query.push(neighbor);
        }
    }
    return [];
}

console.log(shortestPath(edgesWithUnconnectedNodes,'a','f'));

//grid w untuk water dan l untuk island
const grid = [
    ['w','l','w','w','w'],
    ['l','l','l','w','l'],
    ['w','w','w','w','l'],
    ['l','l','w','l','w'],
    ['l','w','l','l','w']
]
function islandCount(grid){
    let path=[];
    let count=0;
    let rowLength=grid.length;
    let coloumnLength = grid[0].length;
    for(let r=0;r<rowLength;r++){
        for(let c=0;c<coloumnLength;c++){
            if(grid[r][c]=='l'){
                //mengapa harus memakai r*grid[0].length+c, karena jika kita menggunakan array [r,c] maka path.includes([r,c]) tidak akan bisa mendeteksi apakah array [r,c]
                //sama dengan apa yang dikandungnya, karena untuk komparasi array harus menggunakan reference yang sama, jika tidak sama maka akan mereference false
                if(path.includes(r*coloumnLength+c)) continue;
                count++;
                //menggunakan breadth first search
                let query=[[r,c]];
                while(query.length>0){
                    let test=query.pop();
                    if(path.includes(test[0]*coloumnLength+test[1])) continue;
                    console.log(test);
                    if(grid[test[0]-1])if(grid[test[0]-1][test[1]]=='l') query.unshift([test[0]-1,test[1]]);
                    if(grid[test[1]-1])if(grid[test[0]][test[1]-1]=='l') query.unshift([test[0],test[1]-1]);
                    if(grid[test[0]+1])if(grid[test[0]+1][test[1]]=='l') query.unshift([test[0]+1,test[1]]);
                    if(grid[test[1]+1])if(grid[test[0]][test[1]+1]=='l') query.unshift([test[0],test[1]+1]);
                    path.push(test[0]*coloumnLength+test[1]);
                }
            }
        }
    }
    console.log(path)
    return count;
}

console.log(islandCount(grid));

function minimumIsland(grid){
    let path=[];
    //bukan 0 karena pada saat komparasi count<minNodes hanya akan menghasilkan false terus karena minNodes akan selalu lebih kecil dari count,
    //atau jika count adalah 0 sama saja akan menghasilkan false karena menggunakan kurang dari '<' oleh karena itu digunakan
    //angka terbesar agar count dipastikan selalu diisikan ke minNodes pada saat kali pertama bertemu if(count<minNodes) karena sebelumnya minNodes belum pernah diisi
    //oleh count
    let minNodes=Number.MAX_VALUE;
    let rowLength=grid.length;
    let coloumnLength = grid[0].length;
    for(let r=0;r<rowLength;r++){
        for(let c=0;c<coloumnLength;c++){
            if(grid[r][c]=='l'){
                //mengapa harus memakai r*grid[0].length+c, karena jika kita menggunakan array [r,c] maka path.includes([r,c]) tidak akan bisa mendeteksi apakah array [r,c]
                //sama dengan apa yang dikandungnya, karena untuk komparasi array harus menggunakan reference yang sama, jika tidak sama maka akan mereference false
                if(path.includes(r*coloumnLength+c)) continue;
                //menggunakan breadth first search
                let count=0;
                let query=[[r,c]];
                while(query.length>0){
                    let test=query.pop();
                    if(path.includes(test[0]*coloumnLength+test[1])) continue;
                    console.log(test);
                    if(grid[test[0]-1])if(grid[test[0]-1][test[1]]=='l') query.unshift([test[0]-1,test[1]]);
                    if(grid[test[1]-1])if(grid[test[0]][test[1]-1]=='l') query.unshift([test[0],test[1]-1]);
                    if(grid[test[0]+1])if(grid[test[0]+1][test[1]]=='l') query.unshift([test[0]+1,test[1]]);
                    if(grid[test[1]+1])if(grid[test[0]][test[1]+1]=='l') query.unshift([test[0],test[1]+1]);
                    count++;
                    path.push(test[0]*coloumnLength+test[1]);
                }
                if(count<minNodes) minNodes=count;
            }
        }
    }
    console.log(path)
    return minNodes;
}

console.log(`minimumIsland(grid) ${minimumIsland(grid)}`)