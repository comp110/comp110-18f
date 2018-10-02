import { print, promptString, promptNumber } from "introcs";

import { Pizza } from "./Pizza";

export let main = async () => {

    print("Welcome to Alfredo's Pizza!");
    print("May I take your order?");

    let order: Pizza[] = [];

    let isOrdering = true;
    while (isOrdering) {
        // Construct Pizza
        let pizza = new Pizza();
        pizza.size = await promptString("What size? small, medium, large");
        pizza.extraCheese = await promptString("Extra cheese? yes / no") === "yes";
        pizza.toppings = await promptNumber("How many toppings?");
        // Append Pizza to order
        order[order.length] = pizza;
        // Add another Pizza?
        isOrdering = await promptString("Order another? yes / no") === "yes";
    }

    print("The order is...");
    // TODO 1: Print the order

    print("The first Pizza is...");
    // TODO 2: Print the 1st pizza at index 0

    print("The first Pizza's size is...");
    // TODO 3: Print the 1st pizza's size

};

let orderPrice = (pizzas: Pizza[]): number => {
    // TODO: Calculate the total price of an array of Pizzas
    return 0;
};

main();