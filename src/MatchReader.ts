import { dateStringToDate } from './utils';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import CsvFileReader from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export default class MatchReader {
    public matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    public static fromCsv(fileName: string): MatchReader {
        return new MatchReader(new CsvFileReader(fileName));
    }

    public load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
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
