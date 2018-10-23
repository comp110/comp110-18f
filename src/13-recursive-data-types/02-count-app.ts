import { print } from "introcs";
import { List, cons, first, rest } from "./list";

// TODO
let count = (list: List): number => {
    return 0;
};

export let main = async () => {
    
    // Establish a List of values
    let names = cons("Rameses", cons("Carol", null));

    // Print the number of values in the List
    print(count(names));

};

main();