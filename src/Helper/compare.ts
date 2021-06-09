import { ClassType } from '../Types';

export function isRecorded(type: ClassType): boolean {
    return type === 'recorded'
}

export function isLive(type: ClassType): boolean {
    return type === 'live'
}

export function isUpcoming(type: ClassType): boolean {
    return type === 'upcoming'
}
