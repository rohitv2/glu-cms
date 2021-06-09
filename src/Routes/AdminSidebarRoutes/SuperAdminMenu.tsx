export const SuperAdminMenu: any[] = [
    {
        menuName: 'Dashboard',
        isExpandable: false,
        isOpen: false,
        menuList: [],
        routeName: '/dashboard',
    },
    {
        menuName: 'Admin',
        isExpandable: false,
        isOpen: false,
        menuList: [],
        routeName: '/dashboard/admin',
    },
    {
        menuName: 'Users',
        isExpandable: true,
        menuList: [
            {
                menuName: 'Student',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/students',
            },

            {
                menuName: 'Teacher',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/teachers',
            },
            {
                menuName: 'Parent',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/parents',
            },
            {
                menuName: 'Staff',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/staff',
            },
            {
                menuName: 'Permissions',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/permissions',
            },
        ],
        routeName: '',
    },
    {
        menuName: 'Academic',
        isExpandable: true,
        menuList: [
            {
                menuName: 'Sessions',
                isExpandable: false,
                menuList: [],
                routeName: '/sessions',
            },
            {
                menuName: 'Year-Group',
                isExpandable: false,
                menuList: [],
                routeName: '/year-group',
            },
            {
                menuName: 'Form-Group',
                isExpandable: false,
                menuList: [],
                routeName: '/form-group',
            },
            {
                menuName: 'Class Groups',
                isExpandable: false,
                menuList: [],
                routeName: '/class-groups',
            },
            {
                menuName: 'Subjects',
                isExpandable: false,
                menuList: [],
                routeName: '/subjects',
            },
            {
                menuName: 'Departments',
                isExpandable: false,
                menuList: [],
                routeName: '/departments',
            },
            // {
            //     menuName: 'Daily Attendance',
            //     isExpandable: false,
            //     menuList: [],
            //     routeName: '/daily-attendance',
            // },
            // {
            //     menuName: 'Event Calender',
            //     isExpandable: false,
            //     menuList: [],
            //     routeName: '/event-calender',
            // },
            // {
            //     menuName: 'Timetables',
            //     isExpandable: false,
            //     menuList: [],
            //     routeName: '/timetables',
            // },

            // {
            //     menuName: 'Syllabus',
            //     isExpandable: false,
            //     menuList: [],
            //     routeName: '/syllabus',
            // },
            // {
            //     menuName: 'Extra Curricular Activities',
            //     isExpandable: false,
            //     menuList: [],
            //     routeName: '/extra-curricular-activities',
            // },
            {
                menuName: 'Merits/Sanction',
                isExpandable: false,
                menuList: [],
                routeName: '/merits-sanctions',
            },
            {
                menuName: 'feedback',
                isExpandable: false,
                menuList: [],
                routeName: '/feedback',
            },
        ],
        routeName: '',
    },
    {
        menuName: 'Accounts',
        isExpandable: true,
        routeName: '',
        menuList: [
            // {
            //     menuName: 'Student Fee Manager',
            //     isExpandable: false,
            //     isOpen: false,
            //     menuList: [],
            //     routeName: '/studen-free-manager',
            // },
            // {
            //     menuName: 'Expense Category',
            //     isExpandable: false,
            //     isOpen: false,
            //     menuList: [],
            //     routeName: '/expense-category',
            // },
            // {
            //     menuName: 'Expense Manager',
            //     isExpandable: false,
            //     isOpen: false,
            //     menuList: [],
            //     routeName: '/expense-manager',
            // },
        ],
    },
    {
        menuName: 'Settings',
        isExpandable: true,
        menuList: [
            {
                menuName: 'System Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/system-settings',
            },
            {
                menuName: 'Website Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/website-settings',
            },
            {
                menuName: 'School Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/school-settings',
            },
            {
                menuName: 'Payment Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/payment-settings',
            },
            {
                menuName: 'SMTP Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/smtp-settings',
            },
            {
                menuName: 'About',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/about',
            },
        ],
        routeName: '',
    },
];
