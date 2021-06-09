const createOption = (value: string | number, label: string) => ({ label, value })

export const monthsOptions = [
    createOption(0, 'January'),
    createOption(1, 'February'),
    createOption(2, 'March'),
    createOption(3, 'April'),
    createOption(4, 'May'),
    createOption(5, 'June'),
    createOption(6, 'July'),
    createOption(7, 'August'),
    createOption(8, 'September'),
    createOption(9, 'October'),
    createOption(10, 'November'),
    createOption(11, 'December')
]
