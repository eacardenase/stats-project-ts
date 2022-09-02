import fs from 'fs';

export default class CsvFileReader {
    public data: string[][] = [];

    constructor(private fileName: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','));
    }
}
