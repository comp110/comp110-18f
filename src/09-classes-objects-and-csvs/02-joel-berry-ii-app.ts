import { print, csvToArray } from "introcs";

class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    points: number = 0;
    fouls: number = 0;
}

export let main = async()  => {
    let data = await csvToArray("Select Data", Game);
    print(data[0]);
    print([1, 2, 3]);
    print(["hello", "", "world"]);
    print([true, false]);
    print(data);
    print("hi");
};

main();