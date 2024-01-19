import Vehicle from "./Vehicle.js"

export default class Car extends Vehicle {
    
    constructor(data) {
        super(data);

        this.speed = 20;

        console.log("car speed", this.speed)
    }
}