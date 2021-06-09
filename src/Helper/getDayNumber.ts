export const getDayNumber = (day: string) => {
    switch (day) {
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thurday':
            return 4;
        case 'Friday':
            return 5;
        case 'Staturday':
            return 6;
        case 'Sunday':
            return 7;
        default:
            return 0;
    }
};
