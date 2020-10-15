function addWater () {
    if (this.waterLevel === this.maxWaterLevel) return;
    this.waterLevel++;
}

function makeCoffee(type = "Americano") {
    if (this.waterLevel === 0) return `Please add water`;
    this.waterLevel--;
    return `An ${type} made with ${this.beans} beans`;
}





function makeCoffeeMachine(beans, maxWaterLevel = 5) {
   const coffeeMachine = {};
   // properties
   coffeeMachine.beans = beans;
   coffeeMachine.waterLevel = 0;
   coffeeMachine.maxWaterLevel = maxWaterLevel;
   // methods
   coffeeMachine.addWater = addWater;
   coffeeMachine.makeCoffee = makeCoffee;

   return coffeeMachine;
}

module.exports = makeCoffeeMachine;