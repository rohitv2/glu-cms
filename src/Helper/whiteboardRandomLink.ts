export const whiteboardRandomLink = () => {
    const data = localStorage.getItem('auth');
    if (data) {
        return JSON.parse(data).email.split('@')[0] + Math.random().toString(36).substring(7);
    }else{
       return null
    }
};
