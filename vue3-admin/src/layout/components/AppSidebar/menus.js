export const menusList = [
  {
    id: 1,
    icon: 'config',
    path: '/config/config',
    title: '配置中心',
    pid: -1,
  },
  {
    id: 2,
    icon: 'system',
    path: '/system',
    title: '培训教学',
    pid: -1,
  },
  {
    id: 3,
    path: '/system/user',
    title: '考试报名',
    icon: 'user',
    pid: 2,
  },
  {
    id: 4,
    path: '/system/role',
    title: '在线学习',
    icon: 'role',
    pid: 2,
  },
  {
    id: 5,
    path: '/system/menu',
    title: '离线资料下载',
    icon: 'tree',
    pid: 2,
  },
  {
    // 外链路由
    id: 6,
    path: 'https://meeting.tencent.com/',
    title: '在线学习',
    icon: 'link',
    pid: -1,
  },
];
