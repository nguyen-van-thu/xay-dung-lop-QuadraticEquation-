"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
class QuadraticEquation {
    constructor(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    get a() {
        return this._a;
    }
    get b() {
        return this._b;
    }
    get c() {
        return this._c;
    }
    getDiscriminant() {
        return (this._b * this._b) - (4 * this._a * this._c);
    }
    getRoot1() {
        return (-this._b - Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }
    getRoot2() {
        return (-this._b + Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }
    getRoot3() {
        return -this._b / (2 * this._a);
    }
    getBelta() {
        if (this.getDiscriminant() > 0) {
            console.log(`phuong trinh co 2 nghiem phan biet ${this.getRoot1()} va ${this.getRoot2()}`);
        }
        else if (this.getDiscriminant() == 0) {
            console.log(`phuong trinh co nghiem kep ${this.getRoot3()}`);
        }
        else {
            console.log(`phuong trinh vo nghiem`);
        }
    }
}
exports.QuadraticEquation = QuadraticEquation;
let quar = new QuadraticEquation(1, -3, 2);
quar.getBelta();
