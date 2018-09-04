import { print, random, promptString } from "introcs";

export let main = async () => {

    let question = await promptString("Ask a Yes/No Question");
    
    let response = "";
    
    // TODO: Move this logic to its own function
    let responseCode = random(0, 2);
    if (responseCode === 0) {
        response = "Most definitely not.";
    } else {
        if (responseCode === 1) {
            response = "Ask again later.";
        } else {
            response = "It is certain.";
        }
    }

    print(response);

};

main();