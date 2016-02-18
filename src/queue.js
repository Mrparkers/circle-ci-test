export default class Queue {
    constructor() {
        this.arr = [];
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