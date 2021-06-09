export const getClassAndSections = (data: any): any => {
    if (data) {
        const classSection = data.map((item: any) => {
            const sectionNames = item.sections.map((subitem: any) => {
                return subitem.Section?.name;
            });
            return {
                [item.class.name]: sectionNames,
            };
        });
        return [...new Set(classSection.map((s: any) => JSON.stringify(s)))].map((s: any) => JSON.parse(s));
    }
};
