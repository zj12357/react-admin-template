import request from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { ConfigType } from '@/types/api/config';

// 获取配置
export const getConfig = () =>
    request.post<ConfigType[], ResponseData<ConfigType[]>>('/api/config');
