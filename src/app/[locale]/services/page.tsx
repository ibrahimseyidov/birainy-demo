'use client'
import React, { useEffect } from 'react'
import { useServiceData } from '@/hooks/useServiceData';
import SideBar from '@/components/services/SideBar/SideBar';
import ServiceContent from '@/components/services/ServiceContent/ServiceContent';
import ServiceLayout from '@/components/layout/ServiceLayout/ServiceLayout';
import { useSearchParams } from 'next/navigation';
import { useServiceStore } from '@/store/serviceStore';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { activeContent } = useServiceData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { services } = useServiceStore();

  useEffect(() => {
    const idParam = searchParams.get('id');
    
    if (!idParam && services.length > 0) {
      const defaultId = services[0].id;
      const params = new URLSearchParams();
      params.set('id', defaultId);
      router.push(`?${params.toString()}`);
    }
  }, [router, searchParams, services]);

  return (
    <ServiceLayout>
      <SideBar />
      {activeContent && <ServiceContent content={activeContent} />}
    </ServiceLayout>
  )
}

export default Page