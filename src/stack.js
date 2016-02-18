export default class Stack {
    constructor() {
        this.arr = [];
    }

    size() {
        return this.arr.length;
    }

    push(item) {
        this.arr.push(item);
    }

    pop() {
        if (this.size() > 0) {
            return this.arr.pop();
        } else {
            throw 'Cannot pop from an empty stack';
        }
    }

    peek() {
        if (this.size() > 0) {
            return this.arr[this.size() - 1];
        } else {
            throw 'Cannot peek on an empty stack';
        }
    }
}