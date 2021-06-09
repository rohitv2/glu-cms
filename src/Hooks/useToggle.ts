import { useCallback, useState } from 'react';

function useToggle(value: boolean): [boolean, () => void] {
    const [state, setState] = useState(value)

    const toggleState = useCallback(() => {
        setState((prevState: boolean) => !prevState)
    }, [])

    return [state, toggleState]
}

export default useToggle
