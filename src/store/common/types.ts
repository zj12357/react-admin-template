import { ReactNode } from 'react';
export interface CommonState {
    config: string;
    detailPageInfo: DetailPageInfo;
    detailPageMenuList: DetailPageMenuListItem[];
}

export interface DetailPageMenuListItem {
    path: string;
    name: string;
    icon?: ReactNode;
}

export interface DetailPageInfo {
    path: string;
    title: string;
}
