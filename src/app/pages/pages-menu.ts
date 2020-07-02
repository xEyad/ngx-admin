import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الرئيسية',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'أجرائات',
    group: true,
  },
  {
    title: 'الحسابات',
    icon: 'people-outline',
    children: [
      {
        title: 'أصنع حساب',
        link: '/pages/register',
      },
      {
        title: 'تحديث كلمة المرور',
        link: '/pages/update',
      },
      {
        title: 'تعيين كلمة مرور',
        link: '/pages/reset',
      },
    ],
  },
  {
    title:"أضف ماليات",
    icon: 'trending-up-outline',
    link: '/pages/uploadFinances',
  },
  {
    title:"أضف أحصائيات",
    icon: 'percent-outline',
    link: '/pages/uploadStatstics',
  },
  {
    title:"أضف وقت",
    icon: 'clock-outline',
    link: '/pages/addTime',
  },
  {
    title:"أضف خبر",
    icon: 'radio-outline',
    link: '/pages/addNews',
  },
];
