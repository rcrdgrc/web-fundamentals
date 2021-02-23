class SLNode {
    constructor(value) {
        this.val = value
        this.next = null
    }
}
class SLQueue {
    constructor() {
        this.front = null
        this.tail = null
    }

    // ADDS a given value to the end of the list(tail points to this new val)
    enqueue(val) {
        if (this.front == null) {
            let newNode = new SLNode(val);
            this.front = newNode;
            this.tail = newNode;
        }
        else {
            let newNode = new SLNode(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // remove the node and return the value of the front of the list

    // remove the node and return the value of the front of the list
    dequeue() {
        // get the tail and remove it (set the tail to the tail.previous)
        if (this.front === null) {
            return;
        }

        let runner = this.front;
        while (runner.next !== null) {
            if (runner.next.next === null) {
                this.tail = runner;
            }
            runner = runner.next;
        }
        this.tail.next = null;
        return this.tail;
    }


    // returns the the value at the front of the queue
    front() {

    }

    // reutrns TRUE/FALSE based on whether the queue contains a given value
    contains(value) {

    }

    // returns true if a queue is empty. false if it's not
    isEmpty() {

    }

    // return the number of values in a queue
    size() {

    }

    printMe() {
        let returnStr = '';
        let runner = this.front;
        while (runner != null) {
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

myQueue = new SLQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();
myQueue.printMe();//should return 1->2->3->4->5->

console.log(myQueue.printMe())