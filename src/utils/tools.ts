import type { RcFile } from 'antd/es/upload';

/**
 * @description: 判断数据类型 ;
 * @param {*}
 * @return {*}
 */

export const isObject = (value: unknown): value is Record<any, any> =>
    value !== null &&
    Object.prototype.toString.call(value) === '[object Object]';
export const isFunction = (value: unknown): value is Function =>
    typeof value === 'function';
export const isString = (value: unknown): value is string =>
    typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean =>
    typeof value === 'boolean';
export const isNumber = (value: unknown): value is number =>
    typeof value === 'number';
export const isUndef = (value: unknown): value is undefined =>
    typeof value === 'undefined';

export const isArray = (value: unknown): value is Array<any> =>
    value !== null &&
    Object.prototype.toString.call(value) === '[object Array]';
/**
 * @Description:  检查时间;
 * @Param:  ;
 * @Return:  ;
 *
 */
export function isDate(val: unknown): val is Date {
    return (
        Object.prototype.toString.call(val) === '[object Date]' &&
        !isNaN((val as Date).getTime())
    );
}

/**
 * @description: 判断设备 ;
 * @param {*}
 * @return {*}
 */

export const os = (function () {
    let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet =
            /(?:iPad|PlayBook)/.test(ua) ||
            (isAndroid && !/(?:Mobile)/.test(ua)) ||
            (isFireFox && /(?:Tablet)/.test(ua)) ||
            (isChrome && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
    };
})();

/**
 * @description: 文档高度 ;
 * @param {*}
 * @return {*}
 */

export function getDocumentTop() {
    let bodyScrollTop = document.body ? document.body.scrollTop : 0;
    let documentScrollTop = document.documentElement
        ? document.documentElement.scrollTop
        : 0;
    return bodyScrollTop - documentScrollTop > 0
        ? bodyScrollTop
        : documentScrollTop;
}

/**
 * @description: 可视窗口高度 ;
 * @param {*}
 * @return {*}
 */
export function getWindowHeight() {
    let windowHeight = 0;

    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

/**
 * @description: 滚动条滚动高度 ;
 * @param {*}
 * @return {*}
 */
export function getScrollHeight() {
    let bodyScrollHeight = document.body ? document.body.scrollHeight : 0;
    let documentScrollHeight = document.documentElement
        ? document.documentElement.scrollHeight
        : 0;
    return bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight;
}

/**
 * @Description:  深度克隆;
 * @Param:  ;
 * @Return:  ;
 */

export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}

export function deepClone<T extends Record<string, any> | null | undefined>(
    obj: T,
): T {
    if (!isDef(obj)) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item)) as unknown as T;
    }

    if (typeof obj === 'object') {
        const to = {} as Record<string, any>;
        Object.keys(obj).forEach((key) => {
            to[key] = deepClone(obj[key]);
        });

        return to as T;
    }

    return obj;
}

/**
 * @Description:  生成随机数范围;
 * @Param:  ;
 * @Return:  ;
 */
export function range(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * @description: class添加，删除，切换 ;
 * @param {*}
 * @return {*}
 */
// 检查元素是否有class
export const hasClass = (ele: HTMLElement, className: string) => {
    return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

// 元素添加class
export const addClass = (ele: HTMLElement, className: string) => {
    if (!hasClass(ele, className)) ele.className += ' ' + className;
};

// 元素移除class
export const removeClass = (ele: HTMLElement, className: string) => {
    if (hasClass(ele, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
};

// 切换元素的class
export const toggleClass = (ele: HTMLElement, className: string) => {
    if (!ele || !className) {
        return;
    }
    let classString = ele.className;
    const nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
        classString += '' + className;
    } else {
        classString =
            classString.substring(0, nameIndex) +
            classString.substring(nameIndex + className.length);
    }
    ele.className = classString;
};

/**
 * @Description:  是否是手机设备;
 * @Param:  ;
 * @Return:  ;
 */

export const isMobile = () => {
    const regMobileAll =
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    return regMobileAll.test(window.navigator.userAgent);
};

/**
 * @Description:  等待时间;
 * @Param:  ;
 * @Return:  ;
 */
export const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

/**
 * @Description:  antd预览图片转base64;
 * @Param:  ;
 * @Return:  ;
 */
export const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

/**
 * @Description: 隐藏中间数字 ;
 * @Params: ;
 * @Return:  ;
 */
export const hideMiddleNumber = (
    value: string | number,
    front: number = 3,
    behind: number = 4,
    stars: number = 4,
): string => {
    value = String(value);
    const length = value.length;
    return (
        value.substring(0, front) +
        '*'.repeat(stars) +
        value.substring(length - behind)
    );
};

/**
 * @Description: 处理金额，保留4位小数不四舍五入，小数结尾不能是0;
 * @Params:  ;
 * @Return:  ;
 */
export function formatCurrency(num: string, decimal: number = 4) {
    let index = num.indexOf('.');
    if (index !== -1) {
        const splitList = num.split('.');
        num =
            splitList[0] +
            '.' +
            splitList[1].substring(0, decimal).replace(/0+?$/, '');
    } else {
        num = num.substring(0);
    }
    return Number(num);
}
