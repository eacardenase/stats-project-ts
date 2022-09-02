import CsvFileReader from './CsvFileReader';
import MatchReader from './MatchReader';
import Summary from './Summary';
import WinsAnalysis from './analyzers/WinsAnalysis';
import ConsoleReport from './reporters/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winsAnalysis = new WinsAnalysis('Man United');
const consoleReporter = new ConsoleReport();

const matchesSummary = new Summary(winsAnalysis, consoleReporter);
matchesSummary.buildAndPrint(matchReader.matches);
