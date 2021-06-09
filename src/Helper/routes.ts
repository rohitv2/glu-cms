import { FC } from 'react';

export function createRouteObj(path: string, component: FC): object {
    return { path, component }
}
