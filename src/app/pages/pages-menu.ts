import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Actions',
    group: true,
  },
  {
    title: 'Accounts',
    icon: 'lock-outline',
    children: [
      {
        title: 'Create Account',
        link: '/pages/register',
      },
      {
        title: 'Request Password',
        link: '/pages/update',
      },
      {
        title: 'Reset Password',
        link: '/pages/reset',
      },
    ],
  },
  {
    title:"Upload Finances",
    icon: 'lock-outline',
    link: '/pages/uploadFinances',
  },
  {
    title:"Upload Statstics",
    icon: 'lock-outline',
    link: '/pages/uploadStatstics',
  },
  {
    title:"Add time",
    icon: 'lock-outline',
    link: '/pages/addTime',
  },
];
