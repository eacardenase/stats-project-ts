import { MatchData } from '../MatchData';
import { IAnalyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

export default class WinsAnalysis implements IAnalyzer {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let countOfWins = 0;

        for (let match of matches) {
            if (
                match[1] === this.teamName &&
                match[5] === MatchResult.HomeWin
            ) {
                countOfWins++;
            }

            if (
                match[2] === this.teamName &&
                match[5] === MatchResult.AwayWin
            ) {
                countOfWins++;
            }
        }

        return `Team ${this.teamName} won ${countOfWins} games.`;
    }
}
