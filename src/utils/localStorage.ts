import localforage from 'localforage';
export function setLocalStorage(key: string, value: string) {
    localforage.setItem(key, value);
}

export function getLocalStorage(key: string) {
    return localforage.getItem(key);
}

export function removeLocalStorage(key: string) {
    return localforage.removeItem(key);
}
