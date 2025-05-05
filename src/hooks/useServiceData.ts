import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useServiceStore } from '../store/serviceStore';
import { ServiceItem } from '@/types/serviceTypes';

export const useServiceData = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const processingUrlParamsRef = useRef(false);
  
  const { 
    services, 
    activeTabId, 
    setActiveSection, 
    setActiveService,
    getActiveContent 
  } = useServiceStore();

  const activeContent = getActiveContent();

  useEffect(() => {
    const idParam = searchParams.get('id');
    const tabParam = searchParams.get('tab');
    
    if (idParam) {
      setActiveSection(idParam);
      setActiveService(idParam, tabParam || undefined);
    }
  }, [searchParams, setActiveService, setActiveSection]);

  const handleSetActiveSection = (id: string) => {
    // Önce state'i güncelle
    setActiveSection(id);
    setActiveService(id);
    
    // Sonra URL'yi güncelle - işlem sürecini işaretle
    processingUrlParamsRef.current = true;
    const params = new URLSearchParams();
    params.set('id', id);
    router.push(`?${params.toString()}`);
  };

  const handleSetActiveService = (childId: string) => {
    const parts = childId.split('-');
    const sectionId = parts[0];
    const tabIndex = parts.length > 1 ? parts[1] : undefined;
    
    setActiveSection(sectionId);
    setActiveService(sectionId, tabIndex);
    
    const params = new URLSearchParams();
    params.set('id', sectionId);
    
    if (tabIndex) {
      params.set('tab', tabIndex);
    }
    
    router.push(`?${params.toString()}`);
  };
  const getExpandIcon = (item: ServiceItem) => {
    if (!item.children || item.children.length === 0) return null;
    return item.isExpanded ? '−' : '+';
  };

  const handleTabClick = (tabId: string) => {
    const parts = tabId.split('-');
    const sectionId = parts[0];
    const tabIndex = parts[1]; 
    
    setActiveSection(sectionId);
    
    setActiveService(sectionId, tabIndex);
    
    console.log("Tab seçildi:", sectionId, tabIndex); 
  };

  return {
    services,
    activeContent,
    activeTabId,
    handleTabClick,
    handleSetActiveSection,
    handleSetActiveService,
    getExpandIcon
  };
};