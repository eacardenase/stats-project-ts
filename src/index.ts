import MatchReader from './MatchReader';
import Summary from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const matchesSummary = Summary.winsAnalysisWithHtmlReport('Man United');
matchesSummary.buildAndPrint(matchReader.matches);
