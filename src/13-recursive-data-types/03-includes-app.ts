import { print } from "introcs";
import { List, cons, first, rest } from "./list";

// TODO: Implement the includes Function
let includes = (list: List, search: string): boolean => {
    return false;
};

export let main = async () => {
    let names = cons("Carol", cons("Kevin Bacon", cons("Roy", null)));
    print(includes(names, "Kevin Bacon"));

};

main();