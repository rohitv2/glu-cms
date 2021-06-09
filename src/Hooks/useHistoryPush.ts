import { useHistory } from 'react-router';

function useHistoryPush() {
    const { push } = useHistory();
    return push;
}

export default useHistoryPush;
