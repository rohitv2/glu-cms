export const checkSchoolOrFreelancer = () => {
    const data = localStorage.getItem('toggleState');
    if (data) {
        if (data === 'isSchool') {
            return 'School';
        } else if (data === 'isPersonal') {
            return 'Freelancer';
        }
    }
};
