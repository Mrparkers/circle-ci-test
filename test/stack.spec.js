import { expect } from 'chai';
import Stack from '../src/stack';
import Chance from 'chance';

describe('Stack', () => {
    let stack, chance;

    beforeEach(() => {
        stack = new Stack();
        chance = new Chance();
    });

    it('should initialize as an empty stack', () => {
        expect(stack.size()).to.equal(0);
    });

    it('should add an element when push() is called', () => {
        const randomNumber = chance.integer();
        stack.push(randomNumber);
        expect(stack.size()).to.equal(1);
        expect(stack.peek()).to.equal(randomNumber);
    });

    it('should throw an error when pop is called on an empty stack', () => {
        expect(stack.pop).to.throw(Error);
    });

    it('should throw an error when peek is called on an empty stack', () => {
        expect(stack.peek).to.throw(Error);
    });

    describe('Given a stack with two elements', () => {
        let randomNumber;

        beforeEach(() => {
            randomNumber = chance.integer();
            stack.push(chance.integer());
            stack.push(randomNumber);
        });

        it('should remove and return the topmost element when pop() is called', () => {
            expect(stack.size()).to.equal(2);
            const element = stack.pop();
            expect(element).to.equal(randomNumber);
            expect(stack.size()).to.equal(1);
        });

        it('should return and not remove the topmost element when peek() is called', () => {
            expect(stack.size()).to.equal(2);
            const element = stack.peek();
            expect(element).to.equal(randomNumber);
            expect(stack.size()).to.equal(2);
        });
    });
});