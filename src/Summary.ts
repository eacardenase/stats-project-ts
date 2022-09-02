import { MatchData } from './MatchData';
import WinsAnalysis from './analyzers/WinsAnalysis';
import HtmlReport from './reporters/HtmlReport';

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

    public static winsAnalysisWithHtmlReport(teamName: string): Summary {
        return new Summary(new WinsAnalysis(teamName), new HtmlReport());
    }

    public buildAndPrint(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    }
}
