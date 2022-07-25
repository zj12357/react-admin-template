import localforage from 'localforage';
export const setLocalStorage = (key: string, value: string) => {
    return localforage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
    return localforage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
    return localforage.removeItem(key);
};
