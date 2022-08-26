import java.lang.Math;

public class WalmartHeap{
    private int numberOfChild;
    private int size;
    private Node[] heap;
    private int numberOfIncrement=10;

    public WalmartHeap(int powerOfChild) {
        this.numberOfChild = 2^powerOfChild;
    }
    public WalmartHeap(int powerOfChild,Node[] array){
        this.numberOfChild=2^powerOfChild;
        // this.height=heightCounter(array);
        heapingArray(array);
    }

    private int heightCounter(){
        double logSize = Math.log10(size*(numberOfChild-1)+1);
        double logNumberOfChild = Math.log10(numberOfChild);
        return (int)Math.floor(logSize/logNumberOfChild);
    }

    public void insert(Node node){
        if(heap.length==size){
            incrementMaxIndex();
        }
        heap[size++]=node;
        for(int i=size;i>=0;){
            int parentIndex=(int)Math.floor((float)(i-1)/numberOfChild);
            if(heap[i].getKey()>heap[parentIndex].getKey()){
                Node dummy=heap[i];
                heap[i]=heap[parentIndex];
                heap[parentIndex]=dummy;
                i=parentIndex;
            }
            else{
                break;
            }
        }

    }

    public Node popMax(){
        Node popedNode = heap[0];
        heap[0]=heap[size--];
        int i=0;
        boolean stop=false;
        while(!stop){
            for(int j=numberOfChild*i+1;j<=numberOfChild*(i+1);j++){
                if(j>=size){
                    stop=true;
                    break;
                }
                if(heap[j].getKey()>heap[i].getKey()){
                    Node dummy=heap[i];
                    heap[i]=heap[j];
                    heap[j]=dummy;
                    break;
                }
                stop=true;
            }
        }
        if(heap.length-size>=10){
            decrementMaxIndex();
        }
        return popedNode;
    }

    private void incrementMaxIndex(){
        Node[] newHeap = new Node[heap.length+numberOfIncrement];
        for(int i=0;i<heap.length;i++){
            newHeap[i]=heap[i];
        }
        newHeap=heap;
    }

    private void decrementMaxIndex(){
        Node[] newHeap = new Node[heap.length-numberOfIncrement];
        for(int i=0;i<newHeap.length;i++){
            newHeap[i]=heap[i];
        }
        newHeap=heap;
    }

    private void heapingArray(Node[] array) {
        heap=array;
        size=array.length;
        int height=heightCounter();
        for(int i=1;i<height;i++){
            for(int j=numberOfChild^(i-1);j<=)
        }
        for(int i=1;i<size;i=i+numberOfChild){
            int k;
            if(i+numberOfChild>size){
                k=size;
            }else{
                k=i+numberOfChild;
            }
            int largest=i;
            for(int j=i+1;j<k;j++){
                if(heap[largest].getKey()<heap[j].getKey()){
                    largest=j;
                }
            }
            int parentIndex=((i-1)/numberOfChild);
            if(heap[largest].getKey()>heap[parentIndex].getKey()){
                Node dummy = heap[largest];
                heap[largest] = heap[parentIndex];
                heap[parentIndex]=dummy;
            }

        }
        // for(int i=(int)Math.floor((float)(size-1)/numberOfChild);i>=0;){
        //     for(j=)

        //     i=i-numberOfChild;
        // }
        for(int i=0;i<array.length;i++){
            insert(array[i]);
        }
    }


    public int getNumberOfChild() {
        return this.numberOfChild;
    }

    public void setNumberOfChild(int powerOfChild) {
        this.numberOfChild = 2^numberOfChild;
    }

    public Node[] getHeap() {
        return this.heap;
    }

    public int getNumberOfIncrement() {
        return this.numberOfIncrement;
    }

    public void setNumberOfIncrement(int numberOfIncrement) {
        this.numberOfIncrement = numberOfIncrement;
    }
    
    public static void main(String[] args) {
        Node[] trial={new Node(1),new Node(2),new Node(3),new Node(4),new Node(5)};
        WalmartHeap heap = new WalmartHeap(2,trial);
        System.out.println(heap.getHeap()[0]);
    }

}

class Node{
    private int key;

    public Node(int key) {
        this.key = key;
    }

    public int getKey() {
        return this.key;
    }

    public void setKey(int key) {
        this.key = key;
    }

}