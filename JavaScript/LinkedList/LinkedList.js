class Node{
    constructor(val,next){
        this.val=val;
        this.next=next;
    }
}

let node1 = new Node('a',null);
let node2 = new Node('b',node1);
let node3 = new Node('c',node2);

let anotherNode1 = new Node('x',null);
let anotherNode2 = new Node('y',anotherNode1);
let anotherNode3 = new Node('z',anotherNode2);


// console.log(node1);

// console.log(node1.val);
// console.log(node2.val);
// console.log(node3.val);
// console.log(node2.next.val);

function printNodes(head){
    let current = head;
    while(current!=null){
        console.log(current.val);
        current=current.next;
    }
}

function isExistVal(head,val){
    let current = head;
    while(current!=null){
        if(val==current.val){
            return true;
        }
        current=current.next;
    }
    return false;
}

function reverseNodes(head){
    if(head==null||undefined) return;
    let current = head;
    let currentNext = head.next;
    current.next=null;
    let currentPrevious = current;
    current=currentNext;
    currentNext=currentNext.next;
    while(currentNext!=null){
        current.next=currentPrevious;
        currentPrevious=current;
        current=currentNext;
        currentNext=currentNext.next;

    }
    current.next=currentPrevious;
    head=current;
}
// function zipper(linkedList1,linkedList2){
//     if(linkedList1==null||linkedList2==null)return;
//     let currentList1=linkedList1;
//     let nextList1=currentList1.next;
//     let currentList2=linkedList2;
//     let nextList2=currentList2.next;
//     while(true){
//         if(currentList2==null) break;
//         nextList2=nextList2.next;
//         currentList1.next=currentList2;
//         currentList1=nextList1;
//         if(currentList1==null) break;
//         nextList1=nextList1.next;
//         currentList2.next=currentList1;
//         currentList2=nextList2;
//     }
// }

function zipper(linkedList1,linkedList2){
    if(linkedList1==null||linkedList2==null)return;
    let currentList1=linkedList1;
    let nextList1=currentList1.next;
    let currentList2=null;
    let nextList2=linkedList2;
    while(true){
        if(nextList2==null) break;
        currentList1.next=nextList2;
        currentList2=nextList2;
        nextList2=nextList2.next;
        if(nextList1==null) break;
        currentList2.next=nextList1;
        currentList1=nextList1;
        nextList1=nextList1.next;
    }
}


// console.log("print nodes");
// printNodes(node3);
// console.log("is exist val 'a'");
// console.log(isExistVal(node3,'a'));
// console.log("is exist val 'z'");
// console.log(isExistVal(node3,'z'));
// console.log("reverse");
// reverseNodes(node3);
// printNodes(node1);
zipper(node3,anotherNode3);
printNodes(node3);



