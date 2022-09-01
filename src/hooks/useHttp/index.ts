/*
 * @version:  ;
 * @description: 请求成功，返回数据，请求失败，异常处理 ;
 *
 * @date: Do not edit
 */
import { useState, useEffect } from 'react';
import { ResponseData } from '@/types/api/common';
import { useLatest } from '@/hooks';

export default function <P = any, T = any>(
    api: (params: P) => Promise<ResponseData<T>>, //请求
    successCallback?: (res: ResponseData<T>) => void, //成功回调
    failCallback?: (res: ResponseData<T>) => void, //失败回调
) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState<T>();
    const [error, setError] = useState();

    const latestLoading = useLatest(loading);
    const latestResponse = useLatest(response);
    const latestError = useLatest(error);

    const fetchData = (params = {} as P): Promise<ResponseData<T>> => {
        return api(params ?? ({} as P))
            .then((res: ResponseData<T>) => {
                if (res.code === 200) {
                    setResponse(res.data);
                    successCallback && successCallback(res);
                } else {
                    failCallback && failCallback(res);
                }
                return res ?? null;
            })
            .catch((err) => {
                setError(err);
                failCallback && failCallback(err);
                return err;
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading: latestLoading.current,
        response: latestResponse.current,
        error: latestError.current,
        fetchData,
    };
}
