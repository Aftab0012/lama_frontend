export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

export const sidebarLinks = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/icons/users.svg',
    route: '/workspace',
    label: 'Workspace',
  },
  {
    imgURL: '/assets/icons/edit.svg',
    route: '/widget-configuration',
    label: 'Widget Configuation',
  },
  {
    imgURL: '/assets/icons/user.svg',
    route: '/profile',
    label: 'Profile',
  },
];

export const mediaTypes = [
  {
    imgURL: '/assets/images/youtube.png',
    action: 'Upload',
    description: 'Youtube video.',
  },
  {
    imgURL: '/assets/images/spotify.png',
    action: 'Upload',
    description: 'Spotify podcast.',
  },
  {
    imgURL: '/assets/images/rss.png',
    action: 'Upload',
    description: 'RSS feed.',
  },
  // Add more objects as needed
];
