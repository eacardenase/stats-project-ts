import fs from 'fs';

const matchesData = fs
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','));

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}

let manUnitedWins = 0;

for (let match of matchesData) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }

    if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
