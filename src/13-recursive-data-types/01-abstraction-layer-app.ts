import { print } from "introcs";

import { Node, cons, listify, toString } from "./Node";

export let main = async () => {

    let list: Node;
    
    list = cons("C", null);
    list = cons("N", list);
    list = cons("U", list);

    list = listify(["U", "N", "C", "!"]);
    print(toString(list));

};

main();