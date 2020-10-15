const makeCoffeeMachine = require("./coffee-machine.js")

describe("makeCoffeeMachine", () => {
    test("Should return an object", () => {
        expect(typeof makeCoffeeMachine()).toBe("object");
    })

    test("Should have a beans property", () => {
        const morningCoffee = makeCoffeeMachine("Arabica");
        expect(morningCoffee).toHaveProperty("beans");
        expect(morningCoffee.beans).toBe("Arabica");
    })

    test("Should have a water level property, instantiated to 0", () => {
        const morningCoffee = makeCoffeeMachine("Arabica");
        expect(morningCoffee).toHaveProperty("waterLevel");
        expect(morningCoffee.waterLevel).toBe(0);
    })

    test("Should have a max water level property, set as 5 by default but can be passed as an arg", () => {
        const morningCoffee = makeCoffeeMachine("Arabica");
        expect(morningCoffee).toHaveProperty("maxWaterLevel");
        expect(morningCoffee.maxWaterLevel).toBe(5);
        const midMorningCoffee = makeCoffeeMachine("Liberica", 10);
        expect(midMorningCoffee.maxWaterLevel).toBe(10);
    })
})

// <----------------METHODS-------------->

describe("makeCoffeeMachine methods", () => {
    const morningCoffee = makeCoffeeMachine("Arabica", 3);
    // add water method
    test("Should have an add water method", () => {
        expect(morningCoffee).toHaveProperty("addWater");
        expect(typeof morningCoffee.addWater).toBe("function");

    })
    test("Add water should increase water level by 1 each time it is called", () => {
        morningCoffee.addWater();
        expect(morningCoffee.waterLevel).toBe(1);
        morningCoffee.addWater();
        expect(morningCoffee.waterLevel).toBe(2);
        morningCoffee.addWater();
        expect(morningCoffee.waterLevel).toBe(3);
    })
    test("Add water should not increase water level past its max water level", () => {
        morningCoffee.addWater();
        morningCoffee.addWater();
        expect(morningCoffee.waterLevel).toBe(3);
    })
    // make coffee method
    const lunchCoffee = makeCoffeeMachine("Java");
    test("Should have a make coffee method", () => {
        expect(lunchCoffee).toHaveProperty("makeCoffee");
        expect(typeof lunchCoffee.makeCoffee).toBe("function");
    })
    test("Should return `please add water` if water level is 0", () => {
        expect(lunchCoffee.makeCoffee()).toBe("Please add water");
    })
    test("Should return `An Espresso made with <insert-beans> when invoked with espresso`", () => {
        lunchCoffee.addWater();
        lunchCoffee.addWater();
        expect(lunchCoffee.makeCoffee("Espresso")).toBe("An Espresso made with Java beans");
    })
    test("Should return `An Espresso made with <insert-beans> when invoked with espresso`", () => {
        expect(lunchCoffee.makeCoffee()).toBe("An Americano made with Java beans");
    })
    test("Should reduce the water level by 1 each time its called. But not below 0", () => {
        expect(lunchCoffee.waterLevel).toBe(0);
        expect(lunchCoffee.makeCoffee()).tqoBe(`Please add water`);
    })

})