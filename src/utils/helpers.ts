import { ServiceItem } from '@/types/serviceTypes';

export const findServiceById = (services: ServiceItem[], id: string): ServiceItem | null => {
  for (const service of services) {
    if (service.id === id) {
      return service;
    }
    
    if (service.children && service.children.length > 0) {
      for (const child of service.children) {
        if (child.id === id) {
          return child;
        }
      }
    }
  }
  
  return null;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '+994 ($1) $2-$3');
};

export const getImagePath = (imageName: string): string => {
  return `/images/${imageName}`;
};