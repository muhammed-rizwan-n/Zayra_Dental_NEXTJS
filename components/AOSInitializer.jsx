'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [pathname]);

  return null;
}