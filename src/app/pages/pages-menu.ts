import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES (coming soon)',
    group: true,
  },
  {
    title: 'Accounts',
    icon: 'lock-outline',
    children: [
      {
        title: 'Create Account',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title:"Upload Finances",
    icon: 'lock-outline',
    link: '/auth/register',
  },
  {
    title:"Upload Statstics",
    icon: 'lock-outline',
    link: '/auth/register',
  },
  {
    title:"Add time",
    icon: 'lock-outline',
    link: '/auth/register',
  },
];
