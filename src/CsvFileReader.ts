import fs from 'fs';

export default abstract class CsvFileReader<T> {
    public data: T[] = [];

    constructor(private fileName: string) {}

    public abstract mapRow(row: string[]): T;

    public read(): void {
        this.data = fs
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map(this.mapRow);
    }
}
