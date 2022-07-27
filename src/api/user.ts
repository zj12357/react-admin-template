import request from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { UserInfo } from '@/types/api/user';

export const userLogin = () =>
    request.post<UserInfo, ResponseData<UserInfo>>('/api/login');
