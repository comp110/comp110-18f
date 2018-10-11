import { forward, left, right, moveTo, turnTo, setOnClick, setSpeed } from "introcs/turtle";

let turnAround = () => {
    left(Math.PI);
};

let tree = (x: number, y: number) => {
    moveTo(x, y);
    turnTo(-Math.PI / 2);
    branch(y / 6);
};

let growth = () => {
    return 0.3 + Math.random() * 0.5;
};

let rotation = () => {
    return (-.1 * Math.PI) + (Math.random() * 0.2 * Math.PI); 
};

let branch = (length: number) => {
    if (length < 5) {
        // Turn around
        turnAround();
    } else {
        forward(length);
        
        let leftBranchRotation = Math.PI / 6 + rotation();
        left(leftBranchRotation);
        branch(length * growth());
        right(leftBranchRotation);

        turnAround();

        let rightBranchRotation = Math.PI / 6 + rotation();
        right(rightBranchRotation);
        branch(length * growth());
        left(rightBranchRotation);        
        forward(length);
    }
};

setSpeed(1);
setOnClick(tree);