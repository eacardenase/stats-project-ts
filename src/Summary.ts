import { MatchData } from './MatchData';

export interface IAnalyzer {
    run(matches: MatchData[]): string;
}

export interface IOutputTarget {
    print(report: string): void;
}

export default class Summary {
    constructor(
        public analyzer: IAnalyzer,
        public outputTarget: IOutputTarget
    ) {}

    public buildAndPrint(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    }
}
