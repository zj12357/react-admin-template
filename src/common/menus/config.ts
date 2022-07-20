import { DesktopOutlined } from '@ant-design/icons';

export interface MenuItem {
    itemKey: string;
    text: string;
    icon?: React.ReactNode;
    path?: string;
    items?: MenuItem[];
    component?: React.ComponentType<any>;
}

const MENU_CONFIG: MenuItem[] = [
    {
        itemKey: '1',
        text: 'app.menu.dashboard',
        icon: DesktopOutlined,
        items: [
            {
                itemKey: '1-1',
                text: 'app.menu.dashboard.workbeach',
                path: '/dashboard/workbeach',
            },
        ],
    },
];

export default MENU_CONFIG;
