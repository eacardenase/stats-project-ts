import CsvFileReader from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export default class MatchReader extends CsvFileReader<MatchData> {
    public mapRow(row: string[]): MatchData {
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
    }
}
