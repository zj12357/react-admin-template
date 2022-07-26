import localforage from 'localforage';
import store from 'store2';
const asyncSetLocalStorage = (key: string, value: string) => {
    return localforage.setItem(key, value);
};

const asyncGetLocalStorage = (key: string) => {
    return localforage.getItem(key);
};

const asyncRemoveLocalStorage = (key: string) => {
    return localforage.removeItem(key);
};
const asyncRemoveAllLocalStorage = () => {
    return localforage.clear();
};

const setLocalStorage = (key: string, value: any) => {
    store.set(key, value);
};

const getLocalStorage = (key: string) => {
    return store.get(key);
};

const removeLocalStorage = (key: string) => {
    store.remove(key);
};

const removeAllLocalStorage = () => {
    store.clear();
};

export {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    removeAllLocalStorage,
    asyncSetLocalStorage,
    asyncGetLocalStorage,
    asyncRemoveLocalStorage,
    asyncRemoveAllLocalStorage,
};
