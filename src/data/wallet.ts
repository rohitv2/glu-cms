import { WalletActivityAccordionElement } from '../components/Accordions/types';
import { colors } from '../Styles/colors';
import { IBarChart } from '../components/Charts/BarChart';

export const activity: WalletActivityAccordionElement[] = [
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
    {
        title: 'Class',
        value: '-AED200',
        date: '19/07/20',
        time: '10.53am',
        description: 'How to structure narrative in fiction.',
        subject: 'English',
        name: 'Esme Stannard',
    },
];

export const barChart: IBarChart = {
    data: [
        {
            data: [100, 120, 60, 110, 20],
            color: colors.primary,
        },
    ],
    xAxisLabels: true,
    xAxisCategories: ['April', 'May', 'June', 'July', 'August']
};
