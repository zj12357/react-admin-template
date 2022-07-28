/*
 * @version:  ;
 * @description: 请求成功，返回数据，请求失败，异常处理 ;
 * @autor: Full
 * @date: Do not edit
 */
import { useState } from 'react';
import { ResponseData } from '@/types/api/common';

export default function useHttp<T, P = any>(
    api: (params?: P) => Promise<ResponseData<T>>, //请求
    defaultError: string = '请求错误,请稍后重试', //默认错误的提示
) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});
    const [errMsg, setErrmsg] = useState(defaultError);

    const fetchData = () => {
        return api()
            .then((res: ResponseData<T>) => {
                if (res.code === 200) {
                    setResponse(res);
                } else {
                    setErrmsg(errMsg || res.msg);
                }
                return res;
            })
            .catch(() => {
                setErrmsg(errMsg);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading,
        response,
        errMsg,
        fetchData,
    };
}
