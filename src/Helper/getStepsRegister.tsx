export const getStepsRegister = (user: string, active: number) => {
    if ((user === 'student' || user === 'parent') && (active === 2 || active === 3)) {
        return 2;
    } else if ((user === 'student' || user === 'parent') && (active === 4 || active === 5)) {
        return 3;
    } else if (user === 'teacher' && (active === 3 || active === 4)) {
        return 3;
    } else if (user === 'teacher' && (active === 5 || active === 6)) {
        return 5;
    } else if (user === 'teacher' && active === 7) {
        return 6;
    } else if (user === 'teacher' && (active === 9 || active === 10)) {
        return 8;
    } else if (user === 'teacher' && active === 8) {
        return 7;
    } else {
        return active;
    }
};
