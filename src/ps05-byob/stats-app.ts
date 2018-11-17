/**
 * Author: 
 *
 * ONYEN: 
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */


import { print, csvToArray } from "introcs";
import { makeBracket } from "./bracket";

// Player Class
export class Player {
    team: string = "";
    season: number = 0;
    conference: string = "";
    winPercent: number = 0;
    avgPoints: number = 0;
    player: string = "";
    gamesPlayed: number = 0;
    gamesStarted: number = 0;
    avgMinutesPerGame: number = 0;
    fieldGoalPercent: number = 0; // field goals; all goals except free throws
    twoPointPercent: number = 0;
    threePointPercent: number = 0;
    freeThrowPercent: number = 0;
    avgReboundsPerGame: number = 0;
    avgAssistsPerGame: number = 0;
    avgStealsPerGame: number = 0;
    avgBlocksPerGame: number = 0;
    avgTurnoversPerGame: number = 0;
    avgPointsPerGame: number = 0;
    coach: string = "";
}

// Functional Interfaces
interface Predicate<T> {
    (item: T): boolean;
}    

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let data = await csvToArray("NCAA Data", Player);

    // TODO: 2.8 Print Report -- using: getSeasonMVP, avgTotalPoints, and numAboveAvgPts

    // TODO: 3.3 Generate Bracket -- Use makeBracket

};

// TODO: 1.1-1.3 Filter, Map, Reduce

// TODO: 2.1 reduceByPoints

// TODO: 2.2 getSeasonMVP

// TODO: 2.3 mapToPoints

// TODO: 2.4 sum

// TODO: 2.5 avgTotalPoints

// TODO 2.6 aboveAvgPoints

// TODO 2.7 numAboveAvgPoints

// TODO: 3.1 playerScorer

// TODO 3.2 winner

main();