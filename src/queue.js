export default class Queue {
    constructor(array) {
        this.arr = [];
        if (array !== undefined && array instanceof Array) {
            for (let i of array) {
                this.arr.push(i);
            }
        }
    }

    enqueue(item) {
        this.arr.push(item);
    }

    dequeue() {
        if (this.arr.length > 0) {
            return this.arr.shift();
        } else {
            throw "Cannot dequeue on an empty queue";
        }
    }

    peek() {
        if (this.arr.length > 0) {
            return this.arr[0];
        } else {
            throw "Cannot dequeue on an empty queue";
        }
    }

    size() {
        return this.arr.length;
    }
}