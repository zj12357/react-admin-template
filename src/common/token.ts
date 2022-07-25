/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

const tokenKey = 'token';

export default Object.freeze({
    clearToken: () => {
        window.localStorage.removeItem(tokenKey);
    },
    setToken: (data: string) => {
        window.localStorage.setItem(tokenKey, data);
    },
    getToken: () => {
        return window.localStorage.getItem(tokenKey);
    },
});
