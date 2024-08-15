'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@components/ui/Loader';
import './globals.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige al usuario a la página de dashboard
    router.push('/dashboard');
  }, [router]);

  return <Loader />;
}
