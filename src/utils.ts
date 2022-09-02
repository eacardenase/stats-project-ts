export const dateStringToDate = (dateString: string): Date => {
    const [date, month, year] = dateString
        .split('/')
        .map((value: string): number => +value);

    return new Date(year, month - 1, date);
};
