import { IOutputTarget } from '../Summary';

export default class ConsoleReport implements IOutputTarget {
    print(report: string): void {
        console.log(report);
    }
}
