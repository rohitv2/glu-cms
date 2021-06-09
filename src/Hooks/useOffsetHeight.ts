import { RefObject, useEffect, useMemo, useState } from 'react';

function useOffsetHeight(ref: RefObject<HTMLElement>): number {
    const [offsetHeight, setOffsetHeight] = useState(0)

    useEffect(() => {
        if (ref && ref.current) {
            setOffsetHeight(ref.current.offsetHeight)
        }
    }, [ref])

    return useMemo(() => offsetHeight, [offsetHeight])
}

export default useOffsetHeight
