export class LoggerHelper {

    static debug(...items: any[]): void {
        console.debug('[DEBUG]', ...items)
    }

    static info(...items: any[]): void {
        console.log(...items)
    }
}