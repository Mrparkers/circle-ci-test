import { expect } from 'chai';
import Queue from '../src/queue';
import Chance from 'chance';

describe('Queue', () => {
    let queue, chance;

    beforeEach(() => {
        queue  = new Queue();
        chance = new Chance();
    });

    it('should initialize as an empty queue', () => {
        expect(queue.size()).to.equal(0);
    });

    it('should add an element when enqueue() is called', () => {
        const randomNumber = chance.integer();
        queue.enqueue(randomNumber);
        expect(queue.size()).to.equal(1);
        expect(queue.peek()).to.equal(randomNumber);
    });

    it('should throw an error when dequeue is called on an empty queue', () => {
        expect(queue.dequeue).to.throw(Error);
    });

    it('should throw an error when peek is called on an empty queue', () => {
        expect(queue.peek).to.throw(Error);
    });

    describe('Given a queue with two elements', () => {
        let randomNumber;

        beforeEach(() => {
            randomNumber = chance.integer();
            queue.enqueue(randomNumber);
            queue.enqueue(chance.integer());
        });

        it('should remove and return the first element when dequeue() is called', () => {
            expect(queue.size()).to.equal(2);
            const element = queue.dequeue();
            expect(element).to.equal(randomNumber);
            expect(queue.size()).to.equal(1);
        });

        it('should return and not remove the first element when peek() is called', () => {
            expect(queue.size()).to.equal(2);
            const element = queue.peek();
            expect(element).to.equal(randomNumber);
            expect(queue.size()).to.equal(2);
        });
    });
});