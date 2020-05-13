/**
 * 日历生成
 * @param initialDate 2020/5/1
 */
export interface CalendarThis {
    description: string;
    initialDate?: string;
    year: string;
    month: string;
    monthList: any[];
    init: () => void;
    generate: (week: number | undefined, monthDate1: string) => void;
    validDate: (date: string) => boolean;
    getDateString(year: number, month: number, date: number): string;
    getDateParams: (timestamp?: string | undefined) => any;
}
export default function Calendar(this: CalendarThis, initialDate?: string): void;
