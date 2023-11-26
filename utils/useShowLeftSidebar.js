'use client';

import { usePathname } from 'next/navigation';

export const useShowLeftSidebar = () => {
  const pathname = usePathname();
  return pathname.includes('/workspace');
};
