import { ReactNode } from 'react';
export interface CommonState {
    config: string;
    detailPagePath: string;
    detailPageMenuList: DetailPageMenuListItem[];
}

export interface DetailPageMenuListItem {
    path: string;
    name: string;
    icon?: ReactNode;
}
