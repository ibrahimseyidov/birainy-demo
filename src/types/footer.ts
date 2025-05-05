export interface SocialMedia {
    name: 'insta' | 'in' | 'tiktok' 
    url: string;
  }
  
  export interface NavigationItem {
    name: string;
    url: string;
  }
  
  export interface Office {
    country: string;
    address: string;
  }
  
  export interface Contact {
    phones: string[];
    email: string;
  }
  
  export interface FooterData {
    title: string;
    followUs: string;
    socialMedia: SocialMedia[];
    navigation: NavigationItem[];
    offices: Office[];
    contact: Contact;
  }