import { print } from "introcs";

import { Node, toString } from "./Node";

export let main = async () => {

    let list: Node;
    let temp: Node;

    list = new Node();
    list.data = "C";
    temp = list;

    list = new Node();
    list.data = "N";
    list.next = temp;
    temp = list;

    list = new Node();
    list.data = "U";
    list.next = temp;

    print(list.data);
    print(list.next.data);
    print(list.next.next.data);

};

main();