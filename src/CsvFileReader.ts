import fs from 'fs';

import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export default class CsvFileReader {
    public data: MatchData[] = [];

    constructor(private fileName: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map((row: string[]): MatchData => {
                const [
                    matchDate,
                    homeTeam,
                    awayTeam,
                    homePoints,
                    awayPoints,
                    winner,
                    arbiter,
                ] = row;

                return [
                    dateStringToDate(matchDate),
                    homeTeam,
                    awayTeam,
                    +homePoints,
                    +awayPoints,
                    winner as MatchResult, // type assertion
                    arbiter,
                ];
            });
    }
}
