import { FooterData } from '@/types/footer';

export const footerData: FooterData = {
    title: "Bizimlə indi əlaqəyə keçin",
    followUs: "Bizi izləyin",
    socialMedia: [
      { name: "insta", url: "https://www.instagram.com/birainy_az/" },
      { name: "in", url: "https://www.linkedin.com/company/birainy" },
      { name: "tiktok", url: "https://www.tiktok.com/@birainy" }
    ],
    navigation: [
      { name: "Xidmətlərimiz", url: "/services" },
      { name: "Layihələr", url: "#" },
      { name: "Analitika", url: "#" },
      { name: "Bloq", url: "#" },
      { name: "Haqqımızda", url: "#" }
    ],
    offices: [
      { 
        country: "Azərbaycan", 
        address: "Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010"
      },
      {
        country: "Kanada",
        address: "Edmonton, Alberta"
      },
      {
        country: "Gürcüstan",
        address: "Tbilisi, Gürcüstan"
      }
    ],
    contact: {
      phones: ["+994 12 488 66 54", "+994 77 613 13 17"],
      email: "info@birainy.com"
    }
  };
