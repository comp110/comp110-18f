import { print } from "introcs";
import { Node, toString, cons, first, rest } from "./list";

export let main = () => {
    let words = cons("University", cons("North", cons("Carolina", null)));
    print(toString(words));

    let acronym = acronymify(words);
    print(toString(acronym));
};

let acronymify = (list: Node<string>): Node<string> => {
    // TODO
    return null;
};

main();