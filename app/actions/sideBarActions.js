export const IS_OPEN = 'IS_OPEN';
export const IS_CLOSE = 'IS_CLOSE';

export function setIsOpen () {
    return {
        type: IS_OPEN,
    }
}

export function isClose () {
    return {
        type: IS_CLOSE,
    }
}