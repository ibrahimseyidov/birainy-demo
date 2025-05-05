export interface ServiceItem {
    id: string;
    title: string;
    isExpanded?: boolean;
    children?: ServiceItem[];
  }
  
  export interface ServiceContent {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface ServiceData {
    services: ServiceItem[];
    contents: Record<string, ServiceContent>;
  }