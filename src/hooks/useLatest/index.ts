import { useRef } from 'react';

//返回当前最新值
function useLatest<T>(value: T) {
    const ref = useRef(value);
    ref.current = value;

    return ref;
}

export default useLatest;
