class Node{
    constructor(val=null,left=null,right=null) {
        this.left=left;
        this.right=right;
        this.val=val;
    }
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.right=c;
a.left=b;
c.left=d;
d.right=e;
b.left=f;
b.right=g;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


function breadthFirstSearch(start,val){
    if(start==null) return false;
    let query = [start];
    while(query.length!=0){
        let shift = query.shift();
        if(shift==null) continue;
        console.log(shift.val);
        if(shift.val==val)return true;
        query.push(shift.left,shift.right);
    }
    return false;
}

function breadthFirstSearchWithPath(start,val){
    let path=[];
    if(start==null) return false;
    let query = [start];
    while(query.length!=0){
        let shift = query.shift();
        if(shift==null) continue;
        path.push(shift);
        console.log(shift.val);
        if(shift.val==val){
            truePathGetter(path);
            console.log("true path :");
            console.log(path);
            return true;
        }
        query.push(shift.left,shift.right);
    }
    return false;
}

console.log(breadthFirstSearch(a,'e')? 'e ada' : 'e tidak ada');
console.log(breadthFirstSearchWithPath(a,'c')? 'c ada' : 'c tidak ada');

function depthFirstSearch(start,val){
    if(start==null) return false;
    let stack = [start];
    while(stack.length!=0){
        let pop = stack.pop();
        if(pop==null) continue;
        console.log(pop.val);
        if(pop.val==val)return true;
        stack.push(pop.right,pop.left);
    }
    return false;
}

function depthFirstSearchWithPath(start,val){
    if(start==null) return false;
    let path = [];
    let stack = [start];
    while(stack.length!=0){
        let pop = stack.pop();
        if(pop==null) continue;
        path.push(pop);
        console.log(pop.val);
        if(pop.val==val) {
            truePathGetter(path);
            console.log("true path :");
            console.log(path);
            return true;
        }
        stack.push(pop.right,pop.left);
    }
    return false;
}

console.log(depthFirstSearch(a,'e')? 'e ada' : 'e tidak ada');
console.log(depthFirstSearchWithPath(a,'c')? 'c ada' : 'c tidak ada');

//return true path last index of path to root
function truePathGetter(path){
    let test = path.pop();
    let truePath = [test];
    while(path.length!=1){
        if(((path[path.length-1].left)?(path[path.length-1].left.val==test.val):false)||((path[path.length-1].right)?(path[path.length-1].right.val==test.val):false)){
            truePath.unshift(test);
            test=path.pop();
        }else{
            path.pop();
        }
    }
    //root
    truePath.unshift(path.pop());
    let i = -1;
    while(++i<truePath.length){
        path[i]=truePath[i];
    }
}

//return true path from last to root but array doesnt contain last
function truePathGetterWithoutLast(path,last){
    //variabel to contain path array so, path array doesnt change while processed in this function
    let dummyPath=[];
    let i = -1;
    while(++i<path.length){
        dummyPath[i]=path[i];
    }
    let test = last;
    let truePath = [test];
    while(dummyPath.length!=1){
        if(((dummyPath[dummyPath.length-1].left)?(dummyPath[dummyPath.length-1].left.val==test.val):false)||((dummyPath[dummyPath.length-1].right)?(dummyPath[dummyPath.length-1].right.val==test.val):false)){
            test=dummyPath.pop();
            truePath.unshift(test);
        }else{
            dummyPath.pop();
        }
    }
    //root
    truePath.unshift(dummyPath.pop());
    return truePath;
}

let node1 = new Node(99);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);
let node9 = new Node(9);

node1.left=node2;
node1.right=node3;
node2.left=node4;
node4.left=node5;
node4.right=node6;
node3.left=node7;
node3.right=node8;
node8.left=node9;

//treeMin using depthFirstSearch
function treeMin(root){
    if(root==null) return null;
    let min = root.val;
    let stack = [root];
    while(stack.length>0){
        let pop = stack.pop();
        if(pop==null) continue;
        if(pop.val<min) min=pop.val;
        stack.push(pop.right,pop.left);
    }
    return min;
}

console.log(treeMin(node1));

//treeSum using breadthFirstSearch
function treeSum(root){
    if(root==null) return 0;
    let sum=0;
    let query = [root];
    while(query.length>0){
        let shift = query.shift();
        if(shift==null) continue;
        sum+=shift.val;
        query.push(shift.left,shift.right);
    }
    return sum;
}

console.log(treeSum(node1));

//maxLeafSum using depthFirstSearch
function maxLeafSum(root){
    if(root==null) return 0;
    let max=0;
    let test;
    let stack=[root];
    let path=[];
    while(stack.length>0){
        test=stack.pop();
        if(test==null) continue;
        console.log(`${test.val} ${test.left} ${test.right}`);
        if(!test.left&&!test.right){
            let sumLeaf = sumArray(truePathGetterWithoutLast(path,test));
            if(sumLeaf>max) {
                max=sumLeaf;
            }
        }
        else{
            path.push(test);
        }
        stack.push(test.right,test.left);
    }
    return max;
}

function maxLeafSumRecursion(root){
    if(root==null) return 0;
    let left = maxLeafSumRecursion(root.left);
    let right = maxLeafSumRecursion(root.right);
    return root.val+((left>right)?left:right);
}

function sumArray(array){
    let i=-1;
    let sum=0;
    while(++i<array.length){
        sum+=array[i].val;
    }
    return sum;
}

console.log(maxLeafSum(node1));
console.log(maxLeafSumRecursion(node1));