import { useEffect } from 'react';

function useScrollTop(...deps: any[]) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, deps);
}

export default useScrollTop;
